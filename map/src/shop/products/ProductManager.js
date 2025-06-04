import { ReactComponent as StartIcon } from '../../assets/icons/ic_action_osmand_start_v2.svg';
import { ReactComponent as MapsIcon } from '../../assets/icons/ic_action_osmand_maps_plus_v2.svg';
import { ReactComponent as ProIcon } from '../../assets/icons/ic_action_osmand_pro_logo_colored_v2.svg';
import { ReactComponent as DecadeIcon } from '../../assets/icons/ic_action_osmand_pro_logo_colored_v2.svg';
import { apiGet } from '../../util/HttpApi';

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
        btnText: 'web:action_subscribe_monthly',
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
        btnText: 'web:action_subscribe_monthly',
        purchaseTypes: ['monthly', 'annual'],
        show: true,
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
        show: false,
    },
];

export const purchase = {
    monthly: [
        {
            id: 'osmand-pro',
            oldPrice: null,
            oldPriceDisplay: null,
            newPrice: '2.99',
            display: '€2.99',
            sku: 'net.osmand.fastspring.subscription.pro.monthly',
            fsName: 'osmand-pro-monthly',
        },
    ],
    annual: [
        {
            id: 'osmand-pro',
            oldPrice: null,
            oldPriceDisplay: null,
            newPrice: '14.99',
            display: '€14.99',
            save: 'Save 36%',
            sku: 'net.osmand.fastspring.subscription.pro.annual',
            fsName: 'osmand-pro-annual',
        },
        {
            id: 'osmand-maps-plus',
            oldPrice: '29.99',
            oldPriceDisplay: '€29.99',
            newPrice: '9.99',
            display: '€9.99',
            sku: 'net.osmand.fastspring.subscription.maps.annual',
            fsName: 'osmand-maps-annual',
        },
    ],
    'one-time': [
        {
            id: 'osmand-maps-plus',
            oldPrice: null,
            oldPriceDisplay: null,
            newPrice: '39.99',
            display: '€39.99',
            sku: 'net.osmand.fastspring.maps.inapp',
            fsName: 'osmand-maps',
        },
        {
            id: 'osmand-decade',
            oldPrice: '399',
            oldPriceDisplay: '€399',
            newPrice: '249',
            display: '€249',
            sku: 'net.osmand.fastspring.inapp.pro.15y',
            fsName: 'osmand-15-years',
        },
    ],
};

export async function updatePrices(region = 'USD') {
    const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/fs/products/price`, {
        apiCache: true,
        params: {
            country: region,
        },
    });
    let prices;
    if (response.ok) {
        const result = await response.json();
        prices = result.prices;
    } else {
        console.error('Failed to fetch prices from FastSpring API');
        return;
    }

    const priceMap = {};
    prices.forEach((p) => {
        priceMap[p.fsName] = {
            oldPrice: p.oldPrice,
            oldPriceDisplay: p.oldPriceDisplay,
            newPrice: p.newPrice,
            display: p.display,
        };
    });

    Object.keys(purchase).forEach((type) => {
        purchase[type].forEach((item) => {
            const info = priceMap[item.fsName];
            if (info) {
                item.oldPrice = info.oldPrice;
                item.newPrice = info.newPrice;
                item.oldPriceDisplay = info.oldPriceDisplay;
                item.display = info.display;
            }
        });
    });
}

export async function getCountryCode() {
    const defaultCode = 'UA';
    try {
        const response = await apiGet(process.env.REACT_APP_GEO_IP_URL);
        if (!response.ok) {
            console.error('Error fetching country code: HTTP status', response.status);
            return defaultCode;
        }

        const data = await response.json();
        return data.country_code || defaultCode;
    } catch (e) {
        console.error('Error fetching country code:', e);
        return defaultCode;
    }
}
