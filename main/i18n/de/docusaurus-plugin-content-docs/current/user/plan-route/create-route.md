---
source-hash: fb9912804ef2b1009e063e1cb1e5c8220b279d2fee5b64bf122b770e595651c9
sidebar_position: 1
title:  Route planen
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Überblick {#overview}

Das Werkzeug **Route planen** (*Menü → Route planen*) ist eine leistungsstarke Funktion der OsmAnd-Anwendung, mit der Sie [neue Routen erstellen](#create-new-route) (als GPX-Tracks), [vorhandene Tracks bearbeiten und neue Segmente hinzufügen](#segments), [Distanzen auf der Karte messen](#distance-measurement) und Track-[Segmente an die nächstgelegene Straße anpassen](#attach-track-to-roads) können, wobei verschiedene Navigationsprofile verwendet werden. Die Funktion ist für den Betrieb im *Offline-Modus* konzipiert.

Eine Route besteht aus einer Reihe von Segmenten zwischen bestimmten Punkten. Die Segmente können gerade Linien oder an das ausgewählte Profil angepasste Routen sein. Die Route kann als GPX-Datei zur späteren Verwendung, Bearbeitung und [Navigation](../navigation/setup/gpx-navigation.md) gespeichert werden.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## Hauptanwendungsfälle {#main-use-cases}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Route planen Android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Route planen iOS](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Neue Route erstellen {#create-new-route}

Um einen neuen Track im GPX-Format zu erstellen, verwenden Sie die Hauptfunktion des Werkzeugs *Route planen*. Das Vorab-Erstellen einer Route hat viele Vorteile, im Gegensatz zur Aufzeichnung des aktuellen Tracks mit dem *[Trip Recording Plugin](../plugins/trip-recording.md)*. Sie können beliebig viele Punkte zur Route [hinzufügen](#adding-points), diese [löschen und verschieben](#point-context-menu), Routentypen nach [Segmenten](#route-between-points) ändern und [detaillierte Informationen zur Route](#graph) erhalten.

Standardmäßig entspricht der Routing-Typ dem zuvor ausgewählten Profil. Tippen Sie auf das Routing-Symbol, um auszuwählen, wie die Anwendung das Segment zur Verbindung von Punkten berechnen soll. Das verfügbare Profil sollte [separat konfiguriert](../navigation/routing/osmand-routing.md#routing-types) werden.

Sie können zum einfachen Platzieren von Punkten beim Erstellen oder Bearbeiten eines Tracks **zoomen**. Beim **Herauszoomen** werden die Punkte auf dem Track unsichtbar, um eine bessere Übersicht über die gesamte Länge des Tracks und die Karte als Ganzes zu erhalten. Nur der zuletzt hinzugefügte Punkt und der Zeiger zum Hinzufügen des nächsten Punkts bleiben sichtbar.


### Vorhandenen GPX-Track ändern {#modify-existing-gpx-track}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>

Das Werkzeug *Route planen* ermöglicht die Änderung eines vorhandenen GPX-Tracks sowie eines [importierten Tracks](../personal/tracks/manage-tracks.md#import). Wenn Sie jedoch eine große Anzahl von Punkten basierend auf generischen Kriterien ausschließen müssen, ist der [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) möglicherweise ein geeigneteres Werkzeug.


### Distanzmessung {#distance-measurement}

![Route planen Android](@site/static/img/plan-route/plan_route_lines_andr.png)

*Route planen* ist eine schnelle und einfache Möglichkeit, die Entfernung zwischen Punkten zu messen.

- Wählen Sie die Methode *Gerade Linie* für die Routenplanung. Zwischen den Punkten wird eine gestrichelte Linie gezeichnet.
- [Fügen Sie](#adding-points) den ersten Punkt auf der Karte hinzu, von dem die Linie gezeichnet werden soll.
- Bewegen Sie die Karte, um die Entfernung und den Azimut zu bestimmen. Die Informationen werden in einem Feld mit einer Liste von Punkten unter der Karte angezeigt.

:::note
Die *Gerade Linie* wird für Bereiche benötigt und verwendet, die nicht von Routing-Daten abgedeckt sind, z. B. Off-Road- und Off-Track-Bereiche.
:::


### Höhendaten abrufen {#get-elevation-data}

<InfoAndroidOnly />

![Route planen Android](@site/static/img/plan-route/plan_route_graph_4_andr.png)

Wenn in einem vorhandenen Track [Höhendaten](../map/tracks/track-context-menu.md#calculating-missing-elevation) fehlen, können diese mit den folgenden Werkzeugen hinzugefügt werden:

- [Straßen in der Nähe verwenden](#attach-track-to-roads). Dieser Modus verwendet Offline-Karten, um die nächstgelegenen Straßen zum Aufbau eines Tracks zu finden, sodass Höhendaten von den angepassten Straßen abgerufen werden. Die Geometrie des Tracks kann angepasst werden.
- [Geländekarten verwenden](../map/tracks/track-context-menu.md#calculating-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) Der Modus berechnet die Höhe basierend auf Geländekartendaten (3D). Die Differenz zwischen den von Ihrem Gerät aufgezeichneten Höhen kann zur Höhenkorrektur verwendet werden. Die Geometrie des Tracks bleibt unverändert.


### Track an Straßen anpassen {#attach-track-to-roads}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route planen an Straßen anpassen iOS](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen an Straßen anpassen iOS](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Die Einstellung **An Straßen anpassen** ermöglicht das Anpassen eines aufgezeichneten oder importierten Tracks an die Straßen aus OsmAnd Offline-Karten, um zusätzliche Informationen zu erhalten:

- Korrekte Abbiegeinformationen für [Navigation nach Track](../navigation/setup/gpx-navigation.md#how-to-follow-the-track) (insbesondere an Kreisverkehren).
- Straßennamen und Fahrspurinformationen.
- Höhendaten.
- [Straßenattribute](../navigation/setup/route-details.md#road-attributes).

Sie können einen [Schwellenwert](../navigation/setup/gpx-navigation.md#attach-to-the-roads) für die Entfernung auswählen, die vereinfachte Trackpunkte vom ursprünglichen Trackpunkten haben dürfen.

:::note Symbol für nicht spezifiziertes Profil
Wenn Sie einen Track auswählen und das Symbol für das ***nicht spezifizierte*** Profil ("?") neben dem ***Einstellungen***-Symbol angezeigt wird, tippen Sie darauf, um auszuwählen, ob der Track an Straßen angepasst oder nur die Punkte mit einer geraden Linie verbunden und als aufgezeichneter Track behandelt werden sollen.
:::

<!--
### Add Route Points to Navigation from GPX {#add-route-points-to-navigation-from-gpx}

If you import a GPX file containing a route (with `<rtept>` elements), OsmAnd will display the route on the map but will not automatically convert the route points into a turn-by-turn navigation list.

To generate navigation instructions:

1. Open the GPX file from *My Places → Tracks*.
2. Tap the track to open it.
3. Tap the point menu (⋮) and choose **Add to Navigation**.
4. OsmAnd will convert the route points into a full navigation route with instructions.

> **NOTE:** *You may still use [Attach to roads](#attach-track-to-roads) to adjust geometry before converting to navigation.*
-->


## Punkte & Segmente {#points--segments}

### Punkte hinzufügen {#adding-points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>

Um eine Entfernung zu messen oder eine Reise zu planen, fügen Sie nacheinander Punkte am Standort des *Zeigers* hinzu und tippen Sie auf die Schaltfläche *Punkt hinzufügen*. Durch Zugriff auf die **Punktliste** unten können Sie Punkte neu anordnen, löschen oder auf ein bestimmtes [Punktkontextmenü](#point-context-menu) zugreifen.

:::note
Sie können auch jede Aktion, die Sie in der Routenplanung vorgenommen haben, **Rückgängig** machen/**Wiederherstellen**.
:::

### Route zwischen Punkten {#route-between-points}

Hinzugefügte Punkte im Editor können als gerade Linie oder als Route zwischen Punkten eines ausgewählten Profils verbunden werden. *Route zwischen Punkten* kann auf verschiedene Arten aufgerufen werden:

1. Aus dem Menü *Optionen* *→* *Route zwischen Punkten*.
2. Tippen Sie auf das *Profilsymbol* in der unteren linken Ecke des Kartenbildschirms. Nicht auf das Symbol oben, das öffnet das Menü "Karte konfigurieren".
3. Im *[Punktkontextmenü](#point-context-menu) → Routentyp vor/nach ändern*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Route planen Android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Route planen iOS](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

Sie können die Route zwischen 2 bestimmten Punkten oder zwischen mehreren Punkten ändern:

- *Ganzer Track*. Der gesamte Track wird mit dem ausgewählten Profil neu berechnet.
- *Nächstes Segment*. Nur das nächste Segment wird mit dem ausgewählten Profil neu berechnet.
- *Routentyp vor/nach Punkt ändern*. Im *Punktkontextmenü* können Sie die Art und Weise ändern, wie die Route für den Abschnitt von diesem Punkt zum nächsten oder zum Endpunkt berechnet wird. Die Einstellung liefert Informationen über die Entfernung von diesem Punkt zum Anfang oder Ende der Route oder zum nächsten/vorherigen Punkt.
- *Routen neu berechnen*. Sie können die Routenneuberechnung verwenden, ohne den Profiltyp zu ändern. Das auf der geplanten Route im Werkzeug angezeigte Profilsymbol ändert sich nicht, aber der Routentyp entspricht dem ausgewählten. Dies kann erforderlich sein, um alternative Routen zu finden.

### Segmente {#segments}

Ein Tracksegment ist eine Sammlung von Punkten, die ohne **Lücken** verbunden sind. Im Routenplanungswerkzeug ist es möglich:

- Segmente zusammenzuführen: Die Option [Segmente verbinden](#point-context-menu) entfernt die Lücke zu zuvor getrennten Segmenten.
- Neue, unverbundene Abschnitte eines Tracks aufzuteilen oder zu erstellen. Um einen zu erstellen, verwenden Sie die Option [Neues Segment starten](#point-context-menu) oder wählen Sie die Funktion [Teilen](#point-context-menu) aus dem Punktkontextmenü.

### Punktkontextmenü {#point-context-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

Jeder Punkt auf Ihrer Route hat sein Kontextmenü. Es zeigt die *Sequenznummer* des Punktes, die *Entfernung vom Start der Route*, die Funktion zum Verschieben auf der Karte und zum Entfernen sowie eine Reihe von Aktionen mit Abschnitten der Route vor und nach diesem Punkt. Zum Bearbeiten tippen Sie auf den gewünschten Punkt in der [Punktliste](#adding-points) oder direkt auf der Karte.

- ***Informationen zum Punkt***. Die Anzahl der Punkte in der Liste. Die Entfernung zum ersten Punkt basiert auf dem eingestellten Routing-Typ. Die Entfernung kann sich bei der Neuberechnung auf den neuen Typ ändern, wenn der Parameter *Route zwischen Punkten* geändert wird.

- ***<Translate ios="true" ids="move_point"/>***. Ermöglicht das Ändern der Position eines Punktes auf der Karte. Bewegen Sie die Karte mit Gesten, um den Standort des Punktes zu ändern. Der Punktindikator befindet sich in der Mitte des sichtbaren Teils der Karte.

- ***<Translate ios="true" ids="add_point_after"/>***. Bewegen Sie die Karte, um einen Punkt nach dem ausgewählten Punkt hinzuzufügen. Sie können beliebig viele Punkte hinzufügen, bis Sie Abbrechen oder Anwenden tippen.

- ***<Translate ios="true" ids="add_point_before"/>***. Bewegen Sie die Karte, um beliebig viele Punkte nach dem ausgewählten Punkt auf dem Segment zwischen diesem Punkt und dem nächsten hinzuzufügen.

- ***<Translate ios="true" ids="trim_before"/>***. Sie können den gesamten Routenabschnitt, Punkte und Segmente, von seinem Start bis zum ausgewählten Punkt kürzen. Die zu kürzende Entfernung wird unter dem Optionsnamen angezeigt.

- ***<Translate ios="true" ids="trim_after"/>***. Sie können eine Route, Punkte und Segmente vom zuletzt hinzugefügten Punkt bis zum ausgewählten Punkt kürzen. Die zu kürzende Entfernung wird unter dem Optionsnamen angezeigt.

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Ermöglicht das Aufteilen der Route vor dem ausgewählten Punkt in separate, unverbundene Segmente.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Ermöglicht das Aufteilen der Route nach dem ausgewählten Punkt in separate, unverbundene Segmente.

- ***<Translate ios="true" ids="join_segments"/>***. Der letzte Punkt auf einem der aufgeteilten Segmente und der nächste in der Punktliste auf dem anderen Segment haben diese Verbindungseinstellung.

- ***<Translate ios="true" ids="change_route_type_before"/>***. Sie können den für ein verfügbares Profil konfigurierten Routing-Typ zwischen Punkten auf dem vorherigen Segment oder für alle Segmente vom Start der Route bis zum ausgewählten Punkt ändern.

- ***<Translate ios="true" ids="change_route_type_after"/>***. Sie können den Routing-Typ zwischen Punkten auf dem nächsten Segment oder für alle Segmente vom ausgewählten Punkt bis zum zuletzt hinzugefügten Punkt ändern.

- ***<Translate ios="true" ids="delete_point"/>***. Entfernen Sie den ausgewählten Punkt aus der Route. Ähnlich wie das Löschen eines Punktes in einer Liste.

### Multimodale Routen {#multimodal-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route planen Android-Routenlinie](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS-Bildschirm](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

Mit dem Werkzeug *Route planen* und der Option [Route zwischen Punkten](#route-between-points) können Sie multimodale Routen erstellen, bei denen beispielsweise der erste Teil eine *Radfahrer*-Route, der zweite Teil eine *gerade Linie*-Route und dann eine *Fußgänger*-Route sein kann. Beachten Sie, dass die Navigation auf multimodalen Routen nicht verfügbar ist, daher müssen Sie eines der am besten geeigneten Profile auswählen, um den Abbiegeanweisungen folgen zu können.


## Editor {#editor}

### Route speichern {#save-route}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>

Nachdem Sie mindestens einen Punkt zur Karte [hinzugefügt](#adding-points) haben, können Sie die Speicheroption verwenden. Alle in *Route planen* gespeicherten Tracks finden Sie im Hauptmenü *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.

Es gibt vier Möglichkeiten zum Speichern:

- ***Schnellspeichern***. Die obere rechte Schaltfläche ***Fertig*** / ***Speichern*** (für vorhandene Tracks) ermöglicht das schnelle Speichern von Änderungen und das Verlassen des Werkzeugs *Route planen*. Der Name wird basierend auf dem aktuellen Datum generiert.
- ***Änderungen speichern*** im [Optionsmenü](#options) ermöglicht das Speichern von Änderungen in einer Datei und das Fortsetzen der Routenplanung.
- ***Als neuen Track speichern*** im [Optionsmenü](#options) öffnet einen Dialog, in dem Sie den Namen des Tracks und den Ordner angeben, in dem die Route gespeichert werden soll.
- ***Änderungen zu einem Track hinzufügen***. Fügt einen erstellten Track als [separates Segment](#segments) zu einem anderen vorhandenen Track hinzu. Änderungen an einem ausgewählten Track *können nicht rückgängig gemacht werden*.

:::note Option "Vereinfachter Track"
Beim Speichern eines neuen Tracks können Sie die Option ***Vereinfachter*** Track auswählen, um den Track mit anderen Drittanbieteranwendungen kompatibel zu machen. Technisch gesehen wird der Track ohne Routenanweisungen als rein geometrischer Track gespeichert.
:::

### Optionen {#options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route planen Android-Optionen](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS-Optionen](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Zeigt das ausgewählte Anwendungsprofil an (Standard ist eine gerade Linie). Das Tippen auf diese Aktion entspricht dem Tippen auf die Schaltfläche *Profil*, die das [Anwendungsprofilmenü](../personal/profiles.md) öffnet.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) oder **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Zeichnet neue Routensegmente, die nicht mit dem vorherigen Segment verbunden sind.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). Wenn es sich um einen neuen Track ohne Verknüpfung zu einem vorhandenen handelt, öffnet sich das Menü *Als neuen Track speichern*. Wenn Sie neue Segmente zu einem geöffneten oder importierten Track hinzufügen, erscheint die Benachrichtigung über das Speichern der GPS-Datei im Speicher, danach können Sie mit der Erstellung des nächsten Segments fortfahren.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Speichert Ihre Route als GPX-Track.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Fügt Ihre Route einem Track aus Ihrem Track-Ordner hinzu und speichert den neuen Track.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Startet die Navigation von Ihrer Position zum Endpunkt über eine gezeichnete Route.
- **<Translate android="true" ids="reverse_route"/>**. Sie tauschen den *Startpunkt* der Route und den zuletzt hinzugefügten Punkt. Die Routensegment-Einstellungen ändern sich beim Anwenden von Umkehren nicht.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Erstellt eine ungefähre Route. Jeder Punkt auf dem Track wird der nächstgelegenen erlaubten Straße auf der Karte gemäß dem ausgewählten Profil und der Schwellenentfernung zugeordnet.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (nur Android). Sie können Routenpunkte herausfiltern, die nicht dem ausgewählten Routing-Typ entsprechen, unnötige Daten löschen oder ungenaue Daten korrigieren. Der GPS-Filter funktioniert nur, wenn der Routing-Typ als *Gerade Linie* angegeben ist. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*nur Android*). Diese Option wird nur im Menü angezeigt, wenn keine Höhendaten verfügbar sind. Mit dieser [Option](#get-elevation-data) können Sie die Höhe mithilfe von *Geländekartendaten* berechnen oder Daten aus heruntergeladenen Karten verwenden, um die *Straßen in der Nähe* zu finden.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Es archiviert vollständig alle Ihre Aktionen. Ein "Artefakt" bleibt auf der Karte zurück - die gepunkteten Linien der gerade gelöschten Route. Es verschwindet beim nächsten Hinzufügen neuer Punkte. Sie können die Funktion "Alles löschen" mit der Schaltfläche "Aktion zurückkehren" abbrechen. Die Funktion hat keinen Einfluss auf die unveränderten Teile der im Werkzeug geöffneten Routen.

### Graph {#graph}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/plan-route/plan_route_graph_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen an Straßen anpassen iOS](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Während der Routenplanung zeigt der [Graph](../navigation/setup/route-details.md#elevation-graph) Informationen zur Routenhöhe und zum Steigungsprozentsatz an. Außerdem können Sie auf eine beliebige Stelle im Graph tippen, um einen Zeiger mit bestimmten Daten anzuzeigen.

- Für **Android** wird der Graph auf der Registerkarte *Graph* angezeigt, wenn ein Track erstellt oder geöffnet wird, und wenn [Navigation](../navigation/setup/gpx-navigation.md) über *Route planen* erfolgt.
- Für **iOS** ist der Graph nur über das Menü *[Optionen](#options) → Navigation* verfügbar.

Beim Berechnen einer Route für die Navigation in *Route planen* können Sie zusätzliche Trackinformationen wie [Höheninformationen](../navigation/setup/route-details.md#elevation-info) und [Straßenattribute](../navigation/setup/route-details.md#road-attributes) abrufen und das Werkzeug [Auf Karte analysieren](../navigation/setup/route-details.md#analyse-on-map) verwenden. Tippen Sie auf die Schaltfläche *Details* unter dem Graph.


## Verwandte Artikel {#related-articles}

- [Track auf Karte anzeigen](../map/tracks/index.md)
- [Auf Karte analysieren](../map/tracks/index.md#analyze-track-on-map)
- [Track Kontextmenü](../map/tracks/track-context-menu.md)
- [Navigation nach Track](../navigation/setup/gpx-navigation.md)
- [Trip Recording](../plugins/trip-recording.md)

> *Zuletzt aktualisiert: Mai 2025*