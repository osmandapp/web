import { useEffect, useRef, useState } from 'react';

export function useDebouncedHash({ hash, durationMs, commitHash = false, blockWhen = false }) {
    const debouncerTimer = useRef(null);
    const [isPending, setIsPending] = useState(false);
    const [delayedHash, setDelayedHash] = useState(hash);

    const enabled = commitHash ? !blockWhen : true;

    useEffect(() => {
        if (!enabled) {
            if (debouncerTimer.current != null) {
                clearTimeout(debouncerTimer.current);
                debouncerTimer.current = null;
            }
            setIsPending(false);
            return;
        }

        setIsPending(true);
        if (debouncerTimer.current != null) {
            clearTimeout(debouncerTimer.current);
            debouncerTimer.current = null;
        }
        debouncerTimer.current = setTimeout(() => {
            debouncerTimer.current = null;
            if (commitHash) {
                setDelayedHash(hash);
            }
            setIsPending(false);
        }, durationMs);

        return () => {
            if (debouncerTimer.current != null) {
                clearTimeout(debouncerTimer.current);
                debouncerTimer.current = null;
            }
        };
    }, [blockWhen, enabled, hash, durationMs, commitHash]);

    return { isPending, delayedHash };
}
