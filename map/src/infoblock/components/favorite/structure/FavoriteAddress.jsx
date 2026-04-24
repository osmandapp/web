import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { ReactComponent as CancelIcon } from '../../../../assets/icons/ic_action_cancel.svg';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAddressByLatLon } from '../../wpt/WptDetails';

export default function FavoriteAddress({ favoriteAddress, setFavoriteAddress, widthDialog, latLon }) {
    const { t } = useTranslation();

    const [searching, setSearching] = useState(false);

    useEffect(() => {
        if (!latLon?.lat || !latLon?.lon || favoriteAddress) return;
        setSearching(true);
        getAddressByLatLon(latLon.lat, latLon.lon).then((address) => {
            setFavoriteAddress(address ?? '');
            setSearching(false);
        });
    }, [latLon]);

    function handleClear() {
        setFavoriteAddress('');
    }

    return (
        <Box sx={{ maxWidth: `${widthDialog}px` }}>
            <TextField
                id="se-edit-fav-dialog-address"
                label={t('web:fav_address')}
                fullWidth
                variant="filled"
                disabled={searching}
                onChange={(e) => setFavoriteAddress(e.target.value)}
                value={searching ? t('web:fav_address_searching') : favoriteAddress}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton size="small" onClick={handleClear}>
                                <CancelIcon style={{ fill: 'var(--svg-icon-color)' }} />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}
