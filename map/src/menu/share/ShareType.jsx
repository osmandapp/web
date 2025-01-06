import styles from './share.module.css';
import { Box, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import MenuItemWithLines from '../components/MenuItemWithLines';
import React, { useRef, useState } from 'react';
import ActionsMenu from '../actions/ActionsMenu';
import DeleteShareFileDialog from './DeleteShareFileDialog';

export default function ShareType({ selectedShareType, setSelectedShareType, shareTypes }) {
    const anchorEl = useRef(null);
    const [openShareTypesMenu, setOpenShareTypesMenu] = useState(false);
    const [openDeleteShareFileDialog, setOpenDeleteShareFileDialog] = useState(false);

    return (
        <>
            <MenuItem
                id={'se-share-type'}
                className={styles.shareTypeSelect}
                onClick={() => setOpenShareTypesMenu(true)}
            >
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
                            <Typography
                                id={`se-share-type-${selectedShareType.name}`}
                                variant="body2"
                                className={styles.shareType}
                                noWrap
                            >
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
                    <Box id={'se-actions-share-type'}>
                        <Paper>
                            {Object.values(shareTypes).map((item) => {
                                return (
                                    <MenuItem
                                        id={`se-share-type-${item.name}`}
                                        key={item.key}
                                        onClick={() => {
                                            if (item.key === shareTypes.private.key) {
                                                setOpenDeleteShareFileDialog(true);
                                            } else {
                                                setSelectedShareType(item);
                                            }
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
            {openDeleteShareFileDialog && (
                <DeleteShareFileDialog
                    dialogOpen={openDeleteShareFileDialog}
                    setDialogOpen={setOpenDeleteShareFileDialog}
                    currentType={selectedShareType.key}
                    shareTypes={shareTypes}
                    setSelectedShareType={setSelectedShareType}
                />
            )}
        </>
    );
}
