import { ClickAwayListener, Popover } from '@mui/material';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function ActionsMenu({ open, setOpen, anchorEl, favItems = false, setShowMenu = null, actions = null }) {
    const ctx = useContext(AppContext);

    return (
        actions && (
            <Popover
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{ ml: favItems ? '-8px' : '8px', mt: favItems && '-8px' }}
                open={open}
                anchorEl={anchorEl?.current}
                PaperProps={{
                    style: { maxHeight: 550, overflow: 'auto' },
                }}
            >
                <ClickAwayListener
                    onClickAway={() => {
                        setOpen(false);
                        if (setShowMenu) {
                            setShowMenu(false);
                        }
                        ctx.setOpenedPopper(null);
                    }}
                >
                    {actions}
                </ClickAwayListener>
            </Popover>
        )
    );
}
