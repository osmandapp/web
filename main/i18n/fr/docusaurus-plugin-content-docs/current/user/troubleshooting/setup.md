---
source-hash: 730da9c7eb7dc95ccbea6a82bcaeea3a641beac9ec87680eb18fba206e560608 
sidebar_position: 1
title:  Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Configuration initiale

### Comment récupérer les données

Pour éviter la perte de données, assurez-vous que vos données personnelles, itinéraires et cartes sont sauvegardés. OsmAnd offre des options pour exporter vos données vers différents formats. En cas de perte de données ou de changement d'appareil, suivez [ces étapes](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss) pour restaurer vos données à partir d'une sauvegarde.


### Comment transférer les Favoris et les Tracés vers un nouvel appareil

- La méthode la plus simple consiste à exporter un profil avec les données nécessaires : *Menu → Paramètres → Exporter →* sélectionnez les données que vous souhaitez exporter.
- Alternativement, vous pouvez sauvegarder toutes vos données depuis l'appareil précédent en copiant le dossier situé dans *Paramètres → Paramètres OsmAnd → Dossier de stockage des données* (chemin par défaut : `Android/data/net.osmand.plus`). Ensuite, collez le contenu de ce dossier dans le dossier de stockage des données sur votre nouvel appareil.


## Importer des fichiers

### J'ai un fichier GPX, comment l'importer dans OsmAnd ?

- **Android**
    - Vous pouvez [télécharger et ouvrir le fichier](../navigation/setup/gpx-navigation.md) à l'aide d'un explorateur de fichiers ou d'un service cloud comme Dropbox, et sélectionner OsmAnd comme application cible.
    - Alternativement, placez le fichier dans le dossier d'accueil d'OsmAnd : `osmand/tracks/(sous-dossier_optionnel)/votre_fichier.gpx`.

- **iOS**
    - Pour ouvrir [un fichier GPX dans OsmAnd](../navigation/setup/gpx-navigation.md), téléchargez-le simplement et choisissez OsmAnd comme application pour l'ouvrir. Le fichier sera alors disponible pour utilisation dans l'application.

### Les courbes de niveau ou les ombrages de relief n'apparaissent pas

En savoir plus sur le [plugin Topographie](../plugins/topography.md).


## Comment activer les polices système (Android)

À partir de la version Android 4.9, OsmAnd intègre la police système de votre appareil dans l'interface de l'application, optimisant sa conception en éliminant l'utilisation de polices mixtes. La police système est automatiquement appliquée à tous les éléments de l'interface utilisateur.

- OsmAnd utilise la police système par défaut de votre appareil dans tous les éléments de l'interface utilisateur.
- Le passage à la police système est automatique. Vous n'avez pas besoin de configurer de paramètres dans l'application pour cette fonctionnalité.
- Cette fonctionnalité n'affecte pas les polices affichées sur la carte.


## OsmAnd 4.4 (iOS)

OsmAnd 4.4 pour les appareils iOS n'est pas disponible pour les versions iOS antérieures à iOS 15.

Cela signifie que pour installer OsmAnd 4.4, vous devez mettre à niveau votre système d'exploitation vers au moins iOS 15 ou une version plus récente.


<!--
## Storage on an SD card (Android)

:::note
When you *turn on a USB drive to share files* with a computer or disconnect the SD card through system settings, the external drive is disconnected from the device and all applications running on the external drive are **immediately terminated**. You can [read more here](https://developer.android.com/guide/topics/data/install-location).
:::

### To move the OsmAnd home (maps) folder to an external SD card:

-   Go to *Settings (on the start screen) →  OsmAnd Settings → Data storage folder*
-   Change the value to a path pointing to the external SD card, on many
    Android systems may contain `/storage/extSdCard` or similar.
    Please note that some versions of Android strictly limit your choice
    of which path will be write-accessible for apps.
-   You are then asked if the contents of the OsmAnd data folder should be moved from
    internal memory to the external SD card.
    You may also perform this manually using a built-in file manager app on the device or via
    connecting the device to a computer as external storage and performing the move from there.


### How do I use my SD card with OsmAnd under Android 4.4+ and 5

If you update your Android to version 4.4.x, you will experience a known
Android issue with the `WRITE_EXTERNAL_STORAGE` permission: Android has
changed the rules so that from now on no application can write to the
external SD card anywhere outside its new standard folder
`Android/data/[PACKAGE-NAME]`. If OsmAnd was installed before updating
your device to Android 4.4.x, it will continue to work (read-only) with
the old, non-standard osmand folder, but won't be able to update any map
and other files there.

Solutions:

-   Move OsmAnd's data folder osmand to the internal storage. \
     **Drawback:** Internal storage can be rather small.
-   Move OsmAnd's data folder osmand into its standard SD folder, \
    for OsmAnd+ : `(extSdCard)/Android/data/net.osmand.plus/files` \
    for OsmAnd : `(extSdCard)/Android/data/net.osmand/files` \
     **Caution:** Whenever you uninstall OsmAnd now, all your data will
    be erased as well! (Unless you unmount your SD card, or rename the
    net.osmand(.plus) folder before de-installation.)

If you manually want to perform the necessary copies/moves, either use a
PC to perform this action on the SD card, or on the device itself use
the file manager tool **which came pre-installed with your Android**
(only these methods will have the necessary write permission). All copy operations
may also be invoked in OsmAnd itself via `Menu/Settings/General/Data
storage folder` but the copy operations may take a long time or result in
errors (e.g. if the SD card is too full).
-->


## Copier un paquet de cartes raster créé sur PC

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Import sqlitedb Android](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Import sqlitedb iOS](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)  

</TabItem>

</Tabs>

Les paquets de cartes peuvent être enregistrés en deux formats : [SQLite et Metainfo](https://osmand.net/docs/user/map/raster-maps). Après avoir créé votre paquet de cartes, suivez ces étapes pour le déplacer vers OsmAnd :

- **Pour Android**. Accédez au stockage de votre appareil et copiez le(s) fichier(s) de votre PC vers le dossier `BASE_OSMAND_STORAGE/tiles_`. Alternativement, vous pouvez télécharger le fichier depuis votre e-mail, votre cloud ou votre messagerie, et l'ouvrir avec l'application OsmAnd. Le paquet de cartes sera automatiquement ajouté à votre liste de cartes en ligne.

- **Pour iOS**. Téléchargez le fichier depuis iTunes ou une messagerie, puis ouvrez-le avec l'application OsmAnd. Le paquet de cartes sera automatiquement ajouté à votre liste de cartes en ligne.

