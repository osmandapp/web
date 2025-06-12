---
source-hash: 24ab3a0e6ec27e607c510da68576b9f83ebac1699944158b095a5e4184cbc895
sidebar_position: 1
title:  Préparation de l'itinéraire
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

La fonction **Préparation de l'itinéraire** dans OsmAnd fournit des indications de navigation étape par étape pour différents [types d'itinéraires](./../routing/osmand-routing.md#routing-types), y compris la [conduite](./../routing/car-based-routing.md), la [marche](./../routing/pedestrian-routing.md), le cyclisme, l'[équitation](./../routing/horse-routing.md) et le [ski](./../routing/ski-routing.md). Les utilisateurs peuvent personnaliser les paramètres de navigation, ajouter des destinations et optimiser les itinéraires pour plus d'efficacité.

:::tip

- La **navigation hors ligne** est activée par défaut. Cependant, vous pouvez également utiliser des [moteurs de routage en ligne](./../routing/online-routing.md).

- **OsmAnd nécessite l'autorisation** d'accéder à la [localisation précise](../../start-with/first-steps.md#permission-to-access-the-location) pour une navigation précise. Activez-la dans les paramètres de l'appareil si nécessaire.

:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Écran de navigation Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Écran de navigation Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Écran de navigation iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Écran de navigation iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Définir les destinations {#set-destinations}

**Étape 1 : Télécharger les cartes.**

Avant d'utiliser la navigation hors ligne, assurez-vous que les [cartes requises sont téléchargées](../../start-with/download-maps.md). Allez dans *Menu → Cartes & Ressources → Télécharger les cartes* pour installer les cartes de votre région.

**Étape 2 : Configurer les profils de navigation.**

[Configurez les profils](../../personal/profiles.md) que vous avez l'intention d'utiliser :

- Définissez les [paramètres du véhicule](../guidance/navigation-settings.md#size-parameters) (*important pour les chauffeurs de camion*), sélectionnez le [type de moteur](../guidance/navigation-settings.md#fuel-used-by-motor) (*facultatif*).

- Configurez l'[apparence de la ligne d'itinéraire](../guidance/map-during-navigation#route-line-appearance) (*facultatif*, disponible pour les utilisateurs Pro).

- Configurez les [invites vocales](../guidance/voice-navigation.md).

**Étape 3 : Définir les destinations.**

1. Ouvrez le [*menu Navigation*](#navigation-menu) :

    - Spécifiez le [point de destination](#set-target-point).
    - Attendez que l'itinéraire soit calculé. Après cela, vous pourrez obtenir des informations supplémentaires sur votre itinéraire dans la section *[Détails](./route-details.md#overview)*.
    - Vous pouvez basculer entre différents [types d'itinéraires](./../routing/osmand-routing.md#routing-types) (profils) pour obtenir le meilleur résultat.
    - Ajoutez des [destinations intermédiaires](#intermediate-destinations) (facultatif).
    - Vous pouvez également changer le point de départ de la [position actuelle](../../map/interact-with-map#my-location-and-zoom) à celle requise.

2. Des [*paramètres de navigation*](#settings) supplémentaires peuvent être utilisés en fonction de vos objectifs (vous pouvez configurer les routes à éviter ou à préférer, économiser du carburant ou choisir l'itinéraire le plus rapide, etc.).

3. [Démarrez](#start--stop-navigation) la navigation ou [simulez d'abord la navigation](#simulated-navigation) (avec cette fonction, vous pouvez tester votre itinéraire avant de le parcourir réellement).

4. Pendant l'itinéraire, vous pouvez [*mettre en pause/reprendre*](#pause--resume-navigation) la navigation et l'*arrêter*](#start--stop-navigation).


:::note

**L'itinéraire ne peut pas être construit lorsque la *[carte en ligne](../../map/raster-maps.md#select-raster-maps)* est sélectionnée comme source de carte.**

:::


### Menu Navigation {#navigation-menu}

Il existe 3 façons d'accéder au menu de navigation :

- Le [*bouton Navigation*](../../widgets/map-buttons.md#directions) sur l'écran de la carte.  
- *Direction vers/depuis* dans un [*menu contextuel de la carte*](../../map/map-context-menu.md#directions-to--from).  
- Section Navigation dans le [*Menu principal*](../../start-with/main-menu.md)  *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu Navigation Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Navigation iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)  

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – Définir le lieu de départ (par défaut : [*Ma position actuelle*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - Utiliser pour [définir votre point de destination](#set-target-point).
- **Ajouter** &nbsp;&#43; - Insérer des [points intermédiaires](../../widgets/nav-widgets.md#distance-to-intermediate) le long de l'itinéraire.
- **Échanger** &nbsp;&#8595;&#8593; - Inverser les points de *Départ* et d'*Arrivée*.
- **Bouton Son** - Couper les [invites vocales](../guidance/voice-navigation.md).
- **<Translate android="true" ids="shared_string_settings"/>** – [Ajuster](#settings) les préférences d'itinéraire et les restrictions routières.

Définissez votre destination dans le *menu Navigation* en utilisant :

- Points favoris spéciaux [Domicile / Travail](#use-home-or-work-points).
- Itinéraire précédent ou [Historique](../../personal/global-settings.md#history).
- Le bouton **Annuler** ramène à l'écran principal.
- Le [bouton Démarrer](#start--stop-navigation) démarre la navigation une fois le calcul de l'itinéraire terminé.
  
### Sélectionner le point de départ {#select-starting-point}

Quant au point de départ, vous pouvez choisir votre position actuelle, la position d'un [point Favori](../../map/point-layers-on-map.md#favorites), sélectionner un point sur la carte, ou utiliser la [Recherche](../../search/index.md). Vous pouvez également définir un point de départ dans le [menu contextuel de la carte](../../map/map-context-menu.md) en sélectionnant la fonction [Directions depuis](../../map/map-context-menu.md#directions-to--from).  


### Définir le point cible {#set-target-point}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu Navigation Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Menu Navigation iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

La chose la plus importante pour commencer la navigation est de déterminer votre destination. Le point de destination peut être trouvé en utilisant une fonction de [*Recherche*](../../search/index.md#overview), ou simplement sur une carte. Vous pouvez également définir le point cible dans le [*menu Navigation*](#navigation-menu) :  

- **<Translate android="true" ids="search_button"/>** - Ouvre [le menu de recherche](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - Ouvre [le menu de recherche d'adresse](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Ouvre la carte pour choisir un point de destination en appuyant sur la carte.
- **<Translate android="true" ids="shared_string_favorites"/>** - Permet d'utiliser un [Favori](../../personal/favorites.md) comme destination.
- **<Translate android="true" ids="shared_string_markers"/>** - Permet de choisir l'un des [Marqueurs de carte](../../personal/markers.md) comme point de destination.
- **Échanger le point de départ et la destination** &nbsp;&#8595;&#8593; - Permet d'échanger les points de *Départ* et d'*Arrivée*.


### Destinations intermédiaires {#intermediate-destinations}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation intermédiaire Android 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![Navigation intermédiaire Android 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermédiaire iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navigation intermédiaire iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - permet d'ouvrir la liste des points de destination pour apporter des modifications.
- **&nbsp;&#8592;** - revient à l'écran du menu Navigation.
- **&nbsp;&#10005;** - permet de supprimer un point de destination de la liste des points.
- **&nbsp;&#61;** - permet de modifier l'ordre des points dans la liste des points.
- *&nbsp;&#43; Ajouter* - ouvre le menu contextuel *Ajouter un intermédiaire*.
- *&nbsp;&#9776; Tout effacer* - permet d'effacer tous les points intermédiaires.

Si vous choisissez **Trier** (*Android*) ou **Options** (*iOS*) dans la liste des destinations, vous accéderez à des options spéciales pour ajuster l'ordre de navigation vers les points intermédiaires.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation intermédiaire Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermédiaire iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

Dans ce menu, vous trouverez des options supplémentaires pour gérer les points de destination :

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - OsmAnd proposera l'itinéraire le plus court entre toutes vos destinations, cependant, l'ordre de la visite peut être modifié. Le point de départ et la destination finale ne seront pas modifiés.

- **<Translate android="true" ids="switch_start_finish"/>** - Le point de départ et la destination finale seront échangés.

- **<Translate android="true" ids="reverse_all_points"/>** (*Android uniquement*) - Tous les points seront mis dans la direction inverse.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. Vous pouvez ajouter des destinations intermédiaires à partir de ce menu.

- **<Translate android="true" ids="clear_all_intermediates"/>**. Toutes les destinations intermédiaires seront supprimées de la carte.

### Utiliser les points Domicile ou Travail {#use-home-or-work-points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favoris spéciaux Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoris spéciaux iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

Les onglets **Domicile** et **Travail** (ou [Points spéciaux](../../personal/favorites.md#special-favorites-personal) pour les Favoris) peuvent être utilisés pour définir rapidement les points de destination dans le menu de navigation. Si vous n'avez pas entré les adresses des Favoris spéciaux, ces cellules resteront vides. Si vous appuyez sur ce champ, vous serez invité à créer ces POI.  


### Historique des itinéraires précédents {#history-of-previous-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Itinéraire précédent Android](@site/static/img/navigation/route/previous_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraire précédent iOS](@site/static/img/navigation/route/previous_ios.png)  

</TabItem>

</Tabs>

Si l'enregistrement de l'[Historique de navigation](../../personal/global-settings.md#history) est activé, vous pouvez utiliser les itinéraires ou destinations précédents de la liste de l'historique pour la navigation. Cette option peut être utile pour un accès rapide aux itinéraires fréquemment utilisés. Les éléments de la liste de l'historique sont triés par utilisation la plus récente, en commençant par le plus récent.  

:::note

- Lorsque l'[enregistrement des données de l'historique](../../personal/global-settings.md#history-options) est désactivé, vous ne serez pas invité à utiliser les itinéraires précédents pour la navigation.
- Vous pouvez supprimer certains ou tous les enregistrements de l'historique concernant vos itinéraires précédents. Cela peut être fait dans l'onglet *[Historique de navigation](../../personal/global-settings.md#history-options)* de l'option Historique (*Menu → Paramètres → Paramètres OsmAnd → Historique*).

:::


## Démarrer / Arrêter la navigation {#start--stop-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Écran de navigation démarrage Android](@site/static/img/navigation/route/navigation_start_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Écran de navigation iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Une fois les points de départ et d'arrivée sélectionnés, l'application créera un itinéraire entre eux en utilisant un profil actif. Le [profil de l'application](../../personal/profiles.md) et l'ensemble de [widgets](../../widgets/index.md) ne changeront qu'une fois que vous aurez appuyé sur le bouton *Démarrer* de la navigation.

- **Appuyez sur Démarrer** pour commencer la navigation.
- [Mettez en pause](#pause--resume-navigation) la navigation lorsque vous faites une pause. (*Android uniquement*)
- **Arrêtez** la navigation en sélectionnant **Arrêter** (*Android*) ou **Annuler** (*iOS*).

:::note Détails de l'itinéraire
Des informations supplémentaires sur l'itinéraire créé, telles que l'altitude, les instructions virage par virage, l'outil d'analyse et d'autres, peuvent être trouvées dans la section [**Détails**](../setup/route-details.md).
:::

### Recalcul de l'itinéraire {#route-recalculation}

L'itinéraire peut être recalculé automatiquement en cas de déviation. Vous pouvez modifier les paramètres du recalcul dans les [paramètres de navigation](../guidance/navigation-settings.md#recalculate-route). Vous pouvez également désactiver la notification de recalcul de l'itinéraire dans les paramètres des [invites vocales](../guidance/voice-navigation.md#voice-settings).

### Mettre en pause / Reprendre la navigation {#pause--resume-navigation}

<InfoAndroidOnly/>

Si vous souhaitez vous arrêter pour une pause et vous écarter de l'itinéraire pendant une courte période, vous pouvez utiliser la fonction *Mettre en pause/Reprendre* la navigation pour mettre en pause les invites vocales et arrêter le recalcul de l'itinéraire.  
Cette option est disponible dans la version Android de l'application dans la *[liste de notifications](../guidance/voice-navigation.md#text-notifications)* ou à partir du *[menu Actions rapides](../../widgets/quick-action.md)*.

![Écran de notification Android](@site/static/img/navigation/route/navigation_pause_android.png)

Pour reprendre la navigation :

- Utilisez le message d'OsmAnd dans la barre de notification.
- Utilisez le *menu Actions rapides* ou la boîte de dialogue qui apparaît lorsque vous appuyez sur le *[bouton Navigation](../../widgets/map-buttons.md#directions)* (voir la capture d'écran).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Reprendre la navigation Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reprendre la navigation iOS](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
Lorsque vous **appuyez sur le bouton Navigation** pendant votre itinéraire, la navigation **ne s'arrête pas et les invites vocales continuent d'être diffusées**, bien que les options proposées Reprendre ou Démarrer puissent être déroutantes.
:::


### Conseils d'économie d'énergie {#power-saving-tips}

La navigation utilise le GPS et le traitement en arrière-plan, ce qui peut épuiser la batterie. Pour optimiser l'utilisation de l'énergie :

- **Éteignez l'écran** tout en vous fiant aux invites vocales.  
- Activez le [Contrôle de l'écran](../guidance/voice-navigation.md#screen-control) (*Android uniquement*) dans *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*.


## Paramètres {#settings}

![Préparation de l'itinéraire Android](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### Paramètres de navigation {#navigation-settings}

Pour accéder aux paramètres de navigation, suivez l'une des étapes ci-dessous :

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.  
- *Bouton Navigation → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.  
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
Il n'y a pas de paramètres de navigation dans le profil *Parcourir la carte*.  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de navigation des profils iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** détermine comment les itinéraires sont calculés. Par exemple, votre profil vélo a un type de navigation Cyclisme, qui définit les règles de routage. Vous pouvez importer ces règles (sous forme de fichier routing.xml) dans OsmAnd. Vous pouvez en savoir plus sur le routage sur notre page [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing).&nbsp;  

- &nbsp;**<Translate android="true" ids="route_parameters"/>** contrôle les paramètres qui seront utilisés pendant le routage (c'est le processus de sélection d'un itinéraire pour la navigation).

Veuillez lire les paramètres d'itinéraire pour le type de navigation correspondant.

Comment configurer le [type de routage](../routing/osmand-routing.md#routing-types) et les [paramètres d'itinéraire](../guidance/navigation-settings.md#route-parameters), vous pouvez lire dans l'[article sur les paramètres de navigation](../guidance/navigation-settings.md) ou dans les articles sur les types spécifiques de routage dans la [section Paramètres d'itinéraire](../routing/osmand-routing.md#routing-types).  


### Navigation simulée {#simulated-navigation}

L'outil **Navigation simulée** vous permet de prévisualiser un itinéraire avant de voyager. Cela aide à la planification, à la familiarisation et au test du système de navigation d'OsmAnd.

#### Démarrer / Arrêter la simulation {#start--stop-simulation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Simuler la navigation Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Simuler la navigation iOS](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

Lorsqu'un itinéraire de navigation est construit, vous pouvez commencer à simuler la navigation en utilisant l'option **<Translate android="true" ids="simulate_navigation"/>**.  

- Dans le [menu Navigation](#navigation-menu), allez dans *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- Activez l'interrupteur pour activer l'option.
- Appuyez sur le bouton [Démarrer](#start--stop-navigation) la navigation pour commencer la simulation.
- Pour [arrêter](#start--stop-navigation) la simulation de navigation, appuyez sur **Arrêter** (*Android*) ou **Annuler** (*iOS*).


#### Mode Vitesse {#speed-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simuler la navigation Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simuler la navigation iOS](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - Accélère la simulation sur les chemins droits, ralentit aux intersections.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - Fonctionne à une vitesse fixe.
- **<Translate android="true" ids="simulation_real_mode_title"/>** :
    - **Sur les sections droites** de la route, la vitesse sera proche de la vitesse maximale autorisée.
    - **Aux intersections**, le simulateur réduira la vitesse.
    - Des **pénalités supplémentaires** seront appliquées aux feux de circulation, aux panneaux stop et à d'autres obstacles similaires.


## Cartes manquantes ou non synchronisées {#maps-missing-or-not-synchronized}

Pour construire un itinéraire, toutes les **cartes nécessaires** doivent être téléchargées et avoir la même date de publication. Veuillez noter que dans certaines situations, le message de cartes manquantes peut être masqué dans le menu de préparation de l'itinéraire. Si vous faites glisser le menu de navigation vers le haut, vous verrez les raisons possibles pour lesquelles votre itinéraire n'a pas pu être calculé.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Message pas de cartes lors de la construction de la navigation Android 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Message pas de cartes lors de la construction de la navigation iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

#### Cartes requises {#required-maps}

Dans la boîte de dialogue des cartes requises, vous verrez des suggestions de cartes à télécharger ou à mettre à jour. La liste des cartes utilisées peut ne pas être précise car elle calcule un itinéraire très basique. Pour obtenir la liste précise des cartes, vous pouvez cliquer sur **Calculer en ligne**. Si vous sélectionnez **Utiliser les cartes téléchargées**, le calcul de l'itinéraire essaiera d'utiliser les cartes déjà téléchargées et ignorera le message d'avertissement.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Message pas de cartes lors de la construction de la navigation Android](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Message pas de cartes lors de la construction de la navigation iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## Problèmes courants et solutions {#common-issues-and-solutions}

1. [Les causes possibles du calcul lent de l'itinéraire.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [Que faire si la longueur de l'itinéraire dépasse 250 kilomètres.](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [Que faire si l'itinéraire suggéré semble incorrect.](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [Comment résoudre la situation où la navigation n'est pas possible en raison du manque de cartes nécessaires.](#maps-missing-or-not-synchronized)

Pour plus d'étapes de dépannage, consultez les [problèmes de navigation](../../troubleshooting/navigation.md).


## Articles connexes {#related-articles}

- [Paramètres d'itinéraire](../routing/osmand-routing.md#routing-types)
- [Détails de l'itinéraire](./route-details.md)
- [Navigation par trace](./gpx-navigation.md)
- [Navigation par marqueurs](./markers-navigation.md)
- [Paramètres de navigation](../guidance/navigation-settings.md)
- [Écran de la carte pendant la navigation](../guidance/map-during-navigation.md)
- [Invites vocales / Notifications](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Dernière mise à jour : Février 2025*