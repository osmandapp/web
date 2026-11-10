import React, { useState } from 'react';
import RoadAttributesGraph from './RoadAttributesGraph';
import MainGraph from './MainGraph';
import { cap } from '../GraphManager';
import { UNDEFINED_DATA } from './roadAttributes';
import { useTranslation } from 'react-i18next';

export default function GpxGraph({ profile, slopes, attrGraphData, visible, width }) {
    const [selectedPoint, setSelectedPoint] = useState(null);

    const { t } = useTranslation();

    function isEmptyAttrData(attrName) {
        return (
            (attrGraphData[attrName].datasets.length < 2 &&
                attrGraphData[attrName].datasets[0]?.label === cap(UNDEFINED_DATA)) ||
            attrGraphData[attrName].datasets.length === 0
        );
    }

    function isBigData(attrName) {
        return attrGraphData[attrName].datasets.length > 500;
    }

    return (
        <>
            <MainGraph
                profile={profile}
                slopes={slopes}
                attrGraphData={attrGraphData}
                visible={visible}
                setSelectedPoint={setSelectedPoint}
                width={width}
            />
            {attrGraphData &&
                Object.keys(attrGraphData).map(
                    (attrName) =>
                        !isEmptyAttrData(attrName) &&
                        !isBigData(attrName) && (
                            <RoadAttributesGraph
                                key={attrName}
                                name={t(`routeInfo_${attrName}_name`)}
                                data={attrGraphData[attrName]}
                                width={width}
                                selectedPoint={selectedPoint}
                            />
                        )
                )}
        </>
    );
}
