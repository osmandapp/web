import { Box, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';
import { ReactComponent as CancelIcon } from '../../../../assets/icons/ic_action_cancel.svg';
import { ReactComponent as LocationIcon } from '../../../../assets/icons/ic_action_location_marker_outlined.svg';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAddressByLatLon } from '../../wpt/WptDetails';
import styles from '../wptEditPanel.module.css';

export default function FavoriteAddress({ favoriteAddress, setFavoriteAddress, onAutoFill, widthDialog, latLon }) {
    const { t } = useTranslation();

    const [searching, setSearching] = useState(false);

    useEffect(() => {
        if (!latLon?.lat || !latLon?.lon || favoriteAddress) return;
        searchAddress();
    }, [latLon]);

    function searchAddress() {
        if (!latLon?.lat || !latLon?.lon) return;
        setSearching(true);
        getAddressByLatLon(latLon.lat, latLon.lon).then((addr = '') => {
            setFavoriteAddress(addr);
            onAutoFill?.(addr);
            setSearching(false);
        });
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
                value={searching ? t('web:fav_address_searching') : (favoriteAddress ?? '')}
                inputProps={{ className: styles.fieldInput, autoComplete: 'off' }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {favoriteAddress ? (
                                <IconButton size="small" onClick={() => setFavoriteAddress('')}>
                                    <CancelIcon style={{ fill: 'var(--svg-icon-color)' }} />
                                </IconButton>
                            ) : (
                                <Tooltip title={t('web:fav_address_autofill')}>
                                    <IconButton size="small" onClick={searchAddress} disabled={searching}>
                                        <LocationIcon style={{ fill: '#237BFF' }} />
                                    </IconButton>
                                </Tooltip>
                            )}
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}
