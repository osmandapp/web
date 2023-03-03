import React, {useState, useContext, useEffect} from 'react';
import {Typography, ListItemText, Collapse, MenuItem, ListItemIcon, LinearProgress} from "@mui/material";
import {DirectionsWalk, ExpandLess, ExpandMore} from '@mui/icons-material';
import AppContext from "../../../context/AppContext"
import CloudTrackGroup from "./CloudTrackGroup";
import LocalTrackGroup from "./LocalTrackGroup";
import GpxCollection from "./GpxCollection";


export default function TracksMenu() {

    const ctx = useContext(AppContext);

    const [gpxFiles, setGpxFiles] = useState([]);
    const [tracksGroupsOpen, setTracksGroupsOpen] = useState(false);

    //get gpx files and create groups
    useEffect(() => {
        let tg = [];
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
            let group = tg.find(g => {
                return g.name === f.folder;
            })
            if (group) {
                group.files.push(f);
            } else {
                tg.push({name: f.folder, files: [f]});
            }
        });

        if (tg.length > 0) {
            let defGroup = tg.find(g => {
                return g.name === 'Tracks';
            })
            if (defGroup) {
                tg.splice(tg.indexOf(defGroup), 1);
                tg.unshift(defGroup);
            }
        }
        ctx.gpxFiles.trackGroups = tg;
        ctx.setTracksGroups(tg);

    }, [ctx.listFiles, ctx.setListFiles]);


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
        {ctx.gpxLoading && !ctx.createTrack ? <LinearProgress/> : <></>}
        <Collapse in={tracksGroupsOpen} timeout="auto" unmountOnExit>
            {ctx.gpxCollection?.length > 0 && <GpxCollection/>}
            <LocalTrackGroup/>
            {ctx.tracksGroups && ctx.tracksGroups.map((group, index) => {
                return <CloudTrackGroup key={group + index}
                                        index={index}
                                        group={group}/>;
            })}
        </Collapse>
    </>;

}
