---
source-hash: f48138cc59c4ee27ce642e063d856f276b2f56ba4cb068db2cb6e337b797c4c1
title:  Tracks
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

OsmAnd verfügt über viele leistungsstarke Funktionen zur Anzeige verschiedener Routen auf der Karte. Routen können als Teil der Navigation erstellt, über „Route planen“ generiert, als GPX-Tracks importiert, über das „Trip Recording“-Plugin aufgezeichnet oder aus OpenStreetMap-Daten durchsucht und ausgewählt werden.


## Arten von Tracks {#types-of-tracks}

[Tracks (GPX)](#display-tracks-on-the-map) – aufgezeichnete oder geplante Touren, die im [GPX-Format](https://en.wikipedia.org/wiki/GPS_Exchange_Format) gespeichert sind. Diese Art von Route kann aus einer externen Quelle importiert, in der Anwendung erstellt oder von Ihnen aufgezeichnet werden. GPX kann eine oder alle der drei folgenden Datenarten enthalten:

- Track als Linie (***Geometrie***). Die Datei enthält ein ```<trkpt>```-Punktarray, wobei jeder Punkt den Standort und optional Zeit, Geschwindigkeit, Höhe und andere Attribute enthält. Diese Tracks werden auf der Karte als durchgezogene Linien angezeigt.
- Track als Route (***Route***). Die Datei enthält ein ```<rtept>```-Punktarray, wobei jeder Punkt als Zwischenpunkt der Route beschrieben wird. Es hängt davon ab, wie die Punkte innerhalb einer Route verbunden werden sollen, entweder als kleine Routensegmente oder über eine gerade Linie. Diese Tracks werden auf der Karte als gestrichelte Linien angezeigt.
- Wegpunkte (***Punkte***). Die Datei enthält ```<wpt>```-Punkte mit Attributen. Wegpunkte werden auf der Karte als kreisförmige Punkte angezeigt. Sie können darauf tippen, um zusätzliche Informationen zu erhalten.

OsmAnd kann Tracks mit 1–3 Kombinationen erstellen. [Route planen](../../plan-route/create-route.md) erstellt einen Track mit ***Geometrie*** und ***Route***. Wenn Sie ihn als ***vereinfachten Track*** speichern, wird nur die ***Geometrie*** beibehalten. [Track aufzeichnen](../../plugins/trip-recording.md#new-track-recording) erstellt nur ***Geometrie***, aber Sie können über das Kontextmenü auch ***Punkte*** hinzufügen.


## Tracks auf der Karte anzeigen {#display-tracks-on-the-map}

Sie können die Sichtbarkeit von Tracks verwalten, indem Sie aus mehreren Menüs auswählen, welche angezeigt oder ausgeblendet werden sollen: dem Menü [Meine Orte](#my-places), dem Menü [Karte konfigurieren](#configure-map) und dem [Track-Kontextmenü](#track-context-menu). Diese Flexibilität ermöglicht es Ihnen, schnell zwischen verschiedenen Tracks zu wechseln und sicherzustellen, dass zu jedem Zeitpunkt nur die relevanten Tracks auf Ihrer Karte sichtbar sind.

### Karte konfigurieren {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Tracks in der Karte konfigurieren Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Tracks in der Karte konfigurieren Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Tracks in der Karte konfigurieren iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Tracks in der Karte konfigurieren iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

Die Option *Karte konfigurieren* ermöglicht es Ihnen, die Anzeige aller zuletzt angezeigten Tracks schnell zu verwalten, indem Sie die Sichtbarkeit für eine Gruppe von Tracks umschalten können. Die Sortierung der Tracks folgt der Reihenfolge, die im Tab *Meine Orte → Tracks* konfiguriert ist. Sie können auf das [Track-Menü](../../personal/tracks/manage-tracks.md#track-menu) zugreifen, indem Sie lange auf ein Track-Element tippen. Zusätzlich können Sie in diesem Menü das Erscheinungsbild mehrerer ausgewählter Tracks gleichzeitig ändern.

### Meine Orte {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Meine Orte mit Tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → lange auf den ausgewählten GPX-Track tippen → Auf Karte anzeigen*

![Kontextmenü eines Tracks in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

Im Tab [Meine Orte *→* Tracks](../../personal/tracks/manage-tracks.md#manage-tracks) müssen Sie den Track auf der Karte anzeigen:

- *Android* – Tippen Sie auf das *Drei-Punkte-Menü* im Feld mit dem gewünschten Track.
- *iOS* – Tippen Sie lange auf den gewünschten Track in der Liste.


### Track-Kontextmenü {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Übersicht Track-Kontextmenü Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Übersicht Track-Kontextmenü iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Wenn Sie einen Track auf der Karte auswählen oder das [Track-Kontextmenü](./track-context-menu.md) nach dem Aufzeichnen oder Importieren eines Tracks öffnen, können Sie dessen Sichtbarkeit auf der Karte steuern. Verwenden Sie einfach die Schaltflächen *Anzeigen* oder *Ausblenden*, um den Track auf der Kartenansicht anzuzeigen oder zu entfernen.


## Track auf Karte analysieren {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *Auf den Track tippen → Track-Tab → <Translate android="true" ids="analyze_on_map"/>*  

![Track-Menü auf Karte analysieren Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![Track-Menü auf Karte analysieren Entfernung Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *Auf den Track tippen → Track-Tab → <Translate ios="true" ids="analyze_on_map"/>*  

![Track-Menü auf Karte analysieren](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Track-Menü auf Karte analysieren ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Dieses Tool bietet eine detaillierte Analyse von [Trackdaten](../../map/tracks/track-context-menu.md#options) mithilfe von Diagrammen und Karten.

- **Diagrammdaten (Y-Achse)** zeigen an: *Höhe*, *Neigung*, *Geschwindigkeit*, [*Daten externer Sensoren*](../../plugins/external-sensors.md) und Kombinationen von bis zu zwei Optionen, falls in den Trackdaten enthalten.
- **Diagrammdimension (X-Achse)** stellt dar: *Entfernung*, *Zeit* und *Tageszeit*.
- **Tippen/Schieben-Interaktion**. Tippen Sie auf ein Diagramm, um Informationen zu einem bestimmten Punkt auf dem Track anzuzeigen. Durch Schieben auf dem Diagramm wird der entsprechende Ort auf der Karte hervorgehoben und Details in der Informationsleiste angezeigt.
- **Skalierung**. Verwenden Sie eine [Zwei-Finger-Geste](../../map/interact-with-map.md#gestures), um das Diagramm für eine detailliertere Ansicht zu skalieren.


### Mein Standort verfolgen {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track-Menü auf Karte analysieren 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Track-Menü auf Karte analysieren 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track-Menü auf Karte analysieren](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![Track-Menü auf Karte analysieren ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Tippen Sie auf die Schaltfläche [Mein Standort](../../map/interact-with-map.md#my-location-and-zoom), um die Kartenansicht und das Diagramm mit Ihrem Standort zu synchronisieren.

- Der **Maßstab des Diagramms** bleibt gleich, und die **Balkeninformationen** sind 1/4 links fest positioniert.
- Während Sie sich bewegen, **schiebt sich das Diagramm** von links nach rechts und zeigt Informationen vor Ihrem Track an.
- Auf diesem Bildschirm werden keine weiteren Widgets angezeigt.
- Diese Funktion ist nützlich beim Wandern und Radfahren, während Sie dem Track folgen.  


## Verwandte Artikel {#related-articles}

- [Erscheinungsbild des Tracks](./appearance.md)
- [Track-Kontextmenü](./track-context-menu.md)
- [Navigation anhand des Tracks](../../navigation/setup/gpx-navigation.md)
- Blogartikel [Routen auf der Karte](https://docs.osmand.net/blog/routes)
- [Karte konfigurieren](../../map/configure-map-menu.md)  
- [GPX-Tracks](../../personal/tracks/index.md)  
- [Route planen](../../plan-route/index.md)  
- [Trip Recording](../../plugins/trip-recording.md)

> *Zuletzt aktualisiert: November 2024*