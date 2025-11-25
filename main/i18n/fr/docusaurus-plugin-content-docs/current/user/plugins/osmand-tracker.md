---
source-hash: ed4b1b02f7f55c370674eabb71f00501510288e583e3135341a0905ed0b8ad69
sidebar_position: 11
title:  OsmAnd Tracker
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

<InfoAndroidOnly />

## Aperçu {#overview}

OsmAnd Tracker est un client Telegram modifié créé pour un suivi flexible et l'envoi de messages avec des localisations GPS en temps réel.  

[OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) vous aide à voir vos contacts sur une carte dans OsmAnd. Il a un aspect social, ce qui signifie que pour l'utiliser, vous devez autoriser l'accès à vos contacts pour la plateforme choisie par OsmAnd.  

Nous avons choisi [Telegram](https://telegram.org/) comme la plateforme sociale la plus ouverte car elle dispose d'une [API ouverte](https://core.telegram.org/api), d'un SDK ouvert et, de plus, aura à terme une implémentation de serveur ouvert (Blockchain).

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/My_Location.png)  ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/Map.png)


### Comment ça marche {#how-it-works}

Il est important de noter qu'il existe un haut niveau de compatibilité entre les applications. Vous pouvez facilement partager votre position avec vos contacts sans avoir l'application mobile Telegram (OsmAnd Online GPS Tracker est un client Telegram indépendant), et inversement, vos contacts n'ont pas besoin d'avoir [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) pour voir votre position.  

Nous avons conçu [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) pour que vous puissiez continuer à utiliser l'application Telegram et l'application OsmAnd de la manière dont vous en avez l'habitude, sans restrictions supplémentaires.  

L'application envoie des messages de Localisation en direct aux discussions sélectionnées pour la durée que vous avez définie, affiche une liste de vos contacts et groupes, et vérifie les discussions pour les messages contenant votre position, qui sont ensuite affichés sur la carte dans OsmAnd.
L'application n'envoie ni ne consulte vos messages texte.  

Connectez-vous en utilisant votre numéro de téléphone enregistré sur Telegram pour activer les fonctionnalités suivantes :

- Gérer la liste des contacts et des groupes qui vous envoient leur position.
- Voir la position des contacts et des groupes en temps réel sur une carte dans OsmAnd.
- Définir la durée de partage de la position séparément pour chaque discussion.
- Définir la fréquence de mise à jour de votre position.
- Suivre la chronologie de vos déplacements et de ceux de vos contacts.  

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/My-location_1.png)     ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/Live.png)


## Paramètres de configuration requis {#required-setup-parameters}

Vous pouvez installer OsmAnd Online GPS Tracker :

- depuis le [Google Play store](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- ou depuis le [Serveur OsmAnd](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk) (fichier APK)


## Paramètres du plugin {#plugin-settings}

Il existe plusieurs paramètres pour gérer la fréquence de partage des localisations et contrôler l'affichage des localisations qui vous sont envoyées.

Pour ouvrir le menu *Paramètres* :  

*Écran [Ma position](#my-location-screen) → faites défiler l'écran vers le bas (liste de contacts) → ⋮ → Paramètres*  
ou  
*Écran [En direct](#live-now-screen) → ⋮ → Paramètres*  

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/tracker_settings.png) ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Position {#position}

**Envoyer ma position** — vous permet de définir l'intervalle d'envoi de votre position, d'une fois par seconde (pour augmenter la précision) à une fois toutes les 5 minutes (pour réduire la consommation d'énergie).

**Immobile** — vous permet de définir le temps (de 1 minute à 1 heure) après lequel la position d'un contact est considérée comme obsolète. Si une position devient obsolète, elle devient grise.

**Historique des positions** — vous permet de définir le temps (de 5 minutes à 24 heures) après lequel le contact avec la position supprimée sera masqué de la liste et de la carte OsmAnd.

**Envoyer la position en tant que** - vous permet de choisir une catégorie pour l'envoi de messages concernant votre position dans Telegram (3 types d'envoi) : texte, carte, texte et carte.

**Délai d'expiration du tampon** - vous permet de choisir la durée de sauvegarde des points dans le tampon.

**Travail en arrière-plan** - vous permet de modifier les paramètres d'optimisation de la batterie pour stabiliser le partage de la position.

**Source de la localisation** - vous permet de choisir les *Services Google Play* (par défaut) ou l'*API Android* pour déterminer la position.

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/settingstracker.png) ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/20.jpg)


