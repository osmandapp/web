import { getAccountInfo } from '../../manager/LoginManager';
import { LOGIN_URL, MAIN_URL_WITH_SLASH, PURCHASES_URL } from '../../manager/GlobalManager';
import { apiGet, apiPost } from '../../util/HttpApi';
import i18n from 'i18next';

export function priceKey(productId, type) {
    return `${productId}/${type}`;
}

async function loadProducts(testMode) {
    const resp = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/fs/products`, { params: { test: testMode } });

    return Array.isArray(resp?.data) ? resp.data : [];
}

function createFastSpringBuilder(testMode) {
    // remove old script if exists
    const old = document.getElementById('fsc-api');
    if (old) old.remove();
    delete window.fastspring;
    // add new script
    const script = document.createElement('script');
    script.id = 'fsc-api';
    script.src = 'https://sbl.onfastspring.com/sbl/1.0.3/fastspring-builder.min.js';
    script.type = 'text/javascript';
    script.setAttribute('data-continuous', 'true');
    script.setAttribute(
        'data-storefront',
        `osmand.${testMode ? 'test.' : ''}onfastspring.com/popup-${testMode ? 'test-' : ''}osmand`
    );
    script.setAttribute('data-popup-webhook-received', 'onFSPopupClosed');

    return script;
}

let checkoutSessionPending = false;

export const createFastSpringPurchase = async ({ testMode, productId, type, ltx, ctx, navigate }) => {
    if (checkoutSessionPending) {
        return;
    }
    checkoutSessionPending = true;
    let resp;
    try {
        resp = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/fastspring-session`, '', {
            params: { id: productId, type, test: testMode },
        });
    } finally {
        checkoutSessionPending = false;
    }
    if (resp?.status === 409) {
        ctx.setNotification({ text: i18n.t('web:purchase_already_active'), severity: 'info' });
        navigate({
            pathname: MAIN_URL_WITH_SLASH + LOGIN_URL + PURCHASES_URL,
        });
        return;
    }
    const sessionId = resp?.data?.id;
    if (!sessionId) {
        return;
    }

    const script = createFastSpringBuilder(testMode);

    script.onload = () => {
        window.fastspring.builder.reset();
        window.fastspring.builder.checkout(sessionId);
        window.onFSPopupClosed = function (orderReference) {
            if (window.fastspring && window.fastspring.builder) {
                window.fastspring.builder.reset();
            }
            if (orderReference && orderReference.id) {
                const tryUpdate = (attempt = 0) => {
                    getAccountInfo(ltx.setAccountInfo).then((info) => {
                        // check current subscription was updated successfully
                        if ((info?.valid === 'true' && info?.startTime && info?.expireTime) || attempt >= 5) {
                            testMode && console.log('✅ Updated info after payment');
                        } else {
                            setTimeout(() => tryUpdate(attempt + 1), 3000);
                        }
                    });
                };
                tryUpdate();
            }
            navigate({
                pathname: MAIN_URL_WITH_SLASH + LOGIN_URL + PURCHASES_URL,
            });
        };
    };

    document.head.appendChild(script);
};

function fetchPrices(productsList, testMode, onPriceMap) {
    const script = createFastSpringBuilder(testMode);
    script.onload = () => {
        window.fastspring.builder.reset();

        window.fastspring.builder.push(
            {
                reset: true,
                pricing: true,
                products: productsList,
            },
            (pricingData) => {
                const priceMap = {};
                pricingData.groups[0].items.forEach((item) => {
                    const name = item.product;
                    priceMap[name] = {
                        oldPrice: item.priceTotalValue,
                        oldPriceDisplay: item.priceTotal,
                        newPrice: item.totalValue,
                        display: item.total,
                    };
                });
                onPriceMap(priceMap);
            }
        );
    };

    document.head.appendChild(script);
}

export async function fetchSinglePrice(productId, type, onPrice, testMode = false) {
    const product = (await loadProducts(testMode)).find((p) => p.id === productId && p.type === type);
    if (product) {
        fetchPrices([{ path: product.path, quantity: 1 }], testMode, (priceMap) => onPrice(priceMap[product.path]));
    }
}

// isActive: the caller may have moved on (another test mode or account) while the products were loading
export async function updatePrices(setPurchasePriceMap, testMode = false, isActive = () => true) {
    const products = await loadProducts(testMode);
    if (!isActive() || products.length === 0) {
        return false;
    }
    const productsList = products.map((p) => ({ path: p.path, quantity: 1 }));
    fetchPrices(productsList, testMode, (priceMap) => {
        if (!isActive()) {
            return;
        }
        const prices = {};
        products.forEach((p) => (prices[priceKey(p.id, p.type)] = priceMap[p.path]));
        setPurchasePriceMap(prices);
    });

    return true;
}
