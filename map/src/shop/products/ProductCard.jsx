import React, { useContext, useEffect, useState } from 'react';
import {
    products,
    purchase,
    PRODUCT_ID_START,
    PURCHASE_TYPE_ANNUAL,
    PURCHASE_TYPE_MONTHLY,
    PURCHASE_TYPE_ONE_TIME,
} from './ProductManager';
import {
    Box,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    RadioGroup,
    Typography,
} from '@mui/material';
import styles from '../shop.module.css';
import { ReactComponent as CheckIcon } from '../../assets/icons/ic_action_checkmark_colored_day.svg';
import PurchaseTypeItem from './PurchaseTypeItem';
import PrimaryBtn from '../../frame/components/btns/PrimaryBtn';
import { useTranslation } from 'react-i18next';
import LoginContext from '../../context/LoginContext';
import AppContext from '../../context/AppContext';
import { createFastSpringPurchase } from '../../login/fs/FastSpringHelper';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
    productId,
    type,
    setType,
    testMode,
    isSelected,
    setSelectedCardId,
    updateCardPrices,
    setUpdateCardPrices,
    purchasesReady,
}) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const navigate = useNavigate();

    const product = products.find((p) => p.id === productId);

    const [btnText, setBtnText] = useState('web:action_complete_purchase');

    useEffect(() => {
        if (ltx.completePurchase && purchasesReady) {
            processingPurchase();
            ltx.setCompletePurchase(false);
        }
    }, [ltx.completePurchase, purchasesReady]);

    useEffect(() => {
        if (product?.btnText) {
            setBtnText(product.btnText);
        } else if (type === PURCHASE_TYPE_MONTHLY) {
            setBtnText('web:action_subscribe_monthly');
        } else if (type === PURCHASE_TYPE_ANNUAL) {
            setBtnText('web:action_subscribe_annual');
        } else if (type === PURCHASE_TYPE_ONE_TIME) {
            setBtnText('web:action_complete_purchase');
        } else {
            setBtnText('web:action_complete_purchase');
        }
    }, [type]);

    function onClick() {
        if (productId === PRODUCT_ID_START) {
            ltx.setOpenLoginDialog(true);
        } else {
            purchaseProduct();
        }
    }

    function purchaseProduct() {
        if (!ltx.loginUser) {
            ltx.setOpenLoginDialog(true);
        } else {
            processingPurchase();
        }
    }

    function processingPurchase() {
        const selectedProduct = purchase[type]?.find((p) => p.id === productId);
        if (selectedProduct && (selectedProduct.show || testMode)) {
            createFastSpringPurchase({ testMode, ltx, ctx, productId, type, navigate });
        }
    }

    return (
        <Card
            onClick={() => setSelectedCardId(productId)}
            className={`${styles.productCard} ${isSelected ? styles.selected : ''}`}
        >
            <Box className={styles.productCardHeader}>
                <Typography className={styles.productCardTitle}>{product.name}</Typography>
                <ListItemIcon className={styles.productCardIcon}>{product.icon}</ListItemIcon>
            </Box>
            <CardContent className={styles.productCardContent}>
                <List className={styles.productCardFeatureBox}>
                    {product.shortFeaturesList.map((f) => (
                        <ListItem key={f} className={styles.productCardFeature}>
                            <ListItemIcon className={styles.productCardFeatureIcon}>
                                <CheckIcon />
                            </ListItemIcon>
                            <ListItemText className={styles.productCardFeatureText}>{t(f)}</ListItemText>
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ mt: 'auto', ml: '4px', mr: '4px' }}>
                    {product.purchaseTypes && (
                        <Box>
                            <RadioGroup
                                className={styles.purchaseTypeCardBox}
                                row
                                value={type}
                                name={`purchase-type-${productId}`}
                                onChange={(e) => setType(e.target.value)}
                            >
                                {product.purchaseTypes.map((pt) => (
                                    <PurchaseTypeItem
                                        key={pt}
                                        type={pt}
                                        productId={productId}
                                        selected={type}
                                        onChange={(value) => setType(value)}
                                        updateCardPrices={updateCardPrices}
                                        setUpdateCardPrices={setUpdateCardPrices}
                                        testMode={testMode}
                                    />
                                ))}
                            </RadioGroup>
                        </Box>
                    )}
                    <PrimaryBtn
                        additionalStyle={{ mt: 2, mb: -2 }}
                        text={t(btnText)}
                        span={true}
                        disabled={product.purchaseTypes?.[0] && !type}
                        action={onClick}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}
