import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';

/*
    Example:

    onClick={() =>
        confirm({
            ctx,
            skip: ctx.createTrack?.enable !== true,
            text: 'Stop editing the current track?',
            callback: () => TracksManager.createTrack(ctx),
        })
    }
*/

export function confirm({ ctx, skip, text, callback }) {
    if (skip) {
        callback();
    } else {
        ctx.setGlobalConfirmation({ text, callback });
    }
    return true;
}

export function GlobalConfirmationDialog() {
    const ctx = useContext(AppContext);
    const confirmation = ctx.globalConfirmation;
    const setConfirmation = ctx.setGlobalConfirmation;

    return (
        <>
            {confirmation && (
                <Dialog open={!!confirmation} onClose={() => setConfirmation(null)}>
                    <DialogContent>{confirmation.text}</DialogContent>
                    <DialogActions sx={{ mb: 1, mr: 1 }}>
                        <Button
                            variant="contained"
                            size="small"
                            sx={{ backgroundColor: '#bdbdbd' }}
                            onClick={() => setConfirmation(null)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => {
                                setConfirmation(null);
                                confirmation.callback();
                            }}
                        >
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </>
    );
}
