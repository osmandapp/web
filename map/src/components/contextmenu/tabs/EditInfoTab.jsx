import {Typography} from "@mui/material";
import React, {useContext} from "react";
import {useMap} from "react-leaflet";
import AppContext from "../../../context/AppContext";
import Utils from "../../../util/Utils";

const EditInfoTab = () => {

    const map = useMap();
    const ctx = useContext(AppContext);

    map.on("editable:drawing:clicked", e => {
        ctx.newRoute.pointsList.push({lat: e.latlng.lat, lng: e.latlng.lng})
        ctx.newRoute.pointsList = Utils.removeDuplicatesPoints(ctx.newRoute.pointsList);
        ctx.newRoute.pointsList = Utils.getPointsDist(ctx.newRoute.pointsList);
        ctx.newRoute.distance = ctx.newRoute.pointsList && ctx.newRoute.pointsList.length > 0 ? ctx.newRoute.pointsList[ctx.newRoute.pointsList.length - 1].dist : 0;
        ctx.setNewRoute({...ctx.newRoute});
    });


    map.on("editable:vertex:deleted", e => {
        if (ctx.newRoute.newRouteLayer) {
            for (let i = 0; i < ctx.newRoute.pointsList.length; i++) {
                if (ctx.newRoute.pointsList[i].lat === e.latlng.lat && ctx.newRoute.pointsList[i].lng === e.latlng.lng) {
                    ctx.newRoute.pointsList.splice(i, 1);
                    break;
                }
            }
        }
        ctx.newRoute.pointsList = Utils.getPointsDist(ctx.newRoute.pointsList);
        ctx.newRoute.distance = ctx.newRoute.pointsList && ctx.newRoute.pointsList.length > 0 ? ctx.newRoute.pointsList[ctx.newRoute.pointsList.length - 1].dist : 0;
        ctx.setNewRoute({...ctx.newRoute});
    });

    map.on("editable:vertex:dragend", e => {
        if (ctx.newRoute.newRouteLayer._latlngs) {
            ctx.newRoute.pointsList = [];
            ctx.newRoute.newRouteLayer._latlngs.forEach(p => ctx.newRoute.pointsList.push({lat: p.lat, lng: p.lng}))
            ctx.newRoute.pointsList = Utils.removeDuplicatesPoints(ctx.newRoute.pointsList);
            ctx.newRoute.pointsList = Utils.getPointsDist(ctx.newRoute.pointsList);
            ctx.newRoute.distance = ctx.newRoute.pointsList && ctx.newRoute.pointsList.length > 0 ? ctx.newRoute.pointsList[ctx.newRoute.pointsList.length - 1].dist : 0;
            ctx.setNewRoute({...ctx.newRoute});
        }
    });

    return (<Typography marginLeft={"20px"} variant="subtitle1" color="inherit">
            {"points: " + ctx.newRoute.pointsList.length}<br/>
            {"distance: " + Math.trunc(ctx.newRoute.distance) + " m"}
        </Typography>
    );
};

export default EditInfoTab;