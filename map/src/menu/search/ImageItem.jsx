import { useInView } from 'react-intersection-observer';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ImageListItem, Skeleton } from '@mui/material';
import { WIKI_IMAGE_BASE_URL } from '../../manager/SearchManager';
import AppContext from '../../context/AppContext';
import styles from '../search/search.module.css';

export default function ImageItem({ photo, index, handleImageLoad, isLoaded }) {
    const ctx = useContext(AppContext);
    const [isSelected, setIsSelected] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handlePhotoClick = useCallback((index) => {
        ctx.setSelectedPhotoInd(index);
    }, []);

    useEffect(() => {
        setIsSelected(ctx.selectedPhotoInd === index);
    }, [ctx.selectedPhotoInd, index]);

    return (
        <ImageListItem ref={ref} className={styles.imageItem} onClick={() => handlePhotoClick(index)}>
            {!isLoaded && <Skeleton className={styles.skeleton} />}
            {inView && (
                <img
                    src={`${WIKI_IMAGE_BASE_URL}${photo.properties.imageTitle}?width=300`}
                    alt={photo.properties.imageTitle}
                    className={styles.image}
                    onLoad={() => handleImageLoad(index)}
                />
            )}
            {isSelected && <div className={styles.selectedImage} />}
        </ImageListItem>
    );
}
