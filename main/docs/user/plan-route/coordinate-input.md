---
sidebar_position: 3
title:  Coordinate input
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>

A simple and fast tool for creating points by specifying geographic coordinates.

If you have coordinates of your places you can create this points on the map by just coordinates input in OsmAnd.

> ```Coordinate input for **iOS** is not supported while.```

## Actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Points are set as waypoints in [My places menu](../personal/tracks). For starting creation of Points by coordinate input:

[<Translate android="true" ids="shared_string_menu"/>](../start-with/main-menu) → [<Translate android="true" ids="shared_string_my_places"/>](../personal/myplaces) → [<Translate android="true" ids="shared_string_gpx_tracks"/>](../personal/tracks) → ["earth" button](../personal/tracks#my-places) on the bottom of the screen.

|This action opens **"<Translate android="true" ids="coord_input_edit_point"/>" menu**: |   
|------------|
|![Coordinate input Actions Android](@site/static/img/personal/tracks/coordinate_input_android.png) | 

**The "Edit point" menu contains:**

|**_The template for adding a point by coordinates_** | 
|------------|
|![Coordinate input menu Android](@site/static/img/personal/tracks/coordinate_input_menu_android.png) ![Coordinate input menu Android](@site/static/img/personal/tracks/coordinate_input_menu_1_android.png)|
|- ["<Translate android="true" ids="shared_string_options"/>" menu](../plan-route/coordinate-input#options) - opening the menu of options and choosing of coordinate format.|
|- <Translate android="true" ids="navigate_point_latitude"/> and <Translate android="true" ids="navigate_point_longitude"/> line - allows to input latitude and longitude in the selected format (D - degrees, M - minutes, S - seconds). You can change coordinates format in ["<Translate android="true" ids="shared_string_options"/>" menu](../plan-route/coordinate-input#options).|
|- <Translate android="true" ids="navigate_point_latitude"/> and <Translate android="true" ids="navigate_point_longitude"/> buttons - allows to change "South <-> North" and "West <-> East" for coordinates input.|
|- "Point name" line - allows adding a point name or use a name by default.|
|- "Clearing" ("X") buttons - allow to reset data for inputting coordinates.|


|**_The Points list_** - shows added points: name, distance and direction to this point.| 
|------------|
|![Coordinate input point list Android](@site/static/img/personal/tracks/coordinate_input_point_list_android.png)|
|- "&#8285;" button opens the action menu for Editing or Deleting chosen point. Tapping to a point opens the editing action of this point.|


|**_Keyboard with additional buttons_** - allows to input corrdinate data. | 
|------------|
|![Coordinate input Add point Android](@site/static/img/personal/tracks/coordinate_input_add_point_android.png) |
|- "<Translate android="true" ids="shared_string_add"/>" button - allows adding a new point after input of coordinates.|
|- "<Translate android="true" ids="shared_string_cancel"/>" button - reset all adding data.|
|- Keyboard buttons - allow to input data, delete it, jump to the next coordinate value, hide the keyboard. In [Options](../plan-route/coordinate-input#options) you can change the keyboard to system keyboard for input coordinate. |

|**_Back "&#8592;" button_**  - allows to open the action "<Translate android="true" ids="coord_input_save_as_track"/>" for your adding points.| 
|------------|
|Here you can input a track name or stay name by default. Click to "<Translate android="true" ids="shared_string_save"/>" button for saving added points like a new track. You find saving track in [My places menu](../personal/myplaces): <Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/> → "<Translate android="true" ids="map_markers_item"/>" folder. The action "<Translate android="true" ids="coord_input_save_as_track"/>" is in [Options menu](../plan-route/coordinate-input#options) too.|
|![Coordinate input Add point Android](@site/static/img/personal/tracks/coordinate_input_save_track_android.png) ![Coordinate input Add point Android](@site/static/img/personal/tracks/coordinate_input_save_track_1_android.png)|


</TabItem>

<TabItem value="ios" label="iOS">

Coordinate input for **iOS** is not supported while.

</TabItem>

</Tabs>

## Options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

|Tapping to "<Translate android="true" ids="shared_string_options"/>" button opens **<Translate android="true" ids="shared_string_options"/> menu** with next actions: | 
|------------|
|![Coordinate input Options menu Android](@site/static/img/personal/tracks/coordinate_input_options_menu_android.png)|
|- <Translate android="true" ids="coord_input_save_as_track"/> - allows to open "<Translate android="true" ids="coord_input_save_as_track"/>" action for your adding points. Here you can input a track name or stay name by default. Click to "<Translate android="true" ids="shared_string_save"/>" button for saving added points like a new track. You find saving track in [My places menu](../personal/myplaces): <Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/> → "<Translate android="true" ids="map_markers_item"/>" folder. The action "<Translate android="true" ids="coord_input_save_as_track"/>" is in [Actions](../plan-route/coordinate-input#actions) too.  |
| - <Translate android="true" ids="use_system_keyboard"/> - allows to use [system keyboard for input coordinate](../plan-route/coordinate-input#actions). |
|- <Translate android="true" ids="use_two_digits_longitude"/> - allows entering longitude data with two digits only. For example, when using longitude input in the range of 0 ° to 99 °.|
| - <Translate android="true" ids="coordinates_format"/> - allows changing the coordinate format for inputting. |



|Coordinates format| Example |
|:------|:------|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

</TabItem>

<TabItem value="ios" label="iOS">

> ```Coordinate input for **iOS** is not supported while.```

</TabItem>

</Tabs>

