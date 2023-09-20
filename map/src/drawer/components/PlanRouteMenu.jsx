import { Button, Collapse, Grid, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { ExpandLess, ExpandMore, Insights } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import TracksManager from '../../context/TracksManager';
import drawerStyles from '../styles/DrawerStyles';
import AppContext from '../../context/AppContext';
import LocalGpxUploader from '../../map/components/LocalGpxUploader';

export default function PlanRouteMenu() {
    const styles = drawerStyles();

    const ctx = useContext(AppContext);

    const [open, setOpen] = useState(false);

    return (
        <>
            <MenuItem sx={{ mb: 1 }} onClick={() => setOpen(!open)}>
                <ListItemIcon>
                    <Insights fontSize="small" />
                </ListItemIcon>
                <ListItemText> Plan a route </ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {
                            <Button
                                className={styles.button}
                                sx={{ ml: 3, fontSize: 11, textAlign: 'center' }}
                                variant="contained"
                                component="span"
                                onClick={() => TracksManager.createTrack(ctx)}
                            >
                                Create new route
                            </Button>
                        }
                    </Grid>
                    <Grid item xs={6}>
                        <LocalGpxUploader>
                            <Button
                                className={styles.button}
                                variant="contained"
                                component="span"
                                sx={{ fontSize: 11 }}
                            >
                                Import track
                            </Button>
                        </LocalGpxUploader>
                    </Grid>
                </Grid>
            </Collapse>
        </>
    );
}
