---
sidebar_position: 6
title:  Map Styles (Vector Maps)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview {#overview}

Map styles define how vector map data is rendered in OsmAnd. A style controls the visual appearance of map objects such as roads, buildings, land use, water, and points of interest, including colors, line patterns, and labels.

OsmAnd provides several built-in styles optimized for different activities. You can switch styles in the [Configure map menu](./configure-map-menu.md) and adjust style parameters. Vector map styles support switching between day and night modes.

In addition to built-in styles, OsmAnd supports custom map styles. Custom styles are based on rendering rules and can be imported, shared, and modified to highlight the information you need.


## Default Map Styles {#default-map-styles}

OsmAnd offers you many map styles and data layers that fit by default. This section describes the main ones for day and night modes.

**Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

**iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*

### OsmAnd {#osmand}

![OsmAnd map style](@site/static/img/map/map-style-osmand-with-routes.png)  

OsmAnd's standard map rendering style balances detail and simplicity, making it ideal for urban and outdoor exploration. It details city features such as streets, buildings, and transportation stops while simplifying visual clutter by making maps clearer.  

Key benefits include route mapping, surface quality, access restrictions, road signage, SAC-scale path renderings, sports facilities, and topographic details such as contour lines.

### Touring View {#touring-view}

![Touring view map style](@site/static/img/map/map-style-touring.png)

Touring style with high contrast and maximum detail. Includes all the options of the default OsmAnd style while displaying as much detail as possible, in particular roads, paths, and other ways of traveling. Clear distinction of road types in a *touring atlas*. Suitable for day, night, and outdoor use.

### UniRS and LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

UniRS and LightRS styles are author styles that render the basic map information but in different color schemes.  

- **UniRS style**. This style is a modified version of the default to enhance the contrast for pedestrian and bicycle paths. It retains the classic Mapnik color scheme.  

    ![LightRS map style](@site/static/img/map/map-style-lightrs.png)

- **LightRS style**. This is a simple driving style that features a gentle night mode. It highlights roads in a contrasting orange color, dims secondary map objects, and displays topographical features like contour lines.

    ![UniRS map style](@site/static/img/map/map-style-unirs.png)

### Nautical {#nautical}

![Nautical map style](@site/static/img/map/map-style-nautical.png)

This is a style of nautical navigation featuring buoys, lighthouses, river routes, sea lanes, marks, harbors, and nautical marks. Read more in the section [Nautical Map Style](../plugins/nautical-charts.md#nautical-map-style).

### Marine {#marine}

![Marine map style](@site/static/img/map/map-style-marine.png)

This is an advanced nautical map style with light sectors, full lighthouse characteristics, and other detailed maritime features for realistic and accurate marine navigation. For more details read section [Marine Map Style](../plugins/nautical-charts.md#marine-map-style).

### Winter and Ski {#winter-and-ski}

![Winter & Ski map style](@site/static/img/map/map-style-winter-ski.png)

This is a style for ski sports that describes the pistes, elevators, and cross-country trails, as well as obscuring secondary map objects. **Winter and Ski style** is designed to help you with winter sports navigation.  

You can see the ski slopes and other details such as the difficulty of the slopes and elevator markers. Key benefits include the convenient display of slopes, elevators, and other skiing features. Less of the distracting secondary objects of the map. Read more in the article [Ski Maps](../plugins/ski-maps.md).

### Topo {#topo}

![Topo map style](@site/static/img/map/map-style-topo.png)

This style is designed for hiking, camping, and bicycling in nature. It features contrasting roads and natural features, different types of trails, extended contour line options, and additional details. It is readable in the outdoors. The *Surface Integrity* setting allows you to distinguish the quality of the road.

### OSM-carto {#osm-carto}

![OSM-carto map style](@site/static/img/map/map-style-osm-carto.png)

This style imitates the default [OpenStreetMap web style](https://www.openstreetmap.org/). The source code of the web version is available on [Github](https://github.com/gravitystorm/openstreetmap-carto), OsmAnd code is available on [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Desert {#desert}

![Desert map style](@site/static/img/map/map-style-desert.png)

Designed for deserts and other sparsely populated regions, offering more detailed map information.

### Offroad {#offroad}

![Offroad map style](@site/static/img/map/map-style-offroad.png)

Designed for off-road navigation, this style is based on the [Topo](#topo) map layout and works well with satellite images as an underlay. It features thinner main roads to highlight paths, tracks, bike routes, and other off-road trails, making it ideal for exploring unpaved routes in rural or remote areas.

### Snowmobile {#snowmobile}

![Snowmobile map style](@site/static/img/map/map-style-snowmobile.png)

Tailored for snowmobile navigation, this style highlights snowmobile-friendly paths, roads, and tracks. It highlights specialized paths in snowy regions, offering clear navigation across snow-covered terrains where standard roads may not be available. 


## Custom Map Style {#custom-map-style}

If you have a personal or third-party custom map style created according to the [Specification](../../technical/osmand-file-formats/osmand-rendering-style.md), you can install it on your device in these ways:

- Copy the `.render.xml` file to your device and open it with OsmAnd.
- Use the [standard import/export dialogs](../personal/import-export.md) to export or import rendering styles. If you create an `.osf` package, it works as a plugin that you can share with others.
- After installation, you can select the map style from the menu.

You can also browse examples of custom map styles created by other users. A list of publicly available community styles is provided [here](../troubleshooting/resources.md#map-styles).


## Related Articles {#related-articles}

- [Configure Map](../map/configure-map-menu.md)
- [Vector Maps](../map/vector-maps.md)
- [Resources and Customizations](../troubleshooting/resources.md)