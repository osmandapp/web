import contextMenuStyles from '../../styles/ContextMenuStyles';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { isLocalTrack, isCloudTrack, isRouteTrack } from '../../../context/AppContext';
import TracksManager, {
    hasSegments,
    isEmptyTrack,
    applySrtmElevation,
    eligibleToApplySrtm,
    prepareDesc,
    updateMetadata,
} from '../../../manager/track/TracksManager';
import { prepareFileName, toHHMMSS } from '../../../util/Utils';
import {
    Box,
    Button,
    CircularProgress,
    Divider,
    IconButton,
    Link,
    ListItemIcon,
    ListItemText,
    MenuItem,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material';
import {
    AccessTime,
    AvTimer,
    CloudUpload,
    Commit,
    Create,
    Edit,
    ImportExport,
    RouteOutlined,
    Speed,
    Terrain,
} from '@mui/icons-material';
import DescTrackDialog from '../../../dialogs/tracks/DescTrackDialog';
import RouteIcon from '@mui/icons-material/Route';
import { formatRouteInfo } from '../../../menu/route/RouteMenu';
import { saveTrackToLocalStorage } from '../../../manager/track/SaveTrackManager';
import { FREE_ACCOUNT } from '../../../manager/LoginManager';

export default function GeneralInfo({ width }) {
    const styles = contextMenuStyles();
    const ctx = useContext(AppContext);

    const [enableEditName, setEnableEditName] = useState(false);
    const [fileName, setFileName] = useState((ctx.selectedGpxFile && ctx.selectedGpxFile.name) ?? '');
    const [fileNameError, setFileNameError] = useState('');
    const [points, setPoints] = useState(0);
    const [pointsTotal, setPointsTotal] = useState(0);
    const [distance, setDistance] = useState(0);
    const [timeRange, setTimeRange] = useState('');
    const [timeMoving, setTimeMoving] = useState('');
    const [upDownHill, setUpDownHill] = useState('');
    const [speed, setSpeed] = useState('');
    const [elevation, setElevation] = useState('');
    const [elevationSRTM, setElevationSRTM] = useState('');
    const [loadingSrtm, setLoadingSrtm] = useState(false);
    const [openDescDialog, setOpenDescDialog] = useState(false);

    const DESC_MAX_HEIGHT = 150;
    const [descHeight, setDescHeight] = useState(0);
    const ref = useRef(null);
    const preparedDesc = prepareDesc(ctx.selectedGpxFile?.metaData?.desc);

    useEffect(() => {
        if (ref?.current) {
            setDescHeight(ref.current.clientHeight);
        }
    }, [ctx.selectedGpxFile?.metaData?.desc]);

    // auto-srtm
    useEffect(() => {
        if (eligibleToApplySrtm({ track: ctx.selectedGpxFile })) {
            const setLoading = setLoadingSrtm;
            const track = { ...ctx.selectedGpxFile };
            // mark now as already-implied (to skip dupe effects)
            ctx.setSelectedGpxFile((o) => ({ ...o, isSrtmApplied: true }));
            applySrtmElevation({ track, setLoading }).then((success) => ctx.setUnverifiedGpxFile(success));
        }
    }, [ctx.selectedGpxFile.name, ctx.selectedGpxFile.analysis]);

    useEffect(() => {
        if (ctx.selectedGpxFile) {
            const info = ctx.selectedGpxFile?.analysis;
            getName();
            getPoints();
            getPointsTotal();
            getTimeRange(info);
            getDistance(info);
            getTimeMoving(info);
            getUpDownHill(info);
            getSRTMEle(ctx.selectedGpxFile);
            getElevation(info);
            getSpeed(info);
        }
    }, [ctx.selectedGpxFile]);

    function getName() {
        setEnableEditName(false);
        setFileName(ctx.selectedGpxFile.name);
    }

    function getPoints() {
        const points = ctx.selectedGpxFile.points ?? TracksManager.getEditablePoints(ctx.selectedGpxFile);
        setPoints(points?.length ?? 0);
    }

    function getPointsTotal() {
        function countPoints(points) {
            let count = 0;
            points?.forEach((p) => (count += p.geometry?.length ?? 1));
            return count;
        }
        if (ctx.develFeatures) {
            let total = 0;
            const track = ctx.selectedGpxFile;
            total += countPoints(track.points);
            if (total === 0) {
                track.tracks?.forEach((t) => (total += countPoints(t.points)));
            }
            setPointsTotal(total);
        } else {
            setPointsTotal(0);
        }
    }

    function develRefreshLayers() {
        if (ctx.develFeatures) {
            ctx.selectedGpxFile.updateLayers = true;
            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        }
    }

    function getTimeRange(info) {
        if (info?.startTime && info?.startTime !== info?.endTime) {
            const stdate = new Date(info.startTime).toDateString();
            const edate = new Date(info.endTime).toDateString();
            setTimeRange(
                new Date(info.startTime).toDateString() +
                    ' ' +
                    new Date(info.startTime).toLocaleTimeString() +
                    ' - ' +
                    (edate !== stdate ? edate : '') +
                    new Date(info.endTime).toLocaleTimeString()
            );
        } else {
            setTimeRange('');
        }
    }

    function getDistance(info) {
        if (info?.totalDistance) {
            setDistance((info?.totalDistance / 1000).toFixed(1));
        } else {
            setDistance(0);
        }
    }

    function getSRTMEle(track) {
        if (track?.analysis?.srtmAnalysis) {
            setElevationSRTM(
                track.analysis.minElevationSrtm.toFixed(0) +
                    ' / ' +
                    track.analysis.avgElevationSrtm.toFixed(0) +
                    ' / ' +
                    track.analysis.maxElevationSrtm.toFixed(0) +
                    ' m'
            );
        } else {
            setElevationSRTM('');
        }
    }

    function getTimeMoving(info) {
        if (info?.timeMoving) {
            setTimeMoving(toHHMMSS(info?.timeMoving));
        } else {
            setTimeMoving('');
        }
    }

    function getUpDownHill(info) {
        if (info?.diffElevationUp && info?.diffElevationDown) {
            setUpDownHill(info?.diffElevationUp.toFixed(0) + '/' + info?.diffElevationDown.toFixed(0) + ' m');
        } else {
            setUpDownHill('');
        }
    }

    function getElevation(info) {
        if (info?.hasElevationData && info.minElevation !== TracksManager.NAN_MARKER) {
            setElevation(
                info.minElevation.toFixed(0) +
                    ' / ' +
                    info.avgElevation?.toFixed(0) +
                    ' / ' +
                    info.maxElevation.toFixed(0) +
                    ' m'
            );
        } else {
            setElevation('-');
        }
    }

    function getSpeed(info) {
        if (info?.hasSpeedData) {
            setSpeed(
                (info?.minSpeed * 3.6).toFixed(0) +
                    ' / ' +
                    (info?.avgSpeed * 3.6).toFixed(0) +
                    ' / ' +
                    (info?.maxSpeed * 3.6).toFixed(0) +
                    ' km/h'
            );
        } else {
            setSpeed('');
        }
    }

    function changeFileName(e) {
        if (e.key === 'Enter' || e.type === 'click') {
            const oldName = ctx.selectedGpxFile.name;
            const newName = prepareFileName(fileName) || prepareFileName(oldName);

            setFileName(newName); // update for next try

            if (newName === oldName) {
                setEnableEditName(false);
                setFileNameError('');
                return;
            }

            if (ctx.localTracks.find((t) => t.name === newName)) {
                setFileNameError('This name is already exists');
                return;
            }

            const currentTrack = ctx.localTracks.find((t) => t.name === oldName);

            if (currentTrack) {
                currentTrack.name = newName;
                updateMetadata({ file: currentTrack, name: newName });
            }

            ctx.selectedGpxFile.name = newName;
            updateMetadata({ file: ctx.selectedGpxFile, name: newName });

            // track rename have to be finished correctly in the editor component
            ctx.selectedGpxFile.oldName = oldName; // used by effect in LocalClientTrackLayer

            saveTrackToLocalStorage({ ctx, track: ctx.selectedGpxFile }); // ctx.localTracks might be modified there

            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });

            ctx.setLocalTracks([...ctx.localTracks]);

            setEnableEditName(false);
            setFileNameError('');
        }
    }

    const Description = ({ desc }) => {
        const html = desc.replaceAll('target="_self"', 'target="_blank"');
        return (
            <ListItemText>
                <Box display="flex" alignItems="end">
                    <Typography
                        ref={ref}
                        component={'span'}
                        variant="inherit"
                        sx={{
                            maxHeight: DESC_MAX_HEIGHT,
                            maxWidth: Number(width.replace('px', '')) - 100,
                            fontSize: '0.875rem',
                            display: 'inline-block',
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            direction: 'rtl',
                        }}
                    >
                        <div
                            id="se-infoblock-desc"
                            style={{ direction: 'ltr', marginLeft: '10px' }}
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </Typography>
                    {isLocalTrack(ctx) && (
                        <IconButton
                            sx={{ alignSelf: 'flex-start', mt: '-10px' }}
                            onClick={() => setOpenDescDialog(true)}
                        >
                            <Edit fontSize="small" />
                        </IconButton>
                    )}
                </Box>
                {descHeight === DESC_MAX_HEIGHT && (
                    <Link
                        href="#"
                        color="inherit"
                        sx={{ fontSize: '0.875rem' }}
                        onClick={() => {
                            setOpenDescDialog(true);
                        }}
                    >
                        Show more...
                    </Link>
                )}
                {/*<Divider sx={{ mt: '6px', mb: '12px' }} light />*/}
            </ListItemText>
        );
    };

    const EditName = () => {
        const isLetterUpperCase = (l) => l === l.toUpperCase() && l.toLowerCase() !== l.toUpperCase();
        const nUpperCaseLetters = fileName.split('').filter((c) => isLetterUpperCase(c)).length;
        const inputLength = fileName.length + nUpperCaseLetters + 3; // add extra space
        return (
            <div id={'se-track-' + fileName} style={{ display: 'flex', maxWidth: '400px', flexWrap: 'wrap' }}>
                {enableEditName && (
                    <div style={{ display: 'inline-block' }}>
                        <TextField
                            style={{
                                minWidth: '200px',
                                maxWidth: '400px',
                                width: inputLength + 'ch',
                                resize: 'none',
                                marginBottom: '5px',
                                fontSize: '16px',
                            }}
                            multiline
                            className={styles.nameInput}
                            name="title"
                            onChange={(e) => setFileName(e.target.value)}
                            value={fileName}
                            disabled={!enableEditName}
                            onKeyUp={(e) => changeFileName(e)}
                            autoFocus={true}
                            size="small"
                            error={!!fileNameError}
                            helperText={fileNameError}
                        />
                    </div>
                )}

                {!enableEditName && (
                    <div style={{ display: 'inline-block' }}>
                        <Typography
                            className={styles.name}
                            style={{ color: '#666666', fontWeight: 'bold' }}
                            variant="inherit"
                            maxWidth={'400px'}
                        >
                            {'* ' + fileName}
                            <IconButton
                                variant="contained"
                                type="button"
                                sx={{ mb: '5px', maxHeight: 20 }}
                                onClick={() => {
                                    setEnableEditName(true);
                                }}
                            >
                                <Edit fontSize="small" />
                            </IconButton>
                        </Typography>
                    </div>
                )}
                <div style={{ display: 'inline-block', marginLeft: '10px', marginBottom: '3px' }}>
                    <Box display="flex" justifyContent="flex-end">
                        {enableEditName && (
                            <Button
                                variant="contained"
                                style={{ backgroundColor: '#fbc73a' }}
                                onClick={(e) => changeFileName(e)}
                            >
                                Save
                            </Button>
                        )}
                        {enableEditName && (
                            <Button
                                sx={{ ml: 1 }}
                                variant="contained"
                                style={{ backgroundColor: '#aad3df' }}
                                onClick={() => {
                                    setFileName(ctx.selectedGpxFile.name);
                                    setEnableEditName(false);
                                    setFileNameError('');
                                }}
                            >
                                Cancel
                            </Button>
                        )}
                    </Box>
                </div>
            </div>
        );
    };

    const NoEditName = () => {
        return (
            <Typography
                className={styles.name}
                variant="inherit"
                style={{ color: '#666666', fontWeight: 'bold', marginBottom: '3px' }}
            >
                {ctx.selectedGpxFile?.name && TracksManager.prepareName(ctx.selectedGpxFile.name, false)}
            </Typography>
        );
    };

    const Elevation = () => {
        return (
            <>
                {upDownHill !== '' || elevation !== '-' || (points > 1 && <Divider sx={{ mt: '13px', mb: '12px' }} />)}
                <Typography className={styles.info} variant="subtitle1" color="inherit">
                    {upDownHill !== '' && (
                        <MenuItem sx={{ ml: -2, mt: -1 }}>
                            <ListItemIcon>
                                <ImportExport fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography sx={{ ml: 1 }} variant="body2" noWrap>
                                    {`Uphill/downhill: ${upDownHill}`}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {elevation !== '-' && (
                        <MenuItem sx={{ ml: -2, mt: -1 }}>
                            <ListItemIcon>
                                <Terrain fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography sx={{ ml: 1 }} variant="body2" noWrap>
                                    {`Elevation (min/avg/max): ${elevation}`}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {points > 1 && (
                        <MenuItem sx={{ ml: -2, mt: -1, mb: 0 }}>
                            <ListItemIcon>
                                <Terrain fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>
                                <Tooltip title="Elevation is calculated based on Satellite imagery of points" arrow>
                                    <Typography sx={{ ml: 1 }} variant="body2" noWrap>
                                        {`Elevation (Satellite): ${elevationSRTM}`}
                                        {elevationSRTM === '' && loadingSrtm === false && (
                                            <Link
                                                id={'se-link-srtm'}
                                                href="#"
                                                color="inherit"
                                                onClick={() => {
                                                    TracksManager.getTrackWithAnalysis(
                                                        TracksManager.GET_SRTM_DATA,
                                                        ctx,
                                                        setLoadingSrtm,
                                                        ctx.selectedGpxFile.points
                                                    ).then((track) => {
                                                        if (track) {
                                                            // getSRTMEle(track); // set by distinct Effect
                                                            ctx.setUnverifiedGpxFile(() => ({ ...track }));
                                                        }
                                                    });
                                                }}
                                            >
                                                recalculate
                                            </Link>
                                        )}
                                        {loadingSrtm ? (
                                            <CircularProgress id={'se-loadingSrtm'} size={13} sx={{ ml: 1 }} />
                                        ) : (
                                            <></>
                                        )}
                                    </Typography>
                                </Tooltip>
                            </ListItemText>
                        </MenuItem>
                    )}
                </Typography>
            </>
        );
    };

    return (
        <>
            <Box minWidth={width} maxWidth={width}>
                <Typography className={styles.info} variant="subtitle1" color="inherit">
                    <div>{isLocalTrack(ctx) ? EditName() : NoEditName()}</div>
                    <div>
                        {preparedDesc
                            ? Description({ desc: preparedDesc })
                            : isLocalTrack(ctx) && (
                                  <>
                                      <Link
                                          href="#"
                                          color="inherit"
                                          sx={{ fontSize: '0.875rem' }}
                                          onClick={() => {
                                              setOpenDescDialog(true);
                                          }}
                                      >
                                          • Add description
                                      </Link>
                                  </>
                              )}
                    </div>
                    {ctx.loginUser &&
                        ctx.accountInfo?.account !== FREE_ACCOUNT &&
                        (isLocalTrack(ctx) || isRouteTrack(ctx)) &&
                        isEmptyTrack(ctx.selectedGpxFile) === false && (
                            <>
                                <Button
                                    id="se-infoblock-button-save-to-cloud"
                                    variant="contained"
                                    sx={{ ml: '-0.5px !important' }}
                                    className={styles.button}
                                    onClick={() => {
                                        ctx.selectedGpxFile.save = true;
                                        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
                                    }}
                                >
                                    <CloudUpload fontSize="small" sx={{ mr: '7px' }} />
                                    Save to Cloud
                                </Button>
                                {ctx.createTrack?.cloudAutoSave && (
                                    <Button
                                        variant="contained"
                                        className={styles.button}
                                        onClick={() => {
                                            ctx.selectedGpxFile.save = true;
                                            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
                                            ctx.setCreateTrack({ ...ctx.createTrack, cloudAutoSave: false });
                                        }}
                                    >
                                        <CloudUpload fontSize="small" sx={{ mr: '7px' }} />
                                        Save as
                                    </Button>
                                )}
                            </>
                        )}
                    {!ctx.createTrack && (isCloudTrack(ctx) || isRouteTrack(ctx)) && (
                        <>
                            <Button
                                id="se-infoblock-button-edit-track"
                                variant="contained"
                                sx={{ ml: isRouteTrack(ctx) ? 0 : '-0.5px !important' }}
                                className={styles.button}
                                onClick={() => TracksManager.handleEditCloudTrack(ctx)}
                            >
                                <Create fontSize="small" sx={{ mr: '7px' }} />
                                {isCloudTrack(ctx) ? 'Edit Track' : 'Edit as track'}
                            </Button>
                            <Divider light sx={{ mt: 2, mb: 1 }} />
                        </>
                    )}
                    {points !== 0 && (
                        <MenuItem sx={{ ml: -2 }}>
                            <ListItemIcon>
                                <Commit fontSize="small" />
                            </ListItemIcon>
                            <ListItemText onClick={develRefreshLayers}>
                                <Typography sx={{ ml: 1 }} variant="body2" noWrap>
                                    {`Points: ${points}`}
                                    {pointsTotal > 0 && pointsTotal !== points && ` (${pointsTotal})`}
                                    {ctx.processRouting ? <CircularProgress size={13} sx={{ ml: 1 }} /> : <></>}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {isRouteTrack(ctx) && points >= 2 && (
                        <MenuItem sx={{ ml: -2, mt: -1 }}>
                            <ListItemIcon>
                                <RouteIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography sx={{ ml: 1 }} variant="body2" noWrap>
                                    {formatRouteInfo(ctx.routeObject.getRouteProps())}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {distance > 0 && (
                        <MenuItem sx={{ ml: -2, mt: -1 }}>
                            <ListItemIcon>
                                <RouteOutlined fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography sx={{ ml: 1 }} variant="body2" noWrap>
                                    {`Distance: ${distance} km`}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {timeRange && (
                        <MenuItem sx={{ ml: -2, mt: -1 }}>
                            <ListItemIcon>
                                <AccessTime fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography sx={{ ml: 1 }} variant="body2" noWrap>
                                    {`Time: ${timeRange}`}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {speed && (
                        <MenuItem sx={{ ml: -2, mt: -1 }}>
                            <ListItemIcon>
                                <Speed fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography sx={{ ml: 1 }} variant="body2" noWrap>
                                    {`Speed (min/avg/max): ${speed}`}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                    {timeMoving && (
                        <MenuItem sx={{ ml: -2, mt: -1 }}>
                            <ListItemIcon>
                                <AvTimer fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography sx={{ ml: 1 }} variant="body2" noWrap>
                                    {`Time moving: ${timeMoving}`}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    )}
                </Typography>
                {hasSegments(ctx.selectedGpxFile) && (
                    <>
                        <Elevation />
                    </>
                )}
            </Box>
            {openDescDialog && (
                <DescTrackDialog dialogOpen={openDescDialog} setDialogOpen={setOpenDescDialog} desc={preparedDesc} />
            )}
        </>
    );
}
