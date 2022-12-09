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
<!--The plugin allows to add external sensors for displaying data on the OsmAnd screen.   

The plugin allows you to read and record data from external sensors running on ANT+ technology and display this data using widgets in the OsmAnd application. -->

## Overview

By this plugin you can have additional data on the OsmAnd screen from [wireless external sensors](https://en.wikipedia.org/wiki/Wireless_sensor_network): _<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>, <Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>_.

:::info Note
Now, external sensors can be connected to OsmAnd by low energy [ANT+ network](https://en.wikipedia.org/wiki/ANT_(network)).  
Bluetooth network will be added for the next release OsmAnd 4.4.
:::

## Setup 

To activate connection external sensors: 
   
1. [Enable](../plugins/index.md#enable--disable) External sensors plugin in the Plugins section of the Main menu.    
2. Make the necessary settings in the plugin's [Settings menu](#plugin-settings).


### Plugin settings

:::info INFO  
The plugin settings are global and apply to all profiles.  
:::


- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/>* 
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/>* 

Here, there are settings for exteranl sensors:
- &nbsp;_<Translate android="true" ids="map_widget_ant_heart_rate"/>_ - shows user's heart rate during a given activity in real-time.
- &nbsp;_<Translate android="true" ids="map_widget_ant_bicycle_power"/>_ - shows cyclist's power output, which is used to move the bike forward.
- &nbsp;_<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>_ - shows speed at which the user is pedalling.
- &nbsp;_<Translate android="true" ids="map_widget_ant_bicycle_speed"/>_ - shows speed of traveling.
- &nbsp;_<Translate android="true" ids="map_widget_ant_bicycle_dist"/>_ - shows travelled distance.

Each sensor has two settings:
- &nbsp;_<Translate android="true" ids="ant_read_data"/>_ - allows to search and connect to the sensor.
- &nbsp;_<Translate android="true" ids="ant_write_to_gpx"/>_ - allows to include sensor data in [the recording GPX track](../plugins/trip-recording.md).

![External sensors plugin settings Android](@site/static/img/plugins/sensors/ant_settings_android.png)




## How to Use




## Widgets

The external sensors widgets show external sensors data on the OsmAnd screen. 

<!-- The Parking widget is added automatically to widgets list when you enable the Parking plugin. Before setting up a parking spot, make sure the widget is on the screen, and if not, add it in the Configure Screen menu. The Parking widget will help you quickly find a parking spot on the map.-->


<!--You can add or delete the Parking widget by following this path:-->
To add widgets on the screen:
- *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_left"/> /<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="external_sensor_widgets"/>*:
   - &nbsp;_<Translate android="true" ids="map_widget_ant_heart_rate"/>_
   - &nbsp;_<Translate android="true" ids="map_widget_ant_bicycle_power"/>_
   - &nbsp;_<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>_
   - &nbsp;_<Translate android="true" ids="map_widget_ant_bicycle_speed"/>_
   - &nbsp;_<Translate android="true" ids="map_widget_ant_bicycle_dist"/>_

![External sensors widgets Android](@site/static/img/plugins/sensors/ant_widgets_android.png) ![External sensors widgets Android](@site/static/img/plugins/sensors/ant_widgets_1_android.png)
 


