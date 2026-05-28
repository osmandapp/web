import React, { forwardRef } from 'react';
import { Box, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ic_action_delete_outlined.svg';
import styles from '../trackfavmenu.module.css';

const LiveTrackItemActions = forwardRef(({ handleDelete }, ref) => {
    const { t } = useTranslation();

    return (
        <Box ref={ref}>
            <Paper id="se-live-track-item-actions" className={styles.actions}>
                <MenuItem id="se-live-track-item-actions-delete" className={styles.action} onClick={handleDelete}>
                    <ListItemIcon className={styles.iconAction}>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography className={styles.actionName} noWrap>
                            {t('web:live_track_delete')}
                        </Typography>
                    </ListItemText>
                </MenuItem>
            </Paper>
        </Box>
    );
});
LiveTrackItemActions.displayName = 'LiveTrackItemActions';

export default LiveTrackItemActions;
