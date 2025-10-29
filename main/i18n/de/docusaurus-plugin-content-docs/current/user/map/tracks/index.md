---
source-hash: 8451603f460c01b41bc40f56cd232e1cc6efc049123d01d861d14574636fb31b
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
OsmAnd verfügt über viele leistungsstarke Funktionen, um verschiedene Routen auf der Karte anzuzeigen. Routen können als Teil der Navigation erstellt, über 'Route planen' angelegt, als GPX-Tracks importiert, über das 'Reiseaufzeichnungs'-Plugin aufgezeichnet oder aus OpenStreetMap-Daten durchsucht und ausgewählt werden.


## Arten von Tracks {#types-of-tracks}

[Tracks (GPX)](#display-tracks-on-the-map) - aufgezeichnete oder geplante Tour, die im [GPX-Format](https://de.wikipedia.org/wiki/GPS_Exchange_Format) gespeichert ist. Diese Art von Route kann aus einer externen Quelle importiert, in der Anwendung erstellt oder von Ihnen aufgezeichnet werden. GPX kann eine von 3 verschiedenen Arten von Daten oder alle davon enthalten:

- Track als eine Linie (***Geometrie***). Die Datei hat ein ```<trkpt>```-Punkte-Array, jeder Punkt hat den Standort und optional Zeit, Geschwindigkeit, Höhe und andere Attribute. Diese Tracks werden auf der Karte als durchgezogene Linien dargestellt.
- Track als eine Route (***Route***). Die Datei hat ein ```<rtept>```-Punkte-Array, jeder Punkt wird als Zwischenpunkt der Route beschrieben. Es hängt davon ab, wie die Punkte innerhalb einer Route verbunden werden sollen, entweder als kleine Routensegmente oder über eine gerade Linie. Diese Tracks werden auf der Karte als gestrichelte Linien dargestellt.
- Wegpunkte (***Punkte***). Die Datei hat ```<wpt>```-Punkte mit Attributen. Wegpunkte werden als kreisförmige Punkte auf der Karte dargestellt. Sie können sie antippen, um zusätzliche Informationen zu erhalten.

OsmAnd kann Tracks mit 1–3 Kombinationen erstellen. [Route planen](../../plan-route/create-route.md) erstellt einen Track mit ***Geometrie*** und ***Route***, wenn Sie ihn als ***Vereinfachter Track*** speichern, wird nur die ***Geometrie*** beibehalten. [Track aufzeichnen](../../plugins/trip-recording.md#new-track-recording) erstellt nur ***Geometrie***, aber Sie können auch ***Punkte*** über das Kontextmenü hinzufügen.


## Tracks auf der Karte anzeigen {#display-tracks-on-the-map}

Sie können die Sichtbarkeit von Tracks verwalten, indem Sie auswählen, welche in verschiedenen Menüs angezeigt oder ausgeblendet werden sollen: dem Menü [Meine Orte](#my-places), dem Menü [Karte konfigurieren](#configure-map) und dem [Track-Kontextmenü](#track-context-menu). Diese Flexibilität ermöglicht es Ihnen, schnell zwischen verschiedenen Tracks zu wechseln und sicherzustellen, dass zu jeder Zeit nur die relevanten Tracks auf Ihrer Karte sichtbar sind.

### Karte konfigurieren {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Karte konfigurieren Tracks Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Karte konfigurieren Tracks Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Karte konfigurieren Tracks iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Karte konfigurieren Tracks iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

Die Option *Karte konfigurieren* ermöglicht es Ihnen, die Anzeige aller zuletzt angezeigten Tracks schnell zu verwalten, sodass Sie die Sichtbarkeit für eine Gruppe von Tracks umschalten können. Die Sortierung der Tracks folgt der Reihenfolge, die im Tab *Meine Orte → Tracks* konfiguriert ist. Sie können auf das [Track-Menü](../../personal/tracks/manage-tracks.md#track-menu) zugreifen, indem Sie lange auf einen Track-Eintrag tippen. Zusätzlich können Sie in diesem Menü das Erscheinungsbild mehrerer ausgewählter Tracks gleichzeitig ändern.

### Meine Orte {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Meine Orte mit Tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → langes Tippen auf den ausgewählten GPX-Track → Auf Karte anzeigen*

![Kontextmenü eines Tracks in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

Im [Meine Orte *→* Tracks-Tab](../../personal/tracks/manage-tracks.md#manage-tracks) müssen Sie zum Anzeigen des Tracks auf der Karte Folgendes tun:

- *Android* - tippen Sie auf das *Drei-Punkte-Menü* im Feld mit dem gewünschten Track.
- *iOS* - tippen Sie lange auf den gewünschten Track in der Liste.


### Track-Kontextmenü {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track-Kontextmenü Übersicht Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track-Kontextmenü Übersicht iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Wenn Sie einen Track auf der Karte auswählen oder das [Track-Kontextmenü](./track-context-menu.md) nach der Aufzeichnung oder dem Import eines Tracks öffnen, können Sie dessen Sichtbarkeit auf der Karte steuern. Verwenden Sie einfach die Schaltflächen *Anzeigen* oder *Ausblenden*, um den Track in der Kartenansicht anzuzeigen oder zu entfernen.


## Track auf der Karte analysieren {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *Tippen Sie auf den Track → Tab "Track" → <Translate android="true" ids="analyze_on_map"/>*  

![Track-Menü auf Karte analysieren Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![Track-Menü auf Karte analysieren Distanz Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *Tippen Sie auf den Track → Tab "Track" → <Translate ios="true" ids="analyze_on_map"/>*  

![Track-Menü auf Karte analysieren](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Track-Menü auf Karte analysieren ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Dieses Werkzeug bietet eine detaillierte Analyse von [Track](../../map/tracks/track-context-menu.md#options)-Daten mithilfe von Diagrammen und Karten.

- **Diagrammdaten (Y-Achse)** zeigt an: *Höhe*, *Steigung*, *Geschwindigkeit*, [*Daten externer Sensoren*](../../plugins/external-sensors.md) und Kombinationen von bis zu zwei Optionen, falls in den Track-Daten enthalten.
- **Diagrammdimension (X-Achse)** stellt dar: *Distanz*, *Zeit* und *Tageszeit*.
- **Tippen/Schieben-Interaktion**. Tippen Sie auf ein Diagramm, um Informationen über einen bestimmten Punkt auf dem Track anzuzeigen. Das Schieben auf dem Diagramm hebt die entsprechende Stelle auf der Karte hervor und zeigt Details in der Informationsleiste an.
- **Distanzbeschriftung**. Beim Tippen oder Schieben entlang des Diagramms zeigt das Tooltip auch die genaue Distanz entlang des Tracks an. Der Wert folgt den Einstellungen der aktuellen Profil-Einheit (<Translate android="true" ids="km"/> oder <Translate android="true" ids="mile"/>). Verwenden Sie es, um schnell zu schätzen, wie weit ein Punkt vom Track-Start entfernt ist, oder um die Distanz zwischen zwei Positionen zu berechnen, indem Sie ihre Werte vergleichen.
- **Skalierung**. Verwenden Sie eine [Zwei-Finger-Geste](../../map/interact-with-map.md#gestures), um das Diagramm für eine detailliertere Ansicht zu skalieren.


### Meinem Standort folgen {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track-Menü auf Karte analysieren 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Track-Menü auf Karte analysieren 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track-Menü auf Karte analysieren](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![Track-Menü auf Karte analysieren ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Tippen Sie auf die Schaltfläche [Mein Standort](../../map/interact-with-map.md#my-location-and-zoom), um die Kartenansicht und das Diagramm mit Ihrem Standort zu synchronisieren.

- Der **Maßstab des Diagramms** bleibt derselbe, und die **Informationsleiste** ist auf 1/4 der linken Seite fixiert.
- Während Sie sich bewegen, **gleitet das Diagramm** von links nach rechts und zeigt Informationen vor Ihrem Track an.
- Auf diesem Bildschirm werden keine anderen Widgets angezeigt.
- Diese Funktion ist nützlich beim Wandern und Radfahren, während Sie dem Track folgen.  


## Verwandte Artikel {#related-articles}

- [Erscheinungsbild von Tracks](./appearance.md)
- [Track-Kontextmenü](./track-context-menu.md)
- [Navigation entlang eines Tracks](../../navigation/setup/gpx-navigation.md)
- [Routen auf der Karte](https://docs.osmand.net/blog/routes) (Blog-Artikel)
- [Karte konfigurieren](../../map/configure-map-menu.md)  
- [GPX-Tracks](../../personal/tracks/index.md)  
- [Route planen](../../plan-route/index.md)  
- [Reiseaufzeichnung](../../plugins/trip-recording.md)