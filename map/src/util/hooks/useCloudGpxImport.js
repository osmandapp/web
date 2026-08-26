import { useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import LoginContext from '../../context/LoginContext';
import { GPX_FILE_EXT, KMZ_FILE_EXT, validName } from '../../manager/track/TracksManager';
import { createTrackFreeName, removeFileExtension, saveTrackToCloud } from '../../manager/track/SaveTrackManager';
import useGpxImport from './useGpxImport';

export const CLOUD_TRACK_EXTENSIONS = ['.gpx', '.kmz', '.kml'];
export const CLOUD_TRACK_ACCEPT = CLOUD_TRACK_EXTENSIONS.join(', ');

export default function useCloudGpxImport() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const { t } = useTranslation();

    const canImport = useCallback(() => ltx.isProAccount(), [ltx]);

    const onFilesSelected = useCallback(
        (files, folder) => {
            const occupiedFileNames = new Set(
                ctx.trackLoading.filter((lt) => lt.folder === folder).map((lt) => removeFileExtension(lt.name))
            );
            const freeNames = files.map((file) => {
                const freeName = createTrackFreeName(
                    removeFileExtension(file.name),
                    ctx.tracksGroups,
                    folder,
                    null,
                    occupiedFileNames
                );
                occupiedFileNames.add(freeName);
                return freeName;
            });
            ctx.setTrackLoading((prev) => [
                ...prev,
                ...freeNames.map((freeName) => ({ name: freeName + GPX_FILE_EXT, folder })),
            ]);
            return freeNames;
        },
        [ctx]
    );

    const readFile = useCallback(
        (file, { folder, selected, freeName }) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                const onFail = () => {
                    ctx.setTrackErrorMsg({
                        title: t('web:import_error_title'),
                        msg: t('web:import_error_msg', { name: file.name }),
                    });
                    ctx.setTrackLoading((prev) =>
                        prev.filter((lt) => !(lt.name === freeName + GPX_FILE_EXT && lt.folder === folder))
                    );
                    resolve(null);
                };
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
                            freeName,
                        });
                    } else {
                        onFail();
                    }
                });
                reader.addEventListener('error', onFail);
                reader.addEventListener('abort', onFail);
                if (file.name.toLowerCase().endsWith(KMZ_FILE_EXT)) {
                    reader.readAsArrayBuffer(file);
                } else {
                    reader.readAsText(file);
                }
            });
        },
        [ctx]
    );

    const saveFile = useCallback(
        (uploadedFile) => {
            const { folder, freeName } = uploadedFile;
            if (validName(uploadedFile.name) && freeName) {
                const freeLoadingName = freeName + GPX_FILE_EXT;
                saveTrackToCloud({
                    ctx,
                    ltx,
                    currentFolder: folder,
                    fileName: freeName,
                    type: 'GPX',
                    uploadedFile,
                    open: uploadedFile.selected,
                }).finally(() => {
                    ctx.setTrackLoading((prev) =>
                        prev.filter((lt) => !(lt.name === freeLoadingName && lt.folder === folder))
                    );
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
