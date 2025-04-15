import { useInView } from 'react-intersection-observer';
import React, { useCallback, useContext, useEffect, useState, useRef } from 'react';
import { ImageListItem, Skeleton } from '@mui/material';
import AppContext from '../../../context/AppContext';
import styles from '../search.module.css';
import { getPhotoUrl, hasExtension } from './PhotoGallery';
import { IMAGE_OSM_TAG } from '../../../infoblock/components/wpt/WptTagsProvider';
import PhotoLink from './PhotoLink';

export default function ImageItem({ photo, index, handleImageLoad, isLoaded }) {
    const ctx = useContext(AppContext);
    const [isSelected, setIsSelected] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const itemRef = useRef(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const defaultView = photo.properties.osmTag === IMAGE_OSM_TAG && !hasExtension(photo.properties.imageTitle);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const combinedRef = (node) => {
        ref(node); // assign the node to useInView ref
        itemRef.current = node; // assign the node to the scroll ref
    };

    const handlePhotoClick = useCallback((index) => {
        if (defaultView) {
            window.open(photo.properties.imageTitle, '_blank', 'noopener,noreferrer');
            return;
        }
        ctx.setSelectedPhotoInd(index);
    }, []);

    useEffect(() => {
        setIsSelected(ctx.selectedPhotoInd === index);
    }, [ctx.selectedPhotoInd, index]);

    useEffect(() => {
        if (isSelected && itemRef.current) {
            itemRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [isSelected]);

    return (
        <ImageListItem
            ref={combinedRef}
            className={styles.imageItem}
            onClick={() => handlePhotoClick(index)}
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
        >
            {!isLoaded && !defaultView && <Skeleton className={styles.skeleton} />}
            {inView &&
                (defaultView ? (
                    <PhotoLink
                        key={index + 1}
                        size={'156px'}
                        style={styles.linkImage}
                        link={photo.properties.imageTitle}
                    />
                ) : (
                    <img
                        src={getPhotoUrl({ photo })}
                        alt={photo.properties.imageTitle}
                        className={styles.image}
                        onLoad={() => handleImageLoad(index)}
                    />
                ))}
            {(isSelected || isHovered) && <div className={styles.selectedImage} />}
        </ImageListItem>
    );
}
