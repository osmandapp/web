import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { Button } from '@mui/material';
import { changeShareTypeFile } from '../../manager/ShareManager';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function DeleteShareFileDialog({
    dialogOpen,
    setDialogOpen,
    currentType,
    shareTypes,
    setSelectedShareType,
}) {
    const ctx = useContext(AppContext);

    const handleChangeType = async (type) => {
        await changeShareTypeFile({ file: ctx.shareFile.mainFile, shareType: type, ctx });
        setSelectedShareType(shareTypes[type]);
        setDialogOpen(false);
    };

    return (
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Change access</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Changing the status to <strong>Private</strong> will revoke access for all users.
                    <br />
                    <br />
                    To limit access to specific users, consider switching to <strong>Request Only</strong>.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {currentType !== shareTypes.request.key && (
                    <Button onClick={() => handleChangeType(shareTypes.request.key)}>{shareTypes.request.name}</Button>
                )}
                <Button onClick={() => setDialogOpen(false)} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => handleChangeType(shareTypes.private.key)} color="primary">
                    Apply
                </Button>
            </DialogActions>
        </Dialog>
    );
}
