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


## Overview {#overview}

OsmAnd’s voice navigation feature provides real-time spoken instructions and alerts that help you stay informed and safe while on the move. You can tailor the guidance to your preferences and needs. To do so, select a suitable voice profile, either a [Text-to-Speech (TTS) engine](#tts-text-to-speech) that can dynamically announce street names, distances, and speed limits, or a [pre-recorded voice](#recorded-voice-prompts) offering concise instructions.  

In addition to turn-by-turn directions, OsmAnd’s voice navigation can notify you about upcoming points of interest, changes in traffic conditions, and when you exceed a preset speed limit. To learn more about customizing these alerts, see [Announcement time settings](#announcement-time) and [Speed Limit warnings](#speed-limit).  

With the right combination of voice options, alert settings, and device sound adjustments, you will receive timely and clear navigation information throughout your route.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- Text notifications fully reflect trigger time and messages of the voice prompts messages.

:::  


## Setting Up Voice Prompts {#setting-up-voice-prompts}

OsmAnd provides various options for controlling voice prompts so you can follow your route with convenience. To configure these settings, begin in the appropriate application sections.  

- Activate voice prompts from the [Navigation](../guidance/navigation-settings.md) section by tapping **Settings**. You can also enable and configure voice prompts through *Configure Profile*, and *Navigation settings*.
- Turn voice prompts on or off using *Menu → Navigation →* tap *Sound button*,
    or *Menu → Navigation →* Settings button *→ Sound →* toggle on/off.

For more information on how and when voice prompts are triggered, consult the [Navigation Voice Prompt Triggering](../../../technical/algorithms/voice-prompt-triggering.md) documentation.  


### Voice Settings {#voice-settings}

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

**[Language](#voice-prompt-language)**. Select your preferred language and type.

**Announcement**. Allows you to configure the following types of prompts:

- *Street names (TTS), Exit numbers, Traffic warnings, Pedestrian crosswalks* and *Tunnels.*
- *[Speed cameras](#speed-cameras)*.
- Also configure the **[Alert widget](../../widgets/nav-widgets.md#alert-widget)** to use with announcements.

**User points**:

- Enable voice prompts for the pre-set and added [Waypoints](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track), [Favorites](../../personal/favorites.md) or [POIs](../../map/point-layers-on-map.md#points-of-interest-pois). While driving, the selected points will be announced when you approach or pass them.

| Prompt Type | Lead Time [s]:<br/>Corresponding<br/>Lead Distance @ Default Speed [m] | Limit |
| :- | :- | :- |
| Approaching  | **60 s:**<br/>Driving: 750 m<br/>Cycling: 167 m<br/>Walking: 67 m  |  No more than 1 point at a time |
| Passing | **15 s:**<br/>Driving: 188 m<br/>Cycling: 42 m<br/>Walking: 17 m | No more than 3 points at a time |

[**Speed limit**](#speed-limit):

- *Announce when exceeded*.
- *Speed limit tolerance*.

**Other**:

- *Announce GPS signal loss and recovery*. OsmAnd announces if the GPS signal on the device is lost.  
- *Announce route recalculation*. OsmAnd reports route recalculation in case of a [deviation or movement in the reverse direction](./navigation-settings.md#recalculate-route).
- *Announce deviation from the route*. You receive information about deviations from the route according to the [set parameters](./navigation-settings.md#recalculate-route).

**Options**:

- *Repeat navigation instructions*. Allows you to repeat the navigation instructions at regular intervals from 1 min to 30 min. Or manually - if you miss a voice prompt, you can listen to it again by simply tapping [the current turn arrow](../../widgets/nav-widgets.md#next-turn) on the application screen.
- *[Announcement time](#announcement-time)*.

**Output** (*Android only*):

- *[Voice guidance output](#voice-guidance-output)*.
- *Pause music*. Voice prompts stop music playback for a while.


### Speed Cameras {#speed-cameras}

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

[Speed cameras alerts](../../personal/global-settings.md#uninstall-speed-cameras) allow you to activate or deactivate POIs with speed cameras. You will need to restart the OsmAnd application to apply the changes.
  
In some countries or regions, using speed camera warning applications is illegal. You must make a choice depending on the laws in your country. Select **Keep active**, and you will receive speed camera alerts and notifications. Select **Uninstall** and all data related to speed cameras, such as warnings, notifications, and POIs, will be deleted until you completely reinstall OsmAnd.  


### Speed Limit {#speed-limit}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Voice Navigation](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Voice Navigation](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>  

The **Speed limit** option allows OsmAnd to inform you when your current speed exceeds a specified threshold. Data on maximum legal speed limits is sourced from OpenStreetMap.

**Announce when exceeded**  
*Speed limit tolerance* lets you select an allowable deviation (e.g., -10 km/h to +20 km/h) from the [legal maximum speed limit](https://wiki.openstreetmap.org/wiki/Key:maxspeed) on the current road. When your speed exceeds this tolerance, OsmAnd issues a voice prompt.  

*Rules for activating voice prompts* when the speed limit is exceeded:

- *Initial warning*. Detecting that you exceed the speed limit, OsmAnd waits 5 seconds before issuing the first voice warning.
- *Repeat announcement delay*. If you continue speeding, the next warning is delayed for 120 seconds to prevent overly frequent notifications.
- *Timer reset*. The timer resets if you stay within the legal limit for 30 seconds. Any further speeding will again wait 5 seconds before the next warning sounds.

This **Speed limit tolerance** setting affects the speed displayed in the *warning* part of the [Speedometer widget](../../widgets/info-widgets.md#speedometer) in the OsmAnd app, [Android Auto](../../navigation/auto-car.md#speedometer), and [CarPlay](../../navigation/car-play.md#speedometer).


### Announcement Time {#announcement-time}

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)  

The announcement time of the different voice prompts depends on the selected profile, the type of prompt, the current navigation speed, and the default navigation speed. With this setting, you can change the distance before the voice prompts are activated by applying a distance multiplier: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.  

In the *Time and Distance Intervals* drop-down list, you can view detailed information about the activation of prompts for the different distance multipliers. For more information, see the [Navigation Voice Prompt Triggering](../../../technical/algorithms/voice-prompt-triggering.md).


### Voice Guidance Output {#voice-guidance-output}

<InfoAndroidOnly/>

![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-1.png)

To avoid playing audio in the same output stream at the same time, the audio focus is implemented in Android. OsmAnd will use the loudspeaker selected from the list in this setting to audio output. Other applications will pause playback or turn down the volume to make it easier for you to hear OsmAnd's voice prompts.  

- Media/navigation audio.
- Notification audio.
- Phone call audio (to interrupt Bluetooth [car stereos](../auto-car.md)).


### Testing of Voice Prompts {#testing-of-voice-prompts}

You can test the voice prompts with:

- [Simulate Navigation](../../navigation//setup/route-navigation.md#simulated-navigation). Set a route and start the simulation: *Navigation menu → Settings → Simulate navigation*.

- [Test voice prompts](../../plugins/development.md#application-testing) (*Android only*). Use the *Development plugin* to test voice prompts:
    - Go to *Menu → Plugins → Enable OsmAnd Development*.
    - Go to *Settings → Test voice prompts*.
    - Select a language and check if the system plays the prompts correctly.


### Solving Audio Issues {#solving-audio-issues}

If you are not hearing **voice prompts** or [speed limit warnings](#speed-limit):

- Ensure your device volume is on and turned up.
- Confirm that sound is enabled during navigation: *Menu → Navigation → On/Off sound button* or *Menu → Navigation → Settings button → Sound* for detailed audio configuration.  
- Select which [speakers](#voice-guidance-output) to use.
- Check which [voice guidance](#voice-prompt-language) is selected, and make sure you have a TTS or recorded voice capable of announcing speed limit warnings.
- Verify that audio isn’t routed to an unintended output device (e.g., a disconnected Bluetooth headset).  

For additional troubleshooting steps, refer to the [navigation troubleshooting guide](../../troubleshooting/navigation.md#voice-navigation).


## TTS (Text-to-Speech) {#tts-text-to-speech}

OsmAnd supports **Text-to-Speech (TTS)** voices, which provide dynamic and detailed voice guidance, including turn instructions, street names, and POI announcements. TTS voices are included in the application but require a [Text-to-speech engine](https://en.wikipedia.org/wiki/Speech_synthesis) installed on the device.  

Most modern Android and iOS devices include a default TTS engine, but additional engines and languages may be installed separately.  

For a list of **available TTS engines and supported languages** on Android, refer to:
[List of languages with available TTS engines on Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***Configuring TTS on your device:***

**Android:**

1. Open Settings.
2. Navigate to *Accessibility → Text-to-Speech Output*.
3. Select a **TTS engine** (Google TTS or another installed engine).
4. Choose a **preferred language** (some may require additional downloads).
5. Adjust speech rate, pitch, and playback speed as needed.
6. Tap **Listen to Example** to test the voice output.

For more details, refer to:  
[Google Support – Android Text-to-Speech Settings](https://support.google.com/accessibility/android/answer/6006983).

**iOS:**

1. Open Settings.
2. Go to *Accessibility → Spoken Content*.
3. Tap **Voices** to select a preferred voice.
4. Adjust **Speaking Rate**, **Pronunciations**, and other settings.
5. Test the voice using **Speak Selection** or **Speak Screen**.

For more details, refer to:  
[Apple Support – iPhone Speech Settings](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***Testing Voice prompts:***

To check if TTS is functioning properly within OsmAnd:

- Enable the **Development Plugin**: *Menu → Settings → Plugins → OsmAnd Development*.
- Open [Test voice prompts](../../plugins/development.md#application-testing): *Menu → Settings → Plugins → OsmAnd Development → Test Voice Prompts*.

For troubleshooting, refer to:  
[Troubleshooting voice navigation](../../troubleshooting/navigation.md#voice-navigation).


### Voice Prompt Language {#voice-prompt-language}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-tts.png)  ![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-recorded.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

OsmAnd provides two types of voice prompts:

- **<Translate android="true" ids="tts_title"/>**
    - Uses the device’s TTS engine to generate voice prompts dynamically.
    - Reads street names, turn instructions, POI names, and other details.
    - Supports multiple languages and pronunciation settings.
    - Can be customized with speech rate, pitch, and pronunciation settings.

- **<Translate android="true" ids="shared_string_recorded"/>** (*Android only*)
    - Uses pre-recorded voice prompts for navigation.
    - Sounds more natural than TTS but has limitations.
    - Does not read street names or POI names
    - Only provides basic turn instructions.

> *TTS is recommended for detailed navigation guidance.*

#### System-Level Voice Prompt Settings {#system-level-voice-prompt-settings}

Voice prompt behavior, including *playback speed, pitch, and pauses*, can be adjusted only in the device’s system settings.

**Android:**

1. Open device *Settings → Accessibility → Text-to-speech output*.
2. Choose your preferred TTS engine and language.
3. Adjust speech rate, pitch, and playback speed.

**iOS:**

1. Open device *Settings → Accessibility → Spoken Content*.
2. Adjust: language, voices, speaking rate, pronunciations.

> *For additional voices, download language packs from system settings.*


#### Available TTS Languages {#available-tts-languages}

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
| **H** | Hindi, Hungarian, Hungarian(formal), Hebrew |
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
| **V** | Vietnamese  |


## Recorded Voice Prompts {#recorded-voice-prompts}

### Download Voice Packages {#download-voice-packages}

<InfoAndroidOnly />

Using recorded voices in OsmAnd should be a fallback only. They are rather limited, and cannot pronounce street names, place names, etc. You can download voice prompts from two different sets from the list.

- The first type, these are the recommended ones:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-1.png)  ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-2.png)  

- The second type are recorded voice prompts, with an incomplete set of features:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*  

    ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-recorded.png)  

### Beep Modes {#beep-modes}

<InfoAndroidOnly />

You can configure an OsmAnd profile to beep instead of speaking, in a similar way to a cycle computer. There are three basic patterns: *minimal*, *simple*, and *complex*. The simple and complex patterns have *loud* variants, which will be considerably easier to hear in a loud environment but may sound unpleasantly harsh.
  
*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*  

- **Minimal**. Suitable for following a known route on foot with minimal distractions, this pattern will alert you when passing intermediate destinations, favorites and POIs, and when you have deviated from or returned to the route. It will not provide any audio warnings for turns.
- **Simple**. In addition to alerts for destinations, favorites, POIs, and others, the simple pattern alerts you with a longer beep when you need to turn.
- **Complex**. Suitable for road cycling, the complex pattern uses beeps of different lengths and pitches to inform you about upcoming turns.
    - A low beep means left turn, while a high beep means right. A series of middle pitched beeps represents the exit to take on a roundabout (traffic circle). All three pitches in sequence represents a U-turn. In all these cases short beeps mean prepare to do something, while long beeps mean do something now.


## Text Notifications {#text-notifications}

Once you start a route, you can view the information in the drop-down system menu in the notification list. OsmAnd's silent notifications contain information such as turn-by-turn instructions, turn directions arrows, arrival time and time to go, current speed and distance to destination.  

![Navigation route Notification Android](@site/static/img/navigation/route/navigation_notifications_android.png)

Active buttons on the Drop-down system menu for your navigation:

- *<Translate android="true" ids="stop_navigation_service"/>*. Allows stopping your navigation.
- *<Translate android="true" ids="shared_string_pause"/>*. Allows pausing your navigation.
- *<Translate android="true" ids="shared_string_resume"/>*. Allows resuming your navigation.  

### Configure Notifications {#configure-notifications}

You can change the notification settings for the OsmAnd app in the system settings of your device. Notifications can be displayed on the lock screen, the home screen, in the drop-down menu, or at the top of the app.  

Read about how notification control is implemented on Android in this [article](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). For iOS - [here](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).


## Screen Control {#screen-control}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Screen control menu Android](@site/static/img/navigation/route/screen_control_android.png)

You can control the screen of your device to save power. This mode has two general settings: *<Translate android="true" ids="screen_timeout"/>* and *<Translate android="true" ids="turn_screen_on"/>*.

### Screen Timeout {#screen-timeout}

1. **<Translate android="true" ids="system_screen_timeout"/>**. The screen turns off depending on the system settings of your device. The *Change Settings* button provides quick access to the system menu such as *Display and Brightness* where you can adjust the screen timeout.

    ![System timeout screen control Android](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. If *Keep Screen On* is turned on, the device's screen does not apply a timeout after waking up. If it is disabled, you can set the time after which the device's screen will turn off if you do not interact with it, from 5 to 60 seconds.  

    ![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Turn Screen On {#turn-screen-on}

![turn screen on Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

Select screen wake-up options and ensure OsmAnd remains in the foreground when the device is locked.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>


## Related Articles {#related-articles}

- [Route parameters](../routing/osmand-routing.md#routing-types)
- [Route preparation](../setup/route-navigation.md)
- [Navigation by track](../setup/gpx-navigation.md)
- [Navigation by markers](../setup/markers-navigation.md)
- [Route details](../setup/route-details.md)
- [Navigation settings](./navigation-settings.md)
- [Map screen during navigation](./map-during-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

### Common Issues and Solutions {#common-issues-and-solutions}

1. [Audio Issues.](#solving-audio-issues)
2. [Testing of Voice Prompts.](#testing-of-voice-prompts)
3. [Why should I use a TTS voice instead of a recorded voice?](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. [TTS does not function properly? Follow these steps to fix it.](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)

> *Last updated: March 2025*
