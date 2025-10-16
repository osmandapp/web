---
source-hash: 2e10650d0eee32138985228898ac7ac712a0a70a1f315f227a751d0c2f14ae10
sidebar_position: 6
title:  Widgets de marqueur
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Aperçu {#overview}

Les marqueurs sont des points temporaires indiqués sur la carte sous forme de drapeaux. Les widgets affichent la *Direction*, la *Distance*, l'*Adresse* et l'*Heure d'arrivée estimée* jusqu'au marqueur. Ils permettent de trouver rapidement les marqueurs sur la carte, ainsi que de modifier leur position. Vous pouvez en savoir plus sur les marqueurs dans cet [article](../personal/markers).  


## Widget de la barre supérieure {#top-bar-widget}

Le widget **Barre des marqueurs de carte** (Android) / **Indication de distance - Barre supérieure** (iOS) affiche :

- La distance depuis votre position actuelle (ou le point central de la carte / le point de contact initial sur la carte lorsque la localisation est désactivée) jusqu'au point sélectionné indiqué par le marqueur sur la carte (les [unités de longueur](../personal/profiles/#general-settings) peuvent être choisies dans les paramètres du profil).
- Une flèche de la même couleur que le marqueur indique la direction depuis la position actuelle (ou le point central de la carte / le point de contact initial sur la carte lorsque la localisation est désactivée) et l'orientation dans l'espace de votre appareil (cap) vers le marqueur.
- L'adresse de la localisation.
- L'icône du menu menant à la [liste des marqueurs de carte](../navigation/setup/markers-navigation.md#itinerary-list).

Vous pouvez également choisir d'afficher un ou deux marqueurs. Pour en savoir plus sur les paramètres des widgets, consultez cet [article](https://osmand.net/docs/user/personal/markers#appearance-on-the-map).
:::info
*La distance jusqu'au marqueur* est la longueur de la ligne droite entre votre position (ou le point central de la carte / le point de contact initial sur la carte lorsque la localisation est désactivée) et le marqueur.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Marqueurs de carte sur le widget de la barre supérieure](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Activer | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisissez un panneau → <Translate android="true" ids="map_markers_bar"/>* |
| En appuyant | La partie visible de la carte se déplace vers l'emplacement du marqueur. |
| Appui long + déplacer | Pour mesurer la distance et voir la direction depuis un point particulier de la carte jusqu'au marqueur suivi, vous devez effectuer un appui long et déplacer immédiatement légèrement la position de la carte (le menu contextuel ne doit pas apparaître). |
| Approche du marqueur | Si votre position se trouve dans un petit rayon du marqueur de carte (**< 50 m**), dans le champ du widget, vous pouvez voir un bouton de coche pour supprimer rapidement le marqueur de carte (marquer comme passé). Le marqueur coché est remplacé par le marqueur suivant dans la liste des marqueurs.  |
| Format de la distance | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Marqueurs de carte sur le widget de la barre supérieure](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Activer | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisissez un panneau → <Translate android="true" ids="map_markers_bar"/>*|
| En appuyant | La partie visible de la carte se déplace vers l'emplacement du marqueur. |
| En appuyant | Changer entre "Distance" / "Heure d'arrivée estimée" (Mode de commutation). |
| Approche du marqueur | Si votre position se trouve dans un petit rayon du marqueur de carte (**< 50 m**), dans le champ du widget, vous pouvez voir un bouton de coche pour supprimer rapidement le marqueur de carte (marquer comme passé). Le marqueur coché est remplacé par le marqueur suivant dans la liste des marqueurs.  |
| Format de la distance  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |  

</TabItem>

</Tabs>


## Widgets du panneau {#panel-widgets}

Le widget **Marqueurs de carte** *(pour Android)* et **Indication de distance - Widgets** *(pour iOS)* affiche :

- *Distance depuis votre position actuelle* jusqu'au point sélectionné indiqué par le marqueur sur la carte (les [unités de longueur](../personal/profiles/#general-settings) peuvent être choisies dans les paramètres du profil).
- *Heure d'arrivée estimée ou HAE*.  
C'est l'heure (hh:mm) à laquelle le véhicule ou la personne devrait arriver à destination. Elle est calculée comme la distance jusqu'au marqueur divisée par la vitesse moyenne.
La vitesse moyenne est calculée comme la moyenne de toutes les valeurs de vitesse reçues des points de localisation pour l'intervalle de temps que vous avez sélectionné, de 15 secondes à 60 minutes.

Vous pouvez également choisir d'afficher un ou deux marqueurs. Pour en savoir plus sur les paramètres des widgets, consultez cet [article](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*La distance jusqu'au marqueur* est la longueur de la ligne droite entre votre position (ou un point particulier sur la carte) et le marqueur.
:::  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widgets du panneau](@site/static/img/widgets/map_markers_widget-02.png)  

