import {makeStyles} from "@material-ui/core/styles";

const contextMenuStyles = makeStyles({
    info: {
        '& .MuiListItemIcon-root': {
            minWidth: 'auto !important',
        },
    },
    nameInput: {
        maxWidth: 350,
        fontFamily: "Arial",
        color: 'black',
        fontSize: 20,
        marginLeft: -2,
        borderColor: '#bebdb4',
        backgroundColor: 'transparent',
        outlineColor: "#757575",
        cursor: 'pointer',
        '&[disabled]': {
            border: 'none'
        },
        marginBottom: -13
    },
    name: {
        fontFamily: "Arial",
        fontSize: 20,
        color: 'black',
        outline: 'none',
        letterSpacing: "normal"
    },

    item: {
        '& .MuiMenuItem-root': {
            userSelect: 'text'
        },
        '& .MuiTypography-root': {
            marginLeft: "1px !important"
        }
    }
})

export default contextMenuStyles;