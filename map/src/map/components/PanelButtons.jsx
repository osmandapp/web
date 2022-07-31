import {ButtonGroup, IconButton, Paper} from "@mui/material";
import {Close, Create, Delete, Download} from "@mui/icons-material";
import React, {useContext, useEffect, useRef} from "react";
import {makeStyles} from "@material-ui/core/styles";
import L from "leaflet";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";

const useStyles = makeStyles({
    buttongroup: {
        top: '20%',
        left: '5px',
        width: '10px',
        height: '10px',
    }
})

const PanelButtons = ({setOpenSaveDialog, setOpenPanelButtons}) => {

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
                                ctx.currentlyEditTrackDispatch({
                                    type: 'startDraw',
                                })
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
                                ctx.currentlyEditTrackDispatch({
                                    type: 'deleteTrack',
                                })
                            }}
                        >
                            <Delete fontSize="small"/>
                        </IconButton>
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => {
                                ctx.currentlyEditTrackDispatch({
                                    type: 'stopDraw',
                                })
                            }}
                        >
                            <Close fontSize="small"/>
                        </IconButton>
                    </ButtonGroup>
                </Paper>
            </div>
        </div>
    );
};

export default PanelButtons;