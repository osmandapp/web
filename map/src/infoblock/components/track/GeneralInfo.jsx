import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { isRouteTrack } from '../../../context/AppContext';
import TracksManager, {
    hasSegments,
    applySrtmElevation,
    eligibleToApplySrtm,
    prepareDesc,
} from '../../../manager/track/TracksManager';
import { toHHMMSS } from '../../../util/Utils';
import {
    Box,
    CircularProgress,
    Divider,
    Link,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Tooltip,
    Typography,
} from '@mui/material';
import { AccessTime, AvTimer, Commit, ImportExport, RouteOutlined, Speed, Terrain } from '@mui/icons-material';
import RouteIcon from '@mui/icons-material/Route';
import {
    convertMeters,
    convertSpeedMS,
    getLargeLengthUnit,
    getSmallLengthUnit,
    getSpeedUnit,
    LARGE_UNIT,
} from '../../../menu/settings/units/UnitsConverter';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export function formatRouteInfo(props, ctx) {
    const res = ['Route: '];
    if (props?.overall?.distance) {
        const dst = convertMeters(props.overall.distance, ctx.unitsSettings.len, LARGE_UNIT).toFixed(1);
        res.push(<span key="info-dst">{dst + ` ${i18n?.t(getLargeLengthUnit(ctx))}`}</span>);
        res.push(', ');
    }
    if (props?.overall?.time) {
        const totalSeconds = Math.round(props.overall.time);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const paddedMinutes = minutes.toString().padStart(2, '0');
        res.push(<span key="info-time">{`${hours}:${paddedMinutes} min`}</span>);
        res.push(', ');
    }
    res[res.length - 1] = '';
    if (props?.overall?.routingTime) {
        res[res.length - 1] = '.';
        res.push(' Cost: ');
        res.push(props.overall.routingTime.toFixed(0));
    }
    return <span id="se-route-info">{res}</span>;
}

export default function GeneralInfo({ width }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

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

    const DESC_MAX_HEIGHT = 150;
    const ref = useRef(null);
    const preparedDesc = prepareDesc(getDesc(ctx.selectedGpxFile));

    function getDesc(file) {
        if (file?.metaData?.desc) {
            return file.metaData.desc;
        }
        if (file?.description) {
            return file.description;
        }
        return null;
    }

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
            setDistance(info?.totalDistance);
        } else {
            setDistance(0);
        }
    }

    function getSRTMEle(track) {
        if (track?.analysis?.srtmAnalysis) {
            setElevationSRTM(
                convertMeters(track.analysis.minElevationSrtm, ctx.unitsSettings.len)?.toFixed(0) +
                    ' / ' +
                    convertMeters(track.analysis.avgElevationSrtm, ctx.unitsSettings.len)?.toFixed(0) +
                    ' / ' +
                    convertMeters(track.analysis.maxElevationSrtm, ctx.unitsSettings.len)?.toFixed(0) +
                    ' ' +
                    t(getSmallLengthUnit(ctx))
            );
        } else {
            setElevationSRTM('');
        }
    }

    function getTimeMoving(info) {
        if (info?.timeMoving) {
            setTimeMoving(toHHMMSS(info?.timeMoving).split('.')[0]);
        } else {
            setTimeMoving('');
        }
    }

    function getUpDownHill(info) {
        if (info?.diffElevationUp != null && info?.diffElevationDown != null) {
            setUpDownHill(
                convertMeters(info?.diffElevationUp, ctx.unitsSettings.len).toFixed(0) +
                    '/' +
                    convertMeters(info?.diffElevationDown, ctx.unitsSettings.len).toFixed(0) +
                    ' ' +
                    t(getSmallLengthUnit(ctx))
            );
        } else {
            setUpDownHill('');
        }
    }

    function getElevation(info) {
        if (info?.hasElevationData && info.minElevation !== TracksManager.NAN_MARKER) {
            setElevation(
                convertMeters(info.minElevation, ctx.unitsSettings.len)?.toFixed(0) +
                    ' / ' +
                    convertMeters(info.avgElevation, ctx.unitsSettings.len)?.toFixed(0) +
                    ' / ' +
                    convertMeters(info.maxElevation, ctx.unitsSettings.len)?.toFixed(0) +
                    ' ' +
                    t(getSmallLengthUnit(ctx))
            );
        } else {
            setElevation('-');
        }
    }

    function getSpeed(info) {
        if (info?.hasSpeedData) {
            setSpeed(
                convertSpeedMS(info?.minSpeed, ctx.unitsSettings.speed)?.toFixed(0) +
                    ' / ' +
                    convertSpeedMS(info?.avgSpeed, ctx.unitsSettings.speed)?.toFixed(0) +
                    ' / ' +
                    convertSpeedMS(info?.maxSpeed, ctx.unitsSettings.speed)?.toFixed(0) +
                    ' ' +
                    t(getSpeedUnit(ctx))
            );
        } else {
            setSpeed('');
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
                </Box>
            </ListItemText>
        );
    };

    const Elevation = () => {
        return (
            <>
                {upDownHill !== '' || elevation !== '-' || (points > 1 && <Divider sx={{ mt: '13px', mb: '12px' }} />)}
                <Typography
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                        '& .MuiListItemIcon-root': {
                            minWidth: 'auto !important',
                        },
                    }}
                >
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
                <Typography
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                        '& .MuiListItemIcon-root': {
                            minWidth: 'auto !important',
                        },
                    }}
                >
                    <div>{preparedDesc && Description({ desc: preparedDesc })}</div>
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
                                    {formatRouteInfo(ctx.routeObject.getRouteProps(), ctx)}
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
                                    {`Distance: ${convertMeters(distance, ctx.unitsSettings.len, LARGE_UNIT)?.toFixed(1)} ${t(getLargeLengthUnit(ctx))}`}
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
        </>
    );
}
