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
import { ReactComponent as ShareTypePrivateIcon } from '../../assets/icons/ic_action_lock_open.svg';
import { ReactComponent as ShareTypePublicIcon } from '../../assets/icons/ic_action_global_share.svg';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import styles from './share.module.css';
import gStyles from '../gstylesmenu.module.css';
import buttonStyles from '../login/login.module.css';
import ShareFileItem from './ShareFileItem';
import ShareType from './ShareType';
import SubTitle from '../components/SubTitle';
import UserAccessList from './UserAccessList';
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
import PublicAccessList from './PublicAccessList';

export default function ShareFileMenu({ setShowInfoBlock }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const shareTypes = {
        public: {
            key: 'public',
            isPublic: true,
            name: 'Anyone',
            icon: <ShareTypePublicIcon />,
            info: 'Anyone with the link can access the file',
        },
        private: {
            key: 'private',
            isPublic: false,
            name: 'Request Only',
            icon: <ShareTypePrivateIcon />,
            info: 'Users need to request access, which you can approve or deny',
        },
    };

    const [selectedAccessTab, setSelectedAccessTab] = useState(APPROVED_ACCESS_TYPE);
    const [userGroups, setUserGroups] = useState({});
    const [link, setLink] = useState('Tap Generate link to start share this file.');
    const [generatedUuid, setGeneratedUuid] = useState(null);
    const [selectedShareType, setSelectedShareType] = useState(initialShareType());
    const [forcedUpdate, setForcedUpdate] = useState(false);

    const userAccess = {
        [APPROVED_ACCESS_TYPE]: {
            name: 'Approved',
            type: 'READ',
        },
        [PENDING_ACCESS_TYPE]: {
            name: 'Pending',
            type: 'PENDING',
        },
        [BLOCKED_ACCESS_TYPE]: {
            name: 'Blocked',
            type: 'BLOCKED',
        },
    };

    useEffect(() => {
        const uuid = generatedUuid ?? ctx.shareFile?.sharedObj?.file?.uuid;
        if (uuid) {
            setLink(createLink(uuid));
        }
    }, [ctx.shareFile, generatedUuid]);

    useEffect(() => {
        if (ctx.shareFile?.sharedObj?.file.publicAccess !== selectedShareType.isPublic) {
            changeShareTypeFile(ctx.shareFile.sharedObj.file, ctx).then();
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

    useEffect(() => {
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

    function initialShareType() {
        if (ctx.shareFile?.sharedObj?.file.publicAccess) {
            return shareTypes.public;
        } else {
            return shareTypes.private;
        }
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
                        Share this file
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
                <ShareFileItem file={ctx.shareFile.mainFile} type={ctx.shareFile.sharedObj.file.type} />
                <ShareType
                    selectedShareType={selectedShareType}
                    setSelectedShareType={setSelectedShareType}
                    shareTypes={shareTypes}
                />
                <Divider className={gStyles.thickDivider} />
                <Box>
                    <SubTitle title={'Users'} hasTranslation={false} />
                    {selectedShareType.key === shareTypes.private.key && (
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
                    {selectedShareType.key === shareTypes.private.key && (
                        <Box>
                            <UserAccessList
                                type={selectedAccessTab}
                                users={userGroups}
                                setForcedUpdate={setForcedUpdate}
                            />
                        </Box>
                    )}
                    {selectedShareType.key === shareTypes.public.key && <PublicAccessList />}
                </Box>
                <Divider className={gStyles.thickDivider} />
                <Box sx={{ mx: 2 }}>
                    <Box sx={{ my: 2 }}>
                        <MenuItemWithLines name={link} maxLines={2} className={styles.shareTypeTextInfo} />
                    </Box>
                    {ctx.shareFile?.sharedObj?.file?.uuid || generatedUuid ? (
                        <Button component="span" className={buttonStyles.blueButton} onClick={copyLink}>
                            Copy link
                        </Button>
                    ) : (
                        <Button component="span" className={buttonStyles.blueButton} onClick={generateNewLink}>
                            Generate link
                        </Button>
                    )}
                </Box>
            </Box>
        </>
    );
}
