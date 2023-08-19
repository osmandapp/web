import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import { ListItemText, MenuItem, Switch, Tooltip, Typography } from '@mui/material';
import _ from 'lodash';
import TracksManager from '../../../context/TracksManager';

export default function LocalTrackItem({ track }) {
    const ctx = useContext(AppContext);

    const ref = ctx.localTracks.find((t) => t.name === track.name);

    if (!ref) {
        // console.debug('LocalTrackItem track not found (removed)', track.name);
        return null;
    }

    function onSwitchChanged(visible) {
        if (visible) {
            addTrackToMap();
        } else {
            deleteTrackFromMap();
        }
    }

    function cleanSelectedTrackIfNeed() {
        if (isAlreadyEdit()) {
            if (ctx.createTrack) {
                ctx.createTrack.enable = false; // stop-editor
                ctx.createTrack.clear = true;
                ctx.setCreateTrack({ ...ctx.createTrack });
            }
        }
    }

    function deleteTrackFromMap() {
        ref.selected = false;
        cleanSelectedTrackIfNeed();
        ctx.setLocalTracks([...ctx.localTracks]);
    }

    function addTrackToMap() {
        if (isAlreadyEdit() === false) {
            startEdit();
            updateLocalTrack();
            updateTrackInfoBlock();
        }
    }

    function updateLocalTrack() {
        ref.selected = true;
        ref.zoom = true;
        ref.analysis = TracksManager.prepareAnalysis(ref.analysis);
        TracksManager.addDistance(ref); // recalc-distance-local
        ctx.setLocalTracks([...ctx.localTracks]);
        ctx.setSelectedGpxFile({ ...track });
    }

    function updateTrackInfoBlock() {
        const type = ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK;
        ctx.setCurrentObjectType(type);
        ctx.setUpdateInfoBlock(true);
    }

    function startEdit() {
        if (ctx.createTrack?.enable && ctx.selectedGpxFile) {
            ctx.setCreateTrack({
                enable: true, // start-editor
                edit: true,
                closePrev: {
                    file: _.cloneDeep(ctx.selectedGpxFile), // call startEdit() before modifications
                },
            });
        } else {
            ctx.setCreateTrack({
                enable: true, // start-editor
                edit: true,
            });
        }
    }

    function isAlreadyEdit() {
        return !!(
            ctx.createTrack?.enable &&
            ctx.selectedGpxFile?.name === track.name &&
            ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK
        );
    }

    return (
        <div>
            <MenuItem key={'track._leaflet_id' + track.name} onClick={() => addTrackToMap()}>
                <Tooltip title={<div>{track.name}</div>}>
                    <ListItemText inset>
                        <Typography variant="inherit" noWrap>
                            {'* ' + track.name}
                        </Typography>
                    </ListItemText>
                </Tooltip>
                <Switch
                    checked={track.selected === true || isAlreadyEdit()}
                    onChange={(e) => onSwitchChanged(e.target.checked)}
                    onClick={(e) => e.stopPropagation()}
                />
            </MenuItem>
        </div>
    );
}
