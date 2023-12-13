import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../../context/AppContext';
import { useMutator } from '../../../util/Utils';
import TracksManager from '../../../manager/track/TracksManager';
import { styled } from '@mui/material/styles';
import {
    createFavGroupFreeName,
    isFavGroupExists,
    prepareFavGroupName,
    saveFavoriteGroup,
} from '../../../manager/FavoritesManager';
import ImportFavoriteDialog from '../../../dialogs/favorites/ImportFavoriteDialog';

export default function FavoriteGroupUploader({ children }) {
    const ctx = useContext(AppContext);
    const [uploadedFiles, mutateUploadedFiles] = useMutator({});
    const [importFile, setImportFile] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [importFavoriteGroup, setImportFavoriteGroup] = useState(false);

    function validName(name) {
        return name !== '' && name.trim().length > 0;
    }

    useEffect(() => {
        for (const file in uploadedFiles) {
            let track = uploadedFiles[file].track;
            let groupName = prepareFavGroupName(track.name);
            if (validName(groupName)) {
                groupName = createFavGroupFreeName(groupName, ctx.favorites?.groups);
                if (importFavoriteGroup) {
                    renameGroup(track, groupName, importFile.oldName);
                }
                saveFavoriteGroup(track, groupName, ctx).then();
                mutateUploadedFiles((o) => delete o[file]);
                setImportFile(null);
                break; // process 1 file per 1 render
            }
        }
    }, [uploadedFiles]);

    useEffect(() => {
        if (importFavoriteGroup) {
            let track = importFile.track;
            track.name = importFile.name;
            const selected = true;
            mutateUploadedFiles((o) => (o[importFile.name] = { track, selected }));
        }
    }, [importFavoriteGroup]);

    function renameGroup(track, newName, oldName) {
        let pointsGroups = track.pointsGroups;
        let newGroup = pointsGroups[oldName];
        newGroup.name = newName;
        newGroup.ext.name = newName;
        track.wpts.forEach((w) => (w.category = newName));

        delete pointsGroups[oldName];
        pointsGroups[newName] = newGroup;

        return pointsGroups;
    }

    const fileSelected = async (e) => {
        const selected = e.target.files.length === 1;
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.addEventListener('load', async () => {
                const track = await TracksManager.getTrackData(file);
                if (track) {
                    let groupName = prepareFavGroupName(file.name);
                    if (isFavGroupExists(groupName, ctx.favorites.groups)) {
                        if (selected) {
                            setImportFile({
                                name: file.name,
                                oldName: groupName,
                                track: track,
                            });
                            setOpenDialog(true);
                        } else {
                            ctx.setTrackErrorMsg({
                                title: 'Import error',
                                msg: `Favorite group ${file.name} already exist`,
                            });
                        }
                    } else {
                        track.name = file.name;
                        mutateUploadedFiles((o) => (o[file.name] = { track, selected }));
                    }
                } else {
                    ctx.setTrackErrorMsg({
                        title: 'Import error',
                        msg: `Unable to import ${file.name}`,
                    });
                }
            });
            reader.readAsText(file);
        });
    };

    const HiddenInput = styled('input')({ display: 'none' });

    return (
        <>
            <label htmlFor="se-upload-fav-group">
                <HiddenInput id="se-upload-fav-group" accept=".gpx" multiple type="file" onChange={fileSelected} />
                {children}
            </label>
            {openDialog && (
                <ImportFavoriteDialog
                    setOpenDialog={setOpenDialog}
                    setImportFavoriteGroup={setImportFavoriteGroup}
                    name={importFile.name}
                />
            )}
        </>
    );
}
