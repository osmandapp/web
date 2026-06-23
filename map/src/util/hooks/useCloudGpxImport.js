import { useCallback, useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import LoginContext from '../../context/LoginContext';
import { GPX_FILE_EXT, KMZ_FILE_EXT, validName } from '../../manager/track/TracksManager';
import { createTrackFreeName, removeFileExtension, saveTrackToCloud } from '../../manager/track/SaveTrackManager';
import { useMutator } from '../Utils';

const CLOUD_TRACK_EXTENSIONS = ['.gpx', '.kmz', '.kml'];

function isCloudTrackFile(file) {
    const name = file?.name?.toLowerCase() ?? '';

    return CLOUD_TRACK_EXTENSIONS.some((ext) => name.endsWith(ext));
}

export default function useCloudGpxImport() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const [uploadedFiles, mutateUploadedFiles] = useMutator({});

    useEffect(() => {
        for (const file in uploadedFiles) {
            const uploadedFile = uploadedFiles[file];
            let open = uploadedFile.selected;
            let fileName = uploadedFile.name;
            const folder = uploadedFile.folder;
            if (validName(fileName)) {
                const loadingName = removeFileExtension(fileName) + GPX_FILE_EXT;
                fileName = removeFileExtension(fileName);
                fileName = createTrackFreeName(fileName, ctx.tracksGroups, folder);
                saveTrackToCloud({
                    ctx,
                    ltx,
                    currentFolder: folder,
                    fileName,
                    type: 'GPX',
                    uploadedFile: uploadedFile,
                    open,
                }).then((success) => {
                    if (success) {
                        ctx.setTrackLoading((prev) => prev.filter((n) => n !== loadingName));
                    }
                });
                mutateUploadedFiles((o) => delete o[file]);
                break; // process 1 file per 1 render
            }
        }
    }, [uploadedFiles]);

    const importGpxFiles = useCallback(
        (fileList, folder) => {
            if (!ltx.isProAccount()) {
                return;
            }

            const files = Array.from(fileList || []).filter(isCloudTrackFile);
            if (files.length === 0) {
                return;
            }

            const selected = files.length === 1;
            ctx.setTrackLoading(files.map((track) => removeFileExtension(track.name) + GPX_FILE_EXT));

            files.forEach((file) => {
                const loadingName = removeFileExtension(file.name) + GPX_FILE_EXT;
                const reader = new FileReader();
                reader.addEventListener('load', (e) => {
                    const data = e.target.result;
                    if (data) {
                        mutateUploadedFiles(
                            (o) =>
                                (o[file.name] = {
                                    file,
                                    selected,
                                    data: data,
                                    name: file.name,
                                    originalName: file.name,
                                    folder,
                                })
                        );
                    } else {
                        ctx.setTrackErrorMsg({
                            title: 'Import error',
                            msg: `Unable to import ${file.name}`,
                        });
                        ctx.setTrackLoading((prev) => prev.filter((n) => n !== loadingName));
                    }
                });
                if (file.name.toLowerCase().endsWith(KMZ_FILE_EXT)) {
                    reader.readAsArrayBuffer(file);
                } else {
                    reader.readAsText(file);
                }
            });
        },
        [ctx, ltx.loginUser, ltx.accountInfo?.account, mutateUploadedFiles]
    );

    return { importGpxFiles };
}
