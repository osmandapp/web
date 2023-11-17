import {
    Alert,
    Box,
    Button,
    IconButton,
    LinearProgress,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography,
} from '@mui/material';
import React, { useContext, useState, useCallback } from 'react';
import { Cancel, ViewHeadline } from '@mui/icons-material';
import AppContext from '../../../context/AppContext';
import TracksManager from '../../../manager/track/TracksManager';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import PointManager from '../../../manager/PointManager';
import contextMenuStyles from '../../styles/ContextMenuStyles';
import { confirm } from '../../../dialogs/GlobalConfirmationDialog';
import _ from 'lodash';

const PointsTab = ({ width }) => {
    const ctx = useContext(AppContext);
    const styles = contextMenuStyles();

    const [loading, setLoading] = useState(false);
    const [openPointAlert, setOpenPointAlert] = useState(true);

    function showPointOnMap(point) {
        ctx.selectedGpxFile.showPoint = point;
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
    }

    const onDragEnd = useCallback(
        async (result) => {
            setLoading(true);
            if (!result.destination) {
                return;
            }
            if (ctx.selectedGpxFile) {
                await PointManager.reorder(result.source.index, result.destination.index, ctx.selectedGpxFile, ctx);
            }
            setLoading(false);
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
            callback: () => {
                if (ctx.selectedGpxFile) {
                    if (ctx.selectedGpxFile.points) {
                        ctx.selectedGpxFile.points = [];
                    }
                    if (ctx.selectedGpxFile.tracks) {
                        ctx.selectedGpxFile.tracks = [];
                    }
                    ctx.selectedGpxFile.updateLayers = true;
                    ctx.selectedGpxFile.analysis = null;
                    ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
                }
            },
        });
    }

    const PointRow = ({ point, index }) => {
        return (
            <Draggable key={index} draggableId={index + ' row'} index={index}>
                {(provided, snapshot) => (
                    <MenuItem
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
                            <Typography variant="inherit" noWrap>
                                Point - {index + 1}
                                <br />
                                {point.distanceSegment === 0 ? 'start' : Math.round(point.distanceSegment) + ' m'}
                                {point.profile && ' • '}
                                {point.profile}
                            </Typography>
                        </ListItemText>
                        <ListItemAvatar>
                            <IconButton
                                x={{ mr: 1 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    PointManager.deletePoint(index, ctx).then(() => {
                                        TracksManager.updateState(ctx);
                                    });
                                }}
                            >
                                <Cancel fontSize="small" />
                            </IconButton>
                        </ListItemAvatar>
                    </MenuItem>
                )}
            </Draggable>
        );
    };

    return (
        <>
            {openPointAlert &&
                ctx.createTrack &&
                (!ctx.selectedGpxFile?.points || _.isEmpty(ctx.selectedGpxFile?.points)) &&
                (!ctx.selectedGpxFile?.tracks || _.isEmpty(ctx.selectedGpxFile?.tracks[0]?.points)) && (
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
                <Button variant="contained" className={styles.button} onClick={deleteAllPoints}>
                    Clear points
                </Button>
            )}
            {ctx.selectedGpxFile?.points && (
                <DragDropContext onDragEnd={onDragEnd}>
                    <Box sx={{ mt: 2 }} minWidth={width}>
                        {loading ? <LinearProgress /> : <></>}
                        <Droppable droppableId="droppable-1">
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {getPoints().map((point, index) => {
                                        return PointRow({ point: point, index: index });
                                    })}
                                    {provided.placeholder}
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
