---
source-hash: 96c19eed244ae8e23b225b79e192f6ab15334e38a9e882b113d53dea103f93b7
sidebar_position: 2
title:  Cartes et ressources
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



## Aperçu {#overview}

Dans la section **Cartes et ressources**, vous pouvez gérer les cartes *en ligne* et *hors ligne*, ainsi que d'autres ressources utilisées dans OsmAnd. Par exemple, vous pouvez télécharger, supprimer, renommer, vider le cache, mettre à jour et vérifier la taille, et effectuer différentes actions.

OsmAnd fonctionne avec deux types de cartes : les [cartes vectorielles](../map/vector-maps.md) et les [cartes matricielles](../map/raster-maps.md). L'onglet [Local](#local-menu) stocke toutes les cartes et ressources. Les types de cartes disponibles peuvent être téléchargés depuis l'onglet [Téléchargements](#downloads-menu). Dans l'onglet [Mises à jour](#updates-menu), vous pouvez télécharger les cartes disponibles pour une mise à jour et utiliser les [mises à jour en direct](#live-updates). Vous pouvez également accéder à la fonctionnalité [Cartes supplémentaires](#extra-maps) pour créer vos propres types de cartes.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Menu Cartes Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu Cartes iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Types de cartes {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de téléchargement de carte Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Cartes régionales Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de téléchargement de carte iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Cartes régionales iOS](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Le téléchargement de cartes dans l'application OsmAnd est une étape importante qui détermine la fonctionnalité et l'efficacité de la navigation.

### Contenu cartographique gratuit {#free-map-content}

- **Carte standard**. Fournit un aperçu de la zone basé sur la source [OpenStreetMap](https://www.openstreetmap.org/) et contient une carte, des itinéraires, des adresses, des POI et des informations sur les transports en commun. En appuyant dessus, un écran s'ouvre avec une liste des régions du pays sélectionné et des informations sur l'espace que ces cartes occuperont sur votre appareil.  
- **Routes seules** (*Android uniquement*). La carte ne contient que les informations du réseau routier pour se concentrer sur les itinéraires et l'infrastructure routière. En supprimant des détails tels que les bâtiments et les points d'intérêt, elle est plus petite qu'une carte standard. En appuyant dessus, un écran s'ouvre avec une liste des régions du pays sélectionné et des informations sur l'espace que ces cartes occuperont sur votre appareil.
- **Carte générale du monde**. Les versions d'OsmAnd jusqu'à la 3.8 proposent de télécharger une carte du monde pour pouvoir la visualiser à l'échelle planétaire. Dans les versions plus récentes d'OsmAnd, une *mini-carte du monde* légère est intégrée à l'application. L'application vous permet de télécharger une carte générale du monde plus grande avec des informations plus détaillées. 

:::info mises à jour mensuelles des cartes
Veuillez noter que les mises à jour mensuelles des cartes sont considérées comme un autre téléchargement de carte et sont déduites du nombre de téléchargements de cartes gratuits disponibles.
:::

### Contenu cartographique payant {#paid-map-content}

- [Lignes de contour](../plugins/topography.md#contour-lines). Une carte contenant des lignes de contour d'altitude pour visualiser le relief.
- [Carte du relief (Ombrage et Pente)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Les cartes avec ombrage ou pentes fournissent des informations supplémentaires sur le relief.
- [Carte du relief (3D)](../plugins/topography.md#3d-relief). Représentation tridimensionnelle du terrain pour une meilleure compréhension de votre environnement. Le [moteur de rendu de carte Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) doit être activé.
- [Wikipédia](../plugins/wikipedia.md). Carte vectorielle avec des articles [Wikipédia](https://wikipedia.org/) géolocalisés sur des points de repère ou des informations supplémentaires sur des lieux.
- [Wikivoyage](../plan-route/travel-guides.md). Fournit des cartes vectorielles avec des guides de voyage virtuels, offrant aux utilisateurs des informations, des recommandations et des conseils précieux.
- [Prévisions météo](../plugins/weather.md). Informations météorologiques sur une carte pour faciliter la planification d'itinéraires.


## Menu Téléchargements {#downloads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Menu de téléchargement de carte général Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu de téléchargement de carte général iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

L'onglet **Télécharger** vous permet de télécharger divers types de cartes depuis les serveurs OsmAnd, ce qui nécessite une connexion Internet active.

***Pour télécharger une carte :***

- **Ouvrez l'onglet Télécharger**, localisez la section requise et appuyez sur le dossier correspondant pour voir les cartes disponibles.

- Les **cartes disponibles** affichent des icônes de téléchargement, pour une seule carte ou pour [plusieurs cartes](#multiple-map-loading).

- Les **cartes téléchargées** affichent une icône verte avec un bouton de menu :  
    - *Android* : Menu à trois points.  
    - *iOS* : Icône Info (i).

- Les **cartes en cours de chargement** ont une icône qui le visualise. Pour annuler le téléchargement, appuyez sur l'icône. Pour voir la liste des cartes dans la file d'attente de téléchargement et annuler les téléchargements, appuyez sur la barre de téléchargement dans la zone d'information sur la mémoire de l'appareil des onglets Téléchargements et Mises à jour.

- **Dans la version gratuite**, les cartes non disponibles au téléchargement affichent une icône [OBTENIR](../purchases/index.md), menant à la page d'achat.

***L'onglet Téléchargements se compose de groupes de cartes :***

- **Infos mémoire appareil**. Visualisez la quantité d'espace occupé et libre sur votre appareil.
- **Compteur de cartes** (***Version gratuite***). Affiche le nombre de cartes qu'il vous reste à télécharger.
- [Cartes supplémentaires](#extra-maps). Affiche les données cartographiques pour le [paquetage personnalisé](../plugins/custom.md).
- **Régions**. Liste par continent et région du monde : *Afrique, Antarctique, Asie, Australie et Océanie, Amérique centrale, Europe, Amérique du Nord, Russie et Amérique du Sud.*
- [Cartes du monde](#world-maps). Une liste de cartes du monde entier : *Correction d'altitude mondiale (Android uniquement)*, *Carte générale du monde*, *Monde entier (Prévisions météo)*
- [Cartes marines](../plugins/nautical-charts.md) ([*fonctionnalité payante*](../purchases/index.md)). Cartes vectorielles avec des altitudes sous forme de points ou de lignes.
- [Guides de voyage (Wikivoyage)](../plan-route/travel-guides.md) ([*fonctionnalité payante*](../purchases/index.md)). Cartes vectorielles avec une collection d'articles au format HTML et des fichiers GPX supplémentaires.
- **Autres cartes**. Cartes qui ne peuvent pas être assignées à la hiérarchie de cartes actuelle car elles ne sont pas prises en charge ou seront disponibles dans les versions futures.
- [Instructions vocales](../navigation/guidance/voice-navigation.md) (*Android uniquement*). Paquets de voix pour les instructions de navigation vocale.
- [Polices de carte](../map/vector-maps.md#map-fonts-android) (*Android uniquement*). Fichiers de polices supplémentaires pour afficher du texte sur la carte.
- **Rechercher une ville ou une région** (*Android uniquement*). Un outil de recherche rapide en haut de l'onglet des téléchargements (icône de loupe) pour trouver la ville ou la région souhaitée.

### Cartes du monde {#world-maps}

Dans le menu Télécharger les cartes, il y a une section **Cartes du monde** qui donne accès au téléchargement de diverses cartes du monde, complétant ainsi les fonctionnalités de l'application.  

- **Correction d'altitude mondiale** (*Android uniquement*). Ce fichier contient des corrections d'altitude pour compenser la courbure planétaire.
- **Carte générale du monde**. Fournit un aperçu étendu de la surface de la Terre, utile pour la planification d'itinéraires à long terme et l'exploration occasionnelle.
- **Monde entier (Prévisions météo)**. Permet de télécharger une carte avec des informations météorologiques.


### Cartes supplémentaires {#extra-maps}

OsmAnd prend en charge le transfert de paramètres et de données spécifiques au profil, y compris les fichiers de rendu, les polices, les itinéraires, les cartes et les plugins personnalisés. Créez un dossier de cartes personnalisé à l'aide d'un fichier de plugin `.osf` (un format `.zip` compressé).

Pour importer un fichier :

1. Localisez le fichier `.osf` dans le stockage de votre appareil, une messagerie ou un e-mail.
2. Appuyez pour l'ouvrir avec OsmAnd.
3. Le plugin apparaîtra dans la section **Liste des plugins**, où il pourra être activé.
4. Un dossier correspondant apparaîtra alors dans la section **Cartes supplémentaires** de l'onglet [Téléchargements](#downloads-menu).

Pour en savoir plus, consultez l'article [**Paquetage personnalisé**](../plugins/custom).


### Chargement de plusieurs cartes {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de téléchargement de carte général Android](@site/static/img/personal/maps/multiple_maps_andr.png) ![Menu de désélection Android](@site/static/img/personal/maps/multiple_maps_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de téléchargement de carte général iOS](@site/static/img/personal/maps/multiple_maps_ios.png) ![Menu de désélection iOS](@site/static/img/personal/maps/multiple_maps_2_ios.png)

</TabItem>

</Tabs>

Pour les pays composés de **plusieurs cartes régionales**, vous pouvez utiliser le chargement en masse de plusieurs cartes. Les cartes disponibles pour ce type de téléchargement sont affichées avec des icônes de double flèche de téléchargement et une étiquette avec le nombre de régions à l'intérieur (par exemple, Lignes de contour / Toutes les régions : 10). Vous pouvez choisir le nombre de cartes à télécharger.


## Menu Local {#local-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Onglet Local Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Onglet Local Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

L'onglet Local fournit un aperçu de l'utilisation du stockage pour toutes les données OsmAnd sur votre appareil. Les données sont divisées en trois sections codées par couleur pour plus de clarté, avec les éléments triés par taille du plus grand au plus petit. Chaque section n'affiche que les éléments avec des données téléchargées :

- ***Ressources*** (*bleu*).  
    Inclut les cartes ([Standard](../map/vector-maps.md), &nbsp;[Marines](../plugins/nautical-charts.md), &nbsp;[Topographie](../plugins/topography.md), &nbsp;[Météo](../plugins/weather.md)), &nbsp;[Wikipédia](../plugins/wikipedia.md) et les [Guides de voyage](../plan-route/travel-guides.md), &nbsp;[Mises à jour en direct](../personal/maps-resources.md#live-updates), &nbsp;**Routes seules**,  &nbsp;[Sources de carte](../map/raster-maps.md), &nbsp;[Styles de rendu](../map/vector-maps.md#default-map-styles), &nbsp;**Polices de carte, &nbsp;Instructions vocales (enregistrées et TTS), &nbsp;Cache**.  

- ***Mes lieux*** (*jaune*).  
    Inclut les [Favoris](../personal/favorites.md), &nbsp;les [Traces](../personal/tracks/manage-tracks.md), &nbsp;les [Notes OSM](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;les [Modifications OSM](../plugins/osm-editing.md#osm-editing-layer), &nbsp;les [Notes A/V](../plugins/audio-video-notes.md), &nbsp;les [Marqueurs de carte](../personal/markers.md), &nbsp;l'[Historique](../personal/global-settings.md#history), &nbsp;*Itinéraire*.  

- ***Paramètres*** (*vert*).  
    Inclut les [Profils](../personal/profiles.md), &nbsp;les [Couleurs](../personal/color-palette-schemes.md) et les **Autres** configurations de l'application.

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Menu de l'onglet Local iOS](@site/static/img/personal/maps/local_tab_ios.png)

L'onglet Local fournit un aperçu de l'utilisation du stockage pour les données de cartes et de ressources sur votre appareil. La barre de mémoire en haut affiche trois catégories :

- ***Vert***. Stockage total utilisé sur l'appareil.
- ***Orange***. Partie du stockage utilisé occupée par les téléchargements OsmAnd.
- ***Gris***. Stockage libre disponible sur l'appareil.

Sous la barre de mémoire, une liste de toutes les cartes et ressources OsmAnd téléchargées est affichée, y compris leur type et la taille du fichier. Les cartes en ligne ne sont pas comptées dans la barre de mémoire, car elles sont diffusées en continu et ne sont mises en cache que temporairement.

</TabItem>

</Tabs>


### Affichage des données {#viewing-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aperçu de la catégorie locale Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Options de la catégorie locale Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Appuyez sur n'importe quel élément de l'onglet **Local** pour ouvrir sa liste détaillée. En haut de cette liste, un panneau visuel affiche l'espace occupé par le type de données sélectionné par rapport au stockage total d'OsmAnd.

***Actions disponibles :***

- **Rechercher**. Trouver des données spécifiques par nom dans le dossier sélectionné.
- **Menu à trois points** :  
    ***Sélectionner***. Choisir plusieurs éléments pour des actions comme *Supprimer*, *Désactiver* ou *Activer*.  
    ***Importer***. Accéder au stockage de l'appareil pour importer des fichiers.
- **Option de tri**. Trier les éléments par nom, pays, date ou taille (la disponibilité dépend du type de données).

Chaque élément de la liste propose un *menu à trois points* avec des options :

- **Info**. Afficher des informations détaillées sur les *[actions](#actions)*.
- **Exporter**. Enregistrer les données dans un fichier via *Paramètres → Exporter vers un fichier*.

***Options supplémentaires pour les cartes :***

- **Désactiver**. Désactiver les cartes vectorielles sans les supprimer. Elles restent stockées mais ne sont pas utilisées pour la navigation, la recherche ou le calcul d'itinéraire. Réduit la charge sur l'appareil et accélère OsmAnd.
- **Mettre à jour**. Télécharger la dernière version de la carte.
- **Renommer**. Personnaliser le nom de la carte pour une meilleure identification.
- **Supprimer**. Supprimer la carte de votre appareil.
- **Modifier** (pour les cartes en ligne). Modifier la configuration de la carte en ligne.

</TabItem>

<TabItem value="ios" label="iOS">  

![Affichage des données](@site/static/img/personal/maps/viewing_data_ios.png)

Appuyez sur n'importe quel élément hors ligne dans l'onglet **Local** pour ouvrir ses données détaillées, comme suit :

- **Type**. Le type de l'élément de données comme **Carte standard**, **Wikipédia**, **Lignes de contour**, etc.
- **Taille**. La taille de l'élément en Mo.
- **Créé le**. La date à laquelle l'élément a été ajouté.

Pour les cartes en ligne, seuls le type et la taille des données mises en cache sont affichés.

</TabItem>

</Tabs>


### Actions {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu des éléments de la source de carte](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Chaque élément de la liste [Source de carte](../map/raster-maps.md) fournit des paramètres pour gérer la carte matricielle en ligne stockée sur votre appareil. Ouvrez le *menu à trois points* pour accéder aux actions disponibles :

- **Info**. Affiche des détails généraux sur la source de carte sélectionnée, y compris le format et la date de la dernière mise à jour.  
- **Calculer la taille**. Estime le stockage occupé par les tuiles mises en cache de cette source de carte. Si le cache dépasse *50 Mo*, la taille peut être affichée comme *≥50 Mo* au lieu d'un nombre exact.
- **Vider toutes les tuiles**. Supprime toutes les tuiles mises en cache pour la source de carte sélectionnée, libérant de l'espace de stockage tout en gardant la source de carte disponible pour une utilisation future.  
- **Exporter**. Enregistre la configuration de la source de carte sélectionnée pour une sauvegarde ou un partage.  
- **Supprimer**. Supprime la source de carte sélectionnée. Cette action n'affecte pas les cartes hors ligne téléchargées mais vide le cache associé.

Lorsque vous consultez un élément de données local, vous voyez :

- **Type**. Le type de données de la liste **Local**.
- **Créé**. La date à laquelle l'élément a été ajouté.
- **Taille**. La taille de l'élément en Mo.

Les **Actions** disponibles dépendent du type de données et peuvent inclure **Désactiver**, **Mettre à jour**, **Renommer**, **Exporter** et **Supprimer**.

</TabItem>

<TabItem value="ios" label="iOS">  

![Actions iOS](@site/static/img/personal/maps/local_actions_ios.png)

Les **Actions** disponibles dépendent du type de données :

- Pour les **éléments hors ligne**, seule l'option **Supprimer** est disponible.
- Pour les **cartes en ligne**, les actions peuvent inclure **Vider le cache**, **Modifier** et **Supprimer**.

</TabItem>

</Tabs>

<!--
The Local tab provides an overview of the storage usage for all OsmAnd data on your device. Data is divided into three color-coded sections for clarity, with items sorted by size from largest to smallest. Each section displays only items with downloaded data:

- ***Resources*** (*blue*).  
    Includes maps ([Standard](../map/vector-maps.md), &nbsp;[Nautical](../plugins/nautical-charts.md), &nbsp;[Topography](../plugins/topography.md), &nbsp;[Weather](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) and [Travel guides](../plan-route/travel-guides.md), &nbsp;[Live updates](../personal/maps-resources.md#live-updates), &nbsp;**Road only**,  &nbsp;[Map sources](../map/raster-maps.md), &nbsp;[Rendering styles](../map/vector-maps.md#default-map-styles), &nbsp;**Map fonts, &nbsp;Voice prompts (recorded and TTS), &nbsp;Cache**.  

- ***My Places*** (*yellow*).  
    Includes [Favorites](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Edits](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notes](../plugins/audio-video-notes.md), &nbsp;[Map markers](../personal/markers.md), &nbsp;[History](../personal/global-settings.md#history), &nbsp;*Itinerary*.  

- ***Settings*** (*green*).  
    Includes [Profiles](../personal/profiles.md), &nbsp;[Colors](../personal/color-palette-schemes.md) and **Other** app configurations.


#### Viewing Data {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tap any item in the **Local** tab to open its detailed list. At the top of this list, a visual panel displays how much space the selected data type occupies relative to the total OsmAnd storage.

***Available actions:***

- **Search**. Find specific data by name within the selected folder.
- **Three-dot menu**:  
    ***Select***. Choose multiple items for actions like *Delete*, *Deactivate*, or *Activate*.  
    ***Import***. Access the device's storage to import files.
- [Sorting option](#sorting-options). Sort items by name, country, date, or size (availability depends on the data type).


#### Menu for Items from the List {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Each item in the list offers a *three-dot menu* with options:

- **Info**. View detailed information on the *[data item](#local-data-item-overview)*.
- **Export**. Save data to a file via *Settings → Export to File*.

***Additional options for maps:***

- **Deactivate**. Disable vector maps without deleting them. They remain stored but are not used for navigation, search, or routing. Reduces the load on the device and speeds up OsmAnd.
- **Update**. Download the latest version of the map.
- **Rename**. Customize the map’s name for better identification.
- **Remove**. Delete the map from your device.
- **Edit** (for Online Maps). Modify the online map configuration.

#### Map source items menu {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Each item in the [Map source](../map/raster-maps.md) list provides settings for managing online raster map stored on your device. Open the *three-dot menu* to access the available actions:

- [Info](#local-data-item-overview). Displays general details about the selected map source, including format and last update date.  
- **Calculate Size**. Estimates the storage occupied by the cached tiles of this map source. If the cache exceeds *50MB*, the size can be displayed as *≥50MB* instead of an exact number.
- **Clear All Tiles**. Deletes all cached tiles for the selected map source, freeing up storage while keeping the map source available for future use.  
- **Export**. Saves the selected map source configuration for backup or sharing.  
- **Remove**. Deletes the selected map source. This action does not affect downloaded offline maps but clears the associated cache.


#### Local Data Item Overview {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

When viewing a local data item, you see:

- **Type**. The data type from the **Local** list.
- **Created**. The date the item was added.
- **Size**. The item’s size is in MB.

Available **Actions** depend on the data type and may include **Deactivate**, **Update**, **Rename**, **Export**, and **Delete**.

#### Sorting Options {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Use sorting options to organize map data:

- **Name (A - Z / Z - A)**. Locate items alphabetically.
- **Country name (A - Z / Z - A)**. Organize maps geographically.
- **Newest date first** / **Oldest date first**. See updates or older versions.
- **Large size first** / **Small size first**. Identify large maps to free storage space.

-->

## Menu Mises à jour {#updates-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Menu Cartes Mettre à jour les cartes Android](@site/static/img/personal/maps/maps_update_andr.png)

L'onglet **Mises à jour** vous permet de rafraîchir les cartes et les ressources d'OsmAnd. Les cartes standard et les cartes de routes seules sont publiées une fois par mois, généralement entre le 2 et le 5 du mois, et incluent les données OpenStreetMap jusqu'au dernier jour du mois précédent (par exemple, la version d'octobre contient les données jusqu'au 30 septembre). D'autres données telles que Wikipédia, le relief ou les cartes marines peuvent suivre des calendriers de mise à jour différents et non réguliers. Les prévisions météorologiques ont leur propre cycle de mise à jour régulier. Pour plus de détails, consultez la section [Télécharger les prévisions](../plugins/weather.md#download-forecast). 

Utilisez le bouton *Tout mettre à jour* pour mettre à jour toutes les cartes simultanément, ou mettez à jour les cartes individuelles selon vos besoins. Pour les mises à jour horaires, vérifiez l'état de votre abonnement aux [Mises à jour en direct](#live-updates). Si cette option est activée, la section **Mises à jour en direct** apparaîtra en haut de l'onglet, sous l'indicateur de mémoire de l'appareil.

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Menu Cartes Mettre à jour les cartes iOS](@site/static/img/personal/maps/maps_update_ios.png) ![Prévisions météo Mettre à jour les cartes iOS](@site/static/img/personal/maps/maps_update_2_ios.png)

L'onglet **Mises à jour** vous permet de rafraîchir les cartes et les ressources d'OsmAnd. Les cartes standard et les cartes de routes seules sont publiées une fois par mois, généralement entre le 2 et le 5 du mois, et incluent les données OpenStreetMap jusqu'au dernier jour du mois précédent (par exemple, la version d'octobre contient les données jusqu'au 30 septembre). D'autres données telles que Wikipédia, le relief ou les cartes marines peuvent suivre des calendriers de mise à jour différents et non réguliers. 

Utilisez le bouton *Tout mettre à jour* pour mettre à jour toutes les cartes simultanément, ou mettez à jour les cartes individuelles selon vos besoins. Pour les mises à jour horaires, vérifiez l'état de votre abonnement aux [Mises à jour en direct](#live-updates). Si cette option est activée, la section **Mises à jour en direct** apparaîtra en haut de l'onglet, sous l'indicateur de mémoire de l'appareil.

L'onglet **Mises à jour** comprend également une section Prévisions météo. Elle est conçue pour gérer vos prévisions hors ligne pour les pays sélectionnés :

- Si aucune prévision n'a encore été téléchargée, vous serez invité à sélectionner des pays. Les données de prévision sont disponibles jusqu'à 7 jours.
- Une fois qu'une prévision est téléchargée, l'écran ***Prévisions hors ligne*** affiche la liste des pays avec des informations sur l'état, y compris la dernière heure de mise à jour, la période de validité et la taille totale des données.
- En appuyant sur un pays, vous ouvrez des informations détaillées telles que la dernière heure de mise à jour, la prochaine mise à jour, la taille des données et la précision. Les options incluent ***Mettre à jour maintenant***, l'activation ou la désactivation de la ***Mise à jour automatique*** (Les prévisions météorologiques ont leur propre cycle de mise à jour régulier. Pour plus de détails, consultez la section [Télécharger les prévisions](../plugins/weather.md#download-forecast).), et ***Supprimer les prévisions***.


</TabItem>

</Tabs>

## Mises à jour en direct {#live-updates}

:::tip Achat
Les mises à jour en direct sont une fonctionnalité payante.  
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Menu Cartes OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Menu Cartes OsmAnd live modifier Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Menu Cartes OsmAnd live iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Menu Cartes OsmAnd live modifier iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

Les **Mises à jour en direct** fournissent des mises à jour de carte incrémentielles et fréquentes via un [abonnement](../purchases/index.md) ou sont gratuites pour les [contributeurs OSM](#free-for-osm-mappers). Les mises à jour ont lieu toutes les 15 minutes sur les serveurs OsmAnd et sont téléchargeables toutes les heures, tous les jours ou toutes les semaines. Ces mises à jour consomment un minimum de stockage — environ 2 à 4 % de la taille totale de la carte par mois.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Fonctionnalités clés :

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Mises à jour en direct**. Gérez via un interrupteur dans les paramètres.
- Bouton **&#8230; &#124;** (*Android*) / Bouton **&#62;** (*iOS*). Ouvre les paramètres des *Mises à jour en direct*.
- **Sélecteur**(*Android*) / Bouton **&#43;** (*iOS*). Ajoute des cartes pour les *mises à jour en direct*.
- **<Translate android="true" ids="update_frequency"/>**. Sélectionnez la fréquence de mise à jour de la carte (horaire, quotidienne ou hebdomadaire).
- **<Translate android="true" ids="update_now"/>**. Démarre les *mises à jour en direct* pour la carte.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Taille des *mises à jour en direct*.
- **Bouton Corbeille**(*Android*). Supprime toutes les *mises à jour en direct* reçues pour la carte actuelle.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Gère le téléchargement des *mises à jour en direct* via une connexion Wi-Fi.


### Horodatages des mises à jour {#update-timestamps}

- **Dernière mise à jour OSM.**  
    Indique les dernières modifications OpenStreetMap traitées.
- **Région mise à jour.**  
    Montre quand les mises à jour de la région spécifique ont été traitées pour la dernière fois.
- **Prochaine mise à jour.**  
    Affiche l'heure prévue pour la prochaine vérification de mise à jour.


### Limitations des mises à jour en direct {#limitations-of-live-updates}

Les changements d'adresse ne sont pris en charge que par les mises à jour mensuelles.
Les routes mises à jour manquent de détails d'altitude, ce qui affecte les graphiques de pente.
Les références d'itinéraire supprimées ou modifiées peuvent toujours apparaître de manière incorrecte.


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
- [Importer / Exporter](../personal/import-export.md)

### Problèmes courants et solutions {#common-issues-and-solutions}

- Navigation vocale. [(vérifier)](../troubleshooting/navigation.md#voice-navigation)
- Comment supprimer l'historique de recherche. [(vérifier)](../troubleshooting/general.md#how-to-delete-search-history)
- Pour un dépannage supplémentaire, visitez : [Cartes et données](../troubleshooting/maps-data.md)