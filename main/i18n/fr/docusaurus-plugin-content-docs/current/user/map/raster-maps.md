---
source-hash: 18d6a31fa10f304cf5ed4712a573c452b11e151b3e929eabeedf23dd67ec220a
sidebar_position: 6
title:  Cartes raster (en ligne / hors ligne)
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

<InfoIncompleteArticle/>

## Aperçu {#overview}

Les cartes raster sont des ajouts significatifs et utiles aux cartes vectorielles d'OsmAnd. Elles vous permettent de combiner diverses sources de cartes avec des cartes vectorielles. Par exemple, les informations sur les collines et les pentes sont affichées sous forme de couche raster. Vous pouvez afficher une superposition de sentiers de randonnée, de cartes de pluie, de données de trafic en temps réel et une superposition d'images satellites sur une carte vectorielle de base translucide. Vous pouvez également basculer les cartes par défaut vers des tuiles raster sur le web.


## Cas d'utilisation {#use-cases}

Les cartes raster ont un large éventail d'utilisations. Voici quelques-unes des plus populaires :

- Images satellites en sous-couche.
- Informations sur le trafic en temps réel.
- Prévisions de pluie en superposition.
- Cartes topographiques avec ombrage des collines et des pentes.
- Itinéraires de cyclisme et de course actifs en superposition.
- Informations sur les navires en temps réel.
- Tuiles OpenStreetMap en ligne pour l'édition OSM.

