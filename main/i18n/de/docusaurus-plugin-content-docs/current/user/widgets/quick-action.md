---
source-hash: 7383905bb345c0cfdbf50ed15d18aae91b8bc80311e03ee2f6696d7066e7903f
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

Das Schnellaktions-Widget ist ein interaktives Benutzeroberflächenelement, das schnellen Zugriff auf wichtige Funktionen oder Aktionen bietet, ohne zusätzliche Einstellungen öffnen zu müssen. Dieses Widget wird auf dem Hauptkartenbildschirm platziert und ermöglicht es Ihnen, die Interaktion mit der Anwendung zu vereinfachen und zu beschleunigen, wodurch sie bequemer und effizienter wird.

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

Um die Schnellaktionstaste zu verwenden, müssen Sie dieses Widget zuerst aktivieren.

<!--
- To open the Quick action menu, just tap the button.
- By default, the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to any part of the screen by long tapping it. -->


### Aktionen hinzufügen und löschen {#add-and-delete-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Tippen Sie auf Löschen (Mülleimer-Symbol in der oberen rechten Ecke) → Aktionen auswählen*

![Schnellaktions-Widget_Android_hinzufügen](@site/static/img/widgets/quick_action_widget_andr.png) ![Benutzerdefinierte Schaltfläche Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/> → Tippen Sie auf Bearbeiten (Bleistift-Symbol in der oberen rechten Ecke) → Aktionen auswählen*

![Schnellaktions-Widget_iOS_hinzufügen](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Benutzerdefinierte Schaltfläche Android](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

Alle Aktionen sind im Menü **Aktion hinzufügen** organisiert und nach Typ gruppiert. Eine vollständige Liste der Aktionen und ihrer Beschreibungen finden Sie im Abschnitt [Aktionstypen](#action-types).

Sie können der Schnellaktionstaste eine oder mehrere [Aktionen](#action-types) zuweisen. Es gibt zwei Möglichkeiten, Aktionen hinzuzufügen.

- **Im Konfigurationsbildschirm**. Wählen Sie eine Schaltfläche aus der Liste und tippen Sie auf die Schaltfläche "**＋**". Sie müssen zuerst den [Aktionstyp](#action-types) auswählen und dann seinen Namen und seine [Parameter](#actions-in-loop) ändern.
- **Im Schnellaktions-Bedienfeld**. Tippen Sie auf die *Schnellaktionstaste* auf dem Kartenbildschirm. Am Ende der Liste, auf dem letzten Bildschirm im Bedienfeld, befindet sich das Feld "**＋**" *Aktion hinzufügen*. Tippen Sie darauf und wählen Sie eine Aktion aus der [Liste der Typen](#action-types).


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

Die einer Schnellaktionstaste zugewiesenen Aktionen werden in Bildschirmen gruppiert. Diese Aktionsgruppen werden geöffnet, wenn Sie diese Taste auf der Karte antippen. Neue Bildschirme werden automatisch erstellt, wenn die Liste der Aktionen *6 Elemente* überschreitet. Sie können Aktionen nach Ihren Wünschen neu anordnen, indem Sie die folgenden Schritte ausführen:

**Für Android**.

1. Über den Konfigurationsbildschirm:

    - Gehen Sie zu *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*.
    - Verwenden Sie *Halten & Ziehen* auf dem Symbol mit den zwei vertikalen Linien, um Aktionen neu anzuordnen.

2. Über das Schnellaktionsmenü:

    - Öffnen Sie das Schnellaktionsmenü und tippen Sie dann lange auf *Aktion hinzufügen*.
    - Verwenden Sie *Halten & Ziehen* auf dem Symbol mit den zwei vertikalen Linien, um Aktionen neu anzuordnen.

**Für iOS**.

- Navigieren Sie zu *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>*.
- Tippen Sie auf *Bearbeiten* (Bleistiftsymbol), dann *Halten & Ziehen* auf dem Symbol mit den drei vertikalen Linien, um Aktionen neu anzuordnen.

#### Aktionen in Schleife {#actions-in-loop}

![Benutzerdefinierte Schaltfläche Android](@site/static/img/widgets/actions_in_loop_andr.png)

Für einige Aktionen können Sie eine Liste von Ebenen zuweisen, die sich bei jedem Tippen in einem Kreis ändern: *Kartenquelle*, *Kartenstil*, *Overlay*, *Underlay*, *Geländefarbschema*, *Profil hinzufügen*.

Die Schaltfläche ermöglicht es Ihnen, eine einzelne Ebene oder eine Liste von Ebenen zuzuweisen, die sich beim Tippen oder mit einem Zwischen-Dialog kreisförmig ändern.

- **Einen Zwischen-Dialog anzeigen**. Zeigt einen Dialog mit einer Liste von Karten an.
- **Keinen Zwischen-Dialog anzeigen**. Die Kartenquellen ändern sich in einer definierten Reihenfolge.


### Position auf der Karte ändern {#change-position-on-the-map}

Das *Schnellaktions*-Widget erscheint in der unteren Ecke des Kartenbildschirms, wenn Sie es zum ersten Mal aktivieren. Sie können das Widget durch Halten und Ziehen an eine beliebige Stelle des Bildschirms verschieben. Für eine präzise und genaue Platzierung der Schaltflächen auf dem Kartenbildschirm werden sie beim Ziehen automatisch an die nächste unsichtbare Gitterposition ausgerichtet.

- **Erstes Erscheinungsbild**. Standardmäßig wird das Schnellaktions-Widget in der unteren rechten Ecke der Kartenoberfläche platziert.

    ![Schnellaktions-Widget_Ansicht](@site/static/img/widgets/quick_action_widget_view.png)

- **Widget verschieben**. Durch langes Drücken und Ziehen des Widgets können Sie es auf dem Bildschirm neu positionieren, mit automatischer Spalten- und Zeilenausrichtung.

    ![Schnellaktions-Widget_Tippen](@site/static/img/widgets/quick_action_widget_tap.png)

- **Neue Platzierung**. Sobald das Widget verschoben wurde, bleibt es an seiner neuen Position auf dem Kartenbildschirm, bis es manuell erneut angepasst wird.

    ![Schnellaktions-Widget_Verschieben](@site/static/img/widgets/quick_action_widget_move.png)

- **Mehrere [Benutzerdefinierte Schaltflächen](#custom-buttons)**. Sie können mehrere Schnellaktionstasten zum Kartenbildschirm hinzufügen. Diese Schaltflächen können auch individuell angepasst und neu positioniert werden, indem dieselbe Drag-and-Drop-Methode verwendet wird.

    ![Schnellaktions-Widget_Verschieben](@site/static/img/widgets/quick_action_widget_multi.png)


### Benutzerdefinierte Schaltflächen {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate android="true" ids="add_button"/>*

![Benutzerdefinierte Schaltfläche Android](@site/static/img/widgets/custom_button_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*

![Benutzerdefinierte Schaltfläche Android](@site/static/img/widgets/custom_button_ios.png)

</TabItem>

</Tabs>

**Benutzerdefinierte Schaltflächen** sind zusätzliche Schaltflächen auf der Karte, die sich wie die *Schnellaktions*-Schaltfläche verhalten. Sie können eine Schaltfläche mit einer oder mehreren Aktionen erstellen und diese auf dem Kartenbildschirm anzeigen. Benutzerdefinierte Schaltflächen befinden sich in der Liste *Bildschirm konfigurieren → Schaltflächen → Benutzerdefinierte Schaltflächen*. Jede Schaltfläche hat eine profilunabhängige Aktionsliste und sollte einen eindeutigen ***Namen*** haben, kann jedoch für jedes **Profil** einzeln ein- und ausgeschaltet werden.

Alle verfügbaren [Aktionen](#action-types) sind identisch mit denen, die auf die Standard-Schnellaktion angewendet werden können. Benutzerdefinierte Schaltflächen können als ***Einzelaktions***-Schaltflächen konfiguriert werden, die die ausgewählte Aktion sofort nach dem Antippen anwenden, ohne dass ein zusätzliches Menü durchlaufen werden muss.


### Aussehen der Schnellaktionstaste {#quick-action-button-appearance}

<InfoAndroidOnly/>

![Aussehen der Schnellaktionstaste](@site/static/img/widgets/qa_button_appearance_andr.png)

Sie können das Aussehen der Schnellaktionstasten über *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Drei-Punkte-Menü → Aussehen* ändern. Diese Einstellung bietet Optionen zur Personalisierung der Größe, Form, des Symbols und der Hintergrunddeckkraft der Schaltfläche, wodurch Sie mehr Kontrolle darüber erhalten, wie die Schaltflächen auf Ihrem Bildschirm aussehen.

Detaillierte Anpassungseinstellungen finden Sie im Artikel [Bildschirm konfigurieren](../widgets/configure-screen.md#button-appearance), wo Sie lernen können, wie Sie das Aussehen jeder Schaltfläche an Ihre Vorlieben anpassen.


## Aktionstypen {#action-types}

### Karte konfigurieren {#configure-map}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Anzeigen / Ausblenden <br/> [**Routen**](../map/vector-maps.md#routes) | Sie können Routentypen auswählen, um deren Anzeige zu aktivieren oder zu deaktivieren. <br/> Einige Routen haben zusätzliche Einstellungen. Standardmäßig wird, wenn Sie im Menü [Karte konfigurieren](../map/configure-map-menu.md) nichts ausgewählt haben, der erste Routentyp aus der Liste zugewiesen, andernfalls ein Typ Ihrer Wahl. Weitere Informationen finden Sie im Artikel [Routen](../map/routes.md). <br/> - ***Radrouten*** &nbsp;(*Route*, *Knotennetzwerke*) <br/> - ***Mountainbike-Routen*** &nbsp;(*MTB-Skala*, *IMBA*) <br/> - ***Wanderrouten*** &nbsp;(*OSMC*, *Netzwerkzugehörigkeit*, *Knotennetzwerke*) <br/> - ***Schwierigkeitsgrad von Wanderwegen*** &nbsp;(*SAC-Skala*, *CAI-Skala*) <br/> - ***Skipisten*** <br/> - ***Pferderouten*** <br/> - ***Wildwassersport*** <br/> - ***Laufrouten*** <br/> - ***Fitnesspfade*** <br/> - ***Reiserouten*** &nbsp;(*Tracks*, *Reisebücher*, *Punkte*) <br/> |
| Anzeigen / Ausblenden <br/> [**Topographie-Ebenen**](../plugins/topography.md#overview) | Alle Topographiedaten werden als separate Kartenebenen dargestellt. Sie können die Sichtbarkeit dieser Ebenen mit Schnellaktion schnell umschalten. <br/> - ***Höhenlinien*** <br/> - ***Gelände*** &nbsp;(*Abhängig von der im Menü [Karte konfigurieren](../map/configure-map-menu.md) ausgewählten Ebene wird* *Schummerung*, *Hang* oder *Höhe* *angezeigt.*) |
| Ändern <br/> [**Geländefarbschema**](../plugins/topography.md#modify-color-scheme) | Ermöglicht die Auswahl einer oder mehrerer Paletten aus einer Liste bestehender Paletten, die sich beim Antippen der Schaltfläche ändern. |
| Anzeigen / Ausblenden <br/> [**Wetter-Ebenen**](../plugins/weather.md#weather-layers) | Alle Wetterdaten werden als separate Kartenebenen dargestellt. Mit Schnellaktion erhalten Sie schnellen Zugriff, um die Sichtbarkeit dieser Ebenen auf der Karte umzuschalten. <br/> - ***Niederschlagsebene*** <br/> - ***Wolkenebene*** <br/> - ***Druckebene*** <br/> - ***Windeebene*** <br/> - ***Temperaturebene*** |
| Öffnen <br/> [**Wetterbildschirm**](../plugins/weather.md) <br /> *Nur Android* | Öffnet den [*Wettervorhersagebildschirm*](../plugins/weather.md#weather-forecast-screen) mit den detaillierten Informationen. |
| Anzeigen / Ausblenden <br/> [**Favoriten**](../personal/favorites.md#view-on-the-map) | Favoritenpunkte auf der Karte anzeigen oder ausblenden. |
| Anzeigen / Ausblenden <br/> [**Tracks**](../personal/tracks/manage-tracks.md#track-menu) | Die zuletzt sichtbaren Tracks auf der Karte anzeigen oder ausblenden. |
| Anzeigen / Ausblenden <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Aktiviert oder deaktiviert die Anzeige von POI-Ebenen mit ausgewählten Kategorien auf der Karte.<br/>Sie können mehrere POI-Kategorien auswählen. Die Aktion ersetzt die POI-Kategorien, die in der Kartenkonfiguration ohne Verwendung von Schnellaktionen ausgewählt wurden. |
| Ändern <br/> [**Kartenmodus**](../map/vector-maps.md#map-mode) | Schneller Zugriff zum Umschalten zwischen Tag- und Nachtmodus. |
| Ändern <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | Die Schaltfläche ermöglicht es Ihnen, eine einzelne Kartenquelle oder eine Liste von Quellen zuzuweisen, die sich beim Antippen oder mit einem Zwischen-Dialog kreisförmig ändern. <br/> - *Einen Zwischen-Dialog anzeigen*. Zeigt einen Dialog mit einer Liste von Karten an. <br/> - *Keinen Zwischen-Dialog anzeigen*. Die Kartenquellen ändern sich in einer definierten Reihenfolge. <br/> - *Angezeigter Name* - *Kartenquelle* >. ">" nach dem Kartennamen zeigt an, welche Kartenquelle aktuell ausgewählt ist. <br/> - *Angezeigter Name* - > *Nächste Kartenquelle*. ">" vor dem Kartennamen zeigt an, welche die nächste ausgewählte Kartenquelle sein wird, wenn die Aktion ausgeführt wird. <br/> - *Hinweis*. Um Kartenquellen in OsmAnd zu ändern, können Sie entweder eine einzelne Schnellaktion einrichten, die es Ihnen ermöglicht, zwischen mehreren Kartenquellen zu wechseln, oder mehrere separate Schnellaktionen erstellen, jede für eine bestimmte Kartenquelle. |
| Anzeigen / Ausblenden <br /> [**Öffentliche Verkehrsmittel**](../map/vector-maps.md#transport) | Aktiviert oder deaktiviert die Kartenebene für öffentliche Verkehrsmittel <br /> - *Verkehrsart*. Beim ersten Tippen können Sie eine oder mehrere Verkehrsarten auswählen, einschließlich *Haltestellen*, *Bus-, Oberleitungsbus- und Shuttle-Routen*, *Straßenbahn- und Zugrouten*, *U-Bahn-Routen*. |
| Ändern <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Erstellen Sie eine Liste von Kartenquellen als Karten-Overlay und durchlaufen Sie diese. <br /> - *Hinweis*. Um Karten-Overlays in OsmAnd zu ändern, können Sie entweder eine einzelne Schnellaktion einrichten, die es Ihnen ermöglicht, zwischen mehreren Karten-Overlays zu wechseln, oder mehrere separate Schnellaktionen erstellen, jede für ein bestimmtes Karten-Overlay. |
| Ändern <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Erstellen Sie eine Liste von Kartenquellen als Karten-Underlay und durchlaufen Sie diese. <br /> - *Hinweis*. Um Karten-Overlays in OsmAnd zu ändern, können Sie entweder eine einzelne Schnellaktion einrichten, die es Ihnen ermöglicht, zwischen mehreren Karten-Underlays zu wechseln, oder mehrere separate Schnellaktionen erstellen, jede für ein bestimmtes Karten-Underlay. |
| Ändern <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Erstellen Sie eine Liste von Kartenstilen für Vektorkarten und durchlaufen Sie diese. <br /> - *Hinweis*. Um Kartenstile in OsmAnd zu ändern, können Sie entweder eine einzelne Schnellaktion einrichten, die es Ihnen ermöglicht, zwischen mehreren Karten-Overlays zu wechseln, oder mehrere separate Schnellaktionen erstellen, jede für einen bestimmten Kartenstil. |
| Anzeigen / Ausblenden <br/> [**Mapillary-Ebene**](../plugins/mapillary.md) | Ermöglicht die Anzeige von Kartenebenen mit Straßenbildern von Mapillary. |
| Anzeigen / Ausblenden <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | Sie können alle OSM-Notizen auf der Karte mit einem einzigen Tippen auf die Schaltfläche anzeigen oder ausblenden. |


### Schnittstelle {#interface}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Navigieren <br/> **Vorheriger Bildschirm** | Ein Umschalter zum Navigieren zum vorherigen Bildschirm. |
| Anzeigen / Ausblenden <br/> [**Navigationsansicht**](../navigation/setup/route-navigation.md) | Schaltet die Sichtbarkeit der Navigationsbildschirmansicht um. |
| Anzeigen / Ausblenden <br/> [**Suchansicht**](../search/search-all.md) | Öffnet oder schließt die Suchansicht. |
| Anzeigen / Ausblenden <br/> [**Seitenmenü**](../start-with/main-menu.md) | Schaltet die Sichtbarkeit des Hauptseitenmenüs für den Zugriff auf Kernfunktionen um. |
| Einschalten / Ausschalten <br/> [**Touchscreen-Sperre**](../map/interact-with-map.md#touch-screen-lock) | Aktiviert oder deaktiviert die Touchscreen-Sperre, um unbeabsichtigte Bildschirminteraktionen zu vermeiden. |


### Karteninteraktionen {#map-interactions}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Karte <br/> [**Vergrößern**](../map/interact-with-map.md) | Vergrößern der Karte bei gleichzeitiger Erhöhung der angezeigten Datenmenge. |
| Karte <br/> [**Verkleinern**](../map/interact-with-map.md) | Verkleinern der Karte. Dies ist bequem in Verbindung mit dem [Entwickler-Widget - Zoomstufe](../widgets/info-widgets.md#developer-widgets) zu verwenden. |
| Verschieben <br/> [**Karte nach unten**](../map/interact-with-map.md) | Sie können die Schnellaktionstaste verwenden, um die Karte nach unten zu verschieben. |
| Verschieben <br/> [**Karte nach oben**](../map/interact-with-map.md) | Beim Antippen bewegt sich der Kartenbildschirm nach oben. |
| Verschieben <br/> [**Karte nach links**](../map/interact-with-map.md) | Wenn Sie die Schaltfläche antippen, bewegt sich der Kartenbildschirm nach links. |
| Verschieben <br/> [**Karte nach rechts**](../map/interact-with-map.md) | Mit einer Schnellaktionstaste können Sie die Karte nach rechts verschieben. |
| Verschieben <br/> [**Zu meinem Standort**](../map/interact-with-map.md#my-location-and-zoom) | Verschiebt die Karte an die Position *Mein Standort*. |


### Meine Orte {#my-places}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Starten / Pausieren <br/> [**Fahrtaufzeichnung**](../plugins/trip-recording.md#new-track-recording) | Starten Sie eine Aufzeichnungssitzung des aktuellen Tracks oder pausieren Sie, um vorübergehend anzuhalten, ohne die Fahrt abzuschließen. |
| Starten <br/> [**Neues Fahrtensegment**](../plugins/trip-recording.md#overview-screen) | Starten Sie ein neues Segment der Fahrt, ohne die gesamte Aufzeichnung zu unterbrechen. |
| Speichern <br/> [**Aufgezeichnete Fahrt & Fortsetzen**](../plugins/trip-recording.md#current-track-recording) | Speichern Sie die aktuelle Fahrtaufzeichnung und setzen Sie die Aufzeichnung ohne Unterbrechung fort. |
| Beenden <br/> [**Fahrtaufzeichnung**](../plugins/trip-recording.md#current-track-recording) | Beenden Sie die aktuelle Fahrtaufzeichnungssitzung. |
| Hinzufügen <br/> [**Favorit**](../map/configure-map-menu.md#map-layers) | Fügt einen Favoriten zum ausgewählten (zentralen) Kartenstandort hinzu. <br /> - *Einen Zwischen-Dialog anzeigen*. Zeigt einen Bestätigungsdialog an. <br /> - *Gruppe*. Fügt einen Favoriten zur ausgewählten Gruppe hinzu. <br /> - *Farbe*. Fügt einen Favoriten mit einer vorgewählten Farbe hinzu <br /> - *Name*. Fügt einen Favoriten mit dem angegebenen Namenspräfix hinzu. |
| Hinzufügen <br/> [**Track-Wegpunkt**](../map/point-layers-on-map.md#track-waypoints) | Fügt einen neuen Track-Wegpunkt zum [aktuell aufgezeichneten Track](../plugins/trip-recording.md) oder [jedem Track in Meine Orte](../personal/tracks/manage-tracks.md) hinzu. <br /> - *Einen Zwischen-Dialog anzeigen*. Zeigt einen Bestätigungsdialog an. <br /> - *Gruppe*. Fügt einen Favoriten zur ausgewählten Gruppe hinzu. <br /> - *Farbe*. Fügt einen Favoriten mit einer vorgewählten Farbe hinzu <br /> - *Name*. Fügt einen Favoriten mit dem angegebenen Namenspräfix hinzu. |
| Hinzufügen <br/> [**Kartenmarkierung**](../map/configure-map-menu.md#map-layers) | Fügt eine Markierung an einem ausgewählten (zentralen) Kartenstandort hinzu. |
| Hinzufügen <br/> [**Parkplatz**](../plugins/parking.md) | Fügt einen Parkplatz an einem ausgewählten (zentralen) Kartenstandort hinzu. Die alte Parkposition wird gelöscht. |
| Hinzufügen <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Fügt einen POI an einem ausgewählten (zentralen) Kartenstandort hinzu (wie Kontextmenüaktion). <br /> - *Einen Zwischen-Dialog anzeigen*. Zeigt einen Bestätigungsdialog an. <br /> - *POI-Typ* (optional). Wählt den OSM-POI-Typ vor. <br /> - *Tag/Wert* (mehrere). Fügt [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features)-Tags / -Werte hinzu |
| Hinzufügen <br/> [**OSM-Notiz**](../plugins/osm-editing.md#create--modify-osm-note) | Fügt eine [OSM-Notiz](https://wiki.openstreetmap.org/wiki/Notes) hinzu <br /> - *Einen Zwischen-Dialog anzeigen*. Zeigt einen Bestätigungsdialog an. <br /> - *Nachricht*. Fügt eine Standardnachricht zur Notiz hinzu. |
| Hinzufügen <br/> [**Mediennotizen**](../plugins/audio-video-notes.md) | Startet die Audio-/Foto-/Video-Notizaufnahme für einen ausgewählten (zentralen) Kartenstandort. |
| Erstellen <br/> [**Neue Route**](../plan-route/create-route.md) <br /> *Nur Android* | Öffnet das Tool [Route planen](../plan-route/create-route.md) und erstellt eine Route für den ausgewählten (zentralen) Standort auf der Karte. |


### Navigation {#navigation}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Hinzufügen <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | Sie können die Mitte des Kartenbildschirms als ersten Zwischenpunkt auswählen. Das vorherige Ziel bleibt gleich. |
| Einschalten / Ausschalten <br/> [**Sprachansagen**](../navigation/guidance/voice-navigation.md) | Stummschalten oder Aufheben der Stummschaltung der Sprachführung während der Navigation. |
| Festlegen <br/> [**Startpunkt**](../navigation/setup/route-navigation.md#set-destinations) | Markieren Sie einen ausgewählten (zentralen) Kartenstandort als Startpunkt. |
| Festlegen <br/> [**Ziel**](../navigation/setup/route-navigation.md#set-destinations) | Fügen Sie den ausgewählten (zentralen) Standort auf der Karte als Ziel hinzu. Das vorherige Ziel wird zum letzten Zwischenpunkt. |
| Ersetzen <br/> [**Ziel**](../navigation/setup/route-navigation.md#intermediate-destinations) | Festlegen / Ersetzen eines ausgewählten (zentralen) Kartenstandorts als Ziel. Das vorherige Ziel wird gelöscht. |
| Einschalten / Ausschalten <br/> [**Auto-Zoom Karte**](../map/interact-with-map.md) | Aktiviert oder deaktiviert den automatischen Kartenzoom während der Navigation. |
| Starten/Stoppen <br/> [**Navigation**](../navigation/setup/route-navigation.md#start--stop-navigation) | Navigation starten (wenn ein Zielpunkt vorhanden ist) oder Navigation stoppen. |
| Pausieren / Fortsetzen <br/> [**Navigation**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Navigation pausieren / fortsetzen. |
| Entfernen <br/> [**Nächster Zielpunkt**](../navigation/setup/route-navigation.md#intermediate-destinations) | Entfernt den nächsten Zwischenpunkt, falls vorhanden, andernfalls entfernt das Ziel und zeigt den Dialog zum Beenden der Navigation an. Die Aktion ist inaktiv, wenn Sie kein Ziel haben. |
| Simulieren <br/> [**Standort per GPX**](../plugins/development.md#gpx-track-simulation) | Simuliert den Standort und die Bewegung Ihres Geräts mithilfe eines GPX-Tracks. |


### Einstellungen {#settings}

| Aktion | Beschreibung |
|:-------------|:-------------|
| Ändern <br/> [**App-Profil**](../personal/profiles.md) | Erstellen Sie eine Liste von Anwendungsprofilen und durchlaufen Sie diese. <br /> - *Einen Zwischen-Dialog anzeigen*. Zeigt einen Dialog mit einer Liste von Profilen an. <br /> - *Keinen Zwischen-Dialog anzeigen*. Die Profile ändern sich in einer definierten Reihenfolge. <br /> - *Hinweis*. Sie können eine einzelne Aktion anpassen, die es Ihnen ermöglicht, zwischen mehreren Profilen zu wechseln, oder mehrere separate Aktionen erstellen, jede für ein bestimmtes Profil. |
| Ändern <br/> [**App-Profil zum nächsten**](../personal/profiles.md) | Wechselt zum nächsten Profil in der Liste. |
| Ändern <br/> [**App-Profil zum vorherigen**](../personal/profiles.md) | Wechselt zum vorherigen Profil in der Liste. |
| Ändern <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Nur Android* | Ermöglicht die Einstellung der Platzierung des *Mein Standort*-Cursors auf der Karte. Aktiviert oder deaktiviert, dass der Cursor immer in der Mitte des Bildschirms ist. |
| Ändern <br/> [**Standortposition auf dem Bildschirm**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Nur iOS* | Ermöglicht das Aktivieren oder Deaktivieren der Anzeige der zuvor ausgewählten Position des "Mein Standort"-Cursors auf der Karte. |


## Tastatur für Aktionen verwenden {#use-keyboard-for-actions}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Externe Geräte](@site/static/img/map/external_custom_2_andr.png)

Mit der Funktionalität des Schnellaktions-Tools können Sie die erforderlichen Aktionen den Tasten Ihres externen Eingabegeräts zuweisen. Eine Beschreibung finden Sie im Artikel [Interaktion mit der Karte](../map/interact-with-map.md#custom-input-device-type).


## Verwandte Artikel {#related-articles}

- [Bildschirm konfigurieren](./configure-screen.md)
- [Karten-Schaltflächen](./map-buttons.md)
- [Informations-Widgets](./info-widgets.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Radius-Lineal und Lineal](./radius-ruler.md)
- [Marker-Widgets](./markers.md)

> *Zuletzt aktualisiert: April 2025*