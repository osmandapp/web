import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import {Box, Button, Grid, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import L from "leaflet";
import contextMenuStyles from "../../styles/ContextMenuStyles";

const useStyles = makeStyles({
    icon: {
        "& .icon": {
            top: '11px',
            left: '22px',
            width: '40px',
            height: '40px'
        },
        "& .background": {
            left: '-25px',
            top: '-25px',
            marginBottom: '-60px',
            width: '100px',
            height: '100px',
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

    function addPoint() {
        ctx.selectedGpxFile.addWpt = true;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    const WaypointRow = () => ({point, index}) => {
        return (
            <MenuItem key={'marker' + index} divider onClick={() => showPoint(point)}>
                <ListItemText>
                    <Grid container spacing={2}>
                        <Grid item xs={1}>
                            <div className={classes.icon}
                                 dangerouslySetInnerHTML={{__html: point.layer.options.icon.options.html + ''}}/>
                        </Grid>
                        <Grid className={classes.text} item xs={11} sx={{mt: 2, mr: -4}}>
                            <Typography variant="inherit">
                                {point.layer.options.title}
                            </Typography>
                        </Grid>
                    </Grid>
                    {point.layer.options.desc && <ListItemText>
                        <Typography component={'span'} variant="body2" style={{wordWrap: "break-word"}}>
                            {showMore ? point.layer.options.desc : point.layer.options.desc.substring(0, 80)}
                            {point.layer.options.desc.length > 60 &&
                                <ListItemIcon onClick={() => setShowMore(!showMore)}>
                                    {showMore ? "...less" : "...more"}
                                </ListItemIcon>}
                        </Typography>
                    </ListItemText>}
                    <Typography variant="caption">
                        {point.layer.options.address}
                    </Typography>
                </ListItemText>
            </MenuItem>)
    }


    return (
        <Box className={styles.item} minWidth={width}>
            {ctx.createTrack && ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK &&
                <div style={{display: "flex"}}>
                    <Button sx={{mb: 2}} variant="contained" component="span"
                            style={{backgroundColor: '#fbc73a', marginLeft: "auto"}}
                            onClick={() => addPoint()}
                    >Add</Button>
                </div>}
            <div style={{maxHeight: '35vh', overflow: 'auto'}}>
                {ctx.selectedGpxFile.wpts && getPoints().map((point, index) => {
                    return WaypointRow()({point: point, index: index});
                })}
            </div>
        </Box>
    )
}