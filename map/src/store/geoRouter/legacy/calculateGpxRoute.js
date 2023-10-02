import { apiGet } from '../../../util/HttpApi';
import TracksManager from '../../../manager/TracksManager';

/*
    calculateGpxRoute() processes GPX-data via API-request /routing/gpx-approximate
    OSRM profiles car/bicycle/pedestrian are compatible and supported by API
    OsmAnd profiles (ex-routeMode) are supported as is
*/
export async function calculateGpxRoute({ routeTrackFile, changeRouteText, setRoutingErrorMsg }) {
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
        let start, finish;
        if (data?.features?.length > 0) {
            let coords = data?.features[0].geometry.coordinates;
            if (coords.length > 0) {
                start = { lat: coords[0][1], lng: coords[0][0] };
                finish = { lat: coords[coords.length - 1][1], lng: coords[coords.length - 1][0] };
            }
            const { route } = this.putRoute({ route: data });
            this.setOption('route.points.start', start);
            this.setOption('route.points.finish', finish);
            this.setOption('route.points.viaPoints', []);
            changeRouteText(false, this.getRouteProps(route));
        } else {
            this.resetRoute();
            changeRouteText(false, null);
            setRoutingErrorMsg('gpx-approximate error');
        }
    } else {
        const message = await response.text();
        this.resetRoute();
        changeRouteText(false, null);
        setRoutingErrorMsg(message);
    }
}
