import React, { forwardRef, useContext } from 'react';
import { ReactComponent as EmailIcon } from '../../assets/icons/ic_action_at_mail.svg';
import { Box, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import AccountManager, { sendCode } from '../../manager/AccountManager';
import i18n from 'i18next';
import AppContext from '../../context/AppContext';

const AccountActions = forwardRef(({ setOpenActions }, ref) => {
    const lang = i18n.language;

    const ctx = useContext(AppContext);

    function changeEmail() {
        sendCode({
            action: AccountManager.CHANGE_EMAIL_MSG,
            lang,
        }).then(() => ctx.setOpenChangeEmailDialog(true));
    }

    return (
        <>
            <Box ref={ref}>
                <Paper className={styles.actions}>
                    <MenuItem
                        className={styles.action}
                        onClick={() => {
                            changeEmail();
                            setOpenActions(false);
                        }}
                    >
                        <ListItemIcon className={styles.iconAction}>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit" className={styles.actionName} noWrap>
                                Change email
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                </Paper>
            </Box>
        </>
    );
});

AccountActions.displayName = 'AccountActions';
export default AccountActions;
