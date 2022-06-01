---
sidebar_position: 5
title:  General
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

General issues related to various OsmAnd's features

## Battery consumption
Some information about batttery consumption in general.

### OsmAnd seems to drain too much battery power

There have on and off been user reports about this. We made lots of measurements and could never really reproduce it, even though under some circumstances OsmAnd is reported responsible for 90% of the battery usage. Please be aware that OsmAnd does not run anything in background except a service while needed for ongoing functionality live navigation or track recording. The presence of the service is displayed in the Android notification area. If you do not see anything there, OsmAnd is not consuming any power at all in the background.

On newer devices, typical power consumption for OsmAnd should be in this neighborhood:  

Device Function | Battery Consumption <br /> per Hour
--- | ---
**Typical value for device asleep** with only standard apps active | 0.5 %
**Screen on** may typically account for | 6 %
**GPS active** may typically account for | 5 %
**Net effect of OsmAnd running** in the background, e.g. for track recording: | 0.5 %
**OsmAnd in the background not running the service for any purpose**: | 0

The overall power consumption should result by adding these components as applicable, depending
how you use OsnAmd. Please report if you see huge deviations:

OsmAnd Function | Battery Consumption <br /> per Hour
--- | ---
**Track recording** with screen off | 6 %
**Navigation**  with screen on | 12 %


## Privacy
Privacy related issues (delete history / check internet usage / permissions).

### How to delete search history
To remove search history, please open the Search menu, make a long tap on any search result and select which results to delete. You can also enable the select all option in the upper-left corner of the screen to remove all of the search results. After that, please press the Trash icon in the upper-right corner of the screen.

You can also follow [this guide](../search/index.md) to learn more about the search in OsmAnd.

## Other

### Problem with connecting to the GPS connection on Android

OsmAnd uses the location data determined by your device i.e. Android API.
1. Please try different Location Source Google Play Service or Android API: OsmAnd Settings -> Location Source.
2. Please check if update of Google Service API is available: [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US)
3. Please check the Android System Settings - Location and ensure that Location Access is turned On and switched to High Accuracy. You can also try to clear the cache and restart your device. GPS issues usually occur when buildings and other large objects interfere with or interrupt the GPS signal. Please test your GPS performance. If the signal is weak, please set the minimum recording accuracy setting over 15 meters.
4. Enable GPS-connection widget and check how many satellites connecting: [GPS widget](../widgets/info-widgets.md#gps-info-android). If there is no satellite connection, your location could not be determined and number of satellites is 0
5. Also, you can set up to determine your location via GPS signal only (deny determine your position via wi-fi or Bluetooth connection). How to do this, please, read here: [Google Support](https://support.google.com/android/answer/3467281?hl=en)
If that doesn't work, reinstall OsmAnd app - that should clear up the bad data and resolve GPS issues. Before reinstalling the app export all your saved information. 
If the issue is not resolved by reinstalling the app, maybe it occurs due to memory lack, so please check that you have enough RAM available.

