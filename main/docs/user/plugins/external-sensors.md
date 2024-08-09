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


## Overview

:::tip NOTE
The External sensors plugin is a [paid feature](../purchases/index.md) of the OsmAnd app.  
:::

The **External sensors plugin** allows you to read and record data from [wireless external sensors](https://en.wikipedia.org/wiki/Wireless_sensor_network) running on [**ANT+**](https://en.wikipedia.org/wiki/ANT_(network)) and [**BLE (Bluetooth Low Energy)**](https://www.wikiwand.com/en/Bluetooth_Low_Energy) technologies and display this data using [widgets](#widgets) in the OsmAnd application. This managed network is capable of collecting, transmitting, and storing sensor data. *iPhones and iPads* do not have the hardware to receive ANT+ signals.

The OsmAnd External sensors plugin accesses external sensors and can read data such as *Heart Rate*, *Bicycle Power*, *Bicycle Cadence*, *Bicycle Speed*, *Bicycle Distance* and *Temperature*. For the plugin to work correctly, make sure that your device [is connected](#pair-new-sensor) to the appropriate sensors.


## Setup 

To start using data from external sensors, you need to make the following settings:  
 
1. [Enable](../plugins/index.md#enable--disable) External sensors plugin in the Plugins section of the Main menu.    
2. Make the necessary settings in the [sensors settings](#sensors-settings).
3. If needed, add [External sensors widgets](#widgets) to the screen.
4. You can use the tips for [ANT+ connect](https://www.thisisant.com/consumer/ant-101/ant-in-phones) to set up this type of sensors.
6. To connect external **BLE sensors**, enable bluetooth on your device.
7. Sensor data can be recorded to a track in the [Trip recording plugin](#trip-recording).


### Pair new sensor

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

Use the *Pair new sensor* button to connect new sensors.  

- You need Bluetooth turned on to search for sensors. If your Bluetooth is turned off, the app will prompt you to *Open settings* on your device.
- To add new sensors, tap + for the required one in the list of found sensors.
- A pop-up notification is displayed when a paired sensor is connected or disconnected.  
- Not all devices support ANT+ (Android only). You can check if your device works with ANT+ by going [here](https://www.thisisant.com/consumer/ant-101/ant-in-phones).  
- Bicycle power in Android is only Ant+.
- **There is no Bicycle power in iOS** because Ant+ sensors are not supported.


### Sensors settings

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

With the plugin for each external sensor available to the OsmAnd application, you can use these settings:  

1. All previously added sensors are divided into two lists: **Connected** and **Disconnected**.
2. Each sensor in the list has a menu with settings:
    - **Disconnect** or **Connect** the sensor depending on its current state.
    - **Settings**. Opens a separate sensor screen with additional information on sensor type, battery level, data received, and settings for renaming, *forget sensor*, and for specifying wheel circumference. The sensor screen can be opened simply by tapping the field with the sensor name in the list.
    - **Rename**. Allows you to set your own name for the sensor.
    - **Forget**. The sensor will be removed from the list, but it can be paired again.
- When the battery level of the paired sensor becomes less than 15%, a pop-up notification appears on the screen.


## Trip recording

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png)  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)  

</TabItem>

</Tabs>

Data from connected external sensors can be added to the GPX file using the [Trip recording plugin](../plugins/trip-recording.md#recording-settings).  

- Settings for sensors are only available if the External Sensors plugin is enabled.
- To use data from external sensors, go to *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
- A list of available sensors for each data type is always available, regardless of whether any sensor is connected.
- If none of the sensor types are paired, you can use the [*Pair new sensor*](#pair-new-sensor) button in the Trip recording plugin *Settings* menu.
- OsmAnd records data from selected sensors to the [track](../plugins/trip-recording.md#recorded-gpx-file) while recording a trip.

:::note
OsmAnd uses [**track recording**](../plugins/trip-recording.md#recorded-gpx-file) with such *tag names* for external sensors, with which your file can be easily read by the sports applications you use.  For example Strava or Runkeeper.
:::


### Data analyze

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_andr.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_2_ios.png)

</TabItem>

</Tabs>

Data from external sensors can be transmitted to the device and displayed in OsmAnd during the trip as additional information. If you want to analyze this information, you need to record the trip, and only after you save it, in the *Track context menu → Analyze on map*, additional items for the recorded data appear.  

OsmAnd allows you to select a 2nd axis for data analysis: *Heart rate*, *Speed*, *Cadence*, *Bicycle power*, and *Temperature*. *Distance* and *Battery* are not used in [Analyze on map](../map/tracks/index.md#analyze-track-on-map).


## Widgets

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="external_sensor_widgets"/>*

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1.png)  ![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="external_sensor_widgets"/>*

![External sensors widgets Android](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![External sensors widgets Android](@site/static/img/plugins/sensors/external_sens_widg_2_ios.png)  

</TabItem>

</Tabs>

The [External Sensors widget](../widgets/info-widgets.md#external-sensors-widgets) is automatically added to the list of widgets when you enable the External Sensors plugin. Before you start your trip, make sure that the widgets are on the screen, and if not, add them using the [Configure Screen](../widgets/configure-screen.md) menu. External Sensors widgets help you track data from your external sensors in real the time.  

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>**. The heart rate sensor can transmit your heart rate in real time. This is useful for cycling training when you want to track your heart rate to optimize your training efforts. 
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*Android only*). Your bike's power sensors measure the power you exert when you pedal. This allows you to analyze and optimize your workouts to improve efficiency and performance. 
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>**. Cadence is the number of pedal turns per minute. Cadence sensors help you maintain optimal pedaling speed for efficient cycling.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>**. Speed sensors provide information about your current speed while cycling. 
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>**. Distance sensors measure the distance you travel when you're driving.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>**. The widget displays the ambient temperature, which can be very useful if you don't want to overheat or freeze on your bike or motorcycle. 

### Widget settings

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="external_sensor_widgets"/> → ⚙️ or <Translate android="true" ids="shared_string_settings"/>*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → External sensor → Settings*

 ![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

By default the widget shows the first currently connected sensor of this type. If you want to choose different, you need to choose manually from connected sensors list.
