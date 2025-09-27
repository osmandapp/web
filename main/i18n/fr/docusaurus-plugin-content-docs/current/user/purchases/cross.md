---
source-hash: 803b22736228c5b37a1814163faeb441138781434f1ba2a3069b7668f1ffe213
sidebar_position: 4
title:  Achats multiplateformes
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



## Achats multiplateformes pris en charge {#supported-cross-platform-purchases}

Les produits OsmAnd suivants prennent actuellement en charge une utilisation sur plusieurs plateformes (Android, iOS et Web) :

- Abonnement **OsmAnd Pro**  
- Abonnement **Maps+**  
- Achat unique intégré **Maps+**

À partir de la **version 5.1 d'OsmAnd**, publiée pour célébrer notre **15e anniversaire**, l'accès multiplateforme a été étendu à **Maps+** (anciennement connu sous le nom d'*Illimité*). Auparavant, seul l'abonnement [OsmAnd Pro](../personal/osmand-cloud.md#cross-platform) était multiplateforme.  

Pour activer l'accès multiplateforme, les achats doivent être liés à votre compte [OsmAnd Cloud](../personal/osmand-cloud.md#login).  
Vous pouvez comparer tous les produits OsmAnd ici : [différence entre les achats](https://osmand.net/docs/user/purchases/android/#difference-between-purchases)

| **Type de produit**               | **Multiplateforme** | **Remarques**                                                                 |
|-------------------------------|--------------------|--------------------------------------------------------------------------|
| **OsmAnd Pro** (abonnement) | ✔                  | Fonctionne après connexion à OsmAnd Cloud sur Android, iOS et Web lorsqu'il est lié au Cloud. |
| **Maps+** (abonnement)      | ✔                  | Utilisable sur toutes les plateformes, mais doit être activé via OsmAnd Cloud **sur l'appareil d'achat**.     |
| **Maps+** (achat unique) | ✔                  | Utilisable sur toutes les plateformes, mais doit être activé via OsmAnd Cloud **sur l'appareil d'achat**. |
| **OsmAnd+** (application autonome)  | ✘                  | Non transférable par défaut entre les plateformes, nécessite un enregistrement manuel de l'achat sur le compte OsmAnd Cloud. Pour obtenir de l'aide, contactez support@osmand.net. |


## Comment ça marche {#how-it-works}

Pour utiliser votre achat **OsmAnd Pro** ou **Maps+** sur différentes plateformes (Android, iOS ou Web), vous devez **le lier à votre compte OsmAnd Cloud**.

### Lier votre achat {#link-your-purchase}

![Lien Cloud](@site/static/img/purchases/cloud_activation.png)

Effectuez cette étape sur l'**appareil où vous avez effectué l'achat** (Android ou iOS, version 5.0 ou ultérieure) :

1. Allez sur votre [compte OsmAnd Cloud](../personal/osmand-cloud.md#login) :  
   _Menu → Paramètres → OsmAnd Cloud → Créer un nouveau compte / J'ai déjà un compte_

2. Une fois connecté, votre achat **Pro** ou **Maps+** sera automatiquement lié à votre **compte Cloud** et marqué comme **multiplateforme**, *s'il n'était pas déjà lié à un autre compte.*



### Activer sur un autre appareil ou une autre plateforme {#activate-on-another-device-or-platform}

![Maps+ multiplateforme](@site/static/img/purchases/cross_purchase.png)
![Maps+ multiplateforme](@site/static/img/purchases/cross_purchase_1.png)

1. Allez sur votre [compte OsmAnd Cloud](../personal/osmand-cloud.md#login) :  
   *Menu → Paramètres → OsmAnd Cloud →* ***Connectez-vous avec le même compte***

2. Ensuite, allez dans :  
   *Menu → Paramètres → Achats*  
   Votre achat **Pro ou Maps+** lié devrait maintenant être disponible.


### Dépannage {#troubleshooting}

Si vous ne voyez pas votre achat dans la liste :

1. Appuyez sur *Menu → Paramètres → Achats → Restaurer les achats*  
2. Assurez-vous d'être connecté au **même compte OsmAnd Cloud** que celui utilisé sur l'appareil d'origine.

Si le problème persiste, contactez **support@osmand.net** et incluez :

- Votre e-mail de compte OsmAnd Cloud.
- La ou les plateformes et les boutiques d'applications utilisées.
- Le type d'achat (Pro / Maps+ achat unique / Maps+ abonnement).


### Achats et comptes multiples {#purchases-and-multiple-accounts}

Un achat multiplateforme est lié au compte OsmAnd Cloud qui a été activé en dernier sur l'appareil détenant le reçu d'achat original (de l'App Store ou de Google Play). Si vous vous déconnectez de votre compte principal et vous connectez à un nouveau compte sur cet appareil, le système transfère automatiquement la licence au nouveau compte. Par conséquent, votre compte OsmAnd Cloud original perd son statut d'achat sur les autres plateformes, car la licence ne peut être active que sur un seul compte OsmAnd Cloud à la fois. Plus d'informations sont disponibles [ici](../troubleshooting/purchases_payments.md#purchase-association-with-multiple-osmand-cloud-accounts).


## Exemple {#example}

Vous avez acheté **Maps+** en tant qu'achat unique intégré dans la version gratuite d'OsmAnd depuis l'[Amazon Appstore](https://www.amazon.com/OsmAnd-Maps-Navigation/dp/B00D0SA8I8).  
Plus tard, vous décidez de passer à un iPhone et souhaitez utiliser **Maps+** avec la [version iOS d'OsmAnd](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257).

Pour activer votre achat Maps+ sur iOS :

1. Ouvrez la **version Amazon** de l'application OsmAnd sur votre appareil d'origine.
2. Connectez-vous à votre [compte OsmAnd Cloud](../personal/osmand-cloud.md#login) :  
   *Menu → Paramètres → OsmAnd Cloud → Créer un nouveau compte / J'ai déjà un compte*
3. Installez OsmAnd sur votre iPhone depuis l'[App Store](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257)
4. Connectez-vous au **même compte OsmAnd Cloud** sur votre iPhone.
5. Allez dans *Menu → Paramètres → Achats* et confirmez que **Maps+** est listé comme actif.

Ceci termine l'activation multiplateforme de votre achat. Vous pouvez maintenant continuer à utiliser **Maps+** sur votre nouvel appareil.

Profitez de l'utilisation de Maps+/Pro sur toutes les plateformes !


## Articles connexes {#related-articles}

- [OsmAnd Cloud](../personal/osmand-cloud.md)  
- [Dépannage des achats](../troubleshooting/purchases_payments.md)  
- [Différence entre les achats Android](./android.md#difference-between-purchases-android)
- [Différence entre les achats iOS](./ios.md#difference-between-purchases-ios)