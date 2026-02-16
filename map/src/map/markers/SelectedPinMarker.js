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
import { SELECTED_ICON_SIZE, SELECTED_PIN_SIZE } from '../util/MarkerSelectionService';
import { DEFAULT_POI_SHAPE } from '../../manager/PoiManager';

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
        iconOffsetRatio: 0.04,
    },
    hexagon: {
        color: HexagonColor,
        light: HexagonLight,
        stroke: HexagonStroke,
        iconOffsetRatio: 0.05,
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
    const imageMatch = html.match(/<image[^>]*href="([^"]+)"[^>]*>/i);
    if (imageMatch?.[1]) {
        const href = imageMatch[1];
        return `<img src="${href}" width="${iconSize}" height="${iconSize}" style="width:${iconSize}px;height:${iconSize}px;" />`;
    }
    const withoutShadow = removeShadowFromIconWpt(html);
    return changeIconSizeWpt(withoutShadow, iconSize, iconSize);
}

export function createLayeredPinIcon(options = {}) {
    const merged = {
        size: SELECTED_PIN_SIZE,
        iconSize: SELECTED_ICON_SIZE,
        color: '#FF8800',
        shape: DEFAULT_POI_SHAPE,
        ...options,
    };
    const { color, shape, size, iconSize, iconHtml, className, iconAnchor } = merged;
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
                    ? `<div class="map-layered-pin__icon" style="position:absolute;left:50%;top:50%;transform:translate(-50%, -50%) translateY(${translateY}px);width:${iconWrapperSize}px;height:${iconWrapperSize}px;display:flex;align-items:center;justify-content:center;">
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
        iconAnchor: iconAnchor ?? [size / 2, size - size * 0.08],
    });
}