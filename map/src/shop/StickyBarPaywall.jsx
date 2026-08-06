import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './shop.module.css';
import { ReactComponent as ProIcon } from '../assets/icons/ic_action_osmand_pro_logo_colored.svg';
import PrimaryBtn from '../frame/components/btns/PrimaryBtn';
import GrayBtnWithBlueHover from '../frame/components/btns/GrayBtnWithBlueHover';
import { useTranslation } from 'react-i18next';
import LoginContext from '../context/LoginContext';
import { createFastSpringPurchase } from '../login/fs/FastSpringHelper';
import { useNavigate } from 'react-router-dom';
import { findPurchase } from './products/ProductManager';
import { findFeature } from './features/FeaturesManager';
import { HEADER_SIZE } from '../manager/GlobalManager';

export default function StickyBarPaywall({
    visible,
    testMode,
    updateCardPrices,
    setUpdateCardPrices,
    featureId,
    onSeeAllPlans,
}) {
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const navigate = useNavigate();

    const [monthlyPurchase, setMonthlyPurchase] = useState(null);
    const [annualPurchase, setAnnualPurchase] = useState(null);

    useEffect(() => {
        loadPrices();
    }, []);

    useEffect(() => {
        if (updateCardPrices) {
            loadPrices();
            setUpdateCardPrices(false);
        }
    }, [updateCardPrices]);

    function loadPrices() {
        setMonthlyPurchase(findPurchase('monthly', 'osmand-pro'));
        setAnnualPurchase(findPurchase('annual', 'osmand-pro'));
    }

    const feature = findFeature(featureId);

    function subscribeAnnual() {
        if (!ltx.loginUser) {
            ltx.setOpenLoginDialog(true);
        } else if (annualPurchase) {
            createFastSpringPurchase({ testMode, ltx, selectedProduct: annualPurchase.fsName, navigate });
        }
    }

    return (
        <Box
            className={`${styles.stickyBar} ${visible ? styles.stickyBarVisible : ''}`}
            sx={{ top: `${HEADER_SIZE + 36}px`, zIndex: 1301 }}
        >
            <Box className={styles.stickyBarPaywallItem}>
                <Box className={styles.stickyBarPaywallItemContent}>
                    <Box className={styles.stickyBarIconFrame} style={{ backgroundColor: 'rgba(87, 20, 204, 0.2)' }}>
                        <ProIcon />
                    </Box>
                    <Box className={styles.stickyBarInfo}>
                        <Typography className={styles.stickyBarName}>OsmAnd Pro</Typography>
                        <Typography className={styles.stickyBarPaywallDesc}>
                            {t(feature?.name ?? 'web:feature_cross_platform')}
                        </Typography>
                    </Box>
                    <Box className={styles.stickyBarPaywallPrices}>
                        <Box className={styles.stickyBarPaywallPriceCol}>
                            <Typography className={styles.stickyBarPaywallPriceLabel}>
                                {t('web:purchase_type_monthly_subscription')}
                            </Typography>
                            <Box className={styles.stickyBarPriceRow}>
                                {monthlyPurchase?.display && (
                                    <Typography className={styles.stickyBarNewPrice}>
                                        {monthlyPurchase.display}
                                    </Typography>
                                )}
                                {monthlyPurchase?.display && (
                                    <Typography className={styles.stickyBarPricePeriod}>
                                        &nbsp;/ {t('web:purchase_period_month')}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                        <Box className={styles.stickyBarPaywallDivider} />
                        <Box className={styles.stickyBarPaywallPriceCol}>
                            <Typography className={styles.stickyBarPaywallPriceLabel}>
                                {t('web:purchase_type_annual_subscription')}
                            </Typography>
                            <Box className={styles.stickyBarPriceRow}>
                                {annualPurchase?.display && (
                                    <Typography className={styles.stickyBarNewPrice}>
                                        {annualPurchase.display}
                                    </Typography>
                                )}
                                {annualPurchase?.display && (
                                    <Typography className={styles.stickyBarPricePeriod}>
                                        &nbsp;/ {t('web:purchase_period_year')}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.stickyBarPaywallBtns}>
                    <Box className={styles.stickyBarBtnWrap}>
                        <PrimaryBtn text={t('web:action_subscribe_annual')} span={true} action={subscribeAnnual} />
                    </Box>
                    <Box className={styles.stickyBarBtnWrap}>
                        <GrayBtnWithBlueHover text={t('web:action_see_all_plans')} span={true} action={onSeeAllPlans} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
