import { useLayoutEffect, useState, useCallback } from 'react';

export function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    const updateSize = useCallback(() => {
        setSize([window.innerWidth, window.innerHeight]);
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
