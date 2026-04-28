import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, Skeleton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useWindowSize } from '../../../util/hooks/useWindowSize';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as BackForward } from '../../../assets/icons/ic_arrow_forward.svg';
import headerStyles from '../../trackfavmenu.module.css';
import styles from '../search.module.css';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';
import { ReactComponent as WikimediaIcon } from '../../../assets/features/ic_action_logo_wikimedia.svg';
import AppContext from '../../../context/AppContext';
import { useInView } from 'react-intersection-observer';
import { getPhotoUrl } from './PhotoGallery';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import { useTranslation } from 'react-i18next';
import { otherImgTags } from '../../../infoblock/components/wpt/WptTagsProvider';
import PropTypes from 'prop-types';
import { fmt } from '../../../util/dateFmt';
import { getPhotoTitle } from '../../../manager/SearchManager';

const HEADER_HEIGHT = 60;
const LEFT_MARGIN = 423;
const FOOTER_HEIGHT = 88;
const METADATA_MARGIN = 62;

export default function PhotosModal({ photos }) {
    const ctx = useContext(AppContext);
    const { t, i18n } = useTranslation();

    const swiperRef = useRef(null);
    const [width, height] = useWindowSize();

    const [open, setOpen] = useState(true);
    const [activeStep, setActiveStep] = useState(ctx.selectedPhotoInd);
    const [showInfo, setShowInfo] = useState(false);
    const [activePhoto, setActivePhoto] = useState(null);

    const handleClose = () => ctx.setSelectedPhotoInd(-1);

    const handleNext = () => ctx.setSelectedPhotoInd(Math.min(activeStep + 1, photos.length - 1));

    const handleBack = () => ctx.setSelectedPhotoInd(Math.max(activeStep - 1, 0));

    const handleStepChange = (step) => {
        setActiveStep(step);
        ctx.setSelectedPhotoInd(step);
    };

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

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight' || event.key === ' ') {
                handleNext();
            } else if (event.key === 'ArrowLeft' || event.key === 'Backspace') {
                handleBack();
            }
        };
        globalThis.addEventListener('keydown', handleKeyDown);

        return () => {
            globalThis.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleNext, handleBack]);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.activeIndex !== activeStep) {
            swiperRef.current.slideTo(activeStep);
        }
    }, [activeStep]);

    const getHeight = () => height - HEADER_HEIGHT;
    const getWidth = () => width - LEFT_MARGIN;

    const needOpenMoreModal = (str) => {
        const textWidth = str.length * 16 * 0.6;
        return textWidth > getWidth() - METADATA_MARGIN;
    };

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
                            {t('web:photos')}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Swiper
                    className={styles.photoSwiper}
                    initialSlide={activeStep}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => handleStepChange(swiper.activeIndex)}
                >
                    {photos.map((photo, index) => (
                        <SwiperSlide key={index}>
                            <PhotoItem photo={photo} index={index} activeStep={activeStep} />
                        </SwiperSlide>
                    ))}
                </Swiper>
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
                        <Box className={styles.photoFooterContent}>
                            <WikimediaIcon className={styles.attributionIcon} />
                            <Box className={styles.photoMetadataContainer}>
                                {activePhoto.properties.date ? (
                                    (() => {
                                        const label = t('shared_string_date');
                                        const text = `${label}: ${formatDate(activePhoto.properties.date)}`;

                                        return (
                                            <MenuItemWithLines
                                                id={'se-photo-date'}
                                                compName={label}
                                                className={`${styles.metadata} ${styles.metadatamulti}`}
                                                name={text}
                                                maxLines={1}
                                                showMore={needOpenMoreModal(text)}
                                            />
                                        );
                                    })()
                                ) : (
                                    <Typography className={styles.metadata}>
                                        {`${t('shared_string_date')}: -`}
                                    </Typography>
                                )}

                                {activePhoto.properties.author ? (
                                    (() => {
                                        const label = t('shared_string_author');
                                        const text = `${label}: ${activePhoto.properties.author}`;

                                        return (
                                            <MenuItemWithLines
                                                id={'se-photo-author'}
                                                compName={label}
                                                className={`${styles.metadata} ${styles.metadatamulti}`}
                                                name={text}
                                                maxLines={1}
                                                showMore={needOpenMoreModal(text)}
                                            />
                                        );
                                    })()
                                ) : (
                                    <Typography className={styles.metadata}>
                                        {`${t('shared_string_author')}: -`}
                                    </Typography>
                                )}

                                {activePhoto.properties.license ? (
                                    activePhoto.properties.license.startsWith('Q') ? (
                                        <Typography id={'se-photo-license'} className={styles.metadata}>
                                            {t('shared_string_license')}:{' '}
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
                                        (() => {
                                            const label = t('shared_string_license');
                                            const text = `${label}: ${activePhoto.properties.license}`;

                                            return (
                                                <MenuItemWithLines
                                                    id={'se-photo-license'}
                                                    compName={label}
                                                    className={`${styles.metadata} ${styles.metadatamulti}`}
                                                    name={text}
                                                    maxLines={1}
                                                    showMore={needOpenMoreModal(text)}
                                                />
                                            );
                                        })()
                                    )
                                ) : (
                                    <Typography className={styles.metadata}>
                                        {`${t('shared_string_license')}: -`}
                                    </Typography>
                                )}

                                {activePhoto.properties.description ? (
                                    (() => {
                                        const label = t('shared_string_description');
                                        const text = `${label}: ${parseDescription(activePhoto.properties.description, i18n.language).trimStart()}`;

                                        return (
                                            <MenuItemWithLines
                                                id={'se-photo-description'}
                                                compName={label}
                                                className={`${styles.metadata} ${styles.metadatamulti}`}
                                                name={text}
                                                maxLines={1}
                                                showMore={needOpenMoreModal(text)}
                                            />
                                        );
                                    })()
                                ) : (
                                    <Typography className={styles.metadata}>
                                        {`${t('shared_string_description')}: -`}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </AppBar>
                )}
            </Box>
        </Drawer>
    );
}

