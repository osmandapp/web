import i18n from '../../i18n';
import { SEARCH_ICON_MAP_BUILDING, searchTypeMap } from '../../manager/searchConstants';
import {
    CATEGORY_NAME,
    CATEGORY_TYPE,
    FINAL_POI_ICON_NAME,
    POI_NAME,
} from '../../infoblock/components/wpt/WptTagsProvider';

const SYMBOL_LAYER_TYPE = 'symbol';
const ON_PATH_SYMBOL_PLACEMENT = 'line';
const OSM_ID_TAG = 'osm_id';
const NAME_TAG = 'name';
const HOUSE_NUMBER_TAG = 'addr:housenumber';
// tags of the transport stop symbols in default.mvt.json
const TRANSPORT_STOP_TAGS = {
    highway: ['bus_stop'],
    railway: ['tram_stop', 'halt', 'station'],
    public_transport: ['platform', 'stop_position'],
    amenity: ['bus_station', 'ferry_terminal'],
    aerialway: ['station'],
};
// osm entity type as expected by get-poi-by-osmid
const OSM_TYPE_NODE = '1';
const OSM_TYPE_WAY = '2';
const OSM_TYPE_RELATION = '3';
// ObfConstants.RELATION_BIT (1 << 42) is checked on the map object id >> 1
const RELATION_ID_BIT = 2 ** 43;

// as in Android MapSelectionHelper: only rendered symbols (icons, captions) are clickable, captions drawn along a path are not
export function pickClickableFeature(features) {
    return features.find(
        (feature) =>
            feature.layer?.type === SYMBOL_LAYER_TYPE &&
            feature.layer.layout?.['symbol-placement'] !== ON_PATH_SYMBOL_PLACEMENT &&
            feature.properties?.[OSM_ID_TAG] != null
    );
}

// preview for WptDetails (name only, type and icon come from the server) + what is needed to load the details
export function createMvtObject(feature, clickLatlng) {
    const { properties, geometry } = feature;
    const osmId = properties[OSM_ID_TAG];
    const osmType = getOsmType(feature.id);
    const name = properties[`${NAME_TAG}:${i18n.language}`] ?? properties[NAME_TAG] ?? '';
    const isHouse = !name && Boolean(properties[HOUSE_NUMBER_TAG]);
    const [lng, lat] = geometry?.type === 'Point' ? geometry.coordinates : [clickLatlng.lng, clickLatlng.lat];

    return {
        poi: {
            key: osmId,
            options: isHouse ? createHouseOptions(properties) : { [POI_NAME]: name },
            latlng: { lat, lng },
            mapObj: true,
        },
        mvt: {
            osmId,
            osmType,
            stopId: getTransportStopId(properties, osmId, osmType),
            // an address has no tags, same as the HOUSE search result
            tags: isHouse ? null : properties,
        },
    };
}

// ObfConstants.getOsmEntityType(BinaryMapDataObject): relation bit, then even id = node, odd id = way
function getOsmType(id) {
    if (!Number.isFinite(id)) {
        return OSM_TYPE_WAY;
    }
    if (Math.floor(id / RELATION_ID_BIT) % 2 === 1) {
        return OSM_TYPE_RELATION;
    }

    return id % 2 === 0 ? OSM_TYPE_NODE : OSM_TYPE_WAY;
}

// TransportStop id: ObfConstants.createMapObjectIdFromCleanOsmId, node osmId << 1, way (osmId << 1) + 1
function getTransportStopId(properties, osmId, osmType) {
    const isStop = Object.entries(TRANSPORT_STOP_TAGS).some(([tag, values]) => values.includes(properties[tag]));
    if (!isStop || osmType === OSM_TYPE_RELATION) {
        return null;
    }

    return osmType === OSM_TYPE_NODE ? osmId * 2 : osmId * 2 + 1;
}

// house number without a name: same as the HOUSE search result (SearchResultConverter.getFeature)
function createHouseOptions(properties) {
    return {
        [CATEGORY_TYPE]: searchTypeMap.HOUSE,
        [CATEGORY_NAME]: properties[HOUSE_NUMBER_TAG],
        [FINAL_POI_ICON_NAME]: SEARCH_ICON_MAP_BUILDING,
    };
}
