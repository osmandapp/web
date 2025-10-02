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


## Overview {#overview}

**Favorites** OsmAnd's feature allows you to create bookmarks (notes) on the map. These favorite points are displayed as yellow stars by default, but you can fully customize them with different colors, shapes, and icons. Favorites are grouped into a dedicated map layer, which becomes visible from the *6th zoom level*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites introduction android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites introduction ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Favorite Point {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favotires layer Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Favorites are part of a special map layer, and you can [show or hide](../map/point-layers-on-map.md#favorites) them along with their [names](../map/point-layers-on-map.md#favorite-and-poi-names) on the map. Tapping a favorite point opens the [Context menu](../map/map-context-menu.md#favorites--track-points-from-the-group), allowing you to view details and [edit or delete](../map/map-context-menu.md#add--edit-favorite) the point.


### Create {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorite add description Android](@site/static/img/personal/favorite_add_descr_android.png)  ![Favorite group Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite add description iOS](@site/static/img/personal/favorite_add_descr_ios.png)  ![Favorite group iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

To add a favorite point:

1. Select a [POI](../map/point-layers-on-map.md#points-of-interest-pois) or a structure on the map.  
    Short tap for a POI or long tap for a general map point.
2. Select [Add (☆)](../map/map-context-menu.md#add--edit-favorite) from the map context menu.

When adding a point from OSM data, the relevant POI information is automatically included. You can also create a favorite by [long-tapping](../map/map-context-menu.md#select-any-point-long-tap) any map location.

***Fields for a Favorite point:***

- **Name** — A unique name within the group (*Required*).
- **Address** and **Description** (*Optional*).
- **Group** — Select from an existing [Favorite group](#manage-favorites) or create a new one.
- **Visual customization** — Icon, color, shape can either match the default [group appearance](#change-group-appearance) or be customized individually.


### Edit / Replace / Delete {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorite edit Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite edit iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

To modify a favorite point:

1. [Tap](../map/map-context-menu.md#select-an-object-single-tap) the favorite on the map or go to [My Favorites](#manage-favorites).
2. Choose **Edit favorite** from the [*map context menu*](../map/map-context-menu.md#add--edit-favorite).

***Options available:***

- **Edit details** — Name, icon, group, address, and description.
- **Replace location** — Replace another point with this one. Useful for updating a specific point (e.g. *My parked car*) or creating a new one.
- **Delete** — Remove the favorite using the delete option, accessible through the Edit menu or via the delete button on Android.


### Favorite Icons {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

A wide range of icons for POIs and waypoints is available in OsmAnd. You can:

- Select an icon from the list of [POI categories](../search/search-poi.md#categories-and-their-filters).
- Find a suitable icon using the [search option](../search/search-all.md#how-to-use).


### Special Favorites (Personal) {#special-favorites-personal}

The *Personal folder* contains special points like **<Translate android="true" ids="favorite_home_category"/>** and **<Translate android="true" ids="work_button"/>**, often used in [navigation](../navigation/setup/route-navigation.md#select-start-point). This folder does not have a *three-dot menu*, and its parameters cannot be changed.


## Manage Favorites {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

The **My Favorites** section lets you:

- [Search](#order--sorting--search) for specific favorites or groups.
- [Bulk operations](#bulk-edit--delete) — Rename, move, or delete multiple favorites at once.

### Order / Sorting / Search {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folders android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Sorting** — Favorite folders and points are sorted alphabetically, with the [personal folder](../personal/favorites.md#special-favorites-personal) at the top.
- **Searching** — Use [Global search](../search/search-all.md) to find favorites by name. Favorites are sorted by distance from the map's center.


### Bulk Edit / Delete {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png) ![Favorites action delete android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. To manage multiple favorites, tap the **Delete** icon (*bin icon on Android*) or the **Edit** button (*pencil icon on iOS*).
2. Select individual favorites or entire folders for bulk operations.
3. **Options available** — *Delete* for Android and iOS, *Move to a Favorite Group*, *Share*, and *Change Color* for iOS.

<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>**  or **<Translate android="true" ids="remove_from_map_markers"/>**.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Favorite Group Actions {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *Three-dot menu → Change default appearance*

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *Long tap folder → Default appearance*

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Use the ***Three-dot menu*** (*Android*) next to each folder and ***long tap*** (*iOS*) the folder to manage groups of favorites:

- **<Translate android="true" ids="shared_string_rename"/>** — Use this option to change the name of the selected folder.

- [<Translate android="true" ids="change_default_appearance"/>](#change-group-appearance) — Customize how the favorite points in the folder appear on the map by changing their icons, colors, or labels.

- **<Translate android="true" ids="shared_string_show_on_map"/>** or **Hide on map** — Toggle this option to display or hide the favorite points from the folder on the map.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** or **Remove from map markers** (*Android only*) — Add all favorite points from the folder to the *Map markers list* or remove them as needed for easy reference.

- **<Translate android="true" ids="shared_string_share"/>** — Share the favorite points in the folder by exporting them as a *Favorites.gpx* file, making it easy to transfer or back up your data.

- **<Translate android="true" ids="shared_string_delete"/>** — Permanently delete the selected favorites folder and all the points within it.



### Change Group Appearance {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

The **Change Group Appearance** option allows you to set a default style for all favorites in a folder. You can adjust the following parameters:

- **Icon** — Choose an icon from the available categories.
- **Color** — Select a solid color to highlight favorites.
- **Shape** — Pick a marker shape (circle, square, octagon).

If the favorites in a folder already have different icons, colors, or shapes, the *Original state* is displayed. This means each favorite keeps its current style unless you select a new one. When saving, you will also be prompted to choose how the changes should be applied:

- **Apply only to new points** — Existing favorites remain unchanged; new favorites will inherit the default appearance.
- **Apply to existing points** — Update only the favorites already in the folder.
- **Apply to all points** — Apply the new style to both existing and future favorites.

This flexibility allows you to standardize the appearance of a folder or keep unique customizations while still setting defaults for new points.


## Export / Import {#export--import}

OsmAnd provides several methods to [back up](./import-export.md) and [restore](./import-export.md#import) favorites:

- **Backup locations** — Local storage, [OsmAnd Cloud](../personal/osmand-cloud.md) (only with [OsmAnd Pro or OsmAnd Start subscription](../purchases/index.md)), or instant messaging apps.

- **File format** — Favorites are saved as `.gpx` files (favorites.gpx).


### Free Cloud Backup {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

The [Free Favorites Backup](../personal/osmand-cloud.md#osmand-start) is a special purchase plan that allows you to back up your favorite points (locations) for **Android, iOS**, or **Web** versions in the OsmAnd application and restore them from OsmAnd Cloud. This plan is available for users of [OsmAnd Free or Maps+](../purchases/index.md).  

*Free Favorites Backup* offers these benefits:

- **No payment is required**. Use the backup feature without purchasing paid subscriptions.
- **Save favorite points**. Regularly save your favorite points in OsmAnd to avoid losing them if your device crashes or the app is deleted.
- **Transfer favorite points**. Import your favorite points to a new device with *Free Favorites Backup* feature if you use OsmAnd across multiple devices.  


### How to Create a Backup {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

You need an OsmAnd Cloud account to use the *Free Settings Backup* feature. If you have an account in *OsmAnd Pro* or an active account in *OsmAnd Cloud acount*, you will not see the promotion banner.  

- *Free Favorites Backup banner*. Tap this banner to start the backup process.
- *Complete the registration step* if you do not have an OsmAnd Cloud account by following the instructions in the [registration guide](../personal/osmand-cloud.md#login).
- *Navigate to the OsmAnd Purchases* menu (*Menu → Settings → Purchases*).
- *[OsmAnd Start package](../personal/osmand-cloud.md#osmand-start)*. Select this option to access the Free Settings Backup feature.
- *Create a backup* of your settings.


### All Favorites {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

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


### Favorite Group {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_1_ios.png)   ![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Tap the **Three-dot menu** (*Android*) or the **Edit** button (*pencil icon on iOS*) or **long tap** the folde (*iOS*) of the selected favorites folder.
- Choose the **Share** button to send the *Favorites.gpx* file to your device's memory or share it via messaging apps.  


### Automatic Favorites Backup {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *Android → data → net.osmand → files → backup*

![Favorites backup export Android](@site/static/img/personal/favorites_backup_export_andr.png)  ![Favorites autobackup android](@site/static/img/personal/favorites_autobackup_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *Files → On my iPhone → OsmAnd Maps → favourites_backup*

![Favorites autobackup ios](@site/static/img/personal/favorites_autobackup.png)  

</TabItem>

</Tabs>

OsmAnd creates a **backup file** each time favorites are edited.

- **Android**: Backups are stored in *Android → data → net.osmand → files → backup*. Use a third-party file manager to access them.

- **iOS**: Files are located in *Files → On my iPhone → OsmAnd Maps → favourites_backup*.

**Manual backup export**  

- Go to *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Export the `.osf` file to local storage, cloud services, or share it directly.

:::caution
In the latest versions of ***Android***, access to system directories is limited. However, after extracting the favorites file from the archive, it remains possible to forward it to messengers or cloud services, etc.  
:::


### Favorites in GPX File {#favorites-in-gpx-file}

All information about a Favourite is stored and described using tags. When creating a Favourite point, you can write your own [description](#favorite-point) or use information from the OSM [point of interest (POI)](../map/point-layers-on-map.md#points-of-interest-pois) data from which your point was created. Favorite points, POIs, and Waypoints use the same **tags** to store information and are saved in **GPX file format**.  


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


## Related Articles {#related-articles}

- [Manage Tracks](../personal/tracks/manage-tracks.md#import--export-track)
- [Search History](../search/search-history.md#export-and-share)
- [Color Palette Schemes](../personal/color-palette-schemes.md)


