import React, { useContext, useEffect } from 'react';
import LocalTrackGroup from '../tracks/LocalTrackGroup';
import AppContext from '../../context/AppContext';
import { createTrackGroups, getGpxFiles } from '../../manager/track/TracksManager';
import _ from 'lodash';

export default function PlanRouteMenu() {
    const ctx = useContext(AppContext);

    // get gpx files and create groups
    useEffect(() => {
        if (!_.isEmpty(ctx.listFiles)) {
            //get gpx files
            let files = getGpxFiles(ctx.listFiles);
            //get groups
            let trackGroups = createTrackGroups(files);
            ctx.setTracksGroups(trackGroups);
        } else {
            ctx.setTracksGroups([]);
        }
    }, [ctx.listFiles, ctx.setListFiles]);

    return (
        <>
            <LocalTrackGroup />
        </>
    );
}
