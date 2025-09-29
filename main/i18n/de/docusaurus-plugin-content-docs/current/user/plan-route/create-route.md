---
source-hash: c35887f39fe22b467071b197cd38e3d121d7a79da3a78f76da7f0093e1edc604
sidebar_position: 1
title:  Eine Route planen
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



## Übersicht {#overview}

Das Werkzeug **Eine Route planen** (*Menü → Eine Route planen*) ist eine leistungsstarke Funktion der OsmAnd-Anwendung, mit der Sie [neue Routen erstellen](#create-new-route) als GPX-Tracks, bereits gespeicherte Tracks [bearbeiten und neue Segmente hinzufügen](#segments), [Entfernungen auf der Karte messen](#distance-measurement) und Track-[Segmente an die nächstgelegene verfügbare Straße anheften](#attach-track-to-roads) können, indem Sie verschiedene Navigationsprofile verwenden. Die Funktion ist für den *Offline-Modus* konzipiert.

Eine Route besteht aus einer Reihe von Segmenten zwischen bestimmten Punkten. Die Segmente können gerade Linien oder an das ausgewählte Profil angepasste Routen sein. Die Route kann als GPX-Datei gespeichert werden, um sie später zu importieren, zu bearbeiten und zur [Navigation](../navigation/setup/gpx-navigation.md) zu verwenden.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## Hauptanwendungsfälle {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Route planen Android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Route planen iOS](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Neue Route erstellen {#create-new-route}

Um einen neuen Track im GPX-Format zu erstellen, verwenden Sie die Hauptfunktion des Werkzeugs *Eine Route planen*. Das Vorerstellen einer Route hat viele Vorteile im Gegensatz zur Aufzeichnung des aktuellen Tracks mit dem *[Plugin für Reiseaufzeichnung](../plugins/trip-recording.md)*. Sie können der Route beliebig viele Punkte [hinzufügen](#adding-points), sie [löschen und verschieben](#point-context-menu), Routentypen nach [Segmenten](#route-between-points) ändern und [detaillierte Informationen über die Route](#graph) erhalten.  

Standardmäßig entspricht der Routing-Typ dem zuvor ausgewählten Profil. Tippen Sie auf das Routing-Symbol, um auszuwählen, wie die Anwendung das Segment zur Verbindung der Punkte berechnen soll. Das verfügbare Profil sollte [separat](../navigation/routing/osmand-routing.md#routing-types) konfiguriert werden.  

Sie können **hinein- und herauszoomen**, um die Platzierung von Punkten beim Erstellen oder Bearbeiten eines Tracks zu erleichtern. Wenn Sie **herauszoomen**, werden die Punkte auf dem Track unsichtbar, um eine bessere Sicht auf die gesamte Länge des Tracks und die Karte als Ganzes zu ermöglichen. Nur der zuletzt hinzugefügte Punkt und der Zeiger zum Hinzufügen des nächsten Punktes bleiben sichtbar.


### Bestehenden GPX-Track ändern {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

Das Werkzeug *Eine Route planen* ermöglicht die Änderung eines bestehenden GPX-Tracks sowie eines [importierten Tracks](../personal/tracks/manage-tracks.md#import). Wenn Sie jedoch eine große Anzahl von Punkten aufgrund allgemeiner Kriterien ausschließen müssen, könnte [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) ein geeigneteres Werkzeug sein.


### Entfernungsmessung {#distance-measurement}

![Route planen Android](@site/static/img/plan-route/plan_route_lines_andr.png)  

*Eine Route planen* ist eine schnelle und einfache Möglichkeit, die Entfernung zwischen Punkten zu messen.

- Wählen Sie die Methode *Gerade Linie* für die Routenplanung. Zwischen den Punkten wird eine gestrichelte Linie gezeichnet.
- [Fügen Sie den ersten Punkt](#adding-points) auf der Karte hinzu, von dem aus die Linie gezeichnet wird.
- Verschieben Sie die Karte, um die Entfernung und den Azimut zu bestimmen. Die Informationen werden in einem Feld mit einer Liste von Punkten unterhalb der Karte angezeigt.

:::note
Die *Gerade Linie* wird für Gebiete benötigt und verwendet, die nicht von Routing-Daten abgedeckt sind, wie z. B. Offroad- und Off-Track-Bereiche.
:::


### Höhendaten abrufen {#get-elevation-data}

<InfoAndroidOnly />

![Route planen Android](@site/static/img/plan-route/plan_route_graph_4_andr.png)  

Wenn [Höhendaten](../map/tracks/track-context-menu.md#calculate-missing-elevation) in einem bestehenden Track fehlen, können sie mit den folgenden Werkzeugen hinzugefügt werden:

- [Nahegelegene Straßen verwenden](#attach-track-to-roads). Dieser Modus verwendet Offline-Karten, um die nächstgelegenen Straßen zum Erstellen eines Tracks zu finden, sodass Höhendaten von den angehängten Straßen abgerufen werden. Die Geometrie des Tracks kann angepasst werden.  
- [Geländekarten verwenden](../map/tracks/track-context-menu.md#calculate-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) Dieser Modus berechnet die Höhe basierend auf Geländekartendaten (3D). Der Unterschied zwischen den von Ihrem Gerät aufgezeichneten Höhen kann zur Höhenkorrektur verwendet werden. Die Geometrie des Tracks bleibt unverändert.


### Track an Straßen anheften {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route planen an Straße anheften Android](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen an Straße anheften iOS](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>  

Die Einstellung **An die Straßen anheften** ermöglicht es, einen aufgezeichneten oder importierten Track an die Straßen aus den Offline-Karten von OsmAnd anzuheften, um zusätzliche Informationen zu erhalten:

- Korrekte Abbiegeinformationen für die [Navigation entlang eines Tracks](../navigation/setup/gpx-navigation.md#follow-track-options) (insbesondere an Kreisverkehren).
- Straßennamen und Fahrspurinformationen.
- Höhendaten.
- [Straßenattribute](../navigation/setup/route-details.md#road-attributes).

Sie können einen [Schwellenwert](../navigation/setup/gpx-navigation.md#attach-to-the-roads) für die Entfernung festlegen, die vereinfachte Trackpunkte von den ursprünglichen Trackpunkten haben dürfen.

:::note Symbol für unspezifiziertes Profil
Wenn Sie einen Track auswählen und das ***unspezifizierte*** Profilsymbol ("?") neben dem *Einstellungen*-Symbol angezeigt wird, tippen Sie darauf, um auszuwählen, ob der Track an Straßen angeheftet oder die Punkte nur mit einer geraden Linie verbunden und als aufgezeichneter Track behandelt werden sollen.
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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>  

Um eine Entfernung zu messen oder eine Reise zu planen, fügen Sie nacheinander Punkte an der *Zeiger*-Position hinzu und tippen Sie auf die Schaltfläche *Punkt hinzufügen*. Über die **Punkteliste** unten können Sie Punkte neu anordnen, löschen oder auf ein spezifisches [Punkt-Kontextmenü](#point-context-menu) zugreifen.

:::note
Sie können auch jede Aktion, die Sie bei der Routenplanung durchgeführt haben, **rückgängig machen**/**wiederholen**.
:::
  
### Route zwischen Punkten {#route-between-points}

Hinzugefügte Punkte im Editor können als gerade Linie oder als Route zwischen Punkten eines ausgewählten Profils verbunden werden. Auf *Route zwischen Punkten* kann auf verschiedene Weisen zugegriffen werden:

1. Über das Menü *Optionen* *→* *Route zwischen Punkten*.
2. Tippen Sie auf das *Profilsymbol* in der unteren linken Ecke des Kartenbildschirms. Nicht auf das obere Symbol, das öffnet das Menü "Karte konfigurieren".
3. Im *[Punkt-Kontextmenü](#point-context-menu) → Routentyp davor/danach ändern*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Route planen Android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Route planen iOS](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

Sie können die Route zwischen 2 bestimmten Punkten oder zwischen mehreren Punkten ändern:

- *Gesamter Track*. Der gesamte Track wird mit dem ausgewählten Profil neu berechnet.
- *Nächstes Segment*. Nur das nächste Segment wird mit dem ausgewählten Profil neu berechnet.  
- *Routentyp vor/nach Punkt ändern*. Im *Punkt-Kontextmenü* können Sie die Art der Routenberechnung für den Abschnitt von diesem Punkt zum nächsten oder zum Endpunkt ändern. Die Einstellung liefert Informationen über die Entfernung von diesem Punkt zum Anfang oder Ende der Route oder zum nächsten/vorherigen Punkt.
- *Routen neu berechnen*. Sie können die Routenneuberechnung verwenden, ohne den Profiltyp zu ändern. Das im Werkzeug auf der geplanten Route angezeigte Profilsymbol ändert sich nicht, aber der Routentyp entspricht dem ausgewählten. Dies kann nützlich sein, um alternative Routen zu finden.  

### Segmente {#segments}

Ein Track-Segment ist eine Sammlung von Punkten, die ohne **Lücken** verbunden sind. Im Werkzeug "Eine Route planen" ist es möglich:

- Segmente zusammenführen: Die Option [Segmente verbinden](#point-context-menu) entfernt die Lücke zu zuvor getrennten Segmenten.
- Neue, unverbundene Abschnitte eines Tracks aufzuteilen oder zu erstellen. Um einen zu erstellen, verwenden Sie die Option [Neues Segment starten](#point-context-menu) oder wählen Sie die Funktion [Teilen](#point-context-menu) aus dem Punkt-Kontextmenü.

### Punkt-Kontextmenü {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

Jeder Punkt auf Ihrer Route hat sein eigenes Kontextmenü. Es zeigt die *Sequenznummer* des Punktes, die *Entfernung vom Start der Route*, die Funktion zum Verschieben auf der Karte und zum Entfernen sowie eine Reihe von Aktionen mit den Routenabschnitten vor und nach diesem Punkt. Zum Bearbeiten tippen Sie auf den gewünschten Punkt in der [Liste der Punkte](#adding-points) oder direkt auf der Karte.

- ***Informationen über den Punkt***. Die Anzahl der Punkte in der Liste. Die Entfernung zum ersten Punkt basiert auf dem eingestellten Routing-Typ; die Entfernung kann sich bei einer Neuberechnung auf einen neuen Typ ändern, wenn der Parameter *Route zwischen Punkten* geändert wird.  

- ***<Translate ios="true" ids="move_point"/>***. Ermöglicht es Ihnen, die Position eines Punktes auf der Karte zu ändern. Verschieben Sie die Karte mit Gesten, um die Position des Punktes zu ändern. Der Punktindikator befindet sich in der Mitte des sichtbaren Teils der Karte.  

- ***<Translate ios="true" ids="add_point_after"/>***. Verschieben Sie die Karte, um einen Punkt nach dem ausgewählten Punkt hinzuzufügen. Sie können so viele Punkte wie nötig hinzufügen, bis Sie auf Abbrechen oder Anwenden tippen.  

- ***<Translate ios="true" ids="add_point_before"/>***. Verschieben Sie die Karte, um so viele Punkte wie nötig nach dem ausgewählten Punkt auf dem Segment zwischen diesem Punkt und dem nächsten hinzuzufügen.  

- ***<Translate ios="true" ids="trim_before"/>***. Sie können den gesamten Abschnitt der Route, Punkte und Segmente, von ihrem Start bis zum ausgewählten Punkt kürzen. Die zu kürzende Entfernung wird unter dem Optionsnamen angezeigt.  

- ***<Translate ios="true" ids="trim_after"/>***. Sie können eine Route, Punkte und Segmente vom letzten hinzugefügten Punkt bis zum ausgewählten Punkt kürzen. Die zu kürzende Entfernung wird unter dem Optionsnamen angezeigt.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Ermöglicht es, die Route vor dem ausgewählten Punkt in separate, unverbundene Segmente aufzuteilen.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Ermöglicht es, die Route nach dem ausgewählten Punkt in separate, unverbundene Segmente aufzuteilen.  

- ***<Translate ios="true" ids="join_segments"/>***. Der letzte Punkt auf einem der geteilten Segmente und der nächste in der Liste der Punkte auf dem anderen Segment haben diese Verbindungseinstellung.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. Sie können den für ein verfügbares Profil konfigurierten Routing-Typ zwischen Punkten auf dem vorherigen Segment oder für alle Segmente vom Start der Route bis zum ausgewählten Punkt ändern.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. Sie können den Routing-Typ zwischen Punkten auf dem nächsten Segment oder für alle Segmente vom ausgewählten Punkt bis zum letzten hinzugefügten Punkt ändern.  

- ***<Translate ios="true" ids="delete_point"/>***. Entfernt den ausgewählten Punkt von der Route. Ähnlich wie das Löschen eines Punktes in einer Liste.

### Multimodale Routen {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route planen Android-Routenlinie](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS-Bildschirm](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

Mit dem Werkzeug *Eine Route planen* und der Option [Route zwischen Punkten](#route-between-points) können Sie multimodale Routen erstellen, bei denen zum Beispiel der erste Teil eine *Fahrradroute*, der zweite Teil eine *gerade Linie* und dann eine *Fußgängerroute* sein kann. Beachten Sie, dass die Navigation auf multimodalen Routen nicht verfügbar ist. Sie müssen also eines der am besten geeigneten Profile auswählen, um den Abbiegehinweisen folgen zu können.


## Editor {#editor}

### Route speichern {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  


Nachdem Sie [mindestens einen Punkt](#adding-points) zur Karte hinzugefügt haben, können Sie die Speicheroption verwenden. Alle in *Eine Route planen* gespeicherten Tracks finden Sie im Hauptmenü *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.  

Es gibt vier Möglichkeiten zum Speichern:

- ***Schnellspeichern***. Die obere rechte Schaltfläche ***Fertig*** / ***Speichern*** (für bestehende Tracks) ermöglicht das schnelle Speichern von Änderungen und das Verlassen des Werkzeugs *Eine Route planen*. Der Name wird basierend auf dem aktuellen Datum generiert.
- ***Änderungen speichern*** im [Optionsmenü](#options) ermöglicht es Ihnen, Änderungen in einer Datei zu speichern und die Routenplanung fortzusetzen.
- ***Als neuen Track speichern*** im [Optionsmenü](#options) öffnet einen Dialog, in dem Sie den Namen des Tracks und den Ordner angeben, in dem die Route gespeichert wird.
- ***Änderungen zu einem Track hinzufügen***. Hängt einen erstellten Track als [separates Segment](#segments) an einen anderen bestehenden Track an. Änderungen an einem ausgewählten Track können *nicht rückgängig gemacht werden*.

:::note Option Vereinfachter Track
Beim Speichern eines neuen Tracks können Sie die Option ***Vereinfachter*** Track auswählen, um den Track mit anderen Drittanbieter-Anwendungen kompatibel zu machen. Technisch gesehen wird der Track ohne Routenanweisungen als rein geometrischer Track gespeichert.
:::

### Optionen {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route planen Android-Optionen](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS-Optionen](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Zeigt das ausgewählte Anwendungsprofil an (Standard ist eine gerade Linie). Das Tippen auf diese Aktion ist dasselbe wie das Tippen auf die Schaltfläche *Profil*, die das [Profilmenü](../personal/profiles.md) der Anwendung öffnet.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) oder **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Zeichnet neue Routensegmente, die nicht mit dem vorherigen Segment verbunden sind.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). Wenn es sich um einen neuen Track ohne Verknüpfung zu einem bestehenden handelt, öffnet sich das Menü *Als neuen Track speichern*. Wenn Sie neue Segmente zu einem geöffneten oder importierten Track hinzufügen, erscheint die Benachrichtigung über das Speichern der GPS-Datei im Speicher, danach können Sie mit der Erstellung des nächsten Segments fortfahren.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Speichert Ihre Route als GPX-Track.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Fügen Sie Ihre Route zu einem Track aus Ihrem Track-Ordner hinzu und speichern Sie den neuen Track.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Startet die Navigation von Ihrer Position zum Zielpunkt unter Verwendung einer gezeichneten Route.
- **<Translate android="true" ids="reverse_route"/>**. Sie tauschen den *Startpunkt* der Route und den zuletzt hinzugefügten Punkt. Die Einstellungen der Routensegmente ändern sich nicht, wenn die Umkehrung angewendet wird.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Erstellt eine ungefähre Route. Jeder Punkt auf dem Track wird der nächstgelegenen erlaubten Straße auf der Karte entsprechend dem ausgewählten Profil und der Schwellenentfernung zugeordnet.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (nur Android). Sie können Routenpunkte herausfiltern, die nicht dem ausgewählten Routing-Typ entsprechen, unnötige Daten löschen oder ungenaue Daten korrigieren. Der GPS-Filter funktioniert nur, wenn der Routing-Typ als *Gerade Linie* angegeben ist. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*nur Android*). Diese Option wird nur im Menü angezeigt, wenn keine Höhendaten verfügbar sind. Mit dieser [Option](#get-elevation-data) können Sie die Höhe mithilfe von *Geländekartendaten* berechnen oder Daten aus heruntergeladenen Karten verwenden, um die *nahegelegenen Straßen* zu finden.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Es archiviert vollständig alle Ihre Aktionen. Auf der Karte bleibt ein "Artefakt" zurück - die gepunkteten Linien der gerade gelöschten Route. Es verschwindet beim nächsten Hinzufügen neuer Punkte. Sie können die Funktion "Alles löschen" mit der Schaltfläche "Aktion zurück" abbrechen. Die Funktion hat keinen Einfluss auf die unveränderten Teile der im Werkzeug geöffneten Routen.

### Grafik {#graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/plan-route/plan_route_graph_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen an Straße anheften iOS](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Während der Routenplanung zeigt die [Grafik](../navigation/setup/route-details.md#elevation-graph) Informationen zur Routenhöhe und zum Steigungsprozentsatz an. Außerdem können Sie auf eine beliebige Stelle in der Grafik tippen, um einen Zeiger mit bestimmten Daten anzuzeigen.  

- Für **Android** wird die Grafik im Tab *Grafik* angezeigt, wenn ein Track erstellt oder geöffnet wird, und bei der [Navigation](../navigation/setup/gpx-navigation.md) mit *Eine Route planen*.
- Für **iOS** ist die Grafik nur über das Menü *[Optionen](#options) → Navigation* verfügbar.

Bei der Berechnung einer Route für die Navigation in *Eine Route planen* können Sie zusätzliche Track-Informationen wie [Höheninformationen](../navigation/setup/route-details.md#elevation-info) und [Straßenattribute](../navigation/setup/route-details.md#road-attributes) abrufen und das Werkzeug [Auf Karte analysieren](../navigation/setup/route-details.md#analyze-on-map) verwenden. Tippen Sie auf die Schaltfläche *Details* unterhalb der Grafik.  


## Verwandte Artikel {#related-articles}

- [Track auf Karte anzeigen](../map/tracks/index.md)
- [Auf Karte analysieren](../map/tracks/index.md#analyze-track-on-map)
- [Track-Kontextmenü](../map/tracks/track-context-menu.md)
- [Navigation entlang eines Tracks](../navigation/setup/gpx-navigation.md)
- [Reiseaufzeichnung](../plugins/trip-recording.md)