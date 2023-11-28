import { AppBar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import CloudGpxUploader from '../../frame/components/util/CloudGpxUploader';
import React, { useContext, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import { ReactComponent as TimeIcon } from '../../assets/icons/ic_action_time.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/ic_action_close.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as ImportIcon } from '../../assets/icons/ic_action_folder_import_outlined.svg';
import { ReactComponent as AddFolderIcon } from '../../assets/icons/ic_action_folder_add_outlined.svg';
import { MENU_INFO_CLOSE_SIZE } from '../../manager/GlobalManager';
import styles from '../tracks/trackmenu.module.css';
import { DEFAULT_GROUP_NAME } from '../../manager/track/TracksManager';
import { FREE_ACCOUNT } from '../../manager/LoginManager';
import AddFolderDialog from '../../dialogs/tracks/AddFolderDialog';
import SortActions from './SortActions';
import SortMenu from './SortMenu';
import { DEFAULT_FAV_GROUP_NAME } from '../../manager/FavoritesManager';

export default function GroupHeader({
    trackGroup = null,
    favoriteGroup = null,
    setSortGroups = null,
    setSortFiles = null,
}) {
    const ctx = useContext(AppContext);

    const [openAddFolderDialog, setOpenAddFolderDialog] = useState(false);
    const [openSort, setOpenSort] = useState(false);
    const [sortName, setSortName] = useState('Last modified');
    const [sortIcon, setSortIcon] = useState(<TimeIcon />);
    const [selectedSort, setSelectedSort] = useState(null);
    const anchorEl = useRef(null);

    function closeTrackMenu() {
        ctx.setInfoBlockWidth(MENU_INFO_CLOSE_SIZE);
    }

    function prevTrackMenu() {
        ctx.openGroups.pop();
        ctx.setOpenGroups([...ctx.openGroups]);
    }

    function getTitle() {
        if (trackGroup) {
            return (
                <Typography id="se-cloud-track-name" component="div" className={styles.title}>
                    {trackGroup?.name === DEFAULT_GROUP_NAME ? 'Tracks' : trackGroup?.name}
                </Typography>
            );
        } else if (favoriteGroup) {
            return (
                <Typography id="se-fav-group-name" component="div" className={styles.title}>
                    {favoriteGroup === DEFAULT_FAV_GROUP_NAME ? 'Favorites' : favoriteGroup?.name}
                </Typography>
            );
        }
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
                            onClick={closeTrackMenu}
                        >
                            <CloseIcon />
                        </IconButton>
                    )}
                    {getTitle()}
                    <Tooltip key={'sort_tracks'} title={`Sort by: ${sortName}`} arrow placement="bottom-end">
                        <span>
                            <IconButton
                                variant="contained"
                                type="button"
                                className={styles.appBarIcon}
                                onClick={() => setOpenSort(true)}
                                ref={anchorEl}
                                disabled={!trackGroup || trackGroup?.files?.length === 0}
                            >
                                {sortIcon}
                            </IconButton>
                        </span>
                    </Tooltip>
                    {trackGroup && (
                        <Tooltip key={'add_folder'} title="Add folder" arrow placement="bottom-end">
                            <span>
                                <IconButton
                                    id="se-add-folder"
                                    variant="contained"
                                    type="button"
                                    className={styles.appBarIcon}
                                    onClick={() => setOpenAddFolderDialog(true)}
                                    ref={anchorEl}
                                    disabled={
                                        !trackGroup ||
                                        trackGroup?.files?.length === 0 ||
                                        ctx.accountInfo?.account === FREE_ACCOUNT
                                    }
                                >
                                    <AddFolderIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                    )}
                    <Tooltip key={'import_track'} title="Import track" arrow placement="bottom-end">
                        <span>
                            <CloudGpxUploader folder={trackGroup?.fullName}>
                                <IconButton
                                    id="se-import-cloud-track"
                                    component="span"
                                    variant="contained"
                                    type="button"
                                    disabled={favoriteGroup !== null || ctx.accountInfo?.account === FREE_ACCOUNT}
                                    className={styles.appBarIcon}
                                >
                                    <ImportIcon />
                                </IconButton>
                            </CloudGpxUploader>
                        </span>
                    </Tooltip>
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
                        files={trackGroup?.groupFiles}
                        setSortFiles={setSortFiles}
                        groups={ctx.tracksGroups}
                        setSortGroups={setSortGroups}
                        setOpenSort={setOpenSort}
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
                        setSortIcon={setSortIcon}
                        setSortName={setSortName}
                    />
                }
            />
        </>
    );
}
