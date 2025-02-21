import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ListItemIcon, ListItemText, MenuItem, Skeleton } from '@mui/material';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import styles from '../search.module.css';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { formattingPoiType } from '../../../manager/PoiManager';
import AppContext, { OBJECT_SEARCH, OBJECT_TYPE_POI } from '../../../context/AppContext';
import { getObjIdSearch, SEARCH_TYPE_CATEGORY, searchTypeMap } from '../../../map/layers/SearchLayer';
import {
    ADDRESS_1,
    ADDRESS_2,
    CATEGORY_NAME,
    CATEGORY_TYPE,
    MAIN_CATEGORY_KEY_NAME,
    POI_NAME,
    POI_SUBTYPE,
    POI_TYPE,
    SEPARATOR,
} from '../../../infoblock/components/wpt/WptTagsProvider';
import { getPoiParentCategory, parseTagWithLang } from '../../../manager/SearchManager';
import { LatLng } from 'leaflet';
import { POI_LAYER_ID } from '../../../map/layers/PoiLayer';
import DividerWithMargin from '../../components/dividers/DividerWithMargin';

export function getFirstSubstring(inputString) {
    if (inputString?.includes(SEPARATOR)) {
        return inputString.split(SEPARATOR)[0];
    }
    return inputString;
}

export function preparedType(type, t) {
    return _.capitalize(t(`amenity_type_${type}`, formattingPoiType(t(`poi_${type}`))));
}

export function getPropsFromSearchResultItem(props, t) {
    let type, name;
    if (props[CATEGORY_TYPE] === searchTypeMap.POI) {
        name = props[POI_NAME];
        type = props[POI_SUBTYPE] ?? props[POI_TYPE];
        if (name === '') {
            name = preparedType(type, t);
            type = props[POI_TYPE];
        }
        type = preparedType(type, t);
    } else {
        name = props[CATEGORY_NAME];
        if (props[CATEGORY_TYPE] === searchTypeMap.POI_TYPE) {
            type = getPoiParentCategory(props, t);
        } else {
            type = props[CATEGORY_TYPE]?.toLowerCase();
            if (type) {
                type = _.capitalize(t(`search_address_${type}`, formattingPoiType(type)));
            }
        }
    }

    const addressParts = [props[ADDRESS_1], props[ADDRESS_2]].filter(Boolean);
    const info = addressParts.length > 0 ? addressParts.join(', ') : undefined;

    name = getFirstSubstring(name);
    type = getFirstSubstring(type);

    return { name, type, info };
}

export default function SearchResultItem({ item, setSearchValue, typeItem }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();
    const { ref, inView } = useInView();

    const { name, info, distance, type, icon } = parseItem(item);
    const [isHovered, setIsHovered] = useState(false);

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
        ctx.setSelectedPoiId({ id: itemId, show, type: typeItem, obj: item, prev: ctx.selectedPoiId });
    }

    useEffect(() => {
        if (ctx.selectedPoiId?.id === itemId) {
            setIsHovered(true);
        } else {
            setIsHovered(false);
        }
    }, [ctx.selectedPoiId?.id]);

    function parseItem(item) {
        const res = getPropsFromSearchResultItem(item.properties, t);
        const distance = item.locDist;
        const icon = item.icon;
        return { ...res, icon, distance };
    }

    function formatDistance(distance) {
        if (!distance) return '';
        if (distance < 1000) {
            return ` · ${distance.toFixed(0)} ${t('m')}`;
        }
        return ` · ${(distance / 1000).toFixed(1)} ${t('km')}`;
    }

    const id =
        item.properties[CATEGORY_TYPE] === searchTypeMap.POI_TYPE
            ? `se-search-result-${item.properties[CATEGORY_NAME]}`
            : 'se-search-result-item';

    function clickHandler() {
        if (item.geometry.coordinates[0] !== 0 && item.geometry.coordinates[1] !== 0) {
            // click on item
            ctx.setCurrentObjectType(POI_LAYER_ID ? OBJECT_TYPE_POI : OBJECT_SEARCH);
            const poi = {
                options: item.properties,
                latlng: new LatLng(item.geometry.coordinates[1], item.geometry.coordinates[0]),
            };
            ctx.setSelectedWpt({ poi });
            ctx.setZoomToMapObj((prev) => {
                return {
                    ...prev,
                    obj: item,
                };
            });
        } else {
            // click on category
            const category = item.properties['web_keyName'];
            if (category) {
                setSearchValue({
                    query: getFirstSubstring(t(`poi_${category}`)),
                    key: category,
                    type: SEARCH_TYPE_CATEGORY,
                });
            } else {
                // search by brand
                let lang;
                let type = item.properties[MAIN_CATEGORY_KEY_NAME]?.toLowerCase();
                if (type) {
                    const brandRes = parseTagWithLang(type);
                    lang = brandRes.lang;
                }
                setSearchValue({
                    query: item.properties[CATEGORY_NAME],
                    key: item.properties[CATEGORY_NAME],
                    type: SEARCH_TYPE_CATEGORY,
                    lang,
                });
            }
        }
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
                            {info && <MenuItemWithLines className={styles.placeInfo} name={info} maxLines={2} />}
                            {(type || distance) && (
                                <MenuItemWithLines
                                    name={`${type}${formatDistance(distance)}`}
                                    maxLines={4}
                                    className={styles.placeTypes}
                                />
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
