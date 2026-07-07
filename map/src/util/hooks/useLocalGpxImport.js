import { useCallback, useContext } from 'react';
import AppContext from '../../context/AppContext';
import TracksManager, { GPX_FILE_EXT } from '../../manager/track/TracksManager';
import { saveTrackToLocal } from '../../manager/track/SaveTrackManager';
import useGpxImport from './useGpxImport';

export default function useLocalGpxImport() {
    const ctx = useContext(AppContext);

    const readFile = useCallback(async (file, { selected }) => {
        const track = await TracksManager.getTrackData(file);
        if (track) {
            track.name = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
            return { track, selected };
        }
    }, []);

    const saveFile = useCallback(
        (uploadedFile) => {
            saveTrackToLocal({
                ctx,
                overwrite: false,
                track: uploadedFile.track,
                selected: uploadedFile.selected,
            });
        },
        [ctx]
    );

    return useGpxImport({
        isTrackFile: isLocalTrackFile,
        readFile,
        saveFile,
    });
}

function isLocalTrackFile(file) {
    return file?.name?.toLowerCase().endsWith(GPX_FILE_EXT);
}
