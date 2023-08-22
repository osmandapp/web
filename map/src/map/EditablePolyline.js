import L from 'leaflet';
import TrackLayerProvider from './TrackLayerProvider';
import MarkerOptions from './markers/MarkerOptions';
import GeometryUtil from 'leaflet-geometryutil';
import _ from 'lodash';
import TracksManager, { isPointUnrouted } from '../context/TracksManager';
import EditableMarker from './EditableMarker';
import TracksRoutingCache from '../context/TracksRoutingCache';

export default class EditablePolyline {
    currentPolyline;

    constructor(map, ctx, points, layer, track, style) {
        this.map = map;
        this.ctx = ctx;
        this.points = points;
        this.layer = layer;
        this.track = track;
        this.style = style;
    }

    create() {
        let polyline = this.layer;
        if (!polyline && this.points) {
            polyline = this.createBasePolyline();
        }
        if (polyline) {
            let marker = new L.Marker(new L.LatLng(null, null), {
                icon: MarkerOptions.options.route,
                title: 'poly',
                draggable: true,
            });
            if (this.map) {
                // map=null used by refreshTempLine()
                this.addEvents(this.map, polyline, marker);
            }
        }
        return polyline;
    }

    addEvents(map, polyline, marker) {
        function mousemoveMap(e) {
            let coordinates = map.mouseEventToLatLng(e.originalEvent);
            const closest = GeometryUtil.closest(map, polyline, coordinates);
            if (closest?.distance > polyline.options.weight / 2 + 1) {
                if (marker._icon) {
                    marker._icon.style.display = 'none'; // invisible
                    map.off('mousemove', mousemoveMap);
                }
            }
        }

        polyline.on('mousemove', (e) => {
            this.mousemovePolyline(e, marker);
            this.map.on('mousemove', mousemoveMap);
        });

        marker.on('drag', () => {
            /**
             * When marker's icon style is set to 'none' (see mousemoveMap),
             * mouse events will propagate to the parent (parent is map).
             *
             * This leads to the glitch: both marker and map will get mouse
             * events at the same moment: 'dragend' to marker and 'click' to map.
             *
             * To solve the problem, just keep marker icon visible during dragging.
             */
            marker._icon.style.display = ''; // visible
        });

        marker.on('dragstart', (e) => {
            marker._icon.style.display = ''; // visible
            this.ctx.setPointContextMenu({});
            this.dragStartNewPoint(e, this.track);
        });

        marker.on('dragend', (e) => {
            this.ctx.setPointContextMenu({});
            this.dragEndNewPoint(e, this.ctx.setGpxLoading, this.track).then(() => {
                this.ctx.setGpxLoading(false);
                if (this.map.hasLayer(marker)) {
                    marker.removeFrom(this.map);
                }
            });
        });
    }

    createBasePolyline() {
        let polyline = new L.Polyline(this.points, TrackLayerProvider.getPolylineOpt());
        if (this.style) {
            polyline.setStyle(this.style);
        } else {
            polyline.setStyle({
                color: this.ctx.trackRouter.getColor(),
            });
        }
        return polyline;
    }

    mousemovePolyline(e, marker) {
        let coordinates = this.map.mouseEventToLatLng(e.originalEvent);
        marker.setLatLng(coordinates);
        if (!this.map.hasLayer(marker)) {
            marker.addTo(this.map);
        }
        marker._icon.style.display = '';
        this.currentPolyline = e.target._leaflet_id;
    }

