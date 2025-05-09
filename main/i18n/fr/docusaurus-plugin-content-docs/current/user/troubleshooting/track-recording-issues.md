---
sidebar_position: 6
title:  Track Recording
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Overview

This article covers GPX track recording issues which have been observed for a long time in different versions of Android and iOS. By **Background**, we mean that the OsmAnd app does not appear in the foreground, especially when the device screen is off (which is different from the internal *background* definition in devices).

**Notes**:

- As of Android 11 (2020/12), there is no longer the system permission option *Always allow* location access to be used in the background, but this **does not limit** the background recording of OsmAnd tracks. According to Google's documentation, this is now considered **foreground usage** because the permission to use the service in the foreground is used internally and the system notification that a track is being recorded is always visible.

- Note that Android's new wording can be misleading:

  - **Allow while using the app** means that the app can continuously receive location data as long as it is displayed on the screen or has a visible notification in the *Android* notification bar, as OsmAnd has during navigation or trip recording. (Technically, this is called *foreground mode*).

  - **Allow all the time**, on the other hand, means that the app can in principle obtain your location 'unnoticed' without either of these conditions applying. But *Android* limits the frequency of location access in this (*background*) mode to something like once per hour, which is certainly not the correct mode for a navigation app.


## Recorded Tracks are Noisy

There are 2 typical accuracy issues leading to a *messy* recorded track.

- Longer standing in the same place.
- Bad GPS signal and switching to network signal-based location.

Actions you can perform:

- You can avoid such problems using **Pause** to interrupt recording under such conditions.
- It is also possible to edit a track later and remove *"noisy"* points.
- Or you can use the *Trip recording Plugin* settings to filter *"noisy"* points already while recording, based on your **experience** and **recording device**. You can filter out points by various criteria:
  - Points with low or zero speed.
  - Points with bad precision (GPS 'hdop').
  - Points closer than a threshold in meters.

