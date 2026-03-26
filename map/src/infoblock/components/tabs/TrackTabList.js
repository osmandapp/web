import GeneralInfoTab from './GeneralInfoTab';
import React from 'react';
import { Tab } from '@mui/material';
import i18n from 'i18next';
import PointsTab from './PointsTab';
import TurnsTab from './TurnsTab';
import WaypointsTab from './WaypointsTab';
import TrackInProgressTab from './TrackInProgressTab';
import { hasSegmentTurns } from '../../../manager/track/TracksManager';
import { isLocalTrack, isRouteTrack } from '../../../context/AppContext';

export const TRACK_TAB_IDS = {
    GENERAL: 'general',
    TRACK: 'track',
    POINTS: 'points',
    TURNS: 'turns',
};

export default class TrackTabList {
    state = {
        tabs: null,
        tabList: [],
        defaultTab: TRACK_TAB_IDS.GENERAL,
    };

    create(ctx, setShowInfoBlock) {
        let tabs = {};
        let list = [];
        const TAB_LABEL_KEYS = {
            Info: 'shared_string_overview',
            Track: 'shared_string_gpx_track',
            Points: 'shared_string_gpx_points',
        };

        tabs.Overview = <GeneralInfoTab key={TRACK_TAB_IDS.GENERAL} />;
        tabs.Track = isLocalTrack(ctx) ? (
            <PointsTab key={TRACK_TAB_IDS.TRACK} />
        ) : (
            <TrackInProgressTab key={TRACK_TAB_IDS.TRACK} />
        );

        tabs.Points = <WaypointsTab key={TRACK_TAB_IDS.POINTS} />;

        if (isRouteTrack(ctx) || hasSegmentTurns({ track: ctx.selectedGpxFile })) {
            tabs.Turns = <TurnsTab key={TRACK_TAB_IDS.TURNS} />;
        }

        list = list.concat(
            Object.keys(tabs).map((item) => (
                <Tab
                    testid={`se-tab-${item.toLowerCase()}`}
                    value={tabs[item].key + ''}
                    label={TAB_LABEL_KEYS[item] ? i18n.t(TAB_LABEL_KEYS[item]) : item}
                    key={'tab:' + item}
                />
            ))
        );

        this.state.tabList = list;
        this.state.tabs = tabs;

        return this.state;
    }
}
