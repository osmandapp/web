import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './tabpanels.module.css';

export default function PersistentTabPanel({ tabId, selectedTabId, children }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (tabId === selectedTabId && !mounted) {
            setMounted(true);
        }
    }, [tabId, selectedTabId]);

    if (!mounted && tabId !== selectedTabId) {
        return null;
    }

    const hidden = tabId !== selectedTabId;

    return (
        <Typography hidden={hidden} component="span" className={styles.tabPanel}>
            <Box className={styles.tabPanelContent} sx={{ px: 3, pt: 3, pb: 8 }}>
                {children}
            </Box>
        </Typography>
    );
}
