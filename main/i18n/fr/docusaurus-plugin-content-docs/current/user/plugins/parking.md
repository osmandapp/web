---
source-hash: e0ac61f9d2bf109c22ebc8594ef028a9a1bd53746b32738508df65a2ac6ee969
sidebar_position: 12
title:  Position de stationnement
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

## Aperçu {#overview}

Avec le plugin, vous pouvez définir un point sur la carte où votre voiture sera laissée dans la rue et notifier le calendrier du début de l'heure de stationnement. De cette façon, il vous sera plus facile de suivre l'heure et l'emplacement de votre voiture.

Le point de stationnement sur la carte et la notification dans le calendrier sont fournis par le plugin Parking. Il est gratuit et fonctionne bien avec les cartes OsmAnd téléchargées. Le point de stationnement vous aide à savoir exactement où votre voiture est garée et à quelle distance vous vous trouvez du point de stationnement. Par exemple, il peut être très utile de revenir à temps et d'éviter des dépenses inutiles. Le plugin vous permet également de partager l'emplacement avec les personnes que vous souhaitez. Le point de stationnement est facile à configurer, avec ou sans suivi du temps, et à supprimer après une utilisation réussie.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget de stationnement Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de stationnement iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>

## Paramètres de configuration requis {#required-setup-parameters}

Pour utiliser un point de stationnement sur la carte, vous devez effectuer les réglages suivants :

