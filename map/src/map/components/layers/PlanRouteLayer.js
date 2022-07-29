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
    const [prevCreatedTracks, setPrevCreatedTracks] = useState(null);

    useEffect(() => {
        let selectedTrack = ctx.createdTracks.find(t => t.selected === true);
        if (selectedTrack && (!ctx.currentlyEditTrack || (ctx.currentlyEditTrack && (selectedTrack.name !== ctx.currentlyEditTrack.trackName)))) {
            setPrevCreatedTracks(ctx.createdTracks);
            setOpenPanelButtons(true);
            let newRouteLayer;
            let newPoints = [];
            if (selectedTrack.points && selectedTrack.points.length > 0) {
                deleteOldRoute(map);

                if (ctx.currentlyEditTrack === null) {
                    ctx.currentlyEditTrackDispatch({
                        type: 'createTrack',
                    })
                }

                selectedTrack.points.forEach(function (item) {
                    newPoints.push({lat: item.lat, lng: item.lng});
                });
                newRouteLayer = map.editTools.addPolylineByPoints(newPoints);
                map.fitBounds(newRouteLayer && newRouteLayer._bounds);

                ctx.currentlyEditTrackDispatch({
                    type: 'showTrack',
                    track: selectedTrack,
                    pointsList: structuredClone(Utils.getPointsDist(selectedTrack.points)),
                    routeLayer: newRouteLayer
                })
            }
        }
    }, [ctx.createdTracks, ctx.setCreatedTracks]);

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

            if (ctx.currentlyEditTrack.startDraw) {
                if (!ctx.currentlyEditTrack.newRouteLayer) {
                    ctx.currentlyEditTrackDispatch({
                        type: 'start',
                        newRouteLayer: map.editTools.startPolyline(),
                    })
                    ctx.setSelectedGpxFile(null);
                    ctx.setWeatherPoint(null);
                }
            }

            if (ctx.currentlyEditTrack.prepareMap) {
                deleteOldRoute(map);
                setOpenPanelButtons(true);
            }

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

            //check delete point
            if (ctx.currentlyEditTrack.deletePoint && ctx.currentlyEditTrack.deletePoint !== -1) {

                ctx.currentlyEditTrack.pointsList.splice(ctx.currentlyEditTrack.deletePoint, 1);
                deleteOldRoute(map);
                ctx.currentlyEditTrack.pointsList = Utils.getPointsDist(ctx.currentlyEditTrack.pointsList);
                ctx.currentlyEditTrack.newRouteLayer = map.editTools.addPolylineByPoints(ctx.currentlyEditTrack.pointsList);

                ctx.currentlyEditTrackDispatch({
                    type: 'deletePoint',
                    pointsList: ctx.currentlyEditTrack.pointsList,
                    layer: ctx.currentlyEditTrack.newRouteLayer,
                    distance: ctx.currentlyEditTrack.pointsList[ctx.currentlyEditTrack.pointsList.length - 1].dist
                })
            }
        }

    }, [ctx.currentlyEditTrack, ctx.currentlyEditTrackDispatch]);

    return (<>
        <SaveRouteDialog open={openSaveDialog} setOpen={setOpenSaveDialog}/>
        {openPanelButtons &&
            <PanelButtons setOpenSaveDialog={setOpenSaveDialog} setOpenPanelButtons={setOpenPanelButtons}/>}
    </>);
}