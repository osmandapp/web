import {AppBar, Button, LinearProgress, Box} from "@mui/material";
import AppContext from "../../context/AppContext"
import React, {useState, useContext, useEffect} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Close} from '@mui/icons-material';
import TrackTabList from "./tabs/TrackTabList";
import WeatherTabList from "./tabs/WeatherTabList";
import PanelButtons from "./PanelButtons";
import FavoritesTabList from "./tabs/FavoritesTabList";
import _ from "lodash";
import ChangeProfileTrackDialog from "./track/dialogs/ChangeProfileTrackDialog";
import PointContextMenu from "./PointContextMenu";
import PoiTabList from "../PoiTabList";


export default function InformationBlock({hideContextMenu, drawerWidth}) {

    const ctx = useContext(AppContext);

    const [showContextMenu, setShowContextMenu] = useState(false);
    const [value, setValue] = useState('general');
    const [tabsObj, setTabsObj] = useState(null);
    const [prevTrack, setPrevTrack] = useState(null);
    const [clearState, setClearState] = useState(false);

    useEffect(() => {
        if (!showContextMenu) {
            stopCreatedTrack(false);
            ctx.setShowPoints({points: true, wpts: true});
            ctx.setTrackRange(null);
            setClearState(true);
            ctx.setCurrentObjectType(null);
        }
    }, [showContextMenu])

    useEffect(() => {
        if (ctx.currentObjectType !== ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && ctx.createTrack) {
            stopCreatedTrack(true);
        }
    }, [ctx.currentObjectType])

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
                    obj = new PoiTabList().create();
                } else if (ctx.selectedGpxFile) {
                    obj = new TrackTabList().create(ctx, setShowContextMenu);
                }
                if (obj) {
                    setShowContextMenu(true);
                    clearStateIfObjChange();
                    setTabsObj(obj);
                    setValue(obj.defaultTab);
                }
            }
        }
    }, [ctx.currentObjectType, ctx.selectedGpxFile, ctx.weatherPoint, ctx.updateContextMenu]);

    function clearStateIfObjChange() {
        if (prevTrack && prevTrack.name !== ctx.selectedGpxFile.name && prevTrack.points?.length !== ctx.selectedGpxFile?.points?.length) {
            setClearState(true);
        } else {
            setClearState(false);
        }
    }

    function stopCreatedTrack(deletePrev) {
        if (ctx.createTrack) {
            ctx.createTrack.enable = false;
            if (deletePrev) {
                ctx.createTrack.deletePrev = deletePrev;
            }
            ctx.setCreateTrack({...ctx.createTrack});
            ctx.addFavorite.editTrack = false;
            ctx.setAddFavorite({...ctx.addFavorite});
        }
    }


    return <>{showContextMenu && !hideContextMenu &&
        <>
            <Box
                anchor={'right'}
                sx={{alignContent: "flex-end", height: '100vh', overflow: 'auto', width: '800px !important'}}
                >
                <div>
                    {(ctx.loadingContextMenu || ctx.gpxLoading) && <LinearProgress size={20}/>}
                    {tabsObj && tabsObj.tabList.length > 0 &&
                        <TabContext value={value}>
                            <AppBar position='static' color='default'>
                                <div style={{display: 'inherit'}}>
                                    <Button key='close' onClick={() => setShowContextMenu(false)}>
                                        <Close/>
                                    </Button>
                                    <TabList
                                        onChange={(e, newValue) => setValue(newValue)}
                                        children={tabsObj.tabList}
                                    />
                                </div>
                            </AppBar>
                            <div>
                                {Object.values(tabsObj.tabs).map((item, index) =>
                                    <TabPanel
                                        value={item.key + ''}
                                        key={'tabpanel:' + item.key}>
                                        {item}
                                    </TabPanel>)
                                }
                            </div>
                        </TabContext>
                    }
                </div>
            </Box>
            <PanelButtons
                drawerWidth={drawerWidth}
                showContextMenu={showContextMenu}
                setShowContextMenu={setShowContextMenu}
                clearState={clearState}/>
        </>
    }
        {ctx.trackProfileManager?.change && <ChangeProfileTrackDialog open={true}/>}
        {ctx.pointContextMenu.ref && <PointContextMenu anchorEl={ctx.pointContextMenu.ref}/>}
    </>
}
