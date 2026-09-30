import { ReactComponent as StartIcon } from '../../assets/icons/ic_action_osmand_start_v2.svg';
import { ReactComponent as MapsIcon } from '../../assets/icons/ic_action_osmand_maps_plus_v2.svg';
import { ReactComponent as ProIcon } from '../../assets/icons/ic_action_osmand_pro_logo_colored.svg';
import { ReactComponent as DecadeIcon } from '../../assets/icons/ic_action_osmand_decade_v2.svg';

export const PRODUCT_ID_START = 'osmand-start';
export const PRODUCT_ID_MAPS_PLUS = 'osmand-maps-plus';
export const PRODUCT_ID_PRO = 'osmand-pro';
export const PRODUCT_ID_XV = 'osmand-15-years';

export const PURCHASE_TYPE_MONTHLY = 'monthly';
export const PURCHASE_TYPE_ANNUAL = 'annual';
export const PURCHASE_TYPE_ONE_TIME = 'one-time';

const PURCHASE_OSMAND_PRO = 'OsmAnd Pro';
const PURCHASE_OSMAND_VX = 'OsmAnd XV';
const PURCHASE_OSMAND_MAPS_PLUS = 'OsmAnd Maps+';

export const products = [
    {
        id: PRODUCT_ID_START,
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
        id: PRODUCT_ID_MAPS_PLUS,
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
        id: PRODUCT_ID_PRO,
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
        id: PRODUCT_ID_XV,
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
    [PURCHASE_TYPE_MONTHLY]: [
        {
            id: PRODUCT_ID_PRO,
            name: PURCHASE_OSMAND_PRO,
            oldPrice: null,
            oldPriceDisplay: null,
            newPrice: '2.99',
            display: '€2.99',
            show: true,
        },
    ],
    [PURCHASE_TYPE_ANNUAL]: [
        {
            id: PRODUCT_ID_PRO,
            name: PURCHASE_OSMAND_PRO,
            oldPrice: null,
            oldPriceDisplay: null,
            newPrice: '14.99',
            display: '€14.99',
            monthlyVersionId: PRODUCT_ID_PRO,
            show: true,
        },
        {
            id: PRODUCT_ID_MAPS_PLUS,
            name: PURCHASE_OSMAND_MAPS_PLUS,
            oldPrice: '29.99',
            oldPriceDisplay: '€29.99',
            newPrice: '9.99',
            display: '€9.99',
            show: true,
        },
    ],
    [PURCHASE_TYPE_ONE_TIME]: [
        {
            id: PRODUCT_ID_MAPS_PLUS,
            name: PURCHASE_OSMAND_MAPS_PLUS,
            oldPrice: null,
            oldPriceDisplay: null,
            newPrice: '39.99',
            display: '€39.99',
            show: true,
        },
        {
            id: PRODUCT_ID_XV,
            name: PURCHASE_OSMAND_VX,
            oldPrice: '399',
            oldPriceDisplay: '€399',
            newPrice: '249',
            display: '€249',
            show: true,
        },
    ],
};

export function findPurchase(type, productId) {
    return purchase[type]?.find((p) => p.id === productId);
}

export function hasOldPrice(purchaseObj) {
    return Boolean(purchaseObj?.oldPrice && purchaseObj.oldPrice !== purchaseObj.newPrice);
}

export function getDiscountPercent(purchaseObj) {
    if (!hasOldPrice(purchaseObj)) {
        return null;
    }
    const oldPrice = parseFloat(purchaseObj.oldPrice);
    const newPrice = parseFloat(purchaseObj.newPrice);
    if (!oldPrice || !newPrice || newPrice >= oldPrice) {
        return null;
    }
    return Math.round((1 - newPrice / oldPrice) * 100);
}
