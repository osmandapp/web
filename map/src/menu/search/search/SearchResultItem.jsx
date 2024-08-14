import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { Divider, ListItemIcon, ListItemText, MenuItem, Skeleton } from '@mui/material';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import styles from '../search.module.css';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { formattingPoiType } from '../../../manager/PoiManager';
import AppContext from '../../../context/AppContext';
import { SEARCH_RESULT_TYPE_POI, SEARCH_RESULT_TYPE_POI_CATEGORY, searchByCategory } from './SearchResults';
import { SEARCH_TYPE_CATEGORY } from '../../../map/layers/SearchLayer';

export default function SearchResultItem({ item, setProcessingSearch }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();
    const { ref, inView } = useInView();

    const { name, distance, type, icon } = parseItem(item);

    function parseItem(item) {
        const props = item.properties;
        let name, distance, type, icon;
        distance = item.locDist;
        if (props['web_type'] === SEARCH_RESULT_TYPE_POI) {
            name = props['web_poi_name'];
            type = props['web_poi_subType'] ?? props['web_poi_type'];
            type = _.capitalize(t(`amenity_type_${type}`, formattingPoiType(t(`poi_${type}`))));
            if (name === '') {
                name = type;
            }
            icon = item.icon;
        } else {
            name = props['web_name'];
            icon = item.icon;
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

        return { name, distance, type, icon };
    }

    function getFirstSubstring(inputString) {
        if (inputString.includes(';')) {
            return inputString.split(';')[0];
        }
        return inputString;
    }

    return (
        <div ref={ref}>
            {!inView ? (
                <Skeleton variant="rectangular" width="100%" height={'var(--menu-item-size)'} />
            ) : (
                <div>
                    <MenuItem
                        className={styles.searchItem}
                        onClick={() => {
                            if (item.locDist) {
                                ctx.setZoomToMapObj(item);
                            } else {
                                const category = item.properties['web_keyName'];
                                setProcessingSearch(true);
                                searchByCategory(
                                    {
                                        query: formattingPoiType(category),
                                        type: SEARCH_TYPE_CATEGORY,
                                    },
                                    ctx
                                );
                            }
                        }}
                    >
                        <ListItemText>
                            <MenuItemWithLines className={styles.titleText} name={name} maxLines={2} />
                            {(type || distance) && (
                                <MenuItemWithLines
                                    name={`${type}${distance ? ` · ${(distance / 1000).toFixed(1)} km` : ''}`}
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
