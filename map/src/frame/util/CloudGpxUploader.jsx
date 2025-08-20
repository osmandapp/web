import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import { useMutator } from '../../util/Utils';
import { styled } from '@mui/material/styles';
import { createTrackFreeName, saveTrackToCloud } from '../../manager/track/SaveTrackManager';
import { FREE_ACCOUNT } from '../../manager/LoginManager';
import LoginContext from '../../context/LoginContext';
import { GPX_FILE_EXT, KMZ_FILE_EXT } from '../../manager/track/TracksManager';

export default function CloudGpxUploader({ children, folder = null, style = null }) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const [uploadedFiles, mutateUploadedFiles] = useMutator({});

    function validName(name) {
        return name !== '' && name.trim().length > 0;
    }

    function removeFileExtension(filename) {
        return filename.includes('.') ? filename.slice(0, filename.lastIndexOf('.')) : filename;
    }

    useEffect(() => {
        for (const file in uploadedFiles) {
            let open = uploadedFiles[file].selected;
            let fileName = uploadedFiles[file].name;
            if (validName(fileName)) {
                fileName = removeFileExtension(fileName);
                fileName = createTrackFreeName(fileName, ctx.tracksGroups, folder);
                saveTrackToCloud({
                    ctx,
                    ltx,
                    currentFolder: folder,
                    fileName,
                    type: 'GPX',
                    uploadedFile: uploadedFiles[file],
                    open,
                }).then();
                mutateUploadedFiles((o) => delete o[file]);
                break; // process 1 file per 1 render
            }
        }
    }, [uploadedFiles]);

    const fileSelected = async (e) => {
        const selected = e.target.files.length === 1;
        ctx.setTrackLoading(Array.from(e.target.files).map((track) => removeFileExtension(track.name) + GPX_FILE_EXT));
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.addEventListener('load', async (e) => {
                const data = e.target.result;
                if (data) {
                    mutateUploadedFiles(
                        (o) => (o[file.name] = { file, selected, data: data, name: file.name, originalName: file.name })
                    );
                } else {
                    ctx.setTrackErrorMsg({
                        title: 'Import error',
                        msg: `Unable to import ${file.name}`,
                    });
                    ctx.setTrackLoading([...ctx.trackLoading.filter((n) => n !== file.name)]);
                }
            });
            if (file.name.toLowerCase().endsWith(KMZ_FILE_EXT)) {
                reader.readAsArrayBuffer(file);
            } else {
                reader.readAsText(file);
            }
        });
    };

    const HiddenInput = styled('input')({ display: 'none' });

    return (
        <label className={style} htmlFor="se-upload-cloud-gpx">
            <HiddenInput
                disabled={ltx.accountInfo?.account === FREE_ACCOUNT}
                id="se-upload-cloud-gpx"
                accept=".gpx, .kmz, .kml"
                multiple
                type="file"
                onChange={fileSelected}
            />
            {children}
        </label>
    );
}
