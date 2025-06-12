---
source-hash: 7a908eb0d049f610343ddbeb81ac84c7f787f549729ffd82f824c9c2f9bd25d6
sidebar_position: 3
title:  Suchverlauf
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Überblick {#overview}

Der *Suchverlauf* ist eine Aufzeichnung aller Suchen und Orte, die Sie im Laufe der Nutzung in der App eingegeben oder gesucht haben. Dieses Tool ermöglicht es Ihnen, zuvor gesuchte Orte einfach zu finden und darauf zuzugreifen, was die Navigation erleichtert und Zeit spart.

OsmAnd bietet verschiedene Möglichkeiten, Ihren Suchverlauf anzuzeigen.

- Die [Suchschaltfläche](../widgets/map-buttons.md#search) wird immer auf der Karte angezeigt, und durch Antippen gelangen Sie zum [allgemeinen Bildschirm](#how-to-use) des Tools.
- Gehen Sie zum Hauptmenü von Android *Menü → Suche → Registerkarte Verlauf*.
- Wenn Sie eine Route vorbereiten, tippen Sie auf *Navigation → Ziel festlegen → Suchfeld*.
- Der Informationsblock im Navigationsmenü der [Routenvorbereitung](../navigation/setup/route-navigation.md#navigation-menu) zeigt eine Liste der letzten Zielpunkte an, die ebenfalls Teil des Suchverlaufs sind.
- Der Suchverlauf ist in [Android Auto](../navigation/auto-car.md#search) und [CarPlay](../navigation/car-play.md#search) verfügbar.


## Verwendung {#how-to-use}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![History search](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Der Suchverlauf dient dazu, relevante Informationen über Ihre früheren Aktionen bereitzustellen.

- *Erneute Suche*. Sie können den Suchverlauf verwenden, um zuvor gesuchte Orte oder Adressen erneut zu suchen, ohne die Abfrage erneut eingeben zu müssen.

- *Schneller Zugriff auf häufig besuchte Orte*. Wenn Sie bestimmte Orte häufig besuchen, wie z. B. Ihr Zuhause, Ihre Arbeit oder Lieblingsorte, speichert der Suchverlauf diese Orte und ermöglicht einen schnellen Zugriff darauf.

- *Verfolgen Sie frühere Reisen*. Der Suchverlauf kann nützlich sein, um frühere Reisen und Routen zu verfolgen. Sie können Routen verfolgen, die Sie zuvor zurückgelegt haben, oder [Ihre nächste Route planen](../plan-route/create-route.md) basierend auf früheren.

- *Suche nach Orten über einen bestimmten Zeitraum*. Für die Android-App müssen Sie lange tippen, dann den Monat finden, in dem Sie die Reise gemacht haben, das Löschmenü verlassen und den Namen in das Suchfeld eingeben. Für die iOS-App ist die Suchverlaufsliste bereits nach Monaten in Blöcke unterteilt.

- *Einträge löschen*. Der Suchverlauf bietet die Möglichkeit, frühere Einträge zu [löschen](#delete), was für die Vertraulichkeit oder zur Organisation Ihres Verlaufs nützlich sein kann.


## Verlaufselemente {#history-items}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![History search](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Jedes Feld in der Suchverlaufsliste enthält einige der für die Anwendung verfügbaren **Informationen**.

- Ein Symbol, das den Typ oder die Kategorie des gefundenen Objekts identifiziert.
- Der Objektname, Ort, Adresse oder Typabfrage. Bei Tracks werden Informationen über die Entfernung, die Anzahl der Wegpunkte und die Zeit angezeigt.
- Entfernung von Ihrem aktuellen Standort zum Punkt und Richtung nach Kompass.


### Reihenfolge der Elemente {#order-of-items}

- **Zuletzt verwendete Elemente**. Die neuesten Anfragen oder Orte werden oben in der Liste angezeigt. Dies ermöglicht einen schnellen Zugriff auf zuletzt verwendete Elemente.
- **Chronologische Reihenfolge**. Die Elemente in der Suchverlaufsliste sind in chronologischer Reihenfolge angeordnet, beginnend mit den ältesten oder frühesten Einträgen und endend mit den neuesten oder letzten. Alte Elemente verschieben sich allmählich in der Liste nach unten, wenn neue Einträge hinzugefügt werden, es sei denn, alte Elemente im Suchverlauf wurden verwendet, in diesem Fall werden sie an den Anfang der Liste verschoben.
- In iOS ist die Liste nach Monaten sortiert.

### Objekttyp {#type-of-objects}

Die folgenden **Objekttypen** gelangen in die Suchverlaufsliste:

- **Orte**. Dies kann eine Adresse, ein Firmenname, eine Routennummer, Koordinaten, Markierungen, Points of Interest, OSM-Notizen oder Orte sein, die Sie auf der Karte angetippt haben.
- **Tracks und Wegpunkte**. Die Liste enthält Tracks, die Sie erstellt, aufgezeichnet oder heruntergeladen haben und die Sie in früheren Routen verwendet haben, sowie Wegpunkte, wenn Sie separat zu ihnen navigiert sind.


## Aktionen {#actions}

Im Suchverlauf-Tool können Sie unnötige Abfragen [löschen](#delete), alle auf einmal oder einzelne Elemente. Sie können den Verlauf [exportieren](#export-and-share). Die Android-App bietet eine zusätzliche Aktion zum [Teilen](#share-android) von Suchelementen als [GPX](../../technical/osmand-file-formats/osmand-gpx.md)-Datei.

Sie können die Anzeige des gesamten Suchverlaufs **deaktivieren oder aktivieren**. In diesem Fall werden die Abfragen nicht vom Gerät gelöscht. In Android befindet sich der Schalter auf dem Hauptbildschirm des Tools auf der Registerkarte [Verlauf](#overview). In iOS befindet er sich unter *Menü → Einstellungen → OsmAnd-Einstellungen → Verlauf → Suchverlauf*.


### Löschen {#delete}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![History search](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Nach langer Nutzung von OsmAnd kann die Liste des *Suchverlaufs* zu lang werden, sodass das Löschen von Suchanfragen hilft, die Liste zu bereinigen. Sie können Abfragen löschen, die nicht mehr relevant sind oder die Sie in Zukunft nicht mehr verwenden möchten, was die Suche in der Liste erleichtert, insbesondere wenn Sie bestimmte Suchanfragen schnell finden müssen.

Sie müssen **lange auf eines der Abfrageelemente in der Liste tippen**, um den Bildschirm zum Löschen zu öffnen.

- *Zufällige Elemente auswählen oder abwählen* - tippen Sie auf das gewünschte Element in der Liste.
- *Wählen Sie den Zeitraum aus, der zum Löschen verfügbar ist*, z. B. Tag, letzte 7 Tage oder Monat - aktivieren Sie das Kontrollkästchen mit der Unterüberschrift in der Liste.
- *Sie können den gesamten Verlauf* auf einmal löschen, indem Sie auf die Schaltfläche *Alle auswählen* am unteren Bildschirmrand tippen.
- *Menü → Einstellungen → OsmAnd-Einstellungen → Verlauf → Aktionen*. Dieser Abschnitt enthält die Schaltfläche **Gesamten Verlauf löschen**.


### Exportieren und Teilen {#export-and-share}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

Es gibt mehrere verfügbare Optionen zum Exportieren des Suchverlaufs. Alle Dateien werden im Format `.osf` (OsmAnd settings File) exportiert.

1. *Menü → Einstellungen → OsmAnd-Einstellungen → Verlauf → Suchverlauf*.
    Der Export ist über das OsmAnd-Einstellungsmenü verfügbar. Für Android gelangen Sie über diesen Pfad zum Löschbildschirm, auf dem [Verlauf teilen](#share-android) verfügbar ist. Im Falle von iOS können Sie einzelne Elemente oder den gesamten Verlauf auf dem Bildschirm auswählen und nach dem Tippen auf die Schaltfläche *Exportieren* zum Menü *Lokale Sicherung* wechseln.

2. *Menü → Einstellungen → OsmAnd-Einstellungen → Verlauf → Aktionen → Als Datei sichern* (Android).
    *Menü → Einstellungen → OsmAnd-Einstellungen → Verlauf → Aktionen → Exportieren* (iOS).
    Durch Antippen dieser Elemente gelangen Sie zum Menü *Import/Export* (Android) oder *Lokale Sicherung* (iOS). Erweitern Sie die Liste *Meine Orte* und suchen Sie *Suchverlauf*. Alle Abfragen werden auf einmal in einer Datei exportiert.

3. *Menü → Einstellungen → Import/Export → In Datei exportieren* (Android).
    *Menü → Einstellungen → Lokale Sicherung → Als Datei sichern* (iOS).
    Weitere Details finden Sie im Artikel [Import/Export](../personal/import-export.md#export).

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)
    Sie können die Cloud verwenden, um Ihren Suchverlauf zu sichern. Im Menü *Lokale Änderungen* oder *Einstellungen → Daten sichern → Meine Orte → Suchverlauf*.

![Settings History](@site/static/img/search/history_search_share_andr.png)

Das Exportieren von Elementen oder des gesamten Suchverlaufs kann in folgenden Fällen nützlich sein:

- *Sicherung*. Sie können Ihren Suchverlauf sichern, um die Informationen vor dem Löschen zu speichern und bei Bedarf wiederherzustellen.
- *Übertragung auf ein anderes Gerät*. Wenn Sie Geräte wechseln, können Sie die Exportfunktion oder die Cloud verwenden, um Ihren Suchverlauf auf ein neues Gerät zu übertragen, ohne Daten erneut suchen und eingeben zu müssen.
- *Daten analysieren und verarbeiten*. Sie können Ihren Suchverlauf zur Datenanalyse exportieren oder in anderen Anwendungen verwenden.
- [Teilen](#share-android) Sie den Suchverlauf mit anderen OsmAnd-Benutzern.


#### Teilen (Android) {#share-android}

![Settings History](@site/static/img/search/history_search_share_andr.png)

Die Schritte zum Teilen von Suchverlaufselementen ähneln dem [Export](#export-and-share), mit dem Unterschied, dass Sie den gesamten Verlauf auf einmal als [osf](../../technical/osmand-file-formats/osmand-osf.md)-Datei exportieren, während Sie einzelne ausgewählte Dateien im gpx-Format teilen können.

Wählen Sie auf dem [Löschbildschirm](#delete) die gewünschten Elemente aus der Suchverlaufsliste aus. In der oberen rechten Ecke des Bildschirms befindet sich ein Symbol, das das Teilen anzeigt. Wählen Sie eine verfügbare Anwendung oder Aktion in der Liste zum Teilen aus.


## Verwandte Artikel {#related-articles}

- [Alle suchen](./search-all.md)
- [Adresse suchen](./search-address.md)
- [POI suchen](./search-poi.md)
- [Koordinaten suchen](./search-coordinates.md)


> *Zuletzt aktualisiert: Juli 2024*