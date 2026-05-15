import { Box, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../../../context/AppContext';
import { getPropsFromSearchResultItem } from '../../../../menu/search/search/SearchResultItem';
import { useTranslation } from 'react-i18next';
import styles from '../wptEditPanel.module.css';

export default function FavoriteName({
    favoriteName,
    setFavoriteName,
    onAutoFill,
    favoriteGroup,
    favorite,
    setErrorName,
    widthDialog,
    isGroupName = false,
}) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const [nameAlreadyExist, setNameAlreadyExist] = useState(false);
    const [favNames, setFavNames] = useState([]);

    useEffect(() => {
        const id = favoriteGroup?.id ?? favorite?.group?.id;
        if (!id) {
            return;
        }
        let group = ctx.favorites?.mapObjs?.[id];
        let names = [];
        group?.wpts.forEach((wpt) => {
            if (favorite) {
                if (wpt.name !== favorite.name) {
                    names.push(wpt.name);
                }
            } else {
                names.push(wpt.name);
            }
        });
        validateName(favoriteName, names);
        setFavNames(names);
    }, [favoriteGroup]);

    useEffect(() => {
        validateName(favoriteName, favNames);
    }, [favoriteName]);

    function validateName(name, otherNames) {
        const trimmedName = name?.trim();

        if (!trimmedName) {
            setErrorName(true);
            setNameAlreadyExist(false);
            return;
        }

        const nameExists = otherNames.some((n) => n.toLowerCase() === trimmedName.toLowerCase());

        setNameAlreadyExist(nameExists);
        setErrorName(nameExists);
    }

    function getErrorText(name) {
        if (name === '') {
            return t('web:fav_name_empty');
        } else if (nameAlreadyExist) {
            return t('web:fav_name_already_exists');
        }

        return ' ';
    }

    useEffect(() => {
        if (ctx.selectedWpt?.poi) {
            const objOptions = ctx.selectedWpt.poi?.options ?? ctx.selectedWpt.poi?.properties;
            const { name } = getPropsFromSearchResultItem(objOptions, t);
            setFavoriteName(name);
            onAutoFill?.(name);
        } else if (ctx.selectedWpt?.stop) {
            const name = ctx.selectedWpt?.stop.options.name;
            const resolved = name && name.trim() !== '' ? name : t('web:transport_stop');
            setFavoriteName(resolved);
            onAutoFill?.(resolved);
        }
    }, [ctx.selectedWpt]);

    return (
        <Box sx={{ maxWidth: `${widthDialog}px` }}>
            <TextField
                id={isGroupName ? 'se-fav-group-name-input' : 'se-fav-name-input'}
                label={t('shared_string_name')}
                fullWidth
                variant="filled"
                onChange={(e) => setFavoriteName(e.target.value)}
                value={favoriteName}
                autoFocus
                error={favoriteName === '' || nameAlreadyExist}
                helperText={getErrorText(favoriteName)}
                FormHelperTextProps={{ className: styles.helperText }}
            />
        </Box>
    );
}
