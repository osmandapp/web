import { useCallback, useEffect } from 'react';
import { FAVORITE_FILE_TYPE, getFavoriteId } from '../../../manager/FavoritesManager';
import styles from '../../../menu/trackfavmenu.module.css';

/**
 * Custom hook to manage hover state for favorite items
 * @param {object} marker - The favorite marker object
 * @param {object} ctx - App context
 * @param {object} menuItemRef - Ref to the menu item element
 * @returns {function} setHover - Function to set hover state
 */
export function useFavoriteItemHover(marker, ctx, menuItemRef) {
    const favId = marker?.layer ? getFavoriteId(marker.layer) : null;

    const setHover = useCallback(
        (show) => {
            if (!favId || !marker?.layer) {
                return;
            }
            if (show) {
                if (ctx.openedPopper) {
                    return;
                }
                ctx.setSelectedWptId({
                    id: favId,
                    show: true,
                    type: FAVORITE_FILE_TYPE,
                    obj: marker.layer,
                    markerOptions: {
                        color: marker.layer.options?.color,
                        background: marker.layer.options?.background,
                        iconHtml: marker.layer.options?.icon?.options?.html,
                    },
                });
            } else {
                ctx.setSelectedWptId((prev) =>
                    prev?.id === favId && prev?.type === FAVORITE_FILE_TYPE ? { ...prev, show: false } : prev
                );
            }
            if (menuItemRef.current) {
                menuItemRef.current.classList.toggle(styles.itemHovered, show);
            }
        },
        [favId, marker?.layer, ctx.openedPopper]
    );

    useEffect(() => {
        const hovered =
            ctx.selectedWptId?.id === favId &&
            ctx.selectedWptId?.type === FAVORITE_FILE_TYPE &&
            ctx.selectedWptId?.show !== false;
        if (menuItemRef.current) {
            menuItemRef.current.classList.toggle(styles.itemHovered, hovered);
        }
    }, [ctx.selectedWptId?.id, ctx.selectedWptId?.show, ctx.selectedWptId?.type, favId]);

    return setHover;
}
