import { ReactComponent as StartIcon } from '../../assets/icons/ic_action_osmand_start_v2.svg';
import { ReactComponent as MapsIcon } from '../../assets/icons/ic_action_osmand_maps_plus_v2.svg';
import { ReactComponent as ProIcon } from '../../assets/icons/ic_action_osmand_pro_logo_colored_v2.svg';
import { ReactComponent as DecadeIcon } from '../../assets/icons/ic_action_osmand_decade_v2.svg';

const PURCHASE_OSMAND_PRO = 'OsmAnd Pro';
const PURCHASE_OSMAND_MAPS_PLUS = 'OsmAnd Maps+';

export const products = [
    {
        id: 'osmand-start',
        name: 'Start',
        icon: <StartIcon />,
        shortFeaturesList: [
            'web:feature_7_map_downloads',
            'web:feature_offline_navigation',
            'web:feature_settings_favorites_sync',
        ],
        btnText: 'web:create_account_btn',
        show: true,
    },
    {
        id: 'osmand-maps-plus',
        name: 'Maps+',
        icon: <MapsIcon />,
        shortFeaturesList: [
            'web:feature_unlimited_map_downloads',
            'web:feature_offline_navigation',
            'web:feature_settings_favorites_sync',
            'web:feature_android_auto_and_carplay',
            'web:feature_hillshade_and_contour_lines',
        ],
        purchaseTypes: ['annual', 'one-time'],
        show: true,
    },
    {
        id: 'osmand-pro',
        name: 'Pro',
        icon: <ProIcon />,
        shortFeaturesList: [
            'web:feature_unlimited_map_downloads',
            'web:feature_offline_navigation',
            'web:feature_osmand_cloud',
            'web:feature_android_auto_and_carplay',
            'web:feature_hillshade_and_contour_lines',
            'web:feature_3d_relief',
            'web:feature_offline_weather_forecast',
        ],
        purchaseTypes: ['monthly', 'annual'],
        show: true,
    },
    {
        id: 'osmand-decade',
        name: 'XV',
        icon: <DecadeIcon />,
        shortFeaturesList: [
            'web:feature_15_year_access_to_all_pro_features',
            'web:feature_lifetime_access_to_all_maps_plus_features',
        ],
        purchaseTypes: ['one-time'],
        show: false,
    },
];

export const purchase = {
    monthly: [
        {
            id: 'osmand-pro',
            name: PURCHASE_OSMAND_PRO,
            oldPrice: null,
            oldPriceDisplay: null,
            newPrice: '2.99',
            display: '€2.99',
            sku: 'net.osmand.fastspring.subscription.pro.monthly',
            fsName: 'osmand-pro-monthly',
            show: true,
        },
    ],
    annual: [
        {
            id: 'osmand-pro',
            name: PURCHASE_OSMAND_PRO,
            oldPrice: null,
            oldPriceDisplay: null,
            newPrice: '14.99',
            display: '€14.99',
            sku: 'net.osmand.fastspring.subscription.pro.annual',
            fsName: 'osmand-pro-annual',
            monthlyVersionId: 'osmand-pro',
            hasTestMode: true,
            show: true,
        },
        {
            id: 'osmand-maps-plus',
            name: PURCHASE_OSMAND_MAPS_PLUS,
            oldPrice: '29.99',
            oldPriceDisplay: '€29.99',
            newPrice: '9.99',
            display: '€9.99',
            sku: 'net.osmand.fastspring.subscription.maps.annual',
            fsName: 'osmand-maps-annual',
            show: true,
        },
    ],
    'one-time': [
        {
            id: 'osmand-maps-plus',
            name: PURCHASE_OSMAND_MAPS_PLUS,
            oldPrice: null,
            oldPriceDisplay: null,
            newPrice: '39.99',
            display: '€39.99',
            sku: 'net.osmand.fastspring.inapp.maps.plus',
            fsName: 'osmand-maps',
            hasTestMode: true,
            show: true,
        },
        {
            id: 'osmand-decade',
            name: PURCHASE_OSMAND_PRO,
            oldPrice: '399',
            oldPriceDisplay: '€399',
            newPrice: '249',
            display: '€249',
            sku: 'net.osmand.fastspring.inapp.pro.15y',
            fsName: 'osmand-15-years',
            show: true,
        },
    ],
};
