import {makeStyles} from "@material-ui/styles";
import {AppBar, Paper, Tab} from "@mui/material";
import React, {useState} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import GeneralInfo from "./GeneralInfo";
import PointsTab from "./tabs/PointsTab";
import GraphTab from "./tabs/GraphTab";


const useStyles = makeStyles({
    menu: {
        bottom: '10%',
        left: '30%',
        width: '800px',
        height: "auto",
    }
})

const PlanRouteContextMenu = ({newRoute, pointsList, setPointsList}) => {

    const classes = useStyles();

    const [value, setValue] = useState(null);

    const tabs = {};
    const width = 800;

    tabs.Points = <PointsTab key='points' newRoute={newRoute} pointsList={pointsList} setPointsList={setPointsList}
                             width={width}/>;
    tabs.Graph = <GraphTab key='graph'/>;

    let tabList = [];
    tabList = tabList.concat(Object.keys(tabs).map((item, index) =>
        <Tab disabled={pointsList.length < 2} value={tabs[item].key + ''} label={item} key={'tab:' + item}/>));

    return (
        <div className={`${classes.menu} ${'leaflet-bottom'}`}>
            <div className="leaflet-control leaflet-bar padding-container">
                <Paper>
                    <GeneralInfo newRoute={newRoute} pointsList={pointsList} setPointsList={setPointsList}/>
                    <TabContext value={value}>
                        {Object.values(tabs).map((item, index) =>
                            <TabPanel value={item.key + ''} key={'tabpanel:' + item.key}> {item}</TabPanel>)
                        }
                        <AppBar position="static" color="default">
                            <TabList onChange={(e, newValue) => setValue(newValue)} children={tabList}/>
                        </AppBar>
                    </TabContext>
                </Paper>
            </div>
        </div>
    );
};

export default PlanRouteContextMenu;