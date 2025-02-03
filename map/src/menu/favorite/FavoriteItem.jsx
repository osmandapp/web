import { ListItemIcon, ListItemText, MenuItem, Typography, Skeleton } from '@mui/material';
import React, { useContext, useMemo, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import { ReactComponent as DirectionIcon } from '../../assets/icons/ic_direction_arrow_16.svg';
import ActionsMenu from '../actions/ActionsMenu';
import styles from '../trackfavmenu.module.css';
import FavoriteItemActions from '../actions/FavoriteItemActions';
import { addShareFavoriteToMap, getColorLocation } from '../../manager/FavoritesManager';
import { MENU_INFO_OPEN_SIZE } from '../../manager/GlobalManager';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { SHARE_TYPE } from '../../manager/ShareManager';
import DividerWithMargin from '../components/dividers/DividerWithMargin';
import ThreeDotsButton from '../components/buttons/ThreeDotsButton';

export const CustomIcon = ({ marker }) => {
    return <div style={{ height: '30px' }} dangerouslySetInnerHTML={{ __html: marker.icon + '' }} />;
};

export default function FavoriteItem({ marker, group, currentLoc, share = false, smartf = null }) {
    const ctx = useContext(AppContext);

    const { ref, inView } = useInView();

    const [openActions, setOpenActions] = useState(false);
    const anchorEl = useRef(null);

    const sharedFile = smartf?.type === SHARE_TYPE;

    function addFavoriteToMap(marker) {
        ctx.setCurrentObjectType(OBJECT_TYPE_FAVORITE);
        let newSelectedGpxFile = {};
        newSelectedGpxFile.markerCurrent = marker;
        if (!ctx.selectedGpxFile.markerPrev || ctx.selectedGpxFile.markerPrev !== ctx.selectedGpxFile.markerCurrent) {
            newSelectedGpxFile.markerPrev = ctx.selectedGpxFile.markerCurrent;
        }
        let file;
        Object.keys(ctx.favorites.mapObjs).forEach((fileId) => {
            if (fileId === group.id) {
                newSelectedGpxFile.nameGroup = group.name;
                Object.values(ctx.favorites.mapObjs[fileId].markers._layers).forEach((m) => {
                    if (m.options.title === marker.title) {
                        file = ctx.favorites.mapObjs[fileId];
                    }
                });
            }
        });
        newSelectedGpxFile.id = group.id;
        newSelectedGpxFile.file = file;
        newSelectedGpxFile.sharedWithMe = sharedFile;
        newSelectedGpxFile.file.name = ctx.favorites.groups.find((g) => g.name === group.name).file.name;
        newSelectedGpxFile.name = marker.title;
        newSelectedGpxFile.zoom = true;
        newSelectedGpxFile.prevState = ctx.selectedGpxFile;
        newSelectedGpxFile.favItem = true;
        ctx.setSelectedWpt(newSelectedGpxFile);
        ctx.setSelectedGpxFile(newSelectedGpxFile);
    }

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
                        <Skeleton
                            variant="rectangular"
                            width={MENU_INFO_OPEN_SIZE + 'px'}
                            height={'var(--menu-item-size)'}
                        />
                    )}
                    {inView && (
                        <MenuItem
                            className={styles.item}
                            id={'se-fav-item-name-' + marker.title}
                            onClick={() => {
                                if (share) {
                                    addShareFavoriteToMap(marker, ctx);
                                } else {
                                    addFavoriteToMap(marker);
                                }
                            }}
                        >
                            <ListItemIcon className={styles.icon}>
                                <CustomIcon marker={marker} />
                            </ListItemIcon>
                            <ListItemText>
                                <MenuItemWithLines name={marker.title} maxLines={1} />
                                <FavInfo />
                            </ListItemText>
                            {!share && !sharedFile && (
                                <ThreeDotsButton
                                    name={'action_menu_group'}
                                    tip={'shared_string_menu'}
                                    id={`se-actions-${marker.title}`}
                                    setOpenActions={setOpenActions}
                                    anchorEl={anchorEl}
                                />
                            )}
                        </MenuItem>
                    )}
                    <DividerWithMargin margin={'64px'} />
                    {inView && (
                        <ActionsMenu
                            open={openActions}
                            setOpen={setOpenActions}
                            anchorEl={anchorEl}
                            favItems={true}
                            actions={
                                <FavoriteItemActions marker={marker} group={group} setOpenActions={setOpenActions} />
                            }
                        />
                    )}
                </div>
            </>
        );
    }, [inView, marker, marker.locDist, openActions, ctx.openedPopper]);
}
