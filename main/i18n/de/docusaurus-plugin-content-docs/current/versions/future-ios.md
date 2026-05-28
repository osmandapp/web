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

## Beta beitreten {#join-beta}

iOS-Beta-Builds (TestFlight) werden in der Regel wöchentlich (nach einer Team-Sprint-Demo) bereitgestellt. Sie enthalten keine Beschreibungen und können eine fortlaufende Versionsnummerierung aufweisen. Sie gelten als stabil und einsatzbereit.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">TestFlight beitreten</a>
</div>

<br/>


## Was ist neu {#whats-new}

- Suche aktualisiert mit einem neuen **[Entdecken](https://osmand.net/docs/user/map/popular_places#explore-in-search)**-Tab mit beliebten Orten in der Nähe.
- Neues experimentelles **[Astronomie-Plugin](https://osmand.net/docs/user/plugins/astronomy)** mit einer astronomischen Overlay-Anzeige der Pfade von Sonne, Planeten und Sternen.
- Hinzugefügter **[Paletteneditor](https://osmand.net/docs/user/map/tracks/appearance#color-palette-editor)** zum Erstellen und Anpassen von Farbschemata für Routen und Gelände.
- Intelligentere Spurorganisation mit **[Smart Folders](https://osmand.net/docs/user/personal/tracks/smart-folder)** und übersichtlicheren Zusammenfassungsstatistiken.
- Flexibleres **[Widget- und Kartenbutton-Layout](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, insbesondere im Querformat.
- Erweiterte **[Route planen](https://osmand.net/docs/user/plan-route/create-route)** mit Höhenprofil, Offline-Höhenberechnung und Routenparametern.
- Hinzugefügte Anstiegs-, Abfahrts- und Flachsegmente zur **[Spuranalyse](https://osmand.net/docs/user/map/tracks/track-context-menu#analyze-by-intervals)**.

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


## Fehlerbehebungen {#bug-fixes}

- [Smart Folders](https://github.com/osmandapp/OsmAnd-iOS/issues/5358) werden nicht mehr mit OsmAnd Cloud synchronisiert oder im Einstellungsexport angezeigt.
- Das [Wikipedia-Kontextmenü](https://github.com/osmandapp/OsmAnd-Issues/issues/3215) wurde mit einem neuen Design aktualisiert und Online-Fotos hinzugefügt.
- Fehlende [POI-Namen](https://github.com/osmandapp/OsmAnd-iOS/issues/5253) im Menü „Was ist hier“ behoben.
- Das Öffnen von [Reiseführern](https://github.com/osmandapp/OsmAnd-Issues/issues/3212) aus Suchergebnissen wurde behoben, sodass der Artikel direkt angezeigt wird.
- Die Position des Abschnitts [Online-Fotos](https://github.com/osmandapp/OsmAnd-iOS/issues/5336) im Regionskontextmenü angepasst.

<!--
- Faster opening of context menus when tapping POIs, Favorites, tracks and buildings.
- Correct handling of relation-based POIs on multipolygons.
- Fixed “null” appearing instead of a city name in POI search results and improved night-mode background consistency.
- Restored tappable behaviour for fitness, running and canoe routes with shields.
-->