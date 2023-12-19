import { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import TracksManager from '../../manager/track/TracksManager';
import { apiGet } from '../../util/HttpApi';
import { confirm } from '../../dialogs/GlobalConfirmationDialog';

export default function ContextMenu({ setGeocodingData, setRegionData }) {
    const ctx = useContext(AppContext);
    const map = useMap();
    const navigate = useNavigate();

    const routeObject = ctx.routeObject;
    const startPoint = routeObject.getOption('route.points.start');
    const finishPoint = routeObject.getOption('route.points.finish');

    const openLogin = () => {
        navigate('/map/loginForm' + window.location.search + window.location.hash);
    };

    function navigateSetStartOrFinish({ latlng, target }) {
        confirm({
            ctx,
            text: 'Modify previous Navigation?',
            callback: () => routeObject.setOption(target, latlng),
            skip: !routeObject.getOption('route.points.start') || !routeObject.getOption('route.points.finish'),
        });
    }

    useEffect(() => {
        if (map) {
            map.contextmenu.removeAllItems();
            map.contextmenu.addItem({
                text: 'Create new route',
                callback: (e) => TracksManager.createTrack(ctx, e.latlng),
            });
            map.contextmenu.addItem({
                text: 'Navigate from',
                callback: (e) => navigateSetStartOrFinish({ latlng: e.latlng, target: 'route.points.start' }),
            });
            if (startPoint && finishPoint) {
                map.contextmenu.addItem({
                    text: 'Navigate via',
                    callback: (e) => routeObject.routeAddViaPoint({ ll: e.latlng }),
                });
            }
            map.contextmenu.addItem({
                text: 'Navigate to',
                callback: (e) => navigateSetStartOrFinish({ latlng: e.latlng, target: 'route.points.finish' }),
            });
            map.contextmenu.addItem({
                text: 'Add pin',
                callback: (e) => ctx.setPinPoint(e.latlng),
            });
            map.contextmenu.addItem({
                text: 'Where am I',
                callback: whereAmI,
            });
            map.contextmenu.addItem({
                text: 'Show regions',
                callback: (e) => {
                    ctx.loginUser ? getRegions(e.latlng) : openLogin();
                },
            });
            map.contextmenu.addItem({
                text: 'Add favorite',
                callback: (e) => {
                    ctx.loginUser ? addFavorite(e) : openLogin();
                },
            });
            if (ctx.createTrack?.enable) {
                map.contextmenu.addItem({
                    text: 'Add waypoint',
                    callback: (e) => {
                        ctx.addFavorite.location = e.latlng;
                        ctx.addFavorite.editTrack = true;
                        ctx.setAddFavorite({ ...ctx.addFavorite });
                    },
                });
            }
            map.contextmenu.addItem({
                text: 'Copy coordinates',
                callback: copyCoordinates,
            });
        }
    }, [routeObject.getRouteEffectDeps(), ctx.pinPoint, ctx.loginUser, ctx.createTrack, ctx.selectedGpxFile]);

    const whereAmI = async (e) => {
        setGeocodingData(null);
        const params = `lat=${e.latlng.lat.toFixed(6)}&lon=${e.latlng.lng.toFixed(6)}`;
        const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/geocoding?${params}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            let data = await response.json();
            let props = {};
            if (data.features.length > 0) {
                props = data.features[0]?.properties;
            }
            setGeocodingData({ geojson: data, id: new Date().getTime(), props: props });
        }
    };

    async function getRegions(latlng) {
        setRegionData(null);
        await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/regions-by-latlon`, {
            params: {
                lat: latlng.lat.toFixed(6),
                lon: latlng.lng.toFixed(6),
            },
        }).then((res) => {
            const regions = formattingRegions(res.data.regions);
            setRegionData({
                regions: regions,
                latlng: latlng,
            });
        });
    }

    function addFavorite(e) {
        ctx.addFavorite.location = e.latlng;
        ctx.setAddFavorite({ ...ctx.addFavorite });
    }

    function formattingRegions(regions) {
        return regions.join(', ').replaceAll('_', ' ');
    }

    function copyCoordinates(e) {
        navigator.clipboard.writeText(e.latlng.lat.toFixed(6) + ',' + e.latlng.lng.toFixed(6));
    }
}
