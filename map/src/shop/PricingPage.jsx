import { Box, Typography } from '@mui/material';
import HeaderMenu from '../frame/components/header/HeaderMenu';
import React, { useState } from 'react';
import { useWindowSize } from '../util/hooks/useWindowSize';
import ProductCard from './products/ProductCard';
import styles from './shop.module.css';
import { useTranslation } from 'react-i18next';
import FeaturesTable from './features/FeaturesTable';

export default function PricingPage() {
    const { t } = useTranslation();

    const [, height] = useWindowSize();

    const [selectedProductType, setSelectedProductType] = useState('');

    const [useTestMode, setUseTestMode] = useState(false);

    const clickHandler = (event) => {
        if (event.detail % 3 === 0) {
            setUseTestMode(!useTestMode);
        }
    };

    return (
        <Box>
            <HeaderMenu />
            <Box sx={{ overflowY: 'auto', maxHeight: `${height}px` }}>
                <Box className={styles.pricingBox}>
                    <Typography className={styles.pricingTitle} noWrap onClick={clickHandler}>
                        {`${t('web:label_pricing')}${useTestMode ? ' TEST MODE' : ''}`}
                    </Typography>
                    <Typography className={styles.pricingDesc} noWrap>
                        {t('web:subtitle_choose_your_ideal_osmand_plan')}
                    </Typography>
                    <Box className={styles.productCardBox}>
                        {['osmand-start', 'osmand-maps-plus', 'osmand-pro', 'osmand-decade'].map((id) => (
                            <ProductCard
                                key={id}
                                productId={id}
                                type={selectedProductType[id] || ''}
                                setType={(type) => setSelectedProductType({ [id]: type })}
                                testMode={useTestMode}
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
