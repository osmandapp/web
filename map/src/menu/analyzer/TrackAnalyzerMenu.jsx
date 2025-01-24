import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
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

export const ALL_GROUP_MARKER = '_all_';

export default function TrackAnalyzerMenu() {
    const ctx = useContext(AppContext);

    const [, height] = useWindowSize();
    const { t } = useTranslation();

    const [startPoint, setStartPoint] = useState(null);
    const [finishPoint, setFinishPoint] = useState(null);
    const [tracksFolders, setTracksFolders] = useState(null);
    const [segmentStat, setSegmentStat] = useState(null);

    async function getTracksBySegment() {
        const coordinates = [startPoint, finishPoint].map((point) => {
            return [point.lng, point.lat];
        });
        const response = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/get-tracks-by-seg`, coordinates, {
            apiCache: true,
        });
        if (response.ok) {
            const text = await response.text();
            const data = JSON.parse(quickNaNfix(text));
            console.log(data);
        }
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
                        <PointField name={'start'} setPoint={setStartPoint} />
                        <PointField name={'finish'} setPoint={setFinishPoint} />
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
