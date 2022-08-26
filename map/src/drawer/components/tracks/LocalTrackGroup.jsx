import {Button, Collapse, ListItemIcon, ListItemText, MenuItem, Tooltip, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Folder} from "@mui/icons-material";
import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../../context/AppContext";
import Utils from "../../../util/Utils";
import Actions from "./Actions";
import LocalClientTrackItem from "./LocalClientTrackItem";
import {styled} from "@mui/material/styles";
import drawerStyles from "../../styles/DrawerStyles";
import LocalServerTrackItem from "./LocalServerTrackItem";
import TracksManager from "../../../context/TracksManager";

export default function LocalTrackGroup() {

    const styles = drawerStyles();

    const StyledInput = styled('input')({
        display: 'none',
    });

    const ctx = useContext(AppContext);
    const [localGpxOpen, setLocalGpxOpen] = useState(false);
    const [sortFiles, setSortFiles] = useState([]);

    useEffect(() => {
        loadInitialState(ctx.gpxFiles, ctx.setGpxFiles).then();
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
                gpxLayer.metadata = item.metadata;
                gpxLayer.summary = item.analysis;
                gpxLayer.srtmSummary = item.srtmAnalysis;
                newinfo[gpxLayer.name] = gpxLayer;
                gpxFiles[gpxLayer.name] = gpxLayer;
                setGpxFiles(newinfo);
            });
        }

    }

    let localGpxFiles = !ctx.gpxFiles ? [] :
        Object.values(ctx.gpxFiles).filter((item) => item.local === true);

    const clearLocalTracks = () => async () => {
        await clearLocalServerTracks();
        clearLocalClientTracks();
        ctx.setCurrentObjectType(null);
    }

    async function clearLocalServerTracks() {
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
                }
            });
            ctx.setGpxFiles(newinfo);
        }
    }

    function clearLocalClientTracks() {
        ctx.setLocalClientsTracks([]);
        localStorage.removeItem('localClientsTracks');
    }

    function generateLocalClientTracks() {
        ctx.setLocalClientsTracks([...ctx.localClientsTracks, TracksManager.generate(ctx)])
        TracksManager.saveTracks(ctx.localClientsTracks);
    }

    const fileSelected = (ctx) => async (e) => {
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                let src = event.target.result;
                let gpxLayer = {};
                gpxLayer.name = TracksManager.prepareName(file.name);
                gpxLayer.content = src;
                gpxLayer.gpx = src;
                Utils.getInfoFile(gpxLayer, file);
                ctx.localClientsTracks.push(gpxLayer);
                ctx.setLocalClientsTracks([...ctx.localClientsTracks]);
                TracksManager.saveTracks(ctx.localClientsTracks);
            });
            reader.readAsText(file);
        });
    }


    return <div className={styles.drawerItem}>
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
                {localGpxFiles.length + ctx.localClientsTracks.length > 0 ? `${localGpxFiles.length + ctx.localClientsTracks.length}` : ''}
            </Typography>
            {localGpxOpen ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={localGpxOpen} timeout="auto" unmountOnExit>
            <Actions files={localGpxFiles} setSortFiles={setSortFiles}/>
            {localGpxFiles.length > 0 && (sortFiles.length > 0 ? sortFiles : localGpxFiles).map((file, index) => {
                return <LocalServerTrackItem key={file + index}
                                             file={file}/>;
            })}
            {ctx.localClientsTracks.length > 0 && ctx.localClientsTracks.map((track, index) => {
                return <LocalClientTrackItem key={'track' + index}
                                             track={track}
                                             index={index}/>;
            })}
            <MenuItem disableRipple={true}>
                <label htmlFor="contained-button-file">
                    <StyledInput accept=".gpx" id="contained-button-file" multiple type="file"
                                 onChange={fileSelected(ctx)}/>
                    <Button className={styles.button} variant="contained" component="span" sx={{ml: 3}}>
                        Upload
                    </Button>
                </label>
                <Button className={styles.button} variant="contained" component="span" sx={{ml: 2}}
                        onClick={() => generateLocalClientTracks()}>
                    Generate
                </Button>
            </MenuItem>
            {(localGpxFiles.length !== 0 || ctx.localClientsTracks.length !== 0) &&
                <MenuItem disableRipple={true}>
                    <Button className={styles.button} variant="contained" component="span" sx={{ml: 3}}
                            onClick={clearLocalTracks(ctx)}>
                        Clear
                    </Button>
                </MenuItem>
            }
        </Collapse>
    </div>
}