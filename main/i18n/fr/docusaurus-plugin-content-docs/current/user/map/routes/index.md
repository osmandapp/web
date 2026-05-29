---
source-hash: f16263db8d987d5d802140c2f60261308cc6e1eb3b436559f0926217fa039b11
title:  Itinéraires
sidebar_position: 11
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

OsmAnd propose de nombreuses fonctionnalités puissantes pour afficher différents [itinéraires](./types-of-routes.md) sur la carte. Par défaut, ces itinéraires font partie des [cartes vectorielles](../../map/vector-maps.md#routes) (données OpenStreetMap), mais une fonctionnalité similaire est fournie par les [traces](../../map/tracks/index.md) qui peuvent être créées avec [Planifier un itinéraire](../../plan-route/create-route.md), importées en tant que [traces GPX](#enregistrer-comme-une-trace), ou enregistrées avec le [plugin Enregistrement de trajet](../../plugins/trip-recording.md). La légende des itinéraires sur la carte se trouve [ici](../../map-legend/osmand.md#routes).


## Afficher les itinéraires sur la carte {#afficher-les-itineraires-sur-la-carte}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Section Itinéraires du menu Configurer la carte](@site/static/img/map/configure_map_routes_android.png) ![Classes d'itinéraires](@site/static/img/map/routes_classes_android.png)

- Pour afficher les itinéraires souhaités sur la carte, activez-les dans la *liste Itinéraires* du menu [Configurer la carte](../../map/configure-map-menu.md).
- OsmAnd peut mettre en évidence les [itinéraires présents sur OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Ils peuvent être sélectionnés en appuyant sur [le symbole sur l'itinéraire](#enregistrer-comme-une-trace), et si l'ensemble visible des itinéraires est correctement configuré, vous pouvez suivre la couleur et les icônes.
- Les principaux types d'itinéraires peuvent également être filtrés par classes et sous-classes, ce qui permet d'afficher uniquement des groupes spécifiques au sein de chaque type. Par exemple, vous pouvez afficher les itinéraires de randonnée par **symboles OSMC** en tant que classes, et par réseaux *international, national, régional* ou *local* en tant que sous-classes, actuellement disponibles lorsque le plugin [Développement OsmAnd](../../plugins/development.md) est activé.
- Vous pouvez créer une trace au-dessus des itinéraires à l'aide de l'outil [Planifier un itinéraire](../../plan-route/create-route.md). 
- Lorsque plusieurs itinéraires empruntent la même route, chaque itinéraire est affiché sous forme d'une ligne semi-transparente distincte placée au-dessus des autres. 
- Lorsque vous appuyez sur un emplacement où plusieurs itinéraires se chevauchent, un menu contextuel avec tous les itinéraires passant par ce point s'affiche. 
- Des cartes vectorielles mises à jour sont nécessaires pour afficher tous les éléments du nouveau schéma de rendu des itinéraires. 

![Itinéraires carte - randonnée osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Itinéraires carte - réseaux de nœuds cyclables](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Menu Trace iOS](@site/static/img/map/configure_map_routes_ios.png)

- Pour afficher les itinéraires souhaités sur la carte, activez-les dans la *liste Itinéraires* du menu [Configurer la carte](../../map/configure-map-menu.md).
- OsmAnd peut mettre en évidence les [itinéraires présents sur OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Ils peuvent être sélectionnés en appuyant sur [le symbole sur l'itinéraire](#enregistrer-comme-une-trace), et si l'ensemble visible des itinéraires est correctement configuré, vous pouvez suivre la couleur et les icônes.
- Vous pouvez créer une trace au-dessus des itinéraires à l'aide de l'outil [Planifier un itinéraire](../../plan-route/create-route.md). 
- Lorsque plusieurs itinéraires empruntent la même route, chaque itinéraire est affiché sous forme d'une ligne semi-transparente distincte placée au-dessus des autres.   

![Itinéraires carte - randonnée osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Itinéraires carte - réseaux de nœuds cyclables](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>


## Actions sur les itinéraires {#actions-sur-les-itineraires}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Infos itinéraire](@site/static/img/map/routes_osm.png) ![Infos itinéraire](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Infos itinéraire](@site/static/img/map/routes_osm_ios_new.png) ![Infos itinéraire](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

Sur la carte, vous pouvez sélectionner des itinéraires pour la [randonnée, le vélo, le ski, le VTT, le dirt bike, le voyage, et plus encore](./types-of-routes.md). Lorsque disponibles, les itinéraires de randonnée affichent leurs balises à l'aide des [symboles OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) ; les autres types d'itinéraires utilisent leurs propres marquages.

Lorsque vous appuyez sur un **symbole d'itinéraire** sur la carte :

- Une **liste des itinéraires à proximité** à cet endroit s'affiche.
- Après avoir sélectionné un itinéraire dans la liste, un [menu contextuel](../../map/tracks/track-context-menu.md) pour cet itinéraire s'ouvre, affichant des informations détaillées et les actions disponibles.
- L'itinéraire sélectionné s'ouvre dans une vue de trace, vous permettant d'interagir avec lui de la même manière qu'avec une trace GPX.

Dans le **menu contextuel**, vous pouvez :

- Afficher des [informations supplémentaires](#infos-itineraire-et-denivele) sur l'itinéraire sélectionné.
- [Enregistrer l'itinéraire](#enregistrer-comme-une-trace) en tant que **trace GPX**.
- [Démarrer la navigation](#demarrer-la-navigation) le long de l'itinéraire.

### Détails des zones et des rochers d'escalade {#details-des-zones-et-des-rochers-d-escalade}

![Détails escalade](@site/static/img/map/climbing_andr.png)

Lorsque vous sélectionnez une [zone ou un rocher d'escalade](./types-of-routes.md#itinéraires-d-escalade), OsmAnd fournit un résumé détaillé du site d'escalade, incluant : nom et localisation, cotation de difficulté d'escalade (UIAA, Français, YDS, etc.), type de roche, hauteur et longueur de l'itinéraire, qualité d'escalade et conditions de surface.

### Infos itinéraire et dénivelé {#infos-itineraire-et-denivele}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Infos itinéraire](@site/static/img/map/route_info_1_andr_new.png) ![Infos itinéraire](@site/static/img/map/route_info_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Infos itinéraire](@site/static/img/map/route_info_1_ios_new.png) ![Infos itinéraire](@site/static/img/map/route_info_2_ios_new.png)

</TabItem>

</Tabs>

Les informations suivantes seront visibles dans le menu contextuel :

- **Infos itinéraire** : Nom de l'itinéraire, lien OSM (plugin Édition OSM requis), Type, Description, Distance, Direction, Montée/Descente, Plage d'altitude, Réseau, Opérateur, État, Couleur, Aller-retour, Points de départ/d'arrivée, et plus.
- **Général** : Taille, Emplacement, Date de création.
- **Infos supplémentaires**. Affiche le type d'activité.
- Boutons d'action : [Enregistrer sous](#enregistrer-comme-une-trace) et [Démarrer la navigation](#demarrer-la-navigation).
- [Infos sur le dénivelé](../../navigation/setup/route-details.md#elevation-info). Affiche des informations sur les données d'altitude de l'itinéraire.
- [Analyser la trace sur la carte](../../map/tracks/index.md#analyze-track-on-map). Affiche une analyse détaillée des données de la trace à l'aide de graphiques et de cartes.

Pour afficher le graphique du dénivelé, de la pente ou des détails d'altitude d'un itinéraire sélectionné, appuyez simplement sur l'une des valeurs suivantes dans le menu contextuel : **Distance**, **Montée**, **Descente** ou **Altitude**.

Vous pouvez également ouvrir l'onglet *Trace* et passer à la vue *Altitude* pour voir le graphique complet du dénivelé de l'itinéraire.

**Remarque :** Les données d'altitude sont générées automatiquement et peuvent légèrement varier selon les données disponibles.

### Enregistrer comme une trace {#enregistrer-comme-une-trace}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Itinéraires sur le terrain](@site/static/img/map/routes-4.png)   ![Itinéraires sur le terrain](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraires sur le terrain](@site/static/img/map/hiking.png)   ![Itinéraires sur le terrain](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


Pour enregistrer l'itinéraire en tant que *fichier GPX*, appuyez sur le bouton **Enregistrer (Télécharger)** sous le [panneau Infos](../../map/tracks/track-context-menu.md#info-panel). Cela ouvrira le panneau de boutons [Actions rapides](../../map/tracks/track-context-menu.md#track-actions) où vous aurez accès aux actions de trace telles que la modification de l'[Apparence](../../map/tracks/appearance.md), la [Navigation](../../navigation/setup/route-navigation.md), ou la modification via [Planifier un itinéraire](../../plan-route/create-route.md). Les itinéraires enregistrés se comportent de la même manière que les autres traces et sont disponibles dans votre collection de traces.

### Démarrer la navigation {#demarrer-la-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Itinéraires sur le terrain](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraires sur le terrain](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

Pour démarrer la navigation le long de l'itinéraire OSM sélectionné, appuyez sur le bouton **Démarrer la navigation** dans le [**panneau Infos**](../../map/tracks/track-context-menu.md#info-panel).

Cela lancera le mode [**Navigation par trace**](../../navigation/setup/gpx-navigation.md), vous permettant de suivre l'itinéraire avec des instructions vocales et des fonctionnalités de navigation.

### Actions rapides {#actions-rapides}

Vous pouvez personnaliser l'activation ou la désactivation des itinéraires à l'aide du widget [Action rapide](../../widgets/quick-action.md#configure-map).


## Recherche d'itinéraires {#recherche-d-itineraires}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Itinéraires sur le terrain](@site/static/img/map/route_search.png) ![Itinéraires sur le terrain](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraires sur le terrain](@site/static/img/map/route_search_ios.png) ![Itinéraires sur le terrain](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>  

Recherchez des itinéraires à l'aide de la [fonction Recherche](../../search/index.md) par nom ou en sélectionnant « Itinéraires » dans la [section Catégories](../../search/search-poi.md#).

Pour rechercher, allez dans le menu *<Translate android="true" ids="search_button"/>* ou *<Translate android="true" ids="search_button,search_categories"/>* et saisissez votre activité.

Naviguez vers *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* pour trouver les itinéraires souhaités. Les résultats de recherche d'itinéraires affichent le nom de l'itinéraire, le type d'activité, la longueur, la localisation, la montée/descente (sur Android) et la distance jusqu'au point le plus proche. 

### Filtres d'itinéraires {#filtres-d-itineraires}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Itinéraires sur le terrain](@site/static/img/map/route_search_2_new.png) ![Itinéraires sur le terrain](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraires sur le terrain](@site/static/img/map/route_search_2_ios.png) ![Itinéraires sur le terrain](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

Dans les résultats de recherche d'itinéraires, appuyez sur le bouton **Filtres** en haut à droite pour affiner la liste. L'écran Filtres comprend un champ **Filtrer par nom** ; un bloc **Type** avec *Bureau*, *Annexe postale* et *Partenaire postal* ; et des **critères supplémentaires** qui dépendent de la catégorie d'itinéraire ou de l'activité sélectionnée, car chaque catégorie peut exposer ses propres caractéristiques et valeurs de filtre.

Vous pouvez activer ou désactiver les filtres à l'aide des interrupteurs, et certaines sections incluent *Afficher tout* pour afficher des valeurs supplémentaires.


## Articles connexes {#articles-connexes}

- [Menu contextuel de la carte](../../map/map-context-menu.md)
- [Configurer la carte](../../map/configure-map-menu.md)
- [Traces](../../map/tracks/index.md)
- [Menu contextuel des traces](../../map/tracks/track-context-menu.md)
- [Transports en commun](../public-transport.md)
- [Apparence de la ligne d'itinéraire de navigation](../../navigation/guidance/map-during-navigation.md#route-line-appearance)
- [Rechercher un POI](../../search/search-poi.md#)
- [Types d'itinéraires](./types-of-routes.md)