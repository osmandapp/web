import {Dialog} from "@material-ui/core";
import {Close, Delete, Folder, History} from "@mui/icons-material";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Grid,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Tab,
    TextField,
    Typography
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import React, {useContext, useEffect, useState} from "react";
import contextMenuStyles from "../styles/ContextMenuStyles";
import AppContext from "../../context/AppContext";
import TracksManager from "../../context/TracksManager";
import MarkerOptions from "../../map/markers/MarkerOptions";
import {makeStyles} from "@material-ui/core/styles";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import Paper from "@mui/material/Paper";
import DeleteFavoriteDialog from "./DeleteFavoriteDialog";

const useStyles = makeStyles({
    shape: {
        "& .background": {
            left: '-30px',
            top: '2px',
            width: '80px',
            height: '80px',
            filter: "drop-shadow(0 0 0 gray)"
        },
        "& .icon": {
            left: '14px',
            top: '13px',
            width: '25px',
            height: '25px'
        }
    },
    background: {
        "& .background": {
            left: '-20px',
            top: '2px',
            width: '80px',
            height: '80px',
            filter: "drop-shadow(0 0 0 gray)"
        },
    }
})


export default function EditFavoriteDialog({favorite, editFavoritesDialogOpen, setEditFavoritesDialogOpen,
                                               deleteFavoritesDialogOpen, setDeleteFavoritesDialogOpen}) {

    const styles = contextMenuStyles();
    const ctx = useContext(AppContext);
    const classes = useStyles();

    const DEFAULT_TAB_ICONS = "used";

    const [favoriteName, setFavoriteName] = useState(favorite.name);
    const [favoriteAddress, setFavoriteAddress] = useState(favorite.address);
    const [favoriteDescription, setFavoriteDescription] = useState(favorite.desc);
    const [favoriteGroup, setFavoriteGroup] = useState(null);
    const [favoriteColor, setFavoriteColor] = useState(favorite.color);
    const [favoriteShape, setFavoriteShape] = useState(favorite.background);
    const [favoriteIcon, setFavoriteIcon] = useState(favorite.icon);
    const [favoriteCategories, setFavoriteCategories] = useState(null);
    const [currentFavoriteCategories, setCurrentFavoriteCategories] = useState(null);

    const toggleDeleteFavoritesDialogOpen = () => {
        setDeleteFavoritesDialogOpen(!deleteFavoritesDialogOpen);
    };

    useEffect(() => {
        getPoiCategories().then();
    }, [editFavoritesDialogOpen]);

    const EditName = () => {
        return (<ListItemText>
                <TextField
                    className={styles.favouriteLineInfo}
                    id="name"
                    label="Name"
                    fullWidth
                    onChange={(e) => setFavoriteName(e.target.value)}
                    value={favoriteName}
                    autoFocus={true}
                    error={favoriteName === ""}
                    helperText={favoriteName === "" ? 'Empty name!' : ' '}
                />
            </ListItemText>
        )
    }

    const EditAddress = () => {
        return (<ListItemText>
                <TextField
                    className={styles.favouriteLineInfo}
                    id="address"
                    label="Address"
                    fullWidth
                    onChange={(e) => setFavoriteAddress(e.target.value)}
                    value={favoriteAddress}
                    autoFocus={true}
                />
                <IconButton
                    variant="contained"
                    type="button"
                    onClick={() => setFavoriteAddress('')}
                >
                    <Delete fontSize="small"/>
                </IconButton>
            </ListItemText>
        )
    }

    const EditDescription = () => {
        return (<ListItemText sx={{mt: 3}}>
                <TextField
                    className={styles.favouriteLineInfo}
                    id="desc"
                    label="Description"
                    fullWidth
                    onChange={(e) => setFavoriteDescription(e.target.value)}
                    value={favoriteDescription}
                    autoFocus={true}
                    multiline
                    rows={2}
                />
                <IconButton
                    variant="contained"
                    type="button"
                    onClick={() => setFavoriteDescription('')}
                >
                    <Delete fontSize="small"/>
                </IconButton>
            </ListItemText>
        )
    }

    const FavoriteGroupItem = ({group}) => {
        let g = group.pointsGroups[group.name === 'favorites' ? "" : group.name];
        let colorGroup = g && g.color;
        let size = g && g.points.length;
        return <Box
            sx={{
                width: 110,
                height: 50,
                border: 1,
                borderColor: "#c1c1c1",
                paddingLeft: 1
            }}>
            <Grid container>
                <Grid item container xs={3}>
                    <ListItemIcon style={{color: colorGroup}}>
                        <Folder fontSize="small"/>
                    </ListItemIcon>
                </Grid>
                <Grid item container xs={2} sx={{mt: -0.5}}>
                    <ListItemText>
                        <Typography variant="inherit" noWrap>
                            {size}
                        </Typography>
                    </ListItemText>
                </Grid>
                <Grid item container xs={10}>
                    <ListItemText>
                        <Typography variant="inherit" noWrap>
                            {group.name}
                        </Typography>
                    </ListItemText>
                </Grid>
            </Grid>
        </Box>
    }

    const EditGroup = () => {
        let groupList = [];
        ctx.favorites.groups.forEach(group => {
            if (group.name === favorite.category) {
                groupList.unshift(group);
            } else {
                groupList.push(group);
            }
        })

        return (<>
                <ListItemText>
                    <Typography variant="inherit" noWrap>
                        Select group
                    </Typography>
                </ListItemText>
                <Box
                    sx={{
                        display: "flex",
                        width: 450,
                        overflow: "hidden",
                        overflowX: "scroll",
                    }}
                >
                    {groupList?.map((group, index) => {
                        return <ListItem key={index} component="div" disablePadding>
                            <ListItemButton
                                selected={favoriteGroup === group || (favoriteGroup === null && group.name === favorite.category)}
                                onClick={() => setFavoriteGroup(group)}
                            >
                                <FavoriteGroupItem key={group + index}
                                                   index={index}
                                                   group={group}/>
                            </ListItemButton>
                        </ListItem>;
                    })}

                </Box>
            </>
        );
    }

    const EditIcon = () => {
        const [value, setValue] = useState(DEFAULT_TAB_ICONS);
        const [selectFavoriteIcon, setSelectFavoriteIcon] = useState(false);
        let tabs = {};
        let list = [];

        favoriteCategories && Object.entries(favoriteCategories.categories).map((category, index) => {
            tabs[category[0]] = <ListIcons
                key={category[0]}
                icons={category[1].icons}
                selectFavoriteIcon={selectFavoriteIcon}
                setSelectFavoriteIcon={setSelectFavoriteIcon}/>;
        })

        tabs[DEFAULT_TAB_ICONS] = getTabUsedIcons(selectFavoriteIcon, setSelectFavoriteIcon);
        list = tabs && list.concat(Object.keys(tabs).map((item, index) => {
            if (item !== currentFavoriteCategories && item !== DEFAULT_TAB_ICONS) {
                return <Tab value={tabs[item].key + ''} label={item} key={'tab:' + item}/>
            }
        }));

        list.length > 0 && currentFavoriteCategories && list.unshift(<Tab
            value={tabs[currentFavoriteCategories].key + ''} label={currentFavoriteCategories}
            key={'tab:' + currentFavoriteCategories}/>);
        list.length > 0 && list.unshift(<Tab icon={<History />} value={tabs[DEFAULT_TAB_ICONS].key + ''} key={'tab:' + DEFAULT_TAB_ICONS}/>);

        return (<>
                <ListItemText>
                    <Typography variant="inherit" noWrap>
                        Select icon
                    </Typography>
                </ListItemText>
                <Box component="div"
                     sx={{
                         flexGrow: 1,
                         width: 450,
                         overflow: "hidden"
                     }}
                >
                    <Paper>
                        <TabContext sx={{maxWidth: 450}} value={value}>
                            <AppBar position="static" color="default">
                                <div style={{display: 'inherit'}}>
                                    <TabList variant="scrollable"
                                             scrollButtons
                                             aria-label="visible arrows tabs example"
                                             onChange={(e, newValue) => {
                                                 setValue(newValue)
                                             }} children={list}/>
                                </div>
                            </AppBar>
                            {Object.values(tabs).map((item, index) =>
                                <TabPanel value={item.key + ""} key={'tabpanel:' + item.key}> {item} </TabPanel>
                            )}
                        </TabContext>
                    </Paper>
                </Box>
            </>
        );
    }

    const ListIcons = ({icons, selectFavoriteIcon, setSelectFavoriteIcon}) => {

        return <Box
            sx={{
                flexWrap: 'wrap',
                display: 'flex',
                maxWidth: 400
            }}
        >
            {icons.map((icon, index) => {
                return <ListItem key={index} sx={{maxWidth: 50, maxHeight: 50}} component="div" disablePadding>
                    <ListItemButton
                        sx={{maxWidth: 50, maxHeight: 50, top: -10}}
                        selected={favoriteIcon === icon || (!selectFavoriteIcon && icon === favorite.icon)}
                        onClick={() => {
                            setSelectFavoriteIcon(true);
                            setFavoriteIcon(icon);
                        }}
                    >
                        <div className={classes.shape}
                             dangerouslySetInnerHTML={{
                                 __html: `
                              <div>
                                  <svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="24" cy="24" r="12" fill="#c1c1c1"/>
                                  </svg>
                                  <img class="icon" src="/map/images/poi-icons-svg/mx_${icon}.svg">
                              </div>
                              ` + ''
                             }}/>
                    </ListItemButton>
                </ListItem>
            })}
        </Box>
    }

    function getTabUsedIcons(selectFavoriteIcon, setSelectFavoriteIcon) {
        let res = [];
        ctx.selectedGpxFile.file.wpts.forEach(wpt => {
            if (!res.some(icon => icon === wpt.icon)) {
                res.push(wpt.icon);
            }
        })
        return <ListIcons
            key={DEFAULT_TAB_ICONS}
            icons={res}
            selectFavoriteIcon={selectFavoriteIcon}
            setSelectFavoriteIcon={setSelectFavoriteIcon}/>;
    }

    async function getPoiCategories() {
        let resp = await fetch("/map/images/poi_categories")
        const res = await resp.json();
        if (res) {
            Object.entries(res.categories).forEach(category => {
                let currentIcon = category[1].icons.find(icon => icon === favorite.icon);
                if (currentIcon) {
                    setCurrentFavoriteCategories(category[0]);
                }
            })
            setFavoriteCategories(res);
        }
    }

    const EditColor = () => {
        let colors = ['#10c0f0', '#1010a0', '#eecc22', '#88e030', '#eeee10', '#00842b', '#ff5020', '#8e2512', '#e044bb', '#000001', '#d00d0d', '#a71de1'];
        const [selectFavoriteColor, setSelectFavoriteColor] = useState(false);
        let prepareColors = [];
        colors.forEach(color => {
            if (color === favorite.color) {
                prepareColors.unshift(color);
            } else {
                prepareColors.push(color);
            }
        })

        return (<>
                <ListItemText>
                    <Typography variant="inherit" noWrap>
                        Select color
                    </Typography>
                </ListItemText>
                <Box
                    sx={{
                        display: "flex",
                        width: 450,
                        overflowX: "scroll",
                    }}
                >
                    {prepareColors.map((color, index) => {
                        return <ListItem key={index} component="div" disablePadding>
                            <ListItemButton
                                selected={favoriteColor === color || (!selectFavoriteColor && color === favorite.color)}
                                onClick={() => {
                                    setSelectFavoriteColor(true);
                                    setFavoriteColor(color);
                                }}
                            >
                                <Avatar sx={{bgcolor: color}}> </Avatar>
                            </ListItemButton>
                        </ListItem>;
                    })}

                </Box>
            </>
        );
    }

    const EditShape = () => {
        const [selectFavoriteShape, setSelectFavoriteShape] = useState(false);
        let shapes = [MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE, MarkerOptions.BACKGROUND_WPT_SHAPE_OCTAGON, MarkerOptions.BACKGROUND_WPT_SHAPE_SQUARE];
        let shapesSvg = {};
        shapes.forEach(shape => {
            shapesSvg[`${shape}`] = MarkerOptions.getSvgBackground(favoriteColor, shape);
        })

        return (<>
                <ListItemText>
                    <Typography variant="inherit" noWrap>
                        Select shape
                    </Typography>
                </ListItemText>
                <Box component="div"
                     sx={{
                         display: 'flex',
                         overflow: "hidden"
                     }}
                >
                    {Object.entries(shapesSvg).map((shape, index) => {
                        return <ListItem style={{maxWidth: 71}} component="div" key={index} disablePadding>
                            <ListItemButton
                                sx={{maxHeight: 50}}
                                selected={favoriteShape === shape[0] || (!selectFavoriteShape && shape[0] === favorite.background)}
                                onClick={() => {
                                    setSelectFavoriteShape(true);
                                    setFavoriteShape(shape[0]);
                                }}
                            >
                                <div className={classes.background}
                                     dangerouslySetInnerHTML={{__html: shape[1] + ''}}/>
                            </ListItemButton>
                        </ListItem>
                    })}

                </Box>
            </>
        );
    }

    function save() {
        let selectedGroupName = favoriteGroup === null ? favorite.category : favoriteGroup.name;
        let editSelectedGpxFile = selectedGroupName === ctx.selectedGpxFile.nameGroup;
        let currentGroup = ctx.favorites[selectedGroupName];
        let currentWpt = getCurrentWpt();
        let fileSaved;
        if (!editSelectedGpxFile) {
            let deleted = deleteFavoriteFromOldGroup(currentWpt);
            if (deleted) {
                fileSaved = addFavoriteToGroup(currentGroup, selectedGroupName, currentWpt, editSelectedGpxFile);
            }
        } else {
            fileSaved = addFavoriteToGroup(currentGroup, selectedGroupName, currentWpt, editSelectedGpxFile);
        }
        if (fileSaved) {
            delete currentGroup.markers;
            updateSelectedFavorites(currentGroup, selectedGroupName);
            ctx.setFavorites({...ctx.favorites});
            setEditFavoritesDialogOpen(false);
        }
    }

    function addFavoriteToGroup(currentGroup, selectedGroupName, currentWpt, editSelectedGpxFile) {
        currentGroup = prepareGroup(currentGroup, selectedGroupName, currentWpt, editSelectedGpxFile);
        return TracksManager.saveTrack(ctx, currentGroup.name, currentWpt.name, TracksManager.FAVORITE_FILE_TYPE, currentGroup, true);
    }

    function updateSelectedFavorites(currentGroup, selectedGroupName) {
        ctx.selectedGpxFile.file = currentGroup
        ctx.selectedGpxFile.nameGroup = selectedGroupName;
        ctx.selectedGpxFile.editFavorite = true;
        ctx.selectedGpxFile.markerCurrent.title = favoriteName;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }

    function deleteFavoriteFromOldGroup(currentWpt) {
        const resGpxFiles = Object.assign({}, ctx.selectedGpxFile);
        resGpxFiles.file.wpts = ctx.selectedGpxFile.file.wpts.filter(wpt => wpt.name !== currentWpt.name);
        resGpxFiles.file.pointsGroups[favorite.category].points = ctx.selectedGpxFile.file.wpts;
        let deleted = TracksManager.saveTrack(ctx, ctx.selectedGpxFile.file.name, ctx.selectedGpxFile.name, TracksManager.FAVORITE_FILE_TYPE, resGpxFiles.file, true);
        if (deleted) {
            delete ctx.favorites[resGpxFiles.nameGroup].markers;
            return true;
        }
        return false;
    }

    function prepareGroup(currentGroup, selectedGroupName, currentWpt, editSelectedGpxFile) {
        if (currentGroup.name !== '') {
            currentWpt.ext.category = selectedGroupName;
        }
        if (editSelectedGpxFile) {
            currentGroup.wpts = ctx.selectedGpxFile.file.wpts;
        } else {
            currentGroup.wpts.push(currentWpt);
        }
        currentGroup.pointsGroups[selectedGroupName].points = currentGroup.wpts;

        return currentGroup;
    }

    function getCurrentWpt() {
        let res = null;
        ctx.selectedGpxFile.file.wpts.forEach(wpt => {
            if (wpt.name === favorite.name) {
                wpt.name = favoriteName;
                wpt.address = favoriteAddress === "" ? null : favoriteAddress;
                wpt.desc = favoriteDescription === "" ? null : favoriteDescription;
                wpt.color = favoriteColor;
                wpt.background = favoriteShape;
                wpt.icon = favoriteIcon;
                res = wpt;
            }
        })
        return res;
    }

    function saveAsFavorite() {
    }

    const CloseDialog = () => {
        return <IconButton
            variant="contained"
            type="button"
            onClick={() => setEditFavoritesDialogOpen(false)}
        >
            <Close fontSize="small"/>
        </IconButton>
    }

    return (
        <Dialog open={true}>
            <Grid container spacing={2}>
                <Grid className={styles.name} item xs={11} sx={{mb: -3}}>
                    <DialogTitle>Edit favorite</DialogTitle>
                </Grid>
                <Grid item xs={1} sx={{ml: -2, mt: 1}}>
                    {CloseDialog()}
                </Grid>
            </Grid>
            <DialogContent>
                {EditName()}
                {EditAddress()}
                {EditDescription()}
                {EditGroup()}
                {EditIcon()}
                {EditColor()}
                {EditShape()}
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleDeleteFavoritesDialogOpen}>
                    Delete</Button>
                {deleteFavoritesDialogOpen
                    && <DeleteFavoriteDialog
                        dialogOpen={deleteFavoritesDialogOpen}
                        setDialogOpen={setDeleteFavoritesDialogOpen}/>}
                <Button onClick={() => save()}>
                    Save</Button>
            </DialogActions>
        </Dialog>
    );
}