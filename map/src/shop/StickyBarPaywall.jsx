import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './shop.module.css';
import PrimaryBtn from '../frame/components/btns/PrimaryBtn';
import GrayBtnWithBlueHover from '../frame/components/btns/GrayBtnWithBlueHover';
import { useTranslation } from 'react-i18next';
import LoginContext from '../context/LoginContext';
import AppContext from '../context/AppContext';
import { createFastSpringPurchase } from '../login/fs/FastSpringHelper';
import { useNavigate } from 'react-router-dom';
import {
    findPurchase,
    products,
    PURCHASE_TYPE_ANNUAL,
    PURCHASE_TYPE_TEXTS,
    stickyBarProducts,
} from './products/ProductManager';
import { findFeature } from './features/FeaturesManager';
import useCardPriceRefresh from '../util/hooks/useCardPriceRefresh';
import StickyBarContainer from './StickyBarContainer';

export default function StickyBarPaywall({
    visible,
    testMode,
    updateCardPrices,
    setUpdateCardPrices,
    productId,
    featureId,
    onSeeAllPlans,
}) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const navigate = useNavigate();

    const [purchases, setPurchases] = useState({});

    useEffect(() => {
        loadPrices();
    }, []);

    useCardPriceRefresh(updateCardPrices, setUpdateCardPrices, loadPrices);

    const product = stickyBarProducts.find((p) => p.purchaseId === productId);
    const purchaseTypes = products.find((p) => p.id === productId).purchaseTypes;
    const feature = findFeature(featureId);
    const annualPurchase = purchases[PURCHASE_TYPE_ANNUAL];

    function loadPrices() {
        const loaded = {};
        purchaseTypes.forEach((type) => {
            const item = findPurchase(type, productId);
            if (item) {
                loaded[type] = { ...item };
            }
        });
        setPurchases(loaded);
    }

    function subscribeAnnual() {
        if (!ltx.loginUser) {
            ltx.setOpenLoginDialog(true);
        } else if (annualPurchase) {
            createFastSpringPurchase({
                testMode,
                ltx,
                ctx,
                productId,
                type: PURCHASE_TYPE_ANNUAL,
                navigate,
            });
        }
    }

    return (
        <StickyBarContainer visible={visible}>
            <Box className={styles.stickyBarPaywallItem}>
                <Box className={styles.stickyBarPaywallItemContent}>
                    <Box className={styles.stickyBarIconFrame} style={{ backgroundColor: product.iconBg }}>
                        {product.icon}
                    </Box>
                    <Box className={styles.stickyBarInfo}>
                        <Typography className={styles.stickyBarName}>{product.name}</Typography>
                        <Typography className={styles.stickyBarPaywallDesc}>
                            {t(feature?.name ?? 'web:feature_cross_platform')}
                        </Typography>
                    </Box>
                    <Box className={styles.stickyBarPaywallPrices}>
                        {purchaseTypes.map((type, index) => (
                            <React.Fragment key={type}>
                                {index > 0 && <Box className={styles.stickyBarPaywallDivider} />}
                                <Box className={styles.stickyBarPaywallPriceCol}>
                                    <Typography className={styles.stickyBarPaywallPriceLabel}>
                                        {t(PURCHASE_TYPE_TEXTS[type].label)}
                                    </Typography>
                                    <Box className={styles.stickyBarPriceRow}>
                                        {purchases[type]?.display && (
                                            <Typography className={styles.stickyBarNewPrice}>
                                                {purchases[type].display}
                                            </Typography>
                                        )}
                                        {purchases[type]?.display && PURCHASE_TYPE_TEXTS[type].period && (
                                            <Typography className={styles.stickyBarPricePeriod}>
                                                &nbsp;/ {t(PURCHASE_TYPE_TEXTS[type].period)}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            </React.Fragment>
                        ))}
                    </Box>
                </Box>
                <Box className={styles.stickyBarPaywallBtns}>
                    {(testMode || annualPurchase?.show !== false) && (
                        <Box className={styles.stickyBarBtnWrap}>
                            <PrimaryBtn text={t('web:action_subscribe_annual')} span={true} action={subscribeAnnual} />
                        </Box>
                    )}
                    <Box className={styles.stickyBarBtnWrap}>
                        <GrayBtnWithBlueHover text={t('web:action_see_all_plans')} span={true} action={onSeeAllPlans} />
                    </Box>
                </Box>
            </Box>
        </StickyBarContainer>
    );
}
