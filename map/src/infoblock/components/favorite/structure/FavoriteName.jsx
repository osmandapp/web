import { ListItemText, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import contextMenuStyles from '../../../styles/ContextMenuStyles';
import AppContext from '../../../../context/AppContext';
import { getPropsFromSearchResultItem } from '../../../../menu/search/search/SearchResultItem';
import { useTranslation } from 'react-i18next';

export default function FavoriteName({
    favoriteName,
    setFavoriteName,
    favoriteGroup,
    favorite,
    setErrorName,
    widthDialog,
    isGroupName = false,
}) {
    const menuStyles = contextMenuStyles();
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
        group &&
            group.wpts.forEach((wpt) => {
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
        const trimmedName = name.trim();

        if (!trimmedName) {
            setErrorName(true);
            setNameAlreadyExist(false);
            return;
        }

        const nameExists = otherNames.some((n) => n.toLowerCase() === trimmedName.toLowerCase());

        setNameAlreadyExist(nameExists);
        setErrorName(nameExists);
    }

    function gerErrorText(favoriteName) {
        if (favoriteName === '') {
            return 'Empty name!';
        } else if (nameAlreadyExist) {
            return 'This name already exists!';
        } else {
            return ' ';
        }
    }

    useEffect(() => {
        if (ctx.selectedWpt?.poi) {
            const objOptions = ctx.selectedWpt.poi?.options ?? ctx.selectedWpt.poi?.properties;
            const { name } = getPropsFromSearchResultItem(objOptions, t);
            setFavoriteName(name);
        }
    }, [ctx.selectedWpt]);

    return (
        <ListItemText sx={{ maxWidth: `${widthDialog}px` }}>
            <TextField
                className={menuStyles.favouriteLineInfo}
                id={isGroupName ? 'se-fav-group-name-input' : 'se-fav-name-input'}
                label="Name"
                fullWidth
                onChange={(e) => setFavoriteName(e.target.value)}
                value={favoriteName}
                autoFocus={true}
                error={favoriteName === '' || nameAlreadyExist}
                helperText={gerErrorText(favoriteName)}
            />
        </ListItemText>
    );
}
