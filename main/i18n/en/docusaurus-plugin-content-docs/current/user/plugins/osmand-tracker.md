---
source-hash: 652f7e88fdf4d2bae94537d58c7ea9e1d5aa0e57dfb954e058fd661aae10355c
sidebar_position: 11
title: OsmAnd Tracker
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


<InfoAndroidOnly />

## Overview {#overview}

OsmAnd Tracker is a modified Telegram client created for flexible monitoring and sending messages with GPS locations in real-time.

[OsmAnd tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) helps you see your contacts on a map in OsmAnd. It has a social aspect to it, meaning that to use it, you need to provide access to your contacts for the platform OsmAnd chooses.

We chose [Telegram](https://telegram.org/) as the most open social platform because it has an [Open API](https://core.telegram.org/api), Open SDK and, moreover, will eventually have an Open Server implementation (Blockchain).

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)


### How It Works {#how-it-works}

Importantly, there is a high level of compatibility between the apps. You can easily share your location with your contacts without having the Telegram mobile app (OsmAnd Online GPS Tracker is an independent Telegram client), and conversely, your contacts do not need to have [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) to see your location.

We designed [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) so that you can continue to use the Telegram app and the OsmAnd app in the way you are used to, without additional restrictions.

The application sends Live Location messages to selected chats for the time you set, displays a list of your contacts and groups, and checks chats for messages with your location, which are then displayed on the map in OsmAnd.
The application does not send or view your text messages.

Log in using your Telegram registered phone number to enable the following:

- Manage the list of contacts and groups that send you their location.
- View the location of contacts and groups in real time on a map in OsmAnd.
- Set the time for sharing the location separately for each chat.
- Set how often your location is updated.
- Monitor the chronology of your movements and your contacts.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


## Required Setup Parameters {#required-setup-parameters}

Install OsmAnd Online GPS Tracker APK:

- [Google Play store](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- [OsmAnd server](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)


## Plugin Settings {#plugin-settings}

There are several settings for managing the frequency of sharing locations and controlling the display of the locations sent to you.

For opening the *Settings* menu:

*[My location](#my-location-screen) screen → move screen down (contacts list) → ⋮ → Settings*
or
*[Live now](#live-now-screen) screen → ⋮ → Settings*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Position {#position}

**Send my location** — allows you to set the interval for sending your position from once per second (for increasing accuracy) to once in 5 minutes (for reducing power consumption).

**Not moving** — allows you to set the time (from 1 minute to 1 hour) after which a contact's location is considered out of date. If a location becomes obsolete, it turns grey.

**Location history** — allows you to set the time (from 5 minutes to 24 hours) after which the contact with the deleted location will be hidden from the list and the OsmAnd map.

**Send location as** - allows you to choose a category for sending messages about your location in Telegram (3 types of sending): text, map, text and map.

**Buffer expiration time** - allows you to choose the time of saving points in the buffer.

**Background work** - allows you to change battery optimization settings to stabilize location sharing.

**Location source** - allows you to choose *Google Play Services* (by default) or *Android API* for determining location.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Units & Formats {#units--formats}

Allows you to add settings for units and formats. Now you can choose your comfortable values for Telegram messages when sharing location data.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Appearance {#appearance}

Allows you to show the number of GPS points received from other contacts, as well as those sent by you.


### Privacy {#privacy}

Using proxy inside of OsmAnd Tracker. Go to Settings and write your proxy data: *Settings → Privacy → Proxy Settings*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)


### GPS Settings {#gps-settings}

Location point settings. For example, if you stay in one location for some time without moving, your location point data is not sent and your GPX track will display more accurate and accurate data.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)


### Share location as {#share-location-as}

If you want to connect several devices to one Telegram account, you need to click "Add device" and name the device.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### OsmAnd Connect {#osmand-connect}

This setting allows you to select the version of OsmAnd in which your contacts with their location will appear on the map.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)


### Account {#account}

Use this setting to check which Telegram account you are currently using. Also in this menu you can exit the OsmAnd Telegram application by simply tapping the *Log out* button.


### Logcat Buffer {#logcat-buffer}

Here you can check and share detailed logs of the app.


## My Location Screen {#my-location-screen}

On this screen, you can see your Telegram contacts. You can choose one or more of them, set sharing options, and start sharing your location.

After the first launch, you will see a list of Suggested contacts. These are the five most recent contacts you've shared your location with. You can only click once to continue sharing your location with these contacts.

Sharing Time is the last sharing time you selected for the contact.

When you start sharing, you'll see a list of Suggested contacts and a *Back to OsmAnd* button on the *My location* screen.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)


## Live Now Screen {#live-now-screen}

In this menu, you can see all contacts who are sharing a location with you. Tap the contact and look at it on **OsmAnd map**.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


### Active Marker on the OsmAnd Map {#active-marker-on-the-osmand-map}

Allows you to track the distance, speed, and angle movement of your contacts on the OsmAnd map and in Telegram text. You can understand where and how your contact is moving.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)


## Timeline Screen {#timeline-screen}

This is the third tab in the application. This is the third tab in the app. Here you can select a day to view the history of locations shared with you. Selecting a day displays the contacts who showed their location that day.

Monitoring allows you to collect information in the background when your contacts share it. To do this, you must enable it.

To view all information about a contact's location, tap its icon or open a GPX track in OsmAnd and explore the track in more detail ([read more here](./trip-recording.md)). You can also share the GPX track for a selected period: by sending it to an email or any instant messenger.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

You can see the online movement of your contacts on the OsmAnd map using the online GPS track. To do this, you need to enable *Live* at the contact in the *Timeline*. If there are many contacts in common at the moment, the OsmAnd app selects the color of the tracks at random.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

When you tap "Show in OsmAnd" or on the mini-map, you can select special settings for GPX tracking of your contact in the OsmAnd app and see their movement in real time on the OsmAnd map.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

If there is no data collected on the selected date, a special notification will appear on the screen. You can move to the nearest date by tapping the forward or backward arrow.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)


