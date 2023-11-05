import { Box, Icon, ListItemText } from '@mui/material';
import { ReactComponent as EmptyIcon } from '../../assets/icons/ic_action_folder_open.svg';
import styles from './errors.module.css';

export default function Empty({ title, text }) {
    return (
        <Box className={styles.block}>
            <Icon className={styles.icon}>
                <EmptyIcon className={styles.icon} />
            </Icon>
            <Box className={styles.info}>
                <ListItemText disableTypography={true} className={styles.title}>
                    {title}
                </ListItemText>
                <ListItemText disableTypography={true} className={styles.text}>
                    {text}
                </ListItemText>
            </Box>
            {/*<Button className={styles.button}>*/}
            {/*    Import*/}
            {/*</Button>*/}
        </Box>
    );
}
