import contextMenuStyles from '../../styles/ContextMenuStyles';
import React, { useContext, useEffect, useState } from 'react';
import AppContext, { toHHMMSS } from '../../../context/AppContext';
import TracksManager from '../../../context/TracksManager';
import { sanitizeFileName } from '../../../util/Utils';
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
    Typography,
} from '@mui/material';
import {
    AccessTime,
    AvTimer,
    CloudUpload,
    Commit,
    Create,
    Download,
    Edit,
    ImportExport,
    RouteOutlined,
    Speed,
    Terrain,
} from '@mui/icons-material';

export default function GeneralInfo({ width, setOpenDescDialog }) {
    const styles = contextMenuStyles();
    const ctx = useContext(AppContext);

    const [enableEditName, setEnableEditName] = useState(false);
    const [fileName, setFileName] = useState(ctx.selectedGpxFile && ctx.selectedGpxFile.name);
    const [fileNameError, setFileNameError] = useState('');
    const [points, setPoints] = useState(0);
    const [distance, setDistance] = useState(0);
    const [timeRange, setTimeRange] = useState('');
    const [timeMoving, setTimeMoving] = useState('');
    const [upDownHill, setUpDownHill] = useState('');
    const [speed, setSpeed] = useState('');
    const [elevation, setElevation] = useState('');
    const [elevationSRTM, setElevationSRTM] = useState('');
    const [loadingSrtm, setLoadingSrtm] = useState(false);

    useEffect(() => {
        if (ctx.selectedGpxFile) {
            const info = ctx.selectedGpxFile?.analysis;
            getName();
            getPoints();
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
        if (ctx.selectedGpxFile.points) {
            setPoints(ctx.selectedGpxFile.points.length);
        } else {
            setPoints(TracksManager.getEditablePoints(ctx.selectedGpxFile).length);
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
                track.analysis.minElevationSrtm.toFixed(1) +
                    ' / ' +
                    track.analysis.avgElevationSrtm.toFixed(1) +
                    ' / ' +
                    track.analysis.maxElevationSrtm.toFixed(1) +
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
        if (info?.hasElevationData) {
            setElevation(
                info.minElevation.toFixed(1) +
                    ' / ' +
                    info.avgElevation?.toFixed(1) +
                    ' / ' +
                    info.maxElevation.toFixed(1) +
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
            const newName = sanitizeFileName(fileName) || sanitizeFileName(oldName);

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
            }

            ctx.selectedGpxFile.name = newName;
            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });

            TracksManager.saveTracks(ctx.localTracks, ctx);
            ctx.setLocalTracks([...ctx.localTracks]);

            setEnableEditName(false);
            setFileNameError('');
            return;
        }
    }

    const Description = ({ desc }) => {
        return (
            <ListItemText>
                <Box display="flex" alignItems="end">
                    <Typography
                        component={'span'}
                        variant="inherit"
                        sx={{
                            mt: -2,
                            maxHeight: 200,
                            fontSize: '0.875rem',
                            display: 'inline-block',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden !important',
                        }}
                    >
                        <div dangerouslySetInnerHTML={{ __html: `${desc}` }} />
                    </Typography>
                    <IconButton onClick={() => setOpenDescDialog(true)}>
                        <Edit fontSize="small" />
                    </IconButton>
                </Box>
                <Divider sx={{ mt: '6px', mb: '12px' }} light />
            </ListItemText>
        );
    };

    const EditName = () => {
        const isLetterUpperCase = (l) => l === l.toUpperCase() && l.toLowerCase() !== l.toUpperCase();
        const nUpperCaseLetters = fileName.split('').filter((c) => isLetterUpperCase(c)).length;
        const inputLength = fileName.length + nUpperCaseLetters + 3; // add extra space
        return (
            <div style={{ display: 'flex', maxWidth: '400px', flexWrap: 'wrap' }}>
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
                                sx={{ mb: '5px' }}
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

    const downloadGpx = async () => {
        let gpx = await TracksManager.getGpxTrack(ctx.selectedGpxFile);
        if (gpx) {
            gpx = gpx.data;
            const url = document.createElement('a');
            url.href = URL.createObjectURL(new Blob([gpx]));
            let name = TracksManager.prepareName(
                ctx.selectedGpxFile.name,
                ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK
            );
            url.download = `${name}.gpx`;
            url.click();
        }
    };

    const Elevation = () => {
        return (
            <>
                <Typography className={styles.info} variant="subtitle1" color="inherit">
                    {upDownHill && (
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
                    <MenuItem sx={{ ml: -2, mt: -1, mb: 0 }}>
                        <ListItemIcon>
                            <Terrain fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography sx={{ ml: 1 }} variant="body2" noWrap>
                                {`Elevation SRTM: ${elevationSRTM}`}
                                {elevationSRTM === '' && (
                                    <Link
                                        href="#"
                                        color="inherit"
                                        onClick={() => {
                                            TracksManager.getTrackWithAnalysis(
                                                TracksManager.GET_SRTM_DATA,
                                                ctx,
                                                setLoadingSrtm,
                                                ctx.selectedGpxFile.points
                                            ).then((track) => {
                                                getSRTMEle(track);
                                                ctx.setSelectedGpxFile({ ...track });
                                            });
                                        }}
                                    >
                                        recalculate
                                    </Link>
                                )}
                                {loadingSrtm ? <CircularProgress size={13} sx={{ ml: 1 }} /> : <></>}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                </Typography>
            </>
        );
    };

    return (
        <Box minWidth={width} maxWidth={width}>
            <Typography className={styles.info} variant="subtitle1" color="inherit">
                <div>{ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK ? EditName() : NoEditName()}</div>
                <div>
                    {ctx.selectedGpxFile?.metaData?.desc ? (
                        Description({ desc: ctx.selectedGpxFile?.metaData?.desc })
                    ) : (
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
                            <Divider sx={{ mt: '6px', mb: '12px' }} light />
                        </>
                    )}
                </div>
                {ctx.loginUser && ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && (
                    <Button
                        variant="contained"
                        sx={{ ml: '-0.5px !important' }}
                        className={styles.button}
                        onClick={() => {
                            ctx.selectedGpxFile.save = true;
                            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
                        }}
                    >
                        <CloudUpload fontSize="small" sx={{ mr: '7px' }} />
                        Save to cloud
                    </Button>
                )}
                {!ctx.createTrack && ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK && (
                    <Button
                        variant="contained"
                        sx={{ ml: '-0.5px !important' }}
                        className={styles.button}
                        onClick={() => {
                            TracksManager.addTrack(ctx, Object.assign({}, ctx.selectedGpxFile));
                            ctx.setUpdateContextMenu(true);
                        }}
                    >
                        <Create fontSize="small" sx={{ mr: '7px' }} />
                        Edit
                    </Button>
                )}
                <Button
                    variant="contained"
                    className={styles.button}
                    onClick={() => {
                        downloadGpx().then();
                    }}
                >
                    <Download fontSize="small" sx={{ mr: '3px' }} />
                    Download GPX
                </Button>
                <MenuItem sx={{ ml: -2 }}>
                    <ListItemIcon>
                        <RouteOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography sx={{ ml: 1 }} variant="body2" noWrap>
                            {`Distance: ${distance} km`}
                        </Typography>
                    </ListItemText>
                </MenuItem>
                {points !== 0 && (
                    <MenuItem sx={{ ml: -2, mt: -1 }}>
                        <ListItemIcon>
                            <Commit fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography sx={{ ml: 1 }} variant="body2" noWrap>
                                {`Points: ${points}`}
                                {ctx.processRouting ? <CircularProgress size={13} sx={{ ml: 1 }} /> : <></>}
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
            {(ctx.selectedGpxFile?.points?.length > 1 || ctx.selectedGpxFile?.url) && (
                <>
                    <Divider sx={{ mt: '6px', mb: '12px' }} />
                    <Elevation />
                </>
            )}
        </Box>
    );
}
