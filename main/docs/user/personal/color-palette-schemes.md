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

## Overview

Color schemes help visualize data, making it easier to understand. This means you can see data on a map using various colors that are easy to interpret.


## Schemes Types 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Palettes](@site/blog/2024-06-19-android-4-8/img/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Color palette](@site/blog/2024-06-19-android-4-8/img/color_altitude.png)

</TabItem>

</Tabs>

### Terrain

- For [terrain](https://osmand.net/docs/user/plugins/contour-lines#hillshade-slope-and-altitude-layers): *Hillshade, Slope*, and *Altitude*.

### Routes

GPX Tracks, Routes:

- For [routes](https://osmand.net/docs/user/navigation/guidance/map-during-navigation#color): *Speed, Slope,* and *Elevation (Altitude)*.
- For [GPX Tracks](http://localhost:3000/docs/user/map/tracks-on-map/track-appearance#color): *Speed, Slope,* and *Elevation (Altitude), or info from External sensors*.

### Weather

- For [weather](https://osmand.net/docs/user/plugins/weather#weather-layers): *All weather layers*.

### Custom

You can add your custom color palettes to OsmAnd. To do this, create a TXT file with the required name:
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


## Modify Color Palette



## Import / Export Colors

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


## Map Legend for Schemes

The legend provides an easy way to view and understand the different markings on the map. New color palettes have been added to display [**speed** for tracks](https://osmand.net/docs/user/map/tracks-on-map/track-appearance#color), [**line type** for routes](https://osmand.net/docs/user/navigation/guidance/map-during-navigation#color), [**altitude and slope** for terrain](https://osmand.net/docs/user/plugins/contour-lines#color-scheme), and all [**weather layer**](https://osmand.net/docs/user/plugins/weather#weather-layers) color palettes.

<table class="image">
    <tr>
        <td><img src={require('@site/blog/2024-06-19-android-4-8/img/legend.png').default} alt="AA"/></td>
        <td><img src={require('@site/blog/2024-06-19-android-4-8/img/legend_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/blog/2024-06-19-android-4-8/img/legend_2.png').default} alt="AA"/></td>
    </tr>
</table>  


## Quick Action for Palettes

In this release, we have added the ability to switch between terrain color schemes, similar to switching between layers. This can be done using the Quick Actions tool.  

_Menu → Configure screen → Custom buttons → + → Add button → Add action → Topography → Change Terrain color scheme_

![Color Scheme](@site/blog/2024-06-19-android-4-8/img/color_scheme.png)


## Editor

*Terrain → Modify → All colors → &#8942; → Edit*

<table class="image">
    <tr>
        <td><img src={require('@site/blog/2024-06-19-android-4-8/img/palette_editor.png').default} alt="AA"/></td>
        <td><img src={require('@site/blog/2024-06-19-android-4-8/img/palette_editor_1.png').default} alt="AA"/></td>
    </tr>
</table>  

The palette editor allows you to create and edit custom color schemes to personalize your maps. This is where you can customize colors according to personal preferences or the requirements of a particular route. 