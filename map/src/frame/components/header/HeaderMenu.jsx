import { AppBar, Box, Button, SvgIcon, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import styles from './header.module.css';

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
        name: '💳 Purchases',
        url: '/docs/user/purchases',
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
export default function HeaderMenu() {
    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: 3000,
                height: '60px',
                background: '#ffffff',
            }}
        >
            <Toolbar>
                <SvgIcon component={Logo} inheritViewBox className={styles.logo} />
                <Button
                    target="_blank"
                    component={Link}
                    to={'/'}
                    className={styles.menuItem}
                    sx={{ fontWeight: '700 !important', ml: -0.5, mt: -0.5, mr: -0.77 }}
                >
                    OsmAnd
                </Button>
                <Box className={styles.menu}>
                    {pages.map((page) => (
                        <Button
                            target="_blank"
                            component={Link}
                            to={page.url}
                            key={page.name}
                            className={styles.menuItem}
                        >
                            {page.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
