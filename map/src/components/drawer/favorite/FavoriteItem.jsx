import {ListItemText, MenuItem} from "@mui/material";
import React, {useContext} from "react";
import AppContext from "../../../context/AppContext";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    icon: {
        "& .icon": {
            top: '22px',
           left: '30px',
        },
        "& .background": {
            left: '0px',
            top: '2px',
            filter: "drop-shadow(0 0 0 gray)"
        }
    },
    text: {
        textOverflow: "clip !important",
        wordWrap: 'normal !important',
        '& li': {
            whiteSpace: "normal"
        }
    },
})

export default function FavoriteItem({index, marker}) {

    const classes = useStyles();

    const ctx = useContext(AppContext);

    function addFavoriteToMap(marker) {
        if (ctx.favorites.visibleMarker.current) {
            ctx.favorites.visibleMarker.prev = ctx.favorites.visibleMarker.current;
        }
        ctx.favorites.visibleMarker.current = marker;
        ctx.setFavorites({...ctx.favorites});
    }


    return <div className={classes.text}>
        <MenuItem key={'marker' + index} sx={{ml: -1}} divider onClick={() => addFavoriteToMap(marker)}>
            <div className={classes.icon} dangerouslySetInnerHTML={{__html: marker.options.icon.options.html + ''}}/>
            <ListItemText> {marker.options.title} </ListItemText>
        </MenuItem>
        </div>
}