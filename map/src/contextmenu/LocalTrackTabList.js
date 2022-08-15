import LocalInfoTab from "./components/tabs/LocalInfoTab";
import PointsTab from "./components/tabs/PointsTab";
import {Tab} from "@mui/material";

export default class LocalTrackTabList {
    state = {
        tabs: null,
        tabList: [],
        defaultTab: 'info',
        graphWidth: 600
    };

    create() {
        let tabs = {};
        let list = [];

        tabs.Info = <LocalInfoTab key='info' width={this.state.graphWidth}/>;
        tabs.Points = <PointsTab key='points' width={this.state.graphWidth}/>;

        list = list.concat(Object.keys(tabs).map((item) =>
            <Tab value={tabs[item].key + ''} label={item} key={'tab:' + item}/>));

        this.state.tabList = list;
        this.state.tabs = tabs;

        return this.state;
    }

}