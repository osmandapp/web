import { Box, Button } from '@mui/material';
import { ReactComponent as ProIcon } from '../../../assets/pro.svg';
import { ReactComponent as LogoProIcon } from '../../../assets/ic_action_osmand_pro_logo_colored.svg';
import styles from './pro.module.css';
import { useContext } from 'react';
import AppContext from '../../../context/AppContext';

export default function ButtonPro({ type }) {
    const ctx = useContext(AppContext);

    function open() {
        ctx.setOpenProFeatures({ type });
    }

    return (
        <Button variant="contained" type="button" className={styles.proButton} onClick={open}>
            <Box className={styles.proButtonLogos}>
                <LogoProIcon style={{ width: '24px', height: '24px' }} />
                <ProIcon />
            </Box>
        </Button>
    );
}
