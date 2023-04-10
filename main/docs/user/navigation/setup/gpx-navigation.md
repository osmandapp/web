---
sidebar_position: 2
title:  Navigate by track
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

The navigation by track (GPX) allows you to follow by chosen making or recorded track.

![Navigation by track screen Android](@site/static/img/navigation/gpx/navigation_gpx_android.png) ![Navigation by track screen iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

## Select track to navigate

To select track ...:
- Import track -> Link
- Create track with ["Plan route" tool](../../plan-route/create-route.md).
- Create route -> Save (Link Route details)
- Get track from other websites, for example https://www.openstreetmap.org/traces.

To start the navigation, you need to use [the navigation button](../../widgets/map-buttons.md#directions) on the map screen. Or choose navigation option in the main menu:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,follow_track"/>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,routing_settings,shared_string_settings,gpx_navigation"/>

or by choosing [displayed track](./route-navigation.md#displayed-tracks) in Navigation menu.


### Choose segments

If you track consists of multiple segments or tracks, you can select specific segment to navigate or whole gpx-track file. As of now you can select a full track if it consists of multiple segments, so you need to modify the original file.

## User Start / finish  points

You can specify start and finish points that are different from your GPX track. <Translate android="true" ids="nav_type_hint"/> will be used as routing profile to navigate from your start point to a start or nearest GPX track point.


## Follow track menu

![Navigation by track screen Android](@site/static/img/navigation/gpx/navigation_gpx_follow_track_android.png) ![Navigation by track screen iOS](@site/static/img/navigation/gpx/navigation_gpx_follow_track_ios.png)

- &nbsp;Track name and track info - clicking to it opens the track in "Plan route" tool.
- &nbsp;<Translate android="true" ids="select_another_track"/> - start navigation on another route.
- &nbsp;<Translate android="true" ids="gpx_option_reverse_route"/> - change the direction of movement along the track in the opposite direction.
- &nbsp;<Translate android="true" ids="pass_whole_track_descr"/> - <Translate android="true" ids="start_of_the_track"/> or <Translate android="true" ids="nearest_point"/> of the track.
- &nbsp;<Translate android="true" ids="nav_type_hint"/> - <Translate android="true" ids="routing_profile_straightline"/> or chosen [navigation profile](../../personal/profiles.md#navigation-settings).

### Attach to roads

- Route details
- Full Voice instructions

In future link to Plan Route.

## Guidance

Navigation by GPX track provides same voice instructions (link) as navigation by route in OsmAnd. Though few turns or roundabouts might be misinterpreted cause there is no information about road intersections inside GPX except the OsmAnd created GPX files. In order to fix those issues you need to use **Attach to roads** function. 

### Recalculate (Off track)

Additional setting compare to navigation by route.
