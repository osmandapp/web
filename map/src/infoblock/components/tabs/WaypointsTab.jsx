import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import {
    Alert,
    Box, Button,
    IconButton,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography
} from "@mui/material";
import L from "leaflet";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import {Cancel} from "@mui/icons-material";
import PointManager from "../../../context/PointManager";
import TracksManager from "../../../context/TracksManager";
import wptTabStyle from "../../styles/WptTabStyle";
import _ from "lodash";


export default function WaypointsTab({width}) {

    const ctx = useContext(AppContext);

    const stylesWpt = wptTabStyle();
    const stylesMenu = contextMenuStyles();

    const [showMore, setShowMore] = useState(false);
    const [openWptAlert, setOpenWptAlert] = useState(true);
    const NAME_SIZE = 30;

    function getLayers() {
        if (ctx.selectedGpxFile?.layers) {
            if (!_.isEmpty(ctx.selectedGpxFile.layers)) {
                return ctx.selectedGpxFile.layers.getLayers();
            }
            if (ctx.selectedGpxFile?.gpx?.layers) {
                return ctx.selectedGpxFile.gpx.layers.getLayers();
            }
        }
        return [];
    }

    function getPoints() {
        let wpts = [];
        let layers = getLayers();
        layers.forEach(layer => {
            if (layer instanceof L.Marker) {
                let coord = layer.getLatLng();
                ctx.selectedGpxFile.wpts.forEach(wpt => {
                    if (wpt.lat === coord.lat && wpt.lon === coord.lng) {
                        wpts.push({
                            wpt: wpt,
                            layer: layer
                        })
                    }
                })
            }
        })
        return wpts;
    }

    function showPoint(point) {
        ctx.setSelectedWpt(point);
        ctx.selectedGpxFile.showPoint = point;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function getLength(point) {
        return point.layer.options?.desc && point.layer.options.address ? 15 : 30;
    }

    function getName(point) {
        let name = point.layer.options?.title;
        if (name) {
            if (name.length > NAME_SIZE) {
                return point.layer.options?.title.substring(0, NAME_SIZE);
            } else {
                return name;
            }
        }
    }

    // TODO
    // function addWaypoint() {
    //     ctx.selectedGpxFile.addWpt = true;
    //     ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    // }

    function showWithInfo(point) {
        return <>
            <ListItemIcon>
                <div className={stylesWpt.icon}
                     dangerouslySetInnerHTML={{__html: point.layer.options.icon.options.html + ''}}/>
            </ListItemIcon>
            <ListItemText sx={{ml: "-35px !important"}}>
                <Typography component={'span'} variant="inherit" noWrap>
                    {getName(point)}
                    {point.layer.options?.title?.length > NAME_SIZE &&
                        <ListItemIcon style={{marginRight: " -25px"}}>
                            {"..."}
                        </ListItemIcon>}<br/>
                    <Typography component={'span'} variant="caption">
                        {point.wpt.category}
                    </Typography>
                    {point.wpt.category && (point.layer.options?.address || point.layer.options?.desc) &&
                        <ListItemIcon style={{marginLeft: "5px", marginRight: " -25px"}}>
                            {" • "}
                        </ListItemIcon>}
                    <Typography component={'span'} variant="caption" style={{wordWrap: "break-word"}}>
                        {showMore ? point.layer.options?.desc : point.layer.options?.desc?.substring(0, getLength(point))}
                        {point.layer.options?.desc?.length > getLength(point) &&
                            <ListItemIcon style={{marginRight: " -25px"}}>
                                {"..."}
                            </ListItemIcon>}
                    </Typography>
                    {point.layer.options?.address && point.layer.options?.desc &&
                        <ListItemIcon style={{marginLeft: "5px", marginRight: " -25px"}}>
                            {" • "}
                        </ListItemIcon>}
                    <Typography component={'span'} variant="caption" style={{wordWrap: "break-word"}}>
                        {showMore ? point.layer.options?.address : point.layer.options?.address?.substring(0, getLength(point))}
                        {point.layer.options?.address?.length > getLength(point) &&
                            <ListItemIcon onClick={() => setShowMore(!showMore)}>
                                {showMore ? "...less" : "...more"}
                            </ListItemIcon>}
                    </Typography>
                </Typography>
            </ListItemText>
        </>
    }

    function showOnlyName(point) {
        return <>
            <ListItemIcon>
                <div className={stylesWpt.iconOnlyName}
                     dangerouslySetInnerHTML={{__html: point.layer.options.icon.options.html + ''}}/>
            </ListItemIcon>
            <ListItemText sx={{ml: "-35px !important"}}>
                <Typography variant="inherit" noWrap>
                    {getName(point)}
                    {point.layer.options?.title?.length > NAME_SIZE &&
                        <ListItemIcon style={{marginRight: " -25px"}}>
                            {"..."}
                        </ListItemIcon>}
                </Typography>
            </ListItemText>
        </>
    }

    function hasInfo(wpt) {
        return wpt.layer.options?.desc !== undefined || wpt.layer.options?.address !== undefined || wpt.wpt.category;
    }

    function deleteAllWpts() {
        ctx.selectedGpxFile.wpts = [];
        ctx.selectedGpxFile.updateLayers = true;
        TracksManager.updateState(ctx);
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    const WaypointRow = () => ({point, index}) => {
        return (
            <MenuItem key={'marker' + index} divider
                      onClick={() => showPoint(point)}
            >
                {hasInfo(point) ? showWithInfo(point) : showOnlyName(point)}
                <ListItemAvatar>
                    <IconButton sx={{mr: 1}}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    PointManager.deleteWpt(index, ctx);
                                }
                    }>
                        <Cancel fontSize="small"/>
                    </IconButton>
                </ListItemAvatar>
            </MenuItem>)
    }


    return (<>
            {ctx.createTrack && ctx.selectedGpxFile?.wpts && !_.isEmpty(ctx.selectedGpxFile.wpts) &&
                <Button
                    variant="contained"
                    className={stylesMenu.button}
                    onClick={() => deleteAllWpts()}>
                    Clear
                </Button>}


            {openWptAlert && ctx.createTrack && (!ctx.selectedGpxFile.wpts || _.isEmpty(ctx.selectedGpxFile.wpts)) &&
                <Alert
                    sx={{mt: 2}}
                    severity="info"
                    onClose={() => {
                        setOpenWptAlert(false)
                    }
                    }>
                    Use the right menu to add a waypoint...
                </Alert>
            }
            <Box
                className={stylesMenu.item}
                minWidth={width}>
                {ctx.selectedGpxFile.wpts && getPoints().map((point, index) => {
                    return WaypointRow()({point: point, index: index});
                })}
            </Box>
        </>
    )
}