import { Box, Icon, Typography } from '@mui/material';
import { ReactComponent as EmptyIcon } from '../../assets/icons/ic_action_folder_open.svg';
import styles from './errors.module.css';

export default function Empty({ title, text }) {
    return (
        <Box className={styles.block}>
            <Icon className={styles.icon}>
                <EmptyIcon className={styles.icon} />
            </Icon>
            <Box className={styles.info}>
                <Typography className={styles.title}>{title}</Typography>
                <Typography className={styles.text}>{text}</Typography>
            </Box>
            {/*<Button className={styles.button}>*/}
            {/*    Import*/}
            {/*</Button>*/}
        </Box>
    );
}
