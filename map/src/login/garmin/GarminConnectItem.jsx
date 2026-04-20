import { CircularProgress, Typography } from '@mui/material';
import LoginContext from '../../context/LoginContext';
import { ReactComponent as GarminIcon } from '../../assets/icons/ic_logo_garmin_connect.svg';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import DefaultItem from '../../frame/components/items/DefaultItem';
import { FREE_ACCOUNT, INIT_LOGIN_STATE } from '../../manager/LoginManager';
import { GARMIN_URL, LOGIN_URL, MAIN_URL_WITH_SLASH } from '../../manager/GlobalManager';
import { fetchGarminStatus } from './garminApi';
import ButtonPro from '../../frame/pro/ButtonPro';
import styles from './garmin.module.css';

export default function GarminConnectItem() {
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const navigate = useNavigate();

    const [garminLinked, setGarminLinked] = useState(false);
    const [syncTimeMs, setSyncTimeMs] = useState(null);
    const [garminLoading, setGarminLoading] = useState(false);

    const isProUser = ltx.loginUser && ltx.loginUser !== INIT_LOGIN_STATE && ltx.accountInfo?.account !== FREE_ACCOUNT;

    const refreshGarminStatus = useCallback(async () => {
        if (!ltx.loginUser || ltx.loginUser === INIT_LOGIN_STATE) {
            return;
        }
        setGarminLoading(true);
        try {
            const data = await fetchGarminStatus();
            setGarminLinked(!!data?.linked);
            setSyncTimeMs(data?.syncTimeMs || null);
        } finally {
            setGarminLoading(false);
        }
    }, [ltx.loginUser]);

    useEffect(() => {
        if (isProUser) {
            refreshGarminStatus().then();
        }
    }, [refreshGarminStatus, isProUser]);

    const openPricingPage = () => window.open('/pricing#pro_features', '_blank', 'noopener,noreferrer');

    const openGarminPage = () =>
        navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + GARMIN_URL, {
            state: { linked: garminLinked, syncTimeMs },
        });

    let rightSlot;
    let handleItemClick;

    if (!isProUser) {
        // go to pricing page with focus on Pro features
        rightSlot = (
            <span onClick={(e) => e.stopPropagation()}>
                <ButtonPro onClick={openPricingPage} />
            </span>
        );
        handleItemClick = openPricingPage;
    } else if (garminLinked) {
        // connected
        rightSlot = garminLoading ? (
            <CircularProgress size={16} />
        ) : (
            <Typography variant="body2" color="text.secondary" className={styles.connectedLabel}>
                {t('web:third_party_connected')}
            </Typography>
        );
        handleItemClick = openGarminPage;
    } else {
        // not connected
        rightSlot = garminLoading ? (
            <CircularProgress size={16} />
        ) : (
            <Typography variant="body2" color="text.secondary" className={styles.connectedLabel}>
                {t('web:shared_string_connect')}
            </Typography>
        );
        handleItemClick = openGarminPage;
    }

    return (
        <DefaultItem
            id="se-login-menu-garmin"
            icon={<GarminIcon />}
            name="Garmin Connect"
            component="div"
            onClick={handleItemClick}
            rightSlot={rightSlot}
        />
    );
}
