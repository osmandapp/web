---
source-hash: 99f4f132ee5c0b6fd48949f2e16d91c53267fa3ebef0498549f074e425034b5d
sidebar_position: 4
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


# Android 5.4 {#android-54}



## Rejoindre la version bêta {#join-beta}

OsmAnd publie quotidiennement plusieurs constructions prêtes à l'emploi, ce qui vous permet de suivre les nouvelles fonctionnalités et de participer au processus de traduction d'OsmAnd. Vous pouvez prendre part au test de la version bêta d'OsmAnd en utilisant Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## Nouveautés {#whats-new}

- Amélioration des **[Favoris](https://osmand.net/docs/user/personal/favorites)** avec prise en charge des pièces jointes multimédias (photos, audio et vidéo) et intégration améliorée des notes audio/vidéo.
- Amélioration des **[widgets de navigation](https://osmand.net/docs/user/widgets/nav-widgets)** avec une adaptation plus flexible de la taille et de la disposition sur différentes densités et orientations d'écran.
- Ajout d'une légende cartographique dans **[Configurer la carte](https://osmand.net/docs/user/map/configure-map-menu)** pour mieux comprendre les types d'itinéraires et les éléments de la carte.
- Amélioration du filtrage des itinéraires et du contrôle visuel dans **[Configurer la carte](https://osmand.net/docs/user/map/configure-map-menu)**, incluant les classifications et priorités des itinéraires.
- Amélioration de l'analyse des traces avec de nouveaux types de graphiques et des données plus détaillées telles que la surface, le type de route et la pente.
- Amélioration de la gestion des traces avec des aperçus et une organisation améliorée dans **[Mes données](https://osmand.net/docs/user/personal/myplaces)**.
- Sauvegarde automatique et synchronisation plus fiable des données utilisateur dans **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)**, y compris les **[Dossiers intelligents](https://osmand.net/docs/user/personal/tracks/smart-folder)**.
- Premières améliorations de la navigation nautique avec des améliorations AIS et des paramètres et widgets de navigation supplémentaires.
- Amélioration de l'expérience **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** avec une recherche et des commandes de navigation améliorées.
- Ajout de la possibilité d'interagir avec la carte sur **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)**, y compris la sélection directe de points.
- Refonte du **[widget d'altitude](https://osmand.net/docs/user/widgets/nav-widgets#elevation-widget)** avec des informations plus détaillées sur l'altitude de l'itinéraire.

<!--
- New experimental **[Astronomy plugin](https://osmand.net/docs/user/plugins/astronomy)** with an astronomical overlay showing the paths of the Sun, planets and stars.
- Improved **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** section with clearer backup, version history and automatic backup settings.
- Updated **[Configure map](https://osmand.net/docs/user/map/configure-map-menu)** options with a clearer legend and improved filters for hiking, cycling and MTB routes.
- New and redesigned elevation and navigation widgets with elevation profiles, uphill/downhill metrics and average grade.
- **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** improvements with extended widget support and better OBD II integration.
- More flexible **[widget and map button layout](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, especially in landscape mode.
- Enhanced Favorites management in **[My Places](https://osmand.net/docs/user/personal/myplaces)**.
- Smarter track organization with Smart Folders and clearer summary statistics.
- Advanced route and track analysis.
- Improved accessibility features, including more flexible audio and haptic navigation feedback.
- Initial groundwork for smartwatch integration for navigation and trip recording data.
-->


## Corrections de bugs {#bug-fixes}

- Correction d'un [problème](https://github.com/osmandapp/OsmAnd/issues/16507) où les propriétés des favoris (couleur, icône, forme) n'étaient pas mises à jour lors du changement de groupe.
- Correction des [directions de sortie incorrectes](https://github.com/osmandapp/OsmAnd/issues/23104) affichées aux ronds-points dans Android Auto.
- Correction des valeurs inexactes de [montée et descente](https://github.com/osmandapp/OsmAnd/issues/20624) dans les widgets d'altitude.
- Empêchement des [favoris masqués](https://github.com/osmandapp/OsmAnd/issues/24689) de réapparaître sur la carte lors de l'ajout de points de trace à un dossier.
- Résolution des [incohérences entre graphiques](https://github.com/osmandapp/OsmAnd/issues/24712) dans l'écran Détails.
- Résolution d'un [problème](https://github.com/osmandapp/OsmAnd/issues/24791) où les dossiers de Favoris désépinglés réapparaissaient épinglés après un redémarrage de l'application.

<!--
- Improved stability of **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** sync and backup, reducing conflicts and ensuring widgets and settings restore correctly across devices.
- Fixed incorrect uphill/downhill values in elevation widgets and improved accuracy of ascent/descent calculations in route analysis.
- Improved **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** navigation behaviour, including correct exit directions at roundabouts and proper placement of on-screen tools such as the radius ruler.
- Fixed several issues related to **[Accessibility](https://osmand.net/docs/user/plugins/accessibility)** mode, including navigation announcements and interaction with certain map tools.
- General interface and performance fixes across map rendering, widget display and configuration screens.
-->