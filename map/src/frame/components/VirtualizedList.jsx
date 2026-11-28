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

const getIndexKey = (item, index) => index;

const FOLLOW_SCROLLER_STYLE = { overflowX: 'visible', overflowY: 'visible', willChange: 'auto' };

const VirtualizedList = forwardRef(function VirtualizedList(
    {
        items,
        renderItem,
        height,
        width = '100%',
        itemSize = undefined,
        estimatedItemHeight = DEFAULT_ESTIMATED_ITEM_HEIGHT,
        getItemKey = getIndexKey,
        overscanCount = DEFAULT_OVERSCAN_COUNT,
        style = undefined,
        overlayIndex = undefined,
        overlayContent = undefined,
        fillHeight = false,
        scrollerRef = undefined,
    },
    ref
) {
    const listRef = useRef(null);
    const outerElRef = useRef(null);
    const heightsRef = useRef({});
    const measuredRef = useRef({ sum: 0, count: 0 });
    const [contentHeight, setContentHeight] = useState(0);
    const [overlayTop, setOverlayTop] = useState(null);
    const [scrollerHeight, setScrollerHeight] = useState(0);
    const [measureVersion, setMeasureVersion] = useState(0);

    const rows = items ?? [];
    const autoMeasure = itemSize == null;
    const measuredContent = contentHeight || rows.length * estimatedItemHeight;
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

            return heightsRef.current[getItemKey(rows[index], index)] ?? getEstimatedItemHeight();
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
                const previous = heightsRef.current[key];
                const before = measuredRef.current;
                if (scrollerRef) {
                    measuredRef.current = {
                        sum: before.sum + measured - (previous ?? 0),
                        count: before.count + (previous === undefined ? 1 : 0),
                    };
                }
                heightsRef.current[key] = measured;
                listRef.current?.resetAfterIndex(getAverage(before) === getAverage(measuredRef.current) ? index : 0);
                setMeasureVersion((version) => version + 1);
            }
        },
        [scrollerRef]
    );

    useEffect(() => {
        listRef.current?.resetAfterIndex(0);
    }, [rows]);

    useLayoutEffect(recomputeContentHeight, [recomputeContentHeight, measureVersion]);

    useLayoutEffect(() => {
        recomputeOverlayTop();
    }, [recomputeOverlayTop]);

    // With scrollerRef an outer block scrolls, not the list: tab panels collapse their header on that scroll.
    useLayoutEffect(() => {
        const scroller = scrollerRef?.current;
        const outer = outerElRef.current;
        if (!scroller || !outer) {
            return;
        }
        const followScroller = () => {
            if (!outer.offsetParent) {
                return;
            }
            setScrollerHeight(scroller.clientHeight);
            listRef.current?.scrollTo(scroller.scrollTop - getListTop(outer, scroller));
        };
        followScroller();
        scroller.addEventListener('scroll', followScroller);
        const observer = new ResizeObserver(followScroller);
        observer.observe(scroller);
        observer.observe(outer);

        return () => {
            scroller.removeEventListener('scroll', followScroller);
            observer.disconnect();
        };
    }, [scrollerRef]);

    const itemData = useMemo(
        () => ({ rows, renderItem, getItemKey, setRowHeight, autoMeasure }),
        [rows, renderItem, getItemKey, setRowHeight, autoMeasure]
    );

    function getEstimatedItemHeight() {
        return getAverage(measuredRef.current) ?? estimatedItemHeight;
    }

    return (
        <div className={styles.container}>
            <VariableSizeList
                ref={listRef}
                outerRef={outerElRef}
                onScroll={overlayIndex != null ? recomputeOverlayTop : undefined}
                height={scrollerRef ? scrollerHeight : safeHeight}
                width={width}
                itemCount={rows.length}
                itemSize={resolveItemSize}
                overscanCount={overscanCount}
                itemData={itemData}
                itemKey={(index, data) => data.getItemKey(data.rows[index], index)}
                style={{
                    overflowX: 'hidden',
                    ...style,
                    ...(scrollerRef && { ...FOLLOW_SCROLLER_STYLE, height: measuredContent }),
                }}
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
            <div ref={rowRef} className={styles.row}>
                {renderItem(item, index)}
            </div>
        </div>
    );
}

function getAverage({ sum, count }) {
    return count > 0 ? sum / count : null;
}

function getListTop(outer, scroller) {
    return outer.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop;
}

export default VirtualizedList;
