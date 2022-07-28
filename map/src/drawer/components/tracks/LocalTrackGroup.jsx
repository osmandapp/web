import {Button, Collapse, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Folder} from "@mui/icons-material";
import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../../context/AppContext";
import TrackItem from "./TrackItem";
import Utils from "../../../util/Utils";
import {makeStyles} from "@material-ui/core/styles";
import Actions from "./Actions";
import EditTrackItem from "./EditTrackItem";
import {styled} from "@mui/material/styles";
import CurrentlyEditTrack from "../../../data/tracks/CurrentlyEditTrack";
import CreatedTrack from "../../../data/tracks/CreatedTrack";

const useStyles = makeStyles({
    button: {
        maxWidth: '120px !important',
        maxHeight: '40px',
        minWidth: '120px !important',
        minHeight: '40px'
    },
    group: {
        '& li': {
            minHeight: '50px !important'
        }
    }
})

export default function LocalTrackGroup() {

    const classes = useStyles();

    const StyledInput = styled('input')({
        display: 'none',
    });

    const ctx = useContext(AppContext);
    const [localGpxOpen, setLocalGpxOpen] = useState(false);
    const [sortFiles, setSortFiles] = useState([]);
    const [indexTrack, setIndexTrack] = useState(-1);
    const [prevIndexTrack, setPrevIndexTrack] = useState(-1);

    useEffect(() => {
        loadInitialState(ctx.gpxFiles, ctx.setGpxFiles).then();
        // eslint-disable-next-line
    }, []);

    async function loadInitialState(gpxFiles, setGpxFiles) {
        const response = await Utils.fetchUtil(`${process.env.REACT_APP_GPX_API}/gpx/get-gpx-info`, {credentials: 'include'});
        if (response.ok) {
            let data = await response.json();
            data.all.forEach((item) => {
                let gpxLayer = {};
                gpxLayer.name = 'local:' + item.analysis.name;
                gpxLayer.localContent = `${process.env.REACT_APP_GPX_API}/gpx/get-gpx-file?name=` + encodeURIComponent(item.analysis.name);
                // gpxLayer.url
                gpxLayer.local = true;
                let newinfo = Object.assign({}, gpxFiles);
                gpxLayer.summary = item.analysis;
                gpxLayer.srtmSummary = item.srtmAnalysis;
                newinfo[gpxLayer.name] = gpxLayer;
                gpxFiles[gpxLayer.name] = gpxLayer;
                setGpxFiles(newinfo);
            });
        }

    }

    let localGpxFiles = (!ctx.gpxFiles ? [] :
        Object.values(ctx.gpxFiles).filter((item) => item.local === true));

    const clearLocalGpx = (ctx) => async (e) => {
        const response = await Utils.fetchUtil(`${process.env.REACT_APP_GPX_API}/gpx/clear`, {
            method: 'POST',
            credentials: 'include'
        });
        if (response.ok) {
            await response.json();
            let newinfo = Object.assign({}, ctx.gpxFiles);
            Object.values(ctx.gpxFiles).forEach((item) => {
                if (item.local) {
                    // clear up but not delete
                    newinfo[item.name].local = false;
                    newinfo[item.name].url = null;
                    newinfo[item.name].localContent = null;
                    // delete newinfo[item.name];
                }
            });
            ctx.setAppText('');
            ctx.setGpxFiles(newinfo);
        }
    }

    useEffect(() => {
        if (ctx.currentlyEditTrack) {
            //create new edit track
            if (ctx.createNewTrack) {
                setIndexTrack(-1);
                let track = structuredClone(ctx.currentlyEditTrack.pointsList);
                ctx.createdTracks.push(new CreatedTrack(('*Track ' + (ctx.createdTracks.length + 1)), track, false));
                ctx.setCreatedTracks([...ctx.createdTracks]);
                ctx.setCreateNewTrack(false);
            } else {
                if (prevIndexTrack !== indexTrack || prevIndexTrack === -1) {
                    //choice edit track from menu
                    if (indexTrack !== -1) {
                        if (ctx.createdTracks[indexTrack]) {
                            ctx.createdTracks[indexTrack].points = structuredClone(ctx.currentlyEditTrack.pointsList);
                            setPrevIndexTrack(indexTrack);
                            ctx.setCreatedTracks([...ctx.createdTracks]);
                        }
                    } else {
                        //update edit track
                        if (ctx.createdTracks[ctx.createdTracks.length - 1]) {
                            ctx.createdTracks[ctx.createdTracks.length - 1].points = structuredClone(ctx.currentlyEditTrack.pointsList);
                            ctx.setCreatedTracks([...ctx.createdTracks]);
                        }
                    }
                }
            }
            saveToLocalStorage(ctx.createdTracks);
        }
    }, [ctx.currentlyEditTrack, ctx.currentlyEditTrackDispatch]);

    function saveToLocalStorage(tracks) {
        let res = structuredClone(tracks);
        res.forEach(function (track) {
            track.selected = false;
        })
        localStorage.setItem('createdTracks', JSON.stringify(res));
    }

    const fileSelected = (ctx) => async (e) => {
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                let src = event.target.result;
                let gpxLayer = {};
                gpxLayer.name = 'local:' + file.name;
                gpxLayer.localContent = src;
                gpxLayer.local = true;
                Utils.uploadFile(ctx.gpxFiles, ctx.setGpxFiles, ctx, gpxLayer, file);
            });
            reader.readAsText(file);
        });
    }


    return <div className={classes.group}>
        <MenuItem sx={{ml: 3}} divider onClick={() => setLocalGpxOpen(!localGpxOpen)}>
            <ListItemIcon>
                <Folder fontSize="small"/>
            </ListItemIcon>
            <ListItemText>
                <Typography variant="inherit" noWrap>
                    Local
                </Typography>
            </ListItemText>
            <Typography variant="body2" color="textSecondary">
                {localGpxFiles.length + ctx.createdTracks.length > 0 ? `${localGpxFiles.length + ctx.createdTracks.length}` : ''}
            </Typography>
            {localGpxOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={localGpxOpen} timeout="auto" unmountOnExit>
            <Actions files={localGpxFiles} setSortFiles={setSortFiles}/>
            {localGpxFiles.length > 0 && (sortFiles.length > 0 ? sortFiles : localGpxFiles).map((file, index) => {
                return <TrackItem key={file + index}
                                  file={file}/>;
            })}
            {ctx.createdTracks.length > 0 && ctx.createdTracks.map((track, index) => {
                return <EditTrackItem key={'track' + index}
                                      index={index}
                                      setIndexTrack={setIndexTrack}
                                      track={track}/>;
            })}
            <MenuItem disableRipple={true}>
                <label htmlFor="contained-button-file">
                    <StyledInput accept=".gpx" id="contained-button-file" multiple type="file"
                                 onChange={fileSelected(ctx)}/>
                    <Button className={classes.button} variant="contained" component="span" sx={{ml: 3}}>
                        Upload
                    </Button>
                </label>
                <Button className={classes.button} variant="contained" component="span" sx={{ml: 2}}
                        onClick={() => ctx.setCreateNewTrack(!ctx.createNewTrack)}>
                    Create
                </Button>
            </MenuItem>
            {localGpxFiles.length === 0 ? <></> :
                <MenuItem disableRipple={true}>
                    <Button className={classes.button} variant="contained" component="span" sx={{ml: 3}}
                            onClick={clearLocalGpx(ctx)}>
                        Clear
                    </Button>
                    <Button className={classes.button} variant="contained" component="span" sx={{ml: 2}}
                            onClick={() => window.open(`${process.env.REACT_APP_GPX_API}/gpx/download-obf`)}>
                        Get OBF
                    </Button>
                </MenuItem>
            }
        </Collapse>
    </div>
}