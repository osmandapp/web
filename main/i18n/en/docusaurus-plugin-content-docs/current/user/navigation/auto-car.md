---
source-hash: 3be3e0b1234aafa204632357b26d98724820bfbfafe67f7237cda7aae4d48299
sidebar_position: 9
title: Android Auto
ios: false
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

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_overview.png)

[**Android Auto**](https://www.android.com/auto) is software developed by Google that allows users to connect their Android devices to compatible vehicle multimedia systems. *Android Auto* provides an adapted and optimized version of the OsmAnd app for safe use while driving, making it easier and more secure to access the app's navigation functions.

**Android Auto** function is only supported when using the OsmAnd app available in the [Google Play Store](https://play.google.com/store/apps/dev?id=8483587772816822023).

> **NOTE**: *Android Auto is not a direct replication of the OsmAnd mobile app. It has a simplified interface, focusing on essential navigation functions to ensure safe driving. Some advanced features are not supported due to platform limitations.*

### Connection Screen {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)

While your device is connected to *Android Auto*, the map on the app screen is locked. This is an intentional security feature to ensure that navigation is controlled exclusively from the car display, minimizing distractions while driving. Check the [common questions](#common-issues-and-solutions) about the connection screen.

### Landing Screen {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

When you open the application, a list of categories is displayed. For easy navigation, you can hide it by tapping the button in the upper right corner of the screen.

- Tap the menu button to hide the list of categories.
- In the upper right corner of the screen, tap the button next to the function buttons if you want to return to the list.

### Interaction With the Map {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

*Android Auto* displays the OsmAnd interface adapted to the vehicle multimedia system screen. Interaction with the map is limited to buttons such as:

- [OsmAnd menu](#destination-points). Contains a list of available options for assigning a route endpoint or a free ride.
- [Settings](#voice-prompts). This button is responsible for: 1. access to turn *voice prompts* on/off when you are navigating the selected route; 2. show route details (time and distance) for the next stop.
- [Search](#search). Tapping the button opens a screen with access to the search functions.
- [My Location](../widgets/map-buttons.md#my-location-and-zoom). Moves the visible part of the map so that your current location is in the center of the screen.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Allows you to zoom in and out of the visible part of the map.
- [Compass](../widgets/map-buttons.md#compass). Shows which of the four available map orientation modes on your device's screen is selected.

## Required Setup Parameters {#required-setup-parameters}

### Start Navigation {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

In order for OsmAnd to work in *Android Auto*, you must [connect](#connection-screen) your Android device to your vehicle multimedia system. The Android operating system must be updated to version 6.0 or higher.

- To find out how to connect and set up your device, visit the [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en) websites.

- Not all vehicles support device connection capability. Check the [list for *Android Auto*](https://www.android.com/auto/compatibility/#compatibility-vehicles).

- You need to purchase a **paid version** of the app or take out a [subscription](../purchases/android.md#free-and-paid-features). Check your current subscription here *Menu → Settings → Purchases*.

- *Android Auto* uses the first [OsmAnd Driving profile](#profile-first) in the Profiles list for navigation. Set the preferred profile to first, except for the *Browse map* profile, it is not read by *Android Auto*. To do this, go to OsmAnd *Menu → Settings → App profiles → Edit profile list* → move your [**Driving**](#profile-first) profile to the first place or after the *Browse map* profile.

- It is important to remember that *Android Auto* is a data-intensive application, including mobile data, and the quality of the system may depend on the quality of your connection and the speed of your Internet access.

### Profile First {#profile-first}

You cannot select a profile directly in *Android Auto* on the vehicle screen.
If you already have a profile selected on your device that corresponds to the type of vehicle, such as *Driving*, *Truck*, *Car*, *Motorcycle*, *Moped*, **the app will automatically activate** the appropriate profile when you connect to Android Auto. For example, if you have a *Truck* profile as selected and your device connects to **Android Auto**, the app will activate that profile.

If you do not have any *Driving* profile selected on your device that corresponds to your vehicle type, then OsmAnd will automatically switch to the *Driving* profile. This is done to provide basic navigation and to prevent possible problems caused using the wrong profile for a specific vehicle type.

**Why it's important:**

1. **Driving safety.** Different types of transportation require different information and settings when driving. For example, truck drivers may be limited in the height, weight, and width of their vehicles, so the *Truck* profile provides them with appropriate restrictions and guidelines. While bicyclists and motorcyclists need information about bike lanes and routes, without data for trucks.

2. **Utility and Efficiency.** Navigation should be customized to meet the needs of a particular mode of transportation. This allows users to reduce the time it takes to find optimal routes and avoid unnecessary traffic restrictions.

3. **Error avoidance.** Switching to the *Driving* profile when there is no specific profile for the selected mode of transportation provides you with constant access to the minimum necessary settings and information, thus avoiding possible errors and misunderstandings while driving.

## Destination Points {#destination-points}

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

You can select previously preset and added [POIs](../map/point-layers-on-map.md#points-of-interest-pois), or [Favorites](../personal/favorites.md), or [Markers](../personal/markers.md) as a destination point. It is also possible to select a recorded or downloaded [Track](../personal/tracks/manage-tracks.md) for the route, use the [Search](../search/index.md), or select a destination from the route [History](../search/search-history.md) or take a *Free ride*.

1. If you want a particular location on the map as an endpoint, select the appropriate category of points from the list, [POIs](#poi-categories), [Favorites](#favorites), or [Map Markers](#map-markers).

    - All categories can contain no more list items than are provided by your vehicle multimedia system. This means that the list in *Android Auto* could be incomplete, and all other folders are only available in the OsmAnd app on your device.
    - The [Last modified](#folder-last-modified) folder contains a list of recent destinations, sorted by date added or changed.
    - The list of all other folders is sorted by the most recent update, new folders are at the top of the list. It is not possible to change their order manually.
    - The list of points within folders is sorted by the distance to them, starting with the nearest. Each point has a name or coordinates, a shaped icon (color and icon set by default or chosen by you in the OsmAnd application), and the distance from the point of the current location to it.

2. Select the [History](#history) category to find one of the recent destinations that are stored in the device's memory.

3. Select [Search](#search) to enter a destination from the available search categories.

4. Choose **Free ride** to take a journey without a specified endpoint.

:::note
While driving, selected points can be [announced](#voice-prompts) when you approach or pass them. See the [Voice prompts](../navigation/guidance/voice-navigation.md) settings in the appropriate article to set up voice notifications.
:::

### History {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)

In the History category, you can select a destination from a list of endpoints. They are sorted by most recent use, starting with the newest. This can be convenient for quick access to frequently used routes. To learn how to use or delete a destination, read the [Search History](../search/search-history.md) article.

### POI Categories {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

POIs (Points of Interest) are a type of points that identify places or objects on the map that are important or of interest to users. They are highlighted by special icons provided in the [OsmAnd settings](../map/point-layers-on-map.md#poi-types) and sorted into groups.

To build a route to a POI in *Android Auto*, follow these steps:

1. Select the needed POI from the list of available categories, or enter the name of the POI using [Search](#search).
2. Tapping on a category opens the following screen with a list of POIs.
3. Tapping an item in the list opens the navigation screen.
4. OsmAnd calculates the route and displays it on the *Android Auto* screen. Tap **Start** button to start navigating to that location.
5. Depending on your OsmAnd app [settings](../navigation/guidance/navigation-settings.md) and your vehicle, you may receive [voice prompts](#voice-prompts) to guide you to a destination.

### Favorites {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>

*Favorites* is one of the functions of OsmAnd that allows you to make a kind of bookmarks (notes) on the map. While using *Android Auto*, you cannot add or modify Favorites, only use existing ones. The list of [Favorites](../personal/favorites.md#manage-favorites) can be found in the OsmAnd app *Menu → My Places → Favorites*. If you want to use them for navigation, add the necessary places in the favorites before connecting the device to your vehicle multimedia system.

To create a route to a favorite point in *Android Auto*, follow the steps below:

1. Tapping a folder opens the next screen with a list of favorite folders.
2. Tapping an item in the list opens the navigation.

### Map Markers {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

To define your final destination as a Map Marker, you first need to create the required number of markers in the OsmAnd app on your device before connecting it to the system. Markers need to be available in the *Menu → Map marker* list. This is described in more detail in the [Markers](../personal/markers.md) article.

### Tracks {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)

To build a route to a destination, you can select an existing track available in the OsmAnd app. The track can be [downloaded](../personal/tracks/manage-tracks.md#import) in advance, used as [recorded](../plugins/trip-recording.md) or created in [Plan a route](../plan-route/create-route.md).

From the list of tracks in the *Menu → My Places → [Tracks](../personal/tracks/manage-tracks.md)*, select the required one before connecting to the vehicle multimedia system, and the route will either build up to the start of the track or display the current direction along the track.

Tracks can also be selected directly on the vehicle screen in *Android Auto*. They are organized in folders you have created, and for easy and quick access to recently opened tracks, there is a special folder [Last modified](#folder-last-modified).

### Search {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Going to Search gives you quick access to a list of recent [destination history](#history). Similarly with the [Navigation menu](../navigation/setup/route-navigation.md#navigation-menu), where all OsmAnd destination methods such as an address, POIs, or coordinates are collected.

You can use the Search tool to find the required place on the map for route planning from any available search category.

- [Address](../search/search-address.md) - start typing the address in the search field.
- [POI](../search/search-poi.md) and [Custom POI](../search/search-poi.md) - the list of nearby similar names will also display POIs or their categories.
- [Coordinates search](../search/search-address#coordinates-search) - enter the coordinates to find the point on the map.

### Folder Last Modified {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)

The Favorites and Tracks categories have a special *Last Modified* folder. Since the list in these categories can be very large as it contains all your existing favorites or tracks, this folder is necessary for easy and quick access to your most recent destinations.

## Navigation Features {#navigation-features}

In addition to the basic features of the OsmAnd app in *Android Auto* that provide convenient navigation in your vehicle, there are a number of additional features that enhance your experience and make navigation more personalized, comfortable, and efficient.

### Next Turn & Route Info {#next-turn--route-info}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

The **Next turn** widget displays the distance and type of the [next turn maneuver](../widgets/nav-widgets.md#next-turn) and the [street name](../widgets/nav-widgets.md#street-name).

Route information consists of:

- [estimated travel time](../widgets/nav-widgets.md#time-to-destination),
- [estimated arrival time](../widgets/nav-widgets.md#time-to-destination),
- [travel distance](../widgets/nav-widgets.md#distance-to-destination).

When enabled, [the widget setting](#eta-next-stop) (Route information) will show route details for the next stop ([the intermediate point](../navigation/setup/route-navigation.md#intermediate-destinations)).

### Screen Alert Widget {#screen-alert-widget}

This information widget combines alert types such as **Pedestrian crosswalks** and **Speed Limit**.

- The types of alerts have different appearance, which depends on the **<Translate android="true" ids="driving_region"/>** and can be configured in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- In *Android Auto* it is not possible to set the display of alerts, you need to configure the widget in the application before starting the navigation and connecting your device to the vehicle.
- For a detailed description of the alert types, see [this article](../widgets/nav-widgets.md#alert-types).
- To set up screen alerts for available profiles, see the article [Navigation settings](../navigation/guidance/navigation-settings.md#screen-alerts).

### Speedometer {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

**Speedometer** widget is an integrated interface element that displays *current speed* using GPS data and *speed limit* from the [OSM database](https://wiki.openstreetmap.org/wiki/Key:maxspeed) and [OsmAnd settings](../navigation/guidance/voice-navigation.md#speed-limit) on the vehicle's multimedia system screen.

- The **Speedometer widget** is [*profile dependent*](../personal/profiles.md), so if you change the settings for one profile, they will not be applied to another.
- There is no option to customize the display of the **Speedometer widget** directly in *Android Auto*, you need to configure it in OsmAnd app before starting navigation and connecting your device to the vehicle.
- For more information on how to add and configure the *Speedometer* widget to the display, please read the [Informational widgets article](../widgets/info-widgets.md#speedometer).

### Map Appearance (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

The OsmAnd app allows you to use the 3D map view on the *Android Auto* screen to display your route and navigation.

- To enable this feature, you need to select [Map rendering Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- Open the main *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* directly in the OsmAnd app.
- After configuring the settings, the **3D button** will be displayed on the *Android Auto* screen when the category list for destinations is closed.
- You can switch between 3D / 2D map modes by tapping this button.

### Voice Prompts {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Voice prompts are one of the most useful features of OsmAnd while navigating for *Android Auto*, giving you real-time guidance and allowing the driver to stay focused on the road. Voice prompts provide clear instructions on turns, directions, and other navigation instructions, providing a safer and more comfortable use of the navigation system.

To configure [voice prompts](../navigation/guidance/voice-navigation.md) according to the selected profile, you have to do this before starting a route in the OsmAnd app on your device. In *Android Auto*, only the setting to turn all selected voice prompts off or on at the same time is available (*Setting button → Voice prompts (on/off)*).

### ETA Next Stop {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

In the OsmAnd app, you can select one or more [intermediate points](../navigation/setup/route-navigation.md#intermediate-destinations) for the navigation route.

To enable or disable [**Route info** for an intermediate point (next stop)](#next-turn--route-info), go to *Android Auto (OsmAnd)→ Setting button → Show route details for the next stop → On/Off*. This option displays the time and distance to the next stop on the [*Route info* widget](#next-turn--route-info).

### Map Mode {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

*Android Auto* and OsmAnd offer the ability to adjust the map to match lighting conditions. In *Day map mode*, the color scheme remains bright and contrasting, making it easier to read even in bright sunlight. In *Night mode*, the maps become darker, which helps the driver navigate better in the dark.

OsmAnd has [map mode](../map/vector-maps.md#map-mode) options, but when you use the app in *Android Auto*, these options are ignored. Instead, the mode you selected in the *Android Auto* system settings for maps is used.

- Select Day mode or Night mode to keep the map display unchanged.
- If you want the map display mode to switch depending on the time of day, select Automatic mode.

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->

### Split-Screen {#split-screen}

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

The OsmAnd app can be opened and used to navigate in *Android Auto* on the vehicle multimedia system screen simultaneously with music, message or other notification apps. Setting up the split-screen display on a phone connected to *Android Auto* or on the screen in your vehicle system.

1. From Home screen, tap Apps.
2. Tap Settings.
3. Find Multi window and choose switch.
4. Return to the home screen.

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->

In Android Auto settings, you can change the position of the taskbar and the layout of the home screen:

- **Taskbar position:**
  Go to *Android Auto settings → Show quick controls for Apps* and toggle the switch off. This will move the taskbar from the bottom to the side of the screen.

- **Home screen layout:**
  Go to *Android Auto settings → Change layout → Change Driver seat location* to adjust the layout based on the driver’s seat position.

## Common Issues and Solutions {#common-issues-and-solutions}

1. [Map orientation issue.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Volume control issue.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Location delays (ANR crashes).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Common questions about the connection screen:
    - *Why can’t I control the app from my phone when connected to Android Auto?*
        For safety reasons, the OsmAnd app screen on your phone is locked while connected to Android Auto. You can interact with the app only through the car display.
    - *Can I disable the locked screen and use the app on my phone?*
        No, Android Auto enforces this restriction to prevent distractions while driving.
    - *What should I do if my phone and car display seem disconnected?*
        Ensure your device is properly connected via USB or Bluetooth.
        Restart your car’s infotainment system and the OsmAnd app if the connection is unstable.

> *Last updated: March 2025*