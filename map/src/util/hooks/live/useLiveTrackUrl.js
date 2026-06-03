import { useContext, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import { LIVE_TRACKS_URL, MAIN_URL_WITH_SLASH } from '../../../manager/GlobalManager';
import { LIVE_TRACK_KEY_SESSION } from '../../livetracks/liveTrackUtils';

const TID_PARAM = 'tid';
const NAME_PARAM = 'name';
const KEY_HEX_RE = /^[0-9a-f]{64}$/;

// Share URL format: /map/live/?tid=<16chars>&name=<name>#<rawkey>
// Key is extracted from the fragment by OsmAndMap before leaflet-hash runs,
// saved to sessionStorage, and read here.
export default function useLiveTrackUrl() {
    const ctx = useContext(AppContext);
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const livePath = MAIN_URL_WITH_SLASH + LIVE_TRACKS_URL;
    const openLiveTracks = location.pathname.startsWith(livePath);

    useEffect(() => {
        if (!openLiveTracks) {
            ctx.setSelectedLiveTranslation(null);
            return;
        }

        const tid = searchParams.get(TID_PARAM);
        if (!tid) {
            ctx.setSelectedLiveTranslation(null);
            return;
        }

        let key = null;
        try {
            const saved = sessionStorage.getItem(LIVE_TRACK_KEY_SESSION);
            if (saved && KEY_HEX_RE.test(saved)) {
                key = saved;
                sessionStorage.removeItem(LIVE_TRACK_KEY_SESSION);
            }
        } catch (_) {}

        const fromList = ctx.liveTranslations.find((t) => t.id === tid);
        if (fromList) {
            const entry = key && !fromList.key ? { ...fromList, key } : fromList;
            ctx.setSelectedLiveTranslation(entry);
        } else {
            const name = searchParams.get(NAME_PARAM) ?? '';
            ctx.setSelectedLiveTranslation({ id: tid, name, ...(key ? { key } : {}) });
        }
    }, [openLiveTracks, location.search]);

    return { openLiveTracks };
}
