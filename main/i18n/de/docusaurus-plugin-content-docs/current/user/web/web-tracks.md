---
source-hash: ece3e6010ee14839c5fe53b38593cda3c765a31a9395566df04b16ce2b73c3b4
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

![Track-Anmeldung](@site/static/img/web/track_login.png) ![Track-Anmeldung](@site/static/img/web/track_login_2.png)

Der Tracks-Bereich enthält alle trackbezogenen Tools und Aktionen. Die folgenden Optionen sind verfügbar:

- Tracks aus [OsmAnd Cloud](#cloud-tracks) anzeigen.
- Tracks auf der Karte hinzufügen (Ordner **Auf Karte sichtbar**).
- Alle Track-Informationen und Diagramme anzeigen
- Tracks bearbeiten und zur Cloud hinzufügen.
- Tracks herunterladen und löschen.
- Neue Ordner erstellen oder löschen.
- Ordner als OSF- oder OBF-Sammlung herunterladen.


## Auf der Karte sichtbar {#visible-on-the-map}

Die Ansicht **Auf Karte sichtbar** listet alle Tracks auf, die derzeit auf der Karte angezeigt werden. Jeder Track kann von der Haupttabelle Tracks aus zu dieser Liste hinzugefügt werden, indem Sie die Option **⋮ → Track sichtbar machen** verwenden.

Tracks, die auf der Karte sichtbar sind, werden blau hervorgehoben, während derzeit ausgeblendete Tracks grau erscheinen. Ein Schalter neben jedem Track ermöglicht es Ihnen, ihn schnell anzuzeigen oder auszublenden. Der Button **Alle ausblenden** schaltet alle sichtbaren Tracks auf einmal aus.

Unter der Hauptliste zeigt der Abschnitt **Zuletzt sichtbar** Tracks an, die zuvor auf der Karte angezeigt wurden. Dadurch können Sie einen Track einfach wieder aktivieren, ohne ihn erneut in Ihren Ordnern oder in OsmAnd Cloud suchen zu müssen.

![Auf der Karte sichtbar](@site/static/img/web/visible_new.png) ![Auf der Karte sichtbar](@site/static/img/web/visible_new_2.png)


## Track-Ordner-Menü {#track-folder-menu}

![Track-Ordner-Menü](@site/static/img/web/collection_new.png)

Klicken Sie auf den Drei-Punkte-Button (⋮), um das *Track-Ordner*-Menü zu öffnen. Von hier aus können Sie:

 - Als OSF herunterladen.
 - Als OBF-Sammlung herunterladen. Exportieren Sie den Ordner im OsmAnd-Binärformat und wählen Sie entweder eine [OBF-Datei](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) oder ein [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **OBF-Datei**. Sie können eine Offline-OBF-Karte herunterladen und sie mit OsmAnd auf Ihrem Gerät öffnen. Sie eignet sich zum Anzeigen einer großen Anzahl von Tracks auf der Karte.
      -  **Travel OBF**. Sie können auch eine Karte von Tracks als Reisebuch importieren, das es Ihnen ermöglicht, einzelne Tracks auf der Karte auszuwählen und sie wie normale GPX-Dateien zu verwenden. Ein Reisebuch unterstützt auch Funktionen wie das Anzeigen von Tracks als Punkte, das Filtern von Tracks nach Aktivitätstyp und das Filtern von Wegpunkten.
 - Umbenennen. Öffnet einen Dialog, in dem Sie einen neuen Namen für den ausgewählten Ordner eingeben können. Die Änderung wird an OsmAnd Cloud synchronisiert und erscheint auf allen verbundenen Geräten.
 - Löschen. Öffnet einen Bestätigungsdialog. Das Löschen eines Ordners entfernt ihn dauerhaft zusammen mit allen enthaltenen Tracks. Diese Aktion wird ebenfalls über OsmAnd Cloud synchronisiert.

![Track-Ordner-Menü](@site/static/img/web/collection_rename.png) ![Track-Ordner-Menü](@site/static/img/web/collection_delete.png)


## Cloud-Tracks {#cloud-tracks}

GPX-Tracks, die Sie in [OsmAnd Cloud](../personal/osmand-cloud.md) haben, sind nach der Anmeldung zur Anzeige und Bearbeitung verfügbar. Nur für **Pro-Nutzer** <ProFeature/> und für [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start)-Nutzer (die ihre Daten auch nach Ablauf ihres Pro-Abonnements herunterladen können).

Die folgenden Funktionen sind verfügbar, nachdem Sie einen Cloud-Track ausgewählt haben:

![OsmAnd Web Cloud-GPX-Bearbeitung](@site/static/img/web/cloud_track.png)

- Informationsbildschirme:
  - *Information* - Anzeige der Track-Daten.
  - *Höhe* - Höhen-diagramm.
  - *Geschwindigkeit* - Geschwindigkeitsdiagramm.
  - *Steigung* - Steigungsdiagramm.
  - *Einstellungen* - Liste der Navigationsprofile für das Tool *Route erstellen*.
  - *Wenden* - Eine generierte Liste approximativer Wendeanweisungen basierend auf der Track-Geometrie.
  - *Straßentyp* - Zerlegt den Track in Segmente nach Straßeneinstufung.
  - *Oberfläche* - Zeigt die Arten von Track-Oberflächen entlang der Route.
  - *Glatte* - Zeigt die Glätte von Segmenten basierend auf OSM-Tags an.

![OsmAnd Web Cloud-GPX-Bearbeitung](@site/static/img/web/cloud_track_turns.png) ![OsmAnd Web Cloud-GPX-Bearbeitung](@site/static/img/web/cloud_track_details.png)

- Aktionsbuttons:
  - *Track bearbeiten* - Cloud-Track lokal zur Bearbeitung hinzufügen (_Lokale Bearbeitung*-Button auf dem Panel).
  - *GPX herunterladen* - Lädt den Track auf den PC herunter.
  - *Höhe (Satellit) neu berechnen* - Zeigt das Höhen-diagramm des ausgewählten Tracks an.
  - *Track löschen* - Löscht den Track.
  - *Track schließen* - Schließt den Track.


## Verwandte Artikel {#related-articles}

- [Tracks verwalten](../personal/tracks/manage-tracks.md)
- [Tracks-Analyzer](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)