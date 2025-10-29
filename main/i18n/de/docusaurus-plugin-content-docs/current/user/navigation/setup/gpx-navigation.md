---
source-hash: a712a44f73377cd525fd51b44694dfb5b3a2ded809dfa1224660e6d06215701e
sidebar_position: 2
title:  Navigation entlang eines Tracks
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

Die Option *Navigation entlang eines Tracks* (GPX) ermöglicht es Ihnen, einer vordefinierten Route oder einem Track auf einer Karte zu folgen. Dies kann besonders nützlich für Outdoor-Aktivitäten wie Wandern, Radfahren oder Geländefahrten sein, bei denen eine geplante Route die Sicherheit und Effizienz verbessert. Wenn Sie in einer organisierten Gruppe reisen, hilft diese Funktion Ihnen und jedem Mitglied der Gruppe, die gleichen Routeninformationen wie die anderen zu haben.  

Die Option *Navigation entlang eines Tracks* kann auch im Alltag verwendet werden. Sie können einen zuvor [aufgezeichneten Track](../../plugins/trip-recording.md) verwenden oder [einen Track erstellen](../../personal/tracks/manage-tracks.md#create-a-track) und ihn mit Ihrer Familie oder Freunden teilen, anstatt ihnen die Route zu erklären. Sie können auch die [Routen auf der OsmAnd-Karte](../../../../blog/routes/) zur Navigation verwenden. Wie man sie auf der Karte hervorhebt und was ihre Farben bedeuten, wird im Abschnitt [Routen](../../map/vector-maps.md#routes) des Artikels *Vektorkarten* beschrieben.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Navigationsbildschirm entlang eines Tracks Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsbildschirm entlang eines Tracks iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Auswahl des Tracks {#select-the-track}

Bevor Sie die Option *Navigation entlang eines Tracks* verwenden können, müssen Sie [den Track auf der Karte anzeigen](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd unterstützt Tracks als Linie (**Geometry**) und Tracks als Route (**Route**) oder eine Kombination aus beiden (**OsmAnd** durch [Route planen](../../plan-route/create-route.md)). Wenn Sie einen Track als Sammlung **Wegpunkte** haben, können Sie die [Marker-Navigation](./markers-navigation.md) verwenden.


- **Geometry**-Tracks haben standardmäßig eine sehr einfache Navigation und liefern keine genauen Abbiegehinweise, Straßennamen und Fahrspuren. Um fehlende Informationen zu erhalten, müssen Sie das Werkzeug [An Straßen anheften](#attach-to-the-roads) verwenden.

- **Route**-Tracks berechnen die Route zwischen den Routenpunkten anhand des ausgewählten Profils. Grundsätzlich werden alle Routenpunkte als Zwischenziele betrachtet. Wenn Ihre Route aus mehr als 50 Punkten besteht, handelt es sich sehr wahrscheinlich um einen falsch konfigurierten **Geometry**-Track.

- **OsmAnd**-Tracks bestehen sowohl aus Geometrie- als auch aus Routenteilen und eignen sich, um genau die gleiche Führung wie bei der Standardnavigation zu bieten. Diese Tracks werden durch [Route planen](../../plan-route/create-route.md) oder die [Webversion](../../web/index.md) erstellt. Es ist möglich, diesen Track als reinen **Geometry**-Track als [**Vereinfacht**](../../plan-route/create-route.md#save-route) zu speichern, um ihn in Programmen von Drittanbietern zu verwenden.


### GPX-Navigation starten {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Track zur Navigation auswählen Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Track zur Navigation auswählen Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track zur Navigation auswählen iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Track zur Navigation auswählen iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

Die Navigation auf einem Track kann über die Schnellaktion im [Track-Kontextmenü](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) gestartet werden (geöffnet durch Auswahl eines der [hervorgehobenen Tracks](./route-navigation.md#history-of-previous-routes) auf der Karte oder durch Antippen einer Track-Datei im Abschnitt [Meine Orte](../../personal/myplaces.md) des *Hauptmenüs*) oder aus dem Navigationsmenü, das durch Antippen geöffnet wird:

- [*Navigations-Schaltfläche*](../../widgets/map-buttons.md#directions) auf dem Kartenbildschirm.  
- *Navigationsbereich* im *Hauptmenü* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- Im [*Navigationsmenü*](./route-navigation.md#navigation-menu) gehen Sie zu *<Translate android="true" ids="shared_string_settings,follow_track"/>*.  

### Segmente auswählen {#choose-segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Segmente Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segmente iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Wenn der ausgewählte Track aus mehreren Segmenten oder Tracks besteht, können Sie für die Navigation entweder ein bestimmtes Segment oder die gesamte GPX-Track-Datei auswählen. Beim **[Importieren](../../personal/tracks/manage-tracks.md#import)** können Sie wählen, ob Sie ihn in einer einzelnen Datei oder in mehreren Dateien speichern möchten.


### Optionen zum Folgen des Tracks {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Navigationsbildschirm entlang eines Tracks Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Navigationsbildschirm entlang eines Tracks iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Bearbeiten** (*Stiftsymbol* neben dem Tracknamen) — Öffnet den Track im Werkzeug [*Route planen*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Eine andere GPX-Datei für die Navigation auswählen.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Wenn diese Einstellung aktiviert ist, wird die Bewegungsrichtung entlang des Tracks umgekehrt.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Konfiguriert das [Anheften eines Tracks an die Straßen](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Sie können auswählen, wie Sie von Ihrem Standort zum Track navigieren möchten: zum *<Translate android="true" ids="start_of_the_track"/>* oder zum *<Translate android="true" ids="nearest_point"/>* auf dem Track.
- Wählen Sie den **Navigationstyp** für das erste und letzte Segment: entweder eine [*gerade Linie*](../routing/straight-line-routing.md) erstellen oder den [*Routing-Typ*](../routing/osmand-routing.md#routing-types) aus dem aktuellen Profil verwenden.


### Track-Richtung umkehren {#reverse-track-direction}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Umgekehrter Modus](@site/static/img/navigation/gpx/reverse_mode_android.png) ![Zur Navigation](@site/static/img/navigation/gpx/navigate_to_android.png)

Die Option **Track-Richtung umkehren** ermöglicht es Ihnen, einen gespeicherten GPX-Track in der umgekehrten Richtung zu navigieren — vom Endpunkt zurück zum Startpunkt. Wenn diese Einstellung aktiviert ist, kehrt der Navigationsalgorithmus die GPX-Geometrie automatisch um und berechnet die Richtungen entsprechend neu. Sobald sie aktiviert ist, wird der Parameter **Umgekehrter Modus** verfügbar:

- **Route berechnen**. Empfohlen für Auto- und Fahrradprofile. Eine neue, optimierte Route wird entlang des umgekehrten GPX-Tracks gemäß dem ausgewählten Navigationsprofil neu berechnet. Verkehrsregeln wie Einbahnstraßen und Abbiegebeschränkungen werden beachtet, um eine sichere Navigation zu gewährleisten.
- **Original-Track**. Die GPX-Linie wird streng in umgekehrter Richtung ohne Neuberechnung der Route befolgt. Dieser Modus ist nützlich für Gehen, Wandern oder Offroad-Navigation, bei denen Verkehrsregeln nicht gelten.

Wenn die umgekehrte Richtung aktiviert ist, werden der Start- und Endpunkt des Tracks automatisch vertauscht, und die Navigation wird vom aktuellen oder nächstgelegenen Punkt auf dem umgekehrten Track aus aufgebaut. Die Option *Punkt des Tracks zur Navigation = Nächster Punkt* bezieht sich auf den nächstgelegenen Punkt auf der umgekehrten GPX-Linie, und sowohl die Sprachführung als auch die Funktion An Straßen anheften funktionieren auf die gleiche Weise wie bei der Vorwärtsnavigation.

</TabItem>

<TabItem value="ios" label="iOS">

![Zur Navigation iOS](@site/static/img/navigation/gpx/navigate_to_ios.png)

Die Option **Track-Richtung umkehren** ermöglicht es, einen gespeicherten GPX-Track in der umgekehrten Richtung zu navigieren — vom Endpunkt zurück zum Start. Wenn diese Einstellung aktiviert ist, wird die Track-Geometrie automatisch umgekehrt und die Route gemäß dem ausgewählten Navigationsprofil neu berechnet.

Der Start- und Endpunkt des Tracks werden vertauscht, und die Navigation wird vom aktuellen oder nächstgelegenen Punkt auf der umgekehrten Linie aus aufgebaut. Die Option *Zur Navigation = Nächster Punkt* bezieht sich auf den nächstgelegenen Punkt auf dem umgekehrten GPX-Track.

Eine neue, optimierte Route wird entlang des umgekehrten Tracks mit voller Berücksichtigung von Verkehrsregeln wie Einbahnstraßen und Abbiegebeschränkungen neu berechnet. Sprachführung, visuelle Anweisungen und die Funktion An Straßen anheften arbeiten wie bei der Standard-Vorwärtsnavigation und gewährleisten eine genaue und sichere Routenführung.

</TabItem>

</Tabs>


### An Straßen anheften {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![An Straßen anheften 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![An Straßen anheften 1 iOS](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

Die Funktion **An Straßen anheften** richtet Ihren Track an der nächstgelegenen Straße aus, um ein genaueres Navigationserlebnis zu ermöglichen. Diese Funktion, die im Menü [Track folgen](#follow-track-options) verfügbar ist, stellt sicher, dass Ihre Route dem entsprechenden Straßennetz folgt, basierend auf dem ausgewählten *Navigationsprofil* und der **Schwellenentfernung**. Dies verbessert sowohl die [Routendetails](../setup/route-details.md) als auch die [Sprachanweisungen](#guidance) während der Navigation.

***Wie es funktioniert:***

- OsmAnd gleicht jeden Trackpunkt mit der **nächstgelegenen Straße** innerhalb der eingestellten **Schwellenentfernung** (Standard: **50 Meter**) ab.  
- Die **Schwellenentfernung** definiert den maximal zulässigen Abstand zwischen einem GPS-Trackpunkt und einer Straße für das Anheften.
- **Automatisches erneutes Anheften** — Beim Wechseln des **Navigationsprofils** heftet OsmAnd den Track automatisch erneut an Straßen an, die für das neue Profil geeignet sind.
- Bei großen Tracks mit vielen Punkten kann der Anheftungsprozess etwas länger dauern. Sie sehen eine **Fortschrittsanzeige** (*orangefarbene Statusleiste*), die den Anheftungsstatus anzeigt.
- Nachdem das Anheften abgeschlossen ist, tippen Sie auf **Anwenden**, um den geänderten Track für die Navigation zu verwenden.

### Automatisches Anheften an Straßen {#automatic-attachment-to-the-roads}

OsmAnd heftet Routen automatisch an Straßen an, wenn das Werkzeug **Route planen** verwendet wird:

- **Wegpunkte** werden automatisch an der nächstgelegenen verfügbaren Straße ausgerichtet (*außer bei [Luftlinien-Routing](../../navigation/routing/straight-line-routing.md) und [Direkt-zum-Punkt-Routing](../../navigation/routing/direct-to-point-routing.md)*).
- Wenn keine Straßen erkannt werden (z. B. in Offroad-Umgebungen), folgt die Route **geraden Liniensegmenten**.
- Sie können die Route **manuell anpassen**, indem Sie Wegpunkte an andere Orte ziehen.

Standardmäßig wird die Funktion **An Straßen anheften** **automatisch** ausgeführt, wenn ein Track für die Navigation ausgewählt wird. Sie können diese Einstellung bei Bedarf ändern. Weitere Einzelheiten finden Sie unter [Detaillierte Track-Führung](../guidance/navigation-settings.md#detailed-track-guidance) im Artikel *Navigationseinstellungen*.


## Punkte {#points}

### Start-/Zielpunkt {#start--finish-point}

Sie können einen anderen Start- und Zielpunkt für eine Route angeben als den in der GPX-Datei angegebenen. Ändern Sie ihn einfach genauso wie bei der [Navigation](../setup/route-navigation.md#select-start-point).

Im Menü [Track folgen](#follow-track-options) können Sie wählen, ob Sie von Ihrem aktuellen Standort zum Startpunkt des Tracks oder zum nächstgelegenen Punkt auf dem GPX-Track navigieren möchten.  Außerdem können Sie den [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) auswählen, der für das Start- und Endsegment Ihrer Route verwendet wird.  

### Wegpunkte {#waypoints}

Wenn der Track Wegpunkte hat, können Sie [Entlang der Route anzeigen](../guidance/map-during-navigation.md#show-points-along-the-route) und [Sprachführung](../guidance/voice-navigation.md#voice-settings) verwenden, um über Sonderziele (Points of Interest) benachrichtigt zu werden. Sie können **Wegpunkte** zu einem bestehenden Track über das [Kontextmenü](../../map/map-context-menu.md#-add--edit-track-waypoint) hinzufügen, der Track muss auf der Karte sichtbar sein.

### Zwischenziele {#intermediate-points}

Bei der Vorbereitung oder Navigation eines GPX-Tracks können Sie keine Zwischenziele hinzufügen, die Sie innerhalb dieses Tracks anfahren möchten. Sie können nur Start- und Zielpunkte zusätzlich zu dem Track oder Segment zuweisen, dem Sie folgen möchten.

## Zielführung {#guidance}

*Navigation entlang eines GPX-Tracks* enthält die gleichen [Sprachanweisungen](../guidance/voice-navigation.md) wie die Routennavigation. Einige Abbiegungen oder Kreisverkehre werden jedoch möglicherweise nicht korrekt interpretiert, da in GPX keine Informationen über Straßenkreuzungen enthalten sind, außer bei GPX-Dateien, die von OsmAnd erstellt wurden. Um diese Probleme zu beseitigen, sollten Sie die Funktion [An Straßen anheften](#attach-to-the-roads) verwenden.  

Während der Navigation können Sie verschiedene Optionen nutzen, wie z. B. das Vergrößern oder Verkleinern, das Verschieben der Karte oder das Umschalten auf einen anderen Kartenstil. Wenn Sie vom Track abweichen, berechnet OsmAnd die Route automatisch neu, um Sie wieder auf den richtigen Weg zu bringen. Sie können auch die Geschwindigkeit des Tracks anpassen und akustische Warnungen für sich nähernde Punkte oder Abweichungen von der Route einstellen.  


## Verwandte Artikel {#related-articles}

- [Routenparameter](../routing/osmand-routing.md#routing-types)
- [Routenvorbereitung](./route-navigation.md)
- [Routendetails](./route-details.md)
- [Navigation nach Markern](./markers-navigation.md)
- [Navigationseinstellungen](../guidance/navigation-settings.md)
- [Kartenbildschirm während der Navigation](../guidance/map-during-navigation.md)
- [Sprachansagen / Benachrichtigungen](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)