import styles from './trackanalyzer.module.css';
import { Box, ListItemIcon, Typography } from '@mui/material';
import React from 'react';
import GrayBtnWithBlueHover from '../../frame/components/btns/GrayBtnWithBlueHover';

export default function ErrorBlock({ icon, text, desc = null, btnText, onClick, style = true }) {
    const iconStyles = style ? styles.errorIcon : undefined;
    const titleStyles = style ? styles.errorTitle : undefined;
    const textStyles = style ? styles.errorText : undefined;

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
            <GrayBtnWithBlueHover
                action={onClick}
                text={btnText}
                additionalStyle={{ mt: 2, ml: '48px', mr: 2, maxWidth: '280px' }}
            />
        </Box>
    );
}
