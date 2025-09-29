import { Box, CircularProgress, Link, Typography } from '@mui/material';
import HeaderMenu from '../frame/components/header/HeaderMenu';
import React, { Suspense, useContext, useEffect, useState } from 'react';
import ProductCard from './products/ProductCard';
import styles from './shop.module.css';
import { useTranslation, Trans } from 'react-i18next';
import { purchase } from './products/ProductManager';
import EmptyLoginDialog from '../login/dialogs/EmptyLoginDialog';
import { updatePrices } from '../login/fs/FastSpringHelper';
import { getAccountInfo } from '../manager/LoginManager';
import LoginContext from '../context/LoginContext';

const FeaturesTable = React.lazy(() => import('./features/FeaturesTable'));

export default function PricingPage() {
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const [selectedProductType, setSelectedProductType] = useState('');
    const [purchasePriceMap, setPurchasePriceMap] = useState([]);
    const [currentPurchases, setCurrentPurchases] = useState(null);

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
        if (ltx.isLoggedIn()) {
            getAccountInfo(ltx.setAccountInfo).then((info) => {
                const subscriptions = info?.subscriptions && JSON.parse(info.subscriptions);
                const inAppPurchases = info?.inAppPurchases && JSON.parse(info.inAppPurchases);
                setCurrentPurchases({ subscriptions, inAppPurchases });
                updatePrices(setPurchasePriceMap, useTestMode);
            });
        } else {
            setCurrentPurchases({ subscriptions: [], inAppPurchases: [] });
            updatePrices(setPurchasePriceMap, useTestMode);
        }
    }, [useTestMode, ltx.loginUser]);

    useEffect(() => {
        if (purchasePriceMap && Object.keys(purchasePriceMap).length > 0 && currentPurchases) {
            const allPurchases = [
                ...(currentPurchases.subscriptions || []),
                ...(currentPurchases.inAppPurchases || []),
            ];

            Object.keys(purchase).forEach((type) => {
                purchase[type].forEach((item) => {
                    const info = purchasePriceMap[useTestMode ? 'test-' + item.fsName : item.fsName];
                    if (info) {
                        item.oldPrice = info.oldPrice;
                        item.newPrice = info.newPrice;
                        item.oldPriceDisplay = info.oldPriceDisplay;
                        item.display = info.display;
                        if (
                            allPurchases.find((p) => {
                                p.type = p.type ?? 'one-time';
                                return p.valid === true && p.name === item.name && p.type === type;
                            })
                        ) {
                            item.show = false;
                        }
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
                            {['osmand-start', 'osmand-maps-plus', 'osmand-pro', 'osmand-15-years'].map((id) => (
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
                    <Typography className={styles.pricingDesc}>
                        <Trans i18nKey="web:notice_fastspring_purchase_info" components={{ portalLink: <Link href="https://osmand.onfastspring.com/account" /> }} />
                    </Typography>
                    <Suspense fallback={<CircularProgress />}>
                        <FeaturesTable />
                    </Suspense>
                </Box>
            </Box>
            <EmptyLoginDialog />
        </Box>
    );
}
