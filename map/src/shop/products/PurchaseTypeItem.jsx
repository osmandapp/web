import { Box, Radio, Typography } from '@mui/material';
import { purchase } from './ProductManager';
import styles from '../shop.module.css';
import { useTranslation } from 'react-i18next';

export default function PurchaseTypeItem({ type, productId, selected, onChange }) {
    const { t } = useTranslation();

    const purchaseObj = purchase[type]?.find((p) => p.id === productId);
    if (!purchaseObj) return null;

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

    return (
        <Box
            onClick={() => onChange(type)}
            className={`${styles.purchaseTypeCard} ${selected === type ? styles.selected : ''}`}
            sx={{ display: 'flex', flexDirection: 'column' }}
        >
            <Typography className={styles.purchaseTypeCardTitle}>{t(labelMap[type])}</Typography>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                        {purchaseObj.oldPrice && purchaseObj.oldPrice !== purchaseObj.newPrice && (
                            <Typography className={styles.purchaseTypeCardOldPrice}>
                                {purchaseObj.oldPriceDisplay}&nbsp;
                            </Typography>
                        )}
                        <Typography className={styles.purchaseTypeCardNewPrice}>{purchaseObj.display}</Typography>
                        <Typography>&nbsp;{periodMap[type]}</Typography>
                    </Box>
                    {purchaseObj.save && <Typography className={styles.productTypeSale}>{purchaseObj.save}</Typography>}
                </Box>
                <Radio sx={{ mr: 1 }} value={type} checked={selected === type} />
            </Box>
        </Box>
    );
}
