import {Box} from "@mui/material";
import React from "react";

export default function ColorBlock({ color }) {
    return (
        <Box sx={{ backgroundColor: color, flexGrow: 1 }}></Box>
    );
}