import { AppBar, Box, Button, SvgIcon, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { INSTALL_BANNER_SIZE } from '../../manager/GlobalManager';
import { ReactComponent as Logo } from '../../assets/ic_app_logo_osmand.svg';
import styles from '../frame.module.css';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { useTranslation } from 'react-i18next';

export default function InstallBanner({ showInstallBanner }) {
    const [width] = useWindowSize();

    const { t } = useTranslation();
    const [isIos, setIsIos] = useState(false);
    const URL_APPLE = 'https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257';
    const URL_GOOGLE = 'https://play.google.com/store/apps/details?id=net.osmand';

    useEffect(() => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
        setIsIos(isIosDevice);
    }, []);

    const handleInstallClick = () => {
        window.location.href = isIos ? URL_APPLE : URL_GOOGLE;
    };

    return showInstallBanner ? (
        <AppBar
            position="fixed"
            sx={{
                zIndex: 1400,
                width: width,
                maxWidth: width,
                maxHeight: `${INSTALL_BANNER_SIZE}px`,
                background: '#ffffff',
                boxShadow: '0px 0px 0px 0px, 0px 1px 1px 0px rgba(0, 0, 0, 0.15) !important',
            }}
        >
            <Box
                sx={{
                    height: `${INSTALL_BANNER_SIZE}px`,
                    minWidth: width - 32,
                    backgroundColor: '#fff',
                    color: isIos ? '#000' : '#fff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontFamily: isIos ? 'system-ui' : 'Roboto',
                    overflow: 'hidden',
                    px: 2,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
                    <SvgIcon component={Logo} inheritViewBox sx={{ width: '40px', height: '40px' }} />
                    <Box className={styles.promptText}>
                        <Typography className={styles.promptTitle}>
                            {isIos ? 'OsmAnd Maps Travel & Navigate' : 'OsmAnd — Maps & GPS Offline'}
                        </Typography>
                        <Typography className={styles.promptDesc}>Install to use offline</Typography>
                    </Box>
                </Box>
                <Button
                    variant="contained"
                    onClick={handleInstallClick}
                    sx={{
                        backgroundColor: isIos ? '#007AFF' : '#007C56',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: isIos ? '#005BBB' : '#005C44',
                        },
                        borderRadius: isIos ? '16px' : '6px',
                        boxShadow: '0px 0px 0px 0px !important',
                        textTransform: !isIos && 'none',
                        ml: 2,
                    }}
                >
                    {isIos ? t('shared_string_get') : t('shared_string_install')}
                </Button>
            </Box>
        </AppBar>
    ) : null;
}
