import L from 'leaflet';
import MarkerOptions from '../../markers/MarkerOptions';
import { getEditorActions, publishEditedTrack } from '../../../manager/track/TracksManager';
import { findPointIndex, findWptIndex, movePoint } from '../../../manager/track/TrackOperations';

export default class EditableMarker {
    dragPoint;

    constructor(ctx, latlng, options) {
        this.ctx = getEditorActions(ctx);
        this.latlng = latlng;
        this.options = options;
        this.dragPoint = null;
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
        });
        marker.on('contextmenu', (e) => this.createPointContextMenu(e));
        marker.on('click', (e) => {
            e.originalEvent.stopPropagation();
            if (e.target.options.wpt) {
                const track = this.ctx.selectedGpxFileRef.current;
                const point = track.wpts[findWptIndex(track.wpts, e.target.options.point?.wptId)];
                const wpt = {
                    trackWpt: true,
                    mapObj: true,
                    file: track.gpx,
                    ...e,
                    ...point,
                };
                this.ctx.setSelectedWpt(wpt);
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
        const indPoint = findPointIndex(track.points, e.target.options?.pointId);
        if (indPoint !== -1) {
            this.dragPoint = { indPoint };
        }
    }

    dragEndPoint(e, current) {
        const track = { ...current };
        const lat = e.target._latlng.lat;
        const lng = e.target._latlng.lng;

        if (this.dragPoint) {
            track.points = movePoint(track.points, this.dragPoint.indPoint, { lat, lng });

            // finally
            publishEditedTrack(this.ctx, track);
        }

        this.dragPoint = null;
    }
}
