---
sidebar_position: 5
title:  Color Schemes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview {#overview}

:::info Paid feature

Color schemes are used as part of paid [Maps+](../purchases/index.md) and Pro <ProFeature /> features.  

:::

Color schemes are used in [route colorization](#routes), [map terrain](#terrain), and [weather map](#weather), and are represented as a separate part of the information that can be exported, imported, and edited to change the map color scheme and data visualization.

Color palette data is available in the [*Maps & Resources*](../personal/maps-resources.md#local) menu.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *Menu → Maps & Resources → Local → Colors*

![Palettes](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *Menu → Maps & Resources → Local → Colors*

![Color palette](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Scheme Types {#scheme-types}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Palettes](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Color palette](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Terrain {#terrain}

Terrain files (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) define 3 [terrain visualizations](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Hillshade, Slope*, and *Altitude*. For each type you can have multiple palettes, for example, *avalanche slope* is provided by default.

### Routes {#routes}

Line gradient visualizations uses palette files (`route_<type_name>_<palette_name>.txt`) to color GPX tracks and Routes:

- For [Routes](../navigation/guidance/map-during-navigation.md#color): *Speed, Slope,* and *Elevation (Altitude)*.
- For [GPX Tracks](../map/tracks/index.md#color): *Speed, Slope,* and *Elevation (Altitude), or info from External sensors*.

### Weather {#weather}

Weather palette files (`weather_<type_name>.txt`) defines visualization for [weather layers](../plugins/weather.md#weather-layers).

### Colors {#colors}

Color palette (`user_palette_default.txt`) is simply used for predefined colors to assign to [Favorites](./favorites.md), [Tracks](./tracks/).


## Palette Legend {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="color"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="color"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="color"/></td>
    </tr>
</table>


The legend provides an easy way to view and understand the different markings on the map. New color palettes have been added to display [**speed** for tracks](../map/tracks/index.md#color), [**line type** for routes](../navigation/guidance/map-during-navigation.md#color), [**altitude and slope** for terrain](../plugins/topography.md#default-color-scheme), and all [**weather layer**](../plugins/weather.md#weather-layers) color palettes.


## Edit Palette file {#edit-palette-file}

You can edit palettes to personalize the look for maps, and routes. Own color palette files can be added to OsmAnd using the [import/export tool](./import-export.md).

- *Routes*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Terrain*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Weather*: `weather_<type_name>.txt`.
- *Color*: `user_palette_default.txt`.

Each line represents a numerical value (for the color palette, it's an index) and RGB color. For example:

```xml
# TXT file named *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 degree RGBA {#0---90-degree-rgba}
0,46,185,0,191
# yellow  {#yellow-}
100,255,222,2,227
# red {#red}
200,255,1,1,255
# violet {#violet}
220,130,1,255,255

```

After moving this TXT file to *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*, a new palette will appear in the Color Scheme menu.


## Read more {#read-more}

### Quick actions {#quick-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Add action → Topography → Change Terrain color scheme*

![Color Scheme](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Add action → Topography → Change Terrain color scheme*

![Color palette](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Quick Action** to change the palette for Terrain. Added the ability to switch between terrain color schemes, similar to switching between layers. This can be done using the [Quick Actions](../widgets/quick-action.md#configure-map) tool.  


### Import / Export Colors {#import--export-colors}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

You can import and export all available default and custom color palettes using OsmAnd's restore and backup files tool.

- Open the main *Menu*, *Settings*, scroll down to the **Import/export** (*Android*) or **Local Backup** (*iOS*) section, and select the required action.
- Select one or more items from the *Color* list or the *Select All* option.
- All exported files are saved in `.osf` format.
- If the size of your selected data is significant, it will take some time for the application to prepare the `.osf` file.
- View [*Import / Export*](../personal/import-export.md) article for more detailed information.


## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *This article was last updated in January 2025*
