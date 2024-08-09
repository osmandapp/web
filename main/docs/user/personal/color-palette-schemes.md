---
sidebar_position: 5
title:  Color Palette Schemes
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


<InfoIncompleteArticle/>

:::tip NOTE
Some color scheme features are paid for.  
:::

## Overview

Color schemes help visualize data, making it easier to understand. This means you can see data on a map using various colors that are easy to interpret.  

Color palette data is available in the [*Maps & Resources*](../personal/maps.md#local) menu.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*Menu → Maps & Resources → Local → Colors*

![Palettes](../../../blog/2024-07-26-android-4-8/img/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

*Menu → Maps & Resources → Local → Colors*

![Color palette](../../../blog/2024-06-20-ios-4-8/img/color_palette_ios.png)

</TabItem>

</Tabs>

## Schemes Types 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Palettes](@site/blog/2024-07-26-android-4-8/img/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Color palette](@site/blog/2024-07-26-android-4-8/img/color_altitude.png)

</TabItem>

</Tabs>

### Terrain

- For [terrain](../plugins/contour-lines.md#hillshade-slope-and-altitude-layers): *Hillshade, Slope*, and *Altitude*.

### Routes

GPX Tracks, Routes:

- For [routes](../navigation/guidance/map-during-navigation.md#color): *Speed, Slope,* and *Elevation (Altitude)*.
- For [GPX Tracks](../map/tracks/index.md#color): *Speed, Slope,* and *Elevation (Altitude), or info from External sensors*.

### Weather

- For [weather](../plugins/weather.md#weather-layers): *All weather layers*.

### Colors 

- Color palette simply used for predefined colors to assign to Favorites, Tracks


## Map Legend for Schemes

The legend provides an easy way to view and understand the different markings on the map. New color palettes have been added to display [**speed** for tracks](../map/tracks/index.md#color), [**line type** for routes](../navigation/guidance/map-during-navigation.md#color), [**altitude and slope** for terrain](../plugins/contour-lines.md#color-scheme), and all [**weather layer**](../plugins/weather.md#weather-layers) color palettes.

<table class="image">
    <tr>
        <td><img src={require('@site/blog/2024-07-26-android-4-8/img/legend.png').default} alt="AA"/></td>
        <td><img src={require('@site/blog/2024-07-26-android-4-8/img/legend_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/blog/2024-07-26-android-4-8/img/legend_2.png').default} alt="AA"/></td>
    </tr>
</table>  



## Edit Palette file

<!--

*Terrain → Modify → All colors → &#8942; → Edit*

<table class="image">
    <tr>
        <td><img src={require('@site/blog/2024-07-26-android-4-8/img/palette_editor.png').default} alt="AA"/></td>
        <td><img src={require('@site/blog/2024-07-26-android-4-8/img/palette_editor_1.png').default} alt="AA"/></td>
    </tr>
</table>  

-->

You can create and edit color palettes to personalize your maps, by customizing colors according to personal preferences or the requirements of a particular route. Own color palette files can be added to OsmAnd using the *import/export tool*. To do this, create a TXT file with the required name using the txt editor:

- *Routes*: `route_speed_name.txt`, `route_slope_default.txt`, `route_elevation_default.txt`.
- *Terrain*: `height_altitude_name.txt`, `hillshade_color_name.txt`, `slope_name.txt`.
- *Weather*: `weather_name.txt`.

For example:

```
TXT file named *height_altitude_0-200.txt*

# 0 - 90 degree RGBA
0,46,185,0,191
# yellow 
100,255,222,2,227
# red
200,255,1,1,255
# violet
220,130,1,255,255

```
After moving this TXT file to *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*, a new palette will appear in the Color Scheme menu.

## Read more

### Quick actions 

_Menu → Configure screen → Custom buttons → + → Add button → Add action → Topography → Change Terrain color scheme_

**Quick Action** to change palette for Terrain. We have added the ability to switch between terrain color schemes, similar to switching between layers. This can be done using the Quick Actions tool.  

![Color Scheme](@site/blog/2024-07-26-android-4-8/img/color_scheme.png)

### Import / Export Colors

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)   

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*     

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)    

</TabItem>

</Tabs> 

You can import and export all available default and custom color palettes using OsmAnd's restore and backup files tool.

- Open the main *Menu*, *Settings*, scroll down to the **Import/export** (*Android*) or **Local Backup** (*iOS*) section, and select the required action.
- Select one or more items from the *Color* list or the *Select All* option.
- All exported files are saved in *OSF* format.
- If the size of your selected data is significant, it will take some time for the application to prepare the *OSF* file.
- View [*Import / Export*](../personal/import-export.md) article for more detailed information.
