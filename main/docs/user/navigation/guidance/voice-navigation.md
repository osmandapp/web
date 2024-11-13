---
sidebar_position: 6
title:  Voice Prompts / Notifications
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


## Overview

Voice prompt and text notification features help follow a [calculated route](../setup/route-navigation.md) comfortably and, most importantly, safely.

Voice prompts also work while your device screen is turned off, so you can use them to [reduce battery consumption](#screen-control). Similarly, while following an OsmAnd navigation, you can use other apps.  


:::note

- <Translate android="true" ids="voice_announces_info"/>
- Text notifications fully reflect trigger time and messages of the voice prompts messages.

:::  



## Required Setup Parameters Voice Prompts

OsmAnd offers different types of voice prompt settings to help you follow your route. To set up voice prompts, you need to go to the appropriate section of the application.  

- You can activate voice prompts in the [Navigation](../guidance/navigation-settings.md) section by tapping Settings. You can also enable and configure voice prompts in Configure Profile, and Navigation settings.
- You can turn the sound for voice prompts On or Off in *Menu → Navigation → "On/Off" button* or *Menu → Navigation → "Settings" icon → Sound*.

Read more about under what conditions, when, and which voice prompts are activated in the [Navigation Voice Prompt Triggering](../../../technical/algorithms/voice-prompt-triggering.md) documentation.  


### Voice Settings

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> button* *(or <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Choose profile → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>  

1. **[Language](#voice-prompt-language)**. Select your preferred language and type.
2. **Announcement**. Allows you to configure the following types of prompts: 
    - *Street names (TTS), Exit numbers, Traffic warnings, Pedestrian crosswalks* and *Tunnels.*
    - *[Speed cameras](#speed-cameras)*. 
    - Also configure the **[Alert widget](../../widgets/nav-widgets.md#alert-widget)** to use with announcements.
3. **User points**:
    - Enable voice prompts for the pre-set and added [Waypoints](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track), [Favorites](../../personal/favorites.md) or [POIs](../../map/point-layers-on-map.md#points-of-interest-poi). While driving, the selected points will be announced when you approach or pass them.

| Prompt Type | Lead Time [s]:<br/>Corresponding<br/>Lead Distance @ Default Speed [m] | Limit |
| :- | :- | :- |
| Approaching  | **60 s:**<br/>Driving: 750 m<br/>Cycling: 167 m<br/>Walking: 67 m  |  No more than 1 point at a time |
| Passing | **15 s:**<br/>Driving: 188 m<br/>Cycling: 42 m<br/>Walking: 17 m | No more than 3 points at a time |
4. [**Speed limit**](#speed-limit):
    - *Announce when exceeded* (on/off):
    - *Speed limit tolerance*.
5. **Other**:
    - *Announce GPS signal loss and recovery*. OsmAnd announces if the GPS signal on the device is lost.  
    - *Announce route recalculation*. OsmAnd reports route recalculation in case of a [deviation or movement in the reverse direction](./navigation-settings.md#recalculate-route).
    - *Announce deviation from the route*. You receive information about deviations from the route according to the [set parameters](./navigation-settings.md#recalculate-route).
6. **Options**:
    - *Repeat navigation instructions*. Allows you to repeat the navigation instructions at regular intervals from 1 min to 30 min. Or manually - if you miss a voice prompt, you can listen to it again by simply tapping [the current turn arrow](../../widgets/nav-widgets.md#next-turns) on the application screen.
    - *[Announcement time](#announcement-time)*.  
7. **Output** (*Android only*):
    - *[Voice guidance output](#voice-guidance-output)*.
    - *Pause music* - voice prompts stop music playback for a while.


### Speed Cameras

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

[Speed cameras alerts](../../personal/global-settings.md#uninstall-speed-camera) allow you to activate or deactivate POIs with speed cameras. You will need to restart the OsmAnd application to apply the changes.
  
In some countries or regions, using speed camera warning applications is illegal. You must make a choice depending on the laws in your country. Select **Keep active**, and you will receive speed camera alerts and notifications. Select **Uninstall** and all data related to speed cameras, such as warnings, notifications, and POIs, will be deleted until you completely reinstall OsmAnd.  


### Speed Limit

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Voice Navigation](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Voice Navigation](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>  


The *Speed limit* option allows OsmAnd to announce when the current speed exceeds the set speed limit. The application takes data about maximum speed limits on roads from OpenStreetMap.

- *Announce when exceeded*:  
    - *Speed limit tolerance*.  
        Select an allowable speed deviation, on the screenshot between -10 km/h and +20 km/h (the speed is displayed in the *Units of speed* you set), from the [maximum legal speed limit](https://wiki.openstreetmap.org/wiki/Key:maxspeed) on the current road. When the selected speed limit tolerance is exceeded, a voice prompt is activated.  

For [**Speedometer** widget](../../widgets/info-widgets.md#speedometer) in the app and for [Android Auto](../../navigation/auto-car.md#speedometer), [CarPlay](../../navigation/car-play.md#speedometer), this *Speed limit tolerance* setting affect the speed displayed in *Speed limit warning*.

### Announcement Time

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)  

The announcement time of the different voice prompts depends on the selected profile, the type of prompt, the current navigation speed, and the default navigation speed. With this setting, you can change the distance before the voice prompts are activated by applying a distance multiplier: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.  

In the *Time and Distance Intervals* drop-down list, you can view detailed information about the activation of prompts for the different distance multipliers. For more information, see the [Navigation Voice Prompt Triggering](../../../technical/algorithms/voice-prompt-triggering.md).


### Voice Guidance Output

<InfoAndroidOnly/>

![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-1.png)

To avoid playing audio in the same output stream at the same time, the audio focus is implemented in Android. OsmAnd will use the loudspeaker selected from the list in this setting to audio output. Other applications will pause playback or turn down the volume to make it easier for you to hear OsmAnd's voice prompts.  

- Media/navigation audio.
- Notification audio.
- Phone call audio (to interrupt Bluetooth [car stereos](../auto-car.md)).


### Testing of Voice Prompts

**Testing of voice prompts** is possible only for the Android version of the application. Enable the *OsmAnd development plugin* and run [Simulate Navigation](../../navigation//setup/route-navigation.md#simulated-navigation) or use [Test voice prompts](../../plugins/development.md#application-testing).


### Common Problems
<!-- 
Troubleshooting  
Fixes issues with voice prompts -->

When using voice prompts, you may have issues with their playback. Here are some solutions to fix these issues.  

1. Make sure that the volume of your device is on and not off. Once you start navigating, increase the volume.
2. Make sure that the sound is turned on during navigation.  You can turn the sound on or off in *Menu → Navigation →* On/Off button or *Menu → Navigation → Settings icon → Sound*.  
3. Select which [speakers](#voice-guidance-output) to use.
4. Check which [voice guidance](#voice-prompt-language) are selected.


## TTS (Text-to-Speech)

TTS voices are the preferred voices to use in OsmAnd. They are bundled with the application but require the system to have a [Text-to-speech engine](https://en.wikipedia.org/wiki/Speech_synthesis) installed. The engines are often included in Android and iOS or can be installed separately. A list of engines and supported languages for Android may be found here [List of languages with available TTS engines on Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

To configure the TTS of your device:

- Go to your device settings,
    - [Android](https://support.google.com/accessibility/android/answer/6006983)
    - [iOS](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen)
- Find the *Language & Keyboard* section, *Text-to-speech*, or similar.
- Select, activate, or install it, then configure it to support your preferred language, which may just be a setting or require you to download an additional file.  

Check if TTS works properly in Android using the *Listen to example* or a similar test button. You can also check if the voice prompts are selected correctly in OsmAnd, to do this, enable the OsmAnd Development plugin and then go to *Settings → Plugins → OsmAnd Development → Voice Prompts Test*.

Additional information can be found in the [Troubleshooting](../../troubleshooting/navigation.md#voice-navigation) section.  

### Voice Prompt Language

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-tts.png)  ![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-recorded.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>  

In OsmAnd you can select your preferred language and prompt style from the list:

- *<Translate android="true" ids="tts_title"/>*. The text-to-speech feature pronounces all types of instructions: street names, turn instructions, POI names, and more.
- *<Translate android="true" ids="shared_string_recorded"/>* (*for Android*). The recorded voice sounds better than the technical voice, but can only speak pre-recorded phrases for turn instructions. It cannot announce street names or POIs.


#### Voice Prompts Settings in the System Settings of Devices

You can only change the voice type, playback speed, pitch, or pause in sentences in the system settings of the device.  

- **Android:**
    - Open your **device Settings**.
    - Select *Accessibility*, then find *Text-to-speech* output.
    - Choose your preferred engine, language, speech rate, and pitch.

- **iOS:**
    - Go to *device Settings → Accessibility*, then **Spoken Content**.
    - Adjust any of the following: voices, language, speaking rate, pronunciations.


#### List of Languages

There are currently a total of 45 languages. Not all languages listed below may be supported by every TTS engine. See [here](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

| | |
| :--- | :--- |
| **А** | Arabic |
| **B** | Belarusian, Bulgarian |
| **C** | Catalan, Chinese, Chinese(Hong Kong), Chinese(Traditional), Croatian, Czech |  
| **D** | Danish, Dutch |
| **E** | English, English(United Kingdom), Estonian |
| **F** | Finnish, French |
| **G** | German, German(casual), Greek, Guarani |
| **H** | Hindi, Hungarian, Hungarian(formal) |
| **I** | Indonesian, Italian |
| **J** | Japanese |
| **K** | Korean  |
| **L** | Latvian |
| **N** | Norwegian Bokmal  |
| **P** | Persian, Polish, Portuguese, Portuguese(Brazil) |  
| **R** | Romanian, Russian  |
| **S** | Sardinian, Serbian (Cyrillic), Slovak, Slovenian, Spanish, Spanish (Argentina), Swahili, Swedish  |
| **T** | Turkish  |
| **U** | Ukrainian  |


## Recorded Voice Prompts

### Download Voice Packages

<InfoAndroidOnly />

Using recorded voices in OsmAnd should be a fallback only. They are rather limited, and cannot pronounce street names, place names, etc. You can download voice prompts from two different sets from the list.

- The first type, these are the recommended ones:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-1.png)  ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-2.png)  

- The second type are recorded voice prompts, with an incomplete set of features:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*  

    ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-recorded.png)  

### Beep Modes

<InfoAndroidOnly />

You can configure an OsmAnd profile to beep instead of speaking, in a similar way to a cycle computer. There are three basic patterns: *minimal*, *simple*, and *complex*. The simple and complex patterns have *loud* variants, which will be considerably easier to hear in a loud environment but may sound unpleasantly harsh.
  
*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*  

- **Minimal**. Suitable for following a known route on foot with minimal distractions, this pattern will alert you when passing intermediate destinations, favourites and POIs, and when you have deviated from or returned to the route. It will not provide any audio warnings for turns.
- **Simple**. In addition to alerts for destinations, favorites, POIs, and others, the simple pattern alerts you with a longer beep when you need to turn.
- **Complex**. Suitable for road cycling, the complex pattern uses beeps of different lengths and pitches to inform you about upcoming turns.
    - A low beep means left turn, while a high beep means right. A series of middle pitched beeps represents the exit to take on a roundabout (traffic circle). All three pitches in sequence represents a U-turn. In all these cases short beeps mean prepare to do something, while long beeps mean do something now.


## Text Notifications

Once you start a route, you can view the information in the drop-down system menu in the notification list. OsmAnd's silent notifications contain information such as turn-by-turn instructions, turn directions arrows, arrival time and time to go, current speed and distance to destination.  

![Navigation route Notification Android](@site/static/img/navigation/route/navigation_notifications_android.png)

Active buttons on the Drop-down system menu for your navigation:

- *<Translate android="true" ids="stop_navigation_service"/>*. Allows stopping your navigation.
- *<Translate android="true" ids="shared_string_pause"/>*. Allows pausing your navigation.
- *<Translate android="true" ids="shared_string_resume"/>*. Allows resuming your navigation.  

### Configure Notifications

You can change the notification settings for the OsmAnd app in the system settings of your device. Notifications can be displayed on the lock screen, the home screen, in the drop-down menu, or at the top of the app.  

Read about how notification control is implemented on Android in this [article](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). For iOS - [here](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).


## Screen Control

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Screen control menu Android](@site/static/img/navigation/route/screen_control_android.png)

You can control the screen of your device to save power. This mode has two general settings: *<Translate android="true" ids="screen_timeout"/>* and *<Translate android="true" ids="turn_screen_on"/>*.

### Screen Timeout

1. **<Translate android="true" ids="system_screen_timeout"/>**. The screen turns off depending on the system settings of your device. The *Change Settings* button provides quick access to the system menu such as *Display and Brightness* where you can adjust the screen timeout.

    ![System timeout screen control Android](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. If *Keep Screen On* is turned on, the device's screen does not apply a timeout after waking up. If it is disabled, you can set the time after which the device's screen will turn off if you do not interact with it, from 5 to 60 seconds.  

    ![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Turn Screen On

![turn screen on Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

Select screen wake-up options and ensure OsmAnd remains in the foreground when the device is locked.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>


## Related Articles

- [Route parameters](../routing/osmand-routing.md#routing-types)
- [Route preparation](../setup/route-navigation.md)
- [Navigation by track](../setup/gpx-navigation.md)
- [Navigation by markers](../setup/markers-navigation.md)
- [Route details](../setup/route-details.md)
- [Navigation settings](./navigation-settings.md)
- [Map screen during navigation](./map-during-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *This article was last updated in October 2024*
