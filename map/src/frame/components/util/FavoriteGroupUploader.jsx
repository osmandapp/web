import React, { useContext, useEffect } from 'react';
import AppContext from '../../../context/AppContext';
import { useMutator } from '../../../util/Utils';
import TracksManager from '../../../manager/track/TracksManager';
import { styled } from '@mui/material/styles';
import { isFavGroupExists, prepareFavGroupName, saveFavoriteGroup } from '../../../manager/FavoritesManager';

export default function FavoriteGroupUploader({ children }) {
    const ctx = useContext(AppContext);
    const [uploadedFiles, mutateUploadedFiles] = useMutator({});

    function validName(name) {
        return name !== '' && name.trim().length > 0;
    }

    useEffect(() => {
        for (const file in uploadedFiles) {
            let groupName = prepareFavGroupName(uploadedFiles[file].track.name);
            if (validName(groupName)) {
                saveFavoriteGroup(uploadedFiles[file].track, groupName, ctx).then();
                mutateUploadedFiles((o) => delete o[file]);
                break; // process 1 file per 1 render
            }
        }
    }, [uploadedFiles]);

    const fileSelected = async (e) => {
        const selected = e.target.files.length === 1;
        ctx.setTrackLoading(Array.from(e.target.files).map((track) => track.name));
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.addEventListener('load', async () => {
                const track = await TracksManager.getTrackData(file);
                if (track) {
                    let groupName = prepareFavGroupName(file.name);
                    if (isFavGroupExists(groupName, ctx.favorites.groups)) {
                        ctx.setTrackErrorMsg({
                            title: 'Import error',
                            msg: `Favorite group ${file.name} already exist`,
                        });
                        ctx.setTrackLoading([...ctx.trackLoading.filter((n) => n !== file.name)]);
                    } else {
                        track.name = file.name;
                        mutateUploadedFiles((o) => (o[file.name] = { track, selected }));
                    }
                } else {
                    ctx.setTrackErrorMsg({
                        title: 'Import error',
                        msg: `Unable to import ${file.name}`,
                    });
                    ctx.setTrackLoading([...ctx.trackLoading.filter((n) => n !== file.name)]);
                }
            });
            reader.readAsText(file);
        });
    };

    const HiddenInput = styled('input')({ display: 'none' });

    return (
        <label htmlFor="se-upload-fav-group">
            <HiddenInput id="se-upload-fav-group" accept=".gpx" multiple type="file" onChange={fileSelected} />
            {children}
        </label>
    );
}
