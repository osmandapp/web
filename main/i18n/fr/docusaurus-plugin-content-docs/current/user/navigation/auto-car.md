---
source-hash: 445bb9b5f04a5bc8e6acdc450e68d71921749a8fa1566cea851d497d3c39b1d9
sidebar_position: 9
title:  Android Auto
ios: false
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



## Aperçu {#overview}

![Écran Android Auto](@site/static/img/navigation/auto-car/android_auto_overview.png)  

[**Android Auto**](https://www.android.com/auto) est un logiciel développé par Google qui permet aux utilisateurs de connecter leurs appareils Android à des systèmes multimédias de véhicules compatibles. *Android Auto* fournit une version adaptée et optimisée de l'application OsmAnd pour une utilisation en toute sécurité pendant la conduite, rendant l'accès aux fonctions de navigation de l'application plus facile et plus sûr.  

La fonction **Android Auto** n'est prise en charge que lors de l'utilisation de l'application OsmAnd disponible sur le [Google Play Store](https://play.google.com/store/apps/dev?id=8483587772816822023).

> **NOTE** : *Android Auto n'est pas une réplication directe de l'application mobile OsmAnd. Il dispose d'une interface simplifiée, axée sur les fonctions de navigation essentielles pour garantir une conduite sûre. Certaines fonctionnalités avancées ne sont pas prises en charge en raison des limitations de la plateforme.*


### Écran de connexion {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)  

Lorsque votre appareil est connecté à *Android Auto*, la carte sur l'écran de l'application est verrouillée. Il s'agit d'une fonction de sécurité intentionnelle pour garantir que la navigation est contrôlée exclusivement depuis l'écran de la voiture, minimisant ainsi les distractions au volant. Consultez les [questions fréquentes](#common-issues-and-solutions) concernant l'écran de connexion.


### Écran d'accueil {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

Lorsque vous ouvrez l'application, une liste de catégories s'affiche. Pour faciliter la navigation, vous pouvez la masquer en appuyant sur le bouton situé dans le coin supérieur droit de l'écran.  

- Appuyez sur le bouton de menu pour masquer la liste des catégories.
- Dans le coin supérieur droit de l'écran, appuyez sur le bouton à côté des boutons de fonction si vous souhaitez revenir à la liste.


### Interaction avec la carte {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

*Android Auto* affiche l'interface d'OsmAnd adaptée à l'écran du système multimédia du véhicule. L'interaction avec la carte est limitée à des boutons tels que :  

- [Menu OsmAnd](#destination-points). Contient une liste d'options disponibles pour assigner un point d'arrivée d'itinéraire ou un trajet libre.
- [Paramètres](#voice-prompts). Ce bouton est responsable de : 1. l'accès pour activer/désactiver les *instructions vocales* lorsque vous naviguez sur l'itinéraire sélectionné ; 2. afficher les détails de l'itinéraire (temps et distance) pour le prochain arrêt.
- [Recherche](#search). Appuyer sur le bouton ouvre un écran avec accès aux fonctions de recherche.
- [Ma position](../widgets/map-buttons.md#my-location-and-zoom). Déplace la partie visible de la carte pour que votre position actuelle soit au centre de l'écran.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Permet de zoomer en avant et en arrière sur la partie visible de la carte.
- [Boussole](../widgets/map-buttons.md#compass). Indique lequel des quatre modes d'orientation de la carte disponibles sur l'écran de votre appareil est sélectionné.


## Paramètres de configuration requis {#required-setup-parameters}

### Démarrer la navigation {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

Pour qu'OsmAnd fonctionne dans *Android Auto*, vous devez [connecter](#connection-screen) votre appareil Android au système multimédia de votre véhicule. Le système d'exploitation Android doit être mis à jour à la version 6.0 ou supérieure.

- Pour savoir comment connecter et configurer votre appareil, visitez les sites web d'[**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en).  

- Tous les véhicules ne prennent pas en charge la capacité de connexion de l'appareil. Consultez la [liste pour *Android Auto*](https://www.android.com/auto/compatibility/#compatibility-vehicles).  

- Vous devez acheter une **version payante** de l'application ou souscrire un [abonnement](../purchases/android.md#free-and-paid-features). Vérifiez votre abonnement actuel ici *Menu → Paramètres → Achats*.  

- *Android Auto* utilise le premier [profil de conduite OsmAnd](#profile-first) dans la liste des profils pour la navigation. Placez le profil préféré en premier, à l'exception du profil *Parcourir la carte*, qui n'est pas lu par *Android Auto*. Pour ce faire, allez dans OsmAnd *Menu → Paramètres → Profils d'application → Modifier la liste des profils* → déplacez votre profil [**Conduite**](#profile-first) à la première place ou après le profil *Parcourir la carte*.  

- Il est important de se rappeler qu'*Android Auto* est une application gourmande en données, y compris les données mobiles, et la qualité du système peut dépendre de la qualité de votre connexion et de la vitesse de votre accès Internet.

### Profil prioritaire {#profile-first}

Vous ne pouvez pas sélectionner un profil directement dans *Android Auto* sur l'écran du véhicule.  
Si vous avez déjà sélectionné sur votre appareil un profil correspondant au type de véhicule, tel que *Conduite*, *Camion*, *Voiture*, *Moto*, *Cyclomoteur*, **l'application activera automatiquement** le profil approprié lorsque vous vous connecterez à Android Auto. Par exemple, si vous avez un profil *Camion* sélectionné et que votre appareil se connecte à **Android Auto**, l'application activera ce profil.

Si vous n'avez aucun profil de *Conduite* sélectionné sur votre appareil qui correspond à votre type de véhicule, alors OsmAnd passera automatiquement au profil *Conduite*. Ceci est fait pour fournir une navigation de base et pour éviter les problèmes potentiels causés par l'utilisation d'un mauvais profil pour un type de véhicule spécifique.

**Pourquoi c'est important :**

1. **Sécurité au volant.** Différents types de transport nécessitent des informations et des réglages différents lors de la conduite. Par exemple, les chauffeurs de camion peuvent être limités en hauteur, poids et largeur de leurs véhicules, donc le profil *Camion* leur fournit des restrictions et des directives appropriées. Tandis que les cyclistes et les motocyclistes ont besoin d'informations sur les pistes cyclables et les itinéraires, sans les données pour les camions.

2. **Utilité et Efficacité.** La navigation doit être personnalisée pour répondre aux besoins d'un mode de transport particulier. Cela permet aux utilisateurs de réduire le temps nécessaire pour trouver des itinéraires optimaux et d'éviter les restrictions de circulation inutiles.

3. **Évitement des erreurs.** Passer au profil *Conduite* lorsqu'il n'y a pas de profil spécifique pour le mode de transport sélectionné vous assure un accès constant aux réglages et informations minimums nécessaires, évitant ainsi les erreurs et les malentendus possibles pendant la conduite.  


## Points de destination {#destination-points}

![Écran Android Auto](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

Vous pouvez sélectionner des [POI](../map/point-layers-on-map.md#points-of-interest-pois) préalablement définis et ajoutés, ou des [Favoris](../personal/favorites.md), ou des [Marqueurs](../personal/markers.md) comme point de destination. Il est également possible de sélectionner une [Trace](../personal/tracks/manage-tracks.md) enregistrée ou téléchargée pour l'itinéraire, d'utiliser la [Recherche](../search/index.md), ou de sélectionner une destination dans l'[Historique](../search/search-history.md) de l'itinéraire ou de faire un *Trajet libre*.

1. Si vous souhaitez un emplacement particulier sur la carte comme point d'arrivée, sélectionnez la catégorie de points appropriée dans la liste, [POI](#poi-categories), [Favoris](#favorites), ou [Marqueurs sur la carte](#map-markers).  
  
    - Toutes les catégories ne peuvent contenir plus d'éléments de liste que ce qui est prévu par le système multimédia de votre véhicule. Cela signifie que la liste dans *Android Auto* pourrait être incomplète, et tous les autres dossiers ne sont disponibles que dans l'application OsmAnd sur votre appareil.
    - Le dossier [Dernière modification](#folder-last-modified) contient une liste des destinations récentes, triées par date d'ajout ou de modification.
    - La liste de tous les autres dossiers est triée par la mise à jour la plus récente, les nouveaux dossiers étant en haut de la liste. Il n'est pas possible de changer leur ordre manuellement.
    - La liste des points à l'intérieur des dossiers est triée par la distance qui les sépare, en commençant par le plus proche. Chaque point a un nom ou des coordonnées, une icône de forme (couleur et icône définies par défaut ou choisies par vous dans l'application OsmAnd), et la distance entre le point de l'emplacement actuel et celui-ci.  

2. Sélectionnez la catégorie [Historique](#history) pour trouver l'une des destinations récentes qui sont stockées dans la mémoire de l'appareil.  

3. Sélectionnez [Recherche](#search) pour entrer une destination à partir des catégories de recherche disponibles.  

4. Choisissez **Trajet libre** pour faire un voyage sans point d'arrivée spécifié.

:::note
Pendant la conduite, les points sélectionnés peuvent être [annoncés](#voice-prompts) lorsque vous vous en approchez ou que vous les dépassez. Consultez les paramètres des [Instructions vocales](../navigation/guidance/voice-navigation.md) dans l'article approprié pour configurer les notifications vocales.
:::  


### Historique {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)  

Dans la catégorie Historique, vous pouvez sélectionner une destination dans une liste de points d'arrivée. Ils sont triés par utilisation la plus récente, en commençant par la plus nouvelle. Cela peut être pratique pour un accès rapide aux itinéraires fréquemment utilisés. Pour savoir comment utiliser ou supprimer une destination, lisez l'article [Historique de recherche](../search/search-history.md).  


### Catégories de POI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

Les POI (Points d'Intérêt) sont un type de points qui identifient des lieux ou des objets sur la carte qui sont importants ou intéressants pour les utilisateurs. Ils sont mis en évidence par des icônes spéciales fournies dans les [paramètres d'OsmAnd](../map/point-layers-on-map.md#poi-types) et triés en groupes.  

Pour construire un itinéraire vers un POI dans *Android Auto*, suivez ces étapes :

1. Sélectionnez le POI nécessaire dans la liste des catégories disponibles, ou entrez le nom du POI en utilisant la [Recherche](#search).
2. Appuyer sur une catégorie ouvre l'écran suivant avec une liste de POI.
3. Appuyer sur un élément de la liste ouvre l'écran de navigation.
4. OsmAnd calcule l'itinéraire et l'affiche sur l'écran *Android Auto*. Appuyez sur le bouton **Démarrer** pour commencer la navigation vers cet emplacement.
5. Selon les [paramètres](../navigation/guidance/navigation-settings.md) de votre application OsmAnd et de votre véhicule, vous pouvez recevoir des [instructions vocales](#voice-prompts) pour vous guider vers une destination.  


### Favoris {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>  

Les *Favoris* sont l'une des fonctions d'OsmAnd qui vous permet de créer une sorte de signets (notes) sur la carte. Lorsque vous utilisez *Android Auto*, vous ne pouvez pas ajouter ou modifier des Favoris, seulement utiliser ceux qui existent déjà. La liste des [Favoris](../personal/favorites.md#manage-favorites) se trouve dans l'application OsmAnd *Menu → Mes lieux → Favoris*. Si vous souhaitez les utiliser pour la navigation, ajoutez les lieux nécessaires dans les favoris avant de connecter l'appareil à votre système multimédia de véhicule.  

Pour créer un itinéraire vers un point favori dans *Android Auto*, suivez les étapes ci-dessous :  

1. Appuyer sur un dossier ouvre l'écran suivant avec une liste de dossiers de favoris.
2. Appuyer sur un élément de la liste ouvre la navigation.


### Marqueurs sur la carte {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

Pour définir votre destination finale comme un Marqueur sur la carte, vous devez d'abord créer le nombre requis de marqueurs dans l'application OsmAnd sur votre appareil avant de le connecter au système. Les marqueurs doivent être disponibles dans la liste *Menu → Marqueur sur la carte*. Ceci est décrit plus en détail dans l'article [Marqueurs](../personal/markers.md).


### Traces {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)  

Pour construire un itinéraire vers une destination, vous pouvez sélectionner une trace existante disponible dans l'application OsmAnd. La trace peut être [téléchargée](../personal/tracks/manage-tracks.md#import) à l'avance, utilisée comme [enregistrée](../plugins/trip-recording.md) ou créée dans [Planifier un itinéraire](../plan-route/create-route.md).  

Dans la liste des traces du *Menu → Mes lieux → [Traces](../personal/tracks/manage-tracks.md)*, sélectionnez celle requise avant de vous connecter au système multimédia du véhicule, et l'itinéraire se construira soit jusqu'au début de la trace, soit affichera la direction actuelle le long de la trace.

Les traces peuvent également être sélectionnées directement sur l'écran du véhicule dans *Android Auto*. Elles sont organisées dans les dossiers que vous avez créés, et pour un accès facile et rapide aux traces récemment ouvertes, il existe un dossier spécial [Dernière modification](#folder-last-modified).  


### Recherche {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Aller à la Recherche vous donne un accès rapide à une liste de l'[historique des destinations](#history) récentes. De même avec le [Menu de navigation](../navigation/setup/route-navigation.md#navigation-menu), où toutes les méthodes de destination d'OsmAnd telles qu'une adresse, des POI ou des coordonnées sont collectées.

Vous pouvez utiliser l'outil de Recherche pour trouver le lieu requis sur la carte pour la planification d'itinéraire à partir de n'importe quelle catégorie de recherche disponible.

- [Adresse](../search/search-address.md) - commencez à taper l'adresse dans le champ de recherche.
- [POI](../search/search-poi.md) et [POI personnalisés](../search/search-poi.md) - la liste des noms similaires à proximité affichera également des POI ou leurs catégories.
- [Recherche par coordonnées](../search/search-address#coordinates-search) - entrez les coordonnées pour trouver le point sur la carte.  


### Dossier Dernière modification {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)  


Les catégories Favoris et Traces ont un dossier spécial *Dernière modification*. Étant donné que la liste dans ces catégories peut être très grande car elle contient tous vos favoris ou traces existants, ce dossier est nécessaire pour un accès facile et rapide à vos destinations les plus récentes.


## Fonctionnalités de navigation {#navigation-features}

En plus des fonctionnalités de base de l'application OsmAnd dans *Android Auto* qui fournissent une navigation pratique dans votre véhicule, il existe un certain nombre de fonctionnalités supplémentaires qui améliorent votre expérience et rendent la navigation plus personnalisée, confortable et efficace.  


### Prochain virage {#next-turn}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

Le widget **Prochain virage** affiche la distance et le type de la [manœuvre du prochain virage](../widgets/nav-widgets.md#next-turn) et le [nom de la rue](../widgets/nav-widgets.md#street-name).

### Informations sur l'itinéraire {#route-info}

Les informations sur l'itinéraire comprennent :

- [Temps de trajet estimé](../widgets/nav-widgets.md#time-to-destination),
- [Heure d'arrivée estimée](../widgets/nav-widgets.md#time-to-destination),
- [Distance du trajet](../widgets/nav-widgets.md#distance-to-destination).

Lorsqu'il est activé, [le paramètre du widget](#eta-next-stop) (Informations sur l'itinéraire) affichera les détails de l'itinéraire pour le prochain arrêt ([le point intermédiaire](../navigation/setup/route-navigation.md#intermediate-destinations)).


### Widget d'alerte à l'écran {#screen-alert-widget}

Ce widget d'information combine des types d'alertes tels que **Passages piétons** et **Limitation de vitesse**.

- Les types d'alertes ont une apparence différente, qui dépend de la **<Translate android="true" ids="driving_region"/>** et peuvent être configurés dans *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- Dans *Android Auto*, il n'est pas possible de définir l'affichage des alertes, vous devez configurer le widget dans l'application avant de commencer la navigation et de connecter votre appareil au véhicule.
- Pour une description détaillée des types d'alertes, consultez [cet article](../widgets/nav-widgets.md#alert-types).
- Pour configurer les alertes à l'écran pour les profils disponibles, consultez l'article [Paramètres de navigation](../navigation/guidance/navigation-settings.md#screen-alerts).  


### Compteur de vitesse {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

Le widget **Compteur de vitesse** est un élément d'interface intégré qui affiche la *vitesse actuelle* à l'aide des données GPS et la *limitation de vitesse* de la [base de données OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) et des [paramètres d'OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) sur l'écran du système multimédia du véhicule.

- Le **widget Compteur de vitesse** est [*dépendant du profil*](../personal/profiles.md), donc si vous modifiez les paramètres pour un profil, ils ne seront pas appliqués à un autre.
- Il n'y a pas d'option pour personnaliser l'affichage du **widget Compteur de vitesse** directement dans *Android Auto*, vous devez le configurer dans l'application OsmAnd avant de commencer la navigation et de connecter votre appareil au véhicule.
- Pour plus d'informations sur la façon d'ajouter et de configurer le widget *Compteur de vitesse* à l'écran, veuillez lire l'[article sur les widgets d'information](../widgets/info-widgets.md#speedometer).


### Apparence de la carte (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

L'application OsmAnd vous permet d'utiliser la vue de la carte en 3D sur l'écran *Android Auto* pour afficher votre itinéraire et votre navigation.

- Pour activer cette fonctionnalité, vous devez sélectionner [Rendu de carte Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- Ouvrez le menu principal *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* directement dans l'application OsmAnd.
- Après avoir configuré les paramètres, le **bouton 3D** s'affichera sur l'écran *Android Auto* lorsque la liste des catégories de destinations est fermée.
- Vous pouvez basculer entre les modes de carte 3D / 2D en appuyant sur ce bouton.


## Paramètres {#settings}

### Instructions vocales {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Les instructions vocales sont l'une des fonctionnalités les plus utiles d'OsmAnd lors de la navigation pour *Android Auto*, vous donnant des indications en temps réel et permettant au conducteur de rester concentré sur la route. Les instructions vocales fournissent des instructions claires sur les virages, les directions et autres instructions de navigation, offrant une utilisation plus sûre et plus confortable du système de navigation.  

Pour configurer les [instructions vocales](../navigation/guidance/voice-navigation.md) selon le profil sélectionné, vous devez le faire avant de commencer un itinéraire dans l'application OsmAnd sur votre appareil. Dans *Android Auto*, seul le paramètre pour activer ou désactiver toutes les instructions vocales sélectionnées en même temps est disponible (*Bouton Paramètres → Instructions vocales (on/off)*).  


### HAE prochain arrêt {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Dans l'application OsmAnd, vous pouvez sélectionner un ou plusieurs [points intermédiaires](../navigation/setup/route-navigation.md#intermediate-destinations) pour l'itinéraire de navigation.

Pour activer ou désactiver les [**Informations sur l'itinéraire** pour un point intermédiaire (prochain arrêt)](#next-turn), allez dans *Android Auto (OsmAnd)→ Bouton Paramètres → Afficher les détails de l'itinéraire pour le prochain arrêt → On/Off*. Cette option affiche le temps et la distance jusqu'au prochain arrêt sur le [widget *Informations sur l'itinéraire*](#route-info).


### Mode carte {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

*Android Auto* et OsmAnd offrent la possibilité d'ajuster la carte en fonction des conditions d'éclairage. En *mode carte Jour*, le schéma de couleurs reste lumineux et contrasté, ce qui facilite la lecture même en plein soleil. En *mode Nuit*, les cartes deviennent plus sombres, ce qui aide le conducteur à mieux naviguer dans l'obscurité.  

OsmAnd a des options de [mode carte](../map/vector-maps.md#map-mode), mais lorsque vous utilisez l'application dans *Android Auto*, ces options sont ignorées. À la place, le mode que vous avez sélectionné dans les paramètres système d'*Android Auto* pour les cartes est utilisé.

- Sélectionnez le mode Jour ou le mode Nuit pour que l'affichage de la carte reste inchangé.
- Si vous souhaitez que le mode d'affichage de la carte change en fonction de l'heure de la journée, sélectionnez le mode Automatique.  

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->


### Écran partagé {#split-screen}

![Écran Android Auto](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

L'application OsmAnd peut être ouverte et utilisée pour naviguer dans *Android Auto* sur l'écran du système multimédia du véhicule simultanément avec des applications de musique, de messagerie ou d'autres notifications. Configuration de l'affichage en écran partagé sur un téléphone connecté à *Android Auto* ou sur l'écran de votre système de véhicule.  

1. Depuis l'écran d'accueil, appuyez sur Applications.
2. Appuyez sur Paramètres.
3. Trouvez Multi-fenêtres et choisissez l'interrupteur.
4. Retournez à l'écran d'accueil.  

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->


Dans les paramètres d'Android Auto, vous pouvez modifier la position de la barre des tâches et la disposition de l'écran d'accueil :

- **Position de la barre des tâches :**  
  Allez dans *Paramètres Android Auto → Afficher les contrôles rapides pour les applications* et désactivez l'interrupteur. Cela déplacera la barre des tâches du bas vers le côté de l'écran.

- **Disposition de l'écran d'accueil :**  
  Allez dans *Paramètres Android Auto → Changer la disposition → Changer l'emplacement du siège du conducteur* pour ajuster la disposition en fonction de la position du siège du conducteur.


## Problèmes courants et solutions {#common-issues-and-solutions}

1. [Problème d'orientation de la carte.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Problème de contrôle du volume.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Retards de localisation (plantages ANR).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Questions fréquentes sur l'écran de connexion :
    - *Pourquoi ne puis-je pas contrôler l'application depuis mon téléphone lorsqu'il est connecté à Android Auto ?*  
        Pour des raisons de sécurité, l'écran de l'application OsmAnd sur votre téléphone est verrouillé lorsqu'il est connecté à Android Auto. Vous ne pouvez interagir avec l'application que via l'écran de la voiture.
    - *Puis-je désactiver l'écran verrouillé et utiliser l'application sur mon téléphone ?*  
        Non, Android Auto impose cette restriction pour éviter les distractions au volant.
    - *Que dois-je faire si mon téléphone et l'écran de la voiture semblent déconnectés ?*  
        Assurez-vous que votre appareil est correctement connecté via USB ou Bluetooth.  
        Redémarrez le système d'infodivertissement de votre voiture et l'application OsmAnd si la connexion est instable.