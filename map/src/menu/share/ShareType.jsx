import styles from './share.module.css';
import { Box, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import MenuItemWithLines from '../components/MenuItemWithLines';
import React, { useRef, useState } from 'react';
import ActionsMenu from '../actions/ActionsMenu';

export default function ShareType({ selectedShareType, setSelectedShareType, shareTypes }) {
    const anchorEl = useRef(null);
    const [openShareTypesMenu, setOpenShareTypesMenu] = useState(false);

    return (
        <>
            <MenuItem className={styles.shareTypeSelect} onClick={() => setOpenShareTypesMenu(true)}>
                <ListItemIcon className={styles.shareTypeIcon}>{selectedShareType.icon}</ListItemIcon>
                <ListItemText>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Typography className={styles.shareTypeText}>Access</Typography>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body2" className={styles.shareType} noWrap>
                                {selectedShareType.name}
                            </Typography>
                            <ExpandMore sx={{ color: 'var(--text-secondary)', ml: 1 }} ref={anchorEl} />
                        </div>
                    </div>
                </ListItemText>
            </MenuItem>
            <Box sx={{ ml: 8, mr: 2, mb: 2 }}>
                <MenuItemWithLines name={selectedShareType.info} maxLines={2} className={styles.shareTypeTextInfo} />
            </Box>
            <ActionsMenu
                open={openShareTypesMenu}
                setOpen={setOpenShareTypesMenu}
                anchorEl={anchorEl}
                actions={
                    <Box>
                        <Paper>
                            {Object.values(shareTypes).map((item) => {
                                return (
                                    <MenuItem
                                        key={item.key}
                                        onClick={() => {
                                            setSelectedShareType(item);
                                            setOpenShareTypesMenu(false);
                                        }}
                                    >
                                        {item.name}
                                    </MenuItem>
                                );
                            })}
                        </Paper>
                    </Box>
                }
            />
        </>
    );
}
