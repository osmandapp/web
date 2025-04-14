import React, { useContext, useState } from 'react';
import { Box, Button, Divider, Grid, ListItemText, MenuItem, Typography } from '@mui/material';
import { getPhotoTitle, USE_OSMAND_SERVER, OSMAND_WIKI_BASE_URL, COMMONS_WIKI_BASE_URL } from '../../../manager/SearchManager';
import styles from '../search.module.css';
import { useTranslation } from 'react-i18next';
import AppContext from '../../../context/AppContext';
import { IMAGE_OSM_TAG, otherImgTags } from '../../../infoblock/components/wpt/WptTagsProvider';
import PhotoLink from './PhotoLink';
import md5 from 'blueimp-md5';

export function getPhotoUrl(photo, size = 300) {
    const title = getPhotoTitle(photo);
    if (otherImgTags(photo.properties?.osmTag)) {
        return title;
    }
    if (USE_OSMAND_SERVER) {
        const hash = md5(title);
        const hashPrefix = hash.substring(0, 1) + "/" + hash.substring(0, 2);
        return `${OSMAND_WIKI_BASE_URL}${hashPrefix}/${title}?width=${size}`;
    } else {
        return `${COMMONS_WIKI_BASE_URL}${title}?width=${size}`;
    }
}

export function hasExtension(imgName) {
    const imageExtensions = ['.jpeg', '.jpg', '.png', '.gif'];
    const extension = imgName.slice(imgName.lastIndexOf('.')).toLowerCase();
    return imageExtensions.includes(extension);
}

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
        return photos.features
            .filter((photo) => {
                if (otherImgTags(photo?.properties?.osmTag)) {
                    return true;
                }
                const title = getPhotoTitle(photo);
                return hasExtension(title);
            })
            .sort((a, b) => a.properties.rowNum - b.properties.rowNum)
            .reduce((acc, photo) => {
                const uniqueKey = photo.properties.mediaId || photo.properties.imageTitle;
                if (!acc.find((item) => (item.properties.mediaId || item.properties.imageTitle) === uniqueKey)) {
                    photo.properties.imageTitle = photo.properties.imageTitle.replaceAll(' ', '_');
                    acc.push(photo);
                }
                return acc;
            }, []);
    }

    return (
        <>
            {filteredPhotos.length > 0 && (
                <Box id={'se-wpt-photos'} sx={{ width: '100%' }}>
                    <MenuItem className={styles.photoTitle}>
                        <ListItemText>
                            <Typography className={styles.photoTitleText}>{t('online_photos')}</Typography>
                        </ListItemText>
                    </MenuItem>
                    <Grid container spacing={-0.5} sx={{ p: 2, width: '341px' }}>
                        {filteredPhotos.slice(0, 1).map((photo, index) => {
                            const defaultView =
                                photo.properties.osmTag === IMAGE_OSM_TAG && !hasExtension(photo.properties.imageTitle);
                            if (defaultView) {
                                return (
                                    <PhotoLink
                                        key={index + 1}
                                        size={'148px'}
                                        style={styles.mainPhotoGallery}
                                        link={photo.properties.imageTitle}
                                    />
                                );
                            } else {
                                return (
                                    <Grid item xs={12} sm={6} key={index}>
                                        {!error[index] && (
                                            <img
                                                id={`se-photo-${photo.properties.mediaId}`}
                                                onLoad={handleImageLoad}
                                                onError={() => handleImageError(index)}
                                                onClick={() => handleImageClick(index)}
                                                src={getPhotoUrl(photo)}
                                                alt={`Photo ${index + 1}`}
                                                className={styles.mainPhotoGallery}
                                                style={{
                                                    display: loading ? 'none' : 'block',
                                                }}
                                            />
                                        )}
                                    </Grid>
                                );
                            }
                        })}
                        <Grid item xs={12} sm={6} container>
                            {filteredPhotos.slice(1, 5).map((photo, index) => {
                                const defaultView =
                                    photo.properties.osmTag === IMAGE_OSM_TAG &&
                                    !hasExtension(photo.properties.imageTitle);
                                if (defaultView) {
                                    return (
                                        <PhotoLink
                                            key={index + 1}
                                            size={'71px'}
                                            style={styles.littlePhotoGallery}
                                            link={photo.properties.imageTitle}
                                        />
                                    );
                                } else {
                                    return (
                                        <Grid item xs={6} key={index + 1}>
                                            {!error[index + 1] && (
                                                <img
                                                    onLoad={handleImageLoad}
                                                    onError={() => handleImageError(index + 1)}
                                                    onClick={() => handleImageClick(index + 1)}
                                                    src={getPhotoUrl(photo)}
                                                    alt={`Photo ${index + 2}`}
                                                    className={styles.littlePhotoGallery}
                                                    style={{
                                                        display: loading ? 'none' : 'block',
                                                    }}
                                                />
                                            )}
                                        </Grid>
                                    );
                                }
                            })}
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
