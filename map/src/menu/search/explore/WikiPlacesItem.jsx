import { useInView } from 'react-intersection-observer';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { LinearProgress, ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import { WIKI_IMAGE_BASE_URL } from '../../../manager/SearchManager';
import styles from '../search.module.css';
import { addPoiTypeTag, POI_PREFIX } from '../../../infoblock/components/wpt/WptTagsProvider';
import AppContext from '../../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { cleanHtml } from '../../../manager/PoiManager';
import parse from 'html-react-parser';
import { EXPLORE_LAYER_ID, getImgByProps } from '../../../map/layers/ExploreLayer';

export default function WikiPlacesItem({ item, index, lastIndex }) {
    const ctx = useContext(AppContext);

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
    const poiType = item.properties?.poitype;
    const poiSubType = item.properties?.poisubtype;

    function getWikiPlaceName(props) {
        if (props?.wikiTitle && props?.wikiTitle !== '') {
            return props.wikiTitle;
        }
        const type = getType(props?.poisubtype);
        if (type && type !== 'poi_undefined') {
            return type;
        }
        return props.catTitle ?? '';
    }

    function getCategory(props) {
        try {
            const category = props.categories.replace(/^\[|\]$/g, '').trim();
            return category.length > 0 ? category : 'Other';
        } catch (e) {
            return 'Other';
        }
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
            const tagTypeObj = await addPoiTypeTag({ typeTag: poiType, subtypeTag: poiSubType, ctx, size: 16 });
            setTypeIcon(tagTypeObj?.icon);
            const tagTypeObjEmptyImg = await addPoiTypeTag({
                typeTag: poiType,
                subtypeTag: poiSubType,
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
        ctx.setSearchSettings({ ...ctx.searchSettings, getPoi: item, isDetails: true });
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
                                                    sx={{ pl: typeIcon ? '8px' : '0px' }}
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
                                                src={`${WIKI_IMAGE_BASE_URL}${imageTitle}?width=200`}
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
