---
source-hash: 57a0e223941f4fa5c78b961d2b8a0c14ce6e335350aa6cf77cf17491e4fcf0f6
sidebar_position: 2
title: Cartes et ressources
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

## Vue d'ensemble {#overview}

Dans la section **Cartes et ressources**, vous pouvez gérer les cartes *en ligne* et *hors ligne*, ainsi que d'autres ressources utilisées dans OsmAnd. Par exemple, vous pouvez télécharger, supprimer, renommer, vider le cache, mettre à jour et vérifier la taille, et effectuer différentes actions.

OsmAnd fonctionne avec deux types de cartes : les [cartes vectorielles](../map/vector-maps.md) et les [cartes matricielles](../map/raster-maps.md). L'onglet [Local](#local) stocke toutes les cartes et ressources. Les types de cartes disponibles peuvent être téléchargés depuis l'onglet [Téléchargements](#downloads). Dans l'onglet [Mises à jour](#updates), vous pouvez télécharger les cartes disponibles pour les mises à jour et utiliser les [mises à jour en direct](#osmand-live). Vous pouvez également accéder à la fonction [Cartes supplémentaires](#extra-maps) pour créer vos propres types de cartes.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Menu Cartes Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu Cartes iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>

## Types de cartes {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de téléchargement de cartes Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Cartes régionales Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de téléchargement de cartes iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Cartes régionales Android](@site/static/img/personal/maps/map_type_2_ios.png)

</TabItem>

</Tabs>

Le téléchargement de cartes dans l'application OsmAnd est une étape importante qui détermine la fonctionnalité et l'efficacité de la navigation.

#### Fonctionnalités gratuites pour l'emplacement sélectionné {#free-features-for-the-selected-location}

- **Carte standard**. Fournit une vue d'ensemble de la zone basée sur la source [OpenStreetMap](https://www.openstreetmap.org/) et contient une carte, des itinéraires, des adresses, des POI et des informations sur les transports en commun. Un appui ouvre un écran avec une liste des régions du pays sélectionné et des informations sur l'espace que ces cartes occuperont sur votre appareil.
- **Routes uniquement** (*Android uniquement*). La carte contient uniquement des informations sur le réseau routier pour se concentrer sur les itinéraires et les infrastructures routières. En supprimant des détails tels que les bâtiments et les points d'intérêt, elle est plus petite qu'une carte standard. Un appui ouvre un écran avec une liste des régions du pays sélectionné et des informations sur l'espace que ces cartes occuperont sur votre appareil.

#### Fonctionnalités payantes pour l'emplacement sélectionné {#paid-features-for-the-selected-location}

- [Courbes de niveau](../plugins/topography.md#contour-lines). Une carte contenant des courbes de niveau pour visualiser le terrain.
- [Carte de terrain (ombrage et pente)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Les cartes avec ombres ou pentes fournissent des informations supplémentaires sur le terrain.
- [Carte de terrain (3D)](../plugins/topography.md#3d-relief). Représentation tridimensionnelle du terrain pour une meilleure compréhension de votre environnement. Le [moteur de rendu de carte version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) doit être activé.
- [Wikipédia](../plugins/wikipedia.md). Carte vectorielle avec des articles [Wikipédia](https://wikipedia.org/) géolocalisés sur des points de repère ou des informations supplémentaires sur des lieux.
- [Prévisions météorologiques](../plugins/weather.md). Informations météorologiques sur une carte pour faciliter la planification d'itinéraire.
- [Cartes matricielles en ligne](../map/raster-maps.md). Les cartes sont disponibles en téléchargement en ligne et peuvent être installées en tant que cartes tierces ou tuiles OsmAnd.

#### Carte d'aperçu du monde {#world-overview-map}

Les versions d'OsmAnd jusqu'à la 3.8 proposent de télécharger une carte du monde afin de pouvoir la visualiser à l'échelle planétaire. Dans les versions plus récentes d'OsmAnd, une *Mini carte du monde* légère est fournie avec l'application. L'application vous permet de télécharger une carte du monde plus grande et plus détaillée.

## Cartes et ressources {#maps--resources}

La section **Cartes et ressources** du *Menu principal* de l'application OsmAnd permet d'accéder à la gestion des cartes et d'autres données importantes.

- L'onglet [Téléchargement](#downloads) de cartes vous permet de télécharger des cartes pour une utilisation hors ligne, garantissant leur disponibilité sans Internet.
- Dans l'onglet [Cartes locales](#local), vous pouvez trouver et gérer des informations détaillées sur les cartes et les lieux, y compris les favoris, les traces, les notes OSM et d'autres éléments que vous avez sur votre appareil.
- L'onglet [Mises à jour](#updates) permet aux utilisateurs d'obtenir des informations sur les mises à jour disponibles pour les cartes et d'autres ressources, garantissant que les données sont à jour et précises.

***Actions générales que vous pouvez effectuer dans Cartes et ressources*** :

- **Actualiser**. Recharge la liste des cartes disponibles depuis le serveur OsmAnd.
- **Rechercher**. Rechercher des cartes par **pays**, **province** ou grande **ville**.
- **Mémoire de l'appareil**. Indique la quantité de mémoire disponible pour le téléchargement et le nombre de cartes pouvant être téléchargées gratuitement. Selon l'onglet, des données légèrement différentes sont parfois affichées.
- **Compteur de cartes** (*Version gratuite* n'est visible que si vous n'avez pas d'[abonnement](../purchases/index.md)). L'indicateur avec des séparateurs indique le nombre de cartes qu'il vous reste à télécharger sur les *7 disponibles*.

:::info Mises à jour mensuelles des cartes
Veuillez noter que les mises à jour mensuelles des cartes sont considérées comme un autre téléchargement de carte et sont soustraites du nombre disponible de téléchargements de cartes gratuits.
:::

### Téléchargements {#downloads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Menu de téléchargement de cartes général Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu de téléchargement de cartes général iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

L'onglet **Téléchargement** vous permet de télécharger différents types de cartes depuis les serveurs OsmAnd, ce qui nécessite une connexion Internet active.

***Pour télécharger une carte :***

- **Ouvrez l'onglet Téléchargement**, localisez la section requise et appuyez sur le dossier pertinent pour voir les cartes disponibles.

- Les **cartes disponibles** affichent des icônes de téléchargement, pour une seule carte ou pour [plusieurs cartes](#multiple-map-loading).

- Les **cartes téléchargées** affichent une icône verte avec un bouton de menu :
    - *Android* : Menu à trois points.
    - *iOS* : Icône Info (I).

- Les **cartes en cours de chargement** ont une icône le visualisant. Pour annuler le téléchargement, appuyez sur l'icône. Pour afficher la liste des cartes dans la file d'attente de téléchargement et annuler les téléchargements, appuyez sur la barre de téléchargement dans la zone d'informations sur la mémoire de l'appareil des onglets Téléchargements et Mises à jour.

- **Dans la version gratuite**, les cartes non disponibles au téléchargement affichent une icône [OBTENIR](../purchases/index.md), renvoyant à la page d'achat.

***L'onglet Téléchargements se compose de groupes de cartes :***

- **Infos mémoire de l'appareil**. Visualisez la quantité d'espace occupé et libre sur votre appareil.
- **Compteur de cartes** (***Version gratuite***). Affiche le nombre de cartes qu'il vous reste à télécharger.
- [Cartes supplémentaires](#extra-maps). Affiche les données cartographiques pour le [package personnalisé](../plugins/custom.md).
- **Régions**. Liste par continent et région du monde : *Afrique, Antarctique, Asie, Australie et Océanie, Amérique centrale, Europe, Amérique du Nord, Russie et Amérique du Sud.*
- [Cartes du monde](#world-maps). Une liste des cartes du monde entier : *Correction d'altitude mondiale (Android uniquement)*, *Carte d'aperçu du monde*, *Monde entier (Prévisions météorologiques)*
- [Cartes nautiques](../plugins/nautical-charts.md) ([*fonctionnalité payante*](../purchases/index.md)). Cartes vectorielles avec des élévations sous forme de points ou de lignes.
- [Guides de voyage (Wikivoyage)](../plan-route/travel-guides.md) ([*fonctionnalité payante*](../purchases/index.md)). Cartes vectorielles avec une collection d'articles au format HTML et des fichiers GPX supplémentaires.
- **Autres cartes**. Cartes qui ne peuvent pas être attribuées à la hiérarchie de cartes actuelle car elles ne sont pas prises en charge ou seront disponibles dans les futures versions.
- [Invites vocales](../navigation/guidance/voice-navigation.md) (*Android uniquement*). Packs vocaux pour la vocalisation des invites de navigation.
- [Polices de carte](../map/vector-maps.md#map-fonts-android) (*Android uniquement*). Fichiers de polices supplémentaires affichent le texte sur la carte.

#### Cartes du monde {#world-maps}

Dans le menu Télécharger les cartes, il y a une section **Cartes du monde** qui donne accès au téléchargement de diverses cartes du monde, complétant les fonctionnalités de l'application.

- **Correction d'altitude mondiale** (*Android uniquement*). Améliore la précision de la navigation, en particulier en terrain montagneux.
- **Carte d'aperçu du monde**. Fournit un aperçu étendu de la surface de la Terre, utile pour la planification d'itinéraires à long terme et l'exploration occasionnelle.
- **Monde entier (Prévisions météorologiques)**. Permet de télécharger une carte avec des informations météorologiques.

Des informations sur le *menu des cartes* et les *actions* peuvent être trouvées dans l'article [Télécharger les cartes](../start-with/download-maps.md).

#### Chargement de plusieurs cartes {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de téléchargement de cartes général Android](@site/static/img/personal/maps/multiple_maps_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de téléchargement de cartes général iOS](@site/static/img/personal/maps/multiple_maps_ios.png)

</TabItem>

</Tabs>

Pour les pays composés de **plusieurs cartes régionales**, vous pouvez utiliser le chargement en masse de plusieurs cartes. Les cartes disponibles pour ce type de téléchargement sont affichées avec des icônes de double flèche de téléchargement et une étiquette indiquant le nombre de régions à l'intérieur (par exemple, Courbes de niveau / Toutes les régions : 10). Vous pouvez choisir le nombre de cartes à télécharger.

### Local {#local}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Onglet Local Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Onglet Local Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Menu de l'onglet Local iOS](@site/static/img/personal/maps/local_tab_ios.png)

</TabItem>

</Tabs>

L'onglet Local fournit un aperçu de l'utilisation du stockage pour toutes les données OsmAnd sur votre appareil. Les données sont divisées en trois sections codées par couleur pour plus de clarté, les éléments étant triés par taille du plus grand au plus petit. Chaque section n'affiche que les éléments avec des données téléchargées :

- ***Ressources*** (*bleu*).
    Comprend les cartes ([Standard](../map/vector-maps.md), &nbsp;[Nautique](../plugins/nautical-charts.md), &nbsp;[Topographie](../plugins/topography.md), &nbsp;[Météo](../plugins/weather.md)), &nbsp;[Wikipédia](../plugins/wikipedia.md) et [Guides de voyage](../plan-route/travel-guides.md), &nbsp;[Mises à jour en direct](../personal/maps-resources.md#osmand-live), &nbsp;**Routes uniquement**, &nbsp;[Sources de cartes](../map/raster-maps.md), &nbsp;[Styles de rendu](../map/vector-maps.md#default-map-styles), &nbsp;**Polices de carte, &nbsp;Invites vocales (enregistrées et TTS), &nbsp;Cache**.

- ***Mes lieux*** (*jaune*).
    Comprend les [Favoris](../personal/favorites.md), &nbsp;les [Traces](../personal/tracks/manage-tracks.md), &nbsp;les [Notes OSM](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;les [Modifications OSM](../plugins/osm-editing.md#osm-editing-layer), &nbsp;les [Notes A/V](../plugins/audio-video-notes.md), &nbsp;les [Marqueurs de carte](../personal/markers.md), &nbsp;l'[Historique](../personal/global-settings.md#history), &nbsp;*Itinéraire*.

- ***Paramètres*** (*vert*).
    Comprend les [Profils](../personal/profiles.md), &nbsp;les [Couleurs](../personal/color-palette-schemes.md) et **Autres** configurations d'application.

#### Affichage des données {#viewing-data}

![Aperçu de la catégorie locale Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Options de catégorie locale Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)

Appuyez sur n'importe quel élément dans l'onglet **Local** pour ouvrir sa liste détaillée. En haut de cette liste, un panneau visuel affiche l'espace occupé par le type de données sélectionné par rapport au stockage total d'OsmAnd.

***Actions disponibles :***

- **Rechercher**. Trouver des données spécifiques par nom dans le dossier sélectionné.
- **Menu à trois points** :
    ***Sélectionner***. Choisir plusieurs éléments pour des actions telles que *Supprimer*, *Désactiver* ou *Activer*.
    ***Importer***. Accéder au stockage de l'appareil pour importer des fichiers.
- [Option de tri](#sorting-options). Trier les éléments par nom, pays, date ou taille (la disponibilité dépend du type de données).

#### Menu pour les éléments de la liste {#menu-for-items-from-the-list}

![Actions d'éléments de catégorie locale 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Actions d'éléments de catégorie locale](@site/static/img/personal/maps/local_menu_items_2_andr.png)

Chaque élément de la liste offre un *menu à trois points* avec des options :

- **Info**. Afficher des informations détaillées sur l'*[élément de données](#local-data-item-overview)*.
- **Exporter**. Enregistrer les données dans un fichier via *Paramètres → Exporter vers un fichier*.

***Options supplémentaires pour les cartes :***

- **Désactiver**. Désactiver les cartes vectorielles sans les supprimer. Elles restent stockées mais ne sont pas utilisées pour la navigation, la recherche ou le routage. Réduit la charge sur l'appareil et accélère OsmAnd.
- **Mettre à jour**. Télécharger la dernière version de la carte.
- **Renommer**. Personnaliser le nom de la carte pour une meilleure identification.
- **Supprimer**. Supprimer la carte de votre appareil.
- **Modifier** (pour les cartes en ligne). Modifier la configuration de la carte en ligne.

#### Menu des éléments de source de carte {#map-source-items-menu}

![Menu des éléments de source de carte](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Chaque élément de la liste [Source de carte](../map/raster-maps.md) fournit des paramètres pour gérer la carte matricielle en ligne stockée sur votre appareil. Ouvrez le *menu à trois points* pour accéder aux actions disponibles :

- [Info](#local-data-item-overview). Affiche les détails généraux sur la source de carte sélectionnée, y compris le format et la date de la dernière mise à jour.
- **Calculer la taille**. Estime le stockage occupé par les tuiles mises en cache de cette source de carte. Si le cache dépasse *50 Mo*, la taille peut être affichée comme *≥50 Mo* au lieu d'un nombre exact.
- **Effacer toutes les tuiles**. Supprime toutes les tuiles mises en cache pour la source de carte sélectionnée, libérant de l'espace de stockage tout en conservant la source de carte disponible pour une utilisation future.
- **Exporter**. Enregistre la configuration de la source de carte sélectionnée pour la sauvegarde ou le partage.
- **Supprimer**. Supprime la source de carte sélectionnée. Cette action n'affecte pas les cartes hors ligne téléchargées mais efface le cache associé.

#### Aperçu de l'élément de données local {#local-data-item-overview}

![Aperçu de l'élément de données local](@site/static/img/settings/local_category_overview_2.png) ![Aperçu de l'élément de données local 2](@site/static/img/settings/local_category_overview_1.png)

Lorsque vous visualisez un élément de données local, vous voyez :

- **Type**. Le type de données de la liste **Local**.
- **Créé**. La date d'ajout de l'élément.
- **Taille**. La taille de l'élément en Mo.

Les **Actions** disponibles dépendent du type de données et peuvent inclure **Désactiver**, **Mettre à jour**, **Renommer**, **Exporter** et **Supprimer**.

#### Options de tri {#sorting-options}

![Options de tri des données locales](@site/static/img/settings/local_sorting_options_andr_1.png)

Utilisez les options de tri pour organiser les données cartographiques :

- **Nom (A - Z / Z - A)**. Localiser les éléments par ordre alphabétique.
- **Nom du pays (A - Z / Z - A)**. Organiser les cartes géographiquement.
- **Date la plus récente en premier** / **Date la plus ancienne en premier**. Voir les mises à jour ou les versions plus anciennes.
- **Grande taille en premier** / **Petite taille en premier**. Identifier les grandes cartes pour libérer de l'espace de stockage.

### Mises à jour {#updates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Menu Cartes Mettre à jour les cartes Android](@site/static/img/personal/maps/maps_update_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Menu Cartes Mettre à jour les cartes iOS](@site/static/img/personal/maps/maps_update_ios.png)

</TabItem>

</Tabs>

L'onglet **Mises à jour** vous permet d'actualiser les cartes OsmAnd mensuellement. Utilisez le bouton *Tout mettre à jour* pour mettre à jour toutes les cartes simultanément, ou mettez à jour les cartes individuelles selon vos besoins. Les cartes standard et les cartes routières uniquement sont généralement publiées deux semaines après le début de chaque mois. Pour les mises à jour horaires, vérifiez l'état de votre abonnement [OsmAnd Live](#osmand-live). Si activé, la section **Mises à jour en direct** apparaîtra en haut de l'onglet, sous l'indicateur de mémoire de l'appareil.

### Cartes supplémentaires {#extra-maps}

OsmAnd prend en charge le transfert de paramètres et de données spécifiques au profil, y compris les fichiers de rendu, les polices, les itinéraires, les cartes et les plugins personnalisés. Créez un dossier de carte personnalisé à l'aide d'un fichier de plugin `.osf` (un format `.zip` compressé).

Pour importer un fichier :

1. Localisez le fichier `.osf` dans le stockage de votre appareil, votre messagerie ou votre e-mail.
2. Appuyez pour l'ouvrir avec OsmAnd.
3. Le plugin apparaîtra dans la section **Liste des plugins**, où il pourra être activé.
4. Un dossier correspondant apparaîtra alors dans la section **Cartes supplémentaires** de l'onglet [Téléchargements](#downloads).

Pour en savoir plus, consultez l'article [**Package personnalisé**](../plugins/custom).

## OsmAnd Live {#osmand-live}

:::tip Achat
OsmAnd Live est une fonctionnalité payante.
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*

![Menu Cartes OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Menu Cartes OsmAnd live modifier Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Menu Cartes OsmAnd live iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Menu Cartes OsmAnd live modifier iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**OsmAnd Live** fournit des mises à jour cartographiques incrémentielles fréquentes via [abonnement](../purchases/index.md) ou est gratuit pour les [contributeurs OSM](#free-for-osm-mappers). Les mises à jour ont lieu toutes les 15 minutes sur les serveurs OsmAnd et sont téléchargeables toutes les heures, tous les jours ou toutes les semaines. Ces mises à jour consomment un espace de stockage minimal — environ 2 à 4 % de la taille totale de la carte par mois.

<!--
Chaque carte a une collection indépendante de petites mises à jour, alors **soyez prudent** si vous avez des zones qui se chevauchent. Si vous souhaitez revenir à l'état d'origine, vous pouvez *désactiver les mises à jour et vider le cache*.
-->

Fonctionnalités clés :

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Mises à jour en direct**. Gérer via un interrupteur dans les paramètres.
- Bouton **&#8230; &#124;** (*Android*) / Bouton **&#62;** (*iOS*). Ouvrir les paramètres *OsmAnd live*.
- **Commutateur**(*Android*) / Bouton **&#43;** (*iOS*). Ajouter des cartes pour les *mises à jour en direct*.
- **<Translate android="true" ids="update_frequency"/>**. Sélectionner la fréquence de mise à jour de la carte (horaire, quotidienne ou hebdomadaire).
- **<Translate android="true" ids="update_now"/>**. Lancer la mise à jour de la carte *OsmAnd live*.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Taille des *mises à jour en direct*.
- Bouton **Corbeille**(*Android*). Supprimer toutes les *mises à jour en direct* reçues pour la carte actuelle.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Gérer le téléchargement des *mises à jour en direct* via une connexion Wi-Fi.

### Horodatages de mise à jour {#update-timestamps}

- **Dernière mise à jour OSM.**
    Indique les dernières modifications OpenStreetMap traitées.
- **Région mise à jour.**
    Indique la date du dernier traitement des mises à jour de la région spécifique.
- **Prochaine mise à jour.**
    Affiche l'heure prévue de la prochaine vérification des mises à jour.

### Limitations d'OsmAnd Live {#limitations-of-osmand-live}

Les changements d'adresse ne sont pris en charge que via les mises à jour mensuelles.
Les routes mises à jour n'ont pas de détails d'altitude, ce qui affecte les graphiques de pente.
Les références de routes supprimées ou modifiées peuvent toujours apparaître de manière incorrecte.

### Gratuit pour les contributeurs OSM {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live pour les contributeurs](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live pour les contributeurs](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Les contributeurs à [OpenStreetMap](https://openstreetmap.org/) ont droit à des téléchargements de cartes illimités et à des mises à jour en direct gratuites. Pour être éligible :
Activez le [plugin d'édition OpenStreetMap](../plugins/osm-editing.md).
[Connectez-vous](../plugins/osm-editing.md#settings) avec votre nom d'utilisateur OSM.
Maintenez au moins [**30 modifications**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) au cours des deux derniers mois.

## Articles connexes {#related-articles}

- [Profils (Paramètres)](./profiles.md)
- [Importation / Exportation](../personal/import-export.md)

### Problèmes courants et solutions {#common-issues-and-solutions}

- Navigation vocale. [(vérifier)](../troubleshooting/navigation.md#voice-navigation)
- Comment supprimer l'historique de recherche. [(vérifier)](../troubleshooting/general.md#how-to-delete-search-history)
- Pour un dépannage supplémentaire, visitez : [Cartes et données](../troubleshooting/maps-data.md)

> *Dernière mise à jour : Février 2025*