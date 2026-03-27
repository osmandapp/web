---
source-hash: cc7b11b19f0261ab3f9cc12de149c6d268cdaa50b3a828cc60f5dd3ebe0ce868
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

## Übersicht {#overview}

*OsmAnd Adresssuche* basiert auf OpenStreetMap-Daten und ermöglicht es Ihnen, den Standort und die Wegbeschreibung zu einer bestimmten Adresse aus einer bereits sortierten Liste zu finden, sowie nach Postleitzahl oder Koordinaten zu suchen. Dieses Werkzeug ermöglicht es Ihnen, die gewünschten Adressen mit wenigen Fingertipps zu finden, was die Suchzeit verkürzt und hilft, falls Sie sich nicht an die genaue Adresse erinnern.

Die Adresssuche funktioniert offline mit heruntergeladenen Karten. Stellen Sie sicher, dass die Karte für die Region, in der Sie suchen, installiert ist. Die Ergebnisse hängen von den in OpenStreetMap verfügbaren Adressdaten ab.

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

<!--
Search by Address simplifies the search and navigation process, ensures accuracy and usability, and reduces the time it takes to find the right address.  

- **To use the Search Address function,** you have to [download a map](../start-with/download-maps.md) of the required area first.
- **The search is based on the data located in the visible area of the map** on the device screen. If you do not find anything, OsmAnd offers to increase the search radius.
- The address information in OsmAnd contains all [OSM tag keys](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Search query list:

**1.** The **order** of items in the list:

- **Ordered by name**. Selecting *First specify city/town/locality* (Android) or *Select city* (iOS) will display a list that starts with unnamed items, if any, then numeric names followed by the names by letters.
- **Ascending numerical order**. In the next search list, the house numbers are displayed in ascending order, after entering the city and street.

**2.** Each field in the Address Search list contains **information** such as:

- An icon that identifies the type of locality.
- Part of an address, postal number, or coordinate area.
- Distance from your current location or from the city center.
- Additional information, such as the city's district.
-->
OsmAnd unterstützt Volltext-Adresssuche. Das bedeutet, Sie können eine Adresse direkt im Suchfeld eingeben, anstatt Schritt für Schritt Stadt → Straße → Hausnummer auszuwählen. Die Suchmaschine versucht, Adresskomponenten wie folgt zu erkennen:
- Stadt;
- Straße;
- Hausnummer;
- Postleitzahl;
- Ortsname.

Sie müssen sie nicht in einer strengen Reihenfolge eingeben. **Beispielabfragen**:

`221B Baker Street London`  
`Baker Street 221B`  
`London Baker Street 221B`  
`101 Main Street`  
`Main Street 101`

Wenn die vollständige Adresse nicht gefunden wird, versucht OsmAnd automatisch vereinfachte Abfragen (z. B. durch Entfernen zusätzlicher Wörter), um die Chancen zu verbessern, den Standort zu finden.

**HINWEIS:** Die Adresssuche funktioniert nur innerhalb heruntergeladener Karten. Suchergebnisse basieren auf:
- auf dem Gerät installierten Karten;
- dem sichtbaren Kartenbereich;
- Ihrem aktuellen Standort. 

Falls nichts gefunden wird, schlägt OsmAnd möglicherweise vor, den Suchradius zu vergrößern.

### US-Adresssuche und TIGER-Daten {#us-address-search-and-tiger-data}

OsmAnd unterstützt die Adresssuche mit OpenStreetMap-Daten, aber in den Vereinigten Staaten können die Ergebnisse der Adresssuche aufgrund der Verwendung von [TIGER-Daten](https://wiki.openstreetmap.org/wiki/TIGER) unvollständig sein.  

- **TIGER-Daten liefern Adressbereiche, keine exakten Standorte**, das bedeutet, dass einige Hausnummern möglicherweise nicht erkannt werden.
- **Wenn eine Adresse nicht gefunden wird**, versuchen Sie, *nach dem Straßennamen* anstelle einer bestimmten Hausnummer zu suchen.
- Verwenden Sie *alternative Standortkennungen*, wie z. B. nahegelegene Sehenswürdigkeiten oder Postleitzahlen, um Ihre Suchergebnisse zu verfeinern.  

### Unterstützte Formate {#supported-formats}

OsmAnd unterstützt mehrere gängige Adressformate. Sie können Adressen in unterschiedlichen Reihenfolgen eingeben, je nachdem, wie Sie die Adresse kennen.

| Adressformat | Beispielabfragen |
|---|---|
| Hausnummer + Straße | 221B Baker Street<br />10 Downing Street |
| Straße + Hausnummer | Baker Street 221B<br />Main Street 101 |
| Stadt + Straße + Hausnummer | London Baker Street 221B<br />Paris Rue de Rivoli 10 |
| Straßenschnittstellen | Broadway & Wall Street<br />Main Street and High Street |
| Stadtname | Berlin<br />Wien<br />San Francisco |
| Postleitzahl + Adresse | 10001 New York<br />75001 Paris Rue de Rivoli 10 |

### Suchtipps {#search-tips}

Die Adresssuche in OsmAnd ist tolerant gegenüber unterschiedlichen Eingabeformaten. Sie können versuchen:
- die Reihenfolge der Wörter zu ändern;
- zusätzliche Informationen zu entfernen;
- nur nach Straßennamen zu suchen.

Die Suchmaschine toleriert auch gängige Variationen in der Adressformatierung, wie unterschiedliche Wortreihenfolge, Schreibunterschiede, Abkürzungen oder Hausnummerformate. Die folgende Tabelle zeigt typische Suchvariationen, die möglicherweise dieselbe Adresse zurückgeben.

| Suchvariation | Beispielabfragen | Verwandte Diskussion |
|---|---|---|
| Straßennamenvariationen | [Weberstraße](https://osmand.net/map?pin=51.853672,12.042003#13/51.8545/12.0386) <br /> Weberstrasse <br /> Weber-straße <br /> Weber-strasse | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/23709) |
| Ignorieren von Leerzeichen in Namen | [Goethe Straße](https://osmand.net/map?pin=51.85358,12.064447#13/51.8545/12.0386) <br /> Goethestraße | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/13783) |
| Hausnummern mit Buchstabensuffixen | [30B Dragonder, Valkenswaard](https://osmand.net/map?pin=51.339645,5.4682517#19/51.3398/5.4681) <br /> 30b Dragonder, Valkenswaard <br /> 30-B Dragonder, Valkenswaard <br /> 30-b Dragonder, Valkenswaard | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/23320) |
| Straßensabkürzungen | [Straelener Straße](https://osmand.net/map?pin=51.443604,6.343231#19/51.4436/6.3432) <br /> Straelener Str. | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/4923) |
| Volle Adresse vs. vereinfachte Adresse | [221B Baker Street London United Kingdom](https://osmand.net/map/poi/?name=221B+Baker+Street&type=Tourist+attraction&pin=51.52339,-0.1582396) <br /> 221B Baker Street <br /> Baker Street 221B | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/19004) |
| US-Adressformat | [1500 North Main Avenue, Springfield](https://osmand.net/map?pin=37.226315,-93.296524#11/37.1799/-93.3522) <br /> [4600 Sugar Maple Lane, Nashville](https://osmand.net/map?pin=36.051846,-86.95705#18/36.0516/-86.9561) | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/6824) |
| US-Bundesstaatsabkürzungen | [Springfield, VA 22150](https://osmand.net/map?pin=36.51995,-86.86385#18/36.5199/-86.8635) <br /> [Manhattan Beach, CA 90266](https://osmand.net/map?pin=33.883938,-118.41048#20/33.8839/-118.4105) | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/6824) |

<!--
**Examples**: Instead of `221B Baker Street London United Kingdom` try `221B Baker Street` or `Baker Street 221B`.

OsmAnd may also ignore additional information such as country or region if the address can already be identified.

Postal addresses copied from websites may include additional information such as company names, ZIP codes, or apartment numbers. If search does not return results, try entering only the street name, house number, and city.

Search is also tolerant to minor differences in spelling, such as spaces, hyphens, or common abbreviations in street names. **For example**:

`Weberstrasse`  
`Weber strasse`  
`Weber-strasse`

House numbers with letter suffixes can also be written in different formats:

`30B`  
`30b`  
`30-B`  
`30-b`

These variations may still return the same address.
-->


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

<!--
**Searching by city offers the following benefits:**

- *Convenience*. Allows you to quickly select the required city from the list, and specify a certain street, house or intersection in the selected city without having to enter the full address. This saves time and simplifies the process of finding the right place.
- *Precision.* You can select a city and street from the available options, avoiding errors when manually entering an address.
- *Filtering.* The ability to select a specific house from the list makes it easier to accurately navigate to the required location, especially when the exact address is unknown.
--> 

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

![Postleitzahlsuche iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Um die *Postleitzahlsuche* zu verwenden, müssen Sie nur die Nummer eingeben**, die sogar aus einer einzigen Ziffer bestehen kann, und die Anwendung bietet eine Liste der verfügbaren relevanten Postleitzahlen an.

- Wählen Sie den gewünschten Code aus und tippen Sie darauf.
- Sie können die Funktion *Postleitzahl *Nummer* auf der Karte anzeigen* verwenden. Dies öffnet ein [Kartenkontextmenü](../map/map-context-menu.md#select-an-object-single-tap) mit der ausgewählten Postleitzahl ohne zusätzliche Informationen über den Standort.
- Sie können Ihre Suche nach diesem Code verfeinern, indem Sie zuerst die gewünschte Straße aus der Liste und dann die Nummer auswählen.

**Die Suche nach Postleitzahl kann in den folgenden Fällen nützlich sein:**

- Der Straßennamen existiert in mehreren Städten.
- Sie kennen die Postleitzahl, aber nicht die genaue Adresse.

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

[**Koordinatensuche**](../search/search-coordinates.md) ermöglicht es Ihnen, geografische Koordinaten wie Breiten- und Längengrad anzugeben, um einen bestimmten Ort zu finden. Sie liefert genaue Standorte auf einer Karte in verschiedenen [Koordinatenformaten](../search/search-coordinates.md#coordinate-format) und ermöglicht es Ihnen, zugehörige Informationen zu erhalten. Diese Funktion kann nützlich sein, wenn Sie keine Adresse oder keinen genauen Namen eines Ortes haben, und kann die Planung von Reisen und die Navigation an unbekannten Orten erleichtern.  


## Verwandte Artikel {#related-articles}

- [Alle durchsuchen](./search-all.md)
- [Suchverlauf](./search-history.md)
- [POI suchen](./search-poi.md)
- [Koordinaten suchen](./search-coordinates.md)