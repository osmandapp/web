import AppContext from '../../context/AppContext';
import {
    Alert,
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
import TrackInfo from './TrackInfo';
import {
    getDist,
    getFileName,
    getShare,
    getTime,
    getWptPoints,
    openTrackOnMap,
    setTrackIconStyles,
    updateTracks,
} from '../../manager/track/TracksManager';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { ReactComponent as TrackIcon } from '../../assets/icons/ic_action_polygom_dark.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import styles from '../trackfavmenu.module.css';
import TrackActions from '../actions/TrackActions';
import ActionsMenu from '../actions/ActionsMenu';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { closeTrack } from '../../manager/track/DeleteTrackManager';
import { updateVisibleCache } from '../visibletracks/VisibleTracks';
import { useTranslation } from 'react-i18next';
import FileShareIcon from '../share/FileShareIcon.jsx';
import { getFileStorage, GPX } from '../../manager/GlobalManager';
import DividerWithMargin from '../components/dividers/DividerWithMargin';

export default function CloudTrackItem({ id = null, file, visible = null, isLastItem, smartf = null }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [, , mobile] = useWindowSize();

    const [fileStorage, setFileStorage] = useState(null);

    const [loadingTrack, setLoadingTrack] = useState(false);
    const [error, setError] = useState('');
    const [hoverIconInfo, setHoverIconInfo] = useState(false);
    const [openActions, setOpenActions] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [displayTrack, setDisplayTrack] = useState(null); // null -> true/false -> null
    const anchorEl = useRef(null);

    let checkedSwitch = fileStorage?.[file.name]?.url ? fileStorage[file.name]?.showOnMap : false;
    const info = useMemo(() => <TrackInfo file={file} />, [file]);

    const dist = getDist(file);
    const time = getTime(file);
    const wptPoints = getWptPoints(file);
    const share = getShare(file, ctx);

    useEffect(() => {
        if (!openActions) {
            setTimeout(() => document.activeElement?.blur(), 0);
        }
    }, [openActions]);

    useEffect(() => {
        const storage = getFileStorage({ ctx, smartf, type: GPX });
        setFileStorage(storage);
    }, [ctx, smartf]);

    async function processDisplayTrack({
        visible,
        setLoading,
        showOnMap = true,
        showInfo = false,
        zoomToTrack = false,
        smartf = null,
    }) {
        checkedSwitch = !checkedSwitch;
        if (!showInfo) {
            updateVisibleCache({ visible: showOnMap, file, smartf });
        }
        if (!visible) {
            if (fileStorage[file.name]?.url) {
                closeTrack(ctx, fileStorage[file.name], smartf);
                setFileStorage((prev) => {
                    return prev ? { ...prev, [file.name]: { ...prev[file.name], url: null } } : prev;
                });
            }
            setLoading(false);
        } else {
            await openTrackOnMap({
                file,
                setProgressVisible: setLoading,
                showOnMap,
                showInfo,
                zoomToTrack,
                smartf,
                ctx,
                setError,
            }).then((newGpxFiles) => {
                updateTracks(ctx, smartf, newGpxFiles);
            });
        }
    }

    // Display track on map (visible or not), add to visible cache
    useEffect(() => {
        if (displayTrack === true || displayTrack === false) {
            processDisplayTrack({
                setLoading: setLoadingTrack,
                showOnMap: displayTrack,
                visible: displayTrack,
                smartf,
            }).then();
            setDisplayTrack(null);
        }
    }, [displayTrack]);

    useEffect(() => {
        if (ctx.openedPopper && ctx.openedPopper !== anchorEl) {
            setOpenActions(false);
            setShowMenu(false);
        }
    }, [ctx.openedPopper]);

    return useMemo(() => {
        const trackName = getFileName(file);
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
                                processDisplayTrack({
                                    setLoading: setLoadingTrack,
                                    visible: true,
                                    showOnMap: true,
                                    showInfo: true,
                                    zoomToTrack: true,
                                    smartf,
                                }).then();
                            }}
                            onMouseEnter={() => visible && setShowMenu(true)}
                            onMouseLeave={() => {
                                if (visible && !ctx.openedPopper?.current) {
                                    setShowMenu(false);
                                }
                            }}
                        >
                            <ListItemIcon className={setTrackIconStyles({ file, styles, fileStorage })}>
                                <TrackIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <MenuItemWithLines name={trackName} maxLines={2} />
                                <Typography component="div" variant="body2" className={styles.groupInfo} noWrap>
                                    {share && <FileShareIcon />}
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
                {(!visible || !isLastItem) && <DividerWithMargin margin={'64px'} />}
                <ActionsMenu
                    open={openActions}
                    setOpen={setOpenActions}
                    anchorEl={anchorEl}
                    setShowMenu={visible && setShowMenu}
                    actions={
                        <TrackActions
                            track={file}
                            setDisplayTrack={setDisplayTrack}
                            setOpenActions={setOpenActions}
                            smartf={smartf}
                        />
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
