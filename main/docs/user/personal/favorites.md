---
sidebar_position: 2
title:  Favorites
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

Favorites is one of the OsmAnd's features, that allows the user to make a kind of bookmarks (notes) on the map. By default, they are displayed in the form of yellow stars, though the app provides ample opportunities to customize Favorites using any colour, shape, and icon. They are grouped into a separate map layer, that become visible from the 6th zoom level.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites introduction android](@site/static/img/personal/favorites_intro_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites introduction ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>

## Favorite Point

### View on the map

Favorites are grouped into one of the map layers. You can [show or hide](../map/point-layers-on-map.md#favorites) Favorites and their [names](../map/point-layers-on-map.md#favorite--poi-names) on the map:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favotires layer Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

### Favorite Context menu

Favorite's [Context menu](../map/map-context-menu.md#favorites--track-points-from-the-group) opens when you select it in *My Favorites* or tap on it on the map. In Favorite Context menu you can find information about chosen point, [edit](../map/map-context-menu.md#add--edit-favorite) it, add a marker or use it for navigation.  

### Create

The easiest way to create a new favorite is to choose (by short tap) the [POI](../map/point-layers-on-map.md#points-of-interest-poi) or a building on the map and in [Map Context menu](../map/map-context-menu.md) select [*Add*](../map/map-context-menu.md#add--edit-favorite). In that case all the information from POI will be added to a new favorite point.  
You can also add a new favorite on any place on the map by [long tap](../map/map-context-menu.md#select-any-point-long-tap).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite add menu Android](@site/static/img/personal/favorite_add_android.png)

Here you can add: name, description, address for favorite.  

![Favorite add description Android](@site/static/img/personal/favorite_add_descr_android.png)

Select Favorite group (folder) for your favorite point or add new group (folder).

![Favorite group Android](@site/static/img/personal/favorite_group_android.png)

For adding new favorite group(folder), you need to add name, to select color. This color will be used for all new favorites added to the group by default.

![Favorite new group Android](@site/static/img/personal/favorite_new_group_android.png)

Next, you can select icon for your favorite from our list.

![Favorite icon Android](@site/static/img/personal/favorite_icon_android.png)

After, you can choose color and shape for favorite icon.

![Favorite color and shape Android](@site/static/img/personal/favorite_color_shape_android.png)

In Actions, you can replace another point with this. For Android, this Replace button repeats in up corner of Add favorite menu.

After creation, you can click Save button for saving new Favorite point or Cancel button for canceling point creation.

![Favorite actions Android](@site/static/img/personal/favorite_actions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite add menu iOS](@site/static/img/personal/favorite_add_ios.png)

Here you can add: name, description, address for favorite.  

![Favorite add description iOS](@site/static/img/personal/favorite_add_descr_ios.png)

Select Favorite group (folder) for your favorite point or add new group (folder).

![Favorite group iOS](@site/static/img/personal/favorite_group_ios.png)

If you want to create a new favorite group (folder), you need to add name, to select color. This color will be used for all new favorites added to the group by default.

![Favorite new group iOS](@site/static/img/personal/favorite_new_group_ios.png)

Next, you can select icon for your favorite from our list.

![Favorite icon iOS](@site/static/img/personal/favorite_icon_ios.png)

After, you can choose color and shape for favorite icon.

![Favorite color and shape iOS](@site/static/img/personal/favorite_color_shape_ios.png)

In 'Actions', you can replace another point with this. For Android, this 'Replace' button repeats in up corner of 'Add favorite' menu.

After creation, you can click 'Save' button for saving new Favorite point or 'Cancel' button for canceling point creation.

![Favorite actions iOS](@site/static/img/personal/favorite_actions_ios.png)


</TabItem>

</Tabs>

### Edit

To edit a Favorite point you need [to short tap](../map/map-context-menu.md#select-an-object-short-tap) on chosen Favorite point.

After that, you need to choose [*Edit favorite* button in *Map Context menu*](../map/map-context-menu.md#add--edit-favorite).  

'Edit favorite' menu opens. It's look like ['Add favorite' menu](../personal/favorites.md#create). But in Action part there is one more action - 'Delete' button. For Android, there is additional 'Delete' button in up corner of 'Edit favorite' menu.  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite edit Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite edit iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>


You can change name, description, address for chosen favorite, change or create new group for it, select another icon, color and shap, replace another point with this.

### Search

Favorites can be found using [Search function](../search/index.md) of OsmAnd. The first lines of the search results will be from *My favorites*. In Android verson of the app you can also use [Search in 'My Favorites' menu](#search-1).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite searching function Android](@site/static/img/personal/favorite_search_android.png)


</TabItem>

<TabItem value="ios" label="iOS">

![Favorite searching function iOS](@site/static/img/personal/favorite_search_ios.png)

</TabItem>

</Tabs>

## Manage Favorites

In order to open Favorites list go to:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>_

![My places favorites android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,menu_my_places,favorites"/>_

![my_places_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

### View

In *My Places* menu you can find not only *Favorites* but also function buttons and switchers. Using these toolse you can customize *Favorites* folders and points and import/export favorites data.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites menu iOS](@site/static/img/personal/favorites_menu_ios.png)

</TabItem>

</Tabs>

### Order / Sorting

The favorite folders and points are sorted alphabetically. The [personal folder](../personal/favorites.md#special-favorites-personal) is at the very top.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folders android](@site/static/img/personal/favorites_folders_android.png) ![Favorites points order android](@site/static/img/personal/favorites_points_order_android.png)

:::tip Note
In [searching list](#search-1) *Favorites* is sorted by distance from the map center.  
:::
</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders ios](@site/static/img/personal/favorites_folders_ios.png) ![Favorites points order ios](@site/static/img/personal/favorites_points_order_ios.png)  

In order to switch between Folders <-> Points list, use the toggle on top right corner of the screen. Favorite Points in list are sorted by distance from device location.

![Favorites folders list iOS](@site/static/img/personal/favorites_folders_list_ios.png) ![Favorites points list iOS](@site/static/img/personal/favorites_points_list_ios.png) 

</TabItem>

</Tabs>

### Search

Search function opens a points list of Favorites sorted by distance from map center on the device screen.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Searching menu Favorite android](@site/static/img/personal/searching_favorites_menu_android.png)

Tap on &#128269; buttons opens search menu for Favorites. Tap on a chosen point opens [Context menu](../map/map-context-menu.md#select-an-object-short-tap) of this point.

![Searching menu Favorite android](@site/static/img/personal/searching_favorites_menu_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly/>

</TabItem>

</Tabs>

### Actions

Each Favorites folder containes one group of favorites. You can expand and collapse list of Favorite points for one group by tapping on a folder or on &#8743;, &#8744;  symbols (Android) and on &#62;, &#8744;  symbols (iOS). Each point from Favorite list has a name, distance and direction from your location.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folders expand android](@site/static/img/personal/favorites_folders_expand_android.png)

Tap on any point from Favorite list shows it on the map and also opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) for chosen point.

![Favorites context menu ios](@site/static/img/personal/favorites_context_menu_ios.png)

Tap on &#8942; button (**Android**) opens special functions for a chosen Favorite folder.

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

Functions for Favorite folder:
- &nbsp;<Translate android="true" ids="edit_name"/>  - is used to change folder name.
- &nbsp;<Translate android="true" ids="change_color"/>  - is used to change folder color.
- &nbsp;<Translate android="true" ids="shared_string_show_on_map"/>  - display or not Favorite points from the folder on the map.
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>   - add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
- &nbsp;<Translate android="true" ids="shared_string_share"/>  - sharing Favorite points with other users (using Favorites.gpx file).
- &nbsp;Button '<Translate android="true" ids="shared_string_cancel"/> ' - close this menu.


At the bottom of the screen there are four Actions buttons.  

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png)

Actions:
- &#43; - allows to import Favorites points (favorite.gpx) from device storage.
- &#60; - allows to export (share) all Favorites points as "favourite.gpx" file.
- &#128681; - allows to add or to remove chosen Favorites points (folders) in [Map markers](../personal/markers.md) list.
- &#x1F5D1; - allows to delete chosen Favorites points (folders).

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders expand ios](@site/static/img/personal/favorites_folders_expand_ios.png)

Tap on any point from Favorite list shows it on map and opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) for this point.  

![Favorites context menu ios](@site/static/img/personal/favorites_context_menu_ios.png)

Tap on &#128393; button opens special functions. You need to choose one ore more folder or points for actions.

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

Actions:
- 'Import loader' - allows to share/import Favorites points (folders) like "favorite.gpx" file.
- 'Folder' - allows to move your Favorites points (folders) to others Favorites folders (named Groups) or to new creating folders (Group). 
- 'Palette of colors' - allows to change colors for Favorites points (folders).
- &#x1F5D1; - allows to delete chosen Favorites points (folders).

Export/Import favorite for iOS version like special menu in "My Favorites" menu.

![Favorites export import ios](@site/static/img/personal/favorites_export_import_ios.png)

<Translate ios="true" ids="fav_import_title"/>  - <Translate ios="true" ids="fav_import_desc"/> . 

<Translate ios="true" ids="fav_export_title"/>  - You can export all your favorites like Favorites.gpx file.

</TabItem>

</Tabs>

## Favorite Groups 

Favorite Groups is folders with favorite points in 'My Favorites' menu.

### Change color

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Clicking to '&#8942;' button opens special functions for a chosen Favorite folder.

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

Functions for Favorite folder:
- &nbsp;<Translate android="true" ids="edit_name"/>  - changing folder name.
- &nbsp;<Translate android="true" ids="change_color"/>  - changing folder color.
- &nbsp;<Translate android="true" ids="shared_string_show_on_map"/>  - showing or not Favorite points from the folder on the map.
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>   - add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
- &nbsp;<Translate android="true" ids="shared_string_share"/>  - sharing Favorite points with other users (like Favorites.gpx file).
- &nbsp;Button '<Translate android="true" ids="shared_string_cancel"/> ' - close this menu.

</TabItem>

<TabItem value="ios" label="iOS">

Clicking to 'Pencil' button opens special functions for a chosen Favorite folder. You need to choose folder or points for action: to change colors for Favorites points (folders).

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>


### Bulk move


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

:::caution Note
**Only for iOS version.**
:::

</TabItem>

<TabItem value="ios" label="iOS">

Clicking to 'Pencil' button opens special functions for a chosen Favorite folder. You need to choose folder or points for action: to move your Favorites points (folders) to others Favorites folders (named groups) or to new creating folder (group). If Favorite group (folder) hasn't any points it will be deleted after OsmAnd restart by automatic.

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

### Rename

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

For changing Group (folder) name you need to tap on &#8942; button to open special functions for a chosen Favorite folder.

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

Functions for Favorite folder:
- &nbsp;<Translate android="true" ids="edit_name"/>  - changing folder name.

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly/>

</TabItem>

</Tabs>

### Bulk delete

Favorites data (points and groups) can be deleted using bulk delete.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Tap on &#x1F5D1; at the bottom of the screen. You can select points and groups and by tap on &#x1F5D1; button in top right corner delete them.  

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png) ![Favorites action delete android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Tap on &#128393; button opens special functions bar at the bottom of the screen. You can select points and groups and by tap on &#x1F5D1; button in lower right corner delete them.

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

### Add to Map Markers  

You can add to or remove your favorites from [Map markers list](../personal/markers.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Tap on &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

Functions for Favorite folder:
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>   - add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly/>

</TabItem>

</Tabs>


## Special Favorites (Personal) 


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

"Personal" folder is a special folder for '<Translate android="true" ids="favorite_home_category"/> ' and '<Translate android="true" ids="work_button"/> ' points of [Navigation Context menu](../navigation/index.md). This folder doesn't have '&#8942;' button, because you can not change the parameters for this folder. 

![Favorites personal android](@site/static/img/personal/favorites_personal_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

"Personal" folder is a special folder for '<Translate ios="true" ids="home_pt"/> ' and '<Translate ios="true" ids="work_pt"/> ' points of [Navigation Context menu](../navigation/index.md).

</TabItem>

</Tabs>


## Export / Import

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Tap on &#8942; button opens special functions menu for a chosen favorite or a favorite folder.

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

There you can choose **Share** and using a file manager save Favorites.gpx file to your device's memory or send it to your friends via messengers.  

Another way to expot and import Favorites is to use Actions buttons at the bottom of the screen.  

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png)

Actions:
- '&#43;' - allows to import Favorites points (favorite.gpx) from device storage.
- '&#60;' - allows to export (share) all Favorites points like "favorite.gpx" file.

</TabItem>

<TabItem value="ios" label="iOS">

Tap on &#128393; button opens special functions menu for a chosen Favorite folder. You need to choose folder or points for actions.

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

Actions:
- 'Import loader' - allows to share/import Favorites points (folders) as "favourite.gpx" file.

You can also use Export/Import favorite functions.  

![Favorites export import ios](@site/static/img/personal/favorites_export_import_ios.png)

- <Translate ios="true" ids="fav_import_title"/> - <Translate ios="true" ids="fav_import_desc"/>.

- <Translate ios="true" ids="fav_export_title"/> - is used to export all your favorites as Favourites.gpx file.

After each edit of Favorites OsmAnd makes a backup file. They can be found using iPhone *Files* program.  

*Files → On my iPhone → OsmAnd Maps → favourites_backup*

![Favorites autobackup ios](@site/static/img/personal/favorites_autobackup.png)

</TabItem>

</Tabs>

