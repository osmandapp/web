import { Box, Icon, ListItemText } from '@mui/material';
import styles from '../../errors/errors.module.css';
import React from 'react';
import { ReactComponent as AccessIcon } from '../../../assets/icons/ic_action_lock.svg';
import { useTranslation } from 'react-i18next';

export default function BlockedAccessError() {
    const { t } = useTranslation();

    return (
        <Box className={styles.block}>
            <Icon className={styles.icon}>
                <AccessIcon className={styles.icon} />
            </Icon>
            <Box className={styles.info}>
                <ListItemText disableTypography={true} className={styles.title}>
                    {t('web:access_denied')}
                </ListItemText>
                <ListItemText disableTypography={true} className={styles.text}>
                    {t('web:access_denied_desc')}
                </ListItemText>
            </Box>
        </Box>
    );
}
