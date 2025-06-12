---
source-hash: c792ee14fc98cd5ca21c687ac96750778fd65cbc67115deb117c9f475263d9d9
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

Alle Tracks in OsmAnd werden in einem Tab unter *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>* gespeichert. OsmAnd verarbeitet die Track-Datei im [GPX-Format](https://en.wikipedia.org/wiki/GPS_Exchange_Format), aber [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) & [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) können importiert und in GPX konvertiert werden. Mehr über verschiedene Arten von Tracks erfahren Sie im Artikel [Tracks auf der Karte](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Manage track Overview Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Manage track Overview iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Track erstellen {#create-a-track}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route modify-track-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route modify-track-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

Sie können Tracks in OsmAnd auf folgende Weise hinzufügen:

1. **[Importieren](./manage-tracks.md#import--export-track)** Sie einen Track aus einer externen Quelle.
2. Erstellen Sie einen neuen Track in der Anwendung mit dem Werkzeug **[Route planen](../../plan-route/create-route.md)**.
3. Zeichnen Sie einen Track in der Anwendung mit dem Plugin **[Fahrt aufzeichnen](../../plugins/trip-recording.md)** auf.
4. Geben Sie mehrere Punkte nach Koordinaten ein und speichern Sie sie als Track mit dem Werkzeug **[Koordinateneingabe](../../plan-route/coordinate-input.md)**.
5. Sie können auch **Wegpunkte** zu einem neuen Track über das **[Kontextmenü](../../map/map-context-menu.md#-add--edit--track-waypoint)** hinzufügen.


## Tracks verwalten {#manage-tracks}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> Tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Tab*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Alle jemals aufgezeichneten, erstellten oder importierten Tracks werden automatisch im Ordner [Meine Orte](../../personal/myplaces.md) im Tab *Tracks* angezeigt. Sie sind nach Ordnern organisiert oder werden in einer Liste darunter angezeigt.


### Track-Menü {#track-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Tab*

![Context menu of a track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Jeder Track, wie auch Ordner, hat ein Menü, mit dem Sie Tracks effizient verwalten können. So greifen Sie darauf zu:

- *Android* - Tippen Sie auf das *Drei-Punkte-Menü* im Track-Feld.
- *iOS* - Tippen Sie lange auf den gewünschten Track in der Liste.

Das Menü bietet folgende Aktionen:

- **Auf Karte anzeigen/ausblenden** – Zeigt die ausgewählten Tracks auf der Karte an oder blendet sie aus, um ihre Position visuell darzustellen.

- [Öffnen](../../map/tracks/index.md#configure-map) (*iOS*) – Diese Einstellung ist im Menü Karte konfigurieren verfügbar. Sie befindet sich unter *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>* und ermöglicht Ihnen den Zugriff auf das [Kontextmenü des ausgewählten Tracks](../../map/tracks/track-context-menu.md), wenn Sie darauf tippen.

- **Aussehen** (*iOS*) – Passen Sie das [Aussehen von Tracks](../../map/tracks/appearance.md) an Ihre Vorlieben an.

- **Navigation** (*iOS*) – Startet die [Navigation](../../navigation/setup/gpx-navigation.md) entlang des ausgewählten Tracks.

- **Auf Karte analysieren** (*Android*) / **Analysieren** (*iOS*) – Öffnet das Werkzeug [Auf Karte analysieren](../../navigation/setup/route-details.md#analyze-on-map) innerhalb der Routendetails zur weiteren Analyse.

- **Teilen** – Ermöglicht das Teilen des ausgewählten Tracks mit anderen.

- **Änderungen zu OSM hochladen** (*iOS*) – [Laden Sie die Änderungen](../../plugins/osm-editing.md#gps-track), die Sie am Track vorgenommen haben, direkt zu *OpenStreetMap* hoch.

- **Bearbeiten** (*iOS*) – Verwenden Sie das Werkzeug [Route planen](../../plan-route/create-route.md#modify-gpx-track), um Tracks zu ändern.

- **Duplizieren** (*iOS*) – Erstellt eine Kopie des ausgewählten Tracks.

- **Umbenennen** – Ändern Sie den Namen des ausgewählten Tracks zur besseren Organisation.

- **Verschieben** – Ermöglicht das Verschieben des ausgewählten Tracks in einen anderen Ordner.

- **Exportieren** (*Android*) – Navigieren Sie zu *Menü → Einstellungen → Aktionen*, um alle Tracks aus einem Ordner zu exportieren.

- **Löschen** – Entfernen Sie den ausgewählten Track, der nicht mehr benötigt wird, dauerhaft.


### Suche {#search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks seach function Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks seach function iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Tippen Sie auf die Schaltfläche &#x1F50D; oben auf dem Gerätebildschirm, um das Sortiermenü der Trackliste zu öffnen.  

Verfügbar:

- Suche nach Trackname.
- [Sortieren nach](#sort-by) zur besseren Suche, wenn Sie den Titel nicht mehr wissen.
- [Filter](./smart-folder.md#search-filter) (*nur Android*), wenn Sie die spezifischen Eigenschaften des Tracks benötigen.


### Auswahlmodus {#selection-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

Der Menüpunkt **Auswählen** bietet Optionen zur Verwaltung von Ordnern und Tracks. Mit dieser Funktion können Sie mehrere Tracks oder Track-Ordner auswählen. Sie können auch alle Tracks und Ordner auswählen, indem Sie auf die spezielle Schaltfläche **Alle auswählen** tippen.

Nachdem Sie Ihre Auswahl getroffen haben, stehen folgende Schritte zur Verfügung:  

- **Auf Karte anzeigen** – Mit dieser Funktion können Sie die ausgewählten Tracks auf der Karte anzeigen, um ihre Position und Beziehung zueinander besser zu verstehen.

- **Teilen** (*Android*) / **Exportieren** (*iOS*) – Wenn Sie ausgewählte Daten mit anderen Benutzern teilen oder in einem Cloud-Dienst speichern möchten, können Sie mit der Funktion *Teilen/Exportieren* Tracks und Ordner über verschiedene Freigabemethoden senden.

- **Zu OpenStreetMap hochladen** – Sie können ausgewählte Tracks an OpenStreetMap übermitteln und so zur Entwicklung und Verbesserung der Daten beitragen.

- **Verschieben** – Sie können Ihre Daten organisieren, indem Sie ausgewählte Tracks und Ordner in andere Ordner verschieben.

- [Aktivität ändern](../../map/tracks/track-context-menu.md#track-information-activity) (*nur Android*) – Mit dieser Aktion können Sie den Aktivitätstyp, z. B. *Auto*, *Abenteuer-Motorsport*, *Rucksackwandern* oder andere, für den ausgewählten Track ändern.

- [Aussehen ändern](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) – Mit dieser Option können Sie das Aussehen ausgewählter Tracks anpassen, um sie auf der Karte besser sichtbar und erkennbar zu machen.

- **Löschen** – Wenn die ausgewählten Tracks oder Ordner nicht mehr benötigt werden, können Sie sie mit der Funktion Löschen löschen. Die App bietet Bestätigungsoptionen, um versehentliches Löschen zu vermeiden.


### Sortieren nach {#sort-by}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks sort function iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd bietet eine einfache Möglichkeit, Ihre Tracks zu sortieren, um Ihnen bei der Verwaltung einer großen Sammlung zu helfen oder schnell bestimmte Funktionen zu finden. Um auf das Sortiermenü zuzugreifen, tippen Sie oben in der Trackliste auf **Sortieren nach**.

***Sortieroptionen:***

- **Nächste** – Zeigt Tracks an, die Ihrem aktuellen Standort am nächsten liegen.

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

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks sort function iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Wenn Sie [Unterordner](#folder-actions) sortieren möchten, gehen Sie zum Drei-Punkte-Menü im ausgewählten Ordner und wählen Sie die gewünschten [Optionen](#sort-by) aus.  

Die ausgewählte Sortieroption wird nicht nur auf den aktuellen Unterordner angewendet, sondern auch auf alle verschachtelten Ordner und Tracks auf allen Ebenen. Dies gewährleistet eine konsistente Struktur Ihrer gespeicherten Daten.


## Track-Ordner {#track-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context menu of a track in iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Das Track-Ordner-Menü ermöglicht Ihnen das Anzeigen, Umbenennen, Exportieren und Verwalten von Ordnern.

So öffnen Sie das Ordner-Menü:

- *Android* - Tippen Sie auf das *Drei-Punkte-Menü* im Ordner-Feld.
- *iOS* - Tippen Sie lange auf das Ordner-Feld.

***Aktionen mit einem Ordner:***

- **Name** – Zeigt den Ordnernamen, das Erstellungsdatum und die Anzahl der enthaltenen Tracks an.

- **Alle Tracks auf der Karte anzeigen** (*nur Android*) – Zeigt alle Tracks im Ordner auf der Karte an –  
    *HINWEIS: Wenn es viele Tracks gibt, kann dies dazu führen, dass das Gerät einfriert.*

- **Namen bearbeiten** (*Android*) / **Umbenennen** (*iOS*) – Ermöglicht das Umbenennen des Ordners.

- [Standardaussehen ändern](../../map/tracks/appearance.md) (*Android*) / **Aussehen** (*iOS*) – Ändert das Anzeigeaussehen aller Tracks im Ordner.

- [Exportieren](../../personal/import-export.md) – Öffnet den Tab *Menü → Einstellungen → Aktionen*, um alle Tracks im Ordner als [`.osf`-Datei](../../personal/import-export.md#export) zu exportieren.

- [Verschieben](#track-folder) – Ermöglicht das Verschieben des Ordners in einen anderen vorhandenen Ordner oder das Erstellen eines neuen.

- [Ordner löschen](#delete-folder) – Löscht den Ordner nach Bestätigung.  
    ***HINWEIS: Diese Aktion ist irreversibel.***


### Ordnerstatistik {#folder-statistics}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> Tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Tab*

![My Places with tracks in iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

Am Ende der Liste im Tab *Tracks* und unter der Liste der Tracks **in jedem Ihrer Ordner** befindet sich ein Informationsbereich, der Ihnen die Anzeige der Gesamtstatistik für die Tracks im ausgewählten Ordner ermöglicht. Alle Werte werden in den von Ihnen ausgewählten [Einheiten](../../personal/profiles.md#units--formats) angezeigt.

- *Anzahl der **Tracks** im Ordner* – Zeigt die Anzahl der Tracks an, die im ausgewählten Ordner enthalten sind.

- *Gesamtsumme der* **Distanzen** – Die Gesamtlänge aller Tracks im ausgewählten Ordner, gemessen in den von Ihnen ausgewählten Einheiten, wird angezeigt.

- *Summe der* **Anstiege** – Die Daten geben den gesamten vertikalen Anstieg über alle Tracks im ausgewählten Ordner an.

- *Summe der* **Abstiege** – Dieser Parameter ist die Summe der vertikalen Abstiege auf allen Tracks im ausgewählten Ordner.

- *Summe der* **Dauer** *Zeit* – Dies zeigt die Gesamtzeit an, die zum Abschluss aller Tracks im ausgewählten Ordner benötigt wurde.

- *Gesamtgröße der heruntergeladenen Dateien in MB* – Die Gesamtgröße der heruntergeladenen Dateien in Megabyte zeigt, wie viel Speicherplatz alle Tracks im ausgewählten Ordner auf Ihrem Gerät belegen.


### Ordneraktionen {#folder-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Die Aktionen im Ordner helfen Ihnen, Tracks zu organisieren, zu sortieren und zu importieren, um Ihre Navigationsdaten zu strukturieren.  

So öffnen Sie Ordneraktionen:

- Öffnen Sie den Tab Tracks in Meine Orte.
- Navigieren Sie zu dem Ordner, den Sie verwalten möchten.
- Tippen Sie auf das *Drei-Punkte-Menü* in der oberen rechten Ecke, um das Menü der Ordneraktionen zu öffnen.

***Aktionen im Ordner-Menü:***

- [Auswählen](#selection-mode) – Tippen Sie auf die gewünschten Ordner und Tracks, um Aktionen aus dem Menü im *Auswahlmodus* anzuwenden.

- [Unterordner sortieren](#sort-by) – Wenden Sie eine Sortierreihenfolge (z. B. nach Name, Datum) auf alle Unterordner und Tracks auf jeder Ebene an.

- [Smart-Ordner hinzufügen](../tracks/smart-folder.md#how-to-create-smart-folder) – Sortieren Sie Routen und Tracks automatisch basierend auf von Ihnen festgelegten Kriterien.

- [Importieren](#import) – Laden Sie GPX- oder andere Track-Dateien von Ihrem Gerät in OsmAnd für die Offline-Nutzung hoch.

- **Neuen Ordner hinzufügen** – Um Ihre Routen und Tracks in logische Kategorien zu organisieren, legen Sie sie in verschiedene Ordner. Dies hilft, Ihre Navigationsinformationen zu strukturieren.


### Ordner löschen {#delete-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Tab*

![Context menu of a track in iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

Sie können einen Ordner mit allen darin enthaltenen Tracks löschen. Gehen Sie dazu wie folgt vor:

- Tippen Sie auf das *Drei-Punkte-Menü* im zu löschenden Ordnerfeld.
- Am Ende des Menüs finden Sie die Option **Ordner löschen**.
- ***HINWEIS: Diese Aktion ist irreversibel.***


## Track importieren / exportieren {#import--export-track}

### Importieren {#import}

Das Importwerkzeug ermöglicht Ihnen das Hinzufügen von Tracks aus externen Dateien für die Offline-Navigation und -Analyse. Methoden zum Importieren von Tracks:

1. **Direkter Dateiimport:**

    - Tippen Sie auf eine GPX-, KML- oder KMZ-Datei aus Messaging-Apps, E-Mail, Google Drive oder Dateimanagern.
    - Wählen Sie bei Aufforderung In OsmAnd öffnen.
    - Der importierte Track wird im Ordner **Import** in *Meine Orte* gespeichert.
    - Schritte: Tippen Sie auf die GPX-Datei → In OsmAnd öffnen.

2. **Import über das Menü *Meine Orte*:**

    - Öffnen Sie das Menü *Meine Orte → Tracks*.
    - Wählen Sie die zu importierende GPX-Datei aus.

    *Zusätzliche Optionen:*

    - **Einzel-Track-GPX-Dateien** - importieren Sie den gesamten Track direkt.
    - **Multi-Track-GPX-Dateien** - wählen Sie, ob Sie die einzelne GPX-Datei importieren oder bestimmte Tracks auswählen möchten.

***HINWEIS:*** *Tracks, die manuell zum OsmAnd-Ordner auf Ihrem Gerät hinzugefügt wurden, werden automatisch importiert, ohne die Anwendung neu zu starten.*  


### Exportieren {#export}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/import_multitrack.png) ![import multitrack](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Export | Import |
|:------------|:---------------|
| ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Export </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Export </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

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

Es gibt mehrere Möglichkeiten, eine oder mehrere Track-Dateien in einen beliebigen Messenger, E-Mail, Dateimanager oder eine App zu exportieren.  

1. Über das [*Track-Kontextmenü → Teilen*](../../map/tracks/track-context-menu.md#options).

2. Über das Menü *Meine Orte → Tracks → Ordner-/Track-Menü*:

    - Um [**einen einzelnen Track zu exportieren**](#track-menu), wählen Sie das Menü des Tracks aus.
    - Um [**mehrere Tracks zu exportieren**](#track-folder), wählen Sie das Menü des gewünschten Ordners aus.

3. Über die [Lokale Sicherungsdatei](../../personal/import-export.md#export-to-file). Exportieren von GPX-Tracks als `.osf`-Dateien.


## Verwandte Artikel {#related-articles}

- [Track auf Karte anzeigen](../../map/tracks/index.md)
- [Auf Karte analysieren](../../map/tracks/index.md#analyze-track-on-map)
- [Track-Kontextmenü](../../map/tracks/track-context-menu.md)
- [Navigation nach Track](../../navigation/setup/gpx-navigation.md)
- [Fahrt aufzeichnen](../../plugins/trip-recording.md)

> *Zuletzt aktualisiert: April 2025*