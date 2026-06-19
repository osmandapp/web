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

export function getMenuDropOverlayTop(container) {
    const minTop = getMenuDropOverlayMinTop(container);

    const folders = container.querySelectorAll('[id^="se-menu-cloud-"]');
    if (folders.length > 0) {
        const lastFolderBottom = folders[folders.length - 1].getBoundingClientRect().bottom;

        return Math.max(lastFolderBottom, minTop);
    }

    const appBar = container.querySelector('.MuiAppBar-root');
    if (appBar) {
        return Math.max(appBar.getBoundingClientRect().bottom, minTop);
    }

    const listAnchors = container.querySelectorAll('#se-visible-tracks-menu, [id^="se-shared-folder-"]');
    if (listAnchors.length > 0) {
        let bottom = 0;
        listAnchors.forEach((el) => {
            bottom = Math.max(bottom, el.getBoundingClientRect().bottom);
        });

        return Math.max(bottom, minTop);
    }

    return minTop;
}

function getMenuDropOverlayMinTop(container) {
    const containerTop = container.getBoundingClientRect().top;
    let minTop = Math.max(containerTop, getScrollContainerTop(container));

    const headerBottom = getPanelHeaderBottom(container);
    if (headerBottom != null) {
        minTop = Math.max(minTop, headerBottom);
    }

    return minTop;
}

function getScrollContainerTop(container) {
    let el = container;
    while (el) {
        const { overflowY } = globalThis.getComputedStyle(el);
        if (overflowY === 'auto' || overflowY === 'scroll') {
            return el.getBoundingClientRect().top;
        }
        el = el.parentElement;
    }

    return container.getBoundingClientRect().top;
}

function getPanelHeaderBottom(container) {
    const panel = container.closest('#se-tracks-folder') || container.closest('#se-track-menu')?.parentElement;
    const appBar = panel?.querySelector('.MuiAppBar-root');

    return appBar?.getBoundingClientRect().bottom ?? null;
}

export function getMenuDropOverlayRect(container, ctx) {
    if (!container) {
        return null;
    }

    const containerRect = container.getBoundingClientRect();
    const bottomPx = (ctx.globalGraph?.show ? ctx.globalGraph.size : 0) + OVERLAY_MARGIN;
    const topPx = getMenuDropOverlayTop(container) + OVERLAY_MARGIN;

    if (topPx >= window.innerHeight - bottomPx) {
        return null;
    }

    return {
        top: topPx,
        left: containerRect.left + OVERLAY_MARGIN,
        right: window.innerWidth - containerRect.right + OVERLAY_MARGIN,
        bottom: bottomPx,
    };
}
