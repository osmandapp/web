import { useContext, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import { LIVE_TRACKS_URL, MAIN_URL_WITH_SLASH } from '../../../manager/GlobalManager';

const TID_PARAM = 'tid';
const NAME_PARAM = 'name';

// Derives live track state from the URL and syncs selectedLiveTranslation into context.
// For saved translations — picks from liveTranslations list.
// For preview (share URL, not yet saved) — constructs from URL params directly.
export default function useLiveTrackUrl() {
    const ctx = useContext(AppContext);
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const livePath = MAIN_URL_WITH_SLASH + LIVE_TRACKS_URL;
    const openLiveTracks = location.pathname.startsWith(livePath);
    const liveTid = openLiveTracks ? searchParams.get(TID_PARAM) : null;

    useEffect(() => {
        if (!liveTid) {
            ctx.setSelectedLiveTranslation(null);
            return;
        }
        const fromList = ctx.liveTranslations.find((t) => t.id === liveTid);
        if (fromList) {
            ctx.setSelectedLiveTranslation(fromList);
        } else {
            const name = searchParams.get(NAME_PARAM) ?? '';
            ctx.setSelectedLiveTranslation({ id: liveTid, name });
        }
    }, [liveTid]);

    return { openLiveTracks };
}
