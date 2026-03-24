import { useCallback, useContext, useEffect, useState } from 'react';
import AppContext from '../../../context/AppContext';
import { processDisplayTrack } from '../../../manager/track/TracksManager';
import { getFileStorage, GPX } from '../../../manager/GlobalManager';
import { useRecentDataSaver } from './useRecentDataSaver';

export function useTrackVisibility({ file, smartf = null, setLoading = null, setError = null }) {
    const ctx = useContext(AppContext);
    const recentSaver = useRecentDataSaver();
    const [fileStorage, setFileStorage] = useState(() => getFileStorage({ ctx, smartf, type: GPX }));

    useEffect(() => {
        setFileStorage(getFileStorage({ ctx, smartf, type: GPX }));
    }, [ctx.gpxFiles, ctx.shareWithMeFiles, smartf]);

    const checkedSwitch = fileStorage?.[file.name]?.url ? fileStorage[file.name].showOnMap : false;

    const toggleVisibility = useCallback(
        async (visible, { showInfo = false, zoomToTrack = false } = {}) => {
            const fs = fileStorage || getFileStorage({ ctx, smartf, type: GPX });
            await processDisplayTrack({
                setLoading,
                showOnMap: visible,
                visible,
                showInfo,
                zoomToTrack,
                smartf,
                file,
                ctx,
                setError,
                fileStorage: fs,
                setFileStorage,
                recentSaver,
            });
        },
        [file, smartf, ctx, fileStorage, recentSaver, setLoading, setError]
    );

    return { toggleVisibility, fileStorage, checkedSwitch };
}
