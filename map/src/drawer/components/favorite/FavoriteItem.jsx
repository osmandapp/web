import {ListItemText, MenuItem, Tooltip, Typography} from "@mui/material";
import React, {useContext} from "react";
import AppContext from "../../../context/AppContext";
import {makeStyles} from "@material-ui/core/styles";
import drawerStyles from "../../styles/DrawerStyles";


const useStyles = makeStyles({
    icon: {
        "& .icon": {
            top: '14px',
            left: '30px',
        },
        "& .background": {
            left: '0px',
            top: '2px',
            filter: "drop-shadow(0 0 0 gray)"
        }
    },
    text: {
        '& .MuiTypography-root' : {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            paddingRight: "20px"
        }
    }
})

export default function FavoriteItem({index, marker}) {

    const classes = useStyles();
    const styles = drawerStyles();

    const ctx = useContext(AppContext);

    function addFavoriteToMap(marker) {
        if (ctx.selectedFavoritesFile.markerCurrent) {
            ctx.selectedFavoritesFile.markerPrev = ctx.selectedFavoritesFile.markerCurrent;
        }
        ctx.selectedFavoritesFile.markerCurrent = marker;
        ctx.setSelectedFavoritesFile({...ctx.selectedFavoritesFile});
    }


    return <div className={styles.drawerItem}>
        <Tooltip title={marker.title} arrow>
            <MenuItem key={'marker' + index} sx={{ml: 2}} divider onClick={() => addFavoriteToMap(marker)}>
                <div className={classes.icon}
                     dangerouslySetInnerHTML={{__html: marker.icon + ''}}/>
                <ListItemText className={classes.text}>
                    <Typography variant="inherit">
                        {marker.title}
                    </Typography>
                </ListItemText>
            </MenuItem>
        </Tooltip>
    </div>
}