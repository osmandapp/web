import React, { useContext, useState } from 'react';
import { Box, Icon, IconButton, ListItemText, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import { HEADER_SIZE, LIVE_TRACKS_URL, MAIN_URL_WITH_SLASH } from '../../../manager/GlobalManager';
import { buildLiveTrackShareUrl } from '../../../util/livetracks/liveTrackUtils';
import { ReactComponent as ShareLinkIcon } from '../../../assets/icons/ic_action_link.svg';
import { useWindowSize } from '../../../util/hooks/useWindowSize';
import { getDistance } from '../../../util/Utils';
import HeaderNoUnderline from '../../../frame/components/header/HeaderNoUnderline';
import SubTitleMenu from '../../../frame/components/titles/SubTitleMenu';
import DefaultItem from '../../../frame/components/items/DefaultItem';
import ThickDivider from '../../../frame/components/dividers/ThickDivider';
import DividerWithMargin from '../../../frame/components/dividers/DividerWithMargin';
import { ReactComponent as SpeedIcon } from '../../../assets/icons/ic_action_speed.svg';
import { ReactComponent as SpeedMaxIcon } from '../../../assets/icons/ic_action_speed_max.svg';
import { ReactComponent as TimeIcon } from '../../../assets/icons/ic_action_time.svg';
import { ReactComponent as TerrainIcon } from '../../../assets/icons/ic_action_terrain.svg';
import { ReactComponent as RouteIcon } from '../../../assets/icons/ic_action_route_direct.svg';
import { ReactComponent as GroupIcon } from '../../../assets/icons/ic_group.svg';
import { ReactComponent as LocationOffIcon } from '../../../assets/icons/ic_action_location_off.svg';
import { ReactComponent as AltitudeIcon } from '../../../assets/icons/ic_action_altitude_average.svg';
import { ReactComponent as AscentIcon } from '../../../assets/icons/ic_action_altitude_ascent_16.svg';
import { ReactComponent as DescentIcon } from '../../../assets/icons/ic_action_altitude_descent_16.svg';
import { ReactComponent as FollowIcon } from '../../../assets/icons/ic_action_my_location.svg';
import { ReactComponent as FolderAddIcon } from '../../../assets/icons/ic_action_folder_add_outlined.svg';
import trackFavStyles from '../../trackfavmenu.module.css';
import gStyles from '../../gstylesmenu.module.css';
import errorStyles from '../../errors/errors.module.css';

const ZONE_COLORS = { UPHILL: '#d35400', DOWNHILL: '#27ae60', FLAT: '#7f8c8d' };

export default function LiveTrackContextMenu({ addTranslation }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [, height] = useWindowSize();
    const [linkCopied, setLinkCopied] = useState(false);

    const translation = ctx.selectedLiveTranslation;
    const participants = translation ? (ctx.liveParticipants?.[translation.id] ?? {}) : {};
    const participantList = Object.values(participants).filter((p) => p.locations?.length > 0);
    const viewers = translation ? (ctx.liveViewers?.[translation.id] ?? {}) : {};
    const viewerCount = Object.keys(viewers).length;

    function handleBack() {
        ctx.setSelectedLiveTranslation(null);
        navigate(MAIN_URL_WITH_SLASH + LIVE_TRACKS_URL);
    }

    function handleCopyShareLink() {
        const url = buildLiveTrackShareUrl(translation);
        if (!url) return;
        navigator.clipboard.writeText(url).then(() => setLinkCopied(true));
    }

    return (
        <Box
            id="se-live-track-context-menu"
            sx={{ height: `${height - HEADER_SIZE}px` }}
            className={gStyles.scrollMainBlock}
        >
            <HeaderNoUnderline
                title={translation?.name ?? t('web:live_tracks')}
                onClose={handleBack}
                showBackButton={true}
                rightContent={
                    <>
                        {translation?.isOwner && translation?.key && (
                            <Tooltip
                                title={t(linkCopied ? 'web:live_track_link_copied' : 'web:live_track_copy_share_link')}
                                arrow
                                placement="bottom"
                            >
                                <IconButton className={trackFavStyles.sortIcon} onClick={handleCopyShareLink}>
                                    <ShareLinkIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                        {!ctx.liveTranslations.some((t) => t.id === translation?.id) && (
                            <Tooltip title={t('web:live_track_bookmark')} arrow placement="bottom">
                                <IconButton
                                    className={trackFavStyles.sortIcon}
                                    onClick={() => addTranslation(translation.id, translation.name, translation.key)}
                                >
                                    <FolderAddIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                    </>
                }
            />
            {participantList.length > 0 && (
                <>
                    <DefaultItem
                        icon={<GroupIcon />}
                        name={t('web:live_track_viewers')}
                        additionalInfo={String(viewerCount)}
                    />
                    <ThickDivider height={'8px'} />
                </>
            )}
            <Box sx={{ overflowY: 'auto', overflowX: 'hidden', maxHeight: `${height - 120}px` }}>
                {participantList.length === 0 ? (
                    <Box className={errorStyles.block}>
                        <Icon className={errorStyles.icon}>
                            <LocationOffIcon className={errorStyles.icon} />
                        </Icon>
                        <Box className={errorStyles.info}>
                            <ListItemText disableTypography className={errorStyles.title}>
                                {t('web:live_track_location_paused_title')}
                            </ListItemText>
                            <ListItemText disableTypography className={errorStyles.text}>
                                {t('web:live_track_location_paused_desc')}
                            </ListItemText>
                        </Box>
                    </Box>
                ) : (
                    participantList.map((p, i) => (
                        <LiveParticipantCard
                            key={p.nickname}
                            participant={p}
                            isLast={i === participantList.length - 1}
                        />
                    ))
                )}
            </Box>
        </Box>
    );
}

function LiveParticipantCard({ participant, isLast }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const locs = participant.locations;
    const speedKmh = locs[0]?.speed != null ? (locs[0].speed * 3.6).toFixed(1) : '0.0';
    const altitudeM = locs[0]?.ele != null ? `${locs[0].ele.toFixed(0)} m` : '—';
    let totalDist = 0;
    let maxSpeed = 0;
    for (let i = 0; i < locs.length - 1; i++) {
        totalDist += getDistance(locs[i].lat, locs[i].lon, locs[i + 1].lat, locs[i + 1].lon);
        const kmh = locs[i].speed != null ? locs[i].speed * 3.6 : 0;
        if (kmh > maxSpeed) maxSpeed = kmh;
    }
    if (locs.length > 0) {
        const lastKmh = locs.at(-1).speed != null ? locs.at(-1).speed * 3.6 : 0;
        if (lastKmh > maxSpeed) maxSpeed = lastKmh;
    }
    const distKm = (totalDist / 1000).toFixed(2);
    const duration = Date.now() - participant.startTime;
    const zones = computeZones(locs);
    const elevGain = zones.filter((z) => z.eleDiff > 0).reduce((s, z) => s + z.eleDiff, 0);
    const elevLoss = zones.filter((z) => z.eleDiff < 0).reduce((s, z) => s + z.eleDiff, 0);

    function zoneTypeLabel(type) {
        if (type === 'UPHILL') return t('shared_string_uphill');
        if (type === 'DOWNHILL') return t('shared_string_downhill');
        return t('web:shared_string_flat');
    }

    const lastLoc = locs[0];

    function handleFollow() {
        if (lastLoc?.lat != null && lastLoc?.lon != null) {
            ctx.setFollowLiveLocation(lastLoc);
        }
    }

    return (
        <>
            <SubTitleMenu
                text={
                    <span className={trackFavStyles.participantNickname}>
                        <span
                            className={trackFavStyles.participantStatusDot}
                            style={{ backgroundColor: participant.active !== false ? '#4CAF50' : '#F44336' }}
                        />
                        {participant.nickname}
                    </span>
                }
                rightContent={
                    <Tooltip title={t('web:live_track_follow')} arrow placement="bottom">
                        <IconButton className={trackFavStyles.sortIcon} onClick={handleFollow}>
                            <FollowIcon />
                        </IconButton>
                    </Tooltip>
                }
            />
            <DefaultItem
                icon={<SpeedIcon />}
                name={t('shared_string_speed')}
                additionalInfo={`${speedKmh} km/h · ${t('web:live_track_updated')} ${getTimeAgo(lastLoc?.time)}`}
            />
            <DividerWithMargin margin={'64px'} />
            <DefaultItem icon={<TimeIcon />} name={t('web:active_state')} additionalInfo={formatTime(duration)} />
            <DividerWithMargin margin={'64px'} />
            <DefaultItem icon={<RouteIcon />} name={t('distance')} additionalInfo={`${distKm} km`} />
            <DividerWithMargin margin={'64px'} />
            <DefaultItem
                icon={<SpeedMaxIcon />}
                name={t('shared_string_max_speed')}
                additionalInfo={`${maxSpeed.toFixed(1)} km/h`}
            />
            <DividerWithMargin margin={'64px'} />
            <DefaultItem icon={<AltitudeIcon />} name={t('altitude')} additionalInfo={altitudeM} />
            {(elevGain > 0 || elevLoss < 0) && (
                <>
                    <DividerWithMargin margin={'64px'} />
                    <DefaultItem
                        icon={<AscentIcon />}
                        name={t('web:live_track_elevation_gain')}
                        additionalInfo={`+${elevGain.toFixed(0)} m`}
                    />
                    <DividerWithMargin margin={'64px'} />
                    <DefaultItem
                        icon={<DescentIcon />}
                        name={t('web:live_track_elevation_loss')}
                        additionalInfo={`${elevLoss.toFixed(0)} m`}
                    />
                </>
            )}
            {zones.length > 0 && (
                <>
                    <ThickDivider height={'8px'} mt={'8px'} />
                    <SubTitleMenu text={`${t('web:live_track_intervals')} (${zones.length})`} />
                    {[...zones].reverse().map((z, i) => (
                        <React.Fragment key={i}>
                            <DefaultItem
                                icon={<TerrainIcon style={{ fill: ZONE_COLORS[z.type] }} />}
                                name={`${zones.length - i}. ${zoneTypeLabel(z.type)}`}
                                additionalInfo={`${(z.distance / 1000).toFixed(2)} km · ${z.eleDiff > 0 ? '+' : ''}${z.eleDiff.toFixed(0)} m`}
                            />
                            {i < zones.length - 1 && <DividerWithMargin margin={'64px'} />}
                        </React.Fragment>
                    ))}
                </>
            )}
            {!isLast && <ThickDivider height={'16px'} mt={'8px'} />}
        </>
    );
}

function simplifyRDP(pts, epsilon) {
    if (pts.length <= 2) return pts;
    let dmax = 0;
    let index = 0;
    const end = pts.length - 1;
    const x0 = pts[0].cumDist;
    const y0 = pts[0].ele;
    const x1 = pts[end].cumDist;
    const y1 = pts[end].ele;
    for (let i = 1; i < end; i++) {
        const px = pts[i].cumDist;
        const py = pts[i].ele;
        const yLine = x1 === x0 ? y0 : y0 + ((y1 - y0) * (px - x0)) / (x1 - x0);
        const d = Math.abs(py - yLine);
        if (d > dmax) {
            index = i;
            dmax = d;
        }
    }
    if (dmax > epsilon) {
        const left = simplifyRDP(pts.slice(0, index + 1), epsilon);
        const right = simplifyRDP(pts.slice(index), epsilon);
        return left.slice(0, -1).concat(right);
    }

    return [pts[0], pts[end]];
}

function computeZones(locations, minEleDiff = 7) {
    if (!locations || locations.length < 2) return [];
    const N = locations.length;
    const track = [];
    for (let i = 0; i < N; i++) {
        const loc = locations[N - 1 - i];
        track.push({
            origIdx: N - 1 - i,
            lat: loc.lat,
            lon: loc.lon,
            ele: loc.ele || 0,
            kmh: loc.speed != null ? loc.speed * 3.6 : 0,
            time: loc.time,
        });
    }
    track[0].cumDist = 0;
    for (let i = 1; i < track.length; i++) {
        track[i].cumDist =
            track[i - 1].cumDist + getDistance(track[i - 1].lat, track[i - 1].lon, track[i].lat, track[i].lon);
    }
    const filtered = [track[0]];
    for (let i = 1; i < track.length - 1; i++) {
        const prev = track[i - 1];
        const curr = track[i];
        const next = track[i + 1];
        const dx1 = curr.cumDist - prev.cumDist;
        const dy1 = curr.ele - prev.ele;
        const dx2 = next.cumDist - curr.cumDist;
        const dy2 = next.ele - curr.ele;
        if (dx1 < 1 || dx2 < 1) {
            filtered.push(curr);
            continue;
        }
        const isPeak = dy1 > 0 && dy2 < 0;
        const isValley = dy1 < 0 && dy2 > 0;
        if ((isPeak || isValley) && Math.abs(dy1 / dx1) > 0.7 && Math.abs(dy2 / dx2) > 0.7) continue;
        filtered.push(curr);
    }
    filtered.push(track.at(-1));
    const extremums = simplifyRDP(filtered, minEleDiff);
    const zones = [];
    for (let i = 1; i < extremums.length; i++) {
        const startPt = extremums[i - 1];
        const endPt = extremums[i];
        const dEle = endPt.ele - startPt.ele;
        let type = 'FLAT';
        if (dEle >= minEleDiff) type = 'UPHILL';
        else if (dEle <= -minEleDiff) type = 'DOWNHILL';
        const actualStartIdx = Math.max(startPt.origIdx, endPt.origIdx);
        const actualEndIdx = Math.min(startPt.origIdx, endPt.origIdx);
        const dist = endPt.cumDist - startPt.cumDist;
        let maxSpeed = 0;
        for (let j = actualEndIdx; j <= actualStartIdx; j++) {
            const kmh = (locations[j]?.speed ?? 0) * 3.6;
            if (kmh > maxSpeed) maxSpeed = kmh;
        }
        const duration = Math.abs((locations[actualEndIdx]?.time ?? 0) - (locations[actualStartIdx]?.time ?? 0));
        const last = zones.at(-1);
        if (last?.type === type) {
            last.endIdx = actualEndIdx;
            last.distance += dist;
            last.duration += duration;
            last.eleDiff += dEle;
            if (maxSpeed > last.maxSpeed) last.maxSpeed = maxSpeed;
            last.avgSpeed = last.duration > 0 ? (last.distance / (last.duration / 1000)) * 3.6 : 0;
        } else {
            const avgSpeed = duration > 0 ? (dist / (duration / 1000)) * 3.6 : 0;
            zones.push({
                type,
                startIdx: actualStartIdx,
                endIdx: actualEndIdx,
                distance: dist,
                duration,
                eleDiff: dEle,
                maxSpeed,
                avgSpeed,
            });
        }
    }

    return zones;
}

function formatTime(ms) {
    if (ms < 0) ms = 0;
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s}s`;

    return `${s}s`;
}

function getTimeAgo(timestamp) {
    if (!timestamp) return '—';
    const diff = Math.floor((Date.now() - timestamp) / 1000);
    if (diff < 10) return 'just now';
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;

    return `${Math.floor(diff / 3600)}h ago`;
}
