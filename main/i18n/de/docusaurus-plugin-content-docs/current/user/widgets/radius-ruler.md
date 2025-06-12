---
source-hash: 14db1ff378f43e871dddc04366518dc17627a2aeb32b40272132b8334b11f558
sidebar_position: 5
title:  Radius-Lineal und Lineal
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




## Überblick {#overview}

Die **Lineal-Werkzeuge** in OsmAnd wurden entwickelt, um Ihnen zu helfen, Entfernungen zu messen und den [Kartenmaßstab](https://en.wikipedia.org/wiki/Scale_(map)) präzise zu verstehen.

- Das Werkzeug **Lineal** zeigt einen dynamischen Kartenmaßstab in Einheiten wie Metern oder Fuß an, der Ihnen hilft, Entfernungen zwischen Objekten auf dem Bildschirm visuell einzuschätzen.
- Das Werkzeug **Radius-Lineal** ermöglicht es Ihnen, einen Radius von einem beliebigen Punkt auf der Karte festzulegen, wobei konzentrische Kreise angezeigt werden, die Entfernungsintervalle darstellen.
- Das Werkzeug **Entfernung durch Tippen** ermöglicht es Ihnen, Entfernungen durch Tippen auf die Karte zu messen – entweder von Ihrem aktuellen Standort oder zwischen zwei beliebigen Standorten.

Diese Werkzeuge sind nützlich für die Routenplanung, die Schätzung der Nähe zu Sehenswürdigkeiten und die Analyse von Gebieten – sei es für Outdoor-Aktivitäten oder präzise Navigation.

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_screen.png)


## Lineal {#ruler}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ruler tool](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruler tool](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

Das **Lineal** zeigt den aktuellen Kartenmaßstab als Liniensegment an, das mit seiner realen Länge (z. B. 100 m oder 500 ft) am unteren Bildschirmrand beschriftet ist. Eigenschaften:

- Der Maßstab passt sich dynamisch an, wenn Sie hinein- oder herauszoomen.
- Es bietet eine visuelle Referenz zur Schätzung realer Entfernungen zwischen Objekten auf der Karte.
- Die Segmentlänge wird auf praktische Einheiten gerundet (z. B. 100 m), die ungefähr der Breite eines Daumens entsprechen, um eine intuitive Bedienung zu ermöglichen.

Dieses Werkzeug ist hilfreich, wenn Sie schnell eine Vorstellung von Objektgrößen oder Entfernungen benötigen, ohne Markierungen oder Routen zu setzen.

