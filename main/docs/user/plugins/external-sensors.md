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

<InfoIncompleteArticle/>

:::caution Android only
External sensors plugin is currently not available for the iOS version of the OsmAnd app.
:::

If you have a variety of sensor devices for cycling, you can use the data they record in the OsmAnd app.


## Overview
The External sensors plugin allows you to read and record data from [wireless external sensors](https://en.wikipedia.org/wiki/Wireless_sensor_network) running on ANT+ technology and display this data using widgets in the OsmAnd application. ANT+ is an ultra low power wireless transfer standard that can be used with the basic [ANT protocol](https://en.wikipedia.org/wiki/ANT_(network)). This managed network is capable of collecting, transmitting, and storing sensor data.  

The OsmAnd External sensors plugin accesses external sensors and can read data such as *Heart Rate*, *Bicycle Power*, *Bicycle Cadence*, *Bicycle Speed* and *Bicycle Distance*. For the plugin to work, don't forget [to connect](https://www.thisisant.com/consumer/ant-101/ant-in-phones) your device to the respective sensors.  

:::tip Information
Bluetooth network will be added for the next release OsmAnd 4.4.
:::


## Setup 

To start using data from external sensors, you need to make the following settings: 
   
1. [Enable](../plugins/index.md#enable--disable) External sensors plugin in the Plugins section of the Main menu.    
2. Make the necessary settings in the plugin's [Settings menu](#plugin-settings).
3. If needed, add [External sensors widgets](#widgets) to the screen.


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
| **<Translate android="true" ids="map_widget_ant_heart_rate"/>** | Indicates the user's heart rate data in real time. |
| **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** | Indicates how much power the cyclist exerts when riding. |
| **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** | Indicates the speed at which the cyclist pedals. |
| **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** | Indicates the speed at which the bicycle is moving. |
| **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** | Indicates the distance traveled. |  


## Widgets

The [External Sensors widget](../widgets/info-widgets.md#-external-sensors-widgets) is automatically added to the list of widgets when you enable the External Sensors plugin. Before you start your trip, make sure that the widgets are on the screen, and if not, add them to the [Configure Screen](../widgets/configure-screen.md) menu. External Sensors widgets help you track data from your external sensors in real time.  

Use the following path to display the widget on the screen:  
*<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_left"/> /<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="external_sensor_widgets"/>*  

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid1.png) ![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)
