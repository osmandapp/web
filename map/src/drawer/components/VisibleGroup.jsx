import { Box, Button, Collapse, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { ExpandLess, ExpandMore, Visibility } from '@mui/icons-material';
import { useRef, useContext, useEffect, useState, useMemo } from 'react';
import CloudTrackItem from './tracks/CloudTrackItem';
import { makeStyles } from '@material-ui/core/styles';
import LocalTrackItem from './tracks/LocalTrackItem';
import PopperMenu from './tracks/PopperMenu';
import AppContext from '../../context/AppContext';
import TracksManager from '../../manager/TracksManager';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

const useStyles = makeStyles({
    group: {
        minHeight: '50px !important',
        maxHeight: '50px !important',
    },
    item: {
        marginLeft: '5px',
    },
});

export default function VisibleGroup({ visibleTracks, setVisibleTracks }) {
    const ctx = useContext(AppContext);

    const classes = useStyles();
    const [visibleTracksOpen, setVisibleTracksOpen] = useState(false);
    const anchorEl = useRef(null);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    function getVisibleTracksLength() {
        let length = 0;
        if (visibleTracks.local && visibleTracks.local.length > 0) {
            length += visibleTracks.local.length;
        }
        if (visibleTracks.cloud && visibleTracks.cloud.length > 0) {
            length += visibleTracks.cloud.length;
        }
        return length;
    }

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
                {getVisibleTracksLength() !== 0 && (
                    <MenuItem
                        className={classes.popper}
                        onClick={(e) => {
                            clear();
                            e.stopPropagation();
                        }}
                    >
                        Clear
                    </MenuItem>
                )}
            </div>
        );
    };

    function addToCollection() {
        visibleTracks.local.forEach((file) => {
            if (!ctx.gpxCollection.find((name) => name === file.name)) {
                ctx.gpxCollection.push(file.name);
            }
        });
        visibleTracks.cloud.forEach((file) => {
            if (!ctx.gpxCollection.find((name) => name === file.name)) {
                ctx.gpxCollection.push(file.name);
            }
        });
        ctx.setGpxCollection([...ctx.gpxCollection]);
    }

    function clear() {
        // clear Visible Local Tracks
        if (visibleTracks.local.length > 0) {
            visibleTracks.local.forEach((file) =>
                ctx.localTracks.forEach((track) => {
                    if (track.name === file.name) {
                        track.selected = false; // unselect
                    }
                })
            );
            ctx.setLocalTracks([...ctx.localTracks]);
        }

        // clear Visible Cloud Tracks
        // close currently open Cloud track
        if (visibleTracks.cloud.length > 0) {
            visibleTracks.cloud.forEach((file) => {
                if (ctx.selectedGpxFile.name === file.name) {
                    ctx.setCurrentObjectType(null);
                    ctx.setSelectedGpxFile({});
                }
            });
            visibleTracks.cloud.forEach((file) => (ctx.gpxFiles[file.name].url = null)); // unselect
            ctx.setGpxFiles({ ...ctx.gpxFiles });
        }

        const empty = {
            local: [],
            cloud: [],
        };
        setVisibleTracks({ ...empty });

        localStorage.removeItem(TracksManager.TRACK_VISIBLE_FLAG); // clear saved list finally
    }

    useEffect(() => {
        let savedVisible = localStorage.getItem(TracksManager.TRACK_VISIBLE_FLAG);
        if (savedVisible) {
            localStorage.removeItem(TracksManager.TRACK_VISIBLE_FLAG);
        }
        let localNames = [];
        let cloudNames = [];
        visibleTracks.local.forEach((f) => {
            if (f.selected) {
                localNames.push({
                    name: f.name,
                    addTime: Date.now(),
                });
            }
        });
        visibleTracks.cloud.forEach((f) => {
            if (f.url) {
                cloudNames.push(f.name);
            }
        });

        localStorage.setItem(
            TracksManager.TRACK_VISIBLE_FLAG,
            JSON.stringify({
                local: localNames,
                cloud: cloudNames,
            })
        );
    }, [visibleTracks]);

    const localItems = useMemo(
        () =>
            visibleTracks.local.length > 0 &&
            visibleTracks.local
                .sort((a, b) => (a.name > b.name) - (a.name < b.name))
                .map((track, index) => {
                    return <LocalTrackItem className={classes.item} key={'vis-local-' + index} track={track} />;
                }),
        [visibleTracks.local, visibleTracks.local.length]
    );

    const cloudItems = useMemo(
        () =>
            visibleTracks.cloud.length > 0 &&
            visibleTracks.cloud
                .sort((a, b) => (a.name > b.name) - (a.name < b.name))
                .map((track, index) => {
                    return (
                        <CloudTrackItem
                            key={'vis-cloud-' + index}
                            className={classes.item}
                            customIcon={<CloudOutlinedIcon fontSize="small" sx={{ mb: '-3px', mr: 1 }} />}
                            file={track}
                        />
                    );
                }),
        [visibleTracks.cloud, visibleTracks.cloud.length]
    );

    return (
        <div>
            <MenuItem sx={{ ml: 3 }} className={classes.group} onClick={() => setVisibleTracksOpen(!visibleTracksOpen)}>
                <ListItemIcon>
                    <Visibility fontSize="small" sx={{ mb: '3px' }} />
                </ListItemIcon>
                <ListItemText> Visible </ListItemText>
                <Button
                    sx={{ borderRadius: 28, minWidth: '30px !important' }}
                    size="small"
                    ref={anchorEl}
                    onClick={(e) => {
                        handleToggle();
                        e.stopPropagation();
                    }}
                >
                    <Typography variant="body2" color="textSecondary">
                        {getVisibleTracksLength() > 0 ? `${getVisibleTracksLength()}` : ''}
                    </Typography>
                </Button>
                <Box>
                    <PopperMenu anchorEl={anchorEl} open={open} setOpen={setOpen} Buttons={Buttons} />
                </Box>
                {visibleTracksOpen ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
            <Collapse in={visibleTracksOpen} timeout="auto">
                <div style={{ maxHeight: '41vh', overflow: 'auto' }}>
                    {localItems}
                    {cloudItems}
                </div>
            </Collapse>
        </div>
    );
}
