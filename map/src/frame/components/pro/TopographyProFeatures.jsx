import { Box, Typography } from '@mui/material';
import { ReactComponent as TopographyIcon } from '../../../assets/icons/ic_action_srtm_colored_day.svg';
import styles from './pro.module.css';
import { useTranslation } from 'react-i18next';
import { formatString } from '../../../manager/SettingsManager';

export default function TopographyProFeatures() {
    const { t } = useTranslation();

    return (
        <Box className={styles.mainInfo}>
            <Box className={styles.titleBox}>
                <Box className={styles.titleIcon}>
                    <TopographyIcon />
                </Box>
                <Typography className={styles.titleText}>{t('srtm_plugin_name')}</Typography>
            </Box>
            <Typography className={styles.text1} sx={{ mt: '12px' }}>
                {t('purchases_feature_desc_terrain')}
            </Typography>
            <Typography className={styles.text2} sx={{ mt: '16px' }}>
                {formatString(t('you_can_get_feature_as_part_of_pattern'), [t('srtm_plugin_name'), 'OsmAnd Pro'])}
            </Typography>
        </Box>
    );
}
