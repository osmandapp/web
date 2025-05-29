import headerStyles from '../../../menu/trackfavmenu.module.css';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import styles from '../../../login/login.module.css';
import React from 'react';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';

export default function AppBarWithBtns({ id, header, hasBackBtn = false, leftBtnAction = null, rightBtns = null }) {
    return (
        <AppBar position="static" className={headerStyles.appbar}>
            <Toolbar className={headerStyles.toolbar}>
                {hasBackBtn ? (
                    <IconButton
                        id={`se-${id}-back`}
                        variant="contained"
                        className={styles.closeIcon}
                        onClick={leftBtnAction}
                    >
                        <BackIcon />
                    </IconButton>
                ) : (
                    <IconButton
                        id={`se-${id}-close`}
                        variant="contained"
                        className={styles.closeIcon}
                        onClick={leftBtnAction}
                    >
                        <CloseIcon />
                    </IconButton>
                )}
                <Typography id={`se-${id}-name`} component="div" className={headerStyles.title}>
                    {header}
                </Typography>
                {rightBtns}
            </Toolbar>
        </AppBar>
    );
}
