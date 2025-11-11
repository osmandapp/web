import { Box, ListItemIcon, Typography } from '@mui/material';
import styles from '../items/items.module.css';
import GrayBtnWithBlueHover from '../btns/GrayBtnWithBlueHover';
import React from 'react';

export default function TextLeftIconBtn({ icon, text, desc = null, btnText = null, onClick = null }) {
    const showButton = Boolean(btnText);

    return (
        <Box className={styles.tipsItemWithBtn} sx={{ alignItems: showButton ? 'center' : 'flex-start' }}>
            <Box display="flex" gap={1} width="100%">
                <ListItemIcon className={styles.tipsIcon}>{icon}</ListItemIcon>
                <Box>
                    <Typography sx={{ ml: 2 }} className={styles.mainBoldText}>
                        {text}
                    </Typography>
                    {desc && (
                        <Typography className={styles.addText} sx={{ ml: 2, mt: 1 }}>
                            {desc}
                        </Typography>
                    )}
                </Box>
            </Box>
            {showButton && (
                <GrayBtnWithBlueHover
                    action={onClick}
                    text={btnText}
                    additionalStyle={{ ml: '48px', mr: 2, maxWidth: '280px' }}
                />
            )}
        </Box>
    );
}
