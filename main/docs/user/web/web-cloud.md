---
sidebar_position: 4
sidebar_label:  OsmAnd Cloud
title: OsmAnd Cloud on the Website
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

:::info
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::

The [OsmAnd Map Portal](https://osmand.net/map) is a browser-based service provided by OsmAnd, allowing users to explore maps, manage their data, plan and create trips, or simply browse the map.

#### Subscription Accesses

The Map Portal can be used without registration; however, some features are exclusively available for OsmAnd Pro and OsmAnd Start users:

| Features | Versions |
|--- |--- |
| [Navigation Route](./planner.md) | Free |
| [Create track](./planner.md) | Free |
| [Weather](./web-map.md) | Free |
| [Favorites](./web-map.md) | [Osmand Start](https://osmand.net/blog/start) or <ProFeature/> |
| [OsmAnd Cloud sync](./web-cloud.md) | [Osmand Start](https://osmand.net/blog/start) or <ProFeature/> |
| [Web Search](./web-search.md)|[Osmand Start](https://osmand.net/blog/start) or <ProFeature/>|
| [Tracks](./web-map.md) | <ProFeature/> |


## How to Start

If you have [OsmAnd Pro](../personal/osmand-cloud.md#login) account or want to create [OsmAnd Start](../personal/osmand-cloud.md#osmand-start) account you need to do next steps:

- Go to the [*OsmAnd Map Portal*](https://osmand.net/map).
- Open **Account** menu.
  - *Log in*. Enter the email you used to create your account. For Pro or Start subscriptions.
  - *Create account*. For OsmAnd Start.


## How to Change Language

If you want to change the display languge:

- The Web version of OsmAnd uses the language from the browser settings.  
- For Chrome, the priority is `chrome://settings/languages`.  
- You can change the system (menu) language manually by selecting:  
    *Menu →* ⚙ *→ Turn off language*.


## Managing Account

*General Menu → Account*

After registering on the web, users can access their account information, download backups, log out, delete their account, or change their email address.

#### Access Account

#### Backups

#### Log out and Delete

#### Change Email Address


## OsmAnd Pro and OsmAnd Start Sync

- **OsmAnd Pro** is a [cross-platform](../troubleshooting/setup.md#cross-platform) paid subscription. 
- **OsmAnd Start** is a [free OsmAnd Cloud registration](https://osmand.net/blog/start).

The cross-platform capability allows you to use OsmAnd Pro on all platforms *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))*. To do this you need to:

1. Subscribe to **OsmAnd Pro**. Read more about how to do this for [Android here](../purchases/android.md#how-to-buy), and for [iOS here](../purchases/ios.md#how-to-buy).
2. How to create **OsmAnd Start** account read more [here](https://osmand.net/blog/start#how-to-create-an-account).
3. Register your [Pro or Start account](../troubleshooting/setup.md#cross-platform) on the OsmAnd server inside OsmAnd app.
4. The registered email will be your login to activate OsmAnd Pro on the web platform. At first, time needed to choose a password for future entering the web portal (please, use the instruction on the web portal).

- Enter your *email* and *password* for [osmand.net/map](https://osmand.net/map/).

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)  

- Your data, such as tracks (OsmAnd Pro) and favorites(OsmAnd Pro and OsmAnd Start), will appear in the menu after you log in. They are available for display on the map. But you need [to sync this data](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) from your devices.

![View OsmAnd Web data](@site/static/img/web/web_data.png)  

- To *DOWNLOAD BACKUP* from [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), click the login field. On the login field you can see files info (total files number, total files size, cloud storage used) and account info (subscription type, start time and expire time of your subscription).

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)  

Choose needed files for downloading, ZIP or OSF format of downloaded files and click *DOWNLOAD BACKUP* button:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_1.png)  

There is also a button to *logout* of the account.  

- *LOGOUT*, *DELETE YOUR ACCOUNT* or *Change email* you find on the login field too. For opening *DELETE YOUR ACCOUNT* or *Change email* you need to click *Dangerous area*.

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_2.png)  


## Tracks

It's a paid feature <ProFeature/>. At first you need to loggin your OsmAnd Pro:

![Track loggin](@site/static/img/web/track_loggin.png)

For Track section:

- Show tracks from [OsmAnd Cloud](#users-tracks-pro).
- Adding tracks on the map (**Visible on map** folder).
- Looking all tracks info and graph
- Modify tracks and add it to Cloud.
- Download and delete tracks.
- Create new folders or delete it.
- Download folders as OSF or OBF collection.


### Visible on the Map

Here there is a list of visible tracks on the map.

Switch on / off tracks for showing or not its on the map.

![Visible on the map](@site/static/img/web/visible.png)


### Track Folder Menu

Click to the *Tree points* **⋮** button for open *Track Folder* menu. Here you can Download all tracks from chosen folder as:

- Download as OSF
- Download as OBF Collection:
  You can get OBF map from this data: [OBF file](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) or [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).

  [OBF file](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/):

  You can download offline map OBF (OsmAnd Binary Format) and open it with OsmAnd on device, it's suitable to display large quantity of tracks will be visible on the map.

  [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes):

  Also You can import map of tracks as Travel book which will allow you also to select a specific track on the map and use it as normal GPX. Travel book also supports features such as displaying tracks as points, filtering tracks by activity type and filtering waypoints.

- Rename chosen folder.
- Delete chosen folder.

![Track folder menu](@site/static/img/web/collection.png)


### Cloud Tracks

GPX tracks that you have in OsmAnd Cloud will be available for display and editing after login. Only for **Pro users** <ProFeature/>.

The following features are available after choosin cloud track:

- Information screens:
  - *Information* - displaying track data.
  - *Elevation* - graph of elevation.
  - *Speed* - speed graph.
  - *Slope* - slope graph.
  - *Settings* - list of navigation profiles for the *Create route* tool.  

- Action buttons:
  - *Edit track* - adding cloud track to local for editing (*Edit locality* button on the panel).
  - *Download GPX* - downloads the track to the PC.
  - *Recalculate* Elevation (Satellite) - displays the elevation graph of the selected track.
  - *Delete Track* - deletes the track.
  - *Close track* - close the track.

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track.png)


## Favorites

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites.png)

After registering an OsmAnd Pro or OsmAnd Start, the user's Favorites are displayed in the Favorites menu.  
The following actions are available:

- *Show on map* - show favorites points from the chosen folder on the map.
- *Rename* - name and description of favorite folder.
- *Download* - download the chosen favorite folder.
- *Delete* - delete the chosen favorite folder.

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites.png)


### Add / Edit Favorite

![OsmAnd Web Favorites add](@site/static/img/web/web_favorites_add.png)

[To add](../personal/favorites.md#edit) a new favorite point, right-click on the screen. To start editing, click on the favorite point, the edit menu screen looks the same as [the menu in OsmAnd app](../personal/favorites.md#create).  


<!--
## Map style

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->

## Related Articles

> *This article was last updated in September 2024*


