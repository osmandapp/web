import headerStyles from '../../../menu/trackfavmenu.module.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styles from '../../../login/login.module.css';
import React from 'react';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';
import IconBtn from '../btns/IconBtn';

export default function AppBarWithBtns({ id, header, hasBackBtn = false, leftBtnAction = null, rightBtns = null }) {
    return (
        <AppBar position="static" className={headerStyles.appbar} sx={{ position: 'relative', zIndex: 1 }}>
            <Toolbar className={headerStyles.toolbar}>
                {hasBackBtn ? (
                    <IconBtn
                        id={`se-${id}-back`}
                        variant="contained"
                        className={styles.closeIcon}
                        onClick={leftBtnAction}
                    >
                        <BackIcon />
                    </IconBtn>
                ) : (
                    <IconBtn
                        id={`se-${id}-close`}
                        variant="contained"
                        className={styles.closeIcon}
                        onClick={leftBtnAction}
                    >
                        <CloseIcon />
                    </IconBtn>
                )}
                <Typography id={`se-${id}-name`} component="div" className={headerStyles.title}>
                    {header}
                </Typography>
                {rightBtns}
            </Toolbar>
        </AppBar>
    );
}
