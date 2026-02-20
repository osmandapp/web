import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import styles from '../search.module.css';
import { useTranslation } from 'react-i18next';
import capitalize from 'lodash-es/capitalize';
import { formattingPoiType } from '../../../manager/PoiManager';
import AppContext, { OBJECT_SEARCH, OBJECT_TYPE_POI } from '../../../context/AppContext';
import { getObjIdSearch, searchTypeMap } from '../../../map/layers/SearchLayer';
import DistanceInfo from '../../../infoblock/components/wpt/DistanceInfo';
import {
    ADDRESS_1,
    ADDRESS_2,
    CATEGORY_NAME,
    CATEGORY_TYPE,
    CITY,
    EN_NAME,
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

export function getPropsFromSearchResultItem(props, t = null, lang = null) {
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

export default function SearchResultItem({ item, typeItem }) {
    const ctx = useContext(AppContext);

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
        const res = getPropsFromSearchResultItem(item.properties, t);
        const distance = item.locDist;
        const bearing = item.bearing;
        const isUserLocation = item.isUserLocation;
        const icon = item.icon;
        return { ...res, icon, distance, bearing, isUserLocation };
    }

    const id =
        item.properties[CATEGORY_TYPE] === searchTypeMap.POI_TYPE
            ? `se-search-result-${item.properties[CATEGORY_NAME]}`
            : 'se-search-result-item';

    async function clickHandler() {
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
            ctx.setCurrentObjectType(POI_LAYER_ID ? OBJECT_TYPE_POI : OBJECT_SEARCH);
            ctx.setSelectedPoiObj({ ...poi });
            ctx.setSelectedWpt({ poi });
            recentSaver(POI_OBJECTS_KEY, poi);
            ctx.setMoveToMapObj(item);
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

    return (
        <div ref={ref}>
            {!inView ? (
                <Skeleton variant="rectangular" width="100%" height={'var(--menu-item-size)'} />
            ) : (
                <div>
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
                </div>
            )}
        </div>
    );
}
