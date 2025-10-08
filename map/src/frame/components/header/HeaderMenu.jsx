import {
    AppBar,
    Box,
    Button,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Popover,
    SvgIcon,
    Toolbar,
    Typography,
} from '@mui/material';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as DisplayLanguageIcon } from '../../../assets/icons/ic_action_map_language.svg';
import styles from './header.module.css';
import { HEADER_SIZE, INSTALL_BANNER_SIZE } from '../../../manager/GlobalManager';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import enList from '../../../resources/translations/en/translation.json';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import supportedLanguages from '../../../resources/translations/supportedLanguages.json';
import { handleLanguageChange } from '../../../i18n';
import { useUpdateQueryParam } from '../../../util/hooks/menu/useUpdateQueryParam';

const pages = ({ t }) => [
    {
        name: t('web:header_docs'),
        url: '/docs/intro',
    },
    {
        name: t('web:header_blog'),
        url: '/blog',
    },
    {
        name: `💳 ${t('web:header_pricing')}`,
        url: '/pricing',
    },
    {
        name: `🌍 ${t('web:header_map')}`,
        url: '/map',
    },
    {
        name: `🚵‍ ${t('web:header_join_us')}`,
        url: '/docs/hiring',
    },
];

export const DEFAULT_LANG = 'en';
const LANG_PARAM = 'lang';

export default function HeaderMenu({ showInstallBanner = null }) {
    const location = useLocation();

    const { i18n, t } = useTranslation();
    const [currentLangLabel, setCurrentLangLabel] = useState(t(`lang_${i18n.language}`));
    const anchorRef = useRef(null);
    const [openLang, setOpenLang] = useState(false);
    const [availableLanguages, setAvailableLanguages] = useState([]);

    const [searchParams] = useSearchParams();
    const updateQueryParam = useUpdateQueryParam();

    useEffect(() => {
        const lang = searchParams.get(LANG_PARAM);
        if (lang && lang !== i18n.language && supportedLanguages.includes(lang)) {
            (async () => {
                await handleLanguageChange(lang);
                setCurrentLangLabel(getTransLanguage(lang));
            })();
        }
        updateQueryParam(LANG_PARAM, null);
    }, [searchParams]);

    const handleOpen = () => setOpenLang(true);
    const handleClose = () => setOpenLang(false);

    useEffect(() => {
        // handler for when the language changes
        const onLangChanged = (lng) => {
            setCurrentLangLabel(getTransLanguage(lng));
        };

        i18n.on('languageChanged', onLangChanged);

        // initialize available languages and current label on mount
        (async () => {
            const available = [];
            for (const lang of supportedLanguages) {
                try {
                    await import(`../../../resources/translations/${lang}/web-translation.json`);
                    available.push(lang);
                } catch {}
            }
            setAvailableLanguages(available);

            const saved = localStorage.getItem('i18nextLng') || i18n.language || DEFAULT_LANG;
            const chosen = available.includes(saved) ? saved : DEFAULT_LANG;
            onLangChanged(chosen);
        })();

        // cleanup subscription on unmount
        return () => {
            i18n.off('languageChanged', onLangChanged);
        };
    }, []);

    const languageItems = useMemo(() => {
        const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
        return [...availableLanguages]
            .sort((a, b) => collator.compare(getTransLanguage(a), getTransLanguage(b)))
            .map((lng) => (
                <MenuItem
                    key={lng}
                    onClick={async () => {
                        await handleLanguageChange(lng);
                        setCurrentLangLabel(getTransLanguage(lng));
                        setOpenLang(false);
                    }}
                >
                    <ListItemText>{getTransLanguage(lng)}</ListItemText>
                </MenuItem>
            ));
    }, [i18n, t, availableLanguages]);

    function getTransLanguage(lang) {
        const trans = t(`lang_${lang}`).toString();
        return trans.startsWith('lang_') ? enList[`lang_${lang}`] : trans;
    }

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
                    {pages({ t }).map((page) => (
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
                <Box sx={{ flexGrow: 1 }} />
                {(location.pathname === '/pricing' || location.pathname === '/pricing/') && (
                    <Button
                        ref={anchorRef}
                        onClick={() => setOpenLang(true)}
                        endIcon={<ArrowDropDownIcon />}
                        className={styles.menuItem}
                        sx={{
                            textTransform: 'none',
                            '& .MuiSvgIcon-root, & .MuiListItemIcon-root, & .MuiTypography-root': {
                                fill: openLang ? '#237bff' : 'text.primary',
                                color: openLang ? '#237bff' : 'text.primary',
                            },
                            '&:hover': {
                                '& .MuiSvgIcon-root, & .MuiListItemIcon-root, & .MuiTypography-root': {
                                    fill: '#237bff',
                                    color: '#237bff',
                                },
                            },
                        }}
                    >
                        <ListItemIcon className={styles.icon}>
                            <DisplayLanguageIcon />
                        </ListItemIcon>
                        <Typography className={styles.lang} sx={{ ml: 1 }} noWrap>
                            {currentLangLabel}
                        </Typography>
                    </Button>
                )}
                <Popover
                    open={openLang}
                    anchorEl={anchorRef.current}
                    onClose={() => setOpenLang(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    PaperProps={{
                        onMouseEnter: handleOpen,
                        onMouseLeave: handleClose,
                    }}
                >
                    {languageItems}
                </Popover>
            </Toolbar>
        </AppBar>
    );
}
