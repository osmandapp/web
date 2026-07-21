import {
    BBOX_LAT_LON,
    CATEGORY_NAME,
    CATEGORY_TYPE,
    MATCHED_OBJECTS,
    POI_ID,
    POI_NAME,
} from '../infoblock/components/wpt/WptTagsProvider';

export const MATCHED_OBJECT_TYPE_AMENITY = 'Amenity';
export const MATCHED_OBJECT_TYPE_CITY = 'City';
export const MATCHED_OBJECT_TYPE_STREET = 'Street';

const DEFAULT_MATCHED_AMENITY_CATEGORY_TYPE = 'POI';

export function getAdditionalMatchedAmenityObjects(matchedObjects) {
    return matchedObjects?.length > 1
        ? matchedObjects.slice(1).filter((obj) => obj?.type === MATCHED_OBJECT_TYPE_AMENITY)
        : [];
}

export function getFirstMatchedPoiTypeLocationObject(matchedObjects) {
    return (
        matchedObjects?.find(
            (obj) =>
                obj?.type === MATCHED_OBJECT_TYPE_CITY ||
                obj?.type === MATCHED_OBJECT_TYPE_STREET ||
                obj?.type === MATCHED_OBJECT_TYPE_AMENITY
        ) ?? null
    );
}

export function getMatchedAmenityProperties(obj, defaultCategoryType = DEFAULT_MATCHED_AMENITY_CATEGORY_TYPE) {
    return {
        ...obj,
        [CATEGORY_TYPE]: obj[CATEGORY_TYPE] ?? defaultCategoryType,
        [POI_NAME]: obj[POI_NAME] ?? obj.name ?? '',
        name: obj.name ?? obj[POI_NAME],
    };
}

export function getMatchedObjectName(obj) {
    return obj?.name ?? obj?.[CATEGORY_NAME] ?? obj?.[POI_NAME];
}

export function hasValidMatchedObjectCoords(obj) {
    return Number.isFinite(obj?.lat) && Number.isFinite(obj?.lon);
}

export function createSearchMatchedObjectActions({
    item,
    t,
    ctx,
    navigate,
    recentSaver,
    setShowMatched,
    formatSearchResultProperties,
    navigateToPoi,
    objectSearchType,
    poiObjectsKey,
    poiTypeCategory,
}) {
    const matchedObjects = item.properties?.[MATCHED_OBJECTS] ?? [];
    const isPoiTypeResult = item.properties?.[CATEGORY_TYPE] === poiTypeCategory;
    const matchedAmenityObjects = isPoiTypeResult ? [] : getAdditionalMatchedAmenityObjects(matchedObjects);
    const matchedPoiTypeLocationObject = isPoiTypeResult ? getFirstMatchedPoiTypeLocationObject(matchedObjects) : null;

    function openMatchedObject(obj) {
        if (!hasValidMatchedObjectCoords(obj)) {
            return;
        }
        ctx.setZoomToCoords({ lat: obj.lat, lon: obj.lon, bbox: obj[BBOX_LAT_LON] });
        setShowMatched(false);
    }

    function openMatchedAmenity(obj) {
        if (!hasValidMatchedObjectCoords(obj)) {
            return;
        }

        const options = getMatchedAmenityProperties(obj);
        const id = obj[POI_ID] ?? `${obj.lat},${obj.lon}`;
        const poi = {
            key: id,
            options,
            latlng: { lat: obj.lat, lng: obj.lon },
        };

        ctx.setCurrentObjectType(objectSearchType);
        ctx.setSelectedPoiObj({ ...poi });
        ctx.setSelectedWpt({ poi, id });
        recentSaver(poiObjectsKey, poi);
        ctx.setMoveToMapObj({
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [obj.lon, obj.lat] },
            properties: options,
        });
        navigateToPoi({ poi }, navigate);
    }

    function getMatchedAmenityName(obj) {
        return formatSearchResultProperties(getMatchedAmenityProperties(obj), t).name;
    }

    function moveToMatchedPoiTypeLocation() {
        openMatchedObject(matchedPoiTypeLocationObject);
    }

    const matchedNameObjects = [
        ...matchedAmenityObjects.map((obj, index) =>
            createMatchedNameObject({
                obj,
                index,
                name: getMatchedAmenityName(obj),
                openMatchedObject: openMatchedAmenity,
            })
        ),
        ...(matchedPoiTypeLocationObject
            ? [
                  createMatchedNameObject({
                      obj: matchedPoiTypeLocationObject,
                      index: matchedAmenityObjects.length,
                      name: getMatchedObjectName(matchedPoiTypeLocationObject),
                      openMatchedObject,
                  }),
              ]
            : []),
    ].filter(({ name }) => name);

    const matchedDialogObjects = matchedObjects.map((obj, index) => ({
        key: getMatchedObjectKey(obj, index),
        obj,
        onClick: () => openMatchedObject(obj),
    }));

    return {
        matchedObjects,
        matchedNameObjects,
        matchedDialogObjects,
        moveToMatchedPoiTypeLocation,
    };
}

function createMatchedNameObject({ obj, index, name, openMatchedObject }) {
    const onClick = (event) => {
        event.stopPropagation();
        openMatchedObject(obj);
    };

    return {
        key: getMatchedObjectKey(obj, index),
        obj,
        name,
        onClick,
        onKeyDown: (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onClick(event);
            }
        },
    };
}

function getMatchedObjectKey(obj, index = 0) {
    return obj[POI_ID] ?? `${obj.type}-${obj.lat}-${obj.lon}-${index}`;
}
