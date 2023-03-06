import {Box, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Add, Folder} from "@mui/icons-material";
import React, {useState} from "react";
import FavoritesManager from "../../../../context/FavoritesManager";
import Utils from "../../../../util/Utils";
import AddNewGroupDialog from "../AddNewGroupDialog";

export default function FavoriteGroup({favoriteGroup, setFavoriteGroup, groups, defaultGroup}) {

    const [addGroupDialogOpen, setAddGroupDialogOpen] = useState(false);

    let groupList = FavoritesManager.orderList(groups, defaultGroup);

    const FavoriteGroupItem = (group) => {
        let g = group.pointsGroups && group.pointsGroups[group.name === FavoritesManager.DEFAULT_GROUP_NAME ? "" : group.name];
        let colorGroup;
        if (g && g.color) {
            colorGroup = Utils.hexToArgb(g.color);
        }
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

    const AddNewGroup = () => {
        return <ListItem key={'newGroup'} component="div" disablePadding>
            <ListItemButton
                onClick={() => setAddGroupDialogOpen(true)}
            >
                <Box
                    sx={{
                        width: 110,
                        height: 50,
                        border: 1,
                        borderColor: "#c1c1c1",
                        paddingLeft: 1
                    }}>
                    <Grid container>
                        <Grid item container xs={10} sx={{mt: -0.5}}>
                            <IconButton
                                variant="contained"
                                type="button"
                                onClick={() => setAddGroupDialogOpen(true)}
                            >
                                <Add fontSize="small"/>
                            </IconButton>
                        </Grid>
                        <Grid item container xs={10} sx={{mt: -1}}>
                            <ListItemText>
                                <Typography variant="inherit" noWrap>
                                    Add new
                                </Typography>
                            </ListItemText>
                        </Grid>
                    </Grid>
                </Box>
            </ListItemButton>
        </ListItem>

    }


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
                {groupList.length > 0 && groupList?.map((group, index) => {
                    return <ListItem key={index} component="div" disablePadding>
                        <ListItemButton
                            selected={favoriteGroup === group || (favoriteGroup === null && group.name === defaultGroup)}
                            onClick={() => setFavoriteGroup(group)}
                        >
                            {FavoriteGroupItem(group)}
                        </ListItemButton>
                    </ListItem>;
                })}
                <AddNewGroup/>
            </Box>
            <AddNewGroupDialog dialogOpen={addGroupDialogOpen}
                               setDialogOpen={setAddGroupDialogOpen}
                               setFavoriteGroup={setFavoriteGroup}/>
        </>
    );
}