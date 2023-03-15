import TracksManager from "../../context/TracksManager";
import {Alert, Button, Collapse, Grid, IconButton, ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import AppContext from "../../context/AppContext";
import {useContext, useState} from "react";
import drawerStyles from "../styles/DrawerStyles";
import {useNavigate} from "react-router-dom";
import {Create, ExpandLess, ExpandMore, QuestionMark} from "@mui/icons-material";

export default function CreateTrackMenu() {

    const ctx = useContext(AppContext);

    const styles = drawerStyles();

    const [open, setOpen] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);


    return <>
        <MenuItem key='routeTop' sx={{mb: 1}} onClick={() => setOpen(!open)}>
            <ListItemIcon>
                <Create fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Create Track</ListItemText>
            {open ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            {openInfo && <Alert sx={{mb: 1}}
                onClose={() => {
                setOpenInfo(false)
            }} severity="info">Click on button and start creating new track...</Alert>}
            <Grid container spacing={3}>
                <Grid item xs={5}>
                    <Button sx={{ml: 4}} className={styles.button} variant="contained" component="span"
                            onClick={() => TracksManager.createTrack(ctx)}>
                        Create
                    </Button>
                </Grid>
                <Grid item xs={5}>
                    <IconButton
                        sx={{ml: 2}}
                        variant="contained"
                        type="button"
                        onClick={() => setOpenInfo(!openInfo)}
                    >
                        <QuestionMark fontSize="small"/>
                    </IconButton>
                </Grid>
            </Grid>
        </Collapse>
    </>
}