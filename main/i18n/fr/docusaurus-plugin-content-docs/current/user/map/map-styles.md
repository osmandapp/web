---
source-hash: 887e37d512e29933bbd3ee7af217024887ffcc5ac636c9ddc52e7480299a8d1b
sidebar_position: 6
title:  Map Styles (Vector Maps)
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

Les styles de carte définissent la façon dont les données de carte vectorielle sont rendues dans OsmAnd. Un style contrôle l'apparence visuelle des objets de carte tels que les routes, les bâtiments, l'utilisation des sols, l'eau et les points d'intérêt, y compris les couleurs, les motifs de lignes et les étiquettes.

OsmAnd fournit plusieurs styles intégrés optimisés pour différentes activités. Vous pouvez changer de style dans le [menu Configurer la carte](./configure-map-menu.md) et ajuster les paramètres du style. Les styles de carte vectorielle prennent en charge le passage entre les modes jour et nuit.

En plus des styles intégrés, OsmAnd prend en charge les styles de carte personnalisés. Les styles personnalisés sont basés sur des règles de rendu et peuvent être importés, partagés et modifiés pour mettre en évidence les informations dont vous avez besoin.


## Styles de Carte par Défaut {#default-map-styles}

OsmAnd vous propose de nombreux styles de carte et couches de données qui s'adaptent par défaut. Cette section décrit les principaux pour les modes jour et nuit.

**Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

**iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*

### OsmAnd {#osmand}

![Style de carte OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)  

Le style de rendu de carte standard d'OsmAnd équilibre le détail et la simplicité, ce qui le rend idéal pour l'exploration urbaine et en plein air. Il détaille les éléments de la ville tels que les rues, les bâtiments et les arrêts de transport tout en simplifiant le désordre visuel en rendant les cartes plus claires.  

Les principaux avantages incluent la cartographie des itinéraires, la qualité de la surface, les restrictions d'accès, la signalisation routière, les rendus de chemins à l'échelle SAC, les installations sportives et les détails topographiques tels que les courbes de niveau.

### Vue Touristique {#touring-view}

![Style de carte Vue Touristique](@site/static/img/map/map-style-touring.png)

Style touristique avec un fort contraste et un maximum de détails. Inclut toutes les options du style OsmAnd par défaut tout en affichant autant de détails que possible, en particulier les routes, les chemins et les autres voies de déplacement. Distinction claire des types de routes dans un *atlas touristique*. Convient pour le jour, la nuit et l'utilisation en extérieur.

### UniRS et LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Les styles UniRS et LightRS sont des styles d'auteur qui rendent les informations de base de la carte mais avec des schémas de couleurs différents.  

- **Style UniRS**. Ce style est une version modifiée du style par défaut pour améliorer le contraste des chemins piétons et cyclables. Il conserve le schéma de couleurs classique Mapnik.  

    ![Style de carte LightRS](@site/static/img/map/map-style-lightrs.png)

- **Style LightRS**. Il s'agit d'un style de conduite simple qui présente un mode nuit doux. Il met en évidence les routes dans une couleur orange contrastée, atténue les objets de carte secondaires et affiche les caractéristiques topographiques comme les courbes de niveau.

    ![Style de carte UniRS](@site/static/img/map/map-style-unirs.png)

### Nautique {#nautical}

![Style de carte Nautique](@site/static/img/map/map-style-nautical.png)

