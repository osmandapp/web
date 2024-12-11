import { useContext, useEffect, useState } from 'react';
import AppContext, { OBJECT_TYPE_SHARE_FILE } from '../../context/AppContext';
import { addTrackToMap } from './CloudTrackLayer';
import { useMap } from 'react-leaflet';
import { GPX } from '../../manager/GlobalManager';

export default function ShareFileLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [currentShareFile, setCurrentShareFile] = useState(null);

    useEffect(() => {
        if (ctx.currentObjectType === OBJECT_TYPE_SHARE_FILE) {
            if (ctx.selectedGpxFile && ctx.selectedGpxFile.type === GPX) {
                const layer = addTrackToMap({ ctx, file: ctx.selectedGpxFile, map, fit: true });
                if (layer) {
                    setCurrentShareFile(layer);
                }
            }
        } else {
            if (currentShareFile) {
                map.removeLayer(currentShareFile);
                setCurrentShareFile(null);
            }
        }
    }, [ctx.currentObjectType, ctx.selectedGpxFile]);
}
