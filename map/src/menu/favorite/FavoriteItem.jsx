import { IconButton, ListItemIcon, ListItemText, MenuItem, Typography, Skeleton, Divider } from '@mui/material';
import React, { useContext, useMemo, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import { ReactComponent as DirectionIcon } from '../../assets/icons/ic_direction_arrow_16.svg';
import ActionsMenu from '../actions/ActionsMenu';
import styles from '../trackfavmenu.module.css';
import FavoriteItemActions from '../actions/FavoriteItemActions';
import { getColorLocation } from '../../manager/FavoritesManager';
import { MENU_INFO_OPEN_SIZE } from '../../manager/GlobalManager';
import MenuItemWithLines from '../components/MenuItemWithLines';

export default function FavoriteItem({ marker, group, currentLoc }) {
    const ctx = useContext(AppContext);

    const { ref, inView } = useInView();

    const [hoverIconInfo, setHoverIconInfo] = useState(false);
    const [openActions, setOpenActions] = useState(false);
    const anchorEl = useRef(null);

    function addFavoriteToMap(marker) {
        ctx.setCurrentObjectType(OBJECT_TYPE_FAVORITE);
        let newSelectedGpxFile = {};
        newSelectedGpxFile.markerCurrent = marker;
        if (!ctx.selectedGpxFile.markerPrev || ctx.selectedGpxFile.markerPrev !== ctx.selectedGpxFile.markerCurrent) {
            newSelectedGpxFile.markerPrev = ctx.selectedGpxFile.markerCurrent;
        }
        let file;
        Object.keys(ctx.favorites.mapObjs).forEach((favorite) => {
            if (favorite === group.name) {
                newSelectedGpxFile.nameGroup = favorite;
                Object.values(ctx.favorites.mapObjs[favorite].markers._layers).forEach((m) => {
                    if (m.options.title === marker.title) {
                        file = ctx.favorites.mapObjs[favorite];
                    }
                });
            }
        });
        newSelectedGpxFile.file = file;
        newSelectedGpxFile.file.name = ctx.favorites.groups.find((g) => g.name === group.name).file.name;
        newSelectedGpxFile.name = marker.title;
        newSelectedGpxFile.zoom = true;
        newSelectedGpxFile.prevState = ctx.selectedGpxFile;
        newSelectedGpxFile.favItem = true;
        ctx.setSelectedWpt(newSelectedGpxFile);
        ctx.setSelectedGpxFile(newSelectedGpxFile);
    }

    const CustomIcon = () => {
        return <div style={{ height: '30px' }} dangerouslySetInnerHTML={{ __html: marker.icon + '' }} />;
    };

    const FavInfo = () => {
        return (
            <div style={{ display: 'flex', alignItems: 'centre' }}>
                {marker.locDist && (
                    <ListItemIcon sx={{ mr: '-23px !important', fill: getColorLocation(currentLoc), mt: '2px' }}>
                        <DirectionIcon />
                    </ListItemIcon>
                )}
                {marker.locDist && (
                    <Typography
                        variant="body2"
                        className={styles.favLocationInfo}
                        sx={{ color: getColorLocation(currentLoc) }}
                    >
                        {`${marker.locDist} km`}
                    </Typography>
                )}
                <Typography id={'se-fav-item-address'} variant="body2" className={styles.groupInfo} noWrap>
                    {getAddress()}
                </Typography>
            </div>
        );
    };

    function getAddress() {
        const comma = marker.locDist && marker?.layer?.options?.address ? ', ' : '';
        return marker?.layer?.options?.address ? `${comma}${marker.layer.options.address}` : '';
    }

    return useMemo(() => {
        return (
            <>
                <div ref={ref}>
                    {inView || (
                        <Skeleton variant="rectangular" width={MENU_INFO_OPEN_SIZE} height={'var(--menu-item-size)'} />
                    )}
                    {inView && (
                        <MenuItem
                            className={styles.item}
                            id={'se-fav-item-name-' + marker.title}
                            onClick={() => addFavoriteToMap(marker)}
                        >
                            <ListItemIcon className={styles.icon}>
                                <CustomIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <MenuItemWithLines name={marker.title} maxLines={2} />
                                <FavInfo />
                            </ListItemText>
                            <IconButton
                                id={`se-actions-${marker.title}`}
                                className={styles.sortIcon}
                                onMouseEnter={() => setHoverIconInfo(true)}
                                onMouseLeave={() => setHoverIconInfo(false)}
                                onClick={(e) => {
                                    setOpenActions(true);
                                    ctx.setOpenedPopper(anchorEl);
                                    e.stopPropagation();
                                }}
                                ref={anchorEl}
                            >
                                {hoverIconInfo ? <MenuIconHover /> : <MenuIcon />}
                            </IconButton>
                        </MenuItem>
                    )}
                    <Divider className={styles.dividerItem} />
                    {inView && (
                        <ActionsMenu
                            open={openActions}
                            setOpen={setOpenActions}
                            anchorEl={anchorEl}
                            actions={
                                <FavoriteItemActions marker={marker} group={group} setOpenActions={setOpenActions} />
                            }
                        />
                    )}
                </div>
            </>
        );
    }, [inView, marker, marker.locDist, openActions, hoverIconInfo, ctx.openedPopper]);
}
