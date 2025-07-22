---
source-hash: 61247292af1aa1532bdbb133f67761a221b4967bdccb328e710358ccdfd2084c
sidebar_position: 2
title: Tracks verwalten
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

Alle Tracks in OsmAnd werden in einem Tab unter *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>* gespeichert. OsmAnd verarbeitet die Track-Datei im [GPX-Format](https://en.wikipedia.org/wiki/GPS_Exchange_Format), aber [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) & [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) können importiert und in GPX konvertiert werden. Lesen Sie mehr über verschiedene Arten von Tracks im Artikel [Tracks auf der Karte](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Track-Verwaltung Überblick Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track-Verwaltung Überblick iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Track erstellen {#create-a-track}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Route planen Track ändern Android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen Track ändern iOS](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

Sie können Tracks in OsmAnd auf folgende Weisen hinzufügen:

1. **[Importieren Sie](./manage-tracks.md#import--export-track)** einen Track aus einer externen Quelle.
2. Erstellen Sie einen neuen Track in der Anwendung mit dem Tool **[Route planen](../../plan-route/create-route.md)**.
3. Zeichnen Sie einen Track in der Anwendung mit dem Plugin **[Fahrtaufzeichnung](../../plugins/trip-recording.md)** auf.
4. Geben Sie mehrere Punkte nach Koordinaten ein und speichern Sie diese als Track mit dem Tool **[Koordinateneingabe](../../plan-route/coordinate-input.md)**.
5. Sie können auch **Wegpunkte** zu einem neuen Track über das **[Kontextmenü](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint)** hinzufügen.


## Tracks verwalten {#manage-tracks}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> Tab*

![Meine Orte mit Tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Tab*

![Meine Orte mit Tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Alle jemals aufgezeichneten, erstellten oder importierten Tracks werden automatisch im Ordner [Meine Orte](../../personal/myplaces.md) im Tab *Tracks* angezeigt. Sie sind nach Ordnern organisiert oder werden in einer Liste darunter angezeigt.


### Track-Menü {#track-menu}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Tab*

![Meine Orte mit Tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Tab*

![Kontextmenü eines Tracks in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

Jeder Track, wie auch Ordner, verfügt über ein Menü, das eine effiziente Verwaltung der Tracks ermöglicht. So greifen Sie darauf zu:

- *Android* – tippen Sie auf das *Drei-Punkte-Menü* im Track-Feld.
- *iOS* – tippen Sie lange auf den gewünschten Track in der Liste.

Das Menü bietet folgende Aktionen:

- **Auf Karte anzeigen/ausblenden** – Zeigt die ausgewählten Tracks auf der Karte an oder blendet sie aus, um ihre Position visuell darzustellen.

- [Öffnen](../../map/tracks/index.md#configure-map) (*iOS*) – Diese Einstellung ist im Menü "Karte konfigurieren" verfügbar. Unter *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>* können Sie das [Kontextmenü des ausgewählten Tracks](../../map/tracks/track-context-menu.md) aufrufen, wenn Sie darauf tippen.

- **Aussehen** (*iOS*) – Passen Sie das [Aussehen der Tracks](../../map/tracks/appearance.md) an Ihre Vorlieben an.

- **Navigation** (*iOS*) – Startet die [Navigation](../../navigation/setup/gpx-navigation.md) entlang des ausgewählten Tracks.

- **Auf Karte analysieren** (*Android*) / **Analysieren** (*iOS*) – Öffnet das Tool [Auf Karte analysieren](../../navigation/setup/route-details.md#analyze-on-map) innerhalb der Routendetails zur weiteren Analyse.

- **Teilen** – Ermöglicht das Teilen des ausgewählten Tracks mit anderen.

- **Änderungen auf OSM hochladen** (*iOS*) – [Laden Sie die Änderungen](../../plugins/osm-editing.md#gps-track), die Sie am Track vorgenommen haben, direkt in *OpenStreetMap* hoch.

- **Bearbeiten** (*iOS*) – Verwenden Sie das Tool [Route planen](../../plan-route/create-route.md#modify-gpx-track), um Tracks zu ändern.

- **Duplizieren** (*iOS*) – Erstellt eine Kopie des ausgewählten Tracks.

- **Umbenennen** – Ändert den Namen des ausgewählten Tracks zur besseren Organisation.

- **Verschieben** – Ermöglicht das Verschieben des ausgewählten Tracks in einen anderen Ordner.

- **Exportieren** (*Android*) – Navigieren Sie zu *Menü → Einstellungen → Aktionen*, um alle Tracks aus einem Ordner zu exportieren.

- **Löschen** – Entfernt den ausgewählten Track dauerhaft, wenn er nicht mehr benötigt wird.


### Suchen {#search}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Suchfunktion für Tracks in Meine Orte Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchfunktion für Tracks in Meine Orte iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>

Tippen Sie auf die Schaltfläche &#x1F50D; oben auf dem Gerätebildschirm, um das Sortiermenü für die Trackliste zu öffnen.

Verfügbar:

- Suche nach Tracknamen.
- [Sortieren nach](#sort-by) für eine bessere Suche, wenn Sie den Titel nicht mehr wissen.
- [Filtern](./smart-folder.md#search-filter) (*nur Android*), wenn Sie die spezifischen Eigenschaften des Tracks benötigen.


### Auswahlmodus {#selection-mode}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Meine Orte Tracks Sortierfunktion Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Meine Orte Tracks iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>

Der Menüpunkt **Auswählen** bietet Optionen zur Verwaltung von Ordnern und Tracks. Diese Funktion ermöglicht es Ihnen, mehrere Tracks oder Track-Ordner auszuwählen. Sie können auch alle Tracks und Ordner auswählen, indem Sie auf die spezielle Schaltfläche **Alle auswählen** tippen.

Sobald Sie Ihre Wahl getroffen haben, werden die folgenden Schritte angeboten:

- **Auf Karte anzeigen** – Mit dieser Funktion können Sie die ausgewählten Tracks auf der Karte anzeigen, um deren Position und Beziehung zueinander besser zu verstehen.

- **Teilen** (*Android*) / **Exportieren** (*iOS*) – Wenn Sie ausgewählte Daten mit anderen Benutzern teilen oder in einem Cloud-Dienst speichern möchten, können Sie mit der Funktion *Teilen/Exportieren* Tracks und Ordner über verschiedene Freigabemethoden versenden.

- **Auf OpenStreetMap hochladen** – Sie können ausgewählte Tracks an OpenStreetMap senden und so zur Entwicklung und Verbesserung der Daten beitragen.

- **Verschieben** – Sie können Ihre Daten organisieren, indem Sie ausgewählte Tracks und Ordner in andere Ordner verschieben.

- [Aktivität ändern](../../map/tracks/track-context-menu.md#track-information-activity) – Diese Aktion ermöglicht es Ihnen, den Aktivitätstyp, z. B. *Auto*, *Abenteuer-Motorsport*, *Rucksackwandern* oder andere, für den ausgewählten Track zu ändern.

- [Aussehen ändern](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) – Diese Option ermöglicht es Ihnen, das Aussehen ausgewählter Tracks anzupassen, wodurch sie auf der Karte besser sichtbar und erkennbar werden.

- **Löschen** – Wenn die ausgewählten Tracks oder Ordner nicht mehr benötigt werden, können Sie sie mit der Funktion "Löschen" entfernen, wobei die App Bestätigungsoptionen bietet, um versehentliches Löschen zu vermeiden.


### Sortieren nach {#sort-by}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Meine Orte Tracks Sortierfunktion Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Meine Orte Tracks Sortierfunktion iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>

OsmAnd bietet eine einfache Möglichkeit, Ihre Tracks zu sortieren, was Ihnen hilft, eine große Sammlung zu verwalten oder bestimmte Funktionen schnell zu finden. Um auf das Sortiermenü zuzugreifen, tippen Sie oben in der Trackliste auf **Sortieren nach**.

***Sortieroptionen:***

- **Nächste** – Zeigt Tracks an, die Ihrem aktuellen Standort am nächsten sind.

- **Zuletzt geändert** – Zeigt Tracks an, die nach ihrem letzten Änderungsdatum sortiert sind.

- **Name: A - Z** – Ordnet Tracks alphabetisch von A bis Z.

- **Name: Z - A** – Ordnet Tracks alphabetisch von Z bis A.

- **Neuestes Datum zuerst** – Listet Tracks nach Erstellungsdatum auf, wobei die neuesten oben stehen.

- **Ältestes Datum zuerst** – Listet Tracks nach Erstellungsdatum auf, wobei die ältesten oben stehen.

- **Längste Distanz zuerst** – Zeigt Tracks nach Länge sortiert an, wobei die längsten oben stehen.

- **Kürzeste Distanz zuerst** – Zeigt Tracks nach Länge sortiert an, wobei die kürzesten oben stehen.

- **Längste Dauer zuerst** – Sortiert Tracks nach Dauer, wobei die längsten oben stehen.

- **Kürzeste Dauer zuerst** – Sortiert Tracks nach Dauer, wobei die kürzesten oben stehen.

#### Unterordner sortieren {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Meine Orte Tracks Sortierfunktion Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Meine Orte Tracks Sortierfunktion iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Wenn Sie [Unterordner](#folder-actions) sortieren möchten, gehen Sie zum Drei-Punkte-Menü innerhalb des ausgewählten Ordners und wählen Sie die gewünschten [Optionen](#sort-by).

Die ausgewählte Sortieroption wird nicht nur auf den aktuellen Unterordner angewendet, sondern auch auf alle verschachtelten Ordner und Tracks auf allen Ebenen. Dies gewährleistet eine konsistente Struktur Ihrer gespeicherten Daten.


## Track-Ordner {#track-folder}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Multitrack importieren](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kontextmenü eines Tracks in iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Das Track-Ordner-Menü ermöglicht es Ihnen, Ordner anzuzeigen, umzubenennen, zu exportieren und zu verwalten.

So öffnen Sie das Ordner-Menü:

- *Android* – tippen Sie auf das *Drei-Punkte-Menü* im Ordnerfeld.
- *iOS* – tippen Sie lange auf das Ordnerfeld.

***Aktionen mit einem Ordner:***

- **Name** – Zeigt den Ordnernamen, das Erstellungsdatum und die Anzahl der enthaltenen Tracks an.

- **Alle Tracks auf der Karte anzeigen** (*nur Android*) – Zeigt alle Tracks im Ordner auf der Karte an –
    *HINWEIS: Wenn viele Tracks vorhanden sind, kann dies dazu führen, dass das Gerät einfriert.*

- **Namen bearbeiten** (*Android*) / **Umbenennen** (*iOS*) – Ermöglicht das Umbenennen des Ordners.

- [Standardaussehen ändern](../../map/tracks/appearance.md) (*Android*) / **Aussehen** (*iOS*) – Ändert das Anzeigeaussehen aller Tracks im Ordner.

- [Exportieren](../../personal/import-export.md) – Öffnet den Tab *Menü → Einstellungen → Aktionen*, um alle Tracks im Ordner als [`.osf`-Datei](../../personal/import-export.md#export) zu exportieren.

- [Verschieben](#track-folder) – Ermöglicht das Verschieben des Ordners in einen anderen vorhandenen Ordner oder das Erstellen eines neuen.

- [Ordner löschen](#delete-folder) – Löscht den Ordner nach Bestätigung.
    ***HINWEIS: Diese Aktion ist irreversibel.***


### Ordnerstatistik {#folder-statistics}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> Tab*

![Meine Orte mit Tracks in Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Tab*

![Meine Orte mit Tracks in iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

Am unteren Ende der Liste im Tab *Tracks* und unterhalb der Trackliste **in jedem Ihrer Ordner** befindet sich ein Informationsbereich, der Ihnen eine Gesamtübersicht über die Statistiken der Tracks im ausgewählten Ordner anzeigt. Alle Werte werden in den von Ihnen ausgewählten [Einheiten](../../personal/profiles.md#units--formats) angezeigt.

- *Anzahl der **Tracks** im Ordner* – Zeigt die Anzahl der Tracks an, die im ausgewählten Ordner enthalten sind.

- *Gesamtsumme der* **Distanzen** – Die Gesamtlänge aller Tracks im ausgewählten Ordner, gemessen in den von Ihnen ausgewählten Einheiten, wird angezeigt.

- *Summe der* **Steigungen** – Die Daten geben den gesamten vertikalen Anstieg über alle Tracks im ausgewählten Ordner an.

- *Summe der* **Gefälle** – Dieser Parameter ist die Summe der vertikalen Abstiege auf allen Tracks im ausgewählten Ordner.

- *Summe der* **Dauer** *Zeit* – Dies zeigt die Gesamtzeit an, die zum Abschließen aller Tracks im ausgewählten Ordner benötigt wurde.

- *Gesamt**größe** der heruntergeladenen Dateien in MB* – Die Gesamtgröße der heruntergeladenen Dateien in Megabyte zeigt an, wie viel Speicherplatz alle Tracks im ausgewählten Ordner auf Ihrem Gerät belegen.


### Ordneraktionen {#folder-actions}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Meine Orte Tracks Sortierfunktion Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Meine Orte Tracks iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Die Aktionen im Ordner helfen Ihnen, Tracks zu organisieren, zu sortieren und zu importieren, um Ihre Navigationsdaten zu strukturieren.

So öffnen Sie die Ordneraktionen:

- Öffnen Sie den Tab "Tracks" in "Meine Orte".
- Navigieren Sie zu dem Ordner, den Sie verwalten möchten.
- Tippen Sie auf das *Drei-Punkte-Menü* in der oberen rechten Ecke, um das Menü für die Ordneraktionen zu öffnen.

***Aktionen im Ordner-Menü:***

- [Auswählen](#selection-mode) – Tippen Sie auf die gewünschten Ordner und Tracks, um Aktionen aus dem Menü im *Auswahlmodus* anzuwenden.

- [Unterordner sortieren](#sort-by) – Wenden Sie eine Sortierreihenfolge (z. B. nach Name, Datum) auf alle Unterordner und Tracks auf jeder Ebene an.

- [Smart-Ordner hinzufügen](../tracks/smart-folder.md#how-to-create-smart-folder) – Routen und Tracks automatisch nach von Ihnen festgelegten Kriterien sortieren.

- [Importieren](#import) – GPX- oder andere Track-Dateien von Ihrem Gerät in OsmAnd hochladen, um sie offline zu verwenden.

- **Neuen Ordner hinzufügen** – Um Ihre Routen und Tracks in logische Kategorien zu organisieren, legen Sie sie in verschiedene Ordner. Dies hilft, Ihre Navigationsinformationen zu strukturieren.


### Ordner löschen {#delete-folder}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Tab*

![Meine Orte mit Tracks in Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Tab*

![Kontextmenü eines Tracks in iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>

Sie können einen Ordner mit allen darin enthaltenen Tracks löschen. Gehen Sie dazu wie folgt vor:

- Tippen Sie auf das *Drei-Punkte-Menü* im zu löschenden Ordnerfeld.
- Am unteren Rand des Menüs finden Sie die Option **Ordner löschen**.
- ***HINWEIS: Diese Aktion ist irreversibel.***


## Track importieren / exportieren {#import--export-track}

### Importieren {#import}

Das Import-Tool ermöglicht es Ihnen, Tracks aus externen Dateien für die Offline-Navigation und -Analyse hinzuzufügen. Methoden zum Importieren von Tracks:

1. **Direkter Dateiimport:**

    - Tippen Sie auf eine GPX-, KML- oder KMZ-Datei aus Messaging-Apps, E-Mail, Google Drive oder Dateimanagern.
    - Wählen Sie "In OsmAnd öffnen", wenn Sie dazu aufgefordert werden.
    - Der importierte Track wird im Ordner **Import** in *Meine Orte* gespeichert.
    - Schritte: Tippen Sie auf die GPX-Datei → In OsmAnd öffnen.

2. **Import über das Menü *Meine Orte*:**

    - Öffnen Sie das Menü *Meine Orte → Tracks*.
    - Wählen Sie die zu importierende GPX-Datei aus.

    *Zusätzliche Optionen:*

    - **Einzel-Track-GPX-Dateien** – importieren Sie den gesamten Track direkt.
    - **Multi-Track-GPX-Dateien** – wählen Sie, ob Sie die einzelne GPX-Datei importieren oder bestimmte Tracks auswählen möchten.

***HINWEIS:*** *Manuell zum OsmAnd-Ordner auf Ihrem Gerät hinzugefügte Tracks werden automatisch importiert, ohne dass die Anwendung neu gestartet werden muss.*


### Exportieren {#export}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Multitrack importieren](@site/static/img/personal/tracks/import_multitrack.png) ![Multitrack importieren](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Exportieren | Importieren |
|:------------|:---------------|
| ![Multitrack importieren](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Exportieren </summary> ![Multitrack importieren](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![Multitrack importieren](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Exportieren </summary> ![Multitrack importieren](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

<!--
<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_1.png').default} alt="gpx"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_2.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_3.png').default} alt="gpx"/></td>
    </tr>
</table>
-->

</TabItem>

</Tabs>

Es gibt verschiedene Möglichkeiten, eine oder mehrere Track-Dateien an einen Messenger, eine E-Mail, einen Dateimanager oder eine App zu exportieren.

1. Über das [*Track-Kontextmenü → Teilen*](../../map/tracks/track-context-menu.md#options).

2. Über das *Menü "Meine Orte" → Tracks → Ordner-/Track-Menü*:

    - Um [**einen einzelnen Track zu exportieren**](#track-menu), wählen Sie das Menü des Tracks.
    - Um [**mehrere Tracks zu exportieren**](#track-folder), wählen Sie das Menü des gewünschten Ordners.

3. Über die [lokale Sicherungsdatei](../../personal/import-export.md#export-to-file). Exportieren von GPX-Tracks als `.osf`-Dateien.


## Verwandte Artikel {#related-articles}

- [Track auf der Karte anzeigen](../../map/tracks/index.md)
- [Auf Karte analysieren](../../map/tracks/index.md#analyze-track-on-map)
- [Track-Kontextmenü](../../map/tracks/track-context-menu.md)
- [Navigation nach Track](../../navigation/setup/gpx-navigation.md)
- [Fahrtaufzeichnung](../../plugins/trip-recording.md)

> *Zuletzt aktualisiert: April 2025*