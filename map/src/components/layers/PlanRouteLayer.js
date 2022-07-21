import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import PanelButtons from "../contextmenu/PanelButtons";
import {BaseBuilder, buildGPX} from "gpx-builder";
import {Metadata} from "gpx-builder/dist/builder/BaseBuilder/models";
import Utils from "../../util/Utils";
import SaveRouteDialog from "../contextmenu/SaveRouteDialog";
import CurrentlyEditTrack from "../drawer/track/CurrentlyEditTrack";


export default function PlanRouteLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [openSaveDialog, setOpenSaveDialog] = useState(false);
    const [openPanelButtons, setOpenPanelButtons] = useState(false);

    // useEffect( () => {
    if (ctx.currentlyEditTrack) {
        map.on("editable:drawing:clicked", e => {
            ctx.setCurrentlyEditTrack({...ctx.currentlyEditTrack.clickedEvent(e, ctx)});
        });

        map.on("editable:vertex:deleted", e => {
            ctx.setCurrentlyEditTrack({...ctx.currentlyEditTrack.deletedEvent(e)});
        });

        map.on("editable:vertex:dragend", e => {
            ctx.setCurrentlyEditTrack({...ctx.currentlyEditTrack.dragendEvent()});
        });

        map.on("editable:drawing:end", e => {
            ctx.setCurrentlyEditTrack({...ctx.currentlyEditTrack.endEvent()});
        })

        map.on("editable:drawing:start", e => {
            ctx.setCurrentlyEditTrack({...ctx.currentlyEditTrack.startEvent()});
        })
    }
    // }, []);

    useEffect(() => {
        if (ctx.selectedEditTrack) {
            if (ctx.currentlyEditTrack === null) {
                ctx.setCurrentlyEditTrack({...new CurrentlyEditTrack().showTrack(ctx.selectedEditTrack, map, ctx)});
            } else {
                console.log(ctx.currentlyEditTrack)
                ctx.setCurrentlyEditTrack({...ctx.currentlyEditTrack.showTrack(ctx.selectedEditTrack, map, ctx)});
            }
        } else {
            if (ctx.currentlyEditTrack !== null) {
                ctx.setCurrentlyEditTrack({...ctx.currentlyEditTrack.clean(map)});
            }
        }
    }, [ctx.selectedEditTrack, ctx.setSelectedEditTrack]);

    useEffect(() => {
        if (ctx.createNewTrack) {
            if (ctx.currentlyEditTrack) {
                ctx.setCurrentlyEditTrack({...ctx.currentlyEditTrack.prepareMap(map)});
            }
            ctx.setCurrentlyEditTrack({...new CurrentlyEditTrack()});
        }
    }, [ctx.createNewTrack, ctx.setCreateNewTrack]);

    const [newFileName, setNewFileName] = useState('');

    //create gpx
    useEffect(() => {
        if (newFileName !== '') {
            const {Point} = BaseBuilder.MODELS;
            let points = [];
            ctx.currentlyEditTrack.pointsList.forEach(p => points.push(new Point(p.lat, p.lng)));
            const gpxData = new BaseBuilder();
            gpxData.setSegmentPoints(points);
            gpxData.setMetadata(new Metadata({name: 'new'}))
            let newGpx = buildGPX(gpxData.toObject());
            const file = new File([newGpx], newFileName + ".gpx", {
                type: "application/gpx+xml",
            });
            let gpxLayer = {};
            gpxLayer.name = 'local:' + file.name;
            gpxLayer.localContent = `${process.env.REACT_APP_GPX_API}/gpx/get-gpx-file?name=` + encodeURIComponent(file.name);
            gpxLayer.local = true;
            Utils.uploadFile(ctx.gpxFiles, ctx.setGpxFiles, ctx, gpxLayer, file).then();
        }
    }, [newFileName, setNewFileName]);

    useEffect(() => {
        if (ctx.currentlyEditTrack) {
            setOpenPanelButtons(true);
        }

    }, [ctx.currentlyEditTrack, ctx.setCurrentlyEditTrack]);

    return (<>
        <SaveRouteDialog open={openSaveDialog} setOpen={setOpenSaveDialog} setFileName={setNewFileName}/>
        {openPanelButtons &&
            <PanelButtons setOpenSaveDialog={setOpenSaveDialog} setOpenPanelButtons={setOpenPanelButtons}/>}
    </>);
}