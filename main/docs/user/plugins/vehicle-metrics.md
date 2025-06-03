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

## Overview {#overview}

:::info Paid feature
The Vehicle Metrics plugin is a [paid feature](../purchases/index.md) of the OsmAnd app.  
:::

<InfoAndroidOnly/>

The **Vehicle Metrics plugin** enables real-time vehicle data monitoring via the OBD-II protocol. Users can track essential metrics such as engine performance, fuel efficiency, and speed, allowing for proactive vehicle maintenance and troubleshooting.  

OBD-II scanners are integral to modern automotive diagnostics. With real-time data streaming, users gain instantaneous insights into vehicle systems, facilitating preventive maintenance and reducing repair costs. These tools are vital for both personal use and professional automotive services.

![OBD settings](@site/static/img/plugins/obd/obd_overview_2.png)


## Required Setup Parameters {#required-setup-parameters}

To use data from an OBD-II scanner:

1. [Purchase](../purchases/) an **OsmAnd Pro subscription**. (*Vehicle speed* and *Engine speed* are free.)  
2. [Enable](../plugins/index.md#enable--disable) the Vehicle Metrics plugin in the Plugins section of the *Main Menu*.
3. **Turn on** Bluetooth on your device.
4. [Connect](#pair-odb-ii-scanner) the OBD-II scanner to your vehicle's port.
5. [Configure](#scanner-settings) the **scanner settings**.
6. [Add](#widgets) **Vehicle Metrics widgets** to for on-screen data (optional).
7. [Use](#trip-recording)the **Trip recording plugin** to record vehicle data.


### Pair ODB-II Scanner {#pair-odb-ii-scanner}

|  |  |
|--|--|
|![OBD connection](@site/static/img/plugins/obd/obd_connect.png)|![OBD connection](@site/static/img/plugins/obd/obd_connect_2.png)|

Connect the scanner to your vehicle’s port and pair it through the app:

- Navigate to *Menu → Plugins → Vehicle Metrics → Settings → Connect* or **+**.
- If Vehicle Metrics is in the *Main Menu*:  *Menu → Vehicle Metrics → Settings → Connect* or **+**.

Choose your OBD-II device from the list and establish the connection.


## Scanner Settings {#scanner-settings}

*Menu → Plugins → Vehicle Metrics → OBD → three-dot menu*

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_1.png)|

- **Connect / Disconnect**. Establishes or terminates the connection with the OBD-II sensor.
- **Settings**. Opens the OBD-II settings screen, allowing connection management and access to available vehicle parameters.
- **Rename**. Lets you assign a custom name to the sensor for easier identification.
- **Forget**. Removes the previously paired OBD-II sensor from the list, requiring re-pairing if needed later.


## Metrics List {#metrics-list}

Metrics are categorized for clarity. Advanced diagnostic tools enable preventive maintenance by interpreting these parameters:

*Temperature:*

- **Intake Temperature**. Displays the temperature of the air entering the intake manifold.
- **Ambient Temperature**. Monitors external conditions.
- **Coolant Temperature**. Tracks engine cooling efficiency.
- **Engine Oil Temperature**. Displays oil condition during operation.

*Engine:*

- **Engine Speed**. Monitors engine revolutions per minute (RPM).
- **Engine Runtime**. Tracks engine operation time.
- **Calculated Engine Load**. Indicates engine workload percentage.

*Fuel:*

- **Fuel Pressure**. Indicates the fuel system pressure.
- **Fuel Consumption**. Calculates the vehicle's fuel consumption.
- **Remaining Fuel**. Indicates the fuel level in the vehicle.

*Other:*

- **Battery Level**. Indicates the voltage level of the vehicle's battery.
- **Vehicle Speed**. Displays Vehicle Speed Sensor (VSS) data.
- **Throttle Position**. Determines engine air intake via throttle plate angle.  
  **VIN**. Displays the vehicle's 17-character identification number.


## Trip Recording {#trip-recording}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![OBD recording](@site/static/img/plugins/obd/obd_recording.png)| ![OBD recording](@site/static/img/plugins/obd/obd_recording_1.png)|

To include OBD-II data in a GPX file, you need to select the desired parameters for recording using the [Trip recording plugin](../plugins/trip-recording.md#recording-settings). This allows you to analyze vehicle metrics alongside your trip data.

#### Tags {#tags}

OsmAnd applies custom tag names for vehicle metrics in the [GPX file](../plugins/trip-recording.md#recorded-gpx-file). For example:

- `vm_eotemp`: Engine Oil Temperature.
- `vm_fpress`: Fuel Pressure.
- `vm_espeed`: Engine Speed.

These tags make it easier to identify and utilize specific vehicle data when reviewing the recorded GPX file.


## Widgets {#widgets}

*Menu → Configure screen → Widgets → Choose a panel → Vehicle Metrics*

| | |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_widget_1.png)| ![OBD settings](@site/static/img/plugins/obd/obd_widget.png)|

The [Vehicle Metrics widgets](../widgets/info-widgets.md#vehicle-metrics-widgets) are automatically included when you enable the plugin. If they do not visible, you can manually add them via the [Configure Screen](../widgets/configure-screen.md) menu.

### Widget Settings {#widget-settings}

The widgets display key data from your connected OBD-II device in real time, such as speed, engine metrics, and fuel consumption. Ensure they are visible before starting your trip to track metrics seamlessly.

Some widgets offer display mode options:

- **Instant**. Displays real-time data for the selected metric.
- **Average**. Displays averaged values over a configurable time interval (15 seconds to 60 minutes).


## Related articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *This article was last updated in December 2024*
