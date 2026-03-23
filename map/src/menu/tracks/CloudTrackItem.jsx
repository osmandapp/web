import AppContext from '../../context/AppContext';
import {
    Alert,
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
    setTrackIconStyles,
} from '../../manager/track/TracksManager';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { ReactComponent as TrackIcon } from '../../assets/icons/ic_action_polygom_dark.svg';
import styles from '../trackfavmenu.module.css';
import TrackActions from '../actions/TrackActions';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { useTranslation } from 'react-i18next';
import FileShareIcon from '../share/FileShareIcon.jsx';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import ThreeDotsButton from '../../frame/components/btns/ThreeDotsButton';
import ActionsMenu from '../actions/ActionsMenu';
import { convertMeters, getLargeLengthUnit, LARGE_UNIT } from '../settings/units/UnitsConverter';
import { useTrackVisibility } from '../../util/hooks/menu/useTrackVisibility';

export default function CloudTrackItem({ id = null, file, visible = null, isLastItem, smartf = null }) {
    const ctx = useContext(AppContext);

    const [, , mobile] = useWindowSize();

    const { t } = useTranslation();

    const [loadingTrack, setLoadingTrack] = useState(false);
    const [error, setError] = useState('');
    const [openActions, setOpenActions] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const anchorEl = useRef(null);

    const { toggleVisibility, fileStorage, checkedSwitch } = useTrackVisibility({
        file,
        smartf,
        setLoading: setLoadingTrack,
        setError,
    });

    const info = useMemo(() => <TrackInfo file={file} />, [file]);
    const updateDetails = file?.details?.update;
    const loadingError = file?.details?.error;

    const dist = getDist(file);
    const time = getTime(file);
    const wptPoints = getWptPoints(file);
    const share = getShare(file, ctx);

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
                            onClick={() => toggleVisibility(true, { showInfo: true, zoomToTrack: true })}
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
                                <Typography
                                    id={`se-cloud-t-info-${trackName}`}
                                    component="div"
                                    variant="body2"
                                    className={styles.groupInfo}
                                    noWrap
                                >
                                    {share && <FileShareIcon />}
                                    {dist &&
                                        `${convertMeters(dist, ctx.unitsSettings.len, LARGE_UNIT)?.toFixed(2)} ${t(getLargeLengthUnit(ctx))}`}
                                    {time && ` · ${time}`}
                                    {wptPoints && ` · ${wptPoints}`}
                                    {updateDetails && ` · ${t('shared_string_loading')}...`}
                                    {loadingError && ` · Error`}
                                </Typography>
                            </ListItemText>
                            {(!visible || showMenu) && (
                                <div className={visible && styles.menuButtonContainer}>
                                    <ThreeDotsButton
                                        name={'action_menu_track'}
                                        tip={'shared_string_menu'}
                                        id={`se-actions-${trackName}`}
                                        setOpenActions={setOpenActions}
                                        anchorEl={anchorEl}
                                    />
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
                                        !file.local && toggleVisibility(e.target.checked);
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
                            setDisplayTrack={toggleVisibility}
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
