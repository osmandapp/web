import { Box } from '@mui/material';
import UserAccessListItem from './UserAccessListItem';
import DividerWithMargin from '../../components/dividers/DividerWithMargin';
import React from 'react';

export default function PublicAccessList() {
    return (
        <Box id={'se-public-access-list'}>
            <UserAccessListItem showOwner={true} />
            <DividerWithMargin margin={'64px'} />
            <UserAccessListItem anyone={true} />
        </Box>
    );
}
