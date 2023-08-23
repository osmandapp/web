---
sidebar_position: 13
title:  External sensors
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


<InfoAndroidOnly/>

## Overview

The **External sensors plugin** allows you to read and record data from [wireless external sensors](https://en.wikipedia.org/wiki/Wireless_sensor_network) running on [**ANT+**](https://en.wikipedia.org/wiki/ANT_(network)) and [**BLE (Bluetooth Low Energy)**](https://www.wikiwand.com/en/Bluetooth_Low_Energy) technologies and display this data using [widgets](#widgets) in the OsmAnd application. This managed network is capable of collecting, transmitting, and storing sensor data.  

The OsmAnd External sensors plugin accesses external sensors and can read data such as *Heart Rate*, *Bicycle Power*, *Bicycle Cadence*, *Bicycle Speed*, *Bicycle Distance* and *Temperature*. For the plugin to work correctly, make sure that your device [is connected](#pair-new-sensor) to the appropriate sensors.


## Setup 

To start using data from external sensors, you need to make the following settings:  
 
1. [Enable](../plugins/index.md#enable--disable) External sensors plugin in the Plugins section of the Main menu.    
2. Make the necessary settings in the plugin's [Settings menu](#plugin-settings).
3. If needed, add [External sensors widgets](#widgets) to the screen.
4. You can use the tips here [ANT+ connect](https://www.thisisant.com/consumer/ant-101/ant-in-phones) and here [Bluetooth connected devices](https://developer.android.com/guide/topics/connectivity/bluetooth/ble-overview) to set up your sensors.
5. To configure which sensor data can be recorded to a track in the [Trip recording plugin](#trip-recording).


## Pair new sensor

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png)  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png)  

Use the *Pair new sensor* button to connect new sensors.  

- Not all devices support ANT+. You can check if your device works with ANT+ by going [here](https://www.thisisant.com/consumer/ant-101/ant-in-phones).  
- You need Bluetooth turned on to search for sensors. If your Bluetooth is turned off, the app will prompt you to *Open settings* on your device.
- To add new sensors, tap the required one in the list of found sensors.
- A pop-up notification is displayed when a paired sensor is connected or disconnected.  


## Sensors settings

Use one of the following paths to open the sensor settings:  
- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Available device → Settings* 
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Available device → Settings*   

![External sensors plugin settings Android](@site/static/img/plugins/sensors/external_sensors_sensor_settings_1.png)  ![External sensors plugin settings Android](@site/static/img/plugins/sensors/external_sensors_sensor_settings_2.png)  

With the plugin for each external sensor available to the OsmAnd application, you can use these settings:  

1. All previously added sensors are divided into two lists: **Connected** and **Disconnected**.
2. Each sensor in the list has a three-dot menu with settings:
    - **Disconnect** or **Connect** the sensor depending on its current state.
    - **Settings** - opens a separate sensor screen with additional information on sensor type, battery level, data received, and settings for renaming, "forget sensor", and for specifying wheel circumference. The sensor screen can be opened simply by tapping the field with the sensor name in the list.
    - **Rename** - allows you to set your own name for the sensor.
    - **Forget** - sensor will be removed from the list, but can be paired with it again.
- When the battery level of the paired sensor becomes less than 15%, a pop-up notification appears on the screen.


## Data analyze

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze.png)

Data from external sensors can be transmitted to the device and displayed in OsmAnd during the trip as additional information. If you want to analyze this information, you need to record the trip, and only after you save it, in the *Track context menu → Analyze on map*, additional items for the recorded data appear.  

OsmAnd allows you to select a 2nd axis for data analysis: *Heart rate*, *Speed*, *Cadence*, *Bicycle power*, and *Temperature*. *Distance* and *Battery* are not used in [Analyze on map](../map/tracks-on-map.md#analyze-track-on-map).


## Trip recording

![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)  

Data from connected external sensors can be added to the GPX file using the [Trip recording plugin](../plugins/trip-recording.md#recording-settings).  

- Settings for sensors are only available if the External Sensors plugin is enabled.
- To use data from external sensors, go to *Trip recording plugin → Settings → Data → External sensors*.
- A list of available sensors for each data type is always available, regardless of whether any sensor is connected.
- If none of the sensor types are paired, you can use the [*Pair new sensor*](#pair-new-sensor) button in the Trip recording plugin *Settings* menu.
- OsmAnd records data from selected sensors to the [track](../plugins/trip-recording.md#recorded-gpx-file) while recording a trip.


## Widgets

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid1.png)  ![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)  

The [External Sensors widget](../widgets/info-widgets.md#-external-sensors-widgets) is automatically added to the list of widgets when you enable the External Sensors plugin. Before you start your trip, make sure that the widgets are on the screen, and if not, add them using the [Configure Screen](../widgets/configure-screen.md) menu. External Sensors widgets help you track data from your external sensors in real time.  

Use the following path to display the widget on the screen:  
*<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_left"/> /<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="external_sensor_widgets"/>*   

| Parameter | Description |
| --- | --- |
| **<Translate android="true" ids="map_widget_ant_heart_rate"/>** | The heart rate sensor can transmit your heart rate in real time. This is useful for cycling training when you want to track your heart rate to optimize your training efforts. |
| **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** | Your bike's power sensors measure the power you exert when you pedal. This allows you to analyze and optimize your workouts to improve efficiency and performance. |
| **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** | Cadence is the number of pedal turns per minute. Cadence sensors help you maintain optimal pedaling speed for efficient cycling. |
| **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** | Speed sensors provide information about your current speed while cycling. |
| **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** | Distance sensors measure the distance you travel when you're driving. | 
