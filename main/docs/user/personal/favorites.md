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


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>


Favorites are special points marked by user and by default displayed as yellow star. Though it could be customized with any color, shape and icon. They become visible on the map from the zoom level 6. Any user can add places on the map to Favorites, to save it location and description. Favorites are like user notes on the map.


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

Favorites are one of the vector layers on the map. User can show or not Favorites and their names on the map:

[Switch on/off favorites on the map](../map/point-layers-on-map.md#favorites)  - 'Configure map' menu

[Switch on/off favorite names](../map/point-layers-on-map.md#favorite--poi-names)  - 'Configure map' menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favotires layer Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

### Favorite Context menu

Click to favorite point on "My Favorites" menu or on favorite point on the map opens [Map Context menu](../map/map-context-menu.md#favorites--track-points-from-the-group). Where user can find needed information about point or [add/edit favorite point](../map/map-context-menu.md#add--edit-favorite).

### Create

For creating new Favorite an user needs [to tap on the map](../map/map-context-menu.md#select-any-point-long-tap) at the place where he wants to add Favorite. 

When an user clicks at chosen place appeares ['Map Context menu'](../map/map-context-menu.md) with ['Action menu'](../map/map-context-menu.md#add--edit-favorite). 

Click to [**Add**](../map/map-context-menu.md#add--edit-favorite) for opening 'Add favorite' menu.

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

In 'Actions', you can replace another point with this. For Android, this 'Replace' button repeats in up corner of 'Add favorite' menu.

After creation, you can click 'Save' button for saving new Favorite point or 'Cancel' button for canceling point creation.

![Favorite actions Android](@site/static/img/personal/favorite_actions_android.png)


</TabItem>

<TabItem value="ios" label="iOS">

![Favorite add menu iOS](@site/static/img/personal/favorite_add_ios.png)

Here you can add: name, description, address for favorite. 

![Favorite add description iOS](@site/static/img/personal/favorite_add_descr_ios.png)

Select Favorite group (folder) for your favorite point or add new group (folder).

![Favorite group iOS](@site/static/img/personal/favorite_group_ios.png)

For adding new favorite group(folder), you need to add name, to select color. This color will be used for all new favorites added to the group by default.

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

For editing a Favorite point an user need [to short tap](../map/map-context-menu.md#select-an-object-short-tap) on chosen a Favorite point.

After that, you need to click ['Edit favorite' button on 'Map Context menu'](../map/map-context-menu.md#add--edit-favorite). 

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

- Favorite points can be seacrhed by [Search function](../search/index.md) of OsmAnd. The first points will be from 'My favorites'.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite searching function Android](@site/static/img/personal/favorite_search_android.png)

- Using [Search in 'My Favorites' menu](#search-1).

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite searching function iOS](@site/static/img/personal/favorite_search_ios.png)

</TabItem>

</Tabs>

## Manage Favorites

In order to open Favorites list:

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

Favorites list in 'My Places' menu is not only a list, but function buttons and switchers. With these we can make any manipulation with Favorites folders and points.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Favorites list is a list of Favorites folders, functions buttons, searching.

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Favorites list is a list of Favorites folders/points; Editing button; Import/Export buttons.

![Favorites menu iOS](@site/static/img/personal/favorites_menu_ios.png)

</TabItem>

</Tabs>

### Order / Sorting

An order in the Favorites list for Favorites folders is by alfabet. [Personal folder](../personal/favorites.md#special-favorites-personal) is the first of the list.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folders android](@site/static/img/personal/favorites_folders_android.png)

An order for Favorites points is by distance from device location (Android).

![Favorites points order android](@site/static/img/personal/favorites_points_order_android.png)

An order for [searching list (Android)](#search-1) is by distance from the map center on the device screen.

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders ios](@site/static/img/personal/favorites_folders_ios.png)

An order for Favorites points is by distance by alfabet (iOS).

![Favorites points order ios](@site/static/img/personal/favorites_points_order_ios.png)

For iOS version, switching between Folders <-> Points list, you need to use switcher button on top corner of the screen. For Points list, an order for Favorites points is by distance from device location.

![Favorites folders list iOS](@site/static/img/personal/favorites_folders_list_ios.png) ![Favorites points list iOS](@site/static/img/personal/favorites_points_list_ios.png) 

</TabItem>

</Tabs>

### Search


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Searching function opens a points list of Favorites sorted by distance from map center on the device screen.

![Searching menu Favorite android](@site/static/img/personal/searching_favorites_menu_android.png)

Click to 'Magnifier' buttons opens seaching menu for Favorites, where user can start to find needed points from Favorites. Clicking to a chosen point opens [Context menu](../map/map-context-menu.md#select-an-object-short-tap) of this point.

![Searching menu Favorite android](@site/static/img/personal/searching_favorites_menu_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly/>

</TabItem>

</Tabs>

### Actions

The second part is list of folders of Favorites groups. Folder of Favorites is one Favorites group.

User can expand and collapse list of Favorite points for one group by clicking to a folder line or to '&#8743;', '&#8744;'  symbols (Android) and to '&#62;', '&#8744;'  symbols (iOS). Each point from Favorite list has a name, distance and direction from your location.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folders expand android](@site/static/img/personal/favorites_folders_expand_android.png)


Click to any point from Favorite list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) for chosen point.

![Favorites context menu ios](@site/static/img/personal/favorites_context_menu_ios.png)

Click to '&#8942;' button (**Android**) opens special functions for a chosen Favorite folder.

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

Functions for Favorite folder:
- &nbsp;<Translate android="true" ids="edit_name"/>  - changing folder name.
- &nbsp;<Translate android="true" ids="change_color"/>  - changing folder color.
- &nbsp;<Translate android="true" ids="shared_string_show_on_map"/>  - showing or not Favorite points from the folder on the map.
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>   - add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
- &nbsp;<Translate android="true" ids="shared_string_share"/>  - sharing Favorite points with other users (like Favorites.gpx file).
- &nbsp;Button '<Translate android="true" ids="shared_string_cancel"/> ' - close this menu.


At the bottom of the screen are four Actions buttons. 

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png)

Actions:
- '&#43;' - allows to import Favorites points (favorite.gpx) from device storage.
- '&#60;' - allows to export (share) all Favorites points like "favorite.gpx" file.
- '&#128681;' - allows to add or to remove chosen Favorites points (folders) in [Map markers](../personal/markers.md) list.
- '&#x1F5D1;' - allows to delete chosen Favorites points (folders).

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders expand ios](@site/static/img/personal/favorites_folders_expand_ios.png)


Click to any point from Favorite list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) for chosen point.

![Favorites context menu ios](@site/static/img/personal/favorites_context_menu_ios.png)


Click to 'Pencil' button (**iOS**) opens special functions for a chosen Favorite folder. You need to choose folder or points for actions.

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

Actions:
- 'Import loader' - allows to share/import Favorites points (folders) like "favorite.gpx" file.
- 'Folder' - allows to move your Favorites points (folders) to others Favorites folders (named Groups) or to new creating folders (Group). 
- 'Palette of colors' - allows to change colors for Favorites points (folders).
- 'BIN' - allows to delete chosen Favorites points (folders).

Export/Import favorite for iOS version like special menu in "My Favorites" menu.

![Favorites export import ios](@site/static/img/personal/favorites_export_import_ios.png)

'<Translate ios="true" ids="fav_import_title"/> ' - <Translate ios="true" ids="fav_import_desc"/> . 

'<Translate ios="true" ids="fav_export_title"/> ' - You can export all your favorites like Favorites.gpx file.

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

For changing Group (folder) name you need to click to '&#8942;' button for opening special functions for a chosen Favorite folder.

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

Functions for Favorite folder:
- &nbsp;<Translate android="true" ids="edit_name"/>  - changing folder name.

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly/>

</TabItem>

</Tabs>



### Bulk delete


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

For **Android** you can delete Favorites data (points and groups) by using bulk delete.

At the bottom of the screen are four Actions buttons. 

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png)

Delete Action:
- '&#x1F5D1;' - allows to delete chosen Favorites points (folders).

Next, you need to choose points and groups for deleting and click to 'Delete' button in up of the screen device.

![Favorites action delete android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

For **iOS** you need to click to 'Pencil' button opens special functions for a chosen Favorite folder. You need to choose folder or points for delete action.

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

Delete action:
- 'BIN' - allows to delete chosen Favorites points (folders).

</TabItem>

</Tabs>


### Add to Map Markers


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

You can add or remove your favorites in/from [Map markers list](../personal/markers.md).

Click to '&#8942;' button (**Android**) opens special functions for a chosen Favorite folder (group).

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

Clicking to '&#8942;' button opens special functions for a chosen Favorite folder.

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

Functions for Favorite folder:
- <Translate android="true" ids="shared_string_share"/>  - sharing Favorite points with other users (like Favorites.gpx file).

At the bottom of the screen are four Actions buttons. 

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png)

Actions:
- '&#43;' - allows to import Favorites points (favorite.gpx) from device storage.
- '&#60;' - allows to export (share) all Favorites points like "favorite.gpx" file.

</TabItem>

<TabItem value="ios" label="iOS">

Clicking to 'Pencil' button opens special functions for a chosen Favorite folder. You need to choose folder or points for actions.

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

Actions:
- 'Import loader' - allows to share/import Favorites points (folders) like "favorite.gpx" file.

Export/Import favorite for iOS version like special menu in "My Favorites" menu.

![Favorites export import ios](@site/static/img/personal/favorites_export_import_ios.png)

- '<Translate ios="true" ids="fav_import_title"/>' - <Translate ios="true" ids="fav_import_desc"/>.

- '<Translate ios="true" ids="fav_export_title"/>' - You can export all your favorites like Favorites.gpx file.


:::note
Local backups generation after each change, backups accessible from the Files app.
:::

Each saving or editing for Favorites makes a backup file.

*Files → On my iPhone → OsmAnd Maps → favourites_backup*

![Favorites autobackup ios](@site/static/img/personal/favorites_autobackup.png)

</TabItem>

</Tabs>






