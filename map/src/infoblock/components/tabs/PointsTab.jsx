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
import React, { useContext, useState, useCallback } from 'react';
import { Cancel, ViewHeadline } from '@mui/icons-material';
import AppContext from '../../../context/AppContext';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import PointManager from '../../../manager/PointManager';
import { confirm } from '../../../dialogs/GlobalConfirmationDialog';
import isEmpty from 'lodash-es/isEmpty';
import { TabScrollerContext } from './TabPanels';
import VirtualizedList from '../../../frame/components/VirtualizedList';

const ESTIMATED_ROW_HEIGHT = 60;

const PointsTab = ({ width }) => {
    const ctx = useContext(AppContext);
    const scrollerRef = useContext(TabScrollerContext);

    const [openPointAlert, setOpenPointAlert] = useState(true);

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

    function deleteAllPoints() {
        confirm({
            ctx,
            text: 'Delete all track points?',
            callback: () => PointManager.deleteAllPoints(ctx),
        });
    }

    function renderListRow(point, index, draggingId) {
        if (!point || draggingId === getDraggableId(index)) {
            return null;
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
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    <VirtualizedList
                                        items={snapshot.isUsingPlaceholder ? [...getPoints(), null] : getPoints()}
                                        renderItem={(point, index) =>
                                            renderListRow(point, index, snapshot.draggingFromThisWith)
                                        }
                                        estimatedItemHeight={ESTIMATED_ROW_HEIGHT}
                                        scrollerRef={scrollerRef}
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
