---
source-hash: 52ded05518745579095a24f9a900f0796f5fbe819edde8236e9a6024572bbbdf
sidebar_position: 5
sidebar_label: Planen einer Route
title: Route auf der Website planen
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


<InfoIncompleteArticle/>


## Überblick {#overview}

Der OsmAnd Web-Routenplaner ermöglicht es Ihnen, Navigationsrouten und Tracks zu erstellen und lokale Dateien direkt über Ihren Browser zu verwalten. Dieses Webtool ist nützlich, um detaillierte Reiserouten zu erstellen, die Sie mit Ihrer App synchronisieren oder mit anderen teilen können.


## Navigationsroute {#navigation-route}

Gehen Sie wie folgt vor, um eine Navigationsroute zu erstellen:

- **Klicken Sie mit der rechten Maustaste** auf die Karte, um Wegpunkte hinzuzufügen:

  - *Navigation von*. Legen Sie den Startpunkt fest.
  - *Navigation nach*. Legen Sie das Ziel fest.
  - *Navigation via*. Fügen Sie bei Bedarf Zwischenpunkte hinzu.

- Nach dem Festlegen des Start- und Endpunkts wird die Route auf der Karte angezeigt.

- Im Block **Route**:

  - Verschieben Sie bei Bedarf den Start- und Endpunkt.
  - Bearbeiten Sie die Wegpunkte und wählen Sie den gewünschten Routentyp (z. B. Auto, Fahrrad, Gehen).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Wählen Sie das entsprechende **Routenprofil** für verschiedene Navigationsoptionen.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Klicken Sie auf die orangefarbenen Kreise entlang der Route, um detaillierte Navigationsanweisungen anzuzeigen.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- Um die Route zu teilen, kopieren Sie die URL. Beispiel: [https://test.osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://test.osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Track erstellen und lokale Dateien {#create-track-and-local-files}

Das Tool [**Route planen**](../plan-route/create-route.md) von OsmAnd Web ermöglicht es Ihnen, Tracks ähnlich wie in der mobilen App zu erstellen und zu bearbeiten. So können Sie Tracks erstellen und verwalten:


***Erstellen einer neuen Route:***

- *Klicken Sie mit der rechten Maustaste* auf die Karte und wählen Sie **Neue Route erstellen**.
- Alternativ verwenden Sie die Schaltfläche **Track erstellen** im Menü *Lokal* (befindet sich auf der rechten Seite mit den Schaltflächen *Bleistift* und *Hochladen*).


***Tracks verwalten:***

- **Navigationsprofil auswählen**. Wählen Sie ein Profil (z. B. Wandern, Autofahren) für bestimmte Routenabschnitte (*Neue Segmente*) oder für die gesamte Route (*Alle Segmente*).
- **Wegpunkte hinzufügen**. Klicken Sie auf die Karte, um neue Punkte hinzuzufügen.
- **Route speichern**. Speichern Sie Ihre Route für die zukünftige Verwendung.
- **Routendetails anzeigen**. Greifen Sie auf detaillierte Trackinformationen zu, einschließlich Länge, Dauer und Gelände.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route.png)


***Tracks importieren und erstellen:***

- **Track importieren**. Sie können jede GPX-Datei in den Bereich **Lokal** hochladen, indem Sie [osmand.net/map](https://osmand.net/map) besuchen.
- **Track erstellen**. Erstellen Sie manuell einen neuen Track, indem Sie Wegpunkte auswählen.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route_2.png)


***Aktionen und Informationen für lokale Tracks:***

Das Menü **Lokaler Track** bietet drei Bereiche zur Bearbeitung: **Info**, **Track** und **Wegpunkte**.

**Info-Bereich**:

- *In Cloud speichern*. Speichern Sie Ihren Track in der OsmAnd Cloud für den Zugriff auf verschiedenen Geräten.
- *Beschreibung hinzufügen*. Fügen Sie Notizen zum Track hinzu.
- *Umbenennen*. Ändern Sie den Tracknamen.
- *Neu berechnen*. Höhenprofile hinzufügen oder aktualisieren.
- *Höhenprofil*. Zeigen Sie das Höhenprofil an.
- *Geschwindigkeitsgraph*. Zeigen Sie Geschwindigkeitsdaten über den Track an.
- *Steigungsgraph*. Zeigen Sie Steigungsänderungen entlang der Route an.
- *Straßendetails*. Zeigen Sie detaillierte Informationen wie Straßentyp, Oberfläche und Steigung an.
- *GPX herunterladen*. Exportieren Sie den Track als GPX-Datei ([Pro-Funktion](../purchases/index.md)).
- *Track schließen*. Schließen Sie die Trackbearbeitungsansicht.
- *Track löschen*. Löschen Sie den Track dauerhaft.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route_3.png)

**Track-Bereich**:

- Trackpunkte anzeigen und bearbeiten.
- Punkte neu anordnen oder bei Bedarf löschen.

**Wegpunkte-Bereich**:

- Track-Wegpunkte anzeigen und verwalten.
- Sichtbarkeit von Wegpunkten auf der Karte umschalten.
- Einzelne Wegpunkte bei Bedarf löschen.

**Abbiegungen-Bereich**:

- Detaillierte Informationen zu Abbiegungen entlang des Tracks anzeigen.

  ![OsmAnd Web Create Track](@site/static/img/web/create_route_1.png)


***Zusätzliche Funktionen:***

- **Mit App synchronisieren**. Speichern Sie Routen in der OsmAnd Cloud und greifen Sie auf Ihrer mobilen App darauf zu.
- **Benutzerdefinierte Routenprofile**. Passen Sie Profile an verschiedene Aktivitäten wie Radfahren oder Wandern an.
- **Teilbare Routen**. Kopieren und teilen Sie Routen-URLs für die gemeinsame Planung.

> *Zuletzt aktualisiert: Januar 2025*