import { ReactComponent as IconDefault } from '../../assets/map/map_intermediate_point.svg';
import { ReactComponent as IconHover } from '../../assets/map/map_intermediate_point_hover.svg';
import { ReactComponent as IconMoved } from '../../assets/map/map_intermediate_point_moved.svg';
import {
    createDivIcon,
    createIconSvgMap,
    ICON_STATE_DEFAULT,
    ICON_STATE_HOVER,
    ICON_STATE_MOVED,
    INTERMEDIATE_POINT,
} from './trackPointMarkerFactory';

const ICONS = {
    [ICON_STATE_DEFAULT]: IconDefault,
    [ICON_STATE_HOVER]: IconHover,
    [ICON_STATE_MOVED]: IconMoved,
};
const ICON_SVG = createIconSvgMap(ICONS);

export const intermediatePointIcon = createDivIcon(ICON_SVG[ICON_STATE_DEFAULT], INTERMEDIATE_POINT);
export const getIntermediatePointIconSvg = (state) => ICON_SVG[state] ?? ICON_SVG[ICON_STATE_DEFAULT];
