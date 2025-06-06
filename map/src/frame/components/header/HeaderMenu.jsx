import { AppBar, Box, Button, IconButton, SvgIcon, Toolbar } from '@mui/material';
import React from 'react';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import styles from './header.module.css';
import { HEADER_SIZE, INSTALL_BANNER_SIZE } from '../../../manager/GlobalManager';
import { useLocation } from 'react-router-dom';

const pages = [
    {
        name: 'Docs',
        url: '/docs/intro',
    },
    {
        name: 'Blog',
        url: '/blog',
    },
    {
        name: '💳 Pricing',
        url: '/pricing',
    },
    {
        name: '🌍 Map',
        url: '/map',
    },
    {
        name: '🚵‍ Join us',
        url: '/docs/hiring',
    },
];

export default function HeaderMenu({ showInstallBanner = null }) {
    const location = useLocation();

    return (
        <AppBar
            sx={{
                zIndex: 1300,
                height: HEADER_SIZE,
                background: '#ffffff',
                mt: showInstallBanner && `${INSTALL_BANNER_SIZE}px`,
            }}
        >
            <Toolbar>
                <IconButton
                    target="_blank"
                    component="a"
                    href="/"
                    className={styles.menuItem}
                    sx={{ fontWeight: '700 !important', ml: -2, mt: -0.5, mr: -0.77 }}
                >
                    <SvgIcon component={Logo} inheritViewBox className={styles.logo} />
                    OsmAnd
                </IconButton>
                <Box className={styles.menu}>
                    {pages.map((page) => (
                        <Button
                            component="a"
                            href={page.url}
                            key={page.name}
                            className={styles.menuItem}
                            sx={
                                page.url.startsWith(location.pathname)
                                    ? { color: '#237bff !important' }
                                    : { color: '#1c1e21 !important' }
                            }
                        >
                            {page.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
