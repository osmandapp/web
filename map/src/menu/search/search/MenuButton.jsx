import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import { IconButton } from '@mui/material';
import gStyles from '../../gstylesmenu.module.css';
import styles from '../search.module.css';
import { closeHeader } from '../../actions/HeaderHelper';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';

export const MenuButton = ({ needBackButton = false, backToPrevScreen = null }) => {
    const ctx = useContext(AppContext);

    return !needBackButton ? (
        <IconButton
            variant="contained"
            type="button"
            id={'se-search-input-close'}
            className={`${gStyles.icon} ${styles.searchInputIcon}`}
            onClick={() => {
                ctx.setSearchSettings({ ...ctx.searchSettings, showOnMainSearch: false });
                closeHeader({ ctx });
            }}
        >
            <CloseIcon />
        </IconButton>
    ) : (
        <IconButton
            variant="contained"
            type="button"
            className={`${gStyles.icon} ${styles.searchInputIcon}`}
            onClick={backToPrevScreen ? backToPrevScreen : () => closeHeader({ ctx })}
        >
            <BackIcon />
        </IconButton>
    );
};
