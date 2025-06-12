---
source-hash: 31419e7adbc6b5574f7d6ddec3548363e0888514a187077a060bcc8123f6d866
sidebar_position: 2
title:  Navigation nach Track
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

Die Option *Navigation nach Track* (GPX) ermöglicht es Ihnen, einer vordefinierten Route oder einem Track auf einer Karte zu folgen. Dies kann besonders nützlich für Outdoor-Aktivitäten wie Wandern, Radfahren oder Geländefahrten sein, bei denen eine geplante Route die Sicherheit und Effizienz verbessert. Wenn Sie in einer organisierten Gruppe unterwegs sind, hilft diese Funktion Ihnen und jedem Mitglied der Gruppe, die gleichen Routeninformationen wie die anderen zu haben.

Die Option *Navigation nach Track* kann auch im Alltag verwendet werden. Sie können einen zuvor [aufgezeichneten Track](../../plugins/trip-recording.md) verwenden oder [einen Track erstellen](../../personal/tracks/manage-tracks.md#create-a-track) und ihn mit Ihrer Familie oder Freunden teilen, anstatt ihnen die Route zu erklären. Sie können auch die [Routen auf der OsmAnd-Karte](../../../../blog/routes/) zur Navigation verwenden. Wie Sie diese auf der Karte hervorheben und was ihre Farben bedeuten, wird im Abschnitt [Routen](../../map/vector-maps.md#routes) des Artikels *Vektorkarten* beschrieben.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation by track screen Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation by track screen iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Track auswählen {#select-the-track}

Bevor Sie die Option *Navigation nach Track* verwenden, müssen Sie den [Track auf der Karte anzeigen](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd unterstützt Tracks als Linie (**Geometrie**) und Tracks als Route (**Route**) oder eine Kombination davon (**OsmAnd** durch [Route planen](../../plan-route/create-route.md)). Wenn Sie einen Track als Sammlung von **Wegpunkten** haben, können Sie die [Markierungsnavigation](./markers-navigation.md) verwenden.


- Ein **Geometrie**-Track hat standardmäßig eine sehr einfache Navigation und liefert keine genauen Abbiegungen, Straßennamen und Fahrspuren. Um fehlende Informationen zu erhalten, müssen Sie das Werkzeug [An Straßen anpassen](#attach-to-the-roads) verwenden.

- Ein **Route**-Track berechnet die Route zwischen den Routenpunkten anhand des ausgewählten Profils. Grundsätzlich werden alle Routenpunkte als Zwischenpunkte betrachtet. Wenn Ihre Route mehr als 50 Punkte enthält, ist es sehr wahrscheinlich, dass es sich um einen falsch konfigurierten **Geometrie**-Track handelt.

- Ein **OsmAnd**-Track besteht sowohl aus Geometrie- als auch aus Routenteilen und eignet sich, um genau die gleiche Führung wie die Standardnavigation zu bieten. Diese Tracks werden durch [Route planen](../../plan-route/create-route.md) oder die [Webversion](../../web/index.md) erstellt. Es ist möglich, diesen Track als [**Vereinfacht**](../../plan-route/create-route.md#save-route) nur als **Geometrie**-Track neu zu speichern, um ihn in Programmen von Drittanbietern zu verwenden.


### GPX-Navigation starten {#start-gpx-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Select track to navigate Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Select track to navigate Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select track to navigate iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Select track to navigate iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

Die Navigation auf einem Track kann über die Schnellaktion im [Track-Kontextmenü](../../map/tracks/track-context-menu.md#quick-actions) (geöffnet durch Auswahl eines der [hervorgehobenen Tracks](./route-navigation.md#history-of-previous-routes) auf der Karte oder durch Tippen auf eine Track-Datei im Abschnitt [Meine Orte](../../personal/myplaces.md) des *Hauptmenüs*) oder über das Navigationsmenü gestartet werden, das durch Tippen aufgerufen wird:

- [*Navigationsschaltfläche*](../../widgets/map-buttons.md#directions) auf dem Kartenbildschirm.
- *Navigationsbereich* im *Hauptmenü* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- Im [*Navigationsmenü*](./route-navigation.md#navigation-menu) gehen Sie zu *<Translate android="true" ids="shared_string_settings,follow_track"/>*.

### Segmente auswählen {#choose-segments}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Segments Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segments iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Für die Navigation können Sie, wenn der ausgewählte Track aus mehreren Segmenten oder Tracks besteht, entweder ein bestimmtes Segment oder die gesamte GPX-Track-Datei auswählen. Beim **[Importieren](../../personal/tracks/manage-tracks.md#import)** können Sie wählen, ob Sie es in einer einzigen Datei oder in mehreren Dateien speichern möchten.


### Track-Optionen folgen {#follow-track-options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Navigation by track screen Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Navigation by track screen iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Bearbeiten** (*Bleistiftsymbol* neben dem Tracknamen) – Öffnet den Track im Werkzeug [*Route planen*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** – Wählen Sie eine andere GPX-Datei für die Navigation aus.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** – Wenn diese Einstellung aktiviert ist, wird die Bewegungsrichtung entlang des Tracks umgekehrt.
- **<Translate android="true" ids="attach_to_the_roads"/>** – Konfiguriert das [Anpassen eines Tracks an die Straßen](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) – Sie können auswählen, wie Sie von Ihrem Standort zum Track navigieren möchten:
zum *<Translate android="true" ids="start_of_the_track"/>* oder zum *<Translate android="true" ids="nearest_point"/>* auf dem Track.
- Wählen Sie den **Navigationstyp** für das erste und letzte Segment: entweder eine [*gerade Linie*](../routing/straight-line-routing.md) erstellen oder den [*Routing-Typ*](../routing/osmand-routing.md#routing-types) aus dem aktuellen Profil verwenden.


### An Straßen anpassen {#attach-to-the-roads}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Attach to the roads 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Attach to the roads 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

Die Funktion **An Straßen anpassen** richtet Ihren Track an der nächstgelegenen Straße aus, um eine genauere Navigation zu ermöglichen. Diese Funktion ist im Menü [Track folgen](#follow-track-options) verfügbar und stellt sicher, dass Ihre Route dem geeigneten Straßennetzwerk folgt, basierend auf dem ausgewählten *Navigationsprofil* und der **Schwellenentfernung**. Dies verbessert sowohl die [Routendetails](../setup/route-details.md) als auch die [Sprachanweisungen](#guidance) während der Navigation.

***Wie es funktioniert:***

- OsmAnd ordnet jeden Trackpunkt der **nächstgelegenen Straße** innerhalb der eingestellten **Schwellenentfernung** (Standard: **50 Meter**) zu.
- Die **Schwellenentfernung** definiert die maximal zulässige Entfernung zwischen einem GPS-Trackpunkt und einer Straße für die Anpassung.
- **Automatische Neuanpassung** – Beim Wechseln von **Navigationsprofilen** passt OsmAnd den Track automatisch an Straßen an, die für das neue Profil geeignet sind.
- Bei großen Tracks mit vielen Punkten kann der Anpassungsprozess etwas länger dauern. Sie sehen eine **Fortschrittsanzeige** (*orangefarbene Statuszeile*), die den Anpassungsstatus anzeigt.
- Nachdem die Anpassung abgeschlossen ist, tippen Sie auf **Anwenden**, um den geänderten Track für die Navigation zu verwenden.

#### Automatische Anpassung an die Straßen {#automatic-attachment-to-the-roads}

OsmAnd passt Routen automatisch an Straßen an, wenn Sie das Werkzeug **Route planen** verwenden:

- **Wegpunkte** richten sich automatisch an der nächstgelegenen verfügbaren Straße aus (*außer bei [Geradliniger Routenführung](../../navigation/routing/straight-line-routing.md) und [Direkt-zum-Punkt-Routenführung](../../navigation/routing/direct-to-point-routing.md)*).
- Wenn keine Straßen erkannt werden (z. B. in Offroad-Umgebungen), folgt die Route **geradlinigen Segmenten**.
- Sie können die Route **manuell anpassen**, indem Sie Wegpunkte an andere Orte ziehen.

Standardmäßig wird die Funktion **An Straßen anpassen** **automatisch** ausgeführt, wenn ein Track für die Navigation ausgewählt wird. Sie können diese Einstellung bei Bedarf ändern. Weitere Details finden Sie unter [Detaillierte Track-Führung](../guidance/navigation-settings.md#detailed-track-guidance) im Artikel *Navigationseinstellungen*.


## Punkte {#points}

### Start-/Endpunkt {#start--finish-point}

Sie können einen anderen Start- und Endpunkt für eine Route festlegen als den in der GPX-Datei angegebenen Start/Endpunkt. Ändern Sie ihn einfach genauso wie bei der [Navigation](../setup/route-navigation.md#select-starting-point).

Im Menü [Track folgen](#follow-track-options) können Sie wählen, ob Sie von Ihrem aktuellen Standort zum Startpunkt des Tracks oder zum nächstgelegenen Punkt auf dem GPX-Track navigieren möchten. Außerdem können Sie den [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) wählen, der für das Start- und Endsegment Ihrer Route verwendet wird.

### Wegpunkte {#waypoints}

Wenn der Track Wegpunkte hat, können Sie [Entlang der Route anzeigen](../guidance/map-during-navigation.md#show-points-along-the-route) und [Sprachführung](../guidance/voice-navigation.md#voice-settings) verwenden, um über Points of Interest benachrichtigt zu werden. Sie können einer vorhandenen Strecke **Wegpunkte** über das **[Kontextmenü](../../map/map-context-menu.md#-add--edit--track-waypoint)** hinzufügen, die Strecke muss auf der Karte sichtbar sein.

### Zwischenpunkte {#intermediate-points}

Beim Vorbereiten oder Navigieren eines GPX-Tracks können Sie keine Zwischenorte hinzufügen, die Sie innerhalb dieses Tracks durchfahren möchten. Sie können nur Start- und Endpunkte zusätzlich zu dem Track oder Segment zuweisen, dem Sie folgen möchten.

## Führung {#guidance}

Die *Navigation nach GPX-Track* enthält die gleichen [Sprachanweisungen](../guidance/voice-navigation.md) wie die Routennavigation. Einige Abbiegungen oder Kreisverkehre werden jedoch möglicherweise nicht korrekt interpretiert, da in GPX keine Informationen über Straßenkreuzungen vorhanden sind, außer bei GPX-Dateien, die von OsmAnd erstellt wurden. Um diese Probleme zu beseitigen, sollten Sie die Funktion [**An Straßen anpassen**](#attach-to-the-roads) verwenden.

Während der Navigation können Sie verschiedene Optionen nutzen, wie z. B. Vergrößern oder Verkleinern, Verschieben der Karte oder Wechseln zu einem anderen Kartenstil. Wenn Sie vom Track abweichen, berechnet OsmAnd die Route automatisch neu, um Sie wieder auf den Track zu bringen. Sie können auch die Geschwindigkeit des Tracks anpassen und akustische Warnungen für sich nähernde Punkte oder Abweichungen von der Route einstellen.


## Verwandte Artikel {#related-articles}

- [Routenparameter](../routing/osmand-routing.md#routing-types)
- [Routenvorbereitung](./route-navigation.md)
- [Routendetails](./route-details.md)
- [Navigation nach Markierungen](./markers-navigation.md)
- [Navigationseinstellungen](../guidance/navigation-settings.md)
- [Kartenbildschirm während der Navigation](../guidance/map-during-navigation.md)
- [Sprachansagen / Benachrichtigungen](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Zuletzt aktualisiert: April 2025*