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

OsmAnd provides convenient track management tools, one of them is filtering in the *Tracks* tab via search based on multiple criterias such as duration, length and others. This search filter can be saved as a **Smart folder**, so tracks will get automatically filtered in this folder.


## Search Filter

<InfoAndroidOnly/>

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png) 


- To access the Filter screen, tap the Search icon &#x1F50D;, in the *Sort by* row on the right, tap *Filter*. 
- After selecting the required filters, tap the Show button in the lower right corner of the screen. The number of filtered tracks is displayed in brackets.
- You can clear all configured filters using the *Reset all* button.
- The configured filter set can be saved as a new *Smart folder* using the button in the upper right corner of the screen.

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)  

### Available Filters

- **Filter by name**

    - This filter allows you to search for tracks by their title.
    - Enter a title or part of a title to filter tracks matching the specified text.

- **Folder**

    - The *Folder* filter allows you to search for tracks in one or more existing folders.
    - Select the needed folders to display the tracks in the search list.

- **Duration**

    - This filter allows you to customize your search by the duration of the recorded tracks.
    - You can select a duration range in hours and minutes to find tracks matching your time limit.

- **Time in motion**

    - This filter helps you find tracks during which you were in motion.
    - Select a range of time in motion to display tracks that match your parameters.

- **Length** 

    - This filter allows you to customize your search by track length in kilometers or miles.
    - Specify the required length range to find tracks of a specific length.

- **Average speed** 

    - This filter helps you sort tracks by average speed.
    - Select the [average speed](../../widgets/info-widgets.md#average-speed) range to search for tracks.

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

- **Max Speed**

    - This filter allows you to search for tracks with a specific maximum speed.
    - Select from the suggested range of maximum speed values to find tracks that match this parameter.  

- **Uphill**

    - This filter searches for tracks that go up a slope or have a positive elevation.
    - Tracks that include sections with the selected uphill are displayed.

- **Downhill**

    - The *Downhill* filter searches for tracks that are descending or have a negative elevation.
    - Finds tracks that include downhill sections for the selected values.

- **Average altitude**

    - This filter helps you find tracks based on average altitude.
    - Specify a range of average altitude to find tracks with these parameters.

- **Max altitude**

    - This filter searches for tracks according to their maximum altitude above sea level.
    - Specify a range of maximum altitude to find tracks matching the selected parameters.

- **Date of creation**

    - The *Date of creation* allows you to filter tracks by date.
    - Specify the required time period to find tracks that were created then.

- **Nearest cities**

    - The filter allows you to search for tracks that pass close to specific cities or settlements.
    - Select one or more locations to find tracks passing through them or nearby.

- **Country**

    - This filter allows you to search for tracks recorded in a specific country or region.
    - Select specific locations to find related tracks.  

- **Color**

    - The *Color* filter helps you search for tracks by colors that have already been applied to the appearance of existing tracks.
    - Select one or more colors, or *Not specified* for items that do not have a specified color, to find the tracks you need.

- **Width**

    - This filter searches for tracks according to their width. Only the parameters that existing tracks have are listed.
    - Select one or more parameters or *Not specified* to find tracks with a specific width or without this attribute.

- **Other**  

    The filter provides additional options for finding and filtering tracks that have special characteristics.  

    - *Visible on Map*. With this feature, you can find tracks that you have selected to be shown on the map.
    - *With Waypoints*. This filter helps you find tracks that contain waypoints, places that were marked during track recording, for example. With this filter, you can easily find tracks with important waypoints, such as vacation spots or notable events on your trip.


## Smart Folder

<InfoAndroidOnly/>

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

*Smart Folder* is a special type of folder that provides intelligent and automated features for organizing and managing tracks.  

1. **Automated organization.** *Smart folder* can automatically sort files within itself based on specified rules or criteria. For example, you can set up a *Smart folder* so that all tracks created on a certain date are automatically moved to that folder.
2. **Filtering and searching.** This folder can provide options to quickly search for tracks within itself using various filters and keywords. These help users to quickly find the tracks they are looking for.
3. **Dynamic refresh.** *Smart folder* can dynamically update its contents based on Refresh function. This allows you to always have up-to-date information inside the folder.
4. **Customize rules.** You can customize rules that determine which files should be included in the *Smart folder*. 

### Create Smart Folder

To create a smart folder, follow these steps:
1. Tap the three-dot menu icon in the upper right corner of the screen in the *Tracks* tab. 
2. Select the *Add smart folder* option from the menu that appears after tapping the icon.
3. Set the parameters of the smart folder:
   - **Name the folder** (Enter a new name) for identification.
   - Specify **track filter parameters** from the [Filter](#filter) list. These parameters determine which tracks will be automatically displayed in the smart folder.
4. Save the settings. Tap *Show* in the lower right corner of the screen, and then tap the *Save* button.

After completing these steps, the Smart Folder will automatically collect and display tracks matching the specified filter parameters.

### Smart Folder actions

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_2_andr.png) 

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)  


Once created, the Smart folder is displayed with a special icon in the folder list in the Tracks tab. To manage it, tap the three-dot menu in the folder field or enter it and select top right icon.

- **Details**. Opens the entire list of tracks in this folder.
- **Show all tracks on the map**. If there are many tracks in a folder, it is not recommended to map them all, it may take a long time.
- **Rename**. Changing the folder name.
- **Refresh**. Allows you to update the track list.
- [**Edit filter**](#search-filter). You can change the track filter settings for the current Smart folder.
- [**Export**](../../personal/import-export.md). You will go to *Menu → Settings → Actions* tab, where you can export all tracks from the smart folder.
- **Delete folder**. You can only delete the Smart folder, not the tracks. A warning message will appear on the display. The deletion will be irreversible.  
- [**Select**](./manage-tracks.md#selection-mode). Allows you to select all or only certain tracks for further interaction with them.




## Related Articles

- [Show track on Map](../../map/tracks/index.md)
- [Analyze on Map](../../map/tracks/index.md#analyze-track-on-map)
- [Track Context menu](../../map/tracks/track-context-menu.md)
- [Navigation by track](../../navigation/setup/gpx-navigation.md)
- [Trip recording](../../plugins/trip-recording.md)

> *This article was last updated in July 2024*
