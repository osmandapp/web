import React, {useState, useContext, useEffect} from 'react';
import {Typography, ListItemText, Collapse, MenuItem, ListItemIcon, LinearProgress} from "@mui/material";
import {DirectionsWalk, ExpandLess, ExpandMore} from '@mui/icons-material';
import AppContext, {toHHMMSS} from "../../../context/AppContext"
import CloudTrackGroup from "./CloudTrackGroup";
import LocalTrackGroup from "./LocalTrackGroup";
import GpxCollection from "./GpxCollection";
import VisibleGroup from "../VisibleGroup";
import _ from "lodash";


export default function TracksMenu() {

    const ctx = useContext(AppContext);

    const [gpxFiles, setGpxFiles] = useState([]);
    const [tracksGroupsOpen, setTracksGroupsOpen] = useState(false);
    const [visibleTracks, setVisibleTracks] = useState({local: [], cloud: []});

    function visibleTracksOpen() {
        return visibleTracks.local.length > 0 || visibleTracks.cloud.length > 0;
    }

    useEffect(() => {
        if (ctx.gpxFiles) {
            let oldFiles = _.cloneDeep(visibleTracks.cloud);
            visibleTracks.cloud = [];
            Object.values(ctx.gpxFiles).forEach((f) => {
                if (f.url || oldFiles.find(t => t.name === f.name)) {
                    visibleTracks.cloud.push(f);
                }
            })
        }
        setVisibleTracks({...visibleTracks});
    }, [ctx.gpxFiles]);

    useEffect(() => {
        if (ctx.localTracks) {
            let oldFiles = _.cloneDeep(visibleTracks.local);
            visibleTracks.local = [];
            ctx.localTracks.forEach(f => {
                if (f.selected || oldFiles.find(t => t.name === f.name)) {
                    visibleTracks.local.push(f)
                }
            })
        }
        setVisibleTracks({...visibleTracks});
    }, [ctx.localTracks]);

    //get gpx files and create groups
    useEffect(() => {
        if (!_.isEmpty(ctx.listFiles)) {
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
        } else {
            setGpxFiles([]);
            ctx.setTracksGroups([]);
            setVisibleTracks({local: [], cloud: []});
        }
    }, [ctx.listFiles, ctx.setListFiles]);

    useEffect(() => {
        let resultText = '';
        let dist = 0;
        let tracks = 0;
        let seg = 0;
        let wpts = 0;
        let time = 0;
        let diffUp = 0;
        let diffDown = 0;
        Object.values(ctx.gpxFiles).forEach((item) => {
            if (item.local !== true && item.analysis && item.url) {
                if (item.analysis.totalTracks) {
                    tracks += item.analysis.totalTracks;
                }
                if (item.analysis.points) {
                    seg += item.analysis.points - 1;
                }
                if (item.analysis.wptPoints) {
                    wpts += item.analysis.wptPoints;
                }
                if (item.analysis.totalDistance) {
                    dist += item.analysis.totalDistance;
                }
                if (item.analysis.timeMoving) {
                    time += item.analysis.timeMoving;
                }
                if (item.analysis.diffElevationUp) {
                    diffUp += item.analysis.diffElevationUp;
                }
                if (item.analysis.diffElevationDown) {
                    diffDown += item.analysis.diffElevationDown;
                }
            }

            if (item.local === true && item.analysis && item.url) {
                if (item.analysis.totalTracks) {
                    tracks += item.analysis.totalTracks;
                }
                if (item.analysis.wptPoints) {
                    wpts += item.analysis.wptPoints;
                }
                if (item.analysis.totalDistance) {
                    dist += item.analysis.totalDistance;
                }
            }
        });

        Object.values(ctx.localTracks).forEach((item) => {
            if (item.selected) {
                tracks++;
                if (item.points?.length > 0) {
                    dist += item.points[item.points.length - 1].dist;
                    seg += item.points.length - 1;
                }
            }
        });

        if (tracks > 0) {
            let segInfo = seg > 0 ? `: ${seg} segments` : ``;
            let distInfo = dist > 0 ? `, ${(dist / 1000.0).toFixed(1)} km.` : ``;
            let wptInfo = wpts > 0 ? `, ${wpts} wpts.` : ``;
            let timeInfo = time > 0 ? ` Time moving: ${toHHMMSS(time)}.` : ``;
            let uphillDownhillInfo = diffUp > 0 || diffDown ? ` Uphill / Downhill: ${(diffUp).toFixed(0)} / ${(diffDown).toFixed(0)} m.` : ``;

            resultText = `Selected ${tracks} Tracks${segInfo}${distInfo}${wptInfo}${timeInfo}${uphillDownhillInfo}`;
        }

        ctx.setHeaderText(prevState => ({
            ...prevState,
            tracks: {text: resultText}
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
        {(ctx.gpxLoading || ctx.localTracksLoading) && !ctx.createTrack ? <LinearProgress/> : <></>}
        <Collapse in={tracksGroupsOpen} timeout="auto" unmountOnExit>
            {ctx.gpxCollection?.length > 0 && <GpxCollection/>}
            {visibleTracksOpen() && <VisibleGroup visibleTracks={visibleTracks}
                                                  setVisibleTracks={setVisibleTracks}/>}
            <LocalTrackGroup/>
            {ctx.tracksGroups && ctx.tracksGroups.map((group, index) => {
                return <CloudTrackGroup key={group + index}
                                        index={index}
                                        group={group}/>;
            })}
        </Collapse>
    </>;

}
