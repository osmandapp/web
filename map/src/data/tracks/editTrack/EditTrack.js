export default class EditTrack {

    state = {
        newRouteLayer: null,
        pointsList: [],
        trackName: null,
        distance: 0,
        startDraw: false,
        stopDraw: false,
        deleteTrack: false,
        refreshLayer: false,
        deleteLayer: false,
        prepareMap: false,
        showTrack: false
    };

    getState() {
        return this.state;
    }
}