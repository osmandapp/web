import GeneralInfoTab from './GeneralInfoTab';
import React from 'react';
import { Tab } from '@mui/material';
import PointsTab from './PointsTab';
import TurnsTab from './TurnsTab';
// import SettingsTab from './SettingsTab';
import WaypointsTab from './WaypointsTab';
import { isEmptyTrack, hasSegmentTurns } from '../../../manager/track/TracksManager';
import { isLocalTrack, isCloudTrack, isRouteTrack } from '../../../context/AppContext';

export default class TrackTabList {
    state = {
        tabs: null,
        tabList: [],
        defaultTab: 'general',
    };

    create(ctx, setShowInfoBlock) {
        let tabs = {};
        let list = [];

        tabs.Info = <GeneralInfoTab key="general" setShowInfoBlock={setShowInfoBlock} />;
        if (isLocalTrack(ctx)) {
            tabs.Track = <PointsTab key="points" />;
        }

        if ((isCloudTrack(ctx) && !isEmptyTrack(ctx.selectedGpxFile, true, false)) || isLocalTrack(ctx)) {
            tabs.Waypoints = <WaypointsTab key={'waypoints'} />;
        }

        if (isRouteTrack(ctx) || hasSegmentTurns({ track: ctx.selectedGpxFile })) {
            tabs.Turns = <TurnsTab key="turns" />;
        }

        // if (isLocalTrack(ctx)) {
        //     tabs.Settings = <SettingsTab key="settings" />;
        // }

        list = list.concat(
            Object.keys(tabs).map((item) => <Tab value={tabs[item].key + ''} label={item} key={'tab:' + item} />)
        );

        this.state.tabList = list;
        this.state.tabs = tabs;

        return this.state;
    }
}
