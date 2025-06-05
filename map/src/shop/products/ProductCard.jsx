import React, { useContext, useEffect } from 'react';
import { products, purchase } from './ProductManager';
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
import { createFastSpringPurchase } from '../../login/fs/FastSpringHelper';

export default function ProductCard({ productId, type, setType, testMode, isSelected, setSelectedCardId }) {
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const product = products.find((p) => p.id === productId);

    useEffect(() => {
        if (ltx.completePurchase) {
            processingPurchase();
            ltx.setCompletePurchase(false);
        }
    }, [ltx.completePurchase]);

    function onClick() {
        if (productId === 'osmand-start') {
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
        if (selectedProduct) {
            createFastSpringPurchase({ testMode, ltx, selectedProduct: selectedProduct.fsName });
        }
    }

    return (
        <Card
            onClick={() => setSelectedCardId(productId)}
            className={`${styles.productCard} ${isSelected ? styles.selected : ''}`}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '90%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
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
                <Box sx={{ mt: 'auto' }}>
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
                                    />
                                ))}
                            </RadioGroup>
                        </Box>
                    )}
                    <PrimaryBtn
                        additionalStyle={{ mt: 2, mb: -2 }}
                        text={t(product.btnText)}
                        span={true}
                        disabled={product.purchaseTypes?.[0] && !type}
                        action={onClick}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}
