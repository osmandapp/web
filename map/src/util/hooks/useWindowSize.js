import { useLayoutEffect, useState, useCallback } from 'react';

const MOBILE_SCREEN_SIZE = 1000;

export function useWindowSize() {
    const [size, setSize] = useState([0, 0, false]);

    const updateSize = useCallback(() => {
        const width = window.innerWidth;
        const mobile = !!(width && width < MOBILE_SCREEN_SIZE);
        setSize([window.innerWidth, window.innerHeight, mobile]);
    }, []);

    useLayoutEffect(() => {
        updateSize();
        window.addEventListener('resize', updateSize);
        window.addEventListener('orientationchange', updateSize);
        return () => {
            window.removeEventListener('resize', updateSize);
            window.removeEventListener('orientationchange', updateSize);
        };
    }, []);

    return size;
}
