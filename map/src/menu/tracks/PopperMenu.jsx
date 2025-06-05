import { ClickAwayListener, MenuList, Paper, Popper } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';

export default function PopperMenu({ anchorEl, open, setOpen, Buttons }) {
    const ctx = useContext(AppContext);
    const handleClickAway = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (ctx.openedPopper && ctx.openedPopper !== anchorEl) {
            setOpen(false);
        }
    }, [ctx.openedPopper]);

    return (
        <Popper
            disablePortal={true}
            open={open}
            anchorEl={anchorEl?.current}
            transition
            style={{
                zIndex: 100,
                left: `${anchorEl?.current?.offsetLeft}`,
                top: `${anchorEl?.current?.offsetTop}`,
            }}
        >
            <Paper>
                <div style={{ maxHeight: '15vh', overflow: 'auto' }}>
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            sx={{
                                '& .MuiMenuItem-root': {
                                    minHeight: 'auto !important',
                                    maxHeight: 'auto !important',
                                    fontSize: '0.7rem',
                                },
                            }}
                        >
                            <Buttons />
                        </MenuList>
                    </ClickAwayListener>
                </div>
            </Paper>
        </Popper>
    );
}
