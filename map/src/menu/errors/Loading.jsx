import { Box, CircularProgress, Typography } from '@mui/material';
import styles from './errors.module.css';

export default function Loading() {
    return (
        <Box id={'se-loading-page'} className={styles.block}>
            <CircularProgress className={styles.progress} />
            <Box className={styles.info}>
                <Typography className={styles.title}>Loading</Typography>
            </Box>
        </Box>
    );
}
