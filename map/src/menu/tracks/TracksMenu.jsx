import React, { useState, useContext, useEffect, useMemo, useRef } from 'react';
import AppContext from '../../context/AppContext';
import { toHHMMSS } from '../../util/Utils';
import CloudTrackGroup from './CloudTrackGroup';
import VisibleGroup from './VisibleGroup';
import _ from 'lodash';
import { Box } from '@mui/material';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import CloudTrackItem from './CloudTrackItem';
import {
    createTrackGroups,
    DEFAULT_GROUP_NAME,
    getGpxFiles,
    updateLoadingTracks,
} from '../../manager/track/TracksManager';
import Empty from '../errors/Empty';
import Loading from '../errors/Loading';
import GroupHeader from '../actions/GroupHeader';
import TrackLoading from './TrackLoading';

export default function TracksMenu() {
    const ctx = useContext(AppContext);
    const [visibleTracks, setVisibleTracks] = useState({ local: [], cloud: [] });
    const [defaultGroup, setDefaultGroup] = useState(null);
    const [sortFiles, setSortFiles] = useState([]);
    const [sortGroups, setSortGroups] = useState([]);
    const anchorEl = useRef(null);
    const [, height] = useWindowSize();
    function visibleTracksOpen() {
        return visibleTracks.local.length > 0 || visibleTracks.cloud.length > 0;
    }

    useEffect(() => {
        if (ctx.gpxFiles) {
            let oldFiles = _.cloneDeep(visibleTracks.cloud);
            visibleTracks.cloud = [];
            Object.values(ctx.gpxFiles).forEach((f) => {
                if (f.url || oldFiles.find((t) => t.name === f.name)) {
                    visibleTracks.cloud.push(f);
                }
            });
        }
        setVisibleTracks({ ...visibleTracks });
    }, [ctx.gpxFiles]);

    useEffect(() => {
        if (ctx.localTracks) {
            let oldFiles = _.cloneDeep(visibleTracks.local);
            visibleTracks.local = [];
            ctx.localTracks.forEach((f) => {
                if (f.selected || oldFiles.find((t) => t.name === f.name)) {
                    visibleTracks.local.push(f);
                }
            });
        }
        setVisibleTracks({ ...visibleTracks });
    }, [ctx.localTracks]);

    // get gpx files and create groups
    useEffect(() => {
        if (!_.isEmpty(ctx.listFiles)) {
            //get gpx files
            let files = getGpxFiles(ctx.listFiles);
            //get groups
            let trackGroups = createTrackGroups(files);

            if (trackGroups.length > 0) {
                let defGroup = trackGroups.find((g) => g.name === DEFAULT_GROUP_NAME);
                if (defGroup) {
                    setDefaultGroup(defGroup);
                }
            }
            ctx.setTracksGroups(trackGroups);
        } else {
            ctx.setTracksGroups([]);
        }
    }, [ctx.listFiles, ctx.setListFiles]);

    useEffect(() => {
        let resultText = '';
        let dist = 0;
        let tracks = 0;
        let seg = 0;
        let wpts = 0;
        let time = 0;
        let diffUp = 0;
        let diffDown = 0;
        Object.values(ctx.gpxFiles).forEach((item) => {
            if (item.local !== true && item.analysis && item.url) {
                if (item.analysis.totalTracks) {
                    tracks += item.analysis.totalTracks;
                } else {
                    tracks++;
                }
                if (item.analysis.points) {
                    seg += item.analysis.points - 1;
                }
                if (item.analysis.wptPoints) {
                    wpts += item.analysis.wptPoints;
                }
                if (item.analysis.totalDistance) {
                    dist += item.analysis.totalDistance;
                }
                if (item.analysis.timeMoving) {
                    time += item.analysis.timeMoving;
                }
                if (item.analysis.diffElevationUp) {
                    diffUp += item.analysis.diffElevationUp;
                }
                if (item.analysis.diffElevationDown) {
                    diffDown += item.analysis.diffElevationDown;
                }
            }

            if (item.local === true && item.analysis && item.url) {
                if (item.analysis.totalTracks) {
                    tracks += item.analysis.totalTracks;
                } else {
                    tracks++;
                }
                if (item.analysis.wptPoints) {
                    wpts += item.analysis.wptPoints;
                }
                if (item.analysis.totalDistance) {
                    dist += item.analysis.totalDistance;
                }
            }
        });

        Object.values(ctx.localTracks).forEach((item) => {
            if (item.selected) {
                tracks++;
                if (item.points?.length > 0) {
                    dist += item.points[item.points.length - 1].distanceTotal;
                    seg += item.points.length - 1;
                }
            }
        });

        if (tracks > 0) {
            let segInfo = seg > 0 ? `: ${seg} segments` : ``;
            let distInfo = dist > 0 ? `, ${(dist / 1000.0).toFixed(1)} km.` : ``;
            let wptInfo = wpts > 0 ? `, ${wpts} wpts.` : ``;
            let timeInfo = time > 0 ? ` Time moving: ${toHHMMSS(time)}.` : ``;
            let uphillDownhillInfo =
                diffUp > 0 || diffDown ? ` Uphill / Downhill: ${diffUp.toFixed(0)} / ${diffDown.toFixed(0)} m.` : ``;

            resultText = `Selected ${tracks} Tracks${segInfo}${distInfo}${wptInfo}${timeInfo}${uphillDownhillInfo}`;
        }

        ctx.setHeaderText((prevState) => ({
            ...prevState,
            tracks: { text: resultText },
        }));
    }, [visibleTracks, ctx.selectedGpxFile]);

    const defaultGroupItems = useMemo(() => {
        if (defaultGroup) {
            const items = [];
            (sortFiles.length > 0 ? sortFiles : defaultGroup.groupFiles).map((file) => {
                items.push(<CloudTrackItem key={'cloudtrack-' + file.name} file={file} />);
            });
            return items;
        }
    }, [defaultGroup?.files, defaultGroup?.files.length, sortFiles]);

    useEffect(() => {
        if (defaultGroup) {
            updateLoadingTracks(ctx, defaultGroup.groupFiles);
        }
    }, [defaultGroup?.groupFiles]);

    return (
        <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
            {defaultGroup && (
                <GroupHeader
                    trackGroup={defaultGroup}
                    anchorEl={anchorEl}
                    setSortGroups={setSortGroups}
                    setSortFiles={setSortFiles}
                />
            )}
            {ctx.gpxLoading ? (
                <Loading />
            ) : (
                <>
                    {ctx.tracksGroups?.length > 0 || defaultGroup?.length > 0 ? (
                        <Box
                            id={'se-track-menu'}
                            minWidth={ctx.infoBlockWidth}
                            maxWidth={ctx.infoBlockWidth}
                            sx={{
                                overflowX: 'hidden !important',
                                overflowY: 'auto !important',
                                maxHeight: `${height - 120}px`,
                            }}
                        >
                            {visibleTracksOpen() && (
                                <VisibleGroup visibleTracks={visibleTracks} setVisibleTracks={setVisibleTracks} />
                            )}
                            {ctx.tracksGroups &&
                                (sortGroups.length > 0 ? sortGroups : ctx.tracksGroups)
                                    .filter((g) => g.name !== DEFAULT_GROUP_NAME)
                                    .map((group, index) => {
                                        return <CloudTrackGroup key={group.name + index} index={index} group={group} />;
                                    })}
                            {ctx.trackLoading?.length > 0 &&
                                ctx.trackLoading.map((lt) => {
                                    return <TrackLoading key={lt} name={lt} />;
                                })}
                            {defaultGroupItems}
                        </Box>
                    ) : (
                        <Empty
                            title={'You don’t have track files'}
                            text={'You can import, create track files using OsmAnd.'}
                            folder={DEFAULT_GROUP_NAME}
                        />
                    )}
                </>
            )}
        </Box>
    );
}
