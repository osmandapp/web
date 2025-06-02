import { Box, Icon, ListItemText } from '@mui/material';
import styles from './errors.module.css';
import EmptyLogin from '../../login/EmptyLogin';
import { ReactComponent as SearchIcon } from '../../assets/icons/ic_action_search_dark.svg';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import LoginContext from '../../context/LoginContext';

export default function EmptySearch({ message }) {
    const ltx = useContext(LoginContext);
    const { t } = useTranslation();

    return (
        <>
            {ltx.loginUser ? (
                <Box className={styles.block} id={'se-empty-search'}>
                    <Icon className={styles.icon}>
                        <SearchIcon className={styles.icon} />
                    </Icon>
                    <Box className={styles.info}>
                        <ListItemText disableTypography={true} className={styles.title}>
                            {t('nothing_found_in_radius')}
                        </ListItemText>
                        <ListItemText disableTypography={true} className={styles.text}>
                            {message ?? t('nothing_found_descr')}
                        </ListItemText>
                    </Box>
                </Box>
            ) : (
                <EmptyLogin />
            )}
        </>
    );
}
