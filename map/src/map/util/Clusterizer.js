import L from 'leaflet';
import styles from '../../menu/search/search.module.css';
import { getPointLatLon } from './TrackLayerProvider';

export const EXPLORE_BIG_ICON_SIZE = 36;

// Cluster markers based on zoom and coordinates
export function clusterMarkers({
    places,
    zoom,
    latitude,
    iconSize = EXPLORE_BIG_ICON_SIZE,
    secondaryIconSize = 10,
    isPoi = false,
    isFavorites = false,
}) {
    const maxMainPlaces = getMaxMainPlaces(zoom, isPoi, isFavorites);
    const maxSecondaryPlaces = getMaxSecondaryPlaces(zoom, isFavorites);
    const useUniformMarkerPlacement = getUseUniformMarkerPlacement(zoom, isPoi, isFavorites);

    // Minimum distances between markers in meters
    const mainMinDistance = calculateDistance({
        iconSize,
        latitude,
        zoom,
        isPoi,
    });

    const secondaryMinDistance = calculateDistance({
        iconSize: secondaryIconSize,
        latitude,
        zoom,
        isPoi,
    });

    // Sort clusters by size
    const clusters = Object.values(clusterPlaces(places, zoom, isFavorites));

    const mainMarkers = createMainMarkersArr(clusters, useUniformMarkerPlacement, mainMinDistance, isFavorites);

    const secondaryMarkers = createOtherMarkersArr({
        clusters,
        mainMarkers,
        maxMainPlaces,
        mainMinDistance,
        secondaryMinDistance,
        isFavorites,
    });

    return {
        mainMarkers: mainMarkers.slice(0, maxMainPlaces),
        secondaryMarkers: secondaryMarkers.slice(0, maxSecondaryPlaces),
    };
}

function getMaxMainPlaces(zoom, isPoi, isFavorites) {
    if (isFavorites) {
        return 200;
    }
    return isPoi ? 2000 : 50;
}

function getMaxSecondaryPlaces(zoom, isFavorites) {
    if (isFavorites) {
        return 200;
    }
    return zoom > 10 ? 200 : 900;
}

function getUseUniformMarkerPlacement(zoom, isPoi, isFavorites) {
    if (isPoi || isFavorites) {
        return true;
    }
    return zoom <= 10 || zoom >= 16;
}

function calculateDistance({ iconSize, latitude, zoom, isPoi = false }) {
    const baseDistance = iconSize * metersPerPixel(latitude, zoom);
    if (isPoi) {
        return baseDistance;
    }
    return zoom > 12 ? baseDistance * 1.5 : baseDistance * 2;
}

// Function to convert pixels to meters
const metersPerPixel = (latitude, zoomLevel) => {
    const earthCircumference = 40075017; // Earth's circumference in meters
    const latitudeRad = (latitude * Math.PI) / 180; // Convert latitude to radians
    const scale = Math.pow(2, zoomLevel); // Map scale depending on zoom level
    // 256 pixels per tile
    return (earthCircumference * Math.cos(latitudeRad)) / (256 * scale);
};

// Function to check if a place can be added without overlapping
const canPlaceMarker = ({ place, existingPlaces, minDistance, isFav = false }) => {
    if (isFav) {
        const coords = getPointLatLon(place);
        const latlng = L.latLng(coords.lat, coords.lon);
        return existingPlaces.every((existingPlace) => {
            const coordsEx = getPointLatLon(existingPlace);
            const existingLatLng = L.latLng(coordsEx.lat, coordsEx.lon);
            return latlng.distanceTo(existingLatLng) >= minDistance;
        });
    } else {
        const latlng = L.latLng(place.geometry.coordinates[1], place.geometry.coordinates[0]);
        return existingPlaces.every((existingPlace) => {
            const existingLatLng = L.latLng(
                existingPlace.geometry.coordinates[1],
                existingPlace.geometry.coordinates[0]
            );
            return latlng.distanceTo(existingLatLng) >= minDistance;
        });
    }
};

