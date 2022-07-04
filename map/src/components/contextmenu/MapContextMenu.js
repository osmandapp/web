import {
    Paper, Tab, AppBar, Button,
} from "@mui/material";
import AppContext from "../../context/AppContext"
import {useState, useContext, useRef, useEffect} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import GeneralInfo from "./gpx/tabs/GeneralInfo";
import Elevation from "./gpx/tabs/Elevation";
import Speed from "./gpx/tabs/Speed";
import WeatherForecast from "./WeatherForecast";
import L from 'leaflet';

import {
    Close
} from '@mui/icons-material';

const centerStyle = {
    left: "50%",
    transform: 'translate(-50%, 0%)'
}


export default function MapContextMenu() {
    const [value, setValue] = useState("general");
    const ctx = useContext(AppContext);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const hasSpeed = ctx.selectedGpxFile?.summary?.hasSpeedData;
    const hasAltitude = ctx.selectedGpxFile?.summary?.hasElevationData;
    const graphWidth = 800;
    const tabs = {};
    let defaultTab = 'general';
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
    if (ctx.weatherPoint?.day && ctx.weatherPoint?.week) {
        defaultTab = 'weatherday';
        let loc = ctx.weatherPoint.lat.toFixed(2) + ' ' + ctx.weatherPoint.lon.toFixed(2);
        tabs["Day forecast"] =
            <WeatherForecast key="weatherday" width={graphWidth} data={ctx.weatherPoint.day} loc={loc}/>
        tabs["Week forecast"] =
            <WeatherForecast key="weatherweek" width={graphWidth} data={ctx.weatherPoint.week} loc={loc}/>
    }
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

    let tabList = [];
    // tabList.push(<Button key='close' onClick={() => ctx.setSelectedGpxFile(null)}>
    //     <Close />
    // </Button>);

    tabList = tabList.concat(Object.keys(tabs).map((item, index) =>
        <Tab value={tabs[item].key + ''} label={item} key={'tab:' + item}/>));
    const divContainer = useRef(null);
    useEffect(() => {
        if (divContainer.current) {
            L.DomEvent.disableClickPropagation(divContainer.current);
            L.DomEvent.disableScrollPropagation(divContainer.current);
        }
    });
    return (
        <div className="leaflet-bottom" style={centerStyle} ref={divContainer}>
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
                                        if (ctx.mapMarkerListener) {
                                            ctx.mapMarkerListener();
                                        }
                                    }}>
                                        <Close/>
                                    </Button>
                                    <TabList onChange={handleChange} children={tabList}>
                                    </TabList>
                                </div>
                            </AppBar>
                        </TabContext>
                    </Paper>
                }
            </div>
        </div>
    );
}