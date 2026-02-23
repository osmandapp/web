import L from 'leaflet';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export const SIZE = 42;
export const START_POINT = 'start';
export const INTERMEDIATE_POINT = 'intermediate';
export const FINISH_POINT = 'finish';
export const DESTINATION_POINT = 'destination';

export const ICON_STATE_DEFAULT = 'default';
export const ICON_STATE_HOVER = 'hover';
export const ICON_STATE_MOVED = 'moved';

function getComponent(icons, state) {
    return icons[state] ?? icons[ICON_STATE_DEFAULT];
}

function toSvgString(icons, state) {
    return renderToStaticMarkup(React.createElement(getComponent(icons, state)));
}

export function createIconSvgMap(icons) {
    return {
        [ICON_STATE_DEFAULT]: toSvgString(icons, ICON_STATE_DEFAULT),
        [ICON_STATE_HOVER]: toSvgString(icons, ICON_STATE_HOVER),
        [ICON_STATE_MOVED]: toSvgString(icons, ICON_STATE_MOVED),
    };
}

export function createDivIcon(svgString, modifier) {
    return L.divIcon({
        html: `<div class="route-point-marker route-point-marker--${modifier}" style="width:${SIZE}px;height:${SIZE}px;">${svgString}</div>`,
        className: '',
        iconSize: [SIZE, SIZE],
        iconAnchor: [SIZE / 2, SIZE],
    });
}
