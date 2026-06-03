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

## Partecipa alla Beta {#join-beta}

Le build beta di iOS (TestFlight) vengono solitamente fornite settimanalmente (dopo una demo dello Sprint del team). Non contengono descrizioni e possono avere una numerazione di versione continua. Si presume che siano stabili e pronte all'uso.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Partecipa a TestFlight</a>
</div>

<br/>


## Novità {#whats-new}

- Ricerca aggiornata con una nuova scheda **[Esplora](https://osmand.net/docs/user/map/popular_places#explore-in-search)** che mostra i luoghi popolari nelle vicinanze.
- Nuovo **[plugin Astronomia](https://osmand.net/docs/user/plugins/astronomy)** sperimentale con una sovrapposizione astronomica che mostra i percorsi del Sole, dei pianeti e delle stelle.
- Aggiunto un **[editor tavolozza](https://osmand.net/docs/user/map/tracks/appearance#color-palette-editor)** per creare e personalizzare schemi di colori per percorsi e terreno.
- Organizzazione più intelligente delle tracce con **[Cartelle smart](https://osmand.net/docs/user/personal/tracks/smart-folder)** e statistiche di riepilogo più chiare.
- Layout più flessibile di **[widget e pulsanti della mappa](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, soprattutto in modalità orizzontale.
- **[Pianifica un percorso](https://osmand.net/docs/user/plan-route/create-route)** migliorato con grafico dell'altitudine, calcolo offline dell'elevazione e parametri del percorso.
- Aggiunti segmenti in salita, in discesa e pianeggianti all'**[analisi della traccia](https://osmand.net/docs/user/map/tracks/track-context-menu#analyze-by-intervals)**.

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


## Correzioni di bug {#bug-fixes}

- Corretto il problema per cui le [Cartelle smart](https://github.com/osmandapp/OsmAnd-iOS/issues/5358) non si sincronizzavano con OsmAnd Cloud o non comparivano nell'esportazione delle Impostazioni.
- Aggiornato il [menu contestuale di Wikipedia](https://github.com/osmandapp/OsmAnd-Issues/issues/3215) con un nuovo design e aggiunte foto online.
- Corretto il problema dei [nomi POI](https://github.com/osmandapp/OsmAnd-iOS/issues/5253) mancanti nel menu “Cosa c'è qui”.
- Corretto il problema di apertura delle [Guide di viaggio](https://github.com/osmandapp/OsmAnd-Issues/issues/3212) dai risultati di ricerca per mostrare direttamente l'articolo.
- Regolata la posizione della sezione [Foto online](https://github.com/osmandapp/OsmAnd-iOS/issues/5336) nel menu contestuale della regione.

<!--
- Faster opening of context menus when tapping POIs, Favorites, tracks and buildings.
- Correct handling of relation-based POIs on multipolygons.
- Fixed “null” appearing instead of a city name in POI search results and improved night-mode background consistency.
- Restored tappable behaviour for fitness, running and canoe routes with shields.
-->