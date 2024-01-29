import React, { useState } from 'react';
import RoadAttributesGraph from './RoadAttributesGraph';
import MainGraph from './MainGraph';
import { cap, UNDEFINED_DATA } from '../../../manager/GraphManager';
import { useTranslation } from 'react-i18next';

export default function GpxGraph({ mainData, attrGraphData, showData, width }) {
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
                data={mainData}
                attrGraphData={attrGraphData}
                showData={showData}
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
