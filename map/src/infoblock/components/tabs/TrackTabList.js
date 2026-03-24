import GeneralInfoTab from './GeneralInfoTab';
import React from 'react';
import { Tab } from '@mui/material';
import PointsTab from './PointsTab';
import TurnsTab from './TurnsTab';
import WaypointsTab from './WaypointsTab';
import { isEmptyTrack, hasSegmentTurns } from '../../../manager/track/TracksManager';
import { isLocalTrack, isCloudTrack, isRouteTrack } from '../../../context/AppContext';

export const TRACK_TAB_IDS = {
    GENERAL: 'general',
    POINTS: 'points',
    WAYPOINTS: 'waypoints',
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

        tabs.Info = <GeneralInfoTab key={TRACK_TAB_IDS.GENERAL} setShowInfoBlock={setShowInfoBlock} />;
        if (isLocalTrack(ctx)) {
            tabs.Track = <PointsTab key={TRACK_TAB_IDS.POINTS} />;
        }

        if ((isCloudTrack(ctx) && !isEmptyTrack(ctx.selectedGpxFile, true, false)) || isLocalTrack(ctx)) {
            tabs.Waypoints = <WaypointsTab key={TRACK_TAB_IDS.WAYPOINTS} />;
        }

        if (isRouteTrack(ctx) || hasSegmentTurns({ track: ctx.selectedGpxFile })) {
            tabs.Turns = <TurnsTab key={TRACK_TAB_IDS.TURNS} />;
        }

        list = list.concat(
            Object.keys(tabs).map((item) => (
                <Tab
                    testid={`se-tab-${item.toLowerCase()}`}
                    value={tabs[item].key + ''}
                    label={item}
                    key={'tab:' + item}
                />
            ))
        );

        this.state.tabList = list;
        this.state.tabs = tabs;

        return this.state;
    }
}
