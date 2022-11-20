---
sidebar_position: 14
title:  Weather
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

24h hourly forecast 7 days ahead on the map.

Interactive weather map layers allow you to watch for current temperature and weather conditions in your city or any other location on the interactive global map.

:::tip NOTE
The Contour Lines plugin is a paid feature of the OsmAnd app. 
:::

## Overview

The Weather plugin is used for showing info about current weather info and forecast. This data can be downloaded for use offline.

## Setup 

To display weather on the OsmAnd map and on the central point of the screen, you need to make the following settings: 


1. Purchase [OsmAnd Pro subscribers paid services](../purchases/) <ProFeature/> if necessary.  
2. [Enable](../plugins/#enable--disable) the Weather plugin in the Plugins section of the Main menu.    
3. Display the [Weather](#display-weather-on-the-map) on the map for the required profile in the Configure map menu.
4. Enable Weather widgets.
5. Enable the Weather toolbar.


## Display Weather on the map

Weather data can be online and offline. For offline you can download this data for choosed regions.

first select a profile and then on/off Weather option.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

For showing/hiding Weather layers, do the following:  
1. Go to: *<Translate android="true" ids="shared_string_menu,configure_map"/>*  
2. Select a Profile, and look for the *<Translate android="true" ids="shared_string_show"/>* section in the menu.  
3. Toggle *<Translate android="true" ids="shared_string_weather"/>* on.
4. Choose needed info for displayed: <Translate android="true" ids="shared_string_layers"/> - *<Translate android="true" ids="map_settings_weather_temp"/>, <Translate android="true" ids="map_settings_weather_air_pressure"/>, <Translate android="true" ids="map_settings_weather_wind"/>, <Translate android="true" ids="map_settings_weather_cloud"/>, <Translate android="true" ids="map_settings_weather_precip"/>* and <Translate android="true" ids="shared_string_contours"/>: *<Translate android="true" ids="map_settings_weather_temp"/>, <Translate android="true" ids="map_settings_weather_air_pressure"/>*

![Weather layer on Android](@site/static/img/plugins/weather/weather_layer_android.png) ![Weather layer on Android](@site/static/img/plugins/weather/weather_layer_1_android.png)

5. For each _<Translate android="true" ids="shared_string_layers"/>_ and _<Translate android="true" ids="shared_string_contours"/>_ you can choose layer _<Translate android="true" ids="shared_string_transparency"/>_ and _<Translate android="true" ids="measurement_units"/>_: 

*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_weather,map_settings_weather_precip"/>, <Translate android="true" ids="map_settings_weather_temp"/>*

![Weather layer on Android](@site/static/img/plugins/weather/weather_layer_precip_android.png) ![Weather layer on Android](@site/static/img/plugins/weather/weather_layer_temper_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

For showing/hiding Weather layers, do the following:  
1. Go to: *<Translate ios="true" ids="menu,configure_map"/>*  
2. Select a Profile, and look for the *<Translate ios="true" ids="map_settings_overunder"/>* section in the menu.  
3. Toggle *<Translate ios="true" ids="product_title_weather"/>* on.
4. Choose needed info for displayed: <Translate ios="true" ids="map_settings_weather_layers"/> - *<Translate ios="true" ids="map_settings_weather_temp"/>, <Translate ios="true" ids="map_settings_weather_pressure"/>, <Translate ios="true" ids="map_settings_weather_wind"/>, <Translate ios="true" ids="map_settings_weather_cloud"/>, <Translate ios="true" ids="map_settings_weather_precip"/>* and <Translate ios="true" ids="map_settings_weather_contours"/>: *<Translate ios="true" ids="map_settings_weather_temp"/>, <Translate ios="true" ids="map_settings_weather_pressure"/>*

![Weather layer on iOS](@site/static/img/plugins/weather/weather_layer_ios.png) ![Weather layer on iOS](@site/static/img/plugins/weather/weather_layer_1_ios.png)

5. For each _<Translate ios="true" ids="map_settings_weather_layers"/>_ and _<Translate ios="true" ids="map_settings_weather_contours"/>_ you can choose layer _<Translate ios="true" ids="map_settings_transp"/>_ and _<Translate ios="true" ids="sett_units"/>_: 

*<Translate ios="true" ids="menu,configure_map,product_title_weather,map_settings_weather_precip"/>, <Translate ios="true" ids="map_settings_weather_temp"/>*

![Weather layer on iOS](@site/static/img/plugins/weather/weather_layer_precip_ios.png) ![Weather layer on iOS](@site/static/img/plugins/weather/weather_layer_temper_ios.png)

</TabItem>

</Tabs>


## Configure screen

Weather quick menu and widgets.

### Weather toolbar

_<Translate ios="true" ids="screen_settings_weather_toolbar"/>_ is a quick menu for the weather tool in OsmAnd.

Adding the weather button on the map.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*???*
_<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_toolbar"/>_

**need to change the images below:**

![Weather toolbar on Android](@site/static/img/plugins/weather/weather_toolbar_ios.png) ![Weather toolbar on Android](@site/static/img/plugins/weather/weather_toolbar_1_ios.png)


A tap on the weather button opens the weather toolbar. 

1. Where you can switch on/off weather layers: *<Translate android="true" ids="map_settings_weather_temp"/>, <Translate android="true" ids="map_settings_weather_air_pressure"/>, <Translate android="true" ids="map_settings_weather_wind"/>, <Translate android="true" ids="map_settings_weather_cloud"/>, <Translate android="true" ids="map_settings_weather_precip"/>*, and <Translate android="true" ids="shared_string_contours"/>: *<Translate android="true" ids="map_settings_weather_temp"/>, <Translate android="true" ids="map_settings_weather_air_pressure"/>*

**need to change the images below:**

![Weather toolbar on Android](@site/static/img/plugins/weather/weather_toolbar_2_ios.png)

2. Long tap on the weather layer button opens [settings menu](#display-weather-on-the-map) for this layer. 

**need to change the images below:**

![Weather toolbar on Android](@site/static/img/plugins/weather/weather_toolbar_3_ios.png)

3. Choosing data and time for forecast. 24h hourly forecast 7 days 

**need to change the images below:**

![Weather toolbar on Android](@site/static/img/plugins/weather/weather_toolbar_4_ios.png) ![Weather toolbar on Android](@site/static/img/plugins/weather/weather_toolbar_5_ios.png)


4. Widgets show weather data for the central point: *<Translate android="true" ids="map_settings_weather_temp"/>, <Translate android="true" ids="map_settings_weather_air_pressure"/>, <Translate android="true" ids="map_settings_weather_wind"/>, <Translate android="true" ids="map_settings_weather_cloud"/>, <Translate android="true" ids="map_settings_weather_precip"/>*.

Of course, you can change the time and date to have a point forecast.

**need to change the images below:**

![Weather toolbar on Android](@site/static/img/plugins/weather/weather_toolbar_6_ios.png)

</TabItem>

<TabItem value="ios" label="iOS">

_<Translate ios="true" ids="menu,layer_map_appearance,map_widget_left,screen_settings_weather_toolbar"/>_

![Weather toolbar on iOS](@site/static/img/plugins/weather/weather_toolbar_ios.png) ![Weather toolbar on iOS](@site/static/img/plugins/weather/weather_toolbar_1_ios.png)


A tap on the weather button opens the weather toolbar. 

1. Where you can switch on/off weather layers: *<Translate ios="true" ids="map_settings_weather_temp"/>, <Translate ios="true" ids="map_settings_weather_pressure"/>, <Translate ios="true" ids="map_settings_weather_wind"/>, <Translate ios="true" ids="map_settings_weather_cloud"/>, <Translate ios="true" ids="map_settings_weather_precip"/>* and <Translate ios="true" ids="map_settings_weather_contours"/>: *<Translate ios="true" ids="map_settings_weather_temp"/>, <Translate ios="true" ids="map_settings_weather_pressure"/>*.

![Weather toolbar on iOS](@site/static/img/plugins/weather/weather_toolbar_2_ios.png)

2. Long tap on the weather layer button opens [settings menu](#display-weather-on-the-map) for this layer. 

![Weather toolbar on iOS](@site/static/img/plugins/weather/weather_toolbar_3_ios.png)

3. Choosing data and time for forecast. 24h hourly forecast 7 days 

![Weather toolbar on iOS](@site/static/img/plugins/weather/weather_toolbar_4_ios.png) ![Weather toolbar on iOS](@site/static/img/plugins/weather/weather_toolbar_5_ios.png)


4. Widgets show weather data for the central point: *<Translate ios="true" ids="map_settings_weather_temp"/>, <Translate ios="true" ids="map_settings_weather_pressure"/>, <Translate ios="true" ids="map_settings_weather_wind"/>, <Translate ios="true" ids="map_settings_weather_cloud"/>, <Translate ios="true" ids="map_settings_weather_precip"/>*

Of course, you can change the time and date to have a point forecast.

![Weather toolbar on iOS](@site/static/img/plugins/weather/weather_toolbar_6_ios.png)

</TabItem>

</Tabs>

### Weather Widgets

Weather widgets show current weather data for the central point on the map:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

_<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,shared_string_weather"/>_ _→ <Translate android="true" ids="map_settings_weather_temp"/>, <Translate android="true" ids="map_settings_weather_air_pressure"/>, <Translate android="true" ids="map_settings_weather_wind"/>, <Translate android="true" ids="map_settings_weather_cloud"/>, <Translate android="true" ids="map_settings_weather_precip"/>_

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png)

Now, you can see current weather data for the central point on the map.

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)


</TabItem>

<TabItem value="ios" label="iOS">

_<Translate ios="true" ids="menu,layer_map_appearance,map_widget_right"/>_ _→ <Translate ios="true" ids="map_settings_weather_temp"/>, <Translate ios="true" ids="map_settings_weather_pressure"/>, <Translate ios="true" ids="map_settings_weather_wind"/>, <Translate ios="true" ids="map_settings_weather_cloud"/>, <Translate ios="true" ids="map_settings_weather_precip"/>_

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_ios.png)

Now, you can see current weather data for the central point on the map.

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)

</TabItem>

</Tabs>

## Download Weather forecast

Offline forecast is available per country. Duration up to 7 days. You need to select needed countries.

OsmAnd generates a new forecast every 6 hours. The closer to the current date, the more accurate it will be.

For using forecast offline you need to download weather data:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,welmode_download_maps,regions"/>* _→ choose a country → Weather forecast_

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,res_mapsres"/>* _→ choose a country → <Translate ios="true" ids="weather_forecast"/>_

Here you see data info and update button:
- _"<Translate ios="true" ids="shared_string_updated"/>"_ - shows the time of last update.
- _"<Translate ios="true" ids="shared_string_next_update"/>"_ - shows the time of then next update.
- _"<Translate ios="true" ids="shared_string_updates_size"/>"_ - shows size of all updates.
- _"<Translate ios="true" ids="osmand_live_update_now"/>"_ button - allows to update weather data now.

You can set parameters for data updating:
- _"<Translate ios="true" ids="osmand_live_upd_frequency"/>"_ button - allows to choose update frequency: 12h, 24h, weekly. OsmAnd generates a new forecast every 6 hours. The closer to the current date, the more accurate it will be.
- _"<Translate ios="true" ids="osmand_live_wifi_only"/>"_ button - allows to use Wi-Fi connection for updating.
- _"<Translate ios="true" ids="weather_remove_forecast"/>"_ button - allows to remove all worecast data for this region.


![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>


