import { useCallback, useContext, useMemo } from 'react';
import AppContext from '../../context/AppContext';
import LoginContext from '../../context/LoginContext';
import { GPX_FILE_DRAG_IDLE, hasFiles } from '../../frame/TracksFileDragController';
import { IMPORT_FOLDER_NAME } from '../../manager/track/TracksManager';
import useCloudGpxImport from './useCloudGpxImport';

export function useGpxFileDragZone(hoverFolder) {
    return useGpxFileDragStateHandler(hoverFolder, false, hoverFolder == null);
}

export function useGpxFileDragMapZone() {
    return useGpxFileDragStateHandler(null, true);
}

export function useGpxFileDragClearZone() {
    return useGpxFileDragStateHandler(null, false);
}

export function useGpxFileDragRootZone() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const guard = useGpxFileDragGuard();

    const onDragEnter = useCallback(
        (e) => {
            if (!guard(e)) {
                return;
            }
            ctx.setGpxFileDrag((prev) => (prev.active ? prev : { ...GPX_FILE_DRAG_IDLE, active: true }));
        },
        [ctx, guard]
    );

    const onDragLeave = useCallback(
        (e) => {
            if (!hasFiles(e) || !ltx.isProAccount()) {
                return;
            }
            if (!e.currentTarget.contains(e.relatedTarget)) {
                ctx.setGpxFileDrag(GPX_FILE_DRAG_IDLE);
            }
        },
        [ctx, ltx]
    );

    const onDrop = useCallback(
        (e) => {
            if (!guard(e)) {
                return;
            }
            ctx.setGpxFileDrag(GPX_FILE_DRAG_IDLE);
        },
        [ctx, guard]
    );

    return useMemo(
        () => ({
            onDragEnter,
            onDragOver: onDragEnter,
            onDragLeave,
            onDrop,
        }),
        [onDragEnter, onDragLeave, onDrop]
    );
}

function useGpxFileDragStateHandler(hoverFolder, overMap, disabled = false) {
    const ctx = useContext(AppContext);
    const { importGpxFiles } = useCloudGpxImport();
    const guard = useGpxFileDragGuard();

    const onDragEnter = useCallback(
        (e) => {
            if (disabled || !guard(e)) {
                return;
            }
            ctx.setGpxFileDrag((prev) => {
                if (prev.active && prev.hoverFolder === hoverFolder && prev.overMap === overMap) {
                    return prev;
                }

                return { active: true, hoverFolder, overMap };
            });
        },
        [ctx, guard, hoverFolder, overMap, disabled]
    );

    const onDrop = useCallback(
        (e) => {
            if (disabled || !guard(e)) {
                return;
            }
            const files = Array.from(e.dataTransfer?.files || []);
            if (hoverFolder !== null) {
                importGpxFiles(files, hoverFolder);
            } else if (overMap) {
                importGpxFiles(files, IMPORT_FOLDER_NAME);
            }
            ctx.setGpxFileDrag(GPX_FILE_DRAG_IDLE);
        },
        [ctx, guard, importGpxFiles, hoverFolder, overMap, disabled]
    );

    return useMemo(
        () => ({
            onDragEnter,
            onDragOver: onDragEnter,
            onDrop,
        }),
        [onDragEnter, onDrop]
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