| | |
|------------|------------|
| Activer | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>*  |
| En appuyant 1 | Changer entre "Distance" / "Heure d'arrivée estimée" (Mode de commutation). |
| En appuyant 2 | La partie visible de la carte se déplace vers l'emplacement du marqueur (Mode Aller à l'emplacement du marqueur). |
| Appui long + déplacer | Pour mesurer la distance et voir la direction depuis un point particulier de la carte jusqu'au marqueur suivi, vous devez effectuer un appui long et déplacer immédiatement légèrement la position de la carte (le menu contextuel ne doit pas apparaître). |
| Format de la distance | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Widgets du panneau](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Activer | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisissez un panneau → <Translate android="true" ids="map_markers_bar"/>*  |
| En appuyant | La partie visible de la carte se déplace vers l'emplacement du marqueur. |
| En appuyant | Changer entre "Distance" / "Heure d'arrivée estimée" (Mode de commutation). |
| Format de la distance  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |

</TabItem>

</Tabs>


## Configurer les widgets de marqueur {#configure-marker-widgets}

Vous pouvez lire des informations générales sur les paramètres du widget Marqueurs de carte sur cette [page](../personal/markers#appearance-on-the-map).  

### Barre des marqueurs de carte {#map-markers-bar}
Le widget de la barre supérieure affiche la distance et la direction jusqu'au prochain marqueur de carte depuis votre position actuelle. Dans les paramètres, vous pouvez choisir si un ou deux marqueurs seront affichés en haut de l'écran.

![Apparence sur la carte](@site/static/img/widgets/configure-marker-wid-02.png)  

### Marqueurs de carte {#map-markers} 
Le widget affiche la distance ou l'heure d'arrivée estimée (HAE) pour le premier ou le deuxième marqueur de la liste des marqueurs de carte. Vous pouvez choisir : un marqueur, le premier ou le deuxième, à afficher à l'écran, ou les deux.

![Apparence sur la carte](@site/static/img/widgets/configure-marker-wid-01.png)  ![Apparence sur la carte](@site/static/img/widgets/settings-marker-wid-first-01.png)  

|    |     |  
| :------------- | :------------- |
| Affiche | Ce mode vous permet de choisir quelles informations le widget affichera : *Distance* ou *Heure d'arrivée estimée*. |
| Intervalle | Si *Heure d'arrivée estimée* est sélectionné dans 'Affiche', cette option apparaît avec un choix de durées (de 15 secondes à 60 minutes) pour le calcul de l'HAE. |
| Clic sur le widget |  Ce paramètre vous permet de choisir quelle action sera effectuée lorsque vous cliquerez sur le widget : *Changer de mode* ou *Aller à l'emplacement du marqueur*. |


## Apparence sur la carte {#appearance-on-the-map}

La configuration de l'apparence des marqueurs de carte est disponible dans les versions Android et iOS d'OsmAnd. Le menu "Apparence sur la carte" est un paramètre général pour les marqueurs de carte et s'applique que les widgets soient activés ou non. Vous pouvez lire les informations détaillées sur cette [page](../personal/markers.md#appearance-on-the-map).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![Apparence sur la carte](@site/static/img/widgets/appearence_on_the_map-02.png)  

|    |    |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Affiche des informations sur le premier ou les deux premiers marqueurs de la liste des marqueurs de carte. |
|  <Translate android="true" ids="show_arrows_on_the_map"/> |  Indique la direction vers le marqueur suivi (un ou deux) sous forme de flèche sur la carte. Si le marqueur se trouve dans la partie visible de la carte, aucune flèche n'est affichée. |
| <Translate android="true" ids="show_guide_line"/> | Affiche la direction, sous forme de ligne pointillée, depuis un point particulier de la carte jusqu'au marqueur suivi en ligne droite.  |
| <Translate android="true" ids="one_tap_active"/> |  En appuyant une fois sur le marqueur requis sur la carte, ce marqueur se déplace en haut de la liste des marqueurs de carte actifs sans ouvrir le menu contextuel. |  
| <Translate android="true" ids="keep_passed_markers"/> | Les marqueurs ajoutés en tant que groupe de favoris ou de points de cheminement GPX marqués comme Passés resteront sur la carte. Si le groupe n'est pas actif, les marqueurs disparaîtront de la carte. |

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Apparence des marqueurs de carte iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)  

|    |     |  
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Affiche des informations sur le premier ou les deux premiers marqueurs de la liste des marqueurs de carte. |
|  <Translate android="true" ids="show_direction"/> | Vous permet de choisir d'afficher ou non les widgets et comment ils apparaîtront : au-dessus de la carte (<Translate android="true" ids="shared_string_topbar"/>) ou sur le côté droit de l'écran (<Translate android="true" ids="shared_string_widgets"/>). |
|  Flèches sur la carte |  Indique la direction vers le marqueur suivi (un ou deux) sous forme de flèche sur la carte. Si le marqueur se trouve dans la partie visible de la carte, aucune flèche n'est affichée. |
| Ligne de direction | Affiche la direction, sous forme de ligne pointillée, depuis un point particulier de la carte jusqu'au marqueur suivi en ligne droite.  |

</TabItem>

</Tabs>


## Articles connexes {#related-articles}

- [Configurer l'écran](./configure-screen.md)
- [Boutons de la carte](./map-buttons.md)
- [Widgets d'information](./info-widgets.md)
- [Widgets de navigation](./nav-widgets.md)
- [Règle-rayon et Règle](./radius-ruler.md)
- [Action rapide](./quick-action.md)