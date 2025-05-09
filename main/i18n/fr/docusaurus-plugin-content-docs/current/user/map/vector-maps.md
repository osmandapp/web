---
source-hash: 5c47f8fb67af3f300af7379bf71504b7d6161a2a5376edebccce9e6b8f68e233 
sidebar_position: 5
title: Cartes vectorielles (Styles de carte)
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


## Aperçu

Les cartes vectorielles sont destinées à être utilisées comme source de données cartographiques par défaut pour OsmAnd, vous devez donc les télécharger sur votre appareil. Les cartes vectorielles prennent en charge un grand nombre de styles de carte pour différentes activités telles que le cyclisme, la randonnée, la conduite en voiture ou en motoneige, et autres.

Chaque style de carte peut être personnalisé pour mettre en évidence ou masquer des objets spécifiques, et pour basculer entre les modes jour et nuit. Les données de carte vectorielle peuvent être augmentées par des données vectorielles et affichées dans le style de carte par défaut, telles que les informations de *lignes de contour*. Vous pouvez *créer votre propre style de carte OsmAnd* pour afficher les informations requises.


## Cas d'utilisation

Les styles de carte personnalisables sont l'un des principaux avantages d'OsmAnd. Vous pouvez personnaliser l'affichage de la carte en fonction de vos préférences et de vos loisirs, ajuster l'affichage ou le masquage de certains objets cartographiques, la taille et la couleur de ces objets, et modifier l'échelle d'affichage de certains objets.


## Styles de carte par défaut

OsmAnd vous propose de nombreux styles de carte et couches de données qui s'adaptent par défaut. Cette section décrit les principaux pour les modes jour et nuit.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd

![OsmAnd map style](@site/static/img/map/map-style-osmand-with-routes.png)

Le style de rendu de carte standard d'OsmAnd équilibre les détails et la simplicité, ce qui le rend idéal pour l'exploration urbaine et extérieure. Il détaille les caractéristiques de la ville telles que les rues, les bâtiments et les arrêts de transport tout en simplifiant l'encombrement visuel en rendant les cartes plus claires.

Les principaux avantages comprennent la cartographie des itinéraires, la qualité de la surface, les restrictions d'accès, la signalisation routière, le rendu des chemins à l'échelle SAC, les installations sportives et les détails topographiques tels que les courbes de niveau.


### Vue Touring

![Touring view map style](@site/static/img/map/map-style-touring.png)

Style Touring avec un contraste élevé et un maximum de détails. Comprend toutes les options du style OsmAnd par défaut tout en affichant autant de détails que possible, en particulier les routes, les chemins et autres voies de déplacement. Distinction claire des types de routes dans un *atlas de tourisme*. Convient pour une utilisation de jour, de nuit et en extérieur.

### UniRS et LightRS

<Translate android="true" ids="unirs_render_descr"/>

Les styles UniRS et LightRS sont des styles d'auteur qui rendent les informations cartographiques de base mais dans des schémas de couleurs différents.

- **Style UniRS**. Ce style est une version modifiée du style par défaut pour améliorer le contraste des chemins piétonniers et cyclables. Il conserve le schéma de couleurs classique de Mapnik.

    ![LightRS map style](@site/static/img/map/map-style-lightrs.png)

- **Style LightRS**. Il s'agit d'un style de conduite simple qui présente un mode nuit doux. Il met en évidence les routes dans une couleur orange contrastante, atténue les objets cartographiques secondaires et affiche les caractéristiques topographiques comme les courbes de niveau.

    ![UniRS map style](@site/static/img/map/map-style-unirs.png)

### Nautique

![Nautical map style](@site/static/img/map/map-style-nautical.png)

Il s'agit d'un style de navigation nautique présentant des bouées, des phares, des routes fluviales, des voies maritimes, des marques, des ports, des marques nautiques et des courbes de profondeur. En savoir plus dans l'article [Vue de carte nautique](../plugins/nautical-charts.md).

### Hiver et Ski

![Winter & Ski map style](@site/static/img/map/map-style-winter-ski.png)

