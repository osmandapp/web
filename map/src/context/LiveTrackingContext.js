import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { LIVE_TRACKS_URL, MAIN_URL_WITH_SLASH } from '../manager/GlobalManager';
import { LIVE_TRACK_KEY_SESSION, LIVE_TRACKS_STORAGE_KEY } from '../util/livetracks/liveTrackUtils';
import useLiveTracking from '../util/hooks/live/useLiveTracking';

const LiveTrackingContext = React.createContext();

const TID_PARAM = 'tid';
const NAME_PARAM = 'name';
const KEY_HEX_RE = /^[0-9a-f]{64}$/;

export const LiveTrackingProvider = ({ children }) => {
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const [liveTranslations, setLiveTranslations] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem(LIVE_TRACKS_STORAGE_KEY)) ?? [];
        } catch {
            return [];
        }
    });
    const [liveParticipants, setLiveParticipants] = useState({});
    const [liveViewers, setLiveViewers] = useState({});
    // Pending share-permission requests shown to the owner as map notifications.
    const [liveShareRequests, setLiveShareRequests] = useState([]); // [{ translationId, userId, nickname }]
    // approve/deny callbacks published over websocket; wired by useLiveTracking.
    const [liveShareActions, setLiveShareActions] = useState(null);
    const [selectedLiveTranslation, setSelectedLiveTranslation] = useState(null);
    const [followLiveLocation, setFollowLiveLocation] = useState(null);
    const [myBroadcastTid, setMyBroadcastTid] = useState(null);
    const [isMyBroadcastPaused, setIsMyBroadcastPaused] = useState(false);

    const livePath = MAIN_URL_WITH_SLASH + LIVE_TRACKS_URL;
    const openLiveTracks = location.pathname.startsWith(livePath);

    // Sync the selected translation from the URL (?tid=...#<key>), restoring the AES key the map
    // stashed in sessionStorage before leaflet-hash cleared the fragment.
    useEffect(() => {
        if (!openLiveTracks) {
            setSelectedLiveTranslation(null);
            return;
        }
        const tid = searchParams.get(TID_PARAM);
        if (!tid) {
            setSelectedLiveTranslation(null);
            return;
        }
        let key = null;
        try {
            const saved = sessionStorage.getItem(LIVE_TRACK_KEY_SESSION);
            if (saved && KEY_HEX_RE.test(saved)) {
                key = saved;
                sessionStorage.removeItem(LIVE_TRACK_KEY_SESSION);
            }
        } catch {}

        const fromList = liveTranslations.find((t) => t.id === tid);
        if (fromList) {
            const entry = key && !fromList.key ? { ...fromList, key } : fromList;
            setSelectedLiveTranslation(entry);
        } else {
            const name = searchParams.get(NAME_PARAM) ?? '';
            setSelectedLiveTranslation({ id: tid, name, ...(key ? { key } : {}) });
        }
    }, [openLiveTracks, location.search]);

    const liveState = useMemo(
        () => ({
            liveTranslations,
            setLiveTranslations,
            liveParticipants,
            setLiveParticipants,
            liveViewers,
            setLiveViewers,
            liveShareRequests,
            setLiveShareRequests,
            liveShareActions,
            setLiveShareActions,
            selectedLiveTranslation,
            setSelectedLiveTranslation,
            followLiveLocation,
            setFollowLiveLocation,
            myBroadcastTid,
            setMyBroadcastTid,
            isMyBroadcastPaused,
            setIsMyBroadcastPaused,
        }),
        [
            liveTranslations,
            liveParticipants,
            liveViewers,
            liveShareRequests,
            liveShareActions,
            selectedLiveTranslation,
            followLiveLocation,
            myBroadcastTid,
            isMyBroadcastPaused,
        ]
    );

    // Hold the WebSocket only when live tracks are in use: viewing the page, broadcasting, or having bookmarked translations
    const enabled = openLiveTracks || !!myBroadcastTid || liveTranslations.length > 0;
    const api = useLiveTracking(liveState, enabled);
    const value = useMemo(() => ({ ...liveState, ...api, openLiveTracks }), [liveState, api, openLiveTracks]);

    return <LiveTrackingContext.Provider value={value}>{children}</LiveTrackingContext.Provider>;
};

export default LiveTrackingContext;
