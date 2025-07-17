import SubTitleMenu from '../frame/components/titles/SubTitleMenu';
import React from 'react';
import SimpleItemWithRightInfo from '../frame/components/items/SimpleItemWithRightInfo';
import { ReactComponent as OrderIcon } from '../assets/icons/ic_action_purchases_outlined.svg';
import { ReactComponent as IndexesIcon } from '../assets/icons/ic_action_multi_download.svg';
import { ReactComponent as ReleasesIcon } from '../assets/icons/ic_action_apk.svg';
import { ReactComponent as InfoIcon } from '../assets/icons/ic_action_info_outlined.svg';
import DividerWithMargin from '../frame/components/dividers/DividerWithMargin';
import { useTranslation } from 'react-i18next';
import ThickDivider from '../frame/components/dividers/ThickDivider';

export default function DeveloperArea() {
    const { t } = useTranslation();

    return (
        <>
            <SubTitleMenu text={t('web:developer')} />
            <SimpleItemWithRightInfo
                name={t('web:order_management')}
                icon={<OrderIcon />}
                onClick={() => window.open(`${window.location.origin}/admin/order-mgmt`, '_blank')}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={t('web:indexes')}
                icon={<IndexesIcon />}
                onClick={() => window.open(`${window.location.origin}/admin/indexes`, '_blank')}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={t('web:releases')}
                icon={<ReleasesIcon />}
                onClick={() => window.open(`${window.location.origin}/admin/releases`, '_blank')}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={t('web:info')}
                icon={<InfoIcon />}
                onClick={() => window.open(`${window.location.origin}/admin/info`, '_blank')}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={t('web:dev_issues')}
                icon={<InfoIcon />}
                onClick={() => window.open(`https://test.osmand.net/admin/issues`, '_blank')}
            />
            <ThickDivider mt={'0px'} mb={'0px'} />
        </>
    );
}
