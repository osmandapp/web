import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './dropOverlay.module.css';

export default function DropOverlay({ insets }) {
    const { t } = useTranslation();

    if (!insets) {
        return null;
    }

    return (
        <div
            className={styles.dropOverlay}
            style={{
                top: `${insets.top}px`,
                left: `${insets.left}px`,
                right: `${insets.right}px`,
                bottom: `${insets.bottom}px`,
            }}
        >
            <Typography className={styles.text}>{t('web:drop_gpx_to_import')}</Typography>
        </div>
    );
}
