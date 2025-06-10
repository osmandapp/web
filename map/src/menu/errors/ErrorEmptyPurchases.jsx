import { Box, Icon, ListItemText } from '@mui/material';
import loginStyles from '../../login/login.module.css';
import styles from './errors.module.css';
import { ReactComponent as PurchasesIcon } from '../../assets/icons/ic_action_purchases_outlined.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/ic_arrow_forward.svg';
import { useTranslation } from 'react-i18next';
import SimpleText from '../../frame/components/other/SimpleText';
import React from 'react';
import BlueButtonWithIcon from '../../frame/components/btns/BlueButtonWithIcon';
import SimpleDivider from '../../frame/components/dividers/SimpleDivider';
import { useLocation, useNavigate } from 'react-router-dom';
import { PRICING_URL } from '../../manager/GlobalManager';

export default function ErrorEmptyPurchases() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <Box id="se-empty-purchase-page" className={loginStyles.block}>
                <Icon className={styles.icon}>
                    <PurchasesIcon className={styles.icon} />
                </Icon>
                <Box className={styles.info}>
                    <ListItemText disableTypography={true} className={styles.title}>
                        {t('no_purchases')}
                    </ListItemText>
                </Box>
            </Box>
            <SimpleDivider />
            <Box className={loginStyles.block}>
                <Box sx={{ mb: 2, mt: -2 }}>
                    <SimpleText text={t('explore_osmnad_plans_to_find_suitable')} />
                </Box>
                <BlueButtonWithIcon
                    icon={<ArrowIcon />}
                    text={t('shared_string_learn_more')}
                    action={() =>
                        navigate({
                            pathname: '/' + PRICING_URL,
                            hash: location.hash,
                        })
                    }
                />
            </Box>
        </>
    );
}
