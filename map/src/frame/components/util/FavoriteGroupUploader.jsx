import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../../context/AppContext';
import { useMutator } from '../../../util/Utils';
import TracksManager from '../../../manager/track/TracksManager';
import { styled } from '@mui/material/styles';
import {
    createFavGroupFreeName,
    DEFAULT_FAV_GROUP_NAME,
    DEFAULT_GROUP_NAME_POINTS_GROUPS,
    isFavGroupExists,
    saveFavoriteGroup,
} from '../../../manager/FavoritesManager';
import ImportFavoriteDialog from '../../../dialogs/favorites/ImportFavoriteDialog';
import { cloneDeep } from 'lodash';

export default function FavoriteGroupUploader({ children }) {
    const ctx = useContext(AppContext);
    const [uploadedFiles, mutateUploadedFiles] = useMutator({});
    const [importFile, setImportFile] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [importFavoriteGroup, setImportFavoriteGroup] = useState(false);

    function preparedCurrentFile(track, newGroupName) {
        let pointsGroups = cloneDeep(track.pointsGroups);
        let newGroup = pointsGroups[newGroupName];
        let newTrack = cloneDeep(track);
        newTrack.pointsGroups = {};
        newTrack.pointsGroups[newGroupName] = newGroup;
        newTrack.wpts = newTrack.wpts.filter((w) => w.category === newGroupName);

        return newTrack;
    }

    useEffect(() => {
        for (const file in uploadedFiles) {
            const track = uploadedFiles[file].track;
            const pointsGroups = track.pointsGroups;
            const hasSeveralGroups = Object.keys(pointsGroups).length > 1;
            for (const group of Object.values(pointsGroups)) {
                const groupName = group.name !== DEFAULT_GROUP_NAME_POINTS_GROUPS ? group.name : DEFAULT_FAV_GROUP_NAME;
                const newGroupName = createFavGroupFreeName(groupName, ctx.favorites?.groups);
                if (importFavoriteGroup) {
                    renameGroup(track, newGroupName, importFile.oldName);
                }
                const updatedTrack = hasSeveralGroups ? preparedCurrentFile(track, newGroupName) : track;
                saveFavoriteGroup(updatedTrack, newGroupName, ctx).then();
            }
            mutateUploadedFiles((o) => delete o[file]);
            setImportFile(null);
            break; // process 1 file per 1 render
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
                    const pointsGroups = track.pointsGroups;
                    for (const name of Object.keys(pointsGroups)) {
                        let groupName = name !== DEFAULT_GROUP_NAME_POINTS_GROUPS ? name : DEFAULT_FAV_GROUP_NAME;
                        if (isFavGroupExists(groupName, ctx.favorites.groups)) {
                            if (selected) {
                                setImportFile({
                                    name: groupName,
                                    oldName: name ?? DEFAULT_GROUP_NAME_POINTS_GROUPS,
                                    track: track,
                                });
                                setOpenDialog(true);
                            } else {
                                ctx.setTrackErrorMsg({
                                    title: 'Import error',
                                    msg: `Favorite group ${groupName} already exist`,
                                });
                            }
                        } else {
                            track.name = groupName;
                            mutateUploadedFiles((o) => (o[file.name] = { track, selected }));
                        }
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
