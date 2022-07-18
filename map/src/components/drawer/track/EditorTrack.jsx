import CreatedTrack from "./CreatedTrack";
import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../../context/AppContext";
import {Collapse, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Folder} from "@mui/icons-material";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    group: {
        '& li': {
            minHeight: '50px !important'
        }
    }
})


export default function EditorTrack() {

    const ctx = useContext(AppContext);

    const classes = useStyles();

    const [createdTracks, setCreatedTracks] = useState(localStorage.getItem('createdTracks') !== null ? JSON.parse(localStorage.getItem('createdTracks')) : []);
    const [editorOpen, setEditorOpen] = useState(false);
    const [editCurrentTrack, setEditCurrentTrack] = useState(false);
    const [indexTrack, setIndexTrack] = useState(-1);

    const toggleEditorOpen = () => {
        ctx.editor.showTrack = false;
        ctx.setEditor({...ctx.editor});
        setEditorOpen(!editorOpen);
    };

    useEffect(() => {
        if (ctx.planRoute) {
            setEditCurrentTrack(false);
            setIndexTrack(-1);
        } else {
            ctx.setPlanRoute(true);
        }
    }, [ctx.planRoute, ctx.setPlanRoute]);

    useEffect(() => {
        if (ctx.editor.deleteRoute) {
            createdTracks.splice(createdTracks[indexTrack], 1);
            setCreatedTracks([...createdTracks]);

            localStorage.setItem('createdTracks', JSON.stringify(createdTracks));
        }
    }, [ctx.editor, ctx.setEditor]);

    useEffect(() => {
        if (ctx.newRoute && ctx.newRoute.pointsList && ctx.newRoute.pointsList.length > 0 && (ctx.newRoute.finished || indexTrack !== -1)) {
            if (indexTrack !== -1) {
                createdTracks[indexTrack].track = structuredClone(ctx.newRoute.pointsList);
                setCreatedTracks([...createdTracks]);
                setEditCurrentTrack(false);
            } else {
                if (editCurrentTrack) {
                    createdTracks[createdTracks.length - 1].track = structuredClone(ctx.newRoute.pointsList);
                    setCreatedTracks([...createdTracks]);
                } else {
                    let track = structuredClone(ctx.newRoute.pointsList);
                    createdTracks.push({name: new Date().toUTCString(), track: track});
                    setCreatedTracks([...createdTracks]);
                    setEditCurrentTrack(true);
                }
            }
            localStorage.setItem('createdTracks', JSON.stringify(createdTracks));
        }
    }, [ctx.newRoute, ctx.setNewRoute]);


    return <div className={classes.group}>
        <MenuItem sx={{ml: 3}} divider onClick={() => {
            toggleEditorOpen();
        }}>
            <ListItemIcon>
                <Folder fontSize="small"/>
            </ListItemIcon>
            <ListItemText>
                <Typography variant="inherit" noWrap>
                    Editor
                </Typography>
            </ListItemText>
            <Typography variant="body2" color="textSecondary">
                {createdTracks.length > 0 ? `${createdTracks.length}` : ''}
            </Typography>
            {editorOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={editorOpen} timeout="auto">
            {createdTracks.length > 0 && createdTracks.map((track, index) => {
                return <CreatedTrack key={'track' + index}
                                     index={index}
                                     setIndexTrack={setIndexTrack}
                                     track={track}/>;
            })}
        </Collapse>
    </div>
}