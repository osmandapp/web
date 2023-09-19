import { Button, Collapse, Grid, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { ExpandLess, ExpandMore, Insights } from '@mui/icons-material';
import React, { useContext, useState, useEffect } from 'react';
import TracksManager from '../../context/TracksManager';
import drawerStyles from '../styles/DrawerStyles';
import { styled } from '@mui/material/styles';
import AppContext from '../../context/AppContext';
import { useMutator } from '../../util/Utils';

export default function PlanRouteMenu() {
    const styles = drawerStyles();
    const StyledInput = styled('input')({
        display: 'none',
    });

    const ctx = useContext(AppContext);

    const [open, setOpen] = useState(false);
    const [uploadedFiles, mutateUploadedFiles] = useMutator({});

    useEffect(() => {
        for (const file in uploadedFiles) {
            TracksManager.addTrack({
                ctx,
                overwrite: false,
                track: uploadedFiles[file].track,
                selected: uploadedFiles[file].selected,
            });
            mutateUploadedFiles((o) => delete o[file]);
            break; // limit 1 file per 1 render
        }
    }, [uploadedFiles]);

    const fileSelected = () => async (e) => {
        const selected = e.target.files.length === 1;
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.addEventListener('load', async () => {
                const track = await TracksManager.getTrackData(file);
                if (track) {
                    track.name = file.name;
                    mutateUploadedFiles((o) => (o[file.name] = { track, selected }));
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
                        <label htmlFor="planroute-import-gpx">
                            <StyledInput
                                accept=".gpx"
                                id="planroute-import-gpx"
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
