import {makeStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    Collapse,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography
} from "@mui/material";
import {Close, ExpandLess, ExpandMore, Map, MoreVert} from "@mui/icons-material";
import React, {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import axios from "axios";
import PopperMenu from "./PopperMenu";

export default function GpxCollection() {

    const ctx = useContext(AppContext);

    const anchorEl = React.useRef(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };


    const downloadObf = async () => {
        await axios({
            url: `${process.env.REACT_APP_GPX_API}/mapapi/download-obf`,
            method: 'post',
            data: ctx.gpxCollection,
        }).then((resp) => {
            const url = document.createElement('a');
            url.href = URL.createObjectURL(new Blob([resp.data]));
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
            <MenuItem key={'filename' + index} divider>
                <ListItemText inset>
                    <Typography variant="inherit" noWrap>
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
                {!ctx.createTrack && ctx.gpxCollection.length > 0 &&
                    <MenuItem onClick={(e) => {
                        downloadObf();
                        e.stopPropagation();
                    }}>
                        Get OBF
                    </MenuItem>
                }
                {ctx.localTracks.length !== 0 && <MenuItem onClick={(e) => {
                    clearCollection();
                    e.stopPropagation();
                }}>Clear</MenuItem>}
            </div>
        )
    }

    return <div>
        <MenuItem sx={{ml: 3}} divider onClick={() => setOpenMenu(!openMenu)}>
            <ListItemIcon>
                <Map fontSize="small"/>
            </ListItemIcon>
            <ListItemText> Gpx Collection </ListItemText>
            <Typography variant="body2" color="textSecondary">
                {ctx.gpxCollection.length > 0 ? `${ctx.gpxCollection.length}` : ''}
            </Typography>
            <IconButton
                variant="contained"
                type="button"
                ref={anchorEl}
                onClick={(e) => {
                    handleToggle();
                    e.stopPropagation();
                }}
            >
                <MoreVert fontSize="small"/>
            </IconButton>
            <Box>
                <PopperMenu anchorEl={anchorEl} open={open} setOpen={setOpen} Buttons={Buttons}/>
            </Box>
            {open ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={openMenu} timeout="auto" unmountOnExit>
            <div style={{maxHeight: '25vh', overflow: 'auto'}}>
                {ctx.gpxCollection.length > 0 && ctx.gpxCollection.map((point, index) => {
                    return CollectionRow()({point: point, index: index});
                })}
            </div>
        </Collapse>
    </div>

}


