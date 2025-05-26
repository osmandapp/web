import SimpleItem from '../../frame/components/items/SimpleItem';
import SimpleItemWithRightInfo from '../../frame/components/items/SimpleItemWithRightInfo';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as GooglePlayIcon } from '../../assets/icons/ic_logo_google_play.svg';
import { ReactComponent as AppStoreIcon } from '../../assets/icons/ic_logo_ios_app_store.svg';
import { ReactComponent as HuaweiIcon } from '../../assets/icons/ic_logo_huawei_app_gallery.svg';
import { ReactComponent as FastSpringIcon } from '../../assets/icons/ic_action_purchases_outlined.svg';
import styles from '../../frame/components/items/items.module.css';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';

const storeMap = {
    'Google Play': {
        text: 'You can manage or cancel your subscription through the Google Play.',
        icon: <GooglePlayIcon />,
        link: 'https://play.google.com/store/account/subscriptions',
    },
    'Apple App Store': {
        text: 'You can manage or cancel your subscription through the Apple App Store.',
        icon: <AppStoreIcon />,
        link: 'https://account.apple.com/account/manage/section/subscriptions',
    },
    'Huawei AppGallery': {
        text: 'You can manage or cancel your subscription through the Huawei AppGallery app.',
        icon: <HuaweiIcon />,
        link: 'https://consumer.huawei.com/en/support/content/en-us00729195/',
    },
    'OsmAnd Web (FastSpring)': {
        text: 'You can manage or cancel your subscription through FastSpring account management portal.',
        icon: <FastSpringIcon />,
        link: null,
    },
};

export default function PurchaseManager({ store }) {
    const { t } = useTranslation();

    const currentStore = storeMap[store];

    function onClick() {
        if (currentStore && !currentStore['OsmAnd Web (FastSpring)']) {
            window.open(currentStore.link, '_blank');
        }
    }

    return (
        <>
            {currentStore && (
                <>
                    <SimpleItem ml={'48px'} maxLines={4} text={currentStore.text} isMain={false} />
                    <DividerWithMargin margin={'64px'} />
                    <SimpleItemWithRightInfo
                        name={t('manage_subscription')}
                        icon={currentStore.icon}
                        addStyles={styles.linkText}
                        onClick={onClick}
                    />
                </>
            )}
        </>
    );
}
