---
source-hash: 249d34089248f4a411146952f1ea1e2ef53fea2a0dd2008cd82e1399a8644950
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

OsmAnd Tracker est un client Telegram modifié créé pour un suivi flexible et l'envoi de messages avec des positions GPS en temps réel.

[OsmAnd tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) vous aide à voir vos contacts sur une carte dans OsmAnd. Il a un aspect social, ce qui signifie que pour l'utiliser, vous devez fournir l'accès à vos contacts pour la plateforme choisie par OsmAnd.

Nous avons choisi [Telegram](https://telegram.org/) comme plateforme sociale la plus ouverte car elle dispose d'une [API ouverte](https://core.telegram.org/api), d'un SDK ouvert et, de plus, aura éventuellement une implémentation de serveur ouvert (Blockchain).

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)


### Comment ça marche {#how-it-works}

Il est important de noter qu'il existe un haut niveau de compatibilité entre les applications. Vous pouvez facilement partager votre position avec vos contacts sans avoir l'application mobile Telegram (OsmAnd Online GPS Tracker est un client Telegram indépendant), et inversement, vos contacts n'ont pas besoin d'avoir [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) pour voir votre position.

Nous avons conçu [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) afin que vous puissiez continuer à utiliser l'application Telegram et l'application OsmAnd de la manière dont vous avez l'habitude, sans restrictions supplémentaires.

L'application envoie des messages de position en direct aux discussions sélectionnées pendant le temps que vous avez défini, affiche une liste de vos contacts et groupes, et vérifie les discussions pour les messages avec votre position, qui sont ensuite affichés sur la carte dans OsmAnd.
L'application n'envoie ni ne visualise vos messages texte.

Connectez-vous en utilisant votre numéro de téléphone enregistré sur Telegram pour activer les fonctions suivantes :

- Gérer la liste des contacts et des groupes qui vous envoient leur position.
- Afficher la position des contacts et des groupes en temps réel sur une carte dans OsmAnd.
- Définir le temps de partage de la position séparément pour chaque discussion.
- Définir la fréquence de mise à jour de votre position.
- Suivre la chronologie de vos déplacements et de ceux de vos contacts.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


## Paramètres de configuration requis {#required-setup-parameters}

Installer l'APK OsmAnd Online GPS Tracker :

