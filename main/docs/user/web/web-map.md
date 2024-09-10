---
sidebar_position: 2
title: Web Map
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>


## Weather

The [Weather plugin](../plugins/weather.md) is a paid feature of the OsmAnd app. For the web version, Weather is a free feature with such capabilities as:
- Enable weather layers on the map: *Temperature, Pressure, Wind, Cloud cover and Precipitation* using the menu on the left or right.
- Enable the display of the weather forecast for the day or week (the forecast step is 3 hours).  

![OsmAnd Web Weather](@site/static/img/web/web_weather.png)


## POIs on the map

Click to _POI_ button on the side panel. _Show POI_ menu: here you can choose POIs or search POI category for showing its on the map

![POIs menu](@site/static/img/web/poi_menu.png)


## URL scheme

For easy use of the OsmAnd application you can take advantage of direct links. These are special URLs that allow you to transfer location and contain detailed data about pins and tracks.  

These address strings can be copied and transferred using any data transfer medium supported by your device and used in the Android or iOS versions of OsmAnd.  

1. **URL with a pin on the map:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL without a pin on the map:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL with navigation:**

  https://osmand.net/map/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

Depending on the specified parameters, URL strings may contain:

- **latitude:** latitude value as a number.  
- **longitude:** longitude value as a number.  
- **start-finish:** for navigation.
- **profile:** for navigation.
- **zoom:** zoom level.


> *This article was last updated in September 2024*