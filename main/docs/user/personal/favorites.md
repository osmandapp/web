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

## Overview

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


### Create and Edit

The easiest way to create a new Favorite point is to select the [POI](../map/point-layers-on-map.md#points-of-interest-poi) or building on the map with a short tap and select [Add](../map/map-context-menu.md#add--edit-favorite) in [Map Context menu](../map/map-context-menu.md). In this case, all the information from POI will be added to a new Favorite.  
You can also add a new Favorite point to any place on the map with [long tap](../map/map-context-menu.md#select-any-point-long-tap).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite add menu Android](@site/static/img/personal/favorite_add_android.png)

- You can add: name, description, and address for Favorite point.  

![Favorite add description Android](@site/static/img/personal/favorite_add_descr_android.png)

- Select group for your favorite point or add new group.

![Favorite group Android](@site/static/img/personal/favorite_group_android.png)

- For adding new favorite group, you need to add name, to select color. This color will be used for all new favorites added to the group by default.

![Favorite new group Android](@site/static/img/personal/favorite_new_group_android.png)

- Next, you can select icon for your favorite from our list.

![Favorite icon Android](@site/static/img/personal/favorite_icon_android.png)

- After, you can choose color and shape for favorite icon.

![Favorite color and shape Android](@site/static/img/personal/favorite_color_shape_android.png)

- In Actions, you can replace another point with this. For Android, this Replace button repeats in up corner of Add favorite menu.

- After creation, you can click Save button for saving new Favorite point or Cancel button for canceling point creation.

![Favorite actions Android](@site/static/img/personal/favorite_actions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite add menu iOS](@site/static/img/personal/favorite_add_ios.png)

- You can add: name, description, address for favorite.  

![Favorite add description iOS](@site/static/img/personal/favorite_add_descr_ios.png)

- Select group for your favorite point or add new group.

![Favorite group iOS](@site/static/img/personal/favorite_group_ios.png)

- If you want to create a new favorite group (folder), you need to add name, to select color. This color will be used for all new favorites added to the group by default.

![Favorite new group iOS](@site/static/img/personal/favorite_new_group_ios.png)

- Next, you can select icon for your favorite from our list.

![Favorite icon iOS](@site/static/img/personal/favorite_icon_ios.png)

- After, you can choose color and shape for favorite icon.

![Favorite color and shape iOS](@site/static/img/personal/favorite_color_shape_ios.png)

- In *Actions*, you can replace another point with this. For Android, this *Replace* button repeats in up corner of *Add favorite* menu.

- After creation, you can click *Save* button for saving new Favorite point or *Cancel* button for canceling point creation.

![Favorite actions iOS](@site/static/img/personal/favorite_actions_ios.png)

</TabItem>

</Tabs>

#### Edit

To edit a Favorite point, [short tap](../map/map-context-menu.md#select-an-object-short-tap) the selected Favorite point.

After that, you need to choose [*Edit favorite* button in *Map Context menu*](../map/map-context-menu.md#add--edit-favorite).  

*Edit favorite* menu opens. It's look like *[Add favorite](#create)* menu. But in Action part there is one more action - *Delete* button. For Android, there is additional *Delete* button in up corner of *Edit favorite* menu.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite edit Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite edit iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

You can change name, description, address for chosen favorite, change or create new group for it, select another icon, color and shap, replace another point with this.


### Favorites in GPX file

All information about a Favourite is stored and described using tags. When creating a Favourite point, you can write your own [description](#create) or use information from the OSM [point of interest (POI)](../map/point-layers-on-map.md#points-of-interest-poi) data from which your point was created. Favorite points, POIs, and Waypoints use the same [tags](../personal/tracks.md#waypoint-and-favorites) to store information and are saved in [GPX file format](../personal/tracks.md#waypoint-format-description).  


```xml
<gpx version="1.1" creator="OsmAnd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net" xmlns:test="https://test.net" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
    <wpt lat="37.5460870" lon="-77.4532843">
        <time>2023-06-07T12:31:35Z</time>
        <name>Test</name>
        <type>SOTM</type>
        <extensions>
            <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
            <osmand:icon>place_town</osmand:icon>
            <osmand:background>circle</osmand:background>
            <osmand:color>#ff4e4eff</osmand:color>
            <test:country>United States</test:country>
            <test:state>Virginia</test:state>
            <test:telephone>(804) 828-0100</test:telephone>
            <test:postcode>23284</test:postcode>
            <test:start_date>Thursday, June 8, 2023</test:start_date>
        </extensions>
    </wpt>
</gpx>
```  


## Manage Favorites

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

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

Tap on magnifying glass (&#128269;) button opens search menu for Favorites. Tap on a chosen point opens [Context menu](../map/map-context-menu.md#select-an-object-short-tap) of this point.

![Searching menu Favorite android](@site/static/img/personal/searching_favorites_menu_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Moving the screen down opens the search menu for Favorites: _Menu → My Places → Favorites → Pull down_. Tap on a chosen point opens [Context menu](../map/map-context-menu.md#select-an-object-short-tap) of this point.

![Searching menu Favorite iOS](@site/static/img/personal/searching_favorites_menu_ios.png) ![Searching menu Favorite iOS](@site/static/img/personal/searching_favorites_menu_2_ios.png)

</TabItem>

</Tabs>


#### Search function/Global search

Favorites can be found using [Search function](../search/index.md) of OsmAnd. The first lines of the search results will be from *My favorites*. In Android verson of the app you can also use [Search in 'My Favorites' menu](#search).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite searching function Android](@site/static/img/personal/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite searching function iOS](@site/static/img/personal/favorite_search_ios.png)

</TabItem>

</Tabs>


### Actions

Each Favorites folder containes one group of favorites. You can expand and collapse list of Favorite points for one group by tapping on a folder or on &#8743;, &#8744;  symbols (Android) and on &#62;, &#8744;  symbols (iOS). Each point from Favorite list has a name, distance and direction from your location.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folders expand android](@site/static/img/personal/favorites_folders_expand_android.png)

- Tap on any point from Favorite list shows it on the map and also opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) for chosen point.

![Favorites context menu ios](@site/static/img/personal/favorites_context_menu_ios.png)

- Tap on &#8942; button opens special functions for a chosen Favorite folder.

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

Functions for [Favorite folder](#favorite-groups):
1. &nbsp;<Translate android="true" ids="shared_string_rename"/>  - is used to change folder name. 
2. &nbsp;<Translate android="true" ids="change_default_appearance"/>  - is used to change default appearance for favorites from the chosen group. 
3. &nbsp;<Translate android="true" ids="shared_string_show_on_map"/>  - display or not Favorite points from the folder on the map. 
4. &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>   - add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md). 
5. &nbsp;<Translate android="true" ids="shared_string_share"/>  - sharing Favorite points with other users (using Favorites.gpx file). 
6. &nbsp;Button *<Translate android="true" ids="shared_string_cancel"/>* - close this menu. 
7. &nbsp;Button *<Translate android="true" ids="shared_string_delete"/>* - delete the chosen favorites folder.  



- At the bottom of the screen there are four Actions buttons.  

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png)

Actions:
1. &#43; - allows to import Favorites points (favorite.gpx) from device storage.
2. &#60; - allows to export (share) all Favorites points as "favourite.gpx" file.
3. &#128681; - allows to add or to remove chosen Favorites points (folders) in [Map markers](../personal/markers.md) list.
4. &#x1F5D1; - [allows to delete](#bulk-delete) chosen Favorites points (folders).

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders expand ios](@site/static/img/personal/favorites_folders_expand_ios.png)

- Tap on any point from Favorite list shows it on map and opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) for this point.  

![Favorites context menu ios](@site/static/img/personal/favorites_context_menu_ios.png)

- Tap on &#128394; button opens special functions. You need to choose one ore more folder or points for actions.

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

Actions:
1. *Import loader* - allows to share/import Favorites points (folders) like "favorite.gpx" file.
2. *Folder* - allows to move your Favorites points (folders) to others Favorites folders (named Groups) or to new creating folders (Group). 
3. *Palette of colors* - allows to change colors for Favorites points (folders).
4. &#x1F5D1; - [allows to delete](#bulk-delete) chosen Favorites points (folders).


- [Export/Import favorite](#all-favorites) for iOS version like special menu in "My Favorites" menu.

![Favorites export import ios](@site/static/img/personal/favorites_export_import_ios.png)

1. [<Translate ios="true" ids="fav_import_title"/>](../personal/import-export.md)  - <Translate ios="true" ids="fav_import_desc"/>.  

2. [<Translate ios="true" ids="fav_export_title"/>](../personal/import-export.md)  - You can export all your favorites like Favorites.gpx file.

</TabItem>

</Tabs>

## Favorite Groups

Favorite Groups is folders with favorite points in *My Favorites* menu.

### Change appearance

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- Tap &#8942; button opens special functions for a chosen Favorite folder → _<Translate android="true" ids="change_default_appearance"/>_:

Default color, icon and shape will apply to the added favorite points into the group.

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png) ![Favorites folder functions android](@site/static/img/personal/favorites_folder_appearance_android.png)



Functions for Favorite folder:
1. &nbsp;<Translate android="true" ids="shared_string_rename"/>  - is used to change folder name. 
2. &nbsp;**<Translate android="true" ids="change_default_appearance"/>**  - is used to change default appearance for favorites from the chosen group. 
3. &nbsp;<Translate android="true" ids="shared_string_show_on_map"/>  - display or not Favorite points from the folder on the map. 
4. &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>   - add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md). 
5. &nbsp;<Translate android="true" ids="shared_string_share"/>  - sharing Favorite points with other users (using Favorites.gpx file). 
6. &nbsp;Button *<Translate android="true" ids="shared_string_cancel"/>* - close this menu. 
7. &nbsp;Button *<Translate android="true" ids="shared_string_delete"/>* - delete the chosen favorites folder.  
8. &nbsp;Button *<Translate android="true" ids="shared_string_cancel"/>* - closes this menu.

</TabItem>

<TabItem value="ios" label="iOS">

- Long tap on folder → show context menu → _Change appearance_:

Default color, icon and shape will apply to the added favorite points into the group.

![Favorites actions ios](@site/static/img/personal/favorites_actions1_ios.png) ![Favorites actions ios](@site/static/img/personal/favorites_actions2_ios.png)


- Tap *Pencil* button opens special functions for a chosen Favorite folder. You need to choose folder or points for action: to change colors for Favorites points (folders).

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

### Bulk move

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

:::caution Note
*Only for iOS version.*
:::

</TabItem>

<TabItem value="ios" label="iOS">

*Pencil* button opens special functions for a chosen Favorite folder. You need to choose folder or points for action: to move your Favorites points (folders) to others Favorites folders (named groups) or to new creating folder (group). If Favorite group (folder) hasn't any points it will be deleted after OsmAnd restart by automatic.

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

### Rename

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

For changing Group (folder) name you need to tap on &#8942; button to open special functions for a chosen Favorite folder.

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

Functions for Favorite folder:
-  &nbsp;<Translate android="true" ids="shared_string_rename"/>  - is used to change folder name. 

</TabItem>

<TabItem value="ios" label="iOS">

- Long tap on folder → show context menu → _Change appearance → Name_:

Change a name in the group name section.

![Favorites actions ios](@site/static/img/personal/favorites_actions1_ios.png) ![Favorites actions ios](@site/static/img/personal/favorites_actions2_ios.png)


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

Tap on &#128394;&#65039; button opens special functions bar at the bottom of the screen. You can select points and groups and by tap on &#x1F5D1; button in lower right corner delete them.

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

*Personal* folder is a special folder for *<Translate android="true" ids="favorite_home_category"/>* and *<Translate android="true" ids="work_button"/>* points of [Navigation Context menu](../navigation/index.md). This folder doesn't have &#8942; button, because you can not change the parameters for this folder.  

![Favorites personal android](@site/static/img/personal/favorites_personal_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*Personal* folder is a special folder for *<Translate ios="true" ids="home_pt"/>* and *<Translate ios="true" ids="work_pt"/>* points of [Navigation Context menu](../navigation/index.md).

</TabItem>

</Tabs>


## Export / Import

OsmAnd provides a wide range of options for [backing up](../personal/import-export.md) important data for [restoring](#local-folder) it later. Favorites can be saved as a separate file in internal and external storage, uploaded to [OsmAnd Cloud](../personal/osmand-cloud.md) (only if you have an [OsmAnd Pro or OsmAnd Start subscription](../purchases/index.md)) or [sent](#favorites-share) to friends using instant messaging programs.

### Free Cloud backup 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_ios.png)

</TabItem>

</Tabs>

Free Favorites Backup is a special purchase plan to back up your favorite points (locations) for Android, iOS, or Web versions in the OsmAnd application and restore them from OsmAnd Cloud. You can use this special plan if you have [OsmAnd Free or Maps+](../purchases/index.md).  

Free Favorites Backup has the following benefits:

- No payment is required. You do not need to purchase paid subscriptions.
- Saving your favorite points. You can regularly backup your favorite points in OsmAnd so you don't lose them if your device crashes or you delete the app.
- Transferring favorite points. If you use OsmAnd on multiple devices, Free Favorites Backup helps you quickly import your favorite points to a new device.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

You need to have an OsmAnd Cloud account to use the Free Settings Backup. If you have an account in *OsmAnd Pro* or an active account in OsmAnd Cloud, you will not see the promotion banner.  

- Tap the Free Favorites Backup banner.
- Go through the [registration step](../personal/osmand-cloud.md#login).
- Then go to the OsmAnd Purchases menu (*Menu → Settings → Purchases*).
- Select the [OsmAnd Start package](../personal/osmand-cloud.md#osmand-start).
- Create a backup.


### All Favorites

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_export_import_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites export import ios](@site/static/img/personal/favorites_export_import_2_ios.png)  

</TabItem>

</Tabs>

You can export and import your favorites using the special buttons at the bottom of the Favorites screen. A [.gpx file](../../technical/osmand-file-formats/osmand-gpx.md) (favorites.gpx) can be sent to Dropbox, email, messengers, and other applications that support this feature installed on your device.  

Android:
- **&#43;** - allows to import Favorites (favorite.gpx) from the device storage.
- **&#60;** - allows to export (share) all your Favorites as "favorite.gpx" file.  

iOS:
- **<Translate ios="true" ids="fav_import_title"/>** - allows to import Favorites as waypoints from GPX file (common GPS data format).  
- **<Translate ios="true" ids="fav_export_title"/>** - is used to export all your favorites as Favourites.gpx file.  

### Favorite Group

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

A tap on &#8942; button opens the special functions menu for a chosen favorite folder. You can choose **share** and send Favorites.gpx file to your device's memory or to your friends via messengers.  

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- Tap on &#128394;&#65039; button opens special functions menu. Then you need to choose favorites folder(s) or point(s) and using &#8657 (**share**) button send Favorites.gpx file to your device's memory or your friends via messengers. 

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

- Long tap on folder → show context menu → &#8657 (**share**) button.

![Favorites actions ios](@site/static/img/personal/favorites_actions1_ios.png) 

</TabItem>

</Tabs>

### Automatic Favorites Backup  

After each edit of Favorites, OsmAnd makes a backup file. These backups can be found using file manager programs: in Android use third-party apps, and in iOS they can be accessed with the system program *Files*.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*Android → data → net.osmand → files → backup*

![Favorites backup export Android](@site/static/img/personal/favorites_backup_export_andr.png)  ![Favorites autobackup android](@site/static/img/personal/favorites_autobackup_andr.png)  


*<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*

You can export Favorites backup files using *[Export](../personal/import-export.md#export)* funciton. The resulting .osf file you can send to the internal memory of the device, cloud storage, or other users of the OsmAnd app via messengers.  

:::caution
In the latest versions of Android, access to system directories is limited. However, after extracting the favorites file from the archive, it remains possible to forward it to messengers or cloud services, etc.  
:::

</TabItem>

<TabItem value="ios" label="iOS">

*Files → On my iPhone → OsmAnd Maps → favourites_backup*

![Favorites autobackup ios](@site/static/img/personal/favorites_autobackup.png)  

</TabItem>

</Tabs>

