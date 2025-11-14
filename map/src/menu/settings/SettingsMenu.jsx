import {
    AppBar,
    Box,
    ClickAwayListener,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Popover,
    Switch,
    Toolbar,
    Typography,
} from '@mui/material';
import styles from './settings.module.css';
import headerStyles from '../trackfavmenu.module.css';
import AppContext from '../../context/AppContext';
import React, { useContext, useMemo, useRef, useState, useCallback } from 'react';
import langList from '../../resources/translations/supportedLanguages.json';
import enList from '../../resources/translations/en/translation.json';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as DisplayLanguageIcon } from '../../assets/icons/ic_action_map_language.svg';
import { ReactComponent as ChangesIcon } from '../../assets/icons/ic_action_history.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import { HEADER_SIZE, MENU_INFO_CLOSE_SIZE } from '../../manager/GlobalManager';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { FREE_ACCOUNT } from '../../manager/LoginManager';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import UnitsMenu from './units/UnitsMenu';
import SimpleDivider from '../../frame/components/dividers/SimpleDivider';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import LoginContext from '../../context/LoginContext';
import gStyles from '../gstylesmenu.module.css';
import { handleLanguageChange, normalizeLang } from '../../i18n';

export default function SettingsMenu() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const [openLangList, setOpenLangList] = useState(false);
    const { i18n, t } = useTranslation();
    const anchorEl = useRef(null);
    const [, height] = useWindowSize();

    const getTransLanguage = useCallback(
        (lang) => {
            lang = normalizeLang(lang);
            // Replaces any remaining non-alphabetic characters (like - or +) with an underscore (_)
            // en-GB -> en_gb, sr+Latn -> sr_latin
            lang = lang.toLowerCase().replace(/[^a-z]/g, '_');
            const trans = t(`lang_${lang}`).toString();
            return trans.startsWith('lang_') ? enList[`lang_${lang}`] : trans;
        },
        [t]
    );

    const [currentLang, setCurrentLang] = useState(() => getTransLanguage(i18n.language));

    function close() {
        ctx.setInfoBlockWidth(`${MENU_INFO_CLOSE_SIZE}px`);
        ctx.setCurrentObjectType(null);
    }

    function selectLanguage() {
        setOpenLangList(true);
    }

    function openCloudSettingsMenu({ changes = false, trash = false }) {
        ctx.setCloudSettings({ changes, trash });
    }

    const languageList = useMemo(() => {
        if (!langList) {
            return [];
        }
        const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

        const sortedLangList = [...langList]
            .map((lang) => ({
                lang: lang,
                transLang: getTransLanguage(lang),
            }))
            .filter((item) => item.transLang);

        sortedLangList.sort((a, b) => collator.compare(a.transLang, b.transLang));

        return sortedLangList;
    }, [getTransLanguage]);

    const handleLangClick = async (lang, transLang) => {
        await handleLanguageChange(lang);
        setCurrentLang(getTransLanguage(lang));
        setOpenLangList(false);
        ctx.setOpenedPopper(null);
    };

    return (
        <Box sx={{ height: `${height - HEADER_SIZE}px` }} className={gStyles.scrollMainBlock}>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton variant="contained" type="button" className={styles.closeIcon} onClick={close}>
                        <CloseIcon />
                    </IconButton>
                    <Typography id="se-configure-map-menu-name" component="div" className={headerStyles.title}>
                        {t('shared_string_settings')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className={gStyles.scrollActiveBlock}>
                <SubTitleMenu text={t('general_settings_2')} />
                <MenuItem className={styles.item} onClick={selectLanguage}>
                    <ListItemIcon className={styles.icon}>
                        <DisplayLanguageIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography variant="inherit" noWrap>
                                {t('preferred_locale')}
                            </Typography>
                            <Typography ref={anchorEl} variant="body2" className={styles.lang} noWrap>
                                {currentLang}
                            </Typography>
                        </div>
                    </ListItemText>
                </MenuItem>
                <DividerWithMargin margin={'64px'} />
                <UnitsMenu />
                <SimpleDivider />
                {ltx.loginUser && ltx.accountInfo?.account !== FREE_ACCOUNT && (
                    <>
                        <SubTitleMenu text={t('osmand_cloud')} />
                        <MenuItem
                            id={'se-cloud_changes'}
                            className={styles.item}
                            onClick={() => openCloudSettingsMenu({ changes: true })}
                        >
                            <ListItemIcon className={styles.icon}>
                                <ChangesIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant="inherit" noWrap>
                                    {t('shared_string_changes')}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                        <DividerWithMargin margin={'64px'} />
                        <MenuItem
                            id={'se-cloud_trash'}
                            divider
                            className={styles.item}
                            onClick={() => openCloudSettingsMenu({ trash: true })}
                        >
                            <ListItemIcon className={styles.icon}>
                                <TrashIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant="inherit" noWrap>
                                    {t('shared_string_trash')}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    </>
                )}
                {process.env.REACT_APP_DEVEL_FEATURES === 'yes' && ctx.develFeatures && ltx.loginUser && (
                    <>
                        <Typography component="div" sx={{ ml: 2 }}>
                            Explore Wikimedia Images
                            <Switch
                                checked={ctx.searchSettings.useWikiImages ?? false}
                                onChange={(event) => ctx.setSearchSettings({ useWikiImages: event.target.checked })}
                            />
                        </Typography>
                    </>
                )}
            </Box>
            <Popover
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{ ml: '8px', mt: '40px', maxHeight: height / 2 }}
                open={openLangList}
                anchorEl={anchorEl.current}
                disablePortal={true}
            >
                <ClickAwayListener
                    onClickAway={() => {
                        setOpenLangList(false);
                        ctx.setOpenedPopper(null);
                    }}
                >
                    <div>
                        {languageList.map(({ lang, transLang }, index) => (
                            <MenuItem key={lang + index} onClick={() => handleLangClick(lang, transLang)}>
                                <ListItemText>
                                    <Typography variant="inherit" noWrap>
                                        {transLang}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                        ))}
                    </div>
                </ClickAwayListener>
            </Popover>
        </Box>
    );
}
