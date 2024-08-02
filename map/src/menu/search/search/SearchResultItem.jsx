import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import styles from '../search.module.css';

export default function SearchResultItem({ item }) {
    const { ref, inView } = useInView();

    const name = item.properties?.web_poi_name;
    const type = item.properties?.web_poi_type;
    const subType = item.properties?.web_poi_subType;
    const icon = item.icon;

    return (
        <div ref={ref}>
            {!inView ? (
                <Skeleton variant="rectangular" width="100%" height={'var(--menu-item-size)'} />
            ) : (
                <div>
                    <MenuItem divider>
                        <ListItemText>
                            <MenuItemWithLines className={styles.titleText} name={name} maxLines={2} />
                            {type && subType && (
                                <Typography className={styles.placeTypes} noWrap>
                                    {`${subType}, ${type}`}
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
