---
sidebar_position: 2
title:  AIS Vessel Tracker
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

<InfoIncompleteArticle/>

<InfoAndroidOnly />

## Overview

The **AIS Vessel Tracker** plugin displays [Automatic Identification System (AIS)](https://en.wikipedia.org/wiki/Automatic_identification_system) positions and detailed information about nearby vessels. The AIS data is received via a network connection from an external AIS receiver.

:::caution DISCLAIMER
**This plugin is a hobby project and is not designed for reliability or accuracy. DO NOT rely on this software for navigation or safety of life.**
:::


## Required Setup Parameters

The ability to use Online maps is automatically enabled in iOS version of OsmAnd. To display Online maps in Android, you need to make the following settings:

1. [Enable](../plugins/index.md#enable--disable) **AIS vessel tracker** plugin in the *Main Menu → Plugins → AIS vessel tracker*.
2. Configure the [AIS settings](../map/raster-maps.md#select-raster-maps)
3. Configure an **AIS server connection** or connect an **external AIS receiver**.
4. Check that vessels are displayed on the OsmAnd map.

## Vessels on the Map

AIS operates on *VHF frequencies* (161.975 MHz and 162.025 MHz) and has a limited signal range due to line-of-sight propagation.

***Typical AIS reception range:***

- 15–20 nautical miles (28–37 km)
- Depends on antenna height, environmental conditions, and obstacles

***AIS display on the map:***

![AIS vessel tracker](@site/static/img/plugins/ais/ais.png)

When correctly set up, vessel positions will appear on the map. Key features:

- Vessels move based on real-time speed and course.
- New ships enter and exit the visible area dynamically.
- Tapping a vessel opens detailed information.


### AIS Vessel Information

![AIS vessel tracker](@site/static/img/plugins/ais/ais_menu.png) ![AIS vessel tracker](@site/static/img/plugins/ais/ais_menu_2.png)

AIS vessels transmit three types of data:

1. Static Information (unchanging data).  
    *Sent every **6 minutes** or upon request.*

    - **Ship Name** (*if set*)  
    - **MMSI (Maritime Mobile Service Identity)** (*Unique 9-digit ship identifier*)
    - **IMO Number** (*if available*)  
    - **Call Sign**  
    - **Ship Type** (*e.g., Cargo, Passenger, Fishing Vessel*)  
    - **Ship Dimensions** (*Length and Width*)  
    - **AIS Antenna Position** (*Relative to the ship's hull*)  

2. Dynamic Information (real-time data).  
    *Sent at different intervals depending on speed and maneuvering.*

    - **Ship Coordinates (Latitude & Longitude)**  
    - **Course Over Ground (COG)**  
    - **Speed Over Ground (SOG)**  
    - **Heading** (*Direction the bow is pointing*)
    - **Ship Status** (*Underway, Anchored, Maneuvering, etc.*)  
    - **Rate of Turn (ROT)** (*Speed of course change*)  
    - **Last Update Time**  

3. Voyage Information (manually set by crew).  
    *Sent every **6 minutes**, manually set by crew*

    - **Destination Port**
    - **Estimated Time of Arrival (ETA)**  
    - **Draught** (*Ship's water depth below surface*)  
    - **Cargo Type** (*if transmitted*)
    - **Number of People on Board** (*optional*)  

### AIS Symbols and Legends

[Guidlines](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| **Symbol** | **Description**        |
|------------|------------------------|
| **Vessel Types** | |
| - Green Triangle | Cargo Ship |
| - Blue Triangle | Passenger Ship |
| - Black Triangle | Fishing Vessel |
| - Yellow Triangle | Tugboat |
| - Red Triangle | Tanker |
| - White Triangle | Military Vessel |
| - Orange Triangle | Special Craft (e.g., pilot, icebreaker) |
| - Flashing Red Triangle | Vessel in Distress |
| **Navigational Aids** |  |
| - Green Buoy | Starboard marker (right-hand side of the channel) |
| - Red Buoy | Port marker (left-hand side of the channel) |
| - Anchor Symbol | Anchorage Area |
| - Ship Symbol (SS) | Ferry or passenger terminal |
| - Port Crane Symbol | Cargo Port |
| - Black Circle | Offshore Platform |
| **Status Indicators** |  |
| - Solid Triangle | Moving Vessel |
| - Hollow Triangle | Anchored or Moored |
| - Rotating Arrow | Undergoing Maneuver |
| - Red Flashing Icon | Emergency Alert |
| - Orange Exclamation Mark | AIS Safety Message |
| **Route and Speed Indicators** |  |
| - Thin Blue Line | Planned Route |
| - Dotted Line | Past Track |
| - Clock Icon | Estimated Time of Arrival (ETA) |
| - Wave Icon | Speed Over Water |

## Plugin Settings

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![AIS settings](@site/static/img/plugins/ais/ais_settings_2.png)  

The *AIS vessel tracker* plugin offers various settings to personalize navigation and interaction for users with disabilities. These settings are applied for all [profiles](../personal/profiles.md) in OsmAnd.

| Setting |  Description  | Example Value |
|------------|------------------|-----------|
| **IP address settings**: | | |
| - Protocol for NMEA data reception |Choose protocol for NMEA data reception | `UDP/TCP` |
| - IP address of NMEA data source| Define IP address of NMEA data source (if TCP is used) | `192.168.200.16` |
| - TCP port of NMEA data source| Define TCP port number of the NMEA data source | `4001` |
| - UDP port of local NMEA data receiver|Define UDP port where OsmAnd receives NMEA data | `10110` |
| **Timeout settings for AIS Signal reception**: | |  |
| - Timeout for visibility when an object is lost |Set timeout values to identify lost AIS objects if no signal was received for a specific time.| `3, 5, 7, 10...20 min` |
| - Timeout for ship visibility when no signal is received | Set timeout for ship visibility: After this time without signal reception, the ship symbol will change its state on screen: It will be crossed out.| `2, 3, 4, 5...15 min / Disabled` |
| **Settings related to CPA**:| | |
| - Warning time to reach the Closest Point of Approach (CPA)|If the TCPA (time to reach the CPA with another vessel) is less than this value, the vessel is marked with red color. | `Disabled / 1, 5, 10, 20...60 min` |
| - Warning distance for the Closest Point of Approach (CPA)|Vessels are marked with red color if the CPA is less than this value and the CPA is reached in the near future (see setting Warning time to reach the CPA) | `0.02, 0.05, 0.1..2 nautical miles` |


### Simulation

You can add AIS data from files to **simulate vessel positions** on the map with [OsmAnd development plugin](../plugins/development.md).

**1. Download the following TXT files:**
- [AIS Test 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
- [AIS Test 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
- [Single 3](https://github.com/user-attachments/files/18689403/333.txt)

**2. Load AIS data in OsmAnd:**
- Go to *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>*  
- Select one of the downloaded files.

**3. View AIS vessels on the map:**

- Open the **OsmAnd Map**.
- Vessel icons will appear based on the simulated data.
- Tap on a vessel icon to open its **information panel** in the **context menu**.


## Related Articles

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)
- [Nautical Plugin](../../user/plugins/nautical-charts.md)

> *This article was last updated in March 2025*
