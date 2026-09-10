import i18n from '../../i18n';
import { searchTypeMap } from '../../manager/searchConstants';
import { createSearchObjectOptions } from '../../manager/SearchManager';
import { POI_NAME } from '../../infoblock/components/wpt/WptTagsProvider';

const SYMBOL_LAYER_TYPE = 'symbol';
const ON_PATH_SYMBOL_PLACEMENT = 'line';
const OSM_ID_TAG = 'osm_id';
const NAME_TAG = 'name';
const HOUSE_NUMBER_TAG = 'addr:housenumber';

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
    const name = properties[`${NAME_TAG}:${i18n.language}`] ?? properties[NAME_TAG] ?? '';
    const isHouse = !name && Boolean(properties[HOUSE_NUMBER_TAG]);
    const [lng, lat] = geometry?.type === 'Point' ? geometry.coordinates : [clickLatlng.lng, clickLatlng.lat];

    return {
        poi: {
            key: osmId,
            options: isHouse
                ? createSearchObjectOptions(searchTypeMap.HOUSE, properties[HOUSE_NUMBER_TAG])
                : { [POI_NAME]: name },
            latlng: { lat, lng },
            mapObj: true,
        },
        mvt: {
            osmId,
            mapObjectId: feature.id,
            tags: isHouse ? null : properties,
        },
    };
}
