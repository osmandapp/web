import React, {useState, useContext, useEffect} from 'react';
import {Typography, ListItemText, Collapse, MenuItem, ListItemIcon, LinearProgress, Button} from "@mui/material";
import {DirectionsWalk, ExpandLess, ExpandMore} from '@mui/icons-material';
import AppContext from "../../../context/AppContext"
import CloudTrackGroup from "./CloudTrackGroup";
import VisibleTrackGroup from "./VisibleTrackGroup";
import LocalTrackGroup from "./LocalTrackGroup";


export default function TracksMenu() {

    const ctx = useContext(AppContext);

    const [gpxFiles, setGpxFiles] = useState([]);
    const [tracksGroupsOpen, setTracksGroupsOpen] = useState(false);
    const [tracksGroups, setTracksGroups] = useState([]);
    const [visibleTracks, setVisibleTracks] = useState({localClient: [], files: []});

    function visibleTracksOpen() {
        return visibleTracks.localClient.length > 0 || visibleTracks.files.length > 0;
    }

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


    useEffect(() => {
        if (ctx.gpxFiles) {
            visibleTracks.files = [];
            Object.values(ctx.gpxFiles).forEach((f) => {
                if (f.url) {
                    visibleTracks.files.push(f);
                }
            })
        }
        setVisibleTracks({...visibleTracks});
    }, [ctx.gpxFiles, ctx.setGpxFiles]);

    useEffect(() => {
        if (ctx.localClientsTracks) {
            visibleTracks.localClient = [];
            ctx.localClientsTracks.forEach(t => {
                if (t.selected) {
                    visibleTracks.localClient.push(t)
                }
            })
        }
        setVisibleTracks({...visibleTracks});
    }, [ctx.localClientsTracks, ctx.setLocalClientsTracks]);

    useEffect(() => {
        ctx.setSelectedObjects(prevState => ({
            ...prevState,
            localClientTracks: visibleTracks.localClient.length > 0,
            localServerTracks: visibleTracks.files.filter(f => f.local).length > 0,
            cloudTracks: visibleTracks.files.filter(f => !f.local).length > 0
        }));
    }, [visibleTracks, setVisibleTracks]);


    return <>
        <MenuItem sx={{mb: 1}} onClick={() => setTracksGroupsOpen(!tracksGroupsOpen)}>
            <ListItemIcon>
                <DirectionsWalk fontSize="small"/>
            </ListItemIcon>
            <ListItemText> Tracks </ListItemText>
            <Typography variant="body2" color="textSecondary">
                {gpxFiles.length > 0 ? `${gpxFiles.length}` : ''}
            </Typography>
            {gpxFiles.length === 0 ? <></> : tracksGroupsOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        {ctx.gpxLoading ? <LinearProgress/> : <></>}
        <Collapse in={tracksGroupsOpen} timeout="auto" unmountOnExit>
            {visibleTracksOpen() && <VisibleTrackGroup visibleTracks={visibleTracks}/>}
            <LocalTrackGroup/>
            {tracksGroups && tracksGroups.map((group, index) => {
                return <CloudTrackGroup key={group + index}
                                        index={index}
                                        group={group}/>;
            })}
        </Collapse>
    </>;

}
