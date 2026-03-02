import { useState, useEffect, useRef } from 'react';
import { useWindowSize } from './useWindowSize';

const DEBOUNCE_MS = 50;

/**
 * Returns a ref for the scroll container and a hasVerticalScroll flag.
 * Attach the ref to an element with overflow: auto/scroll.
 * true when scrollHeight > clientHeight; false only after no overflow for DEBOUNCE_MS (avoids flicker).
 * @param {Array} deps — extra dependencies to re-run the check (e.g. [route])
 */
export function useHasVerticalScroll(deps = []) {
    const ref = useRef(null);
    const timerRef = useRef(null);

    const [hasVerticalScroll, setHasVerticalScroll] = useState(false);
    const [, height] = useWindowSize();

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const hasOverflow = el.scrollHeight > el.clientHeight;

        if (hasOverflow) {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
            setHasVerticalScroll(true);
            return;
        }

        timerRef.current = setTimeout(() => {
            timerRef.current = null;
            if (ref.current && ref.current.scrollHeight <= ref.current.clientHeight) {
                setHasVerticalScroll(false);
            }
        }, DEBOUNCE_MS);

        return () => {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
            }
        };
    }, [height, ...deps]);

    return [ref, hasVerticalScroll];
}
