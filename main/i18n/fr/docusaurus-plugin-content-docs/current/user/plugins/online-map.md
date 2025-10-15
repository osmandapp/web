---
source-hash: 4cb7c9084c7789ea96d9afde0dedc4fd456fd2ec20405b46d983a36f733ea01e
sidebar_position: 8
title:  Cartes en ligne
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Aperçu {#overview}

Les cartes en ligne d'OsmAnd sont une extension considérable de la base de données OpenStreetMap déjà présente dans l'application. Avec ce plugin, vous pouvez ajouter des couches à votre carte avec des informations provenant d'une source différente, en commençant par la vue satellite ou des itinéraires de randonnée et en terminant par des données très spécifiques, comme l'emplacement des bouches d'incendie. Vous pouvez également changer la source principale de la carte, passant des cartes vectorielles aux tuiles en ligne.


## Paramètres de configuration requis {#required-setup-parameters}

La possibilité d'utiliser les cartes en ligne est automatiquement activée dans la version iOS d'OsmAnd. Pour afficher les cartes en ligne sur Android, vous devez effectuer les réglages suivants :

1. [Activer](../plugins/index.md#enable--disable) le plugin **Cartes en ligne** dans le *Menu principal → Plugins → Cartes en ligne*.
2. Effectuer les réglages nécessaires dans la section [Source de la carte](../map/raster-maps.md#select-raster-maps) du menu Configurer la carte.
3. Définir la *Source de la carte*, la *Sur-couche* et la *Sous-couche* de la carte. Sélectionnez votre fournisseur de cartes satellites préféré.
4. Télécharger la [carte en ligne](#how-to-prepare-raster-maps) sélectionnée si nécessaire.


## Utiliser les cartes raster sur l'appareil {#use-raster-maps-on-device}

Vous trouverez des informations détaillées sur la visualisation et la personnalisation des cartes raster dans l'article [Cartes raster](../map/raster-maps.md). Comment les utiliser :

1. [Sélectionner](../map/raster-maps.md#select-raster-maps) la carte raster comme couche *Principale*, *Sous-couche* ou *Sur-couche*.
    - [Modifier](../map/raster-maps.md#how-to-use-raster-maps) les paramètres de la couche (transparence).

2. [Préparer / copier](../map/raster-maps.md#preparecopy-raster-maps-to-device) les cartes raster sur l'appareil.
    - [Ajouter une nouvelle source de carte raster en ligne](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Ajouter une URL magique](../map/raster-maps.md#magic-url-to-install-map-source) pour installer la source de la carte.

3. [Gérer](../map/raster-maps.md#manage-raster-maps) les cartes raster.
    - [Télécharger / mettre à jour les tuiles](../map/raster-maps.md#download--update-tiles).
    - [Modifier](../map/raster-maps.md#change-raster-map-parameters) les paramètres de la carte raster.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Configurer la sous-couche / sur-couche Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Configurer la sous-couche / sur-couche iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Comment préparer les cartes raster {#how-to-prepare-raster-maps}

:::info
Article principal sur la préparation des cartes [à lire ici](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Bien que le plugin s'appelle *Cartes en ligne*, vous pouvez également utiliser les cartes sans connexion Internet. Il vous suffit d'enregistrer les parties des cartes (souvent appelées tuiles) pour les utiliser plus tard. Pour ce faire, téléchargez un outil spécifique de [création de cartes](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) développé par l'équipe OsmAnd.

Sélectionnez la zone que vous devez télécharger, cliquez sur Précharger la zone, puis définissez les niveaux de zoom le plus petit et le plus grand que vous souhaitez afficher et téléchargez les tuiles.
Pour la <b>version Android</b>, vous pouvez les copier dans le dossier <i>osmand/tiles/*type de tuile*</i> de votre téléphone. Vous devrez également ouvrir <i>Configurer la carte → Sur-couche</i> et choisir les tuiles en ligne OsmAnd.

Pour la <b>version iOS</b>, vous pouvez choisir un fichier SQ Lite sur votre téléphone (depuis n'importe quelle messagerie ou Dropbox), OsmAnd proposera de l'ajouter. Vous devrez également ouvrir <i>Carte → Sur-couche / Sous-couche ou Type de carte</i> et choisir la nouvelle source de carte.

Pour savoir comment ajouter un fichier SQ Lite dans les versions Android et iOS d'OsmAnd, vous pouvez consulter le <a href="https://anygis.ru/Web/Html/Osmand_en"><b>projet Anygis</b></a>.


Les tuiles en ligne peuvent être utiles lorsque vous n'avez besoin que d'une petite section de la carte ou d'un type spécifique de celle-ci à utiliser dans une zone limitée, mais que vous ne voulez pas télécharger toute la région. Elles peuvent s'avérer pratiques dans d'innombrables situations.

![Cartes en ligne](@site/static/img/plugins/online-maps/map_creator.jpg)

![Cartes en ligne](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres généraux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

### Problèmes courants et solutions {#common-issues-and-solutions}

1. Les cartes en ligne n'apparaissent pas dans le menu Source de la carte :  
  
    - Vérifiez que le plugin Cartes en ligne est activé : *Menu → Plugins → Cartes en ligne*.  
    - Assurez-vous d'avoir une connexion Internet active pour accéder aux images satellite.  
    - Vérifiez si la carte en ligne sélectionnée est téléchargée ou nécessite des [paramètres supplémentaires](../map/raster-maps.md#select-raster-maps).