import EditTrack from "./EditTrack";
import EditTrackAction from "./EditTrackAction";
import Utils from "../../../util/Utils";

export default function EditTrackReducer(state, action) {

    switch (action.type) {
        case EditTrackAction.chooseStartDraw: {
            return {
                ...state,
                prepareMap: false,
                startDraw: true,
            };
        }
        case EditTrackAction.startDraw: {
            return {
                ...state,
                startDraw: false,
                newRouteLayer: action.newRouteLayer,
            };
        }
        case EditTrackAction.stopDraw: {
            return {
                ...state,
                stopDraw: true,
            };
        }
        case EditTrackAction.createEditTrack: {
            console.log(true)
            return {
                ...state,
                ...new EditTrack().getState(),
                prepareMap: true,
                stopDraw: false
            };
        }
        case EditTrackAction.refreshLayer: {
            return {
                ...state,
                newRouteLayer: action.layer,
                refreshLayer: false
            };
        }
        case EditTrackAction.showTrack: {
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
        case EditTrackAction.click: {
            return {
                ...state,
                pointsList: getPointList(action.e),
                distance: getDistance(),
                deleteLayer: false
            };
        }
        case EditTrackAction.deletedClick: {
            return {
                ...state,
                pointsList: deletePoint(action.e),
                distance: getDistance()
            };
        }
        case EditTrackAction.dragendClick: {
            return {
                ...state,
                pointsList: updatePoint(),
                distance: getDistance()
            };
        }
        case EditTrackAction.chooseDeleteTrack: {
            return {
                ...state,
                deleteTrack: true,
            };
        }
        case EditTrackAction.deleteTrack: {
            return {
                newRouteLayer: null,
                pointsList: [],
                deleteTrack: false
            };
        }
        case EditTrackAction.deletePoint: {
            return {
                ...state,
                pointsList: deletePointByIndex(action.index),
                distance: getDistance(),
                refreshLayer: true
            };
        }
        case EditTrackAction.deleteLayer: {
            return {
                ...state,
                deleteLayer: true
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