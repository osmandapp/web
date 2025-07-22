---
sidebar_position: 3
title: Smart Folder (Filter)
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

The **Smart Folder** feature provides powerful tools for organizing and managing your tracks. One of the key features is the ability to filter files in the *Tracks tab* of the *My Places* menu based on criteria such as duration, length, or speed.  

This feature allows you to quickly find specific tracks that match your requirements. Filtered results can be saved as a **Smart Folder**, offering convenient access to dynamically updated track collections.


## Search Filter {#search-filter}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***How to apply a filter:***

- Tap the *Search* icon, then tap *Filter* in the [*Sort by*](./manage-tracks.md#sort-by) row.

- **Choose the required filter settings** to refine your track search.

- Tap **Show** in the lower right corner to see the filtered results. The number of matching tracks appears in brackets.

- **To clear** all active filters, tap **Reset all**.

- **To save** the current filter set as a new **Smart Folder**, tap the save icon in the upper right corner of the screen.


### Available Filters {#available-filters}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Name** — Search tracks by title. Enter a full or partial name to display matching tracks.
- **Folder** — Select one or more folders to filter tracks by their storage location.
- **Duration** — Filter tracks by their recorded duration, setting a range in hours and minutes.
- **Time in motion** — Specify the time range spent in motion during recording.
- **Length** — Set a specific range in kilometers or miles to find tracks of a particular length.
- **Average speed** — Filter tracks by [average speed](../../widgets/info-widgets.md#average-speed).
- **Sensor data group.**  
    Apply filters based on external sensor data, including:
    - Sensor speed, average.
    - Sensor speed, max.
    - Heart rate, average.
    - Heart rate, max.
    - Bicycle Cadence, average.
    - Bicycle Cadence, max
    - Bicycle Power, average.
    - Bicycle Power, max.
    - Temperature, average.
    - Temperature, max.
- **Max Speed** — Select tracks with specific maximum speed ranges.
- **Uphill** and **Downhill** — Filter tracks based on positive or negative elevation changes.
- **Average altitude** and **Max altitude** — Find tracks with specific average or maximum altitude data.
- **Date of creation** — Filter tracks created within a particular date range.
- **Nearest cities** — Display tracks passing near selected cities or localities.
- **Type of activity** — Filter tracks based on the [activities](../../map/tracks/track-context-menu.md#track-information-activity) type recorded in the GPX file (e.g., cycling, hiking).
- **Country** — Filter tracks by the country or region where they were recorded.
- **Color** and **Width** — Select tracks by assigned color or line width.
- **Other** — Additional filters for special characteristics:
    - *Visible on Map*. Shows only tracks displayed on the map.
    - *With Waypoints*. Displays tracks containing specific waypoints.


## Smart Folder {#smart-folder}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

A **Smart Folder** is a dynamic collection of tracks automatically updated based on specific filter criteria. It offers advanced tools for organizing, searching, and managing tracks efficiently.  

***Benefits of Smart Folders:***

1. **Automated organization.**  
    Automatically includes tracks that match predefined rules, such as creation date or duration range.
2. **Filtering and searching.**  
    Allows for quick searches within tracks using advanced filters and keywords.
3. **Dynamic refresh.**  
    Automatically refreshes content to display the latest tracks matching the criteria.
4. **Customize rules.**  
    Create personalized track collections by defining custom filter rules.


### How to Create Smart Folder {#how-to-create-smart-folder}

To create a **Smart Folder**, follow these steps:

1. Tap the ***three-dot menu*** icon in the *Tracks* tab of the *My Places* menu.

2. Select the **Add smart folder** from the dropdown menu.

3. Configure settings:
   - **Name the folder**. Enter a name to identify the folder.
   - Specify **track filter parameters**. Apply required filters using the available [Filter](#available-filters) options.

4. **Save** the settings.
    - Tap **Show** to preview the tracks.
    - Select the **Save** button to finalize the *Smart Folder*.

The newly created **Smart Folder** will automatically update its contents with tracks that match the selected criteria.


### Managing Smart Folders {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![My places Managing Smart Folders Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![My places Managing Smart Foldersn Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places Managing Smart Folders iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![My places Managing Smart Foldersn iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios.png)

</TabItem>

</Tabs>

The **Smart folder** is displayed with a unique icon in the folder list in the Tracks tab. To manage the folder, tap the *three-dot menu* next to it (*Android*) and *long tap* (*iOS*) or open the folder and use the icon in the top-right corner.

***Available Actions:***

- **Details** — View the complete list of tracks contained in the folder.

- **Show all tracks on the map** (*Android only*) — Display all folder tracks on the map.  
    *NOTE: Loading many tracks may affect performance.*

- **Edit name** (*Android*) / **Rename** (*iOS*) — Change the folder name for easier identification.

- **Refresh** — Manually update the folder's content to ensure it includes the latest tracks.

- **Change default appearance** (*Android*) — Changes the display appearance of all tracks in the folder.

- **Edit filter** — Modify the track filter settings for the current Smart Folder. See [Search Filter](#search-filter) for details.

- **Export** — Export all tracks in the Smart Folder via the [Import/Export](../../personal/import-export.md) feature. You will be redirected to *Menu → Settings → Actions tab*.

- **Delete folder** — Remove the Smart Folder without deleting its tracks.  
    *WARNING: This action is irreversible and will prompt a confirmation message.*

- **Move** (*iOS*) — Allows you to move the folder to another existing folder or create a new one.

- **Select** — Use [Selection Mode](./manage-tracks.md#selection-mode) for specific track actions within the folder.


## Related Articles {#related-articles}

- [Show track on Map](../../map/tracks/index.md)
- [Analyze on Map](../../map/tracks/index.md#analyze-track-on-map)
- [Track Context menu](../../map/tracks/track-context-menu.md)
- [Navigation by track](../../navigation/setup/gpx-navigation.md)
- [Trip recording](../../plugins/trip-recording.md)

> *Last updated: March 2025*
