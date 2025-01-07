import { ListItemIcon } from '@mui/material';
import { ReactComponent as ShareIcon } from '../../assets/icons/ic_action_user_share_16.svg';
import styles from './../trackfavmenu.module.css';

export default function FileShareIcon() {
    return (
        <ListItemIcon className={styles.shareIcon}>
            <ShareIcon />
        </ListItemIcon>
    );
}
