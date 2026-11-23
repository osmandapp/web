import { Box, Button } from '@mui/material';
import styles from './pro.module.css';

export default function PlanButton({ className, logo, label, onClick }) {
    return (
        <Button variant="contained" type="button" className={`${styles.planButton} ${className}`} onClick={onClick}>
            <Box className={styles.planButtonLogos}>
                {logo}
                {label}
            </Box>
        </Button>
    );
}
