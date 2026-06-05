import { useContext, useEffect, useRef, useCallback, useState } from 'react';
import { Client } from '@stomp/stompjs';
import AppContext, { LIVE_TRACKS_STORAGE_KEY } from '../../../context/AppContext';
import { getColorByIndex } from '../../../menu/analyzer/util/SegmentColorizer';
import { encryptLocation, decryptLocation } from '../../livetracks/liveTrackCrypto';

// sessionStorage key to restore the active broadcast tid after page refresh.
const BROADCAST_TID_SESSION = '__liveTrackBroadcastTid__';

export default function useLiveTracking() {
    const ctx = useContext(AppContext);

    const clientRef = useRef(null);
    const subscribedRef = useRef(new Set());

    // Stores { onSuccess, onError } for a pending /create request.
    const pendingCreateRef = useRef(null);

    const [connected, setConnected] = useState(false);

    // Maps translationId → encryption key (hex string).
    const keysRef = useRef({});

    // Sync keysRef from saved translations and the current preview translation.
    // Runs whenever either changes so the LOCATION handler can always decrypt.
    useEffect(() => {
        ctx.liveTranslations.forEach((t) => {
            if (t.key) keysRef.current[t.id] = t.key;
        });
        if (ctx.selectedLiveTranslation?.key) keysRef.current[ctx.selectedLiveTranslation.id] = ctx.selectedLiveTranslation.key;
    }, [ctx.liveTranslations, ctx.selectedLiveTranslation]);

    // Manages geolocation watch: starts when myBroadcastTid is set, not paused, and STOMP is connected.
    // Stopping when disconnected prevents 404s during server restart / STOMP reconnect.
    useEffect(() => {
        if (!ctx.myBroadcastTid || ctx.isMyBroadcastPaused || !navigator.geolocation || !connected) return;

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude, altitude, speed, accuracy } = position.coords;
                const key = keysRef.current[ctx.myBroadcastTid];
                if (!key) return;
                const locationData = {
                    lat: latitude,
                    lon: longitude,
                    time: position.timestamp,
                    ...(speed != null && { speed }),
                    ...(altitude != null && { ele: altitude }),
                    ...(accuracy != null && { hdop: accuracy }),
                };
                encryptLocation(key, locationData)
                    .then((encData) => {
                        fetch(`/mapapi/translation/msg?encryptedData=${encodeURIComponent(encData)}`).catch(() => {});
                    })
                    .catch(() => {});
            },
            () => {},
            { enableHighAccuracy: true, maximumAge: 5000 }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, [ctx.myBroadcastTid, ctx.isMyBroadcastPaused, connected]);

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
    // Marks participants as active/inactive. Encrypted location history is populated
    // separately by processEncryptedHistory.
    const handleMetadata = useCallback(
        (translationId, data) => {
            if (!Array.isArray(data.shareLocations)) return;

            ctx.setLiveParticipants((prev) => {
                const byTranslation = { ...(prev[translationId] ?? {}) };
                const activeNicknames = new Set();
                data.shareLocations.forEach((loc, index) => {
                    activeNicknames.add(loc.nickname);
                    const existing = byTranslation[loc.nickname];
                    byTranslation[loc.nickname] = {
                        nickname: loc.nickname,
                        color: existing?.color ?? getColorByIndex(index, data.shareLocations.length),
                        active: true,
                        startTime: loc.startTime ?? existing?.startTime ?? Date.now(),
                        locations: existing?.locations ?? [],
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
                    const encryptedData = msg.content?.encryptedData;
                    const key = keysRef.current[translationId];
                    if (encryptedData && key && msg.sender) {
                        decryptLocation(key, encryptedData)
                            .then((decryptedPoint) => {
                                if (decryptedPoint) {
                                    updateParticipant(translationId, msg.sender, decryptedPoint);
                                }
                            })
                            .catch(() => {});
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
                    delete keysRef.current[translationId];
                }
            });

            client.publish({ destination: `/app/translation/${translationId}/load`, body: '{}' });
        },
        [updateParticipant, handleMetadata, ctx.setLiveViewers]
    );

    // Adds a translation to the saved list and persists to localStorage.
    // key (hex string) is optional — required for decryption; stored with the translation.
    // If already saved, just selects it (and updates the key if a better one is provided).
    const addLiveTrack = useCallback(
        (id, name, key) => {
            const existing = ctx.liveTranslations.find((t) => t.id === id);
            if (existing) {
                // Update key if we now have one but the stored translation doesn't.
                if (key && !existing.key) {
                    const updated = ctx.liveTranslations.map((t) => (t.id === id ? { ...t, key } : t));
                    ctx.setLiveTranslations(updated);
                    localStorage.setItem(LIVE_TRACKS_STORAGE_KEY, JSON.stringify(updated));
                    keysRef.current[id] = key;
                    ctx.setSelectedLiveTranslation({ ...existing, key });
                } else {
                    ctx.setSelectedLiveTranslation(existing);
                }
                return;
            }

            const autoName = name?.trim() || `Live Track ${ctx.liveTranslations.length + 1}`;
            const newTranslation = { id, name: autoName, ...(key ? { key } : {}) };
            if (key) keysRef.current[id] = key;
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
    const removeLiveTrack = useCallback(
        (id) => {
            const updated = ctx.liveTranslations.filter((t) => t.id !== id);
            ctx.setLiveTranslations(updated);
            localStorage.setItem(LIVE_TRACKS_STORAGE_KEY, JSON.stringify(updated));
            subscribedRef.current.delete(id);
            delete keysRef.current[id];
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
            sessionStorage.setItem(BROADCAST_TID_SESSION, translationId);
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
        sessionStorage.removeItem(BROADCAST_TID_SESSION);
        ctx.setIsMyBroadcastPaused(true);
    }, [ctx.myBroadcastTid, ctx.setIsMyBroadcastPaused]);

    // Creates a new translation on the server with a client-generated translationId and key.
    // The translationId MUST be SHA-256(key) so that the server ID is derivable from the key.
    // Saves the translation (with key) to the list, starts sharing, and calls onCreated(translation).
    // onGeoError(errorKey) is called if geolocation is denied or unavailable.
    const createLiveTrack = useCallback(
        (translationId, key, name, durationHours, onCreated, onGeoError, onCreateError) => {
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
                    const newTranslation = { id, name: autoName, key, isOwner: true };
                    keysRef.current[id] = key;
                    const updated = [...ctx.liveTranslations, newTranslation];
                    ctx.setLiveTranslations(updated);
                    localStorage.setItem(LIVE_TRACKS_STORAGE_KEY, JSON.stringify(updated));
                    ctx.setSelectedLiveTranslation(newTranslation);
                    const client = clientRef.current;
                    if (client?.connected) {
                        subscribeToTranslation(client, id);
                    }
                    // Set sharing state — geo watch starts automatically via useEffect.
                    sessionStorage.setItem(BROADCAST_TID_SESSION, id);
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
                body: JSON.stringify({ translationId, durationHours }),
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
    const deleteLiveTrack = useCallback(
        (id) => {
            if (ctx.myBroadcastTid === id) {
                clientRef.current?.publish({
                    destination: `/app/translation/${id}/stopSharing`,
                    body: '{}',
                });
                sessionStorage.removeItem(BROADCAST_TID_SESSION);
                ctx.setMyBroadcastTid(null);
                ctx.setIsMyBroadcastPaused(false);
            }
            clientRef.current?.publish({ destination: `/app/translation/${id}/delete`, body: '{}' });
        },
        [ctx.myBroadcastTid, ctx.setMyBroadcastTid, ctx.setIsMyBroadcastPaused]
    );

    // Decrypts encrypted LOCATION messages from the /load history snapshot and
    // populates liveParticipants so the last known positions are visible immediately.
    const processEncryptedHistory = useCallback(
        (translationId, history) => {
            const key = keysRef.current[translationId];
            if (!key || !Array.isArray(history) || history.length === 0) {
                return;
            }

            const encMessages = history.filter((m) => m.type === 'LOCATION' && m.content?.encryptedData && m.sender);
            if (encMessages.length === 0) return;

            Promise.all(
                encMessages.map((m) =>
                    decryptLocation(key, m.content.encryptedData).then((pt) => (pt ? { sender: m.sender, pt } : null))
                )
            ).then((results) => {
                const pointsBySender = {};
                results.filter(Boolean).forEach(({ sender, pt }) => {
                    if (!pointsBySender[sender]) pointsBySender[sender] = [];
                    pointsBySender[sender].push(pt);
                });
                if (Object.keys(pointsBySender).length === 0) return;

                ctx.setLiveParticipants((prev) => {
                    const byTranslation = { ...(prev[translationId] ?? {}) };
                    Object.entries(pointsBySender).forEach(([nickname, pts], index) => {
                        pts.sort((a, b) => (b.time ?? 0) - (a.time ?? 0));
                        const existing = byTranslation[nickname];
                        const color =
                            existing?.color ?? getColorByIndex(Object.keys(byTranslation).length + index, 100);
                        // Merge with existing live points, deduplicate by time.
                        const existingTimes = new Set((existing?.locations ?? []).map((p) => p.time));
                        const newPts = pts.filter((p) => !existingTimes.has(p.time));
                        const combined = [...(existing?.locations ?? []), ...newPts];
                        combined.sort((a, b) => (b.time ?? 0) - (a.time ?? 0));
                        byTranslation[nickname] = {
                            nickname,
                            color,
                            active: existing?.active ?? true,
                            startTime: existing?.startTime ?? Date.now(),
                            locations: combined,
                        };
                    });
                    return { ...prev, [translationId]: byTranslation };
                });
            });
        },
        [ctx.setLiveParticipants]
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
                            processEncryptedHistory(msg.data.id, msg.data.history);
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
        // Re-register sharing session with the server on every reconnect
        if (ctx.myBroadcastTid && !ctx.isMyBroadcastPaused) {
            client.publish({ destination: `/app/translation/${ctx.myBroadcastTid}/startSharing`, body: '{}' });
        } else if (!ctx.myBroadcastTid) {
            // Restore from sessionStorage after page refresh.
            const savedTid = sessionStorage.getItem(BROADCAST_TID_SESSION);
            if (savedTid && ctx.liveTranslations.find((t) => t.id === savedTid)) {
                ctx.setMyBroadcastTid(savedTid);
                ctx.setIsMyBroadcastPaused(false);
                client.publish({ destination: `/app/translation/${savedTid}/startSharing`, body: '{}' });
            }
        }
    }, [connected, ctx.liveTranslations, ctx.selectedLiveTranslation, subscribeToTranslation]);

    return {
        addLiveTrack,
        removeLiveTrack,
        createLiveTrack,
        deleteLiveTrack,
        startSharing,
        pauseSharing,
    };
}
