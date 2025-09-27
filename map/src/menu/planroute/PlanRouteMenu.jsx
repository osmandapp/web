import React, { useContext, useEffect } from 'react';
import LocalTrackGroup from './LocalTrackGroup';
import AppContext, { OBJECT_TYPE_LOCAL_TRACK } from '../../context/AppContext';
import TracksManager, { createTrackGroups, getGpxFiles } from '../../manager/track/TracksManager';
import isEmpty from 'lodash-es/isEmpty';
import { HEADER_SIZE } from '../../manager/GlobalManager';
import gStyles from '../gstylesmenu.module.css';
import { AppBar, Box, Button, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import headerStyles from '../trackfavmenu.module.css';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import LocalGpxUploader from '../../frame/util/LocalGpxUploader';
import { closeHeader } from '../actions/HeaderHelper';
import cloneDeep from 'lodash-es/cloneDeep';

export function openSelectedLocalTrack(ctx) {
    const track = ctx.selectedLocalTrackObj;
    if (!track) {
        return;
    }
    const ref = ctx.localTracks.find((t) => t?.name === track.name);
    if (!ref) return;
    updateLocalTrack(ref, ctx, track);
    updateTrackInfoBlock(ctx);
    startEdit(ctx);
}

export function updateTrackInfoBlock(ctx) {
    ctx.setCurrentObjectType(OBJECT_TYPE_LOCAL_TRACK);
    ctx.setUpdateInfoBlock(true);
}

export function updateLocalTrack(ref, ctx, track) {
    ref.zoom = true;
    ref.selected = true;
    ref.wpts?.length > 0 && (ref.localRedrawWpts = true);
    ref.analysis = TracksManager.prepareAnalysis(ref.analysis);
    TracksManager.addDistance(ref); // recalc-distance-local
    ctx.setLocalTracks([...ctx.localTracks]);
    ctx.setSelectedGpxFile({ ...track });
}

export function startEdit(ctx) {
    if (ctx.createTrack?.enable && ctx.selectedGpxFile) {
        ctx.setCreateTrack({
            enable: true, // start-editor
            edit: true,
            closePrev: {
                file: cloneDeep(ctx.selectedGpxFile), // call startEdit() before modifications
            },
        });
    } else {
        ctx.setCreateTrack({
            enable: true, // start-editor
            edit: true,
        });
    }
}

export default function PlanRouteMenu() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const [, height] = useWindowSize();

    // get gpx files and create groups
    useEffect(() => {
        if (!isEmpty(ctx.listFiles)) {
            //get gpx files
            const files = getGpxFiles(ctx.listFiles);
            //get groups
            const trackGroups = createTrackGroups({ files, ctx });
            ctx.setTracksGroups(trackGroups);
        } else {
            ctx.setTracksGroups([]);
        }
    }, [ctx.listFiles, ctx.setListFiles]);

    function close() {
        closeHeader({ ctx });
    }

    useEffect(() => {
        if (
            ctx.selectedLocalTrackObj &&
            ctx.currentObjectType === OBJECT_TYPE_LOCAL_TRACK &&
            !ctx.createTrack?.enable
        ) {
            openSelectedLocalTrack(ctx);
        }
    }, [ctx.selectedLocalTrackObj]);

    return (
        <Box sx={{ height: `${height - HEADER_SIZE}px` }} className={gStyles.scrollMainBlock}>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton variant="contained" type="button" className={headerStyles.appBarIcon} onClick={close}>
                        <CloseIcon />
                    </IconButton>
                    <Typography id="se-configure-map-menu-name" component="div" className={headerStyles.title}>
                        {t('web:plan_route')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className={gStyles.scrollActiveBlock} sx={{ mt: 1, ml: -2 }}>
                <LocalTrackGroup />
                <ButtonGroup variant="text" sx={{ mt: 1, ml: 2 }}>
                    <Button
                        sx={{
                            ml: 3,
                            fontSize: 11,
                            textAlign: 'center',
                            maxWidth: '120px !important',
                            maxHeight: '40px',
                            minWidth: '120px !important',
                            minHeight: '40px',
                        }}
                        variant="contained"
                        component="span"
                        onClick={() => TracksManager.createTrack(ctx)}
                    >
                        {t('web:create_track')}
                    </Button>
                    <LocalGpxUploader>
                        <Button
                            sx={{
                                fontSize: 11,
                                ml: 2,
                                maxWidth: '120px !important',
                                maxHeight: '40px',
                                minWidth: '120px !important',
                                minHeight: '40px',
                            }}
                            variant="contained"
                            component="span"
                        >
                            {t('web:import_track')}
                        </Button>
                    </LocalGpxUploader>
                </ButtonGroup>
            </Box>
        </Box>
    );
}
