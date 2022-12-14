import {Box, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import FavoriteManager from "../../../../context/FavoriteManager";
import {Folder} from "@mui/icons-material";
import React from "react";

export default function EditFavoriteGroup({favoriteGroup, setFavoriteGroup, groups, defaultGroup}) {
    let groupList = [];
    groups.forEach(group => {
        if (group.name === defaultGroup) {
            groupList.unshift(group);
        } else {
            groupList.push(group);
        }
    })

    const FavoriteGroupItem = (group) => {
        let g = group.pointsGroups[group.name === FavoriteManager.DEFAULT_GROUP_NAME ? "" : group.name];
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
                            selected={favoriteGroup === group || (favoriteGroup === null && group.name === defaultGroup)}
                            onClick={() => setFavoriteGroup(group)}
                        >
                            {FavoriteGroupItem(group)}
                        </ListItemButton>
                    </ListItem>;
                })}

            </Box>
        </>
    );
}