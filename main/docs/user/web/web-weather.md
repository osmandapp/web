---
sidebar_position: 4
sidebar_label:  Weather
title: Weather on the Web
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

The Weather feature on the OsmAnd Web Map displays current weather conditions and forecast data directly on the map. It provides access to weather information from multiple forecast sources, supports time adjustment, and allows viewing weather layers such as temperature, wind, pressure, cloud cover, and precipitation.

Weather data is available without signing in. The Weather view can be opened directly from the map interface either by clicking the umbrella icon in the menu panel or by right-clicking on the map and selecting Open weather from the context menu.


## Data Source {#data-source}

The OsmAnd Web provides weather information from two forecast sources:

- [**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Global Forecast System)** – the default source operated by NOAA/NWS. Provides full weather data, including temperature, pressure, humidity, wind and cloud layers.  
- [**ECMWF**](https://www.ecmwf.int/) **(European Centre for Medium-Range Weather Forecasts)** – an alternative forecast source. Offers high-quality temperature, precipitation and pressure data but does not provide wind or cloud information.  

To switch between them, click the **umbrella button** in the Weather menu.

![OsmAnd Web Weather](@site/static/img/web/weather_source.png)


## Weather Menu {#weather-menu}

The **Weather menu** displays current weather conditions and forecast data for the selected location on the map. It combines a summary view, time controls, and weather layers in a single panel.

At the top of the menu, the current location name, date, time, and air temperature are shown. Below this, a day selector allows switching between forecast days within the available range.

A time slider is provided to adjust the forecast time within the selected day. Moving the slider updates all displayed weather values and map layers to reflect the chosen moment.

The menu shows the following weather parameters for the selected location:
- *Temperature*.
- *Precipitation*.
- *Wind*.
- *Air pressure*.
- *Cloud*.  

Each value updates dynamically when changing the forecast time or date.

At the bottom of the panel, information about the weather data generation time is shown, indicating when the forecast data was last updated.

![OsmAnd Web Weather](@site/static/img/web/weather_menu.png)


## Weather Layers {#weather-layers}

Weather layers allow visualizing forecast data directly on the map as an overlay. They help quickly assess weather conditions across a wider area instead of viewing values only for a single point.

To open the Weather layers panel, click the layers icon in the Weather menu. This opens a list of available weather overlays that can be enabled or disabled independently.

The following weather layers are available:
- *Temperature* — displays air temperature distribution on the map using a color gradient.
- *Precipitation* — shows precipitation intensity across the selected area.
- *Wind* — visualizes wind speed and direction.
- *Air pressure* — displays atmospheric pressure patterns.
- *Cloud* — shows cloud coverage.

All weather layers are synchronized with the selected date and time in the Weather menu. Changing the forecast day or adjusting the time slider immediately updates the map overlays to reflect the chosen moment.

![OsmAnd Web Weather](@site/static/img/web/weather_layers.png)


## Forecast View {#forecast-view}

Weather forecasts are available for up to 7 days ahead. Forecast values are calculated in 3-hour intervals, allowing you to examine short-term changes throughout each day.

The 7-day forecast is displayed using two complementary formats:
- **Graph view**. Shows forecast trends over time for the selected weather parameter. 
- **List view**. Displays daily forecast values in a structured list format. 

You can switch between different weather parameters using the icons at the top of the forecast panel. 

![OsmAnd Web Weather](@site/static/img/web/weather_forecast.png)


## Related Articles {#related-articles}

- [Weather](../plugins/weather.md)
- [Introduction](../web/web-overview.md)
- [Map](../web/web-map.md)

