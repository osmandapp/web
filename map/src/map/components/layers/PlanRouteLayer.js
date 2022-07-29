import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../../context/AppContext";
import {useMap} from "react-leaflet";
import PanelButtons from "../PanelButtons";
import Utils from "../../../util/Utils";
import SaveRouteDialog from "../SaveRouteDialog";


export default function PlanRouteLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [openSaveDialog, setOpenSaveDialog] = useState(false);
    const [openPanelButtons, setOpenPanelButtons] = useState(false);

    useEffect(() => {
        let selectedTrack = ctx.createdTracks.find(t => t.selected === true);
        if (isNewSelectedTrack(selectedTrack)) {
            setOpenPanelButtons(true);
            if (selectedTrack.points && selectedTrack.points.length > 0) {
                deleteOldRoute(map);
                createNewCurrentlyEditTrack();
                showTrackWithPointsOnMap(selectedTrack);
            }
        }
    }, [ctx.createdTracks, ctx.setCreatedTracks]);

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
            checkPrepareMap();
            checkDeleteTrack();
            checkRefreshLayer();
        }

    }, [ctx.currentlyEditTrack, ctx.currentlyEditTrackDispatch]);

    function checkStartDraw() {
        if (ctx.currentlyEditTrack.startDraw) {
            ctx.currentlyEditTrackDispatch({
                type: 'start',
                newRouteLayer: map.editTools.startPolyline(),
            })
            ctx.setSelectedGpxFile(null);
            ctx.setWeatherPoint(null);
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
                ctx.createdTracks.splice(ctx.createdTracks.indexOf(selectedTrack), 1);
                ctx.setCreatedTracks([...ctx.createdTracks]);
                if (ctx.currentlyEditTrack.newRouteLayer && map.hasLayer(ctx.currentlyEditTrack.newRouteLayer)) {
                    map.removeLayer(ctx.currentlyEditTrack.newRouteLayer);
                    ctx.currentlyEditTrackDispatch({
                        type: 'delete',
                    })
                }
            }
        }
    }

    function checkRefreshLayer() {
        deleteOldRoute(map);
        ctx.currentlyEditTrack.newRouteLayer = map.editTools.addPolylineByPoints(ctx.currentlyEditTrack.pointsList);
        ctx.currentlyEditTrackDispatch({
            type: 'refreshLayer',
            layer: ctx.currentlyEditTrack.newRouteLayer
        })
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