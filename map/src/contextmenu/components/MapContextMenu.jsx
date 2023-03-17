import {Paper, AppBar, Button, LinearProgress} from "@mui/material";
import AppContext from "../../context/AppContext"
import React, {useState, useContext, useEffect} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Close} from '@mui/icons-material';
import {makeStyles} from "@material-ui/core/styles";
import TrackTabList from "../TrackTabList";
import WeatherTabList from "../WeatherTabList";
import PanelButtons from "./PanelButtons";
import FavoritesTabList from "../FavoritesTabList";
import _ from "lodash";
import ChangeProfileTrackDialog from "./track/ChangeProfileTrackDialog";
import PointContextMenu from "./PointContextMenu";
import PoiTabList from "../PoiTabList";

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


export default function MapContextMenu({drawerWidth}) {

    const ctx = useContext(AppContext);

    const classes = useStyles();

    const [showContextMenu, setShowContextMenu] = useState(false);
    const [value, setValue] = useState('general');
    const [tabsObj, setTabsObj] = useState(null);
    const [prevTrack, setPrevTrack] = useState(null);
    const [clearState, setClearState] = useState(false);

    useEffect(() => {
        if (!showContextMenu) {
            stopCreatedTrack();
        }
    }, [showContextMenu])

    useEffect(() => {
        if ((!ctx.selectedGpxFile || _.isEmpty(ctx.selectedGpxFile)) && ctx.currentObjectType !== ctx.OBJECT_TYPE_WEATHER) {
            setPrevTrack(null);
            setTabsObj(null);
            setShowContextMenu(false);
        } else {
            if (!ctx.currentObjectType) {
                setTabsObj(null);
                setShowContextMenu(false);
            } else if (ctx.updateContextMenu || !prevTrack || Object.keys(prevTrack).length === 0 || !showContextMenu) {
                let obj;
                setPrevTrack(ctx.selectedGpxFile);
                ctx.setUpdateContextMenu(false);
                if (ctx.currentObjectType === ctx.OBJECT_TYPE_CLOUD_TRACK && ctx.selectedGpxFile?.tracks) {
                    obj = new TrackTabList().create(ctx, setShowContextMenu);
                } else if (ctx.currentObjectType === ctx.OBJECT_TYPE_WEATHER && ctx.weatherPoint) {
                    obj = new WeatherTabList().create(ctx);
                } else if (ctx.currentObjectType === ctx.OBJECT_TYPE_FAVORITE) {
                    obj = new FavoritesTabList().create(ctx);
                } else if (ctx.currentObjectType === ctx.OBJECT_TYPE_POI) {
                    obj = new PoiTabList().create(ctx);
                } else if (ctx.selectedGpxFile) {
                    obj = new TrackTabList().create(ctx, setShowContextMenu);
                }
                if (obj) {
                    setShowContextMenu(true);
                    setClearState(false);
                    setTabsObj(obj);
                    setValue(obj.defaultTab);
                }
            }
        }
    }, [ctx.currentObjectType, ctx.selectedGpxFile, ctx.weatherPoint, ctx.updateContextMenu]);

    function stopCreatedTrack() {
        if (ctx.createTrack) {
            ctx.createTrack.enable = false;
            ctx.setCreateTrack({...ctx.createTrack});
            ctx.setCurrentObjectType(null);
        }
    }

    function closeContextMenu() {
        setShowContextMenu(false);
        setClearState(true);
    }

    return (<div>
        {showContextMenu && <div className={`${classes.centerStyle} ${'leaflet-bottom'}`}>
            <div className="leaflet-control leaflet-bar padding-container">
                {ctx.loadingContextMenu || ctx.gpxLoading && <LinearProgress size={20}/>}
                {tabsObj && tabsObj.tabList.length > 0 &&
                    <Paper>
                        <TabContext value={value}>
                            <div style={{maxHeight: '25vh', overflow: 'auto'}}>
                            {Object.values(tabsObj.tabs).map((item, index) =>
                                <TabPanel value={item.key + ''} key={'tabpanel:' + item.key}> {item} </TabPanel>)
                            }
                            </div>
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
        <PanelButtons drawerWidth={drawerWidth} showContextMenu={showContextMenu}
                      setShowContextMenu={setShowContextMenu} clearState={clearState}/>
        {ctx.trackProfileManager?.change && <ChangeProfileTrackDialog open={true}/>}
        {ctx.pointContextMenu.ref && <PointContextMenu anchorEl={ctx.pointContextMenu.ref}/>}
    </div>);
}
