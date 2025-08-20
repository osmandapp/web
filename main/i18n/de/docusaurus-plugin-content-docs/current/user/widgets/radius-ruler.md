---
source-hash: 338468efc137a0618ed472d99c99d808cd6f3df5d30650e5054eabd75c599d06
sidebar_position: 5
title:  Radiuslineal und Lineal
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

Die **Lineal-Werkzeuge** in OsmAnd helfen Ihnen, Entfernungen zu messen und den [Kartenmaßstab](https://de.wikipedia.org/wiki/Ma%C3%9Fstab_(Kartografie)) präzise zu verstehen.

- Das Werkzeug **Lineal** zeigt einen dynamischen Kartenmaßstab in Einheiten wie Metern oder Fuß an und hilft Ihnen, Entfernungen zwischen Objekten auf dem Bildschirm visuell einzuschätzen.
- Das **Radiuslineal** ermöglicht es Ihnen, einen Radius von jedem Punkt auf der Karte festzulegen, wobei konzentrische Kreise angezeigt werden, die Entfernungsintervalle darstellen.
- Das Werkzeug **Entfernung per Tippen** ermöglicht es Ihnen, Entfernungen durch Tippen auf die Karte zu messen – entweder von Ihrem aktuellen Standort oder zwischen zwei beliebigen Standorten.

Diese Werkzeuge sind nützlich für die Routenplanung, die Abschätzung der Nähe zu Sehenswürdigkeiten und die Analyse von Gebieten – sei es für Outdoor-Aktivitäten oder präzise Navigation.

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_screen.png)


## Lineal {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ruler tool](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruler tool](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

Das **Lineal** zeigt den aktuellen Kartenmaßstab als Liniensegment mit seiner realen Länge (z.B. 100 m oder 500 ft) am unteren Bildschirmrand an. Eigenschaften:

- Der Maßstab passt sich dynamisch an, wenn Sie hinein- oder herauszoomen.
- Es bietet eine visuelle Referenz zur Schätzung realer Entfernungen zwischen Objekten auf der Karte.
- Die Segmentlänge wird auf praktische Einheiten (z.B. 100 m) gerundet, die ungefähr der Breite eines Daumens entsprechen, für eine intuitive Nutzung.

Dieses Werkzeug ist hilfreich, wenn Sie schnell eine Vorstellung von Objektgrößen oder Entfernungen benötigen, ohne Markierungen oder Routen zu platzieren.

