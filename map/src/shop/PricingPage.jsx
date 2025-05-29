import { Box, Typography } from '@mui/material';
import HeaderMenu from '../frame/components/header/HeaderMenu';
import React from 'react';
import { useWindowSize } from '../util/hooks/useWindowSize';
import ProductCard from './products/ProductCard';
import styles from './shop.module.css';
import { useTranslation } from 'react-i18next';
import FeaturesTable from "./features/FeaturesTable";

export default function PricingPage() {
    const { t } = useTranslation();

    const [, height] = useWindowSize();

    return (
        <Box>
            <HeaderMenu />
            <Box sx={{ overflowY: 'auto', maxHeight: `${height}px` }}>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}
                >
                    <Typography className={styles.pricingTitle} noWrap sx={{ textAlign: 'center', mt: '104px' }}>
                        {t('web:label_pricing')}
                    </Typography>
                    <Typography
                        className={styles.pricingDesc}
                        noWrap
                        sx={{ textAlign: 'center', mt: '10px', mb: '36px' }}
                    >
                        {t('web:subtitle_choose_your_ideal_osmand_plan')}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '24px',
                            justifyContent: 'center',
                        }}
                    >
                        <ProductCard productId={'osmand-start'} />
                        <ProductCard productId={'osmand-maps-plus'} />
                        <ProductCard productId={'osmand-pro'} />
                        <ProductCard productId={'osmand-decade'} />
                    </Box>
                    <Typography
                        className={styles.pricingDesc}
                        noWrap
                        sx={{ textAlign: 'center', mt: '30px', mb: '36px' }}
                    >
                        {t('web:notice_fastspring_purchase_info')}
                    </Typography>
                    <FeaturesTable/>
                </Box>
            </Box>
        </Box>
    );
}
