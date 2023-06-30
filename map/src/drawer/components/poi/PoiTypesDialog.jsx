import {Dialog} from "@material-ui/core";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {
    Autocomplete,
    Grid,
    IconButton,
    ListItemIcon,
    TextField
} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import {Close, Search} from "@mui/icons-material";
import {Checkbox, FormControlLabel, MenuItem} from "@mui/material/";
import AppContext from "../../../context/AppContext";
import MarkerOptions from "../../../map/markers/MarkerOptions";
import {makeStyles} from "@material-ui/core/styles";
import drawerStyles from "../../styles/DrawerStyles";
import PoiManager from "../../../context/PoiManager";
import _ from "lodash";

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

    const MIN_SIZE_SEARCH_VALUE = 3;

    const [selectedPoiCategory, setSelectedPoiCategory] = useState(null);
    const [poiTypesResult, setPoiTypesResult] = useState([]);
    const [searchText, setSearchText] = useState(null);
    const [searchOptions, setSearchOptions] = useState([]);
    const [searchError, setSearchError] = useState('');


    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    useEffect(() => {
        if (selectedPoiCategory) {
            getPoiTypesByCategory(selectedPoiCategory);
        }
    }, [selectedPoiCategory]);

    useEffect(() => {
        if (!_.isEmpty(poiTypesResult)) {
            setSearchOptions(Object.keys(poiTypesResult));
        } else {
            let categories = removeUnusedPoiCategories(Object.keys(ctx.poiCategory.categories));
            setSearchOptions(categories);
        }
    }, [poiTypesResult]);

    function showPoiCategoriesOnMap(category) {
        const selectedCategory = category ? category : selectedPoiCategory;
        if (selectedCategory) {
            if (ctx.showPoiCategories.includes(selectedCategory)) {
                setSearchError(`This category is already selected!`)
            } else {
                const categories = ctx.showPoiCategories;
                categories.push(selectedCategory);
                ctx.setShowPoiCategories([...categories]);
                setDialogOpen(false);
            }
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
            let searchResult = await PoiManager.searchPoiCategories(value);
            if (searchResult) {
                setPoiTypesResult({...searchResult});
            }
        } else {
            setPoiTypesResult(null);
        }
    }

    function getIcon(option) {
        if (poiTypesResult && option && poiTypesResult[option]) {
            option = poiTypesResult[option];
            return PoiManager.getIconNameForPoiType(option.keyName, option.osmTag, option.osmValue, option.iconName);
        } else {
            return PoiManager.getIconNameForPoiType(option);
        }
    }

    function getPoiTypesByCategory(newValue) {
        const category = newValue?.toLowerCase();
        if (ctx.poiCategory.categories[category]) {
            setSearchOptions(ctx.poiCategory.categories[category]);
        }
    }

    function removeUnusedPoiCategories(categories) {
        return categories.filter(category => category !== 'user_defined_other' && category !== 'osmwiki')
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
                <Autocomplete
                    value={selectedPoiCategory}
                    onChange={(event, newValue, reason) => {
                        if (reason === 'clear') {
                            setSearchOptions(Object.keys(ctx.poiCategory.categories));
                        }
                        showPoiCategoriesOnMap(PoiManager.formattingPoiType(newValue));
                    }}
                    renderInput={params => (
                        <TextField
                            value={searchText}
                            onChange={e => {
                                setSearchError('');
                                if (e.target.value === '') {
                                    setSearchOptions(Object.keys(ctx.poiCategory.categories));
                                }
                                setSearchText(e.target.value);
                                searchPoiCategory(e.target.value).then();
                            }}
                            {...params}
                            label="Search"
                            variant="outlined"
                            helperText={searchError ? searchError : ''}
                            fullWidth

                        />
                    )}
                    isOptionEqualToValue={(option, value) => option.value === value.value}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="category"
                    options={searchOptions}
                    renderOption={(props, option) =>
                        <div key={option + "menu"} className={styles.drawerItem}>
                            <MenuItem {...props}>
                                <ListItemIcon sx={{mr: '-15px'}}>
                                    <div className={classes.icon}>
                                        <svg className="background" viewBox="0 0 48 48"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="24" cy="24" r="12" fill="#f8931d"/>
                                        </svg>
                                        <img className="icon"
                                             alt={option}
                                             src={`/map/images/${MarkerOptions.POI_ICONS_FOLDER}/mx_${getIcon(option)}.svg`}/>
                                    </div>
                                </ListItemIcon>
                                {PoiManager.formattingPoiType(option)}
                            </MenuItem>
                        </div>}
                />
                <div style={{marginLeft: '2px', marginBottom: '10px'}}>
                    {ctx.showPoiCategories.map((category, index) =>
                        <FormControlLabel
                            key={index + "subType"}
                            control={<Checkbox checked={ctx.showPoiCategories.includes(category)}
                                               onChange={() => handleChange(category)}/>}
                            label={`${category}`}
                        />)}
                </div>
                <Grid container spacing={2}>
                    {ctx.poiCategory?.filters.map((item, key) =>
                        <Grid style={{marginLeft: '-7px'}} item key={key + "column"} xs={6}
                              className={styles.drawerItem}>
                            <MenuItem style={{marginTop: '-15px'}} key={key + "type"}
                                      onClick={() => showPoiCategoriesOnMap(PoiManager.formattingPoiType(item))}
                            >
                                <ListItemIcon sx={{mr: '-15px'}}>
                                    <div className={classes.icon}>
                                        <svg className="background" viewBox="0 0 48 48"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="24" cy="24" r="12" fill="#f8931d"/>
                                        </svg>
                                        <img className="icon"
                                             alt={item}
                                             src={`/map/images/${MarkerOptions.POI_ICONS_FOLDER}/mx_${PoiManager.formattingPoiFilter(item)}.svg`}/>
                                    </div>
                                </ListItemIcon>
                                {PoiManager.formattingPoiType(item)}
                            </MenuItem>
                        </Grid>)}
                </Grid>
            </DialogContent>
        </Dialog>
    );
}