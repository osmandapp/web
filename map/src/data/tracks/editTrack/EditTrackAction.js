export default class EditTrackAction {
    static chooseStartDraw = new EditTrackAction('chooseStartDraw');
    static startDraw = new EditTrackAction('startDraw');
    static stopDraw = new EditTrackAction('stopDraw');

    static createEditTrack = new EditTrackAction('createEditTrack');

    static refreshLayer = new EditTrackAction('refreshLayer');
    static showTrack = new EditTrackAction('showTrack');

    static click = new EditTrackAction('click');
    static deletedClick = new EditTrackAction('deletedClick');
    static dragendClick = new EditTrackAction('dragendClick');

    static chooseDeleteTrack = new EditTrackAction('chooseDeleteTrack');
    static deleteTrack = new EditTrackAction('deleteTrack');
    static deletePoint = new EditTrackAction('deletePoint');
    static deleteLayer = new EditTrackAction('deleteLayer');

    constructor(name) {
        this.name = name;
    }
    toString() {
        return `EditTrackAction.${this.name}`;
    }
}