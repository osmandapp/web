---
sidebar_position: 7
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

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favotires layer Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Favorites are grouped into one of the map layers. You can [show or hide](../map/point-layers-on-map.md#favorites) Favorites and their [names](../map/point-layers-on-map.md#favorite-and-poi-names) on the map. Favorite's [Context menu](../map/map-context-menu.md#favorites--track-points-from-the-group) opens when you select it on the map, there you can find detailed information about chosen point, [edit or delete](../map/map-context-menu.md#add--edit-favorite) it  


### Create

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite add description Android](@site/static/img/personal/favorite_add_descr_android.png)  ![Favorite group Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite add description iOS](@site/static/img/personal/favorite_add_descr_ios.png)  ![Favorite group iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

To create a new Favorite point, you need to select a [POI](../map/point-layers-on-map.md#points-of-interest-poi) object with a short tap or a structure on the map with a long tap, and then select [Add (☆)](../map/map-context-menu.md#add--edit-favorite) from the [Map Context menu](../map/map-context-menu.md). If you select a point from OSM data, all information about that POI will be added to the newly selected point. You can also select any point on the map to add Favorite using [Long tap](../map/map-context-menu.md#select-any-point-long-tap).


Following fields could be specified for a favorite point:

- Unique **Name** per group is **required**.
- **Address** and **description** are optional.
- Existing [**Favorite group**](#manage-favorites) from the list or newly created.
- Visual **icon**, **color**, **shape** are selected by default from [**group appearance**](#change-group-appearance).
but could be changed uniquely per a favorite point.


### Edit / Replace / Delete

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite edit Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite edit iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

To edit a favorite point, you need to [tap](../map/map-context-menu.md#select-an-object-short-tap) it on the map or access via [My Favorites](#manage-favorites) and select the **Edit favorite** button from the [*Map Context menu*](../map/map-context-menu.md#add--edit-favorite).

- You can edit all fields that where specified during **create** a favorite point such as name, icon, group and etc.
- In this editor there is a button **Delete** this point from your list of Favorites. For *Android*, it is duplicated in the upper right corner of the screen.
- In order to have always same Favorite like *My parked car*, during creation of a favorite point with new location you can hit **Replace** and it will assign new location.


### Special Favorites (Personal)

***Personal*** folder is a folder dedicated for special *<Translate android="true" ids="favorite_home_category"/>* and *<Translate android="true" ids="work_button"/>* points of [Navigation Context menu](../navigation/setup/route-navigation.md#select-starting-point). This folder doesn't have &#8942; button, because you can not change the parameters for this folder.  


## Manage Favorites

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

Using **My Favorites** you can search for a specific favorite or a favorite group and do bulk operations such as delete, rename.


### Order / Sorting / Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folders android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

The favorite folders and points are sorted alphabetically. The [personal folder](../personal/favorites.md#special-favorites-personal) is at the top. In the search list, *Favorites* is sorted by distance from the map center.  

In iOS version it's possible to change order of favorites by distance clicking Directions icon, in Android version you will need to access Search menu. In the searching list *Favorites* are sorted by distance from the previously visible map center. Also favorites could be searched by name using [Global search](../search/search-all.md).


### Bulk Edit / Delete

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Tap &#x1F5D1; at the bottom of the screen. You can select points and groups and by tap &#x1F5D1; button in top right corner delete them.  

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png) ![Favorites action delete android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Tap &#128394;&#65039; button opens a selection mode with *Move to a Favorite Group*, *Share*, *Change Color*, *Delete*. You can select points and groups and perform a selected action with them.

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>


### Favorite Group actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- Tap &#8942; button opens special functions for a chosen Favorite folder.

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

- *Long tap folder → show context menu →* *Change appearance*:

![Favorites actions ios](@site/static/img/personal/favorites_actions1_ios.png)

</TabItem>

</Tabs>

You can perform following actions for the whole Favorite group:

1. &nbsp;<Translate android="true" ids="shared_string_rename"/>  - is used to change the folder name.
2. &nbsp;<Translate android="true" ids="change_default_appearance"/>  - is used to [change default appearance](#change-group-appearance) for favorites from the chosen group.
3. &nbsp;<Translate android="true" ids="shared_string_show_on_map"/>  - displays or not Favorite points from the folder on the map (***Android only***).
4. &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  - adds or removes all Favorite points from a folder in [Map markers list](../personal/markers.md#groups) (***Android only***).
5. &nbsp;<Translate android="true" ids="shared_string_delete"/> - deletes the chosen favorites folder.  
6. &nbsp;<Translate android="true" ids="shared_string_share"/>  - sharing Favorite points with other users (using Favorites.gpx file).


### Change Group Appearance

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorites_folder_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions2_ios.png)

</TabItem>

</Tabs>

Change group appearance allows to change **icon, color, shape** for all favorites in the group and apply it to future added favorites. So it greatly simplifies process of adding new favorites.


## Export / Import

OsmAnd provides a wide range of options for [backing up](./import-export.md) important data for [restoring](./import-export.md#import) it later. Favorites can be saved as a separate file in internal and external storage, uploaded to [OsmAnd Cloud](../personal/osmand-cloud.md) (onlyif you have an [OsmAnd Pro or OsmAnd Start subscription](../purchases/index.md) and) or [sent](#automatic-favorites-backup) to friends using instant messaging programs.


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

[Free Favorites Backup](../personal/osmand-cloud.md#osmand-start) is a special purchase plan to back up your favorite points (locations) for Android, iOS, or Web versions in the OsmAnd application and restore them from OsmAnd Cloud. You can use this special plan if you have [OsmAnd Free or Maps+](../purchases/index.md).  

Free Favorites Backup has the following benefits:

- No payment is required. You do not need to purchase paid subscriptions.
- Saving your favorite points. You can regularly backup your favorite points in OsmAnd so you don't lose them if your device crashes or you delete the app.
- Transferring favorite points. If you use OsmAnd on multiple devices, Free Favorites Backup helps you quickly import your favorite points to a new device.  


#### Create a Backup

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

You can export and import your favorites using the special buttons at the bottom of the Favorites screen. A [.gpx file](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) can be sent to Dropbox, email, messengers, and other applications installed on your device that support this feature.

- **Import** button (*Android*) / **Import favorite** (*iOS*). Allows you to import favorite points (*favorites.gpx*) as waypoints from a *GPX* file (a common GPS data format) from your device's storage.
- **Share** button (*Android*) / **Export favorite** (*iOS*). Allows you to export (share) all your favorites as a *favorites.gpx* file.


### Favorite Group

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)   ![Favorites actions ios](@site/static/img/personal/favorites_actions1_ios.png)

</TabItem>

</Tabs>

Tap the **three-dot menu** (*Android*) or the **edit** button (*pencil icon on iOS*) to open the special features menu for a selected favorites folder. From this menu, choose the **share** button to send the *Favorites.gpx* file to your device's memory or share it with friends via messaging apps.  

*On iOS*, you can also long-tap a folder to open the context menu, then tap the **Share** button.


### Automatic Favorites Backup  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*Android → data → net.osmand → files → backup*

![Favorites backup export Android](@site/static/img/personal/favorites_backup_export_andr.png)  ![Favorites autobackup android](@site/static/img/personal/favorites_autobackup_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*Files → On my iPhone → OsmAnd Maps → favourites_backup*

![Favorites autobackup ios](@site/static/img/personal/favorites_autobackup.png)  

</TabItem>

</Tabs>

After each edit to Favorites, OsmAnd creates a backup file. You can find these backup files using a file manager. On *Android*, use a third-party file manager app. On *iOS*, access them using the *Files* app.  

***On Android***, you can export Favorites backup files using the Export function. The resulting **.osf** file can be saved to the device's internal memory, uploaded to cloud storage, or shared with other OsmAnd users via messaging apps. To export a backup, go to *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.  

:::caution
In the latest versions of ***Android***, access to system directories is limited. However, after extracting the favorites file from the archive, it remains possible to forward it to messengers or cloud services, etc.  
:::




### Favorites in GPX File

All information about a Favourite is stored and described using tags. When creating a Favourite point, you can write your own [description](#favorite-point) or use information from the OSM [point of interest (POI)](../map/point-layers-on-map.md#points-of-interest-poi) data from which your point was created. Favorite points, POIs, and Waypoints use the same **tags** to store information and are saved in **GPX file format**.  


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


## Related Articles

- [Manage Tracks](../personal/tracks/manage-tracks.md#import--export-track)
- [Search History](../search/search-history.md#export-and-share)
- [Color Palette Schemes](../personal/color-palette-schemes.md)

> *This article was last updated in August 2024*
