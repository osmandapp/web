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

Favorites are grouped into one of the map layers. You can [show or hide](../map/point-layers-on-map.md#favorites) Favorites and their [names](../map/point-layers-on-map.md#favorite-and-poi-names) on the map. Favorite's [Context menu](../map/map-context-menu.md#favorites--track-points-from-the-group) opens when you select it on the map, where you can view detailed information about the selected point, and [edit or delete](../map/map-context-menu.md#add--edit-favorite) it.


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

To edit a favorite point, [tap](../map/map-context-menu.md#select-an-object-short-tap) it on the map or access it via [My Favorites](#manage-favorites), then select the **Edit favorite** button from the [*Map Context menu*](../map/map-context-menu.md#add--edit-favorite).

- You can edit all fields that were specified when **creating** the favorite point, such as name, icon, group, and more.
- In this editor, there is a **Delete** button to remove the point from your list of Favorites. On *Android*, this option is also available in the upper right corner of the screen.
- If you want to update the location of a specific Favorite, like *My parked car*, use the **Replace** option when creating a favorite point with a new location to assign it to the existing Favorite.


### Favorite icons

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/favorite_icon_1_ios.png)

</TabItem>

</Tabs>

- For *Android*, the list of icons consists of **all POI images** available in the OsmAnd app.
- For *iOS*, **a special set** of the most suitable Favorite icons is compiled: *Default, Special, Amenity, Transport, Service, Symbols, Sport, Emergency, Travel, Nautical, Education, Industrial*.


### Special Favorites (Personal)

***Personal*** folder is dedicated to special *<Translate android="true" ids="favorite_home_category"/>* and *<Translate android="true" ids="work_button"/>* points from the [Navigation Context menu](../navigation/setup/route-navigation.md#select-starting-point). This folder does not have a *three-dot menu*,  as you cannot change its parameters.


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

Using **My Favorites**, you can search for a specific favorite or favorite group and perform bulk operations such as deleting or renaming them.


### Order / Sorting / Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folders android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

Favorite folders and points are sorted alphabetically, with the [personal folder](../personal/favorites.md#special-favorites-personal) at the top. In the search list, *favorite points* are sorted by distance from the center of the map.  

- *In the iOS version*, you can change the order of your favorite points by distance by tapping the Directions icon.
- *In the Android version*, you need to access the Search menu. In the search list, *favorites* are sorted by distance from the previously visible map center. You can also search for favorites by name using [Global search](../search/search-all.md).


### Bulk Edit / Delete

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png) ![Favorites action delete android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

Tap the **Delete** (*bin icon on Android*) or the **Edit** button (*pencil icon on iOS*) to open a selection mode with options such as *Move to a Favorite Group*, *Share*, *Change Color*, and *Delete*. You can then select points or groups and perform the required action.


<!--
### Add Favorites to Map Markers

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>**  or **<Translate android="true" ids="remove_from_map_markers"/>**.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Favorite Group actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*Three-dot menu → Change default appearance*

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*Long tap folder → Change appearance*

![Favorites actions ios](@site/static/img/personal/favorites_actions_2_ios.png)

</TabItem>

</Tabs>

Using the  *three-dot menu* next to each folder, you can customize groups of favorite folders. More details are described in the [My Places](../personal/myplaces.md#favorites) article.


### Change Group Appearance

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorite_add_new_group_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_ios.png)

</TabItem>

</Tabs>

*Change Group Appearance* allows you to change the **icon**, **color**, and **shape** for all favorites in a group and apply these settings to any new favorites added in the future. This feature greatly simplifies the process of organizing and adding new favorites.


## Export / Import

OsmAnd offers various options for [backing up](./import-export.md) important data and [restoring](./import-export.md#import) it later. Favorites can be saved as a separate file in internal or external storage, uploaded to [OsmAnd Cloud](../personal/osmand-cloud.md) (only if you have an [OsmAnd Pro or OsmAnd Start subscription](../purchases/index.md) and) or [sent](#automatic-favorites-backup) to friends using instant messaging apps.


### Free Cloud backup

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

[Free Favorites Backup](../personal/osmand-cloud.md#osmand-start) is a special purchase plan that allows you to back up your favorite points (locations) for Android, iOS, or Web versions in the OsmAnd application and restore them from OsmAnd Cloud. This plan is available for users of [OsmAnd Free or Maps+](../purchases/index.md).  

*Free Favorites Backup* offers these benefits:

- **No payment is required**. Use the backup feature without purchasing paid subscriptions.
- **Save favorite points**. Regularly save your favorite points in OsmAnd to avoid losing them if your device crashes or the app is deleted.
- **Transfer favorite points**. Import your favorite points to a new device with *Free Favorites Backup* feature if you use OsmAnd across multiple devices.  


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

You need an OsmAnd Cloud account to use the *Free Settings Backup* feature. If you have an account in *OsmAnd Pro* or an active account in *OsmAnd Cloud acount*, you will not see the promotion banner.  

- *Free Favorites Backup banner*. Tap this banner to start the backup process.
- *Complete the registration step* if you do not have an OsmAnd Cloud account by following the instructions in the [registration guide](../personal/osmand-cloud.md#login).
- *Navigate to the OsmAnd Purchases* menu (*Menu → Settings → Purchases*).
- *[OsmAnd Start package](../personal/osmand-cloud.md#osmand-start)*. Select this option to access the Free Settings Backup feature.
- *Create a backup* of your settings.


### All Favorites

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites export import ios](@site/static/img/personal/favorites_export_import_3_ios.png)  

</TabItem>

</Tabs>

You can export and import your favorites using the special buttons at the bottom of the Favorites screen. A [.gpx file](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) can be sent to Dropbox, email, messengers, and other applications installed on your device that support this feature.

- **Import** button (*Android*) / **Import favorite** (*iOS*). Allows you to import favorite points (*favorites.gpx*) as waypoints from a *GPX* file (a common GPS data format) from your device's storage.
- **Share** button (*Android*) / **Export favorite** (*iOS*). Allows you to export (share) all your favorites as a *favorites.gpx* file.


### Favorite Group

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_1_ios.png)   ![Favorites actions ios](@site/static/img/personal/favorites_actions_2_ios.png)

</TabItem>

</Tabs>

Tap the **Three-dot menu** (*Android*) or the **Edit** button (*pencil icon on iOS*) to open the special features menu for a selected favorites folder. From this menu, choose the **Share** button to send the *Favorites.gpx* file to your device's memory or share it with friends via messaging apps.  

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
