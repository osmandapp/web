import { Box, CircularProgress, Link, Typography } from '@mui/material';
import HeaderMenu from '../frame/components/header/HeaderMenu';
import React, { Suspense, useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import ProductCard from './products/ProductCard';
import styles from './shop.module.css';
import { useTranslation, Trans } from 'react-i18next';
import { purchase } from './products/ProductManager';
import EmptyLoginDialog from '../login/dialogs/EmptyLoginDialog';
import { updatePrices } from '../login/fs/FastSpringHelper';
import { getAccountInfo } from '../manager/LoginManager';
import LoginContext from '../context/LoginContext';
import StickyBarPricingPage from './StickyBarPricingPage';
import StickyBarPaywall from './StickyBarPaywall';

const FeaturesTable = React.lazy(() => import('./features/FeaturesTable'));

export default function PricingPage() {
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const location = useLocation();
    const [searchParams] = useSearchParams();

    const isPaywall = searchParams.get('source') === 'pro';
    const paywallFeatureId = location.hash?.slice(1) || null;

    const [selectedProductType, setSelectedProductType] = useState('');
    const [purchasePriceMap, setPurchasePriceMap] = useState([]);
    const [currentPurchases, setCurrentPurchases] = useState(null);

    const [useTestMode, setUseTestMode] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [show, setShow] = useState(false);
    const [updateCardPrices, setUpdateCardPrices] = useState(false);
    const [stickyVisible, setStickyVisible] = useState(false);

    const cardBoxRef = useRef(null);
    const scrollContainerRef = useRef(null);

    function scrollToTop() {
        scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

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
        if (!show || !cardBoxRef.current) {
            return;
        }
        const observer = new IntersectionObserver(([entry]) => setStickyVisible(!entry.isIntersecting), {
            threshold: 0,
        });
        observer.observe(cardBoxRef.current);
        return () => observer.disconnect();
    }, [show]);

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
                                const isValid = p.valid === true || p.valid === 'true';
                                return isValid && p.name === item.name && p.type === type;
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
            {isPaywall ? (
                <StickyBarPaywall
                    visible={stickyVisible}
                    testMode={useTestMode}
                    updateCardPrices={updateCardPrices}
                    setUpdateCardPrices={setUpdateCardPrices}
                    featureId={paywallFeatureId}
                    onSeeAllPlans={scrollToTop}
                />
            ) : (
                <StickyBarPricingPage
                    visible={stickyVisible}
                    testMode={useTestMode}
                    updateCardPrices={updateCardPrices}
                    setUpdateCardPrices={setUpdateCardPrices}
                />
            )}
            <Box ref={scrollContainerRef} sx={{ overflowY: 'auto', maxHeight: `100%` }}>
                <Box className={styles.pricingBox}>
                    <Typography className={styles.pricingTitle} onClick={clickHandler}>
                        {`${t('web:label_pricing')}${useTestMode ? ' TEST MODE' : ''}`}
                    </Typography>
                    <Typography className={styles.pricingDesc}>
                        {t('web:subtitle_choose_your_ideal_osmand_plan')}
                    </Typography>
                    {!show && <CircularProgress />}
                    {show && (
                        <Box ref={cardBoxRef} className={styles.productCardBox}>
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
                        <Trans
                            i18nKey="web:notice_fastspring_purchase_info"
                            components={{ portalLink: <Link href="https://osmand.onfastspring.com/account" /> }}
                        />
                    </Typography>
                    <Suspense fallback={<CircularProgress />}>
                        <FeaturesTable />
                    </Suspense>
                    <Typography className={styles.pricingTrademark}>{t('web:notice_garmin_trademark')}</Typography>
                </Box>
            </Box>
            <EmptyLoginDialog />
        </Box>
    );
}
