import SubTitleMenu from '../frame/components/titles/SubTitleMenu';
import React from 'react';
import SimpleItemWithRightInfo from '../frame/components/items/SimpleItemWithRightInfo';
import { ReactComponent as OrderIcon } from '../assets/icons/ic_action_purchases_outlined.svg';
import { ReactComponent as IndexesIcon } from '../assets/icons/ic_action_multi_download.svg';
import { ReactComponent as ReleasesIcon } from '../assets/icons/ic_action_apk.svg';
import { ReactComponent as InfoIcon } from '../assets/icons/ic_action_info_outlined.svg';
import DividerWithMargin from '../frame/components/dividers/DividerWithMargin';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ThickDivider from '../frame/components/dividers/ThickDivider';

export default function DeveloperArea() {
    const { t } = useTranslation();

    const navigate = useNavigate();

    return (
        <>
            <SubTitleMenu text={'Developer'} />
            <SimpleItemWithRightInfo
                name={'Order Management'}
                icon={<OrderIcon />}
                onClick={() => {
                    navigate({
                        pathname: '/admin/order-mgmt',
                    });
                }}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={'Indexes'}
                icon={<IndexesIcon />}
                onClick={() => {
                    navigate({
                        pathname: '/admin/indexes',
                    });
                }}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={'Releases'}
                icon={<ReleasesIcon />}
                onClick={() => {
                    navigate({
                        pathname: '/admin/releases',
                    });
                }}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={'Info'}
                icon={<InfoIcon />}
                onClick={() => {
                    navigate({
                        pathname: '/admin/info',
                    });
                }}
            />
            <ThickDivider mt={'0px'} mb={'0px'} />
        </>
    );
}
