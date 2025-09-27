---
source-hash: 677964c6e30a8d9596ffa45395cb1cc593266a07fbfb2b36d1a6384a00432d7d
sidebar_position: 2
title:  Adresssuche
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

## Übersicht {#overview}

*OsmAnd Adresssuche* basiert auf OpenStreetMap-Daten und ermöglicht es Ihnen, den Standort und die Wegbeschreibung zu einer bestimmten Adresse aus einer bereits sortierten Liste zu finden, sowie nach Postleitzahl oder Koordinaten zu suchen. Dieses Werkzeug ermöglicht es Ihnen, die gewünschten Adressen mit wenigen Fingertipps zu finden, was die Suchzeit verkürzt und hilft, falls Sie sich nicht an die genaue Adresse erinnern.

OsmAnd bietet mehrere Möglichkeiten, zum *Suchwerkzeug* zu gelangen, wo sich der Abschnitt **Adresssuche** befindet.

- Die [Schaltfläche Suchen](../widgets/map-buttons.md#search) wird immer auf der Karte angezeigt. Ein Tippen darauf führt Sie zum [allgemeinen Bildschirm](#full-text-search) des Werkzeugs, wo Sie den Reiter *Adresse* finden.
- Gehen Sie zum Android-Hauptmenü *Menü → Suchen → Reiter Adresse*.
- Wenn Sie eine Route vorbereiten, tippen Sie auf *Navigation → Ziel festlegen → Suchfeld*.


## Volltextsuche {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suche Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suche iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

Die Adresssuche vereinfacht den Such- und Navigationsprozess, gewährleistet Genauigkeit und Benutzerfreundlichkeit und verkürzt die Zeit, die benötigt wird, um die richtige Adresse zu finden.

- **Um die Adresssuchfunktion zu nutzen,** müssen Sie zuerst eine [Karte](../start-with/download-maps.md) des gewünschten Gebiets herunterladen.
- **Die Suche basiert auf den Daten, die sich im sichtbaren Bereich der Karte** auf dem Gerätebildschirm befinden. Wenn Sie nichts finden, schlägt OsmAnd vor, den Suchradius zu vergrößern.
- Die Adressinformationen in OsmAnd enthalten alle [OSM-Tag-Schlüssel](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Suchabfrageliste:

**1.** Die **Reihenfolge** der Elemente in der Liste:

- **Nach Namen geordnet**. Die Auswahl von *Zuerst Stadt/Ort/Lokalität angeben* (Android) oder *Stadt auswählen* (iOS) zeigt eine Liste an, die mit unbenannten Elementen beginnt, falls vorhanden, gefolgt von numerischen Namen und dann den Namen nach Buchstaben.
- **Aufsteigende numerische Reihenfolge**. In der nächsten Suchliste werden die Hausnummern in aufsteigender Reihenfolge angezeigt, nachdem Stadt und Straße eingegeben wurden.

**2.** Jedes Feld in der Adresssuchliste enthält **Informationen** wie:

- Ein Symbol, das den Typ der Örtlichkeit kennzeichnet.
- Teil einer Adresse, Postleitzahl oder Koordinatenbereich.
- Entfernung von Ihrem aktuellen Standort oder vom Stadtzentrum.
- Zusätzliche Informationen, wie z. B. der Stadtteil.


### US-Adresssuche und TIGER-Daten {#us-address-search-and-tiger-data}

OsmAnd unterstützt die Adresssuche mit OpenStreetMap-Daten, aber in den Vereinigten Staaten können die Ergebnisse der Adresssuche aufgrund der Verwendung von [TIGER-Daten](https://wiki.openstreetmap.org/wiki/TIGER) unvollständig sein.

- **TIGER-Daten liefern Adressbereiche, keine exakten Standorte**, das bedeutet, dass einige Hausnummern möglicherweise nicht erkannt werden.
- **Wenn eine Adresse nicht gefunden wird**, versuchen Sie, *nach dem Straßennamen* anstelle einer bestimmten Hausnummer zu suchen.
- Verwenden Sie *alternative Standortkennungen*, wie z. B. nahegelegene Sehenswürdigkeiten oder Postleitzahlen, um Ihre Suchergebnisse zu verfeinern.


### Unterstützte Formate {#supported-formats}

Eine Liste der verfügbaren Abfragen und unterstützten Suchformate finden Sie im Artikel [Alle durchsuchen](./search-all.md#basic-queries).


## Stadt auswählen {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Straßensuche Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straßensuche iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Nächstgelegene Städte**  
    Dies **zeigt eine kleine Liste von Städten in der Nähe Ihres Standorts** oder der von Ihnen für *Straße auswählen* oder *Stadt auswählen* angegebenen Örtlichkeit an. Jedes Feld enthält ein Symbol, das der Größe der Stadt entspricht, den Namen der Stadt, die Entfernung von Ihnen zu ihrem Zentrum und für Android die Himmelsrichtung.

Diese Art der Suche erleichtert das Auffinden bestimmter Orte innerhalb einer ausgewählten Örtlichkeit und bietet eine bequeme Möglichkeit, Adressen genau und schnell zu finden. Sie können mit der Suche nach der benötigten Adresse beginnen, indem Sie die Örtlichkeit bestimmen.

- Tippen Sie dazu auf **Zuerst Stadt/Ort/Lokalität angeben** (Android) oder **Stadt auswählen** (iOS).
- Wählen Sie in der sich öffnenden Liste die gewünschte Örtlichkeit aus. [Hier](#full-text-search) wird die Reihenfolge beschrieben, in der die Suchanfragen angezeigt werden und welche Informationen zu jedem Element verfügbar sind.
- Auf dem nächsten Bildschirm können Sie entweder die Adresse weiter verfeinern oder die Schaltfläche *Auf der Karte anzeigen* unter dem Sucheingabefeld auswählen.
- Um Ihre Suche zu spezifizieren, können Sie den ganzen oder nur einen Teil des Namens der Stadt, des Ortes oder des Dorfes eingeben, in dem sich die gesuchte Adresse befindet. Dies ermöglicht es Ihnen, Ihre Suche einzugrenzen und eine genauere Liste zu erhalten.
- Ein Tippen auf das letzte Element in der Adresse, die Hausnummer oder den Namen der Kreuzung, öffnet das [Kartenkontextmenü](../map/map-context-menu.md#select-an-object-single-tap) des Objekts.

**Die Suche nach Stadt bietet die folgenden Vorteile:**

- *Bequemlichkeit*. Ermöglicht die schnelle Auswahl der gewünschten Stadt aus der Liste und die Angabe einer bestimmten Straße, eines Hauses oder einer Kreuzung in der ausgewählten Stadt, ohne die vollständige Adresse eingeben zu müssen. Dies spart Zeit und vereinfacht die Suche nach dem richtigen Ort.
- *Präzision.* Sie können eine Stadt und eine Straße aus den verfügbaren Optionen auswählen und so Fehler bei der manuellen Eingabe einer Adresse vermeiden.
- *Filterung.* Die Möglichkeit, ein bestimmtes Haus aus der Liste auszuwählen, erleichtert die genaue Navigation zum gewünschten Ort, insbesondere wenn die genaue Adresse unbekannt ist.

:::note Schlüssel & Wert
*Stadt- / Orts- / Dorfsuche* nach [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Ergebnis*: Anzeige aller Objekte mit diesem Namen.
:::


## Straße auswählen {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Straßensuche Android](@site/static/img/search/street_search.png) ![Straßensuche Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straßensuche iOS](@site/static/img/search/address_street_search_3_ios.png) ![Straßensuche Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

Die Straßensuche wird in der Örtlichkeit durchgeführt, in der Sie sich befinden, oder in der Sie zuvor gesucht haben, oder die sich im Zentrum der sichtbaren Karte auf dem Anwendungsbildschirm befindet.

- Um diese Art der Suche zu verwenden, tippen Sie auf **Straße suchen** (*Android*) oder **Straße auswählen** (*iOS*).
- Im Suchfeld neben dem Stadtnamen können Sie mit der Eingabe des Straßennamens beginnen und die Liste wird verfeinert, um Ihnen die am besten passenden Ergebnisse zu liefern.
- In anderen Punkten ist die Straßensuche die gleiche wie bei [Stadt auswählen](#select-city).

:::note Schlüssel & Wert
*Straßensuche* nach [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Ergebnis*: alle Straßen mit diesem Namen werden angezeigt.
:::


## Postleitzahlsuche {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Postleitzahlsuche Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Postleitzahlsuche iOS](@site static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Um die *Postleitzahlsuche* zu verwenden, müssen Sie nur die Nummer eingeben**, die sogar aus einer einzigen Ziffer bestehen kann, und die Anwendung bietet eine Liste der verfügbaren relevanten Postleitzahlen an.

- Wählen Sie den gewünschten Code aus und tippen Sie darauf.
- Sie können die Funktion *Postleitzahl *Nummer* auf der Karte anzeigen* verwenden. Dies öffnet ein [Kartenkontextmenü](../map/map-context-menu.md#select-an-object-single-tap) mit der ausgewählten Postleitzahl ohne zusätzliche Informationen über den Standort.
- Sie können Ihre Suche nach diesem Code verfeinern, indem Sie zuerst die gewünschte Straße aus der Liste und dann die Nummer auswählen.

**Die Suche nach Postleitzahl kann in den folgenden Fällen nützlich sein:**

- *Adressen finden*. Wenn Sie eine Postleitzahl eingeben, identifiziert OsmAnd das entsprechende Gebiet und schlägt Adressen in diesem Gebiet vor. Dies ist besonders nützlich, wenn Sie die Postleitzahl kennen, aber nicht die genaue Adresse.
- *Navigationspräzision*. In Fällen, in denen die Adresse nicht sicher ist oder der Straßenname in verschiedenen Gebieten wiederholt werden kann, kann die Verwendung einer Postleitzahl die beste Route zu einer bestimmten Adresse liefern.
- *Bequemlichkeit und Geschwindigkeit*. Die Suche nach Postleitzahl ermöglicht es Ihnen, Informationen schnell zu finden, insbesondere wenn Sie die Postleitzahl kennen, aber unsicher über die Adresse sind. Anstatt die vollständige Adresse einzugeben, können Sie nur den Code eingeben und relevante Ergebnisse erhalten.

:::note
Weitere Informationen finden Sie unter **[Postleitzahldaten des Vereinigten Königreichs](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::


## Koordinatensuche {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Koordinatensuche Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Koordinatensuche iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Die [**Koordinatensuche**](../search/search-coordinates.md) ermöglicht es Ihnen, geografische Koordinaten wie Breiten- und Längengrad anzugeben, um einen bestimmten Ort zu finden. Sie liefert genaue Standorte auf einer Karte in verschiedenen [Koordinatenformaten](../search/search-coordinates.md#coordinate-format) und ermöglicht es Ihnen, zugehörige Informationen zu erhalten. Diese Funktion kann nützlich sein, wenn Sie keine Adresse oder keinen genauen Namen eines Ortes haben, und kann die Planung von Reisen und die Navigation an unbekannten Orten erleichtern.


## Verwandte Artikel {#related-articles}

- [Alle durchsuchen](./search-all.md)
- [Suchverlauf](./search-history.md)
- [POI suchen](./search-poi.md)
- [Koordinaten suchen](./search-coordinates.md)