import { ReactComponent as StartIcon } from '../../assets/icons/ic_action_osmand_start_v2.svg';
import { ReactComponent as MapsIcon } from '../../assets/icons/ic_action_osmand_maps_plus_v2.svg';
import { ReactComponent as ProIcon } from '../../assets/icons/ic_action_osmand_pro_logo_colored_v2.svg';
import { ReactComponent as DecadeIcon } from '../../assets/icons/ic_action_osmand_pro_logo_colored_v2.svg';

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
        btnText: 'web:action_subscribe_monthly',
        purchaseTypes: ['annual', 'one-time'],
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
            'Hillshade and Contour lines',
            'web:feature_hillshade_and_contour_lines',
            'web:feature_offline_weather_forecast',
        ],
        btnText: 'web:action_subscribe_monthly',
        purchaseTypes: ['monthly', 'annual'],
    },
    {
        id: 'osmand-decade',
        name: 'Decade+',
        icon: <DecadeIcon />,
        shortFeaturesList: [
            'web:feature_15_year_access_to_all_pro_features',
            'web:feature_lifetime_access_to_all_maps_plus_features',
        ],
        btnText: 'web:action_compete_purchase',
        purchaseTypes: ['one-time'],
    },
];

export const purchase = {
    monthly: [
        {
            id: 'osmand-pro',
            oldPrice: null,
            newPrice: '2.99',
            currency: '€',
        },
    ],
    annual: [
        {
            id: 'osmand-pro',
            oldPrice: null,
            newPrice: '14.99',
            currency: '€',
            save: 'Save 36%',
        },
        {
            id: 'osmand-maps-plus',
            oldPrice: '29.99',
            newPrice: '9.99',
            currency: '€',
        },
    ],
    'one-time': [
        {
            id: 'osmand-decade',
            oldPrice: '399',
            newPrice: '249',
            currency: '€',
        },
    ],
};
