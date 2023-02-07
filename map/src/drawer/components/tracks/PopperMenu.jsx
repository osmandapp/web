import {ClickAwayListener, MenuList, Paper, Popper} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
    drawerItem: {
        '& .MuiMenuItem-root': {
            minHeight: 'auto !important',
            maxHeight: 'auto !important',
            fontSize: '0.7rem'
        }
    }
})
export default function PopperMenu({anchorEl, open, setOpen, Buttons}) {

    const classes = useStyles();

    const handleClose = (event) => {
        if (anchorEl.current && anchorEl.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    return <Popper disablePortal={true} open={open} anchorEl={anchorEl?.current} transition
                   style={{
                       zIndex: 100,
                       left: `${anchorEl?.current?.offsetLeft}`,
                       top: `${anchorEl?.current?.offsetTop}`
                   }}>

        <Paper>
            <ClickAwayListener onClickAway={handleClose}>
                <MenuList className={classes.drawerItem} autoFocusItem={open} id="menu-list-grow">
                    <Buttons/>
                </MenuList>
            </ClickAwayListener>
        </Paper>

    </Popper>
}