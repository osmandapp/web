import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Button, Dialog, DialogTitle, DialogActions } from '@mui/material';

/*
    Example:

    onClick={() =>
        doubt({
            ctx,
            sure: ctx.createTrack?.enable !== true,
            text: 'Stop editing the current track?',
            callback: () => TracksManager.createTrack(ctx),
        })
    }
*/

export function doubt({ ctx, sure, text, callback }) {
    if (sure) {
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
                    <DialogTitle>{confirmation.text}</DialogTitle>
                    <DialogActions>
                        <Button onClick={() => setConfirmation(null)}>Cancel</Button>
                        <Button
                            sx={{ fontWeight: 'bold' }}
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
