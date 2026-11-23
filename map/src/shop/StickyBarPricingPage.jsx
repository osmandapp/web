import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './shop.module.css';
import PrimaryBtn from '../frame/components/btns/PrimaryBtn';
import { useTranslation } from 'react-i18next';
import LoginContext from '../context/LoginContext';
import AppContext from '../context/AppContext';
import { createFastSpringPurchase } from '../login/fs/FastSpringHelper';
import { useNavigate } from 'react-router-dom';
import { findPurchase, hasOldPrice, PURCHASE_TYPE_ANNUAL, stickyBarProducts } from './products/ProductManager';
import useCardPriceRefresh from '../util/hooks/useCardPriceRefresh';
import StickyBarContainer from './StickyBarContainer';

export default function StickyBarPricingPage({ visible, testMode, updateCardPrices, setUpdateCardPrices }) {
    const [purchaseObjs, setPurchaseObjs] = useState({});

    useEffect(() => {
        loadPrices();
    }, []);

    useCardPriceRefresh(updateCardPrices, setUpdateCardPrices, loadPrices);

    function loadPrices() {
        const objs = {};
        stickyBarProducts.forEach((p) => {
            const item = findPurchase(PURCHASE_TYPE_ANNUAL, p.purchaseId);
            if (item) objs[p.purchaseId] = { ...item };
        });
        setPurchaseObjs(objs);
    }

    const availableProducts = stickyBarProducts.filter(
        (product) => testMode || purchaseObjs[product.purchaseId]?.show !== false
    );

    return (
        <StickyBarContainer visible={visible && availableProducts.length > 0}>
            {availableProducts.map((product) => (
                <StickyBarItem
                    key={product.purchaseId}
                    product={product}
                    testMode={testMode}
                    purchaseObj={purchaseObjs[product.purchaseId]}
                />
            ))}
        </StickyBarContainer>
    );
}

function StickyBarItem({ product, testMode, purchaseObj }) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const { t } = useTranslation();
    const navigate = useNavigate();

    function onClick() {
        if (!ltx.loginUser) {
            ltx.setOpenLoginDialog(true);
        } else {
            createFastSpringPurchase({
                testMode,
                ltx,
                ctx,
                productId: product.purchaseId,
                type: PURCHASE_TYPE_ANNUAL,
                navigate,
            });
        }
    }

    return (
        <Box className={styles.stickyBarItem}>
            <Box className={styles.stickyBarIconFrame} style={{ backgroundColor: product.iconBg }}>
                {product.icon}
            </Box>
            <Box className={styles.stickyBarInfo}>
                <Typography className={styles.stickyBarName}>{product.name}</Typography>
                <Box className={styles.stickyBarPriceRow}>
                    {hasOldPrice(purchaseObj) && (
                        <Typography className={styles.stickyBarOldPrice}>
                            {purchaseObj.oldPriceDisplay}&nbsp;
                        </Typography>
                    )}
                    {purchaseObj?.display && (
                        <Typography className={styles.stickyBarNewPrice}>{purchaseObj.display}</Typography>
                    )}
                    {purchaseObj?.display && (
                        <Typography className={styles.stickyBarPricePeriod}>
                            &nbsp;/ {t('web:purchase_period_year')}
                        </Typography>
                    )}
                </Box>
            </Box>
            <Box className={styles.stickyBarBtnWrap}>
                <PrimaryBtn text={t('web:action_subscribe_annual')} span={true} action={onClick} />
            </Box>
        </Box>
    );
}
