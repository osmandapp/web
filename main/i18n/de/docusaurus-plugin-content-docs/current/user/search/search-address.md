---
source-hash: 7aa187a96947b5ca65aab12d710ed0867ffb5db9a42f53d9dfb15a99a9107f74
sidebar_position: 2
title:  Adresse suchen
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>

## Überblick {#overview}

*OsmAnd Suche nach Adresse* basiert auf OpenStreetMap-Daten und ermöglicht es Ihnen, einen Ort und Wegbeschreibungen zu einer bestimmten Adresse aus einer fertig sortierten Liste zu finden, sowie nach Postleitzahl oder Koordinaten zu suchen. Dieses Werkzeug ermöglicht es Ihnen, die benötigten Adressen mit wenigen Fingertipps zu finden, was die Suchzeit verkürzt und hilft, falls Sie sich nicht an die genaue Adresse erinnern.

OsmAnd bietet mehrere Möglichkeiten, zum *Suchwerkzeug* zu gelangen, wo sich der Abschnitt **Adresse suchen** befindet.

- Die [Suchschaltfläche](../widgets/map-buttons.md#search) wird immer auf der Karte angezeigt, und durch Antippen gelangen Sie zum [allgemeinen Bildschirm](#full-text-search) des Werkzeugs, wo Sie die Registerkarte *Adresse* finden.
- Gehen Sie zum Hauptmenü von Android *Menü → Suche → Registerkarte Adresse*.
- Wenn Sie sich auf den Beginn einer Route vorbereiten, tippen Sie auf *Navigation → Ziel festlegen → Suchfeld*.


## Volltextsuche {#full-text-search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

Die Suche nach Adresse vereinfacht den Such- und Navigationsprozess, gewährleistet Genauigkeit und Benutzerfreundlichkeit und verkürzt die Zeit, die zum Finden der richtigen Adresse benötigt wird.

- **Um die Funktion Adresse suchen zu verwenden,** müssen Sie zuerst eine [Karte des benötigten Gebiets herunterladen](../start-with/download-maps.md).
- **Die Suche basiert auf den Daten, die sich im sichtbaren Bereich der Karte** auf dem Gerätebildschirm befinden. Wenn Sie nichts finden, bietet OsmAnd an, den Suchradius zu vergrößern.
- Die Adressinformationen in OsmAnd enthalten alle [OSM-Schlüssel](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Suchabfrageliste:

**1.** Die **Reihenfolge** der Elemente in der Liste:

- **Nach Name sortiert**. Wenn Sie *Zuerst Stadt/Ort/Gemeinde angeben* (Android) oder *Stadt auswählen* (iOS) auswählen, wird eine Liste angezeigt, die mit unbenannten Elementen beginnt, falls vorhanden, dann numerische Namen, gefolgt von Namen nach Buchstaben.
- **Aufsteigende numerische Reihenfolge**. In der nächsten Suchliste werden die Hausnummern in aufsteigender Reihenfolge angezeigt, nachdem die Stadt und die Straße eingegeben wurden.

**2.** Jedes Feld in der Adresssuchliste enthält **Informationen** wie:

- Ein Symbol, das den Typ der Ortschaft identifiziert.
- Teil einer Adresse, Postleitzahl oder Koordinatenbereich.
- Entfernung von Ihrem aktuellen Standort oder vom Stadtzentrum.
- Zusätzliche Informationen, wie z. B. der Stadtteil.


#### US-Adresssuche und TIGER-Daten {#us-address-search-and-tiger-data}

OsmAnd unterstützt die Adresssuche anhand von OpenStreetMap-Daten, aber in den Vereinigten Staaten können die Ergebnisse der Adresssuche aufgrund der Verwendung von [TIGER-Daten](https://wiki.openstreetmap.org/wiki/TIGER) unvollständig sein.

- **TIGER-Daten liefern Adressbereiche, keine genauen Standorte**, was bedeutet, dass einige Hausnummern möglicherweise nicht erkannt werden.
- **Wenn eine Adresse nicht gefunden wird**, versuchen Sie, *nach Straßennamen* anstelle einer bestimmten Hausnummer zu suchen.
- Verwenden Sie *alternative Standortkennungen*, wie z. B. nahegelegene Sehenswürdigkeiten oder Postleitzahlen, um Ihre Suchergebnisse zu verfeinern.


### Unterstützte Formate {#supported-formats}

Eine Liste der verfügbaren Abfragen und unterstützten Suchformate finden Sie im Artikel [Alle suchen](./search-all.md#basic-queries).


## Stadt auswählen {#select-city}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Nächste Städte**
    Dies **zeigt eine kleine Liste von Städten in der Nähe Ihres Standorts** oder der Ortschaft, die Sie für *Straße auswählen* oder *Stadt auswählen* angegeben haben. Jedes Feld enthält ein Symbol, das der Größe der Stadt entspricht, den Namen der Stadt, die Entfernung von Ihnen zu ihrem Zentrum und für Android die Kompassrichtung.

Diese Art der Suche erleichtert das Finden bestimmter Orte innerhalb einer ausgewählten Ortschaft und bietet eine bequeme Möglichkeit, Adressen genau und schnell zu finden. Sie können mit der Suche nach der benötigten Adresse beginnen, indem Sie die Ortschaft bestimmen.

- Tippen Sie dazu auf **Zuerst Stadt/Ort/Gemeinde angeben** (Android) oder **Stadt auswählen** (iOS).
- Wählen Sie in der sich öffnenden Liste die gewünschte Ortschaft aus. [Hier](#full-text-search) wird die Reihenfolge beschrieben, in der Suchanfragen angezeigt werden und welche Informationen zu jedem Element verfügbar sind.
- Auf dem nächsten Bildschirm können Sie entweder die Adresse weiter verfeinern oder die Schaltfläche *Auf Karte anzeigen* unter dem Suchfeld auswählen.
- Um Ihre Suche zu präzisieren, können Sie den vollständigen oder nur einen Teil des Namens der Stadt, des Ortes oder des Dorfes eingeben, in dem sich die gesuchte Adresse befindet. Dadurch können Sie Ihre Suche eingrenzen und eine genauere Liste erhalten.
- Durch Antippen des letzten Elements in der Adresse, der Hausnummer oder des Kreuzungsnamens wird das [Kartenkontextmenü](../map/map-context-menu.md#select-an-object-single-tap) des Objekts geöffnet.

**Die Suche nach Stadt bietet folgende Vorteile:**

- *Komfort*. Ermöglicht es Ihnen, schnell die gewünschte Stadt aus der Liste auszuwählen und eine bestimmte Straße, ein Haus oder eine Kreuzung in der ausgewählten Stadt anzugeben, ohne die vollständige Adresse eingeben zu müssen. Dies spart Zeit und vereinfacht den Prozess des Findens des richtigen Ortes.
- *Präzision.* Sie können eine Stadt und Straße aus den verfügbaren Optionen auswählen und so Fehler bei der manuellen Eingabe einer Adresse vermeiden.
- *Filterung.* Die Möglichkeit, ein bestimmtes Haus aus der Liste auszuwählen, erleichtert die genaue Navigation zum gewünschten Ort, insbesondere wenn die genaue Adresse unbekannt ist.

:::note Schlüssel & Wert
*Stadt / Ort / Dorf suchen* nach [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Ergebnis*: Anzeige aller Objekte mit diesem Namen.
:::


## Straße auswählen {#select-street}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/street_search.png) ![Search Street Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/address_street_search_3_ios.png) ![Search Street Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

Die Straßensuche wird in der Ortschaft durchgeführt, in der Sie sich befinden, oder in der Sie zuvor gesucht haben, oder die sich im Zentrum der sichtbaren Karte auf dem Anwendungsbildschirm befindet.

- Um diese Art der Suche zu verwenden, tippen Sie auf **Straße suchen** (*Android*) oder **Straße auswählen** (*iOS*).
- Im Suchfeld neben dem Stadtnamen können Sie mit der Eingabe des Straßennamens beginnen, und die Liste wird verfeinert, um Ihnen die am besten geeigneten Ergebnisse zu liefern.
- Bei anderen Elementen ist die Straßensuche dieselbe wie bei [Stadt auswählen](#select-city).

:::note Schlüssel & Wert
*Straßen suchen* nach [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Ergebnis*: Alle Straßen mit diesem Namen werden angezeigt.
:::


## Postleitzahlensuche {#postcode-search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Postcode Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Postcode iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Um die *Postleitzahlensuche* zu verwenden, müssen Sie nur die Nummer eingeben**, die sogar aus einer einzigen Ziffer bestehen kann, und die Anwendung bietet eine Liste der verfügbaren relevanten Postleitzahlen.

- Wählen Sie den gewünschten Code aus und tippen Sie darauf.
- Sie können die Funktion *Postleitzahl *Nummer* auf der Karte anzeigen* verwenden. Dadurch wird ein [Kartenkontextmenü](../map/map-context-menu.md#select-an-object-single-tap) mit der ausgewählten Postleitzahl ohne zusätzliche Informationen zum Standort geöffnet.
- Sie können Ihre Suche nach diesem Code verfeinern, indem Sie zuerst die gewünschte Straße aus der Liste und dann die Nummer auswählen.

**Die Suche nach Postleitzahl kann in folgenden Fällen nützlich sein:**

- *Adressen finden*. Wenn Sie eine Postleitzahl eingeben, identifiziert OsmAnd das entsprechende Gebiet und schlägt Adressen in diesem Gebiet vor. Dies ist besonders nützlich, wenn Sie die Postleitzahl kennen, aber die genaue Adresse nicht wissen.
- *Navigationspräzision*. In Fällen, in denen die Adresse nicht sicher ist oder der Straßenname in verschiedenen Gebieten wiederholt werden kann, kann die Verwendung einer Postleitzahl die beste Route zu einer bestimmten Adresse liefern.
- *Komfort und Geschwindigkeit*. Die Suche nach Postleitzahl ermöglicht es Ihnen, Informationen schnell zu finden, insbesondere wenn Sie die Postleitzahl kennen, aber unsicher sind, was die Adresse betrifft. Anstatt die vollständige Adresse einzugeben, können Sie nur den Code eingeben und relevante Ergebnisse erhalten.

:::note
Weitere Informationen finden Sie unter **[United Kingdom Postcode data](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::


## Koordinatensuche {#coordinates-search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Die [**Koordinatensuche**](../search/search-coordinates.md) ermöglicht es Ihnen, geografische Koordinaten wie Breiten- und Längengrad anzugeben, um einen bestimmten Ort zu finden. Sie liefert genaue Standorte auf einer Karte in verschiedenen [Koordinatenformaten](../search/search-coordinates.md#coordinates-search) und ermöglicht es Ihnen, verwandte Informationen zu erhalten. Diese Funktion kann nützlich sein, wenn Sie keine Adresse oder keinen genauen Namen eines Ortes haben, und kann die Reiseplanung und Navigation an unbekannten Orten erleichtern.


## Verwandte Artikel {#related-articles}

- [Alle suchen](./search-all.md)
- [Suchverlauf](./search-history.md)
- [POI suchen](./search-poi.md)
- [Koordinaten suchen](./search-coordinates.md)

> *Zuletzt aktualisiert: Juli 2024*