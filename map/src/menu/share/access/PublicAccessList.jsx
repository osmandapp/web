import { Box } from '@mui/material';
import UserAccessListItem from './UserAccessListItem';

export default function PublicAccessList() {
    return (
        <Box>
            <UserAccessListItem showOwner={true} />
            <UserAccessListItem anyone={true} />
        </Box>
    );
}
