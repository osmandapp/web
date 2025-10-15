---
source-hash: 273bc407c61abbef0f20fd6d4bb79cda29aab80f8589524d418ca1daca1c64d6
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

La fonction **Préparation de l'itinéraire** d'OsmAnd fournit un guidage de navigation étape par étape pour divers [types d'itinéraires](./../routing/osmand-routing.md#routing-types), y compris la [conduite](./../routing/car-based-routing.md), la [marche](./../routing/pedestrian-routing.md), le cyclisme, l'[équitation](./../routing/horse-routing.md) et le [ski](./../routing/ski-routing.md). Les utilisateurs peuvent personnaliser les paramètres de navigation, ajouter des destinations et optimiser les itinéraires pour plus d'efficacité.

:::tip

- La **navigation hors ligne** est activée par défaut. Cependant, vous pouvez également utiliser des [moteurs de routage en ligne](./../routing/online-routing.md).

- **OsmAnd nécessite une autorisation** pour accéder à la [localisation précise](../../start-with/first-steps.md#permission-to-access-the-location) pour une navigation précise. Activez cette option dans les paramètres de l'appareil si nécessaire.

:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Écran de navigation Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Écran de navigation Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Écran de navigation iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Écran de navigation iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Définir les destinations {#set-destinations}

**Étape 1 : Télécharger les cartes.**

Avant d'utiliser la navigation hors ligne, assurez-vous que les [cartes requises sont téléchargées](../../start-with/download-maps.md). Allez dans *Menu → Cartes et ressources → Télécharger des cartes* pour installer les cartes de votre région.

**Étape 2 : Configurer les profils de navigation.**

[Configurez les profils](../../personal/profiles.md) que vous avez l'intention d'utiliser :

- Définissez les [paramètres du véhicule](../guidance/vehicle-parameters.md#size-parameters) (*important pour les chauffeurs de camion*), sélectionnez le [type de moteur](../guidance/vehicle-parameters.md#fuel-used-by-motor) (*facultatif*).

- Configurez l'[apparence de la ligne d'itinéraire](../guidance/map-during-navigation#route-line-appearance) (*facultatif*, disponible pour les utilisateurs Pro ([Android](../../purchases/android.md#pro-features) / [iOS](../../purchases/ios.md#pro-features))).

- Configurez les [instructions vocales](../guidance/voice-navigation.md).

**Étape 3 : Définir les destinations.**

1. Ouvrez le [*Menu de navigation*](#navigation-menu) :

    - Spécifiez le [point de destination](#set-target-point).
    - Attendez que l'itinéraire soit calculé. Ensuite, vous pourrez obtenir des informations supplémentaires sur votre itinéraire dans la section *[Détails](./route-details.md#overview)*.
    - Vous pouvez basculer entre différents [types d'itinéraires](./../routing/osmand-routing.md#routing-types) (profils) pour obtenir le meilleur résultat.
    - Ajoutez des [destinations intermédiaires](#intermediate-destinations) (facultatif).
    - Vous pouvez également changer le point de départ de la [position actuelle](../../map/interact-with-map.md#my-location-and-zoom) à celui souhaité.

2. Des [*Paramètres de navigation*](#settings) supplémentaires peuvent être utilisés en fonction de vos objectifs (vous pouvez configurer les routes à éviter ou à préférer, économiser du carburant ou choisir l'itinéraire le plus rapide, etc.).

3. [Démarrer](#start--stop-navigation) la navigation ou d'abord [simuler la navigation](#simulated-navigation) (avec cette fonction, vous pouvez tester votre itinéraire avant de le parcourir réellement).

4. Pendant le trajet, vous pouvez [*Mettre en pause/Reprendre*](#pause--resume-navigation) la navigation et l'[*Arrêter*](#start--stop-navigation).


:::note

**L'itinéraire ne peut pas être construit lorsqu'une *[Carte en ligne](../../map/raster-maps.md#select-raster-maps)* est sélectionnée comme source de carte.**

:::


### Menu de navigation {#navigation-menu}

Il y a 3 façons d'accéder au menu de navigation :

- Le [*bouton Navigation*](../../widgets/map-buttons.md#directions) sur l'écran de la carte.  
- *Itinéraire vers/depuis* dans un [*menu contextuel de la carte*](../../map/map-context-menu.md#directions-to--from).  
- Section Navigation dans le [*Menu principal*](../../start-with/main-menu.md)  *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de navigation Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de navigation iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)  

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – Définir le lieu de départ (par défaut : [*Ma position actuelle*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - Utiliser pour [définir votre point de destination](#set-target-point).
- **Ajouter** &nbsp;&#43; - Insérer des [points intermédiaires](../../widgets/nav-widgets.md#distance-to-intermediate) le long de l'itinéraire.
- **Intervertir** &nbsp;&#8595;&#8593; - Inverser les points de *Départ* et d'*Arrivée*.
- **Bouton Son** - Couper les [instructions vocales](../guidance/voice-navigation.md).
- **<Translate android="true" ids="shared_string_settings"/>** – [Ajuster](#settings) les préférences d'itinéraire et les restrictions routières.

Définissez votre destination dans le *Menu de navigation* en utilisant :

- Points favoris spéciaux [Domicile / Travail](#use-home-or-work-points).
- Itinéraire précédent ou [Historique](../../personal/global-settings.md#history).
- Le bouton **Annuler** ramène à l'écran principal.
- Le [bouton Démarrer](#start--stop-navigation) lance la navigation une fois le calcul de l'itinéraire terminé.
  
### Sélectionner le point de départ {#select-starting-point}

Pour le point de départ, vous pouvez choisir votre position actuelle, l'emplacement d'un [point Favori](../../map/point-layers-on-map.md#favorites), sélectionner un point sur la carte ou utiliser la [Recherche](../../search/index.md). Vous pouvez également définir un point de départ dans le [menu contextuel de la carte](../../map/map-context-menu.md) en sélectionnant la fonction [Itinéraire depuis](../../map/map-context-menu.md#directions-to--from).  


### Définir le point de destination {#set-target-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de navigation Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Menu de navigation iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

La chose la plus importante pour commencer la navigation est de déterminer votre destination. Le point de destination peut être trouvé en utilisant une fonction de [*Recherche*](../../search/index.md#overview), ou simplement sur une carte. Vous pouvez également définir le point de destination dans le [*Menu de navigation*](#navigation-menu) :  

- **<Translate android="true" ids="search_button"/>** - Ouvre [le menu de recherche](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - Ouvre [le menu de recherche d'adresse](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Ouvre la carte pour choisir un point de destination en appuyant sur la carte.
- **<Translate android="true" ids="shared_string_favorites"/>** - Permet d'utiliser un [Favori](../../personal/favorites.md) comme destination.
- **<Translate android="true" ids="shared_string_markers"/>** - Permet de choisir l'un des [Marqueurs de carte](../../personal/markers.md) comme point de destination.
- **Intervertir le point de départ et la destination** &nbsp;&#8595;&#8593; - Permet d'intervertir les points de *Départ* et d'*Arrivée*.


### Destinations intermédiaires {#intermediate-destinations}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation intermédiaire Android 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![Navigation intermédiaire Android 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermédiaire iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navigation intermédiaire iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - permet d'ouvrir la liste des points de destination pour y apporter des modifications.
- **&nbsp;&#8592;** - retourne à l'écran du menu de navigation.
- **&nbsp;&#10005;** - permet de supprimer un point de destination de la liste des points.
- **&nbsp;&#61;** - permet de changer l'ordre des points dans la liste.
- *&nbsp;&#43; Ajouter* - ouvre le menu contextuel *Ajouter un point intermédiaire*.
- *&nbsp;&#9776; Tout effacer* - permet d'effacer tous les points intermédiaires.

Si vous choisissez **Trier** (*Android*) ou **Options** (*iOS*) dans la liste des destinations, vous accéderez à des options spéciales pour ajuster l'ordre de navigation vers les points intermédiaires.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation intermédiaire Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermédiaire iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

Dans ce menu, vous trouverez des options supplémentaires pour gérer les points de destination :

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - OsmAnd proposera l'itinéraire le plus court entre toutes vos destinations, cependant, l'ordre de visite peut être modifié. Le point de départ et la destination finale ne seront pas changés.

- **<Translate android="true" ids="switch_start_finish"/>** - Le point de départ et la destination finale seront intervertis.

- **<Translate android="true" ids="reverse_all_points"/>** (*Android uniquement*) - Tous les points seront mis dans l'ordre inverse.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. Vous pouvez ajouter des destinations intermédiaires depuis ce menu.

- **<Translate android="true" ids="clear_all_intermediates"/>**. Toutes les destinations intermédiaires seront supprimées de la carte.

### Utiliser les points Domicile ou Travail {#use-home-or-work-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoris spéciaux Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoris spéciaux iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

Les onglets **Domicile** et **Travail** (ou [Points spéciaux](../../personal/favorites.md#special-favorites-personal) pour les Favoris) peuvent être utilisés pour définir rapidement des points de destination dans le menu de navigation. Si vous n'avez pas saisi les adresses des favoris spéciaux, ces cellules resteront vides. Si vous appuyez sur ce champ, il vous sera proposé de créer ces POI.  


### Historique des itinéraires précédents {#history-of-previous-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Itinéraire précédent Android](@site/static/img/navigation/route/previous_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraire précédent iOS](@site/static/img/navigation/route/previous_ios.png)  

</TabItem>

</Tabs>

Si l'enregistrement de l'[Historique de navigation](../../personal/global-settings.md#history) est activé, vous pouvez utiliser les itinéraires ou destinations précédents de la liste d'historique pour la navigation. Cette option peut être utile pour un accès rapide aux itinéraires fréquemment utilisés. Les éléments de la liste d'historique sont triés par utilisation la plus récente, en commençant par le plus récent.  

:::note

- Lorsque l'[enregistrement des données de l'Historique](../../personal/global-settings.md#history) est désactivé, il ne vous sera pas proposé d'utiliser les itinéraires précédents pour la navigation.
- Vous pouvez supprimer certains ou tous les enregistrements de l'historique de vos itinéraires précédents. Cela peut être fait dans l'onglet *[Historique de navigation](../../personal/global-settings.md#history)* de l'option Historique (*Menu → Paramètres → Paramètres OsmAnd → Historique*).

:::


## Démarrer / Arrêter la navigation {#start--stop-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Écran de démarrage de la navigation Android](@site/static/img/navigation/route/navigation_start_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Écran de navigation iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Une fois les points de départ et d'arrivée sélectionnés, l'application créera un itinéraire entre eux en utilisant un profil actif. Le [profil de l'application](../../personal/profiles.md) et l'ensemble des [widgets](../../widgets/index.md) ne changeront que lorsque vous appuierez sur le bouton *Démarrer* de la navigation.

- **Appuyez sur Démarrer** pour commencer la navigation.
- [Mettre en pause](#pause--resume-navigation) la navigation lors d'une pause. (*Android uniquement*)
- **Arrêter** la navigation en sélectionnant **Arrêter** (*Android*) ou **Annuler** (*iOS*).

:::note Détails de l'itinéraire
Des informations supplémentaires sur l'itinéraire créé, telles que l'altitude, les instructions virage par virage, l'outil d'analyse et autres, peuvent être trouvées dans la section [**Détails**](../setup/route-details.md).
:::

### Recalcul de l'itinéraire {#route-recalculation}

L'itinéraire peut être recalculé automatiquement en cas d'écart par rapport à celui-ci. Vous pouvez modifier les paramètres du recalcul dans les [Paramètres de navigation](../guidance/navigation-settings.md#recalculate-route). Vous pouvez également désactiver la notification de recalcul de l'itinéraire dans les paramètres des [Instructions vocales](../guidance/voice-navigation.md#voice-settings).

### Mettre en pause / Reprendre la navigation {#pause--resume-navigation}

<InfoAndroidOnly/>

Si vous souhaitez vous arrêter pour une pause et vous écarter de l'itinéraire pour une courte durée, vous pouvez utiliser la fonction *Pause/Reprise* de la navigation pour suspendre les instructions vocales et arrêter le recalcul de l'itinéraire.  
Cette option est disponible dans la version Android de l'application dans la *[Liste des notifications](../guidance/voice-navigation.md#text-notifications)* ou depuis le *[Menu d'actions rapides](../../widgets/quick-action.md)*.

![Écran de notification Android](@site/static/img/navigation/route/navigation_pause_android.png)

Pour reprendre la navigation :

- Utilisez le message d'OsmAnd dans la barre de notification.
- Utilisez le *Menu d'actions rapides* ou la boîte de dialogue qui apparaît lorsque vous appuyez sur le *[bouton Navigation](../../widgets/map-buttons.md#directions)* (voir capture d'écran).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Reprendre la navigation Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reprendre la navigation iOS](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
Lorsque vous **appuyez sur le bouton Navigation** pendant votre trajet, la navigation **ne s'arrête pas et les instructions vocales continuent d'être émises**, bien que les options proposées Reprendre ou Démarrer puissent prêter à confusion.
:::


### Conseils pour économiser l'énergie {#power-saving-tips}

La navigation utilise le GPS et le traitement en arrière-plan, ce qui peut vider la batterie. Pour optimiser l'utilisation de l'énergie :

- **Éteignez l'écran** tout en vous fiant aux instructions vocales.  
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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de navigation des profils iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** détermine comment les itinéraires sont calculés. Par exemple, votre profil de vélo a un type de navigation Cyclisme, qui définit les règles de routage. Vous pouvez importer ces règles (sous forme de fichier routing.xml) dans OsmAnd. Pour en savoir plus sur le routage, vous pouvez consulter notre page [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing).&nbsp;  

- &nbsp;**<Translate android="true" ids="route_parameters"/>** contrôle quels paramètres seront utilisés lors du calcul de l'itinéraire (c'est le processus de sélection d'un itinéraire pour la navigation).

Veuillez lire les informations sur les paramètres d'itinéraire pour le type de navigation correspondant.

Vous pouvez apprendre comment configurer le [type d'itinéraire](../routing/osmand-routing.md#routing-types) et les [paramètres d'itinéraire](../guidance/navigation-settings.md#route-parameters) dans l'article [Paramètres de navigation](../guidance/navigation-settings.md) ou dans les articles sur des types spécifiques de routage dans la section [Paramètres d'itinéraire](../routing/osmand-routing.md#routing-types).  


## Navigation simulée {#simulated-navigation}

L'outil **Navigation simulée** vous permet de prévisualiser un itinéraire avant de voyager. Cela aide à la planification, à la familiarisation et au test du système de navigation d'OsmAnd.

### Démarrer / Arrêter la simulation {#start--stop-simulation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Simuler la navigation Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Simuler la navigation iOS](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

Lorsqu'un itinéraire de navigation est construit, vous pouvez commencer à simuler la navigation en utilisant l'option **<Translate android="true" ids="simulate_navigation"/>**.  

- Dans le [Menu de navigation](#navigation-menu), allez à *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- Basculez l'interrupteur pour activer l'option.
- Appuyez sur le bouton de navigation [Démarrer](#start--stop-navigation) pour commencer la simulation.
- Pour [Arrêter](#start--stop-navigation) la simulation de navigation, appuyez sur **Arrêter** (*Android*), ou **Annuler** (*iOS*).


### Mode de vitesse {#speed-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simuler la navigation Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simuler la navigation iOS](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - Accélère la simulation sur les chemins droits, ralentit aux intersections.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - Fonctionne à une vitesse fixe.
- **<Translate android="true" ids="simulation_real_mode_title"/>** :
    - **Sur les sections droites** de la route, la vitesse sera proche de la vitesse maximale autorisée.
    - **Aux intersections**, le simulateur réduira la vitesse.
    - **Des pénalités supplémentaires** seront appliquées aux feux de circulation, aux panneaux d'arrêt et à d'autres obstacles similaires.


## Cartes manquantes ou non synchronisées {#maps-missing-or-not-synchronized}

Pour construire un itinéraire, toutes les **cartes nécessaires** doivent être téléchargées et avoir la même date de publication. Veuillez noter que dans certaines situations, le message de cartes manquantes peut être caché dans le menu de préparation de l'itinéraire. Si vous tirez le menu de navigation vers le haut, vous verrez les raisons possibles pour lesquelles votre itinéraire n'a pas pu être calculé.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Message pas de cartes lors de la construction de la navigation Android 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Message pas de cartes lors de la construction de la navigation iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

### Cartes requises {#required-maps}

Dans la boîte de dialogue des cartes requises, vous verrez des suggestions de cartes à télécharger ou à mettre à jour. La liste des cartes utilisées peut ne pas être précise car elle calcule un itinéraire très basique. Pour obtenir la liste précise des cartes, vous pouvez cliquer sur **Calculer en ligne**. Si vous sélectionnez **Utiliser les cartes téléchargées**, le calcul de l'itinéraire tentera d'utiliser les cartes déjà téléchargées et ignorera le message d'avertissement.

<Tabs groupId="operating-systems" queryString="current-os">

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
4. [Comment résoudre la situation lorsque la navigation n'est pas possible en raison du manque de cartes nécessaires.](#maps-missing-or-not-synchronized)

Pour plus d'étapes de dépannage, consultez les [problèmes de navigation](../../troubleshooting/navigation.md).


## Articles connexes {#related-articles}

- [Paramètres d'itinéraire](../routing/osmand-routing.md#routing-types)
- [Détails de l'itinéraire](./route-details.md)
- [Navigation par trace GPX](./gpx-navigation.md)
- [Navigation par marqueurs](./markers-navigation.md)
- [Paramètres de navigation](../guidance/navigation-settings.md)
- [Écran de la carte pendant la navigation](../guidance/map-during-navigation.md)
- [Instructions vocales / Notifications](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)