import { Box, Icon, ListItemText } from '@mui/material';
import styles from '../../errors/errors.module.css';
import React from 'react';
import { ReactComponent as NotAvailableIcon } from '../../../assets/icons/ic_action_file_unknown.svg';
import { useTranslation } from 'react-i18next';

export default function NotAvailableError() {
    const { t } = useTranslation();

    return (
        <Box className={styles.block}>
            <Icon className={styles.icon}>
                <NotAvailableIcon className={styles.icon} />
            </Icon>
            <Box className={styles.info}>
                <ListItemText disableTypography={true} className={styles.title}>
                    {t('web:not_available')}
                </ListItemText>
                <ListItemText disableTypography={true} className={styles.text}>
                    {t('web:not_available_desc')}
                </ListItemText>
            </Box>
        </Box>
    );
}
