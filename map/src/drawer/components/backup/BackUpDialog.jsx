import {Dialog} from "@material-ui/core";
import {
    Button,
    Checkbox,
    DialogActions,
    DialogContent,
    Grid,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import React, {useContext, useState} from "react";
import {Close, Route} from "@mui/icons-material";
import backUpStyles from "../../styles/BackUpStyles";
import AppContext from "../../../context/AppContext";
import TracksManager from "../../../context/TracksManager";

export default function BackUpDialog({dialogOpen, setDialogOpen}) {

    const ctx = useContext(AppContext);
    const menuStyles = backUpStyles();

    const [selectTracks, setSelectTracks] = useState(false);

    async function uploadBackUp() {
        let result = await TracksManager.getBackUp()
        if (result) {
            const url = document.createElement('a');
            url.href = URL.createObjectURL(new Blob([result.data]), {type: "application/octet-stream"});
            url.download = result.headers["content-disposition"].split("=")[1];
            url.click()
        }
    }

    const CloseDialog = () => {
        return <IconButton
            variant="contained"
            type="button"
            onClick={() => {
                setDialogOpen(false);
                setSelectTracks(false);
            }}
        >
            <Close fontSize="small"/>
        </IconButton>
    }

    function getCountFiles() {
        let count = 0;
        ctx.tracksGroups.forEach(group => {
            count = count + group.files.length;
        })
        return count;
    }

    function getSizeFiles() {
        let size = 0;
        ctx.tracksGroups.forEach(group => {
            group.files.forEach(file => {
                size = size + file.filesize;
            })
        })
        return (size / 1000000).toFixed(2);
    }

    return (
        <Dialog className={menuStyles.dialog} open={dialogOpen}>
            <Grid container spacing={2}>
                <Grid className={menuStyles.name} item xs={11} sx={{mb: -3}}>
                    <DialogTitle>Select the data to be exported to the file.</DialogTitle>
                </Grid>
                <Grid item xs={1} sx={{ml: -2, mt: 1}}>
                    {CloseDialog()}
                </Grid>
            </Grid>
            <DialogContent>
                <MenuItem sx={{mb: 1}} onClick={() => {
                }}>
                    <ListItemIcon>
                        <Route fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText> Tracks </ListItemText>
                    <Typography variant="body2" color="textSecondary">
                        {getCountFiles() + " files," + getSizeFiles() + " Mb"}
                    </Typography>
                    <Checkbox onChange={() => setSelectTracks(!selectTracks)}/>
                </MenuItem>
            </DialogContent>
            <DialogActions>
                <Button disabled={!selectTracks} onClick={() => uploadBackUp()}>Download</Button>
                <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}