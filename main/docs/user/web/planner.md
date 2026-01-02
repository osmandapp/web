---
sidebar_position: 9
sidebar_label:  Plan Route
title: Plan Route on the Website
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

<!--
<InfoIncompleteArticle/>
-->


## Overview {#overview}

The OsmAnd Web Route Planner allows you to create navigation routes, plan tracks, and manage local files directly from your browser. This web tool is useful for creating detailed travel routes that you can sync to your app or share with others.


<!--
## Navigation Route {#navigation-route}

To create a navigation route, follow these steps:

- **Right-click** on the map to add waypoints:

  - *Navigate from*. Set the starting point.
  - *Navigate to*. Set the destination.
  - *Navigate via*. Add intermediate points if needed.

- After setting the start and end points, the route will be displayed on the map.

- In the **Route** block:

  - Move the start and end points if needed.
  - Edit the waypoints and choose the desired route type (e.g., car, bicycle, walking).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Select the appropriate **Route Profile** for different navigation options.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Click on the orange circles along the route to view detailed navigation instructions.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- To share the route, copy the URL. Example: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

-->


## Create New Route {#create-new-route}

There are two ways to start a new route in Plan route. The first option is directly from the map: right-click anywhere on the map and select **Create new route**. The second option is from the left panel: click the **Create track** button.

Once the route is created, add points directly on the map. Each click places the next point, and the planner builds the route between points.

![OsmAnd Web Create New Route](@site/static/img/web/create_new_route.png)

### Import Track {#import-track}

If you already have a track file, you can import it into Plan route and continue working with it in the Web Planner. Click the **Import track** button and select a GPX file from your computer. After the upload, the track appears in your local list and opens in the planner, so you can review it on the map and proceed with editing and management in the track panels.

### Local Files {#local-files}

All routes and tracks you create or import in Plan route are added to the Local list in the left panel. This makes it easier to keep multiple GPX files in one place and switch between them while planning.

Each item in the list has a toggle that lets you quickly show or hide the track on the map. Select a track from the list to open it in the planner and continue working with it. 

![OsmAnd Web Create New Route](@site/static/img/web/local_files.png)


## Manage Track {#manage-track}

When you create or import a route in Plan route, a vertical track panel opens. Use this panel to change the routing profile and manage the route. Click the profile control to open the **Change profile** dialog, select the profile you need (for example, Car, Bicycle, or Pedestrian), and choose how to apply it: *Next segments* applies the profile only to new parts added from this point forward, while *All segments* recalculates the entire route with the selected profile.

From the track panel you can also perform common file actions. You can **Save to Cloud** to keep the route for later use, **Download GPX** to export it as a file, **Close track** to stop editing it, or **Delete track** to remove it from your local list. These actions are also available from the corresponding controls in the [Info panel](#info-panel).

![OsmAnd Web Manage Track](@site/static/img/web/manage_track.png) ![OsmAnd Web Manage Track](@site/static/img/web/change_profile.png)


## Track Details Panels {#track-details-panels}

The local track menu includes three panels: **Info**, **Track**, and **Waypoints**. Use them to view track information and manage route points and waypoints.

### Info Panel {#info-panel}

The Info panel summarizes the selected track and shows key route and elevation data. It includes a quick overview of the route statistics, plus charts and additional track analysis based on available map data.

The summary section shows:

- Points — the number of route points used to build the route.
- Distance — the total route length.
- Uphill / downhill — total ascent and total descent along the route.
- Elevation (min/avg/max) — elevation statistics for the route.
- If elevation data is missing or needs to be updated, use Elevation (Satellite) → recalculate to rebuild elevation using satellite data (when available).

Below the summary, the panel provides charts:

- Elevation — an elevation profile of the route.
- Slope — a slope graph showing gradient changes along the track.

For additional track details, open the analysis sections:

- Surface — shows surface types along the route based on OSM data.
- Smoothness — shows segment smoothness based on OSM tags.

Common track actions such as saving, downloading, closing, and deleting are also available in this panel.

![OsmAnd Web Info Panel](@site/static/img/web/info_panel.png) ![OsmAnd Web Manage Track](@site/static/img/web/info_panel_2.png)

### Track Panel {#track-panel}

The Track panel shows the list of route points used to build the track. Use it to review and edit the route structure: drag points to reorder them, remove points using the delete icon, or use Clear points to remove all points and start over.

![OsmAnd Web Track Panel](@site/static/img/web/track_panel.png)

### Waypoints Panel {#waypoints-panel}

The Waypoints panel is used to view and manage waypoints for the selected track. Waypoints can be added from the map context menu — right-click on the map and choose the option to **Add awaypoint**, then fill in the waypoint details (such as name, icon, and color) and save it.

In the Waypoints list, you can control whether waypoints are shown on the map and remove individual waypoints when needed. To remove all waypoints from the track at once, use *Clear all waypoints*.

![OsmAnd Web Waypoints Panel](@site/static/img/web/waypoints_panel.png)


## Related Article {#related-article}

- [Plan a Route](../plan-route/create-route.md)
- [Travel Guides](../plan-route/travel-guides.md)
- [Navigation](../web/web-navigation.md)
