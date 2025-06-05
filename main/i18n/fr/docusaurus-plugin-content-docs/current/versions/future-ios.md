---
source-hash: 76c2e06bbf049028f05500378c252f796ad77ceffc9c88f17d2c8f43b11de6e4
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

# iOS 5.0 {#ios-50}

## Rejoindre la version bêta {#join-beta}

Les versions bêta d'iOS (TestFlight) sont généralement fournies chaque semaine (après une démo de sprint d'équipe). Elles ne contiennent pas de descriptions et peuvent avoir une version continue. Elles sont considérées comme stables et prêtes à l'emploi.

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Rejoindre TestFlight</a>
</div>

<br/>

![OsmAnd iOS 5.0](../../blog/2025-04-21-ios-5-0/img/release_5-0_ios.png)

## Nouveautés {#whats-new}

- [Introduction des dossiers intelligents](#smart-folders-for-automatic-track-organization) pour l'organisation automatique des traces.
- [Refonte du bloc d'images](#redesign-image-block-in-context-menu) dans le menu contextuel.
- [Ajout d'une galerie plein écran](#gallery-viewer-for-wikimedia-images) pour visualiser les images Wikimedia.
- [Découvrir les zones à proximité](#polygon-selection-for-nearby-areas) avec les informations de polygone OsmAnd.
- [Ajout d'une option pour basculer](#toggle-visibility-for-favorite-groups) la visibilité des groupes de favoris individuels sur la carte.
- [Paramètres d'apparence flexibles](#flexible-appearance-settings-for-favorite-groups) pour les groupes de favoris.
- [Options d'icônes étendues](#expanded-icon-options-for-favorites) pour les favoris en ajoutant toutes les icônes existantes de toutes les catégories de POI.
- [Ajout d'une option pour modifier l'apparence](#change-appearance-for-multiple-tracks) de plusieurs traces simultanément.
- [Niveau de batterie](#battery-status-for-external-sensors) affiché pour les capteurs externes.
- [Ajout d'une action *Réinitialiser*](#reset-option-for-the-average-speed-widget) pour le widget Vitesse moyenne.
- L'option [*Guidage détaillé de la trace* et une boîte de dialogue de suggestion *Attacher aux routes*](#detailed-track-guidance-and-attach-to-the-roads) ont été ajoutées.
- [Les sommets proéminents](#prominent-peaks-now-discoverable) sont désormais découvrables sur la carte et dans la recherche.
- [Ajout d'actions rapides](#quick-actions-for-trip-recording) pour gérer l'enregistrement de trajet.
- [La recherche d'adresses CarPlay](#improved-carplay-address-search-prioritization) a priorisé les rues et les bâtiments.
- [Fermeture du menu Configurer la carte](#closing-configure-map-after-tapping-the-map) après avoir tapé sur la carte.


- [Mises à jour facultatives](#optional-updates). Mises à jour et améliorations supplémentaires pour la version.


<!--
To docs ios:

- Added battery level display for external sensors. - https://github.com/osmandapp/OsmAnd-iOS/issues/3953


- Redesigned image block and separate screen for all images. - https://github.com/osmandapp/OsmAnd-iOS/issues/4062
- Added a full-screen gallery viewer for Wikimedia images - https://github.com/osmandapp/OsmAnd-iOS/issues/4062


add to docs android:

- redesign of the widget configuration screen — https://github.com/osmandapp/OsmAnd-Issues/issues/2525
- Discover top-ranked POIs with the new Explore mode (Photos oh the map) — https://github.com/osmandapp/OsmAnd-Issues/issues/2662
- Wikidata in map data (wikipedia maps) #2921 - https://github.com/osmandapp/OsmAnd-Issues/issues/2921

-->

## Dossiers intelligents pour l'organisation automatique des traces {#smart-folders-for-automatic-track-organization}

![Dossiers intelligents](../../blog/2025-04-21-ios-5-0/img/my_places_smart_folder_ios.png)

Les **dossiers intelligents** pour les traces sont désormais disponibles, améliorant la façon dont vous organisez vos lieux enregistrés. Cette fonctionnalité, auparavant disponible sur Android, est conçue pour vous aider à gérer et à trier automatiquement vos traces dans des dossiers basés sur des critères prédéfinis.

Fonctionnalités clés :

- **Organisation automatique** - Les dossiers intelligents trient automatiquement les traces dans des catégories telles que la *date*, la *localisation*, la *vitesse*, et plus encore.
- **Tri personnalisable** - Vous pouvez définir comment les traces sont regroupées à l'aide de filtres, ce qui facilite la gestion et la recherche de traces spécifiques.
- **Gestion améliorée des traces** - Avec les dossiers intelligents, vous pouvez rapidement organiser et accéder à vos traces, rendant votre planification de voyage et votre navigation plus efficaces.

Comment utiliser :
Allez dans *Menu → Mes lieux → Traces* et sélectionnez *Ajouter un dossier intelligent* pour commencer à organiser automatiquement vos traces.

En savoir plus :
[Configuration des dossiers intelligents pour les traces](https://osmand.net/docs/user/personal/tracks/smart-folder)


## Refonte du bloc d'images dans le menu contextuel {#redesign-image-block-in-context-menu}

![Refonte du bloc d'images](../../blog/2025-04-21-ios-5-0/img/gallery_ios.png)

Le **bloc d'images** dans le menu contextuel a été repensé pour une expérience plus fluide. Désormais, les **photos en ligne** (images Wikimedia) et les **images au niveau de la rue** (images Mapillary) sont affichées comme des éléments distincts dans le menu.

Améliorations clés :

- **Sections séparées** pour les photos en ligne et les images au niveau de la rue.
- **Vue galerie** — Taper sur une image l'ouvre en mode plein écran.
- **Bouton Explorer** pour les images au niveau de la rue — Ouvre la vue Mapillary pour des images détaillées au niveau de la rue.
- **Bouton Tout afficher** — Un nouveau bouton sous les photos permet aux utilisateurs d'accéder à un **écran séparé** listant toutes les images liées à l'emplacement.

Comment utiliser :
Tapez sur un lieu pour ouvrir le menu contextuel, puis sélectionnez **Photos en ligne** ou **Images au niveau de la rue** pour visualiser les images.

En savoir plus :
[Photos en ligne dans le menu contextuel de la carte](https://osmand.net/docs/user/map/map-context-menu#online-photos)


## Visionneuse de galerie pour les images Wikimedia {#gallery-viewer-for-wikimedia-images}

![Galerie](../../blog/2025-04-21-ios-5-0/img/gallery_viewer_ios.png)

Présentation d'une **visionneuse de galerie** améliorée pour les **images Wikimedia**, permettant une expérience de visualisation de photos plus immersive pour les points d'intérêt.

Fonctionnalités clés :

- **Intégration du menu contextuel** — Tapez sur un POI sur la carte pour ouvrir son menu contextuel et accéder aux *images Wikimedia* associées.
- **Visionneuse de galerie** — Parcourez plusieurs images en séquence avec la disposition de galerie mise à jour.
- **Option plein écran** — Visualisez les images en mode plein écran pour une meilleure clarté et des détails.
- **Détails de l'image** — Pour chaque image, vous pouvez afficher les métadonnées clés telles que la description, la date, l'auteur et la licence.

Comment utiliser :
Tapez sur un **POI** sur la carte avec des **images Wikimedia** disponibles, puis sélectionnez l'option **Tout afficher** dans le menu contextuel pour explorer les images.

En savoir plus :
[Menu contextuel de la carte](https://osmand.net/docs/user/map/map-context-menu#online-photos).


## Sélection de polygone pour les zones à proximité {#polygon-selection-for-nearby-areas}

![Informations sur le polygone](../../blog/2025-04-21-ios-5-0/img/areas_info_ios.png)

La fonctionnalité **Informations sur le polygone** a été améliorée dans OsmAnd pour iOS, offrant un accès plus facile aux données sur les zones environnantes directement depuis la carte.

Désormais, avec un **appui long** sur la carte ou un **appui simple** sur un POI, vous pouvez accéder à des informations détaillées sur les polygones à proximité. Cette fonctionnalité permet d'identifier rapidement et facilement les zones géographiques ou administratives autour de vous.

Nouveautés :

- **Afficher les détails du polygone** — Accédez facilement aux informations sur les zones à proximité depuis le menu contextuel de la carte, y compris leur *type* et leur *nom*.
- **Tri par taille** — Les polygones sont triés par *taille* du *plus petit au plus grand* pour une meilleure organisation.

Pour accéder :
*Menu contextuel de la carte → Détails → Dans*.

En savoir plus :
[Menu contextuel de la carte - informations sur le polygone](https://osmand.net/docs/user/map/map-context-menu#polygon-information)


## Basculer la visibilité des groupes de favoris {#toggle-visibility-for-favorite-groups}

![Basculer la visibilité des groupes de favoris](../../blog/2025-04-21-ios-5-0/img/visibility_favorite_groupes_ios.png)

OsmAnd 5.0 introduit un **basculement de visibilité** mis à jour pour les groupes de favoris, offrant plus de contrôle sur ce qui est affiché sur la carte. Cette fonctionnalité, auparavant disponible sur Android, fait désormais également partie de la version iOS.

Améliorations clés :

- **Masquer ou afficher les groupes de favoris** — Désactivez facilement la visibilité de groupes de favoris spécifiques.
- **Organiser les favoris** — Aide à désencombrer la carte en contrôlant quels groupes sont visibles à un moment donné.
- **Organisation améliorée** — Les groupes masqués sont déplacés en bas de la liste pour une meilleure gestion.

Comment utiliser :
Allez dans *Menu → Mes lieux → Favoris → appui long sur le dossier → Option Afficher sur la carte*.

En savoir plus :
[Gestion des favoris](https://osmand.net/docs/user/personal/favorites#favorite-group-actions)


## Paramètres d'apparence flexibles pour les groupes de favoris {#flexible-appearance-settings-for-favorite-groups}

![Paramètres d'apparence flexibles pour les groupes de favoris](../../blog/2025-04-21-ios-5-0/img/favorite_add_new_group_3_ios.png)

Dans cette version, vous pouvez **personnaliser séparément** l'*icône, la couleur* et la *forme* pour chaque groupe de favoris sans réinitialiser tous les attributs. Et ensuite, remplacer les paramètres pour les points existants dans le dossier, uniquement les nouveaux favoris, ou appliquer à tous. Cela vous permet d'organiser visuellement vos lieux enregistrés plus précisément.

En savoir plus :
[Modifier l'apparence du groupe](https://osmand.net/docs/user/personal/favorites/#change-group-appearance)


## Modifier l'apparence de plusieurs traces {#change-appearance-for-multiple-tracks}

![Modifier l'apparence de plusieurs traces](../../blog/2025-04-21-ios-5-0/img/tracks_change_appear_3_ios.png)

Vous pouvez désormais **modifier l'apparence** de **plusieurs traces** simultanément grâce à un nouveau paramètre dans le *mode Sélection*. Cette mise à jour facilite l'application de paramètres cohérents sur plusieurs traces, vous aidant à modifier rapidement leur apparence pour une meilleure visualisation.

Paramètres que vous pouvez modifier pour toutes les traces sélectionnées :

- **Flèches de direction** — Ajouter des flèches de direction.
- **Icônes de début / fin** — Afficher les icônes de début et de fin.
- **Coloration** — Modifier le schéma de couleurs.
- **Largeur** — Ajuster la largeur de la ligne.
- **Intervalle de division** — Modifier l'intervalle de division.

En savoir plus :
[Paramètres d'apparence des traces](https://osmand.net/docs/user/map/tracks/appearance)


## État de la batterie pour les capteurs externes {#battery-status-for-external-sensors}

![État de la batterie pour les capteurs externes](../../blog/2025-04-21-ios-5-0/img/battery_level_sensors_ios.png)

Dans OsmAnd 5.0, vous pouvez désormais **afficher le niveau de batterie** des capteurs externes connectés comme valeur principale. Cela facilite la surveillance de leur état et garantit des performances optimales pendant l'utilisation.

Fonctionnalités clés :

- **Affichage du niveau de batterie** — Vérifiez le **niveau de batterie** de tous les capteurs externes connectés directement dans l'application.
- **Surveillance en temps réel** — L'état de la batterie se met à jour en temps réel, vous aidant à gérer efficacement l'alimentation des capteurs.

Comment utiliser :

- Allez dans *Menu → Plugins → Capteurs externes* pour afficher les capteurs connectés et leur état de batterie.
- Allez dans *Menu → Configurer l'écran → Choisir un panneau → Ajouter un widget → Capteurs externes → Choisir un capteur → Paramètres → Afficher → Niveau de batterie*.
- Appuyez longuement sur le widget sur l'écran de la carte et sélectionnez *Paramètres*.

En savoir plus :
[Plugin Capteurs externes](https://osmand.net/docs/user/plugins/external-sensors)


## Option de réinitialisation pour le widget Vitesse moyenne {#reset-option-for-the-average-speed-widget}

![Option de réinitialisation pour le widget Vitesse moyenne](../../blog/2025-04-21-ios-5-0/img/reset_average_speed.png)

Vous pouvez désormais **réinitialiser la vitesse moyenne** directement depuis le *menu contextuel du widget*. Cette mise à jour ajoute une action **Réinitialiser**, vous permettant de recommencer les mesures sans redémarrer la navigation.

Nouveautés :

- **Option du menu contextuel** pour réinitialiser la vitesse moyenne via un *appui long* sur le widget sur l'écran de la carte.
- **Action de réinitialisation ajoutée aux paramètres du widget** dans le menu *Configurer l'écran* pour un accès rapide.

En savoir plus :
[Widget Vitesse moyenne](https://osmand.net/docs/user/widgets/info-widgets/#average-speed)
[Configurer l'écran](https://osmand.net/docs/user/widgets/configure-screen#widget-settings)


## Guidage détaillé de la trace et attachement aux routes {#detailed-track-guidance-and-attach-to-the-roads}

![Guidage détaillé de la trace](../../blog/2025-04-21-ios-5-0/img/detailed_track_guidnce_ios.png)

OsmAnd 5.0 pour iOS introduit le **Guidage détaillé de la trace** avec la possibilité d'**attacher automatiquement les traces aux routes**, améliorant votre expérience de navigation.

Fonctionnalités clés :

- **Attacher aux routes** — Lorsque vous utilisez une trace comme destination, OsmAnd peut aligner automatiquement la trace avec les routes les plus proches pour une navigation plus précise. Cette fonctionnalité est disponible dans le menu **Suivre la trace**.

- **Confirmation automatique ou manuelle** :
  - **Demander à chaque fois** (par défaut) — La fonctionnalité *Attacher aux routes* apparaît dans la section **Détails de l'itinéraire** chaque fois qu'un itinéraire basé sur une trace est calculé, vous permettant de décider d'appliquer ou non l'attachement aux routes pour chaque session.
  - **Toujours appliquer** — Cette option attache automatiquement la trace aux routes pour chaque itinéraire de **navigation par trace**, sans confirmation manuelle nécessaire.

Comment utiliser :
Allez dans *Menu → Paramètres → Profils d'application → Paramètres de navigation → Guidage détaillé de la trace*.

En savoir plus :
[Guidage détaillé de la trace](https://osmand.net/docs/user/navigation/guidance/navigation-settings#detailed-track-guidance)
[Attacher aux routes](https://osmand.net/docs/user/navigation/setup/gpx-navigation#attach-to-the-roads)


## Sommets proéminents désormais découvrables {#prominent-peaks-now-discoverable}

Vous pouvez désormais **découvrir les sommets proéminents** directement sur la carte et via la recherche. Cette mise à jour ajoute des [sommets de montagne notables](https://en.wikipedia.org/wiki/Ultra-prominent_peak) à la carte de base, vous permettant de trouver facilement leurs noms, altitudes et détails supplémentaires via le menu contextuel de la carte ou la fonctionnalité de recherche.

Il suffit de taper sur les *icônes de sommet* sur la carte, ou d'utiliser la *Recherche → Sommets de montagne* pour localiser et explorer rapidement les principaux sommets de montagne.

En savoir plus :
[Menu contextuel de la carte](https://osmand.net/docs/user/map/map-context-menu)


## Actions rapides pour l'enregistrement de trajet {#quick-actions-for-trip-recording}

![Actions rapides pour l'enregistrement de trajet](../../blog/2025-04-21-ios-5-0/img/qa_trip_recording_ios.png)

Cette version introduit des **actions rapides** pour l'**enregistrement de trajet**, vous permettant de gérer l'enregistrement de votre voyage d'un simple toucher, améliorant l'efficacité et la sécurité pendant vos déplacements.

Fonctionnalités clés :

- **Accès pratique** — Démarrer, mettre en pause, enregistrer et terminer un trajet enregistré avec de nouveaux boutons d'action rapide.
- **Contrôle rapide** — Utilisez les *boutons d'action rapide* pour gérer facilement l'enregistrement de votre trajet sans naviguer à travers plusieurs écrans.

Comment utiliser :
Allez dans *Menu → Configurer l'écran → Boutons personnalisés → Action rapide → Ajouter une action → Mes lieux* pour ajouter une ou plusieurs actions à votre écran.

En savoir plus :
[Actions rapides pour Mes lieux](https://osmand.net/docs/user/widgets/quick-action#my-places)


## Priorisation améliorée de la recherche d'adresses CarPlay {#improved-carplay-address-search-prioritization}

![Recherche CarPlay](../../blog/2025-04-21-ios-5-0/img/car-play-search(1).png)

La fonctionnalité **Recherche CarPlay** priorise désormais les rues et les numéros de bâtiment lors de la recherche d'adresses, améliorant la navigation.

Fonctionnalités clés :

- **Rues et bâtiments en premier** - Les rues et les numéros de bâtiment apparaissent en premier lors de la recherche d'une adresse. Cela garantit que les détails d'adresse pertinents sont affichés avant d'autres lieux tels que les routes ou les gares.
- **Flux de recherche par ville et rue** — Lors de la recherche d'une ville, les rues de la ville s'affichent en premier, suivies des numéros de bâtiment pour ces rues.
- **Optimisé pour la navigation** - Ce changement améliore le processus de navigation en priorisant les informations liées à l'adresse.

En savoir plus :
[Recherche CarPlay](https://osmand.net/docs/user/navigation/car-play#search)
[Guide de recherche d'adresses](https://osmand.net/docs/user/search/search-address)


## Fermeture de Configurer la carte après avoir tapé sur la carte {#closing-configure-map-after-tapping-the-map}

![Fermer Configurer la carte après avoir tapé sur la carte](../../blog/2025-04-21-ios-5-0/img/configure_map_behavior_ios.png)

Vous pouvez désormais **fermer automatiquement le menu *Configurer la carte*** en tapant sur la partie visible de la carte. Cette amélioration rend l'interaction avec OsmAnd encore plus pratique.

Fonctionnalités clés :

- **Fermeture automatique** — Après avoir sélectionné des options dans le menu *Configurer la carte*, un simple toucher sur la carte ferme le menu, réduisant le nombre d'étapes nécessaires pour reprendre l'interaction avec la carte.
- **Utilisabilité améliorée** — Cette fonctionnalité permet un flux de travail plus fluide et plus intuitif lors de la configuration des paramètres de la carte.

Comment utiliser :
Il suffit de taper n'importe où sur la carte après avoir configuré les paramètres dans le menu **Configurer la carte** pour le fermer.

En savoir plus :
[Menu Configurer la carte](https://osmand.net/docs/user/map/configure-map-menu)


## Mises à jour facultatives {#optional-updates}

- Ajout de la prise en charge du [vietnamien et de l'hébreu](https://osmand.net/docs/user/navigation/guidance/voice-navigation#voice-prompt-language) en synthèse vocale (TTS) pour la navigation.
- Ajout de la [mise en évidence des bordures pour les bâtiments](https://github.com/osmandapp/OsmAnd-iOS/issues/4164) et les zones avec des informations détaillées.
- [Bouton personnalisé : Afficher/masquer les itinéraires VTT](https://github.com/osmandapp/OsmAnd-iOS/issues/4393) par défaut sur le sentier IMBA.
- Problèmes corrigés :
  - La [séquence de saisie des coordonnées UTM](https://github.com/osmandapp/OsmAnd-iOS/issues/4333).
  - Un problème avec les [couleurs des points de passage de trace](https://github.com/osmandapp/OsmAnd-iOS/issues/4293).
  - Le bouton [*Télécharger tout* manquant pour les cartes de terrain](https://github.com/osmandapp/OsmAnd-iOS/issues/4155).
  - Un problème où les [articles populaires étaient parfois manquants dans les guides de voyage](https://github.com/osmandapp/OsmAnd-iOS/issues/4370).
  - Le widget [*Niveau de batterie*](https://github.com/osmandapp/OsmAnd-iOS/issues/4145) s'affiche incorrectement.
  - [Problèmes CarPlay](https://github.com/osmandapp/OsmAnd-iOS/issues/4284) avec le retour constant à ma position.
  - Les [couleurs des marqueurs de carte](https://github.com/osmandapp/OsmAnd-iOS/issues/4293) ne se restaurent pas après une importation locale ou une importation cloud.
  - [Mouvement dans les ronds-points](https://github.com/osmandapp/OsmAnd-iOS/issues/4296) dans les détails de l'itinéraire.
  - [Plantages de l'écran des favoris](https://github.com/osmandapp/OsmAnd-iOS/issues/4426).
  - [Palette de couleurs (terrain)](https://github.com/osmandapp/OsmAnd-iOS/issues/4471).
  - [Affichage des itinéraires de randonnée](https://github.com/osmandapp/OsmAnd-iOS/issues/4325).
  - Utilisation de la langue d'affichage ou de la carte pour les [balises lang=true dans le menu contextuel](https://github.com/osmandapp/OsmAnd-iOS/issues/4216).
  - [Bouton personnalisé - carte sous-jacente](https://github.com/osmandapp/OsmAnd-iOS/issues/4394).
  - [Blocages dans les tunnels](https://github.com/osmandapp/OsmAnd-iOS/issues/4401).
  - [Remplacement de `/` par `-` dans le nom des dossiers de favoris](https://github.com/osmandapp/OsmAnd-iOS/issues/4403).
  - [Routage direct vers un point](https://github.com/osmandapp/OsmAnd-iOS/issues/4226).
  - Boîte de dialogue de recalcul d'[itinéraire dans CarPlay](https://github.com/osmandapp/OsmAnd-iOS/issues/4226).
  - [Marqueur pour la sélection GPX](https://github.com/osmandapp/OsmAnd-iOS/issues/4367).
  - [Exporter uniquement les paramètres](https://github.com/osmandapp/OsmAnd-iOS/issues/4405).
  - [Boutons de navigation invisibles en mode sombre](https://github.com/osmandapp/OsmAnd-iOS/issues/4399).
  - [Distance par toucher](https://github.com/osmandapp/OsmAnd-iOS/issues/4380).
  - [Chaînes pour les données cartographiques américaines (Plugin Cartes américaines)](https://github.com/osmandapp/OsmAnd-iOS/issues/4334).
  - [Arrière-plan de superposition](https://github.com/osmandapp/OsmAnd-iOS/issues/4332).