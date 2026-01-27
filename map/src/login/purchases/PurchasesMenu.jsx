import AppBarWithBtns from '../../frame/components/header/AppBarWithBtns';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate, useOutlet } from 'react-router-dom';
import EmptyLogin from '../EmptyLogin';
import LoginContext from '../../context/LoginContext';
import ErrorEmptyPurchases from '../../menu/errors/ErrorEmptyPurchases';
import SubscriptionItem from './SubscriptionItem';
import { Box } from '@mui/material';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import InAppItem from './InAppItem';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import SimpleText from '../../frame/components/other/SimpleText';
import { IN_APP, SUBSCRIPTION } from './PurchaseInfo';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { getStatus } from './PurchaseManager';
import { getAccountType } from '../LoginMenu';
import { FREE_ACCOUNT_SUB_TYPE } from '../../manager/LoginManager';
import FreeAccItem, { FreeAccountObject } from './free/FreeAccItem';
import { formatString } from '../../manager/SettingsManager';

const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;

function buildDisplayPurchases(subscriptions, inAppPurchases, now = Date.now()) {
    const subscriptionItems = subscriptions
        ? subscriptions.map((item, index) => ({
              item,
              index,
          }))
        : [];

    const inAppItemsRaw = inAppPurchases
        ? inAppPurchases.map((item, index) => ({
              item,
              index,
          }))
        : [];

    // --- SUBSCRIPTIONS ---
    const activeSubscriptions = []; // valid and not expired
    const inactiveSubscriptions = []; // expired (<= 1 month) or invalid
    const oldExpiredSubscriptions = []; // expired > 1 month

    for (const { item, index } of subscriptionItems) {
        const isValid = item.valid !== 'false';
        const expireTime = item.expire_time ? Number(item.expire_time) : null;
        const isExpired = expireTime !== null && expireTime < now;
        const isOldExpired = isExpired && now - expireTime > ONE_MONTH_MS;
        const startTime = item.start_time ? Number(item.start_time) : 0;

        if (isOldExpired) {
            oldExpiredSubscriptions.push({ item, index, startTime });
            continue;
        }

        if (!isExpired && isValid) {
            activeSubscriptions.push({ item, index, startTime });
        } else {
            inactiveSubscriptions.push({ item, index, startTime });
        }
    }

    const sortByStartTimeDesc = (a, b) => {
        const aTime = a.startTime ?? 0;
        const bTime = b.startTime ?? 0;
        return bTime - aTime;
    };

    activeSubscriptions.sort(sortByStartTimeDesc);
    inactiveSubscriptions.sort(sortByStartTimeDesc);

    // --- IN‑APP PURCHASES ---
    const activeInApps = []; // valid
    const inactiveInApps = []; // non-valid

    for (const { item, index } of inAppItemsRaw) {
        const isValid = item.valid !== 'false';
        const ts = item.purchaseTime ? Number(item.purchaseTime) : 0;
        const target = isValid ? activeInApps : inactiveInApps;
        target.push({ item, index, ts, isValid });
    }

    const sortByPurchaseTimeDesc = (a, b) => b.ts - a.ts;

    activeInApps.sort(sortByPurchaseTimeDesc);
    inactiveInApps.sort(sortByPurchaseTimeDesc);

    const hasActiveOrders = activeSubscriptions.length + activeInApps.length > 0;

    // If there are no active subscriptions/in‑apps, show the last expired subscription (if any) at the top of inactive
    if (!hasActiveOrders && oldExpiredSubscriptions.length > 0) {
        oldExpiredSubscriptions.sort(sortByStartTimeDesc);
        inactiveSubscriptions.push(oldExpiredSubscriptions[0]);
        inactiveSubscriptions.sort(sortByStartTimeDesc);
    }

    const hasPurchases =
        activeSubscriptions.length + inactiveSubscriptions.length + activeInApps.length + inactiveInApps.length > 0;

    return {
        activeSubscriptions,
        inactiveSubscriptions,
        activeInApps,
        inactiveInApps,
        hasPurchases,
    };
}

