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

export default function TransportStopActionsButtons({ wpt }) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const { t } = useTranslation();

    const navigate = useNavigate();

    const lat = wpt.latlon?.lat;
    const lon = wpt.latlon?.lon;

    function addToFavorite() {
        if (ltx.loginUser) {
            const location = lat && lon ? new LatLng(lat, lon) : null;
            if (location) {
                ctx.setAddFavorite({
                    ...ctx.addFavorite,
                    poi: {
                        name: wpt.name || '',
                    },
                    address: wpt.address,
                    location,
                });
            }
        } else {
            navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + window.location.search + window.location.hash);
        }
    }

    function shareTransportStop() {
        const shareLinks = createShareLocations(wpt);
        if (!shareLinks) {
            return;
        }
        const geoLink = shareLinks.geoLink;
        const mapUrl = shareLinks.mapUrl;

        const name = wpt.name ? `${wpt.name}\n` : '';
        const address = wpt?.address !== ADDRESS_NOT_FOUND ? `${wpt.address}\n` : '';

        const shareText = `${name}${address}Location: ${geoLink}\n${mapUrl}`;

        navigator.clipboard
            .writeText(shareText)
            .then(() => {
                ctx.setNotification({
                    text: t('web:transport_stop_copied_success'),
                    severity: 'success',
                });
            })
            .catch(() => {
                ctx.setNotification({ text: t('web:transport_stop_copy_failed'), severity: 'error' });
            });
    }

    return (
        <>
            <Box className={styles.wptActionButtonContainer}>
                <BlueBtn
                    action={addToFavorite}
                    id={'se-add-transport-stop-to-fav-item'}
                    icon={<AddFavoriteIcon className={styles.wptActionButtonIcon} />}
                    tooltipTitle={t('favourites_context_menu_add')}
                    additionalStyle={{ flex: 1 }}
                />
                <BlueBtn
                    action={shareTransportStop}
                    id={'se-share-transport-stop-item'}
                    icon={<ShareIcon className={styles.wptActionButtonIcon} />}
                    tooltipTitle={t('shared_string_share')}
                    additionalStyle={{ flex: 1 }}
                />
                <BlueBtn
                    action={() => directionFrom(lat, lon, ctx, wpt)}
                    id={'se-direction-from-transport-stop-item'}
                    icon={<DirectionFromIcon className={styles.wptActionButtonIcon} />}
                    tooltipTitle={t('context_menu_item_directions_from')}
                    additionalStyle={{ flex: 1 }}
                />
                <BlueBtn
                    action={() => directionTo(lat, lon, ctx, wpt)}
                    id={'se-navigation-transport-stop-item'}
                    icon={<NavigationIcon className={styles.wptActionButtonIcon} />}
                    tooltipTitle={t('shared_string_navigation')}
                    additionalStyle={{ flex: 1 }}
                />
            </Box>
        </>
    );
}
