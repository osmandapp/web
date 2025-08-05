---
source-hash: fac05f4f13c5bd5f7843d69f6e63dcd842a9f677768496e4a171674d0bf80050
sidebar_position: 8
title: Marqueurs
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


## Vue d'ensemble {#overview}

Les marqueurs sont des points spéciaux marqués sur la carte comme des drapeaux qui peuvent être créés rapidement d'un simple toucher sans spécifier le nom et d'autres informations, contrairement aux [points favoris](./favorites.md). Les marqueurs offrent également des fonctionnalités supplémentaires avec les [widgets](../widgets/markers.md), les **flèches** (<Translate android="true" ids="show_arrows_on_the_map"/>) et l'**indication de distance** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Marqueurs de carte Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Marqueurs de carte iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## Marqueurs {#markers}

### Ajouter / Modifier des marqueurs {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Appuyez brièvement ou longuement sur la carte et sélectionnez l'action requise dans le [menu contextuel de la carte](../map/map-context-menu.md#add--edit-marker).

![Action d'ajout/modification de marqueur Android](@site/static/img/map/add_marker_android.png) ![Action de passage de marqueur Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Appuyez brièvement ou longuement sur la carte et choisissez l'action nécessaire dans le [menu contextuel de la carte](../map/map-context-menu.md#add--edit-marker).

![Action d'ajout/modification de marqueur iOS](@site/static/img/map/add_marker_ios.png) ![Action de restauration de marqueur Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Il est possible de marquer un point ou un objet pour faciliter la planification de la navigation. Il suffit de toucher l'icône *drapeau* (*Android*) ou *flèche* (*iOS*) dans le menu pour afficher la direction et la distance jusqu'au point sélectionné depuis votre position actuelle (ou le point central de la carte / le point de contact initial de la carte lorsque la localisation est désactivée).

***Actions***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Place un nouveau marqueur sur le point sélectionné.
- **Marquer comme passé** (*Android*) / Ignorer (iOS). Désactive le marqueur et le place dans l'Historique.
- **Rendre actif** (*Android*). Déplace le marqueur en position supérieure (sur le panneau supérieur).
- **Restaurer le marqueur** (*Android*). Déplace le marqueur de l'Historique vers la liste active.

:::note
Vous ne pouvez pas supprimer un marqueur immédiatement, vous devez d'abord le désactiver (le marquer comme passé), afin qu'il soit déplacé vers l'[Historique](#history) et ensuite vous pouvez le supprimer définitivement de l'historique. Une fois le marqueur désactivé, il sera supprimé de la carte et de la liste d'itinéraire.
:::


<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Liste d'itinéraire {#itinerary-list}

La liste d'itinéraire représente une liste ordonnée de marqueurs où le premier marqueur est utilisé dans les widgets pour la navigation. Pour en savoir plus, consultez l'article [Naviguer par marqueurs](../navigation/setup/markers-navigation.md#itinerary-list).

### Groupes de marqueurs {#marker-groups}

<InfoAndroidOnly />

![Groupes de marqueurs de carte Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

Les marqueurs peuvent être ajoutés et supprimés en tant que groupe entier à partir d'un groupe de favoris ou d'un fichier GPX avec des points de cheminement. Cela les rend très pratiques pour être utilisés dans un mode de navigation spécial - [Naviguer par marqueurs](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Historique {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historique des marqueurs de carte Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historique des marqueurs de carte iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

L'historique est une liste de tous les marqueurs désactivés (passés). À partir de cette liste, il est possible de supprimer définitivement un marqueur ou de le restaurer.


## Apparence sur la carte {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![apparence_sur_la_carte](@site/static/img/widgets/appearence_on_the_map-01.png) ![apparence_sur_la_carte](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Apparence des marqueurs de carte iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Apparence des marqueurs de carte iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

Le menu *Apparence sur la carte* est un paramètre général pour l'affichage des marqueurs et des pointeurs supplémentaires.
Dans la version iOS d'OsmAnd, *Apparence sur la carte* est également un paramètre pour l'affichage des widgets. Il existe également des paramètres supplémentaires pour [configurer les widgets avec des marqueurs](../widgets/markers.md#configure-marker-widgets).

- **Marqueurs actifs**. Affiche des informations sur le premier ou les deux premiers marqueurs de la liste des marqueurs de carte.
- **Indication de distance** *(pour iOS)*. Permet de choisir d'afficher ou non les widgets et leur apparence : au-dessus de la carte (Barre supérieure) ou sur le côté droit de l'écran (Widgets).
- **Flèches sur la carte**. Indique la direction vers le marqueur suivi (un ou deux) sous forme de flèche sur la carte. Si le marqueur se trouve dans la partie visible de la carte, aucune flèche n'est affichée.
- **Ligne de direction**. Affiche la direction, sous forme de ligne pointillée, d'un point particulier de la carte vers le marqueur suivi en ligne droite.
- ***Un seul toucher*** actif (*pour Android*). D'un seul toucher sur le marqueur requis sur la carte, ce marqueur se déplace en haut de la liste des marqueurs de carte actifs sans ouvrir le menu contextuel.
- **Conserver les marqueurs passés sur la carte** *(pour Android)*. Les marqueurs ajoutés en tant que groupe de favoris ou de points de cheminement GPX marqués comme passés resteront sur la carte. Si le groupe n'est pas actif, les marqueurs disparaîtront de la carte.


## Planifier un itinéraire pour les marqueurs {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Points de planification d'itinéraire des marqueurs de carte Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Options de planification d'itinéraire des marqueurs de carte Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

En utilisant la fonctionnalité de l'outil Planifier un itinéraire dans la liste des marqueurs, vous pouvez trier les *Marqueurs* *porte-à-porte*, les mettre dans l'ordre inverse ou créer un *aller-retour*. Si vous appuyez sur l'option *Navigation*, les *Marqueurs* seront utilisés comme [destinations intermédiaires](../navigation/setup/route-navigation.md#intermediate-destinations).


## Actions {#actions}

<InfoAndroidOnly />

![Plus de marqueurs de carte Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. Les marqueurs peuvent être triés dans la liste par nom, proximité, heure d'ajout.
- **<Translate android="true" ids="appearance_on_the_map"/>** ou **<Translate ios="true" ids="shared_string_appearance"/>**. [Paramètres des marqueurs de carte](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Ajoute des marqueurs par [saisie de coordonnées](../plan-route/coordinate-input.md).
- **<Translate android="true" ids="plan_route"/>**. Construit un itinéraire [pour la navigation](../navigation/setup/markers-navigation.md) en utilisant les marqueurs choisis.
- **<Translate android="true" ids="marker_save_as_track"/>**. Enregistre les marqueurs actifs dans un fichier GPX.
- **<Translate android="true" ids="move_all_to_history"/>**. Désactive tous les marqueurs et les déplace vers l'[Historique](#history).


## Articles connexes {#related-articles}

- [Navigation par marqueurs](../navigation/setup/markers-navigation.md)
- [Widgets de marqueurs](../widgets/markers.md)

> *Dernière mise à jour : août 2024*