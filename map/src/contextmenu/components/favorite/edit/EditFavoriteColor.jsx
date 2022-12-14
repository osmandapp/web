import React, {useState} from "react";
import FavoriteManager from "../../../../context/FavoriteManager";
import {Avatar, Box, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";

export default function EditFavoriteColor({favoriteColor, setFavoriteColor, defaultColor}) {
    const [selectFavoriteColor, setSelectFavoriteColor] = useState(false);
    let prepareColors = [];
    FavoriteManager.colors.forEach(color => {
        if (color === defaultColor) {
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
                            selected={favoriteColor === color || (!selectFavoriteColor && color === defaultColor)}
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