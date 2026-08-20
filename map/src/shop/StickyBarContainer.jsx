import { Box } from '@mui/material';
import styles from './shop.module.css';
import { HEADER_SIZE } from '../manager/GlobalManager';

export default function StickyBarContainer({ visible, children }) {
    return (
        <Box
            className={`${styles.stickyBar} ${visible ? styles.stickyBarVisible : ''}`}
            sx={{ top: `${HEADER_SIZE + 36}px`, zIndex: 1301 }}
        >
            {children}
        </Box>
    );
}
