import {makeStyles} from "@material-ui/core/styles";

const drawerStyles = makeStyles({
    drawerItem: {
        '& .MuiMenuItem-root': {
            minHeight: '50px !important',
            maxHeight: '50px !important',
        }
    }
})

export default drawerStyles;