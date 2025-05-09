---
source-hash: 2f8a52c3e17f42ceaab4e1e315cea73c4e541309834445137714ad398079c897 
sidebar_position: 5
title:  Règle de rayon et règle
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



## Vue d'ensemble

Les outils de règle sont conçus pour vous aider à évaluer avec précision l'[échelle de la carte](https://en.wikipedia.org/wiki/Scale_(map)) actuelle et à mesurer les distances. L'outil *Règle de rayon* vous permet de définir un rayon autour de n'importe quel point sélectionné sur la carte, affichant des cercles de distance concentriques pour une référence facile. L'outil *Distance tangente* vous permet de calculer la distance entre des points sélectionnés ou de déterminer la distance jusqu'à un point spécifique sur la carte, fournissant des mesures précises pour la navigation et la planification.

![Écran de la règle de rayon](@site/static/img/widgets/radius_ruler_screen.png)


## Règle

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Outil Règle](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Outil Règle](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

L'outil **Règle** fournit une représentation visuelle de l'échelle de la carte, affichant la distance en mètres, pieds ou autres unités de mesure pour un segment sur la carte. Vous pouvez trouver l'échelle affichée en bas de l'écran, permettant une référence rapide pendant que vous naviguez. Généralement, l'échelle de la carte est arrondie à un nombre pratique qui correspond approximativement à la largeur d'un pouce, ce qui facilite l'estimation des distances.

Lorsque vous zoomez ou dézoomez, la *Règle* s'ajuste dynamiquement, vous permettant d'évaluer visuellement la taille des objets sur la carte et la distance entre eux avec une plus grande précision. Que vous mesuriez la distance entre des points de repère ou des îles, la *Règle* s'adapte pour fournir un retour d'information en temps réel sur la distance, vous assurant d'avoir toujours un sens précis de l'échelle à portée de main.

| | |
|------------|------------|
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


## Widget Règle de rayon

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="radius_ruler_item"/>*

![Écran de la règle de rayon](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="radius_ruler_item"/>*

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Règle de rayon"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Règle de rayon"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Règle de rayon"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

Le **[Widget Règle de rayon](../widgets/info-widgets.md#radius-ruler)** affiche la distance entre votre position actuelle (*Ma position*) et le centre de la carte ou un point que vous sélectionnez sur la carte, marqué comme le centre de la *Règle de rayon*. Cet outil est utile pour mesurer rapidement les distances de votre position à un point spécifique, vous aidant à évaluer la proximité de points de repère ou d'autres lieux.

Le premier cercle tracé par la *Règle de rayon* correspond à l'[échelle de la carte](#ruler) actuelle, fournissant une référence visuelle facile pour comprendre la zone entourant votre position. Lorsque vous ajustez le niveau de zoom, l'échelle de la carte et le rayon s'adaptent dynamiquement, offrant des mesures de distance précises de votre position au point central sur la carte.


## Boussole pour la règle de rayon

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Règle de boussole](@site/static/img/widgets/compass_ruler.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Règle de boussole](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Par défaut, l'[orientation de la carte](../map/interact-with-map.md#map-orientation--compass) est affichée sous forme de cercles à côté de la règle de rayon, indiquant comment le Nord de la carte est aligné avec le haut de l'écran de votre appareil. Cela permet une navigation facile et vous aide à vous orienter dans l'espace.

Vous remarquerez peut-être également un **triangle bleu** qui indique la direction de la boussole. Cette fonction nécessite que la **boussole GPS** de votre appareil soit présente et activée. Lorsqu'elle est activée, cette fonction vous aide à aligner votre appareil avec la carte. Pour l'utiliser, tenez votre appareil horizontalement pour voir la direction dans laquelle il est orienté.


**Astuce**. Si vous faites pivoter l'appareil de manière à ce que le *triangle bleu* et la *flèche rouge* pointent vers le haut, le haut de l'appareil sera orienté vers le Nord géographique. De plus, en faisant pivoter la carte ou l'appareil jusqu'à ce que le *triangle bleu* et la *flèche rouge* soient alignés, vous pouvez confirmer que la carte est correctement orientée pour correspondre au paysage physique qui vous entoure.

| | |
|------------|------------|
| Activer | **Android**: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,map_widget_ruler_control"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,map_widget_ruler_control"/>* |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |  


### Position centrale / inférieure

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,always_center_position_on_map"/>*

![Position d'affichage Android](@site/static/img/widgets/radius_ruler_display_position_android.png) ![Règle de rayon vers le bas](@site/static/img/widgets/radius_ruler_downward_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,general_settings_2,always_center_position_on_map"/>*

![Position d'affichage Android](@site/static/img/widgets/radius_ruler_display_position_ios.png) ![Règle de rayon vers le bas](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Pour étendre la portée visible de la règle de rayon, vous devez désactiver l'option *<Translate android="true" ids="always_center_position_on_map"/>*.
Ensuite, activez le paramètre *<Translate android="true" ids="radius_ruler_item"/>* dans le menu *<Translate android="true" ids="layer_map_appearance"/>*. Une fois activé, appuyer sur le bouton de localisation déplacera la *<Translate android="true" ids="radius_ruler_item"/>* vers le bas, vous permettant de voir une plus grande partie de la zone environnante sur la carte.

### Vue 3D

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Format 3D de la règle de rayon](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Format 3D de la règle de rayon](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>


Pour améliorer la portée visible de la *Règle de rayon*, appuyez sur [le bouton de localisation](../map/interact-with-map.md#my-location-and-zoom), puis [ajustez l'inclinaison de la carte pour passer en vue 3D](../map/interact-with-map.md#gestures). Cette perspective vous permet de mieux visualiser les distances et les relations entre les points sur la carte.


### Guides vidéo

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>

Regardez ce guide vidéo pour une présentation étape par étape sur la façon d'utiliser efficacement l'outil *Règle de rayon*.


## Outil Distance par appui

![Distance entre deux points aléatoires sur la carte](@site/static/img/widgets/distance_between_two_random_points.png)  

**Distance de votre position à un point sur la carte**  
Appuyez sur un point de la carte et une ligne apparaît indiquant la distance entre votre position actuelle et le point sélectionné. Cette ligne reste visible même si vous continuez à appuyer sur l'écran pour vérifier d'autres points.

**Distance entre deux points sur la carte**  
Pour mesurer la distance entre deux points, appuyez simultanément sur les deux points. La carte affichera une ligne reliant les points ainsi que la distance mesurée entre eux.

| | |
|------------|------------|
| Activer |  **Android :** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,map_widget_distance_by_tap"/>* |
|   |  **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,map_widget_distance_by_tap"/>* |
| Taille du texte (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,map_widget_distance_by_tap,text_size"/>* |
| Format des unités | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Articles connexes

- [Configurer l'écran](./configure-screen.md)
- [Boutons de la carte](./map-buttons.md)
- [Widgets d'information](./info-widgets.md)
- [Widgets de navigation](./nav-widgets.md)
- [Action rapide](./quick-action.md)
- [Widgets de marqueurs](./markers.md)

> *Cet article a été mis à jour pour la dernière fois en septembre 2024*

