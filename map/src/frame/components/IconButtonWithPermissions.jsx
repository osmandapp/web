import { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { FREE_ACCOUNT } from '../../manager/LoginManager';
import UnavailableActionAlert from '../../menu/errors/UnavailableActionAlert';
import { IconButton } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    disabledIconButton: {
        cursor: 'not-allowed',
        fill: '#B3B3B3',
    },
});

export default function IconButtonWithPermissions({ onClick, className, ...props }) {
    const ctx = useContext(AppContext);
    const classes = useStyles();

    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const isDisabled = ctx.accountInfo?.account === FREE_ACCOUNT;

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
                className={isDisabled ? classes.disabledIconButton : className || ''}
                onClick={handleClick}
            />
            <UnavailableActionAlert open={openDialog} onClose={handleCloseDialog} />
        </>
    );
}
