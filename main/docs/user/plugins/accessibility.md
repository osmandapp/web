---
sidebar_position: 1
title:  Accessibility
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Overview

:::caution Note
The Accessibility plugin is available only on the **Android version** of OsmAnd. The [iOS Version](#how-to-use-ios) relies on the system’s default accessibility settings.
:::

Accessibility improves usability for blind and visually impaired users by integrating with [Android Accessibility](https://www.android.com/accessibility/) tools. The plugin offers **text-to-speech, gesture control, automatic announcements** and **haptic feedback** to make navigation more accessible. On iOS, OsmAnd utilizes Apple's built-in accessibility features such as VoiceOver.


### How To Use (Android)

![Accessibility](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Enable the Accessibility plugin:***  

1. **Activate the plugin**: *Menu → Plugins → Accessibility → Enable*.

2. **Turn on accessibility mode**:  
   - Navigate to *System Settings → Accessibility* on your Android device.
   - Enable TalkBack or another screen reader.

3. **Adjust plugin settings**:  
   - Open [Accessibility settings](#plugin-settings) within the OsmAnd app.
   - Configure features such as speech rate, auto-announce, and haptic feedback.

***Features and functionality:***

- **Gesture controls**:
   - Supports all standard [OsmAnd gestures](../map/interact-with-map#gestures).
   - Adjusts gestures to align with Android's **TalkBack** instructions.

- **TalkBack integration**:
   - The TalkBack screen reader offers audio guidance for navigation and menu interactions.
   - Learn more about TalkBack gestures [here](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Background operations**. Audio and haptic feedback continue even when the screen is off or locked.

- **Compass button actions**:

| Gesture | Action | TalkBack equivalent |
|-----|-----|-----|
| **Single tap** | Rotates map to **North** | **Double tap** |
| **Long tap** | Opens the list of [map orientations](../map/interact-with-map.md#map-orientation-modes) | **Double tap and hold** |
| **Double tap** | *Not available in Accessibility mode* | *Not supported* |


### How To Use (iOS)

The iOS version of OsmAnd uses the system’s **built-in accessibility tools**.

1. **Enable VoiceOver**:
   - Go to *Settings → Accessibility → VoiceOver*.
   - Configure **VoiceOver gestures** for use with OsmAnd.

2. **Supported features**:
   - **Screen reader support** for map interactions.
   - **Customizable gestures** through iOS settings.
   - All standard [OsmAnd gestures](../map/interact-with-map#gestures) are available.

3. **Learn more**:
   - Read about iOS Vision Accessibility features [here](https://www.apple.com/accessibility/vision/).
   - Explore VoiceOver gestures for iPhone [here](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Required Setup Parameters

To activate device's accessibility features in OsmAnd, you need to make the following settings:

1. **Enable the** [Accessibility plugin](../plugins/index.md#enable--disable):  *Menu → Plugins → Accessibility → Enable*.  
2. **Enable accessibility mode** on your device.
3. Configure Accessibility plugin [settings](#plugin-settings).


## Plugin Settings

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Accessibility](@site/static/img/plugins/Accessibility/access_.png)  

The Accessibility plugin offers various settings to personalize navigation and interaction for users with disabilities. These settings are applied per [profile](../personal/profiles.md) in OsmAnd.

| Setting                   | Description |  
|---------------------------|-------------|  
| **Accessibility Mode**    | Enables *built-in OsmAnd features* or uses **system settings**. |  
| **Speech Rate**           | Controls *text-to-speech speed*, ranging from **50% to 200%**. |  
| [Smart Autoannounce](#smart-autoannounce-and-clockwise-directions)    | Provides *voice guidance* when deviating from the route. |  
| **Autoannounce Period**   | Sets minimum time between announcements, from **5 seconds to 5 minutes**. |  
| **Direction Style**       | Choose between *Sidewise (8 directions)* or [Clockwise](#smart-autoannounce-and-clockwise-directions) (12 directions)*. |  
| **Audio Directions**      | Plays *audio guidances* indicating direction. |  
| **Haptic Directions**     | Provides *vibration feedback* for turns and deviations.|  

<!--
- **Accessibility Mode**. Enable special tools that help people with disabilities interact with the OsmAnd app. There are three modes: *On* - turns on the built-in OsmAnd features, *Off* - turns off all plugin features, and *According to the Android system settings* - turns on Android system settings.

- **Speech rate**. Adjust the speech rate of the text-to-speech, ranging from 50%  to 200%.

- **Smart autoannounce**. If enabled, you will receive voice announcements when you deviate from the set track.

- **Autoannounce period**. This is an automatic announcement of the direction and distance to your destination. You can select a minimal time between announcements, ranging from 5 seconds to 5 minutes.

- **Direction style**. Choose how the OsmAnd app will notify you about directions. *Sidewise* - indicates the direction to the sides of the world (8 directions), *Clockwise* - indicates directions oriented to the clock face (12 directions).

- **Audio directions**. Provides feedback when navigating by indicating the direction to the target point with sound.

- **Haptic directions**. This setting provides haptic feedback when navigating. The vibration indicates the direction to the target point and deviations from the path.
-->

***Tips for optimized accessibility:***

- **Screen reader** - Use TalkBack (Android) or VoiceOver (iOS) for enhanced map interaction.
- **Audio navigation** - Enable auto-announce to receive voice directions while the screen is off.
- **Haptic feedback** - Ideal for low-visibility environments or when audio guidances are impractical.


#### Smart Autoannounce and Clockwise Directions

The **Smart Autoannounce** feature provides *audio notifications* when you deviate from the planned route, while the **Clockwise Direction Style** offers *clock-face-based navigation guidances*. These features are designed to support visually impaired users who rely on *voice guidance*.  

- If **TalkBack is not enabled**, both *Smart Autoannounce* and *Clockwise Directions* will only display *text notifications* on the screen.  

- **Voice notifications** are activated only when *TalkBack* is enabled in the **device’s system settings**.  

- Set the **Autoannounce Period** (e.g., *10 seconds*) to control the frequency of announcements.


## Related Articles

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *This article was last updated in February 2025*
