import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../../context/AppContext";
import {useMap} from "react-leaflet";
import PanelButtons from "../PanelButtons";
import SaveRouteDialog from "../SaveRouteDialog";


export default function PlanRouteLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [openSaveDialog, setOpenSaveDialog] = useState(false);
    const [openPanelButtons, setOpenPanelButtons] = useState(false);
    const [wasSelected, setWasSelected] = useState(false);
    const [deletedEditTrack, setDeletedEditTrack] = useState(null);

    useEffect(() => {
        if (!ctx.createdTracks.find(t => t.isNew === true)) {
            let selectedTrack = ctx.createdTracks.find(t => t.selected === true);
            if (isNewSelectedTrack(selectedTrack) || (selectedTrack && !wasSelected)) {
                setWasSelected(true);
                setOpenPanelButtons(true);
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
                    type: 'click',
                    e: e
                })
            });

            map.on("editable:vertex:deleted", e => {
                ctx.currentlyEditTrackDispatch({
                    type: 'deletedClick',
                    e: e
                })
            });

            map.on("editable:vertex:dragend", e => {
                ctx.currentlyEditTrackDispatch({
                    type: 'dragendClick',
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
                type: 'start',
                newRouteLayer: map.editTools.startPolyline(),
            })
            ctx.setContextMenuObjectType('create_track');
        }
    }

    function checkStopDraw() {
        if (ctx.currentlyEditTrack.stopDraw) {
            deleteOldRoute(map);
            setOpenPanelButtons(false);
        }
    }

    function checkPrepareMap() {
        if (ctx.currentlyEditTrack.prepareMap) {
            deleteOldRoute(map);
            setOpenPanelButtons(true);
        }
    }

    function checkDeleteTrack() {
        if (ctx.currentlyEditTrack.deleteTrack) {
            let selectedTrack = ctx.createdTracks.find(t => t.selected === true);
            if (selectedTrack) {
                if (ctx.currentlyEditTrack.newRouteLayer && map.hasLayer(ctx.currentlyEditTrack.newRouteLayer)) {
                    map.removeLayer(ctx.currentlyEditTrack.newRouteLayer);
                    ctx.currentlyEditTrackDispatch({
                        type: 'delete',
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
                type: 'refreshLayer',
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

        ctx.currentlyEditTrackDispatch({
            type: 'showTrack',
            track: selectedTrack,
            routeLayer: newRouteLayer
        })
    }

    function createNewCurrentlyEditTrack() {
        if (ctx.currentlyEditTrack === null) {
            ctx.currentlyEditTrackDispatch({
                type: 'createTrack',
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

    return (<>
        <SaveRouteDialog open={openSaveDialog} setOpen={setOpenSaveDialog}/>
        {openPanelButtons &&
            <PanelButtons setOpenSaveDialog={setOpenSaveDialog} setOpenPanelButtons={setOpenPanelButtons}/>}
    </>);
}