---
source-hash: c35b48b75c008612b036302e055181306b64e216afa3939f782a05d93c7ed8f5
sidebar_position: 7
sidebar_label: Tracks-Analyse
title: Tracks-Analyse
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

**Tracks Analyzer** ist ein Web-Tool, das hilft, wiederkehrende Track-Segmente zwischen ausgewählten Punkten auf der Karte zu analysieren. Zum Beispiel können Sie es nutzen, um Ihre Fahrten auf demselben Anstieg oder Ihre täglichen Arbeitswege zu vergleichen. Um diese Funktion mit Ihren eigenen Daten zu nutzen, benötigen Sie ein OsmAnd Pro-Konto mit Tracks, die mit OsmAnd Cloud synchronisiert sind – andernfalls sind Ihre Tracks im Web Planner nicht verfügbar. Es scannt Ihre Tracks und findet alle Segmente, die durch die gewählten Ort(e) verlaufen, sodass Sie Geschwindigkeit, Höhe, Distanz und Zeit über mehrere Aktivitäten hinweg vergleichen können.

## Verwendung {#how-to-use}

1. [Melden Sie sich](./web-cloud.md#login) mit Ihrem OsmAnd Pro-Konto beim Web Map Portal an. Ihre Tracks müssen mit [OsmAnd Cloud](./web-cloud.md#cloud-sync) synchronisiert sein.
2. Öffnen Sie *Menü → Tracks-Analyse* (Symbol mit Diagramm und Lupe).
3. Wählen Sie im Panel **Tracks auswählen** entweder **Alle Tracks** oder nur die benötigten Ordner aus.
4. Klicken Sie mit der rechten Maustaste auf die Karte und wählen Sie **Punkt A**. Um ein Segment zwischen zwei Punkten zu analysieren, legen Sie auch **Punkt B** fest.
5. Überprüfen Sie die Liste der gefundenen Segmente, [sortieren Sie sie und wählen Sie aus, welche Parameter angezeigt werden sollen](#sorting-and-visible-parameters).

Bei einem Punkt findet der Analyzer Track-Segmente, die durch den ausgewählten Ort verlaufen. Bei zwei Punkten findet und analysiert er Segmente zwischen Punkt A und Punkt B.

![Tracks-Analyse](@site/static/img/web/web_analyzer_select.png) ![Tracks-Analyse](@site/static/img/web/web_analyzer_points_new.png)


## Sortierung und sichtbare Parameter {#sorting-and-visible-parameters}
Nachdem der Analyzer passende Segmente gefunden hat, werden die Ergebnisse als Liste angezeigt. Die Liste kann mit der Option **Sortieren** neu geordnet werden, was die Reihenfolge der Segmente ändert. Zusätzlich öffnet der Button **Felder** das Panel Sichtbare Parameter, in dem Sie steuern können, welche Analyseparameter für jedes Segment angezeigt werden. Sie können alle verfügbaren Parameter anzeigen oder nur die für Ihre Analyse relevanten auswählen.

Die verfügbaren Parameter umfassen:

- Max. Geschwindigkeit, Durchschn. Geschwindigkeit und Min. Geschwindigkeit.
- Max. Höhe, Durchschn. Höhe und Min. Höhe.
- Bergauf und Bergab.
- Datum.
- Zeitraum, Startzeit, Endzeit, Dauer und Zeit in Bewegung.
- Länge.

![Tracks-Analyse](@site/static/img/web/web_analyzer_sort.png) ![Tracks-Analyse](@site/static/img/web/web_analyzer_fields.png)

## Datenanalyse {#data-analysis}

Jedes passende Segment wird in der Ergebnisliste links angezeigt. Für jedes Segment wird eine Reihe berechneter Parameter angezeigt, abhängig davon, welche Sichtbare Parameter aktiviert sind.

Jedes Segment hat auch ein Menü mit drei Punkten (⋮) mit den folgenden Aktionen:
- Track öffnen — öffnet den vollständigen Track, der mit dem ausgewählten Segment zusammenhängt.
- Track ausblenden / Track sichtbar machen — steuert, ob der Track auf der Karte angezeigt wird.
- Ausschließen — entfernt das Segment aus den aktuellen Analyseergebnissen.

![Tracks-Analyse](@site/static/img/web/web_analyzer_menu.png)

### Diagramme {#graphs}

Unter der Karte zeigt der Analyzer ein Diagramm an, das die ausgewählten Segmente visualisiert. Das Diagramm stellt Daten nur für die Segmente dar, die zwischen den ausgewählten Punkten gefunden wurden, nicht für die gesamten Tracks.

Das Diagramm unterstützt den Wechsel zwischen verschiedenen Datentypen:
- Höhe.
- Steigung.
- Geschwindigkeit.
Nur ein Datentyp wird zur Zeit angezeigt, und die Änderung aktualisiert das Diagramm sofort.

Wenn mehrere Segmente vorhanden sind, zeigt das Diagramm Daten für mehrere Segmente gleichzeitig. Ein Selector über dem Diagramm ermöglicht es, auszuwählen, wie viele Segmentdiagramme gleichzeitig angezeigt werden, und zwischen ihnen zu wechseln.

![Tracks-Analyse](@site/static/img/web/web_analyzer_altitude.png) ![Tracks-Analyse](@site/static/img/web/web_analyzer_tracks.png)

## Verwandte Artikel {#related-articles}

- [Tracks](../web/web-tracks.md)
- [Tracks verwalten](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)