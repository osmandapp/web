---
source-hash: 04406e7e66e2e6cda894bf72a3f747e6b543f8a003e1b65c58a1772ff944c6c2
sidebar_position: 2
title:  Tracks verwalten
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

Alle Tracks in OsmAnd werden in einem Tab unter *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>* gespeichert. OsmAnd verarbeitet die Track-Datei im [GPX format](https://en.wikipedia.org/wiki/GPS_Exchange_Format), aber [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) & [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) können importiert und in GPX konvertiert werden. Lesen Sie mehr über die verschiedenen Arten von Tracks im Artikel [Tracks on map](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Übersicht Tracks verwalten Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Übersicht Tracks verwalten iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Einen Track erstellen {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route planen Track ändern Android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen Track ändern iOS](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

Sie können Tracks in OsmAnd auf folgende Weisen hinzufügen:

1. **[Importieren](./manage-tracks.md#import--export-track)** einen Track aus einer externen Quelle.
2. Einen neuen Track in der Anwendung mit dem Werkzeug **[Route planen](../../plan-route/create-route.md)** erstellen.
3. Einen Track in der Anwendung mit dem Plugin **[Reiseaufzeichnung](../../plugins/trip-recording.md)** aufzeichnen.
4. Mehrere Punkte über Koordinaten eingeben und als Track mit dem Werkzeug **[Koordinateneingabe](../../plan-route/coordinate-input.md)** speichern.
5. Sie können auch **Wegpunkte** zu einem neuen Track über das **[Kontextmenü](../../map/map-context-menu.md#-add--edit-track-waypoint)** hinzufügen.


## Tracks verwalten {#manage-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![Meine Orte mit Tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Meine Orte mit Tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Alle jemals aufgezeichneten, erstellten oder importierten Tracks werden automatisch im Ordner [My Places](../../personal/myplaces.md) im Tab *Tracks* angezeigt. Sie sind nach Ordnern geordnet oder werden in einer Liste darunter angezeigt.


### Track-Menü {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Meine Orte mit Tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Kontextmenü eines Tracks in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Jeder Track hat, wie auch die Ordner, ein Menü, mit dem Sie Tracks effizient verwalten können. So greifen Sie darauf zu:

- *Android* - tippen Sie auf das *Drei-Punkte-Menü* im Track-Feld.
- *iOS* - tippen Sie lange auf den gewünschten Track in der Liste.

Das Menü bietet die folgenden Aktionen:

- **Auf Karte anzeigen/verbergen** — Zeigt die ausgewählten Tracks auf der Karte an oder verbirgt sie, um ihre Position visuell darzustellen.

- [Öffnen](../../map/tracks/index.md#configure-map) (*iOS*) — Diese Einstellung ist im Menü "Karte konfigurieren" verfügbar. Sie befindet sich unter *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>* und ermöglicht es Ihnen, beim Antippen auf das [Kontextmenü des ausgewählten Tracks](../../map/tracks/track-context-menu.md) zuzugreifen.

- **Erscheinungsbild** (*iOS*) — Passen Sie das [Erscheinungsbild von Tracks](../../map/tracks/appearance.md) an Ihre Vorlieben an.

- **Navigation** (*iOS*) — Startet die [Navigation](../../navigation/setup/gpx-navigation.md) entlang des ausgewählten Tracks.

- **Auf Karte analysieren** (*Android*) / **Analysieren** (*iOS*) — Öffnet das Werkzeug [Auf Karte analysieren](../../navigation/setup/route-details.md#analyze-on-map) in den Routendetails zur weiteren Analyse.

- **Teilen** — Ermöglicht das Teilen des ausgewählten Tracks mit anderen.

- **Änderungen zu OSM hochladen** (*iOS*) — [Laden Sie die Änderungen](../../plugins/osm-editing.md#gps-track), die Sie am Track vorgenommen haben, direkt auf *OpenStreetMap* hoch.

- **Bearbeiten** (*iOS*) — Verwenden Sie das Werkzeug [Route planen](../../plan-route/create-route.md#modify-existing-gpx-track), um Tracks zu ändern.

- **Duplizieren** (*iOS*) — Erstellt eine Kopie des ausgewählten Tracks.

- **Umbenennen** — Ändern Sie den Namen des ausgewählten Tracks zur besseren Organisation.

- **Verschieben** — Ermöglicht es Ihnen, den ausgewählten Track in einen anderen Ordner zu verschieben.

- **Exportieren** (*Android*) — Navigieren Sie zum Tab *Menü → Einstellungen → Aktionen*, um alle Tracks aus einem Ordner zu exportieren.

- **Löschen** — Entfernt den ausgewählten Track dauerhaft, wenn er nicht mehr benötigt wird.


### Suche {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suchfunktion für Tracks in "Meine Orte" Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchfunktion für Tracks in "Meine Orte" iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Tippen Sie auf die Schaltfläche &#x1F50D; am oberen Bildschirmrand, um das Sortiermenü der Trackliste zu öffnen.  

Verfügbar:

- Suche nach Track-Namen.
- [Sortieren nach](#sort-by) für eine bessere Suche, wenn Sie sich nicht an den Titel erinnern können.
- [Filter](./smart-folder.md#search-filter) (*nur Android*), wenn Sie die spezifischen Eigenschaften des Tracks benötigen.


### Auswahlmodus {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sortierfunktion für Tracks in "Meine Orte" Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tracks in "Meine Orte" iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

Der Menüpunkt **Auswählen** bietet Optionen zur Verwaltung von Ordnern und Tracks. Diese Funktion ermöglicht es Ihnen, mehrere Tracks oder Track-Ordner auszuwählen. Sie können auch alle Tracks und Ordner auswählen, indem Sie auf die spezielle Schaltfläche **Alle auswählen** tippen.

Sobald Sie Ihre Auswahl getroffen haben, stehen folgende Schritte zur Verfügung:  

- **Auf Karte anzeigen** — Mit dieser Funktion können Sie die ausgewählten Tracks auf der Karte anzeigen, um deren Lage und Beziehung zueinander besser zu verstehen.

- **Teilen** (*Android*) / **Exportieren** (*iOS*) — Öffnet das System-Teilen-Menü und sendet die ausgewählten Tracks als GPX-Dateien (.gpx) oder exportiert ausgewählte Ordner mit der gewählten App oder Cloud-Diensten.

- **Nach OpenStreetMap hochladen** — Sie können ausgewählte Tracks an OpenStreetMap übermitteln und so zur Entwicklung und Verbesserung der Daten beitragen.

- **Verschieben** — Sie können Ihre Daten organisieren, indem Sie ausgewählte Tracks und Ordner in andere Ordner verschieben.

- [Aktivität ändern](../../map/tracks/track-context-menu.md#ttrack-activity-type) — Diese Aktion ermöglicht es Ihnen, den Aktivitätstyp für den ausgewählten Track zu ändern, z. B. in *Auto*, *Abenteuer-Motorsport*, *Rucksackwandern* oder andere.

- [Erscheinungsbild ändern](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Mit dieser Option können Sie das Erscheinungsbild ausgewählter Tracks anpassen, um sie auf der Karte sichtbarer und erkennbarer zu machen.

- **Löschen** — Wenn die ausgewählten Tracks oder Ordner nicht mehr benötigt werden, können Sie sie mit der Löschfunktion entfernen, wobei die App Bestätigungsoptionen anbietet, um ein versehentliches Löschen zu vermeiden.


### Tracks sortieren {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sortierfunktion für Tracks in "Meine Orte" Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Sortierfunktion für Tracks in "Meine Orte" iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd bietet eine einfache Möglichkeit, Ihre Tracks zu sortieren, was Ihnen hilft, eine große Sammlung zu verwalten oder schnell bestimmte Merkmale zu finden. Um das Sortiermenü aufzurufen, tippen Sie auf **Sortieren nach** am oberen Rand der Trackliste.

***Sortieroptionen:***

- **Nächste** — Zeigt Tracks an, die Ihrem aktuellen Standort am nächsten sind.
- **Zuletzt geändert** — Zeigt Tracks sortiert nach ihrem letzten Änderungsdatum an.
- **Name: A - Z** — Ordnet Tracks alphabetisch von A bis Z.
- **Name: Z - A** — Ordnet Tracks alphabetisch von Z bis A.
- **Neuestes Datum zuerst** — Listet Tracks nach Erstellungsdatum auf, mit dem neuesten ganz oben.
- **Ältestes Datum zuerst** — Listet Tracks nach Erstellungsdatum auf, mit dem ältesten ganz oben.
- **Längste Distanz zuerst** — Zeigt Tracks nach Länge sortiert an, mit dem längsten ganz oben.
- **Kürzeste Distanz zuerst** — Zeigt Tracks nach Länge sortiert an, mit dem kürzesten ganz oben.
- **Längste Dauer zuerst** — Sortiert Tracks nach Dauer, wobei die längste ganz oben steht.
- **Kürzeste Dauer zuerst** — Sortiert Tracks nach Dauer, wobei die kürzeste ganz oben steht.

### Unterordner sortieren {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sortierfunktion für Tracks in "Meine Orte" Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Sortierfunktion für Tracks in "Meine Orte" iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Wenn Sie [Unterordner](#folder-actions) sortieren möchten, gehen Sie zum Drei-Punkte-Menü innerhalb des ausgewählten Ordners und wählen Sie die gewünschten [Optionen](#sort-by).  

Die ausgewählte Sortieroption wird nicht nur auf den aktuellen Unterordner angewendet, sondern auch auf alle verschachtelten Ordner und Tracks auf allen Ebenen. Dies gewährleistet eine konsistente Struktur Ihrer gespeicherten Daten.


## Track-Ordner {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Tippen Sie auf das *Drei-Punkte-Menü* im Ordnerfeld, um das Ordnermenü zu **öffnen**.

![import multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

> Tippen Sie lange auf das Ordnerfeld, um das Ordnermenü zu **öffnen**.

![Kontextmenü eines Tracks in iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Das Track-Ordnermenü ermöglicht es Ihnen, Ordner anzuzeigen, umzubenennen, zu exportieren und zu verwalten.


***Aktionen mit einem Ordner:***

- **Name** — Zeigt den Ordnernamen, das Erstellungsdatum und die Anzahl der enthaltenen Tracks an.
- **Alle Tracks auf der Karte anzeigen** (*nur Android*) — Zeigt alle Tracks im Ordner auf der Karte an. Bei vielen Tracks kann dies zum Einfrieren des Geräts führen.
- **Namen bearbeiten** (*Android*) / **Umbenennen** (*iOS*) — Ermöglicht das Umbenennen des Ordners.
- [Standard-Erscheinungsbild ändern](../../map/tracks/appearance.md) (*Android*) / **Erscheinungsbild** (*iOS*) — Ändert das Erscheinungsbild aller Tracks im Ordner.
- [Exportieren](../../personal/import-export.md) — Öffnet den Tab *Menü → Einstellungen → Aktionen*, um alle Tracks im Ordner als [`.osf`-Datei](../../personal/import-export.md#export) zu exportieren.
- [Verschieben](#track-folder) — Ermöglicht es Ihnen, den Ordner in einen anderen bestehenden Ordner zu verschieben oder einen neuen zu erstellen.
- [Ordner löschen](#delete-folder) — Löscht den Ordner nach Bestätigung. ***Diese Aktion ist unumkehrbar.***


### Ordnerstatistiken {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> tab*

![Meine Orte mit Tracks in Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Meine Orte mit Tracks in iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

Am Ende der Liste im Tab *Tracks* und unter der Liste der Tracks **in jedem Ihrer Ordner** befindet sich ein Informationsbereich, der es Ihnen ermöglicht, die zusammenfassende Gesamtstatistik für die Tracks im ausgewählten Ordner anzuzeigen. Alle Werte werden in den von Ihnen gewählten [Einheiten](../../personal/profiles.md#units--formats) angezeigt.

- *Anzahl der **Tracks** im Ordner* — Zeigt die Anzahl der im ausgewählten Ordner enthaltenen Tracks an.
- *Gesamtsumme der* **Distanzen** — Die Gesamtlänge aller Tracks im ausgewählten Ordner, gemessen in den von Ihnen gewählten Einheiten, wird angezeigt.
- *Summe der* **Anstiege** — Die Daten geben den gesamten Höhengewinn über alle Tracks im ausgewählten Ordner an.
- *Summe der* **Abstiege** — Dieser Parameter ist die Summe der Höhenverluste auf allen Tracks im ausgewählten Ordner.
- *Summe der* **Dauer** *Zeit* — Zeigt die Gesamtzeit an, die zum Absolvieren aller Tracks im ausgewählten Ordner benötigt wurde.
- *Gesamt**Größe** der heruntergeladenen Dateien in MB* — Die Gesamtgröße der heruntergeladenen Dateien in Megabyte zeigt an, wie viel Speicherplatz alle Tracks im ausgewählten Ordner auf Ihrem Gerät belegen.


### Ordneraktionen {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Sortierfunktion für Tracks in "Meine Orte" Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Tracks in "Meine Orte" iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Die Aktionen im Ordner helfen Ihnen, Tracks zu organisieren, zu sortieren und zu importieren, um Ihre Navigationsdaten zu strukturieren.  

So öffnen Sie die Ordneraktionen:

- Öffnen Sie den Tab "Tracks" in "Meine Orte".
- Navigieren Sie zu dem Ordner, den Sie verwalten möchten.
- Tippen Sie auf das *Drei-Punkte-Menü* in der oberen rechten Ecke, um das Menü für Ordneraktionen zu öffnen.

***Aktionen im Ordnermenü:***

- [Auswählen](#selection-mode) — Tippen Sie auf die gewünschten Ordner und Tracks, um Aktionen aus dem Menü im *Auswahlmodus* anzuwenden.
- [Unterordner sortieren](#sort-by) — Wenden Sie eine Sortierreihenfolge (z. B. nach Name, Datum) auf alle Unterordner und Tracks auf jeder Ebene an.
- [Intelligenten Ordner hinzufügen](../tracks/smart-folder.md#how-to-create-smart-folder) — Sortiert Routen und Tracks automatisch nach von Ihnen festgelegten Kriterien.
- [Importieren](#import) — Laden Sie GPX- oder andere Track-Dateien von Ihrem Gerät in OsmAnd zur Offline-Nutzung hoch.
- **Neuen Ordner hinzufügen** — Um Ihre Routen und Tracks in logische Kategorien zu organisieren, legen Sie sie in verschiedenen Ordnern ab. Dies hilft, Ihre Navigationsinformationen zu strukturieren.


### Ordner löschen {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Meine Orte mit Tracks in Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Kontextmenü eines Tracks in iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

Sie können einen Ordner mit allen darin enthaltenen Tracks löschen. Um dies zu tun:

- Tippen Sie auf das *Drei-Punkte-Menü* im Feld des zu löschenden Ordners.
- Am unteren Rand des Menüs finden Sie die Option **Ordner löschen**.
- ***HINWEIS: Diese Aktion ist unumkehrbar.***


## Track importieren / exportieren {#import--export-track}

### Importieren {#import}

Das Import-Werkzeug ermöglicht es Ihnen, Tracks aus externen Dateien für die Offline-Navigation und -Analyse hinzuzufügen. Methoden zum Importieren von Tracks:

1. **Direkter Dateiimport:**

    - Tippen Sie auf eine GPX-, KML- oder KMZ-Datei aus Messaging-Apps, E-Mail, Google Drive oder Dateimanagern.
    - Wählen Sie "In OsmAnd öffnen", wenn Sie dazu aufgefordert werden.
    - Der importierte Track wird im Ordner **Import** in *My Places* gespeichert.
    - Schritte: Tippen Sie auf die GPX-Datei → In OsmAnd öffnen.

2. **Import über das Menü *My Places*:**

    - Öffnen Sie das Menü *My Places → Tracks*.
    - Wählen Sie die zu importierende GPX-Datei aus.

    *Zusätzliche Optionen:*

    - **GPX-Dateien mit einem Track** - importieren Sie den gesamten Track direkt.
    - **GPX-Dateien mit mehreren Tracks** - wählen Sie, ob Sie die einzelne GPX-Datei importieren oder bestimmte Tracks auswählen möchten.

***HINWEIS:*** *Tracks, die manuell zum OsmAnd-Ordner auf Ihrem Gerät hinzugefügt werden, werden automatisch importiert, ohne dass die Anwendung neu gestartet werden muss.*  


### Exportieren {#export}

<Tabs groupId="operating-systems" queryString="current-os">

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

Es gibt mehrere Möglichkeiten, eine oder mehrere Track-Dateien in einen beliebigen Messenger, eine E-Mail, einen Dateimanager oder eine App zu exportieren.  

1. Über [*Track-Kontextmenü → Teilen*](../../map/tracks/track-context-menu.md#options).

2. Über *My Places-Menü → Tracks → Ordner- / Track-Menü*:

    - Um einen [**einzelnen Track zu exportieren**](#track-menu), wählen Sie das Menü des Tracks.
    - Für den [**Export mehrerer Tracks**](#track-folder), wählen Sie das Menü des gewünschten Ordners.

3. Über [Lokale Sicherungsdatei](../../personal/import-export.md#export). Exportieren von GPX-Tracks als `.osf`-Dateien.


## Verwandte Artikel {#related-articles}

- [Track auf der Karte anzeigen](../../map/tracks/index.md)
- [Auf Karte analysieren](../../map/tracks/index.md#analyze-track-on-map)
- [Track-Kontextmenü](../../map/tracks/track-context-menu.md)
- [Navigation nach Track](../../navigation/setup/gpx-navigation.md)
- [Reiseaufzeichnung](../../plugins/trip-recording.md)