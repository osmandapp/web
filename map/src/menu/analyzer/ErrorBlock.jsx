import styles from './trackanalyzer.module.css';
import { Box, Button, ListItemIcon, Typography } from '@mui/material';
import loginStyles from '../login/login.module.css';
import React from 'react';

export default function ErrorBlock({ icon, text, desc = null, btnText, onClick, style = true }) {
    const iconStyles = style ? styles.errorIcon : {};
    const titleStyles = style ? styles.errorTitle : {};
    const textStyles = style ? styles.errorText : {};

    return (
        <Box className={styles.processingBlock}>
            <Box display="flex" gap={1}>
                <ListItemIcon sx={desc ? { mt: -1.5 } : {}} className={iconStyles}>
                    {icon}
                </ListItemIcon>
                <Box>
                    <Typography sx={style ? { ml: 3 } : { ml: -2 }} className={titleStyles}>
                        {text}
                    </Typography>
                    {desc && (
                        <Typography className={textStyles} sx={{ ml: 3, mt: 1 }}>
                            {desc}
                        </Typography>
                    )}
                </Box>
            </Box>
            <Button
                className={loginStyles.button}
                sx={{ mt: 2, ml: '48px', mr: 2, maxWidth: '280px' }}
                onClick={onClick}
            >
                {btnText}
            </Button>
        </Box>
    );
}
