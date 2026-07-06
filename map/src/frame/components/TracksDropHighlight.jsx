import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './dropOverlay.module.css';

export default function TracksDropHighlight() {
    const { t } = useTranslation();

    return (
        <div className={styles.tracksDropHighlight}>
            <Typography className={styles.text}>{t('web:drop_gpx_to_import')}</Typography>
        </div>
    );
}
