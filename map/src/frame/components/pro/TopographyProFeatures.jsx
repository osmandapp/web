import { Box, Typography } from '@mui/material';
import { ReactComponent as TopographyIcon } from '../../../assets/icons/ic_action_srtm_colored_day.svg';
import styles from './pro.module.css';

export default function TopographyProFeatures() {
    return (
        <Box className={styles.mainInfo}>
            <Box className={styles.titleBox}>
                <Box className={styles.titleIcon}>
                    <TopographyIcon />
                </Box>
                <Typography className={styles.titleText}>Topography</Typography>
            </Box>
            <Typography className={styles.text1} sx={{ mt: '12px' }}>
                Terrain contour lines, grayscale hillshade and color scale slope indication, to show peaks and lowlands.
            </Typography>
            <Typography className={styles.text2} sx={{ mt: '16px' }}>
                Get “Topography” as part of the OsmAnd Pro plan. Comparison:
            </Typography>
        </Box>
    );
}
