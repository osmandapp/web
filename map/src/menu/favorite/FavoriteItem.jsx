import { ListItemIcon, ListItemText, MenuItem, Typography, Skeleton } from '@mui/material';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AppContext, { FAVORITES_URL_PARAM_FOLDER } from '../../context/AppContext';
import {
    FAVORITE_FILE_TYPE,
    addShareFavoriteToMap,
    getColorLocation,
    getFavoriteId,
    openFavoriteObj,
} from '../../manager/FavoritesManager';
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as DirectionIcon } from '../../assets/icons/ic_direction_arrow_16.svg';
import ActionsMenu from '../actions/ActionsMenu';
import styles from '../trackfavmenu.module.css';
import FavoriteItemActions from '../actions/FavoriteItemActions';
import { MENU_INFO_OPEN_SIZE } from '../../manager/GlobalManager';
import MenuItemWithLines from '../components/MenuItemWithLines';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import ThreeDotsButton from '../../frame/components/btns/ThreeDotsButton';
import { convertMeters, getLargeLengthUnit, LARGE_UNIT } from '../settings/units/UnitsConverter';
import { useTranslation } from 'react-i18next';
import { SHARE_TYPE } from '../share/shareConstants';

export const CustomIcon = ({ marker }) => {
    return <div style={{ height: '30px' }} dangerouslySetInnerHTML={{ __html: marker.icon + '' }} />;
};

function FavInfo({ marker, currentLoc, unitsSettings }) {
    const { t } = useTranslation();

    const comma = marker.locDist > 0 && marker?.layer?.options?.address ? ', ' : '';
    const address = marker?.layer?.options?.address ? `${comma}${marker.layer.options.address}` : '';

    return (
        <div style={{ display: 'flex', alignItems: 'centre' }}>
            {marker.locDist > 0 && (
                <ListItemIcon sx={{ mr: '-23px !important', fill: getColorLocation(currentLoc), mt: '2px' }}>
                    <DirectionIcon />
                </ListItemIcon>
            )}
            {marker.locDist > 0 && (
                <Typography
                    variant="body2"
                    className={styles.favLocationInfo}
                    sx={{ color: getColorLocation(currentLoc) }}
                >
                    {`${convertMeters(marker.locDist, unitsSettings.len, LARGE_UNIT).toFixed(0)} ${t(getLargeLengthUnit({ unitsSettings }))}`}
                </Typography>
            )}
            <Typography id={'se-fav-item-address'} variant="body2" className={styles.groupInfo} noWrap>
                {address}
            </Typography>
        </div>
    );
}

export function addFavoriteToMap({ group, marker, ctx, sharedFile = false, mapObj = false, openedFolder = undefined }) {
    const newSelectedGpxFile = {};
    if (marker?.layer) {
        marker.latlng = marker.layer.getLatLng();
    }
    newSelectedGpxFile.markerCurrent = { ...marker, groupId: group.id };
    if (!ctx.selectedGpxFile.markerPrev || ctx.selectedGpxFile.markerPrev !== ctx.selectedGpxFile.markerCurrent) {
        newSelectedGpxFile.markerPrev = ctx.selectedGpxFile.markerCurrent;
    }
    let trackData;
    Object.keys(ctx.favorites.mapObjs).forEach((fileId) => {
        if (fileId === group.id) {
            newSelectedGpxFile.nameGroup = group.name;
            Object.values(ctx.favorites.mapObjs[fileId].markers._layers).forEach((m) => {
                if (m.options.name === marker.name) {
                    trackData = ctx.favorites.mapObjs[fileId];
                }
            });
        }
    });
    newSelectedGpxFile.id = group.id;
    newSelectedGpxFile.key = `${group.id}:${marker.name}`;
    newSelectedGpxFile.trackData = trackData;
    newSelectedGpxFile.sharedWithMe = sharedFile;
    newSelectedGpxFile.file = ctx.favorites.groups.find((g) => g.name === group.name).file;
    newSelectedGpxFile.name = marker.name;
    newSelectedGpxFile.prevState = ctx.selectedGpxFile;
    newSelectedGpxFile.favItem = true;
    newSelectedGpxFile.mapObj = mapObj;
    newSelectedGpxFile.openedFolder = openedFolder;

    openFavoriteObj(ctx, newSelectedGpxFile);
}

export default function FavoriteItem({ marker, group, currentLoc, share = false, smartf = null }) {
    const ctx = useContext(AppContext);
    const [searchParams] = useSearchParams();

    const { ref, inView } = useInView();

    const [openActions, setOpenActions] = useState(false);
    const anchorEl = useRef(null);
    const menuItemRef = useRef(null);

    const favId = getFavoriteId(marker.layer);

    const setHover = useCallback(
        (show) => {
            ctx.setSelectedWptId({
                id: favId,
                show,
                type: FAVORITE_FILE_TYPE,
                obj: show ? marker.layer : undefined,
                markerOptions: show
                    ? {
                          color: marker.layer.options?.color,
                          background: marker.layer.options?.background,
                          iconHtml: marker.layer.options?.icon?.options?.html,
                      }
                    : undefined,
            });
            if (menuItemRef.current) {
                menuItemRef.current.classList.toggle(styles.itemHovered, show);
            }
        },
        [favId, marker.layer]
    );

    useEffect(() => {
        const hovered = ctx.selectedWptId?.id === favId;
        if (menuItemRef.current) {
            menuItemRef.current.classList.toggle(styles.itemHovered, hovered);
        }
    }, [ctx.selectedWptId?.id]);

    const sharedFile = smartf?.type === SHARE_TYPE;

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
                            ref={menuItemRef}
                            className={styles.item}
                            id={'se-fav-item-name-' + marker.name}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            onClick={() => {
                                if (share) {
                                    addShareFavoriteToMap(marker, ctx);
                                } else {
                                    const openedFolder = searchParams.get(FAVORITES_URL_PARAM_FOLDER) ?? undefined;
                                    addFavoriteToMap({ group, marker, ctx, sharedFile, openedFolder });
                                }
                            }}
                        >
                            <ListItemIcon className={styles.icon}>
                                <CustomIcon marker={marker} />
                            </ListItemIcon>
                            <ListItemText>
                                <MenuItemWithLines name={marker.name} maxLines={1} />
                                <FavInfo marker={marker} currentLoc={currentLoc} unitsSettings={ctx.unitsSettings} />
                            </ListItemText>
                            {!share && !sharedFile && (
                                <ThreeDotsButton
                                    name={'action_menu_group'}
                                    tip={'shared_string_menu'}
                                    id={`se-actions-${marker.name}`}
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
    }, [inView, marker, openActions, ctx.openedPopper]);
}
