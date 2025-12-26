---
source-hash: f973f145e5f4519df92ee087ead534986bb074b9e858cae169c3d3c6b00b1839
sidebar_position: 9
sidebar_label:  Route planen
title: Route auf der Webseite planen
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


## Übersicht {#overview}

Der OsmAnd Web-Routenplaner ermöglicht es Ihnen, Navigationsrouten zu erstellen, Tracks zu planen und lokale Dateien direkt in Ihrem Browser zu verwalten. Dieses Web-Tool ist nützlich, um detaillierte Reiserouten zu erstellen, die Sie mit Ihrer App synchronisieren oder mit anderen teilen können.


<!--
## Navigation Route {#navigation-route}

To create a navigation route, follow these steps:

- **Right-click** on the map to add waypoints:

  - *Navigate from*. Set the starting point.
  - *Navigate to*. Set the destination.
  - *Navigate via*. Add intermediate points if needed.

- After setting the start and end points, the route will be displayed on the map.

- In the **Route** block:

  - Move the start and end points if needed.
  - Edit the waypoints and choose the desired route type (e.g., car, bicycle, walking).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Select the appropriate **Route Profile** for different navigation options.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Click on the orange circles along the route to view detailed navigation instructions.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- To share the route, copy the URL. Example: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

-->


## Track und lokale Dateien erstellen {#create-track-and-local-files}

Das Werkzeug [**Route planen**](../plan-route/create-route.md) von OsmAnd Web ermöglicht es Ihnen, Tracks ähnlich wie in der mobilen App zu erstellen und zu bearbeiten. So können Sie Tracks erstellen und verwalten:


***Eine neue Route erstellen:***

- *Mit der rechten Maustaste klicken* auf die Karte und **Neue Route erstellen** auswählen.
- Alternativ können Sie die Schaltfläche **Track erstellen** im Menü *Lokal* verwenden (befindet sich auf der rechten Seite mit den Schaltflächen *Stift* und *Hochladen*).


***Tracks verwalten:***

- **Navigationsprofil auswählen**. Wählen Sie ein Profil (z. B. Wandern, Fahren) für bestimmte Routenabschnitte (*Neue Segmente*) oder für die gesamte Route (*Alle Segmente*).
- **Wegpunkte hinzufügen**. Klicken Sie auf die Karte, um neue Punkte hinzuzufügen.
- **Route speichern**. Speichern Sie Ihre Route für die zukünftige Verwendung.
- **Routendetails anzeigen**. Greifen Sie auf detaillierte Track-Informationen zu, einschließlich Länge, Dauer und Gelände.
  ![OsmAnd Web Track erstellen](@site/static/img/web/create_route.png)


***Tracks importieren und erstellen:***

- **Track importieren**. Sie können jede GPX-Datei in den Bereich **Lokal** hochladen, indem Sie [osmand.net/map](https://osmand.net/map) besuchen.
- **Track erstellen**. Erstellen Sie manuell einen neuen Track, indem Sie Wegpunkte auswählen.
  ![OsmAnd Web Track erstellen](@site/static/img/web/create_route_2.png)


***Aktionen und Informationen zu lokalen Tracks:***

Das Menü **Lokaler Track** bietet drei Bereiche zur Bearbeitung: **Info**, **Track** und **Wegpunkte**.

**Info-Bereich**:

- *In Cloud speichern*. Speichern Sie Ihren Track in der OsmAnd Cloud für den geräteübergreifenden Zugriff.
- *Beschreibung hinzufügen*. Fügen Sie Notizen zum Track hinzu.
- *Umbenennen*. Ändern Sie den Namen des Tracks.
- *Neu berechnen*. Höhendaten hinzufügen oder aktualisieren.
- *Höhe*. Zeigen Sie das Höhenprofil an.
- *Geschwindigkeitsdiagramm*. Zeigen Sie Geschwindigkeitsdaten entlang des Tracks an.
- *Steigungsdiagramm*. Zeigen Sie Steigungsänderungen entlang der Route an.  
- *Straßendetails*. Zeigen Sie detaillierte Informationen wie Straßentyp, Oberfläche und Steilheit an.
- *GPX herunterladen*. Exportieren Sie den Track als GPX-Datei ([Pro-Funktion](../purchases/index.md)).
- *Track schließen*. Schließen Sie die Bearbeitungsansicht des Tracks.
- *Track löschen*. Löschen Sie den Track dauerhaft.
  ![OsmAnd Web Track erstellen](@site/static/img/web/create_route_3.png)

**Track-Bereich**:

- Trackpunkte anzeigen und bearbeiten.
- Punkte nach Bedarf neu anordnen oder löschen.

**Wegpunkte-Bereich**:

- Track-Wegpunkte anzeigen und verwalten.
- Die Sichtbarkeit von Wegpunkten auf der Karte umschalten.
- Wegpunkte bei Bedarf einzeln löschen.

**Abbiegungen-Bereich**:

- Detaillierte Informationen zu Abbiegungen entlang des Tracks anzeigen.

  ![OsmAnd Web Track erstellen](@site/static/img/web/create_route_1.png)


***Zusätzliche Funktionen:***

- **Mit App synchronisieren**. Speichern Sie Routen in der OsmAnd Cloud und greifen Sie auf Ihrer mobilen App darauf zu.
- **Benutzerdefinierte Routenprofile**. Passen Sie Profile an verschiedene Aktivitäten wie Radfahren oder Wandern an.
- **Teilbare Routen**. Kopieren und teilen Sie Routen-URLs für die gemeinsame Planung.