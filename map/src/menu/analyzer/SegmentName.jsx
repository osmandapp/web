import { Box } from '@mui/material';
import React from 'react';

export default function SegmentName({ segment }) {
    return (
        <>
            <Box
                component="span"
                sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    flexGrow: 1,
                    minWidth: 0,
                }}
            >
                {segment.name}
            </Box>
            <Box component="span" sx={{ flexShrink: 0, marginLeft: '4px' }}>
                {segment.allInd > 1 ? `(${segment.trackInd + 1}/${segment.allInd})` : ''}
            </Box>
        </>
    );
}
