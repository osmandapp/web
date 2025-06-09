import { Box, CircularProgress, Typography } from '@mui/material';
import HeaderMenu from '../frame/components/header/HeaderMenu';
import React, { useEffect, useState } from 'react';
import ProductCard from './products/ProductCard';
import styles from './shop.module.css';
import { useTranslation } from 'react-i18next';
import { purchase } from './products/ProductManager';
import EmptyLoginDialog from '../login/dialogs/EmptyLoginDialog';
import { updatePrices } from '../login/fs/FastSpringHelper';

const FeaturesTable = React.lazy(() => import('./features/FeaturesTable'));

export default function PricingPage() {
    const { t } = useTranslation();

    const [selectedProductType, setSelectedProductType] = useState('');
    const [purchasePriceMap, setPurchasePriceMap] = useState([]);

    const [useTestMode, setUseTestMode] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [show, setShow] = useState(false);
    const [updateCardPrices, setUpdateCardPrices] = useState(false);

    const clickHandler = (event) => {
        if (event.detail % 3 === 0) {
            setUseTestMode(!useTestMode);
        }
    };

    useEffect(() => {
        updatePrices(setPurchasePriceMap, useTestMode);
    }, [useTestMode]);

    useEffect(() => {
        if (purchasePriceMap && Object.keys(purchasePriceMap).length > 0) {
            Object.keys(purchase).forEach((type) => {
                purchase[type].forEach((item) => {
                    const info = purchasePriceMap[useTestMode ? 'test-' + item.fsName : item.fsName];
                    if (info) {
                        item.oldPrice = info.oldPrice;
                        item.newPrice = info.newPrice;
                        item.oldPriceDisplay = info.oldPriceDisplay;
                        item.display = info.display;
                    }
                });
            });
            setShow(true);
            setUpdateCardPrices(true);
        }
    }, [purchasePriceMap]);

    return (
        <Box>
            <HeaderMenu />
            <Box sx={{ overflowY: 'auto', maxHeight: `100%` }}>
                <Box className={styles.pricingBox}>
                    <Typography className={styles.pricingTitle} onClick={clickHandler}>
                        {`${t('web:label_pricing')}${useTestMode ? ' TEST MODE' : ''}`}
                    </Typography>
                    <Typography className={styles.pricingDesc}>
                        {t('web:subtitle_choose_your_ideal_osmand_plan')}
                    </Typography>
                    {!show && <CircularProgress />}
                    {show && (
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
                                    updateCardPrices={updateCardPrices}
                                    setUpdateCardPrices={setUpdateCardPrices}
                                />
                            ))}
                        </Box>
                    )}
                    <Typography className={styles.pricingDesc}>{t('web:notice_fastspring_purchase_info')}</Typography>
                    <FeaturesTable />
                </Box>
            </Box>
            <EmptyLoginDialog />
        </Box>
    );
}
