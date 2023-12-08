import { IconButton, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React, { useContext, useMemo, useRef, useState } from 'react';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import { ReactComponent as DirectionIcon } from '../../assets/icons/ic_direction_arrow_16.svg';
import ActionsMenu from '../actions/ActionsMenu';
import styles from '../tracks/trackmenu.module.css';
import FavoriteItemActions from '../actions/FavoriteItemActions';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';

export default function FavoriteItem({ marker, group, currentLoc }) {
    const ctx = useContext(AppContext);

    const [hoverIconInfo, setHoverIconInfo] = useState(false);
    const [openActions, setOpenActions] = useState(false);
    const anchorEl = useRef(null);

    const colorLocation = currentLoc === LOCATION_UNAVAILABLE ? '#ff8800' : '#237bff';

    function addFavoriteToMap(marker) {
        ctx.setCurrentObjectType(OBJECT_TYPE_FAVORITE);
        let newSelectedGpxFile = {};
        newSelectedGpxFile.markerCurrent = marker;
        if (!ctx.selectedGpxFile.markerPrev || ctx.selectedGpxFile.markerPrev !== ctx.selectedGpxFile.markerCurrent) {
            newSelectedGpxFile.markerPrev = ctx.selectedGpxFile.markerCurrent;
        }
        let file;
        Object.keys(ctx.favorites).forEach((favorite) => {
            if (favorite === group.name) {
                newSelectedGpxFile.nameGroup = favorite;
                Object.values(ctx.favorites[favorite].markers._layers).forEach((m) => {
                    if (m.options.title === marker.title) {
                        file = ctx.favorites[favorite];
                    }
                });
            }
        });
        newSelectedGpxFile.file = file;
        newSelectedGpxFile.file.name = ctx.favorites.groups.find((g) => g.name === group.name).file.name;
        newSelectedGpxFile.name = marker.title;
        newSelectedGpxFile.zoom = true;
        newSelectedGpxFile.prevState = ctx.selectedGpxFile;
        ctx.setUpdateInfoBlock(true);
        ctx.setSelectedGpxFile(newSelectedGpxFile);
    }

    const CustomIcon = () => {
        return <div style={{ height: '30px' }} dangerouslySetInnerHTML={{ __html: marker.icon + '' }} />;
    };

    const FavInfo = () => {
        const maxLines = 2;
        const locDistText = marker.locDist ? `${marker.locDist} km ` : '';
        const addressText = getAddress();

        const infoStyle = {
            fontSize: '0.875rem',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: maxLines,
            wordBreak: 'break-word',
            whiteSpace: 'pre-wrap',
        };

        const iconStyle = {
            fill: marker.locDist ? colorLocation : 'inherit',
            marginRight: marker.locDist ? '-15px !important' : '0',
        };

        return (
            <div style={infoStyle}>
                {marker.locDist && (
                    <ListItemIcon sx={iconStyle}>
                        <DirectionIcon />
                    </ListItemIcon>
                )}
                <span style={{ color: marker.locDist ? colorLocation : 'inherit' }}>{locDistText}</span>
                <span>{addressText}</span>
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
                <MenuItem
                    className={styles.item}
                    divider
                    id={'se-fav-item-' + marker.title}
                    onClick={() => addFavoriteToMap(marker)}
                >
                    <ListItemIcon className={styles.icon}>
                        <CustomIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="inherit" className={styles.groupName} noWrap>
                            {marker.title}
                        </Typography>
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
                <ActionsMenu
                    open={openActions}
                    setOpen={setOpenActions}
                    anchorEl={anchorEl}
                    actions={<FavoriteItemActions marker={marker} group={group} setOpenActions={setOpenActions} />}
                />
            </>
        );
    }, [marker, marker.locDist, openActions, hoverIconInfo, ctx.openedPopper]);
}
