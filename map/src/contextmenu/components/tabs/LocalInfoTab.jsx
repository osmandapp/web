import {Box, Typography} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../../context/AppContext";

const LocalInfoTab = ({width}) => {

    const ctx = useContext(AppContext);
    const [points, setPoints] = useState(0);
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        if (ctx.selectedGpxFile && ctx.selectedGpxFile.points && !ctx.selectedGpxFile.summary) {
            let pointsLength = ctx.selectedGpxFile.points.length;
            setPoints(pointsLength);
            setDistance(Math.round(ctx.selectedGpxFile.points[pointsLength - 1].dist / 100) / 10.0);
        }
    }, [ctx.selectedGpxFile]);

    return (<Box width={width}>
            <Typography variant="subtitle1" color="inherit">
            {"Points: " + points}<br/>
            {"Distance: " + distance + " km"}
            </Typography>
    </Box>
    );
};

export default LocalInfoTab;