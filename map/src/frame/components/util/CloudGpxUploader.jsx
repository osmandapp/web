import { useContext, useEffect } from 'react';
import AppContext from '../../../context/AppContext';
import { useMutator } from '../../../util/Utils';
import TracksManager from '../../../manager/TracksManager';
import { styled } from '@mui/material/styles';

export default function CloudGpxUploader({ children, folder = null }) {
    const ctx = useContext(AppContext);
    const [uploadedFiles, mutateUploadedFiles] = useMutator({});

    useEffect(() => {
        for (const file in uploadedFiles) {
            const fileName = TracksManager.prepareName(uploadedFiles[file].track.name);
            TracksManager.saveTrackToCloud(ctx, folder, fileName, 'GPX', uploadedFiles[file].track).then();
            mutateUploadedFiles((o) => delete o[file]);
            break; // process 1 file per 1 render
        }
    }, [uploadedFiles]);

    const fileSelected = async (e) => {
        const selected = e.target.files.length === 1;
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.addEventListener('load', async () => {
                const track = await TracksManager.getTrackData(file);
                if (track) {
                    track.name = file.name;
                    mutateUploadedFiles((o) => (o[file.name] = { track, selected }));
                }
            });
            reader.readAsText(file);
        });
    };

    const HiddenInput = styled('input')({ display: 'none' });

    return (
        <label htmlFor="se-upload-cloud-gpx">
            <HiddenInput id="se-upload-cloud-gpx" accept=".gpx" multiple type="file" onChange={fileSelected} />
            {children}
        </label>
    );
}