    dragStartNewPoint(e, track) {
        let dragPoint = null;
        const lat = e.target._latlng.lat;
        const lng = e.target._latlng.lng;

        const currentLayer = track.layers._layers[this.currentPolyline];
        const currentLayerPoints = currentLayer._latlngs;
        const points = track.points;

        const nextPoint = TrackLayerProvider.getPointByPolyline(currentLayer, points);
        const indexOf = nextPoint ? _.indexOf(points, nextPoint, 0) : -1;

        if (nextPoint && indexOf !== -1) {
            // 100% found
            dragPoint = {
                index: indexOf,
                lat: lat,
                lng: lng,
            };
            // let index = _.indexOf(points, nextPoint, 0);
            // let trackInd = index;
            // if (points[trackInd - 1].profile === TracksManager.PROFILE_LINE) {
            //     console.log('oops-1');
            //     currentLayer._latlngs.forEach((p) => {
            //         let currentInd = _.indexOf(currentLayerPoints, p, 0);
            //         if (currentInd < currentLayerPoints.length - 1) {
            //             let next = currentLayerPoints[currentInd + 1];
            //             if (GeometryUtil.belongsSegment(new L.LatLng(lat, lng), new L.LatLng(p.lat, p.lng), next)) {
            //                 index = currentInd + 1;
            //             }
            //         }
            //     });
            //     dragPoint = {
            //         trackInd: trackInd,
            //         ind: index,
            //         lat: lat,
            //         lng: lng,
            //     };
            // } else {
            //     dragPoint = {
            //         ind: index,
            //         lat: lat,
            //         lng: lng,
            //     };
            // }
        } else {
            // let index;
            // let trackInd;
            let deepIndexOf = -1;
            const findPoint = new L.LatLng(lat, lng);
            // const currentLayer = track.layers._layers[this.currentPolyline];
            // const currentLayerPoints = currentLayer._latlngs;
            currentLayer._latlngs.forEach((p, currentIndex) => {
                // let currentInd = _.indexOf(currentLayerPoints, p, 0);
                if (deepIndexOf === -1) {
                    if (currentIndex < currentLayerPoints.length - 1) {
                        const thisPoint = new L.LatLng(p.lat, p.lng);
                        const nextPoint = currentLayerPoints[currentIndex + 1];
                        if (GeometryUtil.belongsSegment(findPoint, thisPoint, nextPoint)) {
                            if (deepIndexOf === -1) {
                                deepIndexOf = currentIndex + 1; // try to keep found-in-segment point
                            }
                            // index = currentIndex + 1;
                            track.points.forEach((tp, tpIndex) => {
                                if (tp.lat === p.lat && tp.lng === p.lng) {
                                    const theDeepest = _.indexOf(track.points, tp, 0); // try the deepest
                                    deepIndexOf = theDeepest !== -1 ? theDeepest + 1 : deepIndexOf; // next to the deepest
                                    console.log('the-deepest', deepIndexOf, currentIndex, tpIndex);
                                    // trackInd = _.indexOf(track.points, tp, 0);
                                }
                            });
                        }
                    }
                }
            });
            console.log('deep', deepIndexOf);
            if (deepIndexOf !== -1) {
                dragPoint = {
                    // trackInd: trackInd + 1,
                    // ind: index,
                    index: deepIndexOf,
                    lat: lat,
                    lng: lng,
                };
            }
        }

        if (dragPoint) {
            track.zoom = false;
            track.addPoint = false;
            track.dragPoint = dragPoint;
            this.ctx.setSelectedGpxFile({ ...track });
        }
    }

