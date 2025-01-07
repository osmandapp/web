import { Box } from '@mui/material';
import UserAccessListItem from './UserAccessListItem';

export default function PrivateAccessList() {
    return (
        <Box id={'se-private-access-list'}>
            <UserAccessListItem showOwner={true} />
        </Box>
    );
}
