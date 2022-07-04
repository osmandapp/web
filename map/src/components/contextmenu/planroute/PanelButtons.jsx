import {ButtonGroup, IconButton, Paper} from "@mui/material";
import {Create, Delete, Download, Folder, Settings} from "@mui/icons-material";
import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    buttongroup: {
        top: '20%',
        left: '5px',
        width: '10px',
        height: '10px',
    }
})

const PanelButtons = ({setCreateRoute, setDeleteRoute}) => {

    const classes = useStyles();

    return (
        <div className={`${classes.buttongroup} ${'leaflet-bottom'}`}>
            <div className="leaflet-control leaflet-bar padding-container">
                <Paper>
                    <ButtonGroup
                        orientation="vertical"
                        color="primary">
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => setCreateRoute(true)}
                        >
                            <Create fontSize="small"/>
                        </IconButton>
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => setCreateRoute(true)}
                        >
                            <Settings fontSize="small"/>
                        </IconButton>
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => setCreateRoute(true)}
                        >
                            <Folder fontSize="small"/>
                        </IconButton>
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => setCreateRoute(true)}
                        >
                            <Download fontSize="small"/>
                        </IconButton>
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => setDeleteRoute(true)}
                        >
                            <Delete fontSize="small"/>
                        </IconButton>
                    </ButtonGroup>
                </Paper>
            </div>
        </div>
    );
};

export default PanelButtons;