---
source-hash: a9c1197c17b28116cbb632b0f5ff60955b164b060b1645a7d57f3853b8646653
sidebar_position: 8
sidebar_label:  Navigation
title: Navigation on the Web
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

Verwenden Sie **Navigation im Web**, um eine Route auf der Karte zu erstellen und die Abbiege-für-Abbiege-Anleitung vorab anzusehen. Sie berechnet eine Route für den ausgewählten Fortbewegungsmodus, zeigt die erwartete Distanz und Zeit an und ermöglicht es Ihnen, Höhenänderungen und bevorstehende Abbiege zu überprüfen. Sie können die Route in den Navigations-Einstellungen (z. B. durch Erlauben oder Vermeiden bestimmter Straßentypen oder die Verwendung von Fahrzeugparametern) feinabstimmen und bei Bedarf mehrere Routenpunkte verwenden.


## Route starten {#start-a-route}

Im leeren Zustand fordert die Navigation Sie auf, Routenpunkte hinzuzufügen: *Klicken Sie auf die Karte, um Start- und Zielpunkte festzulegen*.

Routenpunkte können aus dem Routenpanel bereitgestellt werden. Wenn Sie **Startpunkt festlegen** oder **Ziel festlegen** auswählen, zeigt das Feld Vorschläge wie *Aktueller Standort* und zuvor verwendete Punkte aus der Verlauf an. Sie können gespeicherte Vorschläge mit *Verlauf löschen* entfernen.

Sie können auch Koordinaten direkt in den Routenpunktfeldern eingeben, im Format Breitengrad, Längengrad (z. B. 48.23737, 24.40830). Andere Koordinatenformate oder geteilte Links werden nicht immer erkannt. Wenn ein Ort nicht korrekt geparst wird, versuchen Sie, ihn in lat,lon umzuwandeln oder den Ort mit der Suche zu finden.

Die Navigation folgt einem einfachen Ablauf: Der erste Punkt wird zum Start, und der nächste Punkt wird zum Ziel. Sobald beide Punkte festgelegt sind, wird die Route berechnet und auf der Karte angezeigt.

![Web-Navigation](@site/static/img/web/navigation_start.png)

### Routenpunkte verwalten {#manage-route-points}

Sie können eine Route über Start → Ziel hinaus erweitern, indem Sie Zwischenpunkte hinzufügen. Verwenden Sie die Plus- (+) -Schaltfläche neben der Punkte-Liste, um einen Zwischenpunkt hinzuzufügen (ein neuer Punkt wird oberhalb des Ziels eingefügt). Zwischenpunkte können mit der Minus- (–) -Schaltfläche entfernt werden.

Start und Ziel austauschen — tauscht Start und Ziel aus, während Zwischenpunkte unverändert bleiben. Die Aktion ist mit einem Symbol markiert, das zwei Pfeile in entgegengesetzte Richtungen zeigt.

![Web-Navigation](@site/static/img/web/navigation_points.png)


## Routing-Profil {#routing-profile}

Oben im Routenpanel können Sie ein Routing-Profil für Ihre Route auswählen. Eine Reihe gängiger Profile wird als vier Symbole angezeigt. Um weitere Optionen aufzurufen, öffnen Sie das Drei-Punkte-Menü neben den Profilsymbolen. Es erweitert die vollständige Liste der verfügbaren Profile.

