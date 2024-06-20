import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, Skeleton } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { WIKI_IMAGE_BASE_URL } from '../../manager/SearchManager';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as BackForward } from '../../assets/icons/ic_arrow_forward.svg';
import headerStyles from '../trackfavmenu.module.css';
import styles from '../search/search.module.css';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import AppContext from '../../context/AppContext';
import { useInView } from 'react-intersection-observer';
import { format } from 'date-fns';
import * as locales from 'date-fns/locale';
import i18n from 'i18next';

export default function PhotosModal({ photos }) {
    const ctx = useContext(AppContext);

    const [open, setOpen] = useState(true);
    const [activeStep, setActiveStep] = useState(ctx.selectedPhotoInd);
    const [width, height] = useWindowSize();

    const HEADER_HEIGHT = 60;
    const LEFT_MARGIN = 423;
    const FOOTER_HEIGHT = getFooterHeight();

    function getFooterHeight() {
        let size = 0;
        if (hasFooterInfo()) {
            if (photos[activeStep].properties.date) {
                size += 22;
            }
            if (photos[activeStep].properties.author) {
                size += 22;
            }
            if (photos[activeStep].properties.license) {
                size += 22;
            }
        }
        return size;
    }

    useEffect(() => {
        if (ctx.selectedPhotoInd !== -1) {
            if (ctx.selectedPhotoInd !== activeStep) {
                setOpen(true);
            }
            setActiveStep(ctx.selectedPhotoInd);
        }
    }, [ctx.selectedPhotoInd]);

    const handleClose = () => {
        ctx.setSelectedPhotoInd(-1);
        setOpen(false);
    };

    const handleNext = () => {
        ctx.setSelectedPhotoInd(Math.min(activeStep + 1, photos.length - 1));
    };

    const handleBack = () => {
        ctx.setSelectedPhotoInd(Math.max(activeStep - 1, 0));
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                handleNext();
            } else if (event.key === 'ArrowLeft') {
                handleBack();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleNext, handleBack]);

    const handleStepChange = (step) => setActiveStep(step);

    function getHeight() {
        return height - HEADER_HEIGHT;
    }

    function getPhotoHeight() {
        return height - HEADER_HEIGHT - FOOTER_HEIGHT;
    }

    function getWidth() {
        return width - LEFT_MARGIN;
    }

    if (!photos || photos.length === 0) {
        return null;
    }

    function hasFooterInfo() {
        return (
            photos &&
            activeStep &&
            (photos[activeStep]?.properties?.date ||
                photos[activeStep]?.properties?.author ||
                photos[activeStep]?.properties?.license)
        );
    }

    const formatDate = (dateStr) => {
        const cleanDateStr = dateStr.startsWith('+') ? dateStr.slice(1) : dateStr;
        const locale = locales[i18n.language] || locales.enUS;
        const date = new Date(cleanDateStr);
        if (isNaN(date)) {
            return dateStr;
        }
        return format(date, 'd MMMM yyyy', { locale });
    };

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            variant="permanent"
            PaperProps={{
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: getHeight() + 'px',
                    maxWidth: getWidth() + 'px',
                    marginLeft: LEFT_MARGIN + 'px',
                    marginTop: HEADER_HEIGHT + 'px',
                    overflow: 'hidden',
                    backgroundColor: 'black',
                },
            }}
        >
            <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                    <Toolbar className={headerStyles.toolbar}>
                        <IconButton variant="contained" type="button" sx={{ fill: 'white' }} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                        <Typography component="div" className={styles.singlePhotoTitle}>
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
                <SwipeableViews axis={'x'} index={activeStep} onChangeIndex={handleStepChange}>
                    {photos.map((photo, index) => (
                        <PhotoItem
                            key={index}
                            photo={photo}
                            index={index}
                            getWidth={getWidth}
                            getHeight={getPhotoHeight}
                            activeStep={activeStep}
                        />
                    ))}
                </SwipeableViews>
                <Box className={styles.iconsPrevNextBlock}>
                    <Button onClick={handleBack} disabled={activeStep === 0} className={styles.iconsPrevNext}>
                        <BackIcon />
                    </Button>
                    <Button
                        onClick={handleNext}
                        disabled={activeStep === photos.length - 1}
                        className={styles.iconsPrevNext}
                    >
                        <BackForward />
                    </Button>
                </Box>
                {hasFooterInfo() && (
                    <AppBar position="static" className={styles.photoFooter} sx={{ backgroundColor: 'black' }}>
                        {photos[activeStep].properties.date && (
                            <Typography sx={{ color: 'white' }}>
                                Date: {formatDate(photos[activeStep].properties.date)}
                            </Typography>
                        )}
                        {photos[activeStep].properties.author && (
                            <Typography sx={{ color: 'white' }}>
                                Author: {photos[activeStep].properties.author}
                            </Typography>
                        )}
                        {photos[activeStep].properties.license && (
                            <Typography sx={{ color: 'white' }}>
                                License:{' '}
                                <a
                                    href={`https://www.wikidata.org/wiki/${photos[activeStep].properties.license}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'white' }}
                                >
                                    {photos[activeStep].properties.license}
                                </a>
                            </Typography>
                        )}
                    </AppBar>
                )}
            </Box>
        </Drawer>
    );
}

function PhotoItem({ photo, index, getWidth, getHeight, activeStep }) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const MARGIN = 95;

    // Preload next 5 images if within range
    const shouldLoadImage = inView || (index >= activeStep && index < activeStep + 5);

    return (
        <div
            key={index}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            ref={ref}
        >
            {shouldLoadImage ? (
                <a
                    href={`https://commons.wikimedia.org/wiki/File:${photo.properties.imageTitle}?width=1280`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <img
                        src={`${WIKI_IMAGE_BASE_URL}${photo.properties.imageTitle}?width=1280`}
                        alt={`Photo ${index + 1}`}
                        style={{ width: '100%', height: getHeight() - MARGIN, objectFit: 'contain' }}
                    />
                </a>
            ) : (
                <Skeleton variant="rectangular" width={getWidth()} height={getHeight() - MARGIN} />
            )}
        </div>
    );
}
