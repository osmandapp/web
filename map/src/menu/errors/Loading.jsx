import { Box, CircularProgress, Typography } from '@mui/material';
import styles from './errors.module.css';
import { useTranslation } from 'react-i18next';

export default function Loading() {
    const { t } = useTranslation();

    return (
        <Box id={'se-loading-page'} className={styles.block}>
            <CircularProgress className={styles.progress} />
            <Box className={styles.info}>
                <Typography className={styles.title}>{t('shared_string_loading')}</Typography>
            </Box>
        </Box>
    );
}
