import { Box, Typography } from '@mui/material';
import HeaderMenu from '../frame/components/header/HeaderMenu';
import React, { useState } from 'react';
import ProductCard from './products/ProductCard';
import styles from './shop.module.css';
import { useTranslation } from 'react-i18next';

const FeaturesTable = React.lazy(() => import('./features/FeaturesTable'));

export default function PricingPage() {
    const { t } = useTranslation();

    const [selectedProductType, setSelectedProductType] = useState('');

    const [useTestMode, setUseTestMode] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState(null);

    const clickHandler = (event) => {
        if (event.detail % 3 === 0) {
            setUseTestMode(!useTestMode);
        }
    };

    return (
        <Box>
            <HeaderMenu />
            <Box sx={{ overflowY: 'auto', maxHeight: `100vh` }}>
                <Box className={styles.pricingBox}>
                    <Typography className={styles.pricingTitle} onClick={clickHandler}>
                        {`${t('web:label_pricing')}${useTestMode ? ' TEST MODE' : ''}`}
                    </Typography>
                    <Typography className={styles.pricingDesc}>
                        {t('web:subtitle_choose_your_ideal_osmand_plan')}
                    </Typography>
                    <Box className={styles.productCardBox}>
                        {['osmand-start', 'osmand-maps-plus', 'osmand-pro', 'osmand-decade'].map((id) => (
                            <ProductCard
                                key={id}
                                productId={id}
                                type={selectedProductType[id] || ''}
                                setType={(type) => {
                                    setSelectedProductType({ [id]: type });
                                    setSelectedCardId(id);
                                }}
                                testMode={useTestMode}
                                isSelected={selectedCardId === id}
                                setSelectedCardId={setSelectedCardId}
                            />
                        ))}
                    </Box>
                    <Typography className={styles.pricingDesc}>{t('web:notice_fastspring_purchase_info')}</Typography>
                    <FeaturesTable />
                </Box>
            </Box>
        </Box>
    );
}
