import { Box, Icon, ListItemText } from '@mui/material';
import styles from './errors.module.css';
import EmptyLogin from '../../login/EmptyLogin';
import { ReactComponent as TrashIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import { useTranslation } from 'react-i18next';
import { formatString } from '../../manager/SettingsManager';
import { useContext } from 'react';
import LoginContext from '../../context/LoginContext';

export default function EmptyTrash() {
    const ltx = useContext(LoginContext);
    const { t } = useTranslation();

    return (
        <>
            {ltx.loginUser ? (
                <Box id={'se-empty-trash-page'} className={styles.block}>
                    <Icon className={styles.icon}>
                        <TrashIcon className={styles.icon} />
                    </Icon>
                    <Box className={styles.info}>
                        <ListItemText disableTypography={true} className={styles.title}>
                            {t('trash_is_empty')}
                        </ListItemText>
                        <ListItemText disableTypography={true} className={styles.text}>
                            {formatString(t('trash_is_empty_banner_desc'), [30])}
                        </ListItemText>
                    </Box>
                </Box>
            ) : (
                <EmptyLogin />
            )}
        </>
    );
}
