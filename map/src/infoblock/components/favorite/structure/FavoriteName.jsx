import { ListItemText, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import contextMenuStyles from '../../../styles/ContextMenuStyles';
import AppContext from '../../../../context/AppContext';

export default function FavoriteName({
    favoriteName,
    setFavoriteName,
    favoriteGroup,
    favorite,
    setErrorName,
    widthDialog,
}) {
    const menuStyles = contextMenuStyles();
    const ctx = useContext(AppContext);

    const [nameAlreadyExist, setNameAlreadyExist] = useState(false);
    const [favNames, setFavNames] = useState([]);

    useEffect(() => {
        let group = ctx.favorites?.mapObjs?.[!favoriteGroup ? favorite?.category : favoriteGroup.name];
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
        setFavNames(names);
    }, [favoriteGroup]);

    useEffect(() => {
        if (favNames.find((name) => name === favoriteName)) {
            setNameAlreadyExist(true);
            setErrorName(true);
        } else if (favoriteName === '' || !favoriteName.trim().length) {
            setErrorName(true);
        } else {
            setNameAlreadyExist(false);
            setErrorName(false);
        }
    }, [favoriteName]);

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
            setFavoriteName(ctx.selectedWpt.poi?.options?.title);
        }
    }, [ctx.selectedWpt]);

    return (
        <ListItemText sx={{ maxWidth: `${widthDialog}px` }}>
            <TextField
                className={menuStyles.favouriteLineInfo}
                id="name"
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
