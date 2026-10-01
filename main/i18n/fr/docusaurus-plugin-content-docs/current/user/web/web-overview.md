---
source-hash: 5c0ec057fd60df8e67edea1ef3d5a69cce84edf9177789c1998911043f2d9f81
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


## Aperçu {#overview}

Le **Planificateur Web**, également connu sous le nom de [**Portail Cartographique OsmAnd**](https://osmand.net/map), est une extension basée sur navigateur de l'application mobile OsmAnd. Il permet aux utilisateurs de visualiser des cartes mondiales, de planifier des itinéraires, de simuler la navigation, de gérer des données personnelles et d'accéder au contenu synchronisé de leurs appareils via le cloud.

Conçu comme un compagnon multiplateforme pour OsmAnd sur Android et iOS, le Portail Web aide les utilisateurs à planifier des voyages, à analyser des traces, à visualiser le terrain et à gérer des fichiers en utilisant n'importe quel navigateur de bureau ou de tablette — sans installer d'application.

OsmAnd Web s'intègre étroitement avec le service **OsmAnd Cloud**, qui permet de synchroniser les favoris, les traces et les sauvegardes entre les appareils et les plateformes. Les utilisateurs disposant de comptes **OsmAnd Start** (gratuit) ou **OsmAnd Pro** (payant) peuvent tirer pleinement parti de cet écosystème en synchronisant les données entre le mobile et le web. Vous trouverez une comparaison détaillée des fonctionnalités de *Start* et de *Pro* dans la section [Accès par abonnement](#subscription-accesses) ci-dessous.

> **Note :** Même sans vous connecter ou vérifier votre compte, vous pouvez toujours utiliser plusieurs fonctionnalités principales du Portail de Carte Web, notamment : [Itinéraire de navigation](./web-navigation.md), [Planificateur d'itinéraire](./planner.md), [Superpositions météo](./web-weather.md), et [Paramètres](./web-map.md#settings).


## Fonctionnalités clés {#key-features}

Le Portail Web offre les principales capacités suivantes pour travailler avec des cartes et des données personnelles dans le navigateur : 

- [Carte](./web-map.md) avec une couverture mondiale et des données vectorielles de haute qualité.
- [Planification d'itinéraire](./planner.md) utilisant les profils à pied, voiture, vélo et autres.
- [Aperçu de la navigation](./web-navigation.md) avec des instructions au virage par virage.
- [Recherche](./web-search.md) et [exploration](./web-search.md#explore) des lieux populaires à proximité.
- Affichage des [Favoris](./web-map.md#favorites), [Traces](./web-map.md#tracks), et [POI](./web-map.md#poi-overlay) sur la carte.
- [Superpositions météo](./web-weather.md) : vent, température et pression.
- [Couches de terrain](./web-map.md#terrain) : ombrage, pentes et vue en altitude.
- [Analyseur de trace](./web-tracks-analyzer.md) pour les profils d'altitude et de vitesse.
- Accès complet aux données synchronisées via [OsmAnd Cloud](./web-cloud#cloud-sync).
- Prise en charge de l'import/export de fichiers (GPX : traces, favoris).
- Intégration transparente avec **OsmAnd Pro** et **OsmAnd Start**.

### Accès par abonnement {#subscription-accesses}

![Web Account](@site/static/img/web/web_start.png) ![Web Account](@site/static/img/web/web_pro.png)

Le Portail de Carte Web prend en charge plusieurs niveaux d'accès : sans connexion, avec OsmAnd Start et avec OsmAnd Pro. Le tableau ci-dessous résume les fonctionnalités disponibles à chaque niveau afin que vous puissiez rapidement voir ce que vous avez déjà et ce qui devient disponible avec un compte ou une mise à niveau. Cet aperçu est destiné à vous aider à décider si vous avez besoin d'un compte du tout et, si c'est le cas, quelle option correspond le mieux à la façon dont vous utilisez OsmAnd.

| Fonctionnalité | Disponible dans |
|--------|--------------|
| [Itinéraire de navigation](./web-navigation.md) | Sans connexion |
| [Planificateur d'itinéraire](./planner.md) | Sans connexion |
| [Superpositions météo](./web-weather.md) | Sans connexion |
| [Paramètres](./web-map.md#settings) | Sans connexion |
| [Menu de configuration de la carte](./web-map.md#configure-map-menu) ([POI](./web-map.md#poi-overlay), [Favoris](./web-map.md#favorites), [Traces](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) ou [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Menu de configuration de la carte](./web-map.md#configure-map-menu) ([Terrain](./web-map.md#terrain))| [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Synchronisation OsmAnd Cloud](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) ou [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Recherche web, Lieux populaires](./web-search.md) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) ou [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Dossiers de traces et couche](./web-tracks.md) | [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |


## Comment commencer {#how-to-start}

Pour accéder à toutes les fonctionnalités du Portail Web OsmAnd, vous devez vous connecter avec un compte OsmAnd Cloud.

- Si vous avez déjà un abonnement [**OsmAnd Pro**](../personal/osmand-cloud.md#login) ou si vous souhaitez créer un compte gratuit [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), suivez ces étapes :

1. Allez sur le [**Portail Cartographique OsmAnd**](https://osmand.net/map).
2. Ouvrez le menu **Compte** :
   - **Se connecter** : Saisissez l'adresse e-mail liée à votre abonnement Pro ou Start, ou
   - **Créer un compte** : Inscrivez-vous pour un compte gratuit OsmAnd Start. Pour un guide étape par étape détaillé sur la création d'un nouveau compte, consultez l'article [Compte OsmAnd](./web-cloud).

![Web Account](@site/static/img/web/web_account.png)


## Articles connexes {#related-articles}

- [Premiers pas](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Achats web](../purchases/web.md)
- [Achats multiplateformes](../purchases/cross.md)