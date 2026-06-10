import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Box, Collapse, Icon, IconButton, ListItemText, MenuItem, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import LiveTrackingContext from '../../../context/LiveTrackingContext';
import LoginContext from '../../../context/LoginContext';
import { HEADER_SIZE, LIVE_TRACKS_URL, MAIN_URL_WITH_SLASH } from '../../../manager/GlobalManager';
import { buildLiveTrackShareUrl } from '../../../util/livetracks/liveTrackUtils';
import { computeZones, ZONE_COLORS } from '../../../util/livetracks/liveTrackZones';
import {
    convertMeters,
    convertSpeedMS,
    getLargeLengthUnit,
    getSmallLengthUnit,
    getSpeedUnit,
    LARGE_UNIT,
} from '../../settings/units/UnitsConverter';
import { ReactComponent as ShareLinkIcon } from '../../../assets/icons/ic_action_link.svg';
import { useWindowSize } from '../../../util/hooks/useWindowSize';
import { getDistance, toHHMMSS } from '../../../util/Utils';
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
import { ReactComponent as DirectionIcon } from '../../../assets/icons/ic_direction_arrow_16.svg';
import { ReactComponent as DestinationIcon } from '../../../assets/icons/ic_action_point_destination.svg';
import { ReactComponent as BatteryIcon } from '../../../assets/icons/ic_action_info.svg';
import { ReactComponent as AccuracyIcon } from '../../../assets/icons/ic_action_coordinates_location.svg';
import trackFavStyles from '../../trackfavmenu.module.css';
import gStyles from '../../gstylesmenu.module.css';
import errorStyles from '../../errors/errors.module.css';

