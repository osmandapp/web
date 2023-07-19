import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Autocomplete, Grid, IconButton, ListItemIcon, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Close } from '@mui/icons-material';
import { Checkbox, FormControlLabel, MenuItem } from '@mui/material/';
import AppContext from '../../../context/AppContext';
import MarkerOptions from '../../../map/markers/MarkerOptions';
import { makeStyles } from '@material-ui/core/styles';
import drawerStyles from '../../styles/DrawerStyles';
import PoiManager from '../../../context/PoiManager';
import _ from 'lodash';

const useStyles = makeStyles({
    icon: {
        '& .icon': {
            left: '11px',
            top: '14px',
            width: '20px',
            height: '20px',
            position: 'absolute',
        },
        '& .background': {
            top: '3px',
            width: '50px',
            height: '50px',
            filter: 'drop-shadow(0 0 0 gray)',
        },
    },
});

export default function PoiTypesDialog({ dialogOpen, setDialogOpen }) {
    const ctx = useContext(AppContext);

    const classes = useStyles();
    const styles = drawerStyles();

    const MIN_SIZE_SEARCH_VALUE = 3;

    const [poiTypesResult, setPoiTypesResult] = useState([]);
    const [searchText, setSearchText] = useState(null);
    const [searchOptions, setSearchOptions] = useState([]);
    const [searchError, setSearchError] = useState('');

    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    useEffect(() => {
        if (!_.isEmpty(poiTypesResult)) {
            setSearchOptions(Object.keys(poiTypesResult));
        } else {
            let categories = removeUnusedPoiCategories(Object.keys(ctx.poiCategory.categories));
            setSearchOptions(categories);
        }
    }, [poiTypesResult]);

    function showPoiCategoriesOnMap(category) {
        if (category) {
            if (ctx.showPoiCategories.includes(category)) {
                setSearchError(`This category is already selected!`);
            } else {
                const categories = ctx.showPoiCategories;
                categories.push(category);
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
                setPoiTypesResult({ ...searchResult });
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

    function removeUnusedPoiCategories(categories) {
        return categories.filter((category) => category !== 'user_defined_other' && category !== 'osmwiki');
    }

    function removeUnusedFilters(filters) {
        filters = filters.filter((f) => f !== 'routes');
        return filters;
    }

    function getLabel(category) {
        const poiFilter = Object.keys(PoiManager.poiFilters).find(
            (name) => PoiManager.poiFilters[name][0] === category
        );
        if (poiFilter) {
            return PoiManager.poiFilters[`${poiFilter}`].length > 1
                ? PoiManager.poiFilters[`${poiFilter}`][1]
                : PoiManager.poiFilters[`${poiFilter}`][0];
        }
        return category;
    }

    return (
        <Dialog open={dialogOpen} onClose={toggleShowDialog}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <DialogTitle>Show POI</DialogTitle>
                </Grid>
                <Grid item xs={2}>
                    <IconButton
                        sx={{ mt: '15px', ml: '25px' }}
                        variant="contained"
                        type="button"
                        onClick={toggleShowDialog}
                    >
                        <Close fontSize="small" />
                    </IconButton>
                </Grid>
            </Grid>
            <DialogContent>
                <Autocomplete
                    onChange={(event, newValue, reason) => {
                        if (reason === 'clear') {
                            setSearchOptions(Object.keys(ctx.poiCategory.categories));
                        }
                        showPoiCategoriesOnMap(PoiManager.formattingPoiType(newValue));
                    }}
                    renderInput={(params) => (
                        <TextField
                            style={{ marginBottom: '7px' }}
                            value={searchText}
                            onChange={(e) => {
                                setSearchError('');
                                if (e.target.value === '') {
                                    setSearchOptions(Object.keys(ctx.poiCategory.categories));
                                }
                                setSearchText(e.target.value);
                                searchPoiCategory(e.target.value).then();
                            }}
                            {...params}
                            label="Search poi category"
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
                    renderOption={(props, option) => (
                        <div key={option + 'menu'} className={styles.drawerItem}>
                            <MenuItem {...props}>
                                <ListItemIcon sx={{ mr: '-15px' }}>
                                    <div className={classes.icon}>
                                        <svg
                                            className="background"
                                            viewBox="0 0 48 48"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="24" cy="24" r="12" fill="#f8931d" />
                                        </svg>
                                        <img
                                            className="icon"
                                            alt={option}
                                            src={`/map/images/${MarkerOptions.POI_ICONS_FOLDER}/mx_${getIcon(
                                                option
                                            )}.svg`}
                                        />
                                    </div>
                                </ListItemIcon>
                                {PoiManager.formattingPoiType(option)}
                            </MenuItem>
                        </div>
                    )}
                />
                <div style={{ marginLeft: '2px', marginBottom: '10px' }}>
                    {ctx.showPoiCategories.map((category, index) => (
                        <FormControlLabel
                            key={index + 'subType'}
                            control={
                                <Checkbox
                                    checked={ctx.showPoiCategories.includes(category)}
                                    onChange={() => handleChange(category)}
                                />
                            }
                            label={getLabel(category)}
                        />
                    ))}
                </div>
                <Grid container spacing={2}>
                    {removeUnusedFilters(ctx.poiCategory?.filters).map((item, key) => (
                        <Grid
                            style={{ marginLeft: '-7px' }}
                            item
                            key={key + 'column'}
                            xs={6}
                            className={styles.drawerItem}
                        >
                            <MenuItem
                                style={{ marginTop: '-15px', fontSize: '0.9rem' }}
                                key={key + 'type'}
                                onClick={() => showPoiCategoriesOnMap(PoiManager.formattingPoiFilter(item, false))}
                            >
                                <ListItemIcon sx={{ mr: '-15px' }}>
                                    <div className={classes.icon}>
                                        <svg
                                            className="background"
                                            viewBox="0 0 48 48"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="24" cy="24" r="12" fill="#f8931d" />
                                        </svg>
                                        <img
                                            className="icon"
                                            alt={item}
                                            src={`/map/images/${
                                                MarkerOptions.POI_ICONS_FOLDER
                                            }/mx_${PoiManager.preparePoiFilterIcon(item)}.svg`}
                                        />
                                    </div>
                                </ListItemIcon>
                                {PoiManager.formattingPoiFilter(item, true)}
                            </MenuItem>
                        </Grid>
                    ))}
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