1. Activez le [plugin Position de stationnement](../plugins/index.md#enable--disable) dans la section Plugins du *Menu principal*.
2. Ajoutez un [point de stationnement](#set-a-spot) sur la carte.
3. Si nécessaire, ajoutez le [widget Parking](#parking-widget) à l'écran.

## Point de stationnement sur la carte {#parking-spot-on-the-map}

Lorsqu'un point de stationnement apparaît sur la carte, il acquiert la latitude et la longitude de la géolocalisation sélectionnée, ainsi qu'un horodatage exact de sa création. Cela vous aide à identifier visuellement le point de stationnement à la fois lorsque vous définissez le point et lorsque vous le suivez plus tard et l'utilisez pour naviguer si nécessaire.

### Définir un point {#set-a-spot}

Pour définir un point de stationnement sur la carte, zoomez au niveau requis, puis appuyez longuement sur l'endroit sur la carte et dans le [menu contextuel](../map/map-context-menu.md) qui s'ouvre, effectuez les réglages.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

1. Appuyez sur [Actions](../map/map-context-menu#actions).
2. Appuyez sur **Marquer comme lieu de stationnement**.
3. Sélectionnez la limite de temps dans la boîte de dialogue <Translate android="true" ids="parking_options"/> : *Stationnement illimité* ou *Stationnement limité dans le temps*.

- Option **<Translate android="true" ids="osmand_parking_no_lim_text"/>** : s'il n'y a pas de limite de temps, sélectionnez cette option et un point sans limite de temps apparaît sur la carte.
- Option **<Translate android="true" ids="osmand_parking_time_limit"/>** : si une limite de temps est requise, sélectionnez cette option, puis :

    - Sélectionnez l'heure de fin du stationnement.
    - Ajoutez ou non un rappel pour l'application Calendrier.
    - Appuyez sur **OK**, et le point avec la limite de temps que vous avez définie sera placé sur la carte.

![Définir un point de stationnement dans Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Définir les limites de temps dans Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

1. Appuyez sur [Actions](../map/map-context-menu#actions).
2. Appuyez sur **<Translate ios="true" ids="add_parking_short"/>**.
3. Sélectionnez la limite de temps dans la boîte de dialogue **Marqueur de stationnement**.

- Si une limite de temps est requise, activez l'option **<Translate ios="true" ids="time_limited"/>**, puis :

    - Sélectionnez l'heure de fin du stationnement.
    - Ajoutez ou non un rappel pour l'application Calendrier.
    - Appuyez sur **Enregistrer**, et le point avec la limite de temps que vous avez définie sera placé sur la carte.

![Sélectionner Stationnement dans Actions dans iOS](@site/static/img/plugins/parking/ios_set_p_point2.png) ![Définir un point de stationnement dans iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

:::info NOTE
L'heure de début est toujours automatiquement définie pour le point de stationnement. L'heure de fin, si une limite de temps est sélectionnée, ne peut être ajoutée à nouveau qu'en recréant l'espace de stationnement, mais pas modifiée. Les notifications de fin de temps de stationnement ne peuvent être placées dans l'application calendrier de votre appareil que si vous avez spécifié Ajouter une notification dans l'application Calendrier lors de la création de l'espace de stationnement.
:::

### Rester informé {#stay-informed}

Pour connaître l'emplacement et l'heure du stationnement après avoir configuré un point de stationnement, vous pouvez utiliser le [widget Parking](../widgets/info-widgets.md#-parking-widget) ou utiliser le menu contextuel de l'endroit sur la carte.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**Emplacement**. Vous pouvez dézoomer sur la carte pour voir un point de stationnement ou utiliser le [widget Parking](../widgets/info-widgets.md#-parking-widget). Lorsque vous fermez et rouvrez l'application, le widget Parking vous aide à trouver votre point de stationnement sur la carte. Il suffit d'appuyer sur le widget et le point de stationnement apparaît sur la carte.

De plus, le widget affiche la distance entre votre position actuelle ou le centre de l'écran et le point de stationnement.

![Widget de stationnement Android](@site/static/img/plugins/parking/parking_widget_android.png)

L'**heure de début** est toujours affichée dans les détails du point de stationnement. Pour afficher les détails, appuyez sur <Translate android="true" ids="parking_place"/> et le menu contextuel du point de stationnement affichera l'heure de début.

![Informations sur le stationnement dans Android](@site/static/img/plugins/parking/and_parking_info.png)

Le **temps restant** ou le **temps dépassé** dans les informations sur le point de stationnement limité dans le temps affichera la durée totale : soit le temps restant avant la fin estimée du stationnement, soit le temps dépassé depuis lors.

![Temps restant dans Android](@site/static/img/plugins/parking/and_parking_info_left.png)

L'option **<Translate android="true" ids="osmand_parking_add_event"/>**, si elle est cochée sur l'écran contextuel Définir la limite de temps de stationnement, vous permet de créer un rappel sur la fin du temps de stationnement dans l'application Calendrier par défaut de votre appareil.

</TabItem>

<TabItem value="ios" label="iOS">

**Emplacement** Vous pouvez dézoomer sur la carte pour voir un point de stationnement ou utiliser le [widget Parking](../widgets/info-widgets.md#-parking-widget). Lorsque vous fermez et rouvrez l'application, le widget Parking vous aide à trouver votre point de stationnement sur la carte. Il suffit d'appuyer sur le widget et le point de stationnement apparaît sur la carte.

De plus, le widget affiche la distance entre votre position actuelle ou le centre de l'écran et le point de stationnement.

![Widget de stationnement iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

L'**heure de début** est toujours affichée dans les détails du point de stationnement. Pour afficher les détails, appuyez sur Marqueur de stationnement et le menu contextuel du point de stationnement affichera l'heure de début.

![Informations sur le stationnement dans iOS](@site/static/img/plugins/parking/ios_parking_info.png)

Le **temps restant** ou le **temps dépassé** dans les informations sur le point de stationnement limité dans le temps affichera la durée totale : soit le temps restant avant la fin estimée du stationnement, soit le temps dépassé depuis lors.

![Temps restant dans iOS](@site/static/img/plugins/parking/ios_parking_info_left.png)

L'option **<Translate ios="true" ids="add_notification_calendar"/>**, si elle est cochée sur l'écran contextuel Définir la limite de temps de stationnement, vous permet de créer un rappel sur la fin du temps de stationnement dans l'application Calendrier par défaut de votre appareil.

</TabItem>

</Tabs>

### Navigation vers un point de passage {#navigating-to-a-waypoint}

Le point de stationnement peut être utilisé pour la navigation lorsque la géolocalisation est inconnue et/ou simplement pour trouver le meilleur itinéraire lors de la navigation vers l'emplacement de stationnement de votre véhicule. Pour connecter un point de stationnement à la fonction [Navigation](../navigation/routing/car-based-routing.md), effectuez l'une des opérations suivantes :

- Pour afficher l'itinéraire de votre position actuelle au point de stationnement, appuyez sur le menu de l'icône Navigation, sélectionnez le profil, appuyez sur Définir la destination, et parmi les options disponibles, recherchez **Stationnement**.
- Pour afficher l'itinéraire de votre position actuelle au point de stationnement à l'aide du widget, appuyez sur le **widget Parking**, appuyez sur le point de stationnement, sélectionnez **Navigation**, sélectionnez le profil.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Se diriger vers le point de stationnement dans Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aller au point de stationnement dans iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

### Supprimer un point {#remove-a-spot}

Pour supprimer un point de stationnement de la carte, suivez ces étapes :

- Appuyez sur le [widget](#parking-widget) ou dézoomez sur la carte pour mieux voir le point de stationnement.
- Appuyez sur le **point de stationnement**, puis sélectionnez **supprimer/ignorer** dans le [menu contextuel](../map/map-context-menu.md#-add--delete-parking-point) qui s'ouvre.
Si des rappels existent, ils seront également supprimés de l'application calendrier.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Supprimer le stationnement dans Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Supprimer le stationnement dans iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

## Widget Parking {#parking-widget}

Le [widget Parking](../widgets/info-widgets.md#parking-widget) est ajouté automatiquement à la liste des widgets lorsque vous activez le plugin Parking. Avant de configurer un point de stationnement, assurez-vous que le widget est à l'écran, et si ce n'est pas le cas, ajoutez-le dans le menu [Configurer l'écran](../widgets/configure-screen.md). Le widget Parking vous aidera à trouver rapidement un point de stationnement sur la carte.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,map_widget_parking"/>*

![Ajout du widget Parking dans Android](@site/static/img/plugins/parking/and_adding_parking_widget-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,map_widget_parking"/>*

![Ajout du widget Parking dans iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Cet article a été mis à jour pour la dernière fois en mai 2023*