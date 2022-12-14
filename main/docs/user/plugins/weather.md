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

The Weather Plugin provides an hourly forecast for 7 days ahead directly on the OsmAnd map. Weather information can be downloaded for the online use.  

:::tip NOTE
The Weather plugin is a paid feature of the OsmAnd app.  
:::

## Overview

The data source for the Weather plugin is the Global Forecasting System (https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) run by the United States' National Weather Service (NWS).  
Interactive Weather map layers of The OsmAnd app allow you to monitor the current temperature, air pressure, cloud coverage, wind speed and precipitation in your city or any other location on an interactive global map. The Weather plugin can also display weather forecast for 7 days, even offline.  

## Setup  

To display weather on the OsmAnd map you need to make the following settings:  

1. Purchase [OsmAnd Pro subscribers paid services](../purchases/) <ProFeature/> if necessary.  
2. [Enable](../plugins/#enable--disable) the Weather plugin in the Plugins section of the Main menu.  
3. Display the [Weather](#display-weather-on-the-map) on the map using the Weather tab in the dashboard menu.  
4. [Download](#download-weather-forecast) Weather forcast if you plan to use it offline.  

## Display Weather on the map   

### Weather tab

We craeted a special tab in Main menu for quick access to all Weather tools. Weather tab provide information about temperature, air pressure, wind speed, cloud coverage and precipitation in the form of separate map layers that can be combined with each other and can be supplemented with isolines.  

<Tabs groupId="operating-systems">  

<TabItem value="android" label="Android">  

![Weather Dashboard Android 1](@site/static/img/plugins/weather/Weather_dashbord_andr_1.png) ![Weather Dashboard Android 2](@site/static/img/plugins/weather/Weather_dashbord_andr_2.png)

</TabItem>  

<TabItem value="ios" label="iOS">  

![Weather Dashboard in iOS](@site/static/img/plugins/weather/Weather_dashbord_ios_1.png) ![Weather Dashboard in iOS](@site/static/img/plugins/weather/Weather_dashbord_ios_2.png)

</TabItem>  

</Tabs>  

### Combine maps

To get comprehensive weather information, you can not only use the map layers separately, but also easily combine them. Isolines of the same type can also be added to the map.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/Weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/Weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/Weather_combine_layers_ios_1.png)  

</TabItem>

</Tabs>

### Weather forecast  

Offline forecast (up to 7 days) can be downloaded for each country. The closer to the current date, the more accurate it will be.  
If you want to use the weather forecast offline, you should download the weather data in advance:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

:::caution iOS only
Download Weather forecast function is not available for the Android version of the OsmAnd app.  
:::

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,res_mapsres"/>* _→ choose a country → <Translate ios="true" ids="weather_forecast"/>_

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>

Here you see data info and update button:

- "Updated" - shows the time of last update.  
- "Next update" - shows the time of then next update.  
- "Updates size" - shows size of all updates.  
- "Update now" button - allows to update weather data now.  

You can set parameters for data updating:

- "Update frequency" button - allows to choose update frequency: 12h, 24h, weekly. OsmAnd generates a new forecast every 6 hours. The closer to the current date, the more accurate it will be.  
- "Update only via WiFi" button - allows to use Wi-Fi connection for updating.  
- "Remove forecast" button - allows to remove all worecast data for this region.  

:::info  
OsmAnd generates a new forecast every 6 hours.  
:::

## Weather Widgets

Weather widgets show current weather data for the central point on the map:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

_<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,shared_string_weather"/>_ _→ <Translate android="true" ids="map_settings_weather_temp"/>, <Translate android="true" ids="map_settings_weather_air_pressure"/>, <Translate android="true" ids="map_settings_weather_wind"/>, <Translate android="true" ids="map_settings_weather_cloud"/>, <Translate android="true" ids="map_settings_weather_precip"/>_

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

_<Translate ios="true" ids="menu,layer_map_appearance,map_widget_right"/>_ _→ <Translate ios="true" ids="map_settings_weather_temp"/>, <Translate ios="true" ids="map_settings_weather_pressure"/>, <Translate ios="true" ids="map_settings_weather_wind"/>, <Translate ios="true" ids="map_settings_weather_cloud"/>, <Translate ios="true" ids="map_settings_weather_precip"/>_

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_ios.png) ![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)  

</TabItem>

</Tabs>
