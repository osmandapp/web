import React from 'react';
import { ClickAwayListener, Popover } from '@mui/material';

export default function SortMenu({ openSort, setOpenSort, anchorEl, actions }) {
    return (
        <Popover
            id={'se-sort-menu'}
            sx={{ ml: '40px', mt: '60px' }}
            open={openSort}
            anchorEl={anchorEl.current}
            disablePortal={true}
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
