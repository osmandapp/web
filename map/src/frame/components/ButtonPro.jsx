import { Box, Button } from '@mui/material';
import { ReactComponent as ProIcon } from '../../assets/pro.svg';
import { ReactComponent as LogoProIcon } from '../../assets/ic_action_osmand_pro_logo_colored.svg';
import styles from './frame.module.css';

export default function ButtonPro() {
    return (
        <Button variant="contained" type="button" className={styles.proButton}>
            <Box className={styles.proButtonLogos}>
                <LogoProIcon style={{ width: '24px', height: '24px' }} />
                <ProIcon />
            </Box>
        </Button>
    );
}
