---
sidebar_position: 8
title:  Straight line routing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>

## Overview

Unlike traditional routing algorithms, which use roads, trails, or other predefined routes, straight line routing calculates the shortest distance between two points on the map as a straight line. This feature can be useful for hikers, backpackers, and other outdoor enthusiasts who want to navigate off-trail or explore remote areas where traditional routes may not be available. Light aircraft pilots can also use this feature in their daily routine.  

## Features

It's important to note that straight line routing does not take into account any obstacles or barriers that may be present in the terrain, such as mountains, rivers, or dense forests. It also does not provide any information about the quality of the terrain, the difficulty level of the route, or any other relevant factors that may affect the safety or feasibility of the route.  

## Straight line

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>(<Translate android="true" ids="app_mode_boat"/>) → <Translate android="true" ids="routing_settings_2,nav_type_hint,routing_profile_straightline"/>*
- *<Translate ios="true" ids="menu,sett_settings,app_profiles"/>(<Translate ios="true" ids="app_mode_boat"/>) → <Translate ios="true" ids="sett_settings,routing_settings_2,nav_type_title,nav_type_straight_line"/>*  

There is also a new setting to specify at which distance of user's location from route to start recalculation.
The route will be recalculated if the distance from the route to the current location is more than selected value.
Next, in case if you deviate from the route during the navigation, this setting builds the shortest path from your current position to the calculated route with the maximum angle. In other words, if the angle is higher than the one set by the user, OsmAnd calculates the next point of the route to build an additional route segment, so the angle will be valid.

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>(<Translate android="true" ids="app_mode_boat"/>) → <Translate android="true" ids="routing_settings_2,route_parameters,route_recalculation_dist_title"/> and <Translate android="true" ids="recalc_angle_dialog_title"/>*
- *<Translate ios="true" ids="menu,sett_settings,app_profiles"/>(<Translate ios="true" ids="app_mode_boat"/>) → <Translate ios="true" ids="sett_settings,routing_settings_2,route_parameters,recalculate_route"/> and <Translate android="true" ids="recalc_angle_dialog_title"/>*  

![Streaight-line Navigation type Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)

:::note
Professional sailors are required to have official maps, but this extension can help you a lot on a small voyage or be a supplement to the official nautical charts.
:::

