---
source-hash: 2da53a8aa242bb195e58636b6ecf74b3bda942f80025c592da823faa4061ce50
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


# Android 5.5 {#android-55}



## Rejoindre la version bêta {#join-beta}

OsmAnd publie quotidiennement plusieurs constructions prêtes à l'emploi, ce qui vous permet de suivre les nouvelles fonctionnalités et de participer au processus de traduction d'OsmAnd. Vous pouvez prendre part au test de la version bêta d'OsmAnd en utilisant Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## Nouveautés {#whats-new}

- La **[recherche spatiale](https://osmand.net/blog/offline-search-video)** est activée par défaut, avec un classement plus précis, des synonymes et des suggestions de correction pour les mots mal orthographiés.
- **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** est gratuit pour tous les utilisateurs et propose des [suggestions basées sur les destinations récentes](https://osmand.net/docs/user/navigation/auto-car#dashboard-suggestions), un [trajet libre](https://osmand.net/docs/user/navigation/auto-car#destination-points) automatique pendant la conduite, ainsi que la prise en charge de [Google Assistant et Gemini](https://osmand.net/docs/user/navigation/auto-car#voice-control).
- La **[version gratuite](https://osmand.net/docs/user/purchases/android#free-and-paid-features)** inclut toutes les cartes d'une région.
- Nouveau **plugin Panoramax** avec des images au niveau de la rue comme couche cartographique, filtrées par contributeur, date et type.
- **[Ombres du soleil](https://osmand.net/docs/user/plugins/topography#sun-position)** réalistes projetées par les bâtiments 3D et le relief, et **[ombres du terrain](https://osmand.net/docs/user/plugins/topography#terrain-shadows-android)** réglables pour le relief 3D.
- Médiathèque dans **[Mes lieux](https://osmand.net/docs/user/personal/myplaces)** qui rassemble vos photos, vidéos et notes audio au même endroit.
- Lignes en tirets et en pointillés dans l'**[apparence des traces](https://osmand.net/docs/user/map/tracks/appearance#track-appearance-settings)**, également disponibles comme apparence par défaut d'un dossier.
- Nouveaux paramètres de vitesse de déplacement avec une plage de vitesse pour le calcul de l'itinéraire et une heure d'arrivée basée sur votre vitesse réelle dans les **[paramètres du véhicule](https://osmand.net/docs/user/navigation/guidance/vehicle-parameters#default-speed)**.
- Nouvelle **[action rapide](https://osmand.net/docs/user/widgets/quick-action#my-places)** pour afficher ou masquer une ou plusieurs traces d'un seul appui.
- Les étiquettes des **[courbes de niveau](https://osmand.net/docs/user/plugins/topography#contour-lines)** peuvent être orientées vers le haut de la pente, comme sur les cartes topographiques papier.
- Prise en charge des capteurs de puissance BLE dans les **[capteurs externes](https://osmand.net/docs/user/plugins/external-sensors#pair-new-sensor)**.

<!--
- Navigation settings included in route links.
- The trip recording "Notification" option is renamed to "Start from notification" to make clear it only adds a start button.
-->


## Corrections de bugs {#bug-fixes}

- Correction d'un [problème](https://github.com/osmandapp/OsmAnd/issues/24228) où le vidage de la corbeille d'OsmAnd Cloud restaurait les données supprimées.
- Correction des [annonces de recalcul d'itinéraire](https://github.com/osmandapp/OsmAnd/issues/25544) qui ne correspondaient pas à l'écart réel par rapport à l'itinéraire.
- Correction de la [boussole pointant à 180° dans la mauvaise direction](https://github.com/osmandapp/OsmAnd/issues/26147) en orientation portrait inversée.
- Rétablissement des [arrêts à vitesse nulle](https://github.com/osmandapp/OsmAnd/issues/26351) dans les graphiques de vitesse.
- Résolution du problème du [bouton Démarrer qui disparaissait](https://github.com/osmandapp/OsmAnd/issues/26305) de l'enregistrement de trajet avec une grande police ou taille d'affichage.
- Empêchement de l'[apparence des traces](https://github.com/osmandapp/OsmAnd/issues/25686) de rester non appliquée après la synchronisation avec le Cloud.
- Retour des [symboles OSMC](https://github.com/osmandapp/OsmAnd/issues/26148) dans la liste « Que se trouve ici » qui s'ouvre lorsque vous appuyez sur des écussons d'itinéraire qui se chevauchent.
- Mise à jour des [heures d'éclipse solaire](https://github.com/osmandapp/OsmAnd/issues/25830) pour afficher les heures locales au lieu des heures mondiales.

<!--
- Fixed the parking position marker not showing when Favorites are hidden.
- Fixed imported Favorites going to the wrong folder.
-->
