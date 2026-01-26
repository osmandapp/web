---
source-hash: efbd8cb409a1e8ef85e36e19d96eeb7a90fa212c810385f1ad6562e2e09d6d40
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

<!--
<InfoIncompleteArticle/>
-->


## Übersicht {#overview}

Der OsmAnd Web-Routenplaner ermöglicht es Ihnen, Navigationsrouten zu erstellen, Tracks zu planen und lokale Dateien direkt aus Ihrem Browser zu verwalten. Dieses Web-Tool ist nützlich, um detaillierte Reiserouten zu erstellen, die Sie mit Ihrer App synchronisieren oder mit anderen teilen können.


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


## Neue Route erstellen {#create-new-route}

Es gibt zwei Möglichkeiten, eine neue Route in Route planen zu starten. Die erste Option ist direkt von der Karte aus: Klicken Sie mit der rechten Maustaste an beliebiger Stelle auf die Karte und wählen Sie **Neue Route erstellen**. Die zweite Option ist vom linken Panel aus: Klicken Sie auf die Schaltfläche **Track erstellen**.

Sobald die Route erstellt ist, fügen Sie Punkte direkt auf der Karte hinzu. Jeder Klick platziert den nächsten Punkt, und der Planer erstellt die Route zwischen den Punkten.

![OsmAnd Web Neue Route erstellen](@site/static/img/web/create_new_route.png)

### Track importieren {#import-track}

Wenn Sie bereits eine Track-Datei haben, können Sie sie in Route planen importieren und weiter damit im Web-Planer arbeiten. Klicken Sie auf die Schaltfläche **Track importieren** und wählen Sie eine GPX-Datei von Ihrem Computer aus. Nach dem Hochladen erscheint der Track in Ihrer lokalen Liste und öffnet sich im Planer, sodass Sie ihn auf der Karte überprüfen und mit der Bearbeitung und Verwaltung in den Track-Panels fortfahren können.

### Lokale Dateien {#local-files}

Alle Routen und Tracks, die Sie in Route planen erstellen oder importieren, werden zur Lokalen Liste im linken Panel hinzugefügt. Dies erleichtert es, mehrere GPX-Dateien an einem Ort zu halten und zwischen ihnen beim Planen zu wechseln.

Jedes Element in der Liste hat einen Umschalter, mit dem Sie den Track schnell auf der Karte anzeigen oder ausblenden können. Wählen Sie einen Track aus der Liste aus, um ihn im Planer zu öffnen und weiter damit zu arbeiten. 

![OsmAnd Web Neue Route erstellen](@site/static/img/web/local_files.png)


## Track verwalten {#manage-track}

Wenn Sie eine Route in Route planen erstellen oder importieren, öffnet sich ein vertikales Track-Panel. Verwenden Sie dieses Panel, um das Routing-Profil zu ändern und die Route zu verwalten. Klicken Sie auf die Profil-Steuerung, um den Dialog **Profil ändern** zu öffnen, wählen Sie das benötigte Profil aus (z. B. Auto, Fahrrad oder Fußgänger) und wählen Sie aus, wie es angewendet werden soll: *Nächste Segmente* wendet das Profil nur auf neue Teile an, die ab diesem Punkt hinzugefügt werden, während *Alle Segmente* die gesamte Route mit dem ausgewählten Profil neu berechnet.

Aus dem Track-Panel können Sie auch gängige Dateiaktionen ausführen. Sie können **In Cloud speichern**, um die Route für späteren Gebrauch zu behalten, **GPX herunterladen**, um sie als Datei zu exportieren, **Track schließen**, um die Bearbeitung zu stoppen, oder **Track löschen**, um sie aus Ihrer lokalen Liste zu entfernen. Diese Aktionen sind auch von den entsprechenden Steuerelementen im [Info-Panel](#info-panel) verfügbar.

![OsmAnd Web Track verwalten](@site/static/img/web/manage_track_new.png) ![OsmAnd Web Track verwalten](@site/static/img/web/change_profile.png)


## Track-Detailpanels {#track-details-panels}

Das lokale Track-Menü umfasst drei Panels: **Info**, **Track** und **Wegpunkte**. Verwenden Sie sie, um Track-Informationen anzuzeigen und Routenpunkte und Wegpunkte zu verwalten.

### Info-Panel {#info-panel}

Das Info-Panel fasst den ausgewählten Track zusammen und zeigt wichtige Routen- und Höhenangaben. Es enthält einen schnellen Überblick über die Routenstatistiken sowie Diagramme und zusätzliche Track-Analysen basierend auf verfügbaren Kartenangaben.

Der Zusammenfassungsabschnitt zeigt:

- Punkte — die Anzahl der Routenpunkte, die zur Erstellung der Route verwendet werden.
- Distanz — die Gesamtlänge der Route.
- Bergauf / bergab — Gesamtaufstieg und Gesamtabstieg entlang der Route.
- Höhe (min/durchschn./max) — Höhenstatistiken für die Route.
- Wenn Höhenangaben fehlen oder aktualisiert werden müssen, verwenden Sie Höhe (Satellit) → neu berechnen, um die Höhe mit Satellitendaten neu zu erstellen (falls verfügbar).

Unter der Zusammenfassung bietet das Panel Diagramme:

- Höhe — ein Höhenprofil der Route.
- Steigung — ein Steigungsdiagramm, das Gradientenänderungen entlang des Tracks zeigt.

Für zusätzliche Track-Details öffnen Sie die Analyseabschnitte:

- Oberfläche — zeigt Oberflächentypen entlang der Route basierend auf OSM-Daten.
- Glätte — zeigt die Segmentglätte basierend auf OSM-Tags.

Gängige Track-Aktionen wie Speichern, Herunterladen, Schließen und Löschen sind auch in diesem Panel verfügbar.

![OsmAnd Web Info-Panel](@site/static/img/web/info_panel.png) ![OsmAnd Web Track verwalten](@site/static/img/web/info_panel_2.png)

### Track-Panel {#track-panel}

Das Track-Panel zeigt die Liste der Routenpunkte, die zur Erstellung des Tracks verwendet werden. Verwenden Sie es, um die Routenstruktur zu überprüfen und zu bearbeiten: Ziehen Sie Punkte, um sie neu anzuordnen, entfernen Sie Punkte mit dem Löschsymbol oder verwenden Sie Alle Punkte löschen, um alle Punkte zu entfernen und neu zu beginnen.

![OsmAnd Web Track-Panel](@site/static/img/web/track_panel.png)

### Wegpunkte-Panel {#waypoints-panel}

Das Wegpunkte-Panel wird verwendet, um Wegpunkte für den ausgewählten Track anzuzeigen und zu verwalten. Wegpunkte können aus dem Kartenkontextmenü hinzugefügt werden — klicken Sie mit der rechten Maustaste auf die Karte und wählen Sie die Option **Wegpunkt hinzufügen**, füllen Sie dann die Wegpunkt-Details aus (wie Name, Symbol und Farbe) und speichern Sie ihn.

In der Wegpunkte-Liste können Sie steuern, ob Wegpunkte auf der Karte angezeigt werden, und einzelne Wegpunkte bei Bedarf entfernen. Um alle Wegpunkte vom Track auf einmal zu entfernen, verwenden Sie *Alle Wegpunkte löschen*.

![OsmAnd Web Wegpunkte-Panel](@site/static/img/web/waypoints_panel.png)


## Verwandte Artikel {#related-articles}

- [Route planen](../plan-route/create-route.md)
- [Reiseführer](../plan-route/travel-guides.md)
- [Navigation](../web/web-navigation.md)