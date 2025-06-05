import { Box, Radio, Typography } from '@mui/material';
import { purchase } from './ProductManager';
import styles from '../shop.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function PurchaseTypeItem({ type, productId, selected, onChange }) {
    const { t } = useTranslation();

    const [saveBox, setSaveBox] = useState(null);

    const purchaseObj = purchase[type]?.find((p) => p.id === productId);

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
        if (purchaseObj.monthlyVersionId && purchaseObj.oldPrice === purchaseObj.newPrice) {
            const monthlyVersion = purchase['monthly'].find((p) => p.id === purchaseObj.monthlyVersionId);
            if (monthlyVersion && monthlyVersion.oldPrice === monthlyVersion.newPrice) {
                const annualVersion = parseFloat(monthlyVersion.newPrice) * 12;
                const save = parseFloat(purchaseObj.newPrice) - annualVersion / 100;
                if (save > 0) {
                    setSaveBox(`${t('web:shared_string_save')} ${save.toFixed(0)}%`);
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
                }}
            >
                <Box>
                    <Typography className={styles.purchaseTypeCardTitle}>{t(labelMap[type])}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
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
