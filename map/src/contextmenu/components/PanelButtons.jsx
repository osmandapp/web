import {ButtonGroup, IconButton, Paper} from "@mui/material";
import {Close, Delete, Folder} from "@mui/icons-material";
import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppContext from "../../context/AppContext";
import SaveTrackDialog from "./SaveTrackDialog";
import DeleteTrackDialog from "./DeleteTrackDialog";
import DeleteFavoriteDialog from "./favorite/DeleteFavoriteDialog";

const useStyles = makeStyles({
    buttongroup: {
        top: '20%',
        width: '10px',
        height: '10px',
    }
})

const PanelButtons = ({drawerWidth, showContextMenu, setShowContextMenu}) => {

    const classes = useStyles();

    const ctx = useContext(AppContext);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    return (ctx.selectedGpxFile &&
        <div>{showContextMenu && <div style={{left: drawerWidth + 10}} className={`${classes.buttongroup} ${'leaflet-bottom'}`}>
            <div className="leaflet-control leaflet-bar padding-container">
                <Paper>
                    <ButtonGroup
                        orientation="vertical"
                        color="primary">
                        {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && <IconButton
                            variant="contained"
                            type="button"
                            disabled={ctx.createTrack !== null}
                            onClick={() => {
                                ctx.selectedGpxFile.save = true;
                                ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
                            }}
                        >
                            <Folder fontSize="small"/>
                        </IconButton>}
                        {ctx.currentObjectType !== ctx.OBJECT_TYPE_WEATHER && <IconButton
                            variant="contained"
                            type="button"
                            disabled={ctx.createTrack !== null}
                            onClick={() => setOpenDeleteDialog(true)}
                        >
                            <Delete fontSize="small"/>
                        </IconButton>}
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => setShowContextMenu(false)}
                        >
                            <Close fontSize="small"/>
                        </IconButton>
                    </ButtonGroup>
                </Paper>
            </div>
        </div>
        }
            {ctx.selectedGpxFile.save && <SaveTrackDialog/>}
            {openDeleteDialog && (ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK || ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK)
                && <DeleteTrackDialog
                    dialogOpen={openDeleteDialog}
                    setDialogOpen={setOpenDeleteDialog}
                    setShowContextMenu={setShowContextMenu}/>}
            {openDeleteDialog && ctx.currentObjectType === ctx.OBJECT_TYPE_FAVORITE
                && <DeleteFavoriteDialog
                    dialogOpen={openDeleteDialog}
                    setDialogOpen={setOpenDeleteDialog}/>}
        </div>);
};

export default PanelButtons;