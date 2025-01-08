import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Icon, ListItemText, TextField } from '@mui/material';
import styles from '../../errors/errors.module.css';
import { ReactComponent as AccessIcon } from '../../../assets/icons/ic_action_lock.svg';
import buttonStyles from '../../login/login.module.css';
import { useTranslation } from 'react-i18next';
import AppContext from '../../../context/AppContext';
import { INIT_LOGIN_STATE } from '../../../manager/LoginManager';

export default function RequestAccessError({ sendRequest, userName, setUserName }) {
    const ctx = useContext(AppContext);

    const [error, setError] = useState('');
    const { t } = useTranslation();

    const [showNameField, setShowNameField] = useState(false);

    useEffect(() => {
        if (ctx.loginState !== INIT_LOGIN_STATE && ctx.accountInfo) {
            setShowNameField(!ctx.accountInfo.nickname);
        }
    }, [ctx.accountInfo]);

    const validateNickname = (nickname) => {
        const MIN_LENGTH = 3;
        const MAX_LENGTH = 20;
        const VALID_CHARACTERS_REGEX = /^[a-zA-Z0-9_]+$/;

        if (!nickname || nickname.trim().length === 0) {
            return 'User name cannot be empty.';
        }
        if (nickname.length < MIN_LENGTH || nickname.length > MAX_LENGTH) {
            return `User name must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters.`;
        }
        if (!VALID_CHARACTERS_REGEX.test(nickname)) {
            return 'User name contains invalid characters. Only Latin letters, digits, and underscores are allowed.';
        }
        return '';
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setUserName(value);
        const validationError = validateNickname(value);
        setError(validationError);
    };

    const handleRequest = () => {
        if (!error) {
            sendRequest();
        }
    };

    return (
        <Box id={'se-request-access-error'}>
            <Box className={styles.block}>
                <Icon className={styles.icon}>
                    <AccessIcon className={styles.icon} />
                </Icon>
                <Box className={styles.info}>
                    <ListItemText disableTypography={true} className={styles.title}>
                        {t('web:access_blocked')}
                    </ListItemText>
                    <ListItemText disableTypography={true} className={styles.text}>
                        {t('web:access_blocked_desc')}
                    </ListItemText>
                </Box>
            </Box>
            {showNameField && (
                <TextField
                    sx={{ mt: '-17px' }}
                    margin="dense"
                    onChange={handleChange}
                    id="username"
                    label={'User name'}
                    type="email"
                    fullWidth
                    variant="filled"
                    value={userName}
                    error={!!error}
                    helperText={error}
                />
            )}
            <Button
                id={'se-request-access-btn'}
                sx={{ mt: showNameField ? '19px' : '-15px', color: !userName && '#727272 !important' }}
                component="span"
                disabled={!userName}
                className={buttonStyles.blueButton}
                onClick={handleRequest}
            >
                {t('web:access_requested_btn')}
            </Button>
        </Box>
    );
}
