---
sidebar_position: 6
title:  Voice navigation
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

Receive voice prompts while navigating: turn-by-turn instructions, alerts, and additional information.  


## Settings of voice prompts

User can receive voice prompts during navigation. To enable voice prompts for app profiles, turn on or turn off voice prompts (You can also turn on or turn off voice prompts on [the icon of sound on the navigation screen](../navigation/route-navigation.md#navigation-options)):


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/voice_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,sett_settings,app_profiles,sett_settings,routing_settings_2,voice_announces"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_navigation_ios.png)

</TabItem>

</Tabs>

- &nbsp;<Translate android="true" ids="shared_string_on"/>/<Translate android="true" ids="shared_string_off"/> - allows to configure to announce street names, traffic warnings, speed camera warnings, speed limits.
- &nbsp;<Translate android="true" ids="shared_string_language"/> - select preferred language and type of voice (for Android: TTS or recorded).
- &nbsp;<Translate android="true" ids="accessibility_announce"/> - allows to sound next types: <Translate android="true" ids="speak_street_names"/>, <Translate android="true" ids="exit_number"/>, <Translate android="true" ids="way_alarms"/>, <Translate android="true" ids="speak_pedestrian"/>, <Translate android="true" ids="speak_cameras"/>(<Translate android="true" ids="speed_cameras_alert"/>), <Translate android="true" ids="show_tunnels"/>, <Translate android="true" ids="shared_string_gpx_waypoints"/>, <Translate android="true" ids="speak_favorites"/>,  <Translate android="true" ids="speak_favorites"/>, <Translate android="true" ids="speak_favorites"/>. You can enable [Alert widget](../widgets/nav-widgets.md#alert-widget) for this categories.
- &nbsp;<Translate android="true" ids="speak_speed_limit"/> - allows to announce when exceeded <Translate android="true" ids="speed_limit_exceed"/>. Choose speed limit tolerance margin, above which you will receive a voice warning.

- &nbsp;<Translate android="true" ids="shared_string_options"/>: 

&nbsp;<Translate android="true" ids="keep_informing"/> - allows to re-announce navigation instructions at regular intervals or Only manually [(tap arrow)](../widgets/nav-widgets.md#next-turns).

&nbsp;<Translate android="true" ids="announcement_time_title"/> - the announcement timing of different voice prompts depends on prompt type, current navigation speed, and default navigation speed.

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_navigation_announcement_android.png)

- &nbsp;<Translate android="true" ids="output"/> (Android):

&nbsp;<Translate android="true" ids="choose_audio_stream"/> - allows to select loudspeaker for voice guidance: <Translate android="true" ids="voice_stream_music"/>, <Translate android="true" ids="voice_stream_notification"/>, <Translate android="true" ids="voice_stream_voice_call"/>.

<Translate android="true" ids="interrupt_music"/> - voice prompts pause music playback.


## Download voice prompts

<InfoAndroidOnly />  

For OsmAnd (Android version) you can download voice prompts files:

*<Translate android="true" ids="shared_string_menu,welmode_download_maps,other_location,index_name_tts_voice,index_name_voice"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-1.png)  ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-1.png)  ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-recorded.png)


## How to use

- Listen during navigation.
- Click to arrows for listen voice prompts again.
- Listen voice prompts with switch off device screen.
- Background navigation - sound.


## TTS (text-to-speech)

If you select a TTS voice, you need to have a respective [text-to-speech engine](https://en.wikipedia.org/wiki/Speech_synthesis) in your operating system. These are partly included in Android, iOS or can be installed separately. Please go to your [Android (device) settings](https://support.google.com/accessibility/android/answer/6006983), find Language and keyboard / Text-to-speech output or similar. Select or install an engine, then also install the language support for the language you need, this may be an extra setting or small download.

Please test ('Listen to an example' or similar test button provided) if your Android TTS is working ok. Then you may also test if your OsmAnd voice prompts have been selected properly by going to [Settings-> Plugins-> OsmAnd development-> Test voice prompts](voice-navigation.md#testing-of-voice-prompts). (OsmAnd development plugin must be activated to see the setting). To disable voice prompts, please go to "Configure profile"-> "Navigation Settings"-> "Voice prompts"-> "Voice guidance" and select 'Do not use' option.  


## Testing of voice prompts

<InfoAndroidOnly />  

For testing Voice prompts, you need to activate [OsmAnd development plugin](../plugins/development.md) and start the function ["Test voice prompts"](../plugins/development/#application-testing).

