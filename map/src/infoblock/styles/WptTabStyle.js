import { makeStyles } from '@material-ui/core/styles';

const wptTabStyle = makeStyles({
    iconGroup: {
        // center icon
        '& .icon': {
            left: 10,
            top: 25,
        },
        // center background / remove shadow
        '& .background': {
            filter: 'drop-shadow(0 0 0 gray)',
            left: -12,
            top: 4,
        },
    },
    text: {
        '& .MuiTypography-root': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%',
            paddingRight: '20px',
            marginLeft: '14px !important',
        },
    },
});

export default wptTabStyle;
