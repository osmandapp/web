import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import EmptyLogin from '../login/EmptyLogin';
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
import TrackSegmentStat from './TrackSegmentStat';
import ThickDivider from '../components/dividers/ThickDivider';
import { addColorsToSegments } from './util/SegmentColorizer';

export const ALL_GROUP_MARKER = '_all_';
export const MAIN_BLOCK_SIZE = 340;

export default function TrackAnalyzerMenu() {
    const ctx = useContext(AppContext);

    const [, height] = useWindowSize();
    const { t } = useTranslation();

    const [startPoint, setStartPoint] = useState(null);
    const [finishPoint, setFinishPoint] = useState(null);
    const [startAnalysis, setStartAnalysis] = useState(false);
    const [tracksFolders, setTracksFolders] = useState(null);
    const [analyseResult, setAnalyseResult] = useState(null);

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

        getTracksBySegment().then((res) => {
            if (res?.files?.length > 0) {
                addColorsToSegments(res);
                setAnalyseResult({ ...res });
            }
            setStartAnalysis(false);
        });
    }, [startAnalysis, tracksFolders, startPoint, finishPoint]);

    // segments -> map
    useEffect(() => {
        if (analyseResult) {
            ctx.setTrackAnalyzer({
                ...ctx.trackAnalyzer,
                start: startPoint,
                finish: finishPoint,
                segmentsUpdateDate: new Date().getMilliseconds(),
                segments: analyseResult.segments,
            });
        } else {
            // clear segments from map
            ctx.setTrackAnalyzer({
                ...ctx.trackAnalyzer,
                segmentsUpdateDate: new Date().getMilliseconds(),
                segments: null,
            });
        }
    }, [analyseResult]);

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

    return (
        <>
            {ctx.loginUser ? (
                <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
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
                        </Toolbar>
                    </AppBar>
                    <Box>
                        <TracksSelect setTracksFolders={setTracksFolders} />
                        <Box sx={{ mx: 2, my: 2 }}>
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
                        </Box>
                        {analyseResult === null && <TrackAnalyzerTips />}
                    </Box>
                    {analyseResult !== null && (
                        <>
                            <ThickDivider />
                            <TrackSegmentStat analyseResult={analyseResult} height={height} />
                        </>
                    )}
                    <Box
                        minWidth={ctx.infoBlockWidth}
                        maxWidth={ctx.infoBlockWidth}
                        sx={{
                            overflowX: 'hidden !important',
                            overflowY: 'auto !important',
                            maxHeight: `${height - 300}px`,
                        }}
                    ></Box>
                </Box>
            ) : (
                <EmptyLogin />
            )}
        </>
    );
}
