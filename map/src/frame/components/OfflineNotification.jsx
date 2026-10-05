import React, { useEffect, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { HEADER_SIZE } from '../../manager/GlobalManager';

export default function OfflineNotification() {
    const { t } = useTranslation();

    const [offline, setOffline] = useState(!globalThis.navigator.onLine);

    useEffect(() => {
        const goOffline = () => setOffline(true);
        const goOnline = () => setOffline(false);
        globalThis.addEventListener('offline', goOffline);
        globalThis.addEventListener('online', goOnline);

        return () => {
            globalThis.removeEventListener('offline', goOffline);
            globalThis.removeEventListener('online', goOnline);
        };
    }, []);

    return (
        <Snackbar
            id="se-offline-notification"
            open={offline}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            sx={{ mt: `${HEADER_SIZE}px` }}
        >
            <Alert severity="warning">{t('web:no_internet_connection')}</Alert>
        </Snackbar>
    );
}
