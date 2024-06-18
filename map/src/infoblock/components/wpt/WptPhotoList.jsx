import { AppBar, Box, IconButton, ImageList, Toolbar, Typography } from '@mui/material';
import React, { useContext, useState, useCallback } from 'react';
import headerStyles from '../../../menu/trackfavmenu.module.css';
import styles from '../../infoblock.module.css';
import AppContext from '../../../context/AppContext';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import ImageItem from '../../../menu/search/ImageItem';

export default function WptPhotoList({ photos }) {
    const ctx = useContext(AppContext);
    const [loadedImages, setLoadedImages] = useState({});

    const handleImageLoad = useCallback((index) => {
        setLoadedImages((prevState) => ({
            ...prevState,
            [index]: true,
        }));
    }, []);

    return (
        <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ height: 'auto', overflowX: 'hidden' }}>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        variant="contained"
                        type="button"
                        className={styles.closeIcon}
                        onClick={() => ctx.setPhotoGallery(null)}
                    >
                        <BackIcon />
                    </IconButton>
                    <Typography component="div" className={headerStyles.title}>
                        Photos
                    </Typography>
                </Toolbar>
            </AppBar>
            <ImageList sx={{ pr: '16px', pl: '16px', overflowX: 'hidden' }} gap={16} cols={2}>
                {photos.map((photo, index) => (
                    <ImageItem
                        key={index}
                        photo={photo}
                        index={index}
                        handleImageLoad={handleImageLoad}
                        isLoaded={!!loadedImages[index]}
                    />
                ))}
            </ImageList>
        </Box>
    );
}
