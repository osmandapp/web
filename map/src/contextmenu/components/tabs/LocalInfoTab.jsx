import {Box, Button, Grid, ListItemIcon, ListItemText, MenuItem, TextareaAutosize, Typography} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../../context/AppContext";
import {Commit, Create, DoneOutline, RouteOutlined,} from "@mui/icons-material";
import LocalTracksManager from "../../../context/LocalTracksManager";
import contextMenuStyles from "../../styles/ContextMenuStyles";

const LocalInfoTab = ({width}) => {

    const styles = contextMenuStyles();

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

    function changeFileName(e) {
        if (e.key === 'Enter' || e.type === 'click') {
            setDisableButton(!disableButton);
            let existName = ctx.localClientsTracks.find(t => t.name === fileName);
            if (!existName) {
                let currentTrack = ctx.localClientsTracks.find(t => t.name === ctx.selectedGpxFile.name);
                currentTrack.name = fileName;
                ctx.selectedGpxFile.name = fileName;
                ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
                ctx.setLocalClientsTracks([...ctx.localClientsTracks]);
                LocalTracksManager.saveTracks(ctx.localClientsTracks);
            }
        }
    }

    useEffect(() => {
        setFileName(ctx.selectedGpxFile.name)
    }, [ctx.selectedGpxFile])

    return (<Box width={width}>
            <Typography className={styles.info} variant="subtitle1" color="inherit">
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <TextareaAutosize
                            style={{width: fileName.length + "ch"}}
                            className={styles.name}
                            name="title"
                            onChange={(e) => setFileName(e.target.value)}
                            value={fileName}
                            disabled={disableButton}
                            onKeyDown={(e) => changeFileName(e)}
                        />
                        {disableButton && <ListItemIcon onClick={() => setDisableButton(!disableButton)}>
                            <Create fontSize="small"/>
                        </ListItemIcon>}
                        {!disableButton && <ListItemIcon onClick={(e) => changeFileName(e)}>
                            <DoneOutline fontSize="small"/>
                        </ListItemIcon>}
                    </Grid>
                    <Grid item xs={4}>
                        <Box display="flex" justifyContent="flex-end">
                            <Button variant="contained" component="span" style={{backgroundColor: '#fbc73a'}}
                                    onClick={() => getUrl().click()}>Download gpx</Button><br/>
                        </Box>
                    </Grid>
                </Grid>
                <MenuItem sx={{ml: -2}}>
                    <ListItemIcon>
                        <Commit fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography sx={{ml: 1}} variant="inherit" noWrap>
                            {"Points: " + points}
                        </Typography>
                    </ListItemText>
                </MenuItem>
                <MenuItem sx={{ml: -2}}>
                    <ListItemIcon>
                        <RouteOutlined fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography sx={{ml: 1}} variant="inherit" noWrap>
                            {"Distance: " + distance + " km"}
                        </Typography>
                    </ListItemText>
                </MenuItem>
            </Typography>
        </Box>
    );
};

export default LocalInfoTab;