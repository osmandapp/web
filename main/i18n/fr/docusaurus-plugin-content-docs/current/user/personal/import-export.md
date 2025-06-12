---
source-hash: 449ba8486f8036d2bbad4837dd278ab4b240f56f3282ba8c8550a0e6a1d7cc6b
sidebar_position: 10
title:  Importation / Exportation
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Vue d'ensemble {#overview}

Les outils **Importation** et **Exportation** d'OsmAnd vous permettent de gérer vos données. Vous pouvez déplacer vos profils, favoris, traces et autres paramètres en utilisant un format spécial via les applications sur votre appareil. Ce processus simplifie la sauvegarde et le transfert de données entre appareils et vous permet de les partager avec d'autres utilisateurs d'OsmAnd.

:::note Grande taille
*Si la taille des données sélectionnées est importante, l'application mettra du temps à préparer le fichier `.osf`.*
:::


## Exporter / Importer des données {#export--import-data}

L'*Importation* et l'*Exportation* vous permettent de sauvegarder des données à partir de **fichiers** `.osf` générés ou d'utiliser des [sources en ligne](../map/raster-maps.md), ce qui permet de restaurer les informations après une réinstallation.

**Types de données** disponibles pour l'importation/exportation :

- **Paramètres :**
        [Profils](../personal/profiles.md#actions), &nbsp;[Paramètres généraux/OsmAnd](../personal/global-settings.md), &nbsp;[Couleurs](../personal/color-palette-schemes.md), &nbsp;[Action rapide](../widgets/quick-action.md), &nbsp;[Type de POI](../map/point-layers-on-map.md#poi-types), &nbsp;[Éviter la route](../map/map-context-menu.md#avoid-road).
- **Mes lieux :**
        [Favoris](../personal/favorites.md#export--import), &nbsp;[Traces](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[Notes OSM*, *Modifications OSM](../plugins/osm-editing.md#create--modify-poi), &nbsp;[Notes A/V](../plugins/audio-video-notes.md), &nbsp;[Marqueurs de carte](../personal/markers.md), &nbsp;[Historique des marqueurs*, *Historique de recherche*, *Historique de navigation](../personal/global-settings.md#history), &nbsp;*Itinéraire*.
- **Ressources :**
        [Style de rendu](../map/vector-maps.md#custom-map-style), &nbsp;[Routage](../navigation/routing/osmand-routing.md), &nbsp;[Moteurs de routage en ligne](../navigation/routing/online-routing.md), &nbsp;[Sources de carte*, *Cartes standard/hors ligne](../map/raster-maps.md), &nbsp;[Cartes Wikipédia et de voyage](../plan-route/travel-guides.md), &nbsp;[Cartes nautiques](../plugins/nautical-charts.md), &nbsp;[Cartes routières](../map/vector-maps.md#road-style), &nbsp;[Cartes topographiques](../plugins/topography.md), &nbsp;[Invites vocales (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Invites vocales (enregistrées)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Sauvegarde des favoris](../personal/favorites.md#automatic-favorites-backup).


### Exporter {#export}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Toutes les données que vous avez configurées et créées peuvent être exportées à l'aide du ***menu Exporter***. Le menu se compose de trois groupes : **Paramètres**, **Mes lieux** et **Ressources**, qui contiennent tous les dossiers de fichiers disponibles. Vous pouvez sélectionner les fichiers que vous souhaitez exporter dans chaque dossier, un par un ou tous en même temps. **Tous les fichiers exportés sont enregistrés au format `.osf`**.


### Importer {#import}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*

| |
| --- | --- | --- |
| ![Profiles Actions Import Android](@site/static/img/personal/profiles/profile_actions_import_android.png) | ![Profiles Actions Import 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) | ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*

| |
| --- | --- | --- |
| ![Profiles Actions Import iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) | ![Profiles Actions Import 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) | ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) |

</TabItem>

</Tabs>

Ouvre et restaure les fichiers `.osf`. Appuyez sur le fichier dans le gestionnaire de fichiers de l'appareil ou utilisez le bouton d'action.

- *Certains éléments existent déjà*. Vous pouvez utiliser cette fonctionnalité pour enregistrer les deux fichiers ou les remplacer tous.
- *Redémarrer*. Après l'importation des fichiers, l'application doit être redémarrée.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) est la ressource alternative dont vous avez besoin pour enregistrer vos paramètres personnels et les données de l'application. Vous pouvez utiliser ces données sur n'importe quel appareil disponible pour installer l'application OsmAnd ou lors de l'utilisation de l'application de bureau. Toutes les modifications que vous apportez peuvent être synchronisées.


## Prévenir la perte de données {#preventing-data-loss}

Dans les versions *Android* et *iOS* d'OsmAnd, si vous **désinstallez** complètement l'application ou sélectionnez **Effacer les données** sur votre appareil dans les informations de l'application du menu Paramètres, le dossier de données sera également supprimé du gestionnaire de fichiers de l'appareil. Si vous ne prenez pas de précautions, cela entraînera la **perte de toutes les cartes téléchargées pour les données OsmAnd, de tous les favoris enregistrés, des traces GPX, des invites vocales (TTS) et [d'autres données](#export--import-data).**

Il existe deux façons de sauvegarder vos données avant de réinstaller l'application OsmAnd :

- Utilisez [OsmAnd Cloud](#osmand-cloud). Vous pouvez sauvegarder vos données à l'aide des fonctionnalités d'OsmAnd telles que [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), en version gratuite, ou [OsmAnd Pro](../purchases/index.md), un abonnement payant avec plus de fonctionnalités.
- [Exportez le fichier OSF](#export) avec vos données. Copiez le fichier `.osf` dans un dossier de votre appareil ou d'OsmAnd Cloud. Après avoir réinstallé OsmAnd, [importez ce fichier `.osf`](#import) dans l'application OsmAnd.


## Articles connexes {#related-articles}

- [Profils (Paramètres)](./profiles.md)
- [Gérer les traces](../personal/tracks/manage-tracks.md#import--export-track)
- [Historique de recherche](../search/search-history.md#export-and-share)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)

### Problèmes courants et solutions {#common-issues-and-solutions}

1. Comment transférer des favoris et des traces vers un nouvel appareil. [(vérifier)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. J'ai un fichier GPX, comment l'importer dans OsmAnd ? [(vérifier)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Suppression des données cartographiques après la mise à jour de l'application (si « Stockage multi-utilisateur 1 » est sélectionné). [(vérifier)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)

> *Dernière mise à jour : janvier 2025*