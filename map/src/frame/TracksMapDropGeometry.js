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

export function isPointInVisibleMap(ctx, clientX, clientY) {
    const insets = getVisibleMapInsets(ctx);
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
        clientX >= insets.left &&
        clientX <= width - insets.right &&
        clientY >= insets.top &&
        clientY <= height - insets.bottom
    );
}

export function getMenuDropContainers() {
    return [
        document.getElementById('se-tracks-folder'),
        document.getElementById('se-track-menu'),
    ].filter((el) => el?.hasAttribute('data-cloud-track-folder'));
}

export function getMenuOverlayContainer(hoverFolder) {
    if (hoverFolder === null) {
        return null;
    }

    const openFolder = document.getElementById('se-tracks-folder');
    if (openFolder?.hasAttribute('data-cloud-track-folder')) {
        const openFolderPath = openFolder.getAttribute('data-cloud-track-folder') ?? '';
        if (hoverFolder === openFolderPath) {
            return openFolder;
        }
    }

    if (hoverFolder === '') {
        return document.getElementById('se-track-menu');
    }

    return null;
}

export function getMenuDropOverlayTop(container) {
    const folders = container.querySelectorAll('[id^="se-menu-cloud-"]');
    if (folders.length > 0) {
        return folders[folders.length - 1].getBoundingClientRect().bottom;
    }

    const appBar = container.querySelector('.MuiAppBar-root');
    if (appBar) {
        return appBar.getBoundingClientRect().bottom;
    }

    const listAnchors = container.querySelectorAll('#se-visible-tracks-menu, [id^="se-shared-folder-"]');
    if (listAnchors.length > 0) {
        let bottom = 0;
        listAnchors.forEach((el) => {
            bottom = Math.max(bottom, el.getBoundingClientRect().bottom);
        });
        return bottom;
    }

    return container.getBoundingClientRect().top;
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

function isPointInOverlayRect(clientX, clientY, rect) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
        clientX >= rect.left &&
        clientX <= width - rect.right &&
        clientY >= rect.top &&
        clientY <= height - rect.bottom
    );
}

function getMenuDropFolderAtPoint(clientX, clientY, ctx) {
    for (const container of getMenuDropContainers()) {
        const rect = getMenuDropOverlayRect(container, ctx);
        if (rect && isPointInOverlayRect(clientX, clientY, rect)) {
            return container.getAttribute('data-cloud-track-folder') ?? '';
        }
    }

    return null;
}

function getCloudTrackFolderFromElement(el) {
    if (!el) {
        return null;
    }
    const folderEl = el.closest('[data-cloud-track-folder]');
    if (!folderEl) {
        return null;
    }

    return folderEl.getAttribute('data-cloud-track-folder') ?? '';
}

export function resolveGpxDropTarget(clientX, clientY, ctx) {
    const folderFromDom = getCloudTrackFolderFromElement(document.elementFromPoint(clientX, clientY));
    if (folderFromDom !== null) {
        return { hoverFolder: folderFromDom, overMap: false };
    }

    const folderFromRect = getMenuDropFolderAtPoint(clientX, clientY, ctx);
    if (folderFromRect !== null) {
        return { hoverFolder: folderFromRect, overMap: false };
    }

    if (isPointInVisibleMap(ctx, clientX, clientY)) {
        return { hoverFolder: null, overMap: true };
    }

    return { hoverFolder: null, overMap: false };
}
