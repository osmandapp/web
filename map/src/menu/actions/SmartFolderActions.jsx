import React, { forwardRef, useContext } from 'react';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import { ReactComponent as DownloadIcon } from '../../assets/icons/ic_action_gsave_dark.svg';
import { ReactComponent as ShowIcon } from '../../assets/icons/ic_show_on_map_outlined.svg';
import { useTranslation } from 'react-i18next';
import { apiPost } from '../../util/HttpApi';
import AppContext from '../../context/AppContext';
import { FIT_BOUNDS_MAX_ZOOM, openTrackOnMap, updateTracks } from '../../manager/track/TracksManager';
import { isEmpty } from 'lodash';
import { SHARE_FILE_TYPE, SHARE_TYPE } from '../share/shareConstants';

const SmartFolderActions = forwardRef(
    ({ files, type, subtype, setOpenActions, setProcessDownload, showAllTracks, setShowAllTracks }, ref) => {
        const { t } = useTranslation();
        const ctx = useContext(AppContext);

        async function downloadOsf() {
            setProcessDownload(true);
            const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/download-backup-folder`, [], {
                params: {
                    format: '.osf',
                    shared: true,
                    type: 'GPX',
                },
                headers: {
                    'Content-Type': 'application/json',
                },
                responseType: 'arraybuffer',
                throwErrors: true,
            }).catch(() => {
                setProcessDownload(false);
                ctx.setTrackErrorMsg({
                    title: 'Get OSF error',
                    msg: `We couldn't download osf for Shared With Me folder. Please contact us at support@osmand.net`,
                });
            });
            if (res.status === 200) {
                setProcessDownload(false);
                let name = res.headers['content-disposition'].split('filename=')[1];
                const url = document.createElement('a');
                url.href = URL.createObjectURL(new Blob([res.data], { type: 'octet/stream' }));
                url.download = name;
                url.click();
            }
        }

        async function downloadObf() {
            setProcessDownload(true);

            const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/download-obf`, [], {
                params: {
                    shared: true,
                    sharedType: 'GPX',
                },
                responseType: 'blob',
                throwErrors: true,
            }).catch(() => {
                setProcessDownload(false);
                ctx.setTrackErrorMsg({
                    title: 'Get OBF error',
                    msg: "We couldn't download obf for Shared With Me folder. Please contact us at support@osmand.net",
                });
            });

            if (res.status === 200) {
                setProcessDownload(false);
                const url = document.createElement('a');
                url.href = URL.createObjectURL(res.data);
                url.download = 'SharedWithMe.travel.obf';
                url.click();
            }
        }

        async function showAll({ show }) {
            if (type === SHARE_TYPE) {
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
        }

        return (
            <>
                <Box ref={ref}>
                    <Paper id="se-smart-folder-actions" className={styles.actions}>
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

SmartFolderActions.displayName = 'SmartFolderActions';
export default SmartFolderActions;
