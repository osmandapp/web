import {Box, Typography} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../../context/AppContext";
import SearchInfo from "./SearchInfo";

export default function HeaderInfo() {

    const ctx = useContext(AppContext);

    const [text, setText] = useState([]);

    useEffect(() => {
        if (ctx.headerText.tracks.text === '' && ctx.headerText.weather.text === '') {
            setText(ctx.headerText.welcome.text);
        } else {
            setText(ctx.headerText.weather.text + ' ' + ctx.headerText.tracks.text);
        }
    }, [ctx.headerText, ctx.setHeaderText]);


    return <Box>
        <Typography variant="h6" color="inherit" style={{display: 'inline'}}>
            <SearchInfo/>
            {text}
        </Typography>
    </Box>
}