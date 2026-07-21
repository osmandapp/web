import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './shop.module.css';
import { ReactComponent as ProIcon } from '../assets/icons/ic_action_osmand_pro_logo_colored.svg';
import { ReactComponent as MapsIcon } from '../assets/icons/ic_action_osmand_maps_plus.svg';
import PrimaryBtn from '../frame/components/btns/PrimaryBtn';
import { useTranslation } from 'react-i18next';
import LoginContext from '../context/LoginContext';
import { createFastSpringPurchase } from '../login/fs/FastSpringHelper';
import { useNavigate } from 'react-router-dom';
import { findPurchase, hasOldPrice } from './products/ProductManager';
import { HEADER_SIZE } from '../manager/GlobalManager';
const STICKY_PRODUCTS = [
    {
        name: 'Maps+',
        icon: <MapsIcon />,
        iconBg: 'rgba(255, 136, 0, 0.2)',
        purchaseId: 'osmand-maps-plus',
    },
    {
        name: 'OsmAnd Pro',
        icon: <ProIcon />,
        iconBg: 'rgba(87, 20, 204, 0.2)',
        purchaseId: 'osmand-pro',
    },
];

export default function StickyBarPricingPage({ visible, testMode, updateCardPrices, setUpdateCardPrices }) {
    const [purchaseObjs, setPurchaseObjs] = useState({});

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
        const objs = {};
        STICKY_PRODUCTS.forEach((p) => {
            const item = findPurchase('annual', p.purchaseId);
            if (item) objs[p.purchaseId] = { ...item };
        });
        setPurchaseObjs(objs);
    }

    return (
        <Box
            className={`${styles.stickyBar} ${visible ? styles.stickyBarVisible : ''}`}
            sx={{ top: `${HEADER_SIZE + 36}px`, zIndex: 1301 }}
        >
            {STICKY_PRODUCTS.map((product) => (
                <StickyBarItem
                    key={product.purchaseId}
                    product={product}
                    testMode={testMode}
                    purchaseObj={purchaseObjs[product.purchaseId]}
                />
            ))}
        </Box>
    );
}

function StickyBarItem({ product, testMode, purchaseObj }) {
    const ltx = useContext(LoginContext);
    const { t } = useTranslation();
    const navigate = useNavigate();

    function onClick() {
        if (!ltx.loginUser) {
            ltx.setOpenLoginDialog(true);
        } else {
            const selectedProduct = findPurchase('annual', product.purchaseId);
            if (selectedProduct) {
                createFastSpringPurchase({ testMode, ltx, selectedProduct: selectedProduct.fsName, navigate });
            }
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
