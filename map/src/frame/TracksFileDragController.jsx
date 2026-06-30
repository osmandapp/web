import { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import AppContext from '../context/AppContext';
import LoginContext from '../context/LoginContext';
import { IMPORT_FOLDER_NAME } from '../manager/track/TracksManager';
import useCloudGpxImport from '../util/hooks/useCloudGpxImport';
import TracksDropOverlay from './TracksDropOverlay';

export const GPX_FILE_DRAG_IDLE = { active: false, hoverFolder: null, overMap: false };

export function hasFiles(e) {
    return e.dataTransfer?.types?.includes('Files');
}

export default function TracksFileDragController() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const { importGpxFiles } = useCloudGpxImport();

    useEffect(() => {
        const container = document.getElementById('root');
        if (!container) {
            return;
        }

        const resetDrag = () => {
            ctx.setGpxFileDrag(GPX_FILE_DRAG_IDLE);
        };

        const onDragEnter = (e) => {
            if (!hasFiles(e) || !ltx.isProAccount()) {
                return;
            }
            e.preventDefault();
            ctx.setGpxFileDrag((prev) => (prev.active ? prev : { ...GPX_FILE_DRAG_IDLE, active: true }));
        };

        const onDragOver = (e) => {
            if (!hasFiles(e) || !ltx.isProAccount()) {
                return;
            }
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        };

        const onDragLeave = (e) => {
            if (!hasFiles(e) || !ltx.isProAccount()) {
                return;
            }
            // relatedTarget is the element the cursor is entering.
            // null or outside #root means the cursor truly left the app.
            if (!container.contains(e.relatedTarget)) {
                resetDrag();
            }
        };

        const onDrop = (e) => {
            if (!hasFiles(e) || !ltx.isProAccount()) {
                return;
            }
            e.preventDefault();

            const files = Array.from(e.dataTransfer?.files || []);
            const { hoverFolder, overMap } = ctx.gpxFileDrag ?? GPX_FILE_DRAG_IDLE;
            if (hoverFolder !== null) {
                importGpxFiles(files, hoverFolder);
            } else if (overMap) {
                importGpxFiles(files, IMPORT_FOLDER_NAME);
            }
            resetDrag();
        };

        const onDragEnd = () => {
            resetDrag();
        };

        container.addEventListener('dragenter', onDragEnter);
        container.addEventListener('dragover', onDragOver);
        container.addEventListener('dragleave', onDragLeave);
        container.addEventListener('drop', onDrop);
        // dragend has no preventDefault; keep on window so external file drags still reset state.
        window.addEventListener('dragend', onDragEnd);
        return () => {
            container.removeEventListener('dragenter', onDragEnter);
            container.removeEventListener('dragover', onDragOver);
            container.removeEventListener('dragleave', onDragLeave);
            container.removeEventListener('drop', onDrop);
            window.removeEventListener('dragend', onDragEnd);
        };
    }, [ctx.gpxFileDrag, ctx.setGpxFileDrag, importGpxFiles, ltx]);

    return createPortal(<TracksDropOverlay />, document.body);
}
