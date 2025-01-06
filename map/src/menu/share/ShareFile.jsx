import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { apiGet } from '../../util/HttpApi';
import { BLOCKED_ACCESS_TYPE, PENDING_ACCESS_TYPE, REQUEST_ACCESS_TYPE, sendRequest } from '../../manager/ShareManager';
import headerStyles from '../trackfavmenu.module.css';
import styles from './share.module.css';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import AppContext, { OBJECT_TYPE_SHARE_FILE } from '../../context/AppContext';
import RequestAccessError from './errors/RequestAccessError';
import PendingAccessError from './errors/PendingAccessError';
import BlockedAccessError from './errors/BlockedAccessError';
import { quickNaNfix } from '../../util/Utils';
import { addDistance } from '../../manager/track/TracksManager';
import GeneralInfoTab from '../../infoblock/components/tabs/GeneralInfoTab';
import {
    FAVOURITES,
    FILE_WAS_DELETED,
    GPX,
    MENU_INFO_CLOSE_SIZE,
    SHARE_FILE_MAIN_URL,
} from '../../manager/GlobalManager';
import NotAvailableError from './errors/NotAvailableError';
import { getFavMenuListByLayers, LOCATION_UNAVAILABLE, prepareFavGroupName } from '../../manager/FavoritesManager';
import FavoriteItem from '../favorite/FavoriteItem';
import { useGeoLocation } from '../../util/hooks/useGeoLocation';
import { getCenterMapLoc } from '../../manager/MapManager';
import SubTitle from '../components/SubTitle';
import { INIT_LOGIN_STATE } from '../../manager/LoginManager';
import EmptyLogin from '../login/EmptyLogin';
import { useTranslation } from 'react-i18next';

export default function ShareFile() {
    const ctx = useContext(AppContext);
    const { uuid } = useParams();

    const { t } = useTranslation();

    const [userName, setUserName] = useState('');

    const hash = window.location.hash;

    const [requestTypeAccess, setRequestTypeAccess] = useState(false);
    const [pendingTypeAccess, setPendingTypeAccess] = useState(false);
    const [blockedTypeAccess, setBlockedTypeAccess] = useState(false);
    const [notAvailable, setNotAvailable] = useState(false);
    const [onlyLoginAccess, setOnlyLoginAccess] = useState(false);

    const [showFile, setShowFile] = useState(false);
    const [showFavorite, setShowFavorite] = useState(false);
    const [fileRes, setFileRes] = useState(null);

    const currentLoc = useGeoLocation(ctx);

    useEffect(() => {
        setUserName(ctx.accountInfo?.nickname ?? '');
    }, [ctx.accountInfo]);

    useEffect(() => {
        if (!uuid) {
            return;
        }

        async function fetchFile() {
            const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/${SHARE_FILE_MAIN_URL}${uuid}`, {});
            if (res.ok) {
                const text = await res.text();
                try {
                    const jsonData = JSON.parse(quickNaNfix(text));
                    if (jsonData.gpx_data) {
                        setFileRes({
                            type: jsonData.type,
                            name: jsonData.name,
                            data: jsonData.gpx_data,
                        });
                    }
                } catch (error) {
                    const textLower = text.toLowerCase();
                    const accessTypeHandlers = {
                        [REQUEST_ACCESS_TYPE]: () => setRequestTypeAccess(true),
                        [PENDING_ACCESS_TYPE]: () => setPendingTypeAccess(true),
                        [BLOCKED_ACCESS_TYPE]: () => setBlockedTypeAccess(true),
                        [FILE_WAS_DELETED]: () => setNotAvailable(true),
                    };
                    if (accessTypeHandlers[textLower]) {
                        accessTypeHandlers[textLower]();
                    } else {
                        console.log('Unknown share file response:', text);
                        setNotAvailable(true);
                    }
                }
            } else {
                if (res.status === 401) {
                    setOnlyLoginAccess(true);
                } else {
                    console.log('Error fetching share file:', res);
                }
            }
        }
        fetchFile().then();
    }, [uuid]);

    useEffect(() => {
        if (!fileRes) return;

        ctx.setCurrentObjectType(OBJECT_TYPE_SHARE_FILE);

        if (fileRes.type === GPX) {
            setShowFile(true);
            const track = fileRes.data;
            addDistance(track);
            ctx.setSelectedGpxFile({
                name: fileRes.name,
                type: fileRes.type,
                ...track,
            });
        } else if (fileRes.type === FAVOURITES) {
            setShowFavorite(true);
            ctx.setSelectedGpxFile({
                fileName: fileRes.name,
                type: fileRes.type,
                ...fileRes.data,
            });
        }
    }, [fileRes]);

    function closeMenu() {
        ctx.setCurrentObjectType(null);
        ctx.setSelectedGpxFile({});
        ctx.setShareFileMarkers(null);
        ctx.setInfoBlockWidth(MENU_INFO_CLOSE_SIZE);
    }

    async function sendAccessRequest() {
        const res = await sendRequest(uuid, userName);
        if (res) {
            setRequestTypeAccess(false);
            setPendingTypeAccess(true);
        }
    }

    const favItems = useMemo(() => {
        const layers = ctx.shareFileMarkers?.getLayers();
        if (layers?.length > 0 && ctx.selectedGpxFile?.wpts) {
            const loc = currentLoc && currentLoc !== LOCATION_UNAVAILABLE ? currentLoc : getCenterMapLoc(hash);
            const markerList = getFavMenuListByLayers(layers, ctx.selectedGpxFile.wpts, loc);
            const items = [];
            markerList.map((m, index) => {
                items.push(
                    <FavoriteItem
                        key={m + index}
                        marker={m}
                        group={ctx.selectedGpxFile}
                        currentLoc={currentLoc}
                        share={true}
                    />
                );
            });
            return items;
        }
        return null;
    }, [ctx.shareFileMarkers, currentLoc]);

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        id={'se-close-share-file'}
                        variant="contained"
                        type="button"
                        className={styles.appBarIcon}
                        onClick={closeMenu}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography id="se-share-file" component="div" className={styles.title}>
                        {t('web:share_file')}
                    </Typography>
                </Toolbar>
            </AppBar>
            {!onlyLoginAccess ? (
                <>
                    {!showFavorite && (
                        <Box sx={{ px: 2, mt: 1, overflowX: 'hidden' }}>
                            {requestTypeAccess && (
                                <RequestAccessError
                                    sendRequest={sendAccessRequest}
                                    userName={userName}
                                    setUserName={setUserName}
                                />
                            )}
                            {pendingTypeAccess && <PendingAccessError />}
                            {blockedTypeAccess && <BlockedAccessError />}
                            {notAvailable && <NotAvailableError />}
                            {showFile && (
                                <Box>
                                    <GeneralInfoTab key="general" />
                                </Box>
                            )}
                        </Box>
                    )}
                    {showFavorite && (
                        <Box>
                            <SubTitle title={prepareFavGroupName(fileRes.name)} />
                            {favItems}
                        </Box>
                    )}
                </>
            ) : (
                <EmptyLogin />
            )}
        </>
    );
}
