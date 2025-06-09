import { Box, Radio, Typography } from '@mui/material';
import { purchase } from './ProductManager';
import styles from '../shop.module.css';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';

export default function PurchaseTypeItem({
    type,
    productId,
    selected,
    onChange,
    updateCardPrices,
    setUpdateCardPrices,
}) {
    const { t } = useTranslation();

    const [saveBox, setSaveBox] = useState(null);
    const [purchaseObj, setPurchaseObj] = useState(null);

    useEffect(() => {
        if (updateCardPrices) {
            const updatedPurchaseObj = purchase[type]?.find((p) => p.id === productId);
            if (updatedPurchaseObj) {
                setPurchaseObj(updatedPurchaseObj);
            }
            setUpdateCardPrices(false);
        }
    }, [updateCardPrices]);

    const labelMap = {
        monthly: 'web:purchase_type_monthly_subscription',
        annual: 'web:purchase_type_annual_subscription',
        'one-time': 'web:purchase_type_one_time_purchase',
    };

    const periodMap = {
        monthly: '/ month',
        annual: '/ year',
        'one-time': '',
    };

    useEffect(() => {
        if (!purchaseObj) {
            return;
        }
        const { monthlyVersionId, oldPrice, newPrice } = purchaseObj;
        if (monthlyVersionId && oldPrice === newPrice) {
            const monthlyVersion = purchase['monthly'].find((p) => p.id === monthlyVersionId);
            if (monthlyVersion && monthlyVersion.oldPrice === monthlyVersion.newPrice) {
                const annualFull = parseFloat(monthlyVersion.newPrice) * 12;
                const annualPromo = parseFloat(newPrice);
                const discountPercent = ((annualFull - annualPromo) / annualFull) * 100;
                if (discountPercent > 1) {
                    setSaveBox(`${t('web:shared_string_save')} ${discountPercent.toFixed(0)}%`);
                }
            }
        }
    }, [purchaseObj]);

    if (!purchaseObj) return null;

    return (
        <Box
            onClick={() => onChange(type)}
            className={`${styles.purchaseTypeCard} ${selected === type ? styles.selected : ''}`}
            sx={{ display: 'flex', flexDirection: 'column' }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                }}
            >
                <Box>
                    <Typography className={styles.purchaseTypeCardTitle}>{t(labelMap[type])}</Typography>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'baseline',
                            flexWrap: 'wrap',
                            ml: 2,
                        }}
                    >
                        {purchaseObj.oldPrice && purchaseObj.oldPrice !== purchaseObj.newPrice && (
                            <Typography className={styles.purchaseTypeCardOldPrice}>
                                {purchaseObj.oldPriceDisplay}&nbsp;
                            </Typography>
                        )}
                        <Typography className={styles.purchaseTypeCardNewPrice}>{purchaseObj.display}</Typography>
                        <Typography className={styles.purchaseTypeCardNewPriceType}>&nbsp;{periodMap[type]}</Typography>
                    </Box>
                    {saveBox && <Typography className={styles.productTypeSale}>{saveBox}</Typography>}
                </Box>
                <Radio className={styles.radioButton} value={type} checked={selected === type} />
            </Box>
        </Box>
    );
}
