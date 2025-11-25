---
source-hash: 37751eb7faea59cec520cd8d8ca456b80fef44964424340366c4b1999e2835d6
sidebar_position: 4
title:  Configurer la carte
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Aperçu {#overview}

Le menu **Configurer la carte** est un élément important du *Menu principal* d'OsmAnd, où vous pouvez personnaliser l'affichage de la carte selon vos besoins. Vous pouvez mettre en évidence des points favoris, des marqueurs de navigation ou des points d'intérêt spéciaux sur la carte, afficher des itinéraires spécifiques ou des fichiers GPX tiers, superposer des informations de terrain, des images satellite ou toute autre image raster disponible, afficher des informations sur les transports en commun et changer le style de la carte.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Section **Afficher** :  

![Configurer la carte android](@site/static/img/map/configure_map_show1_andr.png)  ![Configurer la carte android](@site/static/img/map/configure_map_show2_andr.png)  

Section **Topographie** :  

![Configurer la carte android](@site/static/img/map/configure_map_topography_andr.png)  

Section **OpenStreetMap** :  

![Configurer la carte android](@site/static/img/map/configure_map_osm_andr.png)  

Sections **Itinéraires et Rendu de la carte** :  

![Configurer la carte android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Section **Afficher sur la carte** :  

![Configurer la carte iOS](@site/static/img/map/configure_map_show1_ios.png)  

Section **Topographie** :  

![Configurer la carte iOS](@site/static/img/map/configure_map_topography_ios.png)  

Section **OpenStreetMap** :  

![Configurer la carte iOS](@site/static/img/map/configure_map_osm_ios.png)  

Section **Itinéraires** :  

![Configurer la carte iOS](@site/static/img/map/configure_map_routes_new_ios.png)

Sections **Type de carte et Style de carte** :  

![Configurer la carte iOS](@site/static/img/map/configure_map_style_ios.png)

Sections **Superposition/Sous-couche et Langue** :  

![Configurer la carte iOS](@site/static/img/map/configure_map_overlay_ios.png)

</TabItem>

</Tabs>


Le menu **<Translate android="true" ids="configure_map"/>** est divisé en deux catégories :

- [Paramètres de style de carte](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (ou **<Translate ios="true" ids="map_widget_renderer"/>**) est un groupe de paramètres qui vous permettent de modifier la manière dont la carte principale est affichée.  
- [Couches de la carte](#map-layers). Ces couches vous permettent de placer des informations par-dessus (ou par-dessous) la couche de la carte principale, mais ne modifient pas l'affichage de la carte elle-même.  

**Remarques :**

- Pour modifier les informations à l'écran (widgets, icônes), vous pouvez effectuer des réglages dans [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- Les paramètres de Configurer la carte dépendent de votre [profil](../personal/profiles.md).
- Attention - le menu Configurer la carte **se ferme** lorsque vous touchez le champ de la carte.

## Couches de la carte {#map-layers}

- [Couche de carte vectorielle](../map/vector-maps.md) - affiche toutes les informations de la carte vectorielle, y compris OpenStreetMap, les lignes de contour et les données nautiques.
- [Sources de cartes raster](../map/raster-maps.md#select-raster-maps) - permet de sélectionner une carte de fond / source principale / de superposition avec des niveaux de transparence.
- [Terrain](../plugins/topography.md#hillshade-slope-and-altitude-layers) - affiche les informations de pente / d'ombrage, le relief 3D.
- [Bordures des cartes téléchargées](../map/vector-maps.md#show-borders) - affiche toutes les bordures des cartes téléchargées sur la couche de la carte principale.
- [Grille de coordonnées](../map/vector-maps.md#coordinates-grid) - contrôle la visibilité de la grille de coordonnées sur la carte.

## Couches de données de la carte {#map-data-layers}

   - [Favoris](../map/point-layers-on-map.md) - affiche les points favoris.
   - [POI](../map/point-layers-on-map.md) - affiche les points d'intérêt des catégories sélectionnées.
   - [Marqueurs de carte](../map/point-layers-on-map.md) - affiche les marqueurs de carte.
   - [Étiquettes en superposition](../map/point-layers-on-map.md) - affiche les noms des points et des favoris sur la carte.
   - [Transport](../map/vector-maps.md#transport) - affiche les arrêts de transport en commun.
   - [Traces](../map/tracks/index.md) - affiche les traces importées, planifiées ou enregistrées sur la carte.
   - [Images au niveau de la rue](../plugins/mapillary.md#map-layer) - affiche les points avec des images disponibles au niveau de la rue.
   - [Guides de voyage](../plan-route/travel-guides.md) - affiche les guides de voyage sur la carte.
   - [Wikipedia](../plugins/wikipedia.md) - met en évidence les articles Wikipedia liés à la carte.
   - [Édition OSM](../plugins/osm-editing.md#osm-editing-layer) - affiche les modifications OpenStreetMap, les notes et les couches d'aide liées à la cartographie.
   - [Autres couches de plugins](../plugins/index.md#configure-plugin) - de nombreux plugins ajoutent leurs couches avec des informations supplémentaires.

## Paramètres de style de carte {#map-style-parameters}

Les paramètres de style de carte dépendent du style de carte principal affiché. Vous pouvez en savoir plus à ce sujet dans l'article [Styles de carte](../map/vector-maps).

   - [Style de carte](../map/vector-maps.md#default-map-styles) - inclut OsmAnd (Ville), Topo, Nautique, et autres.
   - [Mode carte](../map/vector-maps.md#map-mode) - permet de sélectionner la vue de la carte et la navigation en fonction de l'heure de la journée.
   - [Loupe de carte](../map/vector-maps.md#map-magnifier) - permet de modifier l'agrandissement de la carte.
   - [Taille du texte](../map/vector-maps.md#text-size) - permet d'augmenter ou de diminuer la taille du texte sur la carte.
   - [Langue de la carte](../map/vector-maps.md#map-language) - permet de sélectionner la langue préférée affichée sur la carte.
   - [Détails](../map/vector-maps.md#details) - affiche des objets spécifiques.
   - [Masquer](../map/vector-maps.md#hide) - masque des objets spécifiques.
   - [Itinéraires](../map/vector-maps.md#routes) - permet de mettre en évidence les itinéraires et leurs symboles.  


## Personnalisation de l'interface utilisateur (Android) {#ui-customization-android}

Pour chaque profil sélectionné dans le système Android, vous pouvez modifier l'ordre des éléments du menu <Translate android="true" ids="configure_map"/>, masquer les éléments, réinitialiser les paramètres par défaut ou les copier depuis un autre profil. Cela contribuera à améliorer votre interaction avec l'application OsmAnd.  

Allez à : *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*  

![Éléments de configuration de la carte ](@site/static/img/settings/configure-screen-ui-customization.png)