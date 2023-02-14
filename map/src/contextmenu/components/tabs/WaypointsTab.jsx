import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import {
    Box,
    IconButton,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography
} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import L from "leaflet";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import {Cancel} from "@mui/icons-material";
import PointManager from "../../../context/PointManager";

const useStyles = makeStyles({
    icon: {
        "& .icon": {
            top: '21px',
            left: '20px'
        },
        "& .background": {
            marginBottom: '-40px',
            marginRight: '20px',
            marginLeft: '10px',
            filter: "drop-shadow(0 0 0 gray)"
        }
    },
    text: {
        '& .MuiTypography-root': {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            paddingRight: "20px",
            marginLeft: "14px !important"
        }
    }
})
export default function WaypointsTab({width}) {

    const ctx = useContext(AppContext);

    const classes = useStyles();
    const styles = contextMenuStyles();

    const [showMore, setShowMore] = useState(false);

    function getPoints() {
        let wpts = [];
        let layers = ctx.selectedGpxFile.layers ? ctx.selectedGpxFile.layers.getLayers() :
            ctx.selectedGpxFile.gpx.layers ? ctx.selectedGpxFile.gpx.layers.getLayers() : [];
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
        ctx.selectedGpxFile.showPoint = point;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function getLength(point) {
        return point.layer.options?.desc && point.layer.options.address ? 30 : 60;
    }

    const WaypointRow = () => ({point, index}) => {
        return (
            <MenuItem key={'marker' + index} divider onClick={() => showPoint(point)}>
                <ListItemIcon>
                    <div className={classes.icon}
                         dangerouslySetInnerHTML={{__html: point.layer.options.icon.options.html + ''}}/>
                </ListItemIcon>
                <ListItemText sx={{ml: "-35px !important"}}>
                    <Typography variant="inherit" noWrap>
                        {point.layer.options?.title}<br/>
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
                <ListItemAvatar>
                    <IconButton sx={{mr: 1}} onClick={(e) => {
                        e.stopPropagation();
                        PointManager.deleteWpt(index, ctx);
                    }}>
                        <Cancel fontSize="small"/>
                    </IconButton>
                </ListItemAvatar>
            </MenuItem>)
    }


    return (
        <Box className={styles.item} minWidth={width}>
            <div style={{maxHeight: '35vh', overflow: 'auto'}}>
                {ctx.selectedGpxFile.wpts && getPoints().map((point, index) => {
                    return WaypointRow()({point: point, index: index});
                })}
            </div>
        </Box>
    )
}