![Aperçu des cartes en ligne](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
Vous pouvez également changer la source principale des cartes, passant des cartes vectorielles aux tuiles en ligne.
:::


## Cartes raster {#raster-maps}

Dans OsmAnd, les cartes en ligne sont composées de données raster, qui consistent en pixels (également appelés cellules de grille) - essentiellement un ensemble de petites images appelées tuiles. Contrairement aux cartes vectorielles, qui représentent des données comme des routes, des points et des polygones à l'aide d'informations binaires, les tuiles de carte raster sont disposées en grille et peuvent apparaître pixélisées à des niveaux de zoom élevés car chaque pixel a une valeur ou une classe fixe.

### Comparaison avec les cartes vectorielles par défaut {#comparison-to-default-vector-maps}

**Avantages :**

- Comme les cartes raster sont pré-rendues, elles se chargent plus rapidement, éliminant le besoin pour l'appareil de traiter et de rendre les données en temps réel.
- Les cartes raster peuvent être chargées dynamiquement pendant la navigation.
- Vous pouvez créer un cache hors ligne et ne télécharger que les tuiles manquantes au besoin.
- Vous pouvez utiliser un nombre illimité de sources web externes pour les cartes raster, ce qui le rend flexible pour différents types de cartes, comme les vues satellites ou les cartes spécialisées.
- Les données raster, telles que les informations sur le trafic, peuvent être mises à jour régulièrement après expiration (par exemple, toutes les 20-30 minutes, selon la configuration).

**Inconvénients :**

- Les cartes raster occupent beaucoup plus d'espace que les cartes vectorielles. Par exemple, une carte de ville peut faire 15 Mo en tant que carte vectorielle, mais passer à 50 Mo au niveau de zoom 15, 200 Mo au niveau de zoom 16, et jusqu'à 800 Mo au niveau de zoom 17.
- Vous ne pouvez pas appuyer sur des lieux ou des objets spécifiques sur les cartes raster pour obtenir plus d'informations.
- Les cartes raster ne peuvent pas être stylisées ou modifiées pour exclure des objets spécifiques.
- Un zoom trop important peut rendre l'image pixélisée, surtout si des tuiles à haute résolution ne sont pas disponibles.
- Il n'est pas possible de faire pivoter la carte sans faire pivoter le texte, ce qui peut rendre la lecture des étiquettes difficile.


## Comment utiliser les cartes raster {#how-to-use-raster-maps}

**Activer le plugin**.

- **iOS**. Pour *iOS*, cette fonctionnalité fonctionne par défaut.
- **Android**. Pour *Android*, pour utiliser les cartes raster dans OsmAnd, vous devez activer le [plugin Cartes en ligne](../plugins/online-map.md). Suivez ces étapes : *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Modifier les paramètres de la couche**. Pour améliorer la visibilité et le mélange des couches de carte raster, vous pouvez ajuster la transparence de la couche à l'aide du curseur à l'écran. De plus, vous pouvez modifier le style de la carte vectorielle en masquant les polygones, rendant les couches de sous-couche plus visibles. Ceci est particulièrement utile lors de la visualisation d'images satellites.


## Sélectionner des cartes raster {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Afficher les cartes](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Afficher les cartes](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>

Dans OsmAnd, les cartes raster peuvent servir de source de carte supplémentaire aux côtés des cartes vectorielles par défaut, qui sont optimisées pour une utilisation hors ligne.  

Vous avez la flexibilité d'ajouter une ou deux couches de tuiles en ligne pour compléter votre carte de base. Cela vous permet de visualiser jusqu'à trois couches de carte simultanément sur votre écran. Par exemple, vous pouvez avoir la carte vectorielle hors ligne d'OsmAnd comme base, la superposer avec une vue satellite, et placer une carte des pistes cyclables en sous-couche pour plus de détails.  

Vous pouvez également ajuster la transparence de la carte de base pour la mélanger avec vos couches. Si nécessaire, vous pouvez activer un curseur de transparence sur l'écran principal pour des ajustements rapides.


### Principale {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Afficher les cartes](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps"/>*  

![Afficher les cartes](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

Vous pouvez choisir un style de carte dans la liste ou [ajouter](#add-new-online-raster-map-source) le vôtre.


### Couche de sur-couche {#overlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Configurer sous-couche / sur-couche Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Configurer sous-couche / sur-couche iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

1. *Activer/désactiver* la carte de sur-couche.
2. *Transparence de la sur-couche* (*Android*) / *Transparence* de la carte de sur-couche (*iOS*).
3. *Afficher le curseur de transparence* (*Android*) / *Afficher le curseur sur la carte* (*iOS*). Accès rapide au réglage de la transparence.
4. *Source de la carte de sur-couche* (*Android*) / *Couches disponibles* (*iOS*). Vous pouvez choisir une carte de tuiles à installer ou à mettre à jour.
5. *Afficher les symboles de la carte* - tels que le texte, les panneaux de signalisation, et autres.  
6. *Ajouter une source en ligne* (*iOS*).
7. *Importer depuis des documents* (*iOS*).


### Couche de sous-couche {#underlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Configurer sous-couche / sur-couche Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configurer sous-couche / sur-couche iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

1. *Activer/désactiver* la carte de sous-couche.
2. *Transparence de la carte de base*.
3. *Afficher le curseur de transparence* (*Android*) / *Afficher le curseur sur la carte* (*iOS*). Accès rapide au réglage de la transparence.
4. *Source de la carte de sous-couche* (*Android*) / *Couches disponibles* (*iOS*). Vous pouvez choisir une carte de tuiles à installer ou à mettre à jour.
5. *Afficher/Masquer les polygones*.
6. *Ajouter une source en ligne* (*iOS*).
7. *Importer depuis des documents* (*iOS*).


## Ombrage du relief / Pente {#hillshade--slope}

![Couches de terrain](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Ombrage du relief** et **Pente** sont des cartes raster hors ligne qui montrent le relief du terrain. Elles sont affichées comme une couche de carte spéciale, une deuxième superposition sur la carte de base. Les cartes contiennent des informations d'altitude supplémentaires pour vous aider à comprendre plus précisément la pente et les ombres du paysage. Les informations d' *Ombrage du relief* et de *Pente* sont basées sur les données d'une seule source, le *Fichier global de la planète*, et sont divisées en régions.  

Vous n'avez pas besoin de basculer entre les couches Ombrage du relief et Pente, car elles sont fusionnées automatiquement. Vous pouvez sélectionner une seule de ces couches à afficher sur la carte, mais vous avez également la possibilité de les combiner toutes les deux [en sous-couche ou en sur-couche](#select-raster-maps) sur d'autres couches pour une représentation plus visuelle du terrain.

Pour commencer à utiliser l'Ombrage du relief et la Pente, vous devez :

1. Acheter le plugin Topographie :
    - [Achats Android](../purchases/android.md)
    - [Achats iOS](../purchases/ios.md)
2. Activer le [plugin Topographie](../plugins/topography.md) :  
    *Menu → Plugins → ︙ → Activer*
3. Sélectionnez votre région requise, et téléchargez la **Carte de terrain (3D)**.
4. Le processus de téléchargement peut prendre un certain temps, en fonction de la taille de la région sélectionnée et de la vitesse de votre connexion Internet.


### Ombrage du relief et Relief 3D {#hillshade-and-3d-relief}

| Ombrage du relief | Relief 3D |
|--------|---------|
| ![Couches de terrain](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Couches de terrain](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

La différence d'affichage du relief sur la carte lors de l'application de ces paramètres est décrite dans l'article **Topographie** dans la section correspondante [Ombrage du relief et Relief 3D](../plugins/topography.md#hillshade-and-3d-relief).


### Configurer les options d'affichage {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez à : *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Couches de terrain](@site/static/img/plugins/online-maps/terrain_layers.png)

Vous pouvez personnaliser le niveau de zoom pour l'affichage et la transparence pour l'Ombrage du relief et la Pente. Vous pouvez en lire plus dans l'[article Topographie](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## Relief 3D {#3d-relief}

:::note
[Relief 3D](../plugins/topography.md#3d-relief) est une fonctionnalité payante de [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Couches de terrain](@site/static/img/plugins/online-maps/raster_maps_3d.png)

La fonctionnalité [**Relief 3D**](../plugins/topography.md#3d-relief) est une technologie de cartographie qui permet la visualisation du terrain sur une carte à l'aide de modèles tridimensionnels. Cette fonctionnalité ajoute des informations d'altitude à une carte bidimensionnelle normale, ce qui crée un effet 3D et de profondeur et vous permet de mieux visualiser le terrain.  

*Pour commencer à utiliser le Relief 3D* :  
Vous devez acheter le [plan d'achat OsmAnd Pro](../plugins/index.md#purchase), activer le [plugin Topographie](../plugins/topography.md), et activer l'élément [Relief 3D](../plugins/topography.md#3d-relief) dans *Menu → Configurer la carte*.


*Comment fonctionne la fonctionnalité Relief 3D* :  
*1.* Pour créer un relief 3D, OsmAnd reçoit des informations sur l'altitude du terrain.  
*2.* Sur la base des données d'altitude, un modèle 3D est créé pour afficher les montagnes, les collines, les vallées et autres éléments du terrain sur la carte.  
*3.* OsmAnd affiche ensuite ces modèles tridimensionnels sur une carte plate. La carte peut être zoomée, dézoomée et pivotée pour voir le terrain sous différents angles et perspectives.  
*4.* L'affichage des courbes de niveau sur la carte ne dépend pas du fait que la source de la carte soit en ligne ou hors ligne.


## Préparer/Copier des cartes raster sur l'appareil {#preparecopy-raster-maps-to-device}

Il existe plusieurs façons d'ajouter une nouvelle carte raster, de la copier depuis un autre appareil, de la préparer sur un PC et de pré-télécharger des tuiles pour une utilisation hors ligne. Par exemple, vous pouvez créer votre propre paquet de cartes sur un PC en utilisant un logiciel spécial tel que [MOBAC, OsmAndMapCreator, etc.](../../technical/map-creation/index.md). Typiquement, les cartes raster sont distribuées sous forme de fichiers avec l'extension `.sqlitedb`.

Voici les principales méthodes pour ajouter une nouvelle source de carte raster qui n'est pas encore définie dans OsmAnd :

- Ouvrir un fichier `.sqlitedb` prêt à l'emploi avec OsmAnd.
- Importer un paquet avec des cartes en ligne préparées depuis une autre application OsmAnd sous forme de **paquet** spécial `.osf` via la [fonctionnalité d'Import / Export](../personal/import-export.md).
- Créer une nouvelle source de carte en ligne sur l'appareil mobile lui-même.
- Préparer une URL magique avec les paramètres de la source de carte en ligne et l'ouvrir avec OsmAnd.


### Ajouter une nouvelle source de carte raster en ligne {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Ajouter une source en ligne](@site/static/img/plugins/online-maps/add-online-source-2.png)

Pour créer une source de carte raster, vous devez connaître l'**URL d'une tuile**, qui est une URL spécifique qui distribue des tuiles de carte dans la projection Mercator. Par exemple, une URL de tuile pourrait ressembler à ceci : `https://tile.osmand.net/hd/6/55/25.png`, où `tile.osmand.net/hd/` est l'URL de base.

Voici les paramètres clés à configurer lors de la mise en place d'une nouvelle source de carte en ligne :

| Paramètre | Description |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Fournissez un nom pour la nouvelle source de carte en ligne. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Entrez ou collez l'URL de la source de tuiles en ligne. Assurez-vous qu'elle suit le format de l'URL de tuile. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Ce paramètre affecte l'affichage de la carte. <br/><ul><li>En tant que *type de carte*, la carte sera limitée aux niveaux de zoom sélectionnés.</li><li>En tant que *sur-couche/sous-couche*, la carte apparaîtra aux niveaux de zoom sélectionnés, avec une mise à l'échelle supérieure ou inférieure appliquée en dehors de ces niveaux.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Définissez la durée (en minutes) après laquelle les tuiles mises en cache seront rafraîchies. Vous pouvez laisser ce champ vide si vous ne voulez pas que les tuiles se rechargent automatiquement. <br/><ul><li>1 jour = 1440 minutes</li><li>1 semaine = 10 080 minutes</li><li>30 jours = 43 200 minutes</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Choisissez entre la *projection Pseudo-Mercator* et la *projection Mercator elliptique*, en fonction de la source. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Sélectionnez comment les tuiles doivent être stockées : soit dans un *fichier SQLiteDB*, soit comme *un fichier image par tuile*. |


### URL magique pour installer une source de carte {#magic-url-to-install-map-source}

Les cartes en ligne peuvent être ajoutées avec un lien spécial vers la liste des cartes raster d'OsmAnd. Cliquez sur ce lien et choisissez OsmAnd pour l'ouvrir :

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Paramètre du lien|Exemple|
|:--------|:---------------|
| [Partie constante]| `http://osmand.net/add-tile-source` |
|[Séparateurs]| ?   & |
|[Nom]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Niveaux de zoom]|min_zoom=9 / max_zoom=15|

Vous trouverez une carte en ligne ajoutée dans la liste du menu [Principale / Sous-couche / Sur-couche](#select-raster-maps).


## Gérer les cartes raster {#manage-raster-maps}

Les cartes raster peuvent occuper une quantité importante d'espace disque, vous pourriez donc avoir besoin de le vérifier régulièrement. Pour les grands ensembles de données, il est recommandé d'utiliser une *source raster SQLite* car elle stockera toutes les tuiles dans un seul grand fichier (base de données SQLite).

- [**Format SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Format Metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

Pour changer le format des tuiles, vous pouvez choisir <Translate android="true" ids="storage_format"/> dans le menu d'édition des cartes en ligne :

- **Android** : *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → choisir les cartes en ligne →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS** : *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Vider le cache des cartes raster {#clear-raster-map-cache}

![Liste des sources en ligne](@site/static/img/plugins/online-maps/online-sources-list.png)

Les tuiles sont stockées dans le cache lors de l'utilisation de cartes raster en ligne comme couche Principale / Sur-couche / Sous-couche. Vous pouvez voir la taille de votre fichier SQ Lite sous le nom de votre carte en ligne dans la liste. Un nettoyage régulier est parfois nécessaire pour accélérer l'affichage des tuiles ou pour mettre à jour les données.  

Pour vider le cache des tuiles de la carte, vous devez faire ce qui suit :

- **Android** : *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → choisir les cartes en ligne →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS** : *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Télécharger / Mettre à jour les tuiles {#download--update-tiles}

Si vous souhaitez accéder aux cartes raster hors ligne, vous devrez peut-être précharger les tuiles. Cela peut être fait sur votre appareil mobile, mais sachez que certains services peuvent bloquer les téléchargements de gros paquets. Vous pouvez également utiliser la même fonctionnalité pour mettre à jour les tuiles déjà téléchargées pour des zones sélectionnées, sinon OsmAnd continuera d'afficher les tuiles qui sont déjà stockées dans le cache.  

Pour que les cartes mettent automatiquement à jour les tuiles après un certain temps, vous pouvez définir un [Temps d'expiration](#add-new-online-raster-map-source), puis OsmAnd rechargera les tuiles dès qu'elles seront affichées.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="cartes-raster"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="cartes-raster"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="cartes-raster"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="cartes-raster"/></td>
    </tr>
</table>  

<!--

![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Télécharger les tuiles iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Pour télécharger ou mettre à jour les tuiles raster, vous devez sélectionner la source de la carte en ligne comme [Source de carte principale](#select-raster-maps) (**Android / iOS**). Vous pouvez également sélectionner des tuiles en ligne séparément pour la carte de [Sur-couche](#overlay-layer) ou pour la [Sous-couche](#underlay-layer) (Uniquement pour **Android**).

- Pour la version **Android** de l'application OsmAnd, vous devez sélectionner une zone en fonction de la taille de l'écran de votre appareil et faire un appui long sur la carte. Sélectionnez ensuite [*Actions*](../map/map-context-menu.md#update--download-online-maps) dans le menu contextuel de la carte et l'option *Télécharger la carte* ou *Mettre à jour la carte*. Sur l'écran de téléchargement de la carte, apportez les modifications nécessaires aux paramètres et appuyez sur Télécharger.  

- Dans la version **iOS** de l'application OsmAnd, vous devez faire un appui long sur la carte, puis sélectionner [*Actions*](../map/map-context-menu.md#update--download-online-maps) et l'option *Télécharger la carte* ou *Mettre à jour la carte* dans le menu contextuel de la carte. Sur l'écran de téléchargement de la carte, vous pouvez sélectionner la zone requise et modifier les paramètres nécessaires. Après avoir défini tous les paramètres, vous pouvez voir le nombre de tuiles et la taille du téléchargement.


### Modifier les paramètres de la carte raster {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → choisir les cartes en ligne →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Les cartes raster peuvent être utilisées telles quelles si les tuiles sont déjà mappées. Si les cartes raster sont fournies en ligne, il y a toujours une URL de base qui doit être configurée. Il y a quelques autres paramètres de base qui peuvent être modifiés pour les cartes raster, vous pouvez en lire plus à ce sujet dans [cette section](#add-new-online-raster-map-source) de l'article. Des paramètres plus complexes sont encodés dans les composants internes du [format SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## Articles connexes {#related-articles}

- [Import / Export](../personal/import-export.md)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)