Il s'agit d'un style pour les sports de ski qui décrit les pistes, les remontées mécaniques et les pistes de ski de fond, ainsi que l'obscurcissement des objets cartographiques secondaires. Le **style Hiver et Ski** est conçu pour vous aider dans la navigation des sports d'hiver.

Vous pouvez voir les pistes de ski et d'autres détails tels que la difficulté des pistes et les marqueurs de remontées mécaniques. Les principaux avantages comprennent l'affichage pratique des pistes, des remontées mécaniques et d'autres caractéristiques de ski. Moins d'objets secondaires distrayants de la carte. En savoir plus dans l'article [Cartes de ski](../plugins/ski-maps.md).

### Topo

![Topo map style](@site/static/img/map/map-style-topo.png)

Ce style est conçu pour la randonnée, le camping et le cyclisme dans la nature. Il présente des routes et des caractéristiques naturelles contrastées, différents types de sentiers, des options de courbes de niveau étendues et des détails supplémentaires. Il est lisible en extérieur. Le paramètre *Intégrité de la surface* vous permet de distinguer la qualité de la route.

### OSM-carto

![OSM-carto map style](@site/static/img/map/map-style-osm-carto.png)

Ce style imite le [style web OpenStreetMap](https://www.openstreetmap.org/) par défaut. Le code source de la version web est disponible sur [Github](https://github.com/gravitystorm/openstreetmap-carto), le code OsmAnd est disponible sur [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Désert

![Desert map style](@site/static/img/map/map-style-desert.png)

Conçu pour les déserts et autres régions peu peuplées, offrant des informations cartographiques plus détaillées.

### Tout-terrain

![Offroad map style](@site/static/img/map/map-style-offroad.png)

Conçu pour la navigation tout-terrain, ce style est basé sur la mise en page de la carte [Topo](#topo) et fonctionne bien avec les images satellite en sous-couche. Il présente des routes principales plus fines pour mettre en évidence les chemins, les pistes, les pistes cyclables et autres sentiers tout-terrain, ce qui le rend idéal pour explorer les routes non pavées dans les zones rurales ou isolées.

### Motoneige

![Snowmobile map style](@site/static/img/map/map-style-snowmobile.png)

Adapté à la navigation en motoneige, ce style met en évidence les chemins, les routes et les pistes adaptés aux motoneiges. Il met en évidence les chemins spécialisés dans les régions enneigées, offrant une navigation claire sur les terrains enneigés où les routes standard peuvent ne pas être disponibles.


## Légende de la carte

La légende de la carte sert de clé pour comprendre les symboles utilisés dans les cartes OsmAnd. Elle explique la signification des différents symboles cartographiques, y compris les points, les lignes et les zones. Par exemple, des symboles comme des lignes sinueuses bleues indiquent des rivières, tandis que différentes couleurs et formes peuvent représenter des bâtiments, des chemins et des itinéraires.

La légende aide les utilisateurs à interpréter ce qu'ils voient sur la carte. Vous pouvez accéder à la légende complète de la carte OsmAnd [ici](../map-legend/index.md).


## Polices de carte (Android)

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*

![Map fonts Android version](@site/static/img/map/map_fonts.png) ![Map fonts version](@site/static/img/map/map_fonts_1.png)

Pour les cartes en chinois simplifié/traditionnel, japonais et coréen, des caractères ou symboles incorrects (comme des carrés) peuvent apparaître si votre appareil ne dispose pas des polices nécessaires. Ce problème survient lors du rendu des noms locaux et peut être résolu en téléchargeant les polices requises via OsmAnd.

Certains problèmes de police connexes ont été documentés sur GitHub : [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Courbes de niveau

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Contour lines map style](@site/static/img/map/contour_lines.png)

Les courbes de niveau dans OsmAnd sont affichées comme des lignes d'élévation sur les cartes vectorielles. Pour les utiliser, vous devez d'abord activer le [plugin Topographie](../plugins/topography.md), télécharger les données régionales nécessaires et configurer l'affichage. Cette fonctionnalité n'est pas activée par défaut et nécessite un [achat](../purchases/index.md).

Les courbes de niveau sont compatibles avec tous les styles de carte et peuvent être personnalisées via le [menu Courbes de niveau](../plugins/topography.md#contour-lines). Pour plus de détails, consultez l'article [plugin Topographie](../plugins/topography.md).


## * Profondeur nautique

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Les courbes de profondeur nautique représentent des zones d'égale profondeur, aidant à visualiser les changements de topographie sous-marine. Cette fonctionnalité est disponible dans tous les styles et modes de carte et peut être ajustée avec ou sans le plugin Vue de carte nautique activé.

Pour plus de détails sur la vue de carte nautique, consultez la page du [plugin Carte nautique](../plugins/nautical-charts).


## Afficher les frontières

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Cette fonctionnalité vous permet d'activer ou de désactiver la visibilité des frontières des cartes précédemment téléchargées à partir de la liste des cartes disponibles. Son objectif principal est d'aider à désencombrer la carte principale en masquant les contours des cartes téléchargées, ce qui est particulièrement utile si vous avez de nombreuses cartes installées.

Par défaut, les frontières des cartes apparaissent lorsque vous zoomez au niveau 7 et disparaissent au niveau de zoom 3 et en dessous.

:::tip Couleur Afficher les frontières des cartes téléchargées
Lorsque la fonctionnalité *Afficher les frontières des cartes téléchargées* est activée, les cartes téléchargées sont colorées en **Vert** dans les versions Android et iOS d'OsmAnd.

Sur Android, les cartes archivées sont affichées en **Orange**. Sur iOS, les cartes qui peuvent être mises à jour sont également marquées en **Orange**.
:::


## Grille de coordonnées

<InfoAndroidOnly />

Aller à : *Android* *Menu → Configurer la carte → Afficher → Grille de coordonnées*

![Coordinates grid menu](@site/static/img/map/coordinates_grid_settings_andr.png)

La fonctionnalité **Grille de coordonnées** superpose une grille de référence sur la carte, vous permettant de visualiser les lignes de latitude et de longitude basées sur différents systèmes de coordonnées. Cette fonctionnalité est utile pour une référence de localisation précise et une navigation géospatiale.

***Formats de coordonnées disponibles :***

- **DD°MM′SS″** (Degrés, Minutes, Secondes)
- **DD.DDDDD°** (Degrés décimaux - format par défaut WGS84)
- **DD°MM.MMM′** (Degrés, Minutes décimales)
- **MGRS** (Military Grid Reference System)
- **UTM** (Universal Transverse Mercator - système de grille basé sur les zones)

:::note

1. *Limitations de la grille UTM :*
    - Le niveau de zoom minimum pour afficher la grille UTM est 9.
    - Une seule zone UTM est affichée à la fois, car les zones sont séparées par des méridiens tous les 6°.

2. *La grille WGS84 prend en charge trois modes différents :* degrés décimaux, degrés+minutes et degrés+minutes+secondes.

:::

***Systèmes de coordonnées pris en charge :***

OsmAnd prend en charge plusieurs **projections de base** pour afficher les lignes de grille géographique :

| **Projection** | **Code EPSG** | **Description** |
|----------------|-------------|----------------|
| **WGS84**      | EPSG:4326   | Système de référence latitude/longitude par défaut, utilisé mondialement. |
| **Mercator**   | EPSG:3857   | Utilisé pour la cartographie web (Google Maps, OpenStreetMap, etc.). |
| **UTM**        | EPSG:6387   | Divise le monde en **60 zones** pour un positionnement local précis. |
| **MGRS**       | -           | Military Grid Reference System (extension de l'UTM). |



***Paramètres de niveau de zoom :***

- Les lignes de grille apparaissent en fonction du niveau de zoom, entre **2 et 22**.
- Les lignes ajustent dynamiquement les divisions de coordonnées en fonction du niveau de zoom.

**Par défaut, l'application utilise le format de coordonnées sélectionné dans** [Paramètres généraux](../personal/profiles.md#units--formats).


## Configurer le style de carte

### Mode carte

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*

![Map Mode](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Map Mode](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

La carte peut être affichée dans un thème clair ou sombre en fonction du mode sélectionné dans une liste d'options. Par défaut et pour tous les nouveaux utilisateurs, le [style de carte](#default-map-styles) s'aligne sur le thème choisi dans les paramètres système de votre appareil.

- **<Translate android="true" ids="daynight_mode_day"/>**. Affiche toujours la carte dans un thème clair pour une visibilité optimale de jour.

- **<Translate android="true" ids="daynight_mode_night"/>**. Affiche toujours la carte dans un thème sombre, idéal pour la nuit ou les conditions de faible luminosité.

- **Lever / Coucher du soleil**. Passe automatiquement entre les thèmes jour et nuit en fonction des heures locales de lever et de coucher du soleil, qui sont détaillées dans cet onglet de l'application.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Android uniquement*). Utilise le capteur de lumière de l'appareil pour basculer automatiquement entre les thèmes clair et sombre en fonction des niveaux de lumière ambiante.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. L'affichage de la carte s'adapte au thème général de l'application, affichant le mode jour dans le thème clair et le mode nuit dans le thème sombre.


### Détails

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">


*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Affiche les polygones, les sentiers, les points et les panneaux sur la carte à faible zoom. Cela signifie que vous pouvez voir plus de détails sur la carte à faible grossissement. Notez que le rendu sur votre appareil peut ne pas être rapide.
    ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Affiche le type de revêtement routier. La couleur de la route vous aide à comprendre quel est le revêtement routier, comme l'asphalte, l'herbe ou le sable. Voir la [Légende de la carte](../map-legend/index.md).
    ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Indique la qualité de la route. Indique la douceur (pente) de la route. À quel point vos routes sont lisses : bonnes, mauvaises, peut-être terribles, etc. Consultez la [Légende de la carte](../map-legend/index.md) pour déterminer la douceur de votre route.
    ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. Affiche l'accessibilité de la route : privée ou autorisée, réservée aux urgences ou route à péage. Consultez la [Légende de la carte](../map-legend/index.md) pour trouver les routes disponibles.
    ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. La fonctionnalité [Zones à faibles émissions (ZFE)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) affiche des bordures vertes et des étiquettes "ZFE" sur les cartes pour les zones des villes où l'accès est restreint pour certains véhicules polluants. Les ZFE visent à améliorer la qualité de l'air en limitant l'entrée aux véhicules qui respectent des normes d'émissions spécifiques. L'utilisation de cette fonctionnalité aide les utilisateurs à éviter les pénalités en identifiant et en naviguant autour de ces zones vertes, garantissant ainsi la conformité avec les réglementations environnementales locales lors des déplacements dans les centres-villes.

    ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Différentes catégories de bâtiments, telles que résidentiels, industriels et commerciaux, sont codées par couleur. Reportez-vous à la [Légende de la carte](../map-legend/index.md) pour plus de détails.
    ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Affiche les rues éclairées et non éclairées, ainsi que les voies souterraines et temporairement éclairées. Consultez la [Légende de la carte](../map-legend/index.md) pour plus de détails.
    ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Conçue pour les cartographes, cette fonctionnalité affiche les références, les remarques et les commentaires d'autres utilisateurs sur la carte.
    ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Affiche les courbes de profondeur marine. Vous devez installer le [plugin Nautique](../plugins/nautical-charts) et télécharger les cartes nautiques.
    ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Affiche les bordures vertes et les étiquettes "NR" pour les [territoires de réserve naturelle](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Met en évidence les zones protégées avec une bordure verte et l'étiquette "NR" pour les zones de conservation de la faune.

    &nbsp;&nbsp;&nbsp;![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Affiche les polygones, les sentiers, les points et les panneaux sur la carte à faible zoom. Cela signifie que vous pouvez voir plus de détails sur la carte à faible grossissement. Notez que le rendu sur votre appareil peut ne pas être rapide.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Affiche le type de revêtement routier. La couleur de la route vous aide à comprendre quel est le revêtement routier, comme l'asphalte, l'herbe ou le sable. Voir la [Légende de la carte](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indique la qualité de la route. Indique la douceur (pente) de la route. À quel point vos routes sont lisses : bonnes, mauvaises, peut-être terribles, etc. Consultez la [Légende de la carte](../map-legend/index.md) pour déterminer la douceur de votre route.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Affiche l'accessibilité de la route : privée ou autorisée, réservée aux urgences ou route à péage. Consultez la [Légende de la carte](../map-legend/index.md) pour trouver les routes disponibles. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | La fonctionnalité [Zones à faibles émissions (ZFE)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) affiche des bordures vertes et des étiquettes "ZFE" sur les cartes pour les zones des villes où l'accès est restreint pour certains véhicules polluants. Les ZFE visent à améliorer la qualité de l'air en limitant l'entrée aux véhicules qui respectent des normes d'émissions spécifiques. L'utilisation de cette fonctionnalité aide les utilisateurs à éviter les pénalités en identifiant et en naviguant autour de ces zones vertes, garantissant ainsi la conformité avec les réglementations environnementales locales lors des déplacements dans les centres-villes.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Différentes catégories de bâtiments, telles que résidentiels, industriels et commerciaux, sont codées par couleur. Reportez-vous à la [Légende de la carte](../map-legend/index.md) pour plus de détails. | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Affiche les rues éclairées et non éclairées, ainsi que les voies souterraines et temporairement éclairées. Consultez la [Légende de la carte](../map-legend/index.md) pour plus de détails. | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Conçue pour les cartographes, cette fonctionnalité affiche les références, les remarques et les commentaires d'autres utilisateurs sur la carte. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Affiche les courbes de profondeur marine. Vous devez installer le [plugin Nautique](../plugins/nautical-charts) et télécharger les cartes nautiques.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Affiche les bordures vertes et les étiquettes "NR" pour les [territoires de réserve naturelle](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Met en évidence les zones protégées avec une bordure verte et l'étiquette "NR" pour les zones de conservation de la faune.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|
-->

### Itinéraires

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png) ![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

Un itinéraire est un chemin prédéterminé qui doit être suivi pour atteindre une destination spécifique. Un itinéraire peut être optimisé pour différents types de déplacements, tels que le cyclisme, la randonnée, la course à pied, les transports en commun, etc. Vous pouvez en savoir plus sur les itinéraires et leurs types dans l'article [Itinéraires](../map/routes.md).


### Transport

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>

Lorsque vous naviguez dans les villes, vous avez besoin d'une vue plus contrastée des transports en commun et des arrêts. Vous pouvez appuyer sur un arrêt de transport en commun et sélectionner l'un des itinéraires ou arrêts dans la liste. Les itinéraires de train sont également affichés dans ce paramètre.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Affiche les arrêts de transport en commun.
    ![Map transport stops](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Affiche les itinéraires de bus, de trolleybus et de navette.
    ![Map transport bus](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Affiche les itinéraires de tramway et de train.
    ![Map transport tram](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Affiche les itinéraires souterrains.
    ![Map transport subway](@site/static/img/map/map-transport-subway.png)

### Masquer

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>

Pour améliorer la visibilité de la carte, vous pourriez avoir besoin de masquer certains objets. Par exemple, vous pouvez masquer l'eau lorsque vous utilisez les [cartes en ligne satellite avec la couche de sous-couche](../map/raster-maps.md#select-map-as-main--underlay--overlay-layer).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Masque les frontières régionales à l'intérieur des pays, mais les frontières des États sont visibles.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Masque tous les polygones d'objets naturels, fonction spéciale pour la [couche de sous-couche/superposition](../map/raster-maps.md#change-layer-parameters-transparency).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Masque tous les polygones de bâtiments.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Masque tous les polygones d'eau (mers, lacs, réservoirs, etc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Masque les numéros de maison sur la carte.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Masque les objets proposés - ces objets dont la construction est prévue mais qui n'ont qu'un projet (routes projetées, intersections, bâtiments, etc.).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Masque les icônes des POI sur la carte. Cependant, les étiquettes de ces POI apparaîtront toujours sur la carte.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Masque les étiquettes des POI sur la carte. Cependant, les icônes des POI apparaîtront toujours sur la carte.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Masque tous les objets souterrains, comme les tunnels, les passages, les étages, etc. Spécial pour nettoyer les cartes des villes des objets non utiles.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Masque tous les objets en surface. Spécial pour ne voir que les objets souterrains comme les tunnels, les passages, etc.

### Style de route

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Paramètres spéciaux pour les routes, où vous pouvez changer les couleurs pour correspondre à l'atlas routier ou ajouter des routes à contraste élevé ou des contours gras pour les routes.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Style par défaut pour les autoroutes. Consultez la [Légende de la carte](../map-legend/index.md).
![Map road style default](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Style de l'atlas routier allemand.
![Map road style german](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Style de l'atlas routier américain.
![Map road style american](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. Contraste élevé des routes.
![Map road style high contrast](@site/static/img/map/map-road-style-high-contrast.png)
- **Pâle**. Couleurs moins contrastées des routes.
![Map road style bold outline](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Contour gras pour les routes.
![Map road style bold outline](@site/static/img/map/map-road-style-bold-outline.png)


### Taille du texte

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>

- **100%**
    ![Map text size 100%](@site/static/img/map/map-text-size-100.png)

- **200%**
    ![Map text size 200%](@site/static/img/map/map-text-size-200.png)


### Loupe de carte

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vous pouvez choisir ce paramètre en appuyant longuement sur le bouton "+" ou "-" à l'écran ou :
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vous pouvez choisir ce paramètre en appuyant longuement sur le bouton "+" ou "-" à l'écran ou :
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Ce paramètre permet de modifier le grossissement de la carte. Il est applicable aux cartes raster et vectorielles. Pour les cartes raster, il applique un effet de grossissement, de sorte que les étiquettes de texte apparaissent plus grandes ou plus petites. Pour les cartes vectorielles, il rend la carte plus ou moins détaillée ; si vous le réglez sur une faible valeur, la carte semblera bruyante/lente.

- **75%**
    ![Map magnifier 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**
    ![Map magnifier 200%](@site/static/img/map/map-magnifier-200.png)


### Langue de la carte

L'option **Langue de la carte** configure l'orthographe des noms sur la carte OsmAnd pour les niveaux de zoom 7 à 20 inclus. Pour les niveaux de zoom 2 à 6, les noms sont affichés dans la langue définie pour OsmAnd dans le menu des paramètres système (voir la section *[Comment changer la langue de l'application](../start-with/first-steps.md#how-to-change-app-language)*).

Si les noms sur la carte ne sont pas traduits dans la langue requise par la communauté OSM, vous pouvez utiliser les [noms translittérés](https://en.wikipedia.org/wiki/Transliteration) : *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) ou *<Translate ios="true" ids="translit_names"/>* (iOS).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

</TabItem>

</Tabs>

- **Noms locaux**
    ![Map language local names](@site/static/img/map/map-language-local-names_2.png)

- **Noms ukrainiens**
    ![Map language ukranian](@site/static/img/map/map-language-urkanian_2.png)

- **Afficher les noms locaux**
    ![Map language local](@site/static/img/map/map-language-show-local_2.png)

- **Translittérer les noms**
    ![Map language transliterate](@site/static/img/map/map-language-transliterate_2.png)


## Style de carte personnalisé

Si vous avez un style de carte personnalisé personnel ou tiers créé selon la [Spécification](../../technical/osmand-file-formats/osmand-rendering-style.md), vous pouvez l'installer sur votre appareil de ces manières :

- Copiez le fichier `.render.xml` sur votre appareil et ouvrez-le avec OsmAnd.
- Utilisez les [dialogues d'importation/exportation standard](../personal/import-export.md) pour exporter ou importer des styles de rendu. Si vous créez un package `.osf`, il fonctionne comme un plugin que vous pouvez partager avec d'autres.
- Après l'installation, vous pouvez sélectionner le style de carte dans le menu.


## Articles connexes

- [Importation / Exportation](../personal/import-export.md)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)

> *Cet article a été mis à jour pour la dernière fois en mars 2025*

