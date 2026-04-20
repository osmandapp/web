import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ThickDivider from '../frame/components/dividers/ThickDivider';
import SubTitleMenu from '../frame/components/titles/SubTitleMenu';
import GarminConnectItem from './garmin/GarminConnectItem';
import LoginContext from '../context/LoginContext';
import { INIT_LOGIN_STATE } from '../manager/LoginManager';

export default function ConnectedAppsSection() {
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    if (!ltx.loginUser || ltx.loginUser === INIT_LOGIN_STATE) {
        return null;
    }

    return (
        <>
            <ThickDivider mt={'0px'} mb={'0px'} />
            <SubTitleMenu text={t('web:connected_apps')} />
            <GarminConnectItem />
            <ThickDivider mt={'0px'} mb={'0px'} />
        </>
    );
}
