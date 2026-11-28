import {
    Alert,
    Box,
    Button,
    IconButton,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography,
} from '@mui/material';
import React, { useContext, useState, useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { Cancel, ViewHeadline } from '@mui/icons-material';
import AppContext from '../../../context/AppContext';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import PointManager from '../../../manager/PointManager';
import { confirm } from '../../../dialogs/GlobalConfirmationDialog';
import isEmpty from 'lodash-es/isEmpty';
import { TabScrollerContext } from './TabPanels';
import { getVisibleRange } from '../../../util/Utils';

const ROWS_OVERSCAN = 10;
const FIRST_ROWS = 50;
const ESTIMATED_ROW_HEIGHT = 60;

const PointsTab = ({ width }) => {
    const ctx = useContext(AppContext);
    const scrollerRef = useContext(TabScrollerContext);

    const listRef = useRef(null);
    const rowsRef = useRef(null);

    const [openPointAlert, setOpenPointAlert] = useState(true);
    const [measuredRowHeight, setMeasuredRowHeight] = useState(null);
    const [visibleRows, setVisibleRows] = useState({ first: 0, last: FIRST_ROWS - 1 });

    function showPointOnMap(point) {
        ctx.setSelectedGpxFile((prevState) => ({
            ...prevState,
            showPoint: point,
        }));
    }

    const onDragEnd = useCallback(
        (result) => {
            if (!result.destination) {
                return;
            }
            if (ctx.selectedGpxFile) {
                PointManager.reorder(result.source.index, result.destination.index, ctx);
            }
        },
        [ctx.trackRouter, ctx.selectedGpxFile]
    );

    useEffect(() => {
        const scroller = scrollerRef?.current;
        if (!scroller) {
            return;
        }
        const showRowsInView = () => {
            const list = listRef.current;
            if (!list?.offsetParent) {
                return;
            }
            const range = getVisibleRange({
                scrollTop: scroller.scrollTop,
                viewHeight: scroller.clientHeight,
                listTop: list.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop,
                rowHeight: getRowHeight(),
                count: getPoints().length,
                overscan: ROWS_OVERSCAN,
            });
            setVisibleRows((prev) => (prev.first === range.first && prev.last === range.last ? prev : range));
        };
        showRowsInView();
        scroller.addEventListener('scroll', showRowsInView);
        const observer = new ResizeObserver(showRowsInView);
        observer.observe(scroller);
        if (listRef.current) {
            observer.observe(listRef.current);
        }

        return () => {
            scroller.removeEventListener('scroll', showRowsInView);
            observer.disconnect();
        };
    }, [scrollerRef, getRowHeight(), getPoints().length]);

    useLayoutEffect(() => {
        const rendered = rowsRef.current?.childElementCount;
        const height = rendered > 0 ? rowsRef.current.getBoundingClientRect().height / rendered : 0;
        if (measuredRowHeight === null && height > 0) {
            setMeasuredRowHeight(height);
        }
    }, [measuredRowHeight, visibleRows, getPoints().length]);

    const getItemStyle = (isDragging, draggableStyle) => ({
        userSelect: 'none',
        background: isDragging ? '#fbc73a' : 'white',
        color: isDragging ? 'white' : 'black',
        borderBottom: '0.5px solid gray',
        ...draggableStyle,
    });

    function getPoints() {
        return ctx.selectedGpxFile.points ?? []; // distance is already exist
    }

    function getRowHeight() {
        return measuredRowHeight ?? ESTIMATED_ROW_HEIGHT;
    }

    function deleteAllPoints() {
        confirm({
            ctx,
            text: 'Delete all track points?',
            callback: () => PointManager.deleteAllPoints(ctx),
        });
    }

    function renderListRow(point, index, draggingId) {
        if (draggingId === getDraggableId(index)) {
            return <div key={index} style={{ height: getRowHeight() }} />;
        }

        return (
            <Draggable key={index} draggableId={getDraggableId(index)} index={index}>
                {(provided, snapshot) => renderPointItem(point, index, provided, snapshot)}
            </Draggable>
        );
    }

    const renderClone = (provided, snapshot, rubric) =>
        renderPointItem(getPoints()[rubric.source.index], rubric.source.index, provided, snapshot);

    function renderPointItem(point, index, provided, snapshot) {
        return (
            <MenuItem
                id={`se-track-point-${index}`}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                key={index}
                divider
                onClick={() => showPointOnMap(point)}
                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
            >
                <ListItemIcon>
                    <ViewHeadline fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                    <Typography noWrap>
                        Point - {index + 1}
                        <br />
                        {point.distanceSegment === 0 ? 'start' : Math.round(point.distanceSegment) + ' m'}
                        {point.profile && ' • '}
                        {point.profile}
                    </Typography>
                </ListItemText>
                <ListItemAvatar>
                    <IconButton
                        id={`se-track-point-delete-${index}`}
                        x={{ mr: 1 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            PointManager.deletePoint(index, ctx);
                        }}
                    >
                        <Cancel fontSize="small" />
                    </IconButton>
                </ListItemAvatar>
            </MenuItem>
        );
    }

    const lastRow = Math.min(visibleRows.last, getPoints().length - 1);
    const firstRow = Math.min(visibleRows.first, lastRow + 1);
    const rowsBelow = getPoints().length - 1 - lastRow;

    return (
        <>
            {openPointAlert &&
                ctx.createTrack &&
                (!ctx.selectedGpxFile?.points || isEmpty(ctx.selectedGpxFile?.points)) && (
                    <Alert
                        severity="info"
                        sx={{ mt: 2 }}
                        onClose={() => {
                            setOpenPointAlert(false);
                        }}
                    >
                        Click on the map to add a point...
                    </Alert>
                )}
            {ctx.createTrack && ctx.selectedGpxFile?.points?.length > 0 && (
                <Button
                    variant="contained"
                    onClick={deleteAllPoints}
                    sx={{
                        backgroundColor: '#fbc73a',
                        fontSize: '12px',
                        minWidth: '20px',
                        padding: '3px 5px',
                        marginLeft: '5px',
                    }}
                >
                    Clear points
                </Button>
            )}
            {ctx.selectedGpxFile?.points && (
                <DragDropContext onDragEnd={onDragEnd}>
                    <Box sx={{ mt: 2 }} minWidth={width}>
                        <Droppable droppableId="droppable-1" mode="virtual" renderClone={renderClone}>
                            {(provided, snapshot) => (
                                <div
                                    ref={(el) => {
                                        provided.innerRef(el);
                                        listRef.current = el;
                                    }}
                                    {...provided.droppableProps}
                                >
                                    <div style={{ height: firstRow * getRowHeight() }} />
                                    <div ref={rowsRef}>
                                        {getPoints()
                                            .slice(firstRow, lastRow + 1)
                                            .map((point, i) =>
                                                renderListRow(point, firstRow + i, snapshot.draggingFromThisWith)
                                            )}
                                    </div>
                                    <div
                                        style={{
                                            height:
                                                (rowsBelow + (snapshot.isUsingPlaceholder ? 1 : 0)) * getRowHeight(),
                                        }}
                                    />
                                </div>
                            )}
                        </Droppable>
                    </Box>
                </DragDropContext>
            )}
        </>
    );
};

export default PointsTab;

function getDraggableId(index) {
    return index + ' row';
}
