import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

export default function PersistentTabPanel({ tabId, selectedTabId, children }) {
    const [mounted, setMounted] = useState(false);

    if (tabId === selectedTabId || mounted) {
        mounted || setMounted(true);
        const hidden = tabId !== selectedTabId;
        return (
            <Typography hidden={hidden} component="span">
                <Box sx={{ px: 3, pt: 3, pb: 8 }}>{children}</Box>
            </Typography>
        );
    }

    return null;
}
