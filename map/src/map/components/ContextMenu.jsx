import {useContext, useEffect} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import {useNavigate} from "react-router-dom";
import TracksManager from "../../context/TracksManager";

export default function ContextMenu({setGeocodingData}) {

    const ctx = useContext(AppContext);
    const map = useMap();
    const navigate = useNavigate();

    const openLogin = () => {
        navigate('/map/loginForm');
    }

    useEffect(() => {
        if (map) {
            map.contextmenu.removeAllItems();
            map.contextmenu.addItem({
                text: 'Set as start',
                callback: (e) => ctx.setStartPoint(e.latlng)
            });
            map.contextmenu.addItem({
                text: 'Set as end',
                callback: (e) => ctx.setEndPoint(e.latlng)
            });
            map.contextmenu.addItem({
                text: 'Add pin',
                callback: (e) => ctx.setPinPoint(e.latlng)
            });
            map.contextmenu.addItem({
                text: 'Where am I',
                callback: whereAmI
            });
            map.contextmenu.addItem({
                text: 'Add favorite',
                callback: (e) => {
                    ctx.loginUser ? addFavorite(e) : openLogin()
                }
            });
            map.contextmenu.addItem({
                text: 'Create track',
                callback: () => {
                    ctx.loginUser ? TracksManager.createTrack(ctx) : openLogin()
                }
            });
        }
    }, [ctx.startPoint, ctx.endPoint, ctx.setStartPoint, ctx.setEndPoint, ctx.pinPoint, ctx.setPinPoint, map, ctx.setRouteData, ctx.loginUser]);

    const whereAmI = async (e) => {
        setGeocodingData(null);
        const params = `lat=${e.latlng.lat.toFixed(6)}&lon=${e.latlng.lng.toFixed(6)}`;
        const response = await fetch(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/geocoding?${params}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            let data = await response.json();
            let props = {};
            if (data.features.length > 0) {
                props = data.features[0]?.properties;
            }
            setGeocodingData({geojson: data, id: new Date().getTime(), props: props});
        }
    };

    function addFavorite(e) {
        ctx.addFavorite.location = e.latlng;
        ctx.setAddFavorite({...ctx.addFavorite});
    }
}