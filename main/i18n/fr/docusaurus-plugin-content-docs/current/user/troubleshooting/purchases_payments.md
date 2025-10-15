---
source-hash: fc1b2c0235716aa50473c8f887e1a5bd1752fd011931da9e6726f958a0e3fca9
sidebar_position: 2
title:  Achats et paiements
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Achats multiplateformes {#cross-platform-purchases}

**OsmAnd Pro** et **Maps+** (*Toutes les cartes du monde* pour iOS) sont des **abonnements multiplateformes** disponibles pour Android et iOS à partir d'OsmAnd 5.0. Multiplateforme signifie que si vous achetez un abonnement, par exemple, dans l'une des boutiques Android (Google Play, Huawei AppGallery), vous pouvez également l'utiliser sur iOS et dans la version web.

- L'abonnement multiplateforme peut être utilisé sur plusieurs appareils et plateformes **s'il est lié au même compte OsmAnd Cloud**.

- Les achats uniques tels que **OsmAnd+** (Android) et les achats spécifiques à une boutique ne sont pas transférables entre les plateformes.

- Vous pouvez utiliser OsmAnd Pro sur jusqu'à 6 appareils, même s'ils fonctionnent sous des systèmes d'exploitation différents.

- Assurez-vous toujours d'utiliser le même compte OsmAnd Cloud sur tous vos appareils pour accéder à vos achats.

- Pour plus de détails, consultez : [Achats Android](../purchases/android.md), [Achats iOS](../purchases/ios.md), [Achats multiplateformes](../purchases/cross.md) et [Portail cartographique OsmAnd](../purchases/web.md).


### Comment lier votre achat à votre compte OsmAnd Cloud {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Si vous **n'avez pas** de compte OsmAnd Cloud :

    - Ouvrez l'application OsmAnd sur l'appareil où vous avez effectué l'achat.
    - Allez dans *Menu → Paramètres → OsmAnd Cloud*.
    - Appuyez sur **Créer un nouveau compte**.
    - Après avoir créé le compte, allez dans *Menu OsmAnd → Paramètres → Achats*.
    - Appuyez sur **Restaurer les achats** pour lier votre achat à un nouveau compte.

2. Si vous **avez déjà** un compte OsmAnd Cloud :

    - Assurez-vous d'être connecté au compte OsmAnd Cloud sur l'appareil où vous avez effectué l'achat.  
    - Naviguez vers *Menu OsmAnd → Paramètres → OsmAnd Cloud → J'ai déjà un compte*
    - Après vous être connecté à votre compte, allez dans *Menu OsmAnd → Paramètres → Achats*.
    - Appuyez sur **Restaurer les achats** pour synchroniser l'achat avec votre compte.


> Pour plus d'informations, lisez les articles [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform), [Achats multiplateformes](../purchases/cross.md).


### Association d'un achat avec plusieurs comptes OsmAnd Cloud {#purchase-association-with-multiple-osmand-cloud-accounts}


Un achat multiplateforme, tel que _Maps+_ et _Pro_, est lié au compte OsmAnd Cloud qui a été activé en dernier sur l'appareil détenant le reçu d'achat original (de l'App Store ou de Google Play). Si un utilisateur sur cet appareil se déconnecte de son compte principal (`compte OsmAnd Cloud A`) et se connecte à un nouveau (`compte OsmAnd Cloud B`), le système OsmAnd transfère automatiquement la licence au nouveau `compte OsmAnd Cloud B`. Par conséquent, votre compte OsmAnd Cloud original perd son statut d'achat sur les autres plateformes, car la licence ne peut être active que sur un seul compte OsmAnd Cloud à la fois.

Techniquement, cela fonctionne comme suit : l'achat lui-même appartient à votre identifiant Apple ou à votre compte Google, et non à un compte OsmAnd. L'application OsmAnd sur l'appareil avec l'achat informe simplement notre serveur quel compte OsmAnd Cloud est actuellement actif. Le serveur, à son tour, accorde un accès multiplateforme à ce compte. Par conséquent, le dernier compte à se connecter sur l'appareil "principal" devient toujours le détenteur de la licence.

Pour restaurer l'achat sur le bon compte (`compte OsmAnd Cloud A`), vous devez effectuer l'action inverse. Sur le même appareil où l'achat a été effectué, vous devez vous déconnecter du mauvais `compte OsmAnd Cloud B` et vous reconnecter au `compte OsmAnd Cloud A`. Ce processus forcera le système à revérifier le reçu d'achat et à relier la licence au bon `compte OsmAnd Cloud A`, restaurant ainsi son statut multiplateforme.

> Pour plus d'informations, lisez les articles [Achats multiplateformes](../purchases/cross.md).

## Comment acheter et restaurer OsmAnd dans la Huawei AppGallery sans les services mobiles Huawei {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **Acheter OsmAnd** :
   - Tout d'abord, activez *Installer depuis des sources inconnues* dans les paramètres de votre appareil. Vous pouvez généralement trouver cette option dans **Paramètres → Sécurité**.
   - Installez les [Services Mobiles Huawei (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), qui sont essentiels pour la compatibilité des applications.
   - Ensuite, ouvrez la *Huawei AppGallery* sur la page [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) et téléchargez l'application.
   - Seule la version gratuite est disponible au téléchargement initialement. Pour effectuer un achat, allez dans le *Menu OsmAnd → Paramètres → Achats* et sélectionnez le type requis.
   - Pour plus de détails, visitez [cette page](https://osmand.net/docs/user/purchases/android#install-application).

2. **Restaurer l'achat** :
   - Pour restaurer votre achat, connectez-vous à la *Huawei AppGallery* en utilisant le même compte associé à votre achat OsmAnd.
   - Vérifiez votre historique de transactions dans l'[historique des commandes de la Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Vous devrez peut-être mettre à jour la *Huawei AppGallery* et vider le cache pour éviter les problèmes.
   - Pour restaurer vos achats, suivez *Menu → Paramètres → Achats → Restaurer les achats* dans OsmAnd.
   - Pour plus d'informations, consultez l'article [Achats Android](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instructions for setting up Huawei Mobile Services.
- How to buy OsmAnd without HMS Core.
- Restore purchases in the Huawei AppGallery.
-->

## La boutique Amazon ferme - que faire {#amazon-store-is-closing---what-to-do}

Le **20 août 2025**, Amazon fermera l'Amazon Appstore pour les appareils Android. Vous pouvez lire l'annonce officielle [ici](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).

Si vous avez effectué des achats via Amazon, vous devrez **transférer vos abonnements (Pro, Maps+) ou vos achats intégrés (Maps+)** vers une autre plateforme.

➡️ Actuellement, [le transfert multiplateforme est possible pour les abonnements et les achats intégrés](../purchases/cross.md).  
❗ **OsmAnd+** (application autonome) ne peut pas être transféré entre les plateformes via le compte OsmAnd Cloud. Pour obtenir de l'aide, veuillez contacter **support@osmand.net**.

## Comment restaurer l'achat du plugin Topographie (anciennement Lignes de niveau) {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Pour restaurer le [plugin Topographie](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid) :

1. Connectez-vous au même compte Google Play utilisé pour acheter le plugin Topographie, et installez [l'application](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Si le bouton *Installer* est inactif, assurez-vous que les applications Google Play et OsmAnd sont à jour. Videz leur cache, redémarrez votre appareil et essayez de réinstaller le plugin.
3. Après l'installation, activez le plugin Topographie dans le *[Menu OsmAnd → Plugins](../plugins/topography.md)*, téléchargez les fichiers requis dans les *[Cartes et ressources](../start-with/download-maps.md#maps-and-resources)*, et activez-le via le *[menu Configurer la carte](../map/configure-map-menu.md)*.


## Comment savoir si OsmAnd Illimité est actif {#how-to-identify-if-osmand-unlimited-is-active}

Naviguez vers *Menu → Télécharger des cartes* et appuyez sur le compteur de cartes (le champ intitulé *Version gratuite. X téléchargements restants*). Si OsmAnd Illimité est actif, l'affichage montrera l'espace de stockage restant sur l'appareil au lieu du nombre de téléchargements gratuits.


## Puis-je obtenir la version complète d'OsmAnd en tant qu'application distincte pour iOS ? {#can-i-get-the-full-version-of-osmand-as-a-separate-app-for-ios}

Pour iOS, il n'existe qu'une seule version d'OsmAnd. Pour accéder à la version complète, vous devez débloquer des fonctions supplémentaires via des achats intégrés.


## Que signifient 5 ou 7 téléchargements gratuits ? {#what-do-5-or-7-free-downloads-mean}

Vous avez droit à 5 téléchargements gratuits sur iOS ou 7 sur Android. Chaque téléchargement, qu'il s'agisse d'une carte, d'une mise à jour (les mises à jour de cartes comptent comme des téléchargements), de packs vocaux ou d'autres éléments, réduit le nombre disponible. Veuillez noter que la suppression d'éléments de vos téléchargements ne restaure pas le nombre de téléchargements gratuits.


## Comment puis-je obtenir des téléchargements de cartes supplémentaires dans OsmAnd Gratuit ? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Si vous avez utilisé tous les 5 (iOS) ou 7 (Android) téléchargements gratuits, vous pouvez recevoir 3 téléchargements supplémentaires en vous *abonnant à la liste de diffusion*. Une bannière avec l'option d'abonnement apparaîtra une fois que tous les téléchargements gratuits auront été utilisés.


## Code de vérification pour OsmAnd Cloud non reçu {#verification-code-for-osmand-cloud-not-received}

Si vous ne recevez pas le **code de vérification** lors de la création d'un compte **OsmAnd Cloud**, suivez ces étapes pour résoudre le problème :  

1. Vérifiez votre adresse e-mail.  
    Assurez-vous d'avoir saisi la **bonne adresse e-mail**. L'e-mail doit correspondre à celui utilisé pour l'achat d'**OsmAnd Pro** ou l'enregistrement de votre compte **OsmAnd Cloud**.  

2. Vérifiez les dossiers de spam.  
    Parfois, l'e-mail de vérification peut être filtré comme spam. Recherchez un e-mail d'**OsmAnd** dans vos dossiers **Spam**, **Courrier indésirable** ou **Promotions**.  

3. Attendez que le code arrive.  
    Dans certains cas, l'e-mail avec le code d'activation peut être **retardé**. Évitez les **tentatives d'activation multiples** sur une courte période, car cela peut entraîner des retards supplémentaires.  

4. Essayez de renvoyer le code.  
    Retournez à l'**écran de connexion d'OsmAnd Cloud** et sélectionnez **Renvoyer le code** si disponible. Attendez quelques minutes avant de demander un autre code.  

5. Vérifiez les restrictions du serveur de messagerie.  
    Si vous utilisez un **domaine de messagerie d'entreprise ou personnalisé**, vérifiez auprès de votre **fournisseur de messagerie** que l'e-mail n'est pas bloqué. Envisagez d'utiliser un autre service de messagerie (par exemple, Gmail, Outlook) si les problèmes persistent.

<!--
## Purchases & Payments {#purchases--payments}

- Purchase Not Showing
- Purchase Not Restoring
- Payment Issues
- Refund Policy
- Step-by-step solutions to problems with purchases.
- Instructions for clearing the cache of Google Play, Huawei AppGallery.
- What to do if the purchase does not appear or the transaction fails.
- Purchase not showing up - recommendations on how to check your account and restore your purchases.
- Payment issues - instructions for contacting Google Play Support in case of paymentissues.


## FAQ {#faq}

- Can I transfer a purchase between Android and iOS?
- Can I use a purchase on multiple devices?
- Why does the purchase not appear?
- Where can I find payment details?
- Can I transfer OsmAnd+ between Android and iOS?
- How can I restore purchases after reinstalling the app?
- What is OsmAnd Pro and what are its advantages?
- Can I activate my subscription without Google Play?
- Can I share my purchase with my family?
- How do I transfer OsmAnd+ to another phone?
- Why doesn't my purchase appear after reinstalling?
- Why can't I resume my purchase?
- How do I know if my subscription is active?
- Can I use one purchase on multiple devices?
- Can I buy OsmAnd without Google Play?
- Where can I find my payment details?
-->