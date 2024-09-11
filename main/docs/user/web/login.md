---
sidebar_position: 1
title:  Login / Signup
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

<InfoIncompleteArticle/>



:::info
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**   

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::

## Overview

The [OsmAnd Map Portal](https://osmand.net/map) is a browser-based service provided by OsmAnd, allowing users to explore maps, manage their data, plan and create trips, or simply browse the map.

The Map Portal can be used without registration; however, some features are exclusively available for OsmAnd Pro and OsmAnd Start users:

Features | Versions
|--- |--- |
| [Navigation Route](./planner.md) | Free |
| [Create track](./planner.md) | Free |
| [Weather](./web-map.md) | Free |
| [Favorites](./web-map.md) | [Osmand Start](https://osmand.net/blog/start) or <ProFeature/> |
| [OsmAnd Cloud sync](./web-cloud.md) | [Osmand Start](https://osmand.net/blog/start) or <ProFeature/> |
| [Web Search](./web-search.md)|[Osmand Start](https://osmand.net/blog/start) or <ProFeature/>|
| [Tracks](./web-map.md) | <ProFeature/> |

## How to start

If you have [OsmAnd Pro](../personal/osmand-cloud.md#login) account or want to create [OsmAnd Start](../personal/osmand-cloud.md#osmand-start) account you need to do next steps:
- Go to the [OsmAnd Map Portal](https://osmand.net/map),
- Open _Account_ menu 
  - Log in (enter the email you used to create your account (Pro or Start))
  - Create account (OsmAnd Start)

## How to change language

If you want to change the display languge:

- The Web version of OsmAnd uses the language from the browser settings.  
- For Chrome, the priority is `chrome://settings/languages`.  
- You can change the system (menu) language manually by selecting  
    *Menu →* ⚙ *→ Turn off language*.

## Work with Account menu

After registering on the web, users can access their account information, download backups, log out, delete their account, or change their email address.

_General Menu → Account_

## URL schemes

For easy use of the OsmAnd application you can take advantage of direct links. These are special URLs that allow you to transfer location and contain detailed data about pins and tracks.  

These address strings can be copied and transferred using any data transfer medium supported by your device and used in the Android or iOS versions of OsmAnd.  

1. **URL with a pin on the map:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL without a pin on the map:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL with navigation:**

  https://osmand.net/map/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

Depending on the specified parameters, URL strings may contain:

- **latitude:** latitude value as a number.  
- **longitude:** longitude value as a number.  
- **start-finish:** for navigation.
- **profile:** for navigation.
- **zoom:** zoom level.


> *This article was last updated in September 2024*