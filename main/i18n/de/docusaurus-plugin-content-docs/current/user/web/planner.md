---
source-hash: 52ded05518745579095a24f9a900f0796f5fbe819edde8236e9a6024572bbbdf
sidebar_position: 5
sidebar_label:  Route planen
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

Der OsmAnd Web-Routenplaner ermöglicht es Ihnen, Navigationsrouten zu erstellen, Tracks zu planen und lokale Dateien direkt von Ihrem Browser aus zu verwalten. Dieses Web-Tool ist nützlich, um detaillierte Reiserouten zu erstellen, die Sie mit Ihrer App synchronisieren oder mit anderen teilen können.


## Navigationsroute {#navigation-route}

Um eine Navigationsroute zu erstellen, folgen Sie diesen Schritten:

- **Klicken Sie mit der rechten Maustaste** auf die Karte, um Wegpunkte hinzuzufügen:

  - *Navigieren von*. Legen Sie den Startpunkt fest.
  - *Navigieren nach*. Legen Sie das Ziel fest.
  - *Navigieren über*. Fügen Sie bei Bedarf Zwischenpunkte hinzu.

- Nach dem Festlegen von Start- und Endpunkt wird die Route auf der Karte angezeigt.

- Im Block **Route**:

  - Verschieben Sie bei Bedarf die Start- und Endpunkte.
  - Bearbeiten Sie die Wegpunkte und wählen Sie den gewünschten Routentyp (z. B. Auto, Fahrrad, Fußgänger).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Wählen Sie das entsprechende **Routenprofil** für verschiedene Navigationsoptionen.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Klicken Sie auf die orangefarbenen Kreise entlang der Route, um detaillierte Navigationsanweisungen anzuzeigen.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- Um die Route zu teilen, kopieren Sie die URL. Beispiel: [https://test.osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://test.osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Track erstellen und lokale Dateien {#create-track-and-local-files}

Das [**Route planen**](../plan-route/create-route.md)-Tool von OsmAnd Web ermöglicht es Ihnen, Tracks ähnlich wie in der mobilen App zu erstellen und zu bearbeiten. So können Sie Tracks erstellen und verwalten:


***Eine neue Route erstellen:***

- *Klicken Sie mit der rechten Maustaste* auf die Karte und wählen Sie **Neue Route erstellen**.
- Alternativ verwenden Sie die Schaltfläche **Track erstellen** im Menü *Lokal* (befindet sich auf der rechten Seite mit den Schaltflächen *Bleistift* und *Hochladen*).


***Tracks verwalten:***

- **Navigationsprofil auswählen**. Wählen Sie ein Profil (z. B. Wandern, Fahren) für bestimmte Routenabschnitte (*Neue Segmente*) oder für die gesamte Route (*Alle Segmente*).
- **Wegpunkte hinzufügen**. Klicken Sie auf die Karte, um neue Punkte hinzuzufügen.
- **Route speichern**. Speichern Sie Ihre Route zur späteren Verwendung.
- **Routendetails anzeigen**. Greifen Sie auf detaillierte Trackinformationen zu, einschließlich Länge, Dauer und Gelände.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route.png)


***Tracks importieren und erstellen:***

- **Track importieren**. Sie können jede GPX-Datei in den Bereich **Lokal** hochladen, indem Sie [osmand.net/map](https://osmand.net/map) besuchen.
- **Track erstellen**. Erstellen Sie manuell einen neuen Track, indem Sie Wegpunkte auswählen.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route_2.png)


***Lokale Track-Aktionen und Informationen:***

Das Menü **Lokaler Track** bietet drei Bereiche zur Bearbeitung: **Info**, **Track** und **Wegpunkte**.

**Info-Bereich**:

- *In Cloud speichern*. Speichern Sie Ihren Track in OsmAnd Cloud für den geräteübergreifenden Zugriff.
- *Beschreibung hinzufügen*. Fügen Sie Notizen zum Track hinzu.
- *Umbenennen*. Ändern Sie den Tracknamen.
- *Neu berechnen*. Höheninformationen hinzufügen oder aktualisieren.
- *Höhe*. Zeigen Sie das Höhenprofil an.
- *Geschwindigkeitsdiagramm*. Zeigen Sie Geschwindigkeitsdaten über den Track an.
- *Steigungsdiagramm*. Zeigen Sie Steigungsänderungen entlang der Route an.
- *Straßendetails*. Zeigen Sie detaillierte Informationen wie Straßentyp, Oberfläche und Steigung an.
- *GPX herunterladen*. Exportieren Sie den Track als GPX-Datei ([Pro-Funktion](../purchases/index.md)).
- *Track schließen*. Schließen Sie die Track-Bearbeitungsansicht.
- *Track löschen*. Löschen Sie den Track dauerhaft.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route_3.png)

**Track-Bereich**:

- Trackpunkte anzeigen und bearbeiten.
- Punkte bei Bedarf neu anordnen oder löschen.

**Wegpunkte-Bereich**:

- Track-Wegpunkte anzeigen und verwalten.
- Die Sichtbarkeit von Wegpunkten auf der Karte umschalten.
- Einzelne Wegpunkte bei Bedarf löschen.

**Abbiegungen-Bereich**:

- Detaillierte Informationen zu Abbiegungen entlang des Tracks anzeigen.

  ![OsmAnd Web Create Track](@site/static/img/web/create_route_1.png)


***Zusätzliche Funktionen:***

- **Mit App synchronisieren**. Speichern Sie Routen in OsmAnd Cloud und greifen Sie auf Ihrer mobilen App darauf zu.
- **Benutzerdefinierte Routenprofile**. Passen Sie Profile an verschiedene Aktivitäten wie Radfahren oder Wandern an.
- **Teilbare Routen**. Kopieren und teilen Sie Routen-URLs für die gemeinsame Planung.

> *Zuletzt aktualisiert: Januar 2025*