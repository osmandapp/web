import { makeStyles } from '@material-ui/core/styles';

const favoriteEditMenuStyles = makeStyles({
    shape: {
        '& .background': {
            left: '-30px',
            top: '2px',
            width: '80px',
            height: '80px',
            filter: 'drop-shadow(0 0 0 gray)',
        },
        '& .icon': {
            left: '14px',
            top: '13px',
            width: '25px',
            height: '25px',
        },
    },
    background: {
        '& .background': {
            left: '-20px',
            top: '2px',
            width: '80px',
            height: '80px',
            filter: 'drop-shadow(0 0 0 gray)',
        },
    },
});

export default favoriteEditMenuStyles;
