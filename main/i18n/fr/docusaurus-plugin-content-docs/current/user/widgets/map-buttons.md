---
sidebar_position: 2
title: Boutons de la carte
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


## Aperçu

Les boutons de la carte, notamment *Zoom*, *Recherche*, *Itinéraire*, *Boussole*, *Ma position*, *Mode 3D* et *Menu*, sont les principaux contrôles pour interagir avec la carte. Chaque bouton offre des fonctionnalités spécifiques pour améliorer votre expérience de navigation et d'utilisation de la carte.


## Ma position et Zoom

![Menu de l'écran de configuration](@site/static/img/widgets/location_zoom_buttons.png)

Utilisez ces boutons pour contrôler la façon dont la carte est affichée sur l'écran de votre appareil :

- **Ma position**. Indique si le centre de la carte est synchronisé avec la géolocalisation actuelle de votre appareil.
- **Zoom**. Vous permet d'ajuster le niveau de zoom de la carte pour fournir plus ou moins de détails.
Si vous souhaitez plus d'informations sur l'utilisation de ces boutons, vous pouvez consulter l'article [Interagir avec la carte](../map/interact-with-map.md#my-location-and-zoom).


## Itinéraire

![Le bouton Itinéraire permet](@site/static/img/widgets/directions_button_allows.png)

Le bouton **Itinéraire** est essentiel pour la planification d'itinéraire et la navigation :

- [Construire un itinéraire](../navigation/index.md). Utilisez ce bouton pour créer un itinéraire.
- [Démarrer la navigation](../navigation/index.md). Lancez la navigation virage par virage.
- En mode navigation, le bouton *Itinéraire* n'est pas visible par défaut mais apparaît après un court appui sur la carte.

États indicatifs du bouton *Itinéraire* :

- L'*icône grise par défaut* indique que l'itinéraire n'a pas encore été créé. Appuyer sur cette icône ouvre la fonctionnalité de [configuration d'itinéraire](../navigation/setup/route-navigation.md).
- L'*icône bleue par défaut* indique que l'itinéraire est construit, mais que la navigation n'a pas encore commencé. Appuyer sur cette icône ouvre la fonctionnalité de [configuration d'itinéraire](../navigation/setup/route-navigation.md#start--stop-navigation).
- L'*icône flèche bleue* indique que la navigation est active. Appuyer sur cette icône ouvre les [détails de l'itinéraire actuel](../navigation/setup/route-details.md).


## Configurer la carte

![Configurer la carte](@site/static/img/widgets/configure_map.png)

Le bouton **Configurer la carte** donne accès au [menu Configurer la carte](../map/configure-map-menu.md). L'icône reflète également le [profil d'application actuel](../personal/profiles.md), vous permettant d'identifier et de basculer entre différents profils.


## Menu principal

![Bouton du menu principal](@site/static/img/widgets/main_menu_button.png)

