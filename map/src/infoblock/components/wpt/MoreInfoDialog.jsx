import { Box, IconButton, Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import { Dialog } from '@material-ui/core';
import React from 'react';

export default function MoreInfoDialog({ setOpenMoreDialog, title, content }) {
    return (
        <Dialog open={true} onClose={() => setOpenMoreDialog(false)}>
            <Box sx={{ overflowX: 'hidden' }} display="flex">
                <Box flexGrow={1}>
                    <DialogTitle>{title}</DialogTitle>
                </Box>
                <Box>
                    <IconButton onClick={() => setOpenMoreDialog(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>
            <DialogContent>
                <Typography>{content}</Typography>
            </DialogContent>
        </Dialog>
    );
}