### Unités et formats {#units--formats}

Permet d'ajouter des paramètres pour les unités et les formats. Vous pouvez maintenant choisir des valeurs confortables pour les messages Telegram lors du partage des données de localisation.  

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/22.jpg)  ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/20.jpg)


### Apparence {#appearance}

Permet d'afficher le nombre de points GPS reçus d'autres contacts, ainsi que ceux que vous avez envoyés.


### Confidentialité {#privacy}

Utilisation d'un proxy à l'intérieur d'OsmAnd Tracker. Allez dans les Paramètres et saisissez vos données de proxy : *Paramètres → Confidentialité → Paramètres du proxy*

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/3-1.jpg)  ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/4-1.jpg)


### Paramètres GPS {#gps-settings}

Paramètres des points de localisation. Par exemple, si vous restez au même endroit pendant un certain temps sans bouger, les données de votre point de localisation ne sont pas envoyées et votre trace GPX affichera des données plus précises et exactes.  

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/5-1.jpg)


### Partager la position en tant que {#share-location-as}

Si vous souhaitez connecter plusieurs appareils à un seul compte Telegram, vous devez cliquer sur "Ajouter un appareil" et nommer l'appareil.

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### Connexion OsmAnd {#osmand-connect}

Ce paramètre vous permet de sélectionner la version d'OsmAnd dans laquelle vos contacts avec leur position apparaîtront sur la carte.  

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/Settings-2.png)


### Compte {#account}

Utilisez ce paramètre pour vérifier quel compte Telegram vous utilisez actuellement. Dans ce menu, vous pouvez également vous déconnecter de l'application OsmAnd Telegram en appuyant simplement sur le bouton *Se déconnecter*.  


### Tampon Logcat {#logcat-buffer}

Ici, vous pouvez vérifier et partager les journaux détaillés de l'application.


## Écran Ma position {#my-location-screen}

Sur cet écran, vous pouvez voir vos contacts Telegram. Vous pouvez en sélectionner un ou plusieurs, définir les options de partage et commencer à partager votre position.  

Après le premier lancement, vous verrez une liste de contacts suggérés. Ce sont les cinq contacts les plus récents avec lesquels vous avez partagé votre position. Vous pouvez cliquer une seule fois pour continuer à partager votre position avec ces contacts.  

La durée de partage est la dernière durée de partage que vous avez sélectionnée pour le contact.  

Lorsque vous commencez à partager, vous verrez une liste de contacts suggérés et un bouton *Retour à OsmAnd* sur l'écran *Ma position*.  

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/8.jpg)     ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/9.jpg)


## Écran En direct {#live-now-screen}

Dans ce menu, vous pouvez voir tous les contacts qui partagent une position avec vous. Appuyez sur le contact pour le visualiser sur la **carte OsmAnd**.

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/Live.png)


### Marqueur actif sur la carte OsmAnd {#active-marker-on-the-osmand-map}

Permet de suivre la distance, la vitesse et l'angle de déplacement de vos contacts sur la carte OsmAnd et dans le texte Telegram. Vous pouvez comprendre où et comment votre contact se déplace.  

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/6-1.jpg) ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/7-1.jpg)


## Écran Chronologie {#timeline-screen}

C'est le troisième onglet de l'application. C'est le troisième onglet de l'application. Ici, vous pouvez sélectionner un jour pour voir l'historique des positions partagées avec vous. La sélection d'un jour affiche les contacts qui ont montré leur position ce jour-là.  

Le suivi vous permet de collecter des informations en arrière-plan lorsque vos contacts les partagent. Pour ce faire, vous devez l'activer.

Pour voir toutes les informations sur la position d'un contact, appuyez sur son icône ou ouvrez une trace GPX dans OsmAnd et explorez la trace plus en détail ([en savoir plus ici](./trip-recording.md)). Vous pouvez également partager la trace GPX pour une période sélectionnée : en l'envoyant par e-mail ou via n'importe quelle messagerie instantanée.

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/Timeline_2.png)

