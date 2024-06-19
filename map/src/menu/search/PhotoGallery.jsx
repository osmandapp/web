import React, { useContext, useState } from 'react';
import { Box, Button, Divider, Grid, ListItemText, MenuItem, Typography } from '@mui/material';
import { WIKI_IMAGE_BASE_URL } from '../../manager/SearchManager';
import styles from '../search/search.module.css';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';

export default function PhotoGallery({ photos }) {
    const ctx = useContext(AppContext);

    const MAX_PHOTOS = 100;

    const { t } = useTranslation();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});

    const filteredPhotos = filterPhotos(photos).slice(0, MAX_PHOTOS);

    const handleImageLoad = () => {
        setLoading(false);
    };

    const handleImageError = (index) => {
        setError((prevError) => ({ ...prevError, [index]: true }));
    };

    const handleOpen = () => ctx.setPhotoGallery(filteredPhotos);

    const handleImageClick = (index) => {
        ctx.setSelectedPhotoInd(index);
        ctx.setPhotoGallery(filteredPhotos);
    };

    function filterPhotos(photos) {
        const imageExtensions = ['.jpeg', '.jpg', '.png', '.gif'];
        return photos.features
            .filter((photo) => {
                const extension = photo.properties.imageTitle
                    .slice(photo.properties.imageTitle.lastIndexOf('.'))
                    .toLowerCase();
                return imageExtensions.includes(extension);
            })
            .sort((a, b) => a.properties.rowNum - b.properties.rowNum)
            .reduce((acc, photo) => {
                if (!acc.find((item) => item.properties.mediaId === photo.properties.mediaId)) {
                    photo.properties.imageTitle = photo.properties.imageTitle.replaceAll(' ', '_');
                    acc.push(photo);
                }
                return acc;
            }, []);
    }

    return (
        <>
            {filteredPhotos.length > 0 && (
                <Box sx={{ width: '100%' }}>
                    <MenuItem className={styles.photoTitle}>
                        <ListItemText>
                            <Typography className={styles.photoTitleText}>{t('online_photos')}</Typography>
                        </ListItemText>
                    </MenuItem>
                    <Grid container spacing={-0.5} sx={{ p: 2, width: '341px' }}>
                        {filteredPhotos.slice(0, 1).map((photo, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                {!error[index] && (
                                    <img
                                        onLoad={handleImageLoad}
                                        onError={() => handleImageError(index)}
                                        onClick={() => handleImageClick(index)}
                                        src={`${WIKI_IMAGE_BASE_URL}${photo.properties.imageTitle}?width=300`}
                                        alt={`Photo ${index + 1}`}
                                        style={{
                                            display: loading ? 'none' : 'block',
                                            width: '148px',
                                            height: '148px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                )}
                            </Grid>
                        ))}
                        <Grid item xs={12} sm={6} container>
                            {filteredPhotos.slice(1, 5).map((photo, index) => (
                                <Grid item xs={6} key={index + 1}>
                                    {!error[index + 1] && (
                                        <img
                                            onLoad={handleImageLoad}
                                            onError={() => handleImageError(index + 1)}
                                            onClick={() => handleImageClick(index + 1)}
                                            src={`${WIKI_IMAGE_BASE_URL}${photo.properties.imageTitle}?width=300`}
                                            alt={`Photo ${index + 2}`}
                                            style={{
                                                display: loading ? 'none' : 'block',
                                                width: '71px',
                                                height: '71px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    )}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    {filteredPhotos.length > 0 && (
                        <Button onClick={handleOpen} sx={{ ml: 1 }}>
                            {`${t('shared_string_show_all')} (${filteredPhotos.length})`}
                        </Button>
                    )}
                    <Divider sx={{ marginTop: 2 }} />
                </Box>
            )}
        </>
    );
}
