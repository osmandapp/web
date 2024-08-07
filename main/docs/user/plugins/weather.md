---
sidebar_position: 16
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

:::tip NOTE
 <ProFeature/> The Weather plugin is a paid feature of the OsmAnd app.  
:::

The Weather Plugin provides an hourly forecast for 7 days ahead directly on the OsmAnd map. Weather information can also be downloaded for the online use.  

## Overview

Interactive Weather map layers of The OsmAnd app allow you to monitor the temperature, air pressure, cloud coverage, wind speed and precipitation in your city or any other location on an interactive global map. The Weather plugin can also display weather forecast for 7 days ahead, even offline.  
The data source for the Weather plugin is the [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) run by the United States National Weather Service (NWS) and the European Centre for Medium-Range Weather Forecasts ([ECMWF](https://www.ecmwf.int/)).  

## Setup  

To display Weather on the OsmAnd map you need to make the following settings:  

1. Purchase [OsmAnd Pro subscription](../purchases/) <ProFeature/> if necessary.  
2. [Enable](../plugins/#enable--disable) the Weather plugin in the Plugins section of the Main menu.  
3. Choose [units of measurement](#weather-settings) of weather events.  
4. Display the [Weather](#display-weather-on-the-map) on the map using the Weather screen in the dashboard menu (don't forget to zoom out).  
5. [Download](#offline-forecast) Weather forcast if you plan to use it offline.  
6. If you want to see up-to-date weather information on an everyday basis, enable Weather [widgets](#weather-widgets).  

:::caution Note  
The Weather plugin is only available with Map rendering [Version 2](../personal/global-settings/#map-rendering-engine) (OpenGL).  
:::

## Display Weather on the map  

### Weather forecast screen  

We created a special Weather screen in Main menu for quick access to all Weather tools. Weather screen provides information about temperature, air pressure, wind speed, cloud coverage and precipitation. At the bottom of the screen you can see the Weather forecast toolbar: the date buttons and the time slider are used to set the exact time for which the weather forecast will be displayed.  

<Tabs groupId="operating-systems">  

<TabItem value="android" label="Android">  

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_2.png)  

</TabItem>  

<TabItem value="ios" label="iOS">  

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_2.png)

</TabItem>  

</Tabs>  

### Weather settings

It is important to decide in what units of measurement it is convenient for you to see Weather data on the map and in the Weather widgets section on the screen. You can choose the appropriate units of measurement for each parameter or use the default values (iOS only). In the iOS version of the OsmAnd app, you can also enable the offline forecast option to avoid using mobile traffic while traveling.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

- *Main menu → Plugins → Weather → Settings*.  
- *Main menu → Settings → Profile → Weather*.  

![Weather Settings Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Weather Settings 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

- *Main menu → Settings → Profile → Weather settings*.  

![Weather Settings iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Weather Settings iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>  

:::tip
In iOS version of OsmAnd, you can change measurement units and transparency level in the menu that opens after a long press on the icon of the needed map layer.  
:::

### Weather layers  

All weather data is presented in the form of separate map layers. To see weather layers on the map you need to zoom out, they are only available at zooms 2-12.  

| |  
|------------|  
| **Precipitation layer** displays information about weather events when water in different aggregate states falls from the sky to the ground. Precipitation is rain, snow, sleet or hail. The precipitation scale is graduated in millimeters (or inches) of water that would be received by 1 square meter in 24 hours. 1 mm of rain translates to 1 liter of water on a single square meter. |  
|![Precipitation sheme](@site/static/img/plugins/weather/precipitation.png)|  
| **Temperature** expresses quantitatively the perceptions of hotness and coldness. It is measured in degrees. In OsmAnd you can choose between Celsius and Fahrenheit scales. |  
|![Temperature sheme](@site/static/img/plugins/weather/temperature.png)|  
| **Wind** is the movement of air, caused by the uneven heating of the Earth by the sun and the Earth's own rotation. Winds range from light breezes to natural hazards such as hurricanes and tornadoes. In OsmAnd wind speed can be displayed in meters per second (m/s), kilometers per hour (km/h), miles per hour (mph) and knots (kt). |  
|![Wind sheme](@site/static/img/plugins/weather/wind.png)|  
| **Cloud cover** refers to the average fraction of the sky obscured by clouds when observed from a particular location. Measured in %. |  
|![Clouds sheme](@site/static/img/plugins/weather/clouds.png)|  
| **Atmospheric pressure** is  caused by the weight of air above the measurement point. It decreases with increasing elevation. You can display Atmospheric pressure in hectopascals (hPa), millimeters of mercury (mm Hg), inches of mercury (inHg) |  
| ![Pressure sheme](@site/static/img/plugins/weather/pressure.png) |  
| **Wind annimation** involves dynamic representations that show wind direction and speed across a region. |  
| ![Wind annimation](@site/static/img/plugins/weather/wind_annimation.gif) |  

### Combine maps  

To get comprehensive weather information, you can use the map layers separately or easily combine them. Isolines of one specific type can also be added to the Weather layer.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)  

</TabItem>

</Tabs>

### Quick Actions for Layers

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

To switch the visibility of weather layers, you can use the *Quick Action* buttons on the map screen. The general settings for showing or hiding layers can be found in the separate [Weather section](#weather-forecast-screen) of the main menu. In the [Quick Action](../widgets/quick-action.md#configure-map) article, you will find a list of the layers available for display. If you need quick access to this map configuration, use the *Custom Button* tool.
- Go to [Add action](../widgets/quick-action.md#custom-buttons): *Menu → Configure screen → Custom buttons → Quick action → Add action → Configure map*.
- Add one or more QA buttons to change the visibility of particular weather layer.


## Offline forecast

### Cache  

When the Weather tab is open, unless otherwise specified, the necessary weather information is uploaded online. On iOS devices, it is possible to use a pre-loaded [Weather forecast](#download-forecast-ios). On Android devices the weather information is automatically cashed after download and can be used offline until the forecast expires.  

:::tip
On Android devices you can check when Weather data was downloaded by tapping the Weather widget. The OsmAnd development plugin should be turned on.  
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)  
:::

### Download forecast

&nbsp;  

**Offline forecast** (up to 7 days) can be downloaded for each country. The closer to the current date, the more accurate it will be. 
If you want to use the weather forecast offline, you should download the weather data in advance.  

&nbsp;  

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

In the download forecast menu you can obtain information and set parameters to keep your weather data up to date.  
  
- *Updated* - shows when the last update was made.  
- *Next update* - when the next update will be available.  
- *Updates size* - shows size of all updates.  
- *Update now* button - when active allows to update weather data manually without waiting for an automatic update.  
- *Update frequency*  - can be set to 12h, 24h, weekly.  
- *Update only via WiFi*  - enable this option if you don't want to use mobile data for downloads.  
- *Remove forecast* - allows to remove all forecast data for this region.  

:::info  
OsmAnd generates a new forecast every 6 hours.  
:::

## Weather Widgets

The [Weather widgets](../widgets/info-widgets.md#weather-widgets) such as Temperature, Air Pressure, Wind, Cloud, and Precipitation show the current weather data for the central point on the map. Weather widgets are always displayed when the [Weather screen](#weather-forecast-screen) is on. They also can be placed on the main screen for the chosen profile. To activate Weather widgets, use the following path.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*Menu → Configure screen → Right panel / Left panel → Weather*

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*Menu → Configure screen → Right panel / Left panel → Weather*

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)  

</TabItem>

</Tabs>
