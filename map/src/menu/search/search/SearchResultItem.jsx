import React, { useContext, useEffect, useState } from 'react';
import { Dialog, DialogTitle, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { ReactComponent as InfoIcon } from '../../../assets/icons/ic_action_info_outlined.svg';
import { ReactComponent as LocationIcon } from '../../../assets/icons/ic_action_location_marker_outlined.svg';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import DefaultItem from '../../../frame/components/items/DefaultItem';
import styles from '../search.module.css';
import dialogStyles from '../../../dialogs/dialog.module.css';
import { useTranslation } from 'react-i18next';
import capitalize from 'lodash-es/capitalize';
import { formattingPoiType, navigateToPoi } from '../../../manager/PoiManager';
import AppContext, { OBJECT_SEARCH, OBJECT_TYPE_CLOUD_TRACK, OBJECT_TYPE_POI } from '../../../context/AppContext';
import { getObjIdSearch, searchTypeMap, FAVORITE_HIT_GROUP_ID } from '../../../map/layers/SearchLayer';
import DistanceInfo from '../../../infoblock/components/common/DistanceInfo';
import { getDistance, getBearing } from '../../../util/Utils';
import {
    ADDRESS_1,
    ADDRESS_2,
    CATEGORY_NAME,
    CATEGORY_TYPE,
    CITY,
    EN_NAME,
    MAIN_CATEGORY_KEY_NAME,
    MATCHED_OBJECTS,
    POI_NAME,
    POI_SUBTYPE,
    POI_TYPE,
    SEPARATOR,
    TYPE,
    WEB_PREFIX,
} from '../../../infoblock/components/wpt/WptTagsProvider';
import { getPoiParentCategory, parseTagWithLang } from '../../../manager/SearchManager';
import { LatLng } from 'leaflet';
import { POI_LAYER_ID } from '../../../manager/GlobalManager';
import DividerWithMargin from '../../../frame/components/dividers/DividerWithMargin';
import { apiGet } from '../../../util/HttpApi';
import useSearchNav from '../../../util/hooks/search/useSearchNav';
import { POI_OBJECTS_KEY, useRecentDataSaver } from '../../../util/hooks/menu/useRecentDataSaver';
import i18n from 'i18next';
import { useNavigate } from 'react-router-dom';
import { openTrackOnMap, updateTracks } from '../../../manager/track/TracksManager';
import { getTrackInfoText } from '../../tracks/CloudTrackItem';
import { addFavoriteToMapFromSearch, resolveFavoriteMarkerForSearch } from '../../../manager/FavoritesManager';
import FavoriteItem from '../../favorite/FavoriteItem';

export function getFirstSubstring(inputString) {
    if (inputString?.includes(SEPARATOR)) {
        return inputString.split(SEPARATOR)[0];
    }
    return inputString;
}

export function preparedType(type, t, lang = null) {
    let restoreLang;
    if (t && lang) {
        restoreLang = i18n.language;
        i18n.changeLanguage(lang);
    }

    const res = capitalize(t(`amenity_type_${type}`, formattingPoiType(t(`poi_${type}`))));

    if (restoreLang) {
        i18n.changeLanguage(restoreLang);
    }
    return res;
}

export function getPropsFromSearchResultItem(props, t = null, lang = null, listFiles = null, unitsSettings = null) {
    let restoreLang;
    if (t && lang) {
        restoreLang = i18n.language;
        i18n.changeLanguage(lang);
    }
    let type, name, city;
    if (props[CATEGORY_TYPE] === searchTypeMap.POI || !props[CATEGORY_TYPE]) {
        name = props[POI_NAME];
        const poiSubType = getFirstSubstring(props[POI_SUBTYPE]);
        const poiType = getFirstSubstring(props[POI_TYPE]);
        type = poiSubType ?? poiType;
        if (name === '') {
            name = preparedType(type, t);
            type = poiType;
        }
        type = preparedType(type, t);
    } else if (props[CATEGORY_TYPE] === searchTypeMap.FAVORITE) {
        name = props[POI_NAME] ?? props[CATEGORY_NAME];
        type = t ? t('shared_string_my_favorites') : '';
    } else if (props[CATEGORY_TYPE] === searchTypeMap.GPX_TRACK) {
        name = props[CATEGORY_NAME];
    } else {
        name = props[CATEGORY_NAME];
        if (props[CATEGORY_TYPE] === searchTypeMap.POI_TYPE) {
            type = getPoiParentCategory(props, t);
        } else {
            type = props[CATEGORY_TYPE]?.toLowerCase();
            if (type) {
                type = capitalize(t(`search_address_${type}`, formattingPoiType(type)));
            }
        }
    }

    name = getFirstSubstring(name);
    type = getFirstSubstring(type);
    city = props[CITY];

    const addressParts = [props[ADDRESS_1], props[ADDRESS_2]].filter(Boolean);
    const info = getInfo();

    function getInfo() {
        if (props[CATEGORY_TYPE] === searchTypeMap.GPX_TRACK) {
            return getTrackInfo(name, listFiles, unitsSettings, t);
        }
        if (addressParts.length > 0) {
            if (type.toLowerCase() === searchTypeMap.STREET.toLowerCase()) {
                return addressParts[0];
            }
            return addressParts.join(', ');
        }
        return undefined;
    }

    if (restoreLang) {
        i18n.changeLanguage(restoreLang);
    }

    return { name, type, info, city };
}

function getTrackInfo(name, listFiles, unitsSettings, t) {
    if (!listFiles || !unitsSettings) return '';
    const file = listFiles.uniqueFiles?.find((f) => f.name === name);
    return getTrackInfoText(file, unitsSettings, t);
}

function safeCategoryTypeKey(type) {
    return String(type).replaceAll(/[^a-zA-Z0-9_-]/g, '_');
}

export default function SearchResultItem({ item, typeItem, index, currentLoc, loc = null, isUser = false }) {
    const ctx = useContext(AppContext);

    const navigate = useNavigate();

    const { t } = useTranslation();

    const { name, info, distance, bearing, isUserLocation, type, city, icon } = parseItem(item);
    const [isHovered, setIsHovered] = useState(false);
    const [showMatched, setShowMatched] = useState(false);

    const matchedObjects = item.properties?.[MATCHED_OBJECTS] ?? [];
    function openMatchedObject(obj) {
        ctx.setZoomToCoords({ lat: obj.lat, lon: obj.lon });
        setShowMatched(false);
    }

    const { navigateToSearchResults } = useSearchNav();
    const recentSaver = useRecentDataSaver();

    const itemId = getObjIdSearch(item);

    function handleMouseEnter() {
        if (itemId !== null) {
            setSelectedPoint({ show: true });
        }
        setIsHovered(true);
    }

    function handleMouseLeave() {
        if (itemId !== null) {
            setSelectedPoint({ show: false });
        }
        setIsHovered(false);
    }

    function setSelectedPoint({ show }) {
        ctx.setSelectedWptId({ id: itemId, show, type: typeItem, obj: item, prev: ctx.selectedWptId });
    }

    useEffect(() => {
        if (ctx.selectedWptId?.id === itemId) {
            setIsHovered(true);
        } else {
            setIsHovered(false);
        }
    }, [ctx.selectedWptId?.id]);

    function parseItem(item) {
        const res = getPropsFromSearchResultItem(item.properties, t, null, ctx.listFiles, ctx.unitsSettings);
        const lat = item.geometry?.coordinates?.[1];
        const lon = item.geometry?.coordinates?.[0];
        const hasCoords = loc && lat != null && lon != null && !(lat === 0 && lon === 0);
        const distance = hasCoords ? getDistance(loc.lat, loc.lng, lat, lon) : null;
        const bearing = hasCoords ? getBearing(loc.lat, loc.lng, lat, lon) : null;
        const icon = item.icon;
        return { ...res, icon, distance, bearing, isUserLocation: isUser };
    }

    const id = (() => {
        const qType = ctx.searchQuery?.type;
        if (qType != null && qType !== '' && index != null) {
            return `se-search-result-item-${safeCategoryTypeKey(qType)}-${index}`;
        }
        const categoryType = item.properties[CATEGORY_TYPE];
        if (categoryType === searchTypeMap.FAVORITE) {
            return `se-search-result-fav-${name}`;
        }
        if (categoryType === searchTypeMap.POI_TYPE || categoryType === searchTypeMap.GPX_TRACK) {
            return `se-search-result-${item.properties[CATEGORY_NAME]}`;
        }
        return 'se-search-result-item';
    })();

    async function clickHandler(event) {
        if (item.properties?.[CATEGORY_TYPE] === searchTypeMap.GPX_TRACK) {
            const fileName = item.properties?.[CATEGORY_NAME];
            const file = ctx.listFiles?.uniqueFiles?.find((f) => f?.name === fileName);
            if (!file) return;
            const searchFile = {
                name: file.name,
                type: file.type,
                clienttimems: file.clienttimems,
                updatetimems: file.updatetimems,
                mapObj: false,
            };
            ctx.setSelectedSearchObj({ type: OBJECT_TYPE_CLOUD_TRACK, object: searchFile });
            const newTracks = await openTrackOnMap({
                file: searchFile,
                showOnMap: true,
                showInfo: true,
                zoomToTrack: true,
                ctx,
                recentSaver,
                fromSearch: true,
            });
            updateTracks(ctx, null, newTracks);
            return;
        }
        if (item.geometry.coordinates[0] !== 0 && item.geometry.coordinates[1] !== 0) {
            const type = item.properties[WEB_PREFIX + TYPE];
            let options;
            if (type === searchTypeMap.CITY || type === searchTypeMap.TOWN || type === searchTypeMap.VILLAGE) {
                const respPoi = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/get-poi-by-name`, {
                    apiCache: true,
                    params: {
                        lat: item.geometry.coordinates[1],
                        lon: item.geometry.coordinates[0],
                        enName: item.properties[WEB_PREFIX + EN_NAME],
                    },
                });
                if (respPoi?.data) {
                    options = respPoi.data.properties;
                }
            }
            const poi = {
                key: itemId ?? `${typeItem}-${item.geometry.coordinates[0]}-${item.geometry.coordinates[1]}`,
                options: options ?? item.properties,
                latlng: new LatLng(item.geometry.coordinates[1], item.geometry.coordinates[0]),
            };
            // click on item — navigation is handled by MainMenu via selectedType change
            ctx.setCurrentObjectType(typeItem === POI_LAYER_ID ? OBJECT_TYPE_POI : OBJECT_SEARCH);
            ctx.setSelectedPoiObj({ ...poi });
            ctx.setSelectedWpt({ poi, id: itemId });
            recentSaver(POI_OBJECTS_KEY, poi);
            const pushMapViewForBackButton = Boolean(event?.ctrlKey);
            ctx.setMoveToMapObj({ ...item, pushMapViewForBackButton });
            if (poi.options[CATEGORY_TYPE] === searchTypeMap.POI) {
                navigateToPoi({ poi }, navigate);
            }
        } else {
            // click on category
            const category = item.properties['web_keyName'];
            if (category) {
                return navigateToSearchResults({
                    type: category,
                });
            } else {
                // search by brand
                let brandType = item.properties[CATEGORY_NAME];
                let type = item.properties[MAIN_CATEGORY_KEY_NAME]?.toLowerCase();
                if (type) {
                    const brandRes = parseTagWithLang(type);
                    if (brandRes.lang) {
                        brandType = `${brandType}:${brandRes.lang}`;
                    }
                }
                return navigateToSearchResults({
                    type: brandType,
                });
            }
        }
    }

    function addInfo() {
        return info ?? '';
    }

    function addType() {
        if (
            !type ||
            type.toLowerCase() === searchTypeMap.STREET.toLowerCase() ||
            type.toLowerCase() === searchTypeMap.HOUSE.toLowerCase()
        ) {
            return '';
        }
        return `${info ? ' · ' : ''}${type}`;
    }

    function addCity() {
        if (!city) return '';
        return ` · ${city}`;
    }

    if (item.properties[CATEGORY_TYPE] === searchTypeMap.FAVORITE) {
        const groupId = item.properties[FAVORITE_HIT_GROUP_ID];
        const resolved = resolveFavoriteMarkerForSearch(ctx, groupId, name);
        if (!resolved) return null;
        const marker = { ...resolved.marker, locDist: distance };
        return (
            <FavoriteItem
                id={id}
                marker={marker}
                group={resolved.group}
                currentLoc={currentLoc}
                onOpen={() => addFavoriteToMapFromSearch(ctx, { group: resolved.group, marker: resolved.marker })}
                hideActions
            />
        );
    }

    return (
        <>
            <MenuItem
                id={id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${styles.searchItem} ${isHovered ? styles.searchHoverItem : ''}`}
                onClick={clickHandler}
            >
                <ListItemText>
                    <MenuItemWithLines className={styles.titleText} name={name} maxLines={2} />
                    {(info || type || matchedObjects.length > 1) && (
                        <MenuItemWithLines
                            className={styles.placeTypes}
                            name={`${addInfo()}${addType()}${addCity()}`}
                            maxLines={4}
                        >
                            {distance > 0 && (
                                <span style={{ display: 'inline-flex' }}>
                                    <Typography className={styles.placeDistance}>{' · '}</Typography>
                                    <DistanceInfo
                                        distance={distance}
                                        bearing={bearing}
                                        isUserLocation={isUserLocation}
                                    />
                                </span>
                            )}
                            {matchedObjects.length > 1 && (
                                <span
                                    className={styles.matchedObjectsIcon}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowMatched(true);
                                    }}
                                >
                                    <InfoIcon className={styles.placeTypesIcon} />
                                </span>
                            )}
                        </MenuItemWithLines>
                    )}
                </ListItemText>
                <ListItemIcon className={styles.categoryItemIcon}>{icon}</ListItemIcon>
            </MenuItem>
            <DividerWithMargin margin={'16px'} />
            {showMatched && (
                <Dialog open={true} onClose={() => setShowMatched(false)} onClick={(e) => e.stopPropagation()}>
                    <DialogTitle className={dialogStyles.title}>Matched objects ({matchedObjects.length})</DialogTitle>
                    {matchedObjects.map((obj, i) => (
                        <DefaultItem
                            key={i}
                            icon={<LocationIcon />}
                            className={styles.matchedItem}
                            name={obj.name}
                            additionalInfo={`${obj.lat?.toFixed(5)}, ${obj.lon?.toFixed(5)}`}
                            onClick={() => openMatchedObject(obj)}
                        />
                    ))}
                </Dialog>
            )}
        </>
    );
}
