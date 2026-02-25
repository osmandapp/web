---
source-hash: dfa236df73681e471e3c208b26be8fd48653e14fab8e0a6a7dd62c51436d4c77
sidebar_position: 17
title:  Wetter
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


## Übersicht {#overview}

:::info Kostenpflichtige Funktion
The Weather plugin is an [**OsmAnd Pro**](../purchases/index.md) paid feature <ProFeature />.
:::

Die interaktiven Wetterkarten-Ebenen in der OsmAnd-App ermöglichen es Ihnen, Temperatur, Luftdruck, Wolkenbedeckung, Windgeschwindigkeit und Niederschlag in Ihrer Stadt oder an jedem anderen Ort auf einer interaktiven Weltkarte zu überwachen. Das Wetter-Plugin liefert stündliche Wettervorhersagen für 7 Tage im Voraus direkt auf der OsmAnd-Karte. Wetterinformationen können auch für die Offline-Nutzung heruntergeladen werden.  

Die Datenquelle für das Wetter-Plugin ist das [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) operated by the United States National Weather Service (NWS) and the European Centre for Medium-Range Weather Forecasts ([ECMWF](https://www.ecmwf.int/)).  


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die folgenden Einstellungen sind *erforderlich*, um das Wetter auf der OsmAnd-Karte anzuzeigen:

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


## Wetter auf der Karte anzeigen {#display-weather-on-the-map}

### Wettervorhersage-Bildschirm {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Go to: *Enabled plugin → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_new_3.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Go to: *Enabled plugin → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_new_2.png)

</TabItem>  

</Tabs>

The main side menu has a dedicated **Weather** menu item that provides quick access to all weather tools. The *Weather forecast screen* displays information about *temperature*, *atmospheric pressure*, *wind speed*, *cloud coverage*, and *precipitation*. 

The forecast values are shown for the map center, marked by a crosshair (black on Android, red on iOS). Move the map to change the selected location — the weather data updates automatically for the new point.

Am unteren Bildschirmrand befindet sich die *Wetter-Symbolleiste*. Mit den Tages-Schaltflächen und dem Zeitregler können Sie die genaue Zeit einstellen, zu der die Wettervorhersage angezeigt wird.

### Datenquelle {#data-source}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

![Data Source Android](@site/static/img/plugins/weather/weather_source_android.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

![Data Source iOS](@site/static/img/plugins/weather/weather_source_ios.png)

</TabItem>  

</Tabs>

You can choose which weather forecast provider OsmAnd uses to display data on the Weather screen:<br />
<Translate android="true" ids="shared_string_menu,shared_string_weather"/> → ⚙️ → *Choose Data Source*

Zwei Wettervorhersage-Anbieter werden unterstützt:

[**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Global Forecast System)** – the default source operated by NOAA/NWS. Provides full weather data, including temperature, pressure, humidity, wind and cloud layers.

[**ECMWF**](https://www.ecmwf.int/) **(European Centre for Medium-Range Weather Forecasts)** – an alternative forecast source. Offers high-quality temperature, precipitation and pressure data but does not provide wind or cloud information. When using ECMWF, unavailable parameters are displayed as “–”, and the corresponding weather layers appear disabled.

How Data Source affects the Weather display:
- The map, graphs, timeline and weather values on the screen update immediately after switching the source.
- Only the parameters available for the selected provider are shown.
- Weather widgets automatically refresh to use the chosen source.
- If you previously downloaded a weather forecast, OsmAnd uses the data corresponding to the selected provider.
- GFS and ECMWF use separate caches. Switching the source loads or updates the relevant weather tiles.


### Wetter-Ebenen anpassen {#customize-weather-layers}

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

Um Wetter-Ebenen auf dem OsmAnd-Kartenbildschirm anzuzeigen, müssen Sie das Menü *Karte konfigurieren* verwenden. Gehen Sie zum Menü, suchen Sie den Punkt *Wetter* in der Liste (nur verfügbar, wenn das Plugin aktiviert ist) und tippen Sie darauf.  

In diesem Menü können Sie die **Sichtbarkeit** und die [Einstellungen](#weather-settings) für jede Ebene ändern, select the type of contour lines, and download the [offline 7-day weather forecast](#offline-forecast) (*only available for Android here*).


### Wetter-Einstellungen {#weather-settings}

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

### Wetter-Ebenen {#weather-layers}

Alle Wetterdaten werden als separate Kartenebenen dargestellt. Um die Wetter-Ebenen auf der Karte zu sehen, müssen Sie herauszoomen, sie sind nur auf den Zoomstufen 2-12 verfügbar. Wetter-Ebenen verwenden [Wetterpaletten](../personal/color-palette-schemes.md#weather), um die Karte einzufärben. Diese Paletten können bei Bedarf [geändert](../personal/color-palette-schemes.md#palette-modify) werden.

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


### Karten kombinieren {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)  

</TabItem>

</Tabs>

Um umfassende Wetterinformationen zu erhalten, können Sie die Kartenebenen separat verwenden oder einfach kombinieren. Isolinien eines bestimmten Typs können ebenfalls zur Wetter-Ebene hinzugefügt werden. Tippen Sie einfach auf die Schaltfläche *Ebenen* oder *Isolinien* auf dem Bildschirm.


### Schnellaktionen für Ebenen {#quick-actions-for-layers}

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Um die Sichtbarkeit von Wetter-Ebenen umzuschalten, können Sie die *Schnellaktions*-Schaltflächen auf dem Kartenbildschirm verwenden. The general settings for showing or hiding layers can be found in the separate [Weather section](#weather-forecast-screen) of the *Main Menu*. In the [Quick Action](../widgets/quick-action.md#configure-map) article, you will find a list of the layers available for display. If you need quick access to this map configuration, use the *Custom Button* tool.

- Go to [Add action](../widgets/quick-action.md#custom-buttons): *Menu → Configure screen → Custom buttons → Quick action → Add action → Configure map*.
- Add one or more QA buttons to change the visibility of a particular weather layer.


## Offline-Vorhersage {#offline-forecast}

### Cache {#cache}

Wenn der Wetter-Tab geöffnet ist, unless otherwise specified, the required weather information is downloaded from the network. You can use the preloaded [Weather forecast](#download-forecast) on your devices. The weather information is automatically cashed after downloading and can be used offline until the forecast expires.  

:::tip
On Android devices, you can check when weather data has been downloaded by tapping the *Weather widget*. The OsmAnd Development plugin must be enabled.  
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)  
:::

### Vorhersage herunterladen {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>  

Für jedes Land können Sie eine **Offline-Vorhersage** (bis zu 7 Tage) herunterladen. The closer it is to the current date, the more accurate it will be. If you want to use the weather forecast offline, you should download the weather data in advance.  

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


## Wetter-Widgets {#weather-widgets}

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


## Verwandte Artikel {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)