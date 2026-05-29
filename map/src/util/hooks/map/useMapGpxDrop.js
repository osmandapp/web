import { useCallback, useRef, useState } from 'react';

export default function useMapGpxDrop({ importGpxFiles }) {
    const [isDragOver, setIsDragOver] = useState(false);
    const dragCounterRef = useRef(0);

    const hasFiles = (e) => e.dataTransfer?.types?.includes('Files');

    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        if (!hasFiles(e)) {
            return;
        }
        dragCounterRef.current += 1;
        setIsDragOver(true);
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        if (!hasFiles(e)) {
            return;
        }
        e.dataTransfer.dropEffect = 'copy';
    }, []);

    const handleDragLeave = useCallback(() => {
        dragCounterRef.current = Math.max(0, dragCounterRef.current - 1);
        if (dragCounterRef.current === 0) {
            setIsDragOver(false);
        }
    }, []);

    const handleDrop = useCallback(
        (e) => {
            e.preventDefault();
            const files = Array.from(e.dataTransfer?.files || []).filter(
                (file) => file.name.toLowerCase().endsWith('.gpx')
            );
            dragCounterRef.current = 0;
            setIsDragOver(false);
            if (files.length > 0) {
                importGpxFiles(files);
            }
        },
        [importGpxFiles]
    );

    return {
        isDragOver,
        dropHandlers: {
            onDragEnter: handleDragEnter,
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave,
            onDrop: handleDrop,
        },
    };
}
