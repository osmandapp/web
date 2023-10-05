import { Box, Button, Collapse, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import { useRef, useContext, useEffect, useState, useMemo } from 'react';
import CloudTrackItem from './CloudTrackItem';

import Actions from './Actions';
import drawerStyles from '../../../styles/DrawerStyles';
import AppContext from '../../../../context/AppContext';
import PopperMenu from './PopperMenu';

export default function CloudTrackGroup({ index, group }) {
    const styles = drawerStyles();
    const ctx = useContext(AppContext);

    const [indexGroup, setIndexGroup] = useState(-1);
    const [tracksOpen, setTracksOpen] = useState(false);
    const [showTracks, setShowTracks] = useState([]);
    const [sortFiles, setSortFiles] = useState([]);
    const anchorEl = useRef(null);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const toggleTracksOpen = () => {
        setTracksOpen(!tracksOpen);
    };

    function addToCollection() {
        group.files.forEach((file) => {
            if (!ctx.gpxCollection.find((name) => name === file.name)) {
                ctx.gpxCollection.push(file.name);
            }
        });
        ctx.setGpxCollection([...ctx.gpxCollection]);
    }

    useEffect(() => {
        if (indexGroup !== -1) {
            if (showTracks.includes(indexGroup)) {
                showTracks.splice(showTracks.indexOf(indexGroup), 1);
            } else {
                showTracks.push(indexGroup);
            }
            setShowTracks([...showTracks]);
        }
    }, [tracksOpen, setTracksOpen]);

    const Buttons = () => {
        return (
            <div>
                {
                    <MenuItem
                        onClick={(e) => {
                            addToCollection();
                            e.stopPropagation();
                        }}
                    >
                        To Collection
                    </MenuItem>
                }
            </div>
        );
    };

    const trackItems = useMemo(() => {
        const items = [];
        (sortFiles.length > 0 ? sortFiles : group.files).map((file) => {
            items.push(<CloudTrackItem key={'cloudtrack-' + file.name} file={file} />);
        });
        return items;
    }, [sortFiles, group.files, group.files.length]);

    return (
        <div className={styles.drawerItem} key={'group' + group.name + index}>
            <MenuItem
                id={'se-menu-cloud-' + group.name}
                sx={{ ml: 3 }}
                divider
                onClick={(e) => {
                    if (e.target !== 'path') {
                        setIndexGroup(index);
                        toggleTracksOpen();
                    }
                }}
            >
                <ListItemIcon>
                    <CloudOutlinedIcon fontSize="small" sx={{ mb: '4px' }} />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="inherit" noWrap>
                        {group.name}
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
                        {group.files.length > 0 ? `${group.files.length}` : ''}
                    </Typography>
                </Button>
                <Box>
                    <PopperMenu anchorEl={anchorEl} open={open} setOpen={setOpen} Buttons={Buttons} />
                </Box>
                {group.files.length === 0 ? <></> : showTracks.length > 0 ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
            <Collapse in={showTracks.includes(index)} timeout="auto">
                <div style={{ maxHeight: '41vh', overflow: 'auto' }}>
                    <Actions files={group.files} setSortFiles={setSortFiles} />
                    {trackItems}
                </div>
            </Collapse>
        </div>
    );
}
