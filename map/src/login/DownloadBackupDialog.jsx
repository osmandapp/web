import Dialog from '@mui/material/Dialog';
import {
    Alert,
    Button,
    Collapse,
    Grid,
    IconButton,
    LinearProgress,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { Close, ExpandLess, ExpandMore } from '@mui/icons-material';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { Checkbox } from '@mui/material/';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import { apiPost } from '../util/HttpApi';

export default function DownloadBackupDialog({ openDownloadBackupDialog, setOpenDownloadBackupDialog, widthDialog }) {
    const ctx = useContext(AppContext);
    const useStyles = makeStyles(() => ({
        paper: { maxWidth: `${widthDialog}px`, minWidth: `${widthDialog}px` },
    }));

    const classes = useStyles();

    const userPlaces = [
        'FAVOURITES',
        'GPX',
        'SEARCH_HISTORY',
        'OSM_NOTES',
        'OSM_EDITS',
        'ACTIVE_MARKERS',
        'HISTORY_MARKERS',
        'SEARCH_HISTORY',
        'ITINERARY_GROUPS',
    ];
    const settings = ['PROFILE', 'GLOBAL', 'QUICK_ACTIONS', 'AVOID_ROADS', 'POI_UI_FILTERS'];
    const resources = ['ONLINE_ROUTING_ENGINES'];
    const maps = ['MAP_SOURCES', 'FILE_MAPS', 'FILE_SRTM', 'FILE_ROADS', 'FILE_TILES', 'FILE_WIKI'];
    const menuType = ['My places', 'Settings', 'Resources', 'Maps'];

    const FILE_TYPE = 'FILE';
    const BACKUP_TYPE_ZIP = '.zip';
    const BACKUP_TYPE_OSF = '.osf';
    const LOADING_TIME_ONE_FILE = 80;

    const [openedList, setOpenedList] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [categories, setCategories] = useState({});
    const [backupData, setBackupData] = useState(null);
    const [loadingBackup, setLoadingBackup] = useState(false);
    const [errorBackup, setErrorBackup] = useState(null);
    const [backupType, setBackupType] = useState(BACKUP_TYPE_OSF);
    const [progress, setProgress] = useState(0);
    const [stopProgress, setStopProgress] = useState(false);

    const handleBackupType = (event, selectedType) => {
        setBackupType(selectedType);
    };

    useEffect(() => {
        if (openDownloadBackupDialog && _.isEmpty(categories)) {
            let groups = getCategoryGroups();
            groups = prepareFileGroups(groups);
            setCategories(groups);
            let res = [];
            menuType.forEach((type) => {
                if (type !== 'Maps') {
                    res = res.concat(selectAllCategory(type, groups));
                }
            });
            setSelectedCategories(res);
        }
    }, [openDownloadBackupDialog]);

    useEffect(() => {
        if (!_.isEmpty(selectedCategories)) {
            let data = [];
            let size = 0;
            let count = 0;
            Object.keys(categories).forEach((k) => {
                Object.keys(categories[k]).forEach((sk) => {
                    if (selectedCategories.includes(sk)) {
                        data.push(sk);
                        size += categories[k][sk].size;
                        count += categories[k][sk].count;
                    }
                });
            });
            menuType.forEach((t) => {
                const ind = data.indexOf(t);
                if (ind !== -1) {
                    data.splice(data.indexOf(t), 1);
                }
            });
            setBackupData({
                data: data,
                size: size,
                count: count,
            });
        } else {
            setBackupData(null);
        }
    }, [selectedCategories]);

    function handleClick(e, k) {
        e.stopPropagation();
        if (e.target.nodeName !== 'INPUT') {
            if (openedList === k) {
                setOpenedList('');
            } else {
                setOpenedList(k);
            }
        }
    }

    function getCategoryGroups() {
        let groups = {};
        ctx.listFiles.uniqueFiles.forEach((file) => {
            let type = _.cloneDeep(file.type);
            if (type === FILE_TYPE) {
                type = getTypeByName(type, file.name);
            }
            if (!groups[type]) {
                groups[type] = {
                    size: 0,
                    count: 0,
                };
            }
            groups[type].size += file.filesize;
            groups[type].count++;
        });
        return groups;
    }

    function getTypeByName(type, fileName) {
        if (type === FILE_TYPE) {
            if (fileName.includes('/')) {
                const subType = fileName.split('/')[0];
                return `${FILE_TYPE}_${subType.toUpperCase()}`;
            } else if (fileName.endsWith('.obf')) {
                return `${FILE_TYPE}_MAPS`;
            }
        }
        return `${FILE_TYPE}_OTHER`;
    }

    function prepareType(type) {
        if (type.startsWith(`${FILE_TYPE}_`)) {
            type = type.split(`${FILE_TYPE}_`)[1];
        }
        type = type.replaceAll('_', ' ').toLowerCase();
        return type.charAt(0).toUpperCase() + type.slice(1);
    }

    function prepareFileGroups(groups) {
        let res = {
            [menuType[0]]: null,
            [menuType[1]]: null,
            [menuType[2]]: null,
            [menuType[3]]: null,
        };
        let names = Object.keys(groups);
        names.forEach((n) => {
            if (userPlaces.includes(n)) {
                addToGeneralGroup([menuType[0]], res, n, groups);
            } else if (settings.includes(n)) {
                addToGeneralGroup([menuType[1]], res, n, groups);
            } else if (maps.includes(n)) {
                addToGeneralGroup([menuType[3]], res, n, groups);
            } else if (resources.includes(n) || n.startsWith(`${FILE_TYPE}_`)) {
                addToGeneralGroup([menuType[2]], res, n, groups); // add Maps to the end of the list
            }
        });
        // remove empty category
        Object.keys(res).forEach((t) => {
            if (!res[t]) {
                delete res[t];
            }
        });
        return res;
    }

    function addToGeneralGroup(generalGroupName, res, groupName, groups) {
        if (!res[generalGroupName]) {
            res[generalGroupName] = {};
        }
        res[generalGroupName][groupName] = groups[groupName];
        return res;
    }

    function selectCategory(k, e) {
        e.stopPropagation();
        if (selectedCategories.includes(k)) {
            if (categories[k]) {
                selectedCategories.splice(selectedCategories.indexOf(k), 1);
                Object.keys(categories[k]).forEach((cat) => {
                    selectedCategories.splice(selectedCategories.indexOf(cat), 1);
                });
            } else {
                selectedCategories.splice(selectedCategories.indexOf(k), 1);
                Object.keys(categories).forEach((category) => {
                    Object.keys(categories[category]).forEach((sk) => {
                        if (sk === k && selectedCategories.includes(category)) {
                            selectedCategories.splice(selectedCategories.indexOf(category), 1);
                        }
                    });
                });
            }
            setSelectedCategories([...selectedCategories]);
        } else {
            let list = [...selectedCategories];
            list.push(k);
            if (categories[k]) {
                Object.keys(categories[k]).forEach((cat) => {
                    if (!selectedCategories.includes(cat)) {
                        list.push(cat);
                    }
                });
            }
            setSelectedCategories(list);
        }
    }

    function selectAllCategory(type, groups) {
        let res = [];
        res.push(type);
        if (groups[type]) {
            Object.keys(groups[type]).forEach((cat) => {
                if (!selectedCategories.includes(cat)) {
                    res.push(cat);
                }
            });
        }
        return res;
    }

    function getTypeSize(size) {
        const kb = size / 1024.0;
        if (Math.trunc(kb / 1024.0)) {
            return `${(kb / 1024.0).toFixed(1)} MB`;
        } else {
            return `${kb.toFixed(1)} KB`;
        }
    }

    function getSumSize(category) {
        let sum = 0;
        Object.keys(category).forEach((k) => {
            sum += category[k].size;
        });
        return sum;
    }

    async function downloadBackup() {
        if (backupData) {
            setErrorBackup(null);
            setLoadingBackup(true);
            const resp = await apiPost(
                `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-backup`,
                backupData.data,
                {
                    throwErrors: true,
                    params: {
                        format: backupType,
                    },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    responseType: 'arraybuffer',
                }
            ).catch(() => {
                setLoadingBackup(false);
                setErrorBackup(`We couldn't create your backup. Please contact us at support@osmand.net`);
            });

            if (resp.status === 200) {
                setLoadingBackup(false);
                let name = resp.headers['content-disposition'].split('filename=')[1];
                const url = document.createElement('a');
                url.href = URL.createObjectURL(new Blob([resp.data], { type: 'octet/stream' }));
                url.download = `${name}`;
                url.click();
            }
        }
    }

    useEffect(() => {
        if (loadingBackup && !stopProgress) {
            const timer = setInterval(() => {
                const maxTime = backupData?.count * LOADING_TIME_ONE_FILE;
                setProgress((oldProgress) => {
                    if (oldProgress === 100) {
                        setStopProgress(true);
                        return 0;
                    }
                    const diff = 100;
                    let oldTime = (oldProgress * maxTime) / 100;
                    let newTime = Math.min(oldTime + diff, maxTime);
                    return (newTime * 100) / maxTime;
                });
            }, 100);

            return () => {
                clearInterval(timer);
            };
        }
    }, [loadingBackup]);

    function getBackupTime() {
        const time = (backupData?.count * LOADING_TIME_ONE_FILE) / 60000;
        if (time < 1) {
            return ` Download time less than 1 minutes`;
        } else {
            return ` Download time ${time.toFixed(1)} minutes`;
        }
    }

    return (
        <Dialog
            classes={{ paper: classes.paper }}
            open={openDownloadBackupDialog}
            onClose={() => setOpenDownloadBackupDialog(false)}
        >
            {loadingBackup && !stopProgress && (
                <LinearProgress sx={{ height: '8px' }} variant="determinate" value={progress} size={20} />
            )}
            {loadingBackup && stopProgress && <LinearProgress sx={{ height: '8px' }} size={20} />}
            <Grid container spacing={2}>
                <Grid item xs={11} sx={{ mb: -3 }}>
                    <DialogTitle>Select the data to be exported</DialogTitle>
                </Grid>
                <Grid item xs={1} sx={{ ml: -2, mt: 1 }}>
                    <IconButton
                        variant="contained"
                        type="button"
                        onClick={() => {
                            setOpenDownloadBackupDialog(false);
                        }}
                    >
                        <Close fontSize="small" />
                    </IconButton>
                </Grid>
            </Grid>
            <DialogContent>
                {Object.keys(categories).map((k) => {
                    return (
                        <React.Fragment key={'download_backup_' + k}>
                            <ListItem key={k} sx={{ mb: -2 }} onClick={(e) => handleClick(e, k)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={selectedCategories.includes(k)}
                                        onChange={(e) => selectCategory(k, e)}
                                    />
                                </ListItemIcon>
                                <ListItemText sx={{ ml: -3 }} primary={k} />
                                <Typography variant="caption" color="textSecondary">
                                    {getTypeSize(getSumSize(categories[k]))}
                                </Typography>
                                {k === openedList ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={k === openedList} timeout="auto" unmountOnExit>
                                <List sx={{ ml: 4 }} component="div" disablePadding>
                                    {Object.keys(categories[k]).map((sk) => {
                                        return (
                                            <ListItem sx={{ mb: -2 }} key={sk}>
                                                <ListItemIcon>
                                                    <Checkbox
                                                        edge="start"
                                                        checked={selectedCategories.includes(sk)}
                                                        onChange={(e) => selectCategory(sk, e)}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText sx={{ ml: -3 }} primary={prepareType(sk)} />
                                                <Typography variant="caption" color="textSecondary">
                                                    {getTypeSize(categories[k][sk].size)}
                                                </Typography>
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </Collapse>
                        </React.Fragment>
                    );
                })}
                <Typography variant="caption" color="textSecondary">
                    {errorBackup}
                </Typography>
            </DialogContent>
            <ToggleButtonGroup
                color="primary"
                value={backupType}
                exclusive
                fullWidth={true}
                onChange={handleBackupType}
                aria-label="Platform"
            >
                <ToggleButton value={BACKUP_TYPE_ZIP}>ZIP</ToggleButton>
                <ToggleButton value={BACKUP_TYPE_OSF}>OSF</ToggleButton>
            </ToggleButtonGroup>
            <DialogActions style={{ justifyContent: 'space-between' }}>
                <Alert sx={{ backgroundColor: 'transparent !important' }} severity="info">
                    {backupData && getBackupTime()}
                </Alert>
                <Button variant="contained" disabled={!backupData} onClick={() => downloadBackup()}>
                    {`Download backup`}
                    {backupData && ` (${getTypeSize(backupData?.size)})`}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