Routing-Profile im Web-Planer verwenden dieselben Routing-Regeln und Einstellungen wie in der OsmAnd-Mobile-App. Für Details, wie Routen berechnet werden und wie Routing-Parameter funktionieren, siehe [OsmAnd Routing](https://osmand.net/docs/user/navigation/routing/osmand-routing).

Wenn Sie das Profil wechseln, aktualisiert die Navigation die Route, um dem ausgewählten Fortbewegungsmodus zu entsprechen.

![Web-Navigation](@site/static/img/web/navigation_profile.png)


## Navigationseinstellungen {#navigation-settings}

Um anzupassen, wie Routen berechnet werden, öffnen Sie die Einstellungen mit dem Zahnrad-Symbol im Routenpanel (für Navigations-Einstellungen in der OsmAnd-Mobile-App siehe [hier](https://osmand.net/docs/user/navigation/guidance/navigation-settings)). Die Einstellungen sind in Abschnitte unterteilt, die Sie erweitern/einklappen können. Die Menge der Abschnitte und Optionen hängt vom ausgewählten Routing-Profil ab, sodass Sie für verschiedene Fortbewegungsmodi unterschiedliche Parameter sehen.

Typische Abschnitte umfassen:

- **Allgemein** — profil-spezifische Optionen (z. B. im Auto-Profil können Sie Schalter wie *Kraftstoffsparender Weg* und *Güterlieferung* sehen).
- **Erlauben** — Optionen, die spezifische Straßen- oder Pfadtypen beim Routing erlauben.
- **Vermeiden** — Optionen, die bestimmte Straßentypen oder Situationen von der Route ausschließen (z. B. Vermeidung von Mautstraßen, Fähren, Autobahnen, Tunneln usw.).
- **[Fahrzeugparameter](../navigation/guidance/vehicle-parameters.md)** — verfügbar für fahrzeugbasierte Profile. Ermöglicht die Angabe von Fahrzeugbeschränkungen (wie Abmessungen/Gewicht), die das Routing auf eingeschränkten Straßen beeinflussen können.

![Web-Navigation](@site/static/img/web/navigation_settings.png) ![Web-Navigation](@site/static/img/web/navigation_settings_2.png)


## Track anhängen {#attaching-track}

Der **[An Straßen anheften](https://osmand.net/docs/user/navigation/setup/gpx-navigation?_highlight=attach&_highlight=roads#attach-to-the-roads)**-Block ermöglicht es Ihnen, einen vorhandenen GPX-Track als Basis für die Navigation zu verwenden. OsmAnd Web passt den Track an nahegelegene Straßen an, um Abbiege-für-Abbiege-Anleitungen bereitzustellen.

Wenn Sie Track auswählen anklicken, öffnet der Browser einen Dateiauswahldialog, in dem Sie eine .gpx-Datei von Ihrem Computer auswählen können. Nach der Auswahl eines Tracks:
- Der Track wird auf der Karte angezeigt und zur Routenberechnung verwendet.
- Routenzusammenfassung (Distanz und Zeit) wird im Routenpanel angezeigt.
- Die ausgewählte Datei erscheint unter Ausgewählter Track (mit dem Dateinamen des Tracks).
- Sie können den angehängten Track mit der Minus- (–) -Schaltfläche neben Ausgewählter Track entfernen.


## Routendetails {#route-details}

![Web-Navigation](@site/static/img/web/navigation_info.png) ![Web-Navigation](@site/static/img/web/navigation_turns.png)

Wenn eine Route berechnet wird, zeigt das Panel eine grundlegende Zusammenfassung (Distanz, Zeit, Anstieg/Abstieg) und eine Schaltfläche **Details**. Verwenden Sie Details, um die Routenansicht mit zwei Registerkarten zu öffnen: Info und Abbiege.

Info fasst die Route und Höhenangaben zusammen:
- **Punkte** — die Anzahl der Routenpunkte, die zur Erstellung der Route verwendet werden.
- **Route** — Distanz und Zeit.
- **Anstieg/Abstieg** — Gesamtaufstieg und -abstieg.
- **Höhe (min/durchschn/max)** — Höhenstatistiken für die Route.
- **Höhe (Satellit)** — berechnet die Höhenangaben des Tracks neu unter Verwendung von Geländedaten (DEM) und aktualisiert das Höhen-diagramm.

Unter der Zusammenfassung hilft das Höhenprofil-Diagramm Ihnen, das Routenprofil zu untersuchen. Sie können Höhe und Steigung umschalten und den Schieberegler unter dem Diagramm verwenden, um sich auf einen bestimmten Teil der Route zu konzentrieren.

Verwenden Sie Abbiege für Abbiege-für-Abbiege-Anleitungen. Die Route ist auch mit orangen Kreisen entlang der Linie markiert. Klicken Sie auf einen Kreis, um ein Pop-up mit der entsprechenden Navigationsanweisung zu öffnen. Das Pop-up kann auch enthalten:
- Vermeiden — vermeidet diesen spezifischen Abschnitt.
- Way-ID — ein Link zum zugrunde liegenden OSM-Way für diesen Teil der Route.

Sie können die Route direkt auf der Karte feinabstimmen, indem Sie Routenmarker an eine andere Stelle ziehen. Wenn Sie einen Marker anklicken und an eine andere Straße (oder zu einem nahegelegenen Ort) ziehen und dann loslassen:
- OsmAnd Web berechnet die Route neu, um durch die neue Position zu führen.
- Der verschobene Marker wird in einen neuen Zwischenpunkt umgewandelt.
- Der neue Zwischenpunkt erscheint im Routenpanel als zusätzlicher Punkt, der oberhalb des Ziels eingefügt wird, und die Routenzusammenfassung wird entsprechend aktualisiert.
- Sie können den hinzugefügten Via-Punkt genauso verwalten wie andere [Zwischenpunkte](#manage-route-points).

![Web-Navigation](@site/static/img/web/navigation_on_map.png)

### Herunterladen und Speichern {#download-and-save}

Verwenden Sie *Herunterladen*, um die Route als Track zu exportieren. Der Download-Dialog bietet zwei Optionen:
**Vollständige Track-Daten** — enthält vollständige Daten, einschließlich Navigationsanweisungen.
**[Vereinfachter Track](https://osmand.net/docs/user/plan-route/create-route/?current-os=ios&#save-route)** — eine leichtere Version, die besser für die Verwendung mit anderen Apps geeignet ist.

Wenn Sie die GPX in Drittanbieter-Apps öffnen möchten, wählen Sie Vereinfachten Track für bessere Kompatibilität. Dies hilft, Fälle zu vermeiden, in denen eine andere App nach dem Import ein falsches Segment anzeigt.

Unterschiede:
- Vollständige Track-Daten können Routing-/Navigationsinformationen zusätzlich zur Track-Geometrie enthalten (nützlich, wenn Sie Navigationsanweisungen beibehalten oder die Route in OsmAnd neu bearbeiten möchten).
- Vereinfachter Track exportiert eine sauberere GPX für andere Apps, indem Routing-/Navigationsdaten entfernt und nur die Track-Form belassen werden. Wegpunkte werden beim Exportieren eines vereinfachten Tracks erhalten.

Sie können die Route als Track speichern, indem Sie *In die Cloud speichern / In OsmAnd Cloud hochladen* verwenden. Dies öffnet einen Dialog, in dem Sie das Speichern in Cloud-Tracks bestätigen, den Namen bearbeiten, optional einen Ordner wählen und dann Speichern oder Abbrechen können. Wenn Sie nicht angemeldet sind, öffnet *In die Cloud speichern / In OsmAnd Cloud hochladen* die Preisseite.

![Web-Navigation](@site/static/img/web/download_options.png)

### Route teilen {#share-a-route}

Um die Route zu teilen, kopieren Sie die URL. Beispiel: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

Beim Öffnen eines geteilten Links wird die Route auf der Karte wiederhergestellt. Falls erforderlich, können Sie das [Routing-Profil](#routing-profile) manuell im Routenpanel ändern.


## Verwandte Artikel {#related-articles}

- [Routen-Vorbereitung](../navigation/setup/route-navigation.md)
- [Navigations-Einstellungen](../navigation/guidance/navigation-settings.md)
- [Über OsmAnd-Routing](../navigation/routing/osmand-routing.md)
- [Fahrzeugparameter](../navigation/guidance/vehicle-parameters.md)
- [Route planen](../web/planner.md)