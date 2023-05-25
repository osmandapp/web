import {Dialog} from "@material-ui/core";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {
    Autocomplete,
    Button,
    Grid,
    IconButton,
    ListItemIcon,
    TextField
} from "@mui/material";
import React, {useContext, useState} from "react";
import {Close, Search} from "@mui/icons-material";
import {Checkbox, FormControlLabel, MenuItem} from "@mui/material/";
import AppContext from "../context/AppContext";
import MarkerOptions from "../map/markers/MarkerOptions";
import {makeStyles} from "@material-ui/core/styles";
import drawerStyles from "./styles/DrawerStyles";
import _ from "lodash";
import PoiManager from "../context/PoiManager";
import icons from "../generated/poiicons.json"

const useStyles = makeStyles({
    icon: {
        "& .icon": {
            left: '11px',
            top: '14px',
            width: '20px',
            height: '20px',
            position: 'absolute'
        },
        "& .background": {
            top: '3px',
            width: '50px',
            height: '50px',
            filter: "drop-shadow(0 0 0 gray)"
        }
    }
})

export default function PoiTypesDialog({dialogOpen, setDialogOpen}) {

    const ctx = useContext(AppContext);

    const classes = useStyles();
    const styles = drawerStyles();

    const MIN_SIZE_SEARCH_VALUE = 2;

    const [selectedPoiCategory, setSelectedPoiCategory] = useState(null);
    const [poiTypesResult, setPoiTypesResult] = useState([]);
    const [searchText, setSearchText] = useState(null);
    const [searchOptions, setSearchOptions] = useState([]);

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    function showPoiCategoriesOnMap() {
        if (selectedPoiCategory) {
            const categories = ctx.showPoiCategories;
            categories.push(selectedPoiCategory);
            ctx.setShowPoiCategories([...categories]);
            setDialogOpen(false);
        }
    }

    function getPoiTypes() {
        if (ctx.poiCategory && !_.isEmpty(ctx.poiCategory)) {
            let res = [];
            Object.keys(ctx.poiCategory).forEach(category => {
                const types = ctx.poiCategory[category];
                types.forEach(type => {
                    if (!ctx.showPoiCategories.includes(type)) {
                        res[`${type}`] = getPoiTypeIcon(type);
                    }
                })
            })
            return res;
        }
    }

    function getPoiTypeIcon(type) {
        const category = Object.keys(ctx.poiCategory).find(category => ctx.poiCategory[category].includes(type));
        if (icons.includes(`mx_${category}_${type}.svg`)) {
            return `${category}_${type}`;
        } else if (icons.includes(`mx_${type}.svg`)) {
            return type;
        } else {
            return PoiManager.DEFAULT_POI_ICON;
        }
    }

    function handleChange(category) {
        if (ctx.showPoiCategories?.includes(category)) {
            ctx.showPoiCategories.splice(ctx.showPoiCategories.indexOf(category), 1);
            ctx.setShowPoiCategories([...ctx.showPoiCategories]);
        }
    }

    async function searchPoiCategory(value) {
        if (value.length >= MIN_SIZE_SEARCH_VALUE) {
            const searchResult = await PoiManager.searchPoiCategories(value);
            if (searchResult) {
                setPoiTypesResult(searchResult);
                setSearchOptions(Object.keys(poiTypesResult));
            }
        } else {
            setPoiTypesResult(null);
        }
    }

    function getIcon(option) {
        if (poiTypesResult[option]) {
            option = poiTypesResult[option];
            return PoiManager.getIconNameForPoiType(option.keyName, option.osmTag, option.osmValue, option.iconName);
        }
        return option;
    }

    function getPoiTypesByCategory(newValue) {
        const category = newValue?.toLowerCase();
        if (ctx.poiCategory[category]) {
            console.log(ctx.poiCategory[category])
            setPoiTypesResult(ctx.poiCategory[category]);
            setSearchOptions(ctx.poiCategory[category]);
        }
    }

    return (
        <Dialog open={dialogOpen} onClose={toggleShowDialog}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <DialogTitle>Show POI</DialogTitle>
                </Grid>
                <Grid item xs={2}>
                    <IconButton sx={{mt: '15px', ml: '25px'}}
                                variant="contained"
                                type="button"
                                onClick={toggleShowDialog}
                    >
                        <Close fontSize="small"/>
                    </IconButton>
                </Grid>
            </Grid>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Autocomplete
                            value={selectedPoiCategory}
                            onChange={(event, newValue) => {
                                setSelectedPoiCategory(newValue);
                                getPoiTypesByCategory(newValue);
                            }}
                            renderInput={params => (
                                <TextField
                                    value={searchText}
                                    onChange={e => {
                                        setSearchText(e.target.value);
                                        searchPoiCategory(e.target.value).then();
                                    }}
                                    {...params}
                                    label="label"
                                    variant="outlined"
                                    fullWidth

                                />
                            )}
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            id="category"
                            options={searchOptions}
                            renderOption={(props, option) =>
                                <div className={styles.drawerItem}>
                                    <MenuItem key={option + "menu"} {...props}>
                                        <ListItemIcon sx={{mr: '-15px'}}>
                                            <div className={classes.icon}>
                                                <svg className="background" viewBox="0 0 48 48"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="24" cy="24" r="12" fill="#f8931d"/>
                                                </svg>
                                                <img className="icon"
                                                     src={`/map/images/${MarkerOptions.POI_ICONS_FOLDER}/mx_${getIcon(option)}.svg`}/>
                                            </div>
                                        </ListItemIcon>
                                        {option}
                                    </MenuItem>
                                </div>}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton sx={{mt: '5px'}} type="button" aria-label="search">
                            <Search onClick={showPoiCategoriesOnMap}/>
                        </IconButton>
                    </Grid>
                    <div style={{marginLeft: '15px'}}>
                        {ctx.showPoiCategories.map((category, index) =>
                            <FormControlLabel
                                key={index + "subType"}
                                control={<Checkbox checked={ctx.showPoiCategories.includes(category)}
                                                   onChange={() => handleChange(category)}/>}
                                label={`${category}`}
                            />)}
                    </div>
                </Grid>
                <Grid container spacing={2}>
                    {Object.keys(ctx.poiCategory).map((item, key) =>
                        <Grid item key={key + "column"} xs={6} className={styles.drawerItem}>
                            <MenuItem key={key + "type"}
                                      onClick={() => {
                                          setSelectedPoiCategory(item)
                                      }}
                            >
                                <ListItemIcon sx={{mr: '-15px'}}>
                                    <div className={classes.icon}>
                                        <svg className="background" viewBox="0 0 48 48"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="24" cy="24" r="12" fill="#f8931d"/>
                                        </svg>
                                        <img className="icon"
                                             src={`/map/images/${MarkerOptions.POI_ICONS_FOLDER}/mx_${item}.svg`}/>
                                    </div>
                                </ListItemIcon>
                                {item}</MenuItem>
                        </Grid>)}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleShowDialog}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}