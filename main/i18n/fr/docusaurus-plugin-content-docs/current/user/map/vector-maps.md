---
source-hash: f80d7d2ec2e1df970dcaad604965df0d177218ef2e96f439521a590197b70506
sidebar_position: 5
title:  Cartes vectorielles (Styles de carte)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Aperçu {#overview}

Les cartes vectorielles sont conçues pour être la source de données cartographiques par défaut pour OsmAnd, vous **devez donc les télécharger sur votre appareil**. Les cartes vectorielles prennent en charge un grand nombre de styles de carte pour différentes activités telles que le cyclisme, la randonnée, la conduite en voiture ou en motoneige, et autres.  

Chaque style de carte peut être personnalisé pour mettre en évidence ou masquer des objets spécifiques, et pour basculer entre les modes jour et nuit. Les données des cartes vectorielles peuvent être enrichies par des données vectorielles et affichées dans le style de carte par défaut, comme les informations sur les *lignes de contour*. Vous pouvez *créer votre propre style de carte OsmAnd* pour afficher les informations requises.


## Cas d'utilisation {#use-cases}

Les styles de carte personnalisables sont l'un des principaux avantages d'OsmAnd. Vous pouvez personnaliser l'affichage de la carte pour l'adapter à vos besoins et à vos loisirs, ajuster l'affichage ou le masquage de certains objets de la carte, les tailles et les couleurs de ces objets, et modifier l'échelle d'affichage de certains objets.


## Styles de carte par défaut {#default-map-styles}

OsmAnd vous propose par défaut de nombreux styles de carte et couches de données. Cette section décrit les principaux pour les modes jour et nuit.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![Style de carte OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)  

Le style de rendu de carte standard d'OsmAnd équilibre les détails et la simplicité, le rendant idéal pour l'exploration urbaine et en plein air. Il détaille les caractéristiques de la ville telles que les rues, les bâtiments et les arrêts de transport tout en simplifiant le désordre visuel en rendant les cartes plus claires.  

Les principaux avantages incluent la cartographie des itinéraires, la qualité du revêtement, les restrictions d'accès, la signalisation routière, le rendu des sentiers à l'échelle SAC, les installations sportives et les détails topographiques tels que les lignes de contour.


### Vue Randonnée {#touring-view}

![Style de carte Vue Randonnée](@site/static/img/map/map-style-touring.png)

Style Randonnée avec un contraste élevé et un maximum de détails. Inclut toutes les options du style OsmAnd par défaut tout en affichant autant de détails que possible, en particulier les routes, les chemins et autres voies de déplacement. Distinction claire des types de routes dans un *atlas de randonnée*. Convient pour une utilisation de jour, de nuit et en extérieur.

### UniRS et LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Les styles UniRS et LightRS sont des styles d'auteur qui rendent les informations de base de la carte mais dans des schémas de couleurs différents.  

- **Style UniRS**. Ce style est une version modifiée du style par défaut pour améliorer le contraste des chemins piétonniers et cyclables. Il conserve le schéma de couleurs classique de Mapnik.  

    ![Style de carte LightRS](@site/static/img/map/map-style-lightrs.png)

- **Style LightRS**. C'est un style de conduite simple qui propose un mode nuit doux. Il met en évidence les routes avec une couleur orange contrastée, atténue les objets secondaires de la carte et affiche des caractéristiques topographiques comme les lignes de contour.

    ![Style de carte UniRS](@site/static/img/map/map-style-unirs.png)

### Nautique {#nautical}

![Style de carte Nautique](@site/static/img/map/map-style-nautical.png)

C'est un style de navigation maritime qui présente les bouées, les phares, les routes fluviales, les voies maritimes, les amers, les ports, les marques nautiques et les isobathes. Pour en savoir plus, consultez l'article [Vue Carte marine](../plugins/nautical-charts.md).

### Hiver et Ski {#winter-and-ski}

![Style de carte Hiver & Ski](@site/static/img/map/map-style-winter-ski.png)

C'est un style pour les sports de ski qui décrit les pistes, les remontées mécaniques et les pistes de ski de fond, tout en masquant les objets secondaires de la carte. Le **style Hiver et Ski** est conçu pour vous aider dans la navigation pour les sports d'hiver.  

Vous pouvez voir les pistes de ski et d'autres détails tels que la difficulté des pistes et les marqueurs des remontées mécaniques. Les principaux avantages incluent l'affichage pratique des pistes, des remontées mécaniques et d'autres caractéristiques de ski. Moins d'objets secondaires distrayants sur la carte. Pour en savoir plus, consultez l'article [Cartes de ski](../plugins/ski-maps.md).

### Topo {#topo}

![Style de carte Topo](@site/static/img/map/map-style-topo.png)

Ce style est conçu pour la randonnée, le camping et le cyclisme en pleine nature. Il présente des routes et des éléments naturels contrastés, différents types de sentiers, des options étendues de lignes de contour et des détails supplémentaires. Il est lisible en extérieur. Le paramètre *Intégrité de la surface* vous permet de distinguer la qualité de la route.

### OSM-carto {#osm-carto}

![Style de carte OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Ce style imite le [style web par défaut d'OpenStreetMap](https://www.openstreetmap.org/). Le code source de la version web est disponible sur [Github](https://github.com/gravitystorm/openstreetmap-carto), le code OsmAnd est disponible sur [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Désert {#desert}

![Style de carte Désert](@site/static/img/map/map-style-desert.png)

Conçu pour les déserts et autres régions peu peuplées, offrant des informations cartographiques plus détaillées.

### Tout-terrain {#offroad}

![Style de carte Tout-terrain](@site/static/img/map/map-style-offroad.png)

Conçu pour la navigation tout-terrain, ce style est basé sur la disposition de la carte [Topo](#topo) et fonctionne bien avec des images satellite en sous-couche. Il présente des routes principales plus fines pour mettre en évidence les chemins, les pistes, les itinéraires cyclables et autres sentiers tout-terrain, le rendant idéal pour explorer des routes non pavées dans des zones rurales ou isolées.

### Motoneige {#snowmobile}

![Style de carte Motoneige](@site/static/img/map/map-style-snowmobile.png)

Adapté à la navigation en motoneige, ce style met en évidence les chemins, routes et pistes praticables en motoneige. Il met en lumière les sentiers spécialisés dans les régions enneigées, offrant une navigation claire sur des terrains couverts de neige où les routes standard peuvent ne pas être disponibles.


## Légende de la carte {#map-legend}

La légende de la carte sert de clé pour comprendre les symboles utilisés dans les cartes OsmAnd. Elle explique la signification des divers symboles cartographiques, y compris les points, les lignes et les zones. Par exemple, des symboles comme des lignes sinueuses bleues indiquent des rivières, tandis que différentes couleurs et formes peuvent représenter des bâtiments, des chemins et des itinéraires.  

La légende aide les utilisateurs à interpréter ce qu'ils voient sur la carte. Vous pouvez accéder à la légende complète de la carte OsmAnd [ici](../map-legend/index.md).


## Polices de carte (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Polices de carte version Android](@site/static/img/map/map_fonts.png) ![Version des polices de carte](@site/static/img/map/map_fonts_1.png)

Pour les cartes en chinois simplifié/traditionnel, japonais et coréen, des caractères ou symboles incorrects (comme des carrés) peuvent apparaître si votre appareil ne dispose pas des polices nécessaires. Ce problème se produit lors du rendu des noms locaux et peut être résolu en téléchargeant les polices requises via OsmAnd.  

Certains problèmes de polices connexes ont été documentés sur GitHub : [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Lignes de contour {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Style de carte Lignes de contour](@site/static/img/map/contour_lines.png)

Les lignes de contour dans OsmAnd sont affichées comme des lignes d'altitude sur les cartes vectorielles. Pour les utiliser, vous devez d'abord activer le [plugin Topographie](../plugins/topography.md), télécharger les données régionales nécessaires et configurer l'affichage. Cette fonctionnalité n'est pas activée par défaut et nécessite un [achat](../purchases/index.md).  

Les lignes de contour sont compatibles avec tous les styles de carte et peuvent être personnalisées via le [menu Lignes de contour](../plugins/topography.md#contour-lines). Pour plus de détails, consultez l'article sur le [plugin Topographie](../plugins/topography.md).


## * Profondeur marine {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_ios](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_ios](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Les isobathes de profondeur marine représentent des zones de profondeur égale, aidant à visualiser les changements de topographie sous-marine. Cette fonctionnalité est disponible pour tous les styles et modes de carte et peut être ajustée avec ou sans le plugin de vue Carte marine activé.  

Pour plus de détails sur la vue Carte marine, visitez la [page du plugin Carte marine](../plugins/nautical-charts).


## Afficher les frontières {#show-borders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![afficher-frontieres-andr](@site/static/img/map/show-borders-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![afficher-frontieres-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Cette fonctionnalité vous permet d'activer ou de désactiver la visibilité des frontières des cartes précédemment téléchargées depuis la liste des cartes disponibles. Son objectif principal est d'aider à désencombrer la carte principale en masquant les contours des cartes téléchargées, ce qui est particulièrement utile si vous avez de nombreuses cartes installées.  

Par défaut, les frontières des cartes apparaîtront lorsque vous zoomez au niveau 7 et disparaîtront au niveau de zoom 3 et inférieur.

:::tip Couleur Afficher les frontières des cartes téléchargées
Lorsque la fonctionnalité *Afficher les frontières des cartes téléchargées* est activée, les cartes téléchargées sont colorées en **Vert** dans les versions Android et iOS d'OsmAnd.  

Sur Android, les cartes archivées sont affichées en **Orange**. Sur iOS, les cartes qui peuvent être mises à jour sont également marquées en **Orange**.
:::


## Grille de coordonnées {#coordinates-grid}


Aller à : *Menu → Configurer la carte → Afficher → Grille de coordonnées*  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu grille de coordonnées](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![afficher-frontieres-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>


La fonctionnalité **Grille de coordonnées** superpose une grille de référence sur la carte, vous permettant de visualiser les lignes de latitude et de longitude basées sur différents systèmes de coordonnées. Cette fonctionnalité est utile pour une référence de localisation précise et la navigation géospatiale. Vous pouvez sélectionner les ***Paramètres de niveau de zoom :*** pour un affichage entre 2 et 22, la ***Position des étiquettes*** - **Bords**/**Centre** et la ***Couleur de la grille*** séparément pour le mode Jour/Nuit.


***Formats de coordonnées disponibles :***

- **WGS84** (EPSG:4326) -  **DD°MM′SS″** (Degrés, Minutes, Secondes)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (Degrés décimaux - format par défaut WGS84)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (Degrés, Minutes décimales)
- **UTM** (EPSG:6387, Universal Transverse Mercator - système de grille basé sur des zones). Le niveau de zoom minimum est de 9, une seule zone UTM est affichée à la fois, car les zones sont séparées par des méridiens tous les 6°
- **MGRS** (Military Grid Reference System)

Par défaut, l'application utilise le format de coordonnées sélectionné dans les [Paramètres généraux](../personal/profiles.md#units--formats).

## Configurer le style de carte {#configure-map-style}

### Mode carte {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*  

![Mode Carte](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Mode Carte](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

La carte peut être affichée avec un thème clair ou sombre en fonction du mode sélectionné dans une liste d'options. Par défaut et pour tous les nouveaux utilisateurs, le [style de carte](#default-map-styles) s'aligne sur le thème choisi dans les paramètres système de votre appareil.

- **<Translate android="true" ids="daynight_mode_day"/>**. Affiche toujours la carte avec un thème clair pour une visibilité optimale en journée.

- **<Translate android="true" ids="daynight_mode_night"/>**. Affiche toujours la carte avec un thème sombre, idéal pour la nuit ou les conditions de faible luminosité.

- **Lever / Coucher du soleil**. Passe automatiquement du thème jour au thème nuit en fonction des heures locales de lever et de coucher du soleil, qui sont détaillées dans cet onglet de l'application.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Android uniquement*). Utilise le capteur de lumière de l'appareil pour basculer automatiquement entre les thèmes clair et sombre en fonction des niveaux de lumière ambiante.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. L'affichage de la carte s'adapte au thème général de l'application, affichant le mode jour avec le thème clair et le mode nuit avec le thème sombre.


### Détails {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">

  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*  

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Affiche les polygones, les sentiers, les points et les panneaux sur la carte à faible zoom. Cela signifie que vous pouvez voir plus de détails sur la carte à faible grossissement. Notez que le rendu sur votre appareil peut ne pas être rapide.  
    ![Paramètre de carte - Plus détaillé](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Affiche le type de revêtement de la route. La couleur de la route vous aide à comprendre quel est le revêtement de la route, comme l'asphalte, l'herbe ou le sable. Voir la [Légende de la carte](../map-legend/index.md).  
    ![Paramètre de carte - Revêtement de la route](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Indique la qualité de la route. Indique la régularité (pente) de la route. L'état de vos routes : bon, mauvais, peut-être terrible, etc. Regardez la [Légende de la carte](../map-legend/index.md) pour déterminer la régularité de votre route.  
    ![Paramètre de carte - État de la route](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**.  Affiche l'accessibilité de la route : privée ou autorisée, urgence seulement, ou route à péage. Consultez la [Légende de la carte](../map-legend/index.md) pour trouver les routes disponibles.  
    ![Paramètre de carte - Accès à la route](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. La fonctionnalité [Zones à faibles émissions (ZFE)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) affiche des bordures vertes et des étiquettes "ZFE" sur les cartes pour les zones des villes où l'accès est restreint pour certains véhicules polluants. Les ZFE visent à améliorer la qualité de l'air en limitant l'entrée aux véhicules qui respectent des normes d'émissions spécifiques. L'utilisation de cette fonctionnalité aide les utilisateurs à éviter les pénalités en identifiant et en naviguant autour de ces zones vertes, garantissant la conformité avec les réglementations environnementales locales lors des déplacements dans les centres-villes.  

    ![Paramètre de carte - Zones à faibles émissions](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Différentes catégories de bâtiments, telles que résidentielles, industrielles et commerciales, sont codées par couleur. Référez-vous à la [Légende de la carte](../map-legend/index.md) pour plus de détails.  
    ![Paramètre de carte - Bâtiments colorés](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Affiche les rues éclairées et non éclairées, ainsi que les voies souterraines et temporairement éclairées. Consultez la [Légende de la carte](../map-legend/index.md) pour les spécificités.  
    ![Paramètre de carte - Éclairage public](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Conçue pour les cartographes, cette fonctionnalité affiche les références, remarques et commentaires d'autres utilisateurs sur la carte.  
    ![Paramètre de carte - Assistant cartographe](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Affiche les isobathes de la mer. Vous devez installer le [plugin Nautique](../plugins/nautical-charts) et télécharger les cartes nautiques.  
    ![Paramètre de carte - Lignes de profondeur](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Affiche une bordure verte et les étiquettes "RN" pour le [territoire de la réserve naturelle](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Met en évidence les zones protégées avec une bordure verte et une étiquette "RN" pour les zones de conservation de la faune.  

    &nbsp;&nbsp;&nbsp;![Paramètre de carte - Réserve naturelle](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Shows polygons, trails, points, and signs on the map at low zoom. This means that you can see more details on the map at low magnification. Note that rendering on your device may not be fast.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Shows the type of road surface. The color of the road helps you understand what the road surface is, such as asphalt, grass, or sand. See the [Map legend](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map Legend](../map-legend/index.md) to determine the smoothness of your road.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Shows the accessibility of the road: private or permitted, emergency only, or toll road. View the [Map Legend](../map-legend/index.md) to find available roads. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | The [Low Emission Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) feature displays green borders and "LEZ" labels on maps for areas in cities where access is restricted for certain polluting vehicles. LEZs aim to improve air quality by limiting entry to vehicles that meet specific emissions standards. Using this feature helps users avoid penalties by identifying and navigating around these green zones, ensuring compliance with local environmental regulations while traveling through city centers.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Different building categories, such as residential, industrial, and commercial, are color-coded. Refer to the [Map legend](../map-legend/index.md) for details. | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Displays illuminated and non-illuminated streets, as well as underground and temporarily illuminated ways. Check the [Map legend](../map-legend/index.md) for specifics. | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Designed for mappers, this feature shows references, remarks, and comments from other users on the map. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Shows sea depth contours. You need to install the [Nautical plugin](../plugins/nautical-charts) and download Nautical maps.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Highlights protected areas with a green border and "NR" label for wildlife conservation zones.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|  
-->

### Itinéraires {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Itinéraires carte - pistes cyclables](@site/static/img/map/map-routes-cycle-routes.png)  ![Itinéraires carte - réseau de randonnée](@site/static/img/map/map-routes-hiking-network.png)

Un itinéraire est un chemin prédéterminé qui doit être suivi pour atteindre une destination spécifique. Un itinéraire peut être optimisé pour différents types de déplacement, tels que le cyclisme, la randonnée, la course à pied, les transports en commun, et autres. Vous pouvez en savoir plus sur les itinéraires et leurs types dans l'[article Itinéraires](../map/routes.md).


### Transports {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>  

Lors de la navigation en ville, vous avez besoin d'une vue plus contrastée des transports en commun et des arrêts. Vous pouvez appuyer sur un arrêt de transport en commun et sélectionner l'un des itinéraires ou arrêts de la liste. Les itinéraires de train sont également affichés dans ce paramètre.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Affiche les arrêts de transport en commun.  
    ![Arrêts de transport sur la carte](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Affiche les itinéraires de bus, de trolleybus et de navette.  
    ![Bus de transport sur la carte](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Affiche les itinéraires de tramway et de train.  
    ![Tram de transport sur la carte](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Affiche les itinéraires souterrains.  
    ![Métro de transport sur la carte](@site/static/img/map/map-transport-subway.png)

### Masquer {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

Pour améliorer la visibilité de la carte, vous pourriez avoir besoin de masquer certains objets. Par exemple, vous pouvez masquer l'eau lorsque vous utilisez les [cartes en ligne Satellite avec la couche de sous-couche](../map/raster-maps.md#select-raster-maps).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Masque les frontières régionales à l'intérieur des pays, mais les frontières des États restent visibles.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Masque tous les polygones d'objets naturels, fonction spéciale pour la [couche de sous-couche/sur-couche](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Masque tous les polygones de bâtiments.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Masque tous les polygones d'eau (mers, lacs, réservoirs, etc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Masque les numéros de maison sur la carte.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Masque les objets proposés - ces objets dont la construction est prévue mais qui n'ont qu'un projet (routes projetées, intersections, bâtiments, et autres).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Masque les icônes de POI de la carte. Cependant, les étiquettes de ces POI apparaîtront toujours sur la carte.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Masque les étiquettes de POI de la carte. Cependant, les icônes de POI apparaîtront toujours sur la carte.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Masque tous les objets souterrains, comme les tunnels, les passages, les étages, etc. Spécial pour nettoyer les cartes des villes des objets inutiles.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Masque tous les objets en surface. Spécial pour ne voir que les objets souterrains comme les tunnels, les passages, etc.

### Style de route {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Paramètres spéciaux pour les routes, où vous pouvez changer les couleurs pour correspondre à l'atlas routier ou ajouter des routes à contraste élevé ou des contours gras pour les routes.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Style par défaut pour les autoroutes. Regardez la [Légende de la carte](../map-legend/index.md).  
![Style de route par défaut](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Style de l'atlas routier allemand.  
![Style de route allemand](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Style de l'atlas routier américain.  
![Style de route américain](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. Le contraste élevé des routes.  
![Style de route à contraste élevé](@site/static/img/map/map-road-style-high-contrast.png)
- **Pâle**. Couleurs moins contrastées des routes.  
![Style de route contour gras](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Contour gras pour les routes.  
![Style de route contour gras](@site/static/img/map/map-road-style-bold-outline.png)


### Taille du texte {#text-size}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>  

- **100%**  
    ![Taille du texte de la carte 100%](@site/static/img/map/map-text-size-100.png)

- **200%**  
    ![Taille du texte de la carte 200%](@site/static/img/map/map-text-size-200.png)


### Loupe de carte {#map-magnifier}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vous pouvez choisir ce paramètre par un appui long sur le bouton "+" ou "-" à l'écran ou :  
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Vous pouvez choisir ce paramètre par un appui long sur le bouton "+" ou "-" à l'écran ou :  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Ce paramètre aide à changer le grossissement de la carte. Il est applicable pour les cartes raster et vectorielles. Pour les cartes raster, il applique un effet de grossissement, de sorte que les étiquettes de texte semblent plus grandes ou plus petites. Pour les cartes vectorielles, il rend la carte plus ou moins détaillée ; si vous le réglez sur une valeur basse, la carte semblera chargée/lente.  

- **75%**  
    ![Loupe de carte 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**  
    ![Loupe de carte 200%](@site/static/img/map/map-magnifier-200.png)


### Langue de la carte {#map-language}

L'option **Langue de la carte** configure l'orthographe des noms sur la carte OsmAnd pour les niveaux de zoom de 7 à 20 inclus. Pour les niveaux de zoom de 2 à 6, les noms sont affichés dans la langue définie pour OsmAnd dans le menu des paramètres système (voir la section *[Comment changer la langue de l'application](../start-with/first-steps.md#how-to-change-app-language)*).  

Si les noms sur la carte ne sont pas traduits dans la langue requise par la communauté OSM, vous pouvez utiliser des [noms translittérés](https://fr.wikipedia.org/wiki/Translitt%C3%A9ration) : le sélecteur *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) ou *<Translate ios="true" ids="translit_names"/>* (iOS).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

- **Noms locaux**  
    ![Langue de la carte noms locaux](@site/static/img/map/map-language-local-names_2.png)

- **Langue préférée** (ukrainien)
    ![Langue de la carte ukrainien](@site/static/img/map/map-language-urkanian_2.png)

- **Utiliser le nom latin si manquant**  
    ![Langue de la carte translittération](@site/static/img/map/map-language-transliterate_2.png)


</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

- **Noms locaux**  
    ![Langue de la carte noms locaux](@site/static/img/map/map-language-local-names_2.png)

- **Langue préférée** (ukrainien)
    ![Langue de la carte ukrainien](@site/static/img/map/map-language-urkanian_2.png)

- **Afficher les noms locaux** (ajoute une 2ème étiquette si le nom local est différent)
    ![Langue de la carte local](@site/static/img/map/map-language-show-local_2.png)

- **Translittérer les noms**  
    ![Langue de la carte translittération](@site/static/img/map/map-language-transliterate_2.png)



</TabItem>

</Tabs>  



## Style de carte personnalisé {#custom-map-style}

Si vous avez un style de carte personnalisé, personnel ou tiers, créé selon la [Spécification](../../technical/osmand-file-formats/osmand-rendering-style.md), vous pouvez l'installer sur votre appareil de ces manières :

- Copiez le fichier `.render.xml` sur votre appareil et ouvrez-le avec OsmAnd.
- Utilisez les [dialogues standard d'import/export](../personal/import-export.md) pour exporter ou importer des styles de rendu. Si vous créez un paquet `.osf`, il fonctionne comme un plugin que vous pouvez partager avec d'autres.
- Après l'installation, vous pouvez sélectionner le style de carte depuis le menu.


## Articles connexes {#related-articles}

- [Importer / Exporter](../personal/import-export.md)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)