Il s'agit d'un style de navigation nautique présentant des bouées, des phares, des itinéraires fluviaux, des voies maritimes, des marques, des ports et des marques nautiques. En savoir plus dans la section [Style de Carte Nautique](../plugins/nautical-charts.md#nautical-map-style).

### Marine {#marine}

![Style de carte Marine](@site/static/img/map/map-style-marine.png)

Il s'agit d'un style de carte nautique avancé avec des secteurs lumineux, les caractéristiques complètes des phares et d'autres fonctionnalités maritimes détaillées pour une navigation marine réaliste et précise. Pour plus de détails, lisez la section [Style de Carte Marine](../plugins/nautical-charts.md#marine-map-style).

### Hiver et Ski {#winter-and-ski}

![Style de carte Hiver & Ski](@site/static/img/map/map-style-winter-ski.png)

Il s'agit d'un style pour les sports de ski qui décrit les pistes, les remontées mécaniques et les pistes de ski de fond, tout en masquant les objets de carte secondaires. Le style **Hiver et Ski** est conçu pour vous aider dans la navigation en sports d'hiver.  

Vous pouvez voir les pentes de ski et d'autres détails tels que la difficulté des pentes et les marqueurs des remontées mécaniques. Les principaux avantages incluent l'affichage pratique des pentes, des remontées mécaniques et d'autres fonctionnalités de ski. Moins d'objets secondaires distrayants sur la carte. En savoir plus dans l'article [Cartes de Ski](../plugins/ski-maps.md).

### Topo {#topo}

![Style de carte Topo](@site/static/img/map/map-style-topo.png)

Ce style est conçu pour la randonnée, le camping et le cyclisme en nature. Il présente des routes et des caractéristiques naturelles contrastées, différents types de sentiers, des options étendues pour les courbes de niveau et des détails supplémentaires. Il est lisible en extérieur. Le paramètre *Intégrité de la Surface* vous permet de distinguer la qualité de la route.

### OSM-carto {#osm-carto}

![Style de carte OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Ce style imite le style web par défaut [OpenStreetMap](https://www.openstreetmap.org/). Le code source de la version web est disponible sur [Github](https://github.com/gravitystorm/openstreetmap-carto), le code OsmAnd est disponible sur [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Désert {#desert}

![Style de carte Désert](@site/static/img/map/map-style-desert.png)

Conçu pour les déserts et d'autres régions peu peuplées, offrant des informations de carte plus détaillées.

### Tout-Terrain {#offroad}

![Style de carte Tout-Terrain](@site/static/img/map/map-style-offroad.png)

Conçu pour la navigation tout-terrain, ce style est basé sur la mise en page de la carte [Topo](#topo) et fonctionne bien avec des images satellite en arrière-plan. Il présente des routes principales plus fines pour mettre en évidence les chemins, les pistes, les itinéraires cyclables et d'autres sentiers tout-terrain, ce qui le rend idéal pour explorer des itinéraires non pavés en zones rurales ou reculées.

### Motoneige {#snowmobile}

![Style de carte Motoneige](@site/static/img/map/map-style-snowmobile.png)

Adapté à la navigation en motoneige, ce style met en évidence les chemins, routes et pistes adaptés à la motoneige. Il met en évidence les chemins spécialisés dans les régions enneigées, offrant une navigation claire à travers les terrains couverts de neige où les routes standard ne sont peut-être pas disponibles. 


## Style de Carte Personnalisé {#custom-map-style}

Si vous avez un style de carte personnalisé personnel ou tiers créé selon la [Spécification](../../technical/osmand-file-formats/osmand-rendering-style.md), vous pouvez l'installer sur votre appareil de ces façons :

- Copiez le fichier `.render.xml` sur votre appareil et ouvrez-le avec OsmAnd.
- Utilisez les [dialogues d'import/export standard](../personal/import-export.md) pour exporter ou importer des styles de rendu. Si vous créez un package `.osf`, il fonctionne comme un plugin que vous pouvez partager avec d'autres.
- Après l'installation, vous pouvez sélectionner le style de carte dans le menu.

Vous pouvez également parcourir des exemples de styles de carte personnalisés créés par d'autres utilisateurs. Une liste de styles communautaires disponibles publiquement est fournie [ici](../troubleshooting/resources.md#map-styles).


## Articles Connexes {#related-articles}

- [Configurer la Carte](../map/configure-map-menu.md)
- [Cartes Vectorielles](../map/vector-maps.md)
- [Ressources et Personnalisations](../troubleshooting/resources.md)