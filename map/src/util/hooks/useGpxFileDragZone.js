import { useCallback, useContext, useMemo } from 'react';
import AppContext from '../../context/AppContext';
import LoginContext from '../../context/LoginContext';
import { hasFiles } from '../../frame/TracksFileDragController';

export function useGpxFileDragZone(hoverFolder) {
    return useGpxFileDragStateHandler(hoverFolder, false, hoverFolder == null);
}

export function useGpxFileDragMapZone() {
    return useGpxFileDragStateHandler(null, true);
}

export function useGpxFileDragClearZone() {
    return useGpxFileDragStateHandler(null, false);
}

function useGpxFileDragStateHandler(hoverFolder, overMap, disabled = false) {
    const ctx = useContext(AppContext);
    const guard = useGpxFileDragGuard();

    const handler = useCallback(
        (e) => {
            if (disabled) {
                return;
            }
            if (!guard(e)) {
                return;
            }
            ctx.gpxFileDragRef.current = { active: true, hoverFolder, overMap };
            ctx.setGpxFileDrag((prev) => {
                if (prev.active && prev.hoverFolder === hoverFolder && prev.overMap === overMap) {
                    return prev;
                }

                return { active: true, hoverFolder, overMap };
            });
        },
        [ctx, guard, hoverFolder, overMap, disabled]
    );

    return useMemo(
        () => ({
            onDragEnter: handler,
            onDragOver: handler,
        }),
        [handler]
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
