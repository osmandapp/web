import AppContext from '../../../context/AppContext';
import { Alert, LinearProgress, ListItemText, MenuItem, Switch, Tooltip, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import Utils from '../../../util/Utils';
import TrackInfo from './TrackInfo';
import TracksManager, { isEmptyTrack } from '../../../context/TracksManager';

export default function CloudTrackItem({ file, customIcon = null }) {
    const ctx = useContext(AppContext);

    const [loadingTrack, setLoadingTrack] = useState(false);
    const [error, setError] = useState(false);

    async function enableLayer(setProgressVisible, visible) {
        if (!visible) {
            deleteTrackFromMap();
            setProgressVisible(false);
        } else {
            await addTrackToMap(setProgressVisible);
        }
    }

    function deleteTrackFromMap() {
        const newGpxFiles = Object.assign({}, ctx.gpxFiles);
        newGpxFiles[file.name].url = null;
        ctx.setGpxFiles(newGpxFiles);
        if (ctx.selectedGpxFile?.name === file.name) {
            ctx.setCurrentObjectType(null);
        }
    }

    async function addTrackToMap(setProgressVisible) {
        // Watch out for file.url because this component was called using different data sources.
        // CloudTrackGroup uses ctx.tracksGroups (no-url) but VisibleGroup uses ctx.gpxFiles (url exists)
        if (file.url || ctx.gpxFiles[file.name]?.url) {
            ctx.setCurrentObjectType(ctx.OBJECT_TYPE_CLOUD_TRACK);
            ctx.setSelectedGpxFile({ ...ctx.gpxFiles[file.name], zoom: true });
        } else {
            setProgressVisible(true);
            const URL = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file`;
            const qs = `?type=${encodeURIComponent(file.type)}&name=${encodeURIComponent(file.name)}`;
            const newGpxFiles = Object.assign({}, ctx.gpxFiles);
            newGpxFiles[file.name] = {
                url: URL + qs,
                clienttimems: file.clienttimems,
                updatetimems: file.updatetimems,
                name: file.name,
                type: 'GPX',
            };
            const f = await Utils.getFileData(newGpxFiles[file.name]);
            const gpxfile = new File([f], file.name, {
                type: 'text/plain',
            });
            const track = await TracksManager.getTrackData(gpxfile);
            setProgressVisible(false);
            if (isEmptyTrack(track) === false) {
                const type = ctx.OBJECT_TYPE_CLOUD_TRACK;
                ctx.setCurrentObjectType(type);
                track.name = file.name;
                Object.keys(track).forEach((t) => {
                    newGpxFiles[file.name][`${t}`] = track[t];
                });
                newGpxFiles[file.name].analysis = TracksManager.prepareAnalysis(newGpxFiles[file.name].analysis);
                ctx.setSelectedGpxFile(Object.assign({}, newGpxFiles[file.name]));
                ctx.setGpxFiles(newGpxFiles); // finally, success
            } else {
                setError(true);
            }
        }
    }

    return (
        <>
            <MenuItem key={file.name} onClick={() => addTrackToMap(ctx.setGpxLoading)}>
                <Tooltip title={<TrackInfo file={file} />}>
                    <ListItemText inset>
                        <Typography variant="inherit" noWrap>
                            {customIcon}
                            {TracksManager.getFileName(file)}
                        </Typography>
                    </ListItemText>
                </Tooltip>
                <Switch
                    disabled={loadingTrack}
                    checked={!!ctx.gpxFiles[file.name]?.url}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                        !file.local && enableLayer(setLoadingTrack, e.target.checked);
                    }}
                />
            </MenuItem>
            {loadingTrack ? <LinearProgress /> : <></>}
            {error && (
                <Alert
                    onClose={() => {
                        setError(false);
                    }}
                    severity="warning"
                >
                    Something went wrong!
                </Alert>
            )}
        </>
    );
}
