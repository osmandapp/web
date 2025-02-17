import { useInView } from 'react-intersection-observer';
import React, { useContext, useMemo, useRef, useState } from 'react';
import { IconButton, ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import trackStyles from '../../trackfavmenu.module.css';
import styles from '../share.module.css';
import MenuItemWithLines from '../../components/MenuItemWithLines';
import { ReactComponent as MenuIcon } from '../../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../../assets/icons/ic_overflow_menu_with_background.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/ic_action_user.svg';
import { ReactComponent as ActionDoneIcon } from '../../../assets/icons/ic_action_done.svg';
import { ReactComponent as ActionRemoveIcon } from '../../../assets/icons/ic_action_remove_dark.svg';
import { ReactComponent as AnyoneIcon } from '../../../assets/icons/ic_world_globe_dark.svg';
import { format } from 'date-fns';
import * as locales from 'date-fns/locale';
import i18n from 'i18next';
import AppContext from '../../../context/AppContext';
import { APPROVED_ACCESS_TYPE, BLOCKED_ACCESS_TYPE, PENDING_ACCESS_TYPE } from '../../../manager/ShareManager';
import { useTranslation } from 'react-i18next';
import DividerWithMargin from '../../components/dividers/DividerWithMargin';

export default function UserAccessListItem({
    index,
    showOwner,
    type,
    user,
    userList,
    emptyBlockedTab,
    setForcedUpdate,
    anyone = false,
}) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const { ref, inView } = useInView();
    const [hoverIconInfo, setHoverIconInfo] = useState(false);
    const anchorEl = useRef(null);

    const name = getName();
    const userInfo = getInfo();

    function getName() {
        if (showOwner) {
            return ctx.accountInfo?.nickname ?? ctx.loginUser;
        } else if (anyone) {
            return t('web:share_type_public');
        } else {
            return user?.name;
        }
    }

    function getInfo() {
        if (showOwner) {
            return t('web:share_owner');
        } else if (anyone) {
            return t('web:share_type_public_desc');
        } else {
            return formatRequestedDateWithDateFns(user?.requestDate);
        }
    }

    function formatRequestedDateWithDateFns(date) {
        const locale = locales[i18n.language] || locales.enUS;
        return `Requested: ${format(date, 'd MMM yyyy', { locale })}`;
    }

    function approveRequest() {
        if (!user) {
            return;
        }
        userList.splice(userList.indexOf(user), 1);
        ctx.setUpdatedRequestList((prev) => [
            ...prev,
            {
                id: user.id,
                type: APPROVED_ACCESS_TYPE,
            },
        ]);
    }

    function blockRequest() {
        if (!user) {
            return;
        }
        userList.splice(userList.indexOf(user), 1);
        if (emptyBlockedTab) {
            setForcedUpdate(true);
        }
        ctx.setUpdatedRequestList((prev) => [
            ...prev,
            {
                id: user.id,
                type: BLOCKED_ACCESS_TYPE,
            },
        ]);
    }

    function showOwnerDivider() {
        return showOwner && userList?.length > 0;
    }

    function showDivider() {
        return !showOwner && !anyone && index !== userList?.length - 1;
    }

    return useMemo(
        () => (
            <div ref={ref}>
                {!inView ? (
                    <Skeleton variant="rectangular" width="100%" height={50} />
                ) : (
                    <div>
                        <MenuItem id={`se-user-access-item-${name}`} className={trackStyles.item} disableRipple>
                            <ListItemIcon className={trackStyles.icon}>
                                {anyone ? <AnyoneIcon /> : <UserIcon />}
                            </ListItemIcon>
                            <ListItemText>
                                <MenuItemWithLines name={name} maxLines={2} />
                                <Typography variant="body2" className={trackStyles.groupInfo} noWrap>
                                    {userInfo}
                                </Typography>
                            </ListItemText>
                            {type === APPROVED_ACCESS_TYPE && (
                                <IconButton
                                    className={trackStyles.sortIcon}
                                    onMouseEnter={() => setHoverIconInfo(true)}
                                    onMouseLeave={() => setHoverIconInfo(false)}
                                    ref={anchorEl}
                                >
                                    {hoverIconInfo ? <MenuIconHover /> : <MenuIcon />}
                                </IconButton>
                            )}
                            {type === PENDING_ACCESS_TYPE && (
                                <div>
                                    <IconButton
                                        id={'se-approve-access'}
                                        className={styles.approveBtn}
                                        onClick={approveRequest}
                                    >
                                        <ActionDoneIcon />
                                    </IconButton>
                                    <IconButton className={styles.blockBtn} onClick={blockRequest}>
                                        <ActionRemoveIcon />
                                    </IconButton>
                                </div>
                            )}
                            {type === BLOCKED_ACCESS_TYPE && (
                                <div>
                                    <IconButton className={styles.approveBtn} onClick={approveRequest}>
                                        <ActionDoneIcon />
                                    </IconButton>
                                    <IconButton className={styles.blockBtn} disabled={true}>
                                        <ActionRemoveIcon />
                                    </IconButton>
                                </div>
                            )}
                        </MenuItem>
                        {showOwnerDivider() && <DividerWithMargin margin={'64px'} />}
                        {showDivider() && <DividerWithMargin margin={'64px'} />}
                    </div>
                )}
            </div>
        ),
        [inView, hoverIconInfo, type, name, userInfo]
    );
}
