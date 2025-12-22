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
- **Vehicle parameters** — available for vehicle-based profiles. Lets you specify vehicle constraints (such as dimensions/weight), which can influence routing on restricted roads.

![Web Navigation](@site/static/img/web/navigation_settings.png) ![Web Navigation](@site/static/img/web/navigation_settings_2.png)


## Related Articles {#related-articles}

- [Route Preparation](../navigation/setup/route-navigation.md)
- [Navigation Settings](../navigation/guidance/navigation-settings.md)
- [Plan Route](../web/planner.md)