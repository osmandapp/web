import { ClickAwayListener, Popover } from '@mui/material';
import React from 'react';

export default function ActionsMenu({ open, setOpen, anchorEl, actions }) {
    return (
        <Popover
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            sx={{ ml: '8px' }}
            open={open}
            anchorEl={anchorEl.current}
            disablePortal={true}
        >
            <ClickAwayListener onClickAway={() => setOpen(false)}>{actions}</ClickAwayListener>
        </Popover>
    );
}
