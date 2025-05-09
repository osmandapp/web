---
sidebar_position: 4
title: Configurer la carte
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Aperçu

Le menu **Configurer la carte** est un élément important du *Menu principal* d'OsmAnd, où vous pouvez personnaliser l'affichage de la carte en fonction de vos besoins. Vous pouvez mettre en évidence les points favoris, les marqueurs de navigation ou les points d'intérêt spéciaux sur la carte, afficher des itinéraires spécifiques ou des fichiers GPX tiers, superposer des informations de terrain, des images satellite ou toute autre image raster disponible, afficher des informations sur les transports en commun et modifier le style de la carte.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Section **Afficher** :

![Configurer la carte android](@site/static/img/map/configure_map_show1_andr.png) ![Configurer la carte android](@site/static/img/map/configure_map_show2_andr.png)

Section **Topographie** :

![Configurer la carte android](@site/static/img/map/configure_map_topography_andr.png)

Section **OpenStreetMap** :

![Configurer la carte android](@site/static/img/map/configure_map_osm_andr.png)

Sections **Itinéraires et rendu de la carte** :

![Configurer la carte android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurer la carte ios](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>


Le menu **<Translate android="true" ids="configure_map"/>** est divisé en deux catégories :

- [Paramètres de style de carte](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (ou **<Translate ios="true" ids="map_widget_renderer"/>**) est un groupe de paramètres qui vous permettent de modifier la façon dont la carte principale est affichée.
- [Couches de carte](#map-layers). Ces couches vous permettent de placer des informations au-dessus (ou en dessous) de la couche de carte principale, mais ne modifient pas l'affichage de la carte elle-même.

**Notes :**

- Pour modifier les informations à l'écran (widgets, icônes), vous pouvez effectuer des réglages dans [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- Les paramètres de configuration de la carte dépendent de votre [profil](../personal/profiles.md).
- Attention : le menu Configurer la carte **se ferme** lorsque vous appuyez sur le champ de la carte.

## Couches de carte

- [Couche de carte vectorielle](../map/vector-maps.md) - affiche toutes les informations de carte vectorielle, y compris OpenStreetMap, les courbes de niveau et les données nautiques.
- [Sources raster de carte](../map/raster-maps.md#select-map-as-main--underlay--overlay-layer) - permet de sélectionner une carte de sous-couche / source principale / superposition avec des niveaux de transparence.
- [Terrain](../plugins/topography.md#configure-map-view) - affiche les informations de pente / ombrage, le relief 3D.
- [Bordures des cartes téléchargées](../map/vector-maps.md#show-borders) - affiche toutes les bordures des cartes téléchargées sur la couche de carte principale.
- [Grille de coordonnées](../map/vector-maps.md#coordinates-grid) - contrôle la visibilité de la grille de coordonnées sur la carte.

## Couches de données de carte

- [Favoris](../map/point-layers-on-map.md) - affiche les points favoris.
- [POI](../map/point-layers-on-map.md) - affiche les points d'intérêt des catégories sélectionnées.
- [Marqueurs de carte](../map/point-layers-on-map.md) - affiche les marqueurs de carte.
- [Étiquettes de superposition](../map/point-layers-on-map.md) - affiche les noms des points et des favoris sur la carte.
- [Transport](../map/vector-maps.md#transport) - affiche les arrêts de transport en commun.
- [Tracés](../map/tracks/index.md) - affiche les tracés importés, planifiés ou enregistrés sur la carte.
- [Imagerie au niveau de la rue](../plugins/mapillary.md#viewing-images) - affiche les points avec l'imagerie au niveau de la rue disponible.
- [Guides de voyage](../plan-route/travel-guides.md) - affiche les guides de voyage sur la carte.
- [Wikipedia](../plugins/wikipedia.md) - met en évidence les articles Wikipedia liés à la carte.
- [Autres couches de plugins](../plugins/index.md#configure-a-plugin) - de nombreux plugins ajoutent leurs couches avec des informations supplémentaires.

## Paramètres de style de carte

Les paramètres de style de carte dépendent du style de carte principal affiché. Vous pouvez en savoir plus à ce sujet dans l'article [Styles de carte](../map/vector-maps).

- [Style de carte](../map/vector-maps.md#default-map-styles) - comprend OsmAnd (Ville), Topo, Nautique et autres.
- [Mode carte](../map/vector-maps.md#map-mode) - vous permet de sélectionner la vue de la carte et la navigation en fonction de l'heure de la journée.
- [Loupe de carte](../map/vector-maps.md#map-magnifier) - permet de modifier le grossissement de la carte.
- [Taille du texte](../map/vector-maps.md#text-size) - permet d'augmenter ou de diminuer la taille du texte sur la carte.
- [Langue de la carte](../map/vector-maps.md#map-language) - permet de sélectionner la langue préférée affichée sur la carte.
- [Détails](../map/vector-maps.md#details) - affiche des objets spécifiques.
- [Masquer](../map/vector-maps.md#hide) - masque des objets spécifiques.
- [Itinéraires](../map/vector-maps.md#routes) - permet de mettre en évidence les itinéraires et leurs symboles.

## Personnalisation de l'interface utilisateur (Android)

Pour chaque profil sélectionné dans le système Android, vous pouvez modifier l'ordre des éléments du menu <Translate android="true" ids="configure_map"/>, masquer les éléments, réinitialiser les paramètres par défaut ou les copier à partir d'un autre profil. Cela vous aidera à améliorer votre interaction avec l'application OsmAnd.

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![Éléments de configuration de la carte](@site/static/img/settings/configure-screen-ui-customization.png)


> *Cet article a été mis à jour pour la dernière fois en février 2025*

-- source-hash: blake2s: 823be201d28d7cf02563c69576e6d1b0bf1fcaab04351ff63bb9a5c3e1e205b5 --
