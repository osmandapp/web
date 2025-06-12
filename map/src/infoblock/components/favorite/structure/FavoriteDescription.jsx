import { IconButton, ListItemText, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';
import React from 'react';

export default function FavoriteDescription({ favoriteDescription, setFavoriteDescription, setClose, widthDialog }) {
    return (
        <ListItemText sx={{ maxWidth: `${widthDialog}px`, mt: 3 }}>
            <TextField
                id="se-edit-fav-dialog-desc"
                label="Description"
                fullWidth
                onChange={(e) => setFavoriteDescription(e.target.value)}
                value={favoriteDescription}
                autoFocus
                multiline
                rows={2}
                sx={{
                    maxWidth: '450px !important',
                    resize: 'none',
                    fontFamily: 'Arial',
                    color: 'black',
                    fontSize: 20,
                    ml: '-2px',
                    borderColor: '#bebdb4',
                    backgroundColor: 'transparent',
                    outlineColor: '#757575',
                    cursor: 'pointer',
                    '&[disabled]': { border: 'none' },
                    mb: '-10px',
                    pb: '8px',
                    pt: '8px',
                }}
            />
            {favoriteDescription && favoriteDescription !== '' && (
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
            )}
        </ListItemText>
    );
}
