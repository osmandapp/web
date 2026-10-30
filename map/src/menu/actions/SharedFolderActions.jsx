import React, { forwardRef, useContext } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import { ReactComponent as DownloadIcon } from '../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as ShowIcon } from '../../assets/icons/ic_show_on_map_outlined.svg';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import {
    downloadObfCollection,
    downloadOsfBackup,
    FIT_BOUNDS_MAX_ZOOM,
    openTrackOnMap,
    updateTracks,
} from '../../manager/track/TracksManager';
import { GPX } from '../../manager/GlobalManager';
import isEmpty from 'lodash-es/isEmpty';
import { SHARE_FILE_TYPE, SHARE_TYPE } from '../share/shareConstants';
import { useRecentDataSaver } from '../../util/hooks/menu/useRecentDataSaver';

const SharedFolderActions = forwardRef(
    ({ files, subtype, setOpenActions, setProcessDownload, showAllTracks, setShowAllTracks }, ref) => {
        const { t } = useTranslation();
        const ctx = useContext(AppContext);
        const recentSaver = useRecentDataSaver();

        async function downloadOsf() {
            await downloadOsfBackup({
                params: {
                    shared: true,
                },
                displayName: t('web:shared_with_me'),
                ctx,
                setProcessDownload,
            });
        }

        async function downloadObf() {
            await downloadObfCollection({
                params: {
                    shared: true,
                    sharedType: GPX,
                },
                fileName: 'SharedWithMe.travel.obf',
                displayName: t('web:shared_with_me'),
                ctx,
                setProcessDownload,
            });
        }

        async function showAll({ show }) {
            setShowAllTracks(show);
            const promises = Object.values(files).map((file) =>
                openTrackOnMap({
                    file,
                    showOnMap: show,
                    showInfo: false,
                    zoomToTrack: false,
                    smartf: { type: SHARE_TYPE },
                    ctx,
                    returnOneTrack: true,
                    recentSaver,
                })
            );
            const resultsArray = await Promise.all(promises);
            const results = Object.assign({}, ...resultsArray);
            if (!isEmpty(results)) {
                updateTracks(ctx, { type: SHARE_TYPE }, results);
                ctx.setFitBoundsShareTracks({
                    type: SHARE_FILE_TYPE,
                    zoom: FIT_BOUNDS_MAX_ZOOM,
                });
            }
        }

        return (
            <>
                <Box ref={ref}>
                    <Paper id="se-shared-folder-actions" className={styles.actions}>
                        {subtype === 'track' && (
                            <MenuItem
                                disabled={files.realSize === 0}
                                className={styles.action}
                                onClick={() => {
                                    showAll({ show: !showAllTracks }).then();
                                    setOpenActions(false);
                                }}
                            >
                                <ListItemIcon className={styles.iconAction}>
                                    <ShowIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant="inherit" className={styles.actionName} noWrap>
                                        {showAllTracks
                                            ? t('web:hide_all_tracks_from_map')
                                            : t('web:show_all_tracks_on_map')}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                        )}
                        {subtype === 'track' && <Divider className={styles.dividerActions} />}
                        <MenuItem
                            disabled={files.realSize === 0}
                            className={styles.action}
                            onClick={() => {
                                downloadOsf().then();
                                setOpenActions(false);
                            }}
                        >
                            <ListItemIcon className={styles.iconAction}>
                                <DownloadIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant="inherit" className={styles.actionName} noWrap>
                                    {t('web:download_as_osf')}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem
                            disabled={files.realSize === 0}
                            className={styles.action}
                            onClick={() => {
                                downloadObf().then();
                                setOpenActions(false);
                            }}
                        >
                            <ListItemIcon className={styles.iconAction}>
                                <DownloadIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant="inherit" className={styles.actionName} noWrap>
                                    {t('web:download_as_obf')}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    </Paper>
                </Box>
            </>
        );
    }
);

SharedFolderActions.displayName = 'SharedFolderActions';
export default SharedFolderActions;
