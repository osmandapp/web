import {Button} from "@mui/material";
import React, {useState} from "react";
import BackUpDialog from "./BackUpDialog";

export default function BackUp() {

    const [openBackUpDialog, setOpenBackUpDialog] = useState(false);

    return <>
        <Button sx={{ml: 4, mt: 2, mb: 2}} variant="contained" component="span"
                   style={{backgroundColor: '#fbc73a'}}
                   onClick={() => {setOpenBackUpDialog(true)}}>
        Back up us file</Button>
        <BackUpDialog
            dialogOpen={openBackUpDialog}
            setDialogOpen={setOpenBackUpDialog}/>
        </>
}