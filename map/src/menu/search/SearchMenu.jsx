import { Button, Divider, IconButton, LinearProgress } from '@mui/material';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import CustomInput from './CustomInput';
import styles from './search.module.css';
import { closeHeader } from '../actions/HeaderHelper';
import React, { useContext, useEffect, useState } from 'react';
import AppContext, { OBJECT_SEARCH } from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import SubTitle from '../components/SubTitle';
import gStyles from '../gstylesmenu.module.css';
import WikiPlacesList from './WikiPlacesList';
import { addWikiPlacesDefaultFilters } from '../../manager/SearchManager';
import { EXPLORE_URL, MAIN_URL_WITH_SLASH } from '../../manager/GlobalManager';
import { useNavigate } from 'react-router-dom';

export default function SearchMenu() {
    const ctx = useContext(AppContext);
    const navigate = useNavigate();

    const [isMainSearchScreen, setIsMainSearchScreen] = useState(true);
    const [loadingWikiPlaces, setLoadingWikiPlaces] = useState(false);
    const [searchValue, setSearchValue] = useState(null);

    useEffect(() => {
        if (searchValue) {
            setIsMainSearchScreen(false);
        }
    }, [searchValue]);

    const { t } = useTranslation();

    useEffect(() => {
        ctx.setCurrentObjectType(OBJECT_SEARCH);
        addWikiPlacesDefaultFilters(ctx);
        setLoadingWikiPlaces(true);
    }, []);

    useEffect(() => {
        if (ctx.wikiPlaces) {
            setLoadingWikiPlaces(false);
        }
    }, [ctx.wikiPlaces]);

    function openMainSearchScreen() {}

    function openExploreMenu() {
        navigate(MAIN_URL_WITH_SLASH + EXPLORE_URL + window.location.hash);
    }

    const MenuButton = () => {
        return isMainSearchScreen ? (
            <IconButton
                variant="contained"
                type="button"
                className={`${gStyles.icon} ${styles.searchInputIcon}`}
                onClick={() => closeHeader({ ctx })}
            >
                <CloseIcon />
            </IconButton>
        ) : (
            <IconButton
                variant="contained"
                type="button"
                className={`${gStyles.icon} ${styles.searchInputIcon}`}
                onClick={openMainSearchScreen}
            >
                <BackIcon />
            </IconButton>
        );
    };

    return (
        <>
            <CustomInput menuButton={<MenuButton />} setSearchValue={setSearchValue} />
            <SubTitle title={'search_categories'} />
            <Divider />
            <SubTitle title={'web:explore_menu'} />
            {loadingWikiPlaces ? (
                <LinearProgress />
            ) : (
                <>
                    <WikiPlacesList size={3} />
                    <Button className={styles.buttonShowAllExplore} onClick={openExploreMenu}>
                        {t('shared_string_show_all')}
                    </Button>
                    <Divider />
                </>
            )}
        </>
    );
}
