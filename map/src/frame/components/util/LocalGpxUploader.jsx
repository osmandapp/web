import { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';

import TracksManager from '../../../manager/track/TracksManager';
import AppContext from '../../../context/AppContext';
import { useMutator } from '../../../util/Utils';
import { saveTrackToLocal } from '../../../manager/track/SaveTrackManager';

/**
 * If you need to forward ref (for example, with <Toolip>),
 * don't play with forwardRef/cloneElement, just wrap with span:
 *
 * <Tooltip><span><LocalGpxUploader>...</LocalGpxUploader></span></Tooltip>
 */

export default function LocalGpxUploader({ children }) {
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
        <label htmlFor="se-upload-gpx">
            <HiddenInput id="se-upload-gpx" accept=".gpx" multiple type="file" onChange={fileSelected} />
            {children}
        </label>
    );
}
