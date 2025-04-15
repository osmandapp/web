import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { getAccountInfo } from '../manager/LoginManager';

export default function FastSpringPurchaseButton({ selectedProducts, testMode = false, ctx }) {
    useEffect(() => {
        if (document.getElementById('fsc-api')) return;

        const script = document.createElement('script');
        script.id = 'fsc-api';
        script.src = 'https://sbl.onfastspring.com/sbl/1.0.3/fastspring-builder.min.js';
        script.type = 'text/javascript';
        const storefront = testMode
            ? 'osmand.test.onfastspring.com/popup-osmand'
            : 'osmand.onfastspring.com/popup-osmand';
        script.setAttribute('data-storefront', storefront);
        script.setAttribute('data-popup-webhook-received', 'onFSPopupClosed');
        script.onload = () => {
            testMode && console.log('✅ FastSpring script loaded.');
        };
        document.head.appendChild(script);

        window.onFSPopupClosed = function (orderReference) {
            if (window.fastspring && window.fastspring.builder) {
                window.fastspring.builder.reset();
            }
            if (orderReference && orderReference.id) {
                const tryUpdate = (attempt = 0) => {
                    getAccountInfo(ctx.setAccountInfo).then((info) => {
                        // check current subscription was updated successfully after two webhooks (subscription.activated and order.completed)
                        if ((info?.valid === 'true' && info?.startTime && info?.expireTime) || attempt >= 5) {
                            testMode && console.log('✅ Updated info after payment');
                        } else {
                            setTimeout(() => tryUpdate(attempt + 1), 3000);
                        }
                    });
                };
                tryUpdate();
            }
        };
    }, []);

    const handleClick = () => {
        if (isEmpty(selectedProducts)) {
            testMode && alert('❌ No products selected.');
            return;
        }

        const products = selectedProducts.map((id) => ({
            path: id,
            quantity: 1,
        }));

        const s = {
            reset: true,
            products,
            checkout: true,
        };

        if (window.fastspring && window.fastspring.builder) {
            window.fastspring.builder.push(s);
        } else {
            testMode && alert('❌ FastSpring builder is not ready. Please try again in a moment.');
        }
    };

    return <Button onClick={handleClick}>Pay Now</Button>;
}

FastSpringPurchaseButton.propTypes = {
    selectedProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
    testMode: PropTypes.bool,
    ctx: PropTypes.object.isRequired,
};
