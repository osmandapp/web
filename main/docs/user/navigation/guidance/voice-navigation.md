---
sidebar_position: 6
title:  Voice prompts / Notifications
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

<InfoIncompleteArticle/>

## Overview

Voice prompts and text notifications are features used to help you while [navigating a selected route](../setup/route-navigation.md). With their help, you can easily know where you are or in which direction you should go next. The main function of these features is to provide you with comfortable and, most importantly, safe movement on the route. And also their use significantly [reduces battery consumption](#screen-control), which can be useful for different [types of routes](../routing/index.md), where saving battery power is important.  


## Voice prompts

:::note
<Translate android="true" ids="voice_announces_info"/>
:::  

Voice prompts help you move in the right direction without distracting you from the road, or help you enjoy the surroundings while walking or hiking. While using OsmAnd, you can use other apps on your device or keep the screen turned off, listening in the background for prompts about what's ahead of you on the route.  


## Settings of voice prompts

OsmAnd offers different types of settings for voice prompts to help you follow your route. To set up voice prompts, you need to go to the appropriate section of the application.  

- You can activate voice prompts in the [Navigation](../guidance/navigation-settings.md) section by tapping Settings. You can also enable and configure voice prompts in Configure profile, Navigation settings. 
- You can turn the sound for voice prompts On or Off in *Menu → Navigation → "On/Off" button* or *Menu → Navigation → "Settings" icon → Sound*.

Read more about under what conditions, when, and which voice prompts are activated in the [Navigation Voice Prompt Triggering](../../../technical/algorithms/voice-prompt-triggering.md) documentation.  

:::info For Android version
You can set up voice prompts for the selected profile or for all available profiles in the app except for the *Browse map*. When you change each setting, a menu appears briefly with the text "Changes applied to the profile" and an "Apply to all profiles" button. Tap the button if it will be useful for you.
:::

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

1. **[Language](#language)** - select preferred language and type.
2. **Announcement group** - allows you to voice the following types of prompts: 
    - *Street names (TTS), Exit number, Traffic warnings, Pedestrian crosswalks* and *Tunnels.*
    - *[Speed cameras](#speed-cameras)*. 
 
:::note
You can turn on the **[Alert widget](../../widgets/nav-widgets.md#alert-widget)** for added convenience when using the voice prompts of an *Announcement group*.
:::  

3. **[User points group](#user-points-group)**:
    - *Track waypoints, Nearby Favorites* and *Nearby POI*.  
4. **Speed limit group**:
    - *Announce when exceeded* - allows you to announce when you exceed the allowed speed limit.
    - *Speed limit tolerance* (from -10 km/h to 20 km/h) - select the speed limit above which you will receive a voice warning.
5. **Other**: 
    - *Announce GPS signal loss and recovery* - OsmAnd will announce if your device loses the gps signal.  
    - *Announce route recalculation* - OsmAnd will report a recalculation of the route in case of a [deviation or movement in reverse direction](./navigation-settings.md#recalculate-route).
    - *Announce deviation from the route* - you will be informed about deviation from the route according to the [set parameters](./navigation-settings.md#recalculate-route).
6. **Options**:
    - *Repeat navigation instructions* - allows you to repeat the navigation instructions at regular intervals from 1 min to 30 min. Or manually - if you miss a voice prompt, you can listen to it again by simply tapping [the current turn arrow](../../widgets/nav-widgets.md#next-turns) on the application screen.
    - *[Announcement time](#announcement-time)*.  
7. **Output** (<u>for Android version</u>):
    - *[Voice guidance output](#voice-guidance-output)*.
    - *Pause music* - voice prompts stop music playback for a while.

### Language

You can select your preferred language and type of voice guidance for voice prompts from the list.
- *<Translate android="true" ids="tts_title"/>* (for Android) - <Translate android="true" ids="tts_description"/>
- *<Translate android="true" ids="shared_string_recorded"/>* (for Android) - <Translate android="true" ids="recorded_description"/>

:::note
Not all listed languages may be supported by the TTS engine. You can change the voice and playback speed only in the system settings of the device.
:::  

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

### User points group

In this group you can set whether the voice prompts for the pre-set and added [Waypoints](../../personal/tracks.md#add-waypoint), [Favorites](../../personal/favorites.md) or [POIs](../../map/point-layers-on-map.md#points-of-interest-poi) are audible. While driving, the selected points will be announced when you approach or pass them.    

| Prompt type | Response time | Response distance in meters | Limit |
| - | - | - | - | 
| Approaching  | 60 seconds | Driving: 750 m  /  Cycling: 167 m  /  Walking: 67 m  |  No more than 1 point at a time |
| Passing | 15 seconds | Driving: 188 m  /  Cycling: 42 m  /  Walking: 17 m | No more than 3 points at a time | 


### Speed cameras

[Speed cameras alerts](../../personal/global-settings.md#uninstall-speed-camera) allow you to activate or deactivate POIs with speed cameras. You will need to restart the OsmAnd application to apply the changes.   
  
In some countries or regions, using speed camera warning applications is illegal. You must make a choice depending on the laws in your country. Select **Keep active**, and you will receive speed camera alerts and notifications. Select **Uninstall** and all data related to speed cameras, such as warnings, notifications, and POIs, will be deleted until you completely reinstall OsmAnd.  

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)


### Announcement time

The announcement time of the different voice prompts depends on the selected profile, the type of prompt, the current navigation speed, and the default navigation speed. With this setting, you can change the distance before the voice prompts are activated by applying a distance multiplier: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.  
In the *Time and Distance Intervals* drop-down list, you can view detailed information about the activation of prompts for the different distance multipliers. For more information, see the [Voice Prompts in Navigation](../../../technical/algorithms/voice-prompt-triggering.md).  

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)   

### Voice guidance output

To avoid playing audio in the same output stream at the same time, the audio focus is implemented in Android. OsmAnd will use the loudspeaker selected from the list in this setting to audio output. Other applications will pause playback or turn down the volume to make it easier for you to hear OsmAnd's voice prompts.  
   - Media/navigation audio.
   - Notification audio.
   - Phone call audio (to interrupt Bluetooth [car stereos](../auto-car.md)).

![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-1.png)


## Additional details about voice prompts

### Download voice prompts

<InfoAndroidOnly />  

You can download voice prompts from two different sets from the list.  
- The first type, these are the recommended ones:  
*<Translate android="true" ids="shared_string_menu,welmode_download_maps,other_location,index_name_tts_voice"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-1.png)  ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-2.png)  

- The second type is recorded voice prompts, with an incomplete set of features:  
*<Translate android="true" ids="shared_string_menu,welmode_download_maps,index_name_voice"/>*  

![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-recorded.png)  

### TTS (Text-to-Speech)

If you choose TTS-voice, you need to have a [text-to-speech](https://en.wikipedia.org/wiki/Speech_synthesis) converter directly in your operating system. These are partially included in Android and iOS or can be installed separately. Go to your device's settings([Android ](https://support.google.com/accessibility/android/answer/6006983) or [iOS](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen.)), find the Language & Keyboard section, Text-to-speech, or similar. Select or install it, then also set up support for the language you want, this may be an additional setting or require you to download an additional file.  

Check if your Android TTS is working properly by using the "Listen to example" or a similar test button. You can also check if OsmAnd voice prompts are selected correctly, to do this go to *Settings → Plugins → OsmAnd development → Test voice prompts* (to see this setting, the OsmAnd development plugin must be activated).   

Additional information can be found in the [Troubleshooting](../../troubleshooting/navigation.md#voice-navigation) section.  

### List of available TTS

There are currently a total of 45 languages.  

| | |
| --- | --- |
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
| **S** | Sardinian, Serbian (cyrillic), Slovak, Slovenian, Spanish, Spanish (Argentina), Swahili, Swedish  | 
| **T** | Turkish  |
| **U** | Ukrainian  |

### Testing of voice prompts

<InfoAndroidOnly />  

For testing Voice prompts, you need to activate [OsmAnd development plugin](../../plugins/development.md) and start the function ["Test voice prompts"](../../plugins/development.md#application-testing).  


## Common problems with voice prompts
<!-- 
Troubleshooting  
Fixes issues with voice prompts -->

When using voice prompts, you may have issues with their playback. Here are some solutions to fix these issues.  

1. Make sure that the volume of your device is on and not off. Once you start navigating, increase the volume.
2. Make sure that the sound is turned on during navigation.  You can turn the sound on or off in Menu → Navigation → On/Off button or Menu → Navigation → Settings icon → Sound.  
3. Select which [speakers](#voice-guidance-output) to use. 
4. Check which [voice guidance](#language) are selected. 

## Beep modes

You can configure an OsmAnd profile to beep instead of speaking, in a similar way to a cycle computer.
  
*<Translate android="true" ids="shared_string_menu,welmode_download_maps,index_name_voice"/>*  

There are three basic patterns: minimal, simple, and complex. The simple and complex patterns have 'loud' variants, which will be considerably easier to hear in a loud environment but may sound unpleasantly harsh.

- Minimal

    Suitable for following a known route on foot with minimal distractions, this pattern will alert you when passing intermediate destinations, favourites and POIs, and when you have deviated from or returned to the route. It will not provide any audio warnings for turns.

- Simple

    In addition to alerts for destinations, favourites and POIs etc., the simple pattern alerts you with a longer beep when you need to turn.

- Complex
  
    Suitable for road cycling, the complex pattern uses beeps of different lengths and pitches to inform you about upcoming turns.

    A low beep means left turn, while a high beep means right. A series of middle pitched beeps represents the turn to take on a roundabout (traffic circle). All three pitches in sequence represents a U-turn. In all these cases short beeps mean prepare to do something, while long beeps mean do something now.

## Text Notifications

Once you start a route, you can view the information in the drop-down system menu in the notification list. OsmAnd's silent notifications contain information such as turn-by-turn instructions, turn directions arrows, arrival time and time to go, current speed and distance to destination.  

![Navigation route Notification Android](@site/static/img/navigation/route/navigation_notifications_android.png) 

Active buttons on the Drop-down system menu for your navigation:
- *<Translate android="true" ids="stop_navigation_service"/>* - allows stopping your navigation.
- *<Translate android="true" ids="shared_string_pause"/>* - allows pausing your navigation.
- *<Translate android="true" ids="shared_string_resume"/>* - allows resuming your navigation.  

### Configure notifications 

You can change the notification settings for the OsmAnd app in the system settings of your device. Notifications can be displayed on the lock screen, the home screen, in the drop-down menu, or at the top of the app. Read about how notification control is implemented on Android in this [article](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). For iOS - [here](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).


## Screen control

<InfoAndroidOnly/>

You can control the screen of your device to save power. This mode has two general settings: *<Translate android="true" ids="screen_timeout"/>* and *<Translate android="true" ids="turn_screen_on"/>*.  

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Screen control menu Android](@site/static/img/navigation/route/screen_control_android.png)  

### Screen timeout

- *<Translate android="true" ids="system_screen_timeout"/>* - The screen turns off depending on the system settings of your device. The "Change Settings" button provides quick access to the system menu such as "Display and Brightness" where you can adjust the screen timeout.

![System timeout screen control Android](@site/static/img/navigation/route/system_timeout_android.png)

- *<Translate android="true" ids="wake_time"/>* - If "Keep Screen On" is turned on, the device's screen does not apply a timeout after waking up. If it is disabled, you can set the time after which the device's screen will turn off if you do not interact with it, from 5 to 60 seconds.  

![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Turn screen on

<Translate android="true" ids="turn_screen_on_descr"/>   


![turn screen on Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>* - <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>* - <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>* - <Translate android="true" ids="turn_screen_on_power_button_descr"/> 

