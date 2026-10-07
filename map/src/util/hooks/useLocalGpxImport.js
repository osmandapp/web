import { useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import TracksManager, { GPX_FILE_EXT } from '../../manager/track/TracksManager';
import { saveTrackToLocal } from '../../manager/track/SaveTrackManager';
import useGpxImport from './useGpxImport';

export default function useLocalGpxImport() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const readFile = useCallback(
        async (file, { selected }) => {
            const track = await TracksManager.getTrackData(file);
            if (track) {
                track.name = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
                return { track, selected };
            }
            ctx.setTrackErrorMsg({
                title: t('web:import_error_title'),
                msg: t('web:import_error_msg', { name: file.name }),
            });
        },
        [ctx, t]
    );

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
