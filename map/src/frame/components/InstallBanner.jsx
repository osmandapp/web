import { AppBar, Box, Button, SvgIcon, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { INSTALL_BANNER_SIZE } from '../../manager/GlobalManager';
import { ReactComponent as Logo } from '../../assets/ic_app_logo_osmand.svg';
import styles from './frame.module.css';
import { useWindowSize } from '../../util/hooks/useWindowSize';

export default function InstallBanner({ showInstallBanner, deferredPrompt, setDeferredPrompt }) {
    const [width] = useWindowSize();

    const [isIos, setIsIos] = useState(false);

    useEffect(() => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
        setIsIos(isIosDevice);
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(() => {
                setDeferredPrompt(null);
            });
        }
    };

    return showInstallBanner ? (
        <AppBar
            position="fixed"
            sx={{
                zIndex: 1400,
                width: width,
                maxWidth: width,
                maxHeight: INSTALL_BANNER_SIZE,
                background: '#ffffff',
                boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(0, 0, 0, 0.15) !important',
            }}
        >
            <Box
                sx={{
                    height: INSTALL_BANNER_SIZE,
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
                <Box sx={{ display: 'flex', minWidth: width - 100 }}>
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
                        borderRadius: isIos && '16px',
                    }}
                >
                    {isIos ? 'GET' : 'Install'}
                </Button>
            </Box>
        </AppBar>
    ) : null;
}
