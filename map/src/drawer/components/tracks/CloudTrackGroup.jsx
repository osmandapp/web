import {Collapse, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Folder} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import CloudTrackItem from "./CloudTrackItem";

import Actions from "./Actions";
import drawerStyles from "../../styles/DrawerStyles";


export default function CloudTrackGroup({index, group}) {

    const styles = drawerStyles();

    const [indexGroup, setIndexGroup] = useState(-1);
    const [tracksOpen, setTracksOpen] = useState(false);
    const [showTracks, setShowTracks] = useState([]);
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


    return <div className={styles.drawerItem} key={'group' + index}>
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
            <Typography variant="body2" color="textSecondary">
                {group.files.length > 0 ? `${group.files.length}` : ''}
            </Typography>
            {group.files.length === 0 ? <></> : showTracks.length > 0 ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={showTracks.includes(index)} timeout="auto">
            <Actions files={group.files}
                     setSortFiles={setSortFiles}/>
            {(sortFiles.length > 0 ? sortFiles : group.files).map((file, index) => {
                return <CloudTrackItem key={file + index}
                                       file={file}/>
            })}
        </Collapse>
    </div>

}