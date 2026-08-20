import { Box } from '@mui/material';
import styles from './shop.module.css';

export default function StickyBarContainer({ visible, children }) {
    return <Box className={`${styles.stickyBar} ${visible ? styles.stickyBarVisible : ''}`}>{children}</Box>;
}
