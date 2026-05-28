import { useContext, useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import AppContext from '../../context/AppContext';
import { panToVisibleCenter } from './MapStateLayer';

export default function LiveTrackLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    // { [translationId]: { [nickname]: { polyline, marker } } }
    const layersRef = useRef({});
    // track whether we've already panned for the current selection
    const pannedForRef = useRef(null);

    function removeTidLayers(tid) {
        if (!layersRef.current[tid]) return;
        Object.values(layersRef.current[tid]).forEach(({ polyline, marker }) => {
            if (polyline) map.removeLayer(polyline);
            if (marker) map.removeLayer(marker);
        });
        delete layersRef.current[tid];
    }

    function removeAllLayers() {
        Object.keys(layersRef.current).forEach((tid) => removeTidLayers(tid));
    }

    useEffect(() => {
        const selectedTid = ctx.selectedLiveTranslation?.id ?? null;

        // Remove layers for any translation that is not currently selected
        Object.keys(layersRef.current).forEach((tid) => {
            if (tid !== selectedTid) removeTidLayers(tid);
        });

        if (!selectedTid) return;

        const byNickname = ctx.liveParticipants?.[selectedTid];
        if (!byNickname) return;

        if (!layersRef.current[selectedTid]) layersRef.current[selectedTid] = {};

        const activeNicks = new Set(Object.keys(byNickname));

        // Remove layers for participants no longer present in selected translation
        Object.keys(layersRef.current[selectedTid]).forEach((nick) => {
            if (!activeNicks.has(nick)) {
                const { polyline, marker } = layersRef.current[selectedTid][nick];
                if (polyline) map.removeLayer(polyline);
                if (marker) map.removeLayer(marker);
                delete layersRef.current[selectedTid][nick];
            }
        });

        Object.values(byNickname).forEach((participant) => {
            const { nickname, color, locations } = participant;
            if (!locations || locations.length === 0) return;

            // newest at index 0, Leaflet needs [lat, lon]
            const latLngs = locations.map((l) => [l.lat, l.lon]);
            const lastLoc = locations[0];

            const existing = layersRef.current[selectedTid][nickname];

            if (existing) {
                existing.polyline.setLatLngs(latLngs);
                existing.marker.setLatLng([lastLoc.lat, lastLoc.lon]);
            } else {
                const polyline = L.polyline(latLngs, { color, weight: 4, opacity: 0.85 }).addTo(map);
                const iconHtml = `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2px solid #fff;box-shadow:0 0 4px rgba(0,0,0,.5)"></div>`;
                const icon = L.divIcon({ html: iconHtml, className: '', iconSize: [14, 14], iconAnchor: [7, 7] });
                const marker = L.marker([lastLoc.lat, lastLoc.lon], { icon }).addTo(map);
                marker.bindTooltip(nickname, { permanent: false, direction: 'top', offset: [0, -10] });
                layersRef.current[selectedTid][nickname] = { polyline, marker };
            }
        });
    }, [ctx.liveParticipants, ctx.selectedLiveTranslation]);

    function panToTranslation(translationId) {
        const participants = ctx.liveParticipants?.[translationId];
        if (!participants) return false;

        const locs = Object.values(participants)
            .map((p) => p.locations?.[0])
            .filter(Boolean);

        if (locs.length === 0) return false;

        if (locs.length === 1) {
            map.setView([locs[0].lat, locs[0].lon], Math.max(map.getZoom() || 0, 15));
        } else {
            const bounds = L.latLngBounds(locs.map((l) => [l.lat, l.lon]));
            map.fitBounds(bounds, { padding: [40, 40] });
        }
        return true;
    }

    // Center map when a translation is selected (if data already loaded)
    useEffect(() => {
        const translation = ctx.selectedLiveTranslation;
        if (!translation) {
            pannedForRef.current = null;
            return;
        }
        if (pannedForRef.current === translation.id) return;
        const panned = panToTranslation(translation.id);
        if (panned) pannedForRef.current = translation.id;
    }, [ctx.selectedLiveTranslation]);

    // Center map when data arrives for the selected translation (if not panned yet)
    useEffect(() => {
        const translation = ctx.selectedLiveTranslation;
        if (!translation) return;
        if (pannedForRef.current === translation.id) return;
        const panned = panToTranslation(translation.id);
        if (panned) pannedForRef.current = translation.id;
    }, [ctx.liveParticipants]);

    // Pan to location when Follow button is clicked in context menu.
    useEffect(() => {
        if (!ctx.followLiveLocation) return;
        const infoBlockWidthPx = Number.parseInt(String(ctx.infoBlockWidth), 10);
        panToVisibleCenter(map, ctx.followLiveLocation, infoBlockWidthPx);
        ctx.setFollowLiveLocation(null);
    }, [ctx.followLiveLocation]);

    // Cleanup on unmount
    useEffect(() => {
        return removeAllLayers;
    }, []);

    return null;
}
