import { useContext, useState } from 'react';
import { FREE_ACCOUNT } from '../../manager/LoginManager';
import UnavailableActionAlert from '../../menu/errors/UnavailableActionAlert';
import { IconButton } from '@mui/material';
import LoginContext from '../../context/LoginContext';

export default function IconButtonWithPermissions({ onClick, className, ...props }) {
    const ltx = useContext(LoginContext);

    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const isDisabled = ltx.accountInfo?.account === FREE_ACCOUNT;

    const handleClick = () => {
        if (isDisabled) {
            setOpenDialog(true);
        } else if (onClick && typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <>
            <IconButton
                {...props}
                onClick={handleClick}
                sx={isDisabled ? { cursor: 'not-allowed', color: '#B3B3B3' } : {}}
            />
            <UnavailableActionAlert open={openDialog} onClose={handleCloseDialog} />
        </>
    );
}
