import {Box, Grid, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import {Folder} from "@mui/icons-material";
import React, {useContext, useEffect, useState} from "react";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import AppContext from "../../../context/AppContext";
import MarkerOptions from "../../../map/markers/MarkerOptions";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    icon: {
        "& .icon": {
            top: '35px',
            left: '543px',
            width: '40px',
            height: '40px'
        },
        "& .background": {
            left: '-25px',
            top: '-25px',
            width: '100px',
            height: '100px',
            filter: "drop-shadow(0 0 0 gray)"
        }
    }
})

const FavoriteInfoTab = ({width}) => {

    const styles = contextMenuStyles();
    const classes = useStyles();
    const ctx = useContext(AppContext);

    const [favorite, setFavorite] = useState({});

    useEffect(() => {
        if (ctx.selectedGpxFile.markerCurrent) {
            let markerName = ctx.selectedGpxFile.markerCurrent.layer.options.title;
            let wpt = ctx.selectedGpxFile.file.wpts.find(wpt => wpt.ext.name === markerName);
            if (wpt) {
                setFavorite(
                    {
                        name: wpt.ext.name,
                        comment: wpt.ext.comment,
                        address: wpt.ext.extensions.address,
                        category: wpt.ext.category,
                        background: wpt.ext.extensions.background,
                        color: wpt.ext.extensions.color,
                        icon: wpt.ext.extensions.icon,
                        lat: wpt.ext.lat,
                        lon: wpt.ext.lon,
                        time: wpt.ext.time,
                        marker: wpt.ext
                    })
            }
        }
    }, [ctx.selectedGpxFile])


    return (<Box className={styles.item} width={width}>
        <Typography className={styles.info} variant="subtitle1" color="inherit">
            <Grid container spacing={2}>
                <Grid className={styles.name} item xs={10}>
                    <Typography className={styles.name} variant="inherit">
                        {favorite.name}
                    </Typography>
                </Grid>
                {favorite?.marker && <Grid className={styles.name} item xs={2}>
                    <div className={classes.icon}
                         dangerouslySetInnerHTML={{__html: MarkerOptions.getWptIcon(favorite?.marker).options.html + ''}}/>
                </Grid>}
            </Grid>
            <MenuItem sx={{ml: -2, mt: -11}}>
                <ListItemIcon style={{color: favorite.color}} sx={{mt: 0}}>
                    <Folder fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ml: 1}} variant="inherit" noWrap>
                        {favorite.category ? favorite.category : "Favorites"}
                    </Typography>
                </ListItemText>
            </MenuItem>
            {favorite.address && <MenuItem sx={{ml: -2}}>
                <ListItemText>
                    <Typography sx={{ml: 1}} noWrap>
                        {favorite.address}
                    </Typography>
                </ListItemText>
            </MenuItem>}
        </Typography>
    </Box>);
}

export default FavoriteInfoTab;