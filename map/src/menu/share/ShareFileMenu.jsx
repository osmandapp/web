import headerStyles from '../trackfavmenu.module.css';
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
import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as ShareLinkIcon } from '../../assets/icons/ic_action_link.svg';
import { ReactComponent as ShareTypePrivateIcon } from '../../assets/icons/ic_action_lock.svg';
import { ReactComponent as ShareTypeAccessIcon } from '../../assets/icons/ic_action_lock_open.svg';
import { ReactComponent as ShareTypePublicIcon } from '../../assets/icons/ic_action_global_share.svg';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import styles from './share.module.css';
import gStyles from '../gstylesmenu.module.css';
import buttonStyles from '../login/login.module.css';
import ShareFileItem from './ShareFileItem';
import ShareType from './ShareType';
import SubTitle from '../components/SubTitle';
import UserAccessList from './access/UserAccessList';
import MenuItemWithLines from '../components/MenuItemWithLines';
import {
    APPROVED_ACCESS_TYPE,
    APPROVED_ACCESS_TYPE_SERVER,
    BLOCKED_ACCESS_TYPE,
    changeShareTypeFile,
    generateLink,
    PENDING_ACCESS_TYPE,
    updateUserRequests,
} from '../../manager/ShareManager';
import { MAIN_URL_WITH_SLASH, SHARE_FILE_MAIN_URL } from '../../manager/GlobalManager';
import PublicAccessList from './access/PublicAccessList';
import PrivateAccessList from './access/PrivateAccessList';

