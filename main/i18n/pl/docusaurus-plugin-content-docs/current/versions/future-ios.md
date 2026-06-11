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

## Dołącz do wersji Beta {#join-beta}

Wersje beta iOS (TestFlight) są zazwyczaj udostępniane co tydzień (po demo Team Sprint). Nie zawierają opisów i mogą mieć ciągłe wersjonowanie. Zakłada się, że są stabilne i gotowe do użycia.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Join TestFlight</a>
</div>

<br/>


## Co nowego {#whats-new}

- Zaktualizowano wyszukiwanie o nową zakładkę **[Eksploruj](https://osmand.net/docs/user/map/popular_places#explore-in-search)** z popularnymi miejscami w pobliżu.
- Nowy eksperymentalny **[Plugin astronomiczny](https://osmand.net/docs/user/plugins/astronomy)** z nakładką astronomiczną pokazującą ścieżki Słońca, planet i gwiazd.
- Dodano **[edytor palet](https://osmand.net/docs/user/map/tracks/appearance#color-palette-editor)** do tworzenia i dostosowywania schematów kolorów dla tras i terenu.
- Inteligentniejsza organizacja śladów dzięki **[Inteligentnym folderom](https://osmand.net/docs/user/personal/tracks/smart-folder)** i jaśniejszym statystykom podsumowującym.
- Bardziej elastyczny **[układ widżetów i przycisków mapy](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, szczególnie w trybie poziomym.
- Ulepszono **[Planowanie trasy](https://osmand.net/docs/user/plan-route/create-route)** o wykres wysokości, obliczanie wysokości w trybie offline i parametry trasy.
- Dodano segmenty podjazdów, zjazdów i płaskie do **[analizy śladu](https://osmand.net/docs/user/map/tracks/track-context-menu#analyze-by-intervals)**.

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


## Poprawki błędów {#bug-fixes}

- Naprawiono problem, w którym [Inteligentne foldery](https://github.com/osmandapp/OsmAnd-iOS/issues/5358) nie synchronizowały się z OsmAnd Cloud ani nie pojawiały się w eksporcie ustawień.
- Zaktualizowano [menu kontekstowe Wikipedii](https://github.com/osmandapp/OsmAnd-Issues/issues/3215) z nowym wyglądem i dodano zdjęcia online.
- Naprawiono brakujące [nazwy POI](https://github.com/osmandapp/OsmAnd-iOS/issues/5253) w menu „Co tu jest”.
- Naprawiono otwieranie [Przewodników turystycznych](https://github.com/osmandapp/OsmAnd-Issues/issues/3212) z wyników wyszukiwania, aby bezpośrednio wyświetlać artykuł.
- Dostosowano pozycję sekcji [Zdjęcia online](https://github.com/osmandapp/OsmAnd-iOS/issues/5336) w menu kontekstowym regionu.

<!--
- Faster opening of context menus when tapping POIs, Favorites, tracks and buildings.
- Correct handling of relation-based POIs on multipolygons.
- Fixed “null” appearing instead of a city name in POI search results and improved night-mode background consistency.
- Restored tappable behaviour for fitness, running and canoe routes with shields.
-->