function clusterPlaces(places, zoom, isFavorites) {
    const clustered = {};
    let shift = 1;

    for (const place of places) {
        if (!place) {
            continue;
        }
        const coords = isFavorites ? getPointLatLon(place) : null;
        const [lng, lat] = coords ? [coords.lon, coords.lat] : place.geometry.coordinates;
        const x31 = Math.floor(((lng + 180) / 360) * (1 << 31));
        const y31 = Math.floor(
            ((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) *
                (1 << 31)
        );
        const key = ((x31 >> (31 - (zoom + shift))) & 0xffff) | (((y31 >> (31 - (zoom + shift))) & 0xffff) << 16);

        if (!clustered[key]) {
            clustered[key] = [];
        }
        clustered[key].push(place);
    }
    return clustered;
}

function createMainMarkersArr(clusters, useUniformMarkerPlacement, mainMinDistance, isFavorites) {
    const mainMarkers = [];
    if (useUniformMarkerPlacement) {
        const firstItemsSorted = clusters.map((cluster) => cluster[0]).sort((a, b) => a.index - b.index);
        // Add first items to main markers for better visibility
        firstItemsSorted.forEach((item) => {
            if (
                canPlaceMarker({
                    place: item,
                    existingPlaces: mainMarkers,
                    minDistance: mainMinDistance,
                    isFav: isFavorites,
                })
            ) {
                mainMarkers.push(item);
            }
        });
    }
    return mainMarkers;
}

function createOtherMarkersArr({
    clusters,
    mainMarkers,
    maxMainPlaces,
    mainMinDistance,
    secondaryMinDistance,
    isFavorites,
}) {
    const secondaryMarkers = [];
    for (const cluster of clusters) {
        for (const place of cluster) {
            if (mainMarkers.includes(place)) {
                continue;
            }
            if (
                place.index < maxMainPlaces &&
                canPlaceMarker({ place, existingPlaces: mainMarkers, minDistance: mainMinDistance, isFav: isFavorites })
            ) {
                mainMarkers.push(place);
            } else if (
                canPlaceMarker({
                    place,
                    existingPlaces: [...mainMarkers, ...secondaryMarkers],
                    minDistance: secondaryMinDistance,
                    isFav: isFavorites,
                })
            ) {
                secondaryMarkers.push(place);
            }
        }
    }
    return secondaryMarkers;
}

export function createSecondaryMarker(obj) {
    if (!obj.geometry || !obj.properties) {
        return null;
    }
    const latlng = L.latLng(obj.geometry.coordinates[1], obj.geometry.coordinates[0]);
    return L.circleMarker(latlng, {
        ...obj.properties,
        id: obj.properties.id,
        fillOpacity: 0.9,
        radius: 5,
        color: '#ffffff',
        fillColor: '#fe8800',
        weight: 1,
        zIndex: 1000,
    });
}

export function createHoverMarker({
    marker,
    setSelectedId = null,
    mainStyle = false,
    text,
    latlng,
    iconSize = [10, 10],
    map,
    ctx,
    pointerStyle = `${styles.wikiIconHover} ${styles.wikiIconLarge}`,
}) {
    let tooltipRef = ctx.searchTooltipRef;
    let pointerRef = ctx.searchPointerRef;

    const onZoomEnd = () => {
        removeTooltip(map, tooltipRef);
    };

    const onMouseOver = () => {
        removeTooltip(map, tooltipRef);
        if (setSelectedId) {
            setSelectedId({ id: marker.options.idObj });
        }
        if (!mainStyle) {
            marker.setStyle({
                fillColor: '#237bff',
            });
        }
        if (text) {
            const offset = mainStyle ? [5, iconSize[1] * 0.8] : [0, iconSize[1] * 0.8];
            const title = text;
            const shortTitle = title.length > 50 ? title.substring(0, 50) + '...' : title;
            tooltipRef.current = L.tooltip({
                permanent: true,
                direction: 'bottom',
                offset: offset,
                className: styles.tooltip,
            })
                .setContent(shortTitle)
                .setLatLng(latlng);
            map.addLayer(tooltipRef.current);
        }
    };

    const onMouseOut = (event) => {
        if (event.originalEvent) {
            removeTooltip(map, tooltipRef);
            if (setSelectedId) {
                setSelectedId({ id: -1 });
            }
            if (!mainStyle) {
                marker.setStyle({
                    fillColor: '#fe8800',
                });
            }
        }
        if (pointerRef?.current) {
            if (map?.hasLayer(pointerRef.current)) {
                removeTooltip(map, tooltipRef);
                map.removeLayer(pointerRef.current);
            }
            pointerRef.current = null;
        }
    };

    const onSelectMarker = () => {
        removeTooltip(map, tooltipRef);
        if (pointerRef.current) {
            if (map?.hasLayer(pointerRef.current)) {
                map.removeLayer(pointerRef.current);
            }
            pointerRef.current = null;
        }
        let newMarker;
        if (mainStyle) {
            newMarker = new L.Marker(latlng, {
                icon: L.divIcon({
                    className: pointerStyle,
                    iconSize,
                }),
            });
            newMarker.options.icon.options.className = pointerStyle;
            pointerRef.current = newMarker.addTo(map);
        } else {
            newMarker = L.circleMarker(latlng, {
                fillOpacity: 0.9,
                radius: 5,
                color: '#ffffff',
                fillColor: '#237bff',
                weight: 1,
                zIndex: 1000,
            });
        }
        pointerRef.current = newMarker.addTo(map);
    };

    map.on('zoomend', onZoomEnd);
    marker.on('mouseover', onMouseOver);
    marker.on('mouseout', onMouseOut);
    marker.on('selectMarker', onSelectMarker);

    return () => {
        map.off('zoomend', onZoomEnd);
        marker.off('mouseover', onMouseOver);
        marker.off('mouseout', onMouseOut);
        marker.off('selectMarker', onSelectMarker);
    };
}

export function removeTooltip(map, tooltipRef) {
    if (tooltipRef.current && map.hasLayer(tooltipRef.current)) {
        map.removeLayer(tooltipRef.current);
        tooltipRef.current = null;
    }
}
