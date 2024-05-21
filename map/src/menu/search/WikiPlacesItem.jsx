import { useInView } from 'react-intersection-observer';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { LinearProgress, ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { WIKI_IMAGE_BASE_URL } from '../../manager/SearchManager';
import styles from '../search/search.module.css';
import { addPoiTypeTag, POI_PREFIX } from '../../infoblock/components/wpt/WptTagsProvider';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { cleanHtml } from '../../manager/PoiManager';
import parse from 'html-react-parser';

export default function WikiPlacesItem({ item }) {
    const ctx = useContext(AppContext);

    const { ref, inView } = useInView();
    const anchorEl = useRef(null);
    const [typeIcon, setTypeIcon] = useState(null);
    const [typeEmptyIcon, setTypeEmptyIcon] = useState(null);
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);

    const name = item.properties?.wikiTitle;
    const desc = item.properties?.wikiDesc ? parse(cleanHtml(item.properties?.wikiDesc)) : null;
    const imageTitle = item.properties?.photoTitle;
    const poiType = item.properties?.poitype;
    const poiSubType = item.properties?.poisubtype;

    function handleMouseEnter(item) {
        ctx.setSelectedPoiId({ id: item.properties.id, show: true });
        setIsHovered(true);
    }

    function handleMouseLeave(item) {
        ctx.setSelectedPoiId({ id: item.properties.id, show: false });
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
                size: 45,
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
                                    id={`se-wiki_place-${item.properties?.id}`}
                                    divider
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
                                        {poiType && poiSubType && (
                                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '6px' }}>
                                                {typeIcon && (
                                                    <ListItemIcon className={styles.placeTypesIcon}>
                                                        {typeIcon}
                                                    </ListItemIcon>
                                                )}
                                                <Typography className={styles.placeTypes} noWrap>
                                                    {`${getType(poiSubType)}, ${getType(poiType)}`}
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
                                {ctx.loadingContextItem === item && <LinearProgress />}
                            </div>
                        </>
                    )}
                </div>
            </>
        ),
        [inView, item, anchorEl, typeIcon, typeEmptyIcon, ctx.loadingContextItem, isHovered]
    );
}
