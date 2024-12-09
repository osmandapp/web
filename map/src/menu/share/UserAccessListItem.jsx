import { useInView } from 'react-intersection-observer';
import React, { useMemo, useRef, useState } from 'react';
import { IconButton, ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import trackStyles from '../trackfavmenu.module.css';
import MenuItemWithLines from '../components/MenuItemWithLines';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import { ReactComponent as UserIcon } from '../../assets/icons//ic_action_user.svg';

export default function UserAccessListItem({ userName, type }) {
    const { ref, inView } = useInView();
    const [hoverIconInfo, setHoverIconInfo] = useState(false);
    const anchorEl = useRef(null);

    return useMemo(
        () => (
            <div ref={ref}>
                {!inView ? (
                    <Skeleton variant="rectangular" width="100%" height={50} />
                ) : (
                    <MenuItem className={trackStyles.item} disableRipple>
                        <ListItemIcon className={trackStyles.icon}>
                            <UserIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <MenuItemWithLines name={userName} maxLines={2} />
                            <Typography variant="body2" className={trackStyles.groupInfo} noWrap>
                                {type}
                            </Typography>
                        </ListItemText>
                        <div>
                            <IconButton
                                className={trackStyles.sortIcon}
                                onMouseEnter={() => setHoverIconInfo(true)}
                                onMouseLeave={() => setHoverIconInfo(false)}
                                ref={anchorEl}
                            >
                                {hoverIconInfo ? <MenuIconHover /> : <MenuIcon />}
                            </IconButton>
                        </div>
                    </MenuItem>
                )}
            </div>
        ),
        [inView, userName, hoverIconInfo]
    );
}
