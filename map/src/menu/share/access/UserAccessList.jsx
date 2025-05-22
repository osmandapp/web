import { Box, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import UserAccessListItem from './UserAccessListItem';
import styles from '../share.module.css';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import { ReactComponent as ShareIcon } from '../../../assets/icons/ic_group.svg';
import { useTranslation } from 'react-i18next';
import { APPROVED_ACCESS_TYPE, BLOCKED_ACCESS_TYPE, PENDING_ACCESS_TYPE } from '../shareConstants';

export default function UserAccessList({ type, users, setForcedUpdate }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const showOwner = type === APPROVED_ACCESS_TYPE;
    const currentUsers = users[type];
    const emptyDataMsg = !showOwner && (!currentUsers || currentUsers?.length === 0);
    const emptyBlockedTab = users[BLOCKED_ACCESS_TYPE]?.length === 0;

    return (
        <Box
            id={'se-user-access-list'}
            minWidth={ctx.infoBlockWidth}
            maxWidth={ctx.infoBlockWidth}
            sx={{ overflow: 'auto', overflowX: 'hidden', maxHeight: '225px' }}
        >
            {showOwner && <UserAccessListItem showOwner={true} type={type} userList={users[APPROVED_ACCESS_TYPE]} />}
            {emptyDataMsg && (
                <Box>
                    <MenuItem className={styles.shareTypeSelect}>
                        <ListItemIcon className={styles.shareTypeIcon}>
                            <ShareIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    {type === PENDING_ACCESS_TYPE ? (
                                        <Typography className={styles.shareTypeText}>No new requests</Typography>
                                    ) : (
                                        <Typography className={styles.shareTypeText}>No blocked users</Typography>
                                    )}
                                </div>
                            </div>
                        </ListItemText>
                    </MenuItem>
                    <Box sx={{ ml: 8, mr: 2, mb: 2 }}>
                        {type === PENDING_ACCESS_TYPE ? (
                            <MenuItemWithLines
                                name={t('web:empty_pending_share_list_desc')}
                                maxLines={2}
                                className={styles.shareTypeTextInfo}
                            />
                        ) : (
                            <MenuItemWithLines
                                name={t('web:empty_blocked_share_list_desc')}
                                maxLines={2}
                                className={styles.shareTypeTextInfo}
                            />
                        )}
                    </Box>
                </Box>
            )}
            {currentUsers?.length > 0 &&
                currentUsers.map((user, index) => (
                    <UserAccessListItem
                        key={index}
                        index={index}
                        type={type}
                        user={user}
                        userList={currentUsers}
                        emptyBlockedTab={emptyBlockedTab}
                        setForcedUpdate={setForcedUpdate}
                    />
                ))}
        </Box>
    );
}
