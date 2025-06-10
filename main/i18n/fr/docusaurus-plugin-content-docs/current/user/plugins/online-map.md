---
source-hash: 1b9d749ebb8730c64d4b1fceddc86003dfc6c14c7f5e556129e21a75f245cdc3
sidebar_position: 8
title: Cartes en ligne
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

Les cartes en ligne d'OsmAnd sont un ajout important à la base de données OpenStreetMap déjà présente dans l'application. Avec ce plugin, vous pouvez ajouter des couches à votre carte avec des informations provenant d'une source différente, en commençant par la vue satellite ou les itinéraires de randonnée et en terminant par des données très spécifiques, telles que l'emplacement des bouches d'incendie. Vous pouvez également changer la source principale de la carte, passant des cartes vectorielles aux tuiles en ligne.


## Paramètres de configuration requis {#required-setup-parameters}

La possibilité d'utiliser les cartes en ligne est automatiquement activée dans la version iOS d'OsmAnd. Pour afficher les cartes en ligne dans Android, vous devez effectuer les réglages suivants :

1. [Activer](../plugins/index.md#enable--disable) le plugin **Cartes en ligne** dans le *Menu principal → Plugins → Cartes en ligne*.
2. Effectuer les réglages nécessaires dans la section [Source de la carte](../map/raster-maps.md#select-raster-maps) du menu Configurer la carte.
3. Définir la *Source de la carte*, la carte *Superposition* et la carte *Sous-couche*. Sélectionner votre fournisseur de carte satellite préféré.
4. Télécharger la [carte en ligne](#how-to-prepare-raster-maps) sélectionnée si nécessaire.


## Utiliser les cartes raster sur l'appareil {#use-raster-maps-on-device}

Vous trouverez des informations détaillées sur la visualisation et la personnalisation des cartes raster dans l'article [Cartes raster](../map/raster-maps.md). Comment utiliser :

1. [Sélectionner](../map/raster-maps.md#select-raster-maps) la carte raster comme couche *Principale*, *Sous-couche* ou *Superposition*.
    - [Modifier](../map/raster-maps.md#how-to-use-raster-maps) les paramètres de la couche (transparence).

2. [Préparer / copier](../map/raster-maps.md#prepare--copy-raster-maps-to-device) les cartes raster sur l'appareil.
    - [Ajouter une nouvelle source de carte raster en ligne](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Ajouter une URL magique](../map/raster-maps.md#magic-url-to-install-map-source) pour installer la source de la carte.

3. [Gérer](../map/raster-maps.md#manage-raster-maps) les cartes raster.
    - [Télécharger / mettre à jour les tuiles](../map/raster-maps.md#download--update-tiles).
    - [Modifier](../map/raster-maps.md#change-raster-map-parameters) les paramètres de la carte raster.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Configurer la sous-couche / superposition Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Configurer la sous-couche / superposition iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Comment préparer les cartes raster {#how-to-prepare-raster-maps}

:::info
Article principal pour préparer les cartes [lire ici](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Bien que le plugin s'appelle *Cartes en ligne*, vous pouvez également utiliser les cartes sans connexion Internet. Il vous suffit d'enregistrer les parties des cartes (souvent appelées tuiles) pour les utiliser ultérieurement. Pour ce faire, téléchargez un [outil de création de cartes](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) spécifique développé par l'équipe OsmAnd.

Sélectionnez la zone que vous devez télécharger, cliquez sur Précharger la zone, puis définissez les niveaux de zoom les plus petits et les plus grands que vous souhaitez afficher et téléchargez les tuiles.
Pour la <b>version Android</b>, vous pouvez les copier dans le dossier <i>osmand/tiles/*type de tuile*</i> de votre téléphone. Vous devrez également ouvrir <i>Configurer la carte - Carte de superposition</i> et choisir les tuiles en ligne OsmAnd.

Pour la <b>version iOS</b>, vous pouvez choisir un fichier SQ Lite sur votre téléphone (n'importe quel messager ou dropbox), OsmAnd vous proposera de l'ajouter. Vous devrez également ouvrir <i>Carte → Superposition / Sous-couche ou Type de carte</i> et choisir une nouvelle source de carte.

Comment ajouter un fichier SQ Lite dans les versions Android et iOS d'OsmAnd, vous pouvez le lire dans le projet <a href="https://anygis.ru/Web/Html/Osmand_en"><b>Anygis</b></a>.


Les tuiles en ligne peuvent être utiles lorsque vous n'avez besoin que d'une petite section de la carte ou d'un type spécifique de celle-ci à utiliser dans une zone limitée, mais que vous ne souhaitez pas télécharger toute la région. Elles peuvent être utiles dans d'innombrables situations.

![Cartes en ligne](@site/static/img/plugins/online-maps/map_creator.jpg)

![Cartes en ligne](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

### Problèmes courants et solutions {#common-issues-and-solutions}

1. Les cartes en ligne n'apparaissent pas dans le menu Source de la carte :  
  
    - Vérifiez que le plugin Cartes en ligne est activé : *Menu → Plugins → Cartes en ligne*.  
    - Assurez-vous d'avoir une connexion Internet active pour accéder aux images satellite.  
    - Vérifiez si la carte en ligne sélectionnée est téléchargée ou nécessite des [paramètres supplémentaires](../map/raster-maps.md#select-raster-maps).

> *Dernière mise à jour : janvier 2025*