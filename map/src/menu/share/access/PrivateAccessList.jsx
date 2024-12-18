import { Box } from '@mui/material';
import UserAccessListItem from './UserAccessListItem';

export default function PrivateAccessList() {
    return (
        <Box>
            <UserAccessListItem showOwner={true} />
        </Box>
    );
}
