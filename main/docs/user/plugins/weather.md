---
sidebar_position: 17
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


## Overview {#overview}

:::info Paid feature
 <ProFeature/> The Weather plugin is a [paid feature](../purchases/index.md) of the OsmAnd app.  
:::

The interactive weather map layers in the OsmAnd app allow you to monitor temperature, atmospheric pressure, cloud coverage, wind speed and precipitation in your city or any other location on an interactive global map. The Weather plugin provides hourly weather forecasts for 7 days ahead directly on the OsmAnd map. Weather information can also be downloaded for offline use.  

The data source for the Weather plugin is the [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) operated by the United States National Weather Service (NWS) and the European Centre for Medium-Range Weather Forecasts ([ECMWF](https://www.ecmwf.int/)).  


## Required Setup Parameters {#required-setup-parameters}

The following settings are *required* to display the Weather on the OsmAnd map:

**1.** [Purchase **OsmAnd Pro subscription**](../purchases/).

**2.** [Enable](../plugins/#enable--disable) the Weather plugin in the *Plugins* section of the *Main Menu*.

**3.** [Select the **units of measurement**](#weather-settings) for the weather occurrences.

**4.** [Display the **Weather layers**](#customize-weather-layers) on the map using the Weather menu item in the Configure map menu (remember to zoom out).

**5.** [View the **Weather forecast**](#weather-forecast-screen) for the selected area (this menu allows the main screen of the OsmAnd map to be uncluttered with weather layers).

**6.** [Download](#offline-forecast) the weather forecast if you plan to use it offline.

**7.** [Enable **Weather widgets**](#weather-widgets) if you want to see up-to-date weather information on a daily basis.  

:::caution Required rendering
The Weather plugin is only available with Map rendering engine [Version 2](../personal/global-settings/#map-rendering-engine) (OpenGL).  
:::


## Display Weather on the Map {#display-weather-on-the-map}

### Weather Forecast Screen {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Go to: *Enabled plugin → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_new_2.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Go to: *Enabled plugin → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_new_2.png)

</TabItem>  

</Tabs>

The main side menu has a dedicated **Weather** menu item that provides quick access to all weather tools. The *Weather forecast screen* displays information about *temperature*, *atmospheric pressure*, *wind speed*, *cloud coverage*, and *precipitation*.  

At the bottom of the screen is the *weather toolbar*. You can use the day buttons and the time slider to set the exact time at which the weather forecast will be displayed.

### Customize Weather Layers {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Go to: *Enabled plugin → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Go to: *Enabled plugin → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>  

</Tabs>

To display weather layers on the OsmAnd map screen, you need to use the *Configure Map menu*. Go to the menu, find the *Weather* item in the list (available only when the plugin is enabled), and tap it.  

In this menu, you can change the **visibility** and [settings](#weather-settings) for each layer, select the type of contour lines, and download the [offline 7-day weather forecast](#offline-forecast) (*only available for Android here*).


### Weather Settings {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *Main Menu → Plugins → Weather → Settings*
- *Main Menu → Settings → Profile → Plugin settings → Weather*

![Weather Settings Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Weather Settings 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Main Menu → Settings → Profile → Plugins → Weather*

![Weather Settings iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Weather Settings iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>  

It is important to decide in which units of measurement it is convenient for you to see the [Weather data](#weather-layers) on the map and in the [Weather widgets](#weather-widgets) section of the screen. You can choose appropriate units of measurement for each parameter or use default values (*iOS only*). In the iOS version of the OsmAnd app, you can also enable the offline forecast option to avoid using mobile traffic while traveling.  

:::note
In the iOS version of OsmAnd, you can change measurement units and transparency level in the menu that opens after a long tap of the icon of the required map layer.  
:::

### Weather Layers {#weather-layers}

All weather data is presented as separate map layers. To see the weather layers on the map, you need to zoom out, they are only available on zoom scales 2-12. Weather layers are using [weather palettes](../personal/color-palette-schemes.md#weather) to colorize the map, these palettes could be [changed](../personal/color-palette-schemes.md#edit-palette-file) if necessary.

| |  
|------------|  
| **Precipitation layer** displays information about weather events when water in different aggregate states falls from the sky to the ground. Precipitation is rain, snow, sleet, or hail. The precipitation scale is graduated in millimeters (or inches) of water that falls on 1 square meter in 24 hours. 1 mm of rain corresponds to 1 liter of water per 1 square meter. |  
|![Precipitation sheme](@site/static/img/plugins/weather/precipitation.png)|  
| **Temperature** expresses the quantitative perception of hot and cold. It is measured in degrees. In OsmAnd, you can choose between Celsius and Fahrenheit scale. |  
|![Temperature sheme](@site/static/img/plugins/weather/temperature.png)|  
| **Wind** is the movement of air caused by the Earth's uneven heating by the sun and its own rotation. Winds can range from a light breezes to natural disasters such as hurricanes and tornadoes. In OsmAnd, wind speed can be displayed in meters per second (m/s), kilometers per hour (km/h), miles per hour (mph) and knots (kt). |  
|![Wind sheme](@site/static/img/plugins/weather/wind.png)|  
| **Cloud coverage** is the average fraction of the sky covered by clouds when observed from a particular location. It is measured in %. |  
|![Clouds sheme](@site/static/img/plugins/weather/clouds.png)|  
| **Atmospheric pressure** is caused by the weight of the air above the measurement point. It decreases with increasing elevation. Atmospheric pressure can be displayed in hectopascals (hPa), millimeters of mercury (mmHg), and inches of mercury (inHg). |  
| ![Pressure sheme](@site/static/img/plugins/weather/pressure.png) |  
| **Wind animation** includes dynamic representations showing wind direction and speed across the region. |  
| ![Wind annimation](@site/static/img/plugins/weather/wind_annimation.gif) |  


### Combine Maps {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)  

</TabItem>

</Tabs>

To get comprehensive weather information, you can use the map layers separately or easily combine them. Isolines of one specific type can also be added to the Weather layer. Just tap the *Layers* or *Isolines* button on the screen.


### Quick Actions for Layers {#quick-actions-for-layers}

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

To switch the visibility of weather layers, you can use the *Quick Action* buttons on the map screen. The general settings for showing or hiding layers can be found in the separate [Weather section](#weather-forecast-screen) of the *Main Menu*. In the [Quick Action](../widgets/quick-action.md#configure-map) article, you will find a list of the layers available for display. If you need quick access to this map configuration, use the *Custom Button* tool.

- Go to [Add action](../widgets/quick-action.md#custom-buttons): *Menu → Configure screen → Custom buttons → Quick action → Add action → Configure map*.
- Add one or more QA buttons to change the visibility of a particular weather layer.


## Offline Forecast {#offline-forecast}

### Cache {#cache}

When the Weather tab is open, unless otherwise specified, the required weather information is downloaded from the network. You can use the preloaded [Weather forecast](#download-forecast) on your devices. The weather information is automatically cashed after downloading and can be used offline until the forecast expires.  

:::tip
On Android devices, you can check when weather data has been downloaded by tapping the *Weather widget*. The OsmAnd Development plugin must be enabled.  
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)  
:::

### Download Forecast {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>  

For each country, you can download **Offline Forecast** (up to 7 days). The closer it is to the current date, the more accurate it will be. If you want to use the weather forecast offline, you should download the weather data in advance.  

In the download forecast menu, you can obtain information and set parameters to keep the weather data up to date.  
  
- **Created** (*Android*) / **Updated** (*iOS*). Shows when the last update was made.  
- **Next update** (*iOS*). When the next update will be available.  
- **Size** (*Android*) / **Updates size** (*iOS*). Shows the size of all updates.  
- **Update** button (*Android*) / **Update now** (*iOS*). When active, allows you to update weather data manually without waiting for an automatic update.  
- **Update frequency** (*iOS*). Can be set to 12-hour, 24-hour, or weekly.  
- *Update only via Wi-Fi* (*iOS*). Enable this option if you don't want to use mobile data for downloads.  
- **Remove** *trash can* button (*Android*) / **Remove forecast** (*iOS*). Allows you to delete all forecast data for this region.
- **Edit** *pencil* button (*Android*). Allows you to rename the weather file.

**Note:** Some countries, such as the USA and Canada, use a single Offline Forecast file for the entire country. This reduces the number of downloads and simplifies weather data management.

:::info  
Weather data is updated every 6 hours (all 4 updates from [GFS](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) and 3 from [ECMWF](https://www.ecmwf.int/)) and becomes available in OsmAnd with a short delay, as the computation process takes several hours before release (usually around 07:00 UTC).  
:::


## Weather Widgets {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choose a panel → <Translate android="true" ids="shared_string_weather"/>*

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choose a panel → <Translate ios="true" ids="shared_string_weather"/>*

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)  

</TabItem>

</Tabs>

[Weather widgets](../widgets/info-widgets.md#weather-widgets) such as Temperature, Air Pressure, Wind, Cloud, and Precipitation show the current weather data for the **central point on the map**.

- Weather widgets are only displayed when the [Weather screen](#weather-forecast-screen) is turned on.
- To activate weather widgets, select the *Configure screen* Main Menu item, the panel on which to place them, and the required widgets from the list.


## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)


