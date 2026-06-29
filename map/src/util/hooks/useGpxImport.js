import { useCallback, useEffect } from 'react';
import { useMutator } from '../Utils';

export default function useGpxImport({ canImport, isTrackFile, onFilesSelected, readFile, saveFile }) {
    const [uploadedFiles, mutateUploadedFiles] = useMutator({});

    useEffect(() => {
        for (const file in uploadedFiles) {
            saveFile(uploadedFiles[file]);
            mutateUploadedFiles((o) => delete o[file]);
            break; // process 1 file per 1 render
        }
    }, [saveFile, uploadedFiles, mutateUploadedFiles]);

    const importGpxFiles = useCallback(
        (fileList, folder) => {
            if (canImport && !canImport()) {
                return;
            }

            const files = Array.from(fileList || []).filter(isTrackFile);
            if (files.length === 0) {
                return;
            }

            const selected = files.length === 1;
            onFilesSelected?.(files, folder);

            files.forEach(async (file) => {
                const uploadedFile = await readFile(file, { folder, selected });
                if (uploadedFile) {
                    mutateUploadedFiles((o) => (o[file.name] = uploadedFile));
                }
            });
        },
        [canImport, isTrackFile, mutateUploadedFiles, onFilesSelected, readFile]
    );

    return { importGpxFiles };
}
