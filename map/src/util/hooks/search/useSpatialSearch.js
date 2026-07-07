import { useCallback, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppContext, {
    SEARCH_ENGINE_CLASSIC,
    SEARCH_ENGINE_SPATIAL,
    SPATIAL_SEARCH_STORAGE_KEY,
} from '../../../context/AppContext';
import { liveHash } from '../../../manager/GlobalManager';

const ENGINE_KEY = 'engine';

export function engineFromSpatial(on) {
    return on ? SEARCH_ENGINE_SPATIAL : SEARCH_ENGINE_CLASSIC;
}

export default function useSpatialSearch() {
    const ctx = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();

    const urlEngine = new URLSearchParams(location.search).get(ENGINE_KEY);

    useEffect(() => {
        if (!urlEngine) return;
        const spatial = urlEngine === SEARCH_ENGINE_SPATIAL;
        if (ctx.spatialSearch !== spatial) {
            ctx.setSpatialSearch(spatial);
        }
    }, [urlEngine]);

    const setSpatial = useCallback(
        (on) => {
            ctx.setSpatialSearch(on);
            localStorage.setItem(SPATIAL_SEARCH_STORAGE_KEY, on ? 'yes' : 'no');
            const search = new URLSearchParams(location.search);
            search.set(ENGINE_KEY, engineFromSpatial(on));
            navigate({ pathname: location.pathname, search: `?${search}`, hash: liveHash() });
        },
        [ctx, location, navigate]
    );

    return { spatial: ctx.spatialSearch, setSpatial };
}
