---
source-hash: 468554af76614d225c0a6d533461ed0e21450d49977ff9641eba44e245d32a09
sidebar_position: 1
sidebar_label: Introduction
title: Introduction au site web
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


<InfoIncompleteArticle/>

## Qu'est-ce que la visionneuse de carte web OsmAnd ?

Le [**Portail Cartographique OsmAnd**](https://osmand.net/map) — également appelé **Visionneuse de Carte Web** — est une extension pour navigateur de l'application mobile OsmAnd. Il permet aux utilisateurs de visualiser des cartes du monde entier, de planifier des itinéraires, de simuler la navigation, de gérer des données personnelles et d'accéder au contenu synchronisé de leurs appareils via le cloud.

Conçue comme un compagnon multiplateforme pour OsmAnd sur Android et iOS, la Visionneuse de Carte Web aide les utilisateurs à planifier des voyages, analyser des traces, visualiser le relief et gérer des fichiers à l'aide de n'importe quel navigateur de bureau ou de tablette — sans installer d'application.

OsmAnd Web s'intègre étroitement avec le service **OsmAnd Cloud**, qui permet de synchroniser les favoris, les traces et les sauvegardes entre les appareils et les plateformes. Les utilisateurs disposant de comptes **OsmAnd Start** (gratuit) ou **OsmAnd Pro** (payant) peuvent tirer pleinement parti de cet écosystème en synchronisant les données entre le mobile et le web.



## Fonctionnalités clés

- Carte avec couverture mondiale et données vectorielles de haute qualité
- Planification d'itinéraire utilisant les profils piéton, voiture, vélo et autres
- Aperçu de la navigation avec instructions détaillées
- Recherche et exploration des lieux populaires à proximité
- Affichage des Favoris, Traces et POI sur la carte
- Superpositions météo : vent, température et pression
- Couches de terrain : ombrage, pentes et vue en altitude
- Analyseur de trace pour les profils d'altitude et de vitesse
- Accès complet aux données synchronisées via OsmAnd Cloud
- Prise en charge de l'import/export de fichiers (GPX : traces, favoris)
- Intégration transparente avec **OsmAnd Pro** et **OsmAnd Start**



### Accès par abonnement {#subscription-accesses}

De nombreuses fonctionnalités sont gratuites, mais certaines nécessitent un compte enregistré.  
Le tableau ci-dessous décrit ce qui est disponible dans chaque version :

| Fonctionnalité | Disponible dans |
|--------|--------------|
| [Itinéraire de navigation](./planner.md) | Gratuit |
| [Planificateur d'itinéraire](./planner.md) | Gratuit |
| [Superpositions météo](./web-map.md) | Gratuit |
| [Favoris](./web-map.md) | [OsmAnd Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Synchronisation OsmAnd Cloud](./web-cloud.md) | [OsmAnd Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Recherche web, Lieux populaires](./web-search.md) | [OsmAnd Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Dossiers de traces et couche](./web-map.md) | <ProFeature/> |


## Comment commencer {#how-to-start}

Pour accéder à toutes les fonctionnalités de la visionneuse de carte web OsmAnd, vous devez vous connecter avec un compte OsmAnd Cloud.

- Si vous avez déjà un abonnement [**OsmAnd Pro**](../personal/osmand-cloud.md#login) ou si vous souhaitez créer un compte gratuit [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), suivez ces étapes :

1. Allez sur le [**Portail Cartographique OsmAnd**](https://osmand.net/map).
2. Ouvrez le menu **Compte** :
   - **Se connecter** : Saisissez l'adresse e-mail liée à votre abonnement Pro ou Start.
   - **Créer un compte** : Inscrivez-vous pour un compte gratuit OsmAnd Start.

![Web Account](@site/static/img/web/web_account.png)



### Comment changer la langue {#how-to-change-language}

Pour changer la langue de l'interface :

- Naviguez vers **Menu → ⚙ Paramètres → Langue d'affichage**

![Web Language](@site/static/img/web/web_language.png)