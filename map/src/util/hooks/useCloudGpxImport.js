import { useCallback, useContext } from 'react';
import AppContext from '../../context/AppContext';
import LoginContext from '../../context/LoginContext';
import { GPX_FILE_EXT, KMZ_FILE_EXT, validName } from '../../manager/track/TracksManager';
import { createTrackFreeName, removeFileExtension, saveTrackToCloud } from '../../manager/track/SaveTrackManager';
import useGpxImport from './useGpxImport';

const CLOUD_TRACK_EXTENSIONS = ['.gpx', '.kmz', '.kml'];

export default function useCloudGpxImport() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const canImport = useCallback(() => ltx.isProAccount(), [ltx]);

    const onFilesSelected = useCallback(
        (files) => {
            ctx.setTrackLoading(files.map((track) => removeFileExtension(track.name) + GPX_FILE_EXT));
        },
        [ctx]
    );

    const readFile = useCallback((file, { folder, selected }) => {
        return new Promise((resolve) => {
            const loadingName = removeFileExtension(file.name) + GPX_FILE_EXT;
            const reader = new FileReader();
            reader.addEventListener('load', (e) => {
                const data = e.target.result;
                if (data) {
                    resolve({
                        file,
                        selected,
                        data: data,
                        name: file.name,
                        originalName: file.name,
                        folder,
                    });
                } else {
                    ctx.setTrackErrorMsg({
                        title: 'Import error',
                        msg: `Unable to import ${file.name}`,
                    });
                    ctx.setTrackLoading((prev) => prev.filter((n) => n !== loadingName));
                    resolve(null);
                }
            });
            if (file.name.toLowerCase().endsWith(KMZ_FILE_EXT)) {
                reader.readAsArrayBuffer(file);
            } else {
                reader.readAsText(file);
            }
        });
    }, [ctx]);

    const saveFile = useCallback(
        (uploadedFile) => {
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
                    open: uploadedFile.selected,
                }).then((success) => {
                    if (success) {
                        ctx.setTrackLoading((prev) => prev.filter((n) => n !== loadingName));
                    }
                });
            }
        },
        [ctx, ltx]
    );

    return useGpxImport({
        canImport,
        isTrackFile: isCloudTrackFile,
        onFilesSelected,
        readFile,
        saveFile,
    });
}

function isCloudTrackFile(file) {
    const name = file?.name?.toLowerCase() ?? '';

    return CLOUD_TRACK_EXTENSIONS.some((ext) => name.endsWith(ext));
}
