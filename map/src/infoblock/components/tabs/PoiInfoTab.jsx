import {Box, Grid, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import AppContext from "../../../context/AppContext";
import _ from "lodash";
import {
    AccessTime,
    AlternateEmail,
    BusinessCenter, ContactPage,
    Language,
    MyLocation,
    Phone
} from "@mui/icons-material";
import PoiManager from "../../../context/PoiManager";

const useStyles = makeStyles({
    icon: {
        "& .icon": {
            width: '40px',
            height: '40px',
            top: '20px',
            left: '21px'
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

export default function PoiInfoTab({width}) {

    const styles = contextMenuStyles();
    const classes = useStyles();
    const ctx = useContext(AppContext);

    const [poi, setPoi] = useState({});
    const [poiData, setPoiData] = useState({});

    useEffect(() => {
        const currentPoi = ctx.selectedGpxFile.poi;
        if (currentPoi && !_.isEqual(currentPoi, poiData)) {
            setPoiData(currentPoi);
            const {options: poiOptions, latlng} = currentPoi;
            setPoi({
                name: poiOptions.title ? poiOptions.title : PoiManager.formattingPoiType(poiOptions.poiType),
                icon: poiOptions.icon.options.html,
                latlon: latlng,
                subType: poiOptions.subType,
                poiType: PoiManager.formattingPoiType(poiOptions.typeOsmValue),
                operator: poiOptions.operator,
                website: poiOptions.website,
                opening_hours: poiOptions.opening_hours,
                email: poiOptions.email,
                phone: poiOptions.phone,
                facebook: poiOptions.facebook,
                instagram: poiOptions.instagram
            })
        }
    }, [ctx.selectedGpxFile])

    return (
        <Box className={styles.item} maxWidth={width}>
            <Typography sx={{position: "relative"}} className={styles.info} variant="subtitle1" color="inherit">
                <Grid container spacing={2}>
                    <Grid className={styles.name} item xs={10}>
                        <Typography className={styles.name} variant="inherit">
                            {poi.name ? poi.poiType + ": " + poi.name : poi.poiType}
                        </Typography>
                    </Grid>
                    <Grid className={styles.name} sx={{position: "relative"}} item xs={2}>
                        <div className={classes.icon}
                             dangerouslySetInnerHTML={{__html: poi.icon + ''}}/>
                    </Grid>
                </Grid>
                <Grid container sx={{mt: -6}}>
                    {poi.latlon && <MenuItem sx={{ml: -2, mt: -1}}>
                        <ListItemIcon>
                            <MyLocation fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText>
                            <Typography sx={{ml: 1}} variant="inherit" noWrap>
                                {poi.latlon.lat.toFixed(6) + "  " + poi.latlon.lng.toFixed(6)}
                            </Typography>
                        </ListItemText>
                    </MenuItem>}
                </Grid>
                {poi.operator && <MenuItem sx={{ml: -2, mt: -1}}>
                    <ListItemIcon>
                        <BusinessCenter fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography sx={{ml: 1}} variant="inherit" noWrap>
                            {poi.operator}
                        </Typography>
                    </ListItemText>
                </MenuItem>}
                {poi.opening_hours && <MenuItem sx={{ml: -2, mt: -1}}>
                    <ListItemIcon>
                        <AccessTime fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography sx={{ml: 1}} variant="inherit" noWrap>
                            {poi.opening_hours}
                        </Typography>
                    </ListItemText>
                </MenuItem>}
                {poi.website && <MenuItem sx={{ml: -2, mt: -1}}>
                    <ListItemIcon>
                        <Language fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography sx={{ml: 1}} variant="inherit" noWrap>
                            {poi.website}
                        </Typography>
                    </ListItemText>
                </MenuItem>}
                {poi.email && <MenuItem sx={{ml: -2, mt: -1}}>
                    <ListItemIcon>
                        <AlternateEmail fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography sx={{ml: 1}} variant="inherit" noWrap>
                            {poi.email}
                        </Typography>
                    </ListItemText>
                </MenuItem>}
                {poi.phone && <MenuItem sx={{ml: -2, mt: -1}}>
                    <ListItemIcon>
                        <Phone fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography sx={{ml: 1}} variant="inherit" noWrap>
                            {poi.phone}
                        </Typography>
                    </ListItemText>
                </MenuItem>}
                {poi.facebook && <MenuItem sx={{ml: -2, mt: -1}}>
                    <ListItemIcon>
                        <ContactPage fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography sx={{ml: 1}} variant="inherit" noWrap>
                            {poi.facebook}
                        </Typography>
                    </ListItemText>
                </MenuItem>}
                {poi.instagram && <MenuItem sx={{ml: -2, mt: -1}}>
                    <ListItemIcon>
                        <ContactPage fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography sx={{ml: 1}} variant="inherit" noWrap>
                            {poi.instagram}
                        </Typography>
                    </ListItemText>
                </MenuItem>}
            </Typography>
        </Box>);
}
