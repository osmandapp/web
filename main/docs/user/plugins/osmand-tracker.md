---
sidebar_position: 16
title:  OsmAnd Tracker
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStoreTracker from '@site/src/components/buttons/TrackerGooglePlay.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>

## Overview

[OsmAnd tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) helps to see your contacts on the map in OsmAnd. It has a social aspect; you need to have contacts, that's why it was challenging for us to choose the platform to build it on.

We have chosen [Telegram](https://telegram.org/) as the most open social platform since it has an [Open API](https://core.telegram.org/api), Open SDK and, moreover, it will eventually have an Open Server implementation (Blockchain).

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png) 


It is important that we have a great level of interoperability between the applications. You can easily exchange your location with your contacts without having 'Telegram mobile app' (OsmAnd Online GPS Tracker is an independent telegram client) and, the other way around, your contacts should not necessarily have [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) in order to see your location.

We designed [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) so you could still use your Telegram app and OsmAnd app naturally without flaws.

The application sends the Live Location messages to the selected chats for the time you specified, displays a list of your contacts and groups, and checks the chats for the presence of the messages with a location, which are then displayed on the map in OsmAnd.
The application does not send or view your text messages.


Log in using your phone number registered in Telegram to enable the following:
- Manage the list of contacts and groups that send you their location,
- View the location of contacts and groups in real time on a map in OsmAnd,
- Set the time for sharing the location separately for each chat,
- Set the location update frequency,
- Watch the chronology of your and your contacts' movement.


![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png) 

## Setup

Install OsmAnd Online GPS Tracker APK:
- [Google Play store](https://play.google.com/store/apps/details?id=net.osmand.telegram),
- [OsmAnd server](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)

:::caution Note
**OsmAnd Online GPS Tracker** is available for **Android** only.
:::

## Settings

There are several settings for managing the frequency of sharing locations and controlling the display of the locations sent to you.

For opening the _Settings_ menu:

_["My location"](#my-location-screen) screen → move screen down (contacts list) → ⋮ → Settings_

or

_["Live now"](#live-now-screen) screen → ⋮ → Settings_

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)

### Position

**Send my location** — allows you to set the interval for sending your position from once per second (for increasing accuracy) to once in 5 minutes (for reducing power consumption).

**Not moving** — allows you to set the time (from 1 minute to 1 hour) after which the location of your contact will be considered outdated. If the location becomes outdated, the position becomes gray.

**Location history** — allows setting the time (from 5 minutes to 24 hours) after which the contact with the deleted location will be hidden from the list and the OsmAnd map.

**Send location as** - allows you to make a selection of the category of sending a message about your location in Telegram (3 types of sending): text, map, text and map.

**Buffer expiration time** - allows you to choose time to keep saving points in the buffer.

**Background work** - allows you to change battery optimization settings to stabilize location sharing.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Units & formats

Allows you to add settings for units and formats. Now you can choose your comfortable values for Telegram messages during sharing location.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg) 

### Appearance

Allows you to show the number of GPS points received from other contacts, as well as sent by you.

### Privacy

Using proxy inside of OsmAnd Tracker. Go to Settings and write your proxy data: _Settings → Privacy → Proxy Settings_

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg) 

### GPS settings

Settings of location points. If you stay at one place some time without moving, for example, your points don't send and your GPX track will be nicer.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)

### Share location as

If you want to connect several devices to one Telegram account, you need to click "Add device" and name the device.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)

### OsmAnd Connect

This setting allows you to select the version of OsmAnd in which your contacts with the position will be displayed on the map.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)

### Account

Here you can check which telegram account you use. 

At this menu you can log out from OsmAnd Telegram app just to click _"Log out"_ button

### Logcat buffer

Here you can check and share detailed logs of the app.

## "My location" screen

On this screen you can see your contacts from Telegram. You can choose one or more of its and set parametres of sharing and start to share your location.

After the first start, you see Suggested list of contacts. What is it? It's your last five contacts who you shared your location with. You can click only once to continue sharing your location with these contacts.

Time of sharing is your last choosing sharing time for contact.

When you start sharing, you can see in the _"My location"_ screen your Suggested list and button _"Back to OsmAnd"_.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)

## "Live now" screen

At this menu, you can see all contacts who are sharing a location for you. Click to the contact and look at it on **OsmAnd map**.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)

 ### "Active marker" on the OsmAnd map

It's very useful to see distance, speed, and angle movement of your contacts at  OsmAnd map and text in Telegram. You can understand at once where and how your contact move.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)

## "Timeline" screen

This is the third tab in the application.  It is possible to choose the day when you would like to see the history of the location shared with you. When selected, the contacts that showed their location on the selected day are displayed.

Monitoring allows you to collect information in the background when your contacts share it. To do this, you must enable it.

To view all information about  contact location, click on the contact's icon, or open the GPX track in OsmAnd and study the track in more detail ([read more here](./trip-recording.md)). You can also share the GPX track for the selected period: by sending it to mail or any instant messenger.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

You can see the online moving of your contacts on the map of OsmAnd with online GPS-track. For this, you should switch on _"Live"_ at your contact in _"Timeline"_. If there are many sharing contacts at this moment OsmAnd app chooses the color of tracks by random.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

When you click _"Show in OsmAnd"_ or mini-map you can choose special settings for GPX-track your contact in OsmAnd app and see it live moving with track on OsmAnd map.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

If you don't have data collected on the selected day there is a special notification on the screen. You can go to select the nearest date with one click.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)

## OsmAnd Tracker Widget

For viewing [the Widget](../widgets/info-widgets.md#-tracker-widget-android) you should turn OsmAnd Tracker plugin on first. After that, the Widget will be in the upper-right corner of the OsmAnd screen with the signature _"Start"_.

To switch off it, you can go to _the General menu → Configure screen_ (from OsmAnd version 3.6).

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/10.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/14.jpg)

The Widget has few appearances. At first, it is _"Start"_. When you click _"Start"_ you go to Online OsmAnd Tracker, where you can choose any contacts or click to Suggested contacts.

When you start sharing your location the Widget changes appearance.

The green smile _"OK"_ means that your location is being shared now.

It's mean that everything is ok. The sharing does not have any issues.

The orange smile _"OK"_ means that your location cannot be sent. There are issues with the Internet or with GPS connection.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

If you don't have an internet connection for a long time, your buffer in OsmAnd Tracker saves points of your location. The Widget in OsmAnd changes its appearance. It starts to show the time of the buffer filling how long the buffer is keeping points of your location.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

As soon as your internet connection is restored, points from the buffer are sent. The Widget in OsmAnd changes its appearance and minutes in the Widget are reduced. When all points from the buffer are sent to Telegram, the Widget is displayed as a green smile.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

In OsmAnd, you can see that the Widget has a green smile. It's mean that everything is ok. The sharing process does not have any issues.

## OsmAnd Assistant

We have also prepared a Telegram bot called 'OsmAnd Assistant,' so you can integrate OsmAnd Telegram with 3rd party trackers or APIs. Hence, you can not only share your location but also the locations of your bicycle or a group of individuals taking part in racing which is available via API, and OsmAnd Telegram will make sure you have a nice presentation of locations on the map in OsmAnd itself.

Please share with us what you think about this new app on [Twitter](https://twitter.com/osmandapp) and other social channels.

To view the GPS positions of contacts on the map, you need the latest version of [OsmAnd or OsmAnd+](./../purchases/android.md). The minimum supported version of OsmAnd or OsmAnd+ is 3.0.4.

____________________________

<LinksSocial/>
<LinksTelegram/>

<AndroidStoreTracker/>

