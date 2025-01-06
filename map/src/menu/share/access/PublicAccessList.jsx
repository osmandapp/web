import { Box } from '@mui/material';
import UserAccessListItem from './UserAccessListItem';

export default function PublicAccessList() {
    return (
        <Box id={'se-public-access-list'}>
            <UserAccessListItem showOwner={true} />
            <UserAccessListItem anyone={true} />
        </Box>
    );
}