Le bouton [**Menu principal**](../start-with/main-menu.md) ouvre le menu général, donnant accès à [toutes les fonctionnalités de l'application](../start-with/main-menu.md). En mode navigation, ce bouton est masqué par défaut et devient visible après un court appui sur la carte.


## Recherche

![Bouton de recherche](@site/static/img/widgets/search_button.png)

Le bouton Recherche offre un accès rapide aux [capacités de recherche](../search/index.md), vous permettant de trouver des lieux, des points d'intérêt et d'autres informations directement depuis la carte.


## Boussole

Le bouton Boussole indique l'orientation de la carte sur l'écran de votre appareil. Pour plus d'informations, reportez-vous à l'article [Interagir avec la carte](../map/interact-with-map.md#map-orientation--compass).


### Modes d'orientation de la carte

- ![Boussole](@site/static/img/widgets/map_butt_manually_ios.png)
**Rotation manuelle**. Dans ce mode, vous pouvez faire pivoter manuellement la carte avec un [geste à deux doigts (toucher et faire pivoter avec deux doigts)](../map/interact-with-map.md#gestures) selon vos préférences. L'orientation de la carte ne dépend pas de la direction du déplacement ni de la boussole de l'appareil, mais est déterminée par vous. Le mode de rotation manuelle est défini par défaut.

- ![Boussole](@site/static/img/widgets/map_butt_movem_dir_ios.png)
**Direction du mouvement**. Dans ce mode, la carte est orientée selon la direction de votre mouvement connue à partir des données GPS. Par exemple, si vous tournez à droite, la carte tourne également de sorte que le côté droit de l'écran corresponde à la direction du mouvement. Pour plus de détails, allez à [Faire pivoter la carte par relèvement](../map/interact-with-map#rotate-map-by-bearing).

- ![Boussole](@site/static/img/widgets/map_butt_compas_dir_ios.png)
**Direction de la boussole**. L'icône sur le bouton pointe vers le Nord réel, et la carte se déplace selon l'orientation de la boussole de votre appareil. De cette façon, le nord de la carte correspond au nord réel, et vous pouvez voir l'orientation de la carte par rapport au terrain environnant. Votre appareil doit être dans la position la plus horizontale possible. Si votre appareil n'a pas de capteur de boussole, l'orientation de la carte reste inchangée.

- ![Boussole](@site/static/img/widgets/map_butt_north_up_ios.png)
**Le Nord est en haut**. Dans ce mode, la carte est fixe (avec un verrouillage dur) dans la direction Nord, qui est le bord supérieur de votre appareil. Quelle que soit la direction dans laquelle l'appareil se déplace, la carte reste statique et vous pouvez voir votre position par rapport à votre environnement. La carte n'a pas de rotation automatique ou manuelle.

### Comportement du tapotement de la boussole

Le bouton de la boussole offre plusieurs actions pour contrôler l'orientation de la carte :

- **Simple tapotement**. Un *simple tapotement* sur le [bouton Boussole](../widgets/map-buttons.md#compass) (situé dans le coin supérieur gauche de l'écran lorsqu'il est [visible](../widgets/map-buttons.md#display-options)) réoriente instantanément l'orientation de la carte *vers le Nord* dans tous les modes d'orientation de la carte. Même si la carte est en mode *Direction de la boussole*, elle tourne quand même un instant puis revient à l'orientation dynamique de ce mode.

- **Double tapotement**. Pour basculer rapidement entre les modes d'orientation de la carte, comme suivre la direction GPS ou tourner avec l'appareil, *double tapotez* le [bouton Boussole](../widgets/map-buttons.md#compass) (lorsqu'il est [visible](../widgets/map-buttons.md#display-options)).

- **Long tapotement**. Avec un *long tapotement* sur le [bouton Boussole](../widgets/map-buttons.md#compass) (lorsqu'il est [visible](../widgets/map-buttons.md#display-options)), vous pouvez ouvrir une liste de tous les modes d'orientation de la carte et sélectionner celui requis. Cette liste peut également être ouverte dans les [Paramètres du profil](../personal/profiles.md#appearance).


### Options d'affichage

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget Boussole](@site/static/img/widgets/map_butt_compass_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget Boussole](@site/static/img/widgets/map_butt_compass_widg_ios.png)

</TabItem>

</Tabs>

L'icône de la boussole sur le bouton pointe toujours vers le Nord. Vous pouvez sélectionner la façon dont le bouton de la boussole est affiché à l'écran.

- **Toujours visible**. Le bouton ne disparaît pas de l'écran.
- **Toujours masqué**. Dans ce cas, vous ne pouvez pas changer rapidement l'orientation de la carte, mais le bouton ne prendra pas de place sur l'écran.
- **Visible si la carte est tournée**. Le bouton n'est pas visible tant que la boussole pointe vers le Nord en haut de votre appareil.


## Mode 3D

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*

![Mode 3D](@site/static/img/widgets/map_butt_3D_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*

![Mode 3D](@site/static/img/widgets/map_butt_3D_mode_ios.png)

</TabItem>

</Tabs>

- *<Translate android="true" ids="shared_string_hidden"/>*. Si ce mode est sélectionné pour un bouton, vous devez utiliser un geste pour changer la vue de la carte. Appuyez sur la carte avec deux doigts et déplacez-les de haut en bas pour ajuster l'inclinaison de la carte.
- *<Translate android="true" ids="shared_string_visible"/>*. Le bouton est toujours affiché sur l'écran de la carte.
- *<Translate android="true" ids="visible_in_3d_mode"/>*. Le bouton est affiché sur l'écran de la carte lorsque vous changez la vue de la carte avec un geste [*à deux doigts et déplacer*](../map/interact-with-map.md#gestures).

### Paramètres supplémentaires

1. **Afficher le bouton**. (*Pour Android*) Le paramètre pour le bouton *Mode 3D* apparaît dans la liste de l'écran de configuration uniquement si le moteur de rendu de la carte [Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) est sélectionné.

2. **Enregistre l'angle**. Après être passé en mode 3D et avoir changé l'angle manuellement avec un geste, l'angle est enregistré et utilisé la prochaine fois que le mode 3D est activé. Cette option n'est enregistrée que pour le profil sélectionné à ce moment-là.

3. **Déplacement**. Vous pouvez placer le bouton n'importe où sur l'écran de votre appareil. Pour ce faire, maintenez le bouton enfoncé et, sans retirer votre doigt, faites-le glisser à l'endroit souhaité.

4. **Position du bouton**. La position du bouton sur la carte sur l'écran de l'application est enregistrée séparément pour chaque profil.

5. **Recommandation**. Il est recommandé de télécharger et d'activer la [carte Hillshade](../plugins/topography.md#configure-map-view) pour la région sélectionnée.


## Boutons personnalisés

Le [widget d'action rapide](./quick-action.md) est un bouton configurable avec différents types d'actions qui peuvent être attribuées. Il est également possible d'avoir plusieurs [boutons personnalisés](./quick-action.md#custom-buttons).


## Apparence des boutons de la carte

<InfoAndroidOnly/>

| Boutons par défaut | Boutons personnalisés |
| :--- | :--- |
| ![Apparence des boutons de la carte](@site/static/img/widgets/map_butt_appearance_default_andr.png) | ![Apparence des boutons de la carte](@site/static/img/widgets/map_butt_appearance_custom_andr.png) |

Les paramètres d'apparence des boutons de la carte sont disponibles via les menus suivants :

- *Menu → Configurer l'écran → Boutons → Boutons par défaut*
- *Menu → Configurer l'écran → Boutons personnalisés → Action rapide → menu à trois points → Apparence*

La personnalisation de l'apparence des boutons vous permet d'ajuster la taille, la forme, l'icône et l'opacité de l'arrière-plan pour les [Actions rapides (boutons personnalisés)](../widgets/quick-action.md#button-appearance) et les [boutons par défaut](../widgets/configure-screen.md#button-appearance). Cette flexibilité vous permet de personnaliser l'interface selon vos préférences et d'améliorer la convivialité.


## Articles connexes

- [Configurer l'écran](./configure-screen.md)
- [Widgets d'information](./info-widgets.md)
- [Widgets de navigation](./nav-widgets.md)
- [Règle de rayon et Règle](./radius-ruler.md)
- [Widgets de marqueurs](./markers.md)
- [Action rapide](./quick-action.md)

> *Cet article a été mis à jour pour la dernière fois en février 2025*

-- source-hash: blake2s: 4bb43302236568281d23ca9e7cc98a6424244128acc46340d354ddfd49bf3b12 --
