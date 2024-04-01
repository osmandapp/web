import React, { useContext, useMemo } from 'react';
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
import { ReactComponent as TrackIcon } from '../../assets/icons/ic_action_polygom_dark.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as FolderIcon } from '../../assets/icons/ic_action_folder.svg';
import MenuItemsTitle from '../components/MenuItemsTitle';
import AppContext from '../../context/AppContext';
import headerStyles from '../trackfavmenu.module.css';
import styles from './settings.module.css';
import trackStyles from '../../menu/trackfavmenu.module.css';
import { useTranslation } from 'react-i18next';
import Loading from '../errors/Loading';
import TracksManager, { GPX_FILE_TYPE } from '../../manager/track/TracksManager';
import { FAVORITE_FILE_TYPE, prepareFavGroupName } from '../../manager/FavoritesManager';
import { isToday, isYesterday, quickNaNfix } from '../../util/Utils';
import i18n from 'i18next';

export default function CloudChanges({ setOpenCloudSettings, allFilesVersions, filesLoading }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    function closeChanges() {
        setOpenCloudSettings(false);
    }

    // Processes and groups files by their update month and year.
    const listItems = useMemo(() => {
        const filesByDate = {};
        allFilesVersions.forEach((file) => {
            const dateKey = new Date(file.updatetimems).toLocaleString('default', { month: 'long', year: 'numeric' });
            if (!filesByDate[dateKey]) {
                filesByDate[dateKey] = [];
            }
            filesByDate[dateKey].push(file);
        });

        const sortedDates = Object.keys(filesByDate).sort((a, b) => new Date(b) - new Date(a));

        return sortedDates.reduce((arr, date) => {
            arr.push({ type: 'month', date, id: `month-${date}` });
            const sortedFiles = filesByDate[date].sort((a, b) => b.updatetimems - a.updatetimems);
            sortedFiles.forEach((file, index) =>
                arr.push({ type: 'file', file, id: file.id, isLast: index === sortedFiles.length - 1 })
            );
            return arr;
        }, []);
    }, [allFilesVersions]);

    function getItemIcon(file) {
        if (file?.type === GPX_FILE_TYPE) {
            return <TrackIcon />;
        }
        if (file?.type === FAVORITE_FILE_TYPE) {
            const groupName = prepareFavGroupName(file.name);
            const groups = file.details?.pointGroups ? JSON.parse(quickNaNfix(file.details?.pointGroups)) : null;
            if (!groups) {
                return <FolderIcon />;
            }
            const color = groups[groupName]?.color;
            if (!color) {
                return <FolderIcon />;
            }
            return <FolderIcon style={{ fill: color }} />;
        }
    }

    const ChangesItem = React.memo(({ item }) => {
        // useInView hook from `react-intersection-observer` for lazy loading.
        const { ref, inView } = useInView({ triggerOnce: true });
        const fileName = item.file ? TracksManager.getFileName(item.file) : null;

        const formatDate = (dateStr) => {
            const date = new Date(dateStr);
            const options = { hour: 'numeric', minute: 'numeric' };
            if (isYesterday(date)) {
                return t('yesterday') + ', ' + date.toLocaleString(i18n.language, options);
            }
            if (isToday(date)) {
                return t('today') + ', ' + date.toLocaleString(i18n.language, options);
            }
            options.day = 'numeric';
            options.month = 'short';

            return date.toLocaleString(i18n.language, options);
        };

        // Defines item size based on its type, necessary for layout before content is loaded.
        // Pre-set constants are used for lazy loading to ensure placeholders match the final content height.
        // This approach prevents layout shifts as items load in view.
        function getItemSize(item) {
            if (item.type === 'month') {
                return 'var(--base-title-size)';
            } else {
                const maxLines = fileName?.length > 27 ? 2 : 1;
                return maxLines === 1 ? 'var(--menu-item-size)' : 'var(--menu-item-2-lines-size)';
            }
        }

        function getStatus(file) {
            if (file.zipSize <= 0) {
                return t('web:deleted');
            }
            if (Math.round(file.updatetimems / 1000) === Math.round(file.clienttimems / 1000)) {
                return t('web:added');
            }
            if (file.updatetimems > file.clienttimems) {
                return t('web:modified');
            }
        }

        return (
            <div ref={ref}>
                {!inView ? (
                    <Skeleton variant="rectangular" width="100%" height={getItemSize(item)} />
                ) : (
                    <>
                        {item.type === 'month' ? (
                            <>
                                <Divider />
                                <MenuItem className={styles.item}>
                                    <Typography className={styles.title} noWrap>
                                        {item.date}
                                    </Typography>
                                </MenuItem>
                            </>
                        ) : (
                            <div>
                                <MenuItem className={trackStyles.item}>
                                    <ListItemIcon className={trackStyles.icon}>{getItemIcon(item.file)}</ListItemIcon>
                                    <ListItemText>
                                        <MenuItemsTitle name={fileName} maxLines={2} />
                                        <Typography variant="body2" className={trackStyles.groupInfo} noWrap>
                                            {getStatus(item.file) + ': ' + formatDate(item.file.updatetimems)}
                                        </Typography>
                                    </ListItemText>
                                    <div>
                                        <IconButton className={trackStyles.sortIcon}>
                                            <MenuIcon />
                                        </IconButton>
                                    </div>
                                </MenuItem>
                                {!item.isLast && <Divider className={styles.dividerItem} />}
                            </div>
                        )}
                    </>
                )}
            </div>
        );
    });

    ChangesItem.displayName = 'ChangesItem';

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton variant="contained" className={styles.closeIcon} onClick={closeChanges}>
                        <BackIcon />
                    </IconButton>
                    <Typography component="div" className={headerStyles.title}>
                        {t('web:cloud_changes')}
                    </Typography>
                </Toolbar>
            </AppBar>
            {filesLoading ? (
                <Loading />
            ) : (
                <Box
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                    sx={{ overflow: 'auto', overflowX: 'hidden' }}
                >
                    {listItems.map((item) => (
                        <ChangesItem key={item.id} item={item} />
                    ))}
                </Box>
            )}
        </>
    );
}
