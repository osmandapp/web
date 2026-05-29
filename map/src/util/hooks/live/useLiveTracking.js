import { useContext, useEffect, useRef, useCallback, useState } from 'react';
import { Client } from '@stomp/stompjs';
import AppContext, { LIVE_TRACKS_STORAGE_KEY } from '../../../context/AppContext';
import { getColorByIndex } from '../../../menu/analyzer/util/SegmentColorizer';

export default function useLiveTracking() {
    const ctx = useContext(AppContext);

    const clientRef = useRef(null);
    const subscribedRef = useRef(new Set());

    const [connected, setConnected] = useState(false);

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
                data.shareLocations.forEach((loc, index) => {
                    let locations = [];
                    if (Array.isArray(loc.allLocations)) {
                        locations = loc.allLocations;
                    } else if (loc.lastLocation) {
                        locations = [loc.lastLocation];
                    }
                    const existing = byTranslation[loc.nickname];
                    const color = existing?.color ?? getColorByIndex(index, data.shareLocations.length);
                    byTranslation[loc.nickname] = {
                        nickname: loc.nickname,
                        color,
                        startTime: loc.startTime ?? existing?.startTime ?? Date.now(),
                        locations,
                    };
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

    // Connect once on mount
    useEffect(() => {
        const client = new Client({
            brokerURL: process.env.REACT_APP_WS_URL,
            reconnectDelay: 5000,
            onConnect: () => {
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

    return { addTranslation, removeTranslation };
}
