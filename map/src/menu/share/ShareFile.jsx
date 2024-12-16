import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
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
import { FILE_WAS_DELETED, GPX, MENU_INFO_CLOSE_SIZE, SHARE_FILE_MAIN_URL } from '../../manager/GlobalManager';
import NotAvailableError from './errors/NotAvailableError';

export default function ShareFile() {
    const ctx = useContext(AppContext);
    const { uuid } = useParams();

    const [requestTypeAccess, setRequestTypeAccess] = useState(false);
    const [pendingTypeAccess, setPendingTypeAccess] = useState(false);
    const [blockedTypeAccess, setBlockedTypeAccess] = useState(false);
    const [notAvailable, setNotAvailable] = useState(false);
    const [showFile, setShowFile] = useState(false);

    useEffect(() => {
        async function fetchFile() {
            const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/${SHARE_FILE_MAIN_URL}${uuid}`, {});
            if (res.ok) {
                const text = await res.text();
                try {
                    const jsonData = JSON.parse(quickNaNfix(text));
                    if (jsonData) {
                        if (jsonData.type === GPX) {
                            const track = jsonData.gpx_data;
                            addDistance(track);
                            const file = {
                                name: jsonData.name,
                                type: jsonData.type,
                                ...track,
                            };
                            ctx.setCurrentObjectType(OBJECT_TYPE_SHARE_FILE);
                            ctx.setSelectedGpxFile(file);
                            setShowFile(true);
                        }
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
                    }
                }
            }
        }
        fetchFile().then();
    }, [uuid]);

    function closeMenu() {
        ctx.setCurrentObjectType(null);
        ctx.setSelectedGpxFile({});
        ctx.setInfoBlockWidth(MENU_INFO_CLOSE_SIZE);
    }

    async function sendAccessRequest() {
        const res = await sendRequest(uuid);
        if (res) {
            setRequestTypeAccess(false);
            setPendingTypeAccess(true);
        }
    }

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton variant="contained" type="button" className={styles.appBarIcon} onClick={closeMenu}>
                        <CloseIcon />
                    </IconButton>
                    <Typography id="se-share-file" component="div" className={styles.title}>
                        Share file
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ px: 2, mt: 1, overflowX: 'hidden' }}>
                {requestTypeAccess && <RequestAccessError sendRequest={sendAccessRequest} />}
                {pendingTypeAccess && <PendingAccessError />}
                {blockedTypeAccess && <BlockedAccessError />}
                {notAvailable && <NotAvailableError />}
                {showFile && (
                    <Box>
                        <GeneralInfoTab key="general" />
                    </Box>
                )}
            </Box>
        </>
    );
}
