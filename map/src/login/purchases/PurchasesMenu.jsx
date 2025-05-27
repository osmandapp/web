import AppBarWithBtns from '../../frame/components/header/AppBarWithBtns';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';
import EmptyLogin from '../EmptyLogin';
import LoginContext from '../../context/LoginContext';
import ErrorEmptyPurchases from '../../menu/errors/ErrorEmptyPurchases';
import SubscriptionItem from './SubscriptionItem';
import { Box, Checkbox, Divider, FormControlLabel, MenuItem, Typography } from '@mui/material';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import InAppItem from './InAppItem';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import SimpleText from '../../frame/components/other/SimpleText';
import { IN_APP, SUBSCRIPTION } from './PurchaseInfo';
import { purchases } from '../fs/FastSpringHelper';
import FastSpringPurchaseButton from '../fs/FastSpringPurchaseButton';
import AppContext from '../../context/AppContext';
import FastSpringBlock from '../fs/FastSpringBlock';

export default function PurchasesMenu() {
    const ltx = useContext(LoginContext);
    const ctx = useContext(AppContext);

    const navigate = useNavigate();
    const { t } = useTranslation();
    const outlet = useOutlet();

    const [selectedPurchase, setSelectedPurchase] = useState(null);

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
        navigate(`sub${index}`);
    }

    function clickOnInApp(index) {
        setSelectedPurchase({
            type: IN_APP,
            object: inAppPurchases[index],
        });
        navigate(`inapp${index}`);
    }

    return (
        <>
            <Outlet context={{ selectedPurchase }} />
            {!outlet && (
                <>
                    <AppBarWithBtns
                        id={'purchases-menu'}
                        header={t('purchases')}
                        hasBackBtn={true}
                        leftBtnAction={() => {
                            navigate('..' + '/');
                        }}
                    />
                    {!ltx.loginUser ? (
                        <EmptyLogin />
                    ) : (
                        <>
                            {subscriptions && inAppPurchases && !hasPurchases() && <ErrorEmptyPurchases />}
                            {hasPurchases() && (
                                <Box
                                    sx={{
                                        height: '490px',
                                        overflowY: 'auto',
                                    }}
                                >
                                    {subscriptions?.length > 0 &&
                                        subscriptions.map((item, index) => (
                                            <SubscriptionItem
                                                id={item.name}
                                                key={index + item.name}
                                                name={item.name}
                                                type={item.type}
                                                state={item.state}
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
                                </Box>
                            )}
                            <ThickDivider mt={'0px'} mb={'0px'} />
                            <SubTitleMenu text={t('troubleshooting')} />
                            <SimpleText text={'If you have any questions, please contact us at support@osmand.net.'} />
                            {ctx.develFeatures && ltx.loginUser && <FastSpringBlock />}
                        </>
                    )}
                </>
            )}
        </>
    );
}
