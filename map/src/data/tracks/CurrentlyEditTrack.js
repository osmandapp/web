export default class CurrentlyEditTrack {

    state = {
        newRouteLayer: null,
        pointsList: [],
        trackName: null,
        finished: false,
        distance: 0,
        update: false,
        deletePoint: -1
    };

    getState() {
        return this.state;
    }
}