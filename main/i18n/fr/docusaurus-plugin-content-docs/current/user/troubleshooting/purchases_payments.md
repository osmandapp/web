---
source-hash: 212ac4c80976038c3369ba42db713fb837385f1080dd80dd1129601cbee0ccec
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

**OsmAnd Pro** et **Maps+** (*All World Maps* pour iOS) sont des **abonnements multiplateformes** disponibles pour Android et iOS à partir d'OsmAnd 5.0. Multiplateforme signifie que si vous achetez un abonnement, par exemple, dans l'un des magasins Android (Google Play, Huawei AppGallery), vous pouvez également l'utiliser sur iOS et dans la version web.

- L'abonnement multiplateforme peut être utilisé sur plusieurs appareils et plateformes **s'il est lié au même compte OsmAnd Cloud**.

- Les achats uniques tels qu'**OsmAnd+** (Android) et les achats spécifiques aux magasins ne sont pas transférables entre les plateformes.

- Vous pouvez utiliser OsmAnd Pro sur jusqu'à 6 appareils, même s'ils fonctionnent sous des systèmes d'exploitation différents.

- Assurez-vous toujours d'utiliser le même compte OsmAnd Cloud sur tous les appareils pour accéder à vos achats.

- Pour plus de détails, voir : [Achats Android](../purchases/android.md), [Achats iOS](../purchases/ios.md), et [Portail cartographique OsmAnd](https://www.osmand.net/map).


### Comment lier votre achat à un compte OsmAnd Cloud {#how-to-link-your-purchase-to-osmand-cloud-account}

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


> Pour plus d'informations, lisez l'article [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform).


## Comment acheter et restaurer OsmAnd dans la Huawei AppGallery sans les services mobiles Huawei {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **Acheter OsmAnd** :
   - Tout d'abord, activez *Installer à partir de sources inconnues* dans les paramètres de votre appareil. Vous pouvez généralement trouver cette option dans **Paramètres → Sécurité**.
   - Installez les [Services mobiles Huawei (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), qui sont essentiels pour la compatibilité des applications.
   - Ensuite, ouvrez *Huawei AppGallery* sur la page [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) et téléchargez l'application.
   - Seule la version gratuite est disponible au téléchargement initialement. Pour effectuer un achat, allez dans *Menu OsmAnd → Paramètres → Achats* et sélectionnez le type requis.
   - Pour plus de détails, visitez [cette page](https://osmand.net/docs/user/purchases/android#install-application).

2. **Restaurer l'achat** :
   - Pour restaurer votre achat, connectez-vous à *Huawei AppGallery* en utilisant le même compte associé à votre achat OsmAnd.
   - Vérifiez votre historique de transactions dans l'[historique des commandes de Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Vous devrez peut-être mettre à jour *Huawei AppGallery* et vider le cache pour éviter les problèmes.
   - Pour restaurer vos achats, suivez *Menu → Paramètres → Achats → Restaurer les achats* dans OsmAnd.
   - Pour plus d'informations, consultez l'article [Achats Android](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instructions for setting up Huawei Mobile Services.
- How to buy OsmAnd without HMS Core.
- Restore purchases in the Huawei AppGallery.
-->

## Le magasin Amazon ferme - que faire {#amazon-store-is-closing---what-to-do}

Nous travaillons sur une solution pour transférer les achats effectués via Amazon vers d'autres plateformes.  
Actuellement, [il est possible de transférer les abonnements et les achats intégrés](../purchases/cross.md).  
L'option de transfert de l'application OsmAnd+ est toujours en cours de développement.  

Le 20 août 2025, Amazon fermera l'Amazon Appstore pour les appareils Android — détails [ici](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).


## Comment restaurer l'achat du plugin Topographie (anciennement courbes de niveau) {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Pour restaurer le [plugin Topographie](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid) :

1. Connectez-vous au même compte Google Play utilisé pour acheter le plugin Topographie et installez [l'application](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Si le bouton *Installer* est inactif, assurez-vous que les applications Google Play et OsmAnd sont à jour. Videz leur cache, redémarrez votre appareil et essayez d'installer le plugin à nouveau.
3. Après l'installation, activez le plugin Topographie dans le *[Menu OsmAnd → Plugins](../plugins/topography.md)*, téléchargez les fichiers requis dans les *[Cartes et ressources](../start-with/download-maps.md#maps-and-resources)*, et activez-le via le *[Menu Configurer la carte](../map/configure-map-menu.md)*.


## Comment identifier si OsmAnd Unlimited est actif {#how-to-identify-if-osmand-unlimited-is-active}

Naviguez vers *Menu → Télécharger des cartes* et appuyez sur le compteur de cartes (le champ étiqueté *Version gratuite. X téléchargements restants*). Si OsmAnd Unlimited est actif, l'affichage montrera l'espace de stockage restant de l'appareil au lieu du nombre de téléchargements gratuits.


## Que signifient 5 ou 7 téléchargements gratuits ? {#what-do-5-or-7-free-downloads-mean}

Vous avez droit à 5 téléchargements gratuits sur iOS ou 7 sur Android. Chaque téléchargement, qu'il s'agisse d'une carte, d'une mise à jour (les mises à jour de cartes comptent comme des téléchargements), de packs vocaux ou d'autres éléments, réduit le nombre disponible. Veuillez noter que la suppression d'éléments de vos téléchargements ne restaure pas le nombre de téléchargements gratuits.


## Comment puis-je obtenir des téléchargements de cartes supplémentaires dans OsmAnd Free ? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Si vous avez utilisé tous les 5 (iOS) ou 7 (Android) téléchargements gratuits, vous pouvez recevoir 3 téléchargements supplémentaires en *vous abonnant à la liste de diffusion*. Une bannière avec l'option d'abonnement apparaîtra une fois que tous les téléchargements gratuits auront été utilisés.


## Code de vérification pour OsmAnd Cloud non reçu {#verification-code-for-osmand-cloud-not-received}

Si vous ne recevez pas le **code de vérification** lors de la création d'un compte **OsmAnd Cloud**, suivez ces étapes pour résoudre le problème :  

1. Vérifiez votre adresse e-mail.  
    Assurez-vous d'avoir saisi la **bonne adresse e-mail**. L'e-mail doit correspondre à celui utilisé pour l'achat d'**OsmAnd Pro** ou l'enregistrement de votre compte **OsmAnd Cloud**.  

2. Vérifiez les dossiers de spam.  
    Parfois, l'e-mail de vérification peut être filtré comme spam. Recherchez un e-mail d'**OsmAnd** dans vos dossiers **Spam**, **Courrier indésirable** ou **Promotions**.  

3. Attendez que le code arrive.  
    Dans certains cas, l'e-mail du code d'activation peut être **retardé**. Évitez les **tentatives d'activation multiples** dans un court laps de temps, car cela peut entraîner des retards supplémentaires.  

4. Essayez de renvoyer le code.  
    Retournez à l'écran de connexion **OsmAnd Cloud** et sélectionnez **Renvoyer le code** si disponible. Attendez quelques minutes avant de demander un autre code.  

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