import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

export default function FastSpringPurchaseButton({ selectedProducts, testMode = false }) {
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
        script.onload = () => {
            testMode && console.log('✅ FastSpring script loaded.');
        };
        document.head.appendChild(script);
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
            testMode && console.log('✅ Product added to cart, proceeding to checkout.');
        } else {
            testMode && alert('❌ FastSpring builder is not ready. Please try again in a moment.');
        }
    };

    return <Button onClick={handleClick}>Pay Now</Button>;
}

FastSpringPurchaseButton.propTypes = {
    selectedProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
    testMode: PropTypes.bool,
};
