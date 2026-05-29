---
source-hash: 229c58068a74b06d3fc63b8f92df8a4ca008fa25b9819b9b8d8243b8790942ed
sidebar_position: 5
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

# iOS 5.4 {#ios-54}

## Deelnemen aan bèta {#join-beta}

iOS-bètaversies (TestFlight) worden meestal wekelijks geleverd (na een Team Sprint-demo). Ze bevatten geen beschrijvingen en kunnen doorlopende versies hebben. Ze worden als stabiel en gebruiksklaar beschouwd.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Deelnemen aan TestFlight</a>
</div>

<br/>


## Wat is er nieuw {#whats-new}

- Zoeken bijgewerkt met een nieuw **[Explore](https://osmand.net/docs/user/map/popular_places#explore-in-search)** tab met populaire plaatsen in de buurt.
- Nieuwe experimentele **[Astronomy plugin](https://osmand.net/docs/user/plugins/astronomy)** met een astronomische overlay die de paden van de Zon, planeten en sterren toont.
- Een **[palette editor](https://osmand.net/docs/user/map/tracks/appearance#color-palette-editor)** toegevoegd om kleurenschema's voor routes en terrein te maken en aan te passen.
- Slimmere trackorganisatie met **[Smart Folders](https://osmand.net/docs/user/personal/tracks/smart-folder)** en duidelijkere samenvattende statistieken.
- Flexibelere **[widget and map button layout](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, vooral in liggende modus.
- Verbeterde **[Plan a route](https://osmand.net/docs/user/plan-route/create-route)** met hoogtegrafiek, offline hoogteberekening en routeparameters.
- Toegevoegde stijgende, dalende en vlakke segmenten aan **[track analysis](https://osmand.net/docs/user/map/tracks/track-context-menu#analyze-by-intervals)**.

<!--
- Last Uphill / Last Downhill mode for **[Trip recording widgets](https://osmand.net/docs/user/plugins/trip-recording#widgets)**, with switching between total and last ascent/descent.
- Updated **[Distance widget](https://osmand.net/docs/user/plugins/trip-recording#distance-start-stop)** with modes for total distance, last uphill/downhill distance.
- **[Max Speed widget](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)** showing maximum speed for the whole trip or for the most recent uphill/downhill section.
- **[Average Slope widget](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)** showing the average slope of the latest ascent or descent.
- *Show track on map* quick action added to the Trip recording widget group.
- Improvements in route selection and altitude graph integration under the updated rendering scheme.
- Elevation graph widget for navigation, displaying a compact profile along routes or GPX tracks.
- **[Popular places](https://osmand.net/docs/user/map/popular_places/)** layer updated with POI source selection and optional image previews on the map.
- New Explore section in Search with “Popular places nearby” and improved offline/no-data states.
- Enhanced POI search results with consistent city display, refined layout, and optional thumbnails.
- Default appearance settings for track folders, allowing new tracks to inherit a unified folder style.
-->


## Bugfixes {#bug-fixes}

- Opgelost dat [Smart Folders](https://github.com/osmandapp/OsmAnd-iOS/issues/5358) niet synchroniseren met OsmAnd Cloud of verschijnen in Instellingen-export.
- Het [Wikipedia context menu](https://github.com/osmandapp/OsmAnd-Issues/issues/3215) bijgewerkt met een nieuw ontwerp en online foto's toegevoegd.
- Ontbrekende [POI names](https://github.com/osmandapp/OsmAnd-iOS/issues/5253) in het “What’s here” menu opgelost.
- Opgelost dat [Travel Guides](https://github.com/osmandapp/OsmAnd-Issues/issues/3212) vanuit zoekresultaten direct het artikel tonen.
- Positie van de [Online Photos](https://github.com/osmandapp/OsmAnd-iOS/issues/5336) sectie in het regiocontxtmenu aangepast.

<!--
- Faster opening of context menus when tapping POIs, Favorites, tracks and buildings.
- Correct handling of relation-based POIs on multipolygons.
- Fixed “null” appearing instead of a city name in POI search results and improved night-mode background consistency.
- Restored tappable behaviour for fitness, running and canoe routes with shields.
-->