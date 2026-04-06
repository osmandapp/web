import { useEffect, useRef, useState } from 'react';

export function useDebouncedHash({ hash, durationMs, commitHash = false, blockWhen = false }) {
    const debouncerTimer = useRef(0);
    const [isPending, setIsPending] = useState(false);
    const [delayedHash, setDelayedHash] = useState(hash);

    const enabled = commitHash ? !blockWhen : true;

    useEffect(() => {
        if (!enabled) return;

        setIsPending(true);
        debouncerTimer.current > 0 && clearTimeout(debouncerTimer.current);
        debouncerTimer.current = setTimeout(() => {
            debouncerTimer.current = 0;
            if (commitHash) {
                setDelayedHash(hash);
            }
            setIsPending(false);
        }, durationMs);

        return () => {
            clearTimeout(debouncerTimer.current);
        };
    }, [blockWhen, enabled, hash, durationMs, commitHash]);

    return { isPending, delayedHash };
}
