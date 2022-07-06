import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import PanelButtons from "../contextmenu/planroute/PanelButtons";
import PlanRouteContextMenu from "../contextmenu/planroute/PlanRouteContextMenu";
import {Layer} from "leaflet";


export default function PlanRouteLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [createRoute, setCreateRoute] = useState(false);
    const [deleteRoute, setDeleteRoute] = useState(false);
    const [newRoute, setNewRoute] = useState(new Layer());
    const [pointsList, setPointsList] = useState([]);
    const [deletePoint, setDeletePoint] = useState(-1);

    useEffect(() => {
        if (createRoute) {
            let layer = map.editTools.startPolyline();
            setNewRoute(layer);
            setDeleteRoute(false);
        }
    }, [createRoute, setCreateRoute]);

    useEffect(() => {
        if (deleteRoute) {
            if( map.hasLayer(newRoute)) {
                map.removeLayer(newRoute);
                setNewRoute(null);
                setPointsList([]);
                setCreateRoute(false);
            }
        }
    }, [deleteRoute, setDeleteRoute]);

    useEffect(() => {
        if (deletePoint !== -1) {
            pointsList.splice(deletePoint, 1);
            deleteOldRoute();
            addNewRoute();
            setPointsList([...pointsList]);
        }
    }, [deletePoint, setDeletePoint]);

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
        setDeletePoint(-1);
    }

    function addNewRoute() {
        let newPoints = [];

        pointsList.forEach(function (item) {
            newPoints.push({lat: item.lat, lng: item.lng});
        });
        let layer = map.editTools.addPolylineByPoints(newPoints)
        setNewRoute(layer);
    }


    return (<>
        {ctx.planRoute && <PanelButtons setCreateRoute={setCreateRoute} setDeleteRoute={setDeleteRoute}/>}
        {createRoute && <PlanRouteContextMenu
            newRoute={newRoute}
            setDeletePoint={setDeletePoint}
            pointsList={pointsList}
            setPointsList={setPointsList}>
        </PlanRouteContextMenu>}

        </>);
}