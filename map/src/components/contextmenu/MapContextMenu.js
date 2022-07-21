import {
    Paper, Tab, AppBar, Button,
} from "@mui/material";
import AppContext from "../../context/AppContext"
import React, {useState, useContext, useRef, useEffect} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import GeneralInfo from "./tabs/GeneralInfo";
import Elevation from "./tabs/Elevation";
import Speed from "./tabs/Speed";
import WeatherForecast from "./WeatherForecast";
import L, {Layer} from 'leaflet';

import {
    Close
} from '@mui/icons-material';
import PointsTab from "./tabs/PointsTab";
import EditInfoTab from "./tabs/EditInfoTab";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    menu: {
        bottom: '10%',
        left: '30%',
        width: '800px',
        height: "auto",
    },
    centerStyle: {
        left: "50%",
        transform: 'translate(-50%, 0%)'
    }
})


export default function MapContextMenu() {
    const ctx = useContext(AppContext);
    const classes = useStyles();

    const hasSpeed = ctx.selectedGpxFile?.summary?.hasSpeedData;
    const hasAltitude = ctx.selectedGpxFile?.summary?.hasElevationData;
    const graphWidth = 600;
    const [value, setValue] = useState(ctx.weatherPoint?.day && ctx.weatherPoint?.week ? 'weatherday' : 'general');
    let tabs = {};
    let tabList = createTabs();
    const divContainer = useRef(null);
    let defaultTab = 'general';

    useEffect(() => {
        if (divContainer.current) {
            L.DomEvent.disableClickPropagation(divContainer.current);
            L.DomEvent.disableScrollPropagation(divContainer.current);
        }
    });

    let presentValue = false;
    Object.values(tabs).forEach((item) => {
        if (item.key === value) {
            presentValue = true;
            return false;
        }
    });
    if (!presentValue && value !== defaultTab) {
        setValue(defaultTab);
    }

    function createTabs() {
        let list = [];

        if (ctx.selectedGpxFile?.url) {
            tabs = {};
            if (ctx.selectedGpxFile?.summary) {
                tabs.Info = <GeneralInfo key='general' summary={ctx.selectedGpxFile.summary}
                                         url={ctx.selectedGpxFile.url} width={graphWidth}/>;
            }
            const elevationData = ctx.selectedGpxFile?.summary?.elevationData;
            if (elevationData && elevationData.length > 0 && hasAltitude) {
                tabs.Elevation = <Elevation key='elevation' data={elevationData} width={graphWidth}/>
            }
            const speedData = ctx.selectedGpxFile?.summary?.speedData;
            if (speedData && speedData.length > 0 && hasSpeed) {
                tabs.Speed = <Speed key='speed' data={speedData} width={graphWidth}/>;
            }

            if (ctx.selectedGpxFile?.srtmSummary) {
                tabs.SRTM = <GeneralInfo key='srtm'
                                         width={graphWidth} summary={ctx.selectedGpxFile.srtmSummary}/>;
            }
            if (ctx.selectedGpxFile?.srtmSummary?.elevationData &&
                ctx.selectedGpxFile.srtmSummary.elevationData.length > 0) {
                tabs["SRTM Ele"] = <Elevation key='srtmele' data={ctx.selectedGpxFile.srtmSummary.elevationData}
                                              width={graphWidth}/>
            }
        } else if (ctx.currentlyEditTrack && ctx.currentlyEditTrack.newRouteLayer && ctx.currentlyEditTrack.newRouteLayer._latlngs) {
            tabs.Info = <EditInfoTab key='general'/>;
            tabs.Points = <PointsTab key='points' width={graphWidth}/>;
        }

        if (ctx.weatherPoint?.day && ctx.weatherPoint?.week) {
            let loc = ctx.weatherPoint.lat.toFixed(2) + ' ' + ctx.weatherPoint.lon.toFixed(2);
            tabs["Day forecast"] =
                <WeatherForecast key="weatherday" width={graphWidth} data={ctx.weatherPoint.day} loc={loc}/>
            tabs["Week forecast"] =
                <WeatherForecast key="weatherweek" width={graphWidth} data={ctx.weatherPoint.week} loc={loc}/>
        }
        //create list
        list = list.concat(Object.keys(tabs).map((item, index) =>
            <Tab
                disabled={ctx.currentlyEditTrack && ctx.currentlyEditTrack.newRouteLayer._latlngs && ctx.currentlyEditTrack.pointsList.length < 2}
                value={tabs[item].key + ''} label={item} key={'tab:' + item}/>));
        return list;
    }

    return (
        <div className={`${classes.centerStyle} ${'leaflet-bottom'}`} ref={divContainer}>
            <div className="leaflet-control leaflet-bar padding-container">
                {tabList.length > 0 &&
                    <Paper>
                        <TabContext value={value}>
                            {Object.values(tabs).map((item, index) =>
                                <TabPanel value={item.key + ''} key={'tabpanel:' + item.key}> {item} </TabPanel>)
                            }
                            <AppBar position="static" color="default">
                                <div style={{display: 'inherit'}}>
                                    <Button key='close' onClick={() => {
                                        ctx.setSelectedGpxFile(null);
                                        ctx.setWeatherPoint(null);
                                        ctx.newRoute.newRouteLayer = new Layer();
                                        ctx.setNewRoute({...ctx.newRoute});
                                        if (ctx.mapMarkerListener) {
                                            ctx.mapMarkerListener();
                                        }
                                    }}>
                                        <Close/>
                                    </Button>
                                    <TabList onChange={(e, newValue) => setValue(newValue)} children={tabList}/>
                                </div>
                            </AppBar>
                        </TabContext>
                    </Paper>
                }
            </div>
        </div>
    );
}