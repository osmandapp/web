import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBarWithBtns from '../../frame/components/header/AppBarWithBtns';
import GarminNotConnectedView from './GarminNotConnectedView';
import GarminConnectedView from './GarminConnectedView';
import GarminActivitiesToSync from './GarminActivitiesToSync';
import GarminDisconnectDialog from './GarminDisconnectDialog';
import { LOGIN_URL, MAIN_URL_WITH_SLASH, HEADER_SIZE } from '../../manager/GlobalManager';
import { INIT_LOGIN_STATE } from '../../manager/LoginManager';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { fetchGarminStatus, disconnectGarmin, fetchAllGarminActivityTypes } from './garminApi';
import LoginContext from '../../context/LoginContext';
import gStyles from '../../menu/gstylesmenu.module.css';
import ColorBlock from '../../frame/components/other/ColorBlock';
import Loading from '../../menu/errors/Loading';
import ThickDivider from '../../frame/components/dividers/ThickDivider';

export default function GarminConnectMenu() {
    const ltx = useContext(LoginContext);

    const navigate = useNavigate();
    const location = useLocation();
    const [, height] = useWindowSize();

    const initialState = location.state ?? {};
    const [garminLinked, setGarminLinked] = useState(initialState.linked ?? false);
    const [syncTimeMs, setSyncTimeMs] = useState(initialState.syncTimeMs ?? null);

    const [allActivityTypes, setAllActivityTypes] = useState([]);
    const [selectedActivityTypes, setSelectedActivityTypes] = useState(initialState.selectedTypes ?? null);
    const [showActivityTypes, setShowActivityTypes] = useState(false);

    const [loading, setLoading] = useState(!location.state);
    const [disconnecting, setDisconnecting] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const refreshStatus = useCallback(async () => {
        if (ltx.loginUser === INIT_LOGIN_STATE) return;
        if (!ltx.loginUser) {
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const data = await fetchGarminStatus();
            setGarminLinked(!!data?.linked);
            setSyncTimeMs(data?.syncTimeMs || null);
            setSelectedActivityTypes(data?.selectedTypes ?? null);
            if (data?.linked) {
                const allTypes = await fetchAllGarminActivityTypes(data.typesVersion);
                setAllActivityTypes(allTypes);
            }
        } finally {
            setLoading(false);
        }
    }, [ltx.loginUser]);

    useEffect(() => {
        if (!location.state) {
            refreshStatus().then();
        }
    }, [refreshStatus, location.state]);

    function goBack() {
        navigate(MAIN_URL_WITH_SLASH + LOGIN_URL + location.hash);
    }

    function handleDisconnect() {
        setConfirmOpen(false);
        setDisconnecting(true);
        disconnectGarmin()
            .then(() => refreshStatus())
            .finally(() => setDisconnecting(false));
    }

    return (
        <>
            {showActivityTypes && (
                <GarminActivitiesToSync
                    selectedActivityTypes={selectedActivityTypes}
                    onClose={() => setShowActivityTypes(false)}
                    onSaved={(list) => setSelectedActivityTypes(list)}
                />
            )}
            <Box sx={{ height: `${height - HEADER_SIZE}px` }} className={gStyles.scrollMainBlock}>
                <AppBarWithBtns id="garmin-connect" header="Garmin Connect" hasBackBtn={true} leftBtnAction={goBack} />
                <ThickDivider />
                <Box className={gStyles.scrollActiveBlock}>
                    {loading && <Loading />}

                    {!loading && !garminLinked && <GarminNotConnectedView />}

                    {!loading && garminLinked && (
                        <GarminConnectedView
                            syncTimeMs={syncTimeMs}
                            disconnecting={disconnecting}
                            onDisconnectClick={() => setConfirmOpen(true)}
                            allActivityTypes={allActivityTypes}
                            selectedActivityTypes={selectedActivityTypes}
                            onActivitiesToSyncClick={() => setShowActivityTypes((prev) => !prev)}
                        />
                    )}
                    {!loading && <ColorBlock color={'#f0f0f0'} />}
                </Box>

                <GarminDisconnectDialog
                    open={confirmOpen}
                    onClose={() => setConfirmOpen(false)}
                    onConfirm={handleDisconnect}
                    disconnecting={disconnecting}
                />
            </Box>
        </>
    );
}
