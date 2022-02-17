import React, { useEffect, useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import {
    Typography, ListItemText, Switch, Collapse,
} from "@mui/material";
import {
    Button, MenuItem, ListItemIcon, Tooltip,
} from "@mui/material";
import {
    DirectionsWalk, ExpandLess, ExpandMore,
} from '@mui/icons-material';
import AppContext from "../../context/AppContext"
import Utils from "../../util/Utils";


const StyledInput = styled('input')({
    display: 'none',
});


function updateTextInfo(gpxFiles, ctx) {
    // Local GPX files: undefined tracks, NaN km, undefined wpts
    let dist = 0;
    let tracks = 0;
    let wpts = 0;
    Object.values(gpxFiles).forEach((item) => {
        if (item.local === true && item.summary) {
            if (item.summary.totalTracks) {
                tracks += item.summary.totalTracks;
            }
            if (item.summary.wptPoints) {
                wpts += item.summary.wptPoints;
            }
            if (item.summary.totalDistance) {
                dist += item.summary.totalDistance;
            }
        }
    });
    ctx.setAppText(`Local GPX files: ${tracks} tracks, ${(dist / 1000.0).toFixed(1)} km, ${wpts} wpts`)
}

async function loadInitialState(gpxFiles, setGpxFiles) {
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_GPX_API}/gpx/get-gpx-info`, { credentials: 'include' });
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

async function uploadFile(gpxFiles, setGpxFiles, ctx, gpxLayer, file) {
    let formData = new FormData();
    formData.append('file', file);
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_GPX_API}/gpx/upload-session-gpx`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    });
    if (response.ok) {
        let data = await response.json();
        let newinfo = Object.assign({}, gpxFiles);
        if (data.info) {
            gpxLayer.summary = data.info.analysis;
            gpxLayer.srtmSummary = data.info.srtmAnalysis;
        }
        newinfo[gpxLayer.name] = gpxLayer;
        gpxFiles[gpxLayer.name] = gpxLayer;
        setGpxFiles(newinfo);
        updateTextInfo(gpxFiles, ctx);
    } else {
        let message = await response.text();
        alert(message);
    }
}


const clearLocalGpx = (ctx) => async (e) => {
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_GPX_API}/gpx/clear`, { method: 'POST', credentials: 'include' });
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


const fileSelected = (ctx) => async (e) => {
    //    let file = e.target.files[0];

    Array.from(e.target.files).forEach((file) => {
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            let src = event.target.result;
            let gpxLayer = {};
            gpxLayer.name = 'local:' + file.name;
            gpxLayer.localContent = src;
            gpxLayer.local = true;
            uploadFile(ctx.gpxFiles, ctx.setGpxFiles, ctx, gpxLayer, file);
        });
        reader.readAsText(file);
    });
}

export default function LocalGpx() {
    const ctx = useContext(AppContext);
    const [localGpxOpen, setLocalGpxOpen] = useState(false);

    useEffect(() => {
        loadInitialState(ctx.gpxFiles, ctx.setGpxFiles);
    // eslint-disable-next-line
    }, []);

    let localGpxFiles = (!ctx.gpxFiles ? [] :
        Object.values(ctx.gpxFiles).filter((item) => item.local === true));

    return <>
        <MenuItem sx={{ mb: 1 }} onClick={(e) => setLocalGpxOpen(!localGpxOpen)}>
            <ListItemIcon>
                <DirectionsWalk fontSize="small" />
            </ListItemIcon>
            <ListItemText>Local Tracks {localGpxFiles.length > 0 ? `(${localGpxFiles.length})` : ''} </ListItemText>
            {localGpxOpen ? <ExpandLess /> : <ExpandMore />}
        </MenuItem>

        <Collapse in={localGpxOpen} timeout="auto" unmountOnExit>
            {localGpxFiles.map((item) => (
                <MenuItem key={item.name} onClick={(e) => ctx.setSelectedGpxFile(item)}>
                    <Tooltip title={item.name}>
                        <ListItemText inset>
                            <Typography variant="inherit" noWrap>
                                {item.name.slice(6, -4).replace('_', ' ')}
                            </Typography>
                        </ListItemText>
                    </Tooltip>
                    <Switch
                        checked={!!item.url}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                            const newGpxFiles = Object.assign({}, ctx.gpxFiles);
                            if (!e.target.checked) {
                                // delete newGpxFiles[item.name];
                                newGpxFiles[item.name].url = null;
                                if (ctx.selectedGpxFile?.name === item.name) {
                                    ctx.setSelectedGpxFile(null);
                                    if (ctx.mapMarkerListener) {
                                        ctx.mapMarkerListener(null, null);
                                    }
                                }
                            } else {
                                newGpxFiles[item.name].url = item.localContent;
                                newGpxFiles[item.name].urlopts = { credentials: 'include' }
                                ctx.setSelectedGpxFile(item);
                            }
                            ctx.setGpxFiles(newGpxFiles);
                        }} />
                </MenuItem>
            ))}
            <MenuItem disableRipple={true}>
                <label htmlFor="contained-button-file" >
                    <StyledInput accept=".gpx" id="contained-button-file" multiple type="file"
                        onChange={fileSelected(ctx)} />
                    <Button variant="contained" component="span" sx={{ ml: 3 }}>
                        Upload
                    </Button>
                </label>
            </MenuItem>
            { localGpxFiles.length === 0 ? <></> :
                <MenuItem disableRipple={true}>
                    <Button variant="contained" component="span" sx={{ ml: 3 }}
                        onClick={clearLocalGpx(ctx)}>
                        Clear
                    </Button>
                    <Button variant="contained" component="span" sx={{ ml: 2 }}
                        onClick={() => window.open(`${process.env.REACT_APP_GPX_API}/gpx/download-obf`)}>
                        Get OBF
                    </Button>
                </MenuItem>
            }

        </Collapse>
    </>;
}