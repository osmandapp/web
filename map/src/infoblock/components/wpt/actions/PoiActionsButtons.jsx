import { Box, IconButton, Tooltip } from '@mui/material';
import styles from '../../../infoblock.module.css';
import { ReactComponent as AddFavoriteIcon } from '../../../../assets/icons/ic_action_favorite_outlined.svg';
import { ReactComponent as ShareIcon } from '../../../../assets/icons/ic_action_gshare_dark.svg';
import { ReactComponent as DirectionFromIcon } from '../../../../assets/icons/ic_action_route_direction_from_here.svg';
import { ReactComponent as NavigationIcon } from '../../../../assets/icons/ic_action_gdirections_dark.svg';
import React, { useContext } from 'react';
import AppContext from '../../../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { directionFrom, directionTo } from './locationActions';
import { ADDRESS_NOT_FOUND } from '../WptDetails';
import { LatLng } from 'leaflet';
import { LOGIN_URL, MAIN_URL_WITH_SLASH } from '../../../../manager/GlobalManager';
import { useNavigate } from 'react-router-dom';

export default function PoiActionsButtons({ wpt }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const navigate = useNavigate();

    const [zoom, lat, lon] = (window.location.hash ?? '').replace('#', '').split('/');

    const hasPoiTags = wpt.type.isPoi || wpt.type.isSearch || (wpt?.type.isWikiPoi && ctx.selectedWpt.poi);

    function addToFavorite() {
        if (ctx.loginUser) {
            const location =
                ctx.selectedWpt?.poi?.latlng ??
                new LatLng(ctx.selectedWpt?.poi.geometry.coordinates[1], ctx.selectedWpt?.poi.geometry.coordinates[0]);
            ctx.setAddFavorite({
                ...ctx.addFavorite,
                poi: ctx.selectedWpt?.poi,
                address: wpt.address,
                location,
            });
        } else {
            navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.search + window.location.hash);
        }
    }

    function sharePoi() {
        const host = window.location.host;

        if (!zoom || !lat || !lon) {
            return;
        }

        const roundedLat = Number(lat).toFixed(5);
        const roundedLon = Number(lon).toFixed(5);

        const geoLink = `geo:${roundedLat},${roundedLon}?z=${zoom}`;
        const mapUrl = `https://${host}/map?pin=${roundedLat},${roundedLon}#${zoom}/${roundedLat}/${roundedLon}`;

        const name = wpt.name ? `${wpt.name}\n` : '';
        const poiType = wpt.poiType ? `${wpt.poiType}\n` : '';
        const address = wpt?.address !== ADDRESS_NOT_FOUND ? `${wpt.address}\n` : '';

        const shareText = `${name}${poiType}${address}Location: ${geoLink}\n${mapUrl}`;

        navigator.clipboard
            .writeText(shareText)
            .then(() => {
                ctx.setNotification({
                    text: 'Information about the selected favorite has been copied to clipboard',
                    severity: 'success',
                });
            })
            .catch(() => {
                ctx.setNotification({ text: 'Failed to copy favorite information', severity: 'error' });
            });
    }

    return (
        <>
            <Box className={styles.wptActionButtonContainer}>
                {hasPoiTags && (
                    <Tooltip title={t('favourites_context_menu_add')} arrow placement="bottom">
                        <IconButton
                            id={'se-add-poi-to-fav-item'}
                            className={styles.wptActionsButtons}
                            onClick={addToFavorite}
                        >
                            <AddFavoriteIcon className={styles.wptActionButtonIcon} />
                        </IconButton>
                    </Tooltip>
                )}
                <Tooltip title={t('shared_string_share')} arrow placement="bottom">
                    <IconButton id={'se-share-fav-item'} className={styles.wptActionsButtons} onClick={sharePoi}>
                        <ShareIcon className={styles.wptActionButtonIcon} />
                    </IconButton>
                </Tooltip>
                <Tooltip title={t('context_menu_item_directions_from')} arrow placement="bottom">
                    <IconButton
                        id={'se-direction-from-fav-item'}
                        className={styles.wptActionsButtons}
                        onClick={() => directionFrom(lat, lon, ctx)}
                    >
                        <DirectionFromIcon className={styles.wptActionButtonIcon} />
                    </IconButton>
                </Tooltip>
                <Tooltip title={t('shared_string_navigation')} arrow placement="bottom">
                    <IconButton
                        id={'se-navigation-fav-item'}
                        className={styles.wptActionsButtons}
                        onClick={() => directionTo(lat, lon, ctx)}
                    >
                        <NavigationIcon className={styles.wptActionButtonIcon} />
                    </IconButton>
                </Tooltip>
            </Box>
        </>
    );
}
