import { useCallback, useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import LoginContext from '../../context/LoginContext';
import { FREE_ACCOUNT } from '../../manager/LoginManager';
import { DEFAULT_GROUP_NAME, GPX_FILE_EXT, KMZ_FILE_EXT } from '../../manager/track/TracksManager';
import { createTrackFreeName, removeFileExtension, saveTrackToCloud } from '../../manager/track/SaveTrackManager';
import { useMutator } from '../Utils';

const CLOUD_TRACK_EXTENSIONS = ['.gpx', '.kmz', '.kml'];

function isCloudTrackFile(file) {
    const name = file?.name?.toLowerCase() ?? '';

    return CLOUD_TRACK_EXTENSIONS.some((ext) => name.endsWith(ext));
}

function validName(name) {
    return name !== '' && name.trim().length > 0;
}

export default function useCloudGpxImport({ folder = DEFAULT_GROUP_NAME } = {}) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const [uploadedFiles, mutateUploadedFiles] = useMutator({});

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

    const importGpxFiles = useCallback(
        (fileList) => {
            if (!ltx.loginUser || ltx.accountInfo?.account === FREE_ACCOUNT) {
                return;
            }

            const files = Array.from(fileList || []).filter(isCloudTrackFile);
            if (files.length === 0) {
                return;
            }

            const selected = files.length === 1;
            ctx.setTrackLoading(files.map((track) => removeFileExtension(track.name) + GPX_FILE_EXT));

            files.forEach((file) => {
                const reader = new FileReader();
                reader.addEventListener('load', (e) => {
                    const data = e.target.result;
                    if (data) {
                        mutateUploadedFiles(
                            (o) =>
                                (o[file.name] = { file, selected, data: data, name: file.name, originalName: file.name })
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
        },
        [ctx, folder, ltx.accountInfo?.account, ltx.loginUser, mutateUploadedFiles]
    );

    return { importGpxFiles };
}
