---
source-hash: 763b890f7e49897c7231962cb2a14d8e8d2b4bebcb4b92e8e59f83bdd537e48d 
sidebar_position: 10
title: Transports en commun
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Aperçu

Les transports en commun sont une couche supplémentaire qui vous permet d'afficher les itinéraires et les arrêts de transport sur la carte, de vérifier des informations détaillées à leur sujet et de naviguer.

## Arrêts de transport (Couche)

Activer/Désactiver la couche Transports en commun :

**<Translate android="true" ids="android_button_seq"/> :** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/> :** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![Couche Transports en commun Android](@site/static/img/map/pt_layer_android.png) ![Couche Transports en commun iOS](@site/static/img/map/pt_layer_ios.png)

Choisissez entre 1 ou plusieurs catégories de transport à afficher :

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[En savoir plus](../map/vector-maps.md#transport) sur la façon dont les transports sont affichés sur la carte.


## Itinéraires de transport (Menu contextuel)

![Menu Itinéraire Transports en commun Android](@site/static/img/map/pt_routemenu_android.png) ![Menu Itinéraire Transports en commun iOS](@site/static/img/map/pt_routemenu_ios.png)

Pour ouvrir le menu Transport, vous pouvez appuyer sur l'icône de transport. Il affiche :

- Boucliers colorés des transports en commun (**cliquables**)
- [Liste des itinéraires](#routes) s'arrêtant à cet arrêt ou à proximité (dans un rayon de 150 m)
- Nom de l'arrêt et autres [détails](#transport-stop-details)

### Détails de l'arrêt de transport

![Détails du menu Itinéraire Transports en commun Android](@site/static/img/map/pt_routemenu_details_android.png) ![Détails du menu Itinéraire Transports en commun iOS](@site/static/img/map/pt_routemenu_details_ios.png)

L'arrêt de transport en commun fournit des détails supplémentaires par rapport au [menu](../map/map-context-menu.md#details) d'objet OpenStreetMap standard :

- Présence de banc
- Présence de couverture
- Accessibilité en fauteuil roulant
- Nom de l'opérateur

**Remarque** : vous pouvez filtrer les arrêts selon certains critères. Par exemple, développez et appuyez sur « Banc » / « Oui » et vous pouvez voir la liste des arrêts avec des bancs. Ils peuvent également être [affichés sur la carte](../map/point-layers-on-map.md#search-results-poi-on-the-map).


### Itinéraires

![Itinéraires Transports en commun Android](@site/static/img/map/pt_routes_android.png) ![Itinéraires Transports en commun iOS](@site/static/img/map/pt_routes_ios.png)

Les itinéraires de transport sont tous les itinéraires de transport en commun qui passent par l'arrêt sélectionné et les itinéraires à proximité (dans un rayon de 150 m). Les informations sur les itinéraires sont tirées des [données OpenStreetMap](https://wiki.openstreetmap.org/wiki/Public_transport) telles que la référence, le nom, la couleur et le type.

**Couleur du bouclier** :

- Métro - couleur de ligne propre
- Chemin de fer - marron
- Bus et autres - rouge
- Tramway - bleu
- Trolleybus - violet

### Parcourir l'itinéraire

![Liste des itinéraires Transports en commun Android](@site/static/img/map/pt_route_list_android.png) ![Liste des itinéraires Transports en commun Android](@site/static/img/map/pt_route_list_ios.png)

Vous pouvez accéder au menu Parcourir l'itinéraire en **cliquant sur un bouclier** ou en **sélectionnant un itinéraire** dans la liste des itinéraires. Après cela, vous pouvez naviguer entre les arrêts en cliquant sur « <Translate android="true" ids="shared_string_previous"/> » et « <Translate android="true" ids="shared_string_next"/> ». Les informations sur l'arrêt seront mises à jour dans le menu et l'arrêt sera localisé sur la carte.

Vous pouvez voir la liste complète des arrêts en cliquant sur <Translate android="true" ids="rendering_category_details"/>. L'arrêt actuellement sélectionné est marqué par une icône « emplacement » dans la liste des itinéraires.

**Remarque** : Si vous cliquez sur le bouton <Translate android="true" ids="get_directions"/>, vous obtiendrez un itinéraire de votre position actuelle à la station de transport en commun sélectionnée.


## Articles connexes

- [Cartes vectorielles](../map/vector-maps.md)
- [Navigation dans les transports en commun](../navigation/routing/public-transport-navigation.md)

> *Cet article a été mis à jour pour la dernière fois en août 2022.*

