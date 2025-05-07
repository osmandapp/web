import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { getAccountInfo } from '../manager/LoginManager';

export default function FastSpringPurchaseButton({ selectedProducts, testMode = false, ctx }) {
    const handleClick = () => {
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
        script.setAttribute('data-storefront', `osmand.onfastspring.com/popup-${testMode ? 'test-' : ''}osmand`);
        script.setAttribute('data-popup-webhook-received', 'onFSPopupClosed');

        const products = selectedProducts.map((id) => ({
            path: `${testMode ? 'test-' : ''}${id}`,
            quantity: 1,
        }));

        const s = {
            reset: true,
            products,
            checkout: true,
        };

        script.onload = () => {
            window.fastspring.builder.push(s);
            window.onFSPopupClosed = function (orderReference) {
                if (window.fastspring && window.fastspring.builder) {
                    window.fastspring.builder.reset();
                }
                if (orderReference && orderReference.id) {
                    const tryUpdate = (attempt = 0) => {
                        getAccountInfo(ctx.setAccountInfo).then((info) => {
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
            };
        };

        document.head.appendChild(script);
    };

    return <Button onClick={handleClick}>{`${testMode ? 'Test ' : ''}Pay Now`}</Button>;
}

FastSpringPurchaseButton.propTypes = {
    selectedProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
    testMode: PropTypes.bool,
    ctx: PropTypes.object.isRequired,
};
