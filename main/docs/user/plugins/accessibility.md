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

:::caution Note
The Accessibility plugin is available only on the **Android version** of OsmAnd. The [iOS Version](#how-to-use-ios) relies on the system’s default accessibility settings.
:::

## Overview {#overview}

Accessibility improves usability for blind and visually impaired users by integrating with [Android Accessibility](https://www.android.com/accessibility/) tools. The plugin offers **text-to-speech, gesture control, automatic announcements** and **haptic feedback** to make navigation more accessible. On iOS, OsmAnd utilizes Apple's built-in accessibility features such as VoiceOver.


### How To Use (Android) {#how-to-use-android}

![Accessibility](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Enable the Accessibility plugin:***  

1. **Activate the plugin**: *Menu → Plugins → Accessibility → Enable*.

2. **Turn on accessibility mode**:  
   - Navigate to *System Settings → Accessibility* on your Android device.
   - Enable TalkBack or another screen reader.

3. **Adjust plugin settings**:  
   - Open [Accessibility settings](#plugin-settings) within the OsmAnd app.
   - Configure features such as speech rate, auto-announce, and haptic feedback.

<br/>

***Features and functionality:***

- **Gesture controls**:
   - Supports all standard [OsmAnd gestures](../map/interact-with-map.md#gestures).
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


### How To Use (iOS) {#how-to-use-ios}

The iOS version of OsmAnd uses the system’s **built-in accessibility tools**.

1. **Enable VoiceOver**:
   - Go to *Settings → Accessibility → VoiceOver*.
   - Configure **VoiceOver gestures** for use with OsmAnd.

2. **Supported features**:
   - **Screen reader support** for map interactions.
   - **Customizable gestures** through iOS settings.
   - All standard [OsmAnd gestures](../map/interact-with-map.md#gestures) are available.

3. **Learn more**:
   - Read about iOS Vision Accessibility features [here](https://www.apple.com/accessibility/vision/).
   - Explore VoiceOver gestures for iPhone [here](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Required Setup Parameters {#required-setup-parameters}

To activate device's accessibility features in OsmAnd, you need to make the following settings:

1. **Enable the** [Accessibility plugin](../plugins/index.md#enable--disable):  *Menu → Plugins → Accessibility → Enable*.  
2. **Enable accessibility mode** on your device.
3. Configure Accessibility plugin [settings](#plugin-settings).


## Autoannounce {#autoannounce}

To enable:
*My location* (Long tap) → *Show details* → *Start/Stop autoannounce*

- A long tap on **My location** opens a menu with the options ***Show your position*** and ***Show details***. Selecting Show details displays additional route information and provides button ***Start/Stop autoannounce***.
- Set the **Autoannounce Period** (e.g., *10 seconds*) to control the frequency of announcements.
- If **TalkBack** is not enabled device’s system settings, OsmAnd won't provide *voice notifications* and only display *text notifications* on the screen.  

### Smart Autoannounce {#smart-autoannounce}

To enable:
*Plugins* → *Accessibility* → *Settings* → *Smart Autoannounce*

The **Smart Autoannounce** feature provides *audio notifications* when you deviate from the planned route. It is designed to support visually impaired users who rely on *voice guidance*.  


## Plugin Settings {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Accessibility](@site/static/img/plugins/accessibility/access_new.png)  

The Accessibility plugin offers various settings to personalize navigation and interaction for users with disabilities. These settings are applied per [profile](../personal/profiles.md) in OsmAnd.

| Setting                   | Description |  
|---------------------------|-------------|  
| **Accessibility Mode**    | Enables *built-in OsmAnd features* or uses **system settings**. |  
| **Speech Rate**           | Controls *text-to-speech speed*, ranging from **50% to 200%**. |  
| **Pinch Zoom Magnification**    | Temporarily magnifies the map while you pinch-zoom and keep your fingers on the screen, enlarging text and icons without changing the actual zoom level. |
| [Smart Autoannounce](#smart-autoannounce)    | Provides *voice guidance* when deviating from the route. |  
| **Autoannounce Period**   | Sets minimum time between announcements, from **5 seconds to 5 minutes**. |  
| [Direction Style](#direction-style)       | Choose between *Sidewise (8 directions)* or *Clockwise (12 directions)*. |  
| **Audio Directions**      | Plays *audio guidances* indicating direction. |  
| **Haptic Directions**     | Provides *vibration feedback* for turns and deviations.|  

***Tips for optimized accessibility:***

- **Screen reader** - Use TalkBack (*Android*) or VoiceOver (*iOS*) for enhanced map interaction.
- **Audio navigation** - Enable auto-announce to receive voice directions while the screen is off.
- **Haptic feedback** - Ideal for low-visibility environments or when audio guidances are impractical.


### Direction Style {#direction-style}

The **Direction Style** setting defines how navigation instructions are presented:

- Sidewise (8 directions) – uses classic left/right or cardinal/intercardinal directions.
- Clockwise (12 directions) – uses clock-face based guidance, such as “at 3 o’clock” or “at 10 o’clock”.

This feature is designed to improve spatial awareness, especially for visually impaired users who prefer clock-based orientation.

To enable:
*Menu* → *Plugins* → *Accessibility* → *Settings* → *Direction Style* → choose **Sidewise** or **Clockwise**.

:::info note
Direction Style is an independent option. It is not linked to Smart Autoannounce and works regardless of whether Smart Autoannounce is enabled.
:::

## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)


