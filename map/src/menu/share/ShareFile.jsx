import {
    AppBar,
    Box,
    Button,
    Divider,
    IconButton,
    ToggleButton,
    ToggleButtonGroup,
    Toolbar,
    Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { apiGet } from '../../util/HttpApi';
import {
    APPROVED_ACCESS_TYPE,
    BLOCKED_ACCESS_TYPE,
    PENDING_ACCESS_TYPE,
    REQUEST_ACCESS_TYPE,
    sendRequest,
} from '../../manager/ShareManager';
import headerStyles from '../trackfavmenu.module.css';
import styles from './share.module.css';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import AppContext from '../../context/AppContext';
import RequestAccessError from './errors/RequestAccessError';
import PendingAccessError from './errors/PendingAccessError';
import BlockedAccessError from './errors/BlockedAccessError';

export default function ShareFile() {
    const ctx = useContext(AppContext);

    const { uuid } = useParams();

    const [requestTypeAccess, setRequestTypeAccess] = useState(false);
    const [pendingTypeAccess, setPendingTypeAccess] = useState(false);
    const [blockedTypeAccess, setBlockedTypeAccess] = useState(false);

    useEffect(() => {
        async function fetchFile() {
            const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/share/join/${uuid}`, {});
            if (res.ok) {
                const text = await res.text();
                try {
                    const jsonData = JSON.parse(text);
                    if (jsonData) {
                        console.log('JSON Response:', jsonData);
                    }
                } catch (error) {
                    if (text === REQUEST_ACCESS_TYPE) {
                        setRequestTypeAccess(true);
                    } else if (text === PENDING_ACCESS_TYPE) {
                        setPendingTypeAccess(true);
                    } else if (text === BLOCKED_ACCESS_TYPE) {
                        setBlockedTypeAccess(true);
                    }
                }
            }
        }
        fetchFile().then();
    }, [uuid]);

    function closeMenu() {}

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
            <Box>
                {requestTypeAccess && <RequestAccessError sendRequest={sendAccessRequest} />}
                {pendingTypeAccess && <PendingAccessError />}
                {blockedTypeAccess && <BlockedAccessError />}
            </Box>
        </>
    );
}
