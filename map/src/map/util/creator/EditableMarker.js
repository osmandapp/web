import L from 'leaflet';
import MarkerOptions from '../../markers/MarkerOptions';
import TracksManager, { getEditorActions, publishEditedTrack } from '../../../manager/track/TracksManager';
import { findPointIndex, movePoint } from '../../../manager/track/TrackOperations';

export default class EditableMarker {
    stopclick;
    dragPoint;

    constructor(map, ctx, latlng, options) {
        this.map = map;
        this.ctx = getEditorActions(ctx);
        this.latlng = latlng;
        this.options = options;
        this.dragPoint = null;
        this.stopclick = false;
    }

    create() {
        const marker = new L.Marker(this.latlng, {
            icon: MarkerOptions.options.route,
            draggable: true,
            ...this.options,
        });
        this.addEvents(marker);

        return marker;
    }

    addEvents(marker) {
        marker.on('dragstart', (e) => {
            this.ctx.setPointContextMenu({});
            this.dragStartPoint(e, this.ctx.selectedGpxFileRef.current);
        });
        marker.on('dragend', (e) => {
            this.ctx.setPointContextMenu({});
            this.dragEndPoint(e, this.ctx.selectedGpxFileRef.current);
            if (e.target.options.wpt) {
                e.target.dragging.disable();
                this.stopclick = true;
            }
        });
        marker.on('contextmenu', (e) => this.createPointContextMenu(e));
        marker.on('click', (e) => {
            e.originalEvent.stopPropagation();
            if (e.target.options.wpt) {
                if (this.stopclick) {
                    this.stopclick = false;
                } else {
                    let lat = e.target._latlng.lat;
                    let lng = e.target._latlng.lng;
                    const track = this.ctx.selectedGpxFileRef.current;
                    const point = track.wpts.find(
                        (point) => parseFloat(point.lat) === lat && parseFloat(point.lon) === lng
                    );
                    const wpt = {
                        trackWpt: true,
                        mapObj: true,
                        file: track.gpx,
                        ...e,
                        ...point,
                    };
                    this.ctx.setSelectedWpt(wpt);
                }
            }
        });
    }

    createPointContextMenu(e) {
        if (e.latlng) {
            this.ctx.setPointContextMenu({
                coord: e.latlng,
                pointId: e.target.options.pointId,
                element: e.originalEvent.target,
            });
        }
    }

    dragStartPoint(e, track) {
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;
        let indPoint = findPointIndex(track.points, e.target.options?.pointId);
        if (indPoint !== -1) {
            this.dragPoint = {
                indPoint: indPoint,
                lat: lat,
                lng: lng,
            };
        } else {
            let indWpt = track?.wpts.findIndex((point) => {
                return point.lat === lat && point.lon === lng;
            });
            if (indWpt !== -1) {
                this.dragPoint = {
                    indWpt: indWpt,
                    lat: lat,
                    lng: lng,
                };
            }
        }
    }

    dragEndPoint(e, current) {
        const track = { ...current };
        const lat = e.target._latlng.lat;
        const lng = e.target._latlng.lng;

        const indPoint = this.dragPoint.indPoint;

        if (indPoint !== undefined && indPoint !== -1) {
            track.points = movePoint(track.points, indPoint, { lat, lng });

            // finally
            publishEditedTrack(this.ctx, track);
        } else {
            const indWpt = this.dragPoint.indWpt;
            if (indWpt !== undefined && indWpt !== -1) {
                const currentWpt = track.wpts[indWpt];
                currentWpt.lat = lat;
                currentWpt.lon = lng;
                this.ctx.setSelectedGpxFile({ ...track, updateLayers: true });
                TracksManager.updateState(this.ctx);
            }
        }

        this.dragPoint = null;
    }
}
