---
sidebar_position: 16
title:  Vehicle Metrics
unlisted: true
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

## Overview

:::tip NOTE
The Vehicle Metrics plugin is a [paid feature](../purchases/index.md) of the OsmAnd app.  
:::

The **Vehicle Metrics plugin** enables you to read, record, and display real-time vehicle data on the screen using the OBD-II protocol. This plugin provides insights into various engine metrics, fuel efficiency, speed, and other critical performance indicators, helping users monitor their vehicle’s health directly from their device.

## Setup

<InfoAndroidOnly/>

To start using data from external sensors, follow these steps:

1. [Enable](../plugins/index.md#enable--disable) the Vehicle Metrics plugin in the Plugins section of the main menu.
2. Connect the OBD-II scanner to your vehicle's OBD-II port.
3. If desired, add [Vehicle Metrics widgets](#widgets) to your screen for easy access to data.
4. Data from Vehicle Metrics can be recorded as part of a track using the [Trip recording plugin](#trip-recording).


### Pair ODB-II scanner

Ensure the OBD-II scanner is connected to the vehicle. Then, go to the Vehicle Metrics menu or Vehicle Plugin settings and add the OBD-II device:

- _Menu → Plugins → Vehicle Metrics → Settings → Connect or +_
- _Menu → Vehicle Metrics → Settings → Connect or +_ (if you added this section to the General menu)

Select the OBD-II device from the list and connect to it.

|  |  |
|--|--|
|![OBD connection](@site/static/img/plugins/obd/obd_connect.png)|![OBD connection](@site/static/img/plugins/obd/obd_connect_2.png)|


### Settings

- _Menu → Plugins → Vehicle Metrics → OBD → Three dots_

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_1.png)|

- _Connect/Disconnect_
- _Settings_
- _Rename_
- _Forget_

### Vehicle Metrics

List of visible vehicle metrics

|Metrics Group |    Supported data     | Description |
|-----------|-----------------------|-----------------------|
|Temperature|                       |                      |
|           | Intake temperature    |                      |
|           | Ambient temperature   |                      |
|           | Coolant temperature   |                      |
|           | Engine Oil Temperature|                      |
| Engine    |                       |                      |
|           | Engine speed          |                      |
|           | Engine Runtime        |                      |
|           | Calculated Engine Load|                      |
| Fuel      |                       |                      |
|           |   Fuel pressure       |                      |
|           |   Fuel consumption    |                      |
|           |   Remaining fuel      |                      |
| Other     |                       |                      |
|           |     Battery level     |                      |
|           |     Vehicle speed     |                      |
|           |     Throttle Position |                      |
|           |     VIN               |                      |

## Trip Recording

### Data Analyze

## Widgets

_Menu → Configure screen → Widgets → Left/Right/Top/Bottom panels → Vehicle Metrics_

![OBD settings](@site/static/img/plugins/obd/obd_widget.png)

### Widgets Settings


## Related articles

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *This article was last updated in October 2024*
