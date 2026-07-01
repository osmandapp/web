---
source-hash: 2c2da04b9fb150c2b952067bc055c902a59f045bf4f357803361cc55a3be1856
sidebar_position: 5
sidebar_label: Tracks
title: Tracks
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

Der Web-Planer bietet Ihnen eine einfache Möglichkeit, direkt im Browser mit Ihren persönlichen Daten zu arbeiten. Nach der Anmeldung können Sie Ihre Tracks öffnen, anpassen, neue erstellen oder Dateien von Ihrem Computer hochladen. 

Alle Änderungen werden automatisch über [OsmAnd Cloud](../personal/osmand-cloud.md) synchronisiert, sodass alles, was Sie im Web aktualisieren, auf Ihren Geräten erscheint, und alles, was Sie auf Ihrem Telefon erstellen, hier ebenfalls angezeigt wird. Dadurch können Sie mühelos zwischen Plattformen wechseln und Ihre Daten konsistent halten, wo immer Sie OsmAnd verwenden.


## So verwenden Sie es {#how-to-use}

Es handelt sich um eine kostenpflichtige Funktion <ProFeature/>. Um sie zu nutzen, melden Sie sich mit Ihrem OsmAnd Pro-Konto an.

![Track login](@site/static/img/web/track_login.png) ![Track login](@site/static/img/web/track_login_2.png)

Der Tracks-Bereich enthält alle trackbezogenen Tools und Aktionen. Die folgenden Optionen sind verfügbar:

