import SubscriptionItem, { typeMap } from './SubscriptionItem';
import React, { useContext, useEffect, useState } from 'react';
import DefaultItem from '../../frame/components/items/DefaultItem';
import AppBarWithBtns from '../../frame/components/header/AppBarWithBtns';
import { useLocation, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoginContext from '../../context/LoginContext';
import { FREE_ACCOUNT, getAccountInfo } from '../../manager/LoginManager';
import Loading from '../../menu/errors/Loading';
import InAppItem from './InAppItem';
import ColorBlock from '../../frame/components/other/ColorBlock';
import PurchaseManager, { getStatus } from './PurchaseManager';
import SimpleDivider from '../../frame/components/dividers/SimpleDivider';
import FreeAccItem, { FreeAccountObject } from './free/FreeAccItem';
import { fmt } from '../../util/dateFmt';

export const SUBSCRIPTION = 'subscription';
export const IN_APP = 'inApp';

export default function PurchaseInfo() {
    const ltx = useContext(LoginContext);

    const { selectedPurchase } = useOutletContext();
    const { key } = useParams();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const [item, setItem] = useState(null);
    const [type, setType] = useState(null);

    function backToPurchases() {
        navigate({
            pathname: '../',
            hash: location.hash,
        });
    }

    useEffect(() => {
        async function fetchData() {
            if (!selectedPurchase) {
                const info = await getInfo();
                if (!info) {
                    backToPurchases();
                    return;
                }
                if (key.startsWith('free')) {
                    setItem(FreeAccountObject(info?.regtime));
                    setType(IN_APP);
                    return;
                }
                if (key.startsWith('sub')) {
                    const idx = parseInt(key.slice(3), 10);
                    const subscriptions = info?.subscriptions && JSON.parse(info.subscriptions);
                    if (!subscriptions || idx >= subscriptions.length) {
                        backToPurchases();
                        return;
                    }
                    setItem(subscriptions[idx]);
                    setType(SUBSCRIPTION);
                } else if (key.startsWith('inapp')) {
                    const idx = parseInt(key.slice(5), 10);
                    const inAppPurchases = info?.inAppPurchases && JSON.parse(info.inAppPurchases);
                    if (!inAppPurchases || idx >= inAppPurchases.length) {
                        backToPurchases();
                        return;
                    }
                    setItem(inAppPurchases[idx]);
                    setType(IN_APP);
                }
            }
            if (selectedPurchase) {
                if (selectedPurchase.object) {
                    setItem(selectedPurchase.object);
                }
                if (selectedPurchase.type) {
                    setType(selectedPurchase.type);
                }
            }
        }
        fetchData().then();
    }, [selectedPurchase]);

    async function getInfo() {
        const res = await getAccountInfo(ltx.setAccountInfo);
        if (res) {
            return res;
        } else {
            console.error('Failed to fetch account info');
            return null;
        }
    }

    function formatDate(date) {
        return date ? fmt.MMMdY(Number(date)) : 'N/A';
    }

    function purchaseType() {
        if (type === SUBSCRIPTION && item.type) {
            return t(typeMap[item.type]);
        }
        if (type === IN_APP && item.name === FREE_ACCOUNT) {
            return t(typeMap['free']);
        }
        if (type === IN_APP) {
            return t(typeMap['inapp']);
        }
    }

    return (
        <>
            {!item && <Loading />}
            {item && (
                <>
                    <AppBarWithBtns
                        id={'purchase-info-header'}
                        header={item.name}
                        hasBackBtn={true}
                        leftBtnAction={() => {
                            backToPurchases();
                        }}
                    />
                    {type === SUBSCRIPTION ? (
                        <SubscriptionItem
                            id={item.name}
                            name={item.name}
                            type={item.type}
                            state={getStatus(item.state)}
                            billingDate={item.billingDate}
                        />
                    ) : item.name === FREE_ACCOUNT ? (
                        <FreeAccItem regTime={ltx.accountInfo.regtime} />
                    ) : (
                        <InAppItem id={item.name} name={item.name} purchaseTime={item.purchaseTime} />
                    )}
                    {purchaseType() && (
                        <DefaultItem name={t('shared_string_type')} additionalInfo={purchaseType()} revertText={true} />
                    )}
                    {type === SUBSCRIPTION && (
                        <DefaultItem
                            id={'se-purchase-info-expire-time'}
                            name={t('shared_string_expires')}
                            additionalInfo={formatDate(item.expire_time)}
                            revertText={true}
                        />
                    )}
                    {type === IN_APP && (
                        <DefaultItem
                            name={t('shared_string_purchased')}
                            additionalInfo={formatDate(item.purchaseTime)}
                            revertText={true}
                        />
                    )}
                    <DefaultItem
                        id={'se-purchase-info-store'}
                        name={t('shared_string_purchased_on')}
                        additionalInfo={item.store}
                        revertText={true}
                    />
                    {type === SUBSCRIPTION && (
                        <>
                            <SimpleDivider />
                            <PurchaseManager store={item.store} />
                        </>
                    )}
                    <ColorBlock color={'#f0f0f0'} />
                </>
            )}
        </>
    );
}
