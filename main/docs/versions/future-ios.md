---
sidebar_position: 5
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

# iOS 5.0

# Join Beta

iOS beta builds (TestFlight) are usually provided weekly (after a Team Sprint demo). They do not contain descriptions and may have continuous versioning. They are assumed to be stable and ready to use.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Join TestFlight</a>
</div>

<br/>

## What's new

- Introduced Smart Folders for automatic track organization.
- Added a full-screen gallery viewer for Wikimedia images.
- Added support for Vietnamese and Hebrew Text-to-Speech (TTS) for navigation.
- Added Quick Actions for controlling trip recording.
- Added a *Detailed track guidance* option and an *Attach to the roads* suggestion dialog.
- Made prominent peaks discoverable via map and search.
- Added border highlighting for buildings and areas with detailed information.
- Added an option to toggle visibility for separate favorite groups on the map.
- Expanded icon options for Favorites by adding icons from all POI categories.
- Added battery level display for external sensors.
- Added an option to change the appearance of multiple tracks simultaneously.
- Added a *Reset* action for the Average Speed widget.
- CarPlay Search: Added the ability to select buildings.
- Fixed the UTM coordinate input sequence.
- Fixed an issue with track waypoint colors.
- Fixed the missing *Download all* button for Terrain maps.
- Fixed an issue where popular articles were sometimes missing in Travel Guides.

<!--

- Grid for buttons
- Connection OBD-II scanner
- Custom / standard button appearance
- Autosync (sync Android changes in Cloud)



