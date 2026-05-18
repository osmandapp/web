import { MenuItem, Skeleton } from '@mui/material';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AppContext, { FAVORITES_URL_PARAM_FOLDER } from '../../context/AppContext';
import { addFavoriteToMap, addShareFavoriteToMap } from '../../manager/FavoritesManager';
import { useSearchParams } from 'react-router-dom';
import ActionsMenu from '../actions/ActionsMenu';
import styles from '../trackfavmenu.module.css';
import FavoriteItemActions from '../actions/FavoriteItemActions';
import { MENU_INFO_OPEN_SIZE } from '../../manager/GlobalManager';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import ThreeDotsButton from '../../frame/components/btns/ThreeDotsButton';
import { SHARE_TYPE } from '../share/shareConstants';
import { useFavoriteItemHover } from '../../util/hooks/menu/useFavoriteItemHover';
import { FavoriteItemContent } from './FavoriteItemContent';

export { CustomIcon, FavInfo } from './FavoriteItemContent';

export default function FavoriteItem({
    marker,
    group,
    currentLoc,
    share = false,
    smartf = null,
    insideVirtualizedList = false,
}) {
    const ctx = useContext(AppContext);
    const [searchParams] = useSearchParams();

    const { ref, inView } = useInView({
        skip: insideVirtualizedList,
        initialInView: true,
    });

    const [openActions, setOpenActions] = useState(false);
    const anchorEl = useRef(null);
    const menuItemRef = useRef(null);

    useEffect(() => {
        if (ctx.openedPopper && ctx.openedPopper !== anchorEl) {
            setOpenActions(false);
        }
    }, [ctx.openedPopper]);

    const setHover = useFavoriteItemHover(marker, ctx, menuItemRef);

    const sharedFile = smartf?.type === SHARE_TYPE;

    return useMemo(() => {
        return (
            <>
                <div ref={ref}>
                    {inView || (
                        <Skeleton
                            variant="rectangular"
                            width={MENU_INFO_OPEN_SIZE + 'px'}
                            height={'var(--menu-item-size)'}
                        />
                    )}
                    {inView && (
                        <MenuItem
                            ref={menuItemRef}
                            className={styles.item}
                            id={'se-fav-item-name-' + marker.name}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => {
                                if (!openActions) {
                                    setHover(false);
                                }
                            }}
                            onClick={() => {
                                if (share) {
                                    addShareFavoriteToMap(marker, ctx);
                                } else {
                                    const openedFolder = searchParams.get(FAVORITES_URL_PARAM_FOLDER) ?? undefined;
                                    addFavoriteToMap({ group, marker, ctx, sharedFile, openedFolder });
                                }
                            }}
                        >
                            <FavoriteItemContent
                                marker={marker}
                                currentLoc={currentLoc}
                                unitsSettings={ctx.unitsSettings}
                            >
                                {!share && !sharedFile && (
                                    <ThreeDotsButton
                                        name={'action_menu_group'}
                                        tip={'shared_string_menu'}
                                        id={`se-actions-${marker.name}`}
                                        setOpenActions={setOpenActions}
                                        anchorEl={anchorEl}
                                    />
                                )}
                            </FavoriteItemContent>
                        </MenuItem>
                    )}
                    <DividerWithMargin margin={'64px'} />
                    {inView && (
                        <ActionsMenu
                            open={openActions}
                            setOpen={setOpenActions}
                            anchorEl={anchorEl}
                            favItems={true}
                            actions={
                                <FavoriteItemActions marker={marker} group={group} setOpenActions={setOpenActions} />
                            }
                        />
                    )}
                </div>
            </>
        );
    }, [inView, marker, openActions, ctx.openedPopper]);
}
