import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './shop.module.css';
import { ReactComponent as ProIcon } from '../assets/icons/ic_action_osmand_pro_logo_colored.svg';
import { ReactComponent as MapsIcon } from '../assets/icons/ic_action_osmand_maps_plus.svg';
import PrimaryBtn from '../frame/components/btns/PrimaryBtn';
import { useTranslation } from 'react-i18next';
import LoginContext from '../context/LoginContext';
import AppContext from '../context/AppContext';
import { createFastSpringPurchase } from '../login/fs/FastSpringHelper';
import { useNavigate } from 'react-router-dom';
import {
    findPurchase,
    hasOldPrice,
    PRODUCT_ID_MAPS_PLUS,
    PRODUCT_ID_PRO,
    PURCHASE_TYPE_ANNUAL,
} from './products/ProductManager';
import useCardPriceRefresh from '../util/hooks/useCardPriceRefresh';
import StickyBarContainer from './StickyBarContainer';
const STICKY_PRODUCTS = [
    {
        name: 'Maps+',
        icon: <MapsIcon />,
        iconBg: 'rgba(255, 136, 0, 0.2)',
        purchaseId: PRODUCT_ID_MAPS_PLUS,
    },
    {
        name: 'OsmAnd Pro',
        icon: <ProIcon />,
        iconBg: 'rgba(87, 20, 204, 0.2)',
        purchaseId: PRODUCT_ID_PRO,
    },
];

export default function StickyBarPricingPage({ visible, testMode, updateCardPrices, setUpdateCardPrices }) {
    const [purchaseObjs, setPurchaseObjs] = useState({});

    useEffect(() => {
        loadPrices();
    }, []);

    useCardPriceRefresh(updateCardPrices, setUpdateCardPrices, loadPrices);

    function loadPrices() {
        const objs = {};
        STICKY_PRODUCTS.forEach((p) => {
            const item = findPurchase(PURCHASE_TYPE_ANNUAL, p.purchaseId);
            if (item) objs[p.purchaseId] = { ...item };
        });
        setPurchaseObjs(objs);
    }

    const availableProducts = STICKY_PRODUCTS.filter(
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
