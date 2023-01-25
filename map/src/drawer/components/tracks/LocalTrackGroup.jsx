import {Button, Collapse, Grid, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Folder} from "@mui/icons-material";
import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import Actions from "./Actions";
import LocalTrackItem from "./LocalTrackItem";
import {styled} from "@mui/material/styles";
import drawerStyles from "../../styles/DrawerStyles";
import TracksManager from "../../../context/TracksManager";
import {useNavigate} from "react-router-dom";

export default function LocalTrackGroup() {

    const styles = drawerStyles();
    const StyledInput = styled('input')({
        display: 'none',
    });

    const ctx = useContext(AppContext);
    const navigate = useNavigate();

    const [localGpxOpen, setLocalGpxOpen] = useState(false);
    const [sortFiles, setSortFiles] = useState([]);

    const openLogin = () => {
        navigate('/map/loginForm');
    }

    function clearLocalTracks() {
        ctx.setLocalTracks([]);
        localStorage.removeItem('localTracks');
    }

    function generateLocalTrack() {
        let newTrack = TracksManager.generate(ctx);
        TracksManager.addTrack(ctx, newTrack);
    }

    const fileSelected = () => async (e) => {
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.addEventListener('load', async (event) => {
                let track = await TracksManager.getTrackData(file);
                if (track) {
                    track.name = file.name;
                    TracksManager.addTrack(ctx, track);
                }
            });
            reader.readAsText(file);
        });
    }


    return <div className={styles.drawerItem}>
        <MenuItem sx={{ml: 3}} divider onClick={() => setLocalGpxOpen(!localGpxOpen)}>
            <ListItemIcon>
                <Folder fontSize="small"/>
            </ListItemIcon>
            <ListItemText>
                <Typography variant="inherit" noWrap>
                    Local
                </Typography>
            </ListItemText>
            <Typography variant="body2" color="textSecondary">
                {ctx.localTracks.length > 0 ? `${ctx.localTracks.length}` : ''}
            </Typography>
            {localGpxOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={localGpxOpen} timeout="auto" unmountOnExit>
            <Actions files={ctx.localTracks} setSortFiles={setSortFiles}/>
            {ctx.localTracks.length > 0 && ctx.localTracks.map((track, index) => {
                return <LocalTrackItem key={'track' + index}
                                       track={track}
                                       index={index}/>;
            })}
            <MenuItem disableRipple={true}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <label htmlFor="contained-button-file">
                            <StyledInput accept=".gpx" id="contained-button-file" multiple type="file"
                                         onChange={fileSelected(ctx)}/>
                            <Button className={styles.button} variant="contained" component="span" sx={{ml: 3}}>
                                Upload
                            </Button>
                        </label>
                    </Grid>
                    <Grid item xs={6}>
                        {<Button className={styles.button} variant="contained" component="span"
                                 onClick={() => {
                                     ctx.loginUser ? ctx.setCreateTrack({enable: true}) : openLogin()
                                 }}>
                            Create
                        </Button>}
                    </Grid>
                </Grid>
            </MenuItem>
            {ctx.localTracks.length !== 0 &&
                <Button className={styles.button} color='warning' variant="contained" component="span" sx={{ml: 5}}
                        onClick={() => clearLocalTracks()}>
                    Clear
                </Button>}
        </Collapse>
    </div>
}