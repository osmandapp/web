import GpxGraphProvider from './GpxGraphProvider';
import RoadAttributesGraphProvider from './RoadAttributesGraphProvider';
import React, { useContext, useState } from 'react';
import AppContext from '../../../context/AppContext';

export default function Graphs() {
    const ctx = useContext(AppContext);

    const [selectedPoint, setSelectedPoint] = useState(null);
    const [pointTypes, setPointTypes] = useState(null);

    const graphWidth = ctx.infoBlockWidth;

    return (
        <>
            <GpxGraphProvider width={graphWidth} setSelectedPoint={setSelectedPoint} pointTypes={pointTypes} />
            <RoadAttributesGraphProvider
                width={graphWidth}
                selectedPoint={selectedPoint}
                setPointTypes={setPointTypes}
            />
        </>
    );
}
