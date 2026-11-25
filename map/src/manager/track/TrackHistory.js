import cloneDeep from 'lodash-es/cloneDeep';
import isEmpty from 'lodash-es/isEmpty';
import { addDistanceToPoints } from './TracksManager';

export function toHistoryState(track) {
    const { wpts, pointsGroups } = cloneDeep({ wpts: track.wpts, pointsGroups: track.pointsGroups });
    const tracks = isEmpty(track.points) ? track.tracks : null;

    return { ...track, wpts, pointsGroups, layers: null, tracks };
}

export function fromHistoryState(state, current) {
    const restored = {
        ...toHistoryState(state),
        name: current.name,
        id: current.id,
        metaData: current.metaData,
        tracks: state.tracks ?? current.tracks,
        tracksPoints: current.tracksPoints,
        routeTypes: current.routeTypes,
        syncRouting: true, // will be 1st effect
        updateLayers: true, // will be 2nd effect
        layers: current.layers,
    };
    if (restored.points) {
        addDistanceToPoints(restored.points);
    }

    return restored;
}
