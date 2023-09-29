import { makeStyles } from '@material-ui/core/styles';

const drawerStyles = makeStyles({
    drawerItem: {
        '& .MuiMenuItem-root': {
            minHeight: '50px !important',
            maxHeight: '50px !important',
        },
    },
    button: {
        maxWidth: '120px !important',
        maxHeight: '40px',
        minWidth: '120px !important',
        minHeight: '40px',
    },
    logo: {
        '& .MuiSvgIcon-root': {
            width: '32px !important',
            height: '32px !important',
        },
        ml: -1,
        mt: -0.5,
    },
});

export default drawerStyles;
