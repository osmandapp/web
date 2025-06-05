---
sidebar_position: 3
title:  Coordinates Input
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoAndroidOnly />

## Overview {#overview}

*Coordinates Input* is a simple and easy-to-use tool for creating waypoints by specifying their geographic location. This feature can be useful for navigating to certain places, that you know only by their coordinates: added points can be [saved](#save-as-track) as a GPX track and used later for [GPX navigation](../navigation/setup/gpx-navigation.md) or [navigation by markers](../navigation/setup/markers-navigation.md#add-gpx).  

![Coordinates input overview](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png) 

## How to use {#how-to-use}

You can create waypoints from *[Map markers](../personal/markers.md#map-markers-menu)* menu or from [My places](../personal/myplaces.md) (see screenshots). Please, follow these paths to reach the coordinate input option:
  - *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Earth button at the bottom of the screen*
  - *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Coordinate input how to find](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Coordinate input how to find](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png) 

After you have opened the coordinate input screen:

- &nbsp;Make sure that the correct [units of measurement](#coordinates-format) are used. If no, change coordinates format in [Options](#options) menu.  
- &nbsp;Enter the coordinates of the point using [template](#add-a-point). After you press *[Add](#add-a-point)* button, your point will be added to the *[points list](#points-list)*. If &nbsp;needed, you can input additional points.  
- &nbsp;Save your point(s) as a *[Track](../personal/tracks/manage-tracks.md)* using *[Options menu](#options)* or &#8592; *(Back)* button.  

:::note
The results of creating points by coordinates - a *[GPX track](../personal/tracks/manage-tracks.md)* with waypoints - can be found in the [My places menu](../personal/myplaces.md) (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/> folder*).
:::

## Options {#options}

Using options menu you can [save](#save-as-track) added point(s) as a track, activate advanced input options (system keyboard and two digits longitude), or change coordinates format.

![Coordinate input Options menu Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - opens a dialog box that allows you to save the created point (or points) as a GPX track. You can change the name of&nbsp;the track or leave it as default.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - allows you to use the Android system keyboard to enter coordinates.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - enables to enter longitude data with only two digits. This can be useful for longitudes from 0° to 99° (for example, in Europe).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - allows changing the coordinate format for inputting.  

### Coordinates format {#coordinates-format}

When you enter coordinates, it is important to ensure that the appropriate units of measurement are used. We support decimal degrees&nbsp;(DD), degrees and minutes, or degrees, minutes and seconds&nbsp;(DMS).  

|Coordinates format| Example |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## Add a point {#add-a-point}

After selecting the correct units, you are ready to enter the coordinates of future waypoints.  
The coordinate input screen consists of the following elements:

![Coordinate input menu Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png) 

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. Opens *[Options](#options)* menu (described above).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. It is used to input data in the selected format (D - degrees, M - minutes, S - seconds). You can change coordinates format in *[<Translate android="true" ids="shared_string_options"/> menu](#options)*.
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> and <Translate android="true" ids="navigate_point_longitude"/>* semiglobe buttons. Allow you to change sides of the horizon: *South - North* and *West - East*.
- &nbsp;*Point name* field. You can leave the default name or make up your own.  
- &nbsp;*X* button. Clears the input field of the corresponding line.  

### Short keyboard {#short-keyboard}

To enter data, you can use the short keyboard (default) or the system (Android) keyboard. To change the input method go to *[Options](#options)* menu. After entering the latitude and longitude, you can add the point to the *[list](#points-list)* using *+Add* button.

![Coordinate input Add point Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)  

- *<Translate android="true" ids="shared_string_add"/>* button allows to save a point inside *[Points list](#points-list)*.
- *<Translate android="true" ids="shared_string_clear"/>* button resets all entered data.
- &#9032; allows you to jump to the next value.
- *Keyboard buttons* allow to input data, delete it, jump to the next coordinate value, hide the keyboard. 

### Points list {#points-list}

Shows already created points: name, distance and direction to this point.

![Coordinate input save point Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Coordinate input save point Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

The **⁝** button opens an action menu for editing or deleting the selected point. 
When you tap a point, it becomes possible to change its coordinates. Tap the *Apply* button to save the changes.


## Save as track {#save-as-track}

To save your points as a track, tap *Back* ( &#8592; ) button or use *[Options](#options)* menu.

![Coordinate input save point Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Coordinate input save point Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

In the pop-up menu, you can enter your own track name or save it by default. Tap <Translate android="true" ids="shared_string_save"/> to save the added points as a new track.  
You will find your track in [My places menu](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).
