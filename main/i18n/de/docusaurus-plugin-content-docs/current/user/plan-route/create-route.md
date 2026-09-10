---
source-hash: cfeff8f8f57fbdb014fad35d6ada3afdf1bf6cd5443cc3e69f77460144202dd0
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

![Plan a route android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_overview_ios.webp)

</TabItem>

</Tabs>


## Hauptanwendungsfälle {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Plan a route android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Plan a route ios](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Neue Route erstellen {#create-new-route}

Um einen neuen Track im GPX-Format zu erstellen, verwenden Sie die Hauptfunktion des Werkzeugs *Eine Route planen*. Das Vorerstellen einer Route hat viele Vorteile im Gegensatz zur Aufzeichnung des aktuellen Tracks mit dem *[Plugin für Reiseaufzeichnung](../plugins/trip-recording.md)*. Sie können der Route beliebig viele Punkte [hinzufügen](#adding-points), sie [löschen und verschieben](#point-context-menu), Routentypen nach [Segmenten](#route-between-points) ändern und [detaillierte Informationen über die Route](#graph--analyze) erhalten.  

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_lines_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route iOS](@site/static/img/plan-route/plan_route_lines_ios.webp)

</TabItem>

</Tabs>  

*Eine Route planen* ist eine schnelle und einfache Möglichkeit, die Entfernung zwischen Punkten zu messen.