- [Google Play store](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- [Serveur OsmAnd](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)


## Paramètres du plugin {#plugin-settings}

Il existe plusieurs paramètres pour gérer la fréquence de partage des positions et contrôler l'affichage des positions qui vous sont envoyées.

Pour ouvrir le menu *Paramètres* :

*Écran [Ma position](#my-location-screen) → faire défiler l'écran vers le bas (liste des contacts) → ⋮ → Paramètres*
ou
*Écran [En direct maintenant](#live-now-screen) → ⋮ → Paramètres*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Position {#position}

**Envoyer ma position** — vous permet de définir l'intervalle d'envoi de votre position, d'une fois par seconde (pour augmenter la précision) à une fois toutes les 5 minutes (pour réduire la consommation d'énergie).

**Ne bouge pas** — vous permet de définir le temps (de 1 minute à 1 heure) après lequel la position d'un contact est considérée comme obsolète. Si une position devient obsolète, elle devient grise.

**Historique des positions** — vous permet de définir le temps (de 5 minutes à 24 heures) après lequel le contact dont la position a été supprimée sera masqué de la liste et de la carte OsmAnd.

**Envoyer la position sous forme de** - vous permet de choisir une catégorie pour l'envoi de messages concernant votre position dans Telegram (3 types d'envoi) : texte, carte, texte et carte.

**Délai d'expiration du tampon** - vous permet de choisir le temps de sauvegarde des points dans le tampon.

**Travail en arrière-plan** - vous permet de modifier les paramètres d'optimisation de la batterie pour stabiliser le partage de position.

**Source de position** - vous permet de choisir *Google Play Services* (par défaut) ou *Android API* pour déterminer la position.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Unités et formats {#units--formats}

Vous permet d'ajouter des paramètres pour les unités et les formats. Vous pouvez maintenant choisir vos valeurs confortables pour les messages Telegram lors du partage de données de position.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Apparence {#appearance}

Vous permet d'afficher le nombre de points GPS reçus d'autres contacts, ainsi que ceux que vous avez envoyés.


### Confidentialité {#privacy}

Utilisation d'un proxy dans OsmAnd Tracker. Allez dans Paramètres et écrivez vos données de proxy : *Paramètres → Confidentialité → Paramètres du proxy*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)


### Paramètres GPS {#gps-settings}

Paramètres des points de position. Par exemple, si vous restez à un endroit pendant un certain temps sans bouger, vos données de point de position ne sont pas envoyées et votre trace GPX affichera des données plus précises et exactes.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)


### Partager la position sous forme de {#share-location-as}

Si vous souhaitez connecter plusieurs appareils à un seul compte Telegram, vous devez cliquer sur "Ajouter un appareil" et nommer l'appareil.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### Connexion OsmAnd {#osmand-connect}

Ce paramètre vous permet de sélectionner la version d'OsmAnd dans laquelle vos contacts avec leur position apparaîtront sur la carte.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)


### Compte {#account}

Utilisez ce paramètre pour vérifier quel compte Telegram vous utilisez actuellement. Dans ce menu, vous pouvez également quitter l'application OsmAnd Telegram en appuyant simplement sur le bouton *Déconnexion*.


### Tampon Logcat {#logcat-buffer}

Ici, vous pouvez vérifier et partager les journaux détaillés de l'application.


## Écran Ma position {#my-location-screen}

Sur cet écran, vous pouvez voir vos contacts Telegram. Vous pouvez en choisir un ou plusieurs, définir les options de partage et commencer à partager votre position.

Après le premier lancement, vous verrez une liste de contacts suggérés. Ce sont les cinq contacts les plus récents avec lesquels vous avez partagé votre position. Vous ne pouvez cliquer qu'une seule fois pour continuer à partager votre position avec ces contacts.

Temps de partage est le dernier temps de partage que vous avez sélectionné pour le contact.

Lorsque vous commencez à partager, vous verrez une liste de contacts suggérés et un bouton *Retour à OsmAnd* sur l'écran *Ma position*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)


## Écran En direct maintenant {#live-now-screen}

Dans ce menu, vous pouvez voir tous les contacts qui partagent une position avec vous. Appuyez sur le contact et regardez-le sur la **carte OsmAnd**.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


### Marqueur actif sur la carte OsmAnd {#active-marker-on-the-osmand-map}

Vous permet de suivre la distance, la vitesse et l'angle de déplacement de vos contacts sur la carte OsmAnd et dans le texte Telegram. Vous pouvez comprendre où et comment votre contact se déplace.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)


## Écran Chronologie {#timeline-screen}

C'est le troisième onglet de l'application. C'est le troisième onglet de l'application. Ici, vous pouvez sélectionner un jour pour afficher l'historique des positions partagées avec vous. La sélection d'un jour affiche les contacts qui ont montré leur position ce jour-là.

Le suivi vous permet de collecter des informations en arrière-plan lorsque vos contacts les partagent. Pour ce faire, vous devez l'activer.

Pour afficher toutes les informations sur la position d'un contact, appuyez sur son icône ou ouvrez une trace GPX dans OsmAnd et explorez la trace plus en détail ([en savoir plus ici](./trip-recording.md)). Vous pouvez également partager la trace GPX pour une période sélectionnée : en l'envoyant par e-mail ou par n'importe quel messager instantané.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

Vous pouvez voir le mouvement en ligne de vos contacts sur la carte OsmAnd à l'aide de la trace GPS en ligne. Pour ce faire, vous devez activer *En direct* au niveau du contact dans la *Chronologie*. S'il y a de nombreux contacts en commun à ce moment-là, l'application OsmAnd sélectionne la couleur des traces au hasard.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

Lorsque vous appuyez sur "Afficher dans OsmAnd" ou sur la mini-carte, vous pouvez sélectionner des paramètres spéciaux pour le suivi GPX de votre contact dans l'application OsmAnd et voir son mouvement en temps réel sur la carte OsmAnd.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

S'il n'y a pas de données collectées à la date sélectionnée, une notification spéciale apparaîtra à l'écran. Vous pouvez passer à la date la plus proche en appuyant sur la flèche avant ou arrière.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)


## Widget Tracker {#tracker-widget}

Pour afficher le [widget](../widgets/info-widgets.md#tracker-widget-android), vous devez d'abord activer le plugin OsmAnd Tracker. Après cela, un widget avec le mot *Démarrer* apparaîtra dans le coin supérieur droit de l'écran OsmAnd.

Pour le désactiver, vous pouvez aller dans *Menu principal → Configurer l'écran*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png)   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

Le widget a plusieurs vues.

1. La première est *Démarrer*.
   Lorsque vous appuyez sur *Démarrer*, vous accédez à [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), où vous pouvez sélectionner n'importe quel contact ou appuyer sur Contacts suggérés.
2. Deuxièmement, lorsque vous commencez à partager votre position, le widget change d'apparence.

   - L'icône emoji verte *OK* signifie que votre position est en cours de partage. Tout est normal, le partage se déroule sans erreur.
   - Une icône emoji orange *OK* signifie que votre position ne peut pas être envoyée. Il y a un problème avec la connexion Internet ou GPS.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

   - Si vous n'avez pas de connexion Internet pendant une longue période, vos points de position sont enregistrés dans le tampon OsmAnd Tracker. Le widget dans OsmAnd change d'apparence pour une icône emoji grise. Il affiche le temps de remplissage du tampon, combien de temps le tampon enregistre déjà vos points de position.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. Dès que la connexion Internet est rétablie, il commencera à télécharger les points de position du tampon. Le widget OsmAnd changera d'apparence et le nombre de minutes qu'il contient commencera à diminuer. Lorsque tous les points de position du tampon sont téléchargés sur Telegram, l'icône emoji *OK* apparaîtra sur le widget.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. Si vous voyez le widget comme une icône emoji *OK*, cela signifie que tout va bien. Le processus d'échange se déroule sans aucun problème.


## Assistant OsmAnd {#osmand-assistant}

L'application OsmAnd dispose de son propre bot Telegram appelé "OsmAnd Assistant", qui vous aide à intégrer OsmAnd Telegram avec des trackers ou des API tiers. Vous pourrez partager non seulement votre position, mais aussi la position de votre vélo ou d'un groupe de personnes participant à une course disponible via l'API. OsmAnd Telegram vous offrira une belle présentation de vos positions sur la carte dans OsmAnd lui-même.

N'hésitez pas à nous faire part de ce que vous pensez de cette nouvelle application sur [Twitter](https://twitter.com/osmandapp) et d'autres canaux sociaux.

Pour afficher les positions GPS des contacts sur la carte, vous avez besoin de la dernière version d'[OsmAnd ou OsmAnd+](./../purchases/android.md). La version minimale prise en charge d'OsmAnd ou OsmAnd+ est 3.0.4.

> *Cet article a été mis à jour pour la dernière fois en juillet 2024*