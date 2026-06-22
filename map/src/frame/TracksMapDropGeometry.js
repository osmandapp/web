import { HEADER_SIZE, MAIN_MENU_MIN_SIZE, MAIN_MENU_OPEN_SIZE } from '../manager/GlobalManager';

export const OVERLAY_MARGIN = 16;

export function getVisibleMapInsets(ctx) {
    const infoBlockWidthPx = Number.parseInt(String(ctx.infoBlockWidth), 10) || 0;
    const bottomPx = ctx.globalGraph?.show ? ctx.globalGraph.size : 0;

    const leftChromePx =
        infoBlockWidthPx > 0
            ? MAIN_MENU_MIN_SIZE + infoBlockWidthPx
            : ctx.openMainMenu
              ? MAIN_MENU_OPEN_SIZE
              : MAIN_MENU_MIN_SIZE;

    return {
        top: HEADER_SIZE + OVERLAY_MARGIN,
        left: leftChromePx + OVERLAY_MARGIN,
        right: OVERLAY_MARGIN,
        bottom: bottomPx + OVERLAY_MARGIN,
    };
}
