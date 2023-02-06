import {makeStyles} from "@material-ui/core/styles";
import {
    Button,
    Collapse,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography
} from "@mui/material";
import {Close, ExpandLess, ExpandMore, Map} from "@mui/icons-material";
import {useContext, useState} from "react";
import AppContext from "../../../context/AppContext";
import drawerStyles from "../../styles/DrawerStyles";

const useStyles = makeStyles({
    group: {
        '& .MuiMenuItem-root': {
            minHeight: '50px !important',
            maxHeight: '50px !important',
        }
    }
})
export default function GpxCollection() {

    const classes = useStyles();
    const styles = drawerStyles();

    const ctx = useContext(AppContext);

    const [open, setOpen] = useState(false);


    async function downloadObf() {
    }

    function deleteFile(index) {
        ctx.gpxCollection.splice(index, 1);
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

    return <div className={classes.group}>
        <MenuItem sx={{ml: 3}} divider onClick={() => setOpen(!open)}>
            <ListItemIcon>
                <Map fontSize="small"/>
            </ListItemIcon>
            <ListItemText> Gpx Collection </ListItemText>
            <Typography variant="body2" color="textSecondary">
                {ctx.gpxCollection.length > 0 ? `${ctx.gpxCollection.length}` : ''}
            </Typography>
            {open ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <div style={{maxHeight: '25vh', overflow: 'auto'}}>
                {ctx.gpxCollection.length > 0 && ctx.gpxCollection.map((point, index) => {
                    return CollectionRow()({point: point, index: index});
                })}
            </div>
            {!ctx.createTrack && ctx.gpxCollection.length > 0 &&
                    <Button className={styles.button} variant="contained" component="span" sx={{ml: 5, mt: 1}}
                        onClick={downloadObf}>
                    Get OBF
                </Button>
            }

        </Collapse>
    </div>

}


