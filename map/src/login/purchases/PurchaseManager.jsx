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
import { sub_state_translate_map } from '../LoginMenu';

const storeMap = {
    'Google Play': {
        text: 'web:google_play_text',
        icon: <GooglePlayIcon />,
        link: 'https://play.google.com/store/account/subscriptions',
    },
    'Apple App Store': {
        text: 'web:apple_store_text',
        icon: <AppStoreIcon />,
        link: 'https://account.apple.com/account/manage/section/subscriptions',
    },
    'Huawei AppGallery': {
        text: 'web:huawei_store_text',
        icon: <HuaweiIcon />,
        link: 'https://consumer.huawei.com/en/support/content/en-us00729195/',
    },
    'OsmAnd Web (FastSpring)': {
        text: 'web:fastspring_store_text',
        icon: <FastSpringIcon />,
        link: 'https://osmand.onfastspring.com/account',
    },
};

export function getStatus(state, t) {
    if (state === 'cancelled' || state === 'in_grace_period') {
        state = 'active';
    }
    return sub_state_translate_map(t)[state];
}

export default function PurchaseManager({ store }) {
    const { t } = useTranslation();

    const currentStore = storeMap[store];

    function onClick() {
        if (currentStore) {
            window.open(currentStore.link, '_blank');
        }
    }

    return (
        <>
            {currentStore && (
                <>
                    <SimpleItem ml={'48px'} maxLines={4} text={t(currentStore.text)} isMain={false} />
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
