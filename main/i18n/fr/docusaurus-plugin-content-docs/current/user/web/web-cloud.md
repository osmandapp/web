---
source-hash: 36fa594008d56ae693369164879dccfe01f275c12d52be379ad60b0b9c264d67
sidebar_position: 2
sidebar_label:  OsmAnd Cloud
title: OsmAnd Cloud sur le site web
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

Le [Portail Cartographique OsmAnd](https://osmand.net/map) est un service basé sur un navigateur fourni par OsmAnd, permettant aux utilisateurs d'explorer des cartes, de gérer leurs données, de planifier et de créer des voyages, ou simplement de parcourir la carte.



## Comment commencer {#how-to-start}

Pour accéder aux fonctionnalités d'OsmAnd Web, vous avez besoin d'un compte :

- Si vous avez déjà un abonnement [**OsmAnd Pro**](../personal/osmand-cloud.md#login) ou si vous souhaitez créer un compte gratuit [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), suivez ces étapes :

  1. Allez sur le [**Portail Cartographique OsmAnd**](https://osmand.net/map).
  2. Ouvrez le menu **Compte**.
     - **Se connecter** : Saisissez l'adresse e-mail utilisée pour votre abonnement Pro ou Start.
     - **Créer un compte** : Utilisez cette option pour vous inscrire à un compte gratuit OsmAnd Start.

![Compte Web](@site/static/img/web/web_account.png)

## Gestion du compte {#managing-account}

Pour gérer votre compte, allez dans :  
**Menu Général → Compte**

Après vous être inscrit sur le web, vous pouvez :

- Consulter les informations du compte
- Télécharger les sauvegardes cloud
- Vous déconnecter de votre compte
- Supprimer votre compte
- Changer votre adresse e-mail
- Voir vos paiements et achats

![Compte Web](@site/static/img/web/web_account_2.png)

### Mes données {#my-data}

Vous pouvez télécharger les sauvegardes qui ont été créées et synchronisées depuis votre appareil mobile via **OsmAnd Cloud**.

- Allez dans **Menu Général → Compte → Mes données (OsmAnd Cloud) → Tout télécharger**.

Cette section affiche :

- Le nombre de fichiers stockés dans votre cloud
- Le volume de stockage total utilisé
- L'espace de stockage cloud disponible

> 💡 Seules les sauvegardes créées sur des appareils où **OsmAnd Cloud** est activé apparaîtront ici.

### Paiements et achats {#payments-and-purchases}

- Allez dans **Menu Général → Compte → Paiements et Achats**.

Dans cette section, vous pouvez voir tous les achats et abonnements liés à votre compte.

Pour plus de détails sur l'utilisation de vos achats sur différentes plateformes, lisez l'article sur [l'accès multiplateforme](../purchases/cross.md).

### Changer l'adresse e-mail {#change-email-address}

Pour mettre à jour votre adresse e-mail :

1. Allez dans **Menu Général → Compte → E-mail → ⋮ → Changer l'e-mail**.
2. Saisissez votre nouvelle adresse e-mail et confirmez.

> 🔒 Un e-mail de vérification sera envoyé à la nouvelle adresse avant que le changement ne soit finalisé.

### Se déconnecter et supprimer le compte {#log-out-and-delete}

Pour vous déconnecter de votre compte OsmAnd Web :

- Ouvrez **Menu Général → Compte**.
- Cliquez sur le bouton **Se déconnecter** pour mettre fin à votre session actuelle.

Pour supprimer définitivement votre compte :

- Faites défiler jusqu'en bas du menu **Compte**.
- Cliquez sur le bouton **Supprimer le compte**.
- Confirmez la suppression. Cette action est irréversible.


## Synchronisation OsmAnd Pro et OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** est un abonnement payant [multiplateforme](../troubleshooting/setup.md#initial-setup). 
- **OsmAnd Start** est une [inscription gratuite à OsmAnd Cloud](https://osmand.net/blog/start).

La capacité multiplateforme vous permet d'utiliser OsmAnd Pro sur toutes les plateformes *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))*. Pour ce faire, vous devez :

1. Vous abonner à **OsmAnd Pro**. Pour en savoir plus sur la manière de le faire pour [Android ici](../purchases/android.md#how-to-buy), et pour [iOS ici](../purchases/ios.md#how-to-buy).
2. Pour savoir comment créer un compte **OsmAnd Start**, lisez plus [ici](https://osmand.net/blog/start#how-to-create-an-account).
3. Enregistrez votre [compte Pro ou Start](/docs/user/personal/osmand-cloud/#cross-platform) sur le serveur OsmAnd à l'intérieur de l'application OsmAnd.
4. L'e-mail enregistré sera votre identifiant pour activer OsmAnd Pro sur la plateforme web. La première fois, il est nécessaire de choisir un mot de passe pour les futures connexions au portail web (veuillez suivre les instructions sur le portail web).


<!--

- Enter your *email* and *password* for [osmand.net/map](https://osmand.net/map/).

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)  

- Your data, such as tracks (OsmAnd Pro) and favorites(OsmAnd Pro and OsmAnd Start), will appear in the menu after you log in. They are available for display on the map. But you need [to sync this data](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) from your devices.

![View OsmAnd Web data](@site/static/img/web/web_data.png)  

- To *DOWNLOAD BACKUP* from [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), click the login field. On the login field you can see files info (total files number, total files size, cloud storage used) and account info (subscription type, start time and expire time of your subscription).

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)  

Choose needed files for downloading, `.zip` or `.osf` format of downloaded files and click *DOWNLOAD BACKUP* button:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_1.png)  

There is also a button to *logout* of the account.  

- *LOGOUT*, *DELETE YOUR ACCOUNT* or *Change email* you find on the login field too. For opening *DELETE YOUR ACCOUNT* or *Change email* you need to click *Dangerous area*.

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_2.png)  


## Cloud data {#cloud-data}

[Tracks and Favorites](web-map.md#tracks).

## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->