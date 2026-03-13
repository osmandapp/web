---
slug: osmand-web-1.03-released
title: OsmAnd Web 1.03
authors: eugene
tags: [release, web]
unlisted: true
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


OsmAnd Web 1.03 — Now Available!

We're excited to announce the release of OsmAnd Web 1.03. This update introduces a redesigned navigation interface, improved management of personal data with Smart Folders and pinned Favorites, and enhanced track customization with adjustable color and width. The release also improves POI information with opening hours displayed directly in the context menu, along with multiple usability improvements and bug fixes across the web map.

Enjoy a smoother and more intuitive OsmAnd Web experience.


<!--truncate-->

## What's new

- [Redesigned navigation interface](#navigation-ui-redesign) that improves map controls and overall usability of the Web Planner;
- Added [Smart folders support](#smart-folders-support) for organizing tracks;
- [Public transport stops](#public-transport-stops) are now displayed on the map to help locate nearby transit options;
- Improved [POI context menu](#poi-context-menu-improvements) with richer information and a clearer layout;
- Added the ability to [export GPX tracks as simplified files](#export-gpx-as-simplified-track) for easier sharing and smaller file size;
- [Opening hours](#opening-hours) are now displayed directly in the POI context menu when available;
- Added support for [pinned favorite folders](#pinned-favorites-folders) for quicker access to frequently used collections;
- Improved [Wikimedia metadata handling](#wikimedia-metadata), including better display of author, license, and description for images;
- Improved [layer menu behavior](#layer-menu-behavior) for more intuitive interaction with map layers;
- Added [track tooltip on hover](#track-tool-on-hover) to quickly identify tracks directly on the map;
- Improved [search for personal data](#search-improvements-for-personal-data), allowing easier discovery of saved tracks and favorites;
- Improved [POI gallery](#poi-gallery-improvements) to better display images associated with locations;
- Improved [marker selection behavior](#marker-selection) to make map interaction more reliable;
- Improved [POI category search behavior](#poi-category-search-behavior) to make finding places faster and more accurate;
- [Expired purchases](#account-improvements) are now hidden on the account page to keep the purchase list cleaner;
- [Bug fixes](#bug-fixes).

## Navigation UI Redesign {#navigation-ui-redesign}

## Smart Folders Support {#smart-folders-support}

## Track Tools {#track-tools}

Several improvements were introduced to make working with tracks easier and more flexible.

### Export GPX as Simplified Track {#export-gpx-as-simplified-track}

A new export option allows [downloading GPX tracks](@site/static/img/web/download_options.png) in a simplified format. This helps reduce file size and improves compatibility when sharing tracks with other applications or services.

![Web Navigation](@site/static/img/web/download_options.png)

### Track Tooltip on Hover {#track-tool-on-hover}

## Public Transport Stops {#public-transport-stops}

## POI Context Menu Improvements {#poi-context-menu-improvements}

The POI context menu has been enhanced to display more useful information about locations directly on the map.

### Opening Hours {#opening-hours}

[Opening hours](https://osmand.net/docs/user/web/web-search#poi-details) are now shown directly in the POI context menu when this information is available. The menu also indicates whether a place is currently open or closed.

![POI Context Menu](@site/static/img/web/poi_context_menu_new.png)

### POI Gallery Improvements {#poi-gallery-improvements}

### Wikimedia Metadata {#wikimedia-metadata}

Photos from Wikimedia sources now display additional information in the [POI photo gallery](https://osmand.net/docs/user/web/web-search#photo-gallery). When opening a photo, users can view details such as the date, author, license information, and a description of the image.

![Photo Gallery](@site/static/img/web/photo_gallery.png)

### POI Category Search Behavior {#poi-category-search-behavior}

## Pinned Favorite Folders {#pinned-favorites-folders}

Favorite folders can now be pinned so that frequently used folders appear at the top of the list for quicker access. Pinned folders are displayed in a separate section above the rest of the Favorites.

![Favorite Folders](@site/static/img/web/pin_folder.png)

## Search Improvements for Personal Data {#search-improvements-for-personal-data}

## Map Interface Improvements {#map-interface-improvements}

### Layer Menu Behavior {#layer-menu-behavior}

### Marker Selection {#marker-selection}

## Account Improvements {#account-improvements}

## Bug fixes {#bug-fixes} 

- Fixed an issue where [the map jumped away from the selected track](https://github.com/osmandapp/web/issues/1444).
- Fixed a problem where [favorites were not displayed when opening folders](https://github.com/osmandapp/web/issues/1435).
- Fixed [a scrolling issue in the track list](https://github.com/osmandapp/web/issues/1389).
- Fixed an issue where [favorite folders ending with `.gpx` could not be renamed](https://github.com/osmandapp/web/issues/1442).
- Fixed [incorrect statistics calculation for some multi-segment tracks](https://github.com/osmandapp/web/issues/1347).
- Fixed [slow route analysis when building complex routes](https://github.com/osmandapp/web/issues/1080).
- Fixed [a crash when importing GPX files with longitude equal to `0.0`](https://github.com/osmandapp/web/issues/1152).
- Fixed an issue where [shared track links required a page refresh to open correctly](https://github.com/osmandapp/web/issues/1316).
- Fixed [incorrect geocoding results for some addresses](https://github.com/osmandapp/web/issues/1180).
- Fixed an issue where [some Wikimedia photos were not displayed for POIs](https://github.com/osmandapp/OsmAnd/issues/24494).



_______________________


If you have suggestions for improving the Web version, please get in touch with us. We appreciate and welcome your contribution to the further development of OsmAnd.

______________________
- **Follow**: <LinksSocial/>  

- **Join**: <LinksTelegram/>  

- **Get**: 

&nbsp;<AppleStore/>