import {Collapse, IconButton, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Folder, Sort, SortByAlpha, Star} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import TrackItem from "./TrackItem";
import {getGpxTime} from "../../../context/AppContext";

export default function TrackGroup({index, group}) {

    const [indexGroup, setIndexGroup] = useState(-1);
    const [tracksOpen, setTracksOpen] = useState(false);
    const [showTracks, setShowTracks] = useState([]);
    const [alphaUp, setAlphaUp] = useState(false);
    const [timeUp, setTimeUp] = useState(true);
    const [sortFiles, setSortFiles] = useState([]);

    const toggleTracksOpen = () => {
        setTracksOpen(!tracksOpen);
    };

    useEffect(() => {
        if (indexGroup !== -1) {
            if (showTracks.includes(indexGroup)) {
                showTracks.splice(showTracks.indexOf(indexGroup), 1)
            } else {
                showTracks.push(indexGroup);
            }
            setShowTracks([...showTracks]);
        }
    }, [tracksOpen, setTracksOpen]);

    return (<div key={'group' + index}>
        <MenuItem sx={{ml: 3}} divider onClick={(e) => {
            if (e.target !== 'path') {
                setIndexGroup(index);
                toggleTracksOpen();
            }
        }}>
            <ListItemIcon>
                <Folder fontSize="small"/>
            </ListItemIcon>
            <ListItemText>
                <Typography variant="inherit" noWrap>
                    {group.name}
                </Typography>
            </ListItemText>
            <IconButton sx={{mr: -3}} onClick={(e) => {
                e.stopPropagation();
                let lf = group.files.sort((f, s) => {
                    let ftime = getGpxTime(f);
                    let stime = getGpxTime(s);
                    if (ftime === stime) {
                        return f.name > s.name ? 1 : -1;
                    }
                    if (timeUp) {
                        return ftime > stime ? 1 : -1;
                    } else {
                        return ftime < stime ? 1 : -1;
                    }
                });
                setTimeUp(!timeUp);
                setSortFiles(lf);
            }}>
                <Sort fontSize="small"/>
            </IconButton>
            <IconButton sx={{ml: 2}} onClick={(e) => {
                e.stopPropagation();
                let lf = group.files.sort((f, s) => {
                    if (alphaUp) {
                        return f.name > s.name ? 1 : -1;
                    } else {
                        return f.name < s.name ? 1 : -1;
                    }
                });
                setAlphaUp(!alphaUp);
                setSortFiles(lf);
            }}>
                <SortByAlpha fontSize="small"/>
            </IconButton>
            {group.files.length === 0 ? <></> : setShowTracks.length > 0 ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={showTracks.includes(index)} timeout="auto">
            {
                (sortFiles.length > 0 ? sortFiles : group.files).map((file, index) => {
                    return <TrackItem key={file + index}
                                      file={file}/>;
                })
            }
        </Collapse>
    </div>)

}