import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { getAccountInfo } from '../../manager/LoginManager';
import BaseButton from '../../frame/components/btns/BaseButton';
import PrimaryBtn from '../../frame/components/btns/PrimaryBtn';
import GrayBtnWithBlueHover from '../../frame/components/btns/GrayBtnWithBlueHover';

export default function FastSpringPurchaseButton({ selectedProducts, testMode = false, ltx }) {
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
        script.setAttribute(
            'data-storefront',
            `osmand.${testMode ? 'test.' : ''}onfastspring.com/popup-${testMode ? 'test-' : ''}osmand`
        );
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
            };
        };

        document.head.appendChild(script);
    };

    return (
        <GrayBtnWithBlueHover
            additionalStyle={{ mt: 2, ml: '48px', mr: 2, maxWidth: '280px' }}
            text={`${testMode ? 'Test ' : ''}Pay Now`}
            action={handleClick}
        />
    );
}

FastSpringPurchaseButton.propTypes = {
    selectedProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
    testMode: PropTypes.bool,
    ltx: PropTypes.object.isRequired,
};
