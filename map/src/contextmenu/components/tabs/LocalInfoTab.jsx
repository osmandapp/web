import {Box, Button, ListItemIcon, Typography} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../../context/AppContext";
import {Edit} from "@mui/icons-material";
import {makeStyles} from "@material-ui/core/styles";
import LocalTracksManager from "../../../context/LocalTracksManager";

const useStyles = makeStyles({
    input: {
        border: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
        fontSize: 16,
        marginLeft: -2
    },
    editButton: {
        '& .MuiListItemIcon-root': {
            minWidth: 'auto !important',
        }
    }
})

const LocalInfoTab = ({width}) => {

    const classes = useStyles();

    const ctx = useContext(AppContext);
    const [points, setPoints] = useState(0);
    const [distance, setDistance] = useState(0);
    const [fileName, setFileName] = useState(ctx.selectedGpxFile && ctx.selectedGpxFile.name);
    const [disableButton, setDisableButton] = useState(true);

    useEffect(() => {
        if (ctx.selectedGpxFile && ctx.selectedGpxFile.points && !ctx.selectedGpxFile.summary) {
            let pointsLength = ctx.selectedGpxFile.points.length;
            setPoints(pointsLength);
            setDistance(Math.round(ctx.selectedGpxFile.points[pointsLength - 1].dist / 100) / 10.0);
        }
    }, [ctx.selectedGpxFile]);

    function getUrl() {
        const url = document.createElement('a');
        url.href = URL.createObjectURL(new Blob([ctx.selectedGpxFile.gpx]));
        url.download = `${ctx.selectedGpxFile.name}.gpx`;

        return url;
    }

    function onChangeFileName(e) {
        setFileName(e.target.value);
    }

    function changeFileName(e) {
        if (e.key === 'Enter') {
            let existName = ctx.localClientsTracks.find(t => t.name === fileName);
            if (!existName) {
                let currentTrack = ctx.localClientsTracks.find(t => t.name === ctx.selectedGpxFile.name);
                currentTrack.name = fileName;
                ctx.setLocalClientsTracks([...ctx.localClientsTracks]);
                LocalTracksManager.saveTracks(ctx.localClientsTracks);
            }
        }
    }

    useEffect(() => {
        setFileName(ctx.selectedGpxFile.name)
    }, [ctx.selectedGpxFile])

    return (<Box width={width}>
            <Typography className={classes.editButton} variant="subtitle1" color="inherit">
                <input style={{width: fileName.length + "ch"}} className={classes.input}
                       name="title"
                       onChange={(e) => onChangeFileName(e)}
                       value={fileName}
                       disabled={disableButton}
                       onKeyDown={(e) => changeFileName(e)}
                />
                <ListItemIcon onClick={() => setDisableButton(!disableButton)}>
                    <Edit fontSize="small"/>
                </ListItemIcon>
                {<Button onClick={() => getUrl().click()}>Download gpx</Button>}<br/><br/>
                {"Points: " + points}<br/>
                {"Distance: " + distance + " km"}
            </Typography>
        </Box>
    );
};

export default LocalInfoTab;