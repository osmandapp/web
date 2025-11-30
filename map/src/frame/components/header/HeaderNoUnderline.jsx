import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import headerStyles from '../../../menu/trackfavmenu.module.css';

export default function HeaderNoUnderline({
    title,
    onClose,
    rightContent = null,
    toolbarProps = {},
    appBarProps = {},
    titleId = undefined,
}) {
    return (
        <AppBar
            position="static"
            className={headerStyles.appbar}
            sx={{ boxShadow: 'none !important', borderBottom: 'none !important' }}
            {...appBarProps}
        >
            <Toolbar className={headerStyles.toolbar} {...toolbarProps}>
                <IconButton variant="contained" type="button" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
                <Typography component="div" className={headerStyles.title} sx={{ flexGrow: 1 }} id={titleId}>
                    {title}
                </Typography>
                {rightContent}
            </Toolbar>
        </AppBar>
    );
}
