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

export const ALL_GROUP_MARKER = '_all_';

export default function TrackAnalyzerMenu() {
    const ctx = useContext(AppContext);

    const [, height] = useWindowSize();
    const { t } = useTranslation();

    const [startPoint, setStartPoint] = useState(null);
    const [finishPoint, setFinishPoint] = useState(null);
    const [startAnalysis, setStartAnalysis] = useState(false);
    const [tracksFolders, setTracksFolders] = useState(null);

    useEffect(() => {
        if (!startAnalysis || !tracksFolders || tracksFolders.length === 0) {
            return;
        }

        if (!startPoint && !finishPoint) {
            return;
        }
        getTracksBySegment().then((res) => {
            console.log(res);
        });
    }, [startAnalysis, tracksFolders]);

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
                            <PointField name={'start'} setPoint={setStartPoint} setStartAnalysis={setStartAnalysis} />
                            <PointField name={'finish'} setPoint={setFinishPoint} setStartAnalysis={setStartAnalysis} />
                        </Box>
                        <TrackAnalyzerTips />
                    </Box>
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
