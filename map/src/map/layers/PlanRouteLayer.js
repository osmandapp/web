import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import EditTrackAction from "../../data/tracks/editTrack/EditTrackAction";


export default function PlanRouteLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [wasSelected, setWasSelected] = useState(false);
    const [deletedEditTrack, setDeletedEditTrack] = useState(null);

    useEffect(() => {
        if (!ctx.createdTracks.find(t => t.isNew === true)) {
            let selectedTrack = ctx.createdTracks.find(t => t.selected === true);
            if (isNewSelectedTrack(selectedTrack) || (selectedTrack && !wasSelected)) {
                setWasSelected(true);
                if (selectedTrack.points && selectedTrack.points.length > 0) {
                    deleteOldRoute(map);
                    createNewCurrentlyEditTrack();
                    showTrackWithPointsOnMap(selectedTrack);
                }
            }

            if (selectedTrack === undefined) {
                deleteOldRoute(map);
                setWasSelected(false);
            }
        }
    }, [ctx.createdTracks, ctx.setCreatedTracks]);

    useEffect(() => {
        if (deletedEditTrack) {
            ctx.createdTracks.splice(ctx.createdTracks.indexOf(deletedEditTrack), 1);
            ctx.setCreatedTracks([...ctx.createdTracks]);
        }

    }, [deletedEditTrack, setDeletedEditTrack]);

    useEffect(() => {
        if (ctx.currentlyEditTrack) {
            map.on("editable:drawing:clicked", e => {
                ctx.currentlyEditTrackDispatch({
                    type: EditTrackAction.click,
                    e: e
                })
            });

            map.on("editable:vertex:deleted", e => {
                ctx.currentlyEditTrackDispatch({
                    type: EditTrackAction.deletedClick,
                    e: e
                })
            });

            map.on("editable:vertex:dragend", e => {
                ctx.currentlyEditTrackDispatch({
                    type: EditTrackAction.dragendClick,
                })
            });

            checkStartDraw();
            checkStopDraw();
            checkPrepareMap();
            checkDeleteTrack();
            checkRefreshLayer();
            checkDeleteLayer();
        }

    }, [ctx.currentlyEditTrack, ctx.currentlyEditTrackDispatch]);

    function checkDeleteLayer() {
        if (ctx.currentlyEditTrack.deleteLayer) {
            deleteOldRoute(map);
        }
    }

    function checkStartDraw() {
        if (ctx.currentlyEditTrack.startDraw) {
            ctx.currentlyEditTrackDispatch({
                type: EditTrackAction.startDraw,
                newRouteLayer: map.editTools.startPolyline(),
            })
            ctx.setContextMenuObjectType('create_track');
        }
    }

    function checkStopDraw() {
        if (ctx.currentlyEditTrack.stopDraw) {
            deleteOldRoute(map);
            ctx.setContextMenuObjectType(null);
        }
    }

    function checkPrepareMap() {
        if (ctx.currentlyEditTrack.prepareMap) {
            deleteOldRoute(map);
        }
    }

    function checkDeleteTrack() {
        if (ctx.currentlyEditTrack.deleteTrack) {
            let selectedTrack = ctx.createdTracks.find(t => t.selected === true);
            if (selectedTrack) {
                if (ctx.currentlyEditTrack.newRouteLayer && map.hasLayer(ctx.currentlyEditTrack.newRouteLayer)) {
                    map.removeLayer(ctx.currentlyEditTrack.newRouteLayer);
                    ctx.currentlyEditTrackDispatch({
                        type: EditTrackAction.deleteTrack,
                    })
                }
                setDeletedEditTrack(selectedTrack);
            }
        }
    }

    function checkRefreshLayer() {
        if (ctx.currentlyEditTrack.refreshLayer) {
            deleteOldRoute(map);
            ctx.currentlyEditTrack.newRouteLayer = map.editTools.addPolylineByPoints(ctx.currentlyEditTrack.pointsList);
            ctx.currentlyEditTrackDispatch({
                type: EditTrackAction.refreshLayer,
                layer: ctx.currentlyEditTrack.newRouteLayer
            })
        }
    }

    function isNewSelectedTrack(selectedTrack) {
        return selectedTrack && (!ctx.currentlyEditTrack || (ctx.currentlyEditTrack && (selectedTrack.name !== ctx.currentlyEditTrack.trackName)));
    }

    function showTrackWithPointsOnMap(selectedTrack) {
        let newPoints = [];
        selectedTrack.points.forEach(function (item) {
            newPoints.push({lat: item.lat, lng: item.lng});
        });
        let newRouteLayer = map.editTools.addPolylineByPoints(newPoints);
        map.fitBounds(newRouteLayer && newRouteLayer._bounds);
        ctx.setContextMenuObjectType('create_track');
        ctx.currentlyEditTrackDispatch({
            type: EditTrackAction.showTrack,
            track: selectedTrack,
            routeLayer: newRouteLayer
        })
    }

    function createNewCurrentlyEditTrack() {
        if (ctx.currentlyEditTrack === null) {
            ctx.currentlyEditTrackDispatch({
                type: EditTrackAction.createEditTrack,
            })
        }
    }

    function deleteOldRoute(map) {
        let layersWithPolyline = [];
        map._layers && Object.keys(map._layers).forEach(e => {
                if (map._layers[e].planroute) {
                    layersWithPolyline.push(map._layers[e]);
                }
            }
        );
        layersWithPolyline.forEach(function (item) {
            map.removeLayer(item);
        });
    }
}