---
source-hash: fe9500be3570d2dbf08995ee5614eb89cd647a44f0360730e48015dced34c738
sidebar_position: 7
sidebar_label: Tracks Analyzer
title: Tracks Analyzer
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

**Tracks Analyzer** ist ein Web-Tool, das hilft, wiederkehrende Track-Segmente zwischen ausgewählten Punkten auf der Karte zu analysieren. Es scannt Ihre Tracks und findet alle Segmente, die durch die gewählten Ort(e) verlaufen, sodass Sie Geschwindigkeit, Höhe, Distanz und Zeit über mehrere Aktivitäten hinweg vergleichen können.

## Verwendung {#how-to-use}

Nach dem Öffnen des Tracks Analyzer (dargestellt als Schraubenschlüssel) öffnet sich das Tool mit einer Kartenansicht und einem leeren Zustand. Von hier aus können Sie mit dem Panel **Tracks auswählen** festlegen, welche Tracks in die Analyse einbezogen werden. Der Analyzer ermöglicht die Arbeit mit allen verfügbaren Tracks oder die Begrenzung der Analyse auf bestimmte Ordner.

Um die Analyse zu starten, legen Sie einen oder zwei Punkte direkt auf der Karte fest. Klicken Sie mit der rechten Maustaste auf den gewünschten Ort und wählen Sie **Punkt A / Punkt B** aus dem Kontextmenü aus. Der Analyzer sucht dann nach Track-Segmenten, die durch den ausgewählten Punkt verlaufen oder zwischen den beiden Punkten liegen.

![Streckenanalysator](@site/static/img/web/web_analyzer_select.png) ![Streckenanalysator](@site/static/img/web/web_analyzer_points.png)


## Sortierung und sichtbare Parameter {#sorting-and-visible-parameters}
Nachdem der Analyzer passende Segmente gefunden hat, werden die Ergebnisse als Liste angezeigt. Die Liste kann mit der Option **Sortieren** neu geordnet werden, was die Reihenfolge der Segmente ändert. Zusätzlich öffnet der Button **Felder** das Panel Sichtbare Parameter, in dem Sie steuern können, welche Analyseparameter für jedes Segment angezeigt werden. Sie können alle verfügbaren Parameter anzeigen oder nur die für Ihre Analyse relevanten auswählen.

Die verfügbaren Parameter sind nach Typ gruppiert:

**Geschwindigkeit**
- Maximale Geschwindigkeit
- Durchschnittsgeschwindigkeit
- Minimale Geschwindigkeit

**Höhe**
- Maximale Höhe
- Durchschnittshöhe
- Minimale Höhe

**Bergauf / Bergab**

**Datum und Uhrzeit**
- Datum
- Startzeit
- Endzeit
- Zeitraum
- Dauer
- Zeit in Bewegung

**Länge**

![Streckenanalysator](@site/static/img/web/web_analyzer_sort.png) ![Streckenanalysator](@site/static/img/web/web_analyzer_fields.png)

## Datenanalyse {#data-analysis}

Jedes passende Segment wird in der Ergebnisliste links angezeigt. Für jedes Segment werden berechnete Parameter angezeigt, abhängig davon, welche sichtbaren Parameter aktiviert sind.

Jedes Segment hat auch ein Menü mit drei Punkten (⋮) mit den folgenden Aktionen:
- Track öffnen — öffnet den vollständigen Track, der mit dem ausgewählten Segment zusammenhängt.
- Track ausblenden / Track sichtbar machen — steuert, ob der Track auf der Karte angezeigt wird.
- Ausschließen — entfernt das Segment aus den aktuellen Analyseergebnissen.

![Streckenanalysator](@site/static/img/web/web_analyzer_menu.png)

### Diagramme {#graphs}

Unter der Karte zeigt der Analyzer ein Diagramm an, das die ausgewählten Segmente visualisiert. Das Diagramm stellt Daten nur für die Segmente dar, die zwischen den ausgewählten Punkten gefunden wurden, nicht für die gesamten Tracks.

Das Diagramm unterstützt den Wechsel zwischen verschiedenen Datentypen:
- Höhe.
- Steigung.
- Geschwindigkeit.
Nur ein Datentyp wird zur Zeit angezeigt, und die Änderung aktualisiert das Diagramm sofort.

Wenn mehrere Segmente vorhanden sind, zeigt das Diagramm Daten für mehrere Segmente gleichzeitig. Ein Selector über dem Diagramm ermöglicht es, auszuwählen, wie viele Segmentdiagramme gleichzeitig angezeigt werden, und zwischen ihnen zu wechseln.

![Streckenanalysator](@site/static/img/web/web_analyzer_altitude.png) ![Streckenanalysator](@site/static/img/web/web_analyzer_tracks.png)

## Verwandte Artikel {#related-articles}

- [Tracks](../web/web-tracks.md)
- [Tracks verwalten](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)