---
source-hash: 311eeb810fe2be43516fd853b18b9ca3893ce53bd5483c33188259c2bfdf1011
sidebar_position: 7
title:  Schnellaktion (Benutzerdefinierte Schaltflächen)
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

Das Schnellaktions-Widget ist ein interaktives Benutzeroberflächenelement, das schnellen Zugriff auf Schlüsselfunktionen oder Aktionen bietet, ohne zusätzliche Einstellungen öffnen zu müssen. Dieses Widget wird auf dem Hauptkartenbildschirm platziert und ermöglicht es Ihnen, die Interaktion mit der Anwendung zu vereinfachen und zu beschleunigen, was sie bequemer und effizienter macht.  

![Schnellaktions-Widget](@site/static/img/widgets/quick_action_widget.png)


## Schnellaktions-Widget {#quick-action-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Schnellaktions-Widget_Android](@site/static/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Schnellaktions-Widget_iOS](@site/static/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>

Um die Schnellaktions-Schaltfläche zu verwenden, müssen Sie dieses Widget zuerst aktivieren.  

<!--
- To open the Quick action menu, just tap the button.
- By default, the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to any part of the screen by long tapping it. -->


### Aktionen hinzufügen und löschen {#add-and-delete-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Tippen Sie auf Löschen (Mülleimer-Symbol in der oberen rechten Ecke) → Aktionen auswählen*

