import React, { useState } from 'react';
import RoadAttributesGraph from './RoadAttributesGraph';
import MainGraph from './MainGraph';

export default function GpxGraph({ mainData, attrGraphData, showData, width }) {
    const [selectedPoint, setSelectedPoint] = useState(null);

    return (
        <>
            <MainGraph
                data={mainData}
                attrGraphData={attrGraphData}
                showData={showData}
                setSelectedPoint={setSelectedPoint}
                width={width}
            />
            {attrGraphData?.types && (
                <RoadAttributesGraph
                    name={'Road type'}
                    data={attrGraphData.types}
                    width={width}
                    selectedPoint={selectedPoint}
                />
            )}
            {attrGraphData?.surfaces && (
                <RoadAttributesGraph
                    name={'Surface'}
                    data={attrGraphData.surfaces}
                    width={width}
                    selectedPoint={selectedPoint}
                />
            )}
        </>
    );
}
