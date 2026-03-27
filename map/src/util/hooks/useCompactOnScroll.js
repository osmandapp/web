import { useCallback, useMemo, useState } from 'react';

const initialState = { compact: false, expandPaused: false };

/**
 * Drives a “compact” layout while a scrollable region is scrolled down.
 *
 * - `compact` becomes true when `scrollTop > 0` (if content can scroll).
 * - Returns to expanded when the user scrolls back to the top, unless `expandPaused` is set.
 *
 * `expandPaused` avoids flashing back to expanded when scroll context changes without a real user
 * scroll (e.g. switching tabs): `scrollTop === 0` may fire even though we should stay compact.
 *
 * Wire `scrollAreaHandlers` into a component that owns the scroll container (e.g. `TabPanels`).
 *
 * @returns {object} `compact`, `scrollAreaHandlers`, `syncExpandPauseFromScrollTop`.
 */
export function useCompactOnScroll() {
    const [state, setState] = useState(initialState);

    /** Align compact/pause flags with DOM position when layout changes without scroll events. */
    const syncExpandPauseFromScrollTop = useCallback((scrollTop) => {
        setState((s) => {
            if (scrollTop > 0) {
                const nextState = { compact: true, expandPaused: false };
                if (s.compact === nextState.compact && s.expandPaused === nextState.expandPaused) {
                    return s;
                }
                return nextState;
            }
            return s;
        });
    }, []);

    /** Call when scrollable content identity changes without a guaranteed `scroll` event. */
    const onScrollAreaContextChange = useCallback(() => {
        setState((s) => ({ ...s, expandPaused: true }));
    }, []);

    /** After layout of the scroll container; pass the scrollable element (e.g. from useLayoutEffect). */
    const onScrollAreaLayout = useCallback(
        (scrollContainerEl) => {
            syncExpandPauseFromScrollTop(scrollContainerEl?.scrollTop ?? 0);
        },
        [syncExpandPauseFromScrollTop]
    );

    /** Attach to the scrollable content element’s `onScroll`. */
    const onContentScroll = useCallback((event) => {
        const el = event.currentTarget;
        const { scrollTop, scrollHeight, clientHeight } = el;

        setState((s) => {
            if (scrollTop > 0) {
                if (s.compact && !s.expandPaused) {
                    return s;
                }
                return { compact: true, expandPaused: false };
            }
            if (scrollHeight <= clientHeight) {
                return s;
            }
            if (s.expandPaused) {
                return s;
            }
            return { ...s, compact: false };
        });
    }, []);

    const scrollAreaHandlers = useMemo(
        () => ({
            onContentScroll,
            onScrollAreaLayout,
            onScrollAreaContextChange,
        }),
        [onContentScroll, onScrollAreaLayout, onScrollAreaContextChange]
    );

    return {
        compact: state.compact,
        scrollAreaHandlers,
        syncExpandPauseFromScrollTop,
    };
}