## Tracker Widget {#tracker-widget}

To view the [widget](../widgets/info-widgets.md#tracker-widget-android), you need to first enable the OsmAnd Tracker plugin. After that, a widget with the word *Start* will appear in the upper right corner of the OsmAnd screen.

To disable it, you can go to *Main Menu → Configure screen*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

The widget has several views.

1. The first is *Start*.
   When you tap *Start*, you go to [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), where you can select any contacts or tap Suggested Contacts.
2. Second, when you start sharing your location, the widget changes its appearance.

   - The green *OK* emoji icon means that your location is now being shared. Everything is normal, the sharing is running without errors.
   - An orange *OK* emoji icon means your location cannot be sent. There is a problem with the Internet or GPS connection.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

   - If you don't have an Internet connection for a long time, your location points are saved in the OsmAnd Tracker buffer. The widget in OsmAnd changes its appearance to a gray emoji icon. It shows the buffer fill time, how long the buffer already saves your location points.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. As soon as the Internet connection is restored, it will start uploading location points from the buffer. The OsmAnd widget will change its appearance and the number of minutes in it will start decreasing. When all location points from the buffer are uploaded to Telegram, the emoji *OK* icon will appear on the widget.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. If you see widget as *OK* emoji icon, it means that everything is fine. The exchange process is going on without any problems.


## OsmAnd Assistant {#osmand-assistant}

The OsmAnd app has its own Telegram bot called "OsmAnd Assistant," which helps you integrate OsmAnd Telegram with third-party trackers or APIs. You'll be able to share not only your location but also the location of your bike or a group of people racing available through the API. OsmAnd Telegram will give you a nice presentation of your locations on the map in OsmAnd itself.

Please share with us what you think about this new app on [Twitter](https://twitter.com/osmandapp) and other social channels.

To view the GPS positions of contacts on the map, you need the latest version of [OsmAnd or OsmAnd+](./../purchases/android.md). The minimum supported version of OsmAnd or OsmAnd+ is 3.0.4.

> *Last updated: July 2024*