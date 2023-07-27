import { makeStyles } from '@material-ui/core/styles';

const contextMenuStyles = makeStyles({
    info: {
        '& .MuiListItemIcon-root': {
            minWidth: 'auto !important',
        },
    },
    nameInput: {
        maxWidth: 350,
        fontFamily: 'Arial',
        color: 'black',
        fontSize: 20,
        marginLeft: -2,
        borderColor: '#bebdb4',
        backgroundColor: 'transparent',
        outlineColor: '#757575',
        cursor: 'pointer',
        '&[disabled]': {
            border: 'none',
        },
        marginBottom: -10,
        paddingBottom: '8px',
        paddingTop: '8px',
    },
    favouriteLineInfo: {
        maxWidth: '450px !important',
        resize: 'none',
        fontFamily: 'Arial',
        color: 'black',
        fontSize: 20,
        marginLeft: -2,
        borderColor: '#bebdb4',
        backgroundColor: 'transparent',
        outlineColor: '#757575',
        cursor: 'pointer',
        '&[disabled]': {
            border: 'none',
        },
        marginBottom: -10,
        paddingBottom: '8px',
        paddingTop: '8px',
    },
    name: {
        fontFamily: 'Arial',
        fontSize: 20,
        color: 'black',
        outline: 'none',
        letterSpacing: 'normal',
        paddingBottom: '2px',
        lineHeight: 'normal',
        overflowWrap: 'break-word',
    },
    item: {
        '& .MuiMenuItem-root': {
            userSelect: 'text',
            maxWidth: '800px',
        },
        '& .MuiTypography-root': {
            marginLeft: '1px !important',
            overflow: 'visible !important',
        },
    },
    button: {
        backgroundColor: '#fbc73a !important',
        fontSize: '12px !important',
        minWidth: '20px !important',
        padding: '3px 5px !important',
        marginLeft: '5px !important',
    },
    topic: {
        fontFamily: 'Arial',
        fontSize: 25,
        color: 'black',
    },
});

export default contextMenuStyles;