export default function PurchasesMenu() {
    const ltx = useContext(LoginContext);

    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const outlet = useOutlet();

    const [, height] = useWindowSize();

    const [selectedPurchase, setSelectedPurchase] = useState(null);
    const [isFreeAcc, setIsFreeAcc] = useState(false);

    useEffect(() => {
        if (ltx.accountInfo?.account) {
            const type = getAccountType({ account: ltx.accountInfo?.account, name: ltx.accountInfo?.name });
            setIsFreeAcc(type === FREE_ACCOUNT_SUB_TYPE);
        } else {
            setIsFreeAcc(false);
        }
    }, [ltx.accountInfo?.account]);

    const subscriptions = ltx.accountInfo?.subscriptions && JSON.parse(ltx.accountInfo.subscriptions);
    const inAppPurchases = ltx.accountInfo?.inAppPurchases && JSON.parse(ltx.accountInfo.inAppPurchases);

    const { activeSubscriptions, inactiveSubscriptions, activeInApps, inactiveInApps, hasPurchases } = useMemo(
        () => buildDisplayPurchases(subscriptions, inAppPurchases),
        [subscriptions, inAppPurchases]
    );

    function clickOnSubscription(index) {
        setSelectedPurchase({
            type: SUBSCRIPTION,
            object: subscriptions[index],
        });
        navigate({
            pathname: `sub${index}`,
            hash: location.hash,
        });
    }

    function clickOnInApp(index) {
        setSelectedPurchase({
            type: IN_APP,
            object: inAppPurchases[index],
        });
        navigate({
            pathname: `inapp${index}`,
            hash: location.hash,
        });
    }

    function clickOnFreeAcc() {
        setSelectedPurchase({
            type: IN_APP,
            object: FreeAccountObject(ltx.accountInfo?.regtime),
        });
        navigate({
            pathname: `free`,
            hash: location.hash,
        });
    }

    return (
        <>
            <Outlet context={{ selectedPurchase }} />
            {!outlet && (
                <Box>
                    <AppBarWithBtns
                        id={'purchases-menu'}
                        header={t('purchases')}
                        hasBackBtn={true}
                        leftBtnAction={() => {
                            navigate({
                                pathname: '../',
                                hash: location.hash,
                            });
                        }}
                    />
                    {!ltx.loginUser ? (
                        <EmptyLogin />
                    ) : (
                        <Box sx={{ overflowX: 'hidden', overflowY: 'auto', maxHeight: `${height - 120}px` }}>
                            {subscriptions && inAppPurchases && !hasPurchases && !isFreeAcc && <ErrorEmptyPurchases />}
                            {isFreeAcc && (
                                <FreeAccItem regTime={ltx.accountInfo?.regtime} onClick={() => clickOnFreeAcc()} />
                            )}
                            {hasPurchases && (
                                <>
                                    {activeSubscriptions.map(({ item, index }) => (
                                        <SubscriptionItem
                                            id={item.name}
                                            key={`active-sub-${index}-${item.name}`}
                                            name={item.name}
                                            type={item.type}
                                            state={getStatus(item.state)}
                                            billingDate={item.billingDate}
                                            onClick={() => clickOnSubscription(index)}
                                        />
                                    ))}
                                    {activeInApps.map(({ item, index }) => (
                                        <InAppItem
                                            id={item.name}
                                            key={`active-inapp-${index}-${item.name}`}
                                            name={item.name}
                                            purchaseTime={item.purchaseTime}
                                            onClick={() => clickOnInApp(index)}
                                        />
                                    ))}
                                    {inactiveSubscriptions.map(({ item, index }) => (
                                        <SubscriptionItem
                                            id={item.name}
                                            key={`inactive-sub-${index}-${item.name}`}
                                            name={item.name}
                                            type={item.type}
                                            state={getStatus(item.state)}
                                            billingDate={item.billingDate}
                                            onClick={() => clickOnSubscription(index)}
                                        />
                                    ))}
                                    {inactiveInApps.map(({ item, index }) => (
                                        <InAppItem
                                            id={item.name}
                                            key={`inactive-inapp-${index}-${item.name}`}
                                            name={item.name}
                                            purchaseTime={item.purchaseTime}
                                            onClick={() => clickOnInApp(index)}
                                        />
                                    ))}
                                </>
                            )}
                            <ThickDivider mt={'0px'} mb={'0px'} />
                            <SubTitleMenu text={t('troubleshooting')} />
                            <SimpleText text={formatString(t('contact_support_description'), ['support@osmand.net'])} />
                        </Box>
                    )}
                </Box>
            )}
        </>
    );
}
