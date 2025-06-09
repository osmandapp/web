---
sidebar_position: 5
title:  External Sensors
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

:::info Paid feature
The External Sensors plugin is a [paid feature](../purchases/index.md) of the OsmAnd app.  
:::

The **External Sensors plugin** allows you to read and record data from [wireless external sensors](https://en.wikipedia.org/wiki/Wireless_sensor_network) running on [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) and [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) technologies and display this data using [widgets](#widgets) in the OsmAnd application. This managed network is capable of collecting, transmitting, and storing sensor data.

> *NOTE: iPhones and iPads do not support ANT+ due to hardware limitations.*

The **External Sensors plugin** accesses external sensors and can read data such as:

- *Heart Rate*
- *Bicycle Power*
- *Bicycle Cadence*
- *Bicycle Speed*
- *Bicycle Distance*
- *Temperature*

To use the plugin, ensure your device is [compatible](#pair-new-sensor), the plugin is [enabled](../plugins/#enable--disable), and your external sensors are connected via Bluetooth (BLE).


## Required Setup Parameters {#required-setup-parameters}

To start using data from external sensors, follow these steps:

1. [Purchase](../purchases/) an **OsmAnd Pro subscription** to unlock the External Sensors plugin.
2. [Enable](../plugins/#enable--disable) the plugin in *Menu → Plugins*.
3. **Turn on Bluetooth** on your device to allow connection with **BLE sensors**.
4. [Pair and configure](#pair-new-sensor) external sensors through the plugin menu.
5. (Optional) [Add](#widgets) **External Sensors widgets** to your map screen to display real-time data such as heart rate, cadence, or battery level.
6. (Optional) Use the [Trip recording plugin](../plugins/trip-recording.md) to record sensor data into GPX tracks.
7. (Optional, Android only) Follow [these tips](https://www.thisisant.com/consumer/ant-101/ant-in-phones) to connect ANT+ sensors if your device supports them.


### Pair New Sensor {#pair-new-sensor}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) |  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

To pair a new sensor, follow these steps:

1. Make sure **Bluetooth is enabled** on your device.  
2. Go to *Menu → Plugins → External Sensors → Settings*.  
3. Tap **Pair new sensor**.
4. OsmAnd will scan for available **Bluetooth LE** or **ANT+** sensors (depending on your platform).
5. Tap the **+** button next to the sensor you want to pair.
6. Once connected, the sensor will appear in the list of **Connected devices**.

***Notes:***

- On **iOS**, only **Bluetooth Low Energy (BLE)** sensors are supported due to hardware limitations. ANT+ sensors are not available.
- On **Android**, both BLE and ANT+ sensors may be supported depending on your device. See [ANT+ compatibility guide](https://www.thisisant.com/consumer/ant-101/ant-in-phones) for more details.
- A **pop-up notification** will appear each time a sensor connects or disconnects.
- **Bicycle power sensors** are available only on Android via ANT+.


## Sensor Settings {#sensor-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Use one of the following paths to open the sensor settings:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Available device → Settings*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Available device → Settings*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Use one of the following paths to open the sensor settings:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)  

</TabItem>

</Tabs>

Each paired external sensor listed in OsmAnd has its own configuration screen with the following options:

- **Connect / Disconnect** – toggle the connection state.
- **Rename** – assign a custom name to the sensor.
- **Forget sensor** – remove the sensor from the list (can be re-paired later).
- **Settings** – open the sensor details screen (sensor type, values, battery level, wheel circumference setting).

***Notes:***

- On **iOS**, you can display the **battery level** of connected BLE sensors directly in a map [widget](#widgets). To enable this, go to: *Menu → Configure screen → Choose panel → Add widget → External sensor → Settings → Show → Battery level*
- A pop-up notification appears when the battery **level of a paired sensor drops below 15%**.


## Trip Recording {#trip-recording}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png)  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)  

</TabItem>

</Tabs>

To record sensor data using the [Trip recording plugin](../plugins/trip-recording.md#recording-settings) during your trip:

1. Make sure the **External Sensors plugin** is enabled.
2. Go to *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Select the sensor types you want to record (e.g. cadence, heart rate, speed).
4. Start recording your trip. OsmAnd will save selected sensor data into the GPX track.

***Notes:***

- The list of available sensor types is shown even if no sensors are connected.
- If no sensors are paired yet, use the [Pair new sensor](#pair-new-sensor) button in the plugins settings.
- Battery level data is **not** recorded into GPX files and is not available for analysis on the map.

:::note Format compatibility
OsmAnd uses [track recording](../plugins/trip-recording.md#recorded-gpx-file) to embed sensor data into GPX files. This format is compatible with many sports and training apps (e.g. Strava, Runkeeper).
:::


### Data Analyze {#data-analyze}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

After recording your trip using the [Trip recording plugin](../plugins/trip-recording.md#recording-settings), you can review sensor data in the track analysis interface.

To analyze data:

1. Finish your trip recording.
2. Open the recorded track from *My Places → Tracks* or tap the track on map.
3. Select *Options → Analyze on map* from the track context menu.

This will display graphs for your recorded data: *Heart rate*, *Speed*, *Cadence*, *Bicycle power*, and *Temperature*

> *Battery level and Distance are not available in the [Analyze on map](../map/tracks/index.md#analyze-track-on-map) feature.*


## Widgets {#widgets}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choose a panel → Add widget → <Translate android="true" ids="external_sensor_widgets"/>*

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png)  ![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choose a panel → Add widget → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)  

</TabItem>

</Tabs>

The [External Sensors widget](../widgets/info-widgets.md#external-sensors-widgets) allows you to display live data from your connected sensors directly on the map screen.

Before starting your trip:

- Make sure that the External Sensors plugin is enabled.
- Open *Configure screen* and add the necessary widgets to the appropriate panel.

Supported widget types:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – displays real-time heart rate from a paired monitor.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*Android only*) – shows current pedaling power in watts.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – shows the number of pedal revolutions per minute.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – current cycling speed.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – total distance measured by the sensor.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – current ambient temperature.
7. **Battery Level** (*iOS only*) – percentage of battery remaining in a connected BLE sensor.


### Widget Settings {#widget-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choose a panel → Add widget → <Translate android="true" ids="external_sensor_widgets"/> → Choose a widget → <Translate android="true" ids="shared_string_settings"/>*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choose a panel → Add widget → External sensor → Choose a widget → Settings*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

By default, the widget shows the first currently connected sensor of this type. If you want to use a specific sensor, tap **Source of data** and choose from the list of connected sensors.

On **iOS**, you can choose what value to display in the widget:  

- **Sensor data** (e.g. cadence, speed).
- **Battery level** – real-time battery percentage of the selected sensor.

> *This is useful when you want to monitor the battery charge during long trips to avoid disconnections.*


## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *Last updated: May 2025*
