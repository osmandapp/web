import { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import AppContext from '../context/AppContext';
import TracksDropOverlay from './TracksDropOverlay';

export const GPX_FILE_DRAG_IDLE = { active: false, hoverFolder: null, overMap: false };

export function hasFiles(e) {
    return e.dataTransfer?.types?.includes('Files');
}

export default function TracksFileDragController() {
    const ctx = useContext(AppContext);

    useEffect(() => {
        const onDragEnd = () => {
            ctx.setGpxFileDrag(GPX_FILE_DRAG_IDLE);
        };
        window.addEventListener('dragend', onDragEnd);
        return () => {
            window.removeEventListener('dragend', onDragEnd);
        };
    }, [ctx.setGpxFileDrag]);

    return createPortal(<TracksDropOverlay />, document.body);
}
