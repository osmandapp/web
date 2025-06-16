import { getAccountInfo } from '../../manager/LoginManager';
import { LOGIN_URL, MAIN_URL_WITH_SLASH, PURCHASES_URL } from '../../manager/GlobalManager';
import { purchase } from '../../shop/products/ProductManager';

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

export const createFastSpringPurchase = ({ testMode, selectedProduct, ltx, navigate }) => {
    const script = createFastSpringBuilder(testMode);

    const products = [
        {
            path: `${testMode ? 'test-' : ''}${selectedProduct}`,
            quantity: 1,
        },
    ];

    const s = {
        reset: true,
        products,
        checkout: true,
        tags: {
            userEmail: ltx.loginUser,
        },
        paymentContact: {
            email: ltx.loginUser,
        },
    };

    script.onload = () => {
        window.fastspring.builder.reset();
        window.fastspring.builder.push(s);
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

export function updatePrices(setPurchasePriceMap, testMode = false) {
    const script = createFastSpringBuilder(testMode);
    script.onload = () => {
        window.fastspring.builder.reset();

        const productsList = Object.values(purchase)
            .flat()
            .map((item) => {
                if (testMode) {
                    if (item.hasTestMode) {
                        return {
                            path: `test-${item.fsName}`,
                            quantity: 1,
                        };
                    }
                } else {
                    return {
                        path: item.fsName,
                        quantity: 1,
                    };
                }
            })
            .filter(Boolean);

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
                setPurchasePriceMap(priceMap);
            }
        );
    };

    document.head.appendChild(script);
}
