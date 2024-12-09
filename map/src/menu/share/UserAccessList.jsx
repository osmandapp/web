import { Box } from '@mui/material';
import { APPROVED_ACCESS_TYPE } from './ShareFileMenu';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import UserAccessListItem from './UserAccessListItem';

export default function UserAccessList({ type, users }) {
    const ctx = useContext(AppContext);

    const [, height] = useWindowSize();

    const showOwner = type === APPROVED_ACCESS_TYPE;
    const currentUsers = users[type];

    return (
        <Box
            minWidth={ctx.infoBlockWidth}
            maxWidth={ctx.infoBlockWidth}
            sx={{ overflow: 'auto', overflowX: 'hidden', maxHeight: `${height - 120}px` }}
        >
            {showOwner && <UserAccessListItem userName={ctx.shareFile.sharedObj.owner} type={'Owner'} />}
            {currentUsers?.length > 0 &&
                currentUsers.map((user, index) => (
                    <UserAccessListItem key={index} userName={user.userName} type={type} />
                ))}
        </Box>
    );
}
