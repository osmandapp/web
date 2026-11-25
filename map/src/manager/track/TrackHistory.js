import cloneDeep from 'lodash-es/cloneDeep';
import { addDistanceToPoints } from './TracksManager';

export function toHistoryState(track) {
    const { wpts, pointsGroups } = cloneDeep({ wpts: track.wpts, pointsGroups: track.pointsGroups });

    return { ...track, wpts, pointsGroups, layers: null, tracks: null };
}

export function fromHistoryState(state, current) {
    const restored = {
        ...toHistoryState(state),
        name: current.name,
        id: current.id,
        metaData: current.metaData,
        tracks: current.tracks,
        tracksPoints: current.tracksPoints,
        syncRouting: true, // will be 1st effect
        updateLayers: true, // will be 2nd effect
        layers: current.layers,
    };
    if (restored.points) {
        addDistanceToPoints(restored.points);
    }

    return restored;
}
