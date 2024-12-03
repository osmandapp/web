import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Divider, ListItemIcon, ListItemText, MenuItem, Skeleton } from '@mui/material';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import styles from '../search.module.css';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { formattingPoiType } from '../../../manager/PoiManager';
import AppContext from '../../../context/AppContext';
import { SEARCH_RESULT_TYPE_POI, SEARCH_RESULT_TYPE_POI_CATEGORY } from './SearchResults';
import { getObjIdSearch, SEARCH_TYPE_CATEGORY } from '../../../map/layers/SearchLayer';
import {
    CATEGORY_NAME,
    CATEGORY_TYPE,
    POI_NAME,
    POI_SUBTYPE,
    POI_TYPE,
    SEPARATOR,
} from '../../../infoblock/components/wpt/WptTagsProvider';
import { getPoiParentCategory } from '../../../manager/SearchManager';
import { LatLng } from 'leaflet';

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
    if (props[CATEGORY_TYPE] === SEARCH_RESULT_TYPE_POI) {
        name = props[POI_NAME];
        type = props[POI_SUBTYPE] ?? props[POI_TYPE];
        if (name === '') {
            name = preparedType(type, t);
            type = props[POI_TYPE];
        }
        type = preparedType(type, t);
    } else {
        name = props[CATEGORY_NAME];
        if (props[CATEGORY_TYPE] === SEARCH_RESULT_TYPE_POI_CATEGORY) {
            type = getPoiParentCategory(props, t);
        } else {
            type = props[CATEGORY_TYPE]?.toLowerCase();
            if (type) {
                type = _.capitalize(t(`search_address_${type}`, formattingPoiType(type)));
            }
        }
    }

    name = getFirstSubstring(name);
    type = getFirstSubstring(type);

    return { name, type };
}

export default function SearchResultItem({ item, setSearchValue, typeItem }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();
    const { ref, inView } = useInView();

    const { name, distance, type, icon } = parseItem(item);
    const [isHovered, setIsHovered] = useState(false);

    const itemId = getObjIdSearch(item);

    function handleMouseEnter() {
        if (itemId !== null) {
            ctx.setSelectedPoiId({ id: itemId, show: true, type: typeItem });
        }
        setIsHovered(true);
    }

    function handleMouseLeave() {
        if (itemId !== null) {
            ctx.setSelectedPoiId({ id: itemId, show: false, type: typeItem });
        }
        setIsHovered(false);
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
        item.properties['web_type'] === SEARCH_RESULT_TYPE_POI_CATEGORY
            ? `se-search-result-${item.properties['web_name']}`
            : 'se-search-result-item';

    function clickHandler() {
        if (item.locDist) {
            // click on item
            ctx.setZoomToMapObj(item);
            const poi = {
                options: item.properties,
                latlng: new LatLng(item.geometry.coordinates[1], item.geometry.coordinates[0]),
            };
            ctx.setSelectedWpt({ poi });
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
                setSearchValue({
                    query: item.properties['web_name'],
                    key: item.properties['web_name'],
                    type: SEARCH_TYPE_CATEGORY,
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
                    <Divider className={styles.divider} />
                </div>
            )}
        </div>
    );
}
