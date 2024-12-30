import { Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import React, { forwardRef, useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';

const makeLinksClickable = (text) => {
    if (!text) {
        return null;
    }
    const urlRegex = /(https?:\/\/\S+)/g;

    return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line.split(urlRegex).map((part, i) =>
                urlRegex.test(part) ? (
                    <a key={i} href={part} target="_blank" rel="noopener noreferrer">
                        {part}
                    </a>
                ) : (
                    part
                )
            )}
            <br />
        </React.Fragment>
    ));
};

const MenuItemWithLines = forwardRef((props, ref) => {
    const {
        name = null,
        showMore = false,
        compName = null,
        children = null,
        maxLines,
        className = null,
        width = null,
        ...otherProps
    } = props;
    const [open, setOpen] = useState(false);

    const titleStyle = {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        WebkitLineClamp: maxLines,
        wordBreak: 'break-word',
        whiteSpace: 'pre-wrap',
        width: width ?? '100%',
        cursor: showMore && 'pointer',
    };

    const handleExpandClick = () => {
        if (showMore) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div style={titleStyle} ref={ref} {...otherProps}>
                {name ? (
                    <Typography id={'se-'+ name} onClick={handleExpandClick} variant="inherit" className={className ?? styles.groupName}>
                        {name}
                    </Typography>
                ) : (
                    children
                )}
            </div>
            {showMore && (
                <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                    <DialogTitle>{compName}</DialogTitle>
                    <DialogContent>
                        <Typography variant="body1">
                            {makeLinksClickable(name?.replace(`${compName}:`, '').trim())}
                        </Typography>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
});

MenuItemWithLines.displayName = 'MenuItemsTitle';
export default MenuItemWithLines;
