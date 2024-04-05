import { useTranslation } from 'react-i18next';
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
    Tooltip,
    Typography,
} from '@mui/material';
import headerStyles from '../trackfavmenu.module.css';
import styles from './settings.module.css';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../assets/icons/ic_overflow_menu_with_background.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import Loading from '../errors/Loading';
import { useInView } from 'react-intersection-observer';
import TracksManager from '../../manager/track/TracksManager';
import { closeCloudSettings, formatDate, getFileItemSize, getItemIcon } from '../../manager/SettingsManager';
import trackStyles from '../trackfavmenu.module.css';
import MenuItemsTitle from '../components/MenuItemsTitle';
import ActionsMenu from '../actions/ActionsMenu';
import AppContext from '../../context/AppContext';
import TrashActions from '../actions/TrashActions';
import EmptyTrash from '../errors/EmptyTrash';
import EmptyTrashDialog from './EmptyTrashDialog';

export default function CloudTrash({ files, setOpenCloudSettings, filesLoading }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [changes, setChanges] = useState(null);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    useEffect(() => {
        if (files) {
            setChanges(files);
        }
    }, [files]);

    const TrashItem = React.memo(({ item }) => {
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
                                    <MenuItem className={trackStyles.item} disableRipple>
                                        <ListItemIcon className={trackStyles.icon}>
                                            {getItemIcon(item.file)}
                                        </ListItemIcon>
                                        <ListItemText>
                                            <MenuItemsTitle name={fileName} maxLines={2} />
                                            <Typography variant="body2" className={trackStyles.groupInfo} noWrap>
                                                {formatDate(item.file.updatetimems)}
                                            </Typography>
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
        );
    });

    TrashItem.displayName = 'TrashItem';

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        variant="contained"
                        type="button"
                        className={styles.closeIcon}
                        onClick={() => closeCloudSettings(true, setOpenCloudSettings, ctx)}
                    >
                        <BackIcon />
                    </IconButton>
                    <Typography component="div" className={headerStyles.title}>
                        {t('shared_string_trash')}
                    </Typography>
                    <Tooltip key={'empty_trash'} title={t('shared_string_empty_trash')} arrow placement="bottom-end">
                        <IconButton
                            id={'se-empty_trash'}
                            component="span"
                            variant="contained"
                            type="button"
                            className={headerStyles.appBarIcon}
                            disabled={changes?.length === 0}
                            onClick={() => setOpenDeleteDialog(true)}
                        >
                            <TrashIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            {filesLoading || !changes ? (
                <Loading id={'se-loading-page'} />
            ) : changes?.length === 0 ? (
                <EmptyTrash />
            ) : (
                <Box
                    id={'se-cloud_trash-items'}
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                    sx={{ overflow: 'auto', overflowX: 'hidden' }}
                >
                    {changes.map((item) => (
                        <TrashItem key={item.id} item={item} />
                    ))}
                </Box>
            )}
            {openDeleteDialog && (
                <EmptyTrashDialog
                    dialogOpen={openDeleteDialog}
                    setDialogOpen={setOpenDeleteDialog}
                    changes={changes}
                    setChanges={setChanges}
                />
            )}
        </>
    );
}
