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

The External sensors plugin allows you to read and record data from [wireless external sensors](https://en.wikipedia.org/wiki/Wireless_sensor_network) running on [**ANT+**](https://en.wikipedia.org/wiki/ANT_(network)) and [**BLE (Bluetooth Low Energy)**](https://www.wikiwand.com/en/Bluetooth_Low_Energy) technologies and display this data using [widgets](#widgets) in the OsmAnd application. This managed network is capable of collecting, transmitting, and storing sensor data.  

The OsmAnd External sensors plugin accesses external sensors and can read data such as *Heart Rate*, *Bicycle Power*, *Bicycle Cadence*, *Bicycle Speed* and *Bicycle Distance*. For the plugin to work correctly, make sure that your device [is connected](#pair-new-sensor) to the appropriate sensors.

:::tip Information
[Bluetooth connected devices](https://developer.android.com/guide/topics/connectivity/bluetooth/ble-overview) will be supported in the future [OsmAnd release](https://github.com/osmandapp/OsmAnd/issues/15459).

[ANT+ connect](https://www.thisisant.com/consumer/ant-101/ant-in-phones)  
:::


## Setup 

To start using data from external sensors, you need to make the following settings: 
   
1. [Enable](../plugins/index.md#enable--disable) External sensors plugin in the Plugins section of the Main menu.    
2. Make the necessary settings in the plugin's [Settings menu](#plugin-settings).
3. If needed, add [External sensors widgets](#widgets) to the screen.


## Pair new sensor




## Plugin settings

:::info INFO  
The plugin settings are global and apply to all profiles.  
:::

Use one of the following paths to open the plugin settings:  
- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/>* 
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/>*   

![External sensors plugin settings Android](@site/static/img/plugins/sensors/external-sensors-plugin-sett-01.png)  ![External sensors plugin settings Android](@site/static/img/plugins/sensors/external-sensors-plugin-sett-02.png)  

With the plugin, for each external sensor available to the OsmAnd app, you can use two settings:
- ***<Translate android="true" ids="ant_read_data"/>*** - allows you to connect to the corresponding sensor and read the data it transmits.
- ***<Translate android="true" ids="ant_write_to_gpx"/>*** - allows you to include sensor data in [GPS track record](../plugins/trip-recording.md#recorded-gpx-file).

| Parameter | Description |
| --- | --- |
| **<Translate android="true" ids="map_widget_ant_heart_rate"/>** | The heart rate sensor can transmit your heart rate in real time. This is useful for cycling training when you want to track your heart rate to optimize your training efforts. |
| **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** | Your bike's power sensors measure the power you exert when you pedal. This allows you to analyze and optimize your workouts to improve efficiency and performance. |
| **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** | Cadence is the number of pedal turns per minute. Cadence sensors help you maintain optimal pedaling speed for efficient cycling. |
| **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** | Speed sensors provide information about your current speed while cycling. |
| **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** | Distance sensors measure the distance you travel when you're driving. | 


## Data analyze

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze.png)

Data from external sensors can be transmitted to the device and displayed in OsmAnd during the trip as additional information. If you want to analyze this information, you need to record the trip, and only after you save it, in the *Track context menu → Analyze on map*, additional items for the recorded data appear.  

OsmAnd allows you to select a 2nd axis for data analysis: *Heart rate*, *Speed*, *Cadence*, *Bicycle power*, and *Temperature*. *Distance* and *Battery* are not used in [Analyze on map](../map/tracks-on-map.md#analyze-track-on-map).


## Widgets

The [External Sensors widget](../widgets/info-widgets.md#-external-sensors-widgets) is automatically added to the list of widgets when you enable the External Sensors plugin. Before you start your trip, make sure that the widgets are on the screen, and if not, add them to the [Configure Screen](../widgets/configure-screen.md) menu. External Sensors widgets help you track data from your external sensors in real time.  

Use the following path to display the widget on the screen:  
*<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_left"/> /<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="external_sensor_widgets"/>*  

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid1.png) ![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)
