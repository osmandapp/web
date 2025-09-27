---
source-hash: 87d73ff443e95ab1dcaaecf7746b579887fa93a633560d2d381fc2a5a0c16094
sidebar_position: 5
title:  Règle de rayon et Règle
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

Les **outils Règle** d'OsmAnd sont conçus pour vous aider à mesurer des distances et à comprendre l'[échelle de la carte](https://en.wikipedia.org/wiki/Scale_(map)) avec précision.

- L'outil **Règle** affiche une échelle de carte dynamique dans des unités telles que les mètres ou les pieds, vous aidant à évaluer visuellement les distances entre les objets à l'écran.
- La **Règle de rayon** vous permet de définir un rayon à partir de n'importe quel point de la carte, affichant des cercles concentriques qui représentent des intervalles de distance.
- L'outil **Distance par toucher** vous permet de mesurer des distances en touchant la carte — soit depuis votre position actuelle, soit entre deux points quelconques.

Ces outils sont utiles pour planifier des itinéraires, estimer la proximité de points d'intérêt et analyser des zones — que ce soit pour des activités de plein air ou une navigation précise.

![Écran de la règle de rayon](@site/static/img/widgets/radius_ruler_screen.png)


## Règle {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Outil Règle](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Outil Règle](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

La **Règle** affiche l'échelle actuelle de la carte sous la forme d'un segment de ligne étiqueté avec sa longueur réelle (par exemple, 100 m ou 500 ft), en bas de l'écran. Caractéristiques :

- L'échelle s'adapte dynamiquement lorsque vous zoomez ou dézoomez.
- Elle donne une référence visuelle pour estimer les distances réelles entre les objets sur la carte.
- La longueur du segment est arrondie à des unités pratiques (par exemple, 100 m), correspondant approximativement à la largeur d'un pouce pour une utilisation intuitive.

Cet outil est utile lorsque vous avez besoin d'une compréhension rapide de la taille des objets ou des distances sans placer de marqueurs ou d'itinéraires.

| | |
|------------|------------|
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Widget Règle de rayon {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="radius_ruler_item"/>*

![Position d'affichage Android](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="radius_ruler_item"/>*

![Position d'affichage Android](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

Le [Widget Règle de rayon](../widgets/info-widgets.md#radius-ruler) affiche la distance entre votre position actuelle (*Ma position*) et le centre de la carte. Vous pouvez également déplacer la carte pour définir n'importe quel point central personnalisé. Caractéristiques :

- Affiche des cercles concentriques centrés sur le point sélectionné.
- Le premier cercle reflète l'[échelle de la carte](#ruler) actuelle pour une référence visuelle rapide.
- S'ajuste automatiquement lors du zoom pour maintenir des valeurs de rayon précises.

Utilisez ce widget pour estimer la proximité de points d'intérêt ou planifier autour d'une zone définie.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Écran de la règle de rayon](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Règle de rayon"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Règle de rayon"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Règle de rayon"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## Boussole pour la Règle de rayon {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Règle de boussole](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Règle de boussole](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Lorsque la **Règle de rayon** est active, la carte affiche une superposition de boussole pour vous aider à vous orienter dans l'espace. La superposition montre comment la carte est alignée par rapport au Nord géographique, et peut inclure un triangle bleu indiquant la direction actuelle de l'appareil.

- L'anneau de la boussole indique l'orientation de la carte — que le Nord soit en haut ou tourné.
- Un **triangle bleu** indique la direction vers laquelle votre appareil est orienté.
- Pour utiliser cette fonctionnalité, l'appareil doit prendre en charge et activer un **capteur de boussole** (boussole GPS, magnétomètre).
- Tenir l'appareil horizontalement améliore la précision et la visualisation.
- Si le **triangle bleu** et la **flèche rouge** (Nord) pointent tous deux vers le haut, l'appareil est aligné sur le Nord géographique.

Cette superposition est utile pour la navigation en extérieur, vous permettant de faire correspondre l'[orientation de la carte](../map/interact-with-map.md#map-orientation-modes) avec l'environnement réel.

| | |
|------------|------------|
| Activer | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="radius_ruler_item"/>* |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |  


## Position Centre / Bas {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Position d'affichage Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Règle de rayon vers le bas](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Autre → Position de la localisation sur l'écran*

![Position d'affichage Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Règle de rayon vers le bas](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Pour augmenter le rayon visible autour de votre position, vous pouvez changer la position de la Règle de rayon en sélectionnant l'option *Centre* ou *Bas*.

Pour plus d'informations sur *la position sur l'écran*, consultez l'article [Configurer l'écran](../widgets/configure-screen.md#display-position-location-position-on-screen).


## Vue 3D {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Format 3D de la règle de rayon](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Format 3D de la règle de rayon](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Vous pouvez passer en **vue 3D** pour mieux visualiser les distances et le terrain environnant lors de l'utilisation de la Règle de rayon. Cette vue incline la carte et fournit un effet de perspective qui étend le rayon visible.

- Appuyez sur [le bouton de localisation](../map/interact-with-map.md#my-location-and-zoom) pour vous centrer sur votre position.
- Utilisez un geste de [balayage vers le haut avec deux doigts](../map/interact-with-map.md#gestures) pour incliner la carte en mode 3D.

Les cercles de rayon apparaîtront avec de la profondeur, ce qui est particulièrement utile pour la planification d'itinéraires dans des zones vallonnées ou des environnements urbains où le contexte vertical est important.


## Distance par toucher {#distance-by-tap}

![Distance entre deux points aléatoires sur la carte](@site/static/img/widgets/distance_between_two_random_points.png)

L'outil **Distance par toucher** vous permet de mesurer des distances entre des points sur la carte sans utiliser la Règle de rayon ni créer d'itinéraire.

Il y a deux cas d'utilisation :

- **Distance de votre position à un point**  
  Touchez n'importe où sur la carte et une ligne droite apparaîtra de votre position actuelle au point touché, accompagnée d'une étiquette de distance. La ligne reste à l'écran même si vous touchez ailleurs.

- **Distance entre deux points quelconques**  
  Touchez deux points sur la carte simultanément (multi-touch). Une ligne relie les deux points, et la distance mesurée est affichée.

| | |
|------------|------------|
| Activer |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Taille du texte (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Format des unités | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Guides vidéo {#video-guides}

Regardez ces courts tutoriels pour apprendre à utiliser la Règle de rayon et les outils associés dans OsmAnd :

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## Articles connexes {#related-articles}

- [Configurer l'écran](./configure-screen.md)
- [Boutons de la carte](./map-buttons.md)
- [Widgets d'information](./info-widgets.md)
- [Widgets de navigation](./nav-widgets.md)
- [Action rapide](./quick-action.md)
- [Widgets de marqueur](./markers.md)