| | |
|------------|------------|
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Radius-Lineal-Widget {#radius-ruler-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → Widget hinzufügen → <Translate android="true" ids="radius_ruler_item"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → Widget hinzufügen → <Translate android="true" ids="radius_ruler_item"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

Das [Radius-Lineal-Widget](../widgets/info-widgets.md#radius-ruler) zeigt die Entfernung zwischen Ihrem aktuellen Standort (*Mein Standort*) und der Mitte der Karte an. Sie können die Karte auch verschieben, um einen beliebigen benutzerdefinierten Mittelpunkt festzulegen. Eigenschaften:

- Zeigt konzentrische Kreise an, die auf dem ausgewählten Punkt zentriert sind.
- Der erste Kreis spiegelt den aktuellen [Kartenmaßstab](#ruler) für eine schnelle visuelle Referenz wider.
- Passt sich beim Zoomen automatisch an, um genaue Radiuswerte beizubehalten.

Verwenden Sie dieses Widget, um die Nähe zu Points of Interest abzuschätzen oder um ein definiertes Gebiet herum zu planen.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Radius-ruler"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## Kompass für Radius-Lineal {#compass-for-radius-ruler}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Compass ruler](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Compass ruler](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Wenn das **Radius-Lineal** aktiv ist, zeigt die Karte eine Kompass-Überlagerung an, die Ihnen hilft, sich im Raum zu orientieren. Die Überlagerung zeigt, wie die Karte relativ zum wahren Norden ausgerichtet ist, und kann ein blaues Dreieck enthalten, das die aktuelle Richtung des Geräts anzeigt.

- Der Kompassring zeigt die Kartenausrichtung an – ob Norden oben ist oder gedreht.
- Ein **blaues Dreieck** zeigt die Richtung an, in die Ihr Gerät zeigt.
- Um diese Funktion nutzen zu können, muss das Gerät einen **Kompasssensor** (GPS-Kompass, Magnetometer) unterstützen und aktiviert haben.
- Das horizontale Halten des Geräts verbessert die Genauigkeit und Visualisierung.
- Wenn das **blaue Dreieck** und der **rote Pfeil** (Norden) beide nach oben zeigen, ist das Gerät auf den wahren Norden ausgerichtet.

Diese Überlagerung ist hilfreich für die Navigation im Freien, da Sie die [Kartenausrichtung](../map/interact-with-map.md#map-orientation--compass) mit der realen Umgebung abgleichen können.

| | |
|------------|------------|
| Aktivieren | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → Widget hinzufügen → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → Widget hinzufügen → <Translate android="true" ids="radius_ruler_item"/>* |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |


## Mittel-/Bodenposition {#center--bottom-position}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Andere → Standortposition auf dem Bildschirm*

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Um den sichtbaren Radius um Ihren Standort zu vergrößern, können Sie die Position des Radius-Lineals ändern, indem Sie die Option *Mitte* oder *Unten* auswählen.

Weitere Informationen zur *Position auf dem Bildschirm* finden Sie im Artikel [Bildschirm konfigurieren](../widgets/configure-screen.md#display-position-location-position-on-screen).


## 3D-Ansicht {#3d-view}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Sie können zur **3D-Ansicht** wechseln, um Entfernungen und das umliegende Gelände bei Verwendung des Radius-Lineals besser zu visualisieren. Diese Ansicht neigt die Karte und bietet einen Perspektiveneffekt, der den sichtbaren Radius erweitert.

- Tippen Sie auf [die Standortschaltfläche](../map/interact-with-map.md#my-location-and-zoom), um sich auf Ihre Position zu konzentrieren.
- Verwenden Sie eine [Zwei-Finger-Wischgeste nach oben](../map/interact-with-map.md#gestures), um die Karte in den 3D-Modus zu neigen.

Die Radius-Kreise erscheinen mit Tiefe, was besonders nützlich für die Routenplanung in hügeligen Gebieten oder städtischen Umgebungen ist, in denen der vertikale Kontext wichtig ist.


## Entfernung durch Tippen {#distance-by-tap}

![Distance between two random points on the map](@site/static/img/widgets/distance_between_two_random_points.png)

Das Werkzeug **Entfernung durch Tippen** ermöglicht es Ihnen, Entfernungen zwischen Punkten auf der Karte zu messen, ohne das Radius-Lineal zu verwenden oder eine Route zu erstellen.

Es gibt zwei Anwendungsfälle:

- **Entfernung von Ihrem Standort zu einem Punkt**
  Tippen Sie irgendwo auf die Karte, und eine gerade Linie erscheint von Ihrem aktuellen Standort zu dem angetippten Punkt, zusammen mit einer Entfernungsbeschriftung. Die Linie bleibt auf dem Bildschirm, auch wenn Sie woanders tippen.

- **Entfernung zwischen zwei beliebigen Punkten**
  Tippen Sie gleichzeitig auf zwei Punkte auf der Karte (Multi-Touch). Eine Linie verbindet die beiden Punkte, und die gemessene Entfernung wird angezeigt.

| | |
|------------|------------|
| Aktivieren |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Textgröße (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Einheitenformat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Videoanleitungen {#video-guides}

Sehen Sie sich diese kurzen Tutorials an, um zu erfahren, wie Sie das Radius-Lineal und verwandte Werkzeuge in OsmAnd verwenden:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## Verwandte Artikel {#related-articles}

- [Bildschirm konfigurieren](./configure-screen.md)
- [Kartenschaltflächen](./map-buttons.md)
- [Informations-Widgets](./info-widgets.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Schnellaktion](./quick-action.md)
- [Marker-Widgets](./markers.md)

> *Zuletzt aktualisiert: Mai 2025*