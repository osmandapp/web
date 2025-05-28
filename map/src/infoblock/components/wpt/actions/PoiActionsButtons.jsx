import { Box } from '@mui/material';
import styles from '../../../infoblock.module.css';
import { ReactComponent as AddFavoriteIcon } from '../../../../assets/icons/ic_action_favorite_outlined.svg';
import { ReactComponent as ShareIcon } from '../../../../assets/icons/ic_action_gshare_dark.svg';
import { ReactComponent as DirectionFromIcon } from '../../../../assets/icons/ic_action_route_direction_from_here.svg';
import { ReactComponent as NavigationIcon } from '../../../../assets/icons/ic_action_gdirections_dark.svg';
import React, { useContext } from 'react';
import AppContext from '../../../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { createShareLocations, directionFrom, directionTo } from './locationActions';
import { ADDRESS_NOT_FOUND } from '../WptDetails';
import { LatLng } from 'leaflet';
import { LOGIN_URL, MAIN_URL_WITH_SLASH } from '../../../../manager/GlobalManager';
import { useNavigate } from 'react-router-dom';
import BlueBtn from '../../../../frame/components/btns/BlueBtn';
import LoginContext from '../../../../context/LoginContext';

export default function PoiActionsButtons({ wpt }) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const { t } = useTranslation();

    const navigate = useNavigate();

    const hasPoiTags = wpt.type.isPoi || wpt.type.isSearch || (wpt?.type.isWikiPoi && ctx.selectedWpt?.poi);
    const lat = wpt.latlon?.lat;
    const lon = wpt.latlon?.lon;

    function addToFavorite() {
        if (ltx.loginUser) {
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
        const shareLinks = createShareLocations(wpt);
        if (!shareLinks) {
            return;
        }
        const geoLink = shareLinks.geoLink;
        const mapUrl = shareLinks.mapUrl;

        const name = wpt.name ? `${wpt.name}\n` : '';
        const poiType = wpt.poiType ? `${wpt.poiType}\n` : '';
        const address = wpt?.address !== ADDRESS_NOT_FOUND ? `${wpt.address}\n` : '';

        const shareText = `${name}${poiType}${address}Location: ${geoLink}\n${mapUrl}`;

        navigator.clipboard
            .writeText(shareText)
            .then(() => {
                ctx.setNotification({
                    text: 'Information about the selected poi has been copied to clipboard',
                    severity: 'success',
                });
            })
            .catch(() => {
                ctx.setNotification({ text: 'Failed to copy poi information', severity: 'error' });
            });
    }

    return (
        <>
            <Box className={styles.wptActionButtonContainer}>
                {hasPoiTags && (
                    <BlueBtn
                        action={addToFavorite}
                        id={'se-add-poi-to-fav-item'}
                        icon={<AddFavoriteIcon className={styles.wptActionButtonIcon} />}
                        tooltipTitle={t('favourites_context_menu_add')}
                        additionalStyle={{ flex: 1 }}
                    />
                )}
                <BlueBtn
                    action={sharePoi}
                    id={'se-share-fav-item'}
                    icon={<ShareIcon className={styles.wptActionButtonIcon} />}
                    tooltipTitle={t('shared_string_share')}
                    additionalStyle={{ flex: 1 }}
                />
                <BlueBtn
                    action={() => directionFrom(lat, lon, ctx)}
                    id={'se-direction-from-fav-item'}
                    icon={<DirectionFromIcon className={styles.wptActionButtonIcon} />}
                    tooltipTitle={t('context_menu_item_directions_from')}
                    additionalStyle={{ flex: 1 }}
                />
                <BlueBtn
                    action={() => directionTo(lat, lon, ctx)}
                    id={'se-navigation-fav-item'}
                    icon={<NavigationIcon className={styles.wptActionButtonIcon} />}
                    tooltipTitle={t('shared_string_navigation')}
                    additionalStyle={{ flex: 1 }}
                />
            </Box>
        </>
    );
}
