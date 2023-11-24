import { Dialog } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { Alert, Box, Button, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import AppContext, { isLocalTrack } from '../../context/AppContext';
import { Editor } from 'react-draft-wysiwyg';
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'draft-js/dist/Draft.css';
import _ from 'lodash';
import contextMenuStyles from '../../infoblock/styles/ContextMenuStyles';
import { AddPhotoAlternate } from '@mui/icons-material';
import { saveTrackToLocalStorage } from '../../manager/track/SaveTrackManager';

export default function DescTrackDialog({ dialogOpen, setDialogOpen, desc }) {
    const ctx = useContext(AppContext);
    const styles = contextMenuStyles();

    const [description, setDescription] = useState(null);
    const [link, setLink] = useState(null);
    const [prevLink, setPrevLink] = useState(null);
    const [linkEditValue, setLinkEditValue] = useState(null);
    const [editDescription, setEditDescription] = useState(null);
    const [editImgDialogOpen, setEditImgDialogOpen] = useState(false);
    const [state, setState] = useState(() => EditorState.createEmpty());
    const [openDescAlert, setOpenDescAlert] = useState(true);
    const toggleShowDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    const toggleShowEditImgDialog = () => {
        setEditImgDialogOpen(!editImgDialogOpen);
    };

    useEffect(() => {
        if (dialogOpen) {
            if (desc) {
                setDescription(desc);
                setState(EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(desc))));
            }
            const img = ctx.selectedGpxFile?.metaData?.link;
            if (img) {
                setLink(img);
                setPrevLink(_.cloneDeep(img));
            }
        }
    }, [dialogOpen]);

    function saveImg(newUrl) {
        if (ctx.selectedGpxFile?.metaData) {
            setLink(newUrl);
            if (!ctx.selectedGpxFile.metaData) {
                ctx.selectedGpxFile.metaData = {};
            }
            ctx.selectedGpxFile.metaData.link = newUrl;
            saveState();
        }
    }

    function saveDesc(state) {
        if (state.getCurrentContent().hasText() && state.getCurrentContent().getPlainText().length > 0) {
            if (ctx.selectedGpxFile) {
                const newDesc = draftToHtml(convertToRaw(state.getCurrentContent()));
                setDescription(newDesc);
                if (!ctx.selectedGpxFile.metaData) {
                    ctx.selectedGpxFile.metaData = {};
                }
                ctx.selectedGpxFile.metaData.desc = newDesc;
                saveState();
            }
        } else {
            setDescription(null);
            ctx.selectedGpxFile.metaData.desc = null;
            saveState();
        }
    }

    function saveState() {
        saveTrackToLocalStorage({ ctx, track: ctx.selectedGpxFile });
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
    }

    return (
        <>
            <Dialog disableEnforceFocus open={dialogOpen} onClose={toggleShowDialog}>
                <DialogTitle>Description</DialogTitle>
                <DialogContent sx={{ minHeight: editDescription ? 300 : 0 }}>
                    {!editDescription ? (
                        <>
                            {link ? (
                                <Box component="img" src={link} onClick={toggleShowEditImgDialog} />
                            ) : (
                                <Button
                                    variant="contained"
                                    sx={{ ml: '-0.5px !important' }}
                                    className={styles.button}
                                    onClick={() => {
                                        toggleShowEditImgDialog();
                                    }}
                                >
                                    <AddPhotoAlternate fontSize="small" />
                                    Add title image
                                </Button>
                            )}
                            {openDescAlert && !description && (
                                <Alert
                                    sx={{ mt: 2 }}
                                    severity="info"
                                    onClose={() => {
                                        setOpenDescAlert(false);
                                    }}
                                >
                                    Click EDIT to add a description...
                                </Alert>
                            )}
                            <DialogContentText sx={{ width: '100%' }} component="span">
                                <div dangerouslySetInnerHTML={{ __html: description }} />
                            </DialogContentText>
                        </>
                    ) : (
                        <Editor editorState={state} onEditorStateChange={setState} />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleShowDialog}>Close</Button>
                    {!editDescription ? (
                        isLocalTrack(ctx) && <Button onClick={() => setEditDescription(true)}>Edit</Button>
                    ) : (
                        <Button
                            onClick={() => {
                                saveDesc(state);
                                setEditDescription(false);
                            }}
                        >
                            Save
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
            <Dialog open={editImgDialogOpen} onClose={toggleShowEditImgDialog}>
                <DialogContent sx={{ minWidth: '300px' }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        onChange={(e) => {
                            setLink(e.target.value);
                            setLinkEditValue(e.target.value);
                        }}
                        id="link"
                        label="Img link"
                        type="url"
                        fullWidth
                        variant="standard"
                        value={link ? link : ''}
                    ></TextField>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setLink(prevLink);
                            toggleShowEditImgDialog();
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            saveImg(linkEditValue);
                            toggleShowEditImgDialog();
                        }}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