export default function ShareFileMenu({ setShowInfoBlock }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const shareTypes = {
        public: {
            key: 'public',
            isPublic: true,
            name: t('web:share_type_public'),
            icon: <ShareTypePublicIcon />,
            info: t('web:share_type_public_desc'),
        },
        request: {
            key: 'request',
            isPublic: false,
            name: t('web:share_type_request_only'),
            icon: <ShareTypeAccessIcon />,
            info: t('web:share_type_request_only_desc'),
        },
        private: {
            key: 'private',
            isPublic: false,
            name: t('web:share_type_private'),
            icon: <ShareTypePrivateIcon />,
            info: t('web:share_type_private_desc'),
        },
    };

    const [selectedAccessTab, setSelectedAccessTab] = useState(APPROVED_ACCESS_TYPE);
    const [userGroups, setUserGroups] = useState({});
    const [link, setLink] = useState(null);
    const [generatedUuid, setGeneratedUuid] = useState(null);
    const [selectedShareType, setSelectedShareType] = useState(initialShareType());
    const [forcedUpdate, setForcedUpdate] = useState(false);

    const userAccess = {
        [APPROVED_ACCESS_TYPE]: {
            name: t('web:access_type_approved'),
            type: 'READ',
        },
        [PENDING_ACCESS_TYPE]: {
            name: t('web:access_type_pending'),
            type: 'PENDING',
        },
        [BLOCKED_ACCESS_TYPE]: {
            name: t('web:access_type_blocked'),
            type: 'BLOCKED',
        },
    };

    useEffect(() => {
        if (ctx.shareFile && !ctx.shareFile.sharedObj) {
            // private file without users
            return;
        }
        if (ctx.shareFile?.sharedObj?.file?.accessRecords) {
            const groupedUsers = {
                [APPROVED_ACCESS_TYPE]: [],
                [PENDING_ACCESS_TYPE]: [],
                [BLOCKED_ACCESS_TYPE]: [],
            };

            ctx.shareFile.sharedObj.file.accessRecords.forEach((user) => {
                const userAccess = user.access.toLowerCase();
                if (APPROVED_ACCESS_TYPE_SERVER.includes(userAccess.toLowerCase())) {
                    groupedUsers[APPROVED_ACCESS_TYPE].push(user);
                } else if (userAccess === PENDING_ACCESS_TYPE.toLowerCase()) {
                    groupedUsers[PENDING_ACCESS_TYPE].push(user);
                } else if (userAccess === BLOCKED_ACCESS_TYPE.toLowerCase()) {
                    groupedUsers[BLOCKED_ACCESS_TYPE].push(user);
                }
            });
            setUserGroups(groupedUsers);
        }
    }, [ctx.shareFile]);

    useEffect(() => {
        const uuid = generatedUuid ?? ctx.shareFile?.sharedObj?.file?.uuid;
        if (uuid) {
            setLink(createLink(uuid));
        } else {
            if (selectedShareType.key === shareTypes.private.key) {
                setLink(t('web:private_share_link_desc'));
            } else {
                setLink(t('web:generate_share_link_desc'));
            }
        }
    }, [ctx.shareFile, generatedUuid]);

    useEffect(() => {
        ctx.setShareFilesCache((prev) => {
            return {
                ...prev,
                [ctx.shareFile.mainFile.id]: selectedShareType.key,
            };
        });
        const privateFile = ctx.shareFile && !ctx.shareFile.sharedObj;
        const publicFile = ctx.shareFile?.sharedObj?.file.publicAccess;
        const newShareType = selectedShareType.key;

        const shouldChangeShareType =
            (privateFile && newShareType !== shareTypes.private.key) ||
            (publicFile && newShareType === shareTypes.request.key) ||
            (!privateFile && newShareType === shareTypes.public.key);

        if (shouldChangeShareType) {
            changeShareTypeFile({ file: ctx.shareFile.mainFile, shareType: newShareType, ctx }).then();
            return;
        }

        if (selectedShareType.key === shareTypes.private.key) {
            // process this case in DeleteShareFileDialog
        }
    }, [selectedShareType]);

    useEffect(() => {
        updateUserRequests(ctx).then();
    }, [selectedAccessTab, selectedShareType]);

    useEffect(() => {
        if (forcedUpdate) {
            updateUserRequests(ctx).then(() => setForcedUpdate(false));
        }
    }, [forcedUpdate]);

    function initialShareType() {
        if (ctx.shareFile && !ctx.shareFile.sharedObj) {
            return shareTypes.private;
        }
        if (ctx.shareFile?.sharedObj?.file.publicAccess) {
            return shareTypes.public;
        }
        return shareTypes.request;
    }

    function createLink(uuid) {
        return `${window.location.origin}${MAIN_URL_WITH_SLASH}${SHARE_FILE_MAIN_URL}${uuid}`;
    }

    async function generateNewLink() {
        const res = await generateLink({
            file: ctx.shareFile.mainFile,
            publicAccess: selectedShareType.key === shareTypes.public.key,
        });
        if (res) {
            setGeneratedUuid(res.uuid);
        }
    }

    function copyLink() {
        navigator.clipboard.writeText(link);
    }

    function closeMenu() {
        ctx.setShareFile(null);
        setShowInfoBlock(false);
    }

    const handleAccessTab = (event, newAccessTab) => {
        if (newAccessTab !== null) {
            setSelectedAccessTab(newAccessTab);
        }
    };

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton variant="contained" type="button" className={styles.appBarIcon} onClick={closeMenu}>
                        <BackIcon />
                    </IconButton>
                    <Typography id="se-share-file-menu" component="div" className={styles.title}>
                        {t('web:share_this_file')}
                    </Typography>
                    <IconButton
                        disabled={!ctx.shareFile?.sharedObj?.file?.uuid}
                        id={'se-share-copy-link'}
                        variant="contained"
                        type="button"
                        className={styles.appBarIcon}
                        onClick={() => copyLink()}
                    >
                        <ShareLinkIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box>
                <ShareFileItem file={ctx.shareFile.mainFile} type={ctx.shareFile.mainFile.type} />
                <ShareType
                    selectedShareType={selectedShareType}
                    setSelectedShareType={setSelectedShareType}
                    shareTypes={shareTypes}
                />
                <Divider className={gStyles.thickDivider} />
                <Box>
                    <SubTitle title={'Users'} hasTranslation={false} />
                    {selectedShareType.key === shareTypes.request.key && (
                        <Box sx={{ mx: 2 }}>
                            <ToggleButtonGroup
                                fullWidth
                                color="primary"
                                value={selectedAccessTab}
                                exclusive
                                onChange={handleAccessTab}
                            >
                                <ToggleButton value={APPROVED_ACCESS_TYPE}>
                                    {userAccess[APPROVED_ACCESS_TYPE].name}
                                </ToggleButton>
                                <ToggleButton value={PENDING_ACCESS_TYPE}>
                                    {userAccess[PENDING_ACCESS_TYPE].name}
                                </ToggleButton>
                                <ToggleButton value={BLOCKED_ACCESS_TYPE}>
                                    {userAccess[BLOCKED_ACCESS_TYPE].name}
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    )}
                    {selectedShareType.key === shareTypes.request.key && (
                        <Box>
                            <UserAccessList
                                type={selectedAccessTab}
                                users={userGroups}
                                setForcedUpdate={setForcedUpdate}
                            />
                        </Box>
                    )}
                    {selectedShareType.key === shareTypes.public.key && <PublicAccessList />}
                    {selectedShareType.key === shareTypes.private.key && <PrivateAccessList />}
                </Box>
                <Divider className={gStyles.thickDivider} />
                <Box sx={{ mx: 2 }}>
                    <Box sx={{ my: 2 }}>
                        <MenuItemWithLines name={link} maxLines={2} className={styles.shareTypeTextInfo} />
                    </Box>
                    {ctx.shareFile?.sharedObj?.file?.uuid || generatedUuid ? (
                        <Button component="span" className={buttonStyles.blueButton} onClick={copyLink}>
                            {t('web:copy_link')}
                        </Button>
                    ) : (
                        <Button
                            component="span"
                            className={buttonStyles.blueButton}
                            onClick={generateNewLink}
                            disabled={selectedShareType.key === shareTypes.private.key}
                            sx={{ color: selectedShareType.key === shareTypes.private.key && '#727272 !important' }}
                        >
                            {t('web:generate_link')}
                        </Button>
                    )}
                </Box>
            </Box>
        </>
    );
}
