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

    useEffect(() => {
        if (createRoute) {
            let layer = map.editTools.startPolyline();
            setNewRoute(layer);
        }
    }, [createRoute, setCreateRoute]);

    useEffect(() => {
        if (deleteRoute) {
            if( map.hasLayer(newRoute)) {
                map.removeLayer(newRoute);
                setNewRoute(null);
                setPointsList([]);
            }
        }
    }, [deleteRoute, setDeleteRoute]);


    return (<>
        {ctx.planRoute && <PanelButtons setCreateRoute={setCreateRoute} setDeleteRoute={setDeleteRoute}/>}
        {createRoute && <PlanRouteContextMenu newRoute={newRoute} pointsList={pointsList} setPointsList={setPointsList}></PlanRouteContextMenu>}

        </>);
}