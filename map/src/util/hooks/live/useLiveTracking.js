import { useContext, useEffect, useRef, useCallback, useState } from 'react';
import { Client } from '@stomp/stompjs';
import AppContext, { LIVE_TRACKS_STORAGE_KEY } from '../../../context/AppContext';
import { getColorByIndex } from '../../../menu/analyzer/util/SegmentColorizer';

export default function useLiveTracking() {
    const ctx = useContext(AppContext);

    const clientRef = useRef(null);
    const subscribedRef = useRef(new Set());

    // Stores { onSuccess, onError } for a pending /create request.
    const pendingCreateRef = useRef(null);

    const [connected, setConnected] = useState(false);

    // Manages geolocation watch: starts when myBroadcastTid is set and not paused, stops otherwise.
    useEffect(() => {
        if (!ctx.myBroadcastTid || ctx.isMyBroadcastPaused || !navigator.geolocation) return;

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude, altitude, speed, accuracy } = position.coords;
                const params = new URLSearchParams({
                    lat: latitude,
                    lon: longitude,
                    timestamp: position.timestamp,
                });
                if (speed != null) params.set('speed', speed);
                if (altitude != null) params.set('altitude', altitude);
                if (accuracy != null) params.set('hdop', accuracy);
                fetch(`/mapapi/translation/msg?${params}`).catch(() => {});
            },
            () => {},
            { enableHighAccuracy: true, maximumAge: 5000 }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, [ctx.myBroadcastTid, ctx.isMyBroadcastPaused]);

    // Prepends a new location point to the participant's history.
    // Newest point is always at index 0.
    const updateParticipant = useCallback(
        (translationId, nickname, point) => {
            ctx.setLiveParticipants((prev) => {
                const byTranslation = prev[translationId] ?? {};
                const existing = byTranslation[nickname];
                const color = existing?.color ?? getColorByIndex(Object.keys(byTranslation).length, 100);
                const locations = existing?.locations ?? [];
                return {
                    ...prev,
                    [translationId]: {
                        ...byTranslation,
                        [nickname]: {
                            nickname,
                            color,
                            active: existing?.active ?? true,
                            startTime: existing?.startTime ?? Date.now(),
                            locations: [point, ...locations],
                        },
                    },
                };
            });
        },
        [ctx.setLiveParticipants]
    );

    // Handles METADATA message: server's initial snapshot sent in response to /load.
    // Sets all participants at once with full track history (allLocations) or last known point.
    const handleMetadata = useCallback(
        (translationId, data) => {
            if (!Array.isArray(data.shareLocations)) return;

            ctx.setLiveParticipants((prev) => {
                const byTranslation = { ...(prev[translationId] ?? {}) };
                const activeNicknames = new Set();
                data.shareLocations.forEach((loc, index) => {
                    activeNicknames.add(loc.nickname);
                    let historyLocations = [];
                    if (Array.isArray(loc.allLocations)) {
                        historyLocations = loc.allLocations;
                    } else if (loc.lastLocation) {
                        historyLocations = [loc.lastLocation];
                    }
                    const existing = byTranslation[loc.nickname];
                    const color = existing?.color ?? getColorByIndex(index, data.shareLocations.length);
                    // Keep live points that arrived before history loaded and are newer than history head
                    const historyHeadTime = historyLocations[0]?.time ?? 0;
                    const livePoints = (existing?.locations ?? []).filter((p) => (p.time ?? 0) > historyHeadTime);
                    const combined = [...livePoints, ...historyLocations];
                    combined.sort((a, b) => (b.time ?? 0) - (a.time ?? 0));
                    byTranslation[loc.nickname] = {
                        nickname: loc.nickname,
                        color,
                        active: true,
                        startTime: loc.startTime ?? existing?.startTime ?? Date.now(),
                        locations: combined,
                    };
                });
                // Mark participants no longer sharing as inactive
                Object.keys(byTranslation).forEach((nick) => {
                    if (!activeNicknames.has(nick)) {
                        byTranslation[nick] = { ...byTranslation[nick], active: false };
                    }
                });
                return { ...prev, [translationId]: byTranslation };
            });
        },
        [ctx.setLiveParticipants]
    );

    // Subscribes to a STOMP topic for the given translation and requests initial data.
    // Skips silently if already subscribed.
    const subscribeToTranslation = useCallback(
        (client, translationId) => {
            if (subscribedRef.current.has(translationId)) {
                return;
            }

            subscribedRef.current.add(translationId);

            client.subscribe(`/topic/translation/${translationId}`, (message) => {
                const msg = JSON.parse(message.body);
                if (msg.type === 'LOCATION') {
                    const point = msg.content?.point;
                    if (msg.sender && point) {
                        updateParticipant(translationId, msg.sender, point);
                    }
                } else if (msg.type === 'METADATA') {
                    handleMetadata(translationId, msg.content);
                } else if (msg.type === 'JOIN' && msg.content) {
                    ctx.setLiveViewers((prev) => {
                        const byTranslation = { ...(prev[translationId] ?? {}) };
                        byTranslation[msg.content] = true;
                        return { ...prev, [translationId]: byTranslation };
                    });
                } else if (msg.type === 'LEAVE' && msg.content) {
                    ctx.setLiveViewers((prev) => {
                        const byTranslation = { ...(prev[translationId] ?? {}) };
                        delete byTranslation[msg.content];
                        return { ...prev, [translationId]: byTranslation };
                    });
                } else if (msg.type === 'DELETE') {
                    // Owner deleted the translation — remove it from all client state.
                    ctx.setLiveTranslations((prev) => {
                        const updated = prev.filter((t) => t.id !== translationId);
                        localStorage.setItem(LIVE_TRACKS_STORAGE_KEY, JSON.stringify(updated));
                        return updated;
                    });
                    ctx.setLiveParticipants((prev) => {
                        const next = { ...prev };
                        delete next[translationId];
                        return next;
                    });
                    ctx.setSelectedLiveTranslation((sel) => (sel?.id === translationId ? null : sel));
                    subscribedRef.current.delete(translationId);
                }
            });

            client.publish({ destination: `/app/translation/${translationId}/load`, body: '{}' });
        },
        [updateParticipant, handleMetadata, ctx.setLiveViewers]
    );

    // Adds a translation to the saved list and persists to localStorage.
    // If already saved, just selects it.
    const addTranslation = useCallback(
        (id, name) => {
            const existing = ctx.liveTranslations.find((t) => t.id === id);
            if (existing) {
                ctx.setSelectedLiveTranslation(existing);
                return;
            }

            const autoName = name?.trim() || `Live Track ${ctx.liveTranslations.length + 1}`;
            const newTranslation = { id, name: autoName };
            const updated = [...ctx.liveTranslations, newTranslation];
            ctx.setLiveTranslations(updated);
            localStorage.setItem(LIVE_TRACKS_STORAGE_KEY, JSON.stringify(updated));
            ctx.setSelectedLiveTranslation(newTranslation);

            const client = clientRef.current;
            if (client?.connected) {
                subscribeToTranslation(client, id);
            }
        },
        [ctx.liveTranslations, ctx.setLiveTranslations, ctx.setSelectedLiveTranslation, subscribeToTranslation]
    );

    // Removes a translation from the saved list, clears its participants, and unsubscribes.
    const removeTranslation = useCallback(
        (id) => {
            const updated = ctx.liveTranslations.filter((t) => t.id !== id);
            ctx.setLiveTranslations(updated);
            localStorage.setItem(LIVE_TRACKS_STORAGE_KEY, JSON.stringify(updated));
            subscribedRef.current.delete(id);
            ctx.setLiveParticipants((prev) => {
                const next = { ...prev };
                delete next[id];
                return next;
            });
            if (ctx.selectedLiveTranslation?.id === id) {
                ctx.setSelectedLiveTranslation(null);
            }
        },
        [
            ctx.liveTranslations,
            ctx.setLiveTranslations,
            ctx.setLiveParticipants,
            ctx.selectedLiveTranslation,
            ctx.setSelectedLiveTranslation,
        ]
    );

    // Starts (or resumes) sharing for the given translation.
    // Also stops sharing any previously active translation.
    const startSharing = useCallback(
        (translationId) => {
            if (ctx.myBroadcastTid && ctx.myBroadcastTid !== translationId) {
                clientRef.current?.publish({
                    destination: `/app/translation/${ctx.myBroadcastTid}/stopSharing`,
                    body: '{}',
                });
            }
            clientRef.current?.publish({
                destination: `/app/translation/${translationId}/startSharing`,
                body: '{}',
            });
            ctx.setMyBroadcastTid(translationId);
            ctx.setIsMyBroadcastPaused(false);
        },
        [ctx.myBroadcastTid, ctx.setMyBroadcastTid, ctx.setIsMyBroadcastPaused]
    );

    // Pauses sharing: notifies server and stops geo broadcast, but keeps myBroadcastTid
    // so the owner can resume. Also used by participants to stop sharing their location.
    const pauseSharing = useCallback(() => {
        if (ctx.myBroadcastTid) {
            clientRef.current?.publish({
                destination: `/app/translation/${ctx.myBroadcastTid}/stopSharing`,
                body: '{}',
            });
        }
        ctx.setIsMyBroadcastPaused(true);
    }, [ctx.myBroadcastTid, ctx.setIsMyBroadcastPaused]);

    // Creates a new translation on the server, saves it to the list, starts
    // sharing the user's location, and calls onCreated(translation).
    // onGeoError(errorKey) is called if geolocation is denied or unavailable.
    const createTranslation = useCallback(
        (name, durationHours, onCreated, onGeoError, onCreateError) => {
            // Stop any active sharing before creating a new translation.
            if (ctx.myBroadcastTid) {
                clientRef.current?.publish({
                    destination: `/app/translation/${ctx.myBroadcastTid}/stopSharing`,
                    body: '{}',
                });
                ctx.setMyBroadcastTid(null);
                ctx.setIsMyBroadcastPaused(false);
            }

            pendingCreateRef.current = {
                onSuccess: (id) => {
                    const autoName = name?.trim() || `Live Track ${ctx.liveTranslations.length + 1}`;
                    // isOwner: true marks this client as the creator of this translation.
                    const newTranslation = { id, name: autoName, isOwner: true };
                    const updated = [...ctx.liveTranslations, newTranslation];
                    ctx.setLiveTranslations(updated);
                    localStorage.setItem(LIVE_TRACKS_STORAGE_KEY, JSON.stringify(updated));
                    ctx.setSelectedLiveTranslation(newTranslation);
                    const client = clientRef.current;
                    if (client?.connected) {
                        subscribeToTranslation(client, id);
                    }
                    // Set sharing state — geo watch starts automatically via useEffect.
                    ctx.setMyBroadcastTid(id);
                    ctx.setIsMyBroadcastPaused(false);
                    clientRef.current?.publish({
                        destination: `/app/translation/${id}/startSharing`,
                        body: '{}',
                    });
                    onCreated?.(newTranslation);
                },
                onError: onCreateError,
            };

            clientRef.current?.publish({
                destination: '/app/translation/create',
                body: JSON.stringify({ durationHours }),
            });
        },
        [
            ctx.myBroadcastTid,
            ctx.setMyBroadcastTid,
            ctx.setIsMyBroadcastPaused,
            ctx.liveTranslations,
            ctx.setLiveTranslations,
            ctx.setSelectedLiveTranslation,
            subscribeToTranslation,
        ]
    );

    // Deletes the translation for all viewers. Only works if the current user is the owner.
    const deleteTranslationForAll = useCallback(
        (id) => {
            if (ctx.myBroadcastTid === id) {
                clientRef.current?.publish({
                    destination: `/app/translation/${id}/stopSharing`,
                    body: '{}',
                });
                ctx.setMyBroadcastTid(null);
                ctx.setIsMyBroadcastPaused(false);
            }
            clientRef.current?.publish({ destination: `/app/translation/${id}/delete`, body: '{}' });
        },
        [ctx.myBroadcastTid, ctx.setMyBroadcastTid, ctx.setIsMyBroadcastPaused]
    );

    // Connect once on mount
    useEffect(() => {
        const client = new Client({
            brokerURL: process.env.REACT_APP_WS_URL,
            reconnectDelay: 5000,
            onConnect: () => {
                // Subscribe to private queue to receive responses to /load (history snapshot)
                // and to /create (new translation confirmation).
                client.subscribe('/user/queue/updates', (message) => {
                    const msg = JSON.parse(message.body);
                    if (msg.type === 'TRANSLATION' && msg.data?.id) {
                        if (pendingCreateRef.current && msg.data.shareLocations == null) {
                            // Response to /create — fire the callback and clear it.
                            pendingCreateRef.current.onSuccess(msg.data.id);
                            pendingCreateRef.current = null;
                        } else {
                            handleMetadata(msg.data.id, msg.data);
                        }
                    } else if (msg.type === 'ERROR' && pendingCreateRef.current) {
                        // Server rejected /create (e.g. not authenticated).
                        pendingCreateRef.current.onError?.(msg.data);
                        pendingCreateRef.current = null;
                    }
                });
                setConnected(true);
            },
            onDisconnect: () => setConnected(false),
        });

        client.activate();
        clientRef.current = client;

        return () => {
            client.deactivate();
            clientRef.current = null;
            subscribedRef.current.clear();
            setConnected(false);
        };
    }, []);

    // Subscribe to saved translations and to the currently selected (preview) translation
    useEffect(() => {
        if (!connected) return;
        const client = clientRef.current;
        if (!client?.connected) return;
        ctx.liveTranslations.forEach((t) => subscribeToTranslation(client, t.id));
        const sel = ctx.selectedLiveTranslation;
        if (sel && !ctx.liveTranslations.find((t) => t.id === sel.id)) {
            subscribeToTranslation(client, sel.id);
        }
    }, [connected, ctx.liveTranslations, ctx.selectedLiveTranslation, subscribeToTranslation]);

    return {
        addTranslation,
        removeTranslation,
        createTranslation,
        deleteTranslationForAll,
        startSharing,
        pauseSharing,
    };
}
