import { useContext, useMemo } from 'react';
import AppContext, { isLocalTrack } from '../../context/AppContext';
import { ListItemText, MenuItem, Switch, Tooltip, Typography } from '@mui/material';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import TrackInfo from '../tracks/TrackInfo';
import { startEdit, updateLocalTrack, updateTrackInfoBlock } from './PlanRouteMenu';

export default function LocalTrackItem({ track }) {
    const ctx = useContext(AppContext);

    const [, , mobile] = useWindowSize();

    const info = useMemo(() => <TrackInfo file={track} />, [track]);

    const ref = ctx.localTracks.find((t) => t?.name === track.name);

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
                const updatedTrack = {
                    ...ctx.createTrack,
                    enable: false, // stop-editor
                    clear: true,
                };
                ctx.setCreateTrack(updatedTrack);
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
            startEdit(ctx);
            updateLocalTrack(ref, ctx, track);
            updateTrackInfoBlock(ctx);
            ctx.setSelectedLocalTrackObj({ ...track });
        }
    }

    function isAlreadyEdit() {
        return !!(ctx.createTrack?.enable && ctx.selectedGpxFile?.name === track.name && isLocalTrack(ctx));
    }

    return (
        <div>
            <Tooltip title={info} arrow placement={mobile ? 'bottom' : 'right'} disableInteractive>
                <MenuItem
                    key={'track._leaflet_id' + track.name}
                    id={'se-local-track-' + track.name}
                    onClick={() => addTrackToMap()}
                >
                    <ListItemText inset>
                        <Typography variant="inherit" noWrap>
                            {'* ' + track.name}
                        </Typography>
                    </ListItemText>
                    <Switch
                        checked={track.selected === true || isAlreadyEdit()}
                        onChange={(e) => onSwitchChanged(e.target.checked)}
                        onClick={(e) => e.stopPropagation()}
                    />
                </MenuItem>
            </Tooltip>
        </div>
    );
}
