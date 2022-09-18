---
sidebar_position: 4
title:  Track recording
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


Common issues with track recording: Noise, gaps, and inaccuracies

This article addresses issues with GPX track recording which have been observed over time in different Android versions. **'Background'** means to simply refer to the OsmAnd app not being displayed in the foreground, in particular when the device screen is off (which is different from the Android-internal definition of 'background').

**Note**: Since Android 11 (2020/12) there is no more system permission option "Always allow" to use location access in the background, but this **does not limit** OsmAnd's background track recording: According to Google's documentation it is now considered **foreground usage**, as internally the foreground service permission is now used and a system notification about a track being recorded is always visible.


## Recorded tracks are noisy

There are 2 typical accuracy issues leading to a 'messy' recorded track.
- Longer standing in same place 
- Bad GPS signal and switching to network signal based location

You may
- either avoid such issues if using "Pause" to interrupt the recording during such conditions.
- It is also possible to edit a track later and remove "noisy" points. 
- Or you can use the Trip recording Plugin settings to filter "noisy" points already while recording, based on your **experience** and **recording device**. You can filter out points by various criteria: 
  - Points with low or zero speed
  - Points with bad precision (GPS 'hdop')
  - Points closer than a threshold in meters

- **Google Services API or Android API:** You may further change how OsmAnd receives location data on Android devices. In [OsmAnd Settings → Location Source](../personal/global-settings.md#location-source) select between **Google Play Services** and **Android API**, in many cases changing to **Android API** helps to improve the recorded tracks and makes them less noisy.


## Recorded tracks have gaps

- In general: Starting with Android 4.4 (or maybe before), new Android power saving options allow limiting CPU max speed and screen brightness, and facilitate apps being killed in the background, e.g. while the device screen is turned off.
- For outdoor use (screen brightness), map rendering (CPU limit), and 'background' track recording these power saving features may impair your experience with OsmAnd, you may want to consider turning the device (Android) power saving entirely off. (It depends on the apps, but I observe no decisive increase in power usage for any of my apps.)

### Check in OsmAnd

* To allow OsmAnd recording tracks while the device screen is off, make sure the OsmAnd setting (under) **'Prevent standalone logging'** under Plugin/Trip recording is deactivated.
* Update OsmAnd to 3.9 or higher. Different Android versions apply different strategies to reduce power consumption [by killing apps running in the background](https://dontkillmyapp.com/). New versions of OsmAnd therefore deploy a Foreground service during navigation or while recording a trip, visible in the Android notification bar. This should keep the app active on most systems, at least under Android 8+ (Issues [\#5255](https://github.com/osmandapp/Osmand/issues/5255), [\#5587](https://github.com/osmandapp/Osmand/issues/5587)).

### In Android, try these steps
* On some systems it may be sufficient to just exempt the OsmAnd app from power optimization, your mileage may vary: In your **Android's** Power or Power Savings setting, white-list OsmAnd to not being optimized: In **Android's** 'Apps', 'Applications', or 'App Manager' settings, find OsmAnd and tap it. You may find a line item regarding 'Power Savings' or 'Power Consumption': Tap it and exempt OsmAnd from power optimization measures. ([Issue \#5255](https://github.com/osmandapp/Osmand/issues/5255))
* Disable the Android Power Saving on your device, this often helps for older Android versions

### Tested Power Settings for Android 9, 10, and 11 (Hardy, 2020-08-25)

I have successfully tested the following Power settings under Android 9, 10 and later 11 (on Samsung devices) for OsmAnd to log gapless tracks. Please locate these **11 settings** and set accordingly:
* (1) **Power (saving) mode** = OFF   (called 'Optimized' in Android 10)
* (2) **Adaptive power saving** = OFF   (leaving ON may periodically use Medium power saving which inhibits OsmAnd logging.)
* (3) **Adaptive battery** = ON   (candidate for 'OFF', but no problem detected so far)
* (4) **Put unused apps to sleep** = OFF   (check list of sleeping apps)
* (5) **Auto disable unused apps** = OFF   (seems not to exist anymore in Android 10)
* (6) **Optimize settings** = OFF   (in Android 10 under Device care / Advanced, in Android 11 seems gone)
* (7) **Notifications** = ON   (may have been removed in Android 11)
* (8) **Auto optimize (daily)** = ON
* (9) **Auto restart (at set times)** = OFF
* (10) **Optimize Settings** = OFF   (in Android 11 seems gone)
* (11) **Apps / OsmAnd / Optimize Battery Usage** or **Apps / 3-dots / Special access / Optimize battery usage / All / OsmAnd** = May leave all unchanged (looks like OsmAnd does not need to have Battery optimization disabled here)

Depending on your version of Android these settings may be scattered over these various _Android Settings screens_:
* _Device care_
* _Device care / 3-dots / Automation_
* _Device care / Advanced_
* _Device care / Battery_
* _Device care / Battery / Settings_
* _Device care / Battery / App Power Management_
* _Device care / Battery / More battery settings_


## OsmAnd 3.9: Altitude issues when using Google Play Services

Google Play has changed their policy and in order to comply, OsmAnd since version 3.9 (except Nightly, F-Droid, Huawei, Amazon builds) has to use Google Play Services to obtain location fixes while running in the background (i.e. in Android terminology as a foreground service with visible system notification).

After that change there seems a problem with recording altitude: Apparently Google Play Services interpolate the altitude measurement very aggressively, see [Github issue #10864](https://github.com/osmandapp/OsmAnd/issues/10864). This issue affects Android 10, possibly not Android 11. [Google issue 180218747](https://issuetracker.google.com/issues/180218747) is already reported, probably will be fixed 09-03-2021.

As a workaround, in [OsmAnd Settings → Location Source](../personal/global-settings.md#location-source) you may switch the location source from **Google Play Services** to **Android API**.


## OsmAnd 3.9: GPS wakeup now replaced by continuous foreground service (2020/12)

As of version 3.9, when needed for track recording or navigation, OsmAnsd will keep GPX on continuously via an Android foreground service, and this will be visible as an Android system notification.

The prior strategy of using a doze mode and periodic GPS Wake-Up has been removed from our code (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), as required by new Google Play restrictions on Background location access. As a result, the following sections (A) and (B) apply only to versions of OsmAnd prior to 3.9:

**<del> (A) GPS Wake-up Strategy</del>**
- (A1) While OsmAnd is used for e.g. Navigation: We keep the system's GPS module on all the time, as continuous location information is key here. Effect on battery use (order of magnitude) seems about 5% per hour on older systems up to Android 4.4, 2-3% for newer systems.
- (A2) For 'background' track recording without concurrent navigation: For recording intervals up to 15sec, we also keep the GPS on, no big battery saving can be achieved by other strategies.
- (A3) For intervals \>=30sec, we turn GPS on only for each sampling point. This has some noticeable effect on the accuracy of the points recorded, but reduces battery usage to order-of-magnitude 1.2% per hour for 30sec track recording.

**<del> (B) GPS Wake-up Issues</del>**

In order to achieve the GPS wake-up, so far we use the Android AlarmManger to wake up the device periodically (also from Doze mode, which was introduced in Android 6). New Android versions introduced the following issues:
- **(B1) AlarmManager's setRepeating() became inexact starting with Android 4.4:**  
Mitigation: We now use *setRepeating()* only up to Android 4.2, the new *setExact()* method starting with Android 4.4, and *setExactAndAllowWhileIdle()* for Android 8+. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Starting from Android 4.4, systems limit the number of times *setExact()* is executed repeatedly** to e.g. once per 5 or even 15 minutes. (The actual value seems wildly device specific.)  
No good solution found for now. Current mitigation is we do not use AlarmManager wake-up, instead keep GPS always on for background track logging on devices with Android 5+ for all recording intervals shorter than 5 minutes. This produces reliable and precise tracks at the cost of the higher battery use. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))
