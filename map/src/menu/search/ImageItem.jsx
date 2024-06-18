import { useInView } from 'react-intersection-observer';
import React, { useCallback, useContext } from 'react';
import { ImageListItem, Skeleton } from '@mui/material';
import { WIKI_IMAGE_BASE_URL } from '../../manager/SearchManager';
import AppContext from '../../context/AppContext';

export default function ImageItem({ photo, index, handleImageLoad, isLoaded }) {
    const ctx = useContext(AppContext);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handlePhotoClick = useCallback((index) => {
        ctx.setSelectedPhotoInd(index);
    }, []);

    return (
        <ImageListItem ref={ref} onClick={() => handlePhotoClick(index)}>
            {!isLoaded && <Skeleton variant="rectangular" width="100%" />}
            {inView && (
                <img
                    src={`${WIKI_IMAGE_BASE_URL}${photo.properties.imageTitle}?width=300`}
                    alt={photo.properties.imageTitle}
                    style={{
                        display: isLoaded ? 'block' : 'none',
                        width: '156px',
                        height: '156px',
                        objectFit: 'cover',
                    }}
                    onLoad={() => handleImageLoad(index)}
                />
            )}
        </ImageListItem>
    );
}