![Schnellaktions-Widget_Android_Hinzufügen](@site/static/img/widgets/quick_action_widget_andr.png)  ![Benutzerdefinierte Schaltfläche Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>  → Tippen Sie auf Bearbeiten (Stift-Symbol in der oberen rechten Ecke) → Aktionen auswählen*

![Schnellaktions-Widget_iOS_Hinzufügen](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Benutzerdefinierte Schaltfläche iOS](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

Alle Aktionen sind im Menü **Aktion hinzufügen** organisiert und nach Typ gruppiert. Eine vollständige Liste der Aktionen und ihrer Beschreibungen finden Sie im Abschnitt [Aktionstypen](#action-types).

Sie können der Schnellaktions-Schaltfläche eine oder mehrere [Aktionen](#action-types) zuweisen. Es gibt zwei Möglichkeiten, Aktionen hinzuzufügen.

- **Im Bildschirm "Konfigurieren"**. Wählen Sie eine Schaltfläche aus der Liste und tippen Sie auf die Schaltfläche&nbsp;  "**＋**"  &nbsp;. Sie müssen zuerst den [Aktionstyp](#action-types) auswählen und dann seinen Namen und seine [Parameter](#action-parameters) ändern.
- **Im Panel der Schnellaktions-Schaltfläche**. Tippen Sie auf die *Schnellaktions-Schaltfläche* auf dem Kartenbildschirm. Am Ende der Liste, auf dem letzten Bildschirm im Panel, befindet sich das Feld "**＋**"  &nbsp;*Aktion hinzufügen*. Tippen Sie darauf und wählen Sie eine Aktion aus der [Liste der Typen](#action-types).


:::note

- Jede Aktion muss einen eindeutigen Namen haben.
- Die Bildschirme, die numerisch als Bildschirm 1, Bildschirm 2 usw. bezeichnet werden, werden automatisch erstellt, wenn die Anzahl der Aktionen in der Liste auf 6 Elemente ansteigt.

:::


### Aktionsparameter {#action-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Schnellaktions-Widget_Android_Reihenfolge](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Schnellaktions-Widget_iOS_Reihenfolge](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

Die einer Schnellaktions-Schaltfläche zugewiesenen Aktionen sind in Bildschirmen gruppiert. Diese Aktionsgruppen werden geöffnet, wenn Sie auf diese Schaltfläche auf der Karte tippen. Neue Bildschirme werden automatisch erstellt, wenn die Liste der Aktionen *6 Elemente* überschreitet. Sie können Aktionen nach Ihren Wünschen neu anordnen, indem Sie die folgenden Schritte ausführen:  

**Für Android**.

1. Über den Konfigurationsbildschirm:

    - Gehe zu *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*.
    - Verwenden Sie *Halten & Ziehen* am Symbol mit den zwei vertikalen Linien, um Aktionen neu anzuordnen.

2. Über das Schnellaktionsmenü:

    - Öffnen Sie das Schnellaktionsmenü und tippen Sie lange auf *Aktion hinzufügen*.
    - Verwenden Sie *Halten & Ziehen* am Symbol mit den zwei vertikalen Linien, um Aktionen neu anzuordnen.  

**Für iOS**.

- Navigieren Sie zu *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>*.
- Tippen Sie auf *Bearbeiten* (Stiftsymbol) und verwenden Sie dann *Halten & Ziehen* am Symbol mit den drei vertikalen Linien, um Aktionen neu anzuordnen.

:::info note
Einige Aktionen wie *Kartenquelle*, *Kartenstil*, *Overlay*, *Underlay*, *Geländefarbschema* und *Profil hinzufügen* können als Schleife zugewiesen werden. Jeder Tippen auf die Schaltfläche wechselt zyklisch durch die ausgewählten Ebenen. Ein Zwischendialog kann angezeigt werden, um manuell aus der Liste auszuwählen, oder ausgeblendet, um in der definierten Reihenfolge zu wechseln.
:::


## Schaltflächen auf dem Bildschirm {#buttons-on-the-screen}

### Benutzerdefinierte Schaltflächen {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate android="true" ids="add_button"/>*  

![Benutzerdefinierte Schaltfläche Android](@site/static/img/widgets/custom_button_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  

![Benutzerdefinierte Schaltfläche iOS](@site/static/img/widgets/custom_button_ios.png)  

</TabItem>

</Tabs>

**Benutzerdefinierte Schaltflächen** sind zusätzliche Schaltflächen auf der Karte, die genauso wie die *Schnellaktions*-Schaltfläche funktionieren. Sie können eine Schaltfläche mit einer oder mehreren Aktionen erstellen und auf dem Kartenbildschirm anzeigen. Benutzerdefinierte Schaltflächen befinden sich in der Liste *Bildschirm konfigurieren → Schaltflächen → Benutzerdefinierte Schaltflächen*. Jede Schaltfläche hat eine profilunabhängige Aktionsliste und sollte einen eindeutigen ***Namen*** haben, kann jedoch für jedes **Profil** einzeln ein- und ausgeschaltet werden.

Alle verfügbaren [Aktionen](#action-types) sind identisch mit denen, die auf die standardmäßige Schnellaktion angewendet werden können. Benutzerdefinierte Schaltflächen können als ***Einzelaktions***-Schaltflächen konfiguriert werden, die die ausgewählte Aktion sofort nach dem Antippen anwenden, ohne dass durch ein zusätzliches Menü navigiert werden muss.

### Schaltflächenerscheinungsbild {#button-appearance}

<InfoAndroidOnly/>

![Erscheinungsbild der Schnellaktions-Schaltfläche](@site/static/img/widgets/qa_button_appearance_andr.png)

Sie können das Erscheinungsbild der Schnellaktions-Schaltflächen über *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Drei-Punkte-Menü → Erscheinungsbild* ändern. Diese Einstellung bietet Optionen zur Personalisierung von Größe, Form, Symbol und Hintergrunddeckkraft der Schaltfläche und gibt Ihnen mehr Kontrolle darüber, wie die Schaltflächen auf Ihrem Bildschirm aussehen.  

Detaillierte Anpassungseinstellungen finden Sie im Artikel [Bildschirm konfigurieren](../widgets/configure-screen.md#button-appearance), in dem Sie lernen, wie Sie das Erscheinungsbild jeder Schaltfläche an Ihre Vorlieben anpassen können.

### Schaltflächenposition ändern {#change-button-position}

Das *Schnellaktions*-Widget erscheint in der unteren Ecke des Kartenbildschirms, wenn Sie es zum ersten Mal aktivieren. Sie können das Widget durch Halten und Ziehen an eine beliebige Stelle des Bildschirms verschieben. Für eine präzise und genaue Platzierung der Schaltflächen auf dem Kartenbildschirm werden sie beim Ziehen automatisch an der nächstgelegenen unsichtbaren Gitterposition ausgerichtet.

- **Anfängliches Erscheinungsbild**. Standardmäßig wird das Schnellaktions-Widget in der unteren rechten Ecke der Kartenoberfläche platziert.

    ![Schnellaktions-Widget_Ansicht](@site/static/img/widgets/quick_action_widget_view.png)

- **Widget verschieben**. Durch langes Drücken und Ziehen des Widgets können Sie es auf dem Bildschirm neu positionieren, mit automatischer Spalten- und Zeilenausrichtung.  

    ![Schnellaktions-Widget_Tippen](@site/static/img/widgets/quick_action_widget_tap.png)

- **Neue Platzierung**. Einmal verschoben, bleibt das Widget an seiner neuen Position auf dem Kartenbildschirm, bis es manuell wieder angepasst wird.

    ![Schnellaktions-Widget_Verschieben](@site/static/img/widgets/quick_action_widget_move.png)

- **Mehrere [benutzerdefinierte Schaltflächen](#custom-buttons)**. Sie können dem Kartenbildschirm mehrere Schnellaktions-Schaltflächen hinzufügen. Diese Schaltflächen können auch individuell angepasst und mit derselben Drag-and-Drop-Methode neu positioniert werden.

    ![Schnellaktions-Widget_Mehrfach](@site/static/img/widgets/quick_action_widget_multi.png)

### Gitterlayout für Schaltflächen {#grid-layout-for-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Raster für Schaltflächen_v_Android](@site/static/img/widgets/grid_buttons_v_and.png) ![Raster für Schaltflächen_h_Android](@site/static/img/widgets/grid_buttons_h_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Raster für Schaltflächen_v_iOS](@site/static/img/widgets/grid_buttons_v_ios.png) ![Raster für Schaltflächen_h_iOS](@site/static/img/widgets/grid_buttons_h_ios.png)

</TabItem>

</Tabs>

[Karten-Schaltflächen](../widgets/map-buttons.md#overview) werden automatisch mit einem Gitterlayout angeordnet. Jede Schaltfläche wird einer der vier Ecken des Bildschirms zugewiesen (*oben-links*, *oben-rechts*, *unten-links*, *unten-rechts*). Wenn nicht genügend Platz in der zugewiesenen Ecke vorhanden ist, werden die Schaltflächen horizontal oder vertikal ausgerichtet, abhängig von der Bildschirmausrichtung.

Dieses Layout hilft, die Schaltflächen visuell konsistent zu halten und Überlappungen zu vermeiden. Zum Beispiel werden auf einem Landschaftsdisplay die Schaltflächen in der rechten Ecke horizontal am unteren Bildschirmrand ausgerichtet, während sie auf einem Hochformatdisplay vertikal nach oben oder unten erweitert werden, je nach Bedarf.


## Aktionstypen {#action-types}

### Karte konfigurieren {#configure-map}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Ein-/Ausblenden <br/> [**Routen**](../map/vector-maps.md#routes) | Sie können Routentypen auswählen, um deren Anzeige zu aktivieren oder zu deaktivieren. <br/> Einige Routen haben zusätzliche Einstellungen. Standardmäßig wird, wenn Sie im Menü [Karte konfigurieren](../map/configure-map-menu.md) nichts ausgewählt haben, der erste Routentyp aus der Liste zugewiesen, andernfalls ein Typ Ihrer Wahl. Mehr dazu können Sie im Artikel [Routen](../map/routes.md) lesen. <br/> - ***Fahrradrouten***  &nbsp;(*Route*, *Knotenpunktnetze*) <br/> - ***Mountainbike-Routen***  &nbsp;(*MTB-Skala*, *IMBA*) <br/> - ***Wanderrouten***  &nbsp;(*OSMC*, *Netzwerkzugehörigkeit*, *Knotenpunktnetze*) <br/> - ***Schwierigkeitsgrad von Wanderwegen***  &nbsp;(*SAC-Skala*, *CAI-Skala*) <br/> - ***Skipisten*** <br/> - ***Reitrouten*** <br/> - ***Wildwassersport*** <br/> - ***Laufrouten*** <br/> - ***Fitnesspfade*** <br/> - ***Reiserouten***  &nbsp;(*Tracks*, *Reiseführer*, *Punkte*) <br/> |
| Ein-/Ausblenden <br/> [**Topographie-Ebenen**](../plugins/topography.md#overview) | Alle Topographiedaten werden als separate Kartenebenen dargestellt. Mit der Schnellaktion können Sie die Sichtbarkeit dieser Ebenen schnell umschalten. <br/> - ***Höhenlinien*** <br/> - ***Gelände***  &nbsp;(*Abhängig von der im Menü [Karte konfigurieren](../map/configure-map-menu.md) ausgewählten Ebene wird *Schummerung*, *Neigung* oder *Höhe* angezeigt.*) |
| Ändern <br/> [**Geländefarbschema**](../plugins/topography.md#modify-color-scheme) | Ermöglicht die Auswahl einer oder mehrerer Paletten aus einer Liste vorhandener Paletten, die sich ändern, wenn Sie auf die Schaltfläche tippen. |
| Ein-/Ausblenden <br/> [**Wetter-Ebenen**](../plugins/weather.md#weather-layers) | Alle Wetterdaten werden als separate Kartenebenen dargestellt. Mit der Schnellaktion erhalten Sie schnellen Zugriff, um die Sichtbarkeit dieser Ebenen auf der Karte umzuschalten. <br/> - ***Niederschlagsebene*** <br/> - ***Wolkenebene*** <br/> - ***Druckebene*** <br/> - ***Windebene*** <br/> - ***Temperaturebene*** |
| Öffnen <br/> [**Wetterbildschirm**](../plugins/weather.md) <br /> *Nur Android* | Öffnet den [*Wetter*-Vorhersagebildschirm](../plugins/weather.md#weather-forecast-screen) mit detaillierten Informationen. |
| Ein-/Ausblenden <br/> [**Favoriten**](../map/point-layers-on-map.md#favorites) | Zeigt die Favoritenpunkte auf der Karte an oder blendet sie aus. |
| Ein-/Ausblenden <br/> [**Tracks**](../personal/tracks/manage-tracks.md#track-menu) | Zeigt die zuletzt sichtbaren Tracks auf der Karte an oder blendet sie aus. |
| Ein-/Ausblenden <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Aktiviert oder deaktiviert die Anzeige von POI-Ebenen mit ausgewählten Kategorien auf der Karte.<br/>Sie können mehrere POI-Kategorien auswählen. Die Aktion ersetzt die POI-Kategorien, die in "Karte konfigurieren" ohne Verwendung von Schnellaktionen ausgewählt wurden.  |
| Ändern <br/> [**Kartenmodus**](../map/vector-maps.md#map-mode) | Schneller Zugriff zum Umschalten zwischen Tag- und Nachtmodus. |
| Ändern <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | Die Schaltfläche ermöglicht es Ihnen, eine einzelne Kartenquelle oder eine Liste von Quellen zuzuweisen, die bei Antippen zyklisch oder mit einem Zwischendialog wechseln. <br/> - *Zwischendialog anzeigen*. Zeigt einen Dialog mit einer Liste von Karten an. <br/> - *Keinen Zwischendialog anzeigen*. Die Kartenquellen wechseln in einer festgelegten Reihenfolge. <br/> - *Angezeigter Name* - *Kartenquelle* >. ">" nach dem Kartennamen zeigt an, welche Kartenquelle aktuell ausgewählt ist. <br/> - *Angezeigter Name* - > *Nächste Kartenquelle*. ">" vor dem Kartennamen zeigt an, was die nächste ausgewählte Kartenquelle sein wird, wenn die Aktion ausgeführt wird. <br/> - *Hinweis*. Um Kartenquellen in OsmAnd zu ändern, können Sie entweder eine einzelne Schnellaktion einrichten, mit der Sie zwischen mehreren Kartenquellen wechseln können, oder mehrere separate Schnellaktionen erstellen, jede für eine bestimmte Kartenquelle. |
| Ein-/Ausblenden <br /> [**Öffentlicher Verkehr**](../map/vector-maps.md#transport) | Aktiviert oder deaktiviert die Kartenebene für den öffentlichen Verkehr <br /> - *Verkehrsmittel*. Beim ersten Tippen können Sie ein oder mehrere Verkehrsmittel auswählen, einschließlich *Haltestellen*, *Bus-, Trolleybus- und Shuttle-Routen*, *Straßenbahn- und Zugrouten*, *U-Bahn-Routen*. |
| Ändern <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Erstellen Sie eine Liste von Kartenquellen als Karten-Overlay und wechseln Sie zyklisch durch sie. <br /> - *Hinweis*. Um Karten-Overlays in OsmAnd zu ändern, können Sie entweder eine einzelne Schnellaktion einrichten, mit der Sie zwischen mehreren Karten-Overlays wechseln können, oder mehrere separate Schnellaktionen erstellen, jede für ein bestimmtes Karten-Overlay. |
| Ändern <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Erstellen Sie eine Liste von Kartenquellen als Karten-Underlay und wechseln Sie zyklisch durch sie. <br /> - *Hinweis*. Um Karten-Underlays in OsmAnd zu ändern, können Sie entweder eine einzelne Schnellaktion einrichten, mit der Sie zwischen mehreren Karten-Underlays wechseln können, oder mehrere separate Schnellaktionen erstellen, jede für ein bestimmtes Karten-Underlay.  |
| Ändern <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Erstellen Sie eine Liste von Kartenstilen für Vektorkarten und wechseln Sie zyklisch durch sie. <br /> - *Hinweis*. Um Kartenstile in OsmAnd zu ändern, können Sie entweder eine einzelne Schnellaktion einrichten, mit der Sie zwischen mehreren Karten-Overlays wechseln können, oder mehrere separate Schnellaktionen erstellen, jede für einen bestimmten Kartenstil. |
| Ein-/Ausblenden <br/> [**Mapillary-Ebene**](../plugins/mapillary.md) | Ermöglicht die Anzeige von Kartenebenen mit Straßenbildern von Mapillary. |
| Ein-/Ausblenden <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | Sie können mit einem einzigen Tastendruck alle OSM-Notizen auf der Karte ein- oder ausblenden. |


### Benutzeroberfläche {#interface}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Navigieren <br/> **Vorheriger Bildschirm** | Ein Schalter, um zum vorherigen Bildschirm zu navigieren. |
| Ein-/Ausblenden <br/> [**Navigationsansicht**](../navigation/setup/route-navigation.md) | Schaltet die Sichtbarkeit der Navigationsbildschirmansicht um. |
| Ein-/Ausblenden <br/> [**Suchansicht**](../search/search-all.md) | Öffnet oder schließt die Suchansicht. |
| Ein-/Ausblenden <br/> [**Seitenmenü**](../start-with/main-menu.md) | Schaltet die Sichtbarkeit des Hauptseitenmenüs für den Zugriff auf Kernfunktionen um. |
| Ein-/Ausschalten <br/> [**Touchscreen-Sperre**](../map/interact-with-map.md#touch-screen-lock) | Aktiviert oder deaktiviert die Touchscreen-Sperre, um unbeabsichtigte Bildschirminteraktionen zu vermeiden. |


### Karteninteraktionen {#map-interactions}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Karte <br/> [**Vergrößern**](../map/interact-with-map.md) | Vergrößern der Karte bei gleichzeitiger Erhöhung der angezeigten Datenmenge. |
| Karte <br/> [**Verkleinern**](../map/interact-with-map.md) | Verkleinern der Karte. Es ist praktisch, dies mit dem [Entwickler-Widget - Zoomstufe](../widgets/info-widgets.md#developer-widgets) zu verwenden. |
| Verschieben <br/> [**Karte nach unten**](../map/interact-with-map.md) | Sie können die Schnellaktions-Schaltfläche verwenden, um die Karte nach unten zu verschieben.  |
| Verschieben <br/> [**Karte nach oben**](../map/interact-with-map.md) | Wenn Sie darauf tippen, bewegt sich der Kartenbildschirm nach oben. |
| Verschieben <br/> [**Karte nach links**](../map/interact-with-map.md) | Wenn Sie auf die Schaltfläche tippen, bewegt sich der Kartenbildschirm nach links. |
| Verschieben <br/> [**Karte nach rechts**](../map/interact-with-map.md) | Mit einer Schnellaktions-Schaltfläche können Sie die Karte nach rechts verschieben. |
| Verschieben <br/> [**Zu meinem Standort**](../map/interact-with-map.md#my-location-and-zoom) | Verschiebt die Karte zur Position *Mein Standort*. |


### Meine Orte {#my-places}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Start / Pause <br/> [**Routenaufzeichnung**](../plugins/trip-recording.md#new-track-recording) | Beginnen Sie eine Aufzeichnungssitzung des aktuellen Tracks oder pausieren Sie, um vorübergehend zu stoppen, ohne die Fahrt abzuschließen. |
| Starten <br/> [**Neues Routensegment**](../plugins/trip-recording.md#overview-screen) | Starten Sie ein neues Segment der Fahrt, ohne die gesamte Aufzeichnung zu stoppen. |
| Speichern <br/> [**Aufgezeichnete Route & Fortsetzen**](../plugins/trip-recording.md#current-track-recording) | Speichern Sie die aktuelle Routenaufzeichnung und setzen Sie die Aufzeichnung ohne Unterbrechung fort. |
| Beenden <br/> [**Routenaufzeichnung**](../plugins/trip-recording.md#current-track-recording) | Beenden Sie die aktuelle Routenaufzeichnungssitzung. |
| Hinzufügen <br/> [**Favorit**](../map/configure-map-menu.md#map-layers) | Fügt einen Favoriten am ausgewählten (zentralen) Kartenstandort hinzu. <br /> - *Zwischendialog anzeigen*. Zeigt einen Bestätigungsdialog an. <br /> - *Gruppe*. Fügt einen Favoriten zur ausgewählten Gruppe hinzu. <br /> - *Farbe*. Fügt einen Favoriten mit einer vorgewählten Farbe hinzu <br /> - *Name*. Fügt einen Favoriten mit dem angegebenen Namenspräfix hinzu.  |
| Hinzufügen <br/> [**Track-Wegpunkt**](../map/point-layers-on-map.md#track-waypoints) | Fügt einen neuen Track-Wegpunkt zum [aktuell aufzeichnenden Track](../plugins/trip-recording.md) oder [jedem Track in Meine Orte](../personal/tracks/manage-tracks.md) hinzu. <br /> - *Zwischendialog anzeigen*. Zeigt einen Bestätigungsdialog an. <br /> - *Gruppe*. Fügt einen Favoriten zur ausgewählten Gruppe hinzu. <br /> - *Farbe*. Fügt einen Favoriten mit einer vorgewählten Farbe hinzu <br /> - *Name*. Fügt einen Favoriten mit dem angegebenen Namenspräfix hinzu.  |
| Hinzufügen <br/> [**Kartenmarkierung**](../map/configure-map-menu.md#map-layers) | Fügt eine Markierung an einem ausgewählten (zentralen) Kartenstandort hinzu. |
| Hinzufügen <br/> [**Parkplatz**](../plugins/parking.md) | Fügt einen Parkplatz an einem ausgewählten (zentralen) Kartenstandort hinzu. Die alte Parkposition wird gelöscht. |
| Hinzufügen <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Fügt einen POI an einem ausgewählten (zentralen) Kartenstandort hinzu (gleiche Aktion wie im Kontextmenü). <br /> - *Zwischendialog anzeigen*. Zeigt einen Bestätigungsdialog an. <br /> - *POI-Typ* (optional). Wählt den OSM-POI-Typ vor. <br /> - *Tag/Wert* (mehrere). Fügt [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features)-Tags/Werte hinzu |
| Hinzufügen <br/> [**OSM-Notiz**](../plugins/osm-editing.md#create--modify-osm-note) | Fügt eine [OSM-Notiz](https://wiki.openstreetmap.org/wiki/Notes) hinzu  <br /> - *Zwischendialog anzeigen*. Zeigt einen Bestätigungsdialog an. <br /> - *Nachricht*. Fügt der Notiz eine Standardnachricht hinzu. |
| Hinzufügen <br/> [**Mediennotizen**](../plugins/audio-video-notes.md) | Startet die Audio-/Foto-/Video-Notizaufnahme für einen ausgewählten (zentralen) Kartenstandort. |
| Erstellen <br/> [**Neue Route**](../plan-route/create-route.md) <br /> *Nur Android* | Öffnet das Werkzeug [Route planen](../plan-route/create-route.md) und erstellt eine Route für den ausgewählten (zentralen) Standort auf der Karte. |


### Navigation {#navigation}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Hinzufügen <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | Sie können das Zentrum des Kartenbildschirms als ersten Zwischenpunkt auswählen. Das vorherige Ziel bleibt gleich. |
| Ein-/Ausschalten <br/> [**Sprachansagen**](../navigation/guidance/voice-navigation.md) | Stummschalten oder Aufheben der Stummschaltung der Sprachführung während der Navigation. |
| Setzen <br/> [**Startpunkt**](../navigation/setup/route-navigation.md#set-destinations) | Markieren Sie einen ausgewählten (zentralen) Kartenstandort als Abfahrtspunkt. |
| Setzen <br/> [**Ziel**](../navigation/setup/route-navigation.md#set-destinations) | Fügen Sie den ausgewählten (zentralen) Standort auf der Karte als Ziel hinzu. Das vorherige Ziel wird zum letzten Zwischenpunkt.  |
| Ersetzen <br/> [**Ziel**](../navigation/setup/route-navigation.md#intermediate-destinations) | Setzen/Ersetzen Sie einen ausgewählten (zentralen) Kartenstandort als Ziel. Das vorherige Ziel wird gelöscht. |
| Ein-/Ausschalten <br/> [**Auto-Zoom der Karte**](../map/interact-with-map.md) | Aktivieren oder deaktivieren Sie den automatischen Kartenzoom während der Navigation. |
| Start/Stopp <br/> [**Navigation**](../navigation/setup/route-navigation.md#start--stop-navigation) | Starten Sie die Navigation (wenn ein Zielpunkt vorhanden ist) oder stoppen Sie die Navigation. |
| Pause / Fortsetzen <br/> [**Navigation**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Pausieren / Fortsetzen der Navigation. |
| Entfernen <br/> [**Nächster Zielpunkt**](../navigation/setup/route-navigation.md#intermediate-destinations) | Entfernt den nächsten Zwischenpunkt, falls vorhanden, andernfalls wird das Ziel entfernt und der Dialog zum Beenden der Navigation angezeigt. Die Aktion ist inaktiv, wenn Sie kein Ziel haben. |
| Simulieren <br/> [**Standort per GPX**](../plugins/development.md#gpx-track-simulation) | Simuliert den Standort und die Bewegung Ihres Geräts mithilfe eines GPX-Tracks. |


### Einstellungen {#settings}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Ändern <br/> [**App-Profil**](../personal/profiles.md) | Erstellen Sie eine Liste von Anwendungsprofilen und wechseln Sie zyklisch durch sie.  <br /> - *Zwischendialog anzeigen*. Zeigt einen Dialog mit einer Liste von Profilen an. <br /> - *Keinen Zwischendialog anzeigen*. Die Profile wechseln in einer festgelegten Reihenfolge. <br /> - *Hinweis*. Sie können eine einzelne Aktion anpassen, mit der Sie zwischen mehreren Profilen wechseln können, oder mehrere separate Aktionen erstellen, jede für ein bestimmtes Profil. |
| Ändern <br/> [**App-Profil zum nächsten**](../personal/profiles.md) | Wechselt zum nächsten Profil in der Liste. |
| Ändern <br/> [**App-Profil zum vorherigen**](../personal/profiles.md) | Wechselt zum vorherigen Profil in der Liste. |
| Ändern <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> (iOS **Standortposition auf dem Bildschirm**)  | Ermöglicht es Ihnen, die Platzierung des *Mein Standort*-Cursors auf der Karte festzulegen. Aktiviert oder deaktiviert, dass der Cursor immer in der Mitte des Bildschirms ist. |
| Ändern <br/> [**Kartenorientierung**](../map/interact-with-map#map-orientation-modes) | Ermöglicht es Ihnen, den Kartenrotationsmodus zu ändern und zwischen ausgewählten Orientierungstypen zu wechseln. Sie können auswählen, welche Modi in den Zyklus aufgenommen werden sollen. |


## Tastatur für Aktionen verwenden {#use-keyboard-for-actions}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Externe Geräte](@site/static/img/map/external_custom_2_andr.png)

Mit der Funktionalität des Schnellaktions-Werkzeugs können Sie den Tasten Ihres externen Eingabegeräts erforderliche Aktionen zuweisen. Eine Beschreibung finden Sie im Artikel [Mit der Karte interagieren](../map/interact-with-map.md#custom-input-device-type).


## Verwandte Artikel {#related-articles}

- [Bildschirm konfigurieren](./configure-screen.md)
- [Karten-Schaltflächen](./map-buttons.md)
- [Informations-Widgets](./info-widgets.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Radius-Lineal und Lineal](./radius-ruler.md)
- [Marker-Widgets](./markers.md)