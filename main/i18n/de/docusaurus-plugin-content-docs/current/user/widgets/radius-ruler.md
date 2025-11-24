---
source-hash: e19a1247251c1151c1b92569c2eff3cbb1c0c47315a2754b8b205cb0177ef347
sidebar_position: 5
title:  Radiuslineal und Maßstab
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



## Übersicht {#overview}

Die **Maßstabswerkzeuge** in OsmAnd sind dafür konzipiert, Ihnen zu helfen, Entfernungen zu messen und den [Kartenmaßstab](https://en.wikipedia.org/wiki/Scale_(map)) präzise zu verstehen.

- Das **Maßstab**-Werkzeug zeigt einen dynamischen Kartenmaßstab in Einheiten wie Metern oder Fuß an und hilft Ihnen, Entfernungen zwischen Objekten auf dem Bildschirm visuell einzuschätzen.
- Das **Radiuslineal** ermöglicht es Ihnen, einen Radius von einem beliebigen Punkt auf der Karte aus festzulegen und zeigt konzentrische Kreise an, die Entfernungsintervalle darstellen.
- Das Werkzeug **Entfernung durch Antippen** lässt Sie Entfernungen durch Antippen der Karte messen – entweder von Ihrem aktuellen Standort aus oder zwischen zwei beliebigen Orten.

Diese Werkzeuge sind nützlich für die Routenplanung, die Einschätzung der Nähe zu Sehenswürdigkeiten und die Analyse von Gebieten – sei es für Outdoor-Aktivitäten oder präzise Navigation.

![Radiuslineal-Bildschirm](@site/static/img/widgets/radius_ruler_screen.png)


## Maßstab {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Maßstab-Werkzeug](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maßstab-Werkzeug](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

Der **Maßstab** zeigt den aktuellen Kartenmaßstab als Liniensegment am unteren Bildschirmrand an, das mit seiner realen Länge beschriftet ist (z. B. 100 m oder 500 ft). Eigenschaften:

- Der Maßstab passt sich dynamisch an, wenn Sie hinein- oder herauszoomen.
- Er bietet eine visuelle Referenz zur Schätzung von realen Entfernungen zwischen Objekten auf der Karte.
- Die Segmentlänge wird auf praktische Einheiten gerundet (z. B. 100 m), was für eine intuitive Nutzung ungefähr der Breite eines Daumens entspricht.

Dieses Werkzeug ist hilfreich, wenn Sie ein schnelles Verständnis für die Größe von Objekten oder Entfernungen benötigen, ohne Markierungen oder Routen zu setzen.

| | |
|------------|------------|
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Radiuslineal-Widget {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → Widget hinzufügen → <Translate android="true" ids="radius_ruler_item"/>*

Verfügbar auf allen Panels: <Translate android="true" ids="top"/>, <Translate android="true" ids="position_on_map_bottom"/>, <Translate android="true" ids="shared_string_left"/>, und <Translate android="true" ids="shared_string_right"/>.

![Anzeigeposition Android](@site/static/img/widgets/radius_ruler_height_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → Widget hinzufügen → <Translate android="true" ids="radius_ruler_item"/>*

Verfügbar auf allen Panels: <Translate ios="true" ids="shared_string_top"/>, <Translate ios="true" ids="position_on_map_bottom"/>, Links, und Rechts.

![Anzeigeposition iOS](@site/static/img/widgets/radius_ruler_height_ios.png)

</TabItem>

</Tabs>

Das [Radiuslineal-Widget](../widgets/info-widgets.md#radius-ruler) zeigt die Entfernung zwischen Ihrem aktuellen Standort (*Mein Standort*) und dem Mittelpunkt der Karte an. Sie können die Karte auch verschieben, um einen beliebigen benutzerdefinierten Mittelpunkt festzulegen. Eigenschaften:

- Zeigt konzentrische Kreise an, die auf den ausgewählten Punkt zentriert sind.
- Der erste Kreis spiegelt den aktuellen [Kartenmaßstab](#ruler) für eine schnelle visuelle Referenz wider.
- Passt sich beim Zoomen automatisch an, um genaue Radiuswerte beizubehalten.
- Tippen Sie auf das Widget, um zwischen drei Anzeigemodi zu wechseln: <Translate android="true" ids="shared_string_hide"/>, <Translate android="true" ids="light_theme"/>, und <Translate android="true" ids="dark_theme"/>.
- Ein langes Antippen öffnet das Kontextmenü des Widgets mit zusätzlichen Optionen.
- Die Widget-Einstellungen umfassen zwei einstellbare Parameter: *<Translate android="true" ids="shared_string_height"/>* — steuert die visuelle Höhe des Widgets auf dem Bildschirm; *<Translate android="true" ids="shared_string_show_icon"/>* — schaltet die Sichtbarkeit des Widget-Icons ein oder aus.

Verwenden Sie dieses Widget, um die Nähe zu Sehenswürdigkeiten abzuschätzen oder um ein definiertes Gebiet herum zu planen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radiuslineal-Bildschirm](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Radiuslineal"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Radiuslineal"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Radiuslineal"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## Kompass für Radiuslineal {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kompasslineal](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kompasslineal](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Wenn das **Radiuslineal** aktiv ist, zeigt die Karte eine Kompassüberlagerung an, um Ihnen bei der Orientierung im Raum zu helfen. Die Überlagerung zeigt, wie die Karte im Verhältnis zum wahren Norden ausgerichtet ist, und kann ein blaues Dreieck enthalten, das die aktuelle Richtung des Geräts anzeigt.

- Der Kompassring zeigt die Kartenausrichtung an – ob Norden oben ist oder gedreht wurde.
- Ein **blaues Dreieck** zeigt die Richtung an, in die Ihr Gerät zeigt.
- Um diese Funktion zu nutzen, muss das Gerät einen **Kompasssensor** (GPS-Kompass, Magnetometer) unterstützen und aktiviert haben.
- Das horizontale Halten des Geräts verbessert die Genauigkeit und Visualisierung.
- Wenn das **blaue Dreieck** und der **rote Pfeil** (Norden) beide nach oben zeigen, ist das Gerät auf den wahren Norden ausgerichtet.

Diese Überlagerung ist hilfreich für die Outdoor-Navigation und ermöglicht es Ihnen, die [Kartenausrichtung](../map/interact-with-map.md#map-orientation-modes) mit der realen Umgebung abzugleichen.  

| | |
|------------|------------|
| Aktivieren | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → Widget hinzufügen → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → Widget hinzufügen → <Translate android="true" ids="radius_ruler_item"/>* |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |  


## Position Mitte / Unten {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Anzeigeposition Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Radiuslineal nach unten](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Andere → Position des Standorts auf dem Bildschirm*

![Anzeigeposition iOS](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Radiuslineal nach unten](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Um den sichtbaren Radius um Ihren Standort zu vergrößern, können Sie die Position des Radiuslineals ändern, indem Sie die Option *Mitte* oder *Unten* auswählen.  

Weitere Informationen zur *Position auf dem Bildschirm* finden Sie im Artikel [Bildschirm konfigurieren](../widgets/configure-screen.md#display-position-location-position-on-screen).


## 3D-Ansicht {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radiuslineal 3D-Format](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Radiuslineal 3D-Format](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Sie können in die **3D-Ansicht** wechseln, um Entfernungen und das umliegende Gelände bei Verwendung des Radiuslineals besser zu visualisieren. Diese Ansicht neigt die Karte und bietet einen perspektivischen Effekt, der den sichtbaren Radius erweitert.

- Tippen Sie auf [die Standort-Schaltfläche](../map/interact-with-map.md#my-location-and-zoom), um sich auf Ihre Position zu konzentrieren.
- Verwenden Sie eine [Zwei-Finger-Wischgeste nach oben](../map/interact-with-map.md#gestures), um die Karte in den 3D-Modus zu neigen.

Die Radiuskreise werden mit Tiefe dargestellt, was besonders nützlich für die Routenplanung in hügeligen Gebieten oder städtischen Umgebungen ist, in denen der vertikale Kontext eine Rolle spielt.


## Entfernung durch Antippen {#distance-by-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Entfernung durch Antippen Android](@site/static/img/widgets/distance_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Entfernung durch Antippen iOS](@site/static/img/widgets/distance_tap_ios.png)

</TabItem>

</Tabs>

Das Werkzeug **Entfernung durch Antippen** ermöglicht es Ihnen, Entfernungen zwischen Punkten auf der Karte zu messen, ohne das Radiuslineal zu verwenden oder eine Route zu erstellen.

Es gibt zwei Anwendungsfälle:

- **Entfernung von Ihrem Standort zu einem Punkt**  
  Tippen Sie irgendwo auf die Karte, und eine gerade Linie erscheint von Ihrem aktuellen Standort zum angetippten Punkt, zusammen mit einer Entfernungsangabe. Die Linie bleibt auf dem Bildschirm, auch wenn Sie woanders tippen.

- **Entfernung zwischen zwei beliebigen Punkten**  
  Tippen Sie gleichzeitig auf zwei Punkte auf der Karte (Multi-Touch). Eine Linie verbindet die beiden Punkte, und die gemessene Entfernung wird angezeigt.

Sie können auch die Textgröße der Entfernungsbeschriftung anpassen. Wählen Sie zwischen *<Translate android="true" ids="shared_string_normal"/>* (Standard) und *<Translate android="true" ids="shared_string_large"/>* (1,5× größer). Wenn die Große Option ausgewählt ist, wird automatisch zusätzlicher Abstand zwischen der Linie und der Beschriftung hinzugefügt, um die Lesbarkeit zu verbessern. Die Änderungen werden sofort angewendet, ohne dass die App neu gestartet werden muss.

| | |
|------------|------------|
| Aktivieren |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Textgröße | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Einheitenformat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Videoanleitungen {#video-guides}

Sehen Sie sich diese kurzen Tutorials an, um zu lernen, wie Sie das Radiuslineal und verwandte Werkzeuge in OsmAnd verwenden:

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