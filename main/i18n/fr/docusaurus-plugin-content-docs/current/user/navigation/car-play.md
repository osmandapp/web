---
sidebar_position: 10
title:  CarPlay
android: false
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


## Aperçu

Conduire un véhicule et utiliser son téléphone ou sa tablette en même temps est généralement interdit par la loi pour des raisons de sécurité. [***CarPlay***](https://www.apple.com/ios/carplay/) est un logiciel qui fournit une version adaptée et optimisée de l'application OsmAnd pour une utilisation en toute sécurité pendant la conduite, ce qui facilite et sécurise l'accès aux fonctions de navigation de l'application.

Pour utiliser *CarPlay* sur l'écran de votre véhicule, suivez ces étapes :

1. *CarPlay* n'est pas disponible dans tous les pays. Assurez-vous qu'il est pris en charge dans votre [pays ou région](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) et que *CarPlay* est pris en charge dans votre [modèle de véhicule](https://www.apple.com/ios/carplay/available-models/).
2. [Connectez votre appareil](https://support.apple.com/en-gb/HT203412) au système multimédia de votre véhicule à l'aide d'un port USB ou sans fil avec Wi-Fi ou Bluetooth. Lors de la première connexion, vous devrez peut-être autoriser l'utilisation de *CarPlay* sur votre appareil.
3. Une fois connecté, l'interface *CarPlay* apparaîtra automatiquement sur l'écran de votre véhicule avec toutes les applications disponibles. Si l'écran d'accueil *CarPlay* n'apparaît pas, sélectionnez le *logo CarPlay* sur l'écran du véhicule.

#### Interface CarPlay

*CarPlay* n'est **pas une réplication directe** de l'application mobile OsmAnd. Il possède une interface simplifiée, axée sur les fonctions de navigation essentielles pour garantir une conduite en toute sécurité. Certaines fonctionnalités avancées ne sont pas prises en charge en raison des limitations de la plateforme.

### Écran de connexion

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)

Lorsque votre appareil est connecté à *CarPlay*, la carte sur l'écran de l'application est verrouillée. Il s'agit d'une fonction de sécurité intentionnelle pour garantir que la navigation est contrôlée exclusivement à partir de l'écran de la voiture, minimisant ainsi les distractions pendant la conduite. Consultez les [questions courantes](#common-issues-and-solutions) concernant l'écran de connexion.


### Position de l'emplacement dans CarPlay

L'application OsmAnd pour *CarPlay* vous permet d'ajuster la position de l'indicateur de position actuelle sur l'écran pour éviter de chevaucher l'itinéraire et d'autres détails importants de la carte.

**Comment modifier la position de l'indicateur :**

- Accédez à *Menu → Configurer l'écran → Autre → [Position de l'emplacement sur l'écran](../widgets/configure-screen.md#display-position-location-position-on-screen)*.
- Sélectionnez votre emplacement préféré :
    - **Automatique (par défaut)**. L'application déplace automatiquement la position de l'indicateur pour le mode navigation ou le déplacement libre.
    - **Centre**. L'indicateur est placé au centre de l'écran, adapté à la navigation standard.
    - **Bas**. L'indicateur est positionné plus près du bas de l'écran, ce qui facilite l'observation des objets environnants et des intersections complexes.

### Interaction avec la carte

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)

*CarPlay* affiche l'interface OsmAnd adaptée à l'écran du système multimédia du véhicule. L'interaction avec la carte est limitée à :

- [Ma position](../widgets/map-buttons.md#my-location-and-zoom). Déplace la partie visible de la carte de manière à ce que votre position actuelle soit au centre de l'écran.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Vous permet de zoomer et de dézoomer sur la partie visible de la carte.


## Paramètres de configuration requis

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-select-point-1.png)

- Tout d'abord, vous devez sélectionner et configurer le profil à utiliser lors de la connexion à *CarPlay*. Vous pouvez lire comment configurer un profil dans l'article [Profils (Paramètres)](../personal/profiles).
    - Un profil pratique pour utiliser *CarPlay* peut être *Conduite*, et le type de routage peut être [Routage automobile](../navigation/routing/car-based-routing.md).
    - OsmAnd a un élément distinct [Profil CarPlay](#carplay-profile) pour un accès rapide à la liste des profils disponibles pour la connexion à *CarPlay*.
- Pour qu'OsmAnd fonctionne, [connectez votre appareil iOS](#overview) au système multimédia du véhicule. Pour en savoir plus sur la façon de connecter et de configurer votre appareil, vous pouvez visiter le site Web [**CarPlay**](https://support.apple.com/en-us/HT205634).
- Vous devez disposer d'une des [versions payantes ou d'un abonnement OsmAnd](../purchases/ios#free-and-paid-features). Vérifiez-le ici *Menu → Paramètres → Achats*.
- Une fois connecté, vous pouvez définir une destination et démarrer la navigation OsmAnd dans *CarPlay*.

:::note
Vous pourriez avoir besoin d'une connexion Internet pour utiliser OsmAnd dans *CarPlay*. Si votre appareil a un accès Internet limité, vous pouvez [*précharger ou créer des itinéraires*](../personal/tracks/manage-tracks.md) et les utiliser sans Internet.
:::


### Démarrer la navigation

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-start(1).png)

Pour utiliser la version iOS de l'application OsmAnd dans *CarPlay*, vous devez acheter une [version payante de l'application ou vous abonner](../purchases/ios#free-and-paid-features).

1. Pour créer un itinéraire, vous devez choisir le [point d'arrivée de l'itinéraire](#select-a-route-endpoint) sur l'écran *CarPlay* ou dans l'[application OsmAnd](../navigation/setup/route-navigation.md).
2. Vous pouvez utiliser les [instructions vocales](#voice-prompts) pour écouter les directions ou les messages concernant les problèmes sur la route.
3. Après avoir sélectionné un emplacement, appuyez sur **Démarrer** pour suivre l'itinéraire.
4. Pendant que vous conduisez, l'écran du véhicule affichera les informations OsmAnd concernant votre position actuelle sur la carte, les directions de conduite, la distance jusqu'au prochain virage, les lignes, l'heure d'arrivée et la distance jusqu'à votre destination.
    ![CarPlay screen](@site/static/img/navigation/auto-car/car_play_navmode.png)
5. Si vous souhaitez modifier votre itinéraire ou sélectionner un autre emplacement, vous pouvez appuyer sur le bouton approprié à l'écran.
6. Une fois votre itinéraire terminé, vous pouvez désactiver *CarPlay* en déconnectant l'appareil du système multimédia de votre véhicule.

:::note
Toutes les catégories pour la sélection du **point d'arrivée de l'itinéraire**, *[Historique](#history), [POIs](#poi-categories), [Marqueurs](#map-markers), [Recherche](#search), [Favoris](#favorites) et [Traces](#tracks)* peuvent contenir un nombre d'éléments de liste ne dépassant pas celui fourni par le système multimédia de votre véhicule. Généralement, dans la plupart des véhicules, les listes sont dynamiquement limitées à 12 ou 24 éléments. Cela signifie que la liste dans *CarPlay* peut ne pas être complète. Le nombre total d'éléments et le nombre réel d'éléments affichés sont indiqués sous le nom du dossier.
:::


### Profil CarPlay

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*
![General Settings Default profile Android](@site/static/img/personal/profiles/CarPlay_ios.png)

Le **profil CarPlay** est un profil spécifique dans l'application OsmAnd pour une utilisation pratique du système audio et vidéo de votre voiture pour l'affichage ultérieur de ces données sur votre téléphone.

Ce profil est utilisé tant que votre appareil est connecté à *CarPlay*. Appuyez sur le champ *Profil CarPlay* dans le menu *Paramètres OsmAnd* et dans la liste des [profils activés pour l'utilisation](../personal/profiles.md), sélectionnez le profil avec lequel *CarPlay* sera activé.

Vous ne pouvez pas sélectionner un profil directement dans *CarPlay* à partir de l'écran du véhicule. Tout d'abord, sélectionnez le profil requis sur votre appareil et associez-y le *profil CarPlay*. Vous devez sélectionner un profil qui correspond au type de véhicule, tel que *Conduite*, *Camion*, *Voiture*, *Moto* ou *Cyclomoteur*. **L'application activera automatiquement** le *profil CarPlay* lorsqu'elle sera connectée à un véhicule.

**Pourquoi est-il important de sélectionner le profil approprié pour votre type de véhicule.**

- **Sécurité de conduite.** Différents types de transport nécessitent des informations et des paramètres différents lors de la conduite. Par exemple, les chauffeurs de camion peuvent être limités en hauteur, en poids et en largeur de leurs véhicules, de sorte que le profil *Camion* leur fournit les restrictions et les directives appropriées. Tandis que les cyclistes et les motocyclistes ont besoin d'informations sur les pistes cyclables et les itinéraires, sans données pour les camions.
- **Utilité et efficacité.** La navigation doit être personnalisée pour répondre aux besoins d'un mode de transport particulier. Cela permet aux utilisateurs de réduire le temps nécessaire pour trouver des itinéraires optimaux et d'éviter les restrictions de circulation inutiles.


## Sélectionner un point d'arrivée de l'itinéraire

Vous pouvez sélectionner des [POIs](../map/point-layers-on-map.md#points-of-interest-poi) prédéfinis et ajoutés, ou des [Favoris](../personal/favorites.md), ou des [Marqueurs](../personal/markers.md) comme point de destination. Il est également possible de sélectionner une [Trace](../personal/tracks/index.md) enregistrée ou téléchargée pour l'itinéraire, d'utiliser la [Recherche](../search/index.md), ou de sélectionner une destination à partir de l'[Historique](../search/search-history.md) de l'itinéraire.

1. Si vous souhaitez qu'un emplacement particulier sur la carte soit un point d'arrivée, sélectionnez la catégorie de points appropriée dans la liste, [POIs](#poi-categories), [Favoris](#favorites) ou [Marqueurs de carte](#map-markers).

    - Toutes les catégories peuvent contenir un nombre d'éléments de liste ne dépassant pas celui fourni par le système multimédia de votre véhicule. Cela signifie que la liste dans *CarPlay* pourrait être incomplète, et tous les autres dossiers ne sont disponibles que dans l'application OsmAnd sur votre appareil.
    - Le dossier [Dernière modification](#folder-last-modified) contient une liste des destinations récentes, triées par date d'ajout ou de modification.
    - La liste de tous les autres dossiers est triée par la mise à jour la plus récente, les nouveaux dossiers sont en haut de la liste. Il n'est pas possible de modifier leur ordre manuellement.
    - La liste des points dans les dossiers est triée par la distance qui les sépare, en commençant par le plus proche. Chaque point a un nom ou des coordonnées, une icône de forme (couleur et icône définies par défaut ou choisies par vous dans l'application OsmAnd), et la distance du point de la position actuelle à celui-ci.
2. Sélectionnez la catégorie [Historique](#history) pour trouver l'une des destinations récentes qui sont stockées dans la mémoire de l'appareil.
3. Sélectionnez [Recherche](#search) pour saisir une destination à partir des catégories de recherche disponibles.

:::note
Pendant la conduite, les points sélectionnés peuvent être [annoncés](#voice-prompts) lorsque vous les approchez ou les dépassez. Consultez les paramètres des [Instructions vocales](../navigation/guidance/voice-navigation.md) dans l'article approprié pour configurer les notifications vocales.
:::


### Historique

![CarPlay screen](@site/static/img/navigation/auto-car/car_play_history.png)

Dans la **catégorie Historique**, vous pouvez sélectionner une destination dans une liste de points d'arrivée.

- Ils sont triés par utilisation la plus récente, en commençant par les plus récents.
- Cela peut être pratique pour un accès rapide aux itinéraires fréquemment utilisés.
- Pour savoir comment utiliser ou supprimer une destination, lisez l'article [Historique de recherche](../search/search-history.md).


### Catégories de POI

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="CP"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="CP"/></td>
    </tr>
</table>

Les *POIs (Points d'intérêt)* sont un type de points qui identifient des lieux ou des objets sur la carte qui sont importants ou intéressants pour les utilisateurs. Ils sont mis en évidence par des icônes spéciales fournies dans les [paramètres OsmAnd](../map/point-layers-on-map.md#poi-types) et triés en groupes.

Pour construire un itinéraire vers un *POI* dans *CarPlay*, suivez ces étapes :

1. Sélectionnez le *POI* nécessaire dans la liste des catégories disponibles, ou saisissez le nom du POI à l'aide de la [Recherche](#search).
2. OsmAnd calcule l'itinéraire et l'affiche sur l'écran *CarPlay*. Appuyez sur le bouton **Démarrer** pour commencer la navigation vers cet emplacement.
3. En fonction des paramètres de votre application OsmAnd et de votre véhicule, vous pouvez recevoir des [instructions vocales](#voice-prompts) pour vous guider vers votre destination.
4. Lorsque vous arrivez à l'emplacement, l'application vous informera que vous avez atteint le *POI*.


### Favoris

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-favorites(1).png)

**Favoris** est l'une des fonctionnalités d'OsmAnd qui vous permet de prendre une sorte de notes sur la carte.

- Lorsque vous utilisez **CarPlay**, vous ne pouvez pas ajouter ou modifier des *Favoris*, seulement utiliser ceux qui existent déjà.
- La liste des [Favoris](../personal/favorites.md#manage-favorites) se trouve dans l'application OsmAnd *Menu → Mes lieux → Favoris*.
- Si vous souhaitez les utiliser pour la navigation, configurez tout ce dont vous avez besoin avant de connecter l'appareil au système multimédia de votre véhicule.


### Marqueurs de carte

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-markers(1).png)

- Pour définir votre destination finale comme un *Marqueur de carte*, vous devez d'abord créer le nombre requis de marqueurs dans l'application OsmAnd sur votre appareil avant de le connecter au système multimédia du véhicule.
- Les *Marqueurs* doivent être disponibles dans la liste *Menu → Marqueur de carte*.
- Ceci est décrit plus en détail dans l'article [Marqueurs](../personal/markers.md).


### Traces

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-tracks(1).png)

Pour construire un itinéraire vers une destination, vous pouvez sélectionner une trace existante disponible dans l'application OsmAnd. La trace peut être [téléchargée](../personal/tracks/manage-tracks.md#import) à l'avance, utilisée comme [enregistrée](../plugins/trip-recording.md) ou créée dans [Planifier un itinéraire](../plan-route/create-route.md).

Dans la liste des traces dans le *Menu → Mes lieux → [Traces](../personal/tracks/manage-tracks.md)*, sélectionnez celle requise avant de vous connecter au système multimédia du véhicule, et l'itinéraire se construira soit jusqu'au début de la trace, soit affichera la direction actuelle le long de la trace.

Les traces peuvent également être sélectionnées directement sur l'écran du véhicule dans *CarPlay*. Elles sont organisées dans les dossiers que vous avez créés, et pour un accès facile et rapide aux traces récemment ouvertes, il existe un dossier spécial [Dernière modification](#folder-last-modified).


### Recherche

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-search(1).png)

Aller à la **Recherche** vous donne un accès rapide à une liste de l'[historique des destinations](#history) récentes. De même avec le [menu Navigation](../navigation/setup/route-navigation.md#navigation-menu), où toutes les méthodes de destination OsmAnd telles qu'une adresse, des POIs ou des coordonnées sont rassemblées.

Vous pouvez utiliser l'*outil de recherche* pour trouver le lieu requis sur la carte pour la planification d'itinéraire à partir de n'importe quelle catégorie de recherche disponible.

- [Adresse](../search/search-address.md). Commencez à saisir l'adresse dans le champ de recherche.
- [POI](../search/search-poi.md) et [POI personnalisé](../search/search-poi.md). La liste des noms similaires à proximité affichera également les POIs ou leurs catégories.
- [Recherche par coordonnées](../search/search-address#coordinates-search). Saisissez les coordonnées pour trouver le point sur la carte.

#### Priorités de recherche d'adresse

La fonction de recherche de CarPlay donne la priorité aux rues et aux numéros de bâtiment lors de la **recherche d'adresses**.

- Les rues et les numéros de bâtiment sont affichés en premier lorsque vous recherchez une adresse. Cela garantit que les informations d'adresse pertinentes sont affichées avant d'autres lieux tels que les routes ou les gares.
- Lorsque vous recherchez une ville, les rues de la ville sont affichées en premier, suivies des numéros de bâtiment dans ces rues.


### Dossier Dernière modification

![CarPlay screen](@site/static/img/navigation/auto-car/car_play_last_modified.png)

Les catégories *Favoris* et *Traces* ont un dossier spécial **Dernière modification**. Étant donné que la liste dans ces catégories peut être très longue car elle contient tous vos favoris ou traces existants, ce dossier est nécessaire pour un accès facile et rapide à vos destinations les plus récentes.


## Fonctionnalités supplémentaires

En plus des fonctionnalités de base de l'application OsmAnd dans *CarPlay* qui offrent une navigation pratique dans votre véhicule, il existe un certain nombre de fonctionnalités supplémentaires qui améliorent votre expérience et rendent la navigation plus personnalisée, confortable et efficace.


### Instructions vocales

Les instructions vocales pour *CarPlay* sont l'une des fonctionnalités de navigation les plus utiles d'OsmAnd, fournissant des instructions en temps réel et permettant au conducteur de rester concentré sur la route. Les instructions vocales indiquent clairement les virages, les directions et autres instructions de navigation, garantissant une utilisation plus sûre et plus confortable du système de navigation.

Pour configurer les instructions vocales en fonction du profil sélectionné, vous devez le faire avant de démarrer un itinéraire dans l'application OsmAnd sur votre appareil. Pour voir les paramètres recommandés pour *CarPlay*, consultez l'article [Instructions vocales / Notifications](../navigation/guidance/voice-navigation.md).


### Annoncer les messages texte entrants

Vous pouvez modifier les paramètres de notification de l'application OsmAnd dans les paramètres système de votre appareil. Appuyez sur *CarPlay*, puis sélectionnez l'un des éléments suivants :

- *Annoncer les nouveaux messages*
- *Silencier les nouveaux messages*
- *Se souvenir du paramètre précédent*

Vous pouvez également activer ou désactiver l'annonce des messages directement dans *CarPlay*. Lisez comment la gestion des notifications est implémentée sur [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) et [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios).


### Widget d'alerte d'écran

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)

Ce widget d'information combine des types d'alertes tels que les **passages piétons** et la **limite de vitesse**.

- Les types d'alertes ont une apparence différente, qui dépend de la **<Translate android="true" ids="driving_region"/>** et peut être configurée dans *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- Dans *Car Play*, il n'est pas possible de définir l'affichage des alertes, vous devez configurer le widget dans l'application avant de démarrer la navigation et de connecter votre appareil au véhicule.
- Pour une description détaillée des types d'alertes, consultez [cet article](../widgets/nav-widgets.md#alert-types).
- Pour configurer les alertes d'écran pour les profils disponibles, consultez l'article [Paramètres de navigation](../navigation/guidance/navigation-settings.md#screen-alerts).


### Compteur de vitesse

![CarPlay screen](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png)

Le widget **Compteur de vitesse** est un élément d'interface intégré qui affiche la *vitesse actuelle* à l'aide des données GPS et la *limite de vitesse* à partir de la [base de données OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) et des [paramètres OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) sur l'écran du système multimédia du véhicule.

- Le **widget Compteur de vitesse** est [*dépendant du profil*](../personal/profiles.md), donc si vous modifiez les paramètres d'un profil, ils ne seront pas appliqués à un autre.
- Il n'y a pas d'option pour définir l'affichage du *Compteur de vitesse* directement dans *CarPlay*. Vous devez le configurer pour le [profil de navigation](#carplay-profile) sélectionné dans l'application OsmAnd avant de démarrer la navigation et de connecter votre appareil au véhicule.
- Pour plus d'informations sur la façon d'ajouter et de configurer le widget *Compteur de vitesse* à l'affichage, veuillez lire l'article [Widgets d'information](../widgets/info-widgets.md#speedometer).


### Apparence de la carte (3D)

![Car Play](@site/static/img/navigation/auto-car/car_play_3.png)

L'application OsmAnd vous permet d'utiliser la vue de carte 3D sur l'écran *CarPlay* pour afficher votre itinéraire et votre navigation.

- Le **bouton 3D / 2D** est affiché sur l'écran *CarPlay*.
- Vous pouvez basculer entre les modes de carte 3D / 2D en appuyant sur ce bouton.


### Tableau de bord multifonction

![Car Play](@site/static/img/navigation/auto-car/car_play_4.png)

L'application OsmAnd peut être ouverte et utilisée pour naviguer dans *CarPlay* sur l'écran du système multimédia du véhicule simultanément avec des applications de musique, de messages ou d'autres notifications.

- Configuration du tableau de bord multifonction sur un téléphone connecté à *CarPlay* ou sur l'écran de votre système de véhicule.
- Trouvez le bouton Multi-fenêtre et activez-le.


## Problème de contrôle du volume

Parfois, *CarPlay* ne se connecte pas, ou vous n'entendez rien même s'il est connecté. D'autres fois, l'application OsmAnd ne s'ouvre pas correctement dans *CarPlay*. Solutions possibles :

1. Dans la plupart des cas, tous les **signaux** restent à un volume constant et plein, séparément des paramètres de lecture audio en même temps. Pour modifier le volume des instructions de navigation OsmAnd lors de l'utilisation de *CarPlay*, accédez à *Configuration → Voix → Volume vocal* sur l'écran du système multimédia du véhicule.
2. Redémarrez l'appareil.
3. Assurez-vous que *CarPlay* est activé sur votre iPhone. Pour ce faire :
   - Accédez aux paramètres de votre téléphone, puis à *Général*.
   - Accédez à *CarPlay* dans les paramètres généraux et sélectionnez *Mes voitures*. Ici, vous pouvez personnaliser votre voiture en l'oubliant ou en vous y reconnectant.
4. Assurez-vous que votre Bluetooth est connecté.
5. Vérifiez le câble USB.
6. Mettez régulièrement à jour votre système d'exploitation.
7. Vérifiez que *CarPlay* est pris en charge dans votre [région](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay).
8. Si vous utilisez un VPN sur votre iPhone, cela peut empêcher *CarPlay* de fonctionner. Essayez de désactiver le VPN et voyez si cela aidera *CarPlay* à fonctionner.


## Articles connexes

- [Profils (Paramètres)](../personal/profiles.md)
- [Import / Export](../personal/import-export.md)

### Problèmes courants et solutions

1. Questions courantes sur l'écran de connexion :
    - *Pourquoi ne puis-je pas contrôler l'application depuis mon téléphone lorsque je suis connecté à CarPlay ?*
        Pour des raisons de sécurité, l'écran de l'application OsmAnd sur votre téléphone est verrouillé lorsque vous êtes connecté à CarPlay. Vous ne pouvez interagir avec l'application que via l'écran de la voiture.
    - *Puis-je désactiver l'écran verrouillé et utiliser l'application sur mon téléphone ?*
        Non, CarPlay applique cette restriction pour éviter les distractions pendant la conduite.
    - *Que dois-je faire si mon téléphone et l'écran de la voiture semblent déconnectés ?*
        Assurez-vous que votre appareil est correctement connecté via USB ou Bluetooth.
        Redémarrez le système d'infodivertissement de votre voiture et l'application OsmAnd si la connexion est instable.

> *Cet article a été mis à jour pour la dernière fois en janvier 2025*

-- source-hash: blake2s: bb374835b69b350dbf8b8ba9ee5bf88f9f663385cce72588065d6467df494d6f --
