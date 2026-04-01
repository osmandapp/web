---
source-hash: cbed8959bdf8985ec20e474f00773eeda1334dfea7ce3c5a54eb702f18fa6ee2
sidebar_position: 3
title: Intelligenter Ordner (Filter)
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

Die Funktion **Intelligenter Ordner** bietet leistungsstarke Werkzeuge zur Organisation und Verwaltung Ihrer Tracks. Eine der Hauptfunktionen ist die Möglichkeit, Dateien im *Tracks-Tab* des Menüs *Meine Orte* nach Kriterien wie Dauer, Länge oder Geschwindigkeit zu filtern.  

Diese Funktion ermöglicht es Ihnen, schnell bestimmte Tracks zu finden, die Ihren Anforderungen entsprechen. Gefilterte Ergebnisse können als **Intelligenter Ordner** gespeichert werden, was einen bequemen Zugriff auf dynamisch aktualisierte Tracksammlungen ermöglicht.


## Suchfilter {#search-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***So wenden Sie einen Filter an:***

- Tippen Sie auf das *Suchen*-Symbol und dann auf *Filter* in der Zeile [*Sortieren nach*](./manage-tracks.md#sort-by).

- **Wählen Sie die erforderlichen Filtereinstellungen**, um Ihre Tracksuche zu verfeinern.

- Tippen Sie auf **Anzeigen** in der unteren rechten Ecke, um die gefilterten Ergebnisse zu sehen. Die Anzahl der übereinstimmenden Tracks wird in Klammern angezeigt.

- **Um alle** aktiven Filter zu löschen, tippen Sie auf **Alle zurücksetzen**.

- **Um** den aktuellen Filtersatz als neuen **Intelligenten Ordner** zu speichern, tippen Sie auf das Speichern-Symbol in der oberen rechten Ecke des Bildschirms.


### Verfügbare Filter {#available-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Name** — Tracks nach Titel suchen. Geben Sie einen vollständigen oder teilweisen Namen ein, um passende Tracks anzuzeigen.
- **Ordner** — Wählen Sie einen oder mehrere Ordner aus, um Tracks nach ihrem Speicherort zu filtern.
- **Dauer** — Filtern Sie Tracks nach ihrer aufgezeichneten Dauer, indem Sie einen Bereich in Stunden und Minuten festlegen.
- **Zeit in Bewegung** — Geben Sie den Zeitbereich an, der während der Aufzeichnung in Bewegung verbracht wurde.
- **Länge** — Legen Sie einen bestimmten Bereich in Kilometern oder Meilen fest, um Tracks einer bestimmten Länge zu finden.
- **Durchschnittsgeschwindigkeit** — Filtern Sie Tracks nach der [Durchschnittsgeschwindigkeit](../../widgets/info-widgets.md#average-speed).
- **Sensordaten-Gruppe.**  
    Wenden Sie Filter basierend auf externen Sensordaten an, einschließlich:
    - Sensorgeschwindigkeit, Durchschnitt.
    - Sensorgeschwindigkeit, Max.
    - Herzfrequenz, Durchschnitt.
    - Herzfrequenz, Max.
    - Fahrrad-Trittfrequenz, Durchschnitt.
    - Fahrrad-Trittfrequenz, Max.
    - Fahrrad-Leistung, Durchschnitt.
    - Fahrrad-Leistung, Max.
    - Temperatur, Durchschnitt.
    - Temperatur, Max.
- **Max. Geschwindigkeit** — Wählen Sie Tracks mit bestimmten maximalen Geschwindigkeitsbereichen aus.
- **Anstieg** und **Gefälle** — Filtern Sie Tracks basierend auf positiven oder negativen Höhenänderungen.
- **Durchschnittliche Höhe** und **Maximale Höhe** — Finden Sie Tracks mit spezifischen durchschnittlichen oder maximalen Höhendaten.
- **Erstellungsdatum** — Filtern Sie Tracks, die innerhalb eines bestimmten Datumsbereichs erstellt wurden.
- **Nächstgelegene Städte** — Zeigen Sie Tracks an, die in der Nähe ausgewählter Städte oder Ortschaften verlaufen.
- **Aktivitätstyp** — Filtern Sie Tracks basierend auf dem [activities](../../map/tracks/track-context-menu.md#ttrack-activity-type) type recorded in the GPX file (z. B. Radfahren, Wandern).
- **Land** — Filtern Sie Tracks nach dem Land oder der Region, in der sie aufgezeichnet wurden.
- **Farbe** und **Breite** — Wählen Sie Tracks nach zugewiesener Farbe oder Linienbreite aus.
- **Andere** — Zusätzliche Filter für besondere Merkmale:
    - *Auf Karte sichtbar*. Zeigt nur Tracks an, die auf der Karte angezeigt werden.
    - *Mit Wegpunkten*. Zeigt Tracks an, die bestimmte Wegpunkte enthalten.


## Intelligenter Ordner {#smart-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Ein **Intelligenter Ordner** ist eine dynamische Sammlung von Tracks, die automatisch auf der Grundlage bestimmter Filterkriterien aktualisiert wird. Er bietet erweiterte Werkzeuge zur effizienten Organisation, Suche und Verwaltung von Tracks.  

***Vorteile von Intelligenten Ordnern:***

1. **Automatisierte Organisation.**  
    Schließt automatisch Tracks ein, die vordefinierten Regeln entsprechen, wie z. B. Erstellungsdatum oder Dauerbereich.
2. **Filtern und Suchen.**  
    Ermöglicht schnelle Suchen innerhalb von Tracks mit erweiterten Filtern und Schlüsselwörtern.
3. **Dynamische Aktualisierung.**  
    Aktualisiert den Inhalt automatisch, um die neuesten Tracks anzuzeigen, die den Kriterien entsprechen.
4. **Regeln anpassen.**  
    Erstellen Sie personalisierte Tracksammlungen, indem Sie benutzerdefinierte Filterregeln definieren.


### Wie man einen Intelligenten Ordner erstellt {#how-to-create-smart-folder}

Um einen **Intelligenten Ordner** zu erstellen, folgen Sie diesen Schritten:

1. Tippen Sie auf das ***Drei-Punkte-Menü***-Symbol im *Tracks*-Tab des *Meine Orte*-Menüs.

2. Wählen Sie **Intelligenten Ordner hinzufügen** aus dem Dropdown-Menü.

3. Konfigurieren Sie die Einstellungen:
   - **Benennen Sie den Ordner**. Geben Sie einen Namen ein, um den Ordner zu identifizieren.
   - Geben Sie **Track-Filterparameter** an. Wenden Sie die erforderlichen Filter mit den verfügbaren [Filter](#available-filters)-Optionen an.

4. **Speichern** Sie die Einstellungen.
    - Tippen Sie auf **Anzeigen**, um eine Vorschau der Tracks zu erhalten.
    - Wählen Sie die Schaltfläche **Speichern**, um den *Intelligenten Ordner* fertigzustellen.

Der neu erstellte **Intelligente Ordner** aktualisiert seinen Inhalt automatisch mit Tracks, die den ausgewählten Kriterien entsprechen.


### Intelligente Ordner verwalten {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places Managing Smart Folders Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![My places Managing Smart Foldersn Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr_new.png)

Der **Intelligente Ordner** wird mit einem einzigartigen Symbol in der Ordnerliste im Tracks-Tab angezeigt. Um den Ordner zu verwalten, tippen Sie auf das *Drei-Punkte-Menü* daneben, um auf die verfügbaren Aktionen zuzugreifen:

- **Details** — Zeigen Sie die vollständige Liste der im Ordner enthaltenen Tracks an.
- **Alle Tracks auf der Karte anzeigen** — Zeigen Sie alle Tracks des Ordners auf der Karte an.  
    *HINWEIS: Das Laden vieler Tracks kann die Leistung beeinträchtigen.*
- **Umbenennen** — Ändern Sie den Ordnernamen zur einfacheren Identifizierung.
- **Aktualisieren** — Aktualisieren Sie den Inhalt des Ordners manuell, um sicherzustellen, dass er die neuesten Tracks enthält.
- **Filter bearbeiten** — Ändern Sie die Track-Filtereinstellungen für den aktuellen Intelligenten Ordner. Siehe [Suchfilter](#search-filter) für Details.
- **Exportieren** — Exportieren Sie alle Tracks im Intelligenten Ordner über die Funktion [Import/Export](../../personal/import-export.md). Sie werden zu *Menü → Einstellungen → Aktionen-Tab* weitergeleitet.
- **Ordner löschen** — Entfernen Sie den Intelligenten Ordner, ohne seine Tracks zu löschen.  
    *WARNUNG: Diese Aktion ist unumkehrbar und fordert eine Bestätigungsnachricht an.*

Sie können auch den Ordner öffnen und auf das *Drei-Punkte-Menü* in der *rechten oberen Ecke* tippen, um zusätzliche Aktionen aufzurufen:

- **Auswählen** — Verwenden Sie den [Auswahlmodus](./manage-tracks.md#selection-mode) für spezifische Track-Aktionen innerhalb des Ordners.
- **Nach organisieren** — Organisieren Sie Tracks im Intelligenten Ordner automatisch in Gruppen basierend auf einem ausgewählten Parameter. Verfügbare Gruppierungstypen umfassen *General*, *Date & time*, *Location*, *Speed*, *Altitude & elevation* und *Sensor data*. 

Einige Gruppierungsparameter sind nur mit einem OsmAnd Pro-Abonnement verfügbar. Kostenlose Parameter umfassen *Activity*, *Year of creation* und *Nearest city*. Alle anderen Parameter sind mit einem <ProFeature/>-Label gekennzeichnet.

Für numerische Parameter (wie Entfernung, Dauer, Geschwindigkeit oder Höhe) ist ein Dialog *Schrittgröße festlegen* verfügbar. Verwenden Sie den Schieberegler, um Wertebereiche für die Gruppierung zu definieren.

Für PRO-Parameter können Sie die Gruppierungsvorschau einrichten (z. B. den Schrittgrößen-Selektor öffnen und sehen, wie Tracks gruppiert werden), aber das Anwenden dieser Änderungen erfordert ein aktives Abonnement. Wenn Sie einen PRO-Parameter auswählen oder auf die Schaltfläche Entsperren tippen, öffnet sich der Bildschirm Plan auswählen. Zuvor angewendete Gruppierungen bleiben auch nach Ablauf des Abonnements sichtbar, aber das Bearbeiten oder Anwenden neuer PRO-basierter Gruppierungen erfordert ein aktives Abonnement.

</TabItem>

<TabItem value="ios" label="iOS">

![My places Managing Smart Folders iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![My places Managing Smart Foldersn iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios_new.png)

Der **Intelligente Ordner** wird mit einem einzigartigen Symbol in der Ordnerliste im Tracks-Tab angezeigt. Um den Ordner zu verwalten, *langes Tippen* Sie auf den Ordnernamen, um auf die verfügbaren Aktionen zuzugreifen:

- **Umbenennen**— Ändern Sie den Ordnernamen zur einfacheren Identifizierung.
- **Exportieren** — Exportieren Sie alle Tracks im Intelligenten Ordner über die Funktion [Import/Export](../../personal/import-export.md). Sie werden zu *Menü → Einstellungen → Aktionen-Tab* weitergeleitet.
- **Verschieben** — Ermöglicht es Ihnen, den Ordner in einen anderen bestehenden Ordner zu verschieben oder einen neuen zu erstellen.
- **Löschen** — Entfernen Sie den Intelligenten Ordner, ohne seine Tracks zu löschen.  
    *WARNUNG: Diese Aktion ist unumkehrbar und fordert eine Bestätigungsnachricht an.*

Sie können auch den Ordner öffnen und auf das Symbol in der *rechten oberen Ecke* tippen, um zusätzliche Aktionen aufzurufen:

- **Auswählen** — Verwenden Sie den [Auswahlmodus](./manage-tracks.md#selection-mode) für spezifische Track-Aktionen innerhalb des Ordners.
- **Aktualisieren** — Aktualisieren Sie den Inhalt des Ordners manuell, um sicherzustellen, dass er die neuesten Tracks enthält.
- **Filter bearbeiten** — Ändern Sie die Track-Filtereinstellungen für den aktuellen Intelligenten Ordner. Siehe [Suchfilter](#search-filter) für Details.

</TabItem>

</Tabs>

<!--
The **Smart folder** is displayed with a unique icon in the folder list in the Tracks tab. To manage the folder, tap the *three-dot menu* next to it (*Android*) and *long tap* (*iOS*) or open the folder and use the icon in the top-right corner.

***Available Actions:***

- **Details** — View the complete list of tracks contained in the folder.

- **Show all tracks on the map** (*Android only*) — Display all folder tracks on the map.  
    *NOTE: Loading many tracks may affect performance.*

- **Edit name** (*Android*) / **Rename** (*iOS*) — Change the folder name for easier identification.

- **Refresh** — Manually update the folder's content to ensure it includes the latest tracks.

- **Change default appearance** (*Android*) — Changes the display appearance of all tracks in the folder.

- **Edit filter** — Modify the track filter settings for the current Smart Folder. See [Search Filter](#search-filter) for details.

- **Export** — Export all tracks in the Smart Folder via the [Import/Export](../../personal/import-export.md) feature. You will be redirected to *Menu → Settings → Actions tab*.

- **Delete folder** — Remove the Smart Folder without deleting its tracks.  
    *WARNING: This action is irreversible and will prompt a confirmation message.*

- **Move** (*iOS*) — Allows you to move the folder to another existing folder or create a new one.

- **Select** — Use [Selection Mode](./manage-tracks.md#selection-mode) for specific track actions within the folder.
-->

## Verwandte Artikel {#related-articles}

- [Track auf Karte anzeigen](../../map/tracks/index.md)
- [Auf Karte analysieren](../../map/tracks/index.md#analyze-track-on-map)
- [Track-Kontextmenü](../../map/tracks/track-context-menu.md)
- [Navigation entlang eines Tracks](../../navigation/setup/gpx-navigation.md)
- [Aufzeichnung einer Reise](../../plugins/trip-recording.md)