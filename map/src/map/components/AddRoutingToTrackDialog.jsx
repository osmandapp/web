import { Button, Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    paper: { minWidth: '100vh' },
}));

export default function AddRoutingToTrackDialog({ setOpenAddRoutingToTrackDialog, setAddRoutingToTrack }) {
    const classes = useStyles();

    return (
        <Dialog classes={{ paper: classes.paper }} open={true}>
            <DialogTitle>Add segment with routing</DialogTitle>
            <DialogContent>
                <Typography variant="body2">
                    Are you sure you want to add a segment with routing? Previous track points will be added to one
                    segment. And you can`t edit its geometry.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenAddRoutingToTrackDialog(false)}>Cancel</Button>
                <Button
                    onClick={() => {
                        setAddRoutingToTrack(true);
                        setOpenAddRoutingToTrackDialog(false);
                    }}
                >
                    Continue
                </Button>
            </DialogActions>
        </Dialog>
    );
}
