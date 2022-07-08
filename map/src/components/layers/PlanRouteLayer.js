import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import PanelButtons from "../contextmenu/PanelButtons";
import {BaseBuilder, buildGPX} from "gpx-builder";
import {Metadata} from "gpx-builder/dist/builder/BaseBuilder/models";
import Utils from "../../util/Utils";
import {Layer} from "leaflet";
import SaveRouteDialog from "../contextmenu/SaveRouteDialog";


export default function PlanRouteLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [openSaveDialog, setOpenSaveDialog] = useState(false);
    const [newFileName, setNewFileName] = useState('');

    useEffect(() => {
        if (ctx.editor.createRoute && ctx.editor.deletePoint === -1) {
            ctx.newRoute.newRouteLayer = map.editTools.startPolyline();
            ctx.setNewRoute({...ctx.newRoute});
        }
    }, [ctx.editor, ctx.setEditor]);

    useEffect(() => {
        if (newFileName !== '') {
            const {Point} = BaseBuilder.MODELS;
            let points = [];
            ctx.newRoute.pointsList.forEach(p => points.push(new Point(p.lat, p.lng)));
            const gpxData = new BaseBuilder();
            gpxData.setSegmentPoints(points);
            gpxData.setMetadata(new Metadata({name: 'new'}))
            let newGpx = buildGPX(gpxData.toObject());
            const file = new File([newGpx], newFileName + ".gpx", {
                type: "application/gpx+xml",
            });
            let gpxLayer = {};
            gpxLayer.name = 'local:' + file.name;
            gpxLayer.localContent = `${process.env.REACT_APP_GPX_API}/gpx/get-gpx-file?name=` + encodeURIComponent(file.name);
            gpxLayer.local = true;
            Utils.uploadFile(ctx.gpxFiles, ctx.setGpxFiles, ctx, gpxLayer, file);
        }
    }, [newFileName, setNewFileName]);

    useEffect(() => {
        if (ctx.editor.deleteRoute) {
            if (map.hasLayer(ctx.newRoute.newRouteLayer)) {
                map.removeLayer(ctx.newRoute.newRouteLayer);
                ctx.newRoute.newRouteLayer = new Layer();
                ctx.newRoute.pointsList = [];
                ctx.setNewRoute({...ctx.newRoute});
            }
        }
    }, [ctx.editor, ctx.setEditor]);

    useEffect(() => {
        if (ctx.editor.deletePoint !== -1) {
            ctx.newRoute.pointsList.splice(ctx.editor.deletePoint, 1);
            deleteOldRoute();
            addNewRoute();
            if (ctx.newRoute.pointsList.length > 0) {
                ctx.newRoute.distance = ctx.newRoute.pointsList[ctx.newRoute.pointsList.length - 1].dist;
            }
            ctx.setNewRoute({...ctx.newRoute});
        }
    }, [ctx.editor, ctx.setEditor]);

    function deleteOldRoute() {
        let layersWithPolyline = [];
        Object.keys(map._layers).forEach(e => {
                if (map._layers[e].planroute) {
                    layersWithPolyline.push(map._layers[e]);
                }
            }
        );
        layersWithPolyline.forEach(function (item) {
            map.removeLayer(item);
        });
    }

    function addNewRoute() {
        let newPoints = [];
        ctx.newRoute.pointsList.forEach(function (item) {
            newPoints.push({lat: item.lat, lng: item.lng});
        });
        ctx.newRoute.pointsList = Utils.getPointsDist(ctx.newRoute.pointsList);
        ctx.newRoute.newRouteLayer = map.editTools.addPolylineByPoints(newPoints);
    }

    return (<>
        <SaveRouteDialog open={openSaveDialog} setOpen={setOpenSaveDialog} setFileName={setNewFileName}/>
        {ctx.planRoute && <PanelButtons setOpenSaveDialog={setOpenSaveDialog}/>}
    </>);
}