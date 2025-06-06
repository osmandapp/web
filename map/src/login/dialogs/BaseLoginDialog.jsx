import { Dialog, IconButton, Typography } from '@mui/material';
import React from 'react';
import styles from '../login.module.css';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';

export default function BaseLoginDialog({ open, title = '', children, onClick }) {
    return (
        <Dialog className={styles.loginDialog} PaperProps={{ className: styles.loginDialogPaper }} open={open}>
            <DialogTitle className={styles.loginDialogTitle}>
                <Typography className={styles.loginDialogText}>{title}</Typography>
                <IconButton className={styles.loginDialogIcon} onClick={onClick}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={styles.loginDialogContent}>{children}</DialogContent>
        </Dialog>
    );
}
