import { AppBar, Box, IconButton, ListItemText, Toolbar, Typography } from '@mui/material';
import styles from '../infoblock.module.css';
import React, { useContext, useEffect, useState } from 'react';
import AppContext, { isTrack, OBJECT_TYPE_FAVORITE, OBJECT_TYPE_POI } from '../../context/AppContext';
import headerStyles from '../../menu/trackfavmenu.module.css';
import { closeHeader } from '../../menu/actions/HeaderHelper';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import PoiManager from '../../manager/PoiManager';

export default function WptDetails({ setShowInfoBlock, isDetails = false, setOpenWptTab }) {
    const ctx = useContext(AppContext);

    const [wpt, setWpt] = useState(null);
    const [type, setType] = useState(null);

    useEffect(() => {
        if (ctx.selectedWpt) {
            setType({
                isPoi: ctx.currentObjectType === OBJECT_TYPE_POI && ctx.selectedWpt?.poi,
                isWpt: isTrack(ctx) && ctx.selectedWpt?.trackWptDetails,
                isFav: ctx.currentObjectType === OBJECT_TYPE_FAVORITE && ctx.selectedWpt?.markerCurrent,
            });
        }
    }, [ctx.selectedWpt, ctx.currentObjectType]);

    useEffect(() => {
        let newWpt = null;
        if (type?.isPoi) {
            const currentPoi = ctx.selectedWpt.poi;
            const { options: poiOptions, latlng } = currentPoi;
            newWpt = {
                name: poiOptions.title ? poiOptions.title : PoiManager.formattingPoiType(poiOptions.poiType),
                latlon: latlng,
            };
        }
        if (type?.isWpt) {
            newWpt = {
                name: ctx.selectedWpt.name,
                latlon: { lat: ctx.selectedWpt.lat, lon: ctx.selectedWpt.lon },
            };
        }
        if (type?.isFav) {
            let markerName = ctx.selectedWpt.markerCurrent.title;
            let currentWpt = ctx.selectedWpt.file.wpts.find((p) => p.name === markerName);
            if (currentWpt) {
                newWpt = {
                    name: currentWpt.name,
                    latlon: { lat: currentWpt.ext.lat, lon: currentWpt.ext.lon },
                };
            }
        }
        setWpt(newWpt);
    }, [type]);

    function closeDetails() {
        if (type?.isPoi) {
            closeHeader({ ctx });
        } else if (type.isWpt) {
            setOpenWptTab(true);
        } else if (type.isFav) {
            closeHeader({ ctx, setShowInfoBlock });
        }
        ctx.setSelectedWpt(null);
    }

    return (
        <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        variant="contained"
                        type="button"
                        className={styles.closeIcon}
                        onClick={() => closeDetails()}
                    >
                        {isDetails ? <BackIcon /> : <CloseIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            {wpt !== null && (
                <ListItemText>
                    <div className={styles.topContainer}>
                        <Typography variant="body2" noWrap className={styles.name}>
                            {wpt.name}
                        </Typography>
                    </div>
                </ListItemText>
            )}
        </Box>
    );
}
