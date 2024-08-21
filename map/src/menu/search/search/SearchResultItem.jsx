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

export function getPropsFromSearchResultItem(props, t) {
    let type, name;
    if (props['web_type'] === SEARCH_RESULT_TYPE_POI) {
        name = props['web_poi_name'];
        type = props['web_poi_subType'] ?? props['web_poi_type'];
        type = _.capitalize(t(`amenity_type_${type}`, formattingPoiType(t(`poi_${type}`))));
        if (name === '') {
            name = type;
        }
    } else {
        name = props['web_name'];
        if (props['web_type'] === SEARCH_RESULT_TYPE_POI_CATEGORY) {
            type = props['web_categoryKeyName']?.toLowerCase();
            if (type) {
                type = _.capitalize(formattingPoiType(t(`poi_${type}`)));
            }
        } else {
            type = props['web_type']?.toLowerCase();
            if (type) {
                type = _.capitalize(t(`search_address_${type}`, formattingPoiType(type)));
            }
        }
    }

    name = getFirstSubstring(name);
    type = getFirstSubstring(type);

    function getFirstSubstring(inputString) {
        if (inputString?.includes(';')) {
            return inputString.split(';')[0];
        }
        return inputString;
    }

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
        ctx.setSelectedPoiId({ id: itemId, show: true, type: typeItem });
        setIsHovered(true);
    }

    function handleMouseLeave() {
        ctx.setSelectedPoiId({ id: itemId, show: false, type: typeItem });
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

    return (
        <div ref={ref}>
            {!inView ? (
                <Skeleton variant="rectangular" width="100%" height={'var(--menu-item-size)'} />
            ) : (
                <div>
                    <MenuItem
                        id={id}
                        onMouseEnter={() => handleMouseEnter()}
                        onMouseLeave={() => handleMouseLeave()}
                        className={`${styles.searchItem} ${isHovered ? styles.searchHoverItem : ''}`}
                        onClick={() => {
                            if (item.locDist) {
                                ctx.setZoomToMapObj(item);
                            } else {
                                const category = item.properties['web_keyName'];
                                setSearchValue({
                                    query: t(`poi_${category}`),
                                    type: SEARCH_TYPE_CATEGORY,
                                });
                            }
                        }}
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
