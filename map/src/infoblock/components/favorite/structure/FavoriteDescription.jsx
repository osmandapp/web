import { IconButton, ListItemText, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';
import React from 'react';
import contextMenuStyles from '../../../styles/ContextMenuStyles';

export default function FavoriteDescription({ favoriteDescription, setFavoriteDescription, setClose }) {
    const menuStyles = contextMenuStyles();

    return (
        <ListItemText sx={{ mt: 3 }}>
            <TextField
                className={menuStyles.favouriteLineInfo}
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
                onClick={() => {
                    if (setClose) {
                        setClose(false);
                    }
                    setFavoriteDescription('');
                }}
            >
                <Delete fontSize="small" />
            </IconButton>
        </ListItemText>
    );
}
