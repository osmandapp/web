import { Box, Icon, ListItemText } from '@mui/material';
import styles from '../../errors/errors.module.css';
import React, { useContext } from 'react';
import { ReactComponent as AccessIcon } from '../../../assets/icons/ic_action_sand_clock.svg';
import { useTranslation } from 'react-i18next';
import { createAccount } from '../../../manager/LoginManager';
import BlueBtn from '../../../frame/components/btns/BlueBtn';
import LoginContext from '../../../context/LoginContext';
import AppContext from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function PendingAccessError() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Box>
            <Box className={styles.block}>
                <Icon className={styles.icon}>
                    <AccessIcon className={styles.icon} />
                </Icon>
                <Box className={styles.info}>
                    <ListItemText disableTypography={true} className={styles.title}>
                        {t('web:access_requested')}
                    </ListItemText>
                    <ListItemText disableTypography={true} className={styles.text}>
                        {t('web:access_requested_desc')}
                    </ListItemText>
                </Box>
            </Box>
            <BlueBtn
                action={() => createAccount(ctx, ltx, navigate)}
                text={t('web:access_requested_btn')}
                additionalStyle={{ color: '#727272 !important', mt: '-15px' }}
                span={true}
                disabled={true}
            />
        </Box>
    );
}
