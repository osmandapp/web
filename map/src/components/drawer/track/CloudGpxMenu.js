import React, {useState, useContext, useEffect} from 'react';
import {Typography, ListItemText, Collapse, MenuItem, ListItemIcon, LinearProgress} from "@mui/material";
import {DirectionsWalk, ExpandLess, ExpandMore} from '@mui/icons-material';
import AppContext from "../../../context/AppContext"
import TrackGroup from "./TrackGroup";
import VisibleTracks from "./VisibleTracks";


export default function CloudGpxMenu() {

    const ctx = useContext(AppContext);

    const [gpxOpen, setGpxOpen] = useState(false);
    const [gpxFiles, setGpxFiles] = useState([]);
    const [tracksGroupsOpen, setTracksGroupsOpen] = useState(false);
    const [tracksGroups, setTracksGroups] = useState([]);
    const [visibleTracks, setVisibleTracks] = useState([]);

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

    useEffect(() => {
        if (ctx.gpxFiles) {
            visibleTracks.length = 0;
            Object.values(ctx.gpxFiles).forEach((f) => {
                if (f.url !== null) {
                    visibleTracks.push(f);
                }
            })
        }
        setVisibleTracks([...visibleTracks]);
    }, [ctx.gpxFiles, ctx.setGpxFiles]);

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
        </Collapse>
    </>;

}
