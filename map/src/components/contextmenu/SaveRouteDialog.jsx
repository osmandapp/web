import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Button, TextField} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import {useRef} from "react";

export default function SaveRouteDialog({open, setOpen, setFileName}) {

    const valueRef = useRef('');

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (handleClose) => {
        setFileName(valueRef.current.value);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create gpx file</DialogTitle>
            <DialogContent>
                <TextField
                    inputRef={valueRef}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="File name"
                    type="name"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => handleSave(handleClose)}>Save</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}