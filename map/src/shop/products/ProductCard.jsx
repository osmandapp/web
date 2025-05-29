import React, { useState } from 'react';
import { products } from './ProductManager';
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

export default function ProductCard({ productId }) {
    const { t } = useTranslation();

    const product = products.find((p) => p.id === productId);

    const [type, setType] = useState('');

    function onClick() {
        // Handle the click event for the purchase button
    }

    return (
        <Card className={styles.productCard}>
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
            <CardContent sx={{ width: '90%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <List className={styles.productCardFeatureBox}>
                    {product.shortFeaturesList.map((f) => (
                        <ListItem key={f} className={styles.productCardFeature}>
                            <ListItemIcon className={styles.productCardFeatureIcon}>
                                <CheckIcon />
                            </ListItemIcon>
                            <ListItemText>{t(f)}</ListItemText>
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
                                onChange={(e) => setType(e.target.value)}
                            >
                                {product.purchaseTypes.map((pt) => (
                                    <PurchaseTypeItem
                                        key={pt}
                                        type={pt}
                                        productId={productId}
                                        onChange={(e) => setType(e.target.value)}
                                        selected={type}
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
