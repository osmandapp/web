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

<InfoIncompleteArticle/>


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


## Create Track and Local Files {#create-track-and-local-files}

OsmAnd Web's [**Plan route**](../plan-route/create-route.md) tool allows you to create and edit tracks similarly to the mobile app. Here's how you can create and manage tracks:


***Creating a new route:***

- *Right-click* on the map and select **Create New Route**.
- Alternatively, use the **Create Track** button in the *Local* menu (located on the right side with the *Pencil* and *Upload* buttons).


***Managing tracks:***

- **Select Navigation Profile**. Choose a profile (e.g., hiking, driving) for specific route sections (*New segments*) or for the entire route (*All segments*).
- **Add Waypoints**. Click on the map to add new points.
- **Save the Route**. Save your route for future use.
- **View Route Details**. Access detailed track information, including length, duration, and terrain.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route.png)


***Importing and creating tracks:***

- **Import Track**. You can upload any GPX file to the **Local** section by visiting [osmand.net/map](https://osmand.net/map).
- **Create Track**. Manually create a new track by selecting waypoints.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route_2.png)


***Local track actions and information:***

The **Local Track** menu provides three panels for editing: **Info**, **Track**, and **Waypoints**.

**Info Panel**:

- *Save to Cloud*. Save your track to OsmAnd Cloud for cross-device access.
- *Add description*. Add notes about the track.
- *Rename*. Change the track name.
- *Recalculate*. Add or update elevation data.
- *Elevation*. View the elevation profile.
- *Speed graph*. Display speed data across the track.
- *Slope graph*. Show slope changes along the route.  
- *Road details*. View detailed information such as road type, surface, and steepness.
- *Download GPX*. Export the track as a GPX file ([Pro feature](../purchases/index.md)).
- *Close Track*. Close the track editing view.
- *Delete Track*. Permanently delete the track.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route_3.png)

**Track Panel**:

- View and edit track points.
- Reorder or delete points as needed.

**Waypoints Panel**:

- View and manage track waypoints.
- Toggle the visibility of waypoints on the map.
- Delete waypoints individually if necessary.

**Turns Panel**:

- View detailed information about turns along the track.

  ![OsmAnd Web Create Track](@site/static/img/web/create_route_1.png)


***Additional features:***

- **Sync with app**. Save routes to OsmAnd Cloud and access them on your mobile app.
- **Custom route profiles**. Adjust profiles to suit different activities, such as cycling or hiking.
- **Shareable routes**. Copy and share route URLs for collaborative planning.


