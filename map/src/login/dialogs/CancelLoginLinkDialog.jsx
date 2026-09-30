import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BaseLoginDialog from './BaseLoginDialog';
import PrimaryBtn from '../../frame/components/btns/PrimaryBtn';
import { cancelLoginLink } from '../../manager/AccountManager';
import { formatString } from '../../manager/SettingsManager';
import styles from '../login.module.css';

// opened from the owner's email: ?email=...&cancel-link=...
export default function CancelLoginLinkDialog({ email, code, onClose }) {
    const { t } = useTranslation();
    const [result, setResult] = useState(null);
    const [cancelling, setCancelling] = useState(false);

    async function cancel() {
        setCancelling(true);
        const ok = await cancelLoginLink({ username: email, token: code });
        setResult(ok ? t('web:login_link_cancelled') : t('web:login_link_cancel_error'));
    }

    return (
        <BaseLoginDialog open={true} title={t('web:cancel_login_link')} onClick={onClose}>
            <Typography className={styles.loginText}>
                {result ?? formatString(t('web:cancel_login_link_desc'), [email])}
            </Typography>
            {!result && (
                <Box sx={{ mt: 2 }}>
                    <PrimaryBtn action={cancel} disabled={cancelling} text={t('web:cancel_login_link')} />
                </Box>
            )}
        </BaseLoginDialog>
    );
}
