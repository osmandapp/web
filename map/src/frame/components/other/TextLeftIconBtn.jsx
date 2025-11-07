import { Box, ListItemIcon, Typography } from '@mui/material';
import styles from '../items/items.module.css';
import GrayBtnWithBlueHover from '../btns/GrayBtnWithBlueHover';
import React from 'react';

export default function TextLeftIconBtn({ icon, text, desc = null, btnText, onClick }) {
    return (
        <Box className={styles.tipsItemWithBtn}>
            <Box display="flex" gap={1}>
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
            <GrayBtnWithBlueHover
                action={onClick}
                text={btnText}
                additionalStyle={{ ml: '48px', mr: 2, maxWidth: '280px' }}
            />
        </Box>
    );
}
