---
source-hash: 52104063be1e1f495b5c9faaaa8cd1c009b92fb4dccba395827634a48aa85dd8
sidebar_position: 3
title: Smart Folder (Filter)
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

Die Funktion **Smart Folder** bietet leistungsstarke Werkzeuge zum Organisieren und Verwalten Ihrer Tracks. Eine der wichtigsten Funktionen ist die Möglichkeit, Dateien auf der Registerkarte *Tracks* im Menü *Meine Orte* anhand von Kriterien wie Dauer, Länge oder Geschwindigkeit zu filtern.

Mit dieser Funktion können Sie schnell bestimmte Tracks finden, die Ihren Anforderungen entsprechen. Gefilterte Ergebnisse können als **Smart Folder** gespeichert werden, was einen bequemen Zugriff auf dynamisch aktualisierte Track-Sammlungen ermöglicht.


## Suchfilter {#search-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![Meine Orte Tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Meine Orte Tracks](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***So wenden Sie einen Filter an:***

- Tippen Sie auf das Symbol *Suchen* und dann in der Zeile [*Sortieren nach*](./manage-tracks.md#sort-by) auf *Filter*.

- **Wählen Sie die erforderlichen Filtereinstellungen**, um Ihre Track-Suche zu verfeinern.

- Tippen Sie unten rechts auf **Anzeigen**, um die gefilterten Ergebnisse anzuzeigen. Die Anzahl der übereinstimmenden Tracks wird in Klammern angezeigt.

- Um alle aktiven Filter zu **löschen**, tippen Sie auf **Alle zurücksetzen**.

- Um den aktuellen Filtersatz als neuen **Smart Folder** zu **speichern**, tippen Sie auf das Speichern-Symbol in der oberen rechten Ecke des Bildschirms.


### Verfügbare Filter {#available-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Meine Orte Tracks](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Meine Orte Tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Name** – Tracks nach Titel suchen. Geben Sie einen vollständigen oder teilweisen Namen ein, um passende Tracks anzuzeigen.
- **Ordner** – Wählen Sie einen oder mehrere Ordner aus, um Tracks nach ihrem Speicherort zu filtern.
- **Dauer** – Filtern Sie Tracks nach ihrer aufgezeichneten Dauer, indem Sie einen Bereich in Stunden und Minuten festlegen.
- **Zeit in Bewegung** – Geben Sie den Zeitbereich an, der während der Aufzeichnung in Bewegung verbracht wurde.
- **Länge** – Legen Sie einen bestimmten Bereich in Kilometern oder Meilen fest, um Tracks mit einer bestimmten Länge zu finden.
- **Durchschnittsgeschwindigkeit** – Filtern Sie Tracks nach [Durchschnittsgeschwindigkeit](../../widgets/info-widgets.md#average-speed).
- **Sensordaten-Gruppe.**
    Wenden Sie Filter basierend auf externen Sensordaten an, darunter:
    - Sensor-Geschwindigkeit, durchschnittlich.
    - Sensor-Geschwindigkeit, max.
    - Herzfrequenz, durchschnittlich.
    - Herzfrequenz, max.
    - Fahrrad-Trittfrequenz, durchschnittlich.
    - Fahrrad-Trittfrequenz, max.
    - Fahrrad-Leistung, durchschnittlich.
    - Fahrrad-Leistung, max.
    - Temperatur, durchschnittlich.
    - Temperatur, max.
- **Max. Geschwindigkeit** – Wählen Sie Tracks mit bestimmten maximalen Geschwindigkeitsbereichen aus.
- **Bergauf** und **Bergab** – Filtern Sie Tracks anhand positiver oder negativer Höhenunterschiede.
- **Durchschnittliche Höhe** und **Max. Höhe** – Finden Sie Tracks mit bestimmten durchschnittlichen oder maximalen Höhendaten.
- **Erstellungsdatum** – Filtern Sie Tracks, die innerhalb eines bestimmten Datumsbereichs erstellt wurden.
- **Nächste Städte** – Zeigen Sie Tracks an, die in der Nähe ausgewählter Städte oder Orte verlaufen.
- **Aktivitätstyp** (*nur Android*) – Filtern Sie Tracks basierend auf dem in der GPX-Datei aufgezeichneten [Aktivitätstyp](../../map/tracks/track-context-menu.md#track-information-activity) (z. B. Radfahren, Wandern).
- **Land** – Filtern Sie Tracks nach dem Land oder der Region, in der sie aufgezeichnet wurden.
- **Farbe** und **Breite** – Wählen Sie Tracks nach zugewiesener Farbe oder Linienbreite aus.
- **Andere** – Zusätzliche Filter für spezielle Eigenschaften:
    - *Auf Karte sichtbar*. Zeigt nur auf der Karte angezeigte Tracks an.
    - *Mit Wegpunkten*. Zeigt Tracks an, die bestimmte Wegpunkte enthalten.


## Smart Folder {#smart-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Meine Orte Tracks Sortierfunktion Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Meine Orte Tracks](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Ein **Smart Folder** ist eine dynamische Sammlung von Tracks, die automatisch basierend auf bestimmten Filterkriterien aktualisiert wird. Er bietet erweiterte Werkzeuge zum effizienten Organisieren, Suchen und Verwalten von Tracks.

***Vorteile von Smart Folders:***

1. **Automatisierte Organisation.**
    Enthält automatisch Tracks, die vordefinierten Regeln entsprechen, wie z. B. Erstellungsdatum oder Dauerbereich.
2. **Filtern und Suchen.**
    Ermöglicht schnelle Suchen innerhalb von Tracks mithilfe erweiterter Filter und Schlüsselwörter.
3. **Dynamische Aktualisierung.**
    Aktualisiert den Inhalt automatisch, um die neuesten Tracks anzuzeigen, die den Kriterien entsprechen.
4. **Regeln anpassen.**
    Erstellen Sie personalisierte Track-Sammlungen, indem Sie benutzerdefinierte Filterregeln definieren.


### Wie man einen Smart Folder erstellt {#how-to-create-smart-folder}

Um einen **Smart Folder** zu erstellen, folgen Sie diesen Schritten:

1. Tippen Sie auf das Symbol mit dem ***Drei-Punkte-Menü*** auf der Registerkarte *Tracks* im Menü *Meine Orte*.

2. Wählen Sie im Dropdown-Menü **Smart Folder hinzufügen** aus.

3. Konfigurieren Sie die Einstellungen:
   - **Ordner benennen**. Geben Sie einen Namen ein, um den Ordner zu identifizieren.
   - Geben Sie **Track-Filterparameter** an. Wenden Sie die erforderlichen Filter mit den verfügbaren [Filter](#available-filters)-Optionen an.

4. **Speichern** Sie die Einstellungen.
    - Tippen Sie auf **Anzeigen**, um eine Vorschau der Tracks anzuzeigen.
    - Wählen Sie die Schaltfläche **Speichern**, um den *Smart Folder* fertigzustellen.

Der neu erstellte **Smart Folder** aktualisiert seinen Inhalt automatisch mit Tracks, die den ausgewählten Kriterien entsprechen.


### Smart Folder verwalten {#managing-smart-folders}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Meine Orte Smart Folder verwalten Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![Meine Orte Smart Folder verwalten Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Meine Orte Smart Folder verwalten iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![Meine Orte Smart Folder verwalten iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios.png)

</TabItem>

</Tabs>

Der **Smart Folder** wird mit einem einzigartigen Symbol in der Ordnerliste auf der Registerkarte Tracks angezeigt. Um den Ordner zu verwalten, tippen Sie auf das *Drei-Punkte-Menü* daneben (*Android*) und *lang tippen* (*iOS*) oder öffnen Sie den Ordner und verwenden Sie das Symbol in der oberen rechten Ecke.

***Verfügbare Aktionen:***

- **Details** – Zeigen Sie die vollständige Liste der im Ordner enthaltenen Tracks an.

- **Alle Tracks auf der Karte anzeigen** (*nur Android*) – Zeigen Sie alle Ordner-Tracks auf der Karte an.
    *HINWEIS: Das Laden vieler Tracks kann die Leistung beeinträchtigen.*

- **Namen bearbeiten** (*Android*) / **Umbenennen** (*iOS*) – Ändern Sie den Ordnernamen zur einfacheren Identifizierung.

- **Aktualisieren** – Aktualisieren Sie den Inhalt des Ordners manuell, um sicherzustellen, dass er die neuesten Tracks enthält.

- **Standard-Aussehen ändern** (*Android*) – Ändert das Anzeige-Aussehen aller Tracks im Ordner.

- **Filter bearbeiten** – Ändern Sie die Track-Filtereinstellungen für den aktuellen Smart Folder. Details finden Sie unter [Suchfilter](#search-filter).

- **Exportieren** – Exportieren Sie alle Tracks im Smart Folder über die Funktion [Import/Export](../../personal/import-export.md). Sie werden zum Menü *Einstellungen → Aktionen-Tab* weitergeleitet.

- **Ordner löschen** – Entfernen Sie den Smart Folder, ohne seine Tracks zu löschen.
    *WARNUNG: Diese Aktion ist irreversibel und fordert eine Bestätigungsnachricht an.*

- **Verschieben** (*iOS*) – Ermöglicht das Verschieben des Ordners in einen anderen vorhandenen Ordner oder das Erstellen eines neuen.

- **Auswählen** – Verwenden Sie den [Auswahlmodus](./manage-tracks.md#selection-mode) für bestimmte Track-Aktionen innerhalb des Ordners.


## Verwandte Artikel {#related-articles}

- [Track auf Karte anzeigen](../../map/tracks/index.md)
- [Auf Karte analysieren](../../map/tracks/index.md#analyze-track-on-map)
- [Track-Kontextmenü](../../map/tracks/track-context-menu.md)
- [Navigation nach Track](../../navigation/setup/gpx-navigation.md)
- [Aufzeichnung der Fahrt](../../plugins/trip-recording.md)

> *Zuletzt aktualisiert: März 2025*