import { useInView } from 'react-intersection-observer';
import TracksManager from '../../manager/track/TracksManager';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Divider, IconButton, ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import { formatDate, getFileItemSize, getItemIcon } from '../../manager/SettingsManager';
import styles from './settings.module.css';
import trackStyles from '../trackfavmenu.module.css';
import MenuItemWithLines from '../components/MenuItemWithLines';
import ActionsMenu from '../actions/ActionsMenu';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import TrashActions from '../actions/TrashActions';

export default function TrashItem({ item, changes, setChanges }) {
    // useInView hook from `react-intersection-observer` for lazy loading.
    const { ref, inView } = useInView();
    const fileName = item.file ? TracksManager.getFileName(item.file) : null;
    const [hoverIconInfo, setHoverIconInfo] = useState(false);
    const [openActions, setOpenActions] = useState(false);
    const anchorEl = useRef(null);

    const handleClick = useCallback(
        (e) => {
            setOpenActions(true);
            e.stopPropagation();
        },
        [setOpenActions]
    );

    return useMemo(
        () => (
            <>
                <div ref={ref}>
                    {!inView ? (
                        <Skeleton variant="rectangular" width="100%" height={getFileItemSize(item, fileName)} />
                    ) : (
                        <>
                            {item.type === 'month' ? (
                                <>
                                    <Divider />
                                    <MenuItem className={styles.item} disableRipple>
                                        <Typography className={styles.title} noWrap>
                                            {item.date}
                                        </Typography>
                                    </MenuItem>
                                </>
                            ) : (
                                <div>
                                    <MenuItem className={trackStyles.item} disableRipple>
                                        <ListItemIcon className={trackStyles.icon}>
                                            {getItemIcon(item.file)}
                                        </ListItemIcon>
                                        <ListItemText>
                                            <MenuItemWithLines name={fileName} maxLines={2} />
                                            <Typography variant="body2" className={trackStyles.groupInfo} noWrap>
                                                {formatDate(item.file.updatetimems)}
                                            </Typography>
                                            {item?.file?.deviceInfo && (
                                                <Typography variant="body2" className={trackStyles.groupInfo} noWrap>
                                                    {item.file.deviceInfo}
                                                </Typography>
                                            )}
                                        </ListItemText>
                                        <div>
                                            <IconButton
                                                id={`se-cloud-trash-actions-${fileName}`}
                                                className={trackStyles.sortIcon}
                                                onMouseEnter={() => setHoverIconInfo(true)}
                                                onMouseLeave={() => setHoverIconInfo(false)}
                                                onClick={handleClick}
                                                ref={anchorEl}
                                            >
                                                {hoverIconInfo ? <MenuIconHover /> : <MenuIcon />}
                                            </IconButton>
                                        </div>
                                    </MenuItem>
                                    {!item.isLast && <Divider className={styles.dividerItem} />}
                                </div>
                            )}
                            <ActionsMenu
                                open={openActions}
                                setOpen={setOpenActions}
                                anchorEl={anchorEl}
                                actions={
                                    <TrashActions
                                        item={item}
                                        setOpenActions={setOpenActions}
                                        changes={changes}
                                        setChanges={setChanges}
                                    />
                                }
                            />
                        </>
                    )}
                </div>
            </>
        ),
        [inView, item, hoverIconInfo, openActions, anchorEl, handleClick, changes]
    );
}
