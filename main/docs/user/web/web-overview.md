---
sidebar_position: 1
sidebar_label: Introduction
title: Introduction to Web Map Portal
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

The [**OsmAnd Map Portal**](https://osmand.net/map) is a browser-based extension of the OsmAnd mobile app. It allows users to view global maps, plan routes, simulate navigation, manage personal data, and access synced content from their devices via the cloud.

Designed as a cross-platform companion to OsmAnd for Android and iOS, the Web Portal helps users plan trips, analyze tracks, view terrain, and manage files using any desktop or tablet browser — without installing an app.

OsmAnd Web integrates tightly with the **OsmAnd Cloud** service, which enables syncing favorites, tracks, and backups across devices and platforms. Users with **OsmAnd Start** (free) or **OsmAnd Pro** (paid) accounts can take full advantage of this ecosystem by syncing data between mobile and web. You can find a detailed comparison of *Start* and *Pro* features in the [Subscription Access](#subscription-access) section below.

> **Note:** Even without logging in or verifying your account, you can still use several core Web Map Portal features, including: [Navigation Route](./planner.md), [Route Planner](./planner.md), [Weather overlays](./web-map.md#weather-on-the-web), and [Settings](#settings).

<!--
After the structure of this section is approved, some links should be updated.
-->

## Key Features {#key-features}

Web Portal offers the following main capabilities for working with maps and personal data in the browser: 

- [Map](./web-map.md) with global coverage and high-quality vector data.
- [Route planning](./planner.md) using foot, car, bicycle, and other profiles.
- [Navigation](./planner.md) preview with turn-by-turn instructions.
- [Search](./web-search.md) and [explore](./web-search.md#explore) nearby popular places.
- Display of [Favorites](./web-map.md#favorites-section), [Tracks](./web-map.md#tracks-section), and [POIs](./web-map.md#poi-overlay-section) on the map.
- [Weather overlays](./web-map.md#weather-on-the-web): wind, temperature, and pressure.
- [Terrain layers](./web-map.md#terrain-section): hillshade, slopes, and altitude view.
- [Track Analyzer](../web/web-userdata.mdx) for elevation and speed profiles.
- Full access to synced data via [OsmAnd Cloud](./web-cloud).
- File import/export support (GPX: tracks, favorites).
- Seamless integration with **OsmAnd Pro** and **OsmAnd Start**.

<!--
After the structure of this section is approved, some links should be updated.
-->


### Subscription Access {#subscription-accesses}

![Web Account](@site/static/img/web/web_start.png) ![Web Account](@site/static/img/web/web_pro.png)

Web Map Portal supports several access levels: without login, with OsmAnd Start, and with OsmAnd Pro. The table below summarizes which features are available at each level so you can quickly see what you already have and what becomes available with an account or an upgrade. This overview is intended to help you decide whether you need an account at all and, if you do, which option best matches how you use OsmAnd.

| Feature | Available In |
|--------|--------------|
| [Navigation Route](./planner.md) | Without Login |
| [Route Planner](./planner.md) | Without Login |
| [Weather Overlays](./web-map.md) | Without Login |
| [Settings](#settings) | Without Login |
| [Configure Map Menu](./web-map.md#configure-map-menu) ([POIs](./web-map.md#poi-overlay-section), [Favorites](./web-map.md#favorites-section), [Tracks](./web-map.md#tracks-section))| [OsmAnd Start](https://osmand.net/blog/start) or <ProFeature/> |
| [Configure Map Menu](./web-map.md#configure-map-menu) ([Terrain](./web-map.md#terrain-section))| <ProFeature/> |
| [OsmAnd Cloud Sync](./web-cloud.md) | [OsmAnd Start](https://osmand.net/blog/start) or <ProFeature/> |
| [Web Search, Popular Places](./web-search.md) | [OsmAnd Start](https://osmand.net/blog/start) or <ProFeature/> |
| [Tracks folders and Layer](./web-map.md) | <ProFeature/> |

<!--
After the structure of this section is approved, some links should be updated.
-->


## How to Start {#how-to-start}

To access the full features of the OsmAnd Web Portal, you need to log in with an OsmAnd Cloud account.

- If you already have an [**OsmAnd Pro**](../personal/osmand-cloud.md#login) subscription or want to create a free [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) account, follow these steps:

1. Go to the [**OsmAnd Map Portal**](https://osmand.net/map).
2. Open the **Account** menu:
   - **Log in**: Enter the email address linked to your Pro or Start subscription, or
   - **Create account**: Register for a free OsmAnd Start account. For a detailed step-by-step guide to creating a new account, see the [Sign Up / Login](./web-cloud) article.

![Web Account](@site/static/img/web/web_account.png)

<!--
After the structure of this section is approved, some links should be updated.
-->

## Settings {#settings}

### Language {#language}

To switch the interface language:

*Go to: Menu → ⚙ Settings → Display language*

![Web Language](@site/static/img/web/web_language.png)

### Units {#units}

*Go to: Menu → ⚙ Settings → Units of length*  
*Go to: Menu → ⚙ Settings → Unit of speed*

You can choose which units are used to display distance, elevation and speed on the map, in route details and in measurement tools. This helps you keep OsmAnd consistent with your usual habits or regional standards.

The **Units of length** option defines how horizontal distance and elevation are shown:
- Kilometers/meters.
- Miles/feet.
- Miles/meters.
- Miles/yards.
- Nautical miles/meters.
- Nautical miles/feet. 

For example, a distance of 10 km will be shown as about 6.21 mi if you choose one of the Miles/... options, or as about 5.40 nmi when Nautical miles/... is selected.

The **Unit of speed** option controls how current speed and speed limits are displayed:
- Kilometers per hour.
- Miles per hour.
- Meters per second.
- Minutes per mile.
- Minutes per kilometer.
- Nautical miles per hour (knots). 

For example, a speed of 90 km/h corresponds to 25 m/s or about 55.92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)

### OsmAnd Cloud {#osmand-cloud}

![Web Cloud](@site/static/img/web/web_without_acc.png) ![Web Cloud](@site/static/img/web/web_with_acc.png)

In the Web Map Portal, the *General settings* (Display language, Units of length, Unit of speed) are available for all users, whether you are signed in or not. Once you log in with your OsmAnd account, an additional OsmAnd Cloud section appears in the Settings panel. [OsmAnd Cloud](./web-cloud) connects the web map with your cloud backups so that you can manage data synchronized from your Android or iOS devices directly in the browser.

**Changes** option shows a chronological list of files stored in your OsmAnd Cloud account. Items are grouped by month and include the file name, the type of change (for example, added, modified or deleted), the time of the last update and the device that created it. For each entry, you can open the three-dot menu and choose *Download* to save the selected file to your computer, or *Delete*.

**Trash** option contains files that were deleted from OsmAnd Cloud. The list is also grouped by month and shows when each file was removed and from which device. Use the three-dot menu next to a file to *Download* a copy, *Restore from trash* (return the file to OsmAnd Cloud so it becomes available again in your data), or *Delete immediately* to remove it permanently. This helps prevent accidental data loss while still letting you free up cloud storage when you are sure a file is no longer needed. You can also clear all deleted items at once by clicking the Trash icon in the Trash panel header. This opens the **Empty trash** dialog, where you confirm deletion to permanently remove all files from Trash.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

<!--
After the structure of this section is approved, some links should be updated.
-->

## Related Articles {#related-articles}

- [First Steps](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Web Purchases](../purchases/web.md)
- [Cross-Platform Purchases](../purchases/cross.md)

