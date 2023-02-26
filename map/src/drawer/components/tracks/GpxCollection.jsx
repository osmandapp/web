import {
    Box,
    Button,
    Collapse, Grid,
    IconButton, LinearProgress,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography
} from "@mui/material";
import {Close, ExpandLess, ExpandMore, RouteOutlined} from "@mui/icons-material";
import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import axios from "axios";
import PopperMenu from "./PopperMenu";
import drawerStyles from "../../styles/DrawerStyles";

export default function GpxCollection() {

    const ctx = useContext(AppContext);
    const styles = drawerStyles();

    const anchorEl = React.useRef(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [open, setOpen] = useState(false);
    const [processDownload, setProcessDownload] = useState(false);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };


    const downloadObf = async () => {
        setProcessDownload(true);
        await axios({
            url: `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-obf`,
            method: 'post',
            data: ctx.gpxCollection,
            responseType: 'blob',
        }).then((resp) => {
            setProcessDownload(false)
            const url = document.createElement('a');
            url.href = URL.createObjectURL(resp.data);
            url.download = `OsmAndCollection.obf`;
            url.click();
        })
    }

    function deleteFile(index) {
        ctx.gpxCollection.splice(index, 1);
        ctx.setGpxCollection([...ctx.gpxCollection]);
    }

    function clearCollection() {
        ctx.gpxCollection = [];
        ctx.setGpxCollection([...ctx.gpxCollection]);
    }

    const CollectionRow = () => ({point, index}) => {
        return (
            <MenuItem sx={{ml: 3}} key={'filename' + index} divider>
                <ListItemText inset>
                    <Typography sx={{ml: -4}} variant="inherit" noWrap>
                        {point}
                    </Typography>
                </ListItemText>
                <IconButton
                    variant="contained"
                    type="button"
                    onClick={() => deleteFile(index)}
                >
                    <Close fontSize="small"/>
                </IconButton>
            </MenuItem>)
    }

    const Buttons = () => {
        return (
            <div>
                {ctx.localTracks.length !== 0 && <MenuItem onClick={(e) => {
                    clearCollection();
                    e.stopPropagation();
                }}>Clear</MenuItem>}
            </div>
        )
    }

    return <div>
        {processDownload ? <LinearProgress/> : <></>}
        <MenuItem sx={{ml: 3}} divider onClick={() => setOpenMenu(!openMenu)}>
            <ListItemIcon>
                <RouteOutlined fontSize="small"/>
            </ListItemIcon>
            <ListItemText> Gpx Collection </ListItemText>
            <Button
                sx={{borderRadius: 28, minWidth: '30px !important'}}
                size="small"
                ref={anchorEl}
                onClick={(e) => {
                    handleToggle();
                    e.stopPropagation();
                }}
            >
                <Typography variant="body2" color="textSecondary">
                    {ctx.gpxCollection.length > 0 ? `${ctx.gpxCollection.length}` : ''}
                </Typography>
            </Button>
            <Box>
                <PopperMenu anchorEl={anchorEl} open={open} setOpen={setOpen} Buttons={Buttons}/>
            </Box>
            {open ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={openMenu} timeout="auto" unmountOnExit>
            <div style={{maxHeight: '23vh', overflow: 'auto'}}>
                {ctx.gpxCollection.length > 0 && ctx.gpxCollection.map((point, index) => {
                    return CollectionRow()({point: point, index: index});
                })}
            </div>
            <MenuItem disableRipple={true}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {!ctx.createTrack && ctx.gpxCollection.length > 0 &&
                            <Button sx={{ml: 3}} className={styles.button} variant="contained" component="span"
                                    onClick={downloadObf}>
                                Get OBF
                            </Button>}
                    </Grid>
                </Grid>
            </MenuItem>
        </Collapse>
    </div>

}