export default function LiveTrackContextMenu() {
    const lttx = useContext(LiveTrackingContext);
    const { addLiveTrack, loadEarlier, historyExhausted, requestShare } = lttx;
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();
    const navigate = useNavigate();

    const [, height] = useWindowSize();
    const [linkCopied, setLinkCopied] = useState(false);
    const [requestSent, setRequestSent] = useState(false);

    const translation = lttx.selectedLiveTranslation;
    const participants = translation ? (lttx.liveParticipants?.[translation.id] ?? {}) : {};
    // Order: owner first, then my own card (if I share here), then the rest.
    const participantRank = (p) => (p.owner ? 0 : p.mine ? 1 : 2);
    const participantList = Object.values(participants)
        .filter((p) => p.locations?.length > 0)
        .sort((a, b) => participantRank(a) - participantRank(b));
    const viewers = translation ? (lttx.liveViewers?.[translation.id] ?? {}) : {};
    const viewerCount = Object.keys(viewers).length;

    function handleBack() {
        lttx.setSelectedLiveTranslation(null);
        navigate(MAIN_URL_WITH_SLASH + LIVE_TRACKS_URL);
    }

    function handleCopyShareLink() {
        const url = buildLiveTrackShareUrl(translation);
        if (!url) return;
        navigator.clipboard
            .writeText(url)
            .then(() => setLinkCopied(true))
            .catch(() => {});
    }

    function handleRequestShare() {
        requestShare(translation.id);
        setRequestSent(true);
    }

    const canRequestShare =
        ltx.loginUser &&
        translation &&
        !translation.isOwner &&
        !!translation.key &&
        !lttx.myBroadcastTids.includes(translation.id);

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
                        {loadEarlier && participantList.length > 0 && (
                            <Tooltip title={t('web:live_track_load_earlier')} arrow placement="bottom">
                                <span>
                                    <IconButton
                                        id="se-live-track-load-earlier"
                                        className={trackFavStyles.sortIcon}
                                        onClick={() => loadEarlier(translation.id)}
                                        disabled={!!historyExhausted?.[translation.id]}
                                    >
                                        <TimeIcon />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        )}
                        {translation?.isOwner && translation?.key && (
                            <Tooltip
                                title={t(linkCopied ? 'web:live_track_link_copied' : 'web:live_track_copy_share_link')}
                                arrow
                                placement="bottom"
                                onClose={() => setLinkCopied(false)}
                            >
                                <IconButton className={trackFavStyles.sortIcon} onClick={handleCopyShareLink}>
                                    <ShareLinkIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                        {canRequestShare && (
                            <Tooltip
                                title={t(requestSent ? 'web:live_track_request_sent' : 'web:live_track_request_share')}
                                arrow
                                placement="bottom"
                                onClose={() => setRequestSent(false)}
                            >
                                <span>
                                    <IconButton
                                        id="se-live-track-request-share"
                                        className={trackFavStyles.sortIcon}
                                        onClick={handleRequestShare}
                                        disabled={requestSent}
                                    >
                                        <FollowIcon />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        )}
                        {(!ltx.loginUser || !lttx.liveTranslations.some((t) => t.id === translation?.id)) && (
                            <Tooltip
                                title={t(
                                    ltx.loginUser ? 'web:live_track_bookmark' : 'web:live_track_bookmark_login_required'
                                )}
                                arrow
                                placement="bottom"
                            >
                                <span>
                                    <IconButton
                                        className={trackFavStyles.sortIcon}
                                        onClick={() => addLiveTrack(translation.id, translation.name, translation.key)}
                                        disabled={!ltx.loginUser}
                                    >
                                        <FolderAddIcon />
                                    </IconButton>
                                </span>
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
                    participantList.map((p) => (
                        <LiveParticipantCard
                            key={p.nickname}
                            participant={p}
                            defaultExpanded={participantRank(p) < 2}
                        />
                    ))
                )}
            </Box>
        </Box>
    );
}

function LiveParticipantCard({ participant, defaultExpanded = true }) {
    const ctx = useContext(AppContext);
    const lttx = useContext(LiveTrackingContext);
    const { t } = useTranslation();

    const [expanded, setExpanded] = useState(defaultExpanded);

    useEffect(() => {
        if (defaultExpanded) {
            setExpanded(true);
        }
    }, [defaultExpanded]);

    const locs = participant.locations;

    const { totalDistM, maxSpeedMS, zones, elevGainM, elevLossM } = useMemo(() => {
        let totalDistM = 0;
        let maxSpeedMS = 0;
        for (let i = 0; i < locs.length - 1; i++) {
            totalDistM += getDistance(locs[i].lat, locs[i].lon, locs[i + 1].lat, locs[i + 1].lon);
            if ((locs[i].speed ?? 0) > maxSpeedMS) maxSpeedMS = locs[i].speed;
        }
        if (locs.length > 0 && (locs.at(-1).speed ?? 0) > maxSpeedMS) {
            maxSpeedMS = locs.at(-1).speed;
        }
        const zones = computeZones(locs);
        const elevGainM = zones.filter((z) => z.eleDiff > 0).reduce((s, z) => s + z.eleDiff, 0);
        const elevLossM = zones.filter((z) => z.eleDiff < 0).reduce((s, z) => s + z.eleDiff, 0);

        return { totalDistM, maxSpeedMS, zones, elevGainM, elevLossM };
    }, [locs]);

    const duration = Date.now() - participant.startTime;

    const smallUnit = t(getSmallLengthUnit(ctx));
    const largeUnit = t(getLargeLengthUnit(ctx));
    const speedUnit = t(getSpeedUnit(ctx));

    const fmtSpeed = (ms) => (convertSpeedMS(ms, ctx.unitsSettings.speed) ?? 0).toFixed(1);
    const fmtLarge = (m) => (convertMeters(m, ctx.unitsSettings.len, LARGE_UNIT) ?? 0).toFixed(2);
    const fmtSmall = (m) => Math.round(convertMeters(m, ctx.unitsSettings.len) ?? 0);

    const lastEleM = locs[0]?.ele;
    const altitude = lastEleM != null ? `${fmtSmall(lastEleM)} ${smallUnit}` : '—';

    function zoneTypeLabel(type) {
        if (type === 'UPHILL') return t('shared_string_uphill');
        if (type === 'DOWNHILL') return t('shared_string_downhill');
        return t('web:shared_string_flat');
    }

    const lastLoc = locs[0];
    // Optional fields sent by the mobile broadcaster (absent for web broadcasts).
    const bearingDeg = lastLoc?.bearing;
    const accuracyM = lastLoc?.acc; // web broadcaster: GPS accuracy radius (m)
    const hdop = lastLoc?.hdop; // mobile broadcaster: horizontal dilution of precision (unitless)
    const battery = lastLoc?.battery;
    const timeToArrival = lastLoc?.tta;
    const timeToIntermediate = lastLoc?.ttf;
    const distToArrival = lastLoc?.dta;
    const distToIntermediate = lastLoc?.dtf;

    function handleFollow() {
        if (lastLoc?.lat != null && lastLoc?.lon != null) {
            lttx.setFollowLiveLocation(lastLoc);
        }
    }

    return (
        <Box className={trackFavStyles.participantCard}>
            <MenuItem onClick={() => setExpanded((v) => !v)}>
                <span className={trackFavStyles.participantCardName}>
                    <span
                        className={trackFavStyles.participantStatusDot}
                        style={{ backgroundColor: participant.active !== false ? '#4CAF50' : '#F44336' }}
                    />
                    {participant.nickname}
                </span>
                <Tooltip title={t('web:live_track_follow')} arrow placement="bottom">
                    <IconButton
                        className={trackFavStyles.sortIcon}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleFollow();
                        }}
                    >
                        <FollowIcon />
                    </IconButton>
                </Tooltip>
            </MenuItem>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <DefaultItem
                    icon={<SpeedIcon />}
                    name={t('shared_string_speed')}
                    additionalInfo={`${fmtSpeed(lastLoc?.speed)} ${speedUnit} · ${t('web:live_track_updated')} ${getTimeAgo(lastLoc?.time, t)}`}
                />
                <DividerWithMargin margin={'64px'} />
                <DefaultItem
                    icon={<TimeIcon />}
                    name={t('web:active_state')}
                    additionalInfo={toHHMMSS(duration).split('.')[0]}
                />
                <DividerWithMargin margin={'64px'} />
                <DefaultItem
                    icon={<RouteIcon />}
                    name={t('distance')}
                    additionalInfo={`${fmtLarge(totalDistM)} ${largeUnit}`}
                />
                <DividerWithMargin margin={'64px'} />
                <DefaultItem
                    icon={<SpeedMaxIcon />}
                    name={t('shared_string_max_speed')}
                    additionalInfo={`${fmtSpeed(maxSpeedMS)} ${speedUnit}`}
                />
                <DividerWithMargin margin={'64px'} />
                <DefaultItem icon={<AltitudeIcon />} name={t('altitude')} additionalInfo={altitude} />
                {(elevGainM > 0 || elevLossM < 0) && (
                    <>
                        <DividerWithMargin margin={'64px'} />
                        <DefaultItem
                            icon={<AscentIcon />}
                            name={t('web:live_track_elevation_gain')}
                            additionalInfo={`+${fmtSmall(elevGainM)} ${smallUnit}`}
                        />
                        <DividerWithMargin margin={'64px'} />
                        <DefaultItem
                            icon={<DescentIcon />}
                            name={t('web:live_track_elevation_loss')}
                            additionalInfo={`${fmtSmall(Math.abs(elevLossM))} ${smallUnit}`}
                        />
                    </>
                )}
                {Number.isFinite(bearingDeg) && (
                    <>
                        <DividerWithMargin margin={'64px'} />
                        <DefaultItem
                            icon={<DirectionIcon />}
                            name={t('web:live_track_direction')}
                            additionalInfo={`${Math.round(bearingDeg)}°`}
                        />
                    </>
                )}
                {Number.isFinite(accuracyM) && accuracyM > 0 && (
                    <>
                        <DividerWithMargin margin={'64px'} />
                        <DefaultItem
                            icon={<AccuracyIcon />}
                            name={t('web:live_track_accuracy')}
                            additionalInfo={`±${fmtSmall(accuracyM)} ${smallUnit}`}
                        />
                    </>
                )}
                {Number.isFinite(hdop) && hdop > 0 && (
                    <>
                        <DividerWithMargin margin={'64px'} />
                        <DefaultItem
                            icon={<AccuracyIcon />}
                            name={t('web:live_track_hdop')}
                            additionalInfo={hdop.toFixed(1)}
                        />
                    </>
                )}
                {battery > 0 && (
                    <>
                        <DividerWithMargin margin={'64px'} />
                        <DefaultItem
                            icon={<BatteryIcon />}
                            name={t('web:live_track_battery')}
                            additionalInfo={`${Math.round(battery)}%`}
                        />
                    </>
                )}
                {timeToArrival > 0 && (
                    <>
                        <DividerWithMargin margin={'64px'} />
                        <DefaultItem
                            icon={<TimeIcon />}
                            name={t('web:live_track_eta')}
                            additionalInfo={toHHMMSS(timeToArrival).split('.')[0]}
                        />
                    </>
                )}
                {distToArrival > 0 && (
                    <>
                        <DividerWithMargin margin={'64px'} />
                        <DefaultItem
                            icon={<DestinationIcon />}
                            name={t('web:live_track_distance_to_destination')}
                            additionalInfo={`${fmtLarge(distToArrival)} ${largeUnit}`}
                        />
                    </>
                )}
                {timeToIntermediate > 0 && (
                    <>
                        <DividerWithMargin margin={'64px'} />
                        <DefaultItem
                            icon={<TimeIcon />}
                            name={t('web:live_track_eta_intermediate')}
                            additionalInfo={toHHMMSS(timeToIntermediate).split('.')[0]}
                        />
                    </>
                )}
                {distToIntermediate > 0 && (
                    <>
                        <DividerWithMargin margin={'64px'} />
                        <DefaultItem
                            icon={<DestinationIcon />}
                            name={t('web:live_track_distance_intermediate')}
                            additionalInfo={`${fmtLarge(distToIntermediate)} ${largeUnit}`}
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
                                    additionalInfo={`${fmtLarge(z.distance)} ${largeUnit} · ${z.eleDiff >= 0 ? '+' : '-'}${fmtSmall(Math.abs(z.eleDiff))} ${smallUnit}`}
                                />
                                {i < zones.length - 1 && <DividerWithMargin margin={'64px'} />}
                            </React.Fragment>
                        ))}
                    </>
                )}
            </Collapse>
        </Box>
    );
}

function getTimeAgo(timestamp, t) {
    if (!timestamp) return '—';
    const diff = Math.floor((Date.now() - timestamp) / 1000);
    if (diff < 10) return t('web:live_track_just_now');
    if (diff < 60) return t('web:live_track_seconds_ago', { value: diff });
    if (diff < 3600) return t('web:live_track_minutes_ago', { value: Math.floor(diff / 60) });

    return t('web:live_track_hours_ago', { value: Math.floor(diff / 3600) });
}
