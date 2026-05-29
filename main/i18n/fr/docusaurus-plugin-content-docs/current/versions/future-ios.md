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

## Rejoindre la version bêta {#join-beta}

Les versions bêta d'iOS (TestFlight) sont généralement fournies chaque semaine (après une démonstration de l'équipe Sprint). Elles ne contiennent pas de descriptions et peuvent avoir un versionnement continu. Elles sont considérées comme stables et prêtes à l'emploi.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Rejoindre TestFlight</a>
</div>

<br/>


## Quoi de neuf {#whats-new}

- Recherche mise à jour avec un nouvel onglet **[Explorer](https://osmand.net/docs/user/map/popular_places#explore-in-search)** présentant les lieux populaires à proximité.
- Nouveau **[plugin Astronomie](https://osmand.net/docs/user/plugins/astronomy)** expérimental avec une superposition astronomique montrant les trajectoires du Soleil, des planètes et des étoiles.
- Ajout d'un **[éditeur de palettes](https://osmand.net/docs/user/map/tracks/appearance#color-palette-editor)** pour créer et personnaliser des jeux de couleurs pour les itinéraires et le relief.
- Organisation plus intelligente des traces avec les **[Dossiers intelligents](https://osmand.net/docs/user/personal/tracks/smart-folder)** et des statistiques récapitulatives plus claires.
- Mise en page plus flexible des **[widgets et boutons de carte](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, notamment en mode paysage.
- **[Planifier un itinéraire](https://osmand.net/docs/user/plan-route/create-route)** amélioré avec graphique d'altitude, calcul d'altitude hors ligne et paramètres d'itinéraire.
- Ajout de segments en montée, en descente et plats à l'**[analyse de trace](https://osmand.net/docs/user/map/tracks/track-context-menu#analyze-by-intervals)**.

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


## Corrections de bugs {#bug-fixes}

- Correction des [Dossiers intelligents](https://github.com/osmandapp/OsmAnd-iOS/issues/5358) qui ne se synchronisent pas avec OsmAnd Cloud ou n'apparaissent pas dans l'export des paramètres.
- Mise à jour du [menu contextuel Wikipédia](https://github.com/osmandapp/OsmAnd-Issues/issues/3215) avec un nouveau design et ajout de photos en ligne.
- Correction des [noms de POI](https://github.com/osmandapp/OsmAnd-iOS/issues/5253) manquants dans le menu « Que se trouve ici ».
- Correction de l'ouverture des [Guides de voyage](https://github.com/osmandapp/OsmAnd-Issues/issues/3212) depuis les résultats de recherche pour afficher directement l'article.
- Ajustement de la position de la section [Photos en ligne](https://github.com/osmandapp/OsmAnd-iOS/issues/5336) dans le menu contextuel de la région.

<!--
- Faster opening of context menus when tapping POIs, Favorites, tracks and buildings.
- Correct handling of relation-based POIs on multipolygons.
- Fixed “null” appearing instead of a city name in POI search results and improved night-mode background consistency.
- Restored tappable behaviour for fitness, running and canoe routes with shields.
-->