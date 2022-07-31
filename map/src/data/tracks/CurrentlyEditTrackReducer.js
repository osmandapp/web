import CurrentlyEditTrack from "./CurrentlyEditTrack";
import Utils from "../../util/Utils";

export default function CurrentlyEditTrackReducer(state, action) {

    switch (action.type) {
        case 'startDraw': {
            return {
                ...state,
                prepareMap: false,
                startDraw: true,
            };
        }
        case 'stopDraw': {
            return {
                ...state,
                stopDraw: true,
            };
        }
        case 'deleteTrack': {
            return {
                ...state,
                deleteTrack: true,
            };
        }
        case 'start': {
            return {
                ...state,
                startDraw: false,
                newRouteLayer: action.newRouteLayer,
            };
        }
        case 'createTrack': {
            return {
                ...state,
                ...new CurrentlyEditTrack().getState(),
                prepareMap: true,
                stopDraw: false
            };
        }
        case 'click': {
            return {
                ...state,
                pointsList: getPointList(action.e),
                distance: getDistance(),
                deleteLayer: false
            };
        }
        case 'deletedClick': {
            return {
                ...state,
                pointsList: deletePoint(action.e),
                distance: getDistance()
            };
        }
        case 'dragendClick': {
            return {
                ...state,
                pointsList: updatePoint(),
                distance: getDistance()
            };
        }
        case 'showTrack': {
            return {
                ...state,
                trackName: action.track.name,
                deleted: false,
                pointsList: Utils.getPointsDist(action.track.points),
                newRouteLayer: action.routeLayer,
                prepareMap: false,
                stopDraw: false
            };
        }
        case 'clean': {
            return {
                ...state,
                newRouteLayer: null,
                pointsList: []
            };
        }
        case 'deletePoint': {
            return {
                ...state,
                pointsList: deletePointByIndex(action.index),
                distance: getDistance(),
                refreshLayer: true
            };
        }
        case 'refreshLayer': {
            return {
                ...state,
                newRouteLayer: action.layer,
                refreshLayer: false
            };
        }
        case 'deleteLayer': {
            return {
                ...state,
                deleteLayer: true
            };
        }
        case 'delete': {
            return {
                newRouteLayer: null,
                pointsList: [],
                deleteTrack: false
            };
        }
        default:
            return {
                ...state
            };
    }

    function deletePointByIndex(index) {
        if (state.pointsList.length === state.newRouteLayer._latlngs.length) {
            state.pointsList.splice(index, 1);
            state.pointsList = Utils.getPointsDist(state.pointsList);
        }

        return state.pointsList;
    }

    function getPointList(e) {
        state.pointsList.push({lat: e.latlng.lat, lng: e.latlng.lng})
        state.pointsList = Utils.removeDuplicatesPoints(state.pointsList);
        state.pointsList = Utils.getPointsDist(state.pointsList);

        return state.pointsList;
    }

    function deletePoint(e) {
        if (state.newRouteLayer) {
            for (let i = 0; i < state.pointsList.length; i++) {
                if (state.pointsList[i].lat === e.latlng.lat && state.pointsList[i].lng === e.latlng.lng) {
                    state.pointsList.splice(i, 1);
                    break;
                }
            }
        }
        return Utils.getPointsDist(state.pointsList);
    }

    function updatePoint() {
        if (state.newRouteLayer._latlngs) {
            state.pointsList = [];
            state.newRouteLayer._latlngs.forEach(p => state.pointsList.push({lat: p.lat, lng: p.lng}))
            state.pointsList = Utils.removeDuplicatesPoints(state.pointsList);
            return Utils.getPointsDist(state.pointsList);
        } else {
            return state.pointsList;
        }
    }

    function getDistance() {
        return state.pointsList && state.pointsList.length > 0 ? state.pointsList[state.pointsList.length - 1].dist : 0;
    }
}