| | |
|------------|------------|
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Radiuslineal-Widget {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wähle ein Panel → Widget hinzufügen → <Translate android="true" ids="radius_ruler_item"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wähle ein Panel → Widget hinzufügen → <Translate android="true" ids="radius_ruler_item"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

Das [Radiuslineal-Widget](../widgets/info-widgets.md#radius-ruler) zeigt die Entfernung zwischen Ihrem aktuellen Standort (*Mein Standort*) und dem Mittelpunkt der Karte an. Sie können die Karte auch verschieben, um einen beliebigen benutzerdefinierten Mittelpunkt festzulegen. Eigenschaften:

- Zeigt konzentrische Kreise an, die auf dem ausgewählten Punkt zentriert sind.
- Der erste Kreis spiegelt den aktuellen [Kartenmaßstab](#ruler) für eine schnelle visuelle Referenz wider.
- Passt sich beim Zoomen automatisch an, um genaue Radiuswerte beizubehalten.

Verwenden Sie dieses Widget, um die Nähe zu interessanten Orten abzuschätzen oder ein definiertes Gebiet zu planen.

<Tabs groupId="operating-systems" queryString="current-os">

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


## Kompass für Radiuslineal {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Compass ruler](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Compass ruler](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Wenn das **Radiuslineal** aktiv ist, zeigt die Karte eine Kompass-Einblendung an, die Ihnen hilft, sich im Raum zu orientieren. Die Einblendung zeigt an, wie die Karte relativ zum wahren Norden ausgerichtet ist, und kann ein blaues Dreieck enthalten, das die aktuelle Richtung des Geräts anzeigt.

- Der Kompassring zeigt die Kartenausrichtung an – ob Norden oben ist oder gedreht.
- Ein **blaues Dreieck** zeigt die Richtung an, in die Ihr Gerät zeigt.
- Um diese Funktion nutzen zu können, muss das Gerät einen **Kompasssensor** (GPS-Kompass, Magnetometer) unterstützen und aktiviert haben.
- Das horizontale Halten des Geräts verbessert die Genauigkeit und Visualisierung.
- Wenn das **blaue Dreieck** und der **rote Pfeil** (Norden) beide nach oben zeigen, ist das Gerät auf den wahren Norden ausgerichtet.

Diese Einblendung ist hilfreich für die Navigation im Freien, da Sie die [Kartenausrichtung](../map/interact-with-map.md#map-orientation--compass) mit der realen Umgebung abgleichen können.

| | |
|------------|------------|
| Aktivieren | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wähle ein Panel → Widget hinzufügen → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wähle ein Panel → Widget hinzufügen → <Translate android="true" ids="radius_ruler_item"/>* |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |


## Mittel-/Bodenposition {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Sonstiges → Position auf dem Bildschirm*

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Um den sichtbaren Radius um Ihren Standort zu vergrößern, können Sie die Position des Radiuslineals ändern, indem Sie die Option *Mitte* oder *Unten* auswählen.

Weitere Informationen zur *Position auf dem Bildschirm* finden Sie im Artikel [Bildschirm konfigurieren](../widgets/configure-screen.md#display-position-location-position-on-screen).


## 3D-Ansicht {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Sie können zur **3D-Ansicht** wechseln, um Entfernungen und das umgebende Gelände bei Verwendung des Radiuslineals besser zu visualisieren. Diese Ansicht neigt die Karte und bietet einen Perspektiveffekt, der den sichtbaren Radius erweitert.

- Tippen Sie auf die [Standortschaltfläche](../map/interact-with-map.md#my-location-and-zoom), um sich auf Ihre Position zu konzentrieren.
- Verwenden Sie eine [Zwei-Finger-Wischgeste nach oben](../map/interact-with-map.md#gestures), um die Karte in den 3D-Modus zu neigen.

Die Radiuskreise erscheinen mit Tiefe, was besonders nützlich für die Routenplanung in hügeligen Gebieten oder städtischen Umgebungen ist, wo der vertikale Kontext wichtig ist.


## Entfernung per Tippen {#distance-by-tap}

![Distance between two random points on the map](@site/static/img/widgets/distance_between_two_random_points.png)

Das Werkzeug **Entfernung per Tippen** ermöglicht es Ihnen, Entfernungen zwischen Punkten auf der Karte zu messen, ohne das Radiuslineal zu verwenden oder eine Route zu erstellen.

Es gibt zwei Anwendungsfälle:

- **Entfernung von Ihrem Standort zu einem Punkt**
  Tippen Sie an eine beliebige Stelle auf der Karte, und eine gerade Linie erscheint von Ihrem aktuellen Standort zum angetippten Punkt, zusammen mit einer Entfernungsbeschriftung. Die Linie bleibt auf dem Bildschirm, auch wenn Sie an eine andere Stelle tippen.

- **Entfernung zwischen zwei beliebigen Punkten**
  Tippen Sie gleichzeitig auf zwei Punkte auf der Karte (Multi-Touch). Eine Linie verbindet die beiden Punkte, und die gemessene Entfernung wird angezeigt.

| | |
|------------|------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Textgröße (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Einheitenformat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Videoanleitungen {#video-guides}

Sehen Sie sich diese kurzen Tutorials an, um zu erfahren, wie Sie das Radiuslineal und verwandte Werkzeuge in OsmAnd verwenden:

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## Verwandte Artikel {#related-articles}

- [Bildschirm konfigurieren](./configure-screen.md)
- [Karten-Schaltflächen](./map-buttons.md)
- [Informations-Widgets](./info-widgets.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Schnellaktion](./quick-action.md)
- [Marker-Widgets](./markers.md)

> *Zuletzt aktualisiert: Mai 2025*