---
source-hash: 9e178d46c34474107d426605f944341538b486f2bc4997dab4e5643b50cb3990
sidebar_position: 6
title: Widgets de marqueurs
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Vue d'ensemble {#overview}

Les marqueurs sont des points temporaires indiqués sur la carte sous forme de drapeaux. Les widgets affichent la *direction*, la *distance*, l'*adresse* et l'*heure d'arrivée estimée* jusqu'au marqueur. Ils vous permettent de trouver rapidement des marqueurs sur la carte, ainsi que de modifier leur position. Vous pouvez en savoir plus sur les marqueurs dans cet [article](../personal/markers).


## Widget de la barre supérieure {#top-bar-widget}

Le widget **Barre des marqueurs de carte** (Android) / **Indication de distance - Barre supérieure** (iOS) affiche :

- La distance entre votre position actuelle (ou le point central de la carte / le point de contact initial de la carte lorsque la localisation est désactivée) et le point sélectionné indiqué par le marqueur sur la carte (les [unités de longueur](../personal/profiles/#general-settings) peuvent être choisies dans les paramètres du profil).
- Une flèche de la même couleur que le marqueur indique la direction depuis la position actuelle (ou le point central de la carte / le point de contact initial de la carte lorsque la localisation est désactivée) et l'orientation de votre appareil dans l'espace (cap) vers le marqueur.
- L'adresse de l'emplacement.
- Une icône de menu menant à la [liste des marqueurs de carte](../personal/markers/#map-markers-menu).

Vous pouvez également choisir d'afficher un ou deux marqueurs. Pour en savoir plus sur les paramètres des widgets, consultez cet [article](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*La distance jusqu'au marqueur* est la longueur de la ligne droite entre votre position (ou le point central de la carte / le point de contact initial de la carte lorsque la localisation est désactivée) et le marqueur.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Marqueurs de carte sur le widget de la barre supérieure](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Activer | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisir un panneau → <Translate android="true" ids="map_markers_bar"/>* |
| En appuyant | La partie visible de la carte se déplace vers l'emplacement du marqueur. |
| Appui long + déplacement | Pour mesurer la distance et voir la direction d'un point particulier sur la carte vers le marqueur suivi, vous devez effectuer un appui long et déplacer légèrement la position de la carte (le menu contextuel ne doit pas apparaître). |
| Approcher le marqueur | Si votre position se trouve dans un petit rayon du marqueur de carte (**< 50 m**), dans le champ du widget, vous pouvez voir un bouton de coche pour supprimer rapidement le marqueur de carte (marquer comme passé). Le marqueur coché est remplacé par le marqueur suivant dans la liste des marqueurs. |
| Format de distance | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Marqueurs de carte sur le widget de la barre supérieure](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Activer | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisir un panneau → <Translate android="true" ids="map_markers_bar"/>*|
| En appuyant | La partie visible de la carte se déplace vers l'emplacement du marqueur. |
| En appuyant | Basculement entre "Distance" / "Heure d'arrivée estimée" (Mode de commutation). |
| Approcher le marqueur | Si votre position se trouve dans un petit rayon du marqueur de carte (**< 50 m**), dans le champ du widget, vous pouvez voir un bouton de coche pour supprimer rapidement le marqueur de carte (marquer comme passé). Le marqueur coché est remplacé par le marqueur suivant dans la liste des marqueurs. |
| Format de distance | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Widgets de panneau {#panel-widgets}

Le widget **Marqueurs de carte** *(pour Android)* et **Indication de distance - Widgets** *(pour iOS)* affichent :

- *La distance entre votre position actuelle* et le point sélectionné indiqué par le marqueur sur la carte (les [unités de longueur](../personal/profiles/#general-settings) peuvent être choisies dans les paramètres du profil).
- *L'heure d'arrivée estimée ou ETA*.
Il s'agit de l'heure (hh:mm) à laquelle le véhicule ou la personne devrait arriver à destination. Elle est calculée comme la distance jusqu'au marqueur divisée par la vitesse moyenne.
La vitesse moyenne est calculée comme la moyenne de toutes les valeurs de vitesse reçues des points de localisation pour l'intervalle de temps que vous avez sélectionné, de 15 secondes à 60 minutes.

Vous pouvez également choisir d'afficher un ou deux marqueurs. Pour en savoir plus sur les paramètres des widgets, consultez cet [article](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*La distance jusqu'au marqueur* est la longueur de la ligne droite entre votre position (ou un point particulier sur la carte) et le marqueur.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de panneau](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| Activer | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>* |
| En appuyant 1 | Basculement entre "Distance" / "Heure d'arrivée estimée" (Mode de commutation). |
| En appuyant 2 | La partie visible de la carte se déplace vers l'emplacement du marqueur (Mode Aller à l'emplacement du marqueur) |
| Appui long + déplacement | Pour mesurer la distance et voir la direction d'un point particulier sur la carte vers le marqueur suivi, vous devez effectuer un appui long et déplacer légèrement la position de la carte (le menu contextuel ne doit pas apparaître). |
| Format de distance | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de panneau](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Activer | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisir un panneau → <Translate android="true" ids="map_markers_bar"/>* |
| En appuyant | La partie visible de la carte se déplace vers l'emplacement du marqueur. |
| En appuyant | Basculement entre "Distance" / "Heure d'arrivée estimée" (Mode de commutation). |
| Format de distance | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Configurer les widgets de marqueurs {#configure-marker-widgets}

Vous pouvez lire des informations générales sur les paramètres du widget Marqueurs de carte sur cette [page](../personal/markers#map-markers-widgets).

**Barre des marqueurs de carte**
Le widget de la barre supérieure affiche la distance et la direction vers le prochain marqueur de carte à partir de votre position actuelle. Dans les paramètres, vous pouvez choisir si un ou deux marqueurs seront affichés en haut de l'écran.

![apparence_sur_la_carte](@site/static/img/widgets/configure-marker-wid-02.png)

**Marqueurs de carte**
Le widget affiche la distance ou l'heure d'arrivée estimée (ETA) pour le premier ou le deuxième marqueur dans la liste des marqueurs de carte. Vous pouvez choisir : un marqueur, le premier ou le deuxième, à afficher à l'écran ou les deux.

![apparence_sur_la_carte](@site/static/img/widgets/configure-marker-wid-01.png) ![apparence_sur_la_carte](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| Afficher | Ce mode vous permet de choisir les informations que le widget affichera : *Distance* ou *Heure d'arrivée estimée*. |
| Intervalle | Si *Heure d'arrivée estimée* est sélectionné dans « Afficher », cette option apparaît avec un choix d'heures (de 15 secondes à 60 minutes) pour le calcul de l'ETA. |
| Cliquer sur le widget | Ce paramètre vous permet de choisir l'action qui sera effectuée lorsque vous cliquez sur le widget : *Changer de mode* ou *Aller à l'emplacement du marqueur*. |


## Apparence sur la carte {#appearance-on-the-map}

La configuration de l'apparence des marqueurs de carte est disponible dans les versions Android et iOS d'OsmAnd. Le menu « Apparence sur la carte » est un paramètre général pour les marqueurs de carte et s'applique que les widgets soient activés ou non. Vous pouvez lire les informations détaillées sur cette [page](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![apparence_sur_la_carte](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Affiche les informations sur le premier ou les deux premiers marqueurs de la liste des marqueurs de carte. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | Indique la direction vers le marqueur suivi (un ou deux) sous forme de flèche sur la carte. Si le marqueur se trouve dans la partie visible de la carte, aucune flèche n'est affichée. |
| <Translate android="true" ids="show_guide_line"/> | Affiche la direction, sous forme de ligne pointillée, d'un point particulier sur la carte vers le marqueur suivi en ligne droite. |
| <Translate android="true" ids="one_tap_active"/> | D'un simple toucher sur le marqueur requis sur la carte, ce marqueur se déplace en haut de la liste des marqueurs de carte actifs sans ouvrir le menu contextuel. |
| <Translate android="true" ids="keep_passed_markers"/> | Les marqueurs ajoutés en tant que groupe de favoris ou de points de cheminement GPX marqués comme passés resteront sur la carte. Si le groupe n'est pas actif, les marqueurs disparaîtront de la carte. |

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Apparence des marqueurs de carte iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Affiche les informations sur le premier ou les deux premiers marqueurs de la liste des marqueurs de carte. |
| <Translate android="true" ids="show_direction"/> | Permet de choisir d'afficher ou non les widgets et leur apparence : au-dessus de la carte (<Translate android="true" ids="shared_string_topbar"/>) ou sur le côté droit de l'écran (<Translate android="true" ids="shared_string_widgets"/>). |
| Flèches sur la carte | Indique la direction vers le marqueur suivi (un ou deux) sous forme de flèche sur la carte. Si le marqueur se trouve dans la partie visible de la carte, aucune flèche n'est affichée. |
| Ligne de direction | Affiche la direction, sous forme de ligne pointillée, d'un point particulier sur la carte vers le marqueur suivi en ligne droite. |

</TabItem>

</Tabs>


## Articles connexes {#related-articles}

- [Configurer l'écran](./configure-screen.md)
- [Boutons de carte](./map-buttons.md)
- [Widgets d'information](./info-widgets.md)
- [Widgets de navigation](./nav-widgets.md)
- [Règle de rayon et règle](./radius-ruler.md)
- [Action rapide](./quick-action.md)


> *Dernière mise à jour : octobre 2023*