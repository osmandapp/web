import cloneDeep from 'lodash-es/cloneDeep';
import { addDistanceToPoints } from './TracksManager';
import { withCachedRoutes } from '../../context/TracksRoutingCache';

export function toHistoryState(track) {
    const { wpts, pointsGroups } = cloneDeep({ wpts: track.wpts, pointsGroups: track.pointsGroups });

    return { ...track, wpts, pointsGroups, layers: null, analysisTracks: null, analysisPoints: null };
}

export function fromHistoryState(state, ctx) {
    const restored = withCachedRoutes(
        {
            ...toHistoryState(state),
            name: ctx.selectedGpxFile.name,
            id: ctx.selectedGpxFile.id,
            metaData: ctx.selectedGpxFile.metaData,
            analysisTracks: ctx.selectedGpxFile.analysisTracks,
            analysisPoints: ctx.selectedGpxFile.analysisPoints,
            routeTypes: ctx.selectedGpxFile.routeTypes,
            updateLayers: true, // will be 1st effect
            layers: ctx.selectedGpxFile.layers,
        },
        ctx
    );
    if (restored.points) {
        addDistanceToPoints(restored.points);
    }

    return restored;
}
