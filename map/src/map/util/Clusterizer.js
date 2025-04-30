import L from 'leaflet';
import styles from '../../menu/search/search.module.css';
import { getPointLatLon } from './TrackLayerProvider';
import { getObjIdSearch, searchTypeMap } from '../layers/SearchLayer';
import {
    CATEGORY_TYPE,
    FINAL_POI_ICON_NAME,
    ICON_KEY_NAME,
    POI_ICON_NAME,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
} from '../../infoblock/components/wpt/WptTagsProvider';
import PoiManager from '../../manager/PoiManager';
import { getIconByType } from '../../manager/SearchManager';
import { processMarkers } from '../layers/FavoriteLayer';
import { DEFAULT_ICON_SIZE } from '../markers/MarkerOptions';
import { getImgByProps, updateMarkerZIndex } from '../layers/ExploreLayer';

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
    isExplore = false,
}) {
    const maxMainPlaces = getMaxMainPlaces(zoom, isPoi, isExplore);
    const maxSecondaryPlaces = getMaxSecondaryPlaces(zoom, isExplore);
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

    if (isExplore) {
        return createExploreMarkersArr({
            places,
            mainMinDistance,
            secondaryMinDistance,
            maxMainPlaces,
            maxSecondaryPlaces,
        });
    }

    // Sort clusters by size
    const clusters = Object.values(clusterPlaces(places, zoom, isFavorites));

    if (isFavorites) {
        const res = createFavMarkersArr({
            clusters,
            mainMinDistance,
            secondaryMinDistance,
            isFavorites,
            zoom,
        });

        return {
            mainMarkers: res.mainMarkers,
            secondaryMarkers: res.secondaryMarkers,
        };
    }

    const mainMarkers = createMainMarkersArr(clusters, useUniformMarkerPlacement, mainMinDistance, isFavorites, isPoi);

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

function createExploreMarkersArr({ places, mainMinDistance, secondaryMinDistance, maxMainPlaces, maxSecondaryPlaces }) {
    places.sort((a, b) => (a.properties.rowNum ?? 0) - (b.properties.rowNum ?? 0));

    const mainMarkers = [];
    for (const place of places) {
        if (
            mainMarkers.length <= maxMainPlaces &&
            place.properties.rowNum < 100 &&
            canPlaceMarker({
                place,
                existingPlaces: mainMarkers,
                minDistance: mainMinDistance,
                isFav: false,
            })
        ) {
            mainMarkers.push(place);
        }
    }

    const secondaryMarkers = [];
    for (const place of places) {
        if (secondaryMarkers.length >= maxSecondaryPlaces || mainMarkers.includes(place)) continue;

        if (
            canPlaceMarker({
                place,
                existingPlaces: [...mainMarkers, ...secondaryMarkers],
                minDistance: secondaryMinDistance,
                isFav: false,
            })
        ) {
            secondaryMarkers.push(place);
        }
    }

    return {
        mainMarkers,
        secondaryMarkers,
    };
}

function getMaxMainPlaces(zoom, isPoi, isExplore) {
    if (isPoi) {
        return 2000;
    } else if (isExplore) {
        return 20;
    }
    return 50;
}

function getMaxSecondaryPlaces(zoom, isExplore) {
    if (isExplore) {
        return 200;
    }
    if (zoom > 10) {
        return 200;
    }
    return 900;
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

function createMainMarkersArr(clusters, useUniformMarkerPlacement, mainMinDistance, isFavorites, isPoi) {
    const mainMarkers = [];
    if (useUniformMarkerPlacement) {
        if (!isPoi && !isFavorites) {
            // Remove images from clusters without icon
            clusters = clusters.map((cluster) => cluster.filter((item) => getImgByProps(item.properties)));
            // Remove empty clusters
            clusters = clusters.filter((cluster) => cluster.length > 0);
        }
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

function createFavMarkersArr({ clusters, mainMinDistance, secondaryMinDistance, isFavorites, zoom }) {
    const mainMarkers = [];
    const secondaryMarkers = [];
    const MAIN_CLUSTER_SIZE = zoom < 10 ? 3 : 50;
    const OTHER_CLUSTER_SIZE = zoom < 10 ? 5 : 100;

    for (const cluster of clusters) {
        const mainClusterMarkers = [];
        const secondaryClusterMarkers = [];

        for (const place of cluster) {
            if (
                mainClusterMarkers.length < MAIN_CLUSTER_SIZE &&
                canPlaceMarker({
                    place,
                    existingPlaces: mainClusterMarkers,
                    minDistance: mainMinDistance,
                    isFav: isFavorites,
                })
            ) {
                mainClusterMarkers.push(place);
            } else if (
                secondaryClusterMarkers.length < OTHER_CLUSTER_SIZE &&
                canPlaceMarker({
                    place,
                    existingPlaces: [...mainClusterMarkers, ...secondaryClusterMarkers],
                    minDistance: secondaryMinDistance,
                    isFav: isFavorites,
                })
            ) {
                secondaryClusterMarkers.push(place);
            }

            if (
                mainClusterMarkers.length >= MAIN_CLUSTER_SIZE &&
                secondaryClusterMarkers.length >= OTHER_CLUSTER_SIZE
            ) {
                break;
            }
        }
        mainMarkers.push(...mainClusterMarkers);
        secondaryMarkers.push(...secondaryClusterMarkers);
    }
    return { mainMarkers, secondaryMarkers };
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
    if (!obj?.geometry || !obj?.properties) {
        return null;
    }
    const latlng = L.latLng(obj.geometry.coordinates[1], obj.geometry.coordinates[0]);

    let finalIconName = obj.properties[FINAL_POI_ICON_NAME];
    if (!finalIconName) {
        if (searchTypeMap.POI === obj.properties[CATEGORY_TYPE]) {
            finalIconName = PoiManager.getIconNameForPoiType({
                iconKeyName: obj.properties[ICON_KEY_NAME],
                typeOsmTag: obj.properties[TYPE_OSM_TAG],
                typeOsmValue: obj.properties[TYPE_OSM_VALUE],
                iconName: obj.properties[POI_ICON_NAME],
            });
        } else {
            finalIconName = getIconByType(obj.properties[CATEGORY_TYPE]);
        }
    }

    return L.circleMarker(latlng, {
        ...obj.properties,
        id: obj.properties.id,
        idObj: getObjIdSearch(obj),
        [FINAL_POI_ICON_NAME]: finalIconName,
        fillOpacity: 0.9,
        radius: 5,
        color: '#ffffff',
        fillColor: '#fe8800',
        weight: 1,
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

export function addClusteredMarkersToMap({ map, markers, mainMarkers, secondaryMarkers, ctx, mapBounds, onClick }) {
    const markersToAdd = [];
    const mainLayers = [];
    const secondaryLayers = [];
    markers.eachLayer((layer) => {
        const markerLatLng = layer.getLatLng();
        if (!mapBounds.contains(markerLatLng)) {
            return;
        }
        if (!layer.options.hasClickHandler) {
            layer.on('click', onClick);
            layer.options.hasClickHandler = true;
        }
        processMarkers({
            layer,
            markerLatLng,
            mainMarkers,
            secondaryMarkers,
            mainLayers,
            secondaryLayers,
        });
    });
    markersToAdd.push(...mainLayers, ...secondaryLayers);
    markersToAdd.forEach((marker) => {
        createHoverMarker({
            marker,
            mainStyle: true,
            text: marker.options['name'] ?? marker.options['title'],
            latlng: marker._latlng,
            iconSize: [DEFAULT_ICON_SIZE, DEFAULT_ICON_SIZE],
            map,
            ctx,
        });
    });
    const mainLayersGroup = new L.FeatureGroup(mainLayers);
    const secLayersGroup = new L.FeatureGroup(secondaryLayers);
    const res = new L.LayerGroup([secLayersGroup, mainLayersGroup]);
    res.addTo(map);
    updateMarkerZIndex(mainLayersGroup, 2000);

    return res;
}
