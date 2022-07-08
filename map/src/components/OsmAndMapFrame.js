import React, {useState, useContext} from 'react';
import {Drawer, Toolbar, Typography, Box} from "@mui/material";
import {
    IconButton, AppBar, Input
} from "@mui/material";
import {
    Close,
    Menu, Search
} from '@mui/icons-material';
import OsmAndMap from './OsmAndMap';
import OsmAndDrawer from './OsmAndDrawer';
import {Outlet} from 'react-router-dom';
import AppContext from "../context/AppContext";

const OsmAndMapFrame = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const drawerWidth = 320;
    const ctx = useContext(AppContext);
    const searchAsync = async(text, latlng) => {
        const params = `lat=${latlng.lat.toFixed(6)}&lon=${latlng.lng.toFixed(6)}&search=${text}`;
        const response = await fetch(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search?${params}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            let data = await response.json();
            let props = {};
            if (data.features.length > 0) {
                props = data.features[0]?.properties;
            }
            const copy = { ...ctx.searchCtx };
            copy.id = new Date().getTime();
            copy.props = props;
            copy.geojson = data;
            ctx.setSearchCtx(copy);
        }
    };

    const searchEnable = () => {
        const shallowClone = { ...ctx.searchCtx };
        shallowClone.query = '';
        
        ctx.setSearchCtx(shallowClone);
    }
    const searchRun = (event) => {
        if (event.key === 'Enter') {
            var hash = window.location.hash;
            if (!hash) {
                alert("Please zoom in closer");
                return;
            }
            let arr = hash.split('/');
            if (parseInt(arr[0].substring(1)) < 7) {
                alert("Please zoom in closer");
                return;
            }
            let latlng = { lat: parseFloat(arr[1]), lng: parseFloat(arr[2])};
            searchAsync(ctx.searchCtx.query, latlng);
        }
    }
    const cancelSearch = () => {
        const shallowClone = { ...ctx.searchCtx };
        delete shallowClone.query;
        delete shallowClone.geojson;
        ctx.setSearchCtx(shallowClone);
    }
    const updateSearch = (event) => {
        const shallowClone = { ...ctx.searchCtx };
        shallowClone.query = event.target.value;
        ctx.setSearchCtx(shallowClone);
    };
    return (
        <>
            <Box sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            }}>
                <AppBar position="static">
                    <Toolbar variant="dense" >
                        <IconButton onClick={toggleDrawer}
                            edge="start"
                            sx={{ mr: 2, display: { sm: "none" } }}>
                            <Menu />
                        </IconButton>
                        <Box sx={{ ml: 1 }}>
                            {ctx.appText && <Typography variant="h6" color="inherit" >
                                {ctx.appText}
                            </Typography>}
                            {!ctx.appText && ctx.searchCtx.query !== undefined && <>
                                <Input inputProps={{ style: { color: "white" } }}
                                    label="Search Results"
                                    inputRef={(input) => {
                                        if (input != null) {
                                            input.focus();
                                        }
                                    }}
                                    onChange={updateSearch}
                                    onKeyPress={searchRun}
                                    >
                                </Input>
                                <IconButton onClick={cancelSearch} color="inherit">
                                    <Close />
                                </IconButton>
                            </>}
                            {!ctx.appText && ctx.searchCtx.query === undefined && <>
                                <IconButton onClick={searchEnable} color="inherit">
                                    <Search />
                                </IconButton>
                                <Typography variant="h6" color="inherit" align="justify"
                                    style={{ display: 'inline' }} >
                                    {process.env.REACT_APP_WEBSITE_NAME}
                                </Typography>
                            </>}
                        </Box>
                    </Toolbar>
                </AppBar>
                <OsmAndMap/>
            </Box>
            <Drawer
                //  container={container}
                variant="temporary"
                open={drawerOpen}
                onClose={toggleDrawer}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <OsmAndDrawer mobile={true} toggleDrawer={toggleDrawer}/>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open>
                <OsmAndDrawer mobile={false}/>
            </Drawer>
            <Outlet/>
        </>

    );
};

export default OsmAndMapFrame;