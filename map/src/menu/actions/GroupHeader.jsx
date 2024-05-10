import { AppBar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import CloudGpxUploader from '../../frame/components/util/CloudGpxUploader';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import { ReactComponent as TimeIcon } from '../../assets/icons/ic_action_time.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as ImportIcon } from '../../assets/icons/ic_action_folder_import_outlined.svg';
import { ReactComponent as AddFolderIcon } from '../../assets/icons/ic_action_folder_add_outlined.svg';
import styles from '../trackfavmenu.module.css';
import { DEFAULT_GROUP_NAME } from '../../manager/track/TracksManager';
import { FREE_ACCOUNT } from '../../manager/LoginManager';
import AddFolderDialog from '../../dialogs/tracks/AddFolderDialog';
import SortActions, { allMethods, byTime, getSelectedSort } from './SortActions';
import SortMenu from './SortMenu';
import { DEFAULT_FAV_GROUP_NAME } from '../../manager/FavoritesManager';
import FavoriteGroupUploader from '../../frame/components/util/FavoriteGroupUploader';
import IconButtonWithPermissions from '../../frame/components/IconButtonWithPermissions';
import { useTranslation } from 'react-i18next';
import { closeHeader } from './HeaderHelper';

export default function GroupHeader({
    type,
    trackGroup = null,
    favoriteGroup = null,
    setSortGroups = null,
    setSortFiles = null,
    markers = null,
}) {
    const ctx = useContext(AppContext);

    const TRACKS_TYPE = 'tracks';
    const FAVORITES_TYPE = 'favorites';

    const { t } = useTranslation();

    const [openAddFolderDialog, setOpenAddFolderDialog] = useState(false);
    const [openSort, setOpenSort] = useState(false);
    const [sortName, setSortName] = useState(t('sort_last_modified'));
    const [sortIcon, setSortIcon] = useState(<TimeIcon />);
    const anchorEl = useRef(null);

    const sortType = getSelectedSort({ trackGroup, favoriteGroup, ctx });
    const currentSortType = sortType ? sortType : 'time';
    useEffect(() => {
        if (sortType) {
            setSortIcon(allMethods[sortType].icon);
            setSortName(allMethods[sortType].name());
        } else {
            setSortIcon(allMethods['time'].icon);
            setSortName(allMethods['time'].name());
        }
    }, [ctx.selectedSort, trackGroup]);

    useEffect(() => {
        if (favoriteGroup && !ctx.selectedSort) {
            if (setSortFiles) {
                const files = ctx.favorites.mapObjs[favoriteGroup.name]?.wpts;
                if (files) {
                    setSortFiles(byTime(files, true));
                }
            } else if (setSortGroups) {
                const files = ctx.favorites.groups;
                if (files) {
                    setSortGroups(byTime(files, true, true));
                }
            }
        }
    }, [favoriteGroup, ctx.favorites]);

    function prevTrackMenu() {
        ctx.openGroups.pop();
        ctx.setOpenGroups([...ctx.openGroups]);
    }

    function getTitle() {
        if (type === TRACKS_TYPE) {
            return (
                <Typography id="se-cloud-name-track" component="div" className={styles.title}>
                    {trackGroup?.name === DEFAULT_GROUP_NAME || !trackGroup
                        ? t('shared_string_tracks')
                        : trackGroup?.name}
                </Typography>
            );
        } else if (type === FAVORITES_TYPE) {
            return (
                <Typography id="se-fav-group-name" component="div" className={styles.title}>
                    {favoriteGroup === DEFAULT_FAV_GROUP_NAME || !favoriteGroup
                        ? t('shared_string_favorites')
                        : favoriteGroup?.name}
                </Typography>
            );
        }
    }

    function disableSort() {
        if (ctx.loginUser) {
            if (type === TRACKS_TYPE) {
                return !trackGroup || trackGroup.files?.length === 0;
            } else if (type === FAVORITES_TYPE) {
                return ctx.favorites.groups?.length === 0;
            }
        }
        return true;
    }

    return (
        <>
            <AppBar position="static" className={styles.appbar}>
                <Toolbar className={styles.toolbar}>
                    {ctx.openGroups.length > 0 ? (
                        <IconButton
                            variant="contained"
                            id="se-back-folder-button"
                            type="button"
                            className={styles.appBarIcon}
                            onClick={prevTrackMenu}
                        >
                            <BackIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            variant="contained"
                            type="button"
                            className={styles.appBarIcon}
                            onClick={() => closeHeader({ ctx })}
                        >
                            <CloseIcon />
                        </IconButton>
                    )}
                    {getTitle()}
                    <Tooltip key={'sort_tracks'} title={`${t('sort_by')}: ${sortName}`} arrow placement="bottom-end">
                        <span>
                            <IconButton
                                id={`se-sort-button-${currentSortType}`}
                                variant="contained"
                                type="button"
                                className={styles.appBarIcon}
                                onClick={() => setOpenSort(true)}
                                ref={anchorEl}
                                disabled={disableSort()}
                            >
                                {sortIcon}
                            </IconButton>
                        </span>
                    </Tooltip>
                    {type === TRACKS_TYPE && (
                        <Tooltip key={'add_folder'} title={t('add_new_folder')} arrow placement="bottom-end">
                            <span>
                                <IconButtonWithPermissions
                                    id="se-add-folder"
                                    variant="contained"
                                    type="button"
                                    className={styles.appBarIcon}
                                    onClick={() => setOpenAddFolderDialog(true)}
                                >
                                    <AddFolderIcon />
                                </IconButtonWithPermissions>
                            </span>
                        </Tooltip>
                    )}
                    {type === TRACKS_TYPE && (
                        <Tooltip key={'import_track'} title={t('import_tracks')} arrow placement="bottom-end">
                            <span>
                                <CloudGpxUploader folder={trackGroup ? trackGroup?.fullName : DEFAULT_GROUP_NAME}>
                                    <IconButtonWithPermissions
                                        id="se-import-cloud-track"
                                        component="span"
                                        variant="contained"
                                        type="button"
                                        disabled={ctx.accountInfo?.account === FREE_ACCOUNT}
                                        className={styles.appBarIcon}
                                    >
                                        <ImportIcon />
                                    </IconButtonWithPermissions>
                                </CloudGpxUploader>
                            </span>
                        </Tooltip>
                    )}
                    {type === FAVORITES_TYPE && (
                        <Tooltip
                            key={'import_fav_group'}
                            title={t('web:import_favorite_groups')}
                            arrow
                            placement="bottom-end"
                        >
                            <span>
                                <FavoriteGroupUploader>
                                    <IconButton
                                        id="se-import-fav-group"
                                        component="span"
                                        variant="contained"
                                        type="button"
                                        className={styles.appBarIcon}
                                    >
                                        <ImportIcon />
                                    </IconButton>
                                </FavoriteGroupUploader>
                            </span>
                        </Tooltip>
                    )}
                </Toolbar>
            </AppBar>
            {openAddFolderDialog && (
                <AddFolderDialog trackGroup={trackGroup} setOpenAddFolderDialog={setOpenAddFolderDialog} />
            )}
            <SortMenu
                openSort={openSort}
                setOpenSort={setOpenSort}
                anchorEl={anchorEl}
                actions={
                    <SortActions
                        trackGroup={trackGroup}
                        favoriteGroup={favoriteGroup}
                        setSortFiles={setSortFiles}
                        setSortGroups={setSortGroups}
                        setOpenSort={setOpenSort}
                        setSortIcon={setSortIcon}
                        setSortName={setSortName}
                        markers={markers}
                    />
                }
            />
        </>
    );
}
