import { ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as DirectionIcon } from '../../assets/icons/ic_direction_arrow_16.svg';
import { getColorLocation } from '../../manager/FavoritesManager';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { convertMeters, getLargeLengthUnit, LARGE_UNIT } from '../settings/units/UnitsConverter';
import styles from '../trackfavmenu.module.css';

export const CustomIcon = ({ marker }) => {
    return <div style={{ height: '30px' }} dangerouslySetInnerHTML={{ __html: marker.icon + '' }} />;
};

export function FavInfo({ marker, currentLoc, unitsSettings }) {
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

export function FavoriteItemContent({ marker, name, currentLoc, unitsSettings, children }) {
    const title = name ?? marker.name;

    return (
        <>
            <ListItemIcon className={styles.icon}>
                <CustomIcon marker={marker} />
            </ListItemIcon>
            <ListItemText>
                <MenuItemWithLines name={title} maxLines={1} />
                <FavInfo marker={marker} currentLoc={currentLoc} unitsSettings={unitsSettings} />
            </ListItemText>
            {children}
        </>
    );
}
