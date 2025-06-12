---
source-hash: 647711494d62816fdbd45cf8b18ef90488d2e460f73ad6eb67974d9a0645067f
sidebar_position: 1
title: Écran de la carte pendant la navigation
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

Cet article décrit comment configurer l'apparence de la carte pendant la navigation. Cela inclut des fonctionnalités telles que l'affichage des [POI le long de l'itinéraire](#show-points-along-the-route), l'utilisation des [alertes à l'écran](#screen-alerts), l'[apparence de la ligne d'itinéraire](#route-line-appearance) incluant la couleur, la largeur et les flèches de virage. Ces fonctionnalités sont étroitement liées aux [paramètres de navigation d'itinéraire](../setup/route-navigation.md#settings).


## Carte pendant la navigation {#map-during-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

![Écran de la carte pendant la navigation](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Écran de la carte pendant la navigation](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Pendant la navigation, la carte est un outil visuel pour localiser votre position, identifier votre destination, planifier votre itinéraire et visualiser les indications de navigation. Vous pouvez utiliser le zoom pour cela et faire glisser et faire pivoter la carte selon vos besoins. La carte peut également afficher des informations routières, des noms de rues, des bâtiments et d'autres objets pour vous aider à déterminer facilement votre itinéraire.  

Pendant la navigation, l'apparence de la carte s'ajuste en fonction du profil de navigation sélectionné. Avant de commencer la navigation, assurez-vous que l'apparence de la carte correspond à vos préférences quant à son fonctionnement pendant la conduite.

| Paramètre | Description | Remarque |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* |  Le temps pendant lequel la vue de la carte est synchronisée avec la position actuelle après un déplacement.  |  *Valeur :* <br /> Jamais, 5 sec, 10 sec, 15 sec, 20 sec, 25 sec, 30 sec, 45 sec, 60 sec, 50 sec.|
| *<Translate android="true" ids="auto_zoom_map"/>*  |  Mise à l'échelle automatique de la carte en fonction de votre vitesse, tant que la carte est synchronisée avec votre position actuelle. | *Valeur :* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - zoom manuel. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - zoom de 200 m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - zoom de 100 m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - zoom de 5 m. |
| *<Translate android="true" ids="snap_to_road"/>*  | L'icône de position actuelle sera associée à l'itinéraire de navigation actuel.  | Vous pouvez désactiver cette option, mais toutes les options liées à la route, telles que l'affichage des voies, ne seront pas non plus visibles pendant la navigation.  |
| *<Translate android="true" ids="approximate_bearing"/>* | Détermine le relèvement en fonction de l'itinéraire de navigation que vous suivez.  | Le paramètre n'est visible que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé. <br /> Ces paramètres doivent être activés si l'orientation de la carte directionnelle est inversée ou tremble lors de l'utilisation d'[Android Auto](../auto-car.md#common-issues-and-solutions).   |


## Afficher les points le long de l'itinéraire {#show-points-along-the-route}

Le paramètre *Afficher le long de l'itinéraire* vous permet de configurer des paramètres d'itinéraire supplémentaires et est nécessaire au fonctionnement de widgets tels que le [Nom de la rue](../../widgets/nav-widgets#street-name) et le [Widget d'alerte](../../widgets/nav-widgets.md#alert-widget). Les options incluent l'affichage des [**POI**](#points-of-interest-pois) et de [**Mes favoris**](#my-favorites) le long de l'itinéraire ou leur utilisation en complément de ceux déjà configurés pour le profil, ainsi que l'affichage d'une liste complète des [**Avertissements de circulation**](#traffic-warnings) le long de l'itinéraire.  

- La possibilité de définir différentes distances (jusqu'à 5 km, ou 3,11 miles, selon l'[unité de longueur](../../personal/profiles.md#units--formats) que vous avez définie) de l'itinéraire aux points proches est utile lors de l'utilisation de types de routage tels que [Ligne droite](../routing/straight-line-routing.md) ou [Direct-to-point](../routing/direct-to-point-routing.md).
- Pour le paramètre *Afficher le long de l'itinéraire*, il est recommandé d'utiliser les [invites vocales](../guidance/voice-navigation.md) pour la navigation.
- Les *POI, Favoris et Avertissements de circulation* ne sont pas affichés dans la liste pour un itinéraire que vous avez déjà parcouru.


### Afficher et sélectionner des points {#view-and-select-points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![points le long de l'itinéraire](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Afficher le long de l'itinéraire*

![points le long de l'itinéraire](@site/static/img/navigation/show-points-along-4-ios.png)  

</TabItem>

</Tabs>

Lorsque vous créez un itinéraire, vous pouvez définir les types de points à afficher le long de l'itinéraire dans la section *Navigation*.


### Points d'intérêt (POI) {#points-of-interest-pois}

![Superposition de POI Android](@site/static/img/map/poi_overlay_android.png) ![Superposition de POI iOS](@site/static/img/map/poi_overlay_ios.png)

Les paramètres des POI dans [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) sont associés au paramètre **Afficher le long de l'itinéraire**. Il s'agit essentiellement d'un paramètre supplémentaire pour l'affichage des POI sur la carte, directement lié à l'itinéraire créé.  

Lorsque vous spécifiez l'affichage de certains POI sur la *Configuration de la carte*, ils sont tous affichés sur les cartes que vous avez téléchargées, que vous ayez sélectionné des catégories ou, si vous ne vous souciez pas de la catégorie, sélectionné des POI à proximité.  

- Le nombre et l'identification des POI sont *dépendants de l'échelle*.

- Le paramètre *Afficher le long de l'itinéraire* affiche la même catégorie que dans la *superposition de POI*, mais vous voyez la *liste entière* des POI sélectionnés en une seule fois, à partir du point de la position actuelle à la distance définie dans votre itinéraire.  

- Vous pouvez supprimer les POI inutiles de la liste ou les modifier dans le [menu contextuel](../../map/map-context-menu.md) en appuyant sur l'un d'eux.

- La liste contient les [types de POI](../../map/point-layers-on-map.md#poi-types) sélectionnés et de brèves informations sur chacun d'eux, telles que l'*icône du type, le nom, la distance du point de localisation actuel au POI le long de l'itinéraire*, et des *indications sur le côté de l'itinéraire en ligne droite et la distance à laquelle se trouve le POI*.  


### Mes favoris {#my-favorites}

La liste contient tous les points [Favoris](../../personal/favorites.md#favorite-point) précédemment ajoutés près de l'itinéraire que vous avez créé. Comme pour les POI, vous pouvez sélectionner la distance à laquelle se trouvent ces points.  

- Si vous [désactivez l'affichage des Favoris sur la carte](../../map/configure-map-menu.md), ils ne disparaissent pas de la liste et continuent d'être affichés dans le [widget](../../widgets/nav-widgets.md#street-name) et annoncés lorsque vous vous en approchez.

- Vous pouvez ajouter vos *points Favoris* à la carte non seulement à l'avance, mais aussi pendant la navigation sur un itinéraire.

- *Pour mettre à jour la liste*, désactivez Mes favoris, puis réactivez-les.

- Chaque point contient un nom ou des coordonnées, un groupe, la distance du point de localisation actuel au *Favori* directement sur la ligne d'itinéraire, des informations sur la distance à droite ou à gauche du point par rapport à la ligne, et la direction de l'itinéraire.


### Avertissements de circulation {#traffic-warnings}

Les *avertissements de circulation* ne sont pas affichés directement sur la carte comme les *POI* ou *Mes favoris*.

- **Pour activer** cette option et voir les avertissements, vous devez d'abord activer et configurer le [widget d'alertes](../../widgets/nav-widgets.md#alert-widget).

- Le choix d'afficher les *avertissements de circulation* le long de votre itinéraire vous permet de voir la liste entière juste avant de commencer votre itinéraire, ce qui est utile lors de la planification de votre voyage.

- Vous pouvez supprimer les alertes inutiles de la liste, ou appuyer sur le nom de l'alerte pour [modifier l'emplacement](../../map/map-context-menu.md#avoid-road).


## Alertes à l'écran {#screen-alerts}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Paramètre | Description | Remarque |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Les notifications, telles que les avertissements de circulation ou les limites de vitesse, apparaîtront à l'écran sous forme de widget. Elles apparaissent dans le coin inférieur gauche pendant que vous naviguez. | [Types de widgets d'alerte](../../widgets/nav-widgets.md#alert-widget)   |


## Apparence de la ligne d'itinéraire {#route-line-appearance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Itinéraire de navigation Android](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Itinéraire de navigation Android](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

Vous pouvez sélectionner l'apparence de la ligne d'itinéraire par style ou sélectionner manuellement la couleur, la largeur et la transparence de la ligne. De plus, vous pouvez choisir d'afficher ou non les flèches de virage et les flèches de direction sur la ligne.

**Avancé** : le paramètre Personnaliser la ligne d'itinéraire vous permet d'ajuster l'apparence de la ligne d'itinéraire pour afficher les changements d'altitude, les montées ou descentes importantes, la glace sur la route, les routes non pavées, les autoroutes et autres obstacles possibles. Vous pouvez également sélectionner ou créer des [schémas de couleurs](../../personal/color-palette-schemes.md#routes) personnalisés à appliquer à la ligne d'itinéraire.


:::note
 <ProFeature/> Certains paramètres ne peuvent être utilisés qu'avec un [abonnement OsmAnd Pro](https://osmand.net/docs/user/purchases/android#free-and-paid-features).
:::


### Couleur {#color}

Le paramètre **Couleur** modifie les tons de couleur des lignes d'itinéraire. Leur couleur globale change en fonction du type sélectionné dans la collection OsmAnd, et selon la **Légende de la carte**. Alternativement, leur couleur devient la couleur et la transparence que vous définissez manuellement.

- ***<Translate android="true" id="map_widget_renderer"/>***. Utilisé avec les couleurs par défaut. Pour une description complète des couleurs, consultez [Styles de carte par défaut](../../map/vector-maps.md#default-map-styles).  
    ![style de carte](@site/static/img/navigation/route/map_st_2.png)

- ***Personnalisé***. Vous permet de sélectionner une ligne dans la couleur et la transparence préférées. Vous pouvez sélectionner différents paramètres pour la carte de jour et séparément pour la carte de nuit.  
    ![personnalisé](@site/static/img/navigation/route/custom.png)   ![personnalisé](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Il affiche la hauteur du point d'itinéraire sous forme de dégradé **vert-jaune-rouge**. Le **vert** indique le point le plus bas de l'itinéraire, le **jaune** indique la hauteur moyenne du point, et le **rouge** est le plus élevé. Si la différence d'altitude de l'itinéraire est < 100 mètres, le dégradé est partiellement appliqué ou non appliqué, par exemple pour une simple montée de 100 mètres à 150 mètres - le dégradé sera **vert-jaune**. Notez que la couleur ne représente pas la valeur absolue de l'altitude.  
    ![Altitude](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. La ligne d'itinéraire est colorée de différentes couleurs en fonction du profil d'élévation de l'itinéraire. Une description détaillée se trouve dans l'article *Plugin Topographie*, section [Pente](../../plugins/topography.md#hillshade-slope-and-altitude-layers).  
    ![Altitude](@site/static/img/navigation/route/Slope.png)   ![Altitude](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Colore une ligne d'itinéraire ou de trace en fonction de la *classification routière*. Une description détaillée se trouve dans l'article *Cartes vectorielles - [Style de route](../../map/vector-maps.md#road-style)*.  
    ![Altitude](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Fournit des informations sur la surface physique de la route ou du sentier. Une description détaillée se trouve dans l'article *Style de carte OsmAnd - [Surface](../../map-legend/osmand.md#surface-smoothness)* dans la section *Légende de la carte*.  
    ![Altitude](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Classification de la maniabilité des routes ou des sentiers pour les véhicules à roues, en particulier en ce qui concerne la régularité et la douceur de la surface. Une description détaillée se trouve dans l'article *Style de carte OsmAnd - [Douceur](../../map-legend/osmand.md#surface-smoothness)* dans la section *Légende de la carte*.  
    ![Altitude](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Colore une ligne d'itinéraire ou de trace en fonction de la *classification routière hivernale*. Une description détaillée se trouve dans l'article *Cartes vectorielles*, section [Routes hivernales et glacées](../../map/vector-maps.md#winter-and-ski).  
    ![Altitude](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Coloration d'une ligne d'itinéraire ou de sentier par composition du revêtement. Typiquement, utilisé lorsque le réseau routier est largement non pavé. Une description détaillée se trouve dans l'article *Style de carte OsmAnd - [Fermeté de la surface](../../map-legend/osmand.md#surface-smoothness)* dans la section *Légende de la carte*.  
    ![Altitude](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Difficulté des sentiers équestres***. Rend les chemins en fonction de la difficulté des sentiers équestres.  
    ![Altitude](@site/static/img/navigation/route/firmness.png)


### Largeur {#width}

Vous pouvez ajuster la largeur de la ligne d'itinéraire pour l'aligner sur la route ou le chemin affiché sur la carte. Pour une identification visuelle plus claire, vous pouvez augmenter ou diminuer manuellement la largeur de la ligne selon vos besoins. Pour plus de détails, consultez l'article *Traces et itinéraires — [Apparence](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. Il est utilisé avec la largeur par défaut définie par OsmAnd. Une description complète se trouve dans l'article *Cartes vectorielles*, section [Style de carte](../../map/vector-maps.md#default-map-styles).  
    ![style de carte](@site/static/img/navigation/route/map_st_2.png)

- ***Largeurs fines, moyennes et grasses***. Vous pouvez sélectionner la largeur de la ligne pour qu'elle corresponde à la largeur de la route, ou mettre davantage l'accent sur la ligne d'itinéraire sur la carte.  
    ![largeur](@site/static/img/navigation/route/width_med.png)

- ***Personnalisé***. Il vous permet d'afficher une ligne de la largeur que vous souhaitez. Utilisez la barre de défilement pour sélectionner la largeur.  
    ![personnalisé](@site/static/img/navigation/route/custom_2.png)  


### Flèches de virage {#turn-arrows}

Le paramètre Flèches de virage vous permet de sélectionner si les flèches de virage sont affichées sur la ligne d'itinéraire.  

- ***Sur la carte***  
    ![Altitude](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![flèches de virage ios carte](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***Dans l'application***  
    ![Altitude](@site/static/img/navigation/route/turn_arr.png)   ![flèches de virage ios](@site/static/img/navigation/route/turn_arr_ios.png)


## Articles connexes {#related-articles}

- [Paramètres d'itinéraire](../routing/osmand-routing.md#routing-types)
- [Préparation de l'itinéraire](../setup/route-navigation.md)
- [Navigation par trace](../setup/gpx-navigation.md)
- [Navigation par marqueurs](../setup/markers-navigation.md)
- [Détails de l'itinéraire](../setup/route-details.md)
- [Paramètres de navigation](./navigation-settings.md)
- [Invites vocales / Notifications](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Dernière mise à jour : décembre 2024*