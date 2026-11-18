import { alternativeRouteStyle, isAlternativeFeature } from './calculateRoute';
import { LINE_STRING } from '../../../util/Utils';

/**
 * Show the alternative route with this number instead of the one currently shown.
 * The picked route moves to the front and the two routes swap the "alternative" number (lines and turns).
 * Used both by a click on the map and by the round trip list in the menu.
 */
export function selectAlternativeRoute(routeObject, number) {
    const route = routeObject.getRoute();
    // matched by the number rather than by object identity - the layer may hold a copy
    const index = (route?.features ?? []).findIndex(
        (f) => f.geometry?.type === LINE_STRING && f.properties?.alternative === number
    );
    if (index <= 0) {
        return;
    }
    const color = route.mainRouteStyle?.color ?? routeObject.getColor();
    const features = route.features.map((f) => {
        const properties = { ...f.properties };
        if (f.properties?.alternative === number) {
            delete properties.alternative;
        } else if (!isAlternativeFeature(f)) {
            properties.alternative = number;
        } else {
            return f;
        }
        let style = f.style;
        if (f.geometry?.type === LINE_STRING) {
            style = properties.alternative ? alternativeRouteStyle(color) : (route.mainRouteStyle ?? { color });
        }

        return { ...f, properties, style };
    });
    const picked = features[index];
    features[index] = features[0];
    features[0] = picked;
    routeObject.putRoute({ route: { ...route, features } });
}
