import React, {useState, useContext, useEffect} from 'react';
import {Typography, ListItemText, Collapse, MenuItem, ListItemIcon, LinearProgress, Button} from "@mui/material";
import {DirectionsWalk, ExpandLess, ExpandMore} from '@mui/icons-material';
import AppContext from "../../../context/AppContext"
import TrackGroup from "./TrackGroup";
import VisibleTracks from "./VisibleTracks";
import {styled} from "@mui/material/styles";
import Utils from "../../../util/Utils";
import LocalTrackGroup from "./LocalTrackGroup";
import {makeStyles} from "@material-ui/core/styles";
import EditorTrack from "./EditorTrack";

const useStyles = makeStyles({
    button: {
        maxWidth: '120px !important',
        maxHeight: '40px',
        minWidth: '120px !important',
        minHeight: '40px'
    }
})

export default function TracksMenu() {

    const StyledInput = styled('input')({
        display: 'none',
    });

    const classes = useStyles();

    const ctx = useContext(AppContext);

    const [gpxOpen, setGpxOpen] = useState(false);
    const [gpxFiles, setGpxFiles] = useState([]);
    const [tracksGroupsOpen, setTracksGroupsOpen] = useState(false);
    const [tracksGroups, setTracksGroups] = useState([]);
    const [visibleTracks, setVisibleTracks] = useState([]);

    //get gpx files and create groups
    useEffect(() => {
        let files = (!ctx.listFiles || !ctx.listFiles.uniqueFiles ? [] :
            ctx.listFiles.uniqueFiles).filter((item) => {
            return (item.type === 'gpx' || item.type === 'GPX')
                && (item.name.slice(-4) === '.gpx' || item.name.slice(-4) === '.GPX');
        });
        files.forEach(f => {
            f.folder = f.name.includes('/') ? f.name.split('/')[0] : 'Tracks';
        });
        setGpxFiles(files);

        files.forEach(f => {
            let group = tracksGroups.find(g => {
                return g.name === f.folder;
            })
            if (group) {
                group.files.push(f);
            } else {
                tracksGroups.push({name: f.folder, files: [f]});
            }
        });

        if (tracksGroups.length > 0) {
            let defGroup = tracksGroups.find(g => {
                return g.name === 'Tracks';
            })
            if (defGroup) {
                tracksGroups.splice(tracksGroups.indexOf(defGroup), 1);
                tracksGroups.unshift(defGroup);
            }
        }

        setTracksGroups(tracksGroups);

    }, [ctx.listFiles, ctx.setListFiles]);

    //add visible tracks
    useEffect(() => {
        if (ctx.gpxFiles) {
            visibleTracks.length = 0;
            Object.values(ctx.gpxFiles).forEach((f) => {
                if (f.url) {
                    visibleTracks.push(f);
                }
            })
        }
        setVisibleTracks([...visibleTracks]);
    }, [ctx.gpxFiles, ctx.setGpxFiles]);

    const fileSelected = (ctx) => async (e) => {
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                let src = event.target.result;
                let gpxLayer = {};
                gpxLayer.name = 'local:' + file.name;
                gpxLayer.localContent = src;
                gpxLayer.local = true;
                Utils.uploadFile(ctx.gpxFiles, ctx.setGpxFiles, ctx, gpxLayer, file);
            });
            reader.readAsText(file);
        });
    }

    return <>
        <MenuItem sx={{mb: 1}} onClick={() => setTracksGroupsOpen(!tracksGroupsOpen)}>
            <ListItemIcon>
                <DirectionsWalk fontSize="small"/>
            </ListItemIcon>
            <ListItemText> Tracks </ListItemText>
            <Typography variant="body2" color="textSecondary">
                {gpxFiles.length > 0 ? `${gpxFiles.length}` : ''}
            </Typography>
            {gpxFiles.length === 0 ? <></> : gpxOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        {ctx.gpxLoading ? <LinearProgress/> : <></>}
        <Collapse in={tracksGroupsOpen} timeout="auto" unmountOnExit>
            {visibleTracks.length > 0 && <VisibleTracks visibleTracks={visibleTracks}/>}
            {tracksGroups && tracksGroups.map((group, index) => {
                return <TrackGroup key={group + index}
                                   index={index}
                                   group={group}/>;
            })}
            <LocalTrackGroup/>
            <EditorTrack/>
            <MenuItem disableRipple={true}>
                <label htmlFor="contained-button-file">
                    <StyledInput accept=".gpx" id="contained-button-file" multiple type="file"
                                 onChange={fileSelected(ctx)}/>
                    <Button className={classes.button} variant="contained" component="span" sx={{ml: 3}}>
                        Upload
                    </Button>
                </label>
                <Button className={classes.button} variant="contained" component="span" sx={{ml: 2}}
                        onClick={() => ctx.setPlanRoute((prev) => !prev)}>
                    Create
                </Button>
            </MenuItem>
        </Collapse>
    </>;

}
