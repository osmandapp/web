import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import {
    AppBar,
    Box,
    Divider,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Skeleton,
    Toolbar,
    Typography,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import MenuItemsTitle from '../components/MenuItemsTitle';
import AppContext from '../../context/AppContext';
import headerStyles from '../trackfavmenu.module.css';
import styles from './settings.module.css';
import trackStyles from '../../menu/trackfavmenu.module.css';
import { useTranslation } from 'react-i18next';
import Loading from '../errors/Loading';
import TracksManager from '../../manager/track/TracksManager';
import ActionsMenu from '../actions/ActionsMenu';
import ChangesActions from '../actions/ChangesActions';
import { closeCloudSettings, formatDate, getFileItemSize, getItemIcon } from '../../manager/SettingsManager';
import Empty from '../errors/Empty';

export default function CloudChanges({ files, setOpenCloudSettings, filesLoading }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [changes, setChanges] = useState(null);

    useEffect(() => {
        if (files) {
            setChanges(files);
        }
    }, [files]);

    const ChangesItem = React.memo(({ item }) => {
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
                return t('web:deleted');
            }
            if (Math.round(file.updatetimems / 1000) === Math.round(file.clienttimems / 1000)) {
                return t('web:added');
            }
            if (file.updatetimems > file.clienttimems) {
                return t('web:modified');
            }
            return '';
        }

        const status = getStatus(item.file);

        return (
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
                                            <MenuItemsTitle name={fileName} maxLines={2} />
                                            <Typography variant="body2" className={trackStyles.groupInfo} noWrap>
                                                {status + ': ' + formatDate(item.file.updatetimems)}
                                            </Typography>
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
        );
    });

    ChangesItem.displayName = 'ChangesItem';

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        variant="contained"
                        className={styles.closeIcon}
                        onClick={() => closeCloudSettings(true, setOpenCloudSettings, ctx)}
                    >
                        <BackIcon />
                    </IconButton>
                    <Typography component="div" className={headerStyles.title}>
                        {t('web:cloud_changes')}
                    </Typography>
                </Toolbar>
            </AppBar>
            {filesLoading || !changes ? (
                <Loading id={'se-loading-page'} />
            ) : changes?.length === 0 ? (
                <Empty title={'Changes are empty'} />
            ) : (
                <Box
                    id={'se-cloud_changes-items'}
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                    sx={{ overflow: 'auto', overflowX: 'hidden' }}
                >
                    {changes.map((item) => (
                        <ChangesItem key={item.id} item={item} />
                    ))}
                </Box>
            )}
        </>
    );
}
