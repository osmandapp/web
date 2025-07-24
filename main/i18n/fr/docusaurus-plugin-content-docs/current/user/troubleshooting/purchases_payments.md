---
source-hash: 7c4671ddc27bfd8d4ca740b871d3d605e6d6fb13c5bf804282724603b5068740
sidebar_position: 2
title: Achats et paiements
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Achats multiplateformes {#cross-platform-purchases}

**OsmAnd Pro** et **Maps+** (*Toutes les cartes du monde* pour iOS) sont des **abonnements multiplateformes** disponibles pour Android et iOS à partir d'OsmAnd 5.0. Multiplateforme signifie que si vous achetez un abonnement, par exemple, dans l'un des magasins Android (Google Play, Huawei AppGallery), vous pouvez également l'utiliser sur iOS et dans la version web.

- L'abonnement multiplateforme peut être utilisé sur plusieurs appareils et plateformes **s'il est lié au même compte OsmAnd Cloud**.

- Les achats uniques tels que **OsmAnd+** (Android) et les achats spécifiques au magasin ne sont pas transférables entre les plateformes.

- Vous pouvez utiliser OsmAnd Pro sur un maximum de 6 appareils, même s'ils fonctionnent avec des systèmes d'exploitation différents.

- Assurez-vous toujours d'utiliser le même compte OsmAnd Cloud sur tous les appareils pour accéder à vos achats.

- Pour plus de détails, voir : [Achats Android](../purchases/android.md), [Achats iOS](../purchases/ios.md) et [Portail cartographique OsmAnd](https://www.osmand.net/map).


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
   - Vérifiez l'historique de vos transactions dans l'[historique des commandes de Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Vous devrez peut-être mettre à jour *Huawei AppGallery* et vider le cache pour éviter les problèmes.
   - Pour restaurer vos achats, suivez *Menu → Paramètres → Achats → Restaurer les achats* dans OsmAnd.
   - Pour plus d'informations, consultez l'article [Achats Android](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instructions pour la configuration des services mobiles Huawei.
- Comment acheter OsmAnd sans HMS Core.
- Restaurer les achats dans la Huawei AppGallery.
-->

## Le magasin Amazon ferme - que faire {#amazon-store-is-closing---what-to-do}

Le 20 août 2025, Amazon fermera l'Amazon Appstore pour les appareils Android — détails [ici](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).

Vous devez transférer les achats effectués via Amazon vers d'autres plateformes.
Actuellement, [il est possible de transférer les abonnements, les achats intégrés et l'application OsmAnd+](../purchases/cross.md).



## Comment restaurer l'achat du plugin Topographie (anciennement Lignes de contour) {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Pour restaurer le [plugin Topographie](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid) :

1. Connectez-vous au même compte Google Play utilisé pour acheter le plugin Topographie et installez [l'application](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Si le bouton *Installer* est inactif, assurez-vous que les applications Google Play et OsmAnd sont à jour. Videz leur cache, redémarrez votre appareil et essayez d'installer le plugin à nouveau.
3. Après l'installation, activez le plugin Topographie dans le *[menu OsmAnd → Plugins](../plugins/topography.md)*, téléchargez les fichiers requis dans les *[Cartes et ressources](../start-with/download-maps.md#maps-and-resources)*, et activez-le via le *[menu Configurer la carte](../map/configure-map-menu.md)*.


## Comment savoir si OsmAnd Unlimited est actif {#how-to-identify-if-osmand-unlimited-is-active}

Naviguez vers *Menu → Télécharger des cartes* et appuyez sur le compteur de cartes (le champ intitulé *Version gratuite. X téléchargements restants*). Si OsmAnd Unlimited est actif, l'affichage montrera l'espace de stockage restant de l'appareil au lieu du nombre de téléchargements gratuits.


## Que signifient 5 ou 7 téléchargements gratuits ? {#what-do-5-or-7-free-downloads-mean}

Vous avez droit à 5 téléchargements gratuits sur iOS ou 7 sur Android. Chaque téléchargement, qu'il s'agisse d'une carte, d'une mise à jour (les mises à jour de cartes comptent comme des téléchargements), de packs vocaux ou d'autres éléments, réduit le nombre disponible. Veuillez noter que la suppression d'éléments de vos téléchargements ne restaure pas le nombre de téléchargements gratuits.


## Comment puis-je obtenir des téléchargements de cartes supplémentaires dans OsmAnd Free ? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Si vous avez utilisé tous les 5 (iOS) ou 7 (Android) téléchargements gratuits, vous pouvez recevoir 3 téléchargements supplémentaires en vous *abonnant à la liste de diffusion*. Une bannière avec l'option d'abonnement apparaîtra une fois que tous les téléchargements gratuits auront été utilisés.


## Code de vérification pour OsmAnd Cloud non reçu {#verification-code-for-osmand-cloud-not-received}

Si vous ne recevez pas le **code de vérification** lors de la création d'un compte **OsmAnd Cloud**, suivez ces étapes pour résoudre le problème :

1. Vérifiez votre adresse e-mail.
    Assurez-vous d'avoir entré la **bonne adresse e-mail**. L'e-mail doit correspondre à celui utilisé pour acheter **OsmAnd Pro** ou enregistrer votre compte **OsmAnd Cloud**.

2. Vérifiez les dossiers de spam.
    Parfois, l'e-mail de vérification peut être filtré comme spam. Recherchez un e-mail d'**OsmAnd** dans vos dossiers **Spam**, **Courrier indésirable** ou **Promotions**.

3. Attendez l'arrivée du code.
    Dans certains cas, l'e-mail du code d'activation peut être **retardé**. Évitez les **tentatives d'activation multiples** dans un court laps de temps, car cela peut entraîner des retards supplémentaires.

4. Essayez de renvoyer le code.
    Retournez à l'**écran de connexion d'OsmAnd Cloud** et sélectionnez **Renvoyer le code** si disponible. Attendez quelques minutes avant de demander un autre code.

5. Vérifiez les restrictions du serveur de messagerie.
    Si vous utilisez un **domaine de messagerie d'entreprise ou personnalisé**, vérifiez auprès de votre **fournisseur de messagerie** que l'e-mail n'est pas bloqué. Envisagez d'utiliser un autre service de messagerie (par exemple, Gmail, Outlook) si les problèmes persistent.

<!--
## Achats et paiements {#purchases--payments}

- Achat non affiché
- Achat non restauré
- Problèmes de paiement
- Politique de remboursement
- Solutions étape par étape aux problèmes d'achats.
- Instructions pour vider le cache de Google Play, Huawei AppGallery.
- Que faire si l'achat n'apparaît pas ou si la transaction échoue.
- Achat non affiché - recommandations sur la façon de vérifier votre compte et de restaurer vos achats.
- Problèmes de paiement - instructions pour contacter le support Google Play en cas de problèmes de paiement.


## FAQ {#faq}

- Puis-je transférer un achat entre Android et iOS ?
- Puis-je utiliser un achat sur plusieurs appareils ?
- Pourquoi l'achat n'apparaît-il pas ?
- Où puis-je trouver les détails de paiement ?
- Puis-je transférer OsmAnd+ entre Android et iOS ?
- Comment puis-je restaurer les achats après avoir réinstallé l'application ?
- Qu'est-ce qu'OsmAnd Pro et quels sont ses avantages ?
- Puis-je activer mon abonnement sans Google Play ?
- Puis-je partager mon achat avec ma famille ?
- Comment transférer OsmAnd+ vers un autre téléphone ?
- Pourquoi mon achat n'apparaît-il pas après la réinstallation ?
- Pourquoi ne puis-je pas reprendre mon achat ?
- Comment savoir si mon abonnement est actif ?
- Puis-je utiliser un achat sur plusieurs appareils ?
- Puis-je acheter OsmAnd sans Google Play ?
- Où puis-je trouver mes détails de paiement ?
-->