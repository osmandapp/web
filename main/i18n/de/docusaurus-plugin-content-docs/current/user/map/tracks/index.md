---
source-hash: 6aec601164666a3a81eb5d95bdecc9963a7c4f7ddbac1cea35f42845786713b8
title: Tracks
sidebar_position: 2
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

OsmAnd verfügt über viele leistungsstarke Funktionen, um verschiedene Routen auf der Karte anzuzeigen. Routen können als Teil der Navigation erstellt, über die Routenplanung generiert, als GPX-Tracks importiert, über das Plugin "Reiseaufzeichnung" aufgezeichnet oder aus OpenStreetMap-Daten durchsucht und ausgewählt werden.


## Arten von Tracks {#types-of-tracks}

[Tracks (GPX)](#display-tracks-on-the-map) – aufgezeichnete oder geplante Reise, gespeichert im [GPX-Format](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Diese Art von Route kann aus einer externen Quelle importiert, in der Anwendung erstellt oder von Ihnen aufgezeichnet werden. GPX kann eine von drei verschiedenen Datentypen oder alle davon enthalten:

- Track als Linie (***Geometrie***). Die Datei enthält ein ```<trkpt>```-Punktarray, wobei jeder Punkt den Standort und optionale Zeit, Geschwindigkeit, Höhe und andere Attribute aufweist. Diese Tracks werden auf der Karte als durchgezogene Linien angezeigt.
- Track als Route (***Route***). Die Datei enthält ein ```<rtept>```-Punktarray, wobei jeder Punkt als Zwischenpunkt der Route beschrieben wird. Es hängt davon ab, wie Punkte innerhalb einer Route verbunden werden sollen, entweder als kleine Routensegmente oder über eine gerade Linie. Diese Tracks werden auf der Karte als gestrichelte Linien angezeigt.
- Wegpunkte (***Punkte***). Die Datei enthält ```<wpt>```-Punkte mit Attributen. Wegpunkte werden als kreisförmige Punkte auf der Karte angezeigt. Sie können sie antippen, um zusätzliche Informationen zu erhalten.

OsmAnd kann Tracks mit 1–3 Kombinationen erstellen. [Routenplanung](../../plan-route/create-route.md) erstellt einen Track mit ***Geometrie*** und ***Route***; wenn Sie ihn als ***Vereinfachten Track*** speichern, bleibt nur die ***Geometrie*** erhalten. [Track-Aufzeichnung](../../plugins/trip-recording.md#new-track-recording) erstellt nur ***Geometrie***, aber Sie können auch ***Punkte*** über das Kontextmenü hinzufügen.


## Tracks auf der Karte anzeigen {#display-tracks-on-the-map}

Sie können die Sichtbarkeit von Tracks verwalten, indem Sie aus mehreren Menüs auswählen, welche angezeigt oder ausgeblendet werden sollen: dem Menü [Meine Orte](#my-places), dem Menü [Karte konfigurieren](#configure-map) und dem [Track-Kontextmenü](#track-context-menu). Diese Flexibilität ermöglicht es Ihnen, schnell zwischen verschiedenen Tracks zu wechseln und sicherzustellen, dass jederzeit nur die relevanten Tracks auf Ihrer Karte sichtbar sind.

### Karte konfigurieren {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Configure map tracks Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png) ![Configure map tracks Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Configure map tracks iOS](@site/static/img/personal/tracks/follow_track_1_ios.png) ![Configure map tracks iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

Die Option *Karte konfigurieren* ermöglicht es Ihnen, die Anzeige aller kürzlich angezeigten Tracks schnell zu verwalten, indem Sie die Sichtbarkeit für eine Gruppe von Tracks umschalten können. Die Track-Sortierung folgt der im Reiter *Meine Orte → Tracks* konfigurierten Reihenfolge. Sie können das [Track-Menü](../../personal/tracks/manage-tracks.md#track-menu) durch langes Tippen auf ein Track-Element aufrufen. Zusätzlich können Sie in diesem Menü das Aussehen mehrerer ausgewählter Tracks gleichzeitig ändern.

### Meine Orte {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![My Places with tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → lange auf den ausgewählten GPX-Track tippen → Auf Karte anzeigen*

![Context menu of a track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

Im Reiter [Meine Orte *→* Tracks](../../personal/tracks/manage-tracks.md#manage-tracks) müssen Sie den Track auf der Karte anzeigen:

- *Android* – Tippen Sie auf das *Drei-Punkte-Menü* im Feld mit dem gewünschten Track.
- *iOS* – Tippen Sie lange auf den gewünschten Track in der Liste.


### Track-Kontextmenü {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Wenn Sie einen Track auf der Karte auswählen oder das [Track-Kontextmenü](./track-context-menu.md) nach dem Aufzeichnen oder Importieren eines Tracks öffnen, können Sie dessen Sichtbarkeit auf der Karte steuern. Verwenden Sie einfach die Schaltflächen *Anzeigen* oder *Ausblenden*, um den Track in der Kartenansicht anzuzeigen oder zu entfernen.


## Track auf Karte analysieren {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *Track antippen → Track-Tab → <Translate android="true" ids="analyze_on_map"/>*

![Track menu analyze on map Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png) ![Track menu analyze on the map distance Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *Track antippen → Track-Tab → <Translate ios="true" ids="analyze_on_map"/>*

![Track menu analyze on map](@site/static/img/personal/tracks/track_analyze_ios.png) ![Track menu analyze on map ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Dieses Tool bietet eine detaillierte Analyse von [Track-Daten](../../map/tracks/track-context-menu.md#options) mithilfe von Diagrammen und Karten.

- **Diagrammdaten (Y-Achse)** zeigen an: *Höhe*, *Steigung*, *Geschwindigkeit*, [*Externe Sensordaten*](../../plugins/external-sensors.md) und Kombinationen von bis zu zwei Optionen, falls in den Trackdaten enthalten.
- **Diagrammdimension (X-Achse)** stellt dar: *Distanz*, *Zeit* und *Tageszeit*.
- **Tipp-/Schiebeinteraktion**. Tippen Sie auf ein Diagramm, um Informationen zu einem bestimmten Punkt auf dem Track anzuzeigen. Das Schieben auf dem Diagramm hebt den entsprechenden Ort auf der Karte hervor und zeigt Details in der Informationsleiste an.
- **Skalierung**. Verwenden Sie eine [Zwei-Finger-Geste](../../map/interact-with-map.md#gestures), um das Diagramm für eine detailliertere Ansicht zu skalieren.


### Mein Standort folgen {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu analyze on map 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Track menu analyze on map 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu analyze on map](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png) ![Track menu analyze on map ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Tippen Sie auf die Schaltfläche [Mein Standort](../../map/interact-with-map.md#my-location-and-zoom), um die Kartenansicht und das Diagramm mit Ihrem Standort zu synchronisieren.

- Der **Maßstab des Diagramms** bleibt gleich, und die **Balkeninformation** ist zu 1/4 auf der linken Seite fixiert.
- Während Sie sich bewegen, **gleitet das Diagramm** von links nach rechts und zeigt Informationen vor Ihrem Track an.
- Auf diesem Bildschirm werden keine weiteren Widgets angezeigt.
- Diese Funktion ist nützlich für Wanderungen und Radtouren, während Sie den Track navigieren.


## Verwandte Artikel {#related-articles}

- [Track-Darstellung](./appearance.md)
- [Track-Kontextmenü](./track-context-menu.md)
- [Navigation nach Track](../../navigation/setup/gpx-navigation.md)
- [Routen auf der Karte](https://docs.osmand.net/blog/routes) Blogartikel
- [Karte konfigurieren](../../map/configure-map-menu.md)
- [GPX-Tracks](../../personal/tracks/index.md)
- [Route planen](../../plan-route/index.md)
- [Reiseaufzeichnung](../../plugins/trip-recording.md)

> *Zuletzt aktualisiert: November 2024*