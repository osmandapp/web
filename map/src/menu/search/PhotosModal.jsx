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

export default function PhotosModal({ photos, selectedPhotoIndex }) {
    const ctx = useContext(AppContext);

    const [open, setOpen] = useState(true);
    const [activeStep, setActiveStep] = useState(selectedPhotoIndex);
    const [width, height] = useWindowSize();

    const HEADER_HEIGHT = 60;
    const LEFT_MARGIN = 423;

    useEffect(() => {
        if (selectedPhotoIndex !== -1) {
            if (selectedPhotoIndex !== activeStep) {
                setOpen(true);
            }
            setActiveStep(selectedPhotoIndex);
        }
    }, [selectedPhotoIndex]);

    const handleClose = () => {
        ctx.setSelectedPhotoInd(-1);
        setOpen(false);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, photos.length - 1));
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };

    const handleStepChange = (step) => setActiveStep(step);

    function getHeight() {
        return height - HEADER_HEIGHT;
    }

    function getWidth() {
        return width - LEFT_MARGIN;
    }

    if (!photos || photos.length === 0) {
        return null;
    }

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
                        <PhotoItem key={index} photo={photo} index={index} getWidth={getWidth} getHeight={getHeight} />
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
            </Box>
        </Drawer>
    );
}

function PhotoItem({ photo, index, getWidth, getHeight }) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const MARGIN = 95;

    return (
        <div
            key={index}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: MARGIN + 'px',
                marginBottom: MARGIN + 'px',
            }}
            ref={ref}
        >
            {inView ? (
                <a
                    href={`https://commons.wikimedia.org/wiki/File:${photo.properties.imageTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <img
                        src={`${WIKI_IMAGE_BASE_URL}${photo.properties.imageTitle}`}
                        alt={`Photo ${index + 1}`}
                        style={{ width: '100%', height: getHeight() - MARGIN * 3, objectFit: 'contain' }}
                    />
                </a>
            ) : (
                <Skeleton variant="rectangular" width={getWidth()} height={getHeight() - MARGIN * 3} />
            )}
        </div>
    );
}
