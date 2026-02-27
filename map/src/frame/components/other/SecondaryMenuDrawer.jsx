import React from 'react';
import { Drawer } from '@mui/material';
import { HEADER_SIZE, MAIN_MENU_MIN_SIZE, MENU_INFO_OPEN_SIZE } from '../../../manager/GlobalManager';

export default function SecondaryMenuDrawer({ onClose, children }) {
    const drawerWidth = MENU_INFO_OPEN_SIZE;
    const drawerLeftOffset = MAIN_MENU_MIN_SIZE + drawerWidth;

    return (
        <Drawer
            anchor="left"
            open={true}
            onClose={onClose}
            hideBackdrop
            ModalProps={{
                keepMounted: true,
                hideBackdrop: true,
                disableEnforceFocus: true,
                disableAutoFocus: true,
                disableRestoreFocus: true,
                style: { pointerEvents: 'none' },
            }}
            PaperProps={{
                sx: {
                    width: { xs: '100%', sm: `${drawerWidth}px` },
                    maxWidth: { xs: '100%', sm: `${drawerWidth}px` },
                    ml: { xs: 0, sm: `${drawerLeftOffset}px` },
                    borderLeft: { xs: 'none', sm: '1px solid #e0e0e0' },
                    borderRight: 'none',
                    top: `${HEADER_SIZE}px`,
                    height: `calc(100% - ${HEADER_SIZE}px)`,
                    boxShadow: 'none',
                    pointerEvents: 'auto',
                },
            }}
        >
            {children}
        </Drawer>
    );
}
