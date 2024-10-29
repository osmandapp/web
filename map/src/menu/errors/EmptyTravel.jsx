import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { Box, Button, Icon, ListItemText } from '@mui/material';
import styles from './errors.module.css';
import buttonStyles from '../login/login.module.css';
import EmptyLogin from '../login/EmptyLogin';
import { ReactComponent as EmptyTravelIcon } from '../../assets/icons/ic_action_desert.svg';

export default function EmptyTravel({ reset }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    return (
        <>
            {ctx.loginUser ? (
                <Box className={styles.block} id={'se-empty-travel'}>
                    <Icon className={styles.icon}>
                        <EmptyTravelIcon className={styles.icon} />
                    </Icon>
                    <Box className={styles.info}>
                        <ListItemText disableTypography={true} className={styles.title}>
                            No tracks found
                        </ListItemText>
                        <ListItemText disableTypography={true} className={styles.text}>
                            No matching tracks were found in the current map view area. Try moving the map or changing
                            your filters.
                        </ListItemText>
                    </Box>
                    <Button className={buttonStyles.button} component="span" onClick={reset}>
                        {t('shared_string_reset')}
                    </Button>
                </Box>
            ) : (
                <EmptyLogin />
            )}
        </>
    );
}
