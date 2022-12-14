import {ListItemText, TextField} from "@mui/material";
import React from "react";
import contextMenuStyles from "../../../styles/ContextMenuStyles";

export default function EditFavoriteName({favoriteName, setFavoriteName}) {
    const menuStyles = contextMenuStyles();

    return (<ListItemText>
            <TextField
                className={menuStyles.favouriteLineInfo}
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