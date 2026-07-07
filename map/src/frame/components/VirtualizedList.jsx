import {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { VariableSizeList } from 'react-window';
import styles from './virtualizedList.module.css';

const DEFAULT_ESTIMATED_ITEM_HEIGHT = 56;
const DEFAULT_OVERSCAN_COUNT = 3;

const VirtualizedList = forwardRef(function VirtualizedList(
    {
        items,
        renderItem,
        height,
        width = '100%',
        itemSize = undefined,
        estimatedItemHeight = DEFAULT_ESTIMATED_ITEM_HEIGHT,
        getItemKey = (item, index) => index,
        overscanCount = DEFAULT_OVERSCAN_COUNT,
        style = undefined,
        overlayIndex = undefined,
        overlayContent = undefined,
        fillHeight = false,
    },
    ref
) {
    const listRef = useRef(null);
    const outerElRef = useRef(null);
    const heightsRef = useRef({});
    const [contentHeight, setContentHeight] = useState(0);
    const [overlayTop, setOverlayTop] = useState(null);

    const rows = items ?? [];
    const autoMeasure = itemSize == null;
    const measuredContent = contentHeight || rows.length * estimatedItemHeight;
    // When fillHeight, the list always occupies the full available height (react-window just
    // shows blank space below short content) instead of shrinking to fit like the default.
    const safeHeight = fillHeight ? Math.max(1, height || 0) : Math.max(1, Math.min(measuredContent, height || 0));

    useImperativeHandle(
        ref,
        () => ({
            scrollToItem: (index, align) => listRef.current?.scrollToItem(index, align),
        }),
        []
    );

    const resolveItemSize = useCallback(
        (index) => {
            if (itemSize) {
                return itemSize(index);
            }

            return heightsRef.current[getItemKey(rows[index], index)] ?? estimatedItemHeight;
        },
        [itemSize, getItemKey, rows, estimatedItemHeight]
    );

    const sumItemSizes = useCallback(
        (count) => {
            let total = 0;
            for (let i = 0; i < count; i++) {
                total += resolveItemSize(i);
            }
            return total;
        },
        [resolveItemSize]
    );

    const overlayOffset = useMemo(() => {
        if (overlayIndex == null) {
            return 0;
        }
        return sumItemSizes(overlayIndex);
    }, [overlayIndex, sumItemSizes, contentHeight]);

    // How far the folder-row boundary currently is above the viewport (0 once scrolled past it).
    const recomputeOverlayTop = useCallback(() => {
        const outer = outerElRef.current;
        if (!outer || overlayIndex == null) {
            setOverlayTop(null);
            return;
        }

        const top = Math.max(0, overlayOffset - outer.scrollTop);
        setOverlayTop((prev) => (prev === top ? prev : top));
    }, [overlayIndex, overlayOffset]);

    const recomputeContentHeight = useCallback(() => {
        setContentHeight(sumItemSizes(rows.length));
    }, [rows.length, sumItemSizes]);

    // Cache a measured row height and re-lay out from it when it changed.
    const setRowHeight = useCallback(
        (index, key, measured) => {
            if (measured > 0 && heightsRef.current[key] !== measured) {
                heightsRef.current[key] = measured;
                listRef.current?.resetAfterIndex(index);
                recomputeContentHeight();
            }
        },
        [recomputeContentHeight]
    );

    useEffect(() => {
        listRef.current?.resetAfterIndex(0);
        recomputeContentHeight();
    }, [rows, recomputeContentHeight]);

    // No resize tracking needed: the overlay's bottom is plain `bottom: 0` (see render below),
    // which the browser already keeps in sync with the wrapper's size.
    useLayoutEffect(() => {
        recomputeOverlayTop();
    }, [recomputeOverlayTop]);

    const itemData = useMemo(
        () => ({ rows, renderItem, getItemKey, setRowHeight, autoMeasure }),
        [rows, renderItem, getItemKey, setRowHeight, autoMeasure]
    );

    return (
        <div className={styles.container}>
            <VariableSizeList
                ref={listRef}
                outerRef={outerElRef}
                onScroll={overlayIndex != null ? recomputeOverlayTop : undefined}
                height={safeHeight}
                width={width}
                itemCount={rows.length}
                itemSize={resolveItemSize}
                overscanCount={overscanCount}
                itemData={itemData}
                itemKey={(index, data) => data.getItemKey(data.rows[index], index)}
                style={{ overflowX: 'hidden', ...style }}
            >
                {VirtualizedRow}
            </VariableSizeList>
            {overlayTop != null && overlayContent && (
                <div className={styles.overlay} style={{ top: overlayTop }}>
                    {overlayContent}
                </div>
            )}
        </div>
    );
});

function VirtualizedRow({ data, index, style }) {
    const { rows, renderItem, getItemKey, setRowHeight, autoMeasure } = data;
    const item = rows[index];
    const rowRef = useRef(null);

    useLayoutEffect(() => {
        if (!autoMeasure) {
            return;
        }
        const el = rowRef.current;
        if (!el) {
            return;
        }
        const key = getItemKey(item, index);
        const report = () => setRowHeight(index, key, el.getBoundingClientRect().height);
        report();
        const observer = new ResizeObserver(report);
        observer.observe(el);

        return () => observer.disconnect();
    }, [autoMeasure, index, item, getItemKey, setRowHeight]);

    return (
        <div style={style}>
            <div ref={rowRef}>{renderItem(item, index)}</div>
        </div>
    );
}

export default VirtualizedList;
