import { apiGet } from '../../../util/HttpApi';
import TracksManager from '../../../context/TracksManager';

/*
    calculateGpxRoute() processes GPX-data via API-request /routing/gpx-approximate
    OSRM profiles car/bicycle/pedestrian are compatible and supported by API
    OsmAnd profiles (ex-routeMode) are supported as is
*/
export async function calculateGpxRoute({
    routeTrackFile,
    setRouteData,
    setStartPoint,
    setEndPoint,
    setInterPoints,
    changeRouteText,
    setRoutingErrorMsg,
}) {
    const geoProfile = {
        profile: this.profile,
        params: this.getParams() ?? {},
    };

    const routeModeStr = TracksManager.formatRouteMode(geoProfile);

    setRoutingErrorMsg(null);
    changeRouteText(true, null);

    let formData = new FormData();
    formData.append('file', routeTrackFile);

    const response = await apiGet(
        `${process.env.REACT_APP_ROUTING_API_SITE}/routing/gpx-approximate?routeMode=${routeModeStr}`,
        {
            apiCache: true,
            method: 'POST',
            body: formData,
        }
    );

    if (response.ok) {
        let data = await response.json();
        let start, end;
        let props = {};
        if (data?.features?.length > 0) {
            let coords = data?.features[0].geometry.coordinates;
            if (coords.length > 0) {
                start = { lat: coords[0][1], lng: coords[0][0] };
                end = { lat: coords[coords.length - 1][1], lng: coords[coords.length - 1][0] };
            }
            props = data.features[0]?.properties;
        }
        setStartPoint(start);
        setEndPoint(end);
        setInterPoints([]);
        const allData = { geojson: data, id: new Date().getTime(), props: props };
        setRouteData(allData);
        changeRouteText(false, allData);
    } else {
        const message = await response.text();
        setRouteData(null);
        changeRouteText(false, null);
        setRoutingErrorMsg(message);
    }
}