Vous pouvez voir le déplacement en ligne de vos contacts sur la carte OsmAnd en utilisant la trace GPS en ligne. Pour ce faire, vous devez activer *En direct* pour le contact dans la *Chronologie*. S'il y a beaucoup de contacts en commun à ce moment-là, l'application OsmAnd sélectionne la couleur des traces au hasard.  

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/1.jpg) ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/2.jpg)

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/3.jpg) ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/4.jpg)

Lorsque vous appuyez sur "Afficher dans OsmAnd" ou sur la mini-carte, vous pouvez sélectionner des paramètres spéciaux pour le suivi GPX de votre contact dans l'application OsmAnd et voir son mouvement en temps réel sur la carte OsmAnd.  

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/5.jpg) ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/6.jpg)

S'il n'y a pas de données collectées à la date sélectionnée, une notification spéciale apparaîtra à l'écran. Vous pouvez vous déplacer à la date la plus proche en appuyant sur la flèche avant ou arrière.  

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/7.jpg)


## Widget du traceur {#tracker-widget}

Pour afficher le [widget](../widgets/info-widgets.md#trip-recording-widgets), vous devez d'abord activer le plugin OsmAnd Tracker. Après cela, un widget avec le mot *Démarrer* apparaîtra dans le coin supérieur droit de l'écran OsmAnd.  

Pour le désactiver, vous pouvez aller dans *Menu principal → Configurer l'écran*.

![Traceur OsmAnd](@site/static/img/plugins/online-tracker/tracker_widget_1.png)   ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

Le widget a plusieurs affichages.  

1. Le premier est *Démarrer*.  
   Lorsque vous appuyez sur *Démarrer*, vous accédez à [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), où vous pouvez sélectionner n'importe quels contacts ou appuyer sur Contacts suggérés.
2. Deuxièmement, lorsque vous commencez à partager votre position, le widget change d'apparence.  

   - L'icône emoji verte *OK* signifie que votre position est en cours de partage. Tout est normal, le partage fonctionne sans erreur.  
   - Une icône emoji orange *OK* signifie que votre position ne peut pas être envoyée. Il y a un problème avec la connexion Internet ou GPS.  

   ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/11.jpg)     ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/13.jpg)

   - Si vous n'avez pas de connexion Internet pendant une longue période, vos points de localisation sont enregistrés dans le tampon d'OsmAnd Tracker. Le widget dans OsmAnd change d'apparence pour une icône emoji grise. Il indique le temps de remplissage du tampon, c'est-à-dire depuis combien de temps le tampon enregistre vos points de localisation.  

   ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/15.jpg)     ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/16.jpg)

3. Dès que la connexion Internet est rétablie, il commencera à télécharger les points de localisation depuis le tampon. Le widget OsmAnd changera d'apparence et le nombre de minutes qu'il contient commencera à diminuer. Lorsque tous les points de localisation du tampon seront téléchargés sur Telegram, l'icône emoji *OK* apparaîtra sur le widget.  

   ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/18.jpg)     ![Traceur OsmAnd](@site/static/img/plugins/online-tracker/23.jpg)

4. Si vous voyez le widget sous la forme d'une icône emoji *OK*, cela signifie que tout va bien. Le processus d'échange se déroule sans aucun problème.  


## OsmAnd Assistant {#osmand-assistant}

L'application OsmAnd a son propre bot Telegram appelé "OsmAnd Assistant", qui vous aide à intégrer OsmAnd Telegram avec des traceurs ou des API tiers. Vous pourrez partager non seulement votre position, mais aussi la position de votre vélo ou d'un groupe de personnes en course disponible via l'API. OsmAnd Telegram vous offrira une belle présentation de vos positions sur la carte dans OsmAnd même.  

Veuillez nous faire part de vos impressions sur cette nouvelle application sur [Twitter](https://x.com/osmandapp) et d'autres canaux sociaux.

Pour voir les positions GPS des contacts sur la carte, vous avez besoin de la dernière version d'[OsmAnd ou OsmAnd+](./../purchases/android.md). La version minimale prise en charge d'OsmAnd ou OsmAnd+ est la 3.0.4.