import { useCallback, useRef, useState } from 'react';

/**
 * Measures an element's pixel height and keeps it updated while it (or its layout) changes.
 * Attach the returned ref to the element; the height reflects whatever space the element
 * actually occupies, so callers never need hard-coded layout offsets.
 * Needed for react-window, which requires an explicit pixel height for vertical lists.
 */
export function useElementHeight() {
    const observerRef = useRef(null);
    const [height, setHeight] = useState(0);

    const ref = useCallback((node) => {
        observerRef.current?.disconnect();
        if (!node) {
            return;
        }
        const update = () => setHeight(node.clientHeight);
        update();
        observerRef.current = new ResizeObserver(update);
        observerRef.current.observe(node);
    }, []);

    return [ref, height];
}
