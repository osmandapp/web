import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import styles from '../search.module.css';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { formattingPoiType } from '../../../manager/PoiManager';
import AppContext from '../../../context/AppContext';
import { SEARCH_RESULT_TYPE_POI, searchByCategory } from './SearchResults';
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
            type = _.capitalize(t(`amenity_type_${type}`, formattingPoiType(type)));
            if (name === '') {
                name = type;
            }
            icon = item.icon;
        } else {
            name = props['web_name'];
            type = props['web_type'].toLowerCase();
            type = _.capitalize(t(`search_address_${type}`, formattingPoiType(type)));
            icon = item.icon;
        }

        return { name, distance, type, icon };
    }

    return (
        <div ref={ref}>
            {!inView ? (
                <Skeleton variant="rectangular" width="100%" height={'var(--menu-item-size)'} />
            ) : (
                <div>
                    <MenuItem
                        className={styles.searchItem}
                        divider
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
                                <Typography variant="body2" className={styles.placeTypes} noWrap>
                                    {type && `${type}`}
                                    {distance && ' · '}
                                    {distance && `${(distance / 100).toFixed(1)} km`}
                                </Typography>
                            )}
                        </ListItemText>
                        <ListItemIcon className={styles.categoryItemIcon}>{icon}</ListItemIcon>
                    </MenuItem>
                </div>
            )}
        </div>
    );
}
