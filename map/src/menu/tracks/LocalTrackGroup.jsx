import { Box, Button, ButtonGroup, Collapse, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { ExpandLess, ExpandMore, Folder } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import LocalTrackItem from './LocalTrackItem';
import drawerStyles from '../../frame/styles/DrawerStyles';
import TracksManager, { clearAllLocalTracks } from '../../manager/track/TracksManager';
import PopperMenu from './PopperMenu';
import { confirm } from '../../dialogs/GlobalConfirmationDialog';
import LocalGpxUploader from '../../frame/components/util/LocalGpxUploader';

export default function LocalTrackGroup() {
    const styles = drawerStyles();

    const ctx = useContext(AppContext);

    const [localGpxOpen, setLocalGpxOpen] = useState(true);
    const anchorEl = React.useRef(null);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    function clearLocalTracks() {
        confirm({
            ctx,
            text: 'Remove all Local tracks?',
            callback: () => clearAllLocalTracks(ctx),
        });
    }

    const Buttons = () => {
        return (
            <div>
                {ctx.localTracks.length !== 0 && (
                    <MenuItem
                        onClick={(e) => {
                            clearLocalTracks();
                            e.stopPropagation();
                        }}
                    >
                        Clear
                    </MenuItem>
                )}
            </div>
        );
    };

    return (
        <div className={styles.drawerItem}>
            <MenuItem sx={{ ml: 3, mb: 1 }} divider onClick={() => setLocalGpxOpen(!localGpxOpen)}>
                <ListItemIcon>
                    <Folder fontSize="small" sx={{ mb: '4px' }} />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="inherit" noWrap>
                        Local
                    </Typography>
                </ListItemText>
                <Button
                    sx={{ borderRadius: 28, minWidth: '30px !important' }}
                    size="small"
                    ref={anchorEl}
                    onClick={(e) => {
                        handleToggle();
                        ctx.setOpenedPopper(anchorEl);
                        e.stopPropagation();
                    }}
                >
                    <Typography variant="body2" color="textSecondary">
                        {ctx.localTracks.length > 0 ? `${ctx.localTracks.length}` : ''}
                    </Typography>
                </Button>
                <Box>
                    <PopperMenu anchorEl={anchorEl} open={open} setOpen={setOpen} Buttons={Buttons} />
                </Box>
                {localGpxOpen ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
            <Collapse in={localGpxOpen} timeout="auto">
                <div style={{ maxHeight: '39vh', overflow: 'auto' }}>
                    {ctx.localTracks.length > 0 &&
                        ctx.localTracks.map((track) => {
                            return <LocalTrackItem key={'localtrack-' + track.name} track={track} />;
                        })}
                </div>
                <ButtonGroup variant="text" sx={{ mt: 1, ml: 2 }}>
                    <Button
                        className={styles.button}
                        sx={{ ml: 3, fontSize: 11, textAlign: 'center' }}
                        variant="contained"
                        component="span"
                        onClick={() => TracksManager.createTrack(ctx)}
                    >
                        Create track
                    </Button>
                    <LocalGpxUploader>
                        <Button
                            className={styles.button}
                            variant="contained"
                            component="span"
                            sx={{ fontSize: 11, ml: 2 }}
                        >
                            Import track
                        </Button>
                    </LocalGpxUploader>
                </ButtonGroup>
            </Collapse>
        </div>
    );
}