- **Google Services API or Android API**. You may further change how OsmAnd receives location data on Android devices. In [OsmAnd Settings → Location Source](../personal/global-settings.md#location-source) select between **Google Play Services** and **Android API**, in many cases changing to **Android API** helps to improve the recorded tracks and makes them less noisy.


## Recorded Tracks Have Gaps

Starting with Android 4.4, power-saving features can limit CPU usage, reduce screen brightness, and kill background apps when the screen is off. This can affect OsmAnd’s performance for outdoor use, map rendering, and track recording. To avoid issues, consider disabling power-saving features entirely. Based on user experience, this has little impact on battery life for most devices.

### Configuring OsmAnd for Track Recording

- **Prevent Standalone Logging**. Ensure the *Prevent standalone logging* setting under Plugins/Trip Recording is deactivated to allow OsmAnd to record tracks with the screen off.
- **Update OsmAnd**. Android versions use different strategies to reduce power consumption by [killing applications running in the background](https://dontkillmyapp.com/). Version 3.9 or higher uses a Foreground service, visible in the notification bar, [to keep the app running in the background](https://dontkillmyapp.com/) on most Android versions. This is particularly effective on Android 8+ ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255), [Issue #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Optimizing Android for Track Recording

- **Exclude OsmAnd from Power Optimization**. In your Android device's Power or Power Savings settings, find OsmAnd under *Apps*, *Applications*, or *App Manager*. Locate *Power Savings* or *Power Consumption*, and exclude OsmAnd from power optimization. ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Disable Power Saving Mode**. Disabling Android Power Saving entirely can help, especially on older Android versions. This may resolve performance issues during track recording or navigation.

### Control the Behavior of iOS Background Apps

iOS can suspend or stop background apps automatically when system resources are reallocated. OsmAnd cannot override this behavior. If track recording is interrupted when the device is locked, this can leave gaps in the recording. You can edit these gaps using the [Plan a Route](https://docs.osmand.net/docs/user/plan-route/create-route) tool.

For more details on how iOS handles location tracking, check out Apple's documentation [here](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


### Tested Power Settings for Android 9, 10, and 11 (Hardy, 2020-08-25)

The following Power settings have been successfully tested under Android 9, 10, and later 11 (on Samsung devices) to make OsmAnd register tracks without gaps. Please review these **10 settings** and set accordingly:

- (1) **Power saving (mode)** = OFF (or *Optimized* in Android 10)
- (2) **Adaptive power saving** = OFF (When ON, medium power saving mode may sometimes be activated, which prevents OsmAnd from logging)
- (3) **Adaptive battery** = ON (should not affect apps exempted from battery optimization anyway, see (9) below)
- (4) **Put unused apps to sleep** = OFF (ON probably also ok if OsmAnd is exempted from battery optimization, see (9) below)
- (5) **Auto disable unused apps** = OFF (seems only present in Android 9)
- (6) **Optimize settings** = OFF (in Android 10 under *Device care / Advanced*, in Android 11 seems gone)
- (7) **Auto optimize (daily)** = ON (probably not relevant)
- (8) **Auto restart (at set times)** = OFF (probably not relevant)
- (9) **Optimize Battery Usage** (under *Apps / OsmAnd / Battery* or *Apps / 3-dots / Special access / Optimize battery usage / All / OsmAnd*) = advisable to exempt OsmAnd from battery optimization (although not necessary on all devices)
- (10) **Allow background activity** = ON for OsmAnd under *Apps / OsmAnd / Battery* for Android 11

Some of these settings interact, so be accurate. The best search for the above settings by name (with and without the expressions in parentheses). Depending on your version of Android, they may be scattered over these various *Android Settings screens*:

- *Device care*
- *Device care / 3-dots / Automation*
- *Device care / Advanced*
- *Device care / Battery*
- *Device care / Battery / Settings*
- *Device care / Battery / App Power Management*
- *Device care / Battery / More battery settings*


## How to Track Traveled Distance

OsmAnd does not have a special widget similar to an odometer, you can use the [Trip Recording plugin](../plugins/trip-recording.md#new-track-recording) to track your traveled distance and reset it when needed.  


## OsmAnd 3.9: Altitude issues when using Google Play Services

Google Play has changed its policy, and to comply, OsmAnd, as of version 3.9 (excluding Nightly, F-Droid, Huawei, and Amazon builds) is required to use Google Play Services to obtain location fixes while running in the background (that is, in Android terminology, as a foreground service with a visible system notification).

After this change, there seems to be an issue with altitude recording: Apparently, Google Play Services interpolates the altitude measurement very aggressively, see [GitHub issue #10864](https://github.com/osmandapp/OsmAnd/issues/10864). This issue affects Android 10, possibly not Android 11. The [issue](https://issuetracker.google.com/issues/180218747) has already been reported on Google's website, and will probably be fixed on 09-03-2021.  

As a workaround, in [*OsmAnd Settings → Location Source*](../personal/global-settings.md#location-source) you can switch the location source from **Google Play Services** to **Android API**.


## OsmAnd 3.9: GPS wake-up now replaced by continuous foreground service (2020/12)

As of version 3.9, when track recording or navigation is required, OsmAnd continuously supports GPX via the *Android* background service, and this is visible as an *Android* system notification.

The prior strategy of using a doze mode and periodic GPS Wake-Up has been removed from our code (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), as required by new Google Play restrictions on Background location access. As a result, the following sections (A) and (B) apply only to versions of OsmAnd before 3.9:

**<del> (A) GPS Wake-up Strategy</del>**

- (A1) While OsmAnd is used, e.g. Navigation. We keep the system's GPS module on all the time, as continuous location information is key here. Effect on battery use (order of magnitude) seems about 5% per hour on older systems up to Android 4.4, and 2-3% for newer systems.
- (A2) For *background* track recording without simultaneous navigation. For recording with up to 15-second intervals, we also keep GPS on, other strategies will not save much battery power.
- (A3) For intervals \>=30sec, we turn GPS on only for each sampling point. This has some noticeable effect on the accuracy of the points recorded but reduces battery usage to an order of magnitude 1.2% per hour for 30-second track recording.

**<del> (B) GPS Wake-up Issues</del>**

To achieve the GPS wake-up, so far we use the Android Alarm Manger to wake up the device periodically (also from Doze mode, which was introduced in Android 6). New Android versions introduced the following issues:

- **(B1) Alarm Manager's setRepeating() became inexact starting with Android 4.4:**  
Mitigation: We now use *setRepeating()* only up to Android 4.2, the new *setExact()* method starting with Android 4.4, and *setExactAndAllowWhileIdle()* for Android 8+. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Starting from Android 4.4, systems limit the number of times *setExact()* is executed repeatedly** to e.g. once per 5 or even 15 minutes. (The actual value seems wildly device-specific.)  
No good solution found for now. Current mitigation is we do not use Alarm Manager wake-up, instead keep GPS always on for background track logging on devices with Android 5+ for all recording intervals shorter than 5 minutes. This produces reliable and precise tracks at the cost of higher battery use. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))
