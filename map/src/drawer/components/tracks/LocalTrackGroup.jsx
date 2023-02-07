import {
    Box,
    Button,
    Collapse,
    Grid,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography
} from "@mui/material";
import {Close, ExpandLess, ExpandMore, Folder, MoreVert} from "@mui/icons-material";
import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import Actions from "./Actions";
import LocalTrackItem from "./LocalTrackItem";
import {styled} from "@mui/material/styles";
import drawerStyles from "../../styles/DrawerStyles";
import TracksManager from "../../../context/TracksManager";
import {useNavigate} from "react-router-dom";
import PopperMenu from "./PopperMenu";


export default function LocalTrackGroup() {

    const styles = drawerStyles();
    const StyledInput = styled('input')({
        display: 'none',
    });

    const ctx = useContext(AppContext);
    const navigate = useNavigate();

    const [localGpxOpen, setLocalGpxOpen] = useState(false);
    const [sortFiles, setSortFiles] = useState([]);
    const anchorEl = React.useRef(null);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const openLogin = () => {
        navigate('/map/loginForm');
    }

    function clearLocalTracks() {
        let selectedLocalFile = ctx.localTracks.find(t => t.name === ctx.selectedGpxFile.name);
        if (selectedLocalFile) {
            ctx.setSelectedGpxFile({});
        }
        ctx.setLocalTracks([]);
        localStorage.removeItem('localTracks');
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

    const Buttons = () => {
        return (
            <div>
                {ctx.loginUser && <MenuItem onClick={(e) => {
                    ctx.setCreateTrack({enable: true})
                    e.stopPropagation();
                }}>Create</MenuItem>}
                {ctx.localTracks.length !== 0 && <MenuItem onClick={(e) => {
                    clearLocalTracks()
                    e.stopPropagation();
                }}>Clear</MenuItem>}
            </div>
        )
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
            <IconButton
                variant="contained"
                type="button"
                ref={anchorEl}
                onClick={(e) => {
                    handleToggle();
                    e.stopPropagation();
                }}
            >
                <MoreVert fontSize="small"/>
            </IconButton>
            <Box>
                <PopperMenu anchorEl={anchorEl} open={open} setOpen={setOpen} Buttons={Buttons}/>
            </Box>
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
                </Grid>
            </MenuItem>
        </Collapse>
    </div>
}