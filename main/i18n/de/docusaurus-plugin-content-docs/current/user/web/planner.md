---
source-hash: 8126842666c1b2fbd00d6cdb9fb5d9a688401ea2ca74976ccf168038defc6772
sidebar_position: 5
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


## Navigationsroute {#navigation-route}

Um eine Navigationsroute zu erstellen, folgen Sie diesen Schritten:

- **Klicken Sie mit der rechten Maustaste** auf die Karte, um Wegpunkte hinzuzufügen:

  - *Navigieren von*. Legen Sie den Startpunkt fest.
  - *Navigieren nach*. Legen Sie das Ziel fest.
  - *Navigieren über*. Fügen Sie bei Bedarf Zwischenpunkte hinzu.

- Nachdem Sie den Start- und Endpunkt festgelegt haben, wird die Route auf der Karte angezeigt.

- Im **Route**-Block:

  - Verschieben Sie bei Bedarf den Start- und Endpunkt.
  - Bearbeiten Sie die Wegpunkte und wählen Sie den gewünschten Routentyp (z. B. Auto, Fahrrad, zu Fuß).

  ![OsmAnd Web Route erstellen](@site/static/img/web/navigation.png)

- Wählen Sie das passende **Routenprofil** für verschiedene Navigationsoptionen.

  ![OsmAnd Web Route erstellen](@site/static/img/web/profile_type.png)

- Klicken Sie auf die orangefarbenen Kreise entlang der Route, um detaillierte Navigationsanweisungen anzuzeigen.

  ![OsmAnd Web Route erstellen](@site/static/img/web/nav_instr.png)

- Um die Route zu teilen, kopieren Sie die URL. Beispiel: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Track und lokale Dateien erstellen {#create-track-and-local-files}

Das Werkzeug [**Route planen**](../plan-route/create-route.md) von OsmAnd Web ermöglicht es Ihnen, Tracks ähnlich wie in der mobilen App zu erstellen und zu bearbeiten. So können Sie Tracks erstellen und verwalten:


***Eine neue Route erstellen:***

- *Klicken Sie mit der rechten Maustaste* auf die Karte und wählen Sie **Neue Route erstellen**.
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