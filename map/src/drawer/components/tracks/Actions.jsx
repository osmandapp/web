import { IconButton } from '@mui/material';
import { getGpxTime } from '../../../context/AppContext';
import { Sort, SortByAlpha } from '@mui/icons-material';
import React, { useState } from 'react';

export default function Actions({ files, setSortFiles }) {
    const [alphaUp, setAlphaUp] = useState(false);
    const [timeUp, setTimeUp] = useState(true);

    return (
        <div>
            <IconButton
                sx={{ ml: 4 }}
                onClick={(e) => {
                    e.stopPropagation();
                    const sortedCopy = [...files].sort((f, s) => {
                        let ftime = getGpxTime(f);
                        let stime = getGpxTime(s);
                        if (ftime === stime) {
                            return f.name > s.name ? 1 : -1;
                        }
                        if (timeUp) {
                            return ftime > stime ? 1 : -1;
                        } else {
                            return ftime < stime ? 1 : -1;
                        }
                    });
                    setTimeUp(!timeUp);
                    setSortFiles(sortedCopy);
                }}
            >
                <Sort fontSize="small" />
            </IconButton>
            <IconButton
                onClick={(e) => {
                    e.stopPropagation();
                    const sortedCopy = [...files].sort((f, s) => {
                        if (alphaUp) {
                            return f.name > s.name ? 1 : -1;
                        } else {
                            return f.name < s.name ? 1 : -1;
                        }
                    });
                    setAlphaUp(!alphaUp);
                    setSortFiles(sortedCopy);
                }}
            >
                <SortByAlpha fontSize="small" />
            </IconButton>
        </div>
    );
}
