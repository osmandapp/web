import { ReactComponent as IconDefault } from '../../assets/map/map_start_point.svg';
import { ReactComponent as IconHover } from '../../assets/map/map_start_point_hover.svg';
import { ReactComponent as IconMoved } from '../../assets/map/map_stat_point_moved.svg';
import {
    createDivIcon,
    createIconSvgMap,
    ICON_STATE_DEFAULT,
    ICON_STATE_HOVER,
    ICON_STATE_MOVED,
    START_POINT,
} from './trackPointMarkerFactory';

const ICONS = {
    [ICON_STATE_DEFAULT]: IconDefault,
    [ICON_STATE_HOVER]: IconHover,
    [ICON_STATE_MOVED]: IconMoved,
};
const ICON_SVG = createIconSvgMap(ICONS);

export const startPointIcon = createDivIcon(ICON_SVG[ICON_STATE_DEFAULT], START_POINT);
export const getStartPointIconSvg = (state) => ICON_SVG[state] ?? ICON_SVG[ICON_STATE_DEFAULT];
