---
sidebar_position: 8
sidebar_label:  Navigation
title: Navigation on the Web
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

Use **Navigation on the Web** to build a route on the map and preview turn-by-turn guidance. It calculates a route for the selected travel mode, shows the expected distance and time, and lets you check elevation changes and upcoming turns. You can fine-tune the route in Navigation settings (for example, by allowing or avoiding certain road types or using vehicle parameters) and use multiple route points when needed.


## Start a Route {#start-a-route}

In the empty state, Navigation prompts you to add route points: *Click on the map to set Start and Destination points*.

Route points can be provided from the Route panel. When you select **Set start point** or **Set destination**, the field shows suggestions such as *Current location* and previously used points from history. You can remove saved suggestions using *Clear history*.

Navigation follows a simple flow: the first point becomes the Start, and the next point becomes the Destination. As soon as both points are set, the route is calculated and displayed on the map.

![Web Navigation](@site/static/img/web/navigation_start.png)

### Manage Route Points {#manage-route-points}

You can expand a route beyond Start → Destination by adding intermediate points. Use the plus (+) button next to the points list to add an intermediate point (a new point is inserted above the Destination). Intermediate points can be removed using the minus (–) button.

Swap Start and Destination — swaps the Start and Destination while keeping intermediate points unchanged. The action is marked with an icon showing two arrows in opposite directions.

![Web Navigation](@site/static/img/web/navigation_points.png)


## Routing Profile {#routing-profile}

At the top of the Route panel, you can choose a routing profile for your route. A set of commonly used profiles is shown as four icons. To access more options, open the three-dots menu next to the profile icons. It expands the full list of available profiles.

When you switch the profile, Navigation updates the route to match the selected travel mode.

![Web Navigation](@site/static/img/web/navigation_profile.png)


## Navigation Settings {#navigation-settings}

To adjust how routes are calculated, open Settings using the gear icon in the Route panel. Settings are grouped into sections that you can expand/collapse. The set of sections and options depends on the selected routing profile, so you’ll see different parameters for different travel modes.

Typical sections include:

- **General** — profile-specific options (for example, in the car profile you can see toggles like *Fuel-efficient way* and *Goods delivery*).
- **Allow** — options that permit specific road or path types when routing .
- **Avoid** — options that exclude certain road types or situations from the route (for example, avoiding toll roads, ferries, motorways, tunnels, etc.).
- **[Vehicle parameters](../navigation/guidance/vehicle-parameters.md)** — available for vehicle-based profiles. Lets you specify vehicle constraints (such as dimensions/weight), which can influence routing on restricted roads.

![Web Navigation](@site/static/img/web/navigation_settings.png) ![Web Navigation](@site/static/img/web/navigation_settings_2.png)


## Attaching Track {#attaching-track}

The **Attach to roads** block lets you use an existing GPX track as the basis for navigation. OsmAnd Web matches the track to nearby roads to provide turn-by-turn guidance.

When you click Select track, the browser opens a file picker where you can choose a .gpx file from your computer. After you select a track:
- The track is displayed on the map and used to calculate the route.
- Route summary (distance and time) is shown in the Route panel.
- The selected file appears under Selected track (with the track’s filename).
- You can remove the attached track using the minus (–) button next to Selected track.


## Route Details {#route-details}

![Web Navigation](@site/static/img/web/navigation_info.png) ![Web Navigation](@site/static/img/web/navigation_turns.png)

When a route is calculated, the panel shows a basic summary (distance, time, uphill/downhill) and a **Details** button. Use Details to open the route view with two tabs: Info and Turns.

Info summarizes the route and elevation data:
- **Points** — the number of route points used to build the route.
- **Route** — distance and time.
- **Uphill/Downhill** — total ascent and descent.
- **Elevation (min/avg/max)** — elevation statistics for the route.
- **Elevation (Satellite)** — Recalculate to rebuild elevation using satellite data (if available).

Below the summary, the elevation chart helps you inspect the route profile. You can toggle Elevation and Slope, and use the slider under the chart to focus on a specific part of the route.

Use Turns for turn-by-turn guidance. The route is also marked with orange circles along the line. Click a circle to open a pop-up with the corresponding navigation instruction. The pop-up can also include:
- Avoid — avoids that specific segment.
- Way ID — a link to the underlying OSM way for that part of the route.

You can fine-tune the route directly on the map by dragging route markers to a different place. When you click and drag a marker to another road (or to a nearby location) and then release it:
- OsmAnd Web recalculates the route to pass through the new position.
- The moved marker is converted into a new intermediate point.
- The new intermediate point appears in the Route panel as an additional point inserted above the Destination, and the route summary  updates accordingly.
- You can manage the added via point the same way as other [intermediate points](#manage-route-points).

![Web Navigation](@site/static/img/web/navigation_on_map.png)

### Download and Save {#download-and-save}

Use *Download* to export the route as a track. The download dialog offers two options:
**Full track data** — includes full data, including navigation instructions.
**Simplified track** — a lighter version that’s more suitable for use with other apps.

If you plan to open the GPX in third-party apps, choose Simplified track for better compatibility. This helps avoid cases when another app may display an incorrect segment after import.

What’s the difference:
- Full track data may include route/navigation information in addition to the track geometry (useful if you want to keep navigation instructions or re-edit the route in OsmAnd).
- Simplified track exports a cleaner GPX intended for other apps by removing route/navigation data and leaving only the track shape. Waypoints are preserved when exporting a simplified track.

You can save the route as a track using *Save to Cloud / Upload to OsmAnd Cloud*. This opens a dialog where you can confirm saving to cloud tracks, edit the Name, optionally choose a Folder, then Save or Cancel.

![Web Navigation](@site/static/img/web/download_options.png)

### Share a Route {#share-a-route}

To share the route, copy the URL. Example: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Related Articles {#related-articles}

- [Route Preparation](../navigation/setup/route-navigation.md)
- [Navigation Settings](../navigation/guidance/navigation-settings.md)
- [Vehicle Parameters](../navigation/guidance/vehicle-parameters.md)
- [Plan Route](../web/planner.md)