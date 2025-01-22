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


## Overview

OsmAnd provides powerful tools for organizing and managing your tracks. One of the key features is the ability to filter files in the *Tracks tab* of the *My Places* menu based on criteria such as duration, length, or speed. This allows you to quickly find specific tracks that match your needs. Filtered results can also be saved as a **Smart Folder** for convenient access and reuse.


## Search Filter

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

- To open the **Filter screen**, tap the *Search* icon, then tap *Filter* in the [*Sort by*](./manage-tracks.md#sort-by) row.
- After configuring the required filters, tap the *Show* button in the lower right corner to display the filtered tracks. The number of matching tracks appears in brackets.
- To clear all active filters, tap *Reset all*.
- To save the current filter set as a new **Smart Folder**, tap the save icon in the upper right corner of the screen.


### Available Filters

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Filter by name**.  
    Search for tracks by their title. Enter a full or partial title to display matching tracks.
- **Folder**.  
    Filter tracks based on their storage folder. Select one or more folders to display tracks from those locations.
- **Duration**.  
    Filter tracks by their recorded duration. Specify a duration range in hours and minutes to find tracks that fit your time criteria.
- **Time in motion**.  
    Filter tracks by the time spent in motion during recording. Select a range to display tracks that match your selected time.
- **Length**.  
Search for tracks by their total length. Specify a range in kilometers or miles to find tracks of a specific length.
- **Average speed**.  
    Filter tracks by average speed. Select a [speed range](../../widgets/info-widgets.md#average-speed) to display matching tracks.
- **Sensor data group**  
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
- **Max Speed**.  
    Search for tracks based on their maximum speed. Specify a maximum speed range to find matching tracks.
- **Uphill**.  
    Filter tracks with positive elevation gain. Tracks that include uphill sections in the selected range are displayed.
- **Downhill**.  
    Filter tracks with negative elevation loss. Tracks that include downhill sections in the selected range are displayed.
- **Average altitude**.  
    Filter tracks based on their average altitude. Specify an altitude range to find matching tracks.
- **Max altitude**.  
    Search for tracks by their maximum altitude above sea level. Specify an altitude range to display tracks.
- **Date of creation**.  
    Filter tracks based on the date they were created. Select a date or range to find tracks created during that period.
- **Nearest cities**.  
    Search for tracks that pass near specific cities or settlements. Select one or more locations to display tracks passing through or near them.
- **Type of activity**.  
    Filter tracks based on the [activities](../../map/tracks/track-context-menu.md#track-information-activity) type recorded in the GPX file (e.g., cycling, hiking).
- **Country**.  
    Filter tracks by the country or region where they were recorded. Select a country to find related tracks.
- **Color**.  
    Filter tracks by their assigned color. Select one or more colors or choose *Not specified* to find tracks without a specified color.
- **Width**.  
    Filter tracks based on their visual line width. Select specific width values or *Not specified* for tracks without this attribute.
- **Other**  
    Additional filters for special characteristics:
    - *Visible on Map*. Shows tracks currently selected to be displayed on the map.
    - *With Waypoints*. Displays tracks containing waypoints, such as marked locations added during recording.


## Smart Folder

<InfoAndroidOnly/>

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

A *Smart Folder* is a special type of folder that provides automated features for organizing and managing tracks based on specified criteria.

1. **Automated organization.**  
    A *Smart Folder* can automatically include tracks that match predefined rules. For example, you can configure a Smart Folder to include all tracks created on a specific date or within a specific duration range.
2. **Filtering and searching.**  
    *Smart Folders* allow quick searches within their contents using filters and keywords. This enables you to find tracks more efficiently by narrowing down results based on specific parameters.
3. **Dynamic refresh.**  
    The contents of a *Smart Folder* are dynamically updated when the *Refresh* feature is used, ensuring the folder always reflects the latest matching tracks.
4. **Customize rules.**  
    You can define custom rules that specify which tracks should be included in the *Smart Folder*. This flexibility allows you to create personalized, automated track collections.


### Create Smart Folder

To create a **Smart Folder**, follow these steps:

1. Tap the ***three-dot menu*** icon in the upper right corner of the screen in the *Tracks* tab.
2. Select the **Add smart folder** from the menu that appears.
3. Configure settings:
   - **Name the folder**. Enter a name to identify the folder.
   - Specify **track filter parameters**. Choose parameters from the [Filter](#available-filters) list to define which tracks will be automatically included.
4. Save the settings.
    - Tap **Show** in the lower right corner to display the filtered tracks.
    - Tap the **Save** button to finalize and create the *Smart Folder*.

After created, the **Smart Folder** will automatically collect and display tracks that match the selected filter criteria.


### Smart Folder actions

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_2_andr.png)

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)  


Once created, a Smart Folder is displayed with a unique icon in the folder list under the Tracks tab. To manage the folder, tap the three-dot menu next to the folder or open the folder and use the icon in the top-right corner.

***Available Actions:***

- **Details**.  
    View the complete list of tracks contained in the folder.
- **Show all tracks on the map**.  
    Displays all tracks in the folder on the map.  
    *NOTE: Mapping a large number of tracks may take significant time and affect performance.*
- **Rename**.  
    Change the folder name for easier identification.
- **Refresh**.  
    Update the folder to ensure it includes the latest tracks that match the filter criteria.
- **Edit filter**. Modify the track filter settings for the current Smart Folder. See [Search Filter](#search-filter) for details.
- **Export**. Export all tracks in the Smart Folder via the [Import/Export](../../personal/import-export.md) feature. You will be redirected to *Menu → Settings → Actions tab*.
- **Delete folder**. Delete the Smart Folder without affecting the tracks it contains.  
*Warning: This action is irreversible and will prompt a confirmation message.*
- Select. Use [Selection Mode](./manage-tracks.md#selection-mode) to select all or specific tracks within the folder for further actions.


## Related Articles

- [Show track on Map](../../map/tracks/index.md)
- [Analyze on Map](../../map/tracks/index.md#analyze-track-on-map)
- [Track Context menu](../../map/tracks/track-context-menu.md)
- [Navigation by track](../../navigation/setup/gpx-navigation.md)
- [Trip recording](../../plugins/trip-recording.md)

> *This article was last updated in January 2025*
