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


## Overview {#overview}

The **AIS Vessel Tracker** plugin displays [Automatic Identification System (AIS)](https://en.wikipedia.org/wiki/Automatic_identification_system) positions and detailed information about nearby vessels. The AIS data is received via a network connection from an external AIS receiver.

The plugin can receive NMEA data through a network connection using TCP or UDP. GPS positions received from RMC/GGA NMEA messages can also be used as My location in OsmAnd.

:::caution DISCLAIMER
**This plugin is a hobby project and is not designed for reliability or accuracy. DO NOT rely on this software for navigation or safety of life.**
:::


## Required Setup Parameters {#required-setup-parameters}

To use the AIS Vessel Tracker plugin, you need to enable the plugin and configure a network connection to an external AIS/NMEA data source:

1. [Enable](../plugins/index.md#enable--disable) **AIS vessel tracker** plugin in the *Main Menu → Plugins → AIS vessel tracker*.
2. Configure the [AIS settings](../map/raster-maps.md#layers)
3. Configure the connection to your **AIS/NMEA data source** using **TCP** or **UDP**.
4. Check that vessels are displayed on the OsmAnd map.

On iOS, you can additionally enable *Use NMEA as location source* to use GPS positions from RMC/GGA NMEA messages as your current location in OsmAnd.

## Vessels on the Map {#vessels-on-the-map}

AIS operates on *VHF frequencies* (161.975 MHz and 162.025 MHz) and has a limited signal range due to line-of-sight propagation.

***Typical AIS reception range:***

- 15–20 nautical miles (28–37 km)
- Depends on antenna height, environmental conditions, and obstacles

***AIS display on the map:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS vessel tracker](@site/static/img/plugins/ais/ais.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![AIS vessel tracker](@site/static/img/plugins/ais/ais.webp)

</TabItem>

</Tabs>

When correctly set up, vessel positions will appear on the map. Key features:

- Vessels move based on real-time speed and course.
- New ships enter and exit the visible area dynamically.
- Tapping a vessel opens detailed information.


### AIS Vessel Information {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS vessel tracker](@site/static/img/plugins/ais/ais_menu.png) ![AIS vessel tracker](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![AIS vessel tracker](@site/static/img/plugins/ais/ais_menu.webp)

</TabItem>

</Tabs>

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

### AIS Symbols and Legends {#ais-symbols-and-legends}

[Guidelines for AIS Symbol Presentation](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Symbols             | Description   |
|---------------------|---------------|
| | |
| **Vessel Types Symbols** |    |
| *Green triangle*    | Cargo ship    |
| *Blue triangle*     | Passenger ship |
| *Black triangle*    | Fishing vessel |
| *Yellow triangle*   | Tugboat       |
| *Red triangle*      | Tanker        |
| *White triangle*    | Military vessel |
| *Orange triangle*   | Special craft (e.g., pilot, icebreaker) |
| *Flashing Red triangle* | Vessel in distress |
| | |
| **Navigational Aids Symbols** |    |
| *Green Buoy*              | Starboard marker (right-hand side of the channel) |
| *Red Buoy*                | Port marker (left-hand side of the channel) |
| *Anchor symbol*           | Anchorage area |
| *Ship symbol (SS)*        | Ferry or passenger terminal |
| *Port Crane symbol*       | Cargo port |
| *Black circle*            | Offshore platform |
| | |
| **Status Indicators** |    |
| *Solid triangle*  | Moving vessel |
| *Hollow triangle* | Anchored or Moored |
| *Rotating arrow*  | Undergoing maneuver |
| *Red Flashing icon* | Emergency alert |
| *Orange Exclamation mark* | AIS safety message |
| | |
| **Route and Speed Indicators** |    |
| *Thin Blue line*  | Planned route |
| *Dotted line*     | Past track |
| *Clock icon*      | Estimated time of arrival (ETA) |
| *Wave icon*       | Speed over water |

## Plugin Settings {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![AIS settings](@site/static/img/plugins/ais/ais_settings_2.webp)  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/>* → *AIS vessel tracker* → *<Translate ios="true" ids="shared_string_settings"/>* 

![AIS vessel tracker](@site/static/img/plugins/ais/ais_settings_ios.webp)

</TabItem>

</Tabs>

The *AIS vessel tracker* plugin offers various settings to personalize navigation and interaction for users with disabilities. These settings are applied for all [profiles](../personal/profiles.md) in OsmAnd.

| Setting |  Description  | Example  |
|---------|---------------|----------|
| | | |
| **IP address settings** | | |
| Protocol   | Choose protocol for receiving AIS data | `UDP/TCP` |
| IP address | Define IP of AIS data source (if TCP is used) | `192.168.200.16` |
| TCP port   | Define TCP port number for AIS data | `4001` |
| UDP port   | Define UDP port for OsmAnd AIS reception  | `10110` |
| Receive AIS data even if OsmAnd is paused (*Android only*)   | Keep the AIS message listener running if OsmAnd is paused or in the background. If disabled, no AIS messages are received when OsmAnd is in the background  | `Yes/No` |
| Use NMEA as location source (*iOS only*)   | Use GPS positions from RMC/GGA NMEA messages as My location  | `On/Off` |
| | | |
| **AIS Signal reception timeout** | |  |
| Ship outdated timeout      | Set timeout for ship outdated visibility: after this time without signal reception, the ship symbol will be crossed out | `2 - 15 min / Disabled` |
| Timeout for visibility when ship is lost     | Set a timeout for AIS object visibility: If no signal is received within the specified duration, the object will be automatically removed from the display | `3 - 20 min` |
| | | |
| **Closest Point of Approach (CPA) Alerts** | | |
| CPA Warning Time | Vessel is marked red if time to CPA is below this limit | `1 - 60 min / Disabled` |
| CPA Warning Distance | Vessel is marked red if distance to CPA is below this limit | `0.02 - 2 nautical miles` |


### AIS Simulation Mode {#ais-simulation-mode}

> *You can simulate AIS vessel positions using [OsmAnd Development plugin](../plugins/development.md).*

1. **Download AIS data text files**:

    - [AIS Test 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [AIS Test 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Single 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **Load AIS data into OsmAnd**  
Open *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* and select one of the downloaded files.

3. **View AIS vessels on the map**  
Vessel icons will appear based on the simulated data. Tap the vessel icon to view detailed information.


## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)
- [Nautical Plugin](../../user/plugins/nautical-charts.md)


