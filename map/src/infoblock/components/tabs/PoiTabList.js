import { Tab } from '@mui/material';
import React from 'react';
import PoiInfoTab from './PoiInfoTab';

export default class PoiTabList {
    state = {
        tabs: null,
        tabList: [],
        defaultTab: 'poiInfo',
        graphWidth: 600,
    };

    create() {
        const tabs = {
            Info: <PoiInfoTab key="poiInfo" width={this.state.graphWidth} />,
        };

        const list = Object.keys(tabs).map((item) => (
            <Tab value={tabs[item].key + ''} label={item} key={'tab:' + item} />
        ));

        this.state.tabList = list;
        this.state.tabs = tabs;

        return this.state;
    }
}
