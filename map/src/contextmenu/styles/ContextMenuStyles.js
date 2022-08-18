import {makeStyles} from "@material-ui/core/styles";

const contextMenuStyles = makeStyles({
    info: {
        '& .MuiListItemIcon-root': {
            minWidth: 'auto !important',
        }
    },
    name: {
        maxWidth: 350,
        fontFamily: "Arial",
        color: 'black',
        fontSize: 20,
        marginLeft: -2,
        border: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
        cursor: 'pointer'
    },
    item: {
        '& .MuiMenuItem-root': {
            userSelect: 'text'
        }
    }
})

export default contextMenuStyles;