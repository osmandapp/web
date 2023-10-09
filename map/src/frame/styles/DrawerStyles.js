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
});

export default drawerStyles;
