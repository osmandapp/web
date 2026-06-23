import { useCallback, useContext, useMemo } from 'react';
import AppContext from '../../context/AppContext';
import LoginContext from '../../context/LoginContext';
import { hasFiles } from '../../frame/TracksFileDragController';

export function useGpxFileDragZone(hoverFolder) {
    const ctx = useContext(AppContext);
    const guard = useGpxFileDragGuard();

    const setFolderTarget = useCallback(
        (e) => {
            if (hoverFolder === null || hoverFolder === undefined) {
                return;
            }
            if (!guard(e)) {
                return;
            }
            ctx.setGpxFileDrag((prev) => {
                if (prev.active && prev.hoverFolder === hoverFolder && !prev.overMap) {
                    return prev;
                }

                return { active: true, hoverFolder, overMap: false };
            });
        },
        [ctx, guard, hoverFolder]
    );

    return useMemo(
        () => ({
            onDragEnter: setFolderTarget,
            onDragOver: setFolderTarget,
        }),
        [setFolderTarget]
    );
}

export function useGpxFileDragMapZone() {
    const ctx = useContext(AppContext);
    const guard = useGpxFileDragGuard();

    const setMapTarget = useCallback(
        (e) => {
            if (!guard(e)) {
                return;
            }
            ctx.setGpxFileDrag((prev) => {
                if (prev.active && prev.hoverFolder === null && prev.overMap) {
                    return prev;
                }

                return { active: true, hoverFolder: null, overMap: true };
            });
        },
        [ctx, guard]
    );

    return useMemo(
        () => ({
            onDragEnter: setMapTarget,
            onDragOver: setMapTarget,
        }),
        [setMapTarget]
    );
}

export function useGpxFileDragClearZone() {
    const ctx = useContext(AppContext);
    const guard = useGpxFileDragGuard();

    const clearTarget = useCallback(
        (e) => {
            if (!guard(e)) {
                return;
            }
            ctx.setGpxFileDrag((prev) => {
                if (prev.active && prev.hoverFolder === null && !prev.overMap) {
                    return prev;
                }

                return { active: true, hoverFolder: null, overMap: false };
            });
        },
        [ctx, guard]
    );

    return useMemo(
        () => ({
            onDragEnter: clearTarget,
            onDragOver: clearTarget,
        }),
        [clearTarget]
    );
}

function useGpxFileDragGuard() {
    const ltx = useContext(LoginContext);

    return useCallback(
        (e) => {
            if (!hasFiles(e) || !ltx.isProAccount()) {
                return false;
            }
            e.preventDefault();
            e.stopPropagation();
            if (e.type === 'dragover') {
                e.dataTransfer.dropEffect = 'copy';
            }

            return true;
        },
        [ltx]
    );
}