- Tracks aus [OsmAnd Cloud](#cloud-tracks) anzeigen.
- Tracks auf der Karte hinzufügen (Ordner **Auf Karte sichtbar**).
- Alle Track-Informationen und Diagramme anzeigen
- Tracks bearbeiten und zur Cloud hinzufügen.
- Tracks herunterladen und löschen.
- Neue Ordner erstellen oder löschen.
- Ordner als OSF- oder OBF-Sammlung herunterladen.


## Auf der Karte sichtbar {#visible-on-the-map}

Die Ansicht **Auf Karte sichtbar** listet alle Tracks auf, die derzeit auf der Karte angezeigt werden. Jeder Track kann von der Haupttabelle Tracks aus zu dieser Liste hinzugefügt werden, indem Sie die Option **⋮ → Make track visible** verwenden.

Tracks, die auf der Karte sichtbar sind, werden blau hervorgehoben, während derzeit ausgeblendete Tracks grau erscheinen. Ein Schalter neben jedem Track ermöglicht es Ihnen, ihn schnell anzuzeigen oder auszublenden. Der Button **Alle ausblenden** schaltet alle sichtbaren Tracks auf einmal aus.

Unter der Hauptliste zeigt der Abschnitt **Zuletzt sichtbar** Tracks an, die zuvor auf der Karte angezeigt wurden. Dadurch können Sie einen Track einfach wieder aktivieren, ohne ihn erneut in Ihren Ordnern oder in OsmAnd Cloud suchen zu müssen.

![Visible on the map](@site/static/img/web/visible_new.png) ![Visible on the map](@site/static/img/web/visible_new_2.png)


## Track-Ordner-Menü {#track-folder-menu}

![Track folder menu](@site/static/img/web/collection_new.png)

Klicken Sie auf den Drei-Punkte-Button (⋮), um das *Track-Ordner*-Menü zu öffnen. Von hier aus können Sie:

 - Als OSF herunterladen.
 - Als OBF-Sammlung herunterladen. Exportieren Sie den Ordner im OsmAnd-Binärformat und wählen Sie entweder eine [OBF-Datei](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) oder ein [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **OBF-Datei**. Sie können eine Offline-OBF-Karte herunterladen und sie mit OsmAnd auf Ihrem Gerät öffnen. Sie eignet sich zum Anzeigen einer großen Anzahl von Tracks auf der Karte.
      -  **Travel OBF**. Sie können auch eine Karte von Tracks als Reisebuch importieren, das es Ihnen ermöglicht, einzelne Tracks auf der Karte auszuwählen und sie wie normale GPX-Dateien zu verwenden. Ein Reisebuch unterstützt auch Funktionen wie das Anzeigen von Tracks als Punkte, das Filtern von Tracks nach Aktivitätstyp und das Filtern von Wegpunkten.
 - Umbenennen. Öffnet einen Dialog, in dem Sie einen neuen Namen für den ausgewählten Ordner eingeben können. Die Änderung wird an OsmAnd Cloud synchronisiert und erscheint auf allen verbundenen Geräten.
 - Löschen. Öffnet einen Bestätigungsdialog. Das Löschen eines Ordners entfernt ihn dauerhaft zusammen mit allen enthaltenen Tracks. Diese Aktion wird ebenfalls über OsmAnd Cloud synchronisiert.

![Track folder menu](@site/static/img/web/collection_rename.png) ![Track folder menu](@site/static/img/web/collection_delete.png)

### Smart Folders {#smart-folders}

**Smart Folders**, die auf Mobilgeräten erstellt wurden, können über OsmAnd Cloud synchronisiert und in der Webversion angezeigt werden. Damit sie im Web erscheinen, muss die Synchronisierung von [OsmAnd-Einstellungen](../personal/osmand-cloud.md#select-data-to-back-up) in den Cloud-Einstellungen aktiviert sein.  
Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

Smart Folders werden derzeit als Teil der globalen Einstellungen gespeichert, daher werden sie nur dann in die Cloud hochgeladen, wenn die Einstellungssynchronisierung aktiv ist. Nach dem Erstellen oder Bearbeiten eines Smart Folders wird empfohlen, eine manuelle Synchronisierung durchzuführen, um die Daten zu aktualisieren.

Im Web werden Smart Folders in der Track-Liste mit einem Sternsymbol angezeigt, wodurch sie sich leicht von regulären Ordnern unterscheiden lassen. Der Ordnername wird zuerst synchronisiert, während die Track-Liste davon abhängt, wie der Ordner auf dem Gerät konfiguriert ist.

Tracks werden nur angezeigt, wenn die Smart-Folder-Konfiguration im Web unterstützt wird. Dazu gehören sowohl [Filtereinstellungen](../personal/tracks/smart-folder.md#search-filter) als auch [Gruppierungsoptionen](../personal/tracks/smart-folder.md#managing-smart-folders). Bei nicht unterstützten Parametern (z. B. nächstgelegene Stadt) kann der Ordner ohne Tracks erscheinen. Für beste Kompatibilität verwenden Sie gängige Parameter wie Aktivität, Datum, Entfernung oder Dauer.

Die Synchronisierung von Smart Folders kann je nach Plattform und Sync-Konfiguration variieren. Für konsistente Ergebnisse stellen Sie sicher, dass die Cloud-Synchronisierung auf allen Geräten aktiviert und auf dem neuesten Stand ist.

Das Drei-Punkte-Menü (⋮) bietet zusätzliche Aktionen für den Smart Folder. Sie können den Ordner als OSF herunterladen, als OBF-Sammlung herunterladen, umbenennen oder löschen.

![Smart Folders](@site/static/img/web/smart_folder_new.png) ![Smart Folders](@site/static/img/web/smart_folder_menu_new.png)


## Cloud-Tracks {#cloud-tracks}

GPX-Tracks, die Sie in [OsmAnd Cloud](../personal/osmand-cloud.md) haben, sind nach der Anmeldung zur Anzeige und Bearbeitung verfügbar. Nur für **Pro-Nutzer** <ProFeature/> und für [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start)-Nutzer (die ihre Daten auch nach Ablauf ihres Pro-Abonnements herunterladen können).

Wenn Sie einen Track auswählen, zentriert die Karte automatisch und passt die Zoomstufe an, um den gesamten Track im sichtbaren Kartenbereich anzuzeigen.

Sie können auch die Schaltfläche **Fokus** verwenden, um alle anderen Favoriten und Tracks auf der Karte auszublenden, sodass Sie den ausgewählten Track leichter überprüfen können. Deaktivieren Sie den Fokus-Modus, um die Sichtbarkeit anderer Kartenobjekte wiederherzustellen.

Die folgenden Funktionen sind verfügbar, nachdem Sie einen Cloud-Track ausgewählt haben:
- *Information* - Anzeige der Track-Daten.
- *Höhe* - Höhen-Diagramm.
- *Geschwindigkeit* - Geschwindigkeitsdiagramm.
- *Steigung* - Steigungsdiagramm.
- *Höhe (Satellit) neu berechnen* - Berechnet die Höhenwerte für den ausgewählten Track neu und zeigt sie im Höhen-Diagramm an.
- *Straßentyp* - Zerlegt den Track in Segmente nach Straßeneinstufung.
- *Oberfläche* - Zeigt die Arten von Track-Oberflächen entlang der Route.
- *Glätte* - Zeigt die Glätte der Segmente basierend auf OSM-Tags an.

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_new.png) ![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_details_new.png)


## Verwandte Artikel {#related-articles}

- [Tracks verwalten](../personal/tracks/manage-tracks.md)
- [Tracks-Analyzer](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)