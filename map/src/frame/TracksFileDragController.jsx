import { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import AppContext from '../context/AppContext';
import LoginContext from '../context/LoginContext';
import { IMPORT_FOLDER_NAME } from '../manager/track/TracksManager';
import useCloudGpxImport from '../util/hooks/useCloudGpxImport';
import TracksMapDropOverlay from './TracksMapDropOverlay';
import TracksMenuDropOverlay from './TracksMenuDropOverlay';
import { resolveGpxDropTarget } from './TracksMapDropGeometry';

const GPX_FILE_DRAG_IDLE = { active: false, hoverFolder: null, overMap: false };

function hasFiles(e) {
    return e.dataTransfer?.types?.includes('Files');
}

export default function TracksFileDragController() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const { importGpxFiles } = useCloudGpxImport();
    const dragCounterRef = useRef(0);
    // Refs let the stable (deps:[]) listeners always read the latest values
    // without re-subscribing on every render.
    const ctxRef = useRef(ctx);
    const ltxRef = useRef(ltx);
    const importGpxFilesRef = useRef(importGpxFiles);
    ctxRef.current = ctx;
    ltxRef.current = ltx;
    importGpxFilesRef.current = importGpxFiles;

    useEffect(() => {
        const resetDrag = () => {
            dragCounterRef.current = 0;
            ctxRef.current.setGpxFileDrag(GPX_FILE_DRAG_IDLE);
        };

        const onDragEnter = (e) => {
            if (!hasFiles(e) || !ltxRef.current.isProAccount()) {
                return;
            }
            e.preventDefault();
            dragCounterRef.current += 1;
        };

        const onDragOver = (e) => {
            if (!hasFiles(e) || !ltxRef.current.isProAccount()) {
                return;
            }
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';

            const { hoverFolder, overMap } = resolveGpxDropTarget(e.clientX, e.clientY, ctxRef.current);
            ctxRef.current.setGpxFileDrag((prev) => {
                if (prev.active && prev.hoverFolder === hoverFolder && prev.overMap === overMap) {
                    return prev;
                }
                return { active: true, hoverFolder, overMap };
            });
        };

        const onDragLeave = (e) => {
            if (!hasFiles(e) || !ltxRef.current.isProAccount()) {
                return;
            }
            dragCounterRef.current = Math.max(0, dragCounterRef.current - 1);
            if (dragCounterRef.current === 0) {
                resetDrag();
            }
        };

        const onDrop = (e) => {
            if (!hasFiles(e) || !ltxRef.current.isProAccount()) {
                return;
            }
            e.preventDefault();

            const files = Array.from(e.dataTransfer?.files || []);
            const { hoverFolder, overMap } = resolveGpxDropTarget(e.clientX, e.clientY, ctxRef.current);
            if (hoverFolder !== null) {
                importGpxFilesRef.current(files, hoverFolder);
            } else if (overMap) {
                importGpxFilesRef.current(files, IMPORT_FOLDER_NAME);
            }
            resetDrag();
        };

        const onDragEnd = () => {
            resetDrag();
        };

        window.addEventListener('dragenter', onDragEnter);
        window.addEventListener('dragover', onDragOver);
        window.addEventListener('dragleave', onDragLeave);
        window.addEventListener('drop', onDrop);
        window.addEventListener('dragend', onDragEnd);
        return () => {
            window.removeEventListener('dragenter', onDragEnter);
            window.removeEventListener('dragover', onDragOver);
            window.removeEventListener('dragleave', onDragLeave);
            window.removeEventListener('drop', onDrop);
            window.removeEventListener('dragend', onDragEnd);
        };
    }, []);

    return createPortal(
        <>
            <TracksMapDropOverlay />
            <TracksMenuDropOverlay />
        </>,
        document.body
    );
}
