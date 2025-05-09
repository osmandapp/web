---
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


## Comment restaurer les achats

- **Pour iOS**. Ouvrez OsmAnd et naviguez vers *Menu → Paramètres → Dépannage →* appuyez sur *Restaurer les achats* et entrez votre identifiant Apple. Pour plus de détails, consultez [cet article](../purchases/ios.md#restore-purchases).
- **Pour Android**. Connectez-vous au même compte de magasin d'applications utilisé pour acheter OsmAnd. Recherchez *OsmAnd+* ou *OsmAnd Free* (pour restaurer *Maps+*, *OsmAnd Live* ou *OsmAnd Pro*) et installez l'application.
Aucun paiement supplémentaire n'est requis. Si les fonctionnalités payantes ne sont pas restaurées, accédez aux *Paramètres* de votre appareil *→ Applications →* sélectionnez le magasin d'applications, videz le cache, redémarrez votre appareil et réessayez. Pour plus de détails, consultez [cet article](../purchases/android.md#restore-purchases).

## Achats multiplateformes

**OsmAnd Pro** est un abonnement qui vous permet d'acheter OsmAnd sur une plateforme et d'utiliser les **fonctionnalités payantes** sur d'autres plateformes simultanément. Par exemple, si vous l'achetez via l'un des magasins [Android](../purchases/android.md) (Google Play, Amazon, Huawei AppGallery), vous pouvez également l'utiliser sur [iOS](../purchases/ios.md) et [Web](https://www.osmand.net/map).

Veuillez noter que les autres achats, tels que Maps+, ne peuvent pas être transférés entre les plateformes de facturation, y compris entre Google Play et Amazon sur Android.

**Étapes pour transférer la licence** :

**1. Achat**. Après avoir acheté un abonnement OsmAnd Pro, enregistrez votre adresse e-mail sur [OsmAnd Cloud](../personal/osmand-cloud.md#backup-and-restore-for-osmand-pro).

- Naviguez vers *Menu OsmAnd → Paramètres → OsmAnd Cloud → Créer un nouveau compte*

:::note
***L'enregistrement doit être effectué sur la plateforme où l'abonnement a été acheté.***
:::

**2. Lier**. Liez votre achat à un autre appareil.

- Naviguez vers *Menu OsmAnd → Paramètres → OsmAnd Cloud → J'ai déjà un compte*

**3. Activation**. Enfin, activez les fonctionnalités payantes.

- Naviguez vers *Menu OsmAnd → Paramètres → Achats → Restaurer les achats*


## Comment acheter et restaurer OsmAnd dans la Huawei AppGallery sans les services mobiles Huawei

1. **Acheter OsmAnd** :
   - Tout d'abord, activez *Installer à partir de sources inconnues* dans les paramètres de votre appareil. Vous pouvez généralement trouver cette option dans **Paramètres → Sécurité**.
   - Installez les [Services mobiles Huawei (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/), qui sont essentiels pour la compatibilité des applications.
   - Ensuite, ouvrez *Huawei AppGallery* sur la page [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) et téléchargez l'application.
   - Seule la version gratuite est disponible au téléchargement initialement. Pour effectuer un achat, accédez à *Menu OsmAnd → Paramètres → Achats* et sélectionnez le type requis.
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

## Que faire après la fermeture de l'Amazon Store

Le 20 août 2025, Amazon [fermera l'Amazon Appstore pour les appareils Android](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program). Comment pouvez-vous sauvegarder vos [achats OsmAnd](https://www.amazon.com/s?i=mobile-apps&rh=p_4%3AOsmAnd) effectués via l'Amazon Appstore ?

Alors que nous développons une méthode pour conserver tous vos achats, nous fournirons des instructions détaillées avant la fermeture de l'Amazon Appstore.

## Comment restaurer l'achat du plugin Topographie (anciennement Lignes de contour)

Pour restaurer le [plugin Topographie](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid) :

1. Connectez-vous au même compte Google Play utilisé pour acheter le plugin Topographie et installez [l'application](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Si le bouton *Installer* est inactif, assurez-vous que les applications Google Play et OsmAnd sont à jour. Videz leur cache, redémarrez votre appareil et essayez d'installer le plugin à nouveau.
3. Après l'installation, activez le plugin Topographie dans le *[menu OsmAnd → Plugins](../plugins/topography.md)*, téléchargez les fichiers requis dans les *[Cartes et ressources](../start-with/download-maps.md#maps-and-resources)*, et activez-le via le *[menu Configurer la carte](../map/configure-map-menu.md)*.


## Comment identifier si OsmAnd Unlimited est actif

Naviguez vers *Menu → Télécharger des cartes* et appuyez sur le compteur de cartes (le champ étiqueté *Version gratuite. X téléchargements restants*). Si OsmAnd Unlimited est actif, l'affichage montrera l'espace de stockage restant de l'appareil au lieu du nombre de téléchargements gratuits.


## Que signifient 5 ou 7 téléchargements gratuits ?

Vous avez droit à 5 téléchargements gratuits sur iOS ou 7 sur Android. Chaque téléchargement, qu'il s'agisse d'une carte, d'une mise à jour (les mises à jour de cartes comptent comme des téléchargements), de packs vocaux ou d'autres éléments, réduit le nombre disponible. Veuillez noter que la suppression d'éléments de vos téléchargements ne restaure pas le nombre de téléchargements gratuits.


## Comment puis-je obtenir des téléchargements de cartes supplémentaires dans OsmAnd Free ?

Si vous avez utilisé les 5 (iOS) ou 7 (Android) téléchargements gratuits, vous pouvez recevoir 3 téléchargements supplémentaires en vous *abonnant à la liste de diffusion*. Une bannière avec l'option d'abonnement apparaîtra une fois que tous les téléchargements gratuits auront été utilisés.


## Code de vérification pour OsmAnd Cloud non reçu

Si vous ne recevez pas le **code de vérification** lors de la création d'un compte **OsmAnd Cloud**, suivez ces étapes pour résoudre le problème :

1. Vérifiez votre adresse e-mail.
    Assurez-vous d'avoir saisi la **bonne adresse e-mail**. L'e-mail doit correspondre à celui utilisé pour acheter **OsmAnd Pro** ou enregistrer votre compte **OsmAnd Cloud**.

2. Vérifiez les dossiers de spam.
    Parfois, l'e-mail de vérification peut être filtré comme spam. Recherchez un e-mail d'**OsmAnd** dans vos dossiers **Spam**, **Courrier indésirable** ou **Promotions**.

3. Attendez que le code arrive.
    Dans certains cas, l'e-mail du code d'activation peut être **retardé**. Évitez les **tentatives d'activation multiples** dans un court laps de temps, car cela peut entraîner des retards supplémentaires.

4. Essayez de renvoyer le code.
    Retournez à l'**écran de connexion OsmAnd Cloud** et sélectionnez **Renvoyer le code** si disponible. Attendez quelques minutes avant de demander un autre code.

5. Vérifiez les restrictions du serveur de messagerie.
    Si vous utilisez un **domaine de messagerie d'entreprise ou personnalisé**, vérifiez auprès de votre **fournisseur de messagerie** que l'e-mail n'est pas bloqué. Envisagez d'utiliser un autre service de messagerie (par exemple, Gmail, Outlook) si les problèmes persistent.

<!--
## Purchases & Payments

- Purchase Not Showing
- Purchase Not Restoring
- Payment Issues
- Refund Policy
- Step-by-step solutions to problems with purchases.
- Instructions for clearing the cache of Google Play, Amazon, Huawei AppGallery.
- What to do if the purchase does not appear or the transaction fails.
- Purchase not showing up - recommendations on how to check your account and restore your purchases.
- Payment issues - instructions for contacting Google Play Support in case of paymentissues.


## FAQ

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

-- source-hash: blake2s: c8e1d5a782e9041a7b0ad1447534b245ca9a057e0f06da1205a2b6ec39c42d55 --
