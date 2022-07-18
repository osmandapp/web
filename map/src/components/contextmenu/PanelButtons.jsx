import {ButtonGroup, IconButton, Paper} from "@mui/material";
import {Create, Delete, Download} from "@mui/icons-material";
import React, {useContext, useEffect, useRef} from "react";
import {makeStyles} from "@material-ui/styles";
import L, {Layer} from "leaflet";
import AppContext from "../../context/AppContext";

const useStyles = makeStyles({
    buttongroup: {
        top: '20%',
        left: '5px',
        width: '10px',
        height: '10px',
    }
})

const PanelButtons = ({setOpenSaveDialog}) => {

    const classes = useStyles();

    const ctx = useContext(AppContext);

    const divContainer = useRef(null);

    useEffect(() => {
        if (divContainer.current) {
            L.DomEvent.disableClickPropagation(divContainer.current);
            L.DomEvent.disableScrollPropagation(divContainer.current);
        }
    });

    return (
        <div className={`${classes.buttongroup} ${'leaflet-bottom'}`} ref={divContainer}>
            <div className="leaflet-control leaflet-bar padding-container">
                <Paper>
                    <ButtonGroup
                        orientation="vertical"
                        color="primary">
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => {
                                ctx.setSelectedGpxFile(null);
                                ctx.setWeatherPoint(null);
                                ctx.newRoute.newRouteLayer = new Layer();
                                ctx.setNewRoute({...ctx.newRoute});
                                if (ctx.mapMarkerListener) {
                                    ctx.mapMarkerListener();
                                }

                                ctx.editor.createRoute = true;
                                ctx.editor.deleteRoute = false;
                                ctx.setEditor({...ctx.editor});
                            }}
                        >
                            <Create fontSize="small"/>
                        </IconButton>
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => {
                                setOpenSaveDialog(true);
                            }}
                        >
                            <Download fontSize="small"/>
                        </IconButton>
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => {
                                ctx.editor.deleteRoute = true;
                                ctx.editor.createRoute = false;
                                ctx.editor.deletePoint = -1;
                                ctx.setEditor({...ctx.editor});
                            }}
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