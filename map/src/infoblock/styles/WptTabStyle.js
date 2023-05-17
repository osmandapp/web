import {makeStyles} from "@material-ui/core/styles";

const wptTabStyle = makeStyles({
    icon: {
        "& .icon": {
            top: '22px',
            left: '20px'
        },
        "& .background": {
            marginBottom: '-40px',
            marginRight: '20px',
            marginLeft: '10px',
            filter: "drop-shadow(0 0 0 gray)"
        }
    },
    iconOnlyName: {
        "& .icon": {
            top: '16px',
            left: '20px'
        },
        "& .background": {
            marginBottom: '-40px',
            marginRight: '20px',
            marginLeft: '10px',
            filter: "drop-shadow(0 0 0 gray)"
        }
    },
    text: {
        '& .MuiTypography-root': {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            paddingRight: "20px",
            marginLeft: "14px !important"
        }
    }
})

export default wptTabStyle;