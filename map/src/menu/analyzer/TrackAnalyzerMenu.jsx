import { AppBar, Box, CircularProgress, Grid, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/ic_action_filter.svg';
import { ReactComponent as DesertIcon } from '../../assets/icons/ic_action_desert.svg';
import { ReactComponent as ChangePointsIcon } from '../../assets/icons/ic_action_change_navigation_points.svg';
import EmptyLogin from '../../login/EmptyLogin';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import TracksSelect from './TracksSelect';
import PointField from './PointField';
import TrackAnalyzerTips from './TrackAnalyzerTips';
import { closeHeader } from '../actions/HeaderHelper';
import headerStyles from '../trackfavmenu.module.css';
import { useTranslation } from 'react-i18next';
import { apiPost } from '../../util/HttpApi';
import { quickNaNfix } from '../../util/Utils';
import { getPointsForAnalysis } from './util/PointsManager';
import TrackSegmentStat, { getAltitudeStats, getOtherStats, getSpeedStats } from './TrackSegmentStat';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import { addColorsToSegments } from './util/SegmentColorizer';
import SortFilesButton, { TRACK_FILE_TYPE } from '../components/buttons/SortFilesButton';
import ActionsMenu from '../actions/ActionsMenu';
import SegmentParamsFilter from './SegmentParamsFilter';
import { TYPE_ANALYZER } from '../../frame/components/graph/GlobalGraph';
import ErrorBlock from './ErrorBlock';
import ColorBlock from '../../frame/components/other/ColorBlock';
import LoginContext from '../../context/LoginContext';

export const ALL_GROUP_MARKER = '_all_';
export const MAIN_BLOCK_SIZE = 340;
const SELECTED_FILTERS = 'selectedSegmentFilters';

export default function TrackAnalyzerMenu() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const [, height] = useWindowSize();
    const { t } = useTranslation();
    const anchorEl = useRef(null);

    const [startPoint, setStartPoint] = useState(null);
    const [finishPoint, setFinishPoint] = useState(null);
    const [startAnalysis, setStartAnalysis] = useState(false);
    const [tracksFolders, setTracksFolders] = useState(ctx.trackAnalyzer?.tracksFolders || null);
    const [analyseResult, setAnalyseResult] = useState(null);
    const [sortedSegments, setSortedSegments] = useState([]);
    const [segmentsResult, setSegmentsResult] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [showProcessing, setShowProcessing] = useState(false);
    const [emptySegResult, setEmptySegResult] = useState(false);

    const [openFiltersDialog, setOpenFiltersDialog] = useState(false);

    const speedStats = getSpeedStats({}, t, ctx);
    const altitudeStats = getAltitudeStats({}, t, ctx);
    const otherStats = getOtherStats({}, t, (x) => x, ctx);

    const allStats = [...speedStats, ...altitudeStats, ...otherStats];

    const [activeSegmentParams, setActiveSegmentParams] = useState(getFromLocalStorage);

    function getFromLocalStorage() {
        const storedFilters = localStorage.getItem(SELECTED_FILTERS);
        return storedFilters ? new Set(JSON.parse(storedFilters)) : new Set(allStats.map((stat) => stat.label));
    }

    function saveToLocalStorage() {
        localStorage.setItem(SELECTED_FILTERS, JSON.stringify(Array.from(activeSegmentParams)));
    }

    useEffect(() => {
        saveToLocalStorage();
    }, [activeSegmentParams]);

    useEffect(() => {
        let timer;
        if (processing) {
            timer = setTimeout(() => setShowProcessing(true), analyseResult ? 1000 : 0);
        } else {
            setShowProcessing(false);
        }
        return () => clearTimeout(timer);
    }, [processing]);

    useEffect(() => {
        if (sortedSegments) {
            ctx.setSortedSegments(sortedSegments);
        }
    }, [sortedSegments]);

    useEffect(() => {
        setSortedSegments(segmentsResult ? segmentsResult.files : []);
    }, [segmentsResult]);

    // map -> menu
    useEffect(() => {
        if (ctx.trackAnalyzer) {
            let start;
            let finish;
            if (ctx.trackAnalyzer.start !== startPoint) {
                start = ctx.trackAnalyzer.start;
                setStartPoint(start);
            }
            if (ctx.trackAnalyzer.finish !== finishPoint) {
                finish = ctx.trackAnalyzer.finish;
                setFinishPoint(finish);
            }

            if (start || finish) {
                setStartAnalysis(true);
            }
        }
    }, [ctx.trackAnalyzer]);

    //menu -> map
    useEffect(() => {
        if (!ctx.trackAnalyzer && (startPoint || finishPoint)) {
            ctx.setTrackAnalyzer({
                start: startPoint,
                finish: finishPoint,
                tracksFolders: tracksFolders,
            });
            return;
        }
        if (ctx.trackAnalyzer) {
            // clear segments without points from map
            if (!startPoint || !finishPoint) {
                ctx.setTrackAnalyzer({
                    ...ctx.trackAnalyzer,
                    start: startPoint,
                    finish: finishPoint,
                    segments: null,
                    segmentsUpdateDate: new Date().getMilliseconds(),
                });
                return;
            }
            // update points
            if (ctx.trackAnalyzer.start !== startPoint || ctx.trackAnalyzer.finish !== finishPoint) {
                ctx.setTrackAnalyzer({
                    ...ctx.trackAnalyzer,
                    start: startPoint,
                    finish: finishPoint,
                });
            }
        }
    }, [startPoint, finishPoint]);

    function isAnalysisReady() {
        let isReady = true;
        // check point
        if (!startPoint && !finishPoint) {
            isReady = false;
        }
        // check tracks
        if (!tracksFolders || tracksFolders.length === 0) {
            isReady = false;
        }
        if (!isReady && analyseResult) {
            setAnalyseResult(null);
        }
        return isReady;
    }

    useEffect(() => {
        if (!isAnalysisReady()) {
            return;
        }
        setProcessing(true);
        if (emptySegResult) {
            setEmptySegResult(false);
        }
        getTracksBySegment().then((res) => {
            if (res?.files?.length > 0) {
                addColorsToSegments(res);
                prepareSegmentsForSort(res);
                setAnalyseResult({ ...res });
                ctx.setExcludedSegments(new Set());
            } else {
                setEmptySegResult(true);
            }
            setStartAnalysis(false);
            setProcessing(false);
        });
    }, [startAnalysis, tracksFolders, startPoint, finishPoint]);

    useEffect(() => {
        if (emptySegResult) {
            setAnalyseResult(null);
        }
    }, [emptySegResult]);

    // segments -> map
    useEffect(() => {
        if (analyseResult) {
            setSegmentsResult((prev) => {
                return {
                    ...prev,
                    files: Object.values(analyseResult.segments).flat(),
                };
            });
            ctx.setTrackAnalyzer({
                ...ctx.trackAnalyzer,
                start: startPoint,
                finish: finishPoint,
                tracksFolders,
                segmentsUpdateDate: new Date().getMilliseconds(),
                segments: analyseResult.segments,
            });
            ctx.setGlobalGraph((prev) => {
                return {
                    ...prev,
                    show: true,
                    type: TYPE_ANALYZER,
                };
            });
        } else {
            clearSegmentsFromMap();
        }
    }, [analyseResult]);

    function clearSegmentsFromMap() {
        ctx.setTrackAnalyzer({
            ...ctx.trackAnalyzer,
            segmentsUpdateDate: new Date().getMilliseconds(),
            segments: null,
        });
        setSegmentsResult(null);
        ctx.setGlobalGraph((prev) => {
            return {
                ...prev,
                show: false,
                type: null,
            };
        });
    }

    function swapPoints() {
        setStartPoint(finishPoint);
        setFinishPoint(startPoint);
    }

    function prepareSegmentsForSort(analyseResult) {
        Object.keys(analyseResult.segments).forEach((segmentName) => {
            const segmentArray = analyseResult.segments[segmentName];
            const trackAnalysisArray = analyseResult.trackAnalysis[segmentName];
            const fileData = analyseResult.files[segmentName];

            if (
                Array.isArray(segmentArray) &&
                Array.isArray(trackAnalysisArray) &&
                segmentArray.length === trackAnalysisArray.length
            ) {
                segmentArray.forEach((segment, index) => {
                    segment.trackInd = index;
                    segment.allInd = segmentArray.length;
                    if (trackAnalysisArray[index]?.totalDist !== undefined) {
                        segment.totalDistance = trackAnalysisArray[index].totalDist;
                    }
                    if (trackAnalysisArray[index]?.duration !== undefined) {
                        segment.duration = trackAnalysisArray[index].duration;
                    }
                    if (fileData) {
                        Object.keys(fileData).forEach((key) => {
                            if (!(key in segment)) {
                                segment[key] = fileData[key];
                            }
                        });
                    }
                    // copy all stats to segment
                    segment.stats = trackAnalysisArray[index];
                });
            }
        });
    }

    async function getTracksBySegment() {
        const coordinates = getPointsForAnalysis({
            startPoint,
            finishPoint,
        });
        if (!coordinates) {
            return;
        }
        const folders = tracksFolders?.includes(ALL_GROUP_MARKER) ? null : removeNestedFolders(tracksFolders);

        const request = {
            points: coordinates,
            folders,
        };
        const response = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/get-tracks-by-seg`, request, {
            apiCache: true,
        });
        if (response.ok) {
            const text = await response.text();
            return JSON.parse(quickNaNfix(text));
        }
    }

    function removeNestedFolders(folders) {
        if (!folders) return null;

        const uniqueFolders = new Set(folders);
        for (const folder of folders) {
            uniqueFolders.forEach((parentFolder) => {
                if (folder !== parentFolder && folder.startsWith(parentFolder + '/')) {
                    uniqueFolders.delete(folder);
                }
            });
        }
        return Array.from(uniqueFolders);
    }

    function stopAnalyzer() {
        setProcessing(false);
        setStartAnalysis(false);

        clearPoints();
        setTracksFolders(null);

        clearSegmentsFromMap();
    }

    function clearPoints() {
        setStartPoint(null);
        setFinishPoint(null);
    }

    return (
        <>
            {ltx.loginUser ? (
                <Box
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                    sx={{
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                    }}
                >
                    <AppBar position="static" className={headerStyles.appbar}>
                        <Toolbar className={headerStyles.toolbar}>
                            <IconButton
                                variant="contained"
                                id="se-close-folder-button"
                                type="button"
                                className={headerStyles.appBarIcon}
                                onClick={() => closeHeader({ ctx })}
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography id="se-track-analyzer-menu" component="div" className={headerStyles.title}>
                                {t('web:tracks_analyzer')}
                            </Typography>
                            <SortFilesButton
                                type={TRACK_FILE_TYPE}
                                customGroup={segmentsResult}
                                setSortFiles={setSortedSegments}
                            />
                            <Tooltip
                                key={'track_segments_filters'}
                                title={t('shared_string_filters')}
                                arrow
                                placement="bottom-end"
                            >
                                <span>
                                    <IconButton
                                        component="span"
                                        variant="contained"
                                        type="button"
                                        ref={anchorEl}
                                        className={headerStyles.appBarIcon}
                                        onClick={() => setOpenFiltersDialog(true)}
                                    >
                                        <FilterIcon />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        </Toolbar>
                    </AppBar>
                    <Box sx={{ overflowX: 'hidden', overflowY: 'auto' }}>
                        <TracksSelect tracksFolders={tracksFolders} setTracksFolders={setTracksFolders} />
                        <Grid sx={{ mx: 2, width: '95%' }} container spacing={2}>
                            <Grid item sx={{ flexGrow: 1, mb: 2, ml: -2, mr: -1 }}>
                                <PointField
                                    name={'start'}
                                    point={startPoint}
                                    setPoint={setStartPoint}
                                    setStartAnalysis={setStartAnalysis}
                                />
                                <PointField
                                    name={'finish'}
                                    point={finishPoint}
                                    setPoint={setFinishPoint}
                                    setStartAnalysis={setStartAnalysis}
                                />
                            </Grid>
                            <Grid item sx={{ mr: 1, my: 4 }}>
                                <IconButton onClick={swapPoints}>
                                    <ChangePointsIcon />
                                </IconButton>
                            </Grid>
                        </Grid>

                        {analyseResult === null && !processing && !emptySegResult && <TrackAnalyzerTips />}
                    </Box>
                    <ThickDivider />
                    {showProcessing && (
                        <ErrorBlock
                            icon={<CircularProgress size={20} />}
                            text={t('web:processing_track_analyzer')}
                            onClick={stopAnalyzer}
                            btnText={t('shared_string_cancel')}
                            style={false}
                        />
                    )}
                    {emptySegResult && (
                        <ErrorBlock
                            icon={<DesertIcon />}
                            text={t('web:track_analyzer_empty_result_title')}
                            onClick={clearPoints}
                            desc={t('web:track_analyzer_empty_result_desc')}
                            btnText={'Clear points'}
                        />
                    )}
                    {analyseResult !== null && !showProcessing && (
                        <>
                            <TrackSegmentStat
                                height={height}
                                sortedSegments={sortedSegments}
                                activeSegmentParams={activeSegmentParams}
                            />
                        </>
                    )}
                    <ColorBlock color={'#f0f0f0'} />
                    <ActionsMenu
                        open={openFiltersDialog}
                        setOpen={setOpenFiltersDialog}
                        anchorEl={anchorEl}
                        actions={
                            <SegmentParamsFilter
                                allStats={allStats}
                                speedStats={speedStats}
                                altitudeStats={altitudeStats}
                                otherStats={otherStats}
                                activeSegmentParams={activeSegmentParams}
                                setActiveSegmentParams={setActiveSegmentParams}
                            />
                        }
                    />
                </Box>
            ) : (
                <EmptyLogin />
            )}
        </>
    );
}
