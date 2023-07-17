import { ListItemText, MenuItem, Tooltip, Typography } from '@mui/material';
import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';

export default function SearchResultItem({ res }) {
    const ctx = useContext(AppContext);

    function zoomToResult() {
        ctx.searchCtx.chooseResult = res.geometry.coordinates;
        ctx.setSearchCtx({ ...ctx.searchCtx });
    }

    function getResultText() {
        return res.properties.description.split('[')[0].trim();
    }

    return (
        <Tooltip title={res.properties.description} arrow>
            <MenuItem sx={{ ml: -2 }} key={res.name} onClick={() => zoomToResult()}>
                <ListItemText inset>
                    <Typography variant="inherit" noWrap>
                        {getResultText()}
                    </Typography>
                </ListItemText>
            </MenuItem>
        </Tooltip>
    );
}