- Wählen Sie die Methode *Gerade Linie* für die Routenplanung. Zwischen den Punkten wird eine gestrichelte Linie gezeichnet.
- [Fügen Sie](#adding-points) den ersten Punkt auf der Karte hinzu, von dem aus die Linie gezeichnet wird.
- Verschieben Sie die Karte, um die Entfernung und den Azimut zu bestimmen. Die Informationen werden in einem Feld mit einer Liste von Punkten unterhalb der Karte angezeigt.

:::note
Die *Gerade Linie* wird für Gebiete benötigt und verwendet, die nicht von Routing-Daten abgedeckt sind, wie z. B. Offroad- und Off-Track-Bereiche.
:::


### Höhendaten abrufen {#get-elevation-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_graph_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route iOS](@site/static/img/plan-route/plan_route_graph_ios.webp)

</TabItem>

</Tabs> 

Wenn [Höhendaten](../map/tracks/track-context-menu.md#calculate-missing-elevation) in einem bestehenden Track fehlen, können sie mit den folgenden Werkzeugen hinzugefügt werden:

- [Nahegelegene Straßen verwenden](#attach-track-to-roads). Dieser Modus verwendet Offline-Karten, um die nächstgelegenen Straßen zum Erstellen eines Tracks zu finden, sodass Höhendaten von den angehängten Straßen abgerufen werden. Die Geometrie des Tracks kann angepasst werden.  
- [Geländekarten verwenden](../map/tracks/track-context-menu.md#calculate-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) Dieser Modus berechnet die Höhe basierend auf Geländekartendaten (3D). Der Unterschied zwischen den von Ihrem Gerät aufgezeichneten Höhen kann zur Höhenkorrektur verwendet werden. Die Geometrie des Tracks bleibt unverändert.

:::note

**Online-Höhenkorrektur** (serverbasiert) wurde in neueren OsmAnd-Versionen entfernt und ist nicht verfügbar.  
Für ältere Versionen war sie veraltet und unzuverlässig.  
Verwenden Sie stattdessen Offline-Optionen: An Straßen anheften oder Geländekarten (Pro).  

:::

### Track an Straßen anheften {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route snap-road-andr](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.webp) ![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios_2.webp)

</TabItem>

</Tabs>  

Die Einstellung **An die Straßen anheften** ermöglicht es, einen aufgezeichneten oder importierten Track an die Straßen aus den Offline-Karten von OsmAnd anzuheften, um zusätzliche Informationen zu erhalten:

- Korrekte Abbiegeinformationen für die [Navigation entlang eines Tracks](../navigation/setup/gpx-navigation.md#follow-track-options) (insbesondere an Kreisverkehren).
- Straßennamen und Fahrspurinformationen.
- Höhendaten.
- [Straßenattribute](../navigation/setup/route-details.md#road-attributes).
- Aktualisiertes Höhenprofil basierend auf der Straßen-Geometrie.
- Mögliche Neuberechnung der Track-Geometrie (Vereinfachung oder Anpassung der Punkte an das Straßennetz).

Wenn ein Track an Straßen angehängt wird, können die folgenden Parameter aufgrund der Neuberechnung der Geometrie und Höhe des Tracks geändert werden: *Entfernung, Aufstieg / Abstieg, Durchschnittsgeschwindigkeit (und das Geschwindigkeitsdiagramm), Höchstgeschwindigkeit, Zeit in Bewegung* und *Dauer*. Diese Werte können vom ursprünglichen GPX-Track abweichen, wenn die neuberechnete straßenbasierte Höhe oder Geometrie erheblich vom aufgezeichneten GPS-Daten abweicht.

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

![Plan a route android](@site/static/img/plan-route/plan_route_points_list_andr.png) ![Plan a route Favorites android](@site/static/img/plan-route/plan_route_favorites_and.png)

Um eine Entfernung zu messen oder eine Reise zu planen, fügen Sie nacheinander Punkte an der *Zeiger*-Position hinzu und tippen Sie auf die Schaltfläche *Hinzufügen*. Über die **Punkteliste** unten können Sie Punkte neu anordnen, löschen oder auf ein spezifisches [Punkt-Kontextmenü](#point-context-menu) zugreifen.

Sie können auch direkt von der Karte einen Zwischenpunkt hinzufügen, indem Sie auf einen POI oder Favoriten tippen, um sein Kontextmenü zu öffnen, und dann auf *PUNKT HINZUFÜGEN* tippen. In diesem Modus werden Kontextmenüs für Nicht-Punkt-Objekte nicht angezeigt. Beim Hinzufügen eines POI/Favoriten wird sein Name als Routenpunktname beibehalten; wenn Sie diesen Punkt später auf der Karte verschieben, wird der Name zurückgesetzt.

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_list_ios.webp)

Um eine Entfernung zu messen oder eine Reise zu planen, fügen Sie nacheinander Punkte an der *Zeiger*-Position hinzu und tippen Sie auf die Schaltfläche *Route +*. Über die **Punkteliste** unten können Sie Punkte neu anordnen, löschen oder auf ein spezifisches [Punkt-Kontextmenü](#point-context-menu) zugreifen.

</TabItem>

</Tabs>  

:::note
Sie können auch jede Aktion, die Sie bei der Routenplanung durchgeführt haben, **rückgängig machen**/**wiederholen**.
:::

### Wegpunkte hinzufügen (nur iOS) {#adding-waypoints}

![Plan a route ios](@site/static/img/plan-route/adding_poi_ios.webp) ![Plan a route ios](@site/static/img/plan-route/adding_poi_2_ios.webp)

Der POI-Tab ermöglicht das Hinzufügen und Verwalten von Wegpunkten während der Routenplanung.

Um einen Wegpunkt hinzuzufügen, wählen Sie einen Ort auf der Karte aus und tippen Sie auf die Schaltfläche *+ POI*. Der Wegpunkt-Bildschirm wird geöffnet, in dem Sie einen Namen, eine Beschreibung und eine Adresse eingeben, eine Gruppe auswählen und das Symbol, die Farbe und die Form anpassen können. Sie können eine vorhandene Gruppe auswählen oder auf *Gruppe hinzufügen* tippen, um eine neue zu erstellen.

Der POI-Tab zeigt hinzugefügte Punkte gruppiert nach Ordnern an. Jede Gruppe zeigt ihren Namen und die Anzahl der enthaltenen Punkte an. Für jede Gruppe tippen Sie auf das Drei-Punkte-Menü, um auf Gruppenaktionen zuzugreifen:
- **Umbenennen** — ändern Sie den Gruppennamen.
- **Aussehen ändern** — ändern Sie das Erscheinungsbild der Gruppe.
- **Sortieren** — ändern Sie die Reihenfolge der Punkte in der Gruppe.
- **Löschen** — löschen Sie die Gruppe.

Das Sortier-Menü bietet folgende Optionen: *Zuletzt geändert*, *Name A–Z*, *Name Z–A*, *Neuestes Datum zuerst* und *Ältestes Datum zuerst*.

Tippen Sie auf einen Punkt in einer Gruppe, um sein Kontextmenü zu öffnen. Sie können:
- **Bearbeiten** — öffnen Sie den Wegpunkt-Bearbeitungsbildschirm.
- **Löschen** — entfernen Sie den Punkt aus der Gruppe.
  
### Route zwischen Punkten {#route-between-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Plan a route android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

Hinzugefügte Punkte im Editor können als gerade Linie oder als Route zwischen Punkten eines ausgewählten Profils verbunden werden. Auf *Route zwischen Punkten* kann auf verschiedene Weisen zugegriffen werden:

1. Über das Menü *Optionen* *→* *Route zwischen Punkten*.
2. Tippen Sie auf das *Profilsymbol* in der unteren linken Ecke des Kartenbildschirms. Nicht auf das obere Symbol, das öffnet das Menü "Karte konfigurieren".
3. Im *[Punkt-Kontextmenü](#point-context-menu) → Routentyp davor/danach ändern*.  

Sie können die Route zwischen 2 bestimmten Punkten oder zwischen mehreren Punkten ändern:

- *Gesamter Track*. Der gesamte Track wird mit dem ausgewählten Profil neu berechnet.
- *Nächstes Segment*. Nur das nächste Segment wird mit dem ausgewählten Profil neu berechnet.  
- *Routentyp vor/nach Punkt ändern*. Im *Punkt-Kontextmenü* können Sie die Art der Routenberechnung für den Abschnitt von diesem Punkt zum nächsten oder zum Endpunkt ändern. Die Einstellung liefert Informationen über die Entfernung von diesem Punkt zum Anfang oder Ende der Route oder zum nächsten/vorherigen Punkt.
- *Routen neu berechnen*. Sie können die Routenneuberechnung verwenden, ohne den Profiltyp zu ändern. Das im Werkzeug auf der geplanten Route angezeigte Profilsymbol ändert sich nicht, aber der Routentyp entspricht dem ausgewählten. Dies kann nützlich sein, um alternative Routen zu finden.  

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/route_between_points_ios.webp) ![Plan a route ios](@site/static/img/plan-route/settings_tab_ios.webp)

Hinzugefügte Punkte können mit einer geraden Linie oder einer Route verbunden werden, die mit einem ausgewählten Routing-Profil berechnet wird. Das Menü *Route zwischen Punkten* ermöglicht es Ihnen, den Routing-Typ und die Einstellungen für Routensegmente und Abschnitte anzuzeigen und zu ändern.

Sie können *Route zwischen Punkten* öffnen, indem Sie auf die Schaltfläche *Route zwischen Punkten* tippen, die das Symbol des aktuell ausgewählten Routing-Profils anzeigt, oder über ein [Segment](#segments) oder Abschnittsmenü.

Im Tab *Routentyp* können Sie ein Routing-Profil für das ausgewählte Segment oder den Abschnitt auswählen. Gerade Linie ist als erste Option verfügbar, gefolgt von den verfügbaren Routing-Profilen.

Wenn eine Route nur einen Routing-Typ enthält, wird die einfache Ansicht *Route zwischen Punkten* angezeigt. Wenn eine Route mehrere Routing-Typen enthält, zeigt die komplexe Ansicht alle Segmente und Abschnitte an, sodass Sie auswählen können, welchen Teil der Route Sie ändern möchten.

Sie können auch:
- **Neues Segment starten** — erstellen Sie ein neues Segment und fahren Sie mit dem Hinzufügen von Routenpunkten fort. Das neue Segment verwendet denselben Routentyp wie das aktuelle.
- **Für gesamten Track ändern** — wählen Sie einen Routing-Typ aus, der auf den gesamten Track angewendet werden soll.

Im Tab *Einstellungen* können Sie vordefinierte Routing-Einstellungen für den ausgewählten Routentyp auswählen.

</TabItem>

</Tabs>


### Segmente {#segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ein Track-Segment ist eine Sammlung von Punkten, die ohne **Lücken** verbunden sind. Im Werkzeug "Eine Route planen" ist es möglich:

- Segmente zusammenführen: Die Option [Segmente verbinden](#point-context-menu) entfernt die Lücke zu zuvor getrennten Segmenten.
- Neue, unverbundene Abschnitte eines Tracks aufzuteilen oder zu erstellen. Um einen zu erstellen, verwenden Sie die Option [Neues Segment starten](#point-context-menu) oder wählen Sie die Funktion [Teilen](#point-context-menu) aus dem Punkt-Kontextmenü.

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/segment_menu.webp) ![Plan a route ios](@site/static/img/plan-route/section_menu.webp)

Eine Route kann ein oder mehrere Segmente enthalten. Ein Segment kann einen einzelnen Routentyp verwenden oder mehrere Abschnitte mit unterschiedlichen Routentypen enthalten.

Im Tab *Route* wird jedes Segment mit seinem Routentyp und seiner Entfernung angezeigt. Wenn ein Segment mehrere Abschnitte enthält, zeigt jeder Abschnitt seinen Routentyp und seine Entfernung an.

Sie können ein Segment über sein Drei-Punkte-Menü verwalten:
- **Routentyp ändern** — verfügbar für ein Segment mit einem einzelnen Routentyp. Öffnet *Route zwischen Punkten*, wo Sie einen anderen Routentyp auswählen können.
- **Einzelnen Routentyp festlegen** — verfügbar, wenn ein Segment mehrere Abschnitte mit unterschiedlichen Routentypen enthält. Öffnet *Route zwischen Punkten*, wo Sie einen Routentyp auf das Segment anwenden können.
- **Sortieren** — ordnen Sie Routenpunkte manuell neu oder verwenden Sie *Sortieren Tür-zu-Tür*, um sie so neu anzuordnen, dass die Gesamtentfernung minimiert wird.
- **Speichern unter…** — speichern Sie das Segment als separate Datei.
- **Segment löschen** — löschen Sie das Segment.

Um ein neues unverbundenes Segment zu erstellen, tippen Sie unten im Tab *Route* auf *Neues Segment starten*.

Ein Segment kann in [Abschnitte](#multimodal-routes) unterteilt werden, wenn für verschiedene Teile des Segments unterschiedliche Routentypen verwendet werden. Jeder Abschnitt zeigt seinen Routentyp und seine Entfernung an.

Tippen Sie auf das Drei-Punkte-Menü eines Abschnitts, um:
- **Routentyp ändern** — öffnen Sie *Route zwischen Punkten* und wählen Sie einen anderen Routentyp.
- **Sortieren** — greifen Sie auf die verfügbaren Sortieroptionen zu.
- **Abschnitt löschen** — entfernen Sie den Abschnitt.

</TabItem>

</Tabs>


### Punkt-Kontextmenü {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_menu_ios.webp)

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

![Plan a route android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-screen](@site/static/img/plan-route/plan-route-routeline-ios.webp)

</TabItem>

</Tabs>

Mit dem Werkzeug *Eine Route planen* und der Option [Route zwischen Punkten](#route-between-points) können Sie multimodale Routen erstellen, bei denen zum Beispiel der erste Teil eine *Fahrradroute*, der zweite Teil eine *gerade Linie* und dann eine *Fußgängerroute* sein kann. Beachten Sie, dass die Navigation auf multimodalen Routen nicht verfügbar ist. Sie müssen also eines der am besten geeigneten Profile auswählen, um den Abbiegehinweisen folgen zu können.


## Editor {#editor}

### Route speichern {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

Nachdem Sie [mindestens einen Punkt](#adding-points) zur Karte hinzugefügt haben, können Sie die Speicheroption verwenden. Alle in *Eine Route planen* gespeicherten Tracks finden Sie im Hauptmenü *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.  

Es gibt vier Möglichkeiten zum Speichern:

- ***Schnellspeichern***. Die obere rechte Schaltfläche ***Fertig*** (für bestehende Tracks) ermöglicht das schnelle Speichern von Änderungen und das Verlassen des Werkzeugs *Eine Route planen*. Der Name wird basierend auf dem aktuellen Datum generiert.
- ***Änderungen speichern*** im [Optionsmenü](#options) ermöglicht es Ihnen, Änderungen in einer Datei zu speichern und die Routenplanung fortzusetzen.
- ***Als neuen Track speichern*** im [Optionsmenü](#options) öffnet einen Dialog, in dem Sie den Namen des Tracks und den Ordner angeben, in dem die Route gespeichert wird.
- ***Änderungen zu einem Track hinzufügen***. Hängt einen erstellten Track als [separates Segment](#segments) an einen anderen bestehenden Track an. Änderungen an einem ausgewählten Track können *nicht rückgängig gemacht werden*.

Beim Speichern erbt der Track den Aktivitätstyp des für die Planung verwendeten Routing-Profils. Die Aktivität wird in den Track-Metadaten gespeichert und bleibt nach dem Exportieren oder Importieren der GPX-Datei erhalten.

:::note Option Vereinfachter Track
Beim Speichern eines neuen Tracks können Sie die Option ***Vereinfachter*** Track auswählen, um den Track mit anderen Drittanbieter-Anwendungen kompatibel zu machen. Technisch gesehen wird der Track ohne Routenanweisungen als rein geometrischer Track gespeichert.
:::

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_save_changes_ios.webp)

Nachdem Sie [mindestens einen Punkt](#adding-points) zur Karte hinzugefügt haben, können Sie die Speicheroption verwenden. Alle in *Eine Route planen* gespeicherten Tracks finden Sie im Hauptmenü *<Translate ios="true" ids="shared_string_menu"/> → <Translate ios="true" ids="shared_string_my_places"/> →* *[<Translate ios="true" ids="shared_string_gpx_tracks"/>](../personal/tracks/manage-tracks.md)*.

Für eine neue Route tippen Sie in der oberen Symbolleiste auf *Speichern*, um den aktuellen Track zu speichern. Sie können auch *Speichern unter…* aus dem Optionsmenü verwenden, um einen Dateinamen einzugeben und die Route zu speichern.

Beim Bearbeiten eines vorhandenen Tracks speichert *Speichern* die aktuellen Änderungen. Sie können auch folgende Optionen verwenden:
- **Speichern unter…** — speichert den Track mit einem neuen Dateinamen.
- **Als Kopie speichern** — speichert ein Duplikat des Tracks.
- **An bestehenden Track anhängen** — fügt den geplanten Track als separates Segment zu einem bestehenden Track hinzu.

Beim Speichern erbt der Track den Aktivitätstyp des für die Planung verwendeten Routing-Profils. Die Aktivität wird in den Track-Metadaten gespeichert und bleibt nach dem Exportieren oder Importieren der GPX-Datei erhalten.

</TabItem>

</Tabs>  


### Optionen {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

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

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.webp)

Tippen Sie auf das Drei-Punkte-Menü in der oberen Symbolleiste, um das Menü *Optionen* zu öffnen. Die verfügbaren Aktionen hängen davon ab, ob Sie eine neue Route erstellen oder einen bestehenden Track bearbeiten.

- **Speichern unter…** — speichern Sie die Route mit einem neuen Dateinamen. Verfügbar für neue Routen und bearbeitete Tracks.
- **Als Kopie speichern** — speichern Sie ein Duplikat eines bestehenden Tracks. Verfügbar beim Bearbeiten eines bestehenden Tracks.
- **An bestehenden Track anhängen** — fügen Sie die geplante Route als separates Segment zu einem bestehenden Track hinzu.
- **Segmentreihenfolge ändern** — ändern Sie die Reihenfolge der Routensegmente.
- **Route umkehren** — kehren Sie die Richtung der Route um.
- **Navigation** — schließen Sie *Eine Route planen* und starten Sie die Navigation mit der geplanten Route.
- **Alle Punkte löschen** — entfernen Sie alle Punkte aus der geplanten Route.

</TabItem>

</Tabs>


### Grafik / Analysieren {#graph--analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_graph_5_new_andr.png)

Während der Routenplanung zeigt die [Grafik](../navigation/setup/route-details.md#elevation-graph) Informationen zur Routenhöhe und zum Steigungsprozentsatz an. Außerdem können Sie auf eine beliebige Stelle in der Grafik tippen, um einen Zeiger mit bestimmten Daten anzuzeigen.  

Die Grafik wird im Tab *Grafik* angezeigt, wenn ein Track erstellt oder geöffnet wird, und bei der [Navigation](../navigation/setup/gpx-navigation.md) mit *Eine Route planen*.

Bei der Berechnung einer Route für die Navigation in *Eine Route planen* können Sie zusätzliche Track-Informationen wie [Höheninformationen](../navigation/setup/route-details.md#elevation-info) und [Straßenattribute](../navigation/setup/route-details.md#road-attributes) abrufen und das Werkzeug [Auf Karte analysieren](../navigation/setup/route-details.md#analyze-on-map) verwenden. Tippen Sie auf die Schaltfläche *Details* unterhalb der Grafik.  

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route_analyze_ios.webp) ![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route_analyze_ios_2.webp)

Der Abschnitt *Übersicht* zeigt eine Grafik basierend auf der ausgewählten Achse an. Verwenden Sie die Achsenauswahl-Steuerelemente, um die auf der Grafik angezeigten Daten auszuwählen. *Höhe neu berechnen* ermöglicht es Ihnen, Höhendaten bei Bedarf neu zu berechnen. Wenn keine Höhendaten verfügbar sind, zeigt der Tab *Analysieren* die Meldung „Keine Höhendaten“. Die Meldung erklärt, dass OsmAnd Höhendaten von nahegelegenen Straßen oder Geländekarten abrufen kann. Tippen Sie auf *Höhendaten abrufen*, um Höhendaten zu berechnen. Weitere Informationen finden Sie im Abschnitt [Höhendaten abrufen](#get-elevation-data).

Der Abschnitt *Übersicht Statistik* zeigt *Aufstieg*, *Abstieg*, *Höhenbereich*, *Durchschnittsgeschwindigkeit*, *Höchstgeschwindigkeit* und *Zeit in Bewegung* an. Ein Bindestrich `–` wird angezeigt, wenn Daten nicht verfügbar sind. Geschwindigkeit und Zeit in Bewegung können beispielsweise bei geplanten Routen nicht verfügbar sein.

Die Abschnitte *Straßentypen*, *Steilheit*, *Oberfläche* und *Glatte Oberfläche* zeigen die entsprechenden Routenmerkmale an. Tippen Sie auf einen Abschnitt, um ihn zu erweitern und detaillierte Informationen in der Legende anzuzeigen.

</TabItem>

</Tabs>


## Verwandte Artikel {#related-articles}

- [Track auf Karte anzeigen](../map/tracks/index.md)
- [Auf Karte analysieren](../map/tracks/index.md#analyze-track-on-map)
- [Track-Kontextmenü](../map/tracks/track-context-menu.md)
- [Navigation entlang eines Tracks](../navigation/setup/gpx-navigation.md)
- [Reiseaufzeichnung](../plugins/trip-recording.md)