import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { Box, Icon, ListItemText } from '@mui/material';
import styles from './errors.module.css';
import EmptyLogin from '../../login/EmptyLogin';
import { ReactComponent as EmptyTravelIcon } from '../../assets/icons/ic_action_desert.svg';
import GrayBtnWithBlueHover from '../../frame/components/btns/GrayBtnWithBlueHover';
import LoginContext from '../../context/LoginContext';

export default function EmptyTravel({ reset }) {
    const ltx = useContext(LoginContext);
    const { t } = useTranslation();

    return (
        <>
            {ltx.loginUser ? (
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
                    <GrayBtnWithBlueHover action={reset} text={t('shared_string_reset')} span={true} />
                </Box>
            ) : (
                <EmptyLogin />
            )}
        </>
    );
}
