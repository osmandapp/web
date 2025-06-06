import { IconButton, ListItemText, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';
import React from 'react';

export default function FavoriteAddress({ favoriteAddress, setFavoriteAddress, setClose, widthDialog }) {
    return (
        <ListItemText sx={{ maxWidth: `${widthDialog}px` }}>
            <TextField
                id="se-edit-fav-dialog-address"
                label="Address"
                fullWidth
                onChange={(e) => setFavoriteAddress(e.target.value)}
                value={favoriteAddress}
                autoFocus
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
            {favoriteAddress && favoriteAddress !== '' && (
                <IconButton
                    variant="contained"
                    type="button"
                    onClick={() => {
                        if (setClose) {
                            setClose(false);
                        }
                        setFavoriteAddress('');
                    }}
                >
                    <Delete fontSize="small" />
                </IconButton>
            )}
        </ListItemText>
    );
}
