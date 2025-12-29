---
source-hash: a52737232a71758590dfdb7cfbb68622999fbec373babd2b56b429093731d394
sidebar_position: 1
sidebar_label: Introduction
title: Introduction au Planificateur Web
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

<!--
<InfoIncompleteArticle/>
-->

## Aperçu {#overview}

Le **Planificateur Web**, également connu sous le nom de [**Portail Cartographique OsmAnd**](https://osmand.net/map), est une extension basée sur navigateur de l'application mobile OsmAnd. Il permet aux utilisateurs de visualiser des cartes mondiales, de planifier des itinéraires, de simuler la navigation, de gérer des données personnelles et d'accéder au contenu synchronisé de leurs appareils via le cloud.

Conçu comme un compagnon multiplateforme pour OsmAnd sur Android et iOS, le Portail Web aide les utilisateurs à planifier des voyages, à analyser des traces, à visualiser le terrain et à gérer des fichiers en utilisant n'importe quel navigateur de bureau ou de tablette — sans installer d'application.

OsmAnd Web s'intègre étroitement avec le service **OsmAnd Cloud**, qui permet de synchroniser les favoris, les traces et les sauvegardes entre les appareils et les plateformes. Les utilisateurs disposant de comptes **OsmAnd Start** (gratuit) ou **OsmAnd Pro** (payant) peuvent tirer pleinement parti de cet écosystème en synchronisant les données entre le mobile et le web. Vous trouverez une comparaison détaillée des fonctionnalités de *Start* et de *Pro* dans la section [Accès par abonnement](#subscription-accesses) ci-dessous.

> **Note :** Même sans vous connecter ou vérifier votre compte, vous pouvez toujours utiliser plusieurs fonctionnalités principales du Portail de Carte Web, notamment : [Itinéraire de navigation](./planner.md), [Planificateur d'itinéraire](./planner.md), [Superpositions météo](./web-map.md#weather-on-the-web) et [Paramètres](#settings).

<!--
After the structure of this section is approved, some links should be updated.
-->

## Fonctionnalités clés {#key-features}

Le Portail Web offre les principales capacités suivantes pour travailler avec des cartes et des données personnelles dans le navigateur : 

- [Carte](./web-map.md) avec une couverture mondiale et des données vectorielles de haute qualité.
- [Planification d'itinéraire](./planner.md) utilisant les profils à pied, voiture, vélo et autres.
- [Aperçu de la navigation](./planner.md) avec des instructions au virage par virage.
- [Recherche](./web-search.md) et [exploration](./web-search.md#explore) des lieux populaires à proximité.
- Affichage des [Favoris](./web-map.md#favorites), [Traces](./web-map.md#tracks) et [POI](./web-map.md#poi-overlay) sur la carte.
- [Superpositions météo](./web-weather.md) : vent, température et pression.
- [Couches de terrain](./web-map.md#terrain) : ombrage, pentes et vue en altitude.
- [Analyseur de trace](./web-tracks-analyzer.md) pour les profils d'altitude et de vitesse.
- Accès complet aux données synchronisées via [OsmAnd Cloud](./web-cloud#cloud-sync).
- Prise en charge de l'import/export de fichiers (GPX : traces, favoris).
- Intégration transparente avec **OsmAnd Pro** et **OsmAnd Start**.

<!--
After the structure of this section is approved, some links should be updated.
-->


### Accès par abonnement {#subscription-accesses}

![Web Account](@site/static/img/web/web_start.png) ![Web Account](@site/static/img/web/web_pro.png)

Le Portail de Carte Web prend en charge plusieurs niveaux d'accès : sans connexion, avec OsmAnd Start et avec OsmAnd Pro. Le tableau ci-dessous résume les fonctionnalités disponibles à chaque niveau afin que vous puissiez rapidement voir ce que vous avez déjà et ce qui devient disponible avec un compte ou une mise à niveau. Cet aperçu est destiné à vous aider à décider si vous avez besoin d'un compte du tout et, si c'est le cas, quelle option correspond le mieux à la façon dont vous utilisez OsmAnd.

| Fonctionnalité | Disponible dans |
|--------|--------------|
| [Itinéraire de navigation](./planner.md) | Sans connexion |
| [Planificateur d'itinéraire](./planner.md) | Sans connexion |
| [Superpositions météo](./web-weather.md) | Sans connexion |
| [Paramètres](./web-map.md#settings) | Sans connexion |
| [Menu de configuration de la carte](./web-map.md#configure-map-menu) ([POI](./web-map.md#poi-overlay), [Favoris](./web-map.md#favorites), [Traces](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Menu de configuration de la carte](./web-map.md#configure-map-menu) ([Terrain](./web-map.md#terrain))| <ProFeature/> |
| [Synchronisation OsmAnd Cloud](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Recherche web, Lieux populaires](./web-search.md) | [OsmAnd Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Dossiers de traces et couche](./web-tracks.md) | <ProFeature/> |

<!--
After the structure of this section is approved, some links should be updated.
-->


## Comment commencer {#how-to-start}

Pour accéder à toutes les fonctionnalités du Portail Web OsmAnd, vous devez vous connecter avec un compte OsmAnd Cloud.

- Si vous avez déjà un abonnement [**OsmAnd Pro**](../personal/osmand-cloud.md#login) ou si vous souhaitez créer un compte gratuit [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), suivez ces étapes :

1. Allez sur le [**Portail Cartographique OsmAnd**](https://osmand.net/map).
2. Ouvrez le menu **Compte** :
   - **Se connecter** : Saisissez l'adresse e-mail liée à votre abonnement Pro ou Start, ou
   - **Créer un compte** : Inscrivez-vous pour un compte gratuit OsmAnd Start. Pour un guide étape par étape détaillé sur la création d'un nouveau compte, consultez l'article [Compte OsmAnd](./web-cloud).

![Web Account](@site/static/img/web/web_account.png)

<!--

## Settings {#settings}

### Language {#language}

To switch the interface language:

*Go to: Menu → ⚙ Settings → Display language*

![Web Language](@site/static/img/web/web_language.png)

### Units {#units}

*Go to: Menu → ⚙ Settings → Units of length*  
*Go to: Menu → ⚙ Settings → Unit of speed*

You can choose which units are used to display distance, elevation and speed on the map, in route details and in measurement tools. This helps you keep OsmAnd consistent with your usual habits or regional standards.

The **Units of length** option defines how horizontal distance and elevation are shown:
- Kilometers/meters.
- Miles/feet.
- Miles/meters.
- Miles/yards.
- Nautical miles/meters.
- Nautical miles/feet. 

For example, a distance of 10 km will be shown as about 6.21 mi if you choose one of the Miles/... options, or as about 5.40 nmi when Nautical miles/... is selected.

The **Unit of speed** option controls how current speed and speed limits are displayed:
- Kilometers per hour.
- Miles per hour.
- Meters per second.
- Minutes per mile.
- Minutes per kilometer.
- Nautical miles per hour (knots). 

For example, a speed of 90 km/h corresponds to 25 m/s or about 55.92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)

### OsmAnd Cloud {#osmand-cloud}

![Web Cloud](@site/static/img/web/web_without_acc.png) ![Web Cloud](@site/static/img/web/web_with_acc.png)

In the Web Map Portal, the *General settings* (Display language, Units of length, Unit of speed) are available for all users, whether you are signed in or not. Once you log in with your OsmAnd account, an additional OsmAnd Cloud section appears in the Settings panel. [OsmAnd Cloud](./web-cloud) connects the web map with your cloud backups so that you can manage data synchronized from your Android or iOS devices directly in the browser.

**Changes** option shows a chronological list of files stored in your OsmAnd Cloud account. Items are grouped by month and include the file name, the type of change (for example, added, modified or deleted), the time of the last update and the device that created it. For each entry, you can open the three-dot menu and choose *Download* to save the selected file to your computer, or *Delete*.

**Trash** option contains files that were deleted from OsmAnd Cloud. The list is also grouped by month and shows when each file was removed and from which device. Use the three-dot menu next to a file to *Download* a copy, *Restore from trash* (return the file to OsmAnd Cloud so it becomes available again in your data), or *Delete immediately* to remove it permanently. This helps prevent accidental data loss while still letting you free up cloud storage when you are sure a file is no longer needed. You can also clear all deleted items at once by clicking the Trash icon in the Trash panel header. This opens the **Empty trash** dialog, where you confirm deletion to permanently remove all files from Trash.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

-->


## Articles connexes {#related-articles}

- [Premiers pas](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Achats web](../purchases/web.md)
- [Achats multiplateformes](../purchases/cross.md)