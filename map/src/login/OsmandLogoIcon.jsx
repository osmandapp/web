import { Icon } from '@mui/material';
import { ReactComponent as UserAccountIcon } from '../assets/icons/ic_custom_logo_osmand.svg';
import React, { useId, useRef, useEffect } from 'react';
import loginStyles from './login.module.css';

const OsmandLogoIcon = () => {
    const gradientId = useId();
    const iconRef = useRef(null);

    useEffect(() => {
        if (iconRef.current) {
            const svg = iconRef.current.querySelector('svg');
            if (svg) {
                const gradient = svg.querySelector('#paint0_linear_1558_12356');
                const path = svg.querySelector('path[fill*="paint0_linear_1558_12356"]');

                if (gradient && path) {
                    gradient.id = gradientId;
                    path.setAttribute('fill', `url(#${gradientId})`);
                }
            }
        }
    }, [gradientId]);

    return (
        <Icon className={loginStyles.logoIcon} ref={iconRef}>
            <UserAccountIcon />
        </Icon>
    );
};

export default OsmandLogoIcon;
