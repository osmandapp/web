import { useContext, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import { LIVE_TRACKS_URL, MAIN_URL_WITH_SLASH } from '../../../manager/GlobalManager';

const TID_PARAM = 'tid';
const NAME_PARAM = 'name';

// Derives live track state from the URL and syncs selectedLiveTranslation into context.
// Also handles share URL (?tid=...&name=...) on mount.
export default function useLiveTrackUrl({ addTranslation }) {
    const ctx = useContext(AppContext);
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const livePath = MAIN_URL_WITH_SLASH + LIVE_TRACKS_URL;
    const openLiveTracks = location.pathname.startsWith(livePath);
    const liveTid = openLiveTracks ? new URLSearchParams(location.search).get(TID_PARAM) : null;
    const selectedLiveTranslation = liveTid ? (ctx.liveTranslations.find((tr) => tr.id === liveTid) ?? null) : null;

    // Sync derived selectedLiveTranslation into context for LiveTrackLayer.
    useEffect(() => {
        ctx.setSelectedLiveTranslation(selectedLiveTranslation);
    }, [selectedLiveTranslation?.id]);

    // Handle share URL: ?tid=...&name=... (adds translation to list if not yet present).
    useEffect(() => {
        const tid = searchParams.get(TID_PARAM);
        if (tid) {
            const name = searchParams.get(NAME_PARAM) ?? '';
            addTranslation(tid, name);
        }
    }, []);

    return { openLiveTracks, selectedLiveTranslation };
}
