---
source-hash: 767578704635d01030c776c1a29804d758e70785b56523fd818befdf7a58df10
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

# iOS 5.5 {#ios-55}

## Rejoindre la version bêta {#join-beta}

Les versions bêta d'iOS (TestFlight) sont généralement fournies chaque semaine (après une démonstration de l'équipe Sprint). Elles ne contiennent pas de descriptions et peuvent avoir un versionnement continu. Elles sont considérées comme stables et prêtes à l'emploi.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Rejoindre TestFlight</a>
</div>

<br/>


## Quoi de neuf {#whats-new}

- **[CarPlay](https://osmand.net/docs/user/navigation/car-play)** est gratuit pour tous les utilisateurs et propose de nouveaux [paramètres](https://osmand.net/docs/user/navigation/car-play#settings) pour l'orientation de la carte et la fréquence d'images, avec Accueil accessible d'un seul appui depuis le menu Navigation.
- La **[version gratuite](https://osmand.net/docs/user/purchases/ios#free-and-paid-features)** inclut toutes les cartes d'une région.
- Nouveaux **[formats de coordonnées](https://osmand.net/docs/user/search/search-coordinates#customize-coordinate-format)**, y compris les systèmes EPSG, le localisateur Maidenhead et la grille suisse, avec un format principal et une liste de formats préférés.
- **[Dispositions des widgets](https://osmand.net/docs/user/widgets/configure-screen#single-and-separate-layouts)** distinctes pour les modes Portrait et Paysage, ainsi que des panneaux supérieur et inférieur **[Larges ou Compacts](https://osmand.net/docs/user/widgets/configure-screen#panels-layout)**.
- **[Apparence du panneau de widgets](https://osmand.net/docs/user/widgets/configure-screen#widget-panel-appearance)** personnalisable avec la taille des widgets, les icônes et les couleurs du texte et de l'arrière-plan.
- Nouveau paramètre **[Garder l'écran allumé](https://osmand.net/docs/user/personal/profiles#appearance)** pour chaque profil : suivre le délai d'expiration du système, garder l'écran allumé uniquement pendant la navigation, ou le garder toujours allumé.
- Les étiquettes des **[courbes de niveau](https://osmand.net/docs/user/plugins/topography#contour-lines)** peuvent être orientées vers le haut de la pente, comme sur les cartes topographiques papier.
- Paramètres d'apparence complets lorsque vous **[modifiez plusieurs Favoris](https://osmand.net/docs/user/personal/favorites#bulk-edit--delete)** à la fois.
- Les **[destinations intermédiaires](https://osmand.net/docs/user/navigation/setup/route-details#turn-by-turn-information)** apparaissent dans les détails de l'itinéraire avec leur numéro, leur nom, ainsi que la distance et le temps depuis le départ.


## Corrections de bugs {#bug-fixes}

- Correction d'un [problème](https://github.com/osmandapp/OsmAnd-iOS/issues/5696) où le vidage de la corbeille d'OsmAnd Cloud restaurait les cartes et Favoris supprimés.
- Correction de l'[altitude tombant à 0](https://github.com/osmandapp/OsmAnd-iOS/issues/5526) dans les traces enregistrées en arrière-plan.
- Résolution des [conflits de synchronisation d'OsmAnd Cloud](https://github.com/osmandapp/OsmAnd-iOS/issues/5463) après la mise à jour des cartes sur plusieurs appareils.
- Empêchement des [Favoris de dossiers masqués](https://github.com/osmandapp/OsmAnd-iOS/issues/5558) d'apparaître dans les résultats de recherche.
- Correction de la [fermeture de Planifier un itinéraire](https://github.com/osmandapp/OsmAnd-iOS/issues/5947) lorsque vous appuyez sur une trace sur la carte.
- Correction du [temps de trajet à pied](https://github.com/osmandapp/OsmAnd-iOS/issues/5787) affiché pour les itinéraires en voiture après Attacher aux routes.
- Correction des [points de passage ajoutés à la trace en cours d'enregistrement](https://github.com/osmandapp/OsmAnd-iOS/issues/5893) qui ne répondaient pas aux appuis.
- Arrêt du [clignotement de l'icône de point de passage](https://github.com/osmandapp/OsmAnd-iOS/issues/2764) pendant l'enregistrement de trace.

<!--
- Fixed map updates for mappers with Devanagari and Eastern Arabic numerals.
- Fixed the map zooming out when you add a Quick Action while moving.
- Fixed KML import creating an empty track.
-->
