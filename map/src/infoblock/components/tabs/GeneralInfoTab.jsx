import React, {useContext, useState} from 'react';
import {
    Box,
    Button,
    Divider
} from "@mui/material";
import AppContext from "../../../context/AppContext"
import {Add} from "@mui/icons-material";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import DeleteTrackDialog from "../track/dialogs/DeleteTrackDialog";
import GpxGraphProvider from "../graph/GpxGraphProvider";
import GeneralInfo from "../track/GeneralInfo";
import DescTrackDialog from "../track/dialogs/DescTrackDialog";

export default function GeneralInfoTab({width, setShowContextMenu}) {

    const styles = contextMenuStyles();
    const ctx = useContext(AppContext);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openDescDialog, setOpenDescDialog] = useState(false);

    function addToCollection() {
        if (!ctx.gpxCollection.find(name => name === ctx.selectedGpxFile.name)) {
            ctx.gpxCollection.push(ctx.selectedGpxFile.name);
            ctx.setGpxCollection([...ctx.gpxCollection]);
        }
    }

    return (<>
            <Box minWidth={width} maxWidth={width}>
                <GeneralInfo width={width} setOpenDescDialog={setOpenDescDialog}/>
                <GpxGraphProvider width={width}/>
                <Divider sx={{mt: "3px", mb: "12px"}}/>
                <Button
                    variant="contained"
                    sx={{ml: "-0.5px !important"}}
                    className={styles.button}
                    onClick={addToCollection}
                >
                    <Add fontSize="small" sx={{mr: "3px"}}/>
                    Collection
                </Button>
                <Button
                    variant="contained"
                    sx={{backgroundColor: '#ff595e !important'}}
                    className={styles.button}
                    onClick={() => {
                        setOpenDeleteDialog(true);
                    }}
                >
                    Delete
                </Button>
            </Box>
            {openDeleteDialog && <DeleteTrackDialog
                dialogOpen={openDeleteDialog}
                setDialogOpen={setOpenDeleteDialog}
                setShowContextMenu={setShowContextMenu}
            />}
            {openDescDialog &&
                <DescTrackDialog
                    dialogOpen={openDescDialog}
                    setDialogOpen={setOpenDescDialog}
                />
            }
        </>
    );
};