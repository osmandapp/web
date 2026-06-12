import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import L from 'leaflet';
import { changeIconSizeWpt, removeShadowFromIconWpt, changeSvgColor } from './MarkerOptions';
import { ReactComponent as CircleColor } from '../../assets/map/map_pin_circle_color.svg';
import { ReactComponent as CircleLight } from '../../assets/map/map_pin_circle_light.svg';
import { ReactComponent as CircleStroke } from '../../assets/map/map_pin_circle_stroke.svg';
import { ReactComponent as SquareColor } from '../../assets/map/map_pin_square_color.svg';
import { ReactComponent as SquareLight } from '../../assets/map/map_pin_square_light.svg';
import { ReactComponent as SquareStroke } from '../../assets/map/map_pin_square_stroke.svg';
import { ReactComponent as HexagonColor } from '../../assets/map/map_pin_hexagon_color.svg';
import { ReactComponent as HexagonLight } from '../../assets/map/map_pin_hexagon_light.svg';
import { ReactComponent as HexagonStroke } from '../../assets/map/map_pin_hexagon_stroke.svg';
import { ReactComponent as HoverCircle } from '../../assets/map/hover_point_circle.svg';
import { ReactComponent as HoverSquare } from '../../assets/map/hover_point_square.svg';
import { ReactComponent as HoverOctagon } from '../../assets/map/hover_point_octagon.svg';
import { SELECTED_ICON_SIZE, SELECTED_PIN_COLOR, SELECTED_PIN_SIZE } from '../util/MarkerSelectionService';
import { DEFAULT_POI_SHAPE } from '../../manager/PoiManager';

/** Pin SVGs use viewBox 0 0 70 70; the map anchor must be the bottom dot center (y=67), not the box bottom. */
const PIN_VIEWBOX_SIZE = 70;
const PIN_TIP_CENTER_Y = 67;

export const HOVER_OUTLINE_SIZE = 34;

const HOVER_OUTLINE_SHAPES = {
    circle: HoverCircle,
    square: HoverSquare,
    octagon: HoverOctagon,
    hexagon: HoverOctagon,
};

const SHAPES = {
    circle: {
        color: CircleColor,
        light: CircleLight,
        stroke: CircleStroke,
        iconOffsetRatio: 0.085,
    },
    square: {
        color: SquareColor,
        light: SquareLight,
        stroke: SquareStroke,
        iconOffsetRatio: 0.085,
    },
    hexagon: {
        color: HexagonColor,
        light: HexagonLight,
        stroke: HexagonStroke,
        iconOffsetRatio: 0.085,
    },
};

function resizeSvg(svg, size) {
    if (!svg) {
        return '';
    }
    return svg.replace(/width="\d+(\.\d+)?"/, `width="${size}"`).replace(/height="\d+(\.\d+)?"/, `height="${size}"`);
}

function prepareInnerIcon(html, iconSize) {
    if (!html) {
        return '';
    }
    const imgMatch = html.match(/<img[^>]*src="([^"]+)"[^>]*>/i);
    if (imgMatch?.[1]) {
        const src = imgMatch[1];
        return `<img src="${src}" width="${iconSize}" height="${iconSize}" style="width:${iconSize}px;height:${iconSize}px;object-fit:cover;border-radius:50%;" />`;
    }

    const imageMatch = html.match(/<image[^>]*href="([^"]+)"[^>]*>/i);
    if (imageMatch?.[1]) {
        const href = imageMatch[1];
        return `<img src="${href}" width="${iconSize}" height="${iconSize}" style="width:${iconSize}px;height:${iconSize}px;" />`;
    }

    const trimmed = html.trim();
    const svgOpenCount = (trimmed.match(/<svg\b/gi) ?? []).length;
    if (svgOpenCount === 1 && trimmed.startsWith('<svg') && !trimmed.includes('<image')) {
        const cleaned = removeShadowFromIconWpt(trimmed);
        const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(cleaned)}`;
        return `<img src="${dataUrl}" width="${iconSize}" height="${iconSize}" style="width:${iconSize}px;height:${iconSize}px;object-fit:contain;" alt="" />`;
    }

    const withoutShadow = removeShadowFromIconWpt(html);
    return changeIconSizeWpt(withoutShadow, iconSize, iconSize);
}

export function createHoverOutlineIcon({ shape, color, size } = {}) {
    const px = Math.max(Number(size) || 0, HOVER_OUTLINE_SIZE);
    const shapeKey = shape === 'octagon' || shape === 'hexagon' ? 'octagon' : shape;
    const Component = HOVER_OUTLINE_SHAPES[shapeKey] ?? HOVER_OUTLINE_SHAPES.circle;
    const svg = resizeSvg(renderToStaticMarkup(React.createElement(Component)), px);
    const html = `<div class="map-hover-outline" style="width:${px}px;height:${px}px;color:${color};display:flex;align-items:center;justify-content:center;pointer-events:none;">${svg}</div>`;

    return L.divIcon({
        html,
        className: '',
        iconSize: [px, px],
        iconAnchor: [px / 2, px / 2],
    });
}

export function createLayeredPinIcon(options = {}) {
    const merged = {
        size: SELECTED_PIN_SIZE,
        iconSize: SELECTED_ICON_SIZE,
        color: SELECTED_PIN_COLOR,
        shape: DEFAULT_POI_SHAPE,
        ...options,
    };
    const { color, shape, size, iconSize, iconHtml, className, iconAnchor, invertIcon } = merged;
    const shapeAssets = SHAPES[shape] ?? SHAPES[DEFAULT_POI_SHAPE];

    const colorSvg = renderToStaticMarkup(React.createElement(shapeAssets.color));
    const lightSvg = renderToStaticMarkup(React.createElement(shapeAssets.light));
    const strokeSvg = renderToStaticMarkup(React.createElement(shapeAssets.stroke));

    const coloredLayer = resizeSvg(changeSvgColor(colorSvg, color), size);
    const strokeLayer = resizeSvg(strokeSvg, size);
    const lightLayer = resizeSvg(lightSvg, size);

    const markerIconHtml = prepareInnerIcon(iconHtml, iconSize);
    const iconWrapperSize = Math.min(iconSize, size);
    const translateY = (shapeAssets.iconOffsetRatio ?? 0) * size * -1;

    const html = `
        <div class="map-layered-pin ${className ?? ''}" style="position:relative;width:${size}px;height:${size}px;">
            <div class="map-layered-pin__layer" style="position:absolute;inset:0;">
                ${coloredLayer}
            </div>
            <div class="map-layered-pin__layer" style="position:absolute;inset:0;">
                ${strokeLayer}
            </div>
            <div class="map-layered-pin__layer" style="position:absolute;inset:0;">
                ${lightLayer}
            </div>
            ${
                markerIconHtml
                    ? `<div class="map-layered-pin__icon" style="position:absolute;left:50%;top:50%;transform:translate(-50%, -50%) translateY(${translateY}px);width:${iconWrapperSize}px;height:${iconWrapperSize}px;display:flex;align-items:center;justify-content:center;${invertIcon ? 'filter:brightness(0) invert(1);' : ''}">
                            ${markerIconHtml}
                       </div>`
                    : ''
            }
        </div>
    `;

    return L.divIcon({
        html,
        className: '',
        iconSize: [size, size],
        iconAnchor: iconAnchor ?? [size / 2, (size * PIN_TIP_CENTER_Y) / PIN_VIEWBOX_SIZE],
    });
}
