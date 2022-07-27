import {Typography} from "@mui/material";
import React, {useContext} from "react";
import AppContext from "../../../context/AppContext";

const EditInfoTab = () => {

    const ctx = useContext(AppContext);

    return (<Typography marginLeft={"20px"} variant="subtitle1" color="inherit">
            {"points: " + (ctx.currentlyEditTrack.pointsList && ctx.currentlyEditTrack.pointsList.length)}<br/>
            {"distance: " + Math.trunc(ctx.currentlyEditTrack.distance) + " m"}
        </Typography>
    );
};

export default EditInfoTab;