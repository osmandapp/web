import { Button, Collapse, Grid, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { ExpandLess, ExpandMore, Insights } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import TracksManager from '../../context/TracksManager';
import drawerStyles from '../styles/DrawerStyles';
import { styled } from '@mui/material/styles';
import AppContext from '../../context/AppContext';

export default function PlanRouteMenu() {
    const styles = drawerStyles();
    const StyledInput = styled('input')({
        display: 'none',
    });

    const ctx = useContext(AppContext);

    const [open, setOpen] = useState(false);

    const fileSelected = () => async (e) => {
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.addEventListener('load', async () => {
                const track = await TracksManager.getTrackData(file);
                if (track) {
                    track.name = file.name;
                    TracksManager.addTrack({ ctx, track, overwrite: false });
                }
            });
            reader.readAsText(file);
        });
    };

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
                        <label htmlFor="se-upload-gpx">
                            <StyledInput
                                accept=".gpx"
                                id="se-upload-gpx"
                                multiple
                                type="file"
                                onChange={fileSelected(ctx)}
                            />
                            <Button
                                className={styles.button}
                                variant="contained"
                                component="span"
                                sx={{ fontSize: 11 }}
                            >
                                Import track
                            </Button>
                        </label>
                    </Grid>
                </Grid>
            </Collapse>
        </>
    );
}
