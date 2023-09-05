import { Box, IconButton, Tooltip } from '@mui/material';
import { getGpxTime } from '../../../context/TracksManager';
import { SortByAlpha, Update, History, CallMade, CallReceived } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const az = (a, b) => (a > b) - (a < b);

function byAlpha(files, reverse) {
    const sortedCopy = [...files].sort((a, b) => {
        const A = a.name;
        const B = b.name;
        return reverse ? (B > A) - (B < A) : (A > B) - (A < B);
    });
    return sortedCopy;
}

function byTime(files, reverse) {
    const sortedCopy = [...files].sort((a, b) => {
        const A = getGpxTime(a, reverse);
        const B = getGpxTime(b, reverse);
        if (A === B) {
            return az(a.name, b.name);
        }
        return reverse ? B - A : A - B;
    });
    return sortedCopy;
}

function byDistance(files, reverse) {
    const sortedCopy = [...files].sort((a, b) => {
        const A = a.analysis?.totalDistance ?? a.details?.analysis?.totalDistance ?? 0;
        const B = b.analysis?.totalDistance ?? b.details?.analysis?.totalDistance ?? 0;
        if (A === B) {
            return az(a.name, b.name);
        }
        return reverse ? B - A : A - B;
    });
    return sortedCopy;
}

const allMethods = {
    alpha: {
        reverse: false,
        callback: byAlpha,
        directIcon: <SortByAlpha fontSize="small" />,
        reverseIcon: <SortByAlpha fontSize="small" sx={{ transform: 'scaleX(-1) scaleY(-1)' }} />,
        alt: 'Sort alphabetically',
    },
    time: {
        default: true,
        reverse: true,
        callback: byTime,
        directIcon: <Update fontSize="small" />,
        reverseIcon: <History fontSize="small" />,
        alt: 'Sort by time',
    },
    distance: {
        reverse: true,
        callback: byDistance,
        directIcon: <CallMade fontSize="small" />,
        reverseIcon: <CallReceived fontSize="small" />,
        alt: 'Sort by distance',
    },
};

const defaultMethod = () => {
    for (let l in allMethods) {
        if (allMethods[l].default) {
            return allMethods[l];
        }
    }
    return allMethods[Object.keys(allMethods)[0]];
};

export default function Actions({ files, setSortFiles }) {
    const [currentMethod, setCurrentMethod] = useState(defaultMethod);

    useEffect(() => {
        setSortFiles(currentMethod.callback(files, currentMethod.reverse));
    }, [files, currentMethod]); // ensure that files[] is modified for Object.is() check

    function select(method) {
        const isCurrent = method.alt === currentMethod.alt;
        setCurrentMethod({ ...method, reverse: isCurrent ? !currentMethod.reverse : method.reverse });
    }

    const icons = [];

    if (files && files.length > 1) {
        for (let m in allMethods) {
            const method = allMethods[m];
            const isCurrent = method.alt === currentMethod.alt;
            const reverse = isCurrent ? currentMethod.reverse : method.reverse;
            const icon = reverse ? method.reverseIcon : method.directIcon;
            const color = isCurrent ? 'primary' : '';
            icons.push(
                <Tooltip key={m} title={method.alt} placement="top" arrow disableInteractive>
                    <IconButton color={color} onClick={() => select(method)}>
                        {icon}
                    </IconButton>
                </Tooltip>
            );
        }
    }

    return <Box sx={{ ml: 4 }}>{icons}</Box>;
}
