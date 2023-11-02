import {
    Box,
    Divider,
    FormControl,
    FormControlLabel,
    Icon,
    ListItem,
    ListItemText,
    Paper,
    Radio,
    RadioGroup,
} from '@mui/material';
import { getGpxTime } from '../../../manager/TracksManager';
import React, { forwardRef, useEffect, useState } from 'react';
import { ReactComponent as AscendingIcon } from '../../../assets/icons/ic_action_sort_by_name_ascending.svg';
import { ReactComponent as TimeIcon } from '../../../assets/icons/ic_action_time.svg';
import { ReactComponent as DescendingIcon } from '../../../assets/icons/ic_action_sort_by_name_descending.svg';
import { ReactComponent as LongToShortIcon } from '../../../assets/icons/ic_action_sort_duration_long_to_short.svg';
import { ReactComponent as ShortToLongIcon } from '../../../assets/icons/ic_action_sort_duration_short_to_long.svg';
import styles from '../trackmenu.module.css';

const az = (a, b) => (a > b) - (a < b);

function byAlpha(files, reverse) {
    return [...files].sort((a, b) => {
        const A = a.name;
        const B = b.name;
        return reverse ? (B > A) - (B < A) : (A > B) - (A < B);
    });
}

function byTime(files, reverse) {
    return [...files].sort((a, b) => {
        const A = getGpxTime(a, reverse);
        const B = getGpxTime(b, reverse);
        if (A === B) {
            return az(a.name, b.name);
        }
        return reverse ? B - A : A - B;
    });
}

function byDistance(files, reverse) {
    return [...files].sort((a, b) => {
        const A = a.analysis?.totalDistance ?? a.details?.analysis?.totalDistance ?? 0;
        const B = b.analysis?.totalDistance ?? b.details?.analysis?.totalDistance ?? 0;
        if (A === B) {
            return az(a.name, b.name);
        }
        return reverse ? B - A : A - B;
    });
}

const allMethods = {
    time: {
        default: true,
        reverse: true,
        callback: byTime,
        icon: <TimeIcon />,
        name: 'Sort by time',
    },
    az: {
        reverse: false,
        callback: byAlpha,
        icon: <AscendingIcon />,
        name: 'Name A - Z',
    },
    za: {
        reverse: true,
        callback: byAlpha,
        icon: <DescendingIcon />,
        name: 'Name Z - A',
    },
    longest: {
        reverse: true,
        callback: byDistance,
        icon: <LongToShortIcon />,
        name: 'Longest distance first',
    },
    shortest: {
        reverse: false,
        callback: byDistance,
        icon: <ShortToLongIcon />,
        name: 'Shortest distance first',
    },
};

const defaultMethod = () => {
    for (let l in allMethods) {
        if (allMethods[l].default) {
            return l;
        }
    }
    return Object.keys(allMethods)[0];
};

const SortActions = forwardRef(({ files, setSortFiles, groups, setSortGroups }, ref) => {
    const [currentMethod, setCurrentMethod] = useState(defaultMethod);

    useEffect(() => {
        setSortFiles(allMethods[currentMethod].callback(files, allMethods[currentMethod].reverse));
        if (currentMethod === 'az' || currentMethod === 'za') {
            setSortGroups(allMethods[currentMethod].callback(groups, allMethods[currentMethod].reverse));
        }
    }, [files, currentMethod]);

    const handleChange = (event) => {
        setCurrentMethod(event.target.value);
    };

    const Label = ({ item }) => {
        return (
            <ListItem sx={{ ml: '-24px' }}>
                <Icon className={styles.icon}>{item.icon}</Icon>
                <ListItemText className={styles.sortItem}>{item.name}</ListItemText>
            </ListItem>
        );
    };

    return (
        <Box sx={{ width: '297px' }} ref={ref}>
            <Paper>
                <FormControl>
                    <RadioGroup value={currentMethod} onChange={handleChange}>
                        <FormControlLabel
                            disableTypography={true}
                            labelPlacement="start"
                            value="time"
                            control={<Radio />}
                            label={<Label item={allMethods.time} />}
                        />
                        <Divider />
                        <FormControlLabel
                            disableTypography={true}
                            labelPlacement="start"
                            value="az"
                            control={<Radio />}
                            label={<Label item={allMethods.az} />}
                        />
                        <FormControlLabel
                            disableTypography={true}
                            labelPlacement="start"
                            value="za"
                            control={<Radio />}
                            label={<Label item={allMethods.za} />}
                        />
                        <Divider />
                        <FormControlLabel
                            disableTypography={true}
                            labelPlacement="start"
                            value="longest"
                            control={<Radio />}
                            label={<Label item={allMethods.longest} />}
                        />
                        <FormControlLabel
                            disableTypography={true}
                            labelPlacement="start"
                            value="shortest"
                            control={<Radio />}
                            label={<Label item={allMethods.shortest} />}
                        />
                    </RadioGroup>
                </FormControl>
            </Paper>
        </Box>
    );
});

SortActions.displayName = 'SortActions';
export default SortActions;
