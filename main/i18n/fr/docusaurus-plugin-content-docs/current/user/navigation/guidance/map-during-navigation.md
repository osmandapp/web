---
source-hash: 126bdbfe84f38b892a3c07c56eec4eba2956a96775fa4206e17eba71b6dbd43d
sidebar_position: 2
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

Cet article décrit comment configurer l'apparence de la carte pendant la navigation. Cela inclut des fonctionnalités telles que l'affichage des [POI le long de l'itinéraire](#show-points-along-the-route), l'utilisation des [alertes à l'écran](#screen-alerts), l'[apparence de la ligne d'itinéraire](#route-line-appearance) y compris la couleur, la largeur et les flèches de virage. Ces fonctionnalités sont étroitement liées aux [paramètres de navigation d'itinéraire](../setup/route-navigation.md#settings).


## Carte pendant la navigation {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Écran de la carte pendant la navigation](@site/static/img/navigation/map_during_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Écran de la carte pendant la navigation](@site/static/img/navigation/map_during_navigation_2_ios.png)

</TabItem>

</Tabs>

Lors de la navigation, la carte est un outil visuel pour localiser votre position, identifier votre destination, planifier votre itinéraire et visualiser les instructions de navigation. Vous pouvez utiliser le zoom pour cela et faire glisser et pivoter la carte selon vos besoins. La carte peut également afficher des informations sur la route, les noms de rue, les bâtiments et d'autres objets pour vous aider à déterminer facilement votre itinéraire.  

Pendant la navigation, l'apparence de la carte s'ajuste en fonction du profil de navigation sélectionné. Avant de commencer la navigation, assurez-vous que l'apparence de la carte correspond à vos préférences sur la manière dont elle doit fonctionner pendant la conduite.

| Paramètre | Description | Remarque |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* |  La durée pendant laquelle la vue de la carte est synchronisée avec la position actuelle après un déplacement.  |  *Valeur :* <br /> Jamais, 5 s, 10 s, 15 s, 20 s, 25 s, 30 s, 45 s, 60 s, 50 s.|
| *<Translate android="true" ids="auto_zoom_map"/>*  |  Met automatiquement à l'échelle la carte en fonction de votre vitesse, tant que la carte est synchronisée avec votre position actuelle. | *Valeur :* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - zoom manuel. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - le zoom est de 200 m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - le zoom est de 100 m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - le zoom est de 5 m. |
| *Angle de zoom automatique 3D* | Définit l'inclinaison de la carte lors du passage en vue 3D pendant la navigation. Un angle plus élevé fait apparaître l'horizon plus éloigné, offrant une meilleure visibilité vers l'avant. |Il est appliqué uniquement lorsque le Zoom automatique est activé. Valeurs : 20°, 25°, 30°, 35°, 40°. Par défaut : 25°.  |
| *Aperçu du prochain virage* | Fait pivoter automatiquement la carte légèrement à l'avance pour montrer le prochain virage ou manœuvre pendant la navigation. Aide à anticiper les actions à venir.  | Activé par défaut. Si vous exportez et réimportez un profil, assurez-vous de vérifier ce paramètre, car dans certaines versions antérieures, il pouvait se réinitialiser à « activé ».   |
| *<Translate android="true" ids="snap_to_road"/>*  | L'icône de la position actuelle sera associée à l'itinéraire de navigation en cours.  | Vous pouvez désactiver cette option, mais toutes les options liées à la route, comme l'affichage des voies, ne seront pas non plus visibles pendant la navigation.  |



## Afficher les points le long de l'itinéraire {#show-points-along-the-route}

Le paramètre *Afficher le long de l'itinéraire* vous permet de configurer des paramètres d'itinéraire supplémentaires et est nécessaire pour le fonctionnement de widgets tels que le [Nom de la rue](../../widgets/nav-widgets#street-name) et le [Widget d'alertes](../../widgets/nav-widgets.md#alert-widget). Les options incluent l'affichage des [**POI**](#points-of-interest-pois) et de [**Mes favoris**](#my-favorites) le long de l'itinéraire ou leur utilisation en complément de ceux déjà configurés pour le profil, ainsi que l'affichage d'une liste complète des [**Avertissements de trafic**](#traffic-warnings) le long de l'itinéraire.  

- La possibilité de définir différentes distances (jusqu'à 5 km, ou 3,11 miles, selon l'[unité de longueur](../../personal/profiles.md#units--formats) que vous avez définie) de l'itinéraire aux points à proximité est utile lors de l'utilisation de types de routage tels que [Ligne droite](../routing/straight-line-routing.md) ou [Direct-au-point](../routing/direct-to-point-routing.md).
- Pour le paramètre *Afficher le long de l'itinéraire*, il est recommandé d'utiliser les [Instructions vocales](../guidance/voice-navigation.md) pour la navigation.
- *Les POI, Favoris et Avertissements de trafic* ne sont pas affichés dans la liste pour un itinéraire que vous avez déjà parcouru.

:::info note
L'option **Afficher le long de l'itinéraire** n'affecte que les listes de POI et Mes Favoris, pas la carte elle-même. Les icônes des POI et des Favoris sont affichées partout sur la carte, indépendamment de leur distance par rapport à l'itinéraire.
:::


### Voir et sélectionner des points {#view-and-select-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![points le long de l'itinéraire](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Afficher le long de l'itinéraire*

![points le long de l'itinéraire](@site/static/img/navigation/show-points-along-4-ios.png)  

</TabItem>

</Tabs>

Lorsque vous créez un itinéraire, vous pouvez définir les types de points à afficher le long de l'itinéraire dans la section *Navigation*.


### Points d'intérêt (POI) {#points-of-interest-pois}

![Superposition de POI Android](@site/static/img/map/poi_overlay_android.png) ![Superposition de POI iOS](@site/static/img/map/poi_overlay_ios.png)

Les paramètres des POI dans [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) sont associés au paramètre **Afficher le long de l'itinéraire**. 

Lorsque vous spécifiez l'affichage de certains POI sur la *Carte de configuration*, ils sont tous affichés sur les cartes que vous avez téléchargées, que vous ayez sélectionné des catégories ou, si la catégorie vous importe peu, que vous ayez sélectionné des POI à proximité.  

- Le nombre et l'identification des POI dépendent de l'échelle.

- Le paramètre *Afficher le long de l'itinéraire* affiche la même catégorie que dans la *Superposition de POI*, mais vous voyez la *liste complète* des POI sélectionnés en une seule fois, en partant du point de la position actuelle à la distance définie dans votre itinéraire.  

- Vous pouvez supprimer les POI inutiles de la liste ou les modifier dans le [Menu contextuel](../../map/map-context-menu.md) en appuyant sur l'un d'eux.

- La liste contient les [types de POI](../../map/point-layers-on-map.md#poi-types) sélectionnés et de brèves informations sur chacun d'eux, telles que l'*icône du type, le nom, la distance du point de localisation actuel au POI le long de l'itinéraire*, et *des indications sur le côté de l'itinéraire en ligne droite et à quelle distance se trouve le POI*.  


### Mes favoris {#my-favorites}

La liste contient tous les points [Favoris](../../personal/favorites.md#favorite-point) précédemment ajoutés à proximité de l'itinéraire que vous avez créé. Comme pour les POI, vous pouvez sélectionner la distance à laquelle ces points sont situés.  

- Si vous [désactivez l'affichage des Favoris sur la carte](../../map/configure-map-menu.md), ils ne disparaissent pas de la liste et continuent d'être affichés dans le [widget](../../widgets/nav-widgets.md#street-name) et annoncés à leur approche.

- Vous pouvez ajouter vos *points Favoris* à la carte non seulement à l'avance, mais aussi pendant la navigation sur un itinéraire.

- *Pour mettre à jour la liste*, désactivez puis réactivez Mes favoris.

- Chaque point contient un nom ou des coordonnées, un groupe, la distance du point de localisation actuel au *Favori* directement sur la ligne de l'itinéraire, des informations sur la distance à droite ou à gauche du point par rapport à la ligne, et la direction de l'itinéraire.


### Avertissements de trafic {#traffic-warnings}

Les *Avertissements de trafic* ne sont pas affichés directement sur la carte comme les *POI* ou *Mes favoris*.

- **Pour activer** cette option et voir les avertissements, vous devez d'abord activer et configurer le [Widget d'alertes](../../widgets/nav-widgets.md#alert-widget).

- Le choix d'afficher les *Avertissements de trafic* le long de votre itinéraire vous permet de voir la liste complète juste avant de commencer votre itinéraire, ce qui est utile lors de la planification de votre voyage.

- Vous pouvez supprimer les alertes inutiles de la liste, ou appuyer sur le nom de l'alerte pour [modifier l'emplacement](../../map/map-context-menu.md#avoid-road).


## Alertes à l'écran {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Paramètre | Description | Remarque |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Les notifications, telles que les avertissements de trafic ou les limitations de vitesse, apparaîtront à l'écran sous forme de widget. Elles apparaissent dans le coin inférieur gauche pendant que vous naviguez. | [Types de widgets d'alerte](../../widgets/nav-widgets.md#alert-widget)   |


## Apparence de la ligne d'itinéraire {#route-line-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Itinéraire de navigation Android](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Itinéraire de navigation iOS](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

Vous pouvez sélectionner l'apparence de la ligne d'itinéraire par style ou sélectionner manuellement la couleur, la largeur et la transparence de la ligne. De plus, vous pouvez choisir d'afficher les flèches de virage et les flèches de direction sur la ligne.

**Avancé** : le paramètre Personnaliser la ligne d'itinéraire vous permet d'ajuster l'apparence de la ligne d'itinéraire pour afficher les changements d'altitude, les montées ou descentes importantes, la glace sur la route, les routes non pavées, les autoroutes et autres obstacles possibles. Vous pouvez également sélectionner ou créer des [schémas de couleurs personnalisés](../../personal/color-palette-schemes.md#routes) à appliquer à la ligne d'itinéraire.


:::note
 <ProFeature/> Vous ne pouvez utiliser certains paramètres qu'avec l'abonnement <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro</a>.
:::


### Couleur {#color}

Le paramètre **Couleur** modifie les tons de couleur des lignes d'itinéraire. Leur couleur globale change en fonction du type sélectionné dans la collection OsmAnd, et selon la **Légende de la carte**. Alternativement, leur couleur devient celle que vous définissez manuellement avec la transparence.

- ***<Translate android="true" id="map_widget_renderer"/>***. Utilisé avec les couleurs par défaut. Pour une description complète des couleurs, allez à [Styles de carte par défaut](../../map/vector-maps.md#default-map-styles).  
    ![style de carte](@site/static/img/navigation/route/map_st_2.png)

- ***Personnalisé***. Permet de sélectionner une ligne dans n'importe quelle couleur et transparence préférées. Vous pouvez sélectionner des paramètres différents pour la carte de jour et séparément pour la carte de nuit.  
    ![personnalisé](@site/static/img/navigation/route/custom.png)   ![personnalisé](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Affiche l'altitude du point de l'itinéraire sous forme de gradient **vert-jaune-rouge**. Le **vert** indique le point le plus bas de l'itinéraire, le **jaune** indique l'altitude moyenne du point, et le **rouge** est le plus élevé. Si la différence d'altitude de l'itinéraire est < 100 mètres, le gradient est partiellement appliqué ou non appliqué, par exemple pour une simple montée de 100 mètres à 150 mètres - le gradient sera **vert-jaune**. Notez que la couleur ne représente pas la valeur absolue de l'altitude.  
    ![Altitude](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. La ligne d'itinéraire est colorée en différentes couleurs en fonction du profil d'élévation de l'itinéraire. Une description détaillée se trouve dans l'article du *plugin Topographie*, section [Pente](../../plugins/topography.md#hillshade-slope-and-altitude-layers).  
    ![Altitude](@site/static/img/navigation/route/Slope.png)   ![Altitude](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Colore une ligne d'itinéraire ou de trace en fonction de la *classification de la route*. Une description détaillée se trouve dans la section *Cartes vectorielles - [Style de route](../../map/vector-maps.md#road-style)*.  
    ![Altitude](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Fournit des informations sur la surface physique de la route ou du sentier. Une description détaillée se trouve dans l'article *Style de carte OsmAnd - [Surface](../../map-legend/osmand.md#surface-smoothness)* dans la section *Légende de la carte*.  
    ![Altitude](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Classification de la maniabilité de la route ou du sentier pour les véhicules à roues, en particulier en ce qui concerne la régularité et la douceur de la surface. Une description détaillée se trouve dans l'article *Style de carte OsmAnd - [Douceur](../../map-legend/osmand.md#surface-smoothness)* dans la section *Légende de la carte*.  
    ![Altitude](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Colore une ligne d'itinéraire ou de trace en fonction de la *classification des routes d'hiver*. Une description détaillée se trouve dans l'article *Cartes vectorielles*, section [Routes d'hiver et de glace](../../map/vector-maps.md#winter-and-ski).  
    ![Altitude](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Coloration d'une ligne d'itinéraire ou de sentier par composition du revêtement. Typiquement, utilisé lorsque le réseau routier est en grande partie non pavé. Une description détaillée se trouve dans l'article *Style de carte OsmAnd - [Fermeté de la surface](../../map-legend/osmand.md#surface-smoothness)* dans la section *Légende de la carte*.  
    ![Altitude](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Difficulté des sentiers équestres***. Affiche les chemins en fonction de la difficulté des sentiers équestres.  
    ![Altitude](@site/static/img/navigation/route/firmness.png)


### Largeur {#width}

Vous pouvez ajuster la largeur de la ligne d'itinéraire pour l'aligner sur la route ou le chemin affiché sur la carte. Pour une identification visuelle plus claire, vous pouvez augmenter ou diminuer manuellement la largeur de la ligne selon vos besoins. Pour plus de détails, consultez l'article *Traces et Itinéraires — [Apparence](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. Utilisé avec la largeur par défaut définie par OsmAnd. Une description complète se trouve dans l'article *Cartes vectorielles*, section [Style de carte](../../map/vector-maps.md#default-map-styles).  
    ![style de carte](@site/static/img/navigation/route/map_st_2.png)

- ***Largeurs Fine, Moyenne et Épaisse***. Vous pouvez sélectionner la largeur de la ligne pour qu'elle corresponde à la largeur de la route, ou pour souligner plus fortement la ligne d'itinéraire sur la carte.  
    ![largeur](@site/static/img/navigation/route/width_med.png)

- ***Personnalisé***. Permet d'afficher une ligne de la largeur que vous souhaitez. Utilisez la barre de défilement pour sélectionner la largeur.  
    ![personnalisé](@site/static/img/navigation/route/custom_2.png)  


### Flèches de virage {#turn-arrows}

Le paramètre Flèches de virage vous permet de choisir si les flèches de virage sont affichées sur la ligne d'itinéraire.  

- ***Sur la carte***  
    ![Flèches de virage sur la carte Android](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![Flèches de virage sur la carte iOS](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***Dans l'application***  
    ![Flèches de virage dans l'application Android](@site/static/img/navigation/route/turn_arr.png)   ![Flèches de virage dans l'application iOS](@site/static/img/navigation/route/turn_arr_ios.png)


## Articles connexes {#related-articles}

- [Paramètres d'itinéraire](../routing/osmand-routing.md#routing-types)
- [Préparation de l'itinéraire](../setup/route-navigation.md)
- [Navigation par trace](../setup/gpx-navigation.md)
- [Navigation par marqueurs](../setup/markers-navigation.md)
- [Détails de l'itinéraire](../setup/route-details.md)
- [Paramètres de navigation](./navigation-settings.md)
- [Instructions vocales / Notifications](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)