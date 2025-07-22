---
source-hash: 5a6d57c30dcc7cffb0562681b9341b0e7b62aafd5fd56183371bd8098893001c
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




## Überblick {#overview}

Das Schnellaktions-Widget ist ein interaktives Benutzeroberflächenelement, das schnellen Zugriff auf Schlüsselfunktionen oder Aktionen ermöglicht, ohne zusätzliche Einstellungen öffnen zu müssen. Dieses Widget wird auf dem Hauptkartenbildschirm platziert und ermöglicht es Ihnen, die Interaktion mit der Anwendung zu vereinfachen und zu beschleunigen, was sie bequemer und effizienter macht.

![Schnellaktions-Widget](@site/static/img/widgets/quick_action_widget.png)


## Schnellaktions-Widget {#quick-action-widget}

<Tabs groupId="operating-systems" queryString="operating-systems">

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

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Tippe auf Löschen (Papierkorbsymbol rechts oben) → Aktionen auswählen*

![Schnellaktions-Widget_Android_hinzufügen](@site/static/img/widgets/quick_action_widget_andr.png) ![Benutzerdefinierte Schaltfläche Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/> → Tippe auf Bearbeiten (Bleistiftsymbol rechts oben) → Aktionen auswählen*

![Schnellaktions-Widget_iOS_hinzufügen](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Benutzerdefinierte Schaltfläche Android](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

Alle Aktionen sind im Menü **Aktion hinzufügen** organisiert und nach Typ gruppiert. Eine vollständige Liste der Aktionen und ihrer Beschreibungen finden Sie im Abschnitt [Aktionstypen](#action-types).

Sie können der Schnellaktions-Schaltfläche eine oder mehrere [Aktionen](#action-types) zuweisen. Es gibt zwei Möglichkeiten, Aktionen hinzuzufügen.

- **Im Konfigurationsbildschirm**. Wählen Sie eine Schaltfläche aus der Liste aus und tippen Sie auf die Schaltfläche&nbsp; "**＋**" &nbsp;. Sie müssen zuerst den [Aktionstyp](#action-types) auswählen und dann seinen Namen und seine [Parameter](#actions-in-loop) ändern.
- **Im Schnellaktions-Schaltflächenfeld**. Tippen Sie auf dem Kartenbildschirm auf die *Schnellaktions-Schaltfläche*. Am Ende der Liste, auf dem letzten Bildschirm im Panel, befindet sich das Feld "**＋**" &nbsp; *Aktion hinzufügen*. Tippen Sie darauf und wählen Sie eine Aktion aus der [Liste der Typen](#action-types) aus.


:::note

- Jede Aktion muss einen eindeutigen Namen haben.
- Die Bildschirme, nummeriert als Bildschirm 1, Bildschirm 2 usw., werden automatisch erstellt, wenn die Anzahl der Aktionen in der Liste auf 6 Elemente ansteigt.

:::


### Aktionsparameter {#action-parameters}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Schnellaktions-Widget_Android_Reihenfolge](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Schnellaktions-Widget_iOS_Reihenfolge](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

Die einer Schnellaktions-Schaltfläche zugewiesenen Aktionen werden in Bildschirmen gruppiert. Diese Aktionsgruppen werden geöffnet, wenn Sie auf diese Schaltfläche auf der Karte tippen. Neue Bildschirme werden automatisch erstellt, wenn die Liste der Aktionen *6 Elemente* überschreitet. Sie können Aktionen nach Ihren Wünschen neu anordnen, indem Sie die folgenden Schritte ausführen:

**Für Android**.

1. Über den Konfigurationsbildschirm:

    - Gehe zu *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*.
    - Verwenden Sie *Gedrückt halten & Ziehen* auf dem Symbol mit zwei vertikalen Linien, um Aktionen neu anzuordnen.

2. Über das Schnellaktionsmenü:

    - Öffnen Sie das Schnellaktionsmenü und tippen Sie dann lange auf *Aktion hinzufügen*.
    - Verwenden Sie *Gedrückt halten & Ziehen* auf dem Symbol mit zwei vertikalen Linien, um Aktionen neu anzuordnen.

**Für iOS**.

- Navigieren Sie zu *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>*.
- Tippen Sie auf *Bearbeiten* (Bleistiftsymbol) und dann auf *Gedrückt halten & Ziehen* auf dem Symbol mit drei vertikalen Linien, um Aktionen neu anzuordnen.

#### Aktionen in Schleife {#actions-in-loop}

![Benutzerdefinierte Schaltfläche Android](@site/static/img/widgets/actions_in_loop_andr.png)

Für einige Aktionen können Sie eine Liste von Ebenen zuweisen, die sich mit jedem Tippen im Kreis ändern: *Kartenquelle*, *Kartenstil*, *Overlay*, *Underlay*, *Geländefarbschema*, *Profil hinzufügen*.

Die Schaltfläche ermöglicht es Ihnen, eine einzelne Ebene oder eine Liste von Ebenen zuzuweisen, die sich beim Tippen oder mit einem Zwischen-Dialog kreisförmig ändern.

- **Zwischen-Dialog anzeigen**. Zeigt einen Dialog mit einer Liste von Karten an.
- **Zwischen-Dialog nicht anzeigen**. Die Kartenquellen ändern sich in einer definierten Reihenfolge.


### Position auf der Karte ändern {#change-position-on-the-map}

Das *Schnellaktions*-Widget erscheint in der unteren Ecke des Kartenbildschirms, wenn Sie es zum ersten Mal aktivieren. Sie können das Widget an jeden beliebigen Teil des Bildschirms verschieben, indem Sie es gedrückt halten und ziehen. Für eine präzise und genaue Platzierung der Schaltflächen auf dem Kartenbildschirm werden sie beim Ziehen automatisch an die nächstgelegene unsichtbare Rasterposition ausgerichtet.

- **Erste Erscheinung**. Standardmäßig wird das Schnellaktions-Widget in der unteren rechten Ecke der Kartenoberfläche platziert.

    ![Schnellaktions-Widget_Ansicht](@site/static/img/widgets/quick_action_widget_view.png)

- **Widget verschieben**. Durch langes Drücken und Ziehen des Widgets können Sie es auf dem Bildschirm neu positionieren, wobei die automatische Spalten- und Reihenausrichtung erfolgt.

    ![Schnellaktions-Widget_Tippen](@site/static/img/widgets/quick_action_widget_tap.png)

- **Neue Platzierung**. Nach dem Verschieben bleibt das Widget an seiner neuen Position auf dem Kartenbildschirm, bis es manuell wieder angepasst wird.

    ![Schnellaktions-Widget_Verschieben](@site/static/img/widgets/quick_action_widget_move.png)

- **Mehrere [Benutzerdefinierte Schaltflächen](#custom-buttons)**. Sie können mehrere Schnellaktions-Schaltflächen zum Kartenbildschirm hinzufügen. Diese Schaltflächen können auch individuell angepasst und neu positioniert werden, indem dieselbe Drag-and-Drop-Methode verwendet wird.

    ![Schnellaktions-Widget_Verschieben](@site/static/img/widgets/quick_action_widget_multi.png)


### Benutzerdefinierte Schaltflächen {#custom-buttons}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate android="true" ids="add_button"/>*

![Benutzerdefinierte Schaltfläche Android](@site/static/img/widgets/custom_button_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*

![Benutzerdefinierte Schaltfläche Android](@site/static/img/widgets/custom_button_ios.png)

</TabItem>

</Tabs>

**Benutzerdefinierte Schaltflächen** sind zusätzliche Schaltflächen auf der Karte, die sich wie die *Schnellaktions*-Schaltfläche verhalten. Sie können eine Schaltfläche mit einer oder mehreren Aktionen erstellen und auf dem Kartenbildschirm anzeigen. Benutzerdefinierte Schaltflächen befinden sich in der Liste *Konfigurationsbildschirm → Schaltflächen → Benutzerdefinierte Schaltflächen*. Jede Schaltfläche hat eine profilunabhängige Aktionsliste und sollte einen eindeutigen ***Namen*** haben, jedoch kann eine Schaltfläche für jedes **Profil** individuell ein- oder ausgeschaltet werden.

Alle verfügbaren [Aktionen](#action-types) sind identisch mit denen, die auf die Standard-Schnellaktion angewendet werden können. Benutzerdefinierte Schaltflächen können als ***Einzelaktions***-Schaltflächen konfiguriert werden, die die ausgewählte Aktion sofort beim Tippen anwenden, ohne dass ein zusätzliches Menü durchlaufen werden muss.


### Aussehen der Schnellaktions-Schaltfläche {#quick-action-button-appearance}

<InfoAndroidOnly/>

![Aussehen der Schnellaktions-Schaltfläche](@site/static/img/widgets/qa_button_appearance_andr.png)

Sie können das Aussehen der Schnellaktions-Schaltflächen ändern über: *Menü → Konfigurationsbildschirm → Benutzerdefinierte Schaltflächen → Schnellaktion → Drei-Punkte-Menü → Aussehen*. Diese Einstellung bietet Optionen zur Personalisierung der Größe, Form, des Symbols und der Hintergrundtransparenz der Schaltfläche, was eine größere Kontrolle darüber ermöglicht, wie die Schaltflächen auf Ihrem Bildschirm aussehen.

Detaillierte Anpassungseinstellungen finden Sie im Artikel [Konfigurationsbildschirm](../widgets/configure-screen.md#button-appearance), wo Sie lernen können, das Aussehen jeder Schaltfläche fein abzustimmen, um Ihren Präferenzen zu entsprechen.


## Aktionstypen {#action-types}

### Karte konfigurieren {#configure-map}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Anzeigen / Ausblenden <br/> [**Routen**](../map/vector-maps.md#routes) | Sie können Routentypen auswählen, um deren Anzeige zu aktivieren oder zu deaktivieren. <br/> Einige Routen haben zusätzliche Einstellungen. Standardmäßig wird, wenn Sie im Menü [Karte konfigurieren](../map/configure-map-menu.md) nichts ausgewählt haben, der erste Routentyp aus der Liste zugewiesen, andernfalls ein Typ Ihrer Wahl. Weitere Informationen finden Sie im Artikel [Routen](../map/routes.md). <br/> - ***Radrouten*** &nbsp;(*Route*, *Knotennetze*) <br/> - ***Mountainbike-Routen*** &nbsp;(*MTB-Skala*, *IMBA*) <br/> - ***Wanderrouten*** &nbsp;(*OSMC*, *Netzwerkzugehörigkeit*, *Knotennetze*) <br/> - ***Schwierigkeitsgrad von Wanderwegen*** &nbsp;(*SAC-Skala*, *CAI-Skala*) <br/> - ***Skipisten*** <br/> - ***Reitrouten*** <br/> - ***Wildwassersport*** <br/> - ***Laufrouten*** <br/> - ***Fitnesspfade*** <br/> - ***Reiserouten*** &nbsp;(*Tracks*, *Reisebücher*, *Punkte*) <br/> |
| Anzeigen / Ausblenden <br/> [**Topografie-Ebenen**](../plugins/topography.md#overview) | Alle Topografie-Daten werden als separate Kartenebenen dargestellt. Sie können die Sichtbarkeit dieser Ebenen schnell mit der Schnellaktion umschalten. <br/> - ***Höhenlinien*** <br/> - ***Gelände*** &nbsp;(*Abhängig von der im Menü [Karte konfigurieren](../map/configure-map-menu.md) ausgewählten Ebene*, *Schattierung*, *Hang* oder *Höhe* *wird angezeigt.*) |
| Ändern <br/> [**Geländefarbschema**](../plugins/topography.md#modify-color-scheme) | Ermöglicht die Auswahl einer oder mehrerer Paletten aus einer Liste vorhandener, die sich beim Tippen auf die Schaltfläche ändern. |
| Anzeigen / Ausblenden <br/> [**Wetterebenen**](../plugins/weather.md#weather-layers) | Alle Wetterdaten werden als separate Kartenebenen dargestellt. Mit der Schnellaktion erhalten Sie schnellen Zugriff, um die Sichtbarkeit dieser Ebenen auf der Karte umzuschalten. <br/> - ***Niederschlags-Ebene*** <br/> - ***Wolken-Ebene*** <br/> - ***Druck-Ebene*** <br/> - ***Wind-Ebene*** <br/> - ***Temperatur-Ebene*** |
| Öffnen <br/> [**Wetterbildschirm**](../plugins/weather.md) <br /> *Nur Android* | Öffnet den [*Wettervorhersagebildschirm*](../plugins/weather.md#weather-forecast-screen) mit den detaillierten Informationen. |
| Anzeigen / Ausblenden <br/> [**Favoriten**](../personal/favorites.md#view-on-the-map) | Favoritenpunkte auf der Karte anzeigen oder ausblenden. |
| Anzeigen / Ausblenden <br/> [**Tracks**](../personal/tracks/manage-tracks.md#track-menu) | Die zuletzt sichtbaren Tracks auf der Karte anzeigen oder ausblenden. |
| Anzeigen / Ausblenden <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Die Anzeige von POI-Ebenen mit ausgewählten Kategorien auf der Karte aktivieren oder deaktivieren.<br/>Sie können mehrere POI-Kategorien auswählen. Die Aktion ersetzt die im Menü "Karte konfigurieren" ausgewählten POI-Kategorien, ohne Schnellaktionen zu verwenden. |
| Ändern <br/> [**Kartenmodus**](../map/vector-maps.md#map-mode) | Schneller Zugriff zum Umschalten zwischen Tag- und Nachtmodus. |
| Ändern <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | Die Schaltfläche ermöglicht Ihnen, eine einzelne Kartenquelle oder eine Liste von Quellen zuzuweisen, die sich beim Tippen oder mit einem Zwischen-Dialog kreisförmig ändern. <br/> - *Zwischen-Dialog anzeigen*. Zeigt einen Dialog mit einer Liste von Karten an. <br/> - *Zwischen-Dialog nicht anzeigen*. Die Kartenquellen ändern sich in einer definierten Reihenfolge. <br/> - *Angezeigter Name* - *Kartenquelle* >. ">" nach dem Kartennamen zeigt an, welche Kartenquelle derzeit ausgewählt ist. <br/> - *Angezeigter Name* - > *Nächste Kartenquelle*. ">" vor dem Kartennamen zeigt an, welche die nächste ausgewählte Kartenquelle sein wird, wenn die Aktion ausgeführt wird. <br/> - *Hinweis*. Um Kartenquellen in OsmAnd zu ändern, können Sie entweder eine einzelne Schnellaktion einrichten, mit der Sie zwischen mehreren Kartenquellen wechseln können, oder mehrere separate Schnellaktionen erstellen, jede für eine bestimmte Kartenquelle. |
| Anzeigen / Ausblenden <br /> [**Öffentlicher Nahverkehr**](../map/vector-maps.md#transport) | Aktiviert oder deaktiviert die Kartenebene des öffentlichen Nahverkehrs <br /> - *Verkehrsart*. Beim ersten Tippen können Sie eine oder mehrere Verkehrsarten auswählen, darunter *Haltestellen des Nahverkehrs*, *Bus-, Oberleitungsbus- und Shuttle-Routen*, *Straßenbahn- und Zugrouten*, *U-Bahn-Routen*. |
| Ändern <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Erstellen Sie eine Liste von Kartenquellen als Karten-Overlay und wechseln Sie zyklisch durch sie. <br /> - *Hinweis*. Um Karten-Overlays in OsmAnd zu ändern, können Sie entweder eine einzelne Schnellaktion einrichten, mit der Sie zwischen mehreren Karten-Overlays wechseln können, oder mehrere separate Schnellaktionen erstellen, jede für ein bestimmtes Karten-Overlay. |
| Ändern <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Erstellen Sie eine Liste von Kartenquellen als Karten-Underlay und wechseln Sie zyklisch durch sie. <br /> - *Hinweis*. Um Karten-Overlays in OsmAnd zu ändern, können Sie entweder eine einzelne Schnellaktion einrichten, mit der Sie zwischen mehreren Karten-Underlays wechseln können, oder mehrere separate Schnellaktionen erstellen, jede für ein bestimmtes Karten-Underlay. |
| Ändern <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Erstellen Sie eine Liste von Kartenstilen für Vektorkarten und wechseln Sie zyklisch durch sie. <br /> - *Hinweis*. Um Kartenstile in OsmAnd zu ändern, können Sie entweder eine einzelne Schnellaktion einrichten, mit der Sie zwischen mehreren Karten-Overlays wechseln können, oder mehrere separate Schnellaktionen erstellen, jede für einen bestimmten Kartenstil. |
| Anzeigen / Ausblenden <br/> [**Mapillary-Ebene**](../plugins/mapillary.md) | Ermöglicht das Anzeigen von Kartenebenen mit Straßenbildern von Mapillary. |
| Anzeigen / Ausblenden <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | Sie können auswählen, alle OSM-Notizen auf der Karte mit einem einzigen Tippen auf die Schaltfläche anzuzeigen oder auszublenden. |


### Schnittstelle {#interface}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Navigieren <br/> **Vorheriger Bildschirm** | Ein Schalter zum Navigieren zum vorherigen Bildschirm. |
| Anzeigen / Ausblenden <br/> [**Navigationsansicht**](../navigation/setup/route-navigation.md) | Schaltet die Sichtbarkeit der Navigationsbildschirmansicht um. |
| Anzeigen / Ausblenden <br/> [**Suchansicht**](../search/search-all.md) | Öffnet oder schließt die Suchansicht. |
| Anzeigen / Ausblenden <br/> [**Seitenmenü**](../start-with/main-menu.md) | Schaltet die Sichtbarkeit des Hauptseitenmenüs zum Zugriff auf Kernfunktionen um. |
| Aktivieren / Deaktivieren <br/> [**Touchscreen-Sperre**](../map/interact-with-map.md#touch-screen-lock) | Aktiviert oder deaktiviert die Touchscreen-Sperre, um unbeabsichtigte Bildschirminteraktionen zu vermeiden. |


### Karteninteraktionen {#map-interactions}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Karte <br/> [**Vergrößern**](../map/interact-with-map.md) | Vergrößern der Karte bei gleichzeitiger Erhöhung der angezeigten Datenmenge. |
| Karte <br/> [**Verkleinern**](../map/interact-with-map.md) | Verkleinern der Karte. Es ist bequem zu verwenden mit dem [Entwickler-Widget - Zoomstufe](../widgets/info-widgets.md#developer-widgets). |
| Verschieben <br/> [**Karte nach unten**](../map/interact-with-map.md) | Sie können die Schnellaktions-Schaltfläche verwenden, um die Karte nach unten zu verschieben. |
| Verschieben <br/> [**Karte nach oben**](../map/interact-with-map.md) | Beim Tippen bewegt sich der Kartenbildschirm nach oben. |
| Verschieben <br/> [**Karte nach links**](../map/interact-with-map.md) | Wenn Sie auf die Schaltfläche tippen, bewegt sich der Kartenbildschirm nach links. |
| Verschieben <br/> [**Karte nach rechts**](../map/interact-with-map.md) | Mit einer Schnellaktions-Schaltfläche können Sie die Karte nach rechts verschieben. |
| Verschieben <br/> [**Zu meinem Standort**](../map/interact-with-map.md#my-location-and-zoom) | Verschiebt die Karte zur Position *Mein Standort*. |


### Meine Orte {#my-places}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Starten / Pause <br/> [**Aufnahme der Tour**](../plugins/trip-recording.md#new-track-recording) | Starten Sie eine Aufnahmesitzung des aktuellen Tracks oder pausieren Sie, um vorübergehend anzuhalten, ohne die Tour abzuschließen. |
| Starten <br/> [**Neues Toursegment**](../plugins/trip-recording.md#overview-screen) | Starten Sie ein neues Segment der Tour, ohne die gesamte Aufnahme zu unterbrechen. |
| Speichern <br/> [**Aufgezeichnete Tour & Fortsetzen**](../plugins/trip-recording.md#current-track-recording) | Speichern Sie die aktuelle Touraufnahme und setzen Sie die Aufnahme ohne Unterbrechung fort. |
| Beenden <br/> [**Aufnahme der Tour**](../plugins/trip-recording.md#current-track-recording) | Beenden Sie die aktuelle Aufnahmesitzung der Tour. |
| Hinzufügen <br/> [**Favorit**](../map/configure-map-menu.md#map-layers) | Fügt einen Favoriten zum ausgewählten (zentralen) Kartenstandort hinzu. <br /> - *Zwischen-Dialog anzeigen*. Zeigt einen Bestätigungsdialog an. <br /> - *Gruppe*. Fügt einen Favoriten zur ausgewählten Gruppe hinzu. <br /> - *Farbe*. Fügt einen Favoriten mit einer vorausgewählten Farbe hinzu <br /> - *Name*. Fügt einen Favoriten mit dem angegebenen Namenspräfix hinzu. |
| Hinzufügen <br/> [**Track-Wegpunkt**](../map/point-layers-on-map.md#track-waypoints) | Fügt einen neuen Track-Wegpunkt zum [aktuell aufgezeichneten Track](../plugins/trip-recording.md) oder [einem beliebigen Track in Meine Orte](../personal/tracks/manage-tracks.md) hinzu. <br /> - *Zwischen-Dialog anzeigen*. Zeigt einen Bestätigungsdialog an. <br /> - *Gruppe*. Fügt einen Favoriten zur ausgewählten Gruppe hinzu. <br /> - *Farbe*. Fügt einen Favoriten mit einer vorausgewählten Farbe hinzu <br /> - *Name*. Fügt einen Favoriten mit dem angegebenen Namenspräfix hinzu. |
| Hinzufügen <br/> [**Kartenmarkierung**](../map/configure-map-menu.md#map-layers) | Fügt eine Markierung an einer ausgewählten (mittleren) Kartenposition hinzu. |
| Hinzufügen <br/> [**Parkplatz**](../plugins/parking.md) | Fügt einen Parkplatz an einer ausgewählten (mittleren) Kartenposition hinzu. Die alte Parkposition wird gelöscht. |
| Hinzufügen <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Fügt einen POI an einer ausgewählten (mittleren) Kartenposition hinzu (wie im Kontextmenü).<br/>- *Zwischen-Dialog anzeigen*. Zeigt einen Bestätigungsdialog an.<br/>- *POI-Typ* (optional). Wählt den OSM-POI-Typ vor.<br/>- *Tag/Wert* (mehrere). Fügt [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) Tags / Werte hinzu |
| Hinzufügen <br/> [**OSM-Notiz**](../plugins/osm-editing.md#create--modify-osm-note) | Fügt eine [OSM-Notiz](https://wiki.openstreetmap.org/wiki/Notes) hinzu <br /> - *Zwischen-Dialog anzeigen*. Zeigt einen Bestätigungsdialog an. <br /> - *Nachricht*. Fügt eine Standardnachricht zur Notiz hinzu. |
| Hinzufügen <br/> [**Mediennotizen**](../plugins/audio-video-notes.md) | Startet die Aufnahme von Audio-/Foto-/Video-Notizen für eine ausgewählte (mittlere) Kartenposition. |
| Erstellen <br/> [**Neue Route**](../plan-route/create-route.md) <br /> *Nur Android* | Öffnet das Werkzeug [Route planen](../plan-route/create-route.md) und erstellt eine Route für den ausgewählten (zentralen) Standort auf der Karte. |


### Navigation {#navigation}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Hinzufügen <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | Sie können die Mitte des Kartenbildschirms als ersten Zwischenpunkt auswählen. Das vorherige Ziel bleibt dasselbe. |
| Aktivieren / Deaktivieren <br/> [**Sprachansagen**](../navigation/guidance/voice-navigation.md) | Sprachführung während der Navigation stummschalten oder wieder aktivieren. |
| Festlegen <br/> [**Startpunkt**](../navigation/setup/route-navigation.md#set-destinations) | Markieren Sie einen ausgewählten (mittleren) Kartenstandort als Startpunkt. |
| Festlegen <br/> [**Ziel**](../navigation/setup/route-navigation.md#set-destinations) | Fügen Sie den ausgewählten (zentralen) Standort auf der Karte als Ziel hinzu. Das vorherige Ziel wird zum letzten Zwischenpunkt. |
| Ersetzen <br/> [**Ziel**](../navigation/setup/route-navigation.md#intermediate-destinations) | Legen Sie einen ausgewählten (mittleren) Kartenstandort als Ziel fest/ersetzen Sie ihn. Das vorherige Ziel wird gelöscht. |
| Aktivieren / Deaktivieren <br/> [**Auto-Zoom Karte**](../map/interact-with-map.md) | Aktivieren oder deaktivieren Sie den Auto-Zoom der Karte während der Navigation. |
| Starten/Stoppen <br/> [**Navigation**](../navigation/setup/route-navigation.md#start--stop-navigation) | Starten Sie die Navigation (falls ein Ziel vorhanden ist) oder stoppen Sie die Navigation. |
| Pause / Fortsetzen <br/> [**Navigation**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Navigation pausieren / fortsetzen. |
| Entfernen <br/> [**Nächster Zielpunkt**](../navigation/setup/route-navigation.md#intermediate-destinations) | Entfernt den nächsten Zwischenpunkt, falls vorhanden, andernfalls entfernt er das Ziel und zeigt den Dialog zum Beenden der Navigation an. Die Aktion ist inaktiv, wenn Sie kein Ziel haben. |
| Simulieren <br/> [**Standort per GPX**](../plugins/development.md#gpx-track-simulation) | Simuliert den Standort und die Bewegung Ihres Geräts anhand eines GPX-Tracks. |


### Einstellungen {#settings}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Ändern <br/> [**App-Profil**](../personal/profiles.md) | Erstellen Sie eine Liste von Anwendungsprofilen und wechseln Sie zyklisch durch diese. <br /> - *Zwischen-Dialog anzeigen*. Zeigt einen Dialog mit einer Liste von Profilen an. <br /> - *Zwischen-Dialog nicht anzeigen*. Die Profile ändern sich in einer definierten Reihenfolge. <br /> - *Hinweis*. Sie können eine einzelne Aktion anpassen, mit der Sie zwischen mehreren Profilen wechseln können, oder mehrere separate Aktionen erstellen, jede für ein bestimmtes Profil. |
| Ändern <br/> [**App-Profil zum nächsten**](../personal/profiles.md) | Wechselt zum nächsten Profil in der Liste. |
| Ändern <br/> [**App-Profil zum vorherigen**](../personal/profiles.md) | Wechselt zum vorherigen Profil in der Liste. |
| Ändern <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Nur Android* | Ermöglicht Ihnen, die Platzierung des Cursors *Mein Standort* auf der Karte festzulegen. Aktiviert oder deaktiviert, dass der Cursor immer in der Mitte des Bildschirms ist. |
| Ändern <br/> [**Standortposition auf dem Bildschirm**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Nur iOS* | Ermöglicht Ihnen, die Anzeige der zuvor ausgewählten Cursorposition *Mein Standort* auf der Karte zu aktivieren oder zu deaktivieren. |


## Tastatur für Aktionen verwenden {#use-keyboard-for-actions}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Externe Geräte](@site/static/img/map/external_custom_2_andr.png)

Mit der Funktionalität des Schnellaktions-Tools können Sie die erforderlichen Aktionen den Tasten Ihres externen Eingabegeräts zuweisen. Eine Beschreibung finden Sie im Artikel [Interaktion mit der Karte](../map/interact-with-map.md#custom-input-device-type).


## Verwandte Artikel {#related-articles}

- [Bildschirm konfigurieren](./configure-screen.md)
- [Kartenschaltflächen](./map-buttons.md)
- [Informations-Widgets](./info-widgets.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Radius-Lineal und Lineal](./radius-ruler.md)
- [Markierungs-Widgets](./markers.md)

> *Zuletzt aktualisiert: April 2025*