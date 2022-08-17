import {Box, IconButton, ListItemAvatar, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import React, {useContext} from "react";
import {Cancel, ViewHeadline} from "@mui/icons-material";
import AppContext from "../../../context/AppContext";
import Utils from "../../../util/Utils";
import LocalTracksManager from "../../../context/LocalTracksManager";
import {DragDropContext, Draggable, Droppable} from "@hello-pangea/dnd";


const PointsTab = ({width}) => {

    const ctx = useContext(AppContext);

    function showPointOnMap(point) {
        ctx.selectedGpxFile.showPoint = point;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function deletePoint(index) {
        let currentTrack = ctx.localClientsTracks.find(t => t.name === ctx.selectedGpxFile.name);
        currentTrack.points.splice(index, 1);
        updateTrack(currentTrack);
        LocalTracksManager.saveTracks(ctx.localClientsTracks);
    }

    function updateTrack(currentTrack) {
        currentTrack.points = Utils.getPointsDist(currentTrack.points);
        currentTrack.gpx = Utils.getGpx(currentTrack);
        ctx.setLocalClientsTracks([...ctx.localClientsTracks]);
    }

    const getItemStyle = (isDragging, draggableStyle, index) => ({
        userSelect: "none",
        background: isDragging ? '#fbc73a' : "white",
        color: isDragging ? "white" : "black",
        borderBottom: '0.5px solid gray',
        ...draggableStyle,
        left: isDragging ? "25px" : "0",
        top: isDragging ? draggableStyle.top - 450 + "px" : "0"
    });

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
                                  provided.draggableProps.style,
                                  index
                              )}
                    >
                        <ListItemIcon>
                            <ViewHeadline fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" noWrap>
                                Point - {index + 1}<br/>
                                {point.dist === 0 ? "start" : Math.round(point.dist / 100) / 10.0 + " km"}
                            </Typography>
                        </ListItemText>
                        <ListItemAvatar>
                            <IconButton x={{mr: 1}} onClick={(e) => {
                                e.stopPropagation();
                                deletePoint(index)
                            }}>
                                <Cancel fontSize="small"/>
                            </IconButton>
                        </ListItemAvatar>
                    </MenuItem>
                )}
            </Draggable>)
    }

    const onDragEnd = result => {
        if (!result.destination) {
            return;
        }
        reorder(result.source.index, result.destination.index);
    }

    const reorder = (startIndex, endIndex) => {
        let currentTrack = ctx.localClientsTracks.find(t => t.name === ctx.selectedGpxFile.name);
        const [removed] = currentTrack.points.splice(startIndex, 1)
        currentTrack.points.splice(endIndex, 0, removed)
        updateTrack(currentTrack);
    }

    return (<DragDropContext onDragEnd={onDragEnd}><Box width={width}>
        <Droppable droppableId="droppable-1">
            {(provided) => (
                <div ref={provided.innerRef}
                     style={{maxHeight: '35vh', overflow: 'auto'}}
                     {...provided.droppableProps}>
                    {ctx.selectedGpxFile && ctx.selectedGpxFile.points && ctx.selectedGpxFile.points.map((point, index) => {
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