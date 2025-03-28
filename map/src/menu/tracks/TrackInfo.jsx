import React, { useContext } from 'react';
import { toHHMMSS } from '../../util/Utils';
import AppContext from '../../context/AppContext';
import { getAnalysisData } from '../../manager/track/TracksManager';
import { convertMeters, getLargeLengthUnit, LARGE_UNIT } from '../settings/units/UnitsConverter';
import { useTranslation } from 'react-i18next';

export default function TrackInfo({ file }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const item = file;
    let localLayer = ctx.gpxFiles[item.name];
    let timeRange = '';
    let clienttime = '';
    let distance = '';
    let timeMoving = '';
    let updownhill = '';
    let speed = '';
    let summary = getAnalysisData(item) ?? localLayer?.summary;
    if (item.clienttimems) {
        clienttime = `Upload time: ${new Date(item.clienttimems).toDateString()} ${new Date(
            item.clienttimems
        ).toLocaleTimeString()}`;
    }
    if (summary?.startTime && summary?.startTime !== summary?.endTime) {
        let stdate = new Date(summary.startTime).toDateString();
        let edate = new Date(summary.endTime).toDateString();
        timeRange =
            new Date(summary.startTime).toDateString() +
            ' ' +
            new Date(summary.startTime).toLocaleTimeString() +
            ' - ' +
            (edate !== stdate ? edate : '') +
            new Date(summary.endTime).toLocaleTimeString();
    }
    if (summary?.totalDistance > 0) {
        distance =
            'Distance: ' +
            convertMeters(summary?.totalDistance, ctx.unitsSettings.len, LARGE_UNIT)?.toFixed(1) +
            t(getLargeLengthUnit(ctx));
    }
    if (summary?.timeMoving) {
        timeMoving = 'Time moving: ' + toHHMMSS(summary?.timeMoving);
    }
    if (summary?.diffElevationDown > 0 || summary?.diffElevationUp > 0) {
        updownhill =
            'Uphill/downhill: ' +
            Number(summary?.diffElevationUp ?? 0).toFixed(0) +
            '/' +
            Number(summary?.diffElevationDown ?? 0).toFixed(0) +
            ' m';
    }
    if (summary?.maxSpeed > 0) {
        speed =
            'SpeedTab (min/avg/max): ' +
            (summary.minSpeed * 3.6).toFixed(0) +
            ' / ' +
            (summary.avgSpeed * 3.6).toFixed(0) +
            ' / ' +
            (summary.maxSpeed * 3.6).toFixed(0) +
            ' km/h';
    }

    return (
        <div>
            {item.name}
            {timeRange ? (
                <>
                    <br />
                    <br />
                    Time:{' '}
                </>
            ) : (
                <></>
            )}{' '}
            {timeRange}
            {distance ? <br /> : <></>} {distance}
            {timeMoving ? <br /> : <></>} {timeMoving}
            {updownhill ? <br /> : <></>} {updownhill}
            {speed ? <br /> : <></>} {speed}
            {clienttime ? <br /> : <></>} {clienttime}
        </div>
    );
}
