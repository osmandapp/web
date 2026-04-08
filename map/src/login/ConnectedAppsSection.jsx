import { Button } from '@mui/material';
import LoginContext from '../context/LoginContext';
import { ReactComponent as ActivityIcon } from '../assets/icons/ic_action_activity.svg';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ThickDivider from '../frame/components/dividers/ThickDivider';
import SubTitleMenu from '../frame/components/titles/SubTitleMenu';
import DefaultItem from '../frame/components/items/DefaultItem';
import { INIT_LOGIN_STATE } from '../manager/LoginManager';
import { apiGet, apiPost } from '../util/HttpApi';

async function fetchGarminStatus() {
    const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/garmin/status`);
    return res.ok && res.data != null ? res.data : { linked: false };
}

function startGarminOAuth() {
    globalThis.location.assign(`${process.env.REACT_APP_USER_API_SITE}/mapapi/garmin/connect/start`);
}

async function disconnectGarminPartner() {
    const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/garmin/disconnect`, '', {
        redirect: 'follow',
    });
    return res.ok;
}

export default function ConnectedAppsSection() {
    const { t } = useTranslation();
    const ltx = useContext(LoginContext);

    const [garminLinked, setGarminLinked] = useState(false);
    const [garminLoading, setGarminLoading] = useState(false);
    const [garminActionLoading, setGarminActionLoading] = useState(false);

    const refreshGarminStatus = useCallback(async () => {
        if (!ltx.loginUser || ltx.loginUser === INIT_LOGIN_STATE) {
            return;
        }
        setGarminLoading(true);
        try {
            const data = await fetchGarminStatus();
            setGarminLinked(!!data?.linked);
        } finally {
            setGarminLoading(false);
        }
    }, [ltx.loginUser]);

    useEffect(() => {
        refreshGarminStatus().then();
    }, []);

    return (
        <>
            <ThickDivider mt={'0px'} mb={'0px'} />
            <SubTitleMenu text={t('web:connected_apps')} />
            <DefaultItem
                id="se-login-menu-garmin"
                icon={<ActivityIcon />}
                name="Garmin"
                component="div"
                additionalInfo={
                    garminLoading
                        ? '…'
                        : garminLinked
                          ? t('web:third_party_connected')
                          : t('web:third_party_not_connected')
                }
                rightSlot={
                    <Button
                        size="small"
                        variant="outlined"
                        disabled={garminLoading || garminActionLoading}
                        id="se-login-menu-garmin-action"
                        sx={{ flexShrink: 0 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            if (garminLinked) {
                                setGarminActionLoading(true);
                                disconnectGarminPartner()
                                    .then(() => refreshGarminStatus())
                                    .finally(() => setGarminActionLoading(false));
                            } else {
                                startGarminOAuth();
                            }
                        }}
                    >
                        {garminLinked ? t('web:shared_string_disconnect') : t('web:shared_string_connect')}
                    </Button>
                }
            />
            <ThickDivider mt={'0px'} mb={'0px'} />
        </>
    );
}
