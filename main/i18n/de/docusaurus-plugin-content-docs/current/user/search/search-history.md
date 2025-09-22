---
source-hash: b0e4660605b0cdfdfcfc653e1f8929974cb654b66c0c55fbc588b89e37d05091
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


## Übersicht {#overview}

Der *Suchverlauf* ist eine Aufzeichnung aller Suchen und Orte, die Sie während der Nutzungsdauer in der App eingegeben oder gesucht haben. Dieses Werkzeug ermöglicht es Ihnen, zuvor gesuchte Orte einfach zu finden und darauf zuzugreifen, was die Navigation erleichtert und Ihre Zeit spart.

OsmAnd bietet mehrere Möglichkeiten, Ihren Suchverlauf anzuzeigen.

- Die [Suchschaltfläche](../widgets/map-buttons.md#search) wird immer auf der Karte angezeigt. Ein Tippen darauf führt Sie zum [allgemeinen Bildschirm](#how-to-use) des Werkzeugs.
- Gehen Sie zum Hauptmenü von Android *Menü → Suchen → Tab Verlauf*.
- Wenn Sie eine Route starten möchten, tippen Sie auf *Navigation → Ziel festlegen → Suchfeld*.
- Der Informationsblock im Navigationsmenü der [Routenvorbereitung](../navigation/setup/route-navigation.md#navigation-menu) zeigt eine Liste der letzten Zielpunkte an, die ebenfalls Teil des Suchverlaufs sind.
- Der Suchverlauf ist in [Android Auto](../navigation/auto-car.md#search) und [CarPlay](../navigation/car-play.md#search) verfügbar.


## Anwendung {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suchverlauf](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchverlauf](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Der Suchverlauf dient dazu, relevante Informationen über Ihre früheren Aktionen bereitzustellen.

- *Erneute Suche*. Sie können den Suchverlauf verwenden, um erneut nach zuvor gesuchten Orten oder Adressen zu suchen, ohne die Anfrage erneut eingeben zu müssen.

- *Schneller Zugriff auf häufig besuchte Orte*. Wenn Sie bestimmte Orte wie Ihr Zuhause, Ihre Arbeit oder Ihre Lieblingsorte häufig besuchen, speichert der Suchverlauf diese Orte und bietet schnellen Zugriff darauf.

- *Verfolgen früherer Fahrten*. Der Suchverlauf kann nützlich sein, um frühere Fahrten und Routen zu verfolgen. Sie können Routen nachverfolgen, die Sie zuvor gefahren sind, oder [Ihre nächste Route planen](../plan-route/create-route.md), basierend auf früheren.

- *Suche nach Orten über einen bestimmten Zeitraum*. Für die Android-App müssen Sie lange tippen, dann den Monat finden, in dem Sie die Reise unternommen haben, das Löschmenü verlassen und den Namen im Suchfeld eingeben. Für die iOS-App ist die Suchverlaufsliste bereits in Blöcke nach Monat unterteilt.

- *Einträge löschen*. Der Suchverlauf bietet die Möglichkeit, frühere Einträge zu [löschen](#delete), was aus Datenschutzgründen oder zur Organisation Ihres Verlaufs nützlich sein kann.


## Verlaufseinträge {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suchverlauf](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchverlauf](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Jedes Feld in der Suchverlaufsliste enthält einige der für die Anwendung verfügbaren **Informationen**.

- Ein Symbol, das den Typ oder die Kategorie des gefundenen Objekts identifiziert.
- Der Objektname, der Ort, die Adresse oder die Typanfrage. Bei Tracks werden Informationen über die Entfernung, die Anzahl der Wegpunkte und die Zeit angezeigt.
- Entfernung von Ihrem aktuellen Standort zum Punkt und Richtung per Kompass.


### Reihenfolge der Einträge {#order-of-items}

- **Neueste Einträge**. Die neuesten Anfragen oder Orte werden oben in der Liste angezeigt. Dies ermöglicht einen schnellen Zugriff auf kürzlich verwendete Einträge.
- **Chronologische Reihenfolge**. Die Einträge in der Suchverlaufsliste sind in chronologischer Reihenfolge angeordnet, beginnend mit den ältesten oder frühesten Einträgen und endend mit den neuesten oder letzten. Alte Einträge rutschen allmählich in der Liste nach unten, wenn neue Einträge hinzugefügt werden, es sei denn, alte Einträge im Suchverlauf wurden verwendet. In diesem Fall werden sie an den Anfang der Liste verschoben.
- In iOS ist die Liste nach Monaten sortiert.

### Objekttypen {#type-of-objects}

Die folgenden **Objekttypen** gelangen in die Suchverlaufsliste:

- **Orte**. Dies kann eine Adresse, ein Firmenname, eine Routennummer, Koordinaten, Markierungen, Sonderziele, OSM-Notizen oder Orte sein, auf die Sie auf der Karte getippt haben.
- **Tracks und Wegpunkte**. Die Liste enthält Tracks, die Sie erstellt, aufgezeichnet oder heruntergeladen und in früheren Routen verwendet haben, sowie Wegpunkte, wenn Sie separat zu ihnen navigiert sind.


## Aktionen {#actions}

Im Suchverlauf-Werkzeug können Sie unnötige Anfragen [löschen](#delete), alle auf einmal oder einzelne Einträge. Sie können den Verlauf [exportieren](#export-and-share). Die Android-App bietet eine zusätzliche Aktion zum [Teilen](#share-android) von Sucheinträgen als [GPX](../../technical/osmand-file-formats/osmand-gpx.md)-Datei.

Sie können die Anzeige des gesamten Suchverlaufs **deaktivieren oder aktivieren**. In diesem Fall werden die Anfragen nicht vom Gerät gelöscht. Bei Android befindet sich der Schalter auf dem Hauptbildschirm des Werkzeugs im [Tab Verlauf](#overview). Bei iOS befindet er sich unter *Menü → Einstellungen → OsmAnd-Einstellungen → Verlauf → Suchverlauf*.


### Löschen {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suchverlauf löschen](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchverlauf löschen](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Nach längerer Nutzung von OsmAnd kann die Liste des *Suchverlaufs* zu lang werden. Das Löschen von Suchanfragen hilft, die Liste zu bereinigen. Sie können Anfragen löschen, die nicht mehr relevant sind oder die Sie in Zukunft nicht mehr verwenden möchten, was die Suche in der Liste erleichtert, insbesondere wenn Sie schnell bestimmte Suchanfragen finden müssen.

Sie müssen **lange auf einen der Anfrageeinträge in der Liste tippen**, um den Löschbildschirm zu öffnen.

- *Zufällige Einträge auswählen oder abwählen* - tippen Sie auf den gewünschten Eintrag in der Liste.
- *Den zum Löschen verfügbaren Zeitraum auswählen*, z. B. Tag, letzte 7 Tage oder Monat - aktivieren Sie das Kontrollkästchen mit der Unterüberschrift in der Liste.
- *Sie können den gesamten Verlauf auf einmal löschen*, indem Sie auf die Schaltfläche *Alle auswählen* am unteren Bildschirmrand tippen.
- *Menü → Einstellungen → OsmAnd-Einstellungen → Verlauf → Aktionen*. Dieser Abschnitt enthält die Schaltfläche **Gesamten Verlauf löschen**.


### Exportieren und Teilen {#export-and-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Allgemeine Einstellungen Verlauf Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Allgemeine Einstellungen Verlauf iOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

Es gibt mehrere verfügbare Optionen, um den Suchverlauf zu exportieren. Alle Dateien werden im Format `.osf` (OsmAnd Settings File) exportiert.

1. *Menü → Einstellungen → OsmAnd-Einstellungen → Verlauf → Suchverlauf*.
    Der Export ist über das OsmAnd-Einstellungsmenü verfügbar. Bei Android führt dieser Pfad zum Löschbildschirm, wo [Verlauf teilen](#share-android) verfügbar ist. Im Fall von iOS können Sie auf dem Bildschirm einzelne Einträge oder den gesamten Verlauf auswählen und nach dem Tippen auf die Schaltfläche *Exportieren* zum Menü *Lokales Backup* gelangen.

2. *Menü → Einstellungen → OsmAnd-Einstellungen → Verlauf → Aktionen → Als Datei sichern* (Android).
    *Menü → Einstellungen → OsmAnd-Einstellungen → Verlauf → Aktionen → Exportieren* (iOS).
    Durch Tippen auf diese Einträge gelangen Sie zum Menü *Import/Export* (Android) oder *Lokales Backup* (iOS). Erweitern Sie die Liste *Meine Orte* und finden Sie *Suchverlauf*. Alle Anfragen werden auf einmal in einer Datei exportiert.

3. *Menü → Einstellungen → Import/Export → In Datei exportieren* (Android).
    *Menü → Einstellungen → Lokales Backup → Als Datei sichern* (iOS).
    Weitere Details können Sie im Artikel [Import/Export](../personal/import-export.md#export) nachlesen.

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)
    Sie können die Cloud verwenden, um Ihren Suchverlauf zu sichern. Im Menü *Lokale Änderungen* oder *Einstellungen → Daten sichern → Meine Orte → Suchverlauf*.

![Einstellungen Verlauf](@site/static/img/search/history_search_share_andr.png)

Das Exportieren von Einträgen oder des gesamten Suchverlaufs kann in den folgenden Fällen nützlich sein:

- *Backup*. Sie können Ihren Suchverlauf sichern, um die Informationen vor dem Löschen zu speichern und bei Bedarf wiederherzustellen.
- *Übertragung auf ein anderes Gerät*. Wenn Sie das Gerät wechseln, können Sie die Exportfunktion oder die Cloud verwenden, um Ihren Suchverlauf auf ein neues Gerät zu übertragen, ohne Daten erneut suchen und eingeben zu müssen.
- *Daten analysieren und verarbeiten*. Sie können Ihren Suchverlauf zur Datenanalyse exportieren oder in anderen Anwendungen verwenden.
- Suchverlauf mit anderen OsmAnd-Benutzern [teilen](#share-android).


### Teilen (Android) {#share-android}

![Einstellungen Verlauf](@site/static/img/search/history_search_share_andr.png)

Die Schritte zum Teilen von Suchverlaufseinträgen ähneln dem [Export](#export-and-share), mit dem Unterschied, dass Sie den gesamten Verlauf auf einmal als [osf](../../technical/osmand-file-formats/osmand-osf.md)-Datei exportieren, während Sie einzelne ausgewählte Dateien im GPX-Format teilen können.

Wählen Sie auf dem [Löschbildschirm](#delete) die gewünschten Einträge aus der Suchverlaufsliste aus. In der oberen rechten Ecke des Bildschirms befindet sich ein Symbol zum Teilen. Wählen Sie eine verfügbare Anwendung oder Aktion in der Liste zum Teilen aus.


## Verwandte Artikel {#related-articles}

- [Alles durchsuchen](./search-all.md)
- [Adresse suchen](./search-address.md)
- [POI suchen](./search-poi.md)
- [Koordinaten suchen](./search-coordinates.md)