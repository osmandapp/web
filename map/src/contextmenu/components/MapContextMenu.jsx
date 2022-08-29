import {Paper, AppBar, Button} from "@mui/material";
import AppContext from "../../context/AppContext"
import React, {useState, useContext, useRef, useEffect} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import L from 'leaflet';
import {Close} from '@mui/icons-material';
import {makeStyles} from "@material-ui/core/styles";
import TrackTabList from "../TrackTabList";
import WeatherTabList from "../WeatherTabList";
import PanelButtons from "./PanelButtons";

const useStyles = makeStyles({
    menu: {
        bottom: '10%',
        left: '30%',
        width: '800px',
        height: "auto",
    },
    centerStyle: {
        left: '30%'
    }
})


export default function MapContextMenu() {
    const ctx = useContext(AppContext);
    const classes = useStyles();
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [value, setValue] = useState('general');
    const [tabsObj, setTabsObj] = useState(null);
    const [prevTrack, setPrevTrack] = useState(null);

    const divContainer = useRef(null);

    useEffect(() => {
        if (divContainer.current) {
            L.DomEvent.disableClickPropagation(divContainer.current);
            L.DomEvent.disableScrollPropagation(divContainer.current);
        }
    });

    function selectedFileWasChanged() {
        return (ctx.selectedGpxFile
                && ctx.selectedGpxFile.name
                && ctx.selectedGpxFile.name !== prevTrack.name)
            || (!prevTrack.summary || !prevTrack.srtmSummary);
    }

    useEffect(() => {
        if (!ctx.selectedGpxFile) {
            setPrevTrack(null);
        }
        if (!prevTrack || selectedFileWasChanged()) {
            if (ctx.currentObjectType) {
                setPrevTrack(ctx.selectedGpxFile)
                let obj = (ctx.currentObjectType === 'weather' && ctx.weatherPoint)
                    ? new WeatherTabList().create(ctx)
                    : ctx.selectedGpxFile
                        ? new TrackTabList().create(ctx)
                        : null;
                if (obj) {
                    setShowContextMenu(true);
                    setTabsObj(obj);
                    setValue(obj.defaultTab);
                }
            } else {
                setTabsObj(null);
                setShowContextMenu(false);
            }
        }
    }, [ctx.currentObjectType, ctx.selectedGpxFile]);

    function closeContextMenu() {
        setShowContextMenu(false);
    }

    return (<div>
        {showContextMenu && <div className={`${classes.centerStyle} ${'leaflet-bottom'}`} ref={divContainer}>
            <div className="leaflet-control leaflet-bar padding-container">
                {tabsObj && tabsObj.tabList.length > 0 &&
                    <Paper>
                        <TabContext value={value}>
                            {Object.values(tabsObj.tabs).map((item, index) =>
                                <TabPanel value={item.key + ''} key={'tabpanel:' + item.key}> {item} </TabPanel>)
                            }
                            <AppBar position="static" color="default">
                                <div style={{display: 'inherit'}}>
                                    <Button key='close' onClick={() => {
                                        closeContextMenu()
                                    }}>
                                        <Close/>
                                    </Button>
                                    <TabList onChange={(e, newValue) => setValue(newValue)} children={tabsObj.tabList}/>
                                </div>
                            </AppBar>
                        </TabContext>
                    </Paper>
                }
            </div>
        </div>}
        <PanelButtons showContextMenu={showContextMenu} setShowContextMenu={setShowContextMenu}/>
    </div>);
}
