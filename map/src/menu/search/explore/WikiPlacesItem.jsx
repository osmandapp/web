import { useInView } from 'react-intersection-observer';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { LinearProgress, ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import { getPhotoUrl } from './PhotoGallery';
import styles from '../search.module.css';
import {
    addPoiTypeTag,
    ICON_KEY_NAME,
    POI_PREFIX,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
} from '../../../infoblock/components/wpt/WptTagsProvider';
import AppContext from '../../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { cleanHtml, getIconNameForPoiType, navigateToPoi } from '../../../manager/PoiManager';
import parse from 'html-react-parser';
import { EXPLORE_LAYER_ID, getImgByProps } from '../../../map/layers/ExploreLayer';
import { useNavigate } from 'react-router-dom';

export function getCategory(props) {
    const category = props.categories?.replace(/^\[|\]$/g, '').trim();
    return category?.length ? category : 'Other';
}

export default function WikiPlacesItem({ item, index, lastIndex }) {
    const ctx = useContext(AppContext);

    const navigate = useNavigate();

    const { ref, inView } = useInView();
    const anchorEl = useRef(null);
    const [typeIcon, setTypeIcon] = useState(null);
    const [typeEmptyIcon, setTypeEmptyIcon] = useState(null);
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);

    const name = getWikiPlaceName(item.properties);
    const desc = item.properties?.wikiDesc ? parse(cleanHtml(item.properties?.wikiDesc)) : null;
    const imageTitle = getImgByProps(item.properties);
    const type = getCategory(item.properties);

    function getWikiPlaceName(props) {
        if (props?.wikiTitle && props?.wikiTitle !== '') {
            return props.wikiTitle;
        }
        const type = getType(props?.poisubtype);
        if (type && type !== 'poi_undefined') {
            return type;
        }
        return props?.catTitle ?? '';
    }

    function handleMouseEnter(item) {
        ctx.setSelectedPoiId({ id: item.properties.id, show: true, type: EXPLORE_LAYER_ID });
        setIsHovered(true);
    }

    function handleMouseLeave(item) {
        ctx.setSelectedPoiId({ id: item.properties.id, show: false, type: EXPLORE_LAYER_ID });
        setIsHovered(false);
    }

    useEffect(() => {
        async function fetchData() {
            const icon = getIconNameForPoiType({
                iconKeyName: item.properties[ICON_KEY_NAME],
                typeOsmTag: item.properties[TYPE_OSM_TAG],
                typeOsmValue: item.properties[TYPE_OSM_VALUE],
            });
            const tagTypeObj = await addPoiTypeTag({
                key: item.properties[TYPE_OSM_TAG],
                value: item.properties[TYPE_OSM_VALUE],
                icon,
                ctx,
                size: 16,
            });
            setTypeIcon(tagTypeObj?.icon);
            const tagTypeObjEmptyImg = await addPoiTypeTag({
                key: item.properties[TYPE_OSM_TAG],
                value: item.properties[TYPE_OSM_VALUE],
                icon,
                ctx,
                color: '#c0c0c0',
            });
            setTypeEmptyIcon(tagTypeObjEmptyImg?.icon);
        }

        fetchData().then();
    }, [item]);

    async function openInfo(item) {
        ctx.setLoadingContextMenu(true);
        ctx.setLoadingContextItem(item);
        ctx.setSearchSettings({ ...ctx.searchSettings, getPoi: item });
    }

    function getType(type) {
        return t(`${POI_PREFIX}${type}`);
    }

    useEffect(() => {
        if (ctx.selectedPoiId?.id === item.properties.id) {
            setIsHovered(true);
        } else {
            setIsHovered(false);
        }
    }, [ctx.selectedPoiId?.id]);

    return useMemo(
        () => (
            <>
                <div ref={ref}>
                    {!inView ? (
                        <Skeleton variant="rectangular" width="100%" height={'var(--menu-item-size)'} />
                    ) : (
                        <>
                            <div>
                                <MenuItem
                                    id={`se-wiki-place-${item.properties?.osmid}`}
                                    divider={index !== lastIndex}
                                    className={`${styles.placeItem} ${isHovered ? styles.hoverItem : ''}`}
                                    onClick={() => openInfo(item)}
                                    onMouseEnter={() => handleMouseEnter(item)}
                                    onMouseLeave={() => handleMouseLeave(item)}
                                >
                                    <ListItemText>
                                        <MenuItemWithLines className={styles.titleText} name={name} maxLines={2} />
                                        {desc && (
                                            <MenuItemWithLines className={styles.placeDesc} name={desc} maxLines={2} />
                                        )}
                                        {type && (
                                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '6px' }}>
                                                {typeIcon && (
                                                    <ListItemIcon className={styles.placeTypesIcon}>
                                                        {typeIcon}
                                                    </ListItemIcon>
                                                )}
                                                <Typography
                                                    className={styles.explorePlaceTypes}
                                                    sx={{ pl: typeIcon ? '5px' : '0px', mb: '3px' }}
                                                    noWrap
                                                >
                                                    {type}
                                                </Typography>
                                            </div>
                                        )}
                                    </ListItemText>
                                    {imageTitle && imageTitle !== '' ? (
                                        <ListItemIcon>
                                            <img
                                                src={getPhotoUrl({ photoTitle: imageTitle, size: 160 })}
                                                alt={name}
                                                style={{ width: '66px', height: '66px', objectFit: 'cover' }}
                                            />
                                        </ListItemIcon>
                                    ) : (
                                        <div className={styles.emptyImg}>
                                            {typeEmptyIcon && (
                                                <ListItemIcon className={styles.placeTypesEmptyIcon}>
                                                    {typeEmptyIcon}
                                                </ListItemIcon>
                                            )}
                                        </div>
                                    )}
                                </MenuItem>
                                {ctx.loadingContextItem === item && <LinearProgress id={'se-wiki-place-progress'} />}
                            </div>
                        </>
                    )}
                </div>
            </>
        ),
        [inView, item, anchorEl, typeIcon, typeEmptyIcon, ctx.loadingContextItem, isHovered]
    );
}