    async dragEndNewPoint(e, setLoading, track) {
        if (!track.dragPoint) {
            console.debug('dragEndNewPoint empty dragPoint');
            return;
        }

        setLoading(true);
        const lat = e.target._latlng.lat;
        const lng = e.target._latlng.lng;

        const newMarker = new EditableMarker(this.map, this.ctx, new L.LatLng(lat, lng), null, track).create();
        track.layers.addLayer(newMarker);

        const currentLayer = track.layers._layers[this.currentPolyline];
        const trackPoints = track.points; // ref
        const index = track.dragPoint.index;

        // const ind = -1;

        // const prevPoint = trackPoints[track.dragPoint.trackInd - 1];
        // const nextPoint = trackPoints[track.dragPoint.trackInd];

        // const isLine = prevPoint && (prevPoint.profile === TracksManager.PROFILE_LINE || !prevPoint.profile);

        // if (isLine) {
        //     let newPoint = {
        //         lat: lat,
        //         lng: lng,
        //         profile: prevPoint.profile,
        //         geoProfile: prevPoint.geoProfile,
        //     };
        //     if (nextPoint.geometry && nextPoint.geometry.length > 0) {
        //         this.map.removeLayer(currentLayer);
        //         let oldGeo = nextPoint.geometry;
        //         let newGeo = oldGeo.splice(0, ind);
        //         newGeo.push({
        //             lat: lat,
        //             lng: lng,
        //         });
        //         oldGeo.unshift({
        //             lat: lat,
        //             lng: lng,
        //         });
        //         nextPoint.geometry = oldGeo;
        //         newPoint.geometry = newGeo;

        //         this.activatePolyline({ start: prevPoint, end: newPoint });
        //         this.activatePolyline({ start: newPoint, end: nextPoint });
        //     } else {
        //         currentLayer._latlngs.splice(ind, 0, newPoint);
        //         currentLayer.setLatLngs(currentLayer._latlngs);
        //     }
        //     trackPoints.splice(track.dragPoint.trackInd, 0, newPoint);
        // } else {

        console.log('index', index);

        const prevPoint = trackPoints[index - 1];

        if (isPointUnrouted({ point: trackPoints[index], pointIndex: index, prevPoint })) {
            const newPoint = { lat, lng };
            const nextPoint = trackPoints[index];
            if (nextPoint.geometry && nextPoint.geometry.length > 0) {
                console.log('unrouted-1'); // FIXME when this happens?
                this.map.removeLayer(currentLayer);
                let oldGeo = nextPoint.geometry;
                let newGeo = oldGeo.splice(0, index); // FIXME test index or index -1 ???
                newGeo.push({
                    lat: lat,
                    lng: lng,
                });
                oldGeo.unshift({
                    lat: lat,
                    lng: lng,
                });
                nextPoint.geometry = oldGeo;
                newPoint.geometry = newGeo;

                this.activatePolyline({ start: prevPoint, end: newPoint, temp: false });
                this.activatePolyline({ start: newPoint, end: nextPoint, temp: false });
            } else {
                // unrouted-no-geometry (gpx)
                console.log('unrouted-2');
                currentLayer._latlngs.splice(index, 0, newPoint);
                currentLayer.setLatLngs(currentLayer._latlngs);
            }
            trackPoints.splice(index, 0, newPoint);
        } else {
            const newPoint = _.cloneDeep(track.points[index]);
            // const oldPoint = _.cloneDeep(newPoint);

            newPoint.lat = lat;
            newPoint.lng = lng;
            newPoint.geometry = [];
            newPoint.profile = prevPoint.profile;
            newPoint.geoProfile = Object.assign({}, prevPoint.geoProfile);

            trackPoints.splice(index, 0, newPoint);
            const currentPoint = trackPoints[index];

            const nextPoint = trackPoints[index + 1];
            nextPoint.geometry = [];

            this.map.removeLayer(currentLayer);

            const polylineTempCurrent = this.activatePolyline({ start: prevPoint, end: currentPoint, temp: true });
            const polylineTempNext = this.activatePolyline({ start: currentPoint, end: nextPoint, temp: true });

            let segments = [];
            segments = TracksRoutingCache.addSegmentToRouting(
                prevPoint,
                currentPoint,
                null, // oldPoint,
                polylineTempCurrent,
                segments
            );
            segments = TracksRoutingCache.addSegmentToRouting(
                currentPoint,
                nextPoint,
                null, // oldPoint,
                polylineTempNext,
                segments
            );
            this.ctx.setRoutingNewSegments([...segments]);
        }

        // finally
        track.zoom = false;
        track.addPoint = false;
        track.dragPoint = false;
        track.updateLayers = true;
        this.ctx.setSelectedGpxFile({ ...track });

        this.ctx.trackState.update = true;
        this.ctx.setTrackState({ ...this.ctx.trackState });
    }

    activatePolyline({ start, end, temp }) {
        let polyline = null;

        if (end.geometry && end.geometry.length > 0) {
            console.log('geo-yes');
            polyline = new EditablePolyline(this.map, this.ctx, end.geometry, null, this.track).create();
        } else {
            console.log('geo-no');
            polyline = new EditablePolyline(this.map, this.ctx, [start, end], null, this.track).create();
        }

        if (temp) {
            console.log('temp-yes');
            polyline.setStyle(TrackLayerProvider.TEMP_LINE_STYLE);
            polyline.options.name = TrackLayerProvider.TEMP_LAYER_FLAG;
            polyline.point = end; // used in drawRoutePoints() and updateLayers()
        } else {
            console.log('temp-no');
            const color = this.ctx.trackRouter.getColor(
                // use PROFILE_LINE color for unrouted segments
                start.profile ? start : { profile: TracksManager.PROFILE_LINE }
            );
            polyline.setStyle({ color });
        }

        polyline.addTo(this.track.layers);
        // FIXME register layers (but check is still really need)

        return polyline;
    }

    // createPolyline(startPoint, endPoint) {
    //     let polyline = null;
    //     if (startPoint.profile === TracksManager.PROFILE_LINE) {
    //         if (endPoint.geometry) {
    //             polyline = new EditablePolyline(this.map, this.ctx, endPoint.geometry).create();
    //         } else {
    //             polyline = new EditablePolyline(this.map, this.ctx, [startPoint, endPoint]).create();
    //         }
    //         polyline.setStyle({
    //             color: this.ctx.trackRouter.getColor(startPoint),
    //         });
    //         this.ctx.selectedGpxFile.layers.addLayer(polyline);
    //     }
    //     return polyline;
    // }
}
