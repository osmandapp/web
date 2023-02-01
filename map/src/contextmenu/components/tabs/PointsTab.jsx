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


const PointsTab = ({width}) => {

    const ctx = useContext(AppContext);

    const [loading, setLoading] = useState(false);

    function showPointOnMap(point) {
        ctx.selectedGpxFile.showPoint = point;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    const deletePoint = async (index) => {
        let currentTrack = ctx.localTracks.find(t => t.name === ctx.selectedGpxFile.name);
        if (currentTrack && TracksManager.getEditablePoints(currentTrack).length > 2 && !ctx.createTrack?.enable) {
            await deletePointByIndex(currentTrack, index);
        } else {
            await deletePointByIndex(ctx.selectedGpxFile, index);
        }
    }

    const onDragEnd = async result => {
        if (!result.destination) {
            return;
        }
        let currentTrack = ctx.localTracks.find(t => t.name === ctx.selectedGpxFile.name);
        if (currentTrack) {
            await reorder(result.source.index, result.destination.index, currentTrack);
            updateTrack(currentTrack);
            TracksManager.saveTracks(ctx.localTracks);
        } else {
            await reorder(result.source.index, result.destination.index, ctx.selectedGpxFile);
            ctx.selectedGpxFile.updateLayers = true;
            ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
        }
    }

    async function reorder(startIndex, endIndex, currentTrack) {
        let removed;
        removed = await deletePointByIndex(currentTrack, startIndex).then((res) => {
            return res;
        });
        if (removed.length > 0) {
            await insertPointToTrack(currentTrack, endIndex, removed[0]);
        }
    }

    async function deletePointByIndex(currentTrack, index) {
        let lengthSum = 0;
        let res;
        if (currentTrack.points) {
            res = await deleteByIndex(currentTrack.points, index, lengthSum).then((res) => {
                    ctx.selectedGpxFile.updateLayers = true;
                    ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
                    return res.deletedPoint;
                }
            );
        } else {
            for (let track of currentTrack.tracks) {
                res = await deleteByIndex(track.points, index, lengthSum).then((res) => {
                    TracksManager.updateStat(currentTrack);
                    updateTrack(currentTrack);
                    TracksManager.saveTracks(ctx.localTracks);
                    lengthSum = res.lengthSum;
                    if (res.deletedPoint) {
                        return res.deletedPoint;
                    }
                });
            }
        }
        return res;
    }

    async function deleteByIndex(points, index, lengthSum) {
        let res = {
            deletedPoint: null,
            lengthSum: null
        }
        let firstPoint = index === 0 || index === lengthSum;
        let lastPoint = index === (points.length - 1 + lengthSum);
        if (firstPoint) {
            if (points[index + 1].geometry) {
                points[index + 1].geometry = [];
            }
            res.deletedPoint = points.splice(0, 1);
            return res;
        } else if (lastPoint) {
            res.deletedPoint = points.splice(points.length - 1, 1);
            return res;
        } else {
            for (let i = 0; i <= points.length - 1; i++) {
                if (i + lengthSum === index) {
                    if (points[i].geometry) {
                        setLoading(true);
                        let newGeometry;
                        if (points[i].profile === TracksManager.PROFILE_LINE) {
                            let currentNewGeo = points[i].geometry;
                            currentNewGeo.pop();
                            let nextNewGeo = points[i + 1].geometry;
                            nextNewGeo.shift();
                            let resGeo = currentNewGeo.concat(nextNewGeo)

                            newGeometry = Utils.getPointsDist(resGeo);
                        } else {
                            newGeometry = await TracksManager.updateRouteBetweenPoints(ctx, points[i - 1], points[i + 1]);
                        }
                        if (newGeometry) {
                            setLoading(false);
                            points[i + 1].geometry = newGeometry;
                        }
                    }
                    res.deletedPoint = points.splice(i, 1);
                    return res;
                }
            }
        }
        lengthSum += points.length;
        res.lengthSum = lengthSum;
        return res;
    }

    async function insertPointToTrack(currentTrack, index, point) {
        let lengthSum = 0;
        if (currentTrack.points) {
            await insertPoint(currentTrack.points, index, point, lengthSum)
        } else {
            for (let track of currentTrack.tracks) {
                lengthSum = await insertPoint(track.points, index, point, lengthSum);
            }
        }
    }

    async function insertPoint(points, index, point, lengthSum) {
        points.splice(index, 0, point);
        let firstPoint = index === 0 || index === lengthSum;
        let lastPoint = index === (points.length - 1 + lengthSum);
        for (let i = 0; i <= points.length; i++) {
            if (i + lengthSum === index && point) {
                if (firstPoint) {
                    if (points[i + 1].geometry) {
                        setLoading(true);
                        let newGeometryFromNewPoint = await TracksManager.updateRouteBetweenPoints(ctx, point, points[i + 1]);
                        if (newGeometryFromNewPoint) {
                            setLoading(false);
                            points[i + 1].geometry = newGeometryFromNewPoint;
                        }
                    }
                } else if (lastPoint) {
                    if (points[i - 1].geometry) {
                        setLoading(true);
                        let newGeometryToNewPoint = await TracksManager.updateRouteBetweenPoints(ctx, points[i - 1], point);
                        if (newGeometryToNewPoint) {
                            setLoading(false);
                            point.geometry = newGeometryToNewPoint;
                        }
                    }
                } else {
                    if (points[i + 1].geometry) {
                        setLoading(true);
                        let newGeometryToNewPoint = await TracksManager.updateRouteBetweenPoints(ctx, points[i - 1], point);
                        if (newGeometryToNewPoint) {
                            point.geometry = newGeometryToNewPoint;
                        }
                        let newGeometryFromNewPoint = await TracksManager.updateRouteBetweenPoints(ctx, point, points[i + 1]);
                        if (newGeometryFromNewPoint) {
                            setLoading(false);
                            points[i + 1].geometry = newGeometryFromNewPoint;
                        }
                    }
                }
                break;
            }
        }
        lengthSum += points.length;
        return lengthSum;
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
                                deletePoint(index);
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