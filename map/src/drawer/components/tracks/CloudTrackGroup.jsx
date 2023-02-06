import {
    Collapse,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography
} from "@mui/material";
import {ExpandLess, ExpandMore, Folder, MoreVert} from "@mui/icons-material";
import React, {useContext, useEffect, useState} from "react";
import CloudTrackItem from "./CloudTrackItem";

import Actions from "./Actions";
import drawerStyles from "../../styles/DrawerStyles";
import AppContext from "../../../context/AppContext";
import PopperMenu from "./PopperMenu";


export default function CloudTrackGroup({index, group}) {

    const styles = drawerStyles();
    const ctx = useContext(AppContext);

    const [indexGroup, setIndexGroup] = useState(-1);
    const [tracksOpen, setTracksOpen] = useState(false);
    const [showTracks, setShowTracks] = useState([]);
    const [sortFiles, setSortFiles] = useState([]);
    const anchorEl = React.useRef(null);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const toggleTracksOpen = () => {
        setTracksOpen(!tracksOpen);
    };

    function addToCollection() {
        group.files.forEach(file => {
            if (!ctx.gpxCollection.find(name => name === file.name)) {
                ctx.gpxCollection.push(file.name);
            }
        })
        ctx.setGpxCollection([...ctx.gpxCollection]);
    }

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

    const Buttons = () => {
        return (
            <div>
                {!ctx.createTrack && <MenuItem onClick={(e) => {
                    addToCollection()
                    e.stopPropagation();
                }}>To Collection</MenuItem>}
            </div>
        )
    }


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
            <PopperMenu anchorEl={anchorEl} open={open} setOpen={setOpen} Buttons={Buttons}/>
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