import AppBarWithBtns from '../../frame/components/header/AppBarWithBtns';
import React, { useContext, useEffect, useState } from 'react';
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

    const hasPurchases = () => {
        return subscriptions?.length > 0 || inAppPurchases?.length > 0;
    };

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
                        <Box sx={{ overflowX: 'hidden', overflowY: 'auto !important', maxHeight: `${height - 120}px` }}>
                            {subscriptions && inAppPurchases && !hasPurchases() && !isFreeAcc && (
                                <ErrorEmptyPurchases />
                            )}
                            {isFreeAcc && (
                                <FreeAccItem regTime={ltx.accountInfo?.regtime} onClick={() => clickOnFreeAcc()} />
                            )}
                            {hasPurchases() && (
                                <>
                                    {subscriptions?.length > 0 &&
                                        subscriptions.map((item, index) => (
                                            <SubscriptionItem
                                                id={item.name}
                                                key={index + item.name}
                                                name={item.name}
                                                type={item.type}
                                                state={getStatus(item.state, t)}
                                                billingDate={item.billingDate}
                                                onClick={() => clickOnSubscription(index)}
                                            />
                                        ))}
                                    {inAppPurchases?.length > 0 &&
                                        inAppPurchases.map((item, index) => (
                                            <InAppItem
                                                id={item.name}
                                                key={index + item.name}
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
