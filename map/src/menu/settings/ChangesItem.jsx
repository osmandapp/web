import { useInView } from 'react-intersection-observer';
import TracksManager from '../../manager/track/TracksManager';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Divider, IconButton, ListItemIcon, ListItemText, MenuItem, Skeleton, Typography } from '@mui/material';
import { formatDate, getFileItemSize, getItemIcon } from '../../manager/SettingsManager';
import styles from './settings.module.css';
import trackStyles from '../../menu/trackfavmenu.module.css';
import ChangesActions from '../actions/ChangesActions';
import ActionsMenu from '../actions/ActionsMenu';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import MenuItemWithLines from '../components/MenuItemWithLines';

export default function ChangesItem({ item, changes, setChanges }) {
    const { t } = useTranslation();

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

    function getStatus(file) {
        if (!file) {
            return '';
        }
        if (file.zipSize <= 0) {
            return t('shared_string_deleted');
        }
        if (Math.round(file.updatetimems / 1000) === Math.round(file.clienttimems / 1000)) {
            return t('shared_string_added');
        }
        if (file.updatetimems > file.clienttimems) {
            return t('shared_string_modified');
        }
        return '';
    }

    const status = getStatus(item.file);

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
                                    <MenuItem
                                        id={`se-cloud_change-${fileName}-${status}`}
                                        className={trackStyles.item}
                                        disableRipple
                                    >
                                        <ListItemIcon className={trackStyles.icon}>
                                            {getItemIcon(item.file)}
                                        </ListItemIcon>
                                        <ListItemText>
                                            <MenuItemWithLines name={fileName} maxLines={2} />
                                            <Typography variant="body2" className={trackStyles.groupInfo} noWrap>
                                                {status + ': ' + formatDate(item.file.updatetimems)}
                                            </Typography>
                                            {item?.file?.deviceInfo && (
                                                <Typography variant="body2" className={trackStyles.groupInfo} noWrap>
                                                    {item.file.deviceInfo}
                                                </Typography>
                                            )}
                                        </ListItemText>
                                        <div>
                                            <IconButton
                                                id={`se-cloud-changes-actions-${fileName}`}
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
                                    <ChangesActions
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
        [inView, item, status, hoverIconInfo, openActions, anchorEl, handleClick, changes]
    );
}
