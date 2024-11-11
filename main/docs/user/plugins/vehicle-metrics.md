---
sidebar_position: 16
title:  Vehicle Metrics
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

The **Vehicle Metrics plugin** allows users to read, record, and display real-time vehicle data on their screen using the OBD-II protocol. It offers insights into key engine metrics, fuel efficiency, speed, and other essential performance indicators, enabling users to monitor their vehicle’s health directly from their device.

## Setup

<InfoAndroidOnly/>

To begin using data from your OBD-II scanner, follow these steps:

1. [Enable](../plugins/index.md#enable--disable) the Vehicle Metrics plugin in the Plugins section of the main menu.
2. Connect the OBD-II scanner to your vehicle's OBD-II port.
3. (Optional) Add [Vehicle Metrics widgets](#widgets) to your screen for quick access to data.
4. To record Vehicle Metrics data as part of a track, use the [Trip recording plugin](#trip-recording).


### Pair ODB-II scanner

Ensure the OBD-II scanner is connected to your vehicle.

Navigate to the Vehicle Metrics menu or Vehicle Plugin settings to add the OBD-II device:

- _Menu → Plugins → Vehicle Metrics → Settings → Connect or +_
- _Menu → Vehicle Metrics → Settings → Connect or +_ (if you've added this section to the General menu)

Select the OBD-II device from the list and connect to it.

|  |  |
|--|--|
|![OBD connection](@site/static/img/plugins/obd/obd_connect.png)|![OBD connection](@site/static/img/plugins/obd/obd_connect_2.png)|


### Settings

_Menu → Plugins → Vehicle Metrics → OBD → Three dots_


- **Connect/Disconnect** – Connects or disconnects the OBD-II sensor.
- **Settings** – Opens the OBD-II settings screen, where you can connect or disconnect from the OBD-II sensor and view all available vehicle parameters.
- **Rename** – Allows you to rename the sensor.
- **Forget** – Removes the previously added OBD-II sensor from the list.

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_1.png)|


### Metrics list

List of vehicle metrics:

- Temperature:
  - **Intake Temperature** - Displays the temperature of the air entering the engine intake manifold.
  - **Ambient Temperature** - Displays the temperature outside the vehicle.
  - **Coolant Temperature** - Displays the temperature of the engine’s coolant.
  - **Engine Oil Temperature** - Displays the temperature of the engine oil.

- Engine:
  - **Engine Speed** - Displays the vehicle's tachometer RPM via the OBD sensor.
  - **Engine Runtime** - Shows how long the engine has been running since it was started.
  - **Calculated Engine Load** - Displays the percentage of the engine’s available power being used at a given moment.

- Fuel:
  - **Fuel Pressure** - Shows the pressure within the fuel system.
  - **Fuel Consumption** - Displays the vehicle's fuel consumption rate based on calculations.
  - **Remaining Fuel** - Shows the vehicle's fuel level via the OBD sensor.

- Other:
  - **Battery Level** - Shows the voltage level of the vehicle's battery.
  - **Vehicle Speed** - Displays speed from the Vehicle Speed Sensor (VSS).
  - **Throttle Position** - Displays the angle of the throttle plate in the throttle body.
  - **VIN** - A 17-character identifier (digits and capital letters) unique to the vehicle.



## Trip Recording

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

Data from a connected OBD-II sensor can be added to the GPX file using the [Trip recording plugin](../plugins/trip-recording.md#recording-settings).  

- only metrics which were added [to widgets](#widgets) can be recorded to GPX file.
  

:::note
OsmAnd uses custom tag names for vehicle metrics in [**track recording**](../plugins/trip-recording.md#recorded-gpx-file), such as `vm_eotemp` (Engine Oil Temperature), `vm_fpress` (Fuel Pressure), and `vm_espeed` (Engine Speed).
:::


## Widgets

_Menu → Configure screen → Widgets → Left/Right/Top/Bottom panels → [Vehicle Metrics](../widgets/info-widgets.md#vehicle-metrics-widgets) _

List of availabe widgets is [here](#metrics-list) (except "VIN").

[Vehicle Metrics widgets](../widgets/info-widgets.md#vehicle-metrics-widgets) is automatically added to the widget list when you enable the Vehicle Metrics plugin. Before starting your trip, ensure these widgets are visible on your screen. If they are not, add them through the [Configure Screen](../widgets/configure-screen.md) menu. Vehicle Metrics widgets provide real-time tracking of data from your connected OBD-II sensor, allowing you to monitor essential metrics seamlessly during your journey.

![OBD settings](@site/static/img/plugins/obd/obd_widget_1.png) ![OBD settings](@site/static/img/plugins/obd/obd_widget.png)

### Widgets Settings

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="obd_widget_group"/> → ⚙️ or <Translate android="true" ids="shared_string_settings"/>*

Some Vehicle Metrics widgets offer a display mode option: "Instant" or "Average":
- Instant - Displays current, real-time parameters.
- Average - Displays averaged data over a selected interval (from 15 seconds to 60 minutes).

## Related articles

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *This article was last updated in October 2024*
