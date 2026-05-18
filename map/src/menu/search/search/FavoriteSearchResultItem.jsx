import { MenuItem, Skeleton } from '@mui/material';
import React, { useContext, useMemo, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import AppContext from '../../../context/AppContext';
import { openFavoriteFromSearch, resolveFavoriteMarkerForSearch } from '../../../manager/FavoritesManager';
import { MENU_INFO_OPEN_SIZE } from '../../../manager/GlobalManager';
import DividerWithMargin from '../../../frame/components/dividers/DividerWithMargin';
import { FavoriteItemContent } from '../../favorite/FavoriteItemContent';
import { useFavoriteItemHover } from '../../../util/hooks/menu/useFavoriteItemHover';
import styles from '../../trackfavmenu.module.css';

export default function FavoriteSearchResultItem({ id, groupId, name, locDist, currentLoc }) {
    const ctx = useContext(AppContext);

    const { ref, inView } = useInView();

    const menuItemRef = useRef(null);

    const resolved = useMemo(() => {
        if (!inView || !groupId) {
            return null;
        }
        return resolveFavoriteMarkerForSearch(ctx, groupId, name);
    }, [inView, ctx.favorites, groupId, name]);

    const marker = resolved ? { ...resolved.marker, locDist } : null;
    const group = resolved?.group;

    const setHover = useFavoriteItemHover(marker, ctx, menuItemRef);

    return useMemo(() => {
        return (
            <>
                <div ref={ref}>
                    {!inView && (
                        <Skeleton
                            variant="rectangular"
                            width={MENU_INFO_OPEN_SIZE + 'px'}
                            height={'var(--menu-item-size)'}
                        />
                    )}
                    {inView && marker && (
                        <MenuItem
                            ref={menuItemRef}
                            id={id}
                            className={styles.item}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            onClick={() => {
                                if (!group || !marker) {
                                    return;
                                }
                                openFavoriteFromSearch(ctx, { group, marker, mapObj: false });
                            }}
                        >
                            <FavoriteItemContent
                                marker={marker}
                                name={name}
                                currentLoc={currentLoc}
                                unitsSettings={ctx.unitsSettings}
                            />
                        </MenuItem>
                    )}
                </div>
                <DividerWithMargin margin={'64px'} />
            </>
        );
    }, [inView, marker, group, name, locDist, currentLoc, id, setHover, ctx.unitsSettings]);
}
