import headerStyles from '../trackfavmenu.module.css';
import { AppBar, Box, IconButton, Switch, Toolbar, Typography } from '@mui/material';
import styles from '../settings/settings.module.css';
import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { useTranslation } from 'react-i18next';
import { MENU_INFO_CLOSE_SIZE } from '../../manager/GlobalManager';
import AppContext, { OBJECT_SEARCH } from '../../context/AppContext';
import Loading from '../errors/Loading';
import Empty from '../errors/Empty';
import WikiPlacesItem from './WikiPlacesItem';

export default function ExploreMenu() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    function close() {
        ctx.setInfoBlockWidth(MENU_INFO_CLOSE_SIZE);
        ctx.setCurrentObjectType(null);
    }

    useEffect(() => {
        ctx.setCurrentObjectType(OBJECT_SEARCH);
        setLoading(true);
    }, []);

    useEffect(() => {
        if (ctx.wikiPlaces) {
            setLoading(false);
        }
    }, [ctx.wikiPlaces]);

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton variant="contained" type="button" className={styles.closeIcon} onClick={close}>
                        <CloseIcon />
                    </IconButton>
                    <Typography id="se-explore-menu-name" component="div" className={headerStyles.title}>
                        {t('web:explore_menu')}
                    </Typography>
                </Toolbar>
            </AppBar>
            {loading ? (
                <Loading id={'se-loading-page'} />
            ) : (
                <>
                    {ctx.wikiPlaces?.length === 0 ? (
                        <Empty title={'Places not found'} />
                    ) : (
                        <Box
                            id={'se-wiki_places-items'}
                            minWidth={ctx.infoBlockWidth}
                            maxWidth={ctx.infoBlockWidth}
                            sx={{ overflow: 'auto', overflowX: 'hidden' }}
                        >
                            <Typography component="div" sx={{ ml: 2 }}>
                                Use Wiki Images
                                <Switch
                                    checked={ctx.searchSettings.useWikiImages ?? false}
                                    onChange={(event) => ctx.setSearchSettings({ useWikiImages: event.target.checked })}
                                />
                            </Typography>
                            {!ctx.searchSettings.useWikiImages &&
                                ctx.wikiPlaces?.map((item, index) => (
                                    <WikiPlacesItem index={item.id} key={index} item={item} />
                                ))}
                        </Box>
                    )}
                </>
            )}
        </>
    );
}
