---
source-hash: 94487b301ff699926a0a7829c7e7225d4d3e9b451cdf3926946cdb6a7c41b2da
sidebar_position: 2
sidebar_label:  OsmAnd Cloud
title: OsmAnd Cloud sur le site Web
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

## Aperçu {#overview}

Le [Portail cartographique OsmAnd](https://osmand.net/map) est un service basé sur un navigateur fourni par OsmAnd, permettant aux utilisateurs d'explorer des cartes, de gérer leurs données, de planifier et de créer des voyages, ou simplement de parcourir la carte.

#### Accès par abonnement {#subscription-accesses}

Le Portail cartographique peut être utilisé sans inscription ; cependant, certaines fonctionnalités sont exclusivement disponibles pour les utilisateurs d'OsmAnd Pro et d'OsmAnd Start :

| Fonctionnalités | Versions |
|--- |--- |
| [Itinéraire de navigation](./planner.md) | Gratuit |
| [Créer une trace](./planner.md) | Gratuit |
| [Météo](./web-map.md) | Gratuit |
| [Favoris](./web-map.md) | [Osmand Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Synchronisation OsmAnd Cloud](./web-cloud.md) | [Osmand Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Recherche Web](./web-search.md)|[Osmand Start](https://osmand.net/blog/start) ou <ProFeature/>|
| [Traces](./web-map.md) | <ProFeature/> |


## Comment commencer {#how-to-start}

Si vous avez un compte [OsmAnd Pro](../personal/osmand-cloud.md#login) ou si vous souhaitez créer un compte [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), vous devez suivre les étapes suivantes :

- Accédez au [*Portail cartographique OsmAnd*](https://osmand.net/map).
- Ouvrez le menu **Compte**.
  - *Se connecter*. Entrez l'adresse e-mail que vous avez utilisée pour créer votre compte. Pour les abonnements Pro ou Start.
  - *Créer un compte*. Pour OsmAnd Start.


## Comment changer de langue {#how-to-change-language}

Si vous souhaitez changer la langue d'affichage :

- La version Web d'OsmAnd utilise la langue des paramètres du navigateur.
- Pour Chrome, la priorité est `chrome://settings/languages`.
- Vous pouvez changer la langue du système (menu) manuellement en sélectionnant :
    *Menu →* ⚙ *→ Désactiver la langue*.


## Gestion du compte {#managing-account}

*Menu général → Compte*

Après s'être inscrits sur le web, les utilisateurs peuvent accéder aux informations de leur compte, télécharger des sauvegardes, se déconnecter, supprimer leur compte ou changer leur adresse e-mail.

#### Accéder au compte {#access-account}

#### Sauvegardes {#backups}

#### Se déconnecter et supprimer {#log-out-and-delete}

#### Changer d'adresse e-mail {#change-email-address}


## Synchronisation OsmAnd Pro et OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** est un abonnement payant [multiplateforme](../troubleshooting/setup.md#cross-platform).
- **OsmAnd Start** est une [inscription gratuite à OsmAnd Cloud](https://osmand.net/blog/start).

La capacité multiplateforme vous permet d'utiliser OsmAnd Pro sur toutes les plateformes *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Pour ce faire, vous devez :

1. Vous abonner à **OsmAnd Pro**. Pour en savoir plus sur la procédure pour [Android, cliquez ici](../purchases/android.md#how-to-buy), et pour [iOS, cliquez ici](../purchases/ios.md#how-to-buy).
2. Pour savoir comment créer un compte **OsmAnd Start**, lisez [ici](https://osmand.net/blog/start#how-to-create-an-account).
3. Enregistrez votre [compte Pro ou Start](../troubleshooting/setup.md#cross-platform) sur le serveur OsmAnd dans l'application OsmAnd.
4. L'adresse e-mail enregistrée sera votre identifiant pour activer OsmAnd Pro sur la plateforme web. La première fois, vous devrez choisir un mot de passe pour les futures connexions au portail web (veuillez suivre les instructions sur le portail web).

- Entrez votre *e-mail* et votre *mot de passe* pour [osmand.net/map](https://osmand.net/map/).

![Vue de l'activation Web d'OsmAnd](@site/static/img/web/web_pro_activation.png)

- Vos données, telles que les traces (OsmAnd Pro) et les favoris (OsmAnd Pro et OsmAnd Start), apparaîtront dans le menu après votre connexion. Elles sont disponibles pour l'affichage sur la carte. Mais vous devez [synchroniser ces données](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) depuis vos appareils.

![Vue des données Web d'OsmAnd](@site/static/img/web/web_data.png)

- Pour *TÉLÉCHARGER LA SAUVEGARDE* depuis [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), cliquez sur le champ de connexion. Sur le champ de connexion, vous pouvez voir les informations sur les fichiers (nombre total de fichiers, taille totale des fichiers, espace de stockage cloud utilisé) et les informations sur le compte (type d'abonnement, heure de début et heure d'expiration de votre abonnement).

![Vue du fichier de sauvegarde Web d'OsmAnd](@site/static/img/web/web_backup_file.png)

Choisissez les fichiers nécessaires à télécharger, le format `.zip` ou `.osf` des fichiers téléchargés et cliquez sur le bouton *TÉLÉCHARGER LA SAUVEGARDE* :

![Vue du fichier de sauvegarde Web d'OsmAnd](@site/static/img/web/web_backup_file_1.png)

Il y a aussi un bouton pour se *déconnecter* du compte.

- *SE DÉCONNECTER*, *SUPPRIMER VOTRE COMPTE* ou *Changer d'e-mail* se trouvent également sur le champ de connexion. Pour ouvrir *SUPPRIMER VOTRE COMPTE* ou *Changer d'e-mail*, vous devez cliquer sur *Zone dangereuse*.

![Vue du fichier de sauvegarde Web d'OsmAnd](@site/static/img/web/web_backup_file_2.png)


## Données cloud {#cloud-data}

[Traces et Favoris](web-map.md#tracks).
<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->



> *Cet article a été mis à jour pour la dernière fois en septembre 2024*