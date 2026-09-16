import { useEffect, useState } from 'react';

// true only after `value` has stayed true for `delayMs`, false at once when `value` drops (no flicker of short loadings)
export function useDelayedFlag(value, delayMs) {
    const [delayed, setDelayed] = useState(false);

    useEffect(() => {
        if (!value) {
            setDelayed(false);
            return undefined;
        }
        const timer = setTimeout(() => setDelayed(true), delayMs);

        return () => clearTimeout(timer);
    }, [value, delayMs]);

    return delayed;
}
