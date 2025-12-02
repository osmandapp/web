import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, Skeleton } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { useWindowSize } from '../../../util/hooks/useWindowSize';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as BackForward } from '../../../assets/icons/ic_arrow_forward.svg';
import headerStyles from '../../trackfavmenu.module.css';
import styles from '../search.module.css';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';
import AppContext from '../../../context/AppContext';
import { useInView } from 'react-intersection-observer';
import { getPhotoUrl } from './PhotoGallery';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import { useTranslation } from 'react-i18next';
import { otherImgTags } from '../../../infoblock/components/wpt/WptTagsProvider';
import PropTypes from 'prop-types';
import { fmt } from '../../../util/dateFmt';
import { getPhotoTitle } from '../../../manager/SearchManager';

export default function PhotosModal({ photos }) {
    const ctx = useContext(AppContext);
    const { t, i18n } = useTranslation();

    const [open, setOpen] = useState(true);
    const [activeStep, setActiveStep] = useState(ctx.selectedPhotoInd);
    const [width, height] = useWindowSize();
    const [showInfo, setShowInfo] = useState(false);
    const [activePhoto, setActivePhoto] = useState(null);

    const HEADER_HEIGHT = 60;
    const LEFT_MARGIN = 423;
    const FOOTER_HEIGHT = 88;

    useEffect(() => {
        if (ctx.selectedPhotoInd !== -1) {
            if (ctx.selectedPhotoInd !== activeStep) {
                setOpen(true);
            }
            setActiveStep(ctx.selectedPhotoInd);
            const currentPhoto = photos[ctx.selectedPhotoInd];
            if (otherImgTags(currentPhoto.properties.osmTag)) {
                return;
            }

            if (hasFooterInfo(currentPhoto)) {
                setShowInfo(true);
                setActivePhoto(currentPhoto);
            } else {
                setShowInfo(false);
            }
        } else {
            setOpen(false);
        }
    }, [ctx.selectedPhotoInd]);

    const handleClose = () => {
        ctx.setSelectedPhotoInd(-1);
    };

    const handleNext = () => {
        ctx.setSelectedPhotoInd(Math.min(activeStep + 1, photos.length - 1));
    };

    const handleBack = () => {
        ctx.setSelectedPhotoInd(Math.max(activeStep - 1, 0));
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight' || event.key === ' ') {
                handleNext();
            } else if (event.key === 'ArrowLeft' || event.key === 'Backspace') {
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

    function needOpenMoreModal(str) {
        const fontSize = 16;
        const avgCharWidth = fontSize * 0.6;
        const textWidth = str.length * avgCharWidth;
        const containerWidth = getWidth();
        return textWidth > containerWidth;
    }

    if (!photos || photos.length === 0) {
        return null;
    }

    function hasFooterInfo(photo) {
        return (
            photo?.properties?.date ||
            photo?.properties?.author ||
            photo?.properties?.license ||
            photo?.properties?.description
        );
    }

    const formatDate = (dateStr) => {
        const clean = dateStr?.startsWith('+') ? dateStr.slice(1) : dateStr;
        const d = new Date(clean);
        return isNaN(d) ? dateStr : fmt.dMMMMY(d);
    };

    const parseDescription = (descriptionStr) => {
        if (!descriptionStr) {
            return '';
        }
        try {
            const parsed = JSON.parse(descriptionStr);
            const currentLang = i18n.language?.split('-')[0] || 'en';

            if (parsed[currentLang]) {
                return parsed[currentLang];
            } else if (parsed['en']) {
                return parsed['en'];
            } else {
                const firstKey = Object.keys(parsed)[0];
                return firstKey ? parsed[firstKey] : descriptionStr;
            }
        } catch (e) {
            return descriptionStr;
        }
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
                    width: getWidth() + 'px',
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
                        <IconButton
                            id={'se-close-photo'}
                            variant="contained"
                            type="button"
                            sx={{ fill: 'white' }}
                            onClick={handleClose}
                        >
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
                        id={'se-next-photo'}
                        onClick={handleNext}
                        disabled={activeStep === photos.length - 1}
                        className={styles.iconsPrevNext}
                    >
                        <BackForward />
                    </Button>
                </Box>
                {activePhoto !== null && activePhoto.imageTitle === photos[activeStep]?.imageTitle && showInfo && (
                    <AppBar position="static" className={styles.photoFooter} sx={{ backgroundColor: 'black' }}>
                        {activePhoto.properties.date ? (
                            <MenuItemWithLines
                                id={'se-photo-date'}
                                compName={t('shared_string_date')}
                                className={`${styles.metadata} ${styles.metadatamulti}`}
                                name={`${t('shared_string_date')}: ${formatDate(activePhoto.properties.date)}`}
                                maxLines={1}
                                showMore={needOpenMoreModal(formatDate(activePhoto.properties.date))}
                            />
                        ) : (
                            <Typography className={styles.metadata}>{`${t('shared_string_date')}: -`}</Typography>
                        )}

                        {activePhoto.properties.author ? (
                            <MenuItemWithLines
                                id={'se-photo-author'}
                                compName={t('shared_string_author')}
                                className={`${styles.metadata} ${styles.metadatamulti}`}
                                name={`${t('shared_string_author')}: ${activePhoto.properties.author}`}
                                maxLines={1}
                                showMore={needOpenMoreModal(activePhoto.properties.author)}
                            />
                        ) : (
                            <Typography className={styles.metadata}>{`${t('shared_string_author')}: -`}</Typography>
                        )}
                        {activePhoto.properties.license ? (
                            activePhoto.properties.license.startsWith('Q') ? (
                                <Typography id={'se-photo-license'} className={styles.metadata}>
                                    License:{' '}
                                    <a
                                        href={`https://www.wikidata.org/wiki/${activePhoto.properties.license}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.metadata}
                                    >
                                        {activePhoto.properties.license}
                                    </a>
                                </Typography>
                            ) : (
                                <MenuItemWithLines
                                    id={'se-photo-license'}
                                    compName={t('shared_string_license')}
                                    className={`${styles.metadata} ${styles.metadatamulti}`}
                                    name={`${t('shared_string_license')}: ${activePhoto.properties.license}`}
                                    maxLines={1}
                                    showMore={needOpenMoreModal(activePhoto.properties.license)}
                                />
                            )
                        ) : (
                            <Typography className={styles.metadata}>{`${t('shared_string_license')}: -`}</Typography>
                        )}
                        {activePhoto.properties.description ? (
                            <MenuItemWithLines
                                id={'se-photo-description'}
                                compName={t('shared_string_description')}
                                className={`${styles.metadata} ${styles.metadatamulti}`}
                                name={`${t('shared_string_description')}: ${parseDescription(activePhoto.properties.description).trimStart()}`}
                                maxLines={1}
                                showMore={needOpenMoreModal(parseDescription(activePhoto.properties.description))}
                            />
                        ) : (
                            <Typography
                                className={styles.metadata}
                            >{`${t('shared_string_description')}: -`}</Typography>
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

    function getImageHref() {
        const filename = getPhotoTitle(photo);
        return `https://commons.wikimedia.org/wiki/File:${filename}`;
    }

    return (
        <div
            id={`se-photo-modal-${photo.properties.mediaId}`}
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
                    href={getImageHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <img
                        src={getPhotoUrl({ photo, size: 1280 })}
                        alt={index + 1}
                        style={{ width: '100%', height: getHeight() - MARGIN, objectFit: 'contain' }}
                    />
                </a>
            ) : (
                <Skeleton variant="rectangular" width={getWidth()} height={getHeight() - MARGIN} />
            )}
        </div>
    );
}

PhotosModal.propTypes = {
    photos: PropTypes.array.isRequired,
};

PhotoItem.propTypes = {
    photo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    getWidth: PropTypes.func.isRequired,
    getHeight: PropTypes.func.isRequired,
    activeStep: PropTypes.number.isRequired,
};
