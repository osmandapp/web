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

- _Connect/Disconnect_ - allows to connect or disconnect to OBD-II sensor.
- _Settings_ - opens OBD settings screen, where you can connect/disconnect to OBD-II sensor and look at all available vehicle parametes.
- _Rename_ - allows to rename sensor name.
- _Forget_ - allows to forget OBD-II sensor, which was added before.

### Metrics list

List of vehicle metrics

|Metrics Group |    Supported data     | Description |
|-----------|-----------------------|----------------------|
|Temperature|                       |                      |
|           | Intake Temperature    | Shows the temperature of the air entering the engine intake manifold.                     |
|           | Ambient Temperature   | Shows the temperature outside the vehicle.                     |
|           | Coolant Temperature   |Shows the temperature of the engine’s coolant                      |
|           | Engine Oil Temperature| Shows the temperature of the engine oil.                     |
| Engine    |                       |                      |
|           | Engine speed          | Shows vehicle tachometer RPM over OBD sensor                     |
|           | Engine Runtime        | Shows shows how long the engine has been running since it was started.                     |
|           | Calculated Engine Load| Shows the percentage of the engine’s available power being used at a given moment.                     |
| Fuel      |                       |                      |
|           |   Fuel Pressure       | Shows the pressure within the fuel system                     |
|           |   Fuel Consumption    |Shows vehicle fuel consumption rate based on calculations (l/h)                      |
|           |   Remaining Fuel      | Shows vehicle fuel level over OBD sensor                     |
| Other     |                       |                      |
|           |     Battery Level     | Shows the voltage level of the vehicle's battery                     |
|           |     Vehicle Speed     | Shows speed from the Vehicle Speed Sensor (VSS).                     |
|           |     Throttle Position | Shows the angle of the throttle plate in the throttle body.                     |
|           |     VIN               |  A VIN is composed of 17 characters (digits and capital letters) that act as a unique identifier for the vehicle.                    |

## Trip Recording

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

Data from connected OBD-II sensor can be added to the GPX file using the [Trip recording plugin](../plugins/trip-recording.md#recording-settings).  

- only metrics which were added [to widgets](#widgets) can be recorded to GPX file.
  

:::note
OsmAnd uses [**track recording**](../plugins/trip-recording.md#recorded-gpx-file) with own *tag names* for vehicle metrics: `vm_eotemp`, `vm_fpress`, `vm_espeed` ...
:::


## Widgets

_Menu → Configure screen → Widgets → Left/Right/Top/Bottom panels → Vehicle Metrics_

List of availabe widgets is [here](#metrics-list) (except "VIN").

![OBD settings](@site/static/img/plugins/obd/obd_widget.png)

### Widgets Settings

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="obd_widget_group"/> → ⚙️ or <Translate android="true" ids="shared_string_settings"/>*

Some widgets of Vehicle metrics have mode: "Instant" or "Average"
- Instant - shows parameters now.
- Average - shows average data with chosen interval (15 sec - 60 min)

## Related articles

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *This article was last updated in October 2024*
