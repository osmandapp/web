import AppContext, { OBJECT_TYPE_CLOUD_TRACK } from '../../context/AppContext';
import {
    Alert,
    IconButton,
    LinearProgress,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Tooltip,
    Typography,
} from '@mui/material';
import { useContext, useEffect, useMemo, useState } from 'react';
import Utils, { toHHMMSS } from '../../util/Utils';
import TrackInfo from './TrackInfo';
import TracksManager, { isEmptyTrack } from '../../manager/TracksManager';
import _ from 'lodash';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { ReactComponent as TrackIcon } from '../../assets/icons/ic_action_polygom_dark.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import styles from './trackmenu.module.css';

export default function CloudTrackItem({ file, customIcon = null }) {
    const ctx = useContext(AppContext);

    const [, , mobile] = useWindowSize();

    const [loadingTrack, setLoadingTrack] = useState(false);
    const [error, setError] = useState('');
    const [hoverIconInfo, setHoverIconInfo] = useState(false);

    const info = useMemo(() => <TrackInfo file={file} />, [file]);

    const dist = file.details?.analysis?.totalDistance ? (file.details?.analysis?.totalDistance / 1000).toFixed(2) : 0;
    const time = file.details?.analysis?.timeMoving ? toHHMMSS(file.details?.analysis?.timeMoving) : '0:00';
    const points = file.details?.analysis?.points ? file.details?.analysis?.points : 0;

    const [displayTrack, setDisplayTrack] = useState(null); // null -> true/false -> null

    async function processDisplayTrack({ visible, setLoading }) {
        if (!visible) {
            deleteTrackFromMap();
            setLoading(false);
        } else {
            await addTrackToMap(setLoading);
        }
    }

    useEffect(() => {
        if (displayTrack === true || displayTrack === false) {
            processDisplayTrack({ setLoading: setLoadingTrack, visible: displayTrack });
            setDisplayTrack(null);
        }
    }, [displayTrack]);

    function deleteTrackFromMap() {
        ctx.mutateGpxFiles((o) => (o[file.name].url = null));
        if (ctx.selectedGpxFile?.name === file.name) {
            ctx.setCurrentObjectType(null);
        }
    }

    async function addTrackToMap(setProgressVisible) {
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
        if (file.url || ctx.gpxFiles[file.name]?.url) {
            // if (file.name !== ctx.selectedGpxFile.name) { ...
            ctx.setUpdateInfoBlock(true);
            ctx.setCurrentObjectType(OBJECT_TYPE_CLOUD_TRACK);
            ctx.setSelectedGpxFile({ ...ctx.gpxFiles[file.name], zoom: true, cloudRedrawWpts: true });
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
                const type = OBJECT_TYPE_CLOUD_TRACK;
                ctx.setCurrentObjectType(type);

                track.name = file.name;
                Object.keys(track).forEach((t) => {
                    oneGpxFile[t] = track[t];
                });
                oneGpxFile.analysis = TracksManager.prepareAnalysis(oneGpxFile.analysis);

                ctx.mutateGpxFiles((o) => (o[file.name] = oneGpxFile));
                ctx.setSelectedGpxFile(Object.assign({}, oneGpxFile));

                ctx.setUpdateInfoBlock(true);

                setError('');
            } else {
                setError('Empty track is not supported!');
            }
        }
    }

    return useMemo(() => {
        const trackName = TracksManager.getFileName(file);
        return (
            <>
                <Tooltip title={info} arrow placement={mobile ? 'bottom' : 'right'} disableInteractive>
                    <MenuItem
                        className={styles.item}
                        divider
                        id={'se-cloud-track-' + trackName}
                        onClick={() => setDisplayTrack(true)}
                    >
                        <ListItemIcon className={styles.icon}>
                            <TrackIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.groupName} noWrap>
                                {trackName}
                            </Typography>
                            <Typography variant="body2" className={styles.groupInfo} noWrap>
                                {dist && `${dist} km · `}
                                {time && `${time}`}
                                {points && ` · ${points}`}
                            </Typography>
                        </ListItemText>
                        <IconButton
                            className={styles.icon}
                            onMouseEnter={() => setHoverIconInfo(true)}
                            onMouseLeave={() => setHoverIconInfo(false)}
                        >
                            {hoverIconInfo ? <MenuIconHover /> : <MenuIcon />}
                        </IconButton>
                    </MenuItem>
                </Tooltip>
                {loadingTrack ? <LinearProgress /> : <></>}
                {error !== '' && (
                    <Alert onClose={() => setError('')} severity="warning">
                        {error}
                    </Alert>
                )}
            </>
        );
    }, [info, mobile, customIcon, file, loadingTrack, ctx.gpxFiles[file.name]?.url, error, hoverIconInfo]);
}
