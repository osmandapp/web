import { useCallback, useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import TracksManager from '../../manager/track/TracksManager';
import { saveTrackToLocal } from '../../manager/track/SaveTrackManager';
import { useMutator } from '../Utils';

export default function useLocalGpxImport() {
    const ctx = useContext(AppContext);
    const [uploadedFiles, mutateUploadedFiles] = useMutator({});

    useEffect(() => {
        for (const file in uploadedFiles) {
            saveTrackToLocal({
                ctx,
                overwrite: false,
                track: uploadedFiles[file].track,
                selected: uploadedFiles[file].selected,
            });
            mutateUploadedFiles((o) => delete o[file]);
            break; // process 1 file per 1 render
        }
    }, [mutateUploadedFiles, uploadedFiles]);

    const importGpxFiles = useCallback(
        (fileList) => {
            const files = Array.from(fileList || []).filter((file) => file?.name?.toLowerCase().endsWith('.gpx'));
            const selected = files.length === 1;

            files.forEach(async (file) => {
                const track = await TracksManager.getTrackData(file);
                if (track) {
                    track.name = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
                    mutateUploadedFiles((o) => (o[file.name] = { track, selected }));
                }
            });
        },
        [mutateUploadedFiles]
    );

    return { importGpxFiles };
}
