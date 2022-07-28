import CurrentlyEditTrack from "./CurrentlyEditTrack";
import Utils from "../../util/Utils";

export default function CurrentlyEditTrackReducer(state, action) {

    switch (action.type) {
        case 'startDraw': {
            return {
                ...state,
                startDraw: true,
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
                createTrack: false,
                newRouteLayer: action.newRouteLayer,
            };
        }
        case 'createTrack': {
            return {
                ...state,
                ...new CurrentlyEditTrack().getState()
            };
        }
        case 'click': {
            return {
                ...state,
                pointsList: getPointList(action.e),
                distance: getDistance()
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
                pointsList: action.pointsList,
                newRouteLayer: action.routeLayer
            };
        }
        case 'clean': {
            return {
                ...state,
                newRouteLayer: null,
                pointsList: []
            };
        }
        case 'addDeletePointIndex': {
            return {
                ...state,
                deletePoint: action.index
            };
        }
        case 'deletePoint': {
            return {
                ...state,
                pointsList: action.pointsList,
                newRouteLayer: action.layer,
                distance: action.distance,
                deletePoint: -1
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