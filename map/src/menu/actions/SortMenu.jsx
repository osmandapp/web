import React from 'react';
import { ClickAwayListener, Popover } from '@mui/material';

// inPortal: for a button inside a transformed box (a virtual list), which would clip a fixed menu
export default function SortMenu({ openSort, setOpenSort, anchorEl, actions, inPortal = false }) {
    return (
        <Popover
            id={'se-sort-menu'}
            sx={{ ml: '40px', mt: '60px' }}
            open={openSort}
            anchorEl={anchorEl.current}
            disablePortal={!inPortal}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
        >
            <ClickAwayListener onClickAway={() => setOpenSort(false)}>{actions}</ClickAwayListener>
        </Popover>
    );
}
