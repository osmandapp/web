import {Box, Button, Grid, ListItemIcon, ListItemText, MenuItem, TextareaAutosize, Typography} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../../context/AppContext";
import {Commit, RouteOutlined,} from "@mui/icons-material";
import TracksManager from "../../../context/TracksManager";
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
                TracksManager.saveTracks(ctx.localClientsTracks);
            }
        }
    }

    useEffect(() => {
        if (ctx.selectedGpxFile) {
            setFileName(ctx.selectedGpxFile.name);
        }
    }, [ctx.selectedGpxFile])

    return (<Box className={styles.item} width={width}>
            <Typography className={styles.info} variant="subtitle1" color="inherit">
                <Grid container spacing={2}>
                    <Grid item xs={11}>
                        {!disableButton && <TextareaAutosize
                            style={{maxWidth: '438px', width: fileName.length + "ch", resize: 'none'}}
                            className={styles.nameInput}
                            name="title"
                            onChange={(e) => setFileName(e.target.value)}
                            value={fileName}
                            disabled={disableButton}
                            onKeyDown={(e) => changeFileName(e)}
                            autoFocus={true}
                        />}
                        {
                            disableButton && <Typography className={styles.name} variant="inherit" maxWidth={'530px'}>
                                {fileName}
                            </Typography>
                        }
                    </Grid>
                    <Grid item xs={1}>
                        <Box display="flex" justifyContent="flex-end">
                            {disableButton &&
                                <Button variant="contained" style={{backgroundColor: '#fbc73a'}} onClick={() => {
                                    setDisableButton(false);
                                }}>
                                    edit
                                </Button>}
                            {!disableButton && <Button variant="contained" style={{backgroundColor: '#fbc73a'}}
                                                       onClick={(e) => changeFileName(e)}>
                                save
                            </Button>}
                            {!disableButton &&
                                <Button sx={{ml: 2}} variant="contained" style={{backgroundColor: '#aad3df'}}
                                        onClick={() => {
                                            setFileName(ctx.selectedGpxFile.name)
                                            setDisableButton(!disableButton)
                                        }}>
                                    close
                                </Button>}
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
                <MenuItem sx={{ml: -2, mt: -1}}>
                    <ListItemIcon>
                        <RouteOutlined fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography sx={{ml: 1}} variant="inherit" noWrap>
                            {"Distance: " + distance + " km"}
                        </Typography>
                    </ListItemText>
                </MenuItem>
                <Button variant="contained" component="span" style={{backgroundColor: '#fbc73a'}}
                        onClick={() => getUrl().click()}>Download gpx</Button><br/>
            </Typography>
        </Box>
    );
};

export default LocalInfoTab;