import AppContext, { OBJECT_TYPE_CLOUD_TRACK } from '../../context/AppContext';
import {
    Alert,
    Divider,
    IconButton,
    LinearProgress,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Switch,
    Tooltip,
    Typography,
} from '@mui/material';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import Utils, { toHHMMSS } from '../../util/Utils';
import TrackInfo from './TrackInfo';
import TracksManager, { getAnalysisData, isEmptyTrack } from '../../manager/track/TracksManager';
import _, { isEmpty } from 'lodash';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { ReactComponent as TrackIcon } from '../../assets/icons/ic_action_polygom_dark.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import styles from '../trackfavmenu.module.css';
import TrackActions from '../actions/TrackActions';
import ActionsMenu from '../actions/ActionsMenu';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { closeTrack } from '../../manager/track/DeleteTrackManager';
import { isVisibleTrack, updateVisibleCache } from '../visibletracks/VisibleTracks';
import { useTranslation } from 'react-i18next';

const DEFAULT_DIST = 0;
const DEFAULT_TIME = '0:00';

export default function CloudTrackItem({ id = null, file, visible = null, isLastItem }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [, , mobile] = useWindowSize();

    const [loadingTrack, setLoadingTrack] = useState(false);
    const [error, setError] = useState('');
    const [hoverIconInfo, setHoverIconInfo] = useState(false);
    const [openActions, setOpenActions] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [openTrackInfo, setOpenTrackInfo] = useState(false);
    const [displayTrack, setDisplayTrack] = useState(null); // null -> true/false -> null
    const anchorEl = useRef(null);

    let checkedSwitch = getCheckedSwitch();
    const info = useMemo(() => <TrackInfo file={file} />, [file]);

    const dist = getDist(file);
    const time = getTime(file);
    const wptPoints = getWptPoints(file);

    function getDist(file) {
        let f = getAnalysisData(file);
        return f?.totalDistance ? (f?.totalDistance / 1000).toFixed(2) : DEFAULT_DIST;
    }

    function getTime(file) {
        let f = getAnalysisData(file);
        return f?.timeMoving ? toHHMMSS(f?.timeMoving) : DEFAULT_TIME;
    }

    function getWptPoints(file) {
        let f = getAnalysisData(file);
        return f?.wptPoints ? f?.wptPoints : null;
    }

    async function processDisplayTrack({ visible, setLoading, showOnMap = true, showInfo = false }) {
        checkedSwitch = !checkedSwitch;
        if (!showInfo) {
            updateVisibleCache({ visible: showOnMap, file });
        }
        if (!visible) {
            if (ctx.gpxFiles[file.name]?.url) {
                closeTrack(ctx, file);
            }
            setLoading(false);
        } else {
            await openTrack({ setProgressVisible: setLoading, showOnMap, showInfo });
        }
    }

    useEffect(() => {
        if (openTrackInfo) {
            processDisplayTrack({
                setLoading: setLoadingTrack,
                visible: true,
                showOnMap: true,
                showInfo: true,
            }).then();
        }
    }, [openTrackInfo]);

    useEffect(() => {
        if (displayTrack === true || displayTrack === false) {
            processDisplayTrack({ setLoading: setLoadingTrack, showOnMap: displayTrack, visible: displayTrack }).then();
            setDisplayTrack(null);
        }
    }, [displayTrack]);

    function showInfoBlock(hasUrl, file) {
        ctx.setUpdateInfoBlock(true);
        ctx.setCurrentObjectType(OBJECT_TYPE_CLOUD_TRACK);
        if (hasUrl) {
            ctx.setSelectedGpxFile({ ...ctx.gpxFiles[file.name], zoom: true, cloudRedrawWpts: true });
        } else {
            ctx.setSelectedGpxFile(Object.assign({}, file));
        }
    }

    async function openTrack({ setProgressVisible, showOnMap = true, showInfo = false }) {
        // cleanup edited localTrack
        if (ctx.createTrack?.enable && ctx.selectedGpxFile) {
            ctx.setCreateTrack({
                enable: false,
                closePrev: {
                    file: _.cloneDeep(ctx.selectedGpxFile),
                },
            });
        }
        // Watch out for file.url because this component was called using different data sources.
        // CloudTrackGroup uses ctx.tracksGroups (no-url) but VisibleGroup uses ctx.gpxFiles (url exists)
        if (ctx.gpxFiles[file.name]?.url) {
            if (showOnMap) {
                let newGpxFiles = Object.assign({}, ctx.gpxFiles);
                if (!isEmpty(ctx.selectedGpxFile) && !isVisibleTrack(ctx.selectedGpxFile)) {
                    newGpxFiles[ctx.selectedGpxFile.name].url = null;
                }
                newGpxFiles[file.name].showOnMap = showOnMap;
                ctx.setGpxFiles({ ...newGpxFiles });
            }
            if (showInfo) {
                showInfoBlock(true, file);
            }
        } else {
            setProgressVisible(true);
            const URL = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file`;
            const qs = `?type=${encodeURIComponent(file.type)}&name=${encodeURIComponent(file.name)}`;
            const oneGpxFile = {
                url: URL + qs,
                clienttimems: file.clienttimems,
                updatetimems: file.updatetimems,
                name: file.name,
                type: 'GPX',
            };
            const f = await Utils.getFileData(oneGpxFile);
            const gpxfile = new File([f], file.name, {
                type: 'text/plain',
            });
            const track = await TracksManager.getTrackData(gpxfile);
            setProgressVisible(false);
            if (!track) {
                setError('Something went wrong!');
            } else if (isEmptyTrack(track) === false) {
                track.name = file.name;
                Object.keys(track).forEach((t) => {
                    oneGpxFile[t] = track[t];
                });
                oneGpxFile.analysis = TracksManager.prepareAnalysis(oneGpxFile.analysis);

                if (showOnMap) {
                    oneGpxFile.showOnMap = showOnMap;
                }
                ctx.mutateGpxFiles((o) => (o[file.name] = oneGpxFile));
                if (showInfo) {
                    showInfoBlock(false, oneGpxFile);
                }
                setError('');
            } else {
                setError('Empty track is not supported!');
            }
        }
    }

    useEffect(() => {
        if (ctx.openedPopper && ctx.openedPopper !== anchorEl) {
            setOpenActions(false);
            setShowMenu(false);
        }
    }, [ctx.openedPopper]);

    function setTrackIconStyles() {
        let res = [];
        if (ctx.gpxFiles[file.name]?.url && ctx.gpxFiles[file.name]?.showOnMap) {
            res.push(styles.visibleIcon);
        } else {
            res.push(styles.icon);
        }
        return res.join(' ');
    }

    function getCheckedSwitch() {
        return ctx.gpxFiles[file.name]?.url ? file?.showOnMap : false;
    }

    return useMemo(() => {
        const trackName = TracksManager.getFileName(file);
        return (
            <>
                <div className={visible && styles.container}>
                    <Tooltip
                        title={visible ? '' : info}
                        arrow
                        placement={mobile ? 'bottom' : 'right'}
                        disableInteractive={visible}
                    >
                        <MenuItem
                            className={styles.item}
                            id={id ?? `se-cloud-track-${trackName}`}
                            onClick={() => {
                                setOpenTrackInfo(true);
                            }}
                            onMouseEnter={() => visible && setShowMenu(true)}
                            onMouseLeave={() => {
                                if (visible && !ctx.openedPopper?.current) {
                                    setShowMenu(false);
                                }
                            }}
                        >
                            <ListItemIcon className={setTrackIconStyles()}>
                                <TrackIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <MenuItemWithLines name={trackName} maxLines={2} />
                                <Typography variant="body2" className={styles.groupInfo} noWrap>
                                    {dist && `${dist} km`}
                                    {' · '}
                                    {time && `${time}`}
                                    {wptPoints && ` · ${wptPoints}`}
                                </Typography>
                            </ListItemText>
                            {(!visible || showMenu) && (
                                <div className={visible && styles.menuButtonContainer}>
                                    <Tooltip
                                        key={'action_menu_track'}
                                        title={t('shared_string_menu')}
                                        arrow
                                        placement="bottom-end"
                                    >
                                        <IconButton
                                            id={`se-actions-${trackName}`}
                                            // style={{ display: showMenu ? 'block' : 'none' }}
                                            className={styles.sortIcon}
                                            onMouseEnter={() => setHoverIconInfo(true)}
                                            onMouseLeave={() => setHoverIconInfo(false)}
                                            onClick={(e) => {
                                                setOpenActions(true);
                                                ctx.setOpenedPopper(anchorEl);
                                                e.stopPropagation();
                                            }}
                                            ref={anchorEl}
                                        >
                                            {hoverIconInfo ? <MenuIconHover /> : <MenuIcon />}
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            )}
                            {visible && (
                                <Switch
                                    id={`se-visible-switch-${trackName}`}
                                    sx={{ ml: '-25px' }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                    checked={checkedSwitch}
                                    onChange={(e) => {
                                        !file.local && setDisplayTrack(e.target.checked);
                                    }}
                                />
                            )}
                        </MenuItem>
                    </Tooltip>
                </div>
                {(!visible || !isLastItem) && <Divider className={styles.dividerItem} />}
                <ActionsMenu
                    open={openActions}
                    setOpen={setOpenActions}
                    anchorEl={anchorEl}
                    setShowMenu={visible && setShowMenu}
                    actions={
                        <TrackActions track={file} setDisplayTrack={setDisplayTrack} setOpenActions={setOpenActions} />
                    }
                />
                {loadingTrack ? <LinearProgress /> : <></>}
                {error !== '' && (
                    <Alert onClose={() => setError('')} severity="warning">
                        {error}
                    </Alert>
                )}
            </>
        );
    }, [
        info,
        mobile,
        file,
        loadingTrack,
        error,
        hoverIconInfo,
        openActions,
        showMenu,
        checkedSwitch,
        visible,
        dist,
        time,
        wptPoints,
        ctx,
        isLastItem,
        id,
    ]);
}
