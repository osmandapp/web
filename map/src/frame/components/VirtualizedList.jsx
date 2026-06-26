import { forwardRef, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef } from 'react';
import { VariableSizeList } from 'react-window';

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
    },
    ref
) {
    const listRef = useRef(null);
    const heightsRef = useRef({});
    const rows = items ?? [];
    const autoMeasure = itemSize == null;

    useImperativeHandle(
        ref,
        () => ({
            scrollToItem: (index, align) => listRef.current?.scrollToItem(index, align),
        }),
        []
    );

    const resolveItemSize = (index) => {
        if (itemSize) {
            return itemSize(index);
        }

        return heightsRef.current[getItemKey(rows[index], index)] ?? estimatedItemHeight;
    };

    // Cache a measured row height and re-lay out from it when it changed.
    const setRowHeight = useCallback((index, key, measured) => {
        if (measured > 0 && heightsRef.current[key] !== measured) {
            heightsRef.current[key] = measured;
            listRef.current?.resetAfterIndex(index);
        }
    }, []);

    // Re-lay out when the set of rows changes.
    useEffect(() => {
        listRef.current?.resetAfterIndex(0);
    }, [rows]);

    // Passed via itemData so react-window keeps the same row instances (no remount on re-render).
    const itemData = useMemo(
        () => ({ rows, renderItem, getItemKey, setRowHeight, autoMeasure }),
        [rows, renderItem, getItemKey, setRowHeight, autoMeasure]
    );

    return (
        <VariableSizeList
            ref={listRef}
            height={height}
            width={width}
            itemCount={rows.length}
            itemSize={resolveItemSize}
            overscanCount={overscanCount}
            itemData={itemData}
            itemKey={(index, data) => data.getItemKey(data.rows[index], index)}
            style={style}
        >
            {VirtualizedRow}
        </VariableSizeList>
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
