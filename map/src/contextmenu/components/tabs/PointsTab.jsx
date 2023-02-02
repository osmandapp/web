import {
    Box,
    IconButton,
    LinearProgress,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography
} from "@mui/material";
import React, {useContext, useState} from "react";
import {Cancel, ViewHeadline} from "@mui/icons-material";
import AppContext from "../../../context/AppContext";
import Utils from "../../../util/Utils";
import TracksManager from "../../../context/TracksManager";
import {DragDropContext, Draggable, Droppable} from "@hello-pangea/dnd";
import PointManager from "../../../context/PointManager";


const PointsTab = ({width}) => {

    const ctx = useContext(AppContext);

    const [loading, setLoading] = useState(false);

    function showPointOnMap(point) {
        ctx.selectedGpxFile.showPoint = point;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    const onDragEnd = async result => {
        setLoading(true);
        if (!result.destination) {
            return;
        }
        let currentTrack = ctx.localTracks.find(t => t.name === ctx.selectedGpxFile.name);
        if (currentTrack) {
            await PointManager.reorder(result.source.index, result.destination.index, currentTrack, ctx);
            updateTrack(currentTrack);
            TracksManager.saveTracks(ctx.localTracks);
        } else {
            await PointManager.reorder(result.source.index, result.destination.index, ctx.selectedGpxFile, ctx);
            ctx.selectedGpxFile.updateLayers = true;
            ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
        }
        setLoading(false);
    }

    const getItemStyle = (isDragging, draggableStyle) => ({
        userSelect: "none",
        background: isDragging ? '#fbc73a' : "white",
        color: isDragging ? "white" : "black",
        borderBottom: '0.5px solid gray',
        ...draggableStyle
    });

    function updateTrack(currentTrack) {
        currentTrack.updated = true;
        currentTrack.tracks.forEach(track => {
            track.points = Utils.getPointsDist(track.points);
        })
        ctx.setLocalTracks([...ctx.localTracks]);
        ctx.setSelectedGpxFile(Object.assign({}, currentTrack));
    }

    function getPoints() {
        if (ctx.selectedGpxFile) {
            if (ctx.selectedGpxFile.points) {
                TracksManager.addDistanceToPoints(ctx.selectedGpxFile.points, null);
                return ctx.selectedGpxFile.points;
            } else {
                TracksManager.addDistance(ctx.selectedGpxFile);
                return TracksManager.getEditablePoints(ctx.selectedGpxFile);
            }
        }
    }

    const PointRow = () => ({point, index}) => {
        return (
            <Draggable key={index} draggableId={index + ' row'} index={index}>
                {(provided, snapshot) => (
                    <MenuItem ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              key={index} divider onClick={() => showPointOnMap(point)}
                              style={getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style
                              )}
                    >
                        <ListItemIcon>
                            <ViewHeadline fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" noWrap>
                                Point - {index + 1}<br/>
                                {point.distanceFromStart === 0 ? "start" : Math.round(point.distanceFromStart) + " m"}
                                {point.profile && " • "}
                                {point.profile}
                            </Typography>
                        </ListItemText>
                        <ListItemAvatar>
                            <IconButton x={{mr: 1}} onClick={(e) => {
                                e.stopPropagation();
                                PointManager.deletePoint(index, ctx).then();
                            }}>
                                <Cancel fontSize="small"/>
                            </IconButton>
                        </ListItemAvatar>
                    </MenuItem>
                )}
            </Draggable>)
    }

    return (<DragDropContext onDragEnd={onDragEnd}><Box minWidth={width}>
        {loading ? <LinearProgress/> : <></>}
        <Droppable droppableId="droppable-1">
            {(provided) => (
                <div ref={provided.innerRef}
                     style={{maxHeight: '35vh', overflow: 'auto'}}
                     {...provided.droppableProps}>
                    {getPoints().map((point, index) => {
                        return PointRow()({point: point, index: index});
                    })}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </Box>
    </DragDropContext>);
};

export default PointsTab;