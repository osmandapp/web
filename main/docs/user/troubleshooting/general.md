---
sidebar_position: 5
title:  General
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

General issues related to various OsmAnd's features.

## Battery Consumption

### OsmAnd seems to to use up too much battery power

There have been user reports of OsmAnd consuming excessive battery power, with cases where OsmAnd was responsible for up to 90% of battery usage. However, we have performed many tests and could not reproduce such results.  

Under normal circumstances, OsmAnd only consumes power when needed for active functions like live navigation or track recording. When these services are active, they appear in the Android notification area. If no such notification is visible, OsmAnd is not consuming power in the background.  

Several factors influence battery consumption: the device's age, number of charge cycles, battery capacity, temperature, and more. Below are typical battery consumption rates, based on tests performed on a mid-level device:

| Device function | Battery consumption per hour |
| :--- | :--- |
| Typical device asleep with only standard apps active | 0.5 % |
| Screen on (typically) | 6 % |
| GPS active (typically) | 5 % |
| OsmAnd running in the background for track recording | 0.5 % |
| OsmAnd not running any service in the background | 0 % |

#### OsmAnd Function Battery Consumption

| OsmAnd function | Battery consumption per hour |
| :--- | :--- |
| Track recording with screen off | 6 % |
| Navigation with screen on | 12 % |

The overall power consumption should result from adding these components as applicable, depending on how you use OsmAnd. Please report if you see significant deviations from these typical values.


### Optimizing battery consumption

When using OsmAnd, several features can influence battery consumption, especially during activities like navigation or track recording. Here are some tips to help manage battery usage effectively:

- **Screen control during navigation** (*Android*). To save power, you can configure OsmAnd to keep the screen off during navigation unless a turn or important event occurs. This is particularly useful during voice navigation. For more details, refer to the *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Power-saving navigation settings**. You can reduce battery consumption by minimizing map redraw frequency and limiting GPS accuracy. To adjust these settings, go to *Navigation → Settings → Route Navigation*. For more information, refer to the [saving power during navigation](../navigation/setup/route-navigation.md#saving-power-during-navigation).

- **Managing map layers and details**. Deactivate unnecessary map features like 3D relief, contour lines, or hillshades. You can also reduce the number of displayed objects (POI labels, boundaries, house numbers, etc.) via the *Configure Map* menu. Disabling these layers helps reduce the frequency of map redraws, which lowers power consumption.

- **Disabling auto zoom**. Auto zoom during navigation can cause frequent map redraws, which increases battery usage. Disabling this feature can help reduce power consumption. Navigate to *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  to turn off auto zoom. For further details, visit [Map During Navigation](../navigation/guidance/map-during-navigation.md).

- **Optimizing track recording settings**. Make sure to adjust GPS accuracy and screen usage during track recording to save battery. Visit the [Track recording troubleshooting](../troubleshooting/track-recording-issues.md) section for more guidance.


## Privacy

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### How to delete search history

To remove search history in OsmAnd:

1. Open the *Search* menu.
2. Long tap on any search result.
3. Select the results you want to delete, or use the *Select All* option in the upper-left corner to delete all results.
4. Tap the *Trash* icon in the upper-right corner to confirm deletion.

For more detailed instructions about the search functionality, you can refer to [this guide](../search/search-history.md).


## Other

### Problem with the GPS connection (Android)

OsmAnd relies on location data provided by your Android device through the Android API.  

To resolve GPS connection issues, follow these steps:

1. **Change Location Source**. Try different options like Google Play Services or Android API in *OsmAnd Settings → Location Source*.
2. **Update Google Service API**. Ensure you have the latest version from [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US).
3. **Check Android Location Settings**. Go to Android System Settings and ensure Location Access is turned on and set to High Accuracy. You can also try clearing the cache and restarting your device. GPS issues may occur if buildings or large objects interfere with the signal. Test GPS performance, and if the signal is weak, set the minimum recording accuracy to over 15 meters.
4. **Enable GPS Widget**. Use the GPS info widget to check satellite connections. If there are no satellite connections, your device will not determine the location, and the number of satellites will be 0. More details can be found in the [GPS widget guide](../widgets/info-widgets.md#gps-info-android).
5. **Use GPS Signal Only**. Set your device to use only GPS (disable Wi-Fi or Bluetooth-based location). Instructions are available on [Google Support](https://support.google.com/android/answer/3467281?hl=en).
6. **Reinstall OsmAnd**. If the above steps don't work, try reinstalling the OsmAnd app to clear bad data and resolve GPS issues. Before doing so, export all your saved data.
7. **Check Device RAM**. If the issue persists, it may be due to insufficient memory, so ensure your device has enough RAM available.


### Email mismatch issue during OsmAnd Pro purchase

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd
-->

If you encounter an issue where the email associated with your OsmAnd Pro purchase does not match the OsmAnd app email, follow these steps to resolve the problem:

1. **Check Google Play and Pay accounts**. Ensure that the correct email is linked to your Google Play Store and Pay accounts. The payment process is handled by these services, and the email mismatch might occur due to an old email still being associated with your payment profile.

2. **Verify OsmAnd app email**. Recheck the email address in your OsmAnd app to ensure it matches your current Google Play email. This can be done by opening the app and navigating to the account settings.

3. **Restore purchases**. Check the availability and appropriateness of your purchase. To do this, go to OsmAnd *Menu → Settings → Purchases*. If the displayed data does not match your expectations, try [Restore purchases](./setup.md#how-to-restore-purchases).

4. **Clear app cache and data**. Clear the cache and data of the OsmAnd app by going to your device's *Settings → Apps → OsmAnd → Storage → Clear Cache and Clear Data*. This will refresh the app and remove any residual issues from the old account.

5. **Reinstall OsmAnd**. If clearing the cache doesn’t resolve the issue, try uninstalling and reinstalling the app. Before doing this, make sure to back up any important data (tracks, favorites) by going to *Menu → Settings → Export to file*. Reinstalling the app will ensure that all account details are correctly refreshed.

6. **Disable proxy**. Check the app's proxy settings and make sure the proxy is turned off by going to *Menu → Settings → OsmAnd settings → Proxy*. A proxy or VPN could interfere with account syncing.

7. **Re-login or use Web for account management**. If you're still facing issues, try logging out and back in to refresh the app's connection to your current account. If you encounter any problems deleting the old account in-app, consider managing your account through the web version of OsmAnd.

