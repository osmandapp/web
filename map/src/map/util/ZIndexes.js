// Leaflet default panes (leaflet.css):
// tile 200, overlay 400, shadow 500, marker 600, tooltip 650, popup 700
export const LEAFLET_MARKER_PANE_Z_INDEX = 600;

// Custom leaflet panes
export const MVT_HYBRID_UNDERLAY_PANE_Z_INDEX = 180;
export const MVT_PANE_Z_INDEX = 190;
export const POI_SECONDARY_PANE_Z_INDEX = 500;
export const WEATHER_PANE_Z_INDEX = LEAFLET_MARKER_PANE_Z_INDEX + 10;

// TileLayer zIndex inside its pane
export const WEATHER_TILE_Z_INDEX = 1000;

// Marker zIndexOffset inside markerPane
export const MARKER_Z_INDEX_SECONDARY = 500;
export const POINT_MARKER_Z_INDEX_OFFSET = 1000;
export const TURN_DOT_Z_INDEX_OFFSET = 1100;
export const MARKER_Z_INDEX_MAIN = 2000;
export const SELECTED_MARKER_Z_INDEX = 3000;

// Page UI over the map
export const POPPER_MENU_Z_INDEX = 100;
export const OPEN_MENU_INFOBLOCK_Z_INDEX = 1000;
export const LEFT_MENU_Z_INDEX = OPEN_MENU_INFOBLOCK_Z_INDEX - 1;
export const OPEN_LEFT_MENU_Z_INDEX = OPEN_MENU_INFOBLOCK_Z_INDEX + 1;
export const MAP_BUTTONS_Z_INDEX = 1000;
export const GRAPH_Z_INDEX = 1000;
export const HEADER_MENU_Z_INDEX = 1300;
export const INSTALL_BANNER_Z_INDEX = 1400;
export const MAP_CENTER_ICON_Z_INDEX = 2000;