PhotosModal.propTypes = {
    photos: PropTypes.array,
};

function PhotoItem({ photo, index, activeStep }) {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
    const [width, height] = useWindowSize();
    const MARGIN = 95;

    const shouldLoadImage = inView || (index >= activeStep && index < activeStep + 5);
    const photoWidth = width - LEFT_MARGIN;
    const photoHeight = height - HEADER_HEIGHT - FOOTER_HEIGHT;

    const getImageHref = () => `https://commons.wikimedia.org/wiki/File:${getPhotoTitle(photo)}`;

    return (
        <div
            id={`se-photo-modal-${photo.properties.mediaId}`}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
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
                        style={{ width: '100%', height: photoHeight - MARGIN, objectFit: 'contain' }}
                    />
                </a>
            ) : (
                <Skeleton variant="rectangular" width={photoWidth} height={photoHeight - MARGIN} />
            )}
        </div>
    );
}

PhotoItem.propTypes = {
    photo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    activeStep: PropTypes.number.isRequired,
};

function hasFooterInfo(photo) {
    return (
        photo?.properties?.date ||
        photo?.properties?.author ||
        photo?.properties?.license ||
        photo?.properties?.description
    );
}

function formatDate(dateStr) {
    if (!dateStr) {
        return '';
    }
    const clean = dateStr.startsWith('+') ? dateStr.slice(1) : dateStr;
    if (/^\d{4}$/.test(clean)) {
        return clean;
    }
    if (/^\d{4}-\d{2}$/.test(clean)) {
        const d = new Date(clean + '-01');
        return isNaN(d) ? dateStr : fmt.monthYearLong(d);
    }
    const d = new Date(clean);

    return isNaN(d) ? dateStr : fmt.dMMMMY(d);
}

function parseDescription(descriptionStr, language) {
    if (!descriptionStr) {
        return '';
    }
    try {
        const parsed = JSON.parse(descriptionStr);
        const lang = language?.split('-')[0] || 'en';
        const firstKey = Object.keys(parsed)[0];

        return parsed[lang] ?? parsed['en'] ?? (firstKey ? parsed[firstKey] : descriptionStr);
    } catch (e) {
        return descriptionStr;
    }
}
