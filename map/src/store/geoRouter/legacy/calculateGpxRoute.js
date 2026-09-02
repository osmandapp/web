import { apiGet } from '../../../util/HttpApi';
import TracksManager from '../../../manager/track/TracksManager';
import { ROUTE_POINTS_START, ROUTE_POINTS_FINISH, ROUTE_POINTS_VIA } from '../profileConstants';

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

    if (this.preview) {
        return;
    }

    const routeModeStr = TracksManager.formatRouteMode(geoProfile);

    setRoutingErrorMsg(null);
    changeRouteText(true);

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

    if (!response) {
        changeRouteText(false);
        return;
    }

    if (response.ok) {
        let data = await response.json();
        let start, finish;
        if (data?.features?.length > 0 && data.features[0].geometry?.coordinates?.length > 0) {
            const coords = data.features[0].geometry.coordinates;
            start = { lat: coords[0][1], lng: coords[0][0] };
            finish = { lat: coords[coords.length - 1][1], lng: coords[coords.length - 1][0] };
            if (start && finish) {
                this.setOption(ROUTE_POINTS_START, start);
                this.setOption(ROUTE_POINTS_FINISH, finish);
                this.setOption(ROUTE_POINTS_VIA, []);
                this.putRoute({ route: data });
                changeRouteText(false);
            } else {
                changeRouteText(false);
                setRoutingErrorMsg('gpx-approximate no start/finish');
            }
        } else {
            this.resetRoute();
            changeRouteText(false);
            setRoutingErrorMsg('gpx-approximate empty result');
        }
    } else {
        const message = await response.text();
        this.resetRoute();
        changeRouteText(false);
        setRoutingErrorMsg(message);
    }
}
