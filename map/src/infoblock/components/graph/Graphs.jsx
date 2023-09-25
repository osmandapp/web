import GpxGraphProvider from './GpxGraphProvider';
import RoadAttributesGraphProvider from './RoadAttributesGraphProvider';
import React, { useContext, useState } from 'react';
import AppContext from '../../../context/AppContext';

export default function Graphs() {
    const ctx = useContext(AppContext);

    const [selectedPoint, setSelectedPoint] = useState(null);
    const [pointTypes, setPointTypes] = useState(null);

    return (
        <>
            <GpxGraphProvider width={ctx.infoBlockWidth} setSelectedPoint={setSelectedPoint} pointTypes={pointTypes} />
            <RoadAttributesGraphProvider
                width={ctx.infoBlockWidth}
                selectedPoint={selectedPoint}
                setPointTypes={setPointTypes}
            />
        </>
    );
}
