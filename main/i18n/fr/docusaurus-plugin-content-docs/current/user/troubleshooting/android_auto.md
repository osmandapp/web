---
source-hash: e245d0a8d185e0eb4570fd1b908d1c8ccda0b97d189a853407a98e84348a2b57
sidebar_position: 7
title: Android Auto
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Retards de localisation (plantages ANR) {#location-delays-anr-crashes}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_troubleshooting_1.png)

Android Auto et OsmAnd peuvent détecter simultanément la position du véhicule, ce qui peut entraîner un délai de 3 à 5 secondes dans l'affichage des informations dans les widgets associés ou un blocage. Pour éviter cela, il est nécessaire de :

1. Ouvrez les paramètres d'Android Auto.
2. Dans Paramètres, recherchez Autorisations de localisation.
3. Cette section affiche une liste d'applications autorisées à utiliser la localisation dans Android Auto. Recherchez l'application OsmAnd et autorisez l'utilisation de la localisation.
4. La localisation ne sera désormais détectée que par l'application OsmAnd dans Android Auto, ce qui évitera les retards dans l'affichage des informations de localisation.


## Problème d'orientation de la carte {#map-orientation-issue}

L'orientation de la carte dans le sens du mouvement est [inversée et tremble](https://github.com/osmandapp/OsmAnd/issues/16041). Résolu en activant l'option ["Orientation approximative"](../navigation/guidance/map-during-navigation.md#map-during-navigation) :

- Visible uniquement si [Développement OsmAnd](../plugins/development.md) est activé.
- Placé dans *Menu → Paramètres → Profil → Paramètres de navigation → [Carte pendant la navigation](../navigation/guidance/map-during-navigation.md) → Orientation approximative*.


## Problème de contrôle du volume {#volume-control-issue}

Dans la plupart des cas, tous les types de **signaux** restent à un volume constant et maximal, qui n'est pas affecté par les paramètres de lecture audio simultanée. Pour modifier le volume des invites de navigation OsmAnd lors de l'utilisation d'Android Auto, accédez à *Configuration → Voix → Volume de la voix* sur l'écran du système multimédia du véhicule.  

Si cette méthode ne fonctionne pas, il existe une autre option. Pour régler le volume des notifications, vous devez activer Google Assistant pendant un appel. Maintenez enfoncé le bouton du volant qui active Google Assistant, et pendant l'appel, réglez le volume à l'aide du tableau de bord ou du volant.