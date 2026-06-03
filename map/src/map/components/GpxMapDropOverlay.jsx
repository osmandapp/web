import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './gpxMapDropOverlay.module.css';

export default function GpxMapDropOverlay({ active }) {
    const { t } = useTranslation();

    if (!active) {
        return null;
    }

    return (
        <div className={styles.overlay}>
            <Typography className={styles.text}>{t('web:drop_gpx_to_import')}</Typography>
        </div>
    );
}
