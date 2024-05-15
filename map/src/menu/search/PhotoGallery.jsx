import React, { useState } from 'react';
import { Box, Button, Divider, Grid, ListItemText, MenuItem, Modal, Typography } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { WIKI_IMAGE_BASE_URL } from '../../manager/SearchManager';
import styles from '../search/search.module.css';
import { useTranslation } from 'react-i18next';

export default function PhotoGallery({ photos }) {
    const MAX_PHOTOS = 100;

    const [open, setOpen] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const { t } = useTranslation();

    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleStepChange = (step) => setActiveStep(step);

    function filterPhotos(photos) {
        const imageExtensions = ['.jpeg', '.jpg', '.png', '.gif'];
        return photos.features.filter((photo) => {
            const extension = photo.properties.imageTitle
                .slice(photo.properties.imageTitle.lastIndexOf('.'))
                .toLowerCase();
            return imageExtensions.includes(extension);
        });
    }
    const filteredPhotos = filterPhotos(photos).slice(0, MAX_PHOTOS);

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
                                <img
                                    onLoad={handleImageLoad}
                                    src={`${WIKI_IMAGE_BASE_URL}${photo.properties.imageTitle}?width=300`}
                                    alt={`Photo ${index + 1}`}
                                    style={{
                                        display: loading ? 'none' : 'block',
                                        width: '148px',
                                        height: '148px',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Grid>
                        ))}
                        <Grid item xs={12} sm={6} container>
                            {filteredPhotos.slice(1, 5).map((photo, index) => (
                                <Grid item xs={6} key={index}>
                                    <img
                                        onLoad={handleImageLoad}
                                        src={`${WIKI_IMAGE_BASE_URL}${photo.properties.imageTitle}?width=300`}
                                        alt={`Photo ${index + 2}`}
                                        style={{
                                            display: loading ? 'none' : 'block',
                                            width: '71px',
                                            height: '71px',
                                            objectFit: 'cover',
                                        }}
                                    />
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

                    <Modal
                        open={open}
                        onClose={handleClose}
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Box
                            sx={{
                                width: '500px',
                                height: '500px',
                                bgcolor: 'background.paper',
                                p: 2,
                                overflow: 'hidden',
                                position: 'relative',
                            }}
                        >
                            <SwipeableViews
                                axis={'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                style={{ height: '100%' }}
                                containerStyle={{ display: 'block' }}
                            >
                                {filteredPhotos.map((photo, index) => (
                                    <div key={index}>
                                        <a
                                            href={`https://commons.wikimedia.org/wiki/File:${photo.properties.imageTitle}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                onLoad={handleImageLoad}
                                                src={`${WIKI_IMAGE_BASE_URL}${photo.properties.imageTitle}?width=500`}
                                                alt={`Photo ${index + 1}`}
                                                style={{
                                                    display: loading ? 'none' : 'block',
                                                    maxHeight: '100%',
                                                    maxWidth: '100%',
                                                    overflow: 'hidden',
                                                }}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </SwipeableViews>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 4,
                                    left: 4,
                                    right: 4,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Button className={styles.photoCloseButton} component="span" onClick={handleClose}>
                                    {t('shared_string_close')}
                                </Button>
                            </Box>
                        </Box>
                    </Modal>
                </Box>
            )}
        </>
    );
}
