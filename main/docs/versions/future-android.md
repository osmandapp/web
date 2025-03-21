---
sidebar_position: 4
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


# Android 5.0 (beta)

Android 5.0 is the latest release that introduces many new features and improvements to the OsmAnd app. This article describes all the key updates that represent meaningful changes for our users.

# Join Beta

OsmAnd releases several Ready-To-Use builds daily, allowing you to track new features and participate in the OsmAnd translation process. You can take part in testing the beta version of OsmAnd using Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>

## What's new

- [New main navigation widget combines turn arrow and navigation instructions](#new-route-guidance-widget)
- [Current route info widget: displays ETA, arrival time, and distance](#new-route-information-widget)
- [Crags and climbing areas on the map](#climbing-areas-and-crags)
- [Detailed information for linear objects](#detailed-information-for-linear-objects)
- [USA address search with TIGER data](#usa-address-search-with-tiger-data)
- [Changing UX for Intermediate destinations in Waypoints](#interactions-with-intermediate-destinations)
- [New option to select widget size for left and right panels](#resizable-widgets-for-side-panels)
- [Reset action for the Average speed widget](#reset-option-for-the-average-speed-widget)
- [Added ability to change and set the default appearance for favorite groups](#flexible-appearance-settings-for-favorite-groups)
- [Added Coordinates Grid with geographical coordinates](#coordinates-grid-overlay)
- AIS Vessel Tracking Plugin: for nautical navigation — https://github.com/osmandapp/OsmAnd/issues/21559  
- redesign of the widget configuration screen — https://github.com/osmandapp/OsmAnd-Issues/issues/2525


- [Optional updates](#optional-updates). Additional updates and refinements for the release.

## What's new blog

• Clickable ski slopes, mtb trails / Select ski slopes and MTB trails on the map for detailed information - https://github.com/osmandapp/OsmAnd-Issues/issues/2846  

• All OSM routes, now searchable! Hiking, cycling, MTB, and more - https://github.com/osmandapp/OsmAnd/issues/16808    

<br/>

• Android Auto:

  - view ETA and distance to next waypoint - https://github.com/osmandapp/OsmAnd/issues/19095 
  - ??? (city names now appear in search results; https://github.com/osmandapp/OsmAnd-Issues/issues/2632)
  - show full destination name on route preview card - https://github.com/osmandapp/OsmAnd/issues/21098




• !!! Discover top-ranked POIs with the new Explore mode (Photos oh the map) — https://github.com/osmandapp/OsmAnd-Issues/issues/2662 

___

• Prominent peaks are now discoverable via map and search - https://github.com/osmandapp/OsmAnd-Issues/issues/2844
• Mountain peak heights in feet - https://github.com/osmandapp/OsmAnd/issues/7408

___

• ?? Added: Legend for routes (Configure map > Routes) - https://github.com/osmandapp/OsmAnd-Issues/issues/1249


<br/>


## New Route Guidance Widget

![Route Guidance Widget](../../blog/2025-03-11-android-5-0/img/route_guidance_widget.png)

The new **Route Guidance widget** combines essential navigation details into a single, compact display, providing **real-time navigation instructions**, helping you stay on track throughout your journey. These widgets are **active during navigation**, ensuring you never miss a turn.  

Key improvements:

- **All-in-one navigation view** — Integrates the *distance to the first and next turn, turn arrow, road name, road number with a shield, current street name, exit number*, and *lane information* in one widget.
- **Available for top and bottom widget panels.**

Find them in:  
*Menu → Configure screen → **Top panel / Bottom panel** → Route guidance: Next turn, Second next turn, Lanes*

Learn more:  
[Route Guidance Widget](https://osmand.net/docs/user/widgets/nav-widgets#route-guidance)


## New Route Information Widget

![Route Guidance Widget](../../blog/2025-03-11-android-5-0/img/route_guidance_widget.png)

The **Route Information widget** provides a clear overview of your journey by displaying **ETA (Estimated Time of Arrival), remaining travel time, and distance to the destination** in a compact format. Designed for real-time navigation, it ensures you have the most relevant travel details at a glance.  

Key improvements:

- **Customizable display** — Choose between *Estimated arrival time, Time to go, or Distance* as the primary view in **Default view settings**.  
- **Display priority settings** — Select between *Destination first (default)* or *Intermediate first* to prioritize the most relevant route information.  
- **Available for top and bottom widget panels** for flexible placement.  
- **Quick access to Start/Stop Navigation panel** — Tap the *arrow button* to open navigation controls.  

Find it in:  
*Menu → Configure screen → **Top panel / Bottom panel** → Route information*  

Learn more:  
[Navigation Points Widget](https://osmand.net/docs/user/widgets/nav-widgets#navigation-points)
[Start/Stop Navigation Panel](https://osmand.net/docs/user/navigation/setup/route-navigation#start--stop-navigation)


## Climbing Areas and Crags

![Map routes - Climbing Routes](../../blog/2025-03-11-android-5-0/img/map-routes-climbing-routes.png)

Now you can explore **climbing areas and crags** directly on the map. These locations appear as **POI markers**, providing essential details such as elevation, rock type, and the number of climbing routes.  

Use *Search → POI → Climbing* to quickly find climbing spots and plan your approach with OsmAnd’s navigation tools.  

For more details, visit:  
[Climbing routes on the map](https://osmand.net/docs/user/map/routes/#climbing-routes)  
[Climbing area and crag details](https://osmand.net/docs/user/map/map-context-menu/#climbing-area-and-crag-details)


## Detailed Information for Linear Objects

![Barrier icons](../../blog/2025-03-11-android-5-0/img/icons.png)

You can now interact with **barriers, steps, gates, benches, and other access-related icons** directly on the map. A simple tap on these objects opens a *context menu* with detailed information, such as the object type, name (if available), and address.  

This improvement provides *quick access to navigation-relevant data*, helping you better understand path restrictions and road attributes at a glance.  

Explore more:  
[Linear object details in the Map Context Menu](https://osmand.net/docs/user/map/map-context-menu/#linear-object)


## USA Address Search with TIGER Data

![TIGER Data](../../blog/2025-03-11-android-5-0/img/tiger_data.png)

Address search in the USA now uses **TIGER** (Topologically Integrated Geographic Encoding and Referencing) data, improving the accuracy of *street names, house numbers, and address formatting*. This update refines *geocoding algorithms*, ensuring better recognition of road names, abbreviations, and postal structures.  

Key improvements:

- **Expanded coverage** of rural and urban addresses.  
- **More precise house number placement** for improved routing.  
- **Better handling of alternative street names and abbreviations**.  

Learn more:  
[US address search and TIGER data – technical details](https://docs.osmand.net/docs/technical/algorithms/trace-address-search-issues/#us-address-search-and-tiger-data)  
[US address search – user guide](https://docs.osmand.net/docs/user/search/search-address/#us-address-search-and-tiger-data)


## Interactions with Intermediate Destinations

Managing **intermediate destinations** in waypoints is now more convenient. The update refines the **selection and modification** process, making adjustments faster and more intuitive.  

Key changes:

- **Simplified waypoint selection** when modifying a route.  
- **Consistent UI behavior** for better usability.  
- **Improved responsiveness** when interacting with waypoints.

Learn more:  
[Intermediate destinations – user guide](https://osmand.net/docs/user/navigation/setup/route-navigation#intermediate-destinations)


## Resizable Widgets for Side Panels  

You can now customize the **size of widgets** in the **left and right panels**, just like in the top and bottom ones. This update offers greater flexibility in **configuring the map screen**. Choose from **Small, Medium, or Large** sizes to customize your screen layout.

Key improvements:

- **Independent resizing** for left and right panels.  
- **Consistent widget scaling** across all panel positions.  
- **Optimized screen space** for navigation and stats.

Learn more:  
[Widget Settings](https://osmand.net/docs/user/widgets/configure-screen#widget-settings)


## Reset Option for the Average Speed Widget

![Reset Option for the Average Speed Widget](../../blog/2025-03-11-android-5-0/img/reset_average_speed.png)

You can now **reset the average speed** directly from the *widget’s context menu*. This update adds a **Reset** action, allowing you to start fresh measurements without restarting navigation.  

What’s new:

- **Context menu option** to reset average speed.  
- **Reset action added to widget settings** for quick access.  

Learn more:  
[Average Speed Widget](https://osmand.net/docs/user/widgets/info-widgets/#average-speed)


## Flexible Appearance Settings for Favorite Groups

![Flexible Appearance Settings for Favorite Groups](../../blog/2025-03-11-android-5-0/img/appearance_sett_favorites.png)

Now you can **separately customize** the *icon, color*, and *shape* for each group of favorites without resetting all attributes. And then override the settings for existing points in the folder, only new favorites, or apply to all. This allows you to visually organize your saved locations more precisely.  

Learn more:  
[Change Group Appearance](https://osmand.net/docs/user/personal/favorites/#change-group-appearance)


## Coordinates Grid Overlay

The **Coordinates Grid** feature allows you to overlay a grid with **geographical coordinates** on the map, providing a precise location reference for geospatial navigation.  

Key features:

- **Multiple coordinate formats** — Choose from DD°MM′SS″, DD.DDDDD°, DD°MM.MMM′, or `UTM`.  
- **Adjustable zoom levels** — Grid lines appear dynamically between *zoom levels 4 – 19*, adapting to the map scale.  
- Uses default coordinate settings from *Menu → Settings → App profiles → General settings → Units & formats*.  

Find it in: *Menu → Configure Map → Show → Coordinates Grid*  

Learn more:  
[Coordinates Grid](https://osmand.net/docs/user/map/vector-maps#coordinates-grid)  


___


## Optional updates

- Added [Hebrew TTS](https://osmand.net/docs/user/navigation/guidance/voice-navigation#voice-prompt-language) for navigation — https://github.com/osmandapp/OsmAnd/issues/21816 , https://github.com/osmandapp/OsmAnd-iOS/issues/4340, 

Fixed issues:

- Serbian Latin - https://github.com/osmandapp/OsmAnd/issues/21480
- OsmAnd Cloud progress doesn't finish with 100% - https://github.com/osmandapp/OsmAnd/issues/21741
- OsmAnd Cloud - cannot sync tracks (cloud>device) - https://github.com/osmandapp/OsmAnd/issues/22017
- Hide standard buttons - https://github.com/osmandapp/OsmAnd/issues/21369
- Quick action: Add track Waypoint bug - https://github.com/osmandapp/OsmAnd/issues/20102
- Crash tapping a POI with picture https://github.com/osmandapp/OsmAnd/issues/22033
- Avoid roads bug - https://github.com/osmandapp/OsmAnd/issues/21828
- Smart folders issues - https://github.com/osmandapp/OsmAnd-Issues/issues/2904
- Bug with Direct-to-point projection - https://github.com/osmandapp/OsmAnd/issues/21588