- Added border highlighting fro buildings and ares with detailed information.
- [Prominent peaks are now discoverable via map and search](#prominent-peaks-now-discoverable)
- [Introduced Smart Folders for automatic track organization](#smart-folders-for-automatic-track-organization).
- [Discover Nearby Areas with OsmAnd Polygon Info](#polygon-selection-for-nearby-areas)
- Added Quick Actions for controlling trip recording.
- Added a "Detailed track guidance" option and an "Attach to the roads" suggestion dialog.
- [Added an option to toggle visibility for separate favorite groups on the map.](#flexible-appearance-settings-for-favorite-groups)
- [Expanded icon options for Favorites by adding icons from all POI categories.](#expanded-icon-options-for-favorites)
- [Added battery level display for external sensors.](#battery-status-for-external-sensors)
- [Added an option to change the appearance of multiple tracks simultaneously.](#change-appearance-for-multiple-tracks)
- [Added a *Reset* action for the Average Speed widget](#reset-option-for-the-average-speed-widget)
- [CarPlay Search: Added the ability to select buildings.](#carplay-search-select-buildings)  


- [Added a full-screen gallery viewer for Wikimedia images](#full-screen-wikimedia-gallery-viewer) - https://github.com/osmandapp/OsmAnd-iOS/issues/4062  


To docs:  
Expanded icon options for Favorites by adding icons from all POI categories - https://github.com/osmandapp/OsmAnd-iOS/issues/3942  
CarPlay Search: Added the ability to select buildings. - https://github.com/osmandapp/OsmAnd-iOS/issues/3959   
Added an option to change the appearance of multiple tracks simultaneously. - https://github.com/osmandapp/OsmAnd-iOS/issues/3687  
Added battery level display for external sensors. - https://github.com/osmandapp/OsmAnd-iOS/issues/3953   / https://github.com/osmandapp/OsmAnd-iOS/issues/4145  


## Battery Status for External Sensors

![Battery Status for External Sensors](../../blog/2025-04-15-ios-5-0/img/battery_level_sensors_ios.png)

In **OsmAnd 5.0**, you can now **view the battery level** of connected external sensors as a main value. This makes it easier to monitor their status and ensures optimal performance during use.

Key features:

- **Battery level display** — Check the **battery level** of all connected external sensors directly in the app.
- **Real-time monitoring** — The battery status updates in real time, helping you manage sensor power effectively.

How to use:

- Go to *Menu → Plugins → External Sensors* to view connected sensors and their battery status.
- Go to *Menu → Configure screen → Choose a panel → Add widget → External Sensors → Choose sensor → Settings → Show → Battery level*.
- Long tap the widget on the map screen and select *Settings*.

Learn more:  
[External Sensors plugin](https://osmand.net/docs/user/plugins/external-sensors)


## Smart Folders for Automatic Track Organization

![Smart Folders](../../blog/2025-04-15-ios-5-0/img/my_places_smart_folder_ios.png)

In OsmAnd iOS 5.0, **Smart Folders** for tracks are now available, enhancing the way you organize your saved locations. This feature, previously available on Android, is designed to help you manage and automatically sort your tracks into folders based on predefined criteria.

Key features:

- **Automatic organization** - Smart Folders automatically sort tracks into categories such as *date*, *location*, *speed*, and more.
- **Customizable sorting** - You can define how tracks are grouped using filters, making it easier to manage and find specific tracks.
- **Improved track management** - With Smart Folders, you can quickly organize and access your tracks, making your trip planning and navigation more efficient.

How to use:  
Go to *Menu → My Places → Tracks* and select *Add smart folder* to start organizing your tracks automatically.  

Learn more:  
[Smart Folder Setup for Tracks](https://osmand.net/docs/user/personal/tracks/smart-folder)


## Change Appearance for Multiple Tracks

![Change Appearance for Multiple Tracks](../../blog/2025-04-15-ios-5-0/img/tracks_change_appear_3_ios.png)

You can now **change the appearance** of **multiple tracks** simultaneously through a new setting in *Selection mode*. This update makes it easier to apply consistent settings across multiple tracks, helping you quickly modify their appearance for better visualization.

Parameters you can modify for all selected tracks:

- **Direction arrows** — Add direction arrows.
- **Start / Finish icons** — Display start and finish icons.
- **Coloring** — Change the color scheme.
- **Width** — Adjust the line width.
- **Split interval** — Modify the split interval.

Learn more:  
[Track Appearance Settings](https://osmand.net/docs/user/map/tracks/appearance)


## Expanded Icon Options for Favorites

![Icon Options for Favorites](../../blog/2025-04-15-ios-5-0/img/icons_favorites.png)

In *OsmAnd 5.0* for iOS, you can choose icons from all **POI categories** for your **Favorites**. The added full icon library allows you to search and select icons using the **Сustom POI search**, making it easier to organize and personalize your saved locations.

Key features:

- **Choose from all POI icons** — Select from a wide range of icons available in all **POI categories** to identify specific places on the map.
- **Search for icons** - Quickly find the perfect icon for your Favorites using the **Custom POI Search** feature.

Learn more:  
[Customize Favorites](https://osmand.net/docs/user/personal/favorites/#favorite-icons)


## Reset Option for the Average Speed Widget

![Reset Option for the Average Speed Widget](../../blog/2025-04-15-ios-5-0/img/reset_average_speed.png)

You can now **reset the average speed** directly from the *widget’s context menu*. This update adds a **Reset** action, allowing you to start fresh measurements without restarting navigation.  

What’s new:

- **Context menu option** to reset average speed via *long tap* on the widget on the map screen.  
- **Reset action added to the widget settings** in the *Configure Screen* menu for quick access.  

Learn more:  
[Average Speed Widget](https://osmand.net/docs/user/widgets/info-widgets/#average-speed)
[Configure Screen](https://osmand.net/docs/user/widgets/configure-screen#widget-settings)


## Flexible Appearance Settings for Favorite Groups

![Flexible Appearance Settings for Favorite Groups](../../blog/2025-04-15-ios-5-0/img/favorite_add_new_group_3_ios.png)

In this release, you can **separately customize** the *icon, color*, and *shape* for each group of favorites without resetting all attributes. And then override the settings for existing points in the folder, only new favorites, or apply to all. This allows you to visually organize your saved locations more precisely.  

Learn more:  
[Change Group Appearance](https://osmand.net/docs/user/personal/favorites/#change-group-appearance)


## Prominent Peaks Now Discoverable  

Now you can **discover prominent peaks** directly on the map and through search. This update adds [notable mountain peaks](https://en.wikipedia.org/wiki/Ultra-prominent_peak) to the basemap, allowing you to easily find their names, elevations, and additional details through the map's context menu or search functionality.

Simply tap on the *peak icons* on the map, or use the *Search → Mountain Peaks* to quickly locate and explore key mountain summits.

Learn more:  
[Map Context Menu](https://osmand.net/docs/user/map/map-context-menu)


## Polygon Selection for Nearby Areas

![Poligon info](../../blog/2025-04-15-ios-5-0/img/areas_info_ios.png)

The **Polygon Information** feature has been enhanced in OsmAnd for iOS, providing easier access to data about surrounding areas directly from the map.  

Now, with a **long tap** the map or a **single tap** a POI, you can access detailed information about nearby polygons. This feature makes it quick and convenient to identify geographic or administrative areas around you.  

What’s new:

- **View polygon details** — Easily access information about nearby areas from the map context menu, including their *type* and *name*.  
- **Sorted by size** — Polygons are sorted by *size* from *smallest to largest* for better organization.

To access:  
*Map Context menu → Details → Within*.

Learn more:  
[Map Context menu - polygon information](https://osmand.net/docs/user/map/map-context-menu#polygon-information)


## CarPlay Search: Select Buildings

![CarPlay Search](../../blog/2025-04-15-ios-5-0/img/car-play-search(1).png)

The **CarPlay Search** feature now prioritizes streets and building numbers when searching for addresses, improving navigation.

Key features:

- **Streets and buildings first** - Streets and building numbers appear first when searching for an address. This ensures that relevant address details are displayed before other locations like roads or stations.
- **Search flow by city and street** — When searching for a city, streets within the city show first, followed by building numbers for those streets.
- **Optimized for navigation** - This change improves the navigation process by prioritizing address-related information.

Learn more:  
[CarPlay Search](https://osmand.net/docs/user/navigation/car-play#search)  
[Address Search Guide](https://osmand.net/docs/user/search/search-address)


## Full-Screen Wikimedia Gallery Viewer

![Gallery](../../blog/2025-04-15-ios-5-0/img/gallery_ios.png)


Introducing a full-screen gallery viewer for Wikimedia images.  

Learn more:  
[Map Context menu](https://osmand.net/docs/user/map/map-context-menu#online-photos).



## Optional updates

- Added support for [Vietnamese and Hebrew](https://osmand.net/docs/user/navigation/guidance/voice-navigation#voice-prompt-language) Text-to-Speech (TTS) for navigation.
- Fixed issues:  
  - The UTM coordinate input sequence. - https://github.com/osmandapp/OsmAnd-iOS/issues/4333 
  - An issue with track waypoint colors. - https://github.com/osmandapp/OsmAnd-iOS/issues/4293 
  - Fixed the missing "Download all" button for Terrain maps. - https://github.com/osmandapp/OsmAnd-iOS/issues/4155
  - An issue where popular articles were sometimes missing in Travel Guides. - https://github.com/osmandapp/OsmAnd-iOS/issues/4370
  - The *Battery Level* widget is displayed incorrectly. - https://github.com/osmandapp/OsmAnd-iOS/issues/4145

-->
