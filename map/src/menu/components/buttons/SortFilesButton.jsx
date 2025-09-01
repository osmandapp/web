import { IconButton, Tooltip } from '@mui/material';
import styles from '../../trackfavmenu.module.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SortActions, { allMethods } from '../../actions/SortActions';
import AppContext from '../../../context/AppContext';
import { DEFAULT_FAV_GROUP_NAME } from '../../../manager/FavoritesManager';
import { ReactComponent as TimeIcon } from '../../../assets/icons/ic_action_time.svg';
import SortMenu from '../../actions/SortMenu';
import LoginContext from '../../../context/LoginContext';

export const TRACK_FILE_TYPE = 'tracks';
export const FAVORITE_FILE_TYPE = 'favorites';

export function getSelectedSort({
    trackGroup = null,
    favoriteGroup = null,
    customGroup = null,
    customGroupType = null,
    ctx,
    defaultMethod = null,
}) {
    if (trackGroup && ctx.selectedSort?.tracks) {
        return ctx.selectedSort.tracks[trackGroup.fullName];
    } else if (favoriteGroup && ctx.selectedSort?.favorites) {
        return ctx.selectedSort.favorites[
            favoriteGroup === DEFAULT_FAV_GROUP_NAME ? DEFAULT_FAV_GROUP_NAME : favoriteGroup.name
        ];
    } else if (customGroup && ctx.selectedSort?.custom) {
        return ctx.selectedSort.custom[customGroupType];
    }
    return defaultMethod;
}

export default function SortFilesButton({
    type = TRACK_FILE_TYPE,
    trackGroup = null,
    favoriteGroup = null,
    customGroup = null,
    customGroupType = 'analyzer',
    setSortGroups = null,
    setSortFiles = null,
    markers,
    smartf,
}) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const anchorEl = useRef(null);
    const [openSort, setOpenSort] = useState(false);
    const [sortName, setSortName] = useState(t('sort_last_modified'));
    const [sortIcon, setSortIcon] = useState(<TimeIcon />);

    // get selected sort method from cache
    const sortType = getSelectedSort({ trackGroup, favoriteGroup, customGroup, customGroupType, ctx });
    const currentSortType = sortType ? sortType : 'time';

    useEffect(() => {
        if (sortType) {
            setSortIcon(allMethods[sortType].icon);
            setSortName(allMethods[sortType].name());
        } else {
            setSortIcon(allMethods['time'].icon);
            setSortName(allMethods['time'].name());
        }
    }, [ctx.selectedSort, trackGroup, sortType]);

    function disableSort() {
        if (ltx.loginUser) {
            if (type === TRACK_FILE_TYPE) {
                if (customGroup) {
                    return !customGroup.files || customGroup.files.length <= 1;
                }
                return !trackGroup || (trackGroup.files?.length <= 1 && trackGroup.groupFiles?.length <= 1);
            } else if (type === FAVORITE_FILE_TYPE) {
                return ctx.favorites.groups?.length === 0;
            }
        }
        return true;
    }

    return (
        <>
            <Tooltip key={`sort_${type}`} title={`${t('sort_by')}: ${sortName}`} arrow placement="bottom-end">
                <span>
                    <IconButton
                        id={`se-sort-button-${currentSortType}-${type}`}
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
            <SortMenu
                openSort={openSort}
                setOpenSort={setOpenSort}
                anchorEl={anchorEl}
                actions={
                    <SortActions
                        trackGroup={trackGroup}
                        favoriteGroup={favoriteGroup}
                        customGroup={customGroup}
                        customGroupType={customGroupType}
                        setSortFiles={setSortFiles}
                        setSortGroups={setSortGroups}
                        setOpenSort={setOpenSort}
                        setSortIcon={setSortIcon}
                        setSortName={setSortName}
                        markers={markers}
                        smartf={smartf}
                    />
                }
            />
        </>
    );
}
