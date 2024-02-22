import { useState, useEffect, useRef } from 'react';

export function useDebouncedHash(hash, delay) {
    const [debouncedHash, setDebouncedHash] = useState(hash);
    const debouncerTimer = useRef(0);

    useEffect(() => {
        debouncerTimer.current > 0 && clearTimeout(debouncerTimer.current);
        debouncerTimer.current = setTimeout(() => {
            debouncerTimer.current = 0;
            setDebouncedHash(hash);
        }, delay);

        return () => {
            clearTimeout(debouncerTimer.current);
        };
    }, [hash, delay]);

    return debouncedHash;
}
