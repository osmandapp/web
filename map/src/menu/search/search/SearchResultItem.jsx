import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import styles from '../search.module.css';
import { useTranslation } from 'react-i18next';
import capitalize from 'lodash-es/capitalize';
import { formattingPoiType, navigateToPoi } from '../../../manager/PoiManager';
import AppContext, { OBJECT_SEARCH, OBJECT_TYPE_POI } from '../../../context/AppContext';
import { getObjIdSearch, searchTypeMap, FAVORITE_HIT_GROUP_ID } from '../../../map/layers/SearchLayer';
import DistanceInfo from '../../../infoblock/components/common/DistanceInfo';
import {
    ADDRESS_1,
    ADDRESS_2,
    CATEGORY_NAME,
    CATEGORY_TYPE,
    CITY,
    EN_NAME,
    ICON_KEY_NAME,
    COLOR_NAME_EXTENSION,
    BACKGROUND_TYPE_EXTENSION,
    MAIN_CATEGORY_KEY_NAME,
    POI_NAME,
    POI_SUBTYPE,
    POI_TYPE,
    SEPARATOR,
    TYPE,
    WEB_PREFIX,
} from '../../../infoblock/components/wpt/WptTagsProvider';
import { getPoiParentCategory, parseTagWithLang } from '../../../manager/SearchManager';
import { LatLng } from 'leaflet';
import { POI_LAYER_ID } from '../../../map/layers/PoiLayer';
import DividerWithMargin from '../../../frame/components/dividers/DividerWithMargin';
import { apiGet } from '../../../util/HttpApi';
import useSearchNav from '../../../util/hooks/search/useSearchNav';
import { POI_OBJECTS_KEY, useRecentDataSaver } from '../../../util/hooks/menu/useRecentDataSaver';
import i18n from 'i18next';
import { useNavigate } from 'react-router-dom';
import { getDist, getTime, openTrackOnMap, updateTracks } from '../../../manager/track/TracksManager';
import { convertMeters, getLargeLengthUnit, LARGE_UNIT } from '../../settings/units/UnitsConverter';
import { CustomIcon, FavInfo, addFavoriteToMap } from '../../favorite/FavoriteItem';
import { getFavoriteMenuIconHtml, resolveFavoriteMarkerForSearch } from '../../../manager/FavoritesManager';
import favMenuStyles from '../../trackfavmenu.module.css';

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
    const trackFile = listFiles.uniqueFiles?.find((f) => f.name === name);
    if (!trackFile) return '';
    const distance = convertMeters(getDist(trackFile), unitsSettings.len, LARGE_UNIT);
    const dist = distance != null ? `${distance.toFixed(2)} ${t(getLargeLengthUnit({ unitsSettings }))}` : '';
    const time = getTime(trackFile);
    return [dist, time].filter(Boolean).join(' · ');
}

function safeCategoryTypeKey(type) {
    return String(type).replaceAll(/[^a-zA-Z0-9_-]/g, '_');
}

export default function SearchResultItem({ item, typeItem, index, currentLoc }) {
    const ctx = useContext(AppContext);

    const navigate = useNavigate();

    const { t } = useTranslation();
    const { ref, inView } = useInView();

    const { name, info, distance, bearing, isUserLocation, type, city, icon } = parseItem(item);
    const [isHovered, setIsHovered] = useState(false);

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
        const distance = item.locDist;
        const bearing = item.bearing;
        const isUserLocation = item.isUserLocation;
        const icon = item.icon;
        return { ...res, icon, distance, bearing, isUserLocation };
    }

    const id = (() => {
        const qType = ctx.searchQuery?.type;
        if (qType != null && qType !== '' && index != null) {
            return `se-search-result-item-${safeCategoryTypeKey(qType)}-${index}`;
        }
        if (item.properties[CATEGORY_TYPE] === searchTypeMap.POI_TYPE) {
            return `se-search-result-${item.properties[CATEGORY_NAME]}`;
        }
        return 'se-search-result-item';
    })();

    async function clickHandler() {
        if (item.properties?.[CATEGORY_TYPE] === searchTypeMap.GPX_TRACK) {
            const fileName = item.properties?.[CATEGORY_NAME];
            const file = ctx.listFiles?.uniqueFiles?.find((f) => f?.name === fileName);
            if (!file) return;
            const newTracks = await openTrackOnMap({
                file: { ...file, mapObj: true },
                showOnMap: true,
                showInfo: true,
                zoomToTrack: true,
                ctx,
                recentSaver,
            });
            updateTracks(ctx, null, newTracks);
            return;
        }
        if (item.properties?.[CATEGORY_TYPE] === searchTypeMap.FAVORITE) {
            const groupId = item.properties[FAVORITE_HIT_GROUP_ID];
            const wptName = item.properties[POI_NAME] ?? item.properties[CATEGORY_NAME];
            const resolved = resolveFavoriteMarkerForSearch(ctx, groupId, wptName);
            if (!resolved) {
                return;
            }
            addFavoriteToMap({ group: resolved.group, marker: resolved.marker, ctx, mapObj: true });
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
            ctx.setMoveToMapObj(item);
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

    const isFavoriteHit = item.properties[CATEGORY_TYPE] === searchTypeMap.FAVORITE;
    const favoriteListMarker = isFavoriteHit
        ? {
              name,
              icon: getFavoriteMenuIconHtml({
                  icon: item.properties[ICON_KEY_NAME],
                  color: item.properties[COLOR_NAME_EXTENSION],
                  background: item.properties[BACKGROUND_TYPE_EXTENSION],
              }),
              layer: { options: { address: item.properties.address ?? '' } },
              locDist: distance,
          }
        : null;

    return (
        <div ref={ref}>
            {!inView ? (
                <Skeleton variant="rectangular" width="100%" height={'var(--menu-item-size)'} />
            ) : (
                <div>
                    {isFavoriteHit ? (
                        <>
                            <MenuItem
                                id={`se-search-fav-result-${index}-${item.properties[FAVORITE_HIT_GROUP_ID] ?? ''}`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className={`${favMenuStyles.item} ${isHovered ? favMenuStyles.itemHovered : ''}`}
                                onClick={clickHandler}
                            >
                                <ListItemIcon className={favMenuStyles.icon}>
                                    <CustomIcon marker={favoriteListMarker} />
                                </ListItemIcon>
                                <ListItemText>
                                    <MenuItemWithLines name={name} maxLines={1} />
                                    <FavInfo
                                        marker={favoriteListMarker}
                                        currentLoc={currentLoc}
                                        unitsSettings={ctx.unitsSettings}
                                    />
                                </ListItemText>
                            </MenuItem>
                            <DividerWithMargin margin={'64px'} />
                        </>
                    ) : (
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
                                    {(info || type) && (
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
                                        </MenuItemWithLines>
                                    )}
                                </ListItemText>
                                <ListItemIcon className={styles.categoryItemIcon}>{icon}</ListItemIcon>
                            </MenuItem>
                            <DividerWithMargin margin={'16px'} />
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
