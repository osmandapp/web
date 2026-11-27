import cloneDeep from 'lodash-es/cloneDeep';
import { addDistanceToPoints } from './TracksManager';

export function toHistoryState(track) {
    const { wpts, pointsGroups } = cloneDeep({ wpts: track.wpts, pointsGroups: track.pointsGroups });

    return { ...track, wpts, pointsGroups, layers: null, analysisTracks: null, analysisPoints: null };
}

export function fromHistoryState(state, current) {
    const restored = {
        ...toHistoryState(state),
        name: current.name,
        id: current.id,
        metaData: current.metaData,
        analysisTracks: current.analysisTracks,
        analysisPoints: current.analysisPoints,
        routeTypes: current.routeTypes,
        updateLayers: true, // will be 1st effect
        layers: current.layers,
    };
    if (restored.points) {
        addDistanceToPoints(restored.points);
    }

    return